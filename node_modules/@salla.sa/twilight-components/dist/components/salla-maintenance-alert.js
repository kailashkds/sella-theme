/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { C as Cancel } from './cancel.js';

const sallaMaintenanceAlertCss = ".s-maintenance-alert-wrapper{display:-ms-flexbox;display:flex;min-height:40px;width:100%;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(26, 38, 61, var(--tw-bg-opacity));padding:0.25rem 0.5rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.s-maintenance-alert-wrapper a{-webkit-transition:0.35s cubic-bezier(0.2, 1, 0.3, 1);transition:0.35s cubic-bezier(0.2, 1, 0.3, 1)}.s-maintenance-alert-wrapper *{color:inherit}@media (min-width: 640px){.s-maintenance-alert-wrapper{padding-left:2rem;padding-right:2rem}}.s-maintenance-alert-content{margin-top:1rem;margin-bottom:1rem;display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}@media (min-width: 640px){.s-maintenance-alert-content{padding-left:2rem;padding-right:2rem}}.s-maintenance-alert-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.s-maintenance-alert-icon{margin-right:1.25rem;display:none}@media (min-width: 640px){.s-maintenance-alert-icon{display:block}}.s-maintenance-alert-text h2{margin-bottom:0.5rem;font-size:0.875rem;font-weight:700;line-height:1.4}@media (min-width: 640px){.s-maintenance-alert-text h2{font-size:1.5rem;line-height:2rem}}.s-maintenance-alert-text p{margin:0px;text-align:right;font-size:10px;line-height:1.2}@media (min-width: 640px){.s-maintenance-alert-text p{text-align:center;font-size:0.75rem;line-height:1}}.s-maintenance-alert-btn{position:relative;margin-left:4px;margin-right:4px;display:inline-block;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;border-radius:0.125rem;border-width:1px;--tw-border-opacity:1;border-color:rgba(93, 213, 196, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(93, 213, 196, var(--tw-bg-opacity));padding:0.5rem;text-align:center;vertical-align:middle;font-size:0.875rem;font-weight:400;line-height:1.4;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.s-maintenance-alert-btn:hover{--tw-bg-opacity:1;background-color:rgba(53, 203, 181, var(--tw-bg-opacity))}.s-maintenance-alert-btn *{pointer-events:none}[dir=rtl] .s-maintenance-alert-btn{margin-left:1.25rem;margin-right:0}@media (min-width: 640px){.s-maintenance-alert-btn{padding:0.5rem 1rem}}";

const SallaMaintenanceAlert$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.title = undefined;
    this.message = undefined;
    this.buttonTitle = undefined;
  }
  componentWillLoad() {
    this.title = salla.config.get('maintenance_details.title');
    this.message = salla.config.get('maintenance_details.message');
    this.buttonTitle = window.innerWidth <= 768 ? salla.config.get('maintenance_details.button_title') : salla.config.get('maintenance_details.button_full_title');
  }
  closeAlert() {
    salla.storage.set('hide_salla-maintenance-alert_at', Date.now());
    this.host.style.display = 'none';
  }
  render() {
    return (h(Host, { class: "s-maintenance-alert-wrapper" }, h("button", { class: "s-maintenance-alert-close", innerHTML: Cancel, onClick: () => this.closeAlert() }), h("div", { class: "s-maintenance-alert-content" }, h("div", { class: "s-maintenance-alert-container" }, h("div", { class: "s-maintenance-alert-icon" }, h("img", { src: salla.url.cdn('images/alert.png'), alt: "Alert" })), h("div", { class: "s-maintenance-alert-text" }, h("h2", null, this.title), h("p", null, this.message))), h("div", null, h("a", { class: "s-maintenance-alert-btn", href: salla.config.get('maintenance_details.button_url') }, this.buttonTitle)))));
  }
  componentDidLoad() {
    //auto-hide the alert if close button is clicked before one hour
    let hidden_at = salla.storage.get('hide_salla-maintenance-alert_at');
    if (hidden_at && ((Date.now() - hidden_at) / 1000 / 60) < 60) {
      this.closeAlert();
    }
  }
  get host() { return this; }
  static get style() { return sallaMaintenanceAlertCss; }
}, [0, "salla-maintenance-alert", {
    "title": [32],
    "message": [32],
    "buttonTitle": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-maintenance-alert"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-maintenance-alert":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaMaintenanceAlert$1);
      }
      break;
  } });
}

const SallaMaintenanceAlert = SallaMaintenanceAlert$1;
const defineCustomElement = defineCustomElement$1;

export { SallaMaintenanceAlert, defineCustomElement };

//# sourceMappingURL=salla-maintenance-alert.js.map