import{ce as e,cf as t,cg as i,ch as a,ci as r,l as o,cj as n,ck as s,cl as d,bF as c,bG as h,bI as l,s as g,y as p,bE as v,q as m,cm as u,cn as f,co as _,cp as C,bH as b,cq as $,cr as y,cd as w,cs as z,ct as M,cu as L,cv as P,cw as I,cx as x,cy as S,cz as D}from"./card-3c450f9e.js";import{A as k,a as O,b as E,i as V,g as A,p as j}from"./title-control-762f9db4.js";import{u as H}from"./media-layout-8e0c974f.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=e(class extends t{constructor(){super(...arguments),this.key=i}render(e,t){return this.key=e,t}update(e,[t,i]){return t!==this.key&&(a(e),this.key=t),i}});const T=(e,t,i)=>{if(!i?.camera_entity)return r(e,o("error.no_live_camera"),{context:i}),null;const a=t.states[i.camera_entity];return a||(r(e,o("error.live_camera_not_found"),{context:i}),null)};class F{constructor(e){this._config=null,this._hass=null,this._cameraManager=null,this._cameraID=null,this._actions=null,this._host=e}setConfig(e){this._config=e??null,this._host.setAttribute("data-orientation",e?.orientation??"horizontal"),this._host.setAttribute("data-position",e?.position??"bottom-right"),this._host.setAttribute("style",Object.entries(e?.style??{}).map((([e,t])=>`${e}:${t}`)).join(";"))}getConfig(){return this._config}setHASS(e){this._hass=e??null}setCamera(e,t){this._cameraManager=e??null,this._cameraID=t??null,this._calculateActions()}setForceVisibility(e){this._forceVisibility=e}handleAction(e,t){e.stopPropagation();const i=e.detail.action,a=n(i,t);t&&a&&this._hass&&s(this._host,this._hass,t,i,a)}getPTZActions(e){const t="actions_"+e;return this._config?.[t]??this._actions?.[t]??null}_hasAnyAction(){for(const e of d)if("actions_"+e in(this._actions??{}))return!0;return!1}shouldDisplay(){return!1!==this._forceVisibility&&("on"===this._config?.mode&&this._hasAnyAction())}_calculateActions(){const e=(e,t)=>({action:"fire-dom-event",frigate_card_action:"ptz",ptz_action:e,...t?.phase&&{ptz_phase:t.phase},...t?.preset&&{ptz_preset:t.preset}}),t=(t,i,a)=>i?{start_tap_action:e(t,{phase:"start",preset:a}),end_tap_action:e(t,{phase:"stop",preset:a})}:{tap_action:e(t,{preset:a})};if(!this._cameraManager||!this._cameraID)return;const i=this._cameraManager.getCameraCapabilities(this._cameraID)?.ptz,a={},r=i?.panTilt,o=i?.zoom,n=i?.presets;if(r?.length){const e=r.includes("continuous");a.actions_up=t("up",e),a.actions_down=t("down",e),a.actions_left=t("left",e),a.actions_right=t("right",e)}if(o?.length){const e=o.includes("continuous");a.actions_zoom_in=t("zoom_in",e),a.actions_zoom_out=t("zoom_out",e)}n?.length&&(a.actions_home=t("preset",!1,n[0])),this._actions={...a,...this._config}}}let U=class extends g{constructor(){super(...arguments),this._controller=new F(this)}willUpdate(e){e.has("config")&&this._controller.setConfig(this.config),e.has("hass")&&this._controller.setHASS(this.hass),(e.has("cameraManager")||e.has("cameraID"))&&this._controller.setCamera(this.cameraManager,this.cameraID),e.has("forceVisibility")&&this._controller.setForceVisibility(this.forceVisibility)}render(){if(!this._controller.shouldDisplay())return;const e=(e,t,i)=>p`<ha-icon
        class=${m({[e]:!0,disabled:!i})}
        icon=${t}
        .actionHandler=${u({hasHold:f(i?.hold_action),hasDoubleClick:f(i?.double_tap_action)})}
        .title=${o(`elements.ptz.${e}`)}
        @action=${e=>this._controller.handleAction(e,i)}
      ></ha-icon>`,t=this._controller.getConfig(),i=this._controller.getPTZActions("zoom_in"),a=this._controller.getPTZActions("zoom_out"),r=this._controller.getPTZActions("home");return p` <div class="ptz">
      ${t?.hide_pan_tilt?"":p`<div class="ptz-move">
            ${e("right","mdi:arrow-right",this._controller.getPTZActions("right"))}
            ${e("left","mdi:arrow-left",this._controller.getPTZActions("left"))}
            ${e("up","mdi:arrow-up",this._controller.getPTZActions("up"))}
            ${e("down","mdi:arrow-down",this._controller.getPTZActions("down"))}
          </div>`}
      ${t?.hide_zoom||!i&&!a?p``:p` <div class="ptz-zoom">
            ${e("zoom_in","mdi:plus",i)}
            ${e("zoom_out","mdi:minus",a)}
          </div>`}
      ${!t?.hide_home&&r?p`
            <div class="ptz-home">${e("home","mdi:home",r)}</div>
          `:p``}
    </div>`}static get styles(){return v(":host {\n  position: absolute;\n  width: fit-content;\n  height: fit-content;\n  --frigate-card-ptz-icon-size: 24px;\n}\n\n:host([data-position$=-left]) {\n  left: 5%;\n}\n\n:host([data-position$=-right]) {\n  right: 5%;\n}\n\n:host([data-position^=top-]) {\n  top: 5%;\n}\n\n:host([data-position^=bottom-]) {\n  bottom: 5%;\n}\n\n/*****************\n * Main Containers\n *****************/\n.ptz {\n  display: flex;\n  gap: 10px;\n  color: var(--light-primary-color);\n  opacity: 0.4;\n  transition: opacity 0.3s ease-in-out;\n}\n\n:host([data-orientation=vertical]) .ptz {\n  flex-direction: column;\n}\n\n:host([data-orientation=horizontal]) .ptz {\n  flex-direction: row;\n}\n\n.ptz:hover {\n  opacity: 1;\n}\n\n:host([data-orientation=vertical]) .ptz div {\n  width: calc(var(--frigate-card-ptz-icon-size) * 3);\n}\n\n:host([data-orientation=horizontal]) .ptz div {\n  height: calc(var(--frigate-card-ptz-icon-size) * 3);\n}\n\n.ptz-move,\n.ptz-zoom,\n.ptz-home {\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.ptz-move {\n  height: calc(var(--frigate-card-ptz-icon-size) * 3);\n  width: calc(var(--frigate-card-ptz-icon-size) * 3);\n  border-radius: 50%;\n}\n\n:host([data-orientation=horizontal]) .ptz .ptz-zoom,\n:host([data-orientation=horizontal]) .ptz .ptz-home {\n  width: calc(var(--frigate-card-ptz-icon-size) * 1.5);\n}\n\n:host([data-orientation=vertical]) .ptz .ptz-zoom,\n:host([data-orientation=vertical]) .ptz .ptz-home {\n  height: calc(var(--frigate-card-ptz-icon-size) * 1.5);\n}\n\n.ptz-zoom,\n.ptz-home {\n  border-radius: var(--ha-card-border-radius, 4px);\n}\n\n/***********\n * PTZ Icons\n ***********/\nha-icon {\n  position: absolute;\n  --mdc-icon-size: var(--frigate-card-ptz-icon-size);\n}\n\nha-icon:not(.disabled) {\n  cursor: pointer;\n}\n\n.disabled {\n  color: var(--disabled-text-color);\n}\n\n.up {\n  top: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.down {\n  bottom: 5px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.left {\n  left: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.right {\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n:host([data-orientation=vertical]) .zoom_in {\n  right: 5px;\n  top: 50%;\n}\n\n:host([data-orientation=vertical]) .zoom_out {\n  left: 5px;\n  top: 50%;\n}\n\n:host([data-orientation=horizontal]) .zoom_in {\n  left: 50%;\n  top: 5px;\n}\n\n:host([data-orientation=horizontal]) .zoom_out {\n  left: 50%;\n  bottom: 5px;\n}\n\n:host([data-orientation=vertical]) .zoom_in,\n:host([data-orientation=vertical]) .zoom_out {\n  transform: translateY(-50%);\n}\n\n:host([data-orientation=horizontal]) .zoom_in,\n:host([data-orientation=horizontal]) .zoom_out {\n  transform: translateX(-50%);\n}\n\n.home {\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}")}};c([h({attribute:!1})],U.prototype,"hass",void 0),c([h({attribute:!1})],U.prototype,"config",void 0),c([h({attribute:!1})],U.prototype,"cameraManager",void 0),c([h({attribute:!1})],U.prototype,"cameraID",void 0),c([h({attribute:!1})],U.prototype,"forceVisibility",void 0),U=c([l("frigate-card-ptz")],U);const W="frigate-card-live-provider";let B=class extends g{constructor(){super(),this._inBackground=!1,this._lastMediaLoadedInfo=null,this._messageReceivedPostRender=!1,this._renderKey=0,this._intersectionObserver=new IntersectionObserver(this._intersectionHandler.bind(this))}_intersectionHandler(e){this._inBackground=!e.some((e=>e.isIntersecting)),this._inBackground||this._messageReceivedPostRender||!this._lastMediaLoadedInfo||_(this._lastMediaLoadedInfo.source,this._lastMediaLoadedInfo.mediaLoadedInfo),this._messageReceivedPostRender&&!this._inBackground&&this.requestUpdate()}shouldUpdate(e){return!this._inBackground||!this._messageReceivedPostRender}connectedCallback(){this._intersectionObserver.observe(this),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this._intersectionObserver.disconnect()}render(){if(!(this.hass&&this.nonOverriddenLiveConfig&&this.cameraManager&&this.view))return;const e=p`${R(this._renderKey,p`
        <frigate-card-live-grid
          .hass=${this.hass}
          .view=${this.view}
          .nonOverriddenLiveConfig=${this.nonOverriddenLiveConfig}
          .overriddenLiveConfig=${this.overriddenLiveConfig}
          .inBackground=${this._inBackground}
          .conditionsManagerEpoch=${this.conditionsManagerEpoch}
          .liveOverrides=${this.liveOverrides}
          .cardWideConfig=${this.cardWideConfig}
          .cameraManager=${this.cameraManager}
          .microphoneManager=${this.microphoneManager}
          .triggeredCameraIDs=${this.triggeredCameraIDs}
          @frigate-card:message=${e=>{this._renderKey++,this._messageReceivedPostRender=!0,this._inBackground&&e.stopPropagation()}}
          @frigate-card:media:loaded=${e=>{this._lastMediaLoadedInfo={source:e.composedPath()[0],mediaLoadedInfo:e.detail},this._inBackground&&e.stopPropagation()}}
          @frigate-card:view:change=${e=>{this._inBackground&&e.stopPropagation()}}
        >
        </frigate-card-live-grid>
      `)}`;return this._messageReceivedPostRender=!1,e}static get styles(){return v(D)}};c([h({attribute:!1})],B.prototype,"conditionsManagerEpoch",void 0),c([h({attribute:!1})],B.prototype,"hass",void 0),c([h({attribute:!1})],B.prototype,"view",void 0),c([h({attribute:!1})],B.prototype,"nonOverriddenLiveConfig",void 0),c([h({attribute:!1})],B.prototype,"overriddenLiveConfig",void 0),c([h({attribute:!1,hasChanged:C})],B.prototype,"liveOverrides",void 0),c([h({attribute:!1})],B.prototype,"cameraManager",void 0),c([h({attribute:!1})],B.prototype,"cardWideConfig",void 0),c([h({attribute:!1})],B.prototype,"microphoneManager",void 0),c([h({attribute:!1})],B.prototype,"triggeredCameraIDs",void 0),c([b()],B.prototype,"_inBackground",void 0),B=c([l("frigate-card-live")],B);let Z=class extends g{_renderCarousel(e){const t=e??this.view?.camera;return p`
      <frigate-card-live-carousel
        grid-id=${$(e)}
        .hass=${this.hass}
        .view=${this.view}
        .viewFilterCameraID=${e}
        .nonOverriddenLiveConfig=${this.nonOverriddenLiveConfig}
        .overriddenLiveConfig=${this.overriddenLiveConfig}
        .conditionsManagerEpoch=${this.conditionsManagerEpoch}
        .liveOverrides=${this.liveOverrides}
        .cardWideConfig=${this.cardWideConfig}
        .cameraManager=${this.cameraManager}
        .microphoneManager=${this.microphoneManager}
        ?triggered=${t&&!!this.triggeredCameraIDs?.has(t)}
      >
      </frigate-card-live-carousel>
    `}_gridSelectCamera(e,t){(t??this.view)?.evolve({camera:e}).dispatchChangeEvent(this)}_needsGrid(){const e=this.cameraManager?.getStore().getVisibleCameraIDs();return!!this.view?.isGrid()&&!!this.view?.supportsMultipleDisplayModes()&&!!e&&e.size>1}willUpdate(e){e.has("view")&&this._needsGrid()&&import("./media-grid-c1f8037e.js")}render(){if(!this.conditionsManagerEpoch||!this.nonOverriddenLiveConfig)return;const e=this.cameraManager?.getStore().getVisibleCameraIDs();return e&&this._needsGrid()?p`
      <frigate-card-media-grid
        .selected=${this.view?.camera}
        .displayConfig=${this.overriddenLiveConfig?.display}
        @frigate-card:media-grid:selected=${e=>this._gridSelectCamera(e.detail.selected)}
        @frigate-card:view:change=${e=>{e.stopPropagation(),this._gridSelectCamera(e.detail.camera,e.detail)}}
      >
        ${[...e].map((e=>this._renderCarousel(e)))}
      </frigate-card-media-grid>
    `:this._renderCarousel()}static get styles(){return v(":host {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n\n@keyframes warning-pulse {\n  0% {\n    border: solid 2px var(--frigate-card-triggered-color-1, rgba(0, 0, 0, 0));\n  }\n  50% {\n    border: solid 2px var(--frigate-card-triggered-color-2, var(--warning-color));\n  }\n  100% {\n    border: solid 2px var(--frigate-card-triggered-color-1, rgba(0, 0, 0, 0));\n  }\n}\nfrigate-card-live-carousel[triggered] {\n  animation: warning-pulse 5s infinite;\n}\n\nfrigate-card-live-carousel[selected] {\n  --frigate-card-triggered-color-1: var(--primary-color);\n}")}};c([h({attribute:!1})],Z.prototype,"hass",void 0),c([h({attribute:!1})],Z.prototype,"view",void 0),c([h({attribute:!1})],Z.prototype,"nonOverriddenLiveConfig",void 0),c([h({attribute:!1})],Z.prototype,"overriddenLiveConfig",void 0),c([h({attribute:!1,hasChanged:C})],Z.prototype,"liveOverrides",void 0),c([h({attribute:!1})],Z.prototype,"conditionsManagerEpoch",void 0),c([h({attribute:!1})],Z.prototype,"cardWideConfig",void 0),c([h({attribute:!1})],Z.prototype,"cameraManager",void 0),c([h({attribute:!1})],Z.prototype,"microphoneManager",void 0),c([h({attribute:!1})],Z.prototype,"triggeredCameraIDs",void 0),Z=c([l("frigate-card-live-grid")],Z);let q=class extends g{constructor(){super(...arguments),this._cameraToSlide={},this._refTitleControl=y(),this._refPTZControl=y(),this._mediaHasLoaded=!1}_getTransitionEffect(){return this.overriddenLiveConfig?.transition_effect??w.live.transition_effect}_getSelectedCameraIndex(){const e=this.cameraManager?.getStore().getVisibleCameraIDs();return e&&this.view&&!this.viewFilterCameraID?Math.max(0,Array.from(e).indexOf(this.view.camera)):0}_getPlugins(){return[k({...this.overriddenLiveConfig?.lazy_load&&{lazyLoadCallback:(e,t)=>this._lazyloadOrUnloadSlide("load",e,t)},lazyUnloadConditions:this.overriddenLiveConfig?.lazy_unload,lazyUnloadCallback:(e,t)=>this._lazyloadOrUnloadSlide("unload",e,t)}),O(),E({playerSelector:W,...this.overriddenLiveConfig?.auto_play&&{autoPlayConditions:this.overriddenLiveConfig.auto_play},...this.overriddenLiveConfig?.auto_pause&&{autoPauseConditions:this.overriddenLiveConfig.auto_pause},...this.overriddenLiveConfig?.auto_mute&&{autoMuteConditions:this.overriddenLiveConfig.auto_mute},...this.overriddenLiveConfig?.auto_unmute&&{autoUnmuteConditions:this.overriddenLiveConfig.auto_unmute},...(this.overriddenLiveConfig?.auto_unmute||this.overriddenLiveConfig?.auto_mute)&&{microphoneManager:this.microphoneManager,microphoneMuteSeconds:this.overriddenLiveConfig.microphone.mute_after_microphone_mute_seconds}}),z()]}_getLazyLoadCount(){return!1===this.overriddenLiveConfig?.lazy_load?null:0}_getSlides(){if(!this.cameraManager)return[[],{}];const e=this.viewFilterCameraID?new Set([this.viewFilterCameraID]):this.cameraManager.getStore().getVisibleCameraIDs(),t=[],i={};for(const[a,r]of this.cameraManager.getStore().getCameraConfigEntries(e)){const e=this.view?.context?.live?.overrides?.get(a)??a,o=a===e?r:this.cameraManager?.getStore().getCameraConfig(e),n=o?this._renderLive(e,o):null;n&&(i[a]=t.length,t.push(n))}return[t,i]}_setViewHandler(e){const t=this.cameraManager?.getStore().getVisibleCameraIDs();t&&e.detail.index!==this._getSelectedCameraIndex()&&this._setViewCameraID([...t][e.detail.index])}_setViewCameraID(e){e&&this.view?.evolve({camera:e,query:null,queryResults:null}).mergeInContext({thumbnails:{fetch:!1}}).dispatchChangeEvent(this)}_lazyloadOrUnloadSlide(e,t,i){i instanceof HTMLSlotElement&&(i=i.assignedElements({flatten:!0})[0]);const a=i?.querySelector(W);a&&(a.load="load"===e)}_renderLive(e,t){if(!(this.overriddenLiveConfig&&this.nonOverriddenLiveConfig&&this.hass&&this.cameraManager&&this.conditionsManagerEpoch))return;const i=M(this.conditionsManagerEpoch.manager,this.nonOverriddenLiveConfig,this.liveOverrides,{camera:e}),a=this.cameraManager.getCameraMetadata(e);return p`
      <div class="embla__slide">
        <frigate-card-live-provider
          ?load=${!i.lazy_load}
          .microphoneStream=${this.view?.camera===e?this.microphoneManager?.getStream():void 0}
          .cameraConfig=${t}
          .cameraEndpoints=${V([this.cameraManager,e],(()=>this.cameraManager?.getCameraEndpoints(e)??void 0))}
          .label=${a?.title??""}
          .liveConfig=${i}
          .hass=${this.hass}
          .cardWideConfig=${this.cardWideConfig}
        >
        </frigate-card-live-provider>
      </div>
    `}_getCameraIDsOfNeighbors(){const e=this.cameraManager?[...this.cameraManager.getStore().getVisibleCameraIDs()]:[];if(this.viewFilterCameraID||e.length<=1||!this.view||!this.hass)return[null,null];const t=this.viewFilterCameraID??this.view.camera,i=e.indexOf(t);return i<0?[null,null]:[e[i>0?i-1:e.length-1],e[i+1<e.length?i+1:0]]}render(){if(!(this.overriddenLiveConfig&&this.view&&this.hass&&this.cameraManager))return;const[e,t]=this._getSlides();if(this._cameraToSlide=t,!e.length)return;const i=e.length>1,[a,r]=this._getCameraIDsOfNeighbors(),n=e=>this.view?.context?.live?.overrides?.get(e)??e,s=a?this.cameraManager.getCameraMetadata(n(a)):null,d=this.viewFilterCameraID??this.view.camera,c=this.cameraManager.getCameraMetadata(n(d)),h=r?this.cameraManager.getCameraMetadata(n(r)):null,l=A(this.view,this.overriddenLiveConfig?.controls.title);return p`
      <frigate-card-carousel
        .loop=${i}
        .dragEnabled=${i&&this.overriddenLiveConfig?.draggable}
        .plugins=${V([this.cameraManager,this.overriddenLiveConfig,this.microphoneManager],this._getPlugins.bind(this))}
        .selected=${this._getSelectedCameraIndex()}
        transitionEffect=${this._getTransitionEffect()}
        @frigate-card:carousel:select=${this._setViewHandler.bind(this)}
        @frigate-card:carousel:settle=${()=>{L(this,{thumbnails:{fetch:!0}})}}
        @frigate-card:media:loaded=${()=>{this._refTitleControl.value&&this._refTitleControl.value.show(),this._mediaHasLoaded=!0}}
        @frigate-card:media:unloaded=${()=>{this._mediaHasLoaded=!1}}
      >
        <frigate-card-next-previous-control
          slot="previous"
          .hass=${this.hass}
          .direction=${"previous"}
          .controlConfig=${this.overriddenLiveConfig.controls.next_previous}
          .label=${s?.title??""}
          .icon=${s?.icon}
          ?disabled=${null===a}
          @click=${e=>{this._setViewCameraID(a),P(e)}}
        >
        </frigate-card-next-previous-control>
        ${e}
        <frigate-card-next-previous-control
          slot="next"
          .hass=${this.hass}
          .direction=${"next"}
          .controlConfig=${this.overriddenLiveConfig.controls.next_previous}
          .label=${h?.title??""}
          .icon=${h?.icon}
          ?disabled=${null===r}
          @click=${e=>{this._setViewCameraID(r),P(e)}}
        >
        </frigate-card-next-previous-control>
      </frigate-card-carousel>
      <frigate-card-ptz
        .hass=${this.hass}
        .config=${this.overriddenLiveConfig.controls.ptz}
        .cameraManager=${this.cameraManager}
        .cameraID=${d}
        .forceVisibility=${this._mediaHasLoaded&&this.view.context?.live?.ptzVisible}
      >
      </frigate-card-ptz>
      ${c&&l?p`<frigate-card-title-control
            ${I(this._refTitleControl)}
            .config=${l}
            .text="${c?`${o("common.live")}: ${c.title}`:""}"
            .logo="${c.engineLogo}"
            .fitInto=${this}
          >
          </frigate-card-title-control> `:""}
    `}static get styles(){return v(":host {\n  display: block;\n  --video-max-height: none;\n}\n\n:host([unselected]) frigate-card-carousel {\n  pointer-events: none;\n}\n\n.embla__slide {\n  height: 100%;\n  flex: 0 0 100%;\n}")}};c([h({attribute:!1})],q.prototype,"hass",void 0),c([h({attribute:!1})],q.prototype,"view",void 0),c([h({attribute:!1})],q.prototype,"nonOverriddenLiveConfig",void 0),c([h({attribute:!1})],q.prototype,"overriddenLiveConfig",void 0),c([h({attribute:!1,hasChanged:C})],q.prototype,"liveOverrides",void 0),c([h({attribute:!1})],q.prototype,"conditionsManagerEpoch",void 0),c([h({attribute:!1})],q.prototype,"cardWideConfig",void 0),c([h({attribute:!1})],q.prototype,"cameraManager",void 0),c([h({attribute:!1})],q.prototype,"microphoneManager",void 0),c([h({attribute:!1})],q.prototype,"viewFilterCameraID",void 0),c([b()],q.prototype,"_mediaHasLoaded",void 0),q=c([l("frigate-card-live-carousel")],q);let G=class extends g{constructor(){super(...arguments),this.load=!1,this.label="",this._isVideoMediaLoaded=!1,this._refProvider=y(),this._importPromises=[]}async play(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await j(this,this._refProvider.value)}async pause(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.pause())}async mute(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.mute())}async unmute(){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.unmute())}isMuted(){return this._refProvider.value?.isMuted()??!0}async seek(e){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.seek(e))}async setControls(e){await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.setControls(e))}isPaused(){return this._refProvider.value?.isPaused()??!0}async getScreenshotURL(){return await this.updateComplete,await(this._refProvider.value?.updateComplete),await(this._refProvider.value?.getScreenshotURL())??null}_getResolvedProvider(){return"auto"===this.cameraConfig?.live_provider?this.cameraConfig?.webrtc_card?.entity||this.cameraConfig?.webrtc_card?.url?"webrtc-card":this.cameraConfig?.camera_entity?"low"===this.cardWideConfig?.performance?.profile?"image":"ha":this.cameraConfig?.frigate.camera_name?"jsmpeg":w.cameras.live_provider:this.cameraConfig?.live_provider||"image"}_shouldShowImageDuringLoading(){return!!this.cameraConfig?.camera_entity&&!!this.hass&&!!this.liveConfig?.show_image_during_load}disconnectedCallback(){this._isVideoMediaLoaded=!1}_videoMediaShowHandler(){this._isVideoMediaLoaded=!0}willUpdate(e){if(e.has("load")&&(this.load||(this._isVideoMediaLoaded=!1,x(this))),e.has("liveConfig")&&(H(this,this.liveConfig?.layout),this.liveConfig?.show_image_during_load&&this._importPromises.push(import("./live-image-10d170f3.js")),this.liveConfig?.zoomable&&this._importPromises.push(import("./zoomer-345c3866.js"))),e.has("cameraConfig")){const e=this._getResolvedProvider();"jsmpeg"===e?this._importPromises.push(import("./live-jsmpeg-dca9a17d.js")):"ha"===e?this._importPromises.push(import("./live-ha-eae45077.js")):"webrtc-card"===e?this._importPromises.push(import("./live-webrtc-card-b6023b55.js")):"image"===e?this._importPromises.push(import("./live-image-10d170f3.js")):"go2rtc"===e&&this._importPromises.push(import("./live-go2rtc-87d41b74.js"))}}async getUpdateComplete(){const e=await super.getUpdateComplete();return await Promise.all(this._importPromises),this._importPromises=[],e}_useZoomIfRequired(e){return this.liveConfig?.zoomable?p` <frigate-card-zoomer
          @frigate-card:zoom:zoomed=${()=>this.setControls(!1)}
          @frigate-card:zoom:unzoomed=${()=>this.setControls()}
        >
          ${e}
        </frigate-card-zoomer>`:e}render(){if(!(this.load&&this.hass&&this.liveConfig&&this.cameraConfig))return;this.title=this.label,this.ariaLabel=this.label;const e=this._getResolvedProvider(),t=!this._isVideoMediaLoaded&&this._shouldShowImageDuringLoading(),i={hidden:t};if("ha"===e||"image"===e){const e=T(this,this.hass,this.cameraConfig);if(!e)return;if("unavailable"===e.state)return x(this),S({message:`${o("error.live_camera_unavailable")}${this.label?`: ${this.label}`:""}`,type:"info",icon:"mdi:cctv-off",dotdotdot:!0})}return this._useZoomIfRequired(p`
      ${t||"image"===e?p` <frigate-card-live-image
            ${I(this._refProvider)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            watermark=${$(t?"mdi:progress-helper":void 0)}
            @frigate-card:media:loaded=${t=>{"image"===e?this._videoMediaShowHandler():t.stopPropagation()}}
          >
          </frigate-card-live-image>`:p``}
      ${"ha"===e?p` <frigate-card-live-ha
            ${I(this._refProvider)}
            class=${m(i)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            ?controls=${this.liveConfig.controls.builtin}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-ha>`:"go2rtc"===e?p`<frigate-card-live-go2rtc
              ${I(this._refProvider)}
              class=${m(i)}
              .hass=${this.hass}
              .cameraConfig=${this.cameraConfig}
              .cameraEndpoints=${this.cameraEndpoints}
              .microphoneStream=${this.microphoneStream}
              .microphoneConfig=${this.liveConfig.microphone}
              ?controls=${this.liveConfig.controls.builtin}
              @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
            >
            </frigate-card-live-webrtc-card>`:"webrtc-card"===e?p`<frigate-card-live-webrtc-card
            ${I(this._refProvider)}
            class=${m(i)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            .cameraEndpoints=${this.cameraEndpoints}
            .cardWideConfig=${this.cardWideConfig}
            ?controls=${this.liveConfig.controls.builtin}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-webrtc-card>`:"jsmpeg"===e?p` <frigate-card-live-jsmpeg
            ${I(this._refProvider)}
            class=${m(i)}
            .hass=${this.hass}
            .cameraConfig=${this.cameraConfig}
            .cameraEndpoints=${this.cameraEndpoints}
            .cardWideConfig=${this.cardWideConfig}
            @frigate-card:media:loaded=${this._videoMediaShowHandler.bind(this)}
          >
          </frigate-card-live-jsmpeg>`:p``}
    `)}static get styles(){return v(":host {\n  display: block;\n  height: 100%;\n  width: 100;\n}\n\n.hidden {\n  display: none;\n}")}};c([h({attribute:!1})],G.prototype,"hass",void 0),c([h({attribute:!1})],G.prototype,"cameraConfig",void 0),c([h({attribute:!1})],G.prototype,"cameraEndpoints",void 0),c([h({attribute:!1})],G.prototype,"liveConfig",void 0),c([h({attribute:!0,type:Boolean})],G.prototype,"load",void 0),c([h({attribute:!1})],G.prototype,"label",void 0),c([h({attribute:!1})],G.prototype,"cardWideConfig",void 0),c([h({attribute:!1})],G.prototype,"microphoneStream",void 0),c([b()],G.prototype,"_isVideoMediaLoaded",void 0),G=c([l(W)],G);var X=Object.freeze({__proto__:null,get FrigateCardLive(){return B},get FrigateCardLiveGrid(){return Z},get FrigateCardLiveCarousel(){return q},get FrigateCardLiveProvider(){return G}});export{T as g,X as l};
