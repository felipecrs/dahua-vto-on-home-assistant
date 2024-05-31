import{cF as e,d0 as t,d1 as n,d2 as i,bF as a,bG as o,bI as s,s as r,cr as c,y as l,l as u,cw as p,cv as h,bE as d,cU as m}from"./card-3c450f9e.js";function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function f(a,o){if(e(2,arguments),!o||"object"!==y(o))return new Date(NaN);var s=o.years?n(o.years):0,r=o.months?n(o.months):0,c=o.weeks?n(o.weeks):0,l=o.days?n(o.days):0,u=o.hours?n(o.hours):0,p=o.minutes?n(o.minutes):0,h=o.seconds?n(o.seconds):0,d=function(t,a){e(2,arguments);var o=n(a);return i(t,-o)}(a,r+12*s),m=function(i,a){e(2,arguments);var o=n(a);return t(i,-o)}(d,l+7*c),f=1e3*(h+60*(p+60*u));return new Date(m.getTime()-f)}let b=class extends r{constructor(){super(...arguments),this._refInput=c()}get value(){return this._refInput.value?.value?new Date(this._refInput.value.value):null}reset(){this._refInput.value&&(this._refInput.value.value="")}render(){const e=()=>{const e=this._refInput.value?.value;m(this,"date-picker:change",{date:e?new Date(e):null})};return l`<input
        aria-label="${u("timeline.select_date")}"
        title="${u("timeline.select_date")}"
        ${p(this._refInput)}
        type="datetime-local"
        @input=${()=>e()}
        @change=${()=>e()}
      />
      <ha-icon
        aria-label="${u("timeline.select_date")}"
        title="${u("timeline.select_date")}"
        .icon=${this.icon??"mdi:calendar-search"}
        @click=${e=>{h(e),this._refInput.value?.showPicker()}}
      >
      </ha-icon>`}static get styles(){return d(":host {\n  display: inline-block;\n  position: relative;\n  width: var(--mdc-icon-size, 24px);\n  height: var(--mdc-icon-size, 24px);\n}\n\ninput {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  padding: 0px;\n  border: 0px;\n}\n\n/**\n * Hack warning: Safari on iOS does not support showPicker with\n * datetime-local:\n * https://caniuse.com/mdn-api_htmlinputelement_showpicker_datetime_local_input\n *\n * The hack is to render the input element in front of the icon, with an\n * opacity of 0. This only works if the underlying input element accepts the\n * click at the exact place the user happens to click. From trial and error,\n * this seems to work better than expected / quite reliably, but had the user\n * manually changed icon sizes with Safari iOS their experience may vary.\n */\n@supports (-webkit-touch-callout: none) {\n  input {\n    opacity: 0;\n    z-index: 1;\n  }\n}\n@supports not (-webkit-touch-callout: none) {\n  input {\n    visibility: hidden;\n  }\n}\nha-icon {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n}")}};a([o({attribute:!1})],b.prototype,"icon",void 0),b=a([s("frigate-card-date-picker")],b);export{b as F,f as s};
