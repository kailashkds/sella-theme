/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './salla-button2.js';

const sallaCommentFormCss = ":host{display:block}";

const SallaCommentForm$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.type = undefined;
    this.showAvatar = undefined;
    this.itemId = undefined;
    this.placeholder = salla.lang.get('blocks.comments.placeholder');
    this.submitText = salla.lang.get('blocks.comments.submit');
    this.canComment = undefined;
    salla.lang.onLoaded(() => {
      this.placeholder = salla.lang.get('blocks.comments.placeholder');
      this.submitText = salla.lang.get('blocks.comments.submit');
    });
    salla.onReady(() => {
      this.canComment = salla.config.get('user.can_comment');
      this.itemId = salla.config.get('page.id');
      this.type = salla.url.is_page('page-single') ? 'page' : 'product';
    });
  }
  submit() {
    if (!this.commentForm.reportValidity()) {
      salla.log('CommentForm:: validation error!');
      return;
    }
    this.submitBtn.load()
      .then(() => salla.comment.add({ id: this.itemId, comment: this.commentField.value, type: this.type }))
      .finally(() => this.submitBtn.stop);
  }
  render() {
    return (h(Host, null, !!this.canComment ? h("form", { ref: frm => this.commentForm = frm }, h("div", { class: "s-comment-form-wrapper" }, this.showAvatar ?
      h("img", { class: "s-comment-form-avatar", src: salla.config.get('user.avatar'), alt: "user avatar" }) : '', h("div", { class: "s-comment-form-content" }, h("textarea", { cols: 30, rows: 5, minlength: "4", maxlength: "500", ref: field => this.commentField = field, placeholder: this.placeholder, class: "s-comment-form-input", required: true }), h("br", null), h("div", { class: "s-comment-form-action" }, h("salla-button", { ref: btn => this.submitBtn = btn, "loader-position": 'center', onClick: () => this.submit() }, this.submitText))))) : ''));
  }
  static get style() { return sallaCommentFormCss; }
}, [0, "salla-comment-form", {
    "type": [1537],
    "showAvatar": [4, "show-avatar"],
    "itemId": [1544, "item-id"],
    "placeholder": [32],
    "submitText": [32],
    "canComment": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-comment-form", "salla-button"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-comment-form":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaCommentForm$1);
      }
      break;
    case "salla-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const SallaCommentForm = SallaCommentForm$1;
const defineCustomElement = defineCustomElement$1;

export { SallaCommentForm, defineCustomElement };

//# sourceMappingURL=salla-comment-form.js.map