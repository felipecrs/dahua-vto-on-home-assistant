import{di as e,cL as t,x as s,dm as a,dn as r,dp as i,dq as o,r as h,ep as n,_ as l,t as u,a as c,cP as d,cZ as y,l as p,cU as m,n as _}from"./card-98f237c0.js";import{c as v,e as g}from"./ha-hls-player-cf8578ae.js";import{m as f}from"./audio-cf3a75aa.js";import{s as $,h as b,b as w}from"./media-actions-controller-7e8eef55.js";import{g as R}from"./live-1bd1c4f8.js";import"./surround-130a1f2a.js";import"./surround-basic-7ea183cd.js";customElements.whenDefined("ha-web-rtc-player").then((()=>{let c=class extends(customElements.get("ha-web-rtc-player")){async play(){return this._video?.play()}async pause(){this._video?.pause()}async mute(){this._video&&(this._video.muted=!0)}async unmute(){this._video&&(this._video.muted=!1)}isMuted(){return this._video?.muted??!0}async seek(e){this._video&&(this._video.currentTime=e)}async setControls(e){this._video&&$(this._video,e??this.controls)}isPaused(){return this._video?.paused??!0}async getScreenshotURL(){return this._video?e(this._video):null}render(){return this._error?t(this,`${this._error} (${this.entityid})`):s`
        <video
          id="remote-stream"
          ?autoplay=${this.autoPlay}
          .muted=${this.muted}
          ?playsinline=${this.playsInline}
          ?controls=${this.controls}
          @loadedmetadata=${()=>{this.controls&&b(this._video,w)}}
          @loadeddata=${e=>{a(this,e,{player:this,capabilities:{supportsPause:!0,hasAudio:f(this._video)},technology:["webrtc"]})}}
          @volumechange=${()=>r(this)}
          @play=${()=>i(this)}
          @pause=${()=>o(this)}
        ></video>
      `}static get styles(){return[super.styles,h(v),n`
          :host {
            width: 100%;
            height: 100%;
          }
          video {
            width: 100%;
            height: 100%;
          }
        `]}};l([g("#remote-stream")],c.prototype,"_video",void 0),c=l([u("frigate-card-ha-web-rtc-player")],c)})),customElements.whenDefined("ha-camera-stream").then((()=>{let e=class extends(customElements.get("ha-camera-stream")){async play(){return this._player?.play()}async pause(){this._player?.pause()}async mute(){this._player?.mute()}async unmute(){this._player?.unmute()}isMuted(){return this._player?.isMuted()??!0}async seek(e){this._player?.seek(e)}async setControls(e){this._player&&this._player.setControls(e??this.controls)}isPaused(){return this._player?.isPaused()??!0}async getScreenshotURL(){return this._player?await this._player.getScreenshotURL():null}render(){return this.stateObj?this._shouldRenderMJPEG?s`
          <img
            @load=${e=>{a(this,e,{player:this,technology:["mjpeg"]})}}
            .src=${void 0===this._connected||this._connected?(e=this.stateObj,`/api/camera_proxy_stream/${e.entity_id}?token=${e.attributes.access_token}`):""}
          />
        `:"hls"===this.stateObj.attributes.frontend_stream_type?this._url?s` <frigate-card-ha-hls-player
              id="player"
              ?autoplay=${!1}
              playsinline
              .allowExoPlayer=${this.allowExoPlayer}
              .muted=${this.muted}
              .controls=${this.controls}
              .hass=${this.hass}
              .url=${this._url}
            ></frigate-card-ha-hls-player>`:s``:"web_rtc"===this.stateObj.attributes.frontend_stream_type?s`<frigate-card-ha-web-rtc-player
          id="player"
          ?autoplay=${!1}
          playsinline
          .muted=${this.muted}
          .controls=${this.controls}
          .hass=${this.hass}
          .entityid=${this.stateObj.entity_id}
        ></frigate-card-ha-web-rtc-player>`:void 0:s``;var e}static get styles(){return[super.styles,h(v),n`
          :host {
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            height: 100%;
          }
        `]}};l([g("#player")],e.prototype,"_player",void 0),e=l([u("frigate-card-ha-camera-stream")],e)}));let j=class extends c{constructor(){super(...arguments),this.controls=!0,this._playerRef=d()}async play(){return this._playerRef.value?.play()}async pause(){this._playerRef.value?.pause()}async mute(){this._playerRef.value?.mute()}async unmute(){this._playerRef.value?.unmute()}isMuted(){return this._playerRef.value?.isMuted()??!0}async seek(e){this._playerRef.value?.seek(e)}async setControls(e){this._playerRef.value?.setControls(e??this.controls)}isPaused(){return this._playerRef.value?.isPaused()??!0}async getScreenshotURL(){return await(this._playerRef.value?.getScreenshotURL())??null}render(){if(!this.hass)return;const e=R(this,this.hass,this.cameraConfig);return e?"unavailable"===e.state?y({message:p("error.live_camera_unavailable"),type:"error",icon:"mdi:connection",context:this.cameraConfig}):s` <frigate-card-ha-camera-stream
      ${m(this._playerRef)}
      .hass=${this.hass}
      .stateObj=${e}
      .controls=${this.controls}
      .muted=${!0}
    >
    </frigate-card-ha-camera-stream>`:void 0}static get styles(){return h(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}")}};l([_({attribute:!1})],j.prototype,"hass",void 0),l([_({attribute:!1})],j.prototype,"cameraConfig",void 0),l([_({attribute:!0,type:Boolean})],j.prototype,"controls",void 0),j=l([u("frigate-card-live-ha")],j);export{j as FrigateCardLiveHA};
