import{s as a,cr as e,y as t,cw as i,l as s,bE as r,bF as o,bG as n,bI as m}from"./card-3c450f9e.js";import{g as c}from"./live-0c4280a6.js";import"./image-8db7070e.js";import"./title-control-762f9db4.js";import"./media-layout-8e0c974f.js";let h=class extends a{constructor(){super(...arguments),this._refImage=e()}async play(){await(this._refImage.value?.play())}async pause(){await(this._refImage.value?.pause())}async mute(){await(this._refImage.value?.mute())}async unmute(){await(this._refImage.value?.unmute())}isMuted(){return!!this._refImage.value?.isMuted()}async seek(a){await(this._refImage.value?.seek(a))}async setControls(a){await(this._refImage.value?.setControls(a))}isPaused(){return this._refImage.value?.isPaused()??!0}async getScreenshotURL(){return await(this._refImage.value?.getScreenshotURL())??null}render(){if(this.hass&&this.cameraConfig)return c(this,this.hass,this.cameraConfig),t`
      <frigate-card-image
        ${i(this._refImage)}
        .imageConfig=${{mode:this.cameraConfig.image.url?"url":"camera",refresh_seconds:this.cameraConfig.image.refresh_seconds,url:this.cameraConfig.image.url,zoomable:!1}}
        .hass=${this.hass}
        .cameraConfig=${this.cameraConfig}
      >
      </frigate-card-image>
      ${this.watermark?t`<ha-icon
            title=${s("error.awaiting_live")}
            icon="${this.watermark}"
          ></ha-icon>`:""}
    `}static get styles(){return r(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: relative;\n}\n\nha-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: var(--primary-color);\n}")}};o([n({attribute:!1})],h.prototype,"hass",void 0),o([n({attribute:!1})],h.prototype,"cameraConfig",void 0),o([n({attribute:!0})],h.prototype,"watermark",void 0),h=o([m("frigate-card-live-image")],h);export{h as FrigateCardLiveImage};
