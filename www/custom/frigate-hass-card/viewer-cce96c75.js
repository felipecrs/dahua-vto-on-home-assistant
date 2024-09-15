import{_ as e,n as i,t,cM as a,b as r,a as s,cZ as o,l as n,x as d,r as l,cP as h,cD as c,cQ as g,s as u,dh as v,cU as m,cV as p,cO as f,cN as _,di as w,dj as y,d5 as C,dk as M,cY as $,cT as b,dg as P,dl as x,dm as V,dn as E,dp as k,dq as I}from"./card-98f237c0.js";import{M as z,A as F,a as S,i as R,p as T,h as q,s as D,u as j,b as W}from"./media-actions-controller-7e8eef55.js";import"./ha-hls-player-cf8578ae.js";import{m as A}from"./audio-cf3a75aa.js";import{V as U}from"./media-c9012082.js";import"./surround-130a1f2a.js";import"./surround-basic-7ea183cd.js";class H{constructor(e,i){this._key=e,this._property=i}modify(e){e.removeContextProperty(this._key,this._property)}}let L=class extends s{render(){if(this.hass&&this.viewManagerEpoch&&this.viewerConfig&&this.cameraManager&&this.cardWideConfig)return this.viewManagerEpoch.manager.getView()?.queryResults?.hasResults()?d` <frigate-card-viewer-grid
      .hass=${this.hass}
      .viewManagerEpoch=${this.viewManagerEpoch}
      .viewerConfig=${this.viewerConfig}
      .resolvedMediaCache=${this.resolvedMediaCache}
      .cameraManager=${this.cameraManager}
      .cardWideConfig=${this.cardWideConfig}
    >
    </frigate-card-viewer-grid>`:o({type:"info",message:n("common.no_media"),icon:"mdi:multimedia"})}static get styles(){return l(":host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nfrigate-card-viewer-carousel {\n  flex: 1;\n  min-height: 0;\n}")}};e([i({attribute:!1})],L.prototype,"hass",void 0),e([i({attribute:!1})],L.prototype,"viewManagerEpoch",void 0),e([i({attribute:!1})],L.prototype,"viewerConfig",void 0),e([i({attribute:!1})],L.prototype,"resolvedMediaCache",void 0),e([i({attribute:!1})],L.prototype,"cameraManager",void 0),e([i({attribute:!1})],L.prototype,"cardWideConfig",void 0),L=e([t("frigate-card-viewer")],L);const Q="frigate-card-viewer-provider";let G=class extends s{constructor(){super(...arguments),this.showControls=!0,this._selected=0,this._media=null,this._mediaActionsController=new z,this._player=null,this._refCarousel=h()}updated(e){super.updated(e),e.has("viewManagerEpoch")&&this.viewManagerEpoch?.manager.getView()?.context?.mediaViewer!==this.viewManagerEpoch?.oldView?.context?.mediaViewer&&this._seekHandler(),!this._mediaActionsController.hasRoot()&&this._refCarousel.value&&this._mediaActionsController.initialize(this._refCarousel.value)}connectedCallback(){super.connectedCallback(),this.requestUpdate()}disconnectedCallback(){this._mediaActionsController.destroy(),super.disconnectedCallback()}_getTransitionEffect(){return this.viewerConfig?.transition_effect??c.media_viewer.transition_effect}_getPlugins(){return[F({...this.viewerConfig?.lazy_load&&{lazyLoadCallback:(e,i)=>this._lazyloadSlide(i)}}),S(),g()]}_getMediaNeighbors(){const e=this._media?.length??0;if(!this._media)return null;const i=this._selected>0?this._selected-1:null,t=this._selected+1<e?this._selected+1:null;return{...null!==i&&{previous:{index:i,media:this._media[i]}},...null!==t&&{next:{index:t,media:this._media[t]}}}}_setViewSelectedIndex(e){const i=this.viewManagerEpoch?.manager.getView();if(!this._media||!i)return;if(this._selected===e)return;const t=i?.queryResults?.clone().selectIndex(e,this.viewFilterCameraID);if(!t)return;const a=t.getSelectedResult(this.viewFilterCameraID)?.getCameraID();this.viewManagerEpoch?.manager.setViewByParameters({params:{queryResults:t,...a&&{camera:a}},modifiers:[new H("mediaViewer","seek")]})}_lazyloadSlide(e){e instanceof HTMLSlotElement&&(e=e.assignedElements({flatten:!0})[0]);const i=e?.querySelector("frigate-card-viewer-provider");i&&(i.load=!0)}_getSlides(){if(!this._media)return[];const e=[];for(let i=0;i<this._media.length;++i){const t=this._media[i];if(t){const a=this._renderMediaItem(t);a&&(e[i]=a)}}return e}willUpdate(e){if(e.has("viewerConfig")&&this._mediaActionsController.setOptions({playerSelector:Q,...this.viewerConfig?.auto_play&&{autoPlayConditions:this.viewerConfig.auto_play},...this.viewerConfig?.auto_pause&&{autoPauseConditions:this.viewerConfig.auto_pause},...this.viewerConfig?.auto_mute&&{autoMuteConditions:this.viewerConfig.auto_mute},...this.viewerConfig?.auto_unmute&&{autoUnmuteConditions:this.viewerConfig.auto_unmute}}),e.has("viewManagerEpoch")){const e=this.viewManagerEpoch?.manager.getView(),i=e?.queryResults?.getResults(this.viewFilterCameraID)??null,t=e?.queryResults?.getSelectedIndex(this.viewFilterCameraID)??0,a=e?.context?.mediaViewer?.seek;i===this._media&&t===this._selected&&a||(u(this,!1,"unseekable"),this._media=i,this._selected=t),i?this._mediaActionsController.select(t):this._mediaActionsController.unselectAll()}}render(){const e=this._media?.length??0;if(!this._media||!e)return v(this,n("common.no_media"),"info",{icon:"mdi:multimedia"});const i=this._media[this._selected]??this._media[e-1];if(!this.hass||!this.cameraManager||!i)return;const t=this._getMediaNeighbors(),a=e=>{if(!t||!this._media)return;const i=("previous"===e?t.previous?.index:t.next?.index)??null;null!==i&&this._setViewSelectedIndex(i)},r=this.viewManagerEpoch?.manager.getView();return d`
      <frigate-card-carousel
        ${m(this._refCarousel)}
        .dragEnabled=${this.viewerConfig?.draggable??!0}
        .plugins=${R([this.viewerConfig,this._media],this._getPlugins.bind(this))}
        .selected=${this._selected}
        transitionEffect=${this._getTransitionEffect()}
        @frigate-card:carousel:select=${e=>{this._setViewSelectedIndex(e.detail.index)}}
        @frigate-card:media:loaded=${e=>{this._player=e.detail.player??null,this._seekHandler()}}
        @frigate-card:media:unloaded=${()=>{this._player=null}}
      >
        ${this.showControls?d` <frigate-card-next-previous-control
              slot="previous"
              .hass=${this.hass}
              .direction=${"previous"}
              .controlConfig=${this.viewerConfig?.controls.next_previous}
              .thumbnail=${t?.previous?.media.getThumbnail()??void 0}
              .label=${t?.previous?.media.getTitle()??""}
              ?disabled=${!t?.previous}
              @click=${e=>{a("previous"),p(e)}}
            ></frigate-card-next-previous-control>`:""}
        ${R([this._media,r],(()=>this._getSlides()))}
        ${this.showControls?d` <frigate-card-next-previous-control
              slot="next"
              .hass=${this.hass}
              .direction=${"next"}
              .controlConfig=${this.viewerConfig?.controls.next_previous}
              .thumbnail=${t?.next?.media.getThumbnail()??void 0}
              .label=${t?.next?.media.getTitle()??""}
              ?disabled=${!t?.next}
              @click=${e=>{a("next"),p(e)}}
            ></frigate-card-next-previous-control>`:""}
      </frigate-card-carousel>
      ${r?d` <frigate-card-ptz
            .config=${this.viewerConfig?.controls.ptz}
            .forceVisibility=${r?.context?.ptzControls?.enabled}
          >
          </frigate-card-ptz>`:""}
      <div class="seek-warning">
        <ha-icon title="${n("media_viewer.unseekable")}" icon="mdi:clock-remove">
        </ha-icon>
      </div>
    `}async _seekHandler(){const e=this.viewManagerEpoch?.manager.getView(),i=e?.context?.mediaViewer?.seek;if(!(this.hass&&i&&this._media&&this._player))return;const t=this._media[this._selected];if(!t)return;const a=t.includesTime(i);u(this,!a,"unseekable"),a||this._player.isPaused()?a&&this._player.isPaused()&&this._player.play():this._player.pause();const r=await(this.cameraManager?.getMediaSeekTime(t,i))??null;null!==r&&this._player.seek(r)}_renderMediaItem(e){const i=this.viewManagerEpoch?.manager.getView();return this.hass&&i&&this.viewerConfig?d` <div class="embla__slide">
      <frigate-card-viewer-provider
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .media=${e}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .load=${!this.viewerConfig.lazy_load}
        .cardWideConfig=${this.cardWideConfig}
      ></frigate-card-viewer-provider>
    </div>`:null}static get styles(){return l(":host {\n  position: relative;\n  --video-max-height: none;\n}\n\n:host([unselected]) frigate-card-carousel,\n:host([unselected]) .seek-warning {\n  pointer-events: none;\n}\n\n:host([unseekable]) frigate-card-carousel {\n  filter: brightness(50%);\n}\n\n:host([unseekable]) .seek-warning {\n  display: block;\n}\n\n.seek-warning {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  color: white;\n}\n\n.embla__slide {\n  height: 100%;\n  flex: 0 0 100%;\n}")}};e([i({attribute:!1})],G.prototype,"hass",void 0),e([i({attribute:!1})],G.prototype,"viewManagerEpoch",void 0),e([i({attribute:!1})],G.prototype,"viewFilterCameraID",void 0),e([i({attribute:!1,hasChanged:a})],G.prototype,"viewerConfig",void 0),e([i({attribute:!1})],G.prototype,"resolvedMediaCache",void 0),e([i({attribute:!1})],G.prototype,"cardWideConfig",void 0),e([i({attribute:!1})],G.prototype,"cameraManager",void 0),e([i({attribute:!1})],G.prototype,"showControls",void 0),e([r()],G.prototype,"_selected",void 0),G=e([t("frigate-card-viewer-carousel")],G);let B=class extends s{_renderCarousel(e){const i=this.viewManagerEpoch?.manager.getView()?.camera;return d`
      <frigate-card-viewer-carousel
        grid-id=${f(e)}
        .hass=${this.hass}
        .viewManagerEpoch=${this.viewManagerEpoch}
        .viewFilterCameraID=${e}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .cardWideConfig=${this.cardWideConfig}
        .showControls=${!e||i===e}
      >
      </frigate-card-viewer-carousel>
    `}willUpdate(e){e.has("viewManagerEpoch")&&this._needsGrid()&&import("./media-grid-c303bdc8.js")}_needsGrid(){const e=this.viewManagerEpoch?.manager.getView(),i=e?.queryResults?.getCameraIDs();return!!e?.isGrid()&&!!e?.supportsMultipleDisplayModes()&&(i?.size??0)>1}_gridSelectCamera(e){const i=this.viewManagerEpoch?.manager.getView();this.viewManagerEpoch?.manager.setViewByParameters({params:{camera:e,queryResults:i?.queryResults?.clone().promoteCameraSelectionToMainSelection(e)}})}render(){const e=this.viewManagerEpoch?.manager.getView(),i=e?.queryResults?.getCameraIDs();return i&&this._needsGrid()?d`
      <frigate-card-media-grid
        .selected=${e?.camera}
        .displayConfig=${this.viewerConfig?.display}
        @frigate-card:media-grid:selected=${e=>this._gridSelectCamera(e.detail.selected)}
      >
        ${[...i].map((e=>this._renderCarousel(e)))}
      </frigate-card-media-grid>
    `:this._renderCarousel()}static get styles(){return l(_)}};e([i({attribute:!1})],B.prototype,"hass",void 0),e([i({attribute:!1})],B.prototype,"viewManagerEpoch",void 0),e([i({attribute:!1})],B.prototype,"viewerConfig",void 0),e([i({attribute:!1})],B.prototype,"resolvedMediaCache",void 0),e([i({attribute:!1})],B.prototype,"cardWideConfig",void 0),e([i({attribute:!1})],B.prototype,"cameraManager",void 0),B=e([t("frigate-card-viewer-grid")],B);let N=class extends s{constructor(){super(...arguments),this.load=!1,this._refFrigateCardMediaPlayer=h(),this._refVideoProvider=h(),this._refImageProvider=h()}async play(){await T(this,this._refFrigateCardMediaPlayer.value??this._refVideoProvider.value)}async pause(){(this._refFrigateCardMediaPlayer.value||this._refVideoProvider.value)?.pause()}async mute(){this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.mute():this._refVideoProvider.value&&(this._refVideoProvider.value.muted=!0)}async unmute(){this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.mute():this._refVideoProvider.value&&(this._refVideoProvider.value.muted=!1)}isMuted(){return this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.isMuted()??!0:!this._refVideoProvider.value||this._refVideoProvider.value.muted}async seek(e){if(this._refFrigateCardMediaPlayer.value)return this._refFrigateCardMediaPlayer.value.seek(e);this._refVideoProvider.value&&(q(this._refVideoProvider.value),this._refVideoProvider.value.currentTime=e)}async setControls(e){if(this._refFrigateCardMediaPlayer.value)return this._refFrigateCardMediaPlayer.value.setControls(e);this._refVideoProvider.value&&D(this._refVideoProvider.value,e??this.viewerConfig?.controls.builtin??!0)}isPaused(){return this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value.isPaused():!this._refVideoProvider.value||this._refVideoProvider.value.paused}async getScreenshotURL(){return this._refFrigateCardMediaPlayer.value?await this._refFrigateCardMediaPlayer.value.getScreenshotURL():this._refVideoProvider.value?w(this._refVideoProvider.value):this._refImageProvider.value?this._refImageProvider.value.src:null}async _switchToRelatedClipView(){const e=this.viewManagerEpoch?.manager.getView();if(!(this.hass&&e&&this.cameraManager&&this.media&&y.isEvent(this.media)&&C.areEventQueries(e.query)))return;const i=e.query.clone();i.convertToClipsQueries();i.getQueries()&&await(this.viewManagerEpoch?.manager.setViewByParametersWithExistingQuery({params:{view:"media",query:i},queryExecutorOptions:{selectResult:{id:this.media.getID()??void 0},rejectResults:e=>!e.hasSelectedResult()}}))}willUpdate(e){const i=this.media?this.media.getContentID():null;if((e.has("load")||e.has("media")||e.has("viewerConfig")||e.has("resolvedMediaCache")||e.has("hass"))&&this.hass&&i&&!this.resolvedMediaCache?.has(i)&&(!this.viewerConfig?.lazy_load||this.load)&&M(this.hass,i,this.resolvedMediaCache).then((()=>{this.requestUpdate()})),e.has("viewerConfig")&&this.viewerConfig?.zoomable&&import("./zoomer-065546bd.js"),e.has("media")||e.has("cameraManager")){const e=this.media?.getCameraID(),i=e?this.cameraManager?.getStore().getCameraConfig(e):null;j(this,i?.dimensions?.layout),this.style.aspectRatio=$({ratio:i?.dimensions?.aspect_ratio})}}_useZoomIfRequired(e){if(!this.media)return e;const i=this.media.getCameraID(),t=this.media.getID()??void 0,a=this.cameraManager?.getStore().getCameraConfig(i),r=this.viewManagerEpoch?.manager.getView();return this.viewerConfig?.zoomable?d` <frigate-card-zoomer
          .defaultSettings=${R([a?.dimensions?.layout],(()=>a?.dimensions?.layout?{pan:a.dimensions.layout.pan,zoom:a.dimensions.layout.zoom}:void 0))}
          .settings=${t?r?.context?.zoom?.[t]?.requested:void 0}
          @frigate-card:zoom:zoomed=${()=>this.setControls(!1)}
          @frigate-card:zoom:unzoomed=${()=>this.setControls()}
          @frigate-card:zoom:change=${e=>b(e,this.viewManagerEpoch?.manager,t)}
        >
          ${e}
        </frigate-card-zoomer>`:e}render(){if(!(this.load&&this.media&&this.hass&&this.viewerConfig))return;const e=this.media.getContentID(),i=e?this.resolvedMediaCache?.get(e):null;return i?this._useZoomIfRequired(d`
      ${y.isVideo(this.media)?this.media.getVideoContentType()===U.HLS?d`<frigate-card-ha-hls-player
              ${m(this._refFrigateCardMediaPlayer)}
              allow-exoplayer
              aria-label="${this.media.getTitle()??""}"
              ?autoplay=${!1}
              controls
              muted
              playsinline
              title="${this.media.getTitle()??""}"
              url=${x(this.hass,i?.url)??""}
              .hass=${this.hass}
              ?controls=${this.viewerConfig.controls.builtin}
            >
            </frigate-card-ha-hls-player>`:d`
              <video
                ${m(this._refVideoProvider)}
                aria-label="${this.media.getTitle()??""}"
                title="${this.media.getTitle()??""}"
                muted
                playsinline
                crossorigin="anonymous"
                ?autoplay=${!1}
                ?controls=${this.viewerConfig.controls.builtin}
                @loadedmetadata=${e=>{e.target&&this.viewerConfig?.controls.builtin&&q(e.target,W)}}
                @loadeddata=${e=>{V(this,e,{player:this,capabilities:{supportsPause:!0,hasAudio:A(e.target)},technology:["hls"]})}}
                @volumechange=${()=>E(this)}
                @play=${()=>k(this)}
                @pause=${()=>I(this)}
              >
                <source
                  src=${x(this.hass,i?.url)??""}
                  type="video/mp4"
                />
              </video>
            `:d`<img
            ${m(this._refImageProvider)}
            aria-label="${this.media.getTitle()??""}"
            src="${x(this.hass,i?.url)??""}"
            title="${this.media.getTitle()??""}"
            @click=${()=>{this.viewerConfig?.snapshot_click_plays_clip&&this._switchToRelatedClipView()}}
            @load=${e=>{V(this,e,{player:this,technology:["jpg"]})}}
          />`}
    `):P({cardWideConfig:this.cardWideConfig})}static get styles(){return l(":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\nimg,\nvideo,\nfrigate-card-ha-hls-player {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: var(--frigate-card-media-layout-fit, contain);\n  object-position: var(--frigate-card-media-layout-position-x, 50%) var(--frigate-card-media-layout-position-y, 50%);\n  object-view-box: inset(var(--frigate-card-media-layout-view-box-top, 0%) var(--frigate-card-media-layout-view-box-right, 0%) var(--frigate-card-media-layout-view-box-bottom, 0%) var(--frigate-card-media-layout-view-box-left, 0%));\n}\n\nfrigate-card-progress-indicator {\n  padding: 30px;\n  box-sizing: border-box;\n}")}};e([i({attribute:!1})],N.prototype,"hass",void 0),e([i({attribute:!1})],N.prototype,"viewManagerEpoch",void 0),e([i({attribute:!1})],N.prototype,"media",void 0),e([i({attribute:!1})],N.prototype,"viewerConfig",void 0),e([i({attribute:!1})],N.prototype,"resolvedMediaCache",void 0),e([i({attribute:!1})],N.prototype,"load",void 0),e([i({attribute:!1})],N.prototype,"cameraManager",void 0),e([i({attribute:!1})],N.prototype,"cardWideConfig",void 0),N=e([t(Q)],N);export{L as FrigateCardViewer,G as FrigateCardViewerCarousel,B as FrigateCardViewerGrid,N as FrigateCardViewerProvider};
