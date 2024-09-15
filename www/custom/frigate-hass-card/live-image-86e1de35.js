import{a,cP as e,x as s,cU as t,r as i,cN as r,_ as m,n as o,t as n}from"./card-98f237c0.js";import{g as u}from"./live-1bd1c4f8.js";import"./image-c3709ab8.js";import"./media-actions-controller-7e8eef55.js";import"./surround-130a1f2a.js";import"./surround-basic-7ea183cd.js";let g=class extends a{constructor(){super(...arguments),this._refImage=e()}async play(){await(this._refImage.value?.play())}async pause(){await(this._refImage.value?.pause())}async mute(){await(this._refImage.value?.mute())}async unmute(){await(this._refImage.value?.unmute())}isMuted(){return!!this._refImage.value?.isMuted()}async seek(a){await(this._refImage.value?.seek(a))}async setControls(a){await(this._refImage.value?.setControls(a))}isPaused(){return this._refImage.value?.isPaused()??!0}async getScreenshotURL(){return await(this._refImage.value?.getScreenshotURL())??null}render(){if(this.hass&&this.cameraConfig)return u(this,this.hass,this.cameraConfig),s`
      <frigate-card-image
        ${t(this._refImage)}
        .hass=${this.hass}
        .imageConfig=${this.cameraConfig.image}
        .cameraConfig=${this.cameraConfig}
      >
      </frigate-card-image>
    `}static get styles(){return i(r)}};m([o({attribute:!1})],g.prototype,"hass",void 0),m([o({attribute:!1})],g.prototype,"cameraConfig",void 0),g=m([n("frigate-card-live-image")],g);export{g as FrigateCardLiveImage};
