/*!
 * Crafted with ❤ by Salla
 */
import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const sallaCountDownCss = "";

const SallaCountDown = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.date = undefined;
    this.boxed = undefined;
    this.size = 'md';
    this.color = 'dark';
    this.labeled = undefined;
    this.endText = undefined;
    this.digits = 'auto';
    this.endOfDay = undefined;
    this.daysLabel = undefined;
    this.hoursLabel = undefined;
    this.minutesLabel = undefined;
    this.secondsLabel = undefined;
    this.endLabel = undefined;
    this.invalidDate = undefined;
    this.offerEnded = false;
    this.countInterval = undefined;
    this.days = undefined;
    this.hours = undefined;
    this.minutes = undefined;
    this.seconds = undefined;
    this.days = this.number(0);
    this.hours = this.number(0);
    this.minutes = this.number(0);
    this.seconds = this.number(0);
    salla.lang.onLoaded(() => {
      this.daysLabel = salla.lang.get('pages.checkout.day');
      this.hoursLabel = salla.lang.get('pages.checkout.hour');
      this.minutesLabel = salla.lang.get('pages.checkout.minute');
      this.invalidDate = salla.lang.get('blocks.buy_as_gift.incorrect_date');
      this.secondsLabel = salla.lang.get('pages.checkout.second');
      this.endLabel = salla.lang.get('pages.checkout.offer_ended');
    });
    if (this.date && this.isValidDate(this.date)) {
      this.startCountDown();
    }
  }
  /**
   * End the count down
   * */
  async endCountDown() {
    clearInterval(this.countInterval);
    this.offerEnded = true;
    this.days = this.number(0);
    this.hours = this.number(0);
    this.minutes = this.number(0);
    this.seconds = this.number(0);
  }
  isValidDate(date) {
    let dateHasDashes = date.includes('-'), dateParts = date.split(' '), testedDate;
    if (dateHasDashes) {
      testedDate = dateParts[0].replace(/-/g, '/');
    }
    else {
      testedDate = dateParts[0];
    }
    return !isNaN(Date.parse(testedDate));
  }
  number(digit) {
    return salla.helpers.number(digit, this.digits === 'en');
  }
  startCountDown() {
    let countDownDate = new Date(this.date.replace(/-/g, "/"));
    if (this.endOfDay || this.date.split(' ').length === 1) {
      countDownDate.setHours(23, 59, 59, 999);
    }
    let countDownTime = countDownDate.getTime();
    this.countInterval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownTime - now;
      this.days = this.number(Math.floor(distance / (1000 * 60 * 60 * 24)));
      this.hours = this.number(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutes = this.number(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      this.seconds = this.number(Math.floor((distance % (1000 * 60)) / 1000));
      if (distance < 0) {
        this.endCountDown();
      }
    }, 1000);
  }
  render() {
    if (!this.date) {
      return "";
    }
    else if (this.date && !this.isValidDate(this.date)) {
      return h("div", { class: "s-count-down-text-center" }, this.invalidDate);
    }
    return (h(Host, { class: "s-count-down-wrapper" }, h("ul", { class: `s-count-down-list ${this.boxed ? 's-count-down-boxed' : ''} ${this.offerEnded ? 's-count-down-ended' : ''} s-count-down-${this.size} s-count-down-${this.color}` }, h("li", { class: "s-count-down-item" }, h("div", { class: "s-count-down-item-value" }, this.seconds), this.labeled && h("div", { class: "s-count-down-item-label" }, this.secondsLabel)), h("li", { class: "s-count-down-item" }, h("div", { class: "s-count-down-item-value" }, this.minutes), this.labeled && h("div", { class: "s-count-down-item-label" }, this.minutesLabel)), h("li", { class: "s-count-down-item" }, h("div", { class: "s-count-down-item-value" }, this.hours), this.labeled && h("div", { class: "s-count-down-item-label" }, this.hoursLabel)), h("li", { class: "s-count-down-item" }, h("div", { class: "s-count-down-item-value" }, this.days), this.labeled && h("div", { class: "s-count-down-item-label" }, this.daysLabel))), this.offerEnded && h("div", { class: "s-count-down-end-text" }, !!this.endText ? this.endText : this.endLabel)));
  }
  static get style() { return sallaCountDownCss; }
}, [0, "salla-count-down", {
    "date": [1],
    "boxed": [4],
    "size": [1],
    "color": [1],
    "labeled": [4],
    "endText": [1, "end-text"],
    "digits": [1],
    "endOfDay": [4, "end-of-day"],
    "daysLabel": [32],
    "hoursLabel": [32],
    "minutesLabel": [32],
    "secondsLabel": [32],
    "endLabel": [32],
    "invalidDate": [32],
    "offerEnded": [32],
    "countInterval": [32],
    "days": [32],
    "hours": [32],
    "minutes": [32],
    "seconds": [32],
    "endCountDown": [64]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["salla-count-down"];
  components.forEach(tagName => { switch (tagName) {
    case "salla-count-down":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SallaCountDown);
      }
      break;
  } });
}

export { SallaCountDown as S, defineCustomElement as d };

//# sourceMappingURL=salla-count-down2.js.map