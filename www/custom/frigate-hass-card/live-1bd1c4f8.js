import{cG as e,cH as i,cI as t,cJ as a,cK as r,cL as o,l as s,_ as n,n as d,cM as h,t as c,b as l,a as g,x as m,r as v,cN as p,cO as u,cP as f,cD as C,cQ as _,cR as b,cS as $,cT as y,cU as M,cV as w,cW as L,cX as E,cY as I,cZ as P,e as S}from"./card-98f237c0.js";import{M as z,A as D,a as x,i as k,p as O,u as V}from"./media-actions-controller-7e8eef55.js";import"./surround-130a1f2a.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=e(class extends i{constructor(){super(...arguments),this.key=t}render(e,i){return this.key=e,i}update(e,[i,t]){return i!==this.key&&(a(e),this.key=i),t}});class j{constructor(e){this._inBackground=!1,this._messageReceived=!1,this._lastMediaLoadedInfo=null,this._renderEpoch=0,this._handleMessage=e=>{this._messageReceived=!0,this._inBackground&&(e.stopPropagation(),this._renderEpoch++)},this._handleMediaLoaded=e=>{this._lastMediaLoadedInfo={source:e.composedPath()[0],mediaLoadedInfo:e.detail},this._inBackground&&e.stopPropagation()},this._host=e,e.addController(this),this._intersectionObserver=new IntersectionObserver(this._intersectionHandler.bind(this))}shouldUpdate(){return!(this._inBackground&&this._messageReceived)}hostConnected(){this._intersectionObserver.observe(this._host),this._host.addEventListener("frigate-card:media:loaded",this._handleMediaLoaded),this._host.addEventListener("frigate-card:message",this._handleMessage)}hostDisconnected(){this._intersectionObserver.disconnect(),this._host.removeEventListener("frigate-card:media:loaded",this._handleMediaLoaded),this._host.removeEventListener("frigate-card:message",this._handleMessage)}clearMessageReceived(){this._messageReceived=!1}isInBackground(){return this._inBackground}getRenderEpoch(){return this._renderEpoch}_intersectionHandler(e){const i=this._inBackground;this._inBackground=!e.some((e=>e.isIntersecting)),this._inBackground||this._messageReceived||!this._lastMediaLoadedInfo||r(this._lastMediaLoadedInfo.source,this._lastMediaLoadedInfo.mediaLoadedInfo),i!==this._inBackground&&this._host.requestUpdate()}}const U=(e,i,t)=>{if(!t?.camera_entity)return o(e,s("error.no_live_camera"),{context:t}),null;const a=i.states[t.camera_entity];return a||(o(e,s("error.live_camera_not_found"),{context:t}),null)},R="frigate-card-live-provider";let H=class extends g{constructor(){super(...arguments),this._controller=new j(this)}shouldUpdate(e){return this._controller.shouldUpdate()}willUpdate(){this._controller.clearMessageReceived()}render(){if(this.hass&&this.nonOverriddenLiveConfig&&this.cameraManager)return m`${W(this._controller.getRenderEpoch(),m`
        <frigate-card-live-grid
          .hass=${this.hass}
          .viewManagerEpoch=${this.viewManagerEpoch}
          .nonOverriddenLiveConfig=${this.nonOverriddenLiveConfig}
          .overriddenLiveConfig=${this.overriddenLiveConfig}
          .inBackground=${this._controller.isInBackground()}
          .conditionsManagerEpoch=${this.conditionsManagerEpoch}
          .overrides=${this.overrides}
          .cardWideConfig=${this.cardWideConfig}
          .cameraManager=${this.cameraManager}
          .microphoneManager=${this.microphoneManager}
          .triggeredCameraIDs=${this.triggeredCameraIDs}
        >
        </frigate-card-live-grid>
      `)}`}static get styles(){return v(p)}};n([d({attribute:!1})],H.prototype,"conditionsManagerEpoch",void 0),n([d({attribute:!1})],H.prototype,"hass",void 0),n([d({attribute:!1})],H.prototype,"viewManagerEpoch",void 0),n([d({attribute:!1})],H.prototype,"nonOverriddenLiveConfig",void 0),n([d({attribute:!1})],H.prototype,"overriddenLiveConfig",void 0),n([d({attribute:!1,hasChanged:h})],H.prototype,"overrides",void 0),n([d({attribute:!1})],H.prototype,"cameraManager",void 0),n([d({attribute:!1})],H.prototype,"cardWideConfig",void 0),n([d({attribute:!1})],H.prototype,"microphoneManager",void 0),n([d({attribute:!1})],H.prototype,"triggeredCameraIDs",void 0),H=n([c("frigate-card-live")],H);let B=class extends g{_renderCarousel(e){const i=this.viewManagerEpoch?.manager.getView(),t=e??i?.camera;return m`
      <frigate-card-live-carousel
        grid-id=${u(e)}
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .viewFilterCameraID=${e}
        .nonOverriddenLiveConfig=${this.nonOverriddenLiveConfig}
        .overriddenLiveConfig=${this.overriddenLiveConfig}
        .conditionsManagerEpoch=${this.conditionsManagerEpoch}
        .overrides=${this.overrides}
        .cardWideConfig=${this.cardWideConfig}
        .cameraManager=${this.cameraManager}
        .microphoneManager=${this.microphoneManager}
        ?triggered=${t&&!!this.triggeredCameraIDs?.has(t)}
      >
      </frigate-card-live-carousel>
    `}_gridSelectCamera(e){this.viewManagerEpoch?.manager.setViewByParameters({params:{camera:e}})}_needsGrid(){const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live"),i=this.viewManagerEpoch?.manager.getView();return!!i?.isGrid()&&!!i?.supportsMultipleDisplayModes()&&!!e&&e.size>1}willUpdate(e){e.has("viewManagerEpoch")&&this._needsGrid()&&import("./media-grid-c303bdc8.js")}render(){if(!this.conditionsManagerEpoch||!this.nonOverriddenLiveConfig)return;const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live");return e?.size&&this._needsGrid()?m`
      <frigate-card-media-grid
        .selected=${this.viewManagerEpoch?.manager.getView()?.camera}
        .displayConfig=${this.overriddenLiveConfig?.display}
        @frigate-card:media-grid:selected=${e=>this._gridSelectCamera(e.detail.selected)}
      >
        ${[...e].map((e=>this._renderCarousel(e)))}
      </frigate-card-media-grid>
    `:this._renderCarousel()}static get styles(){return v(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n@keyframes warning-pulse {\n  0% {\n    border: solid 2px var(--frigate-card-triggered-color-1, rgba(0, 0, 0, 0));\n  }\n  50% {\n    border: solid 2px var(--frigate-card-triggered-color-2, var(--warning-color));\n  }\n  100% {\n    border: solid 2px var(--frigate-card-triggered-color-1, rgba(0, 0, 0, 0));\n  }\n}\nfrigate-card-live-carousel[triggered] {\n  animation: warning-pulse 5s infinite;\n}\n\nfrigate-card-live-carousel[selected] {\n  --frigate-card-triggered-color-1: var(--primary-color);\n}")}};n([d({attribute:!1})],B.prototype,"hass",void 0),n([d({attribute:!1})],B.prototype,"viewManagerEpoch",void 0),n([d({attribute:!1})],B.prototype,"nonOverriddenLiveConfig",void 0),n([d({attribute:!1})],B.prototype,"overriddenLiveConfig",void 0),n([d({attribute:!1,hasChanged:h})],B.prototype,"overrides",void 0),n([d({attribute:!1})],B.prototype,"conditionsManagerEpoch",void 0),n([d({attribute:!1})],B.prototype,"cardWideConfig",void 0),n([d({attribute:!1})],B.prototype,"cameraManager",void 0),n([d({attribute:!1})],B.prototype,"microphoneManager",void 0),n([d({attribute:!1})],B.prototype,"triggeredCameraIDs",void 0),B=n([c("frigate-card-live-grid")],B);let F=class extends g{constructor(){super(...arguments),this._cameraToSlide={},this._refPTZControl=f(),this._refCarousel=f(),this._mediaActionsController=new z,this._mediaHasLoaded=!1}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){this._mediaActionsController.destroy(),super.disconnectedCallback()}updated(e){super.updated(e),!this._mediaActionsController.hasRoot()&&this._refCarousel.value&&this._mediaActionsController.initialize(this._refCarousel.value)}_getTransitionEffect(){return this.overriddenLiveConfig?.transition_effect??C.live.transition_effect}_getSelectedCameraIndex(){const e=this.cameraManager?.getStore().getCameraIDsWithCapability("live"),i=this.viewManagerEpoch?.manager.getView();return e?.size&&i&&!this.viewFilterCameraID?Math.max(0,Array.from(e).indexOf(i.camera)):0}willUpdate(e){(e.has("microphoneManager")||e.has("overriddenLiveConfig"))&&this._mediaActionsController.setOptions({playerSelector:R,...this.overriddenLiveConfig?.auto_play&&{autoPlayConditions:this.overriddenLiveConfig.auto_play},...this.overriddenLiveConfig?.auto_pause&&{autoPauseConditions:this.overriddenLiveConfig.auto_pause},...this.overriddenLiveConfig?.auto_mute&&{autoMuteConditions:this.overriddenLiveConfig.auto_mute},...this.overriddenLiveConfig?.auto_unmute&&{autoUnmuteConditions:this.overriddenLiveConfig.auto_unmute},...(this.overriddenLiveConfig?.auto_unmute||this.overriddenLiveConfig?.auto_mute)&&{microphoneManager:this.microphoneManager,microphoneMuteSeconds:this.overriddenLiveConfig.microphone.mute_after_microphone_mute_seconds}}),e.has("viewManagerEpoch")&&(this.viewFilterCameraID&&this.viewManagerEpoch?.manager.getView()?.camera!==this.viewFilterCameraID?this._mediaActionsController.unselectAll():this._mediaActionsController.select(this._getSelectedCameraIndex()))}_getPlugins(){return[D({...this.overriddenLiveConfig?.lazy_load&&{lazyLoadCallback:(e,i)=>this._lazyloadOrUnloadSlide("load",e,i)},lazyUnloadConditions:this.overriddenLiveConfig?.lazy_unload,lazyUnloadCallback:(e,i)=>this._lazyloadOrUnloadSlide("unload",e,i)}),x(),_()]}_getLazyLoadCount(){return!1===this.overriddenLiveConfig?.lazy_load?null:0}_getSlides(){if(!this.cameraManager)return[[],{}];const e=this.viewManagerEpoch?.manager.getView(),i=this.viewFilterCameraID?new Set([this.viewFilterCameraID]):this.cameraManager?.getStore().getCameraIDsWithCapability("live"),t=[],a={};for(const[r,o]of this.cameraManager.getStore().getCameraConfigEntries(i)){const i=this._getSubstreamCameraID(r,e),s=r===i?o:this.cameraManager?.getStore().getCameraConfig(i),n=s?this._renderLive(i,s):null;n&&(a[r]=t.length,t.push(n))}return[t,a]}_setViewHandler(e){const i=this.cameraManager?.getStore().getCameraIDsWithCapability("live");i?.size&&e.detail.index!==this._getSelectedCameraIndex()&&this._setViewCameraID([...i][e.detail.index])}_setViewCameraID(e){e&&this.viewManagerEpoch?.manager.setViewByParametersWithNewQuery({params:{camera:e}})}_lazyloadOrUnloadSlide(e,i,t){t instanceof HTMLSlotElement&&(t=t.assignedElements({flatten:!0})[0]);const a=t?.querySelector(R);a&&(a.load="load"===e)}_renderLive(e,i){if(!(this.overriddenLiveConfig&&this.nonOverriddenLiveConfig&&this.hass&&this.cameraManager&&this.conditionsManagerEpoch))return;const t=b(this.conditionsManagerEpoch.manager,{live:this.nonOverriddenLiveConfig},{configOverrides:this.overrides,stateOverrides:{camera:e},schema:$,logOnParseError:!!this.cardWideConfig?.debug?.logging}).live,a=this.cameraManager.getCameraMetadata(e),r=this.viewManagerEpoch?.manager.getView();return m`
      <div class="embla__slide">
        <frigate-card-live-provider
          ?load=${!t.lazy_load}
          .microphoneStream=${r?.camera===e?this.microphoneManager?.getStream():void 0}
          .cameraConfig=${i}
          .cameraEndpoints=${k([this.cameraManager,e],(()=>this.cameraManager?.getCameraEndpoints(e)??void 0))}
          .label=${a?.title??""}
          .liveConfig=${t}
          .hass=${this.hass}
          .cardWideConfig=${this.cardWideConfig}
          .zoomSettings=${r?.context?.zoom?.[e]?.requested}
          @frigate-card:zoom:change=${i=>y(i,this.viewManagerEpoch?.manager,e)}
        >
        </frigate-card-live-provider>
      </div>
    `}_getCameraIDsOfNeighbors(){const e=this.cameraManager?[...this.cameraManager?.getStore().getCameraIDsWithCapability("live")]:[],i=this.viewManagerEpoch?.manager.getView();if(this.viewFilterCameraID||e.length<=1||!i||!this.hass)return[null,null];const t=this.viewFilterCameraID??i.camera,a=e.indexOf(t);return a<0?[null,null]:[e[a>0?a-1:e.length-1],e[a+1<e.length?a+1:0]]}_getSubstreamCameraID(e,i){return i?.context?.live?.overrides?.get(e)??e}render(){const e=this.viewManagerEpoch?.manager.getView();if(!(this.overriddenLiveConfig&&this.hass&&e&&this.cameraManager))return;const[i,t]=this._getSlides();if(this._cameraToSlide=t,!i.length)return;const a=i.length>1,[r,o]=this._getCameraIDsOfNeighbors(),s=r?this.cameraManager.getCameraMetadata(this._getSubstreamCameraID(r,e)):null,n=this.viewFilterCameraID??e.camera,d=o?this.cameraManager.getCameraMetadata(this._getSubstreamCameraID(o,e)):null;return m`
      <frigate-card-carousel
        ${M(this._refCarousel)}
        .loop=${a}
        .dragEnabled=${a&&this.overriddenLiveConfig?.draggable}
        .plugins=${k([this.cameraManager,this.overriddenLiveConfig,this.microphoneManager],this._getPlugins.bind(this))}
        .selected=${this._getSelectedCameraIndex()}
        transitionEffect=${this._getTransitionEffect()}
        @frigate-card:carousel:select=${this._setViewHandler.bind(this)}
        @frigate-card:media:loaded=${()=>{this._mediaHasLoaded=!0}}
        @frigate-card:media:unloaded=${()=>{this._mediaHasLoaded=!1}}
      >
        <frigate-card-next-previous-control
          slot="previous"
          .hass=${this.hass}
          .direction=${"previous"}
          .controlConfig=${this.overriddenLiveConfig.controls.next_previous}
          .label=${s?.title??""}
          .icon=${s?.icon}
          ?disabled=${null===r}
          @click=${e=>{this._setViewCameraID(r),w(e)}}
        >
        </frigate-card-next-previous-control>
        ${i}
        <frigate-card-next-previous-control
          slot="next"
          .hass=${this.hass}
          .direction=${"next"}
          .controlConfig=${this.overriddenLiveConfig.controls.next_previous}
          .label=${d?.title??""}
          .icon=${d?.icon}
          ?disabled=${null===o}
          @click=${e=>{this._setViewCameraID(o),w(e)}}
        >
        </frigate-card-next-previous-control>
      </frigate-card-carousel>
      <frigate-card-ptz
        .config=${this.overriddenLiveConfig.controls.ptz}
        .cameraManager=${this.cameraManager}
        .cameraID=${L(e,n)}
        .forceVisibility=${this._mediaHasLoaded&&e.context?.ptzControls?.enabled}
      >
      </frigate-card-ptz>
    `}static get styles(){return v(":host {\n  display: block;\n  --video-max-height: none;\n}\n\n:host(:not([grid-id])) {\n  height: 100%;\n}\n\n:host([unselected]) frigate-card-carousel {\n  pointer-events: none;\n}\n\n.embla__slide {\n  display: flex;\n  justify-content: center;\n  height: 100%;\n  flex: 0 0 100%;\n}")}};n([d({attribute:!1})],F.prototype,"hass",void 0),n([d({attribute:!1})],F.prototype,"viewManagerEpoch",void 0),n([d({attribute:!1})],F.prototype,"nonOverriddenLiveConfig",void 0),n([d({attribute:!1})],F.prototype,"overriddenLiveConfig",void 0),n([d({attribute:!1,hasChanged:h})],F.prototype,"overrides",void 0),n([d({attribute:!1})],F.prototype,"conditionsManagerEpoch",void 0),n([d({attribute:!1})],F.prototype,"cardWideConfig",void 0),n([d({attribute:!1})],F.prototype,"cameraManager",void 0),n([d({attribute:!1})],F.prototype,"microphoneManager",void 0),n([d({attribute:!1})],F.prototype,"viewFilterCameraID",void 0),n([l()],F.prototype,"_mediaHasLoaded",void 0),F=n([c("frigate-card-live-carousel")],F);let A=class extends g{constructor(){super(...arguments),this.load=!1,this.label="",this._isVideoMediaLoaded=!1,this._refProvider=f(),this._importPromises=[]}async play(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await O(this,this._refProvider.value)}async pause(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.pause())}async mute(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.mute())}async unmute(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.unmute())}isMuted(){return this._refProvider.value?.isMuted()??!0}async seek(e){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.seek(e))}async setControls(e){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.setControls(e))}isPaused(){return this._refProvider.value?.isPaused()??!0}async getScreenshotURL(){return await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.getScreenshotURL())??null}_getResolvedProvider(){return"auto"===this.cameraConfig?.live_provider?this.cameraConfig?.webrtc_card?.entity||this.cameraConfig?.webrtc_card?.url?"webrtc-card":this.cameraConfig?.camera_entity?"ha":this.cameraConfig?.frigate.camera_name?"jsmpeg":C.cameras.live_provider:this.cameraConfig?.live_provider||"image"}_shouldShowImageDuringLoading(){return!!this.cameraConfig?.camera_entity&&!!this.hass&&!!this.liveConfig?.show_image_during_load}disconnectedCallback(){this._isVideoMediaLoaded=!1}_videoMediaShowHandler(){this._isVideoMediaLoaded=!0}willUpdate(e){if(e.has("load")&&(this.load||(this._isVideoMediaLoaded=!1,E(this))),e.has("liveConfig")&&(this.liveConfig?.show_image_during_load&&this._importPromises.push(import("./live-image-86e1de35.js")),this.liveConfig?.zoomable&&this._importPromises.push(import("./zoomer-065546bd.js"))),e.has("cameraConfig")){const e=this._getResolvedProvider();"jsmpeg"===e?this._importPromises.push(import("./live-jsmpeg-2d9c1dec.js")):"ha"===e?this._importPromises.push(import("./live-ha-dff1bcdb.js")):"webrtc-card"===e?this._importPromises.push(import("./live-webrtc-card-c8a30738.js")):"image"===e?this._importPromises.push(import("./live-image-86e1de35.js")):"go2rtc"===e&&this._importPromises.push(import("./live-go2rtc-ded1eb7d.js")),V(this,this.cameraConfig?.dimensions?.layout),this.style.aspectRatio=I({ratio:this.cameraConfig?.dimensions?.aspect_ratio})}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await Promise.all(this._importPromises),this._importPromises=[],e}_useZoomIfRequired(e){return this.liveConfig?.zoomable?m` <frigate-card-zoomer
          .defaultSettings=${k([this.cameraConfig?.dimensions?.layout],(()=>this.cameraConfig?.dimensions?.layout?{pan:this.cameraConfig.dimensions.layout.pan,zoom:this.cameraConfig.dimensions.layout.zoom}:void 0))}
          .settings=${this.zoomSettings}
          @frigate-card:zoom:zoomed=${()=>this.setControls(!1)}
          @frigate-card:zoom:unzoomed=${()=>this.setControls()}
        >
          ${e}
        </frigate-card-zoomer>`:e}render(){if(!(this.load&&this.hass&&this.liveConfig&&this.cameraConfig))return;this.title=this.label,this.ariaLabel=this.label;const e=this._getResolvedProvider(),i=!this._isVideoMediaLoaded&&this._shouldShowImageDuringLoading(),t={hidden:i};if("ha"===e||"image"===e){const e=U(this,this.hass,this.cameraConfig);if(!e)return;if("unavailable"===e.state)return E(this),P({message:`${s("error.live_camera_unavailable")}${this.label?`: ${this.label}`:""}`,type:"info",icon:"mdi:cctv-off",dotdotdot:!0})}return m`${this._useZoomIfRequired(m`
      ${i||"image"===e?m` <frigate-card-live-image
            ${M(this._refProvider)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            @frigate-card:media:loaded=${i=>{"image"===e?this._videoMediaShowHandler():i.stopPropagation()}}
          >
          </frigate-card-live-image>`:m``}
      ${"ha"===e?m` <frigate-card-live-ha
            ${M(this._refProvider)}
            class=${S(t)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            ?controls=${this.liveConfig.controls.builtin}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-ha>`:"go2rtc"===e?m`<frigate-card-live-go2rtc
              ${M(this._refProvider)}
              class=${S(t)}
              .hass=${this.hass}
              .cameraConfig=${this.cameraConfig}
              .cameraEndpoints=${this.cameraEndpoints}
              .microphoneStream=${this.microphoneStream}
              .microphoneConfig=${this.liveConfig.microphone}
              ?controls=${this.liveConfig.controls.builtin}
              @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
            >
            </frigate-card-live-go2rtc>`:"webrtc-card"===e?m`<frigate-card-live-webrtc-card
                ${M(this._refProvider)}
                class=${S(t)}
                .hass=${this.hass}
                .cameraConfig=${this.cameraConfig}
                .cameraEndpoints=${this.cameraEndpoints}
                .cardWideConfig=${this.cardWideConfig}
                ?controls=${this.liveConfig.controls.builtin}
                @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
              >
              </frigate-card-live-webrtc-card>`:"jsmpeg"===e?m` <frigate-card-live-jsmpeg
                  ${M(this._refProvider)}
                  class=${S(t)}
                  .hass=${this.hass}
                  .cameraConfig=${this.cameraConfig}
                  .cameraEndpoints=${this.cameraEndpoints}
                  .cardWideConfig=${this.cardWideConfig}
                  @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
                >
                </frigate-card-live-jsmpeg>`:m``}
    `)}
    ${i&&!this._isVideoMediaLoaded?m`<ha-icon
          title=${s("error.awaiting_live")}
          icon="mdi:progress-helper"
        ></ha-icon>`:""} `}static get styles(){return v(":host {\n  display: block;\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n.hidden {\n  display: none;\n}\n\nha-icon {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: var(--primary-color);\n}")}};n([d({attribute:!1})],A.prototype,"hass",void 0),n([d({attribute:!1})],A.prototype,"cameraConfig",void 0),n([d({attribute:!1})],A.prototype,"cameraEndpoints",void 0),n([d({attribute:!1})],A.prototype,"liveConfig",void 0),n([d({attribute:!0,type:Boolean})],A.prototype,"load",void 0),n([d({attribute:!1})],A.prototype,"label",void 0),n([d({attribute:!1})],A.prototype,"cardWideConfig",void 0),n([d({attribute:!1})],A.prototype,"microphoneStream",void 0),n([d({attribute:!1})],A.prototype,"zoomSettings",void 0),n([l()],A.prototype,"_isVideoMediaLoaded",void 0),A=n([c(R)],A);var T=Object.freeze({__proto__:null,get FrigateCardLive(){return H},get FrigateCardLiveCarousel(){return F},get FrigateCardLiveGrid(){return B},get FrigateCardLiveProvider(){return A}});export{U as g,T as l};
