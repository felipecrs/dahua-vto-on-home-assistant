import{_ as e,n as i,cM as a,t,a as r,x as s,dA as n,r as o,cN as h,db as l}from"./card-98f237c0.js";import"./surround-basic-7ea183cd.js";let g=class extends r{_hasDrawer(){return!!this.thumbnailConfig&&["left","right"].includes(this.thumbnailConfig.mode)}willUpdate(e){this.timelineConfig?.mode&&"none"!==this.timelineConfig.mode&&import("./timeline-core-2739102d.js");const i=this.viewManagerEpoch?.manager.getView();e.has("viewManagerEpoch")&&(this.viewManagerEpoch?.manager.hasMajorMediaChange(this.viewManagerEpoch?.oldView)||this.viewManagerEpoch?.oldView?.displayMode!==i?.displayMode)&&(this._cameraIDsForTimeline=this._getCameraIDsForTimeline()??void 0)}_getCameraIDsForTimeline(){const e=this.viewManagerEpoch?.manager.getView();if(!e||!this.cameraManager)return null;if(e.is("live")){const i={anyCapabilities:["clips","snapshots","recordings"]};return e.supportsMultipleDisplayModes()&&e.isGrid()?this.cameraManager.getStore().getCameraIDsWithCapability(i):this.cameraManager.getStore().getAllDependentCameras(e.camera,i)}return e.isViewerView()?e.query?.getQueryCameraIDs()??null:null}render(){const e=this.viewManagerEpoch?.manager.getView();if(!this.hass||!e)return;const i=(e,i)=>{this.thumbnailConfig&&this._hasDrawer()&&l(e.composedPath()[0],"drawer:"+i,{drawer:this.thumbnailConfig.mode})};return s` <frigate-card-surround-basic
      @frigate-card:thumbnails:open=${e=>i(e,"open")}
      @frigate-card:thumbnails:close=${e=>i(e,"close")}
    >
      ${this.thumbnailConfig&&"none"!==this.thumbnailConfig.mode?s` <frigate-card-thumbnail-carousel
            slot=${this.thumbnailConfig.mode}
            .hass=${this.hass}
            .config=${this.thumbnailConfig}
            .cameraManager=${this.cameraManager}
            .fadeThumbnails=${e.isViewerView()}
            .viewManagerEpoch=${this.viewManagerEpoch}
            .selected=${e.queryResults?.getSelectedIndex()??void 0}
            @frigate-card:thumbnail-carousel:tap=${e=>{const a=e.detail.queryResults.getSelectedResult();a&&(this.viewManagerEpoch?.manager.setViewByParameters({params:{view:"media",queryResults:e.detail.queryResults,...a.getCameraID()&&{camera:a.getCameraID()}},modifiers:[new n(["timeline","mediaViewer"])]}),i(e,"close"))}}
          >
          </frigate-card-thumbnail-carousel>`:""}
      ${this.timelineConfig&&"none"!==this.timelineConfig.mode?s` <frigate-card-timeline-core
            slot=${this.timelineConfig.mode}
            .hass=${this.hass}
            .viewManagerEpoch=${this.viewManagerEpoch}
            .itemClickAction=${e.isViewerView()||!this.thumbnailConfig||"none"===this.thumbnailConfig?.mode?"play":"select"}
            .cameraIDs=${this._cameraIDsForTimeline}
            .mini=${!0}
            .timelineConfig=${this.timelineConfig}
            .thumbnailConfig=${this.thumbnailConfig}
            .cameraManager=${this.cameraManager}
            .cardWideConfig=${this.cardWideConfig}
          >
          </frigate-card-timeline-core>`:""}
      <slot></slot>
    </frigate-card-surround-basic>`}static get styles(){return o(h)}};e([i({attribute:!1})],g.prototype,"hass",void 0),e([i({attribute:!1})],g.prototype,"viewManagerEpoch",void 0),e([i({attribute:!1,hasChanged:a})],g.prototype,"thumbnailConfig",void 0),e([i({attribute:!1,hasChanged:a})],g.prototype,"timelineConfig",void 0),e([i({attribute:!1})],g.prototype,"cameraManager",void 0),e([i({attribute:!1})],g.prototype,"cardWideConfig",void 0),g=e([t("frigate-card-surround")],g);
