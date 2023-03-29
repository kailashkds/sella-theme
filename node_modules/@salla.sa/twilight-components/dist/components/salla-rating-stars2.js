/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { R as Rate } from './star2.js';
import { H as Helper } from './Helper.js';

const sallaRatingStarsCss = "";

const SallaRatingStars = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.name = 'rating';
    this.size = 'medium';
    this.value = undefined;
    this.reviews = 0;
    salla.lang.onLoaded(() => {
      this.reviewsElement && (this.reviewsElement.innerText = `(${salla.helpers.number(salla.lang.choice('pages.rating.reviews', this.reviews))})`);
    });
  }
  initiateRating() {
    this.host.addEventListener('click', () => {
      if (!this.startsElem)
        return;
      // Get the selected star - activeElement is not supported in safari
      let activeStars = this.startsElem.querySelectorAll('.s-rating-stars-hovered');
      let selected = activeStars[activeStars.length - 1];
      if (!selected)
        return;
      let selectedIndex = selected.getAttribute('data-star');
      this.startsElem.querySelector('.rating_hidden_input').value = selectedIndex;
      // Loop through each star, and add or remove the `.selected` class to toggle highlighting
      this.startsElem.querySelectorAll('.s-rating-stars-btn-star')
        .forEach((star, index) => Helper.toggleElementClassIf(star, 's-rating-stars-selected', 's-rating-stars-unselected', () => index < parseInt(selectedIndex)));
      // update aria-pressed attr status
      this.startsElem.querySelectorAll('[aria-pressed]').forEach(star => star.removeAttribute('aria-pressed'));
      selected.setAttribute('aria-pressed', 'true');
    });
  }
  highlightSelectedStars() {
    var _a, _b;
    let hoveredClass = 's-rating-stars-hovered', stars = (_a = this.startsElem) === null || _a === void 0 ? void 0 : _a.querySelectorAll('.s-rating-stars-btn-star');
    stars === null || stars === void 0 ? void 0 : stars.forEach((star, index) => {
      star.addEventListener('mouseover', () => {
        for (let i = 0; i <= index; i++) {
          stars[i].classList.add(hoveredClass);
        }
      });
      star.addEventListener('mouseout', () => star.classList.remove(hoveredClass));
    });
    (_b = this.startsElem) === null || _b === void 0 ? void 0 : _b.addEventListener('mouseout', () => stars.forEach(star => star.classList.remove(hoveredClass)));
  }
  createStars(n) {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(h("span", { class: {
          's-rating-stars-btn-star': true,
          ['s-rating-stars-' + this.size]: true,
          's-rating-stars-selected': i < n
        }, innerHTML: Rate }));
    }
    if (this.reviews > 0) {
      stars.push(h("span", { class: "s-rating-stars-reviews", ref: el => this.reviewsElement = el }, "(", salla.helpers.number(salla.lang.choice('pages.rating.reviews', this.reviews)), ")"));
    }
    return stars;
  }
  render() {
    var _a;
    //TODO:: find a better fix, this is a patch for issue that duplicates the stars twice @see the screenshot inside this folder
    return ((_a = this.host.closest('.swiper-slide')) === null || _a === void 0 ? void 0 : _a.classList.contains('swiper-slide-duplicate'))
      ? ''
      : (h(Host, null, this.value || this.value == 0 ?
        h("div", { class: "s-rating-stars-wrapper" }, " ", this.createStars(this.value), " ")
        :
          h("div", { class: "s-rating-stars-element", ref: (el) => this.startsElem = el }, h("input", { type: "hidden", class: "rating_hidden_input", name: this.name, value: "" }), [1, 2, 3, 4, 5].map(star => h("button", { class: `s-rating-stars-btn-star s-rating-stars-` + this.size, "data-star": star }, h("span", { innerHTML: Rate }))))));
  }
  componentDidLoad() {
    this.initiateRating();
    this.highlightSelectedStars();
  }
  get host() { return this; }
  static get style() { return sallaRatingStarsCss; }
}, [0, "salla-rating-stars", {
    "name": [1],
    "size": [1],
    "value": [2],
    "reviews": [2]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-rating-stars"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-rating-stars":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaRatingStars);
      }
      break;
  } });
}

export { SallaRatingStars as S, defineCustomElement as d };

//# sourceMappingURL=salla-rating-stars2.js.map