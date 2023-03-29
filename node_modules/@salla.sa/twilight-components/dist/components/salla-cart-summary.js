/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { P as PendingOrdersIcon } from './cart.js';
import { a as anime } from './anime.es.js';

const sallaCartSummaryCss = "";

const SallaCartSummary$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.cartSummaryCount = salla.storage.get('cart.summary.count') || 0;
    this.cartSummaryTotal = salla.storage.get('cart.summary.total') || 0;
    this.cartLabel = salla.config.get('user.language_code') === 'ar' ? 'السلة' : 'Cart';
    this.showCartLabel = undefined;
    salla.cart.event.onUpdated((response) => {
      this.cartSummaryCount = response.count || 0;
      this.cartSummaryTotal = response.total || 0;
    });
  }
  /**
   * Animate product Image to cart summary
   * @param image the image element to animate
   */
  async animateToCart(image) {
    document.querySelectorAll('.s-cart-thumb').forEach(el => el.remove());
    if (!(image === null || image === void 0 ? void 0 : image.src)) {
      salla.log('Failed to get the img element');
      return;
    }
    let cartBtn = this.host.querySelector('#s-cart-icon'), btnOffset = cartBtn.getBoundingClientRect(), btnTop = btnOffset.top + window.scrollY, btnLeft = btnOffset.left + window.scrollX;
    // get thumb position ---
    let position = image.getBoundingClientRect(), width = image.offsetWidth + 'px', height = image.offsetHeight + 'px', top = position.top, left = position.left;
    // create thumb img element ---
    let img = document.createElement("img");
    img.src = image.getAttribute('src');
    img.className = "s-cart-thumb";
    img.setAttribute("style", "object-fit:cover; width:" + width + '; height:' + height + '; top:' + top + 'px; left:' + left + 'px;z-index:99999999; ');
    document.body.append(img);
    let cartThumb = document.querySelector('.s-cart-thumb');
    cartBtn.classList.remove('animated', 'rubberBand');
    // start timeline ---
    let cartThumbAnime = new anime.timeline();
    cartThumbAnime.add({
      targets: cartThumb,
      width: [150, 30],
      height: [150, 30],
      top: [top, window.scrollY > 0 ? btnTop - window.scrollY - 40 : btnTop - 40],
      left: [left, btnLeft],
      borderRadius: ['20%', '50%'],
      easing: 'easeOutExpo',
      duration: 1200,
    }, '+=200')
      .add({
      targets: cartThumb,
      width: [30, 0],
      height: [30, 0],
      opacity: [1, 0],
      easing: 'easeOutExpo',
      top: [window.scrollY > 0 ? btnTop - window.scrollY - 40 : btnTop - 40, window.scrollY > 0 ? btnTop - window.scrollY + 10 : btnTop + 10],
      left: [btnLeft, btnLeft + 10],
    }, '-=500')
      .add({
      complete: function () {
        cartBtn.classList.add('animated', 'rubberBand');
        cartThumb.remove();
      },
    }, '-=1700');
  }
  render() {
    return (h(Host, null, h("a", { class: "s-cart-summary-wrapper", href: salla.url.get('cart') }, h("div", { id: "s-cart-icon" }, h("slot", { name: "icon" }, h("i", { class: "s-cart-summary-icon", innerHTML: PendingOrdersIcon }))), h("span", { class: "s-cart-summary-count" }, salla.helpers.number(this.cartSummaryCount)), h("p", { class: "s-cart-summary-content" }, this.showCartLabel && h("span", { class: "s-cart-summary-label" }, this.cartLabel), h("b", { class: "s-cart-summary-total" }, salla.money(this.cartSummaryTotal))))));
  }
  get host() { return this; }
  static get style() { return sallaCartSummaryCss; }
}, [4, "salla-cart-summary", {
    "showCartLabel": [4, "show-cart-label"],
    "cartSummaryCount": [32],
    "cartSummaryTotal": [32],
    "cartLabel": [32],
    "animateToCart": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-cart-summary"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-cart-summary":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaCartSummary$1);
      }
      break;
  } });
}

const SallaCartSummary = SallaCartSummary$1;
const defineCustomElement = defineCustomElement$1;

export { SallaCartSummary, defineCustomElement };

//# sourceMappingURL=salla-cart-summary.js.map