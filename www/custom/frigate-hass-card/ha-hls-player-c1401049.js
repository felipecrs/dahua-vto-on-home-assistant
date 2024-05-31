import{dl as e,ci as t,cQ as i,y as s,dq as o,dr as r,ds as a,dt as n,bE as d,du as l,bF as h,bI as u}from"./card-3c450f9e.js";import{m as c}from"./audio-557099cb.js";import{h as v,s as y,M as p}from"./title-control-762f9db4.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=({finisher:e,descriptor:t})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,r=null!=t?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:{...i,key:s};return null!=e&&(r.finisher=function(t){e(t,s)}),r}{const o=i.constructor;void 0!==t&&Object.defineProperty(i,s,t(s)),null==e||e(o,s)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function f(e,t){return m({descriptor:i=>{const s={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[t]&&(this[t]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==s?s:null),this[t]}}return s}})}var _="img, video {\n  object-fit: var(--frigate-card-media-layout-fit, contain);\n  object-position: var(--frigate-card-media-layout-position-x, 50%) var(--frigate-card-media-layout-position-y, 50%);\n}";customElements.whenDefined("ha-hls-player").then((()=>{let m=class extends(customElements.get("ha-hls-player")){async play(){return this._video?.play()}async pause(){this._video?.pause()}async mute(){this._video&&(this._video.muted=!0)}async unmute(){this._video&&(this._video.muted=!1)}isMuted(){return this._video?.muted??!0}async seek(e){this._video&&(v(this._video),this._video.currentTime=e)}async setControls(e){this._video&&y(this._video,e??this.controls)}isPaused(){return this._video?.paused??!0}async getScreenshotURL(){return this._video?e(this._video):null}render(){if(this._error){if(this._errorIsFatal)return t(this,this._error);i(this._error,console.error)}return s`
        <video
          id="video"
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadedmetadata=${()=>{this.controls&&v(this._video,p)}}
          @loadeddata=${e=>{o(this,e,{player:this,capabilities:{supportsPause:!0,hasAudio:c(this._video)}})}}
          @volumechange=${()=>r(this)}
          @play=${()=>a(this)}
          @pause=${()=>n(this)}
        ></video>
      `}static get styles(){return[super.styles,d(_),l`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};h([f("#video")],m.prototype,"_video",void 0),m=h([u("frigate-card-ha-hls-player")],m)}));export{_ as c,f as i};
