import{dh as t,cK as e,d5 as i,x as s,dl as o,dm as a,dn as r,dp as d,r as n,eo as h,_ as l,t as u}from"./card-50712226.js";import{m as c}from"./audio-cf3a75aa.js";import{h as v,s as y,b as m}from"./media-actions-controller-d998be32.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function f(t,e){return(i,s,o)=>{const a=e=>e.renderRoot?.querySelector(t)??null;if(e){const{get:t,set:e}="object"==typeof s?i:o??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return p(i,s,{get(){let i=t.call(this);return void 0===i&&(i=a(this),(null!==i||this.hasUpdated)&&e.call(this,i)),i}})}return p(i,s,{get(){return a(this)}})}}var _="img,\nvideo {\n  object-fit: var(--frigate-card-media-layout-fit, contain);\n  object-position: var(--frigate-card-media-layout-position-x, 50%) var(--frigate-card-media-layout-position-y, 50%);\n  object-view-box: inset(var(--frigate-card-media-layout-view-box-top, 0%) var(--frigate-card-media-layout-view-box-right, 0%) var(--frigate-card-media-layout-view-box-bottom, 0%) var(--frigate-card-media-layout-view-box-left, 0%));\n}";customElements.whenDefined("ha-hls-player").then((()=>{let p=class extends(customElements.get("ha-hls-player")){async play(){return this._video?.play()}async pause(){this._video?.pause()}async mute(){this._video&&(this._video.muted=!0)}async unmute(){this._video&&(this._video.muted=!1)}isMuted(){return this._video?.muted??!0}async seek(t){this._video&&(v(this._video),this._video.currentTime=t)}async setControls(t){this._video&&y(this._video,t??this.controls)}isPaused(){return this._video?.paused??!0}async getScreenshotURL(){return this._video?t(this._video):null}render(){if(this._error){if(this._errorIsFatal)return e(this,this._error);i(this._error,console.error)}return s`
        <video
          id="video"
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadedmetadata=${()=>{this.controls&&v(this._video,m)}}
          @loadeddata=${t=>{o(this,t,{player:this,capabilities:{supportsPause:!0,hasAudio:c(this._video)},technology:["hls"]})}}
          @volumechange=${()=>a(this)}
          @play=${()=>r(this)}
          @pause=${()=>d(this)}
        ></video>
      `}static get styles(){return[super.styles,n(_),h`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};l([f("#video")],p.prototype,"_video",void 0),p=l([u("frigate-card-ha-hls-player")],p)}));export{_ as c,f as e};
