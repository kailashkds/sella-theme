/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const sallaListTileCss = "";

const SallaListTile = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.href = undefined;
    this.target = "_self";
  }
  generateClass() {
    return {
      "s-list-tile-item": true,
      "s-list-tile-item-href": !!this.href
    };
  }
  render() {
    return (h(Host, null, h("a", { class: this.generateClass(), href: this.href, target: this.target }, h("div", { class: "s-list-tile-item-icon" }, h("slot", { name: 'icon' })), h("div", { class: "s-list-tile-item-content" }, h("div", { class: "s-list-tile-item-title" }, h("slot", { name: 'title' })), h("div", { class: "s-list-tile-item-subtitle" }, h("slot", { name: "subtitle" }))), h("div", { class: "s-list-tile-item-action" }, h("slot", { name: 'action' })))));
  }
  static get style() { return sallaListTileCss; }
}, [4, "salla-list-tile", {
    "href": [1],
    "target": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-list-tile"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-list-tile":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaListTile);
      }
      break;
  } });
}

export { SallaListTile as S, defineCustomElement as d };

//# sourceMappingURL=salla-list-tile2.js.map