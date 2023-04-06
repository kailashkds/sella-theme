/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { S as Search } from './search.js';
import { H as Helper } from './Helper.js';
import { d as defineCustomElement$3 } from './salla-loading2.js';
import { d as defineCustomElement$2 } from './salla-modal2.js';

const sallaSearchCss = "";

const SallaSearch$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    var _a;
    this.inputValue = '';
    this.translationLoaded = false;
    this.results = undefined;
    this.loading = false;
    this.typing = false;
    this.debounce = setTimeout(() => '', 1000);
    this.search_term = undefined;
    this.inline = false;
    this.oval = false;
    this.height = 60;
    this.productSlot = ((_a = this.host.querySelector('[slot="product"]')) === null || _a === void 0 ? void 0 : _a.innerHTML) || this.getDefaultProductSlot();
    salla.event.on('search::open', () => this.open());
    salla.lang.onLoaded(() => {
      this.translationLoaded = true;
    });
    salla.event.on('modalClosed', () => this.onModalClose());
  }
  async open() {
    if (!this.inline) {
      await this.modal.open().then(() => setTimeout(() => this.searchInput.focus(), 300));
    }
  }
  onModalClose() {
    this.searchInput.value = '';
    this.results = undefined;
    this.afterSearching();
    this.container.classList.remove('s-search-no-results');
  }
  handleKeyDown(ev) {
    var _a;
    if (ev.key === 'Enter' && ((_a = this.search_term) === null || _a === void 0 ? void 0 : _a.length)) {
      window.location.href = salla.url.get('search?q=' + encodeURI(this.search_term));
    }
  }
  getDefaultProductSlot() {
    return '<div class="s-search-product-image-container">' +
      '  <img class="s-search-product-image" src="{image}" alt="{name}"/>' +
      '</div>' +
      '<div class="s-search-product-details">' +
      '  <div class="s-search-product-title">{name}</div> <div class="s-search-product-price">{price} <span class="s-search-product-regular-price">{regular_price}</span></div>' +
      '</div>';
  }
  debounceSearch(event) {
    this.typing = true;
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.typing = false;
      this.search_term = event.target.value;
    }, 700);
  }
  handleSearch(val) {
    this.inputValue = val;
    if (val.length > 2) {
      this.search(val);
    }
    else {
      this.results = undefined;
      this.afterSearching();
    }
  }
  search(val) {
    this.noResults.style.display = 'none';
    //run loading spinner or stop it
    this.loading = true;
    salla.product.fetch({ source: "search", source_value: val })
      .then(response => this.results = response)
      .catch(err => err !== 'Query is same as previous one!' ? this.results = undefined : null)
      .finally(() => this.afterSearching(/*isEmpty*/ false));
  }
  afterSearching(isEmpty = true) {
    var _a;
    this.noResults.style.display = isEmpty || ((_a = this.results) === null || _a === void 0 ? void 0 : _a.data.length) > 0 ? 'none' : 'block';
    Helper.toggleElementClassIf(this.container, 's-search-container-open', 's-search-no-results', () => { var _a; return (_a = this.results) === null || _a === void 0 ? void 0 : _a.data.length; });
    this.loading = false;
    salla.product.api.previousQuery = ''; //avoid having error 'Query is same as previous one!' after reopen modal;
    this.inputValue.length < 3 ? this.container.classList.remove('s-search-no-results') : '';
  }
  render() {
    var _a;
    const searchContent = h("div", { class: { 's-search-container': true, 's-search-inline': this.inline }, ref: container => this.container = container }, h("input", { type: "search", enterkeyhint: "search", autocomplete: "off", class: "s-search-input", placeholder: salla.lang.get('blocks.header.search_placeholder'), onInput: e => this.debounceSearch(e), onKeyDown: e => this.handleKeyDown(e), ref: input => this.searchInput = input, style: { height: this.height + 'px', borderRadius: this.oval ? this.height / 2 + 'px' : '' } }), h("span", { class: "s-search-icon-wrap" }, h("span", { class: "s-search-icon", innerHTML: this.loading ? '<i class="s-search-spinner-loader"/>' : Search })), h("div", { class: "s-search-results" }, (_a = this.results) === null || _a === void 0 ? void 0 :
      _a.data.map((product) => h("a", { href: product.url, class: { "s-search-product": true, 's-search-product-not-available': !product.is_available }, innerHTML: this.productSlot
          .replace(/\{name\}/g, product.name)
          .replace(/\{price\}/g, salla.money(product.price))
          .replace(/\{regular_price\}/g, product.is_on_sale ? salla.money(product.regular_price) : '')
          .replace(/\{image\}/g, product.image.url) })), h("p", { ref: el => this.noResults = el, class: "s-search-no-results-placeholder" }, salla.lang.get('common.elements.no_options'))));
    return (this.inline ?
      h("div", { class: "s-search-modal" }, searchContent)
      :
        h("salla-modal", { position: "top", class: "s-search-modal", ref: modal => this.modal = modal }, searchContent));
  }
  /**
   * Run it one time after load
   */
  componentDidLoad() {
    this.afterSearching();
  }
  get host() { return this; }
  static get watchers() { return {
    "search_term": ["handleSearch"]
  }; }
  static get style() { return sallaSearchCss; }
}, [0, "salla-search", {
    "inline": [4],
    "oval": [4],
    "height": [2],
    "translationLoaded": [32],
    "results": [32],
    "loading": [32],
    "typing": [32],
    "debounce": [32],
    "search_term": [32]
  }, [[0, "keydown", "handleKeyDown"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-search", "salla-loading", "salla-modal"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-search":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaSearch$1);
      }
      break;
    case "salla-loading":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "salla-modal":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const SallaSearch = SallaSearch$1;
const defineCustomElement = defineCustomElement$1;

export { SallaSearch, defineCustomElement };

//# sourceMappingURL=salla-search.js.map