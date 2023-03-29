/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const sallaTabContentCss = "";

const SallaTabContent = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.name = undefined;
    this.isSelected = false;
  }
  /**
   * Expose self for the parent.
   */
  async getChild() {
    return {
      selected: this.selected.bind(this),
      unselect: this.unselect.bind(this),
      name: this.name
    };
  }
  unselect() {
    this.isSelected = false;
  }
  selected() {
    this.isSelected = true;
  }
  render() {
    const classes = {
      's-tabs-content': true,
      's-tabs-content-selected': this.isSelected
    };
    return (h("div", { class: classes }, h("slot", null)));
  }
  static get style() { return sallaTabContentCss; }
}, [4, "salla-tab-content", {
    "name": [1],
    "isSelected": [32],
    "getChild": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-tab-content"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-tab-content":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaTabContent);
      }
      break;
  } });
}

export { SallaTabContent as S, defineCustomElement as d };

//# sourceMappingURL=salla-tab-content2.js.map