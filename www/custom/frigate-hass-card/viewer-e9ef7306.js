import{s as e,cy as i,l as t,cV as a,cW as r,cX as s,y as o,bE as d,bF as n,bG as l,bI as h,cr as c,cd as u,cs as v,dj as g,dk as f,cv as m,cw as p,cp as _,bH as C,cq as w,dl as y,dm as $,cP as b,cQ as M,c$ as P,dn as x,dp as V,dq as I,dr as k,ds as F,dt as T,cz as S}from"./card-3c450f9e.js";import{A as R,a as q,b as z,g as W,i as D,p as E,h as j,s as G,M as U}from"./title-control-762f9db4.js";import"./ha-hls-player-c1401049.js";import{m as H}from"./audio-557099cb.js";import{u as L}from"./media-layout-8e0c974f.js";import{V as Q}from"./media-bc4ab1e8.js";let A=class extends e{render(){if(this.hass&&this.view&&this.viewerConfig&&this.cameraManager&&this.cardWideConfig){if(!this.view.queryResults?.hasResults()){const e=this.view.getDefaultMediaType();return e?("recordings"===e?a(this,this.cameraManager,this.cardWideConfig,this.view,{allCameras:this.view.isGrid(),targetView:"recording"}):r(this,this.cameraManager,this.cardWideConfig,this.view,{allCameras:this.view.isGrid(),targetView:"media",eventsMediaType:e}),s({cardWideConfig:this.cardWideConfig})):i({type:"info",message:t("common.no_media"),icon:"mdi:multimedia"})}return o` <frigate-card-viewer-grid
      .hass=${this.hass}
      .view=${this.view}
      .viewerConfig=${this.viewerConfig}
      .resolvedMediaCache=${this.resolvedMediaCache}
      .cameraManager=${this.cameraManager}
      .cardWideConfig=${this.cardWideConfig}
    >
    </frigate-card-viewer-grid>`}}static get styles(){return d(":host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\nfrigate-card-viewer-carousel {\n  flex: 1;\n  min-height: 0;\n}")}};n([l({attribute:!1})],A.prototype,"hass",void 0),n([l({attribute:!1})],A.prototype,"view",void 0),n([l({attribute:!1})],A.prototype,"viewerConfig",void 0),n([l({attribute:!1})],A.prototype,"resolvedMediaCache",void 0),n([l({attribute:!1})],A.prototype,"cameraManager",void 0),n([l({attribute:!1})],A.prototype,"cardWideConfig",void 0),A=n([h("frigate-card-viewer")],A);const N="frigate-card-viewer-provider";let X=class extends e{constructor(){super(...arguments),this._selected=0,this._media=null,this._refTitleControl=c(),this._player=null}updated(e){if(super.updated(e),e.has("view")){const i=e.get("view");this.view?.context?.mediaViewer!==i?.context?.mediaViewer&&this._seekHandler()}}_getTransitionEffect(){return this.viewerConfig?.transition_effect??u.media_viewer.transition_effect}_getPlugins(){return[R({...this.viewerConfig?.lazy_load&&{lazyLoadCallback:(e,i)=>this._lazyloadSlide(i)}}),q(),z({playerSelector:N,...this.viewerConfig?.auto_play&&{autoPlayConditions:this.viewerConfig.auto_play},...this.viewerConfig?.auto_pause&&{autoPauseConditions:this.viewerConfig.auto_pause},...this.viewerConfig?.auto_mute&&{autoMuteConditions:this.viewerConfig.auto_mute},...this.viewerConfig?.auto_unmute&&{autoUnmuteConditions:this.viewerConfig.auto_unmute}}),v()]}_getMediaNeighbors(){const e=this._media?.length??0;if(!this._media)return null;const i=this._selected>0?this._selected-1:null,t=this._selected+1<e?this._selected+1:null;return{...null!==i&&{previous:{index:i,media:this._media[i]}},...null!==t&&{next:{index:t,media:this._media[t]}}}}_setViewSelectedIndex(e){if(!this._media)return;if(this._selected===e)return;const i=this.view?.queryResults?.clone().selectIndex(e,this.viewFilterCameraID);if(!i)return;const t=i.getSelectedResult(this.viewFilterCameraID)?.getCameraID();this.view?.evolve({queryResults:i,...t&&{camera:t}}).removeContextProperty("mediaViewer","seek").dispatchChangeEvent(this)}_lazyloadSlide(e){e instanceof HTMLSlotElement&&(e=e.assignedElements({flatten:!0})[0]);const i=e?.querySelector("frigate-card-viewer-provider");i&&(i.load=!0)}_getSlides(){if(!this._media)return[];const e=[];for(let i=0;i<this._media.length;++i){const t=this._media[i];if(t){const a=this._renderMediaItem(t);a&&(e[i]=a)}}return e}willUpdate(e){if(e.has("viewerConfig")&&L(this,this.viewerConfig?.layout),e.has("view")){const e=this.view?.queryResults?.getResults(this.viewFilterCameraID)??null,i=this.view?.queryResults?.getSelectedIndex(this.viewFilterCameraID)??0,t=this.view?.context?.mediaViewer?.seek;e===this._media&&i===this._selected&&t||(g(this,!1,"unseekable"),this._media=e,this._selected=i)}}render(){const e=this._media?.length??0;if(!this._media||!e)return f(this,t("common.no_media"),"info",{icon:"mdi:multimedia"});const i=this._media[this._selected]??this._media[e-1];if(!this.hass||!this.cameraManager||!i)return;const a=this._getMediaNeighbors(),r=e=>{if(!a||!this._media)return;const i=("previous"===e?a.previous?.index:a.next?.index)??null;null!==i&&this._setViewSelectedIndex(i)},s=this.cameraManager.getCameraMetadata(i.getCameraID()),d=W(this.view,this.viewerConfig?.controls.title);return o`
      <frigate-card-carousel
        .dragEnabled=${this.viewerConfig?.draggable??!0}
        .plugins=${D([this.viewerConfig,this._media],this._getPlugins.bind(this))}
        .selected=${this._selected}
        transitionEffect=${this._getTransitionEffect()}
        @frigate-card:carousel:select=${e=>{this._setViewSelectedIndex(e.detail.index)}}
        @frigate-card:media:loaded=${e=>{this._refTitleControl.value&&this._refTitleControl.value.show(),this._player=e.detail.player??null,this._seekHandler()}}
        @frigate-card:media:unloaded=${()=>{this._player=null}}
      >
        <frigate-card-next-previous-control
          slot="previous"
          .hass=${this.hass}
          .direction=${"previous"}
          .controlConfig=${this.viewerConfig?.controls.next_previous}
          .thumbnail=${a?.previous?.media.getThumbnail()??void 0}
          .label=${a?.previous?.media.getTitle()??""}
          ?disabled=${!a?.previous}
          @click=${e=>{r("previous"),m(e)}}
        ></frigate-card-next-previous-control>
        ${D(this._media,(()=>this._getSlides()))}
        <frigate-card-next-previous-control
          slot="next"
          .hass=${this.hass}
          .direction=${"next"}
          .controlConfig=${this.viewerConfig?.controls.next_previous}
          .thumbnail=${a?.next?.media.getThumbnail()??void 0}
          .label=${a?.next?.media.getTitle()??""}
          ?disabled=${!a?.next}
          @click=${e=>{r("next"),m(e)}}
        ></frigate-card-next-previous-control>
      </frigate-card-carousel>
      <div class="seek-warning">
        <ha-icon title="${t("media_viewer.unseekable")}" icon="mdi:clock-remove">
        </ha-icon>
      </div>
      ${s&&d?o`<frigate-card-title-control
            ${p(this._refTitleControl)}
            .config=${d}
            .text="${i.getTitle()??void 0}"
            .logo="${s?.engineLogo}"
            .fitInto=${this}
          >
          </frigate-card-title-control> `:""}
    `}async _seekHandler(){const e=this.view?.context?.mediaViewer?.seek;if(!(this.hass&&e&&this._media&&this._player))return;const i=this._media[this._selected];if(!i)return;const t=i.includesTime(e);g(this,!t,"unseekable"),t||this._player.isPaused()?t&&this._player.isPaused()&&this._player.play():this._player.pause();const a=await(this.cameraManager?.getMediaSeekTime(i,e))??null;null!==a&&this._player.seek(a)}_renderMediaItem(e){return this.hass&&this.view&&this.viewerConfig?o` <div class="embla__slide">
      <frigate-card-viewer-provider
        .hass=${this.hass}
        .view=${this.view}
        .media=${e}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .load=${!this.viewerConfig.lazy_load}
        .cardWideConfig=${this.cardWideConfig}
      ></frigate-card-viewer-provider>
    </div>`:null}static get styles(){return d(":host {\n  position: relative;\n  --video-max-height: none;\n}\n\n:host([unselected]) frigate-card-carousel,\n:host([unselected]) .seek-warning {\n  pointer-events: none;\n}\n\n:host([unseekable]) frigate-card-carousel {\n  filter: brightness(50%);\n}\n\n:host([unseekable]) .seek-warning {\n  display: block;\n}\n\n.seek-warning {\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  color: white;\n}\n\n.embla__slide {\n  height: 100%;\n  flex: 0 0 100%;\n}")}};n([l({attribute:!1})],X.prototype,"hass",void 0),n([l({attribute:!1})],X.prototype,"view",void 0),n([l({attribute:!1})],X.prototype,"viewFilterCameraID",void 0),n([l({attribute:!1,hasChanged:_})],X.prototype,"viewerConfig",void 0),n([l({attribute:!1})],X.prototype,"resolvedMediaCache",void 0),n([l({attribute:!1})],X.prototype,"cardWideConfig",void 0),n([l({attribute:!1})],X.prototype,"cameraManager",void 0),n([C()],X.prototype,"_selected",void 0),X=n([h("frigate-card-viewer-carousel")],X);let Z=class extends e{_renderCarousel(e){return o`
      <frigate-card-viewer-carousel
        grid-id=${w(e)}
        .hass=${this.hass}
        .view=${this.view}
        .viewFilterCameraID=${e}
        .viewerConfig=${this.viewerConfig}
        .resolvedMediaCache=${this.resolvedMediaCache}
        .cameraManager=${this.cameraManager}
        .cardWideConfig=${this.cardWideConfig}
      >
      </frigate-card-viewer-carousel>
    `}_gridSelectCamera(e,i){const t=i??this.view,a=t?.queryResults?.clone().promoteCameraSelectionToMainSelection(e);t?.evolve({camera:e,queryResults:a}).dispatchChangeEvent(this)}willUpdate(e){e.has("view")&&this._needsGrid()&&import("./media-grid-c1f8037e.js")}_needsGrid(){const e=this.view?.queryResults?.getCameraIDs();return!!this.view?.isGrid()&&!!this.view?.supportsMultipleDisplayModes()&&(e?.size??0)>1}render(){const e=this.view?.queryResults?.getCameraIDs();return e&&this._needsGrid()?o`
      <frigate-card-media-grid
        .selected=${this.view?.camera}
        .displayConfig=${this.viewerConfig?.display}
        @frigate-card:media-grid:selected=${e=>this._gridSelectCamera(e.detail.selected)}
        @frigate-card:view:change=${e=>{e.stopPropagation();const i=e.detail;this._gridSelectCamera(i.camera,i)}}
      >
        ${[...e].map((e=>this._renderCarousel(e)))}
      </frigate-card-media-grid>
    `:this._renderCarousel()}static get styles(){return d(S)}};n([l({attribute:!1})],Z.prototype,"hass",void 0),n([l({attribute:!1})],Z.prototype,"view",void 0),n([l({attribute:!1})],Z.prototype,"viewerConfig",void 0),n([l({attribute:!1})],Z.prototype,"resolvedMediaCache",void 0),n([l({attribute:!1})],Z.prototype,"cardWideConfig",void 0),n([l({attribute:!1})],Z.prototype,"cameraManager",void 0),Z=n([h("frigate-card-viewer-grid")],Z);let Y=class extends e{constructor(){super(...arguments),this.load=!1,this._refFrigateCardMediaPlayer=c(),this._refVideoProvider=c(),this._refImageProvider=c()}async play(){await E(this,this._refFrigateCardMediaPlayer.value??this._refVideoProvider.value)}async pause(){(this._refFrigateCardMediaPlayer.value||this._refVideoProvider.value)?.pause()}async mute(){this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.mute():this._refVideoProvider.value&&(this._refVideoProvider.value.muted=!0)}async unmute(){this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.mute():this._refVideoProvider.value&&(this._refVideoProvider.value.muted=!1)}isMuted(){return this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value?.isMuted()??!0:!this._refVideoProvider.value||this._refVideoProvider.value.muted}async seek(e){if(this._refFrigateCardMediaPlayer.value)return this._refFrigateCardMediaPlayer.value.seek(e);this._refVideoProvider.value&&(j(this._refVideoProvider.value),this._refVideoProvider.value.currentTime=e)}async setControls(e){if(this._refFrigateCardMediaPlayer.value)return this._refFrigateCardMediaPlayer.value.setControls(e);this._refVideoProvider.value&&G(this._refVideoProvider.value,e??this.viewerConfig?.controls.builtin??!0)}isPaused(){return this._refFrigateCardMediaPlayer.value?this._refFrigateCardMediaPlayer.value.isPaused():!this._refVideoProvider.value||this._refVideoProvider.value.paused}async getScreenshotURL(){return this._refFrigateCardMediaPlayer.value?await this._refFrigateCardMediaPlayer.value.getScreenshotURL():this._refVideoProvider.value?y(this._refVideoProvider.value):this._refImageProvider.value?this._refImageProvider.value.src:null}async _dispatchRelatedClipView(){if(!(this.hass&&this.view&&this.cameraManager&&this.media&&$.isEvent(this.media)&&b.areEventQueries(this.view.query)))return;const e=this.view.query.clone();e.convertToClipsQueries();const i=e.getQueries();if(!i)return;let t;try{t=await this.cameraManager.executeMediaQueries(i)}catch(e){return void M(e)}if(!t)return;const a=new P({results:t});a.selectResultIfFound((e=>e.getID()===this.media?.getID())),a.hasSelectedResult()&&this.view.evolve({view:"media",query:e,queryResults:a}).dispatchChangeEvent(this)}willUpdate(e){const i=this.media?this.media.getContentID():null;(e.has("load")||e.has("media")||e.has("viewerConfig")||e.has("resolvedMediaCache")||e.has("hass"))&&this.hass&&i&&!this.resolvedMediaCache?.has(i)&&(!this.viewerConfig?.lazy_load||this.load)&&x(this.hass,i,this.resolvedMediaCache).then((()=>{this.requestUpdate()})),e.has("viewerConfig")&&this.viewerConfig?.zoomable&&import("./zoomer-345c3866.js")}_useZoomIfRequired(e){return this.viewerConfig?.zoomable?o` <frigate-card-zoomer
          @frigate-card:zoom:zoomed=${()=>this.setControls(!1)}
          @frigate-card:zoom:unzoomed=${()=>this.setControls()}
        >
          ${e}
        </frigate-card-zoomer>`:e}render(){if(!(this.load&&this.media&&this.hass&&this.view&&this.viewerConfig))return;const e=this.media.getContentID(),i=e?this.resolvedMediaCache?.get(e):null;return i?this._useZoomIfRequired(o`
      ${$.isVideo(this.media)?this.media.getVideoContentType()===Q.HLS?o`<frigate-card-ha-hls-player
              ${p(this._refFrigateCardMediaPlayer)}
              allow-exoplayer
              aria-label="${this.media.getTitle()??""}"
              ?autoplay=${!1}
              controls
              muted
              playsinline
              title="${this.media.getTitle()??""}"
              url=${V(this.hass,i?.url)??""}
              .hass=${this.hass}
              ?controls=${this.viewerConfig.controls.builtin}
            >
            </frigate-card-ha-hls-player>`:o`
              <video
                ${p(this._refVideoProvider)}
                aria-label="${this.media.getTitle()??""}"
                title="${this.media.getTitle()??""}"
                muted
                playsinline
                crossorigin="anonymous"
                ?autoplay=${!1}
                ?controls=${this.viewerConfig.controls.builtin}
                @loadedmetadata=${e=>{e.target&&this.viewerConfig?.controls.builtin&&j(e.target,U)}}
                @loadeddata=${e=>{I(this,e,{player:this,capabilities:{supportsPause:!0,hasAudio:H(e.target)}})}}
                @volumechange=${()=>k(this)}
                @play=${()=>F(this)}
                @pause=${()=>T(this)}
              >
                <source
                  src=${V(this.hass,i?.url)??""}
                  type="video/mp4"
                />
              </video>
            `:o`<img
            ${p(this._refImageProvider)}
            aria-label="${this.media.getTitle()??""}"
            src="${V(this.hass,i?.url)??""}"
            title="${this.media.getTitle()??""}"
            @click=${()=>{this.viewerConfig?.snapshot_click_plays_clip&&this._dispatchRelatedClipView()}}
            @load=${e=>{I(this,e,{player:this})}}
          />`}
    `):s({cardWideConfig:this.cardWideConfig})}static get styles(){return d(":host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\nimg,\nvideo,\nfrigate-card-ha-hls-player {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: var(--frigate-card-media-layout-fit, contain);\n  object-position: var(--frigate-card-media-layout-position-x, 50%) var(--frigate-card-media-layout-position-y, 50%);\n}\n\nfrigate-card-progress-indicator {\n  padding: 30px;\n  box-sizing: border-box;\n}")}};n([l({attribute:!1})],Y.prototype,"hass",void 0),n([l({attribute:!1})],Y.prototype,"view",void 0),n([l({attribute:!1})],Y.prototype,"media",void 0),n([l({attribute:!1})],Y.prototype,"viewerConfig",void 0),n([l({attribute:!1})],Y.prototype,"resolvedMediaCache",void 0),n([l({attribute:!1})],Y.prototype,"load",void 0),n([l({attribute:!1})],Y.prototype,"cameraManager",void 0),n([l({attribute:!1})],Y.prototype,"cardWideConfig",void 0),Y=n([h(N)],Y);export{A as FrigateCardViewer,X as FrigateCardViewerCarousel,Z as FrigateCardViewerGrid,Y as FrigateCardViewerProvider};
