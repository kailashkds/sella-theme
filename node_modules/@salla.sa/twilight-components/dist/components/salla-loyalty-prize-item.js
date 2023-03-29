/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const sallaLoyaltyPrizeItemCss = "salla-loyalty-prize-item:hover{-webkit-box-shadow:0 5px 15px 1px rgba(0, 0, 0, 0.04) !important;box-shadow:0 5px 15px 1px rgba(0, 0, 0, 0.04) !important}";

const SallaLoyaltyPrizeItem$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.prizeItemSelected = createEvent(this, "prizeItemSelected", 7);
    this.item = undefined;
  }
  onPrizeItemClick() {
    this.prizeItemSelected.emit(this.item);
  }
  render() {
    return (h(Host, null, h("div", { onClick: this.onPrizeItemClick.bind(this) }, h("img", { class: "s-loyalty-prize-item-image", src: this.item.image, alt: this.item.name }), h("div", { class: "s-loyalty-prize-item-title" }, this.item.name), h("div", { class: "s-loyalty-prize-item-subtitle" }, this.item.description), h("div", { class: "s-loyalty-prize-item-points" }, this.item.cost_points, " Points"))));
  }
  static get style() { return sallaLoyaltyPrizeItemCss; }
}, [0, "salla-loyalty-prize-item", {
    "item": [16]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-loyalty-prize-item"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-loyalty-prize-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaLoyaltyPrizeItem$1);
      }
      break;
  } });
}

const SallaLoyaltyPrizeItem = SallaLoyaltyPrizeItem$1;
const defineCustomElement = defineCustomElement$1;

export { SallaLoyaltyPrizeItem, defineCustomElement };

//# sourceMappingURL=salla-loyalty-prize-item.js.map