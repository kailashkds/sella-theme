/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const sallaSkeletonCss = ":host{display:block}";

const SallaSkeleton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.type = 'normal';
    this.width = '100%';
    this.height = '100%';
  }
  render() {
    const classes = {
      's-skeleton-item': true,
      's-skeleton-item-circular': this.type == 'circle',
    };
    return (h(Host, { class: "s-skeleton-wrapper", style: { width: this.width, height: this.height } }, h("div", { class: classes }, "\u00A0")));
  }
  static get style() { return sallaSkeletonCss; }
}, [0, "salla-skeleton", {
    "type": [1],
    "width": [1],
    "height": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-skeleton"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-skeleton":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaSkeleton);
      }
      break;
  } });
}

export { SallaSkeleton as S, defineCustomElement as d };

//# sourceMappingURL=salla-skeleton2.js.map