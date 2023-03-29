/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

function generateRandomId() {
  return Math.random().toString(36).slice(2, 10);
}

const sallaTabHeaderCss = "";

const SallaTabHeader = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.tabSelected = createEvent(this, "tabSelected", 7);
    this.id = generateRandomId();
    this.name = undefined;
    this.activeClass = undefined;
    this.height = undefined;
    this.centered = false;
    this.isSelected = false;
  }
  /**
   * Expose self for the parent.
   */
  async getChild() {
    return {
      selected: this.selected.bind(this),
      unselect: this.unselect.bind(this),
      name: this.name,
      id: this.id
    };
  }
  unselect() {
    this.isSelected = false;
  }
  selected() {
    this.isSelected = true;
  }
  onClick() {
    this.getChild().then(child => {
      this.tabSelected.emit(child);
    });
  }
  render() {
    const classes = {
      's-tabs-header-item': true,
      's-tabs-bg-normal': true,
      's-tabs-active': this.isSelected,
    };
    return [
      h("div", { class: classes, onClick: this.onClick.bind(this) }, h("slot", null)),
    ];
  }
  static get style() { return sallaTabHeaderCss; }
}, [4, "salla-tab-header", {
    "name": [1],
    "activeClass": [1, "active-class"],
    "height": [8],
    "centered": [4],
    "isSelected": [32],
    "getChild": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-tab-header"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-tab-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaTabHeader);
      }
      break;
  } });
}

export { SallaTabHeader as S, defineCustomElement as d };

//# sourceMappingURL=salla-tab-header2.js.map