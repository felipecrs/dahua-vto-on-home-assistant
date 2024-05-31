import{l as e,s as a,c as n,i as t,a as i,b as o,y as s,g as l,d as r,p as c,C as d,e as m,f as u,h,j as _,k as b,m as p,n as g,o as v,q as f,r as $,F as y,t as w,u as S,v as M,w as x,x as I,B as C,T as O,z,A as T,D as k,E as N,G as A,H as B,I as P,J as H,K as E,L,M as U,N as j,O as q,P as V,Q as Z,R as F,S as D,U as R,V as G,W as J,X as K,Y as Q,Z as W,_ as X,$ as Y,a0 as ee,a1 as ae,a2 as ne,a3 as te,a4 as ie,a5 as oe,a6 as se,a7 as le,a8 as re,a9 as ce,aa as de,ab as me,ac as ue,ad as he,ae as _e,af as be,ag as pe,ah as ge,ai as ve,aj as fe,ak as $e,al as ye,am as we,an as Se,ao as Me,ap as xe,aq as Ie,ar as Ce,as as Oe,at as ze,au as Te,av as ke,aw as Ne,ax as Ae,ay as Be,az as Pe,aA as He,aB as Ee,aC as Le,aD as Ue,aE as je,aF as qe,aG as Ve,aH as Ze,aI as Fe,aJ as De,aK as Re,aL as Ge,aM as Je,aN as Ke,aO as Qe,aP as We,aQ as Xe,aR as Ye,aS as ea,aT as aa,aU as na,aV as ta,aW as ia,aX as oa,aY as sa,aZ as la,a_ as ra,a$ as ca,b0 as da,b1 as ma,b2 as ua,b3 as ha,b4 as _a,b5 as ba,b6 as pa,b7 as ga,b8 as va,b9 as fa,ba as $a,bb as ya,bc as wa,bd as Sa,be as Ma,bf as xa,bg as Ia,bh as Ca,bi as Oa,bj as za,bk as Ta,bl as ka,bm as Na,bn as Aa,bo as Ba,bp as Pa,bq as Ha,br as Ea,bs as La,bt as Ua,bu as ja,bv as qa,bw as Va,bx as Za,by as Fa,bz as Da,bA as Ra,bB as Ga,bC as Ja,bD as Ka,bE as Qa,bF as Wa,bG as Xa,bH as Ya,bI as en,bJ as an,bK as nn,bL as tn,bM as on,bN as sn,bO as ln,bP as rn,bQ as cn,bR as dn,bS as mn,bT as un,bU as hn,bV as _n,bW as bn,bX as pn,bY as gn,bZ as vn,b_ as fn,b$ as $n,c0 as yn,c1 as wn,c2 as Sn,c3 as Mn,c4 as xn,c5 as In,c6 as Cn,c7 as On,c8 as zn,c9 as Tn,ca as kn,cb as Nn,cc as An,cd as Bn}from"./card-3c450f9e.js";const Pn="buttons",Hn="cameras",En="options",Ln={cameras:{icon:"video",name:e("editor.cameras"),secondary:e("editor.cameras_secondary")},view:{icon:"eye",name:e("editor.view"),secondary:e("editor.view_secondary")},menu:{icon:"menu",name:e("editor.menu"),secondary:e("editor.menu_secondary")},live:{icon:"cctv",name:e("editor.live"),secondary:e("editor.live_secondary")},media_gallery:{icon:"grid",name:e("editor.media_gallery"),secondary:e("editor.media_gallery_secondary")},media_viewer:{icon:"filmstrip",name:e("editor.media_viewer"),secondary:e("editor.media_viewer_secondary")},image:{icon:"image",name:e("editor.image"),secondary:e("editor.image_secondary")},timeline:{icon:"chart-gantt",name:e("editor.timeline"),secondary:e("editor.timeline_secondary")},dimensions:{icon:"aspect-ratio",name:e("editor.dimensions"),secondary:e("editor.dimensions_secondary")},performance:{icon:"speedometer",name:e("editor.performance"),secondary:e("editor.performance_secondary")},overrides:{icon:"file-replace",name:e("editor.overrides"),secondary:e("editor.overrides_secondary")}};let Un=class extends a{constructor(){super(...arguments),this._defaults=n(Bn),this._initialized=!1,this._configUpgradeable=!1,this._expandedMenus={},this._viewModes=[{value:"",label:""},{value:"live",label:e("config.view.views.live")},{value:"clips",label:e("config.view.views.clips")},{value:"snapshots",label:e("config.view.views.snapshots")},{value:"recordings",label:e("config.view.views.recordings")},{value:"clip",label:e("config.view.views.clip")},{value:"snapshot",label:e("config.view.views.snapshot")},{value:"recording",label:e("config.view.views.recording")},{value:"image",label:e("config.view.views.image")},{value:"timeline",label:e("config.view.views.timeline")}],this._cameraSelectViewModes=[...this._viewModes,{value:"current",label:e("config.view.views.current")}],this._filterModes=[{value:"",label:""},{value:"none",label:e("config.common.controls.filter.modes.none")},{value:"left",label:e("config.common.controls.filter.modes.left")},{value:"right",label:e("config.common.controls.filter.modes.right")}],this._menuStyles=[{value:"",label:""},{value:"none",label:e("config.menu.styles.none")},{value:"hidden",label:e("config.menu.styles.hidden")},{value:"overlay",label:e("config.menu.styles.overlay")},{value:"hover",label:e("config.menu.styles.hover")},{value:"hover-card",label:e("config.menu.styles.hover-card")},{value:"outside",label:e("config.menu.styles.outside")}],this._menuPositions=[{value:"",label:""},{value:"left",label:e("config.menu.positions.left")},{value:"right",label:e("config.menu.positions.right")},{value:"top",label:e("config.menu.positions.top")},{value:"bottom",label:e("config.menu.positions.bottom")}],this._menuAlignments=[{value:"",label:""},{value:"left",label:e("config.menu.alignments.left")},{value:"right",label:e("config.menu.alignments.right")},{value:"top",label:e("config.menu.alignments.top")},{value:"bottom",label:e("config.menu.alignments.bottom")}],this._nextPreviousControlStyles=[{value:"",label:""},{value:"chevrons",label:e("config.common.controls.next_previous.styles.chevrons")},{value:"icons",label:e("config.common.controls.next_previous.styles.icons")},{value:"none",label:e("config.common.controls.next_previous.styles.none")},{value:"thumbnails",label:e("config.common.controls.next_previous.styles.thumbnails")}],this._aspectRatioModes=[{value:"",label:""},{value:"dynamic",label:e("config.dimensions.aspect_ratio_modes.dynamic")},{value:"static",label:e("config.dimensions.aspect_ratio_modes.static")},{value:"unconstrained",label:e("config.dimensions.aspect_ratio_modes.unconstrained")}],this._thumbnailModes=[{value:"",label:""},{value:"none",label:e("config.common.controls.thumbnails.modes.none")},{value:"above",label:e("config.common.controls.thumbnails.modes.above")},{value:"below",label:e("config.common.controls.thumbnails.modes.below")},{value:"left",label:e("config.common.controls.thumbnails.modes.left")},{value:"right",label:e("config.common.controls.thumbnails.modes.right")}],this._thumbnailMediaTypes=[{value:"",label:""},{value:"events",label:e("config.common.controls.thumbnails.media_types.events")},{value:"recordings",label:e("config.common.controls.thumbnails.media_types.recordings")}],this._thumbnailEventsMediaTypes=[{value:"",label:""},{value:"clips",label:e("config.common.controls.thumbnails.events_media_types.clips")},{value:"snapshots",label:e("config.common.controls.thumbnails.events_media_types.snapshots")}],this._titleModes=[{value:"",label:""},{value:"none",label:e("config.common.controls.title.modes.none")},{value:"popup-top-left",label:e("config.common.controls.title.modes.popup-top-left")},{value:"popup-top-right",label:e("config.common.controls.title.modes.popup-top-right")},{value:"popup-bottom-left",label:e("config.common.controls.title.modes.popup-bottom-left")},{value:"popup-bottom-right",label:e("config.common.controls.title.modes.popup-bottom-right")}],this._transitionEffects=[{value:"",label:""},{value:"none",label:e("config.media_viewer.transition_effects.none")},{value:"slide",label:e("config.media_viewer.transition_effects.slide")}],this._imageModes=[{value:"",label:""},{value:"camera",label:e("config.image.modes.camera")},{value:"screensaver",label:e("config.image.modes.screensaver")},{value:"url",label:e("config.image.modes.url")}],this._timelineEventsMediaTypes=[{value:"",label:""},{value:"all",label:e("config.common.timeline.events_media_types.all")},{value:"clips",label:e("config.common.timeline.events_media_types.clips")},{value:"snapshots",label:e("config.common.timeline.events_media_types.snapshots")}],this._timelineStyleTypes=[{value:"",label:""},{value:"ribbon",label:e("config.common.timeline.styles.ribbon")},{value:"stack",label:e("config.common.timeline.styles.stack")}],this._darkModes=[{value:"",label:""},{value:"on",label:e("config.view.dark_modes.on")},{value:"off",label:e("config.view.dark_modes.off")},{value:"auto",label:e("config.view.dark_modes.auto")}],this._mediaActionNegativeConditions=[{value:"",label:""},{value:"unselected",label:e("config.common.media_action_conditions.unselected")},{value:"hidden",label:e("config.common.media_action_conditions.hidden")}],this._mediaActionPositiveConditions=[{value:"",label:""},{value:"selected",label:e("config.common.media_action_conditions.selected")},{value:"visible",label:e("config.common.media_action_conditions.visible")}],this._mediaLiveUnmuteConditions=[...this._mediaActionPositiveConditions,{value:"microphone",label:e("config.common.media_action_conditions.microphone_unmute")}],this._mediaLiveMuteConditions=[...this._mediaActionNegativeConditions,{value:"microphone",label:e("config.common.media_action_conditions.microphone_mute")}],this._layoutFits=[{value:"",label:""},{value:"contain",label:e("config.common.layout.fits.contain")},{value:"cover",label:e("config.common.layout.fits.cover")},{value:"fill",label:e("config.common.layout.fits.fill")}],this._miniTimelineModes=[{value:"",label:""},{value:"none",label:e("config.common.controls.timeline.modes.none")},{value:"above",label:e("config.common.controls.timeline.modes.above")},{value:"below",label:e("config.common.controls.timeline.modes.below")}],this._performanceProfiles=[{value:"",label:""},{value:"low",label:e("config.performance.profiles.low")},{value:"high",label:e("config.performance.profiles.high")}],this._go2rtcModes=[{value:"",label:""},{value:"mse",label:e("config.cameras.go2rtc.modes.mse")},{value:"webrtc",label:e("config.cameras.go2rtc.modes.webrtc")},{value:"mp4",label:e("config.cameras.go2rtc.modes.mp4")},{value:"mjpeg",label:e("config.cameras.go2rtc.modes.mjpeg")}],this._microphoneButtonTypes=[{value:"",label:""},{value:"momentary",label:e("config.menu.buttons.types.momentary")},{value:"toggle",label:e("config.menu.buttons.types.toggle")}],this._displayModes=[{value:"",label:""},{value:"single",label:e("display_modes.single")},{value:"grid",label:e("display_modes.grid")}],this._castMethods=[{value:"",label:""},{value:"standard",label:e("config.cameras.cast.methods.standard")},{value:"dashboard",label:e("config.cameras.cast.methods.dashboard")}],this._ptzModes=[{value:"",label:""},{value:"on",label:e("config.live.controls.ptz.modes.on")},{value:"off",label:e("config.live.controls.ptz.modes.off")},{value:"auto",label:e("config.live.controls.ptz.modes.auto")}],this._ptzOrientations=[{value:"",label:""},{value:"vertical",label:e("config.live.controls.ptz.orientations.vertical")},{value:"horizontal",label:e("config.live.controls.ptz.orientations.horizontal")}],this._ptzPositions=[{value:"",label:""},{value:"top-left",label:e("config.live.controls.ptz.positions.top-left")},{value:"top-right",label:e("config.live.controls.ptz.positions.top-right")},{value:"bottom-left",label:e("config.live.controls.ptz.positions.bottom-left")},{value:"bottom-right",label:e("config.live.controls.ptz.positions.bottom-right")}],this._scanActionsInteractionModes=[{value:"",label:""},{value:"all",label:e("config.view.scan.actions.interaction_modes.all")},{value:"inactive",label:e("config.view.scan.actions.interaction_modes.inactive")},{value:"active",label:e("config.view.scan.actions.interaction_modes.active")}],this._scanActionsTrigger=[{value:"",label:""},{value:"live",label:e("config.view.scan.actions.triggers.live")},{value:"none",label:e("config.view.scan.actions.triggers.none")}],this._scanActionsUntrigger=[{value:"",label:""},{value:"default",label:e("config.view.scan.actions.untriggers.default")},{value:"none",label:e("config.view.scan.actions.untriggers.none")}]}setConfig(e){this._config=e,this._configUpgradeable=t(e);let a=null;try{a=this._config.performance?.profile}catch(e){}if("high"===a||"low"===a){const e=n(Bn);"low"===a&&i(this._config,e),this._defaults=e}}willUpdate(){this._initialized||o().then((e=>{e&&(this._initialized=!0)}))}_renderOptionSetHeader(e,a){const n=Ln[e];return s`
      <div
        class="option option-${e}"
        @click=${this._toggleMenu}
        .domain=${"options"}
        .key=${e}
      >
        <div class="row">
          <ha-icon .icon=${`mdi:${n.icon}`}></ha-icon>
          <div class="title ${a??""}">${n.name}</div>
        </div>
        <div class="secondary">${n.secondary}</div>
      </div>
    `}_getLabel(a){const n=a.split(".").filter((e=>!e.match(/^\[[0-9]+\]$/))).join(".");return e(`config.${n}`)}_renderEntitySelector(e,a){if(this._config)return s`
      <ha-selector
        .hass=${this.hass}
        .selector=${{entity:{domain:a}}}
        .label=${this._getLabel(e)}
        .value=${l(this._config,e,"")}
        .required=${!1}
        @value-changed=${a=>this._valueChangedHandler(e,a)}
      >
      </ha-selector>
    `}_renderOptionSelector(e,a=[],n){if(this._config)return s`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",multiple:!!n?.multiple,custom_value:!a.length,options:a}}}
        .label=${n?.label||this._getLabel(e)}
        .value=${l(this._config,e,"")}
        .required=${!1}
        @value-changed=${a=>this._valueChangedHandler(e,a)}
      >
      </ha-selector>
    `}_renderIconSelector(e,a){if(this._config)return s`
      <ha-selector
        .hass=${this.hass}
        .selector=${{icon:{}}}
        .label=${a?.label||this._getLabel(e)}
        .value=${l(this._config,e,"")}
        .required=${!1}
        @value-changed=${a=>this._valueChangedHandler(e,a)}
      >
      </ha-selector>
    `}_renderNumberInput(e,a){if(!this._config)return;const n=l(this._config,e),t=void 0===a?.max?"box":"slider";return s`
      <ha-selector
        .hass=${this.hass}
        .selector=${{number:{min:a?.min||0,max:a?.max,mode:t}}}
        .label=${a?.label||this._getLabel(e)}
        .value=${n??a?.default}
        .required=${!1}
        @value-changed=${a=>this._valueChangedHandler(e,a)}
      >
      </ha-selector>
    `}_renderInfo(e){return s` <span class="info">${e}</span>`}_getEditorCameraTitle(a,n){return"string"==typeof n?.title&&n.title||("string"==typeof n?.camera_entity?r(this.hass,n.camera_entity):"")||"object"==typeof n?.webrtc_card&&n.webrtc_card&&"string"==typeof n.webrtc_card.entity&&n.webrtc_card.entity||("object"==typeof n?.frigate&&n.frigate&&"string"==typeof n?.frigate.camera_name&&n.frigate.camera_name?c(n.frigate.camera_name):"")||"string"==typeof n?.id&&n.id||e("editor.camera")+" #"+a}_renderViewScanMenu(){return this._putInSubmenu("scan",!0,`config.${d}.editor_label`,{name:"mdi:target-account"},s`
        ${this._renderSwitch(m,this._defaults.view.scan.enabled,{label:e(`config.${m}`)})}
        ${this._renderSwitch(u,this._defaults.view.scan.filter_selected_camera,{label:e(`config.${u}`)})}
        ${this._renderSwitch(h,this._defaults.view.scan.show_trigger_status,{label:e(`config.${h}`)})}
        ${this._renderNumberInput(_,{default:this._defaults.view.scan.untrigger_seconds})}
        ${this._putInSubmenu("scan.actions",!0,`config.${b}.editor_label`,{name:"mdi:cogs"},s` ${this._renderOptionSelector(p,this._scanActionsTrigger,{label:e("config.view.scan.actions.trigger")})}
          ${this._renderOptionSelector(g,this._scanActionsUntrigger,{label:e("config.view.scan.actions.untrigger")})}
          ${this._renderOptionSelector(v,this._scanActionsInteractionModes,{label:e("config.view.scan.actions.interaction_mode")})}`)}
      `)}_renderMenuButton(a,n){const t=[{value:"",label:""},{value:"matching",label:e("config.menu.buttons.alignments.matching")},{value:"opposing",label:e("config.menu.buttons.alignments.opposing")}],i={submenu:!0,selected:this._expandedMenus[Pn]===a};return s`
      <div class="${f(i)}">
        <div
          class="submenu-header"
          @click=${this._toggleMenu}
          .domain=${Pn}
          .key=${a}
        >
          <ha-icon .icon=${"mdi:gesture-tap-button"}></ha-icon>
          <span
            >${e("editor.button")+": "+e(`config.${$}.${a}`)}</span
          >
        </div>

        ${this._expandedMenus[Pn]===a?s` <div class="values">
              ${this._renderSwitch(`${$}.${a}.enabled`,this._defaults.menu.buttons[a]?.enabled??!0,{label:e("config.menu.buttons.enabled")})}
              ${this._renderOptionSelector(`${$}.${a}.alignment`,t,{label:e("config.menu.buttons.alignment")})}
              ${this._renderNumberInput(`${$}.${a}.priority`,{max:y,default:this._defaults.menu.buttons[a]?.priority,label:e("config.menu.buttons.priority")})}
              ${this._renderIconSelector(`${$}.${a}.icon`,{label:e("config.menu.buttons.icon")})}
              ${n}
            </div>`:""}
      </div>
    `}_putInSubmenu(a,n,t,i,o){const l=this._expandedMenus[a]===n;return s` <div class="${f({submenu:!0,selected:l})}">
      <div
        class="submenu-header"
        @click=${this._toggleMenu}
        .domain=${a}
        .key=${n}
      >
        ${i.name?s` <ha-icon .icon=${i.name}></ha-icon> `:i.path?s`
              <ha-svg-icon .viewBox=${i.viewBox} .path="${i.path}"></ha-svg-icon>
            `:""}
        <span>${e(t)}</span>
      </div>
      ${l?s`<div class="values">${o}</div>`:""}
    </div>`}_renderMediaLayout(a,n,t,i,o){return this._putInSubmenu(a,!0,n,{name:"mdi:page-layout-body"},s`
        ${this._renderOptionSelector(t,this._layoutFits,{label:e("config.common.layout.fit")})}
        ${this._renderNumberInput(i,{min:0,max:100,label:e("config.common.layout.position.x")})}
        ${this._renderNumberInput(o,{min:0,max:100,label:e("config.common.layout.position.y")})}
      `)}_renderTimelineCoreControls(a,n,t,i,o,l){return s` ${this._renderOptionSelector(a,this._timelineStyleTypes,{label:e(`config.common.${w}`)})}
    ${this._renderNumberInput(n,{label:e(`config.common.${S}`)})}
    ${this._renderNumberInput(t,{label:e(`config.common.${M}`)})}
    ${this._renderOptionSelector(i,this._timelineEventsMediaTypes,{label:e(`config.common.${x}`)})}
    ${this._renderSwitch(o,l,{label:e(`config.common.${I}`)})}`}_renderMiniTimeline(a,n,t,i,o,l,r,c){return this._putInSubmenu(a,!0,"config.common.controls.timeline.editor_label",{name:"mdi:chart-gantt"},s` ${this._renderOptionSelector(n,this._miniTimelineModes,{label:e("config.common.controls.timeline.mode")})}
      ${this._renderTimelineCoreControls(t,i,o,l,r,c)}`)}_renderViewDisplay(a,n,t,i,o){return this._putInSubmenu(a,!0,"config.common.display.editor_label",{name:"mdi:palette-swatch"},s`
        ${this._renderOptionSelector(n,this._displayModes,{label:e("config.common.display.mode")})}
        ${this._renderNumberInput(t,{min:0,label:e("config.common.display.grid_selected_width_factor")})}
        ${this._renderNumberInput(i,{min:0,label:e("config.common.display.grid_columns")})}
        ${this._renderNumberInput(o,{min:0,label:e("config.common.display.grid_max_columns")})}
      `)}_renderNextPreviousControls(a,n,t,i){return this._putInSubmenu(a,!0,"config.common.controls.next_previous.editor_label",{name:"mdi:arrow-right-bold-circle"},s`
        ${this._renderOptionSelector(n,this._nextPreviousControlStyles.filter((e=>!(!i?.allowThumbnails&&"thumbnails"===e.value||!i?.allowIcons&&"icons"===e.value))),{label:e("config.common.controls.next_previous.style")})}
        ${this._renderNumberInput(t,{min:C,label:e("config.common.controls.next_previous.size")})}
      `)}_renderThumbnailsControls(a,n,t,i,o,l,r,c){return this._putInSubmenu(a,!0,"config.common.controls.thumbnails.editor_label",{name:"mdi:image-text"},s`
        ${c?.configPathMode?s`${this._renderOptionSelector(c.configPathMode,this._thumbnailModes,{label:e("config.common.controls.thumbnails.mode")})}`:s``}
        ${c?.configPathMediaType?s`${this._renderOptionSelector(c.configPathMediaType,this._thumbnailMediaTypes,{label:e("config.common.controls.thumbnails.media_type")})}`:s``}
        ${c?.configPathEventsMediaType?s`${this._renderOptionSelector(c.configPathEventsMediaType,this._thumbnailEventsMediaTypes,{label:e("config.common.controls.thumbnails.events_media_type")})}`:s``}
        ${this._renderNumberInput(n,{min:O,max:z,label:e("config.common.controls.thumbnails.size")})}
        ${this._renderSwitch(t,r.show_details,{label:e("config.common.controls.thumbnails.show_details")})}
        ${this._renderSwitch(i,r.show_favorite_control,{label:e("config.common.controls.thumbnails.show_favorite_control")})}
        ${this._renderSwitch(o,r.show_timeline_control,{label:e("config.common.controls.thumbnails.show_timeline_control")})}
        ${this._renderSwitch(l,r.show_download_control,{label:e("config.common.controls.thumbnails.show_download_control")})}
      `)}_renderFilterControls(a,n){return this._putInSubmenu(a,!0,"config.common.controls.filter.editor_label",{name:"mdi:filter-cog"},s`
        ${n?s`${this._renderOptionSelector(n,this._filterModes,{label:e("config.common.controls.filter.mode")})}`:s``}
      `)}_renderTitleControls(a,n,t){return this._putInSubmenu(a,!0,"config.common.controls.title.editor_label",{name:"mdi:subtitles"},s` ${this._renderOptionSelector(n,this._titleModes,{label:e("config.common.controls.title.mode")})}
      ${this._renderNumberInput(t,{min:0,max:60,label:e("config.common.controls.title.duration_seconds")})}`)}_renderCamera(a,t,i,o){const l=[{value:"",label:""},{value:"auto",label:e("config.cameras.live_providers.auto")},{value:"ha",label:e("config.cameras.live_providers.ha")},{value:"image",label:e("config.cameras.live_providers.image")},{value:"jsmpeg",label:e("config.cameras.live_providers.jsmpeg")},{value:"go2rtc",label:e("config.cameras.live_providers.go2rtc")},{value:"webrtc-card",label:e("config.cameras.live_providers.webrtc-card")}],r=[];a.forEach(((e,a)=>{a!==t&&r.push({value:T(e),label:this._getEditorCameraTitle(a,e)})}));const c=e=>{if(this._config){const a=n(this._config);e(a)&&this._updateConfig(a)}},d={submenu:!0,selected:this._expandedMenus[Hn]===t};return s`
      <div class="${f(d)}">
        <div
          class="submenu-header"
          @click=${this._toggleMenu}
          .domain=${Hn}
          .key=${t}
        >
          <ha-icon .icon=${o?"mdi:video-plus":"mdi:video"}></ha-icon>
          <span>
            ${o?s` <span class="new-camera">
                  [${e("editor.add_new_camera")}...]
                </span>`:s`<span
                  >${this._getEditorCameraTitle(t,a[t]||{})}</span
                >`}
          </span>
        </div>
        ${this._expandedMenus[Hn]===t?s` <div class="values">
              <div class="controls">
                <ha-icon-button
                  class="button"
                  .label=${e("editor.move_up")}
                  .disabled=${o||!this._config||!Array.isArray(this._config.cameras)||t<=0}
                  @click=${()=>!o&&c((e=>!!(Array.isArray(e.cameras)&&t>0)&&(an(e.cameras,t,t-1),this._openMenu(Hn,t-1),!0)))}
                >
                  <ha-icon icon="mdi:arrow-up"></ha-icon>
                </ha-icon-button>
                <ha-icon-button
                  class="button"
                  .label=${e("editor.move_down")}
                  .disabled=${o||!this._config||!Array.isArray(this._config.cameras)||t>=this._config.cameras.length-1}
                  @click=${()=>!o&&c((e=>!!(Array.isArray(e.cameras)&&t<e.cameras.length-1)&&(an(e.cameras,t,t+1),this._openMenu(Hn,t+1),!0)))}
                >
                  <ha-icon icon="mdi:arrow-down"></ha-icon>
                </ha-icon-button>
                <ha-icon-button
                  class="button"
                  .label=${e("editor.delete")}
                  .disabled=${o}
                  @click=${()=>{c((e=>!!Array.isArray(e.cameras)&&(e.cameras.splice(t,1),this._closeMenu(Hn),!0)))}}
                >
                  <ha-icon icon="mdi:delete"></ha-icon>
                </ha-icon-button>
              </div>
              ${this._renderEntitySelector(k(nn,t),"camera")}
              ${this._renderOptionSelector(k(tn,t),l)}
              ${this._renderStringInput(k(on,t))}
              ${this._renderIconSelector(k(sn,t),{label:e("config.cameras.icon")})}
              ${this._renderStringInput(k(ln,t))}
              ${this._renderSwitch(k(rn,t),this._defaults.cameras.hide)}
              ${this._putInSubmenu("cameras.engine",!0,"config.cameras.engines.editor_label",{name:"mdi:engine"},s`${this._putInSubmenu("cameras.frigate",t,"config.cameras.frigate.editor_label",{path:N},s`
                    ${this._renderStringInput(k(cn,t))}
                    ${this._renderStringInput(k(dn,t))}
                    ${this._renderOptionSelector(k(mn,t),[],{multiple:!0,label:e("config.cameras.frigate.labels")})}
                    ${this._renderOptionSelector(k(un,t),[],{multiple:!0,label:e("config.cameras.frigate.zones")})}
                    ${this._renderStringInput(k(hn,t))}
                  `)}
                ${this._putInSubmenu("cameras.motioneye",t,"config.cameras.motioneye.editor_label",{path:"M 49.65,10.81 C 44.24,10.84 36.85,13.50 31.48,15.96 25.84,13.92 20.04,10.69 13.50,10.84 13.07,10.85 12.65,10.87 12.20,10.91 12.20,10.91 7.08,11.33 7.08,11.33 7.08,11.33 11.94,12.95 11.94,12.95 18.62,15.13 24.49,16.51 29.66,25.48 30.86,25.48 33.22,25.48 34.34,25.48 39.49,16.57 45.66,15.08 52.02,12.95 52.02,12.95 56.83,11.39 56.83,11.39 56.83,11.39 51.83,10.91 51.83,10.91 51.15,10.84 50.43,10.80 49.65,10.81 49.65,10.81 49.65,10.81 49.65,10.81 Z M 32.00,5.00 C 26.53,5.00 21.45,6.75 17.20,9.54 21.80,10.04 26.33,11.22 31.48,13.76 36.69,11.11 42.02,10.00 46.83,9.45 42.57,6.64 37.48,5.00 32.00,5.00 Z M 43.42,22.65 C 41.70,22.65 40.31,24.05 40.31,25.77 40.31,27.49 41.70,28.88 43.42,28.88 45.14,28.88 46.54,27.49 46.54,25.77 46.54,24.05 45.14,22.65 43.42,22.65 Z M 20.58,22.65 C 18.86,22.65 17.46,24.05 17.46,25.77 17.46,27.49 18.86,28.88 20.58,28.88 22.30,28.88 23.69,27.49 23.69,25.77 23.69,24.05 22.30,22.65 20.58,22.65 Z M 11.91,14.02 C 7.61,18.80 5.00,25.06 5.00,32.00 5.00,46.91 17.09,59.00 32.00,59.00 46.91,59.00 59.00,46.91 59.00,32.00 59.00,25.09 56.40,18.80 52.12,14.02 50.08,14.77 48.04,15.65 46.02,16.78 49.92,17.91 52.77,21.53 52.77,25.77 52.77,30.90 48.59,35.12 43.42,35.12 39.04,35.12 35.36,32.09 34.34,28.04 34.34,28.04 29.66,28.04 29.66,28.04 28.65,32.09 24.96,35.12 20.58,35.12 15.41,35.12 11.20,30.90 11.20,25.77 11.20,21.48 14.16,17.83 18.14,16.75 16.12,15.65 14.04,14.79 11.91,14.02 11.91,14.02 11.91,14.02 11.91,14.02 Z M 32.00,30.96 C 32.64,33.35 33.33,35.72 36.15,37.19 36.15,37.19 32.00,43.42 32.00,43.42 32.00,43.42 27.85,37.19 27.85,37.19 30.32,35.44 31.46,33.29 32.00,30.96 Z",viewBox:"0 0 64 64"},s`
                    ${this._renderStringInput(k(_n,t))}
                    ${this._renderStringInput(k(bn,t))}
                    ${this._renderStringInput(k(pn,t))}
                    ${this._renderStringInput(k(gn,t))}
                    ${this._renderStringInput(k(vn,t))}
                  `)} `)}
              ${this._putInSubmenu("cameras.live_provider",!0,"config.cameras.live_provider_options.editor_label",{name:"mdi:cctv"},s` ${this._putInSubmenu("cameras.go2rtc",t,"config.cameras.go2rtc.editor_label",{name:"mdi:alpha-g-circle"},s`${this._renderOptionSelector(k(fn,t),this._go2rtcModes,{multiple:!0,label:e("config.cameras.go2rtc.modes.editor_label")})}
                  ${this._renderStringInput(k($n,t))}`)}
                ${this._putInSubmenu("cameras.image",!0,"config.cameras.image.editor_label",{name:"mdi:image"},s`
                    ${this._renderNumberInput(k(yn,t))}
                    ${this._renderStringInput(k(wn,t))}
                  `)}
                ${this._putInSubmenu("cameras.webrtc_card",t,"config.cameras.webrtc_card.editor_label",{name:"mdi:webrtc"},s`${this._renderEntitySelector(k(Sn,t),"camera")}
                  ${this._renderStringInput(k(Mn,t))}`)}`)}
              ${this._putInSubmenu("cameras.dependencies",t,"config.cameras.dependencies.editor_label",{name:"mdi:graph"},s` ${this._renderSwitch(k(xn,t),this._defaults.cameras.dependencies.all_cameras)}
                ${this._renderOptionSelector(k(In,t),r,{multiple:!0})}`)}
              ${this._putInSubmenu("cameras.triggers",t,"config.cameras.triggers.editor_label",{name:"mdi:magnify-scan"},s` ${this._renderSwitch(k(Cn,t),this._defaults.cameras.triggers.occupancy)}
                ${this._renderSwitch(k(On,t),this._defaults.cameras.triggers.motion)}
                ${this._renderOptionSelector(k(zn,t),i,{multiple:!0})}`)}
              ${this._putInSubmenu("cameras.cast",t,"config.cameras.cast.editor_label",{name:"mdi:cast"},s`
                  ${this._renderOptionSelector(k(Tn,t),this._castMethods)}
                  ${this._renderStringInput(k(kn,t))}
                  ${this._renderStringInput(k(Nn,t))}
                `)}
            </div>`:""}
      </div>
    `}_renderStringInput(e,a){if(this._config)return s`
      <ha-selector
        .hass=${this.hass}
        .selector=${{text:{type:a?.type||"text"}}}
        .label=${a?.label??this._getLabel(e)}
        .value=${l(this._config,e,"")}
        .required=${!1}
        @value-changed=${a=>this._valueChangedHandler(e,a)}
      >
      </ha-selector>
    `}_renderSwitch(e,a,n){if(this._config)return s`
      <ha-selector
        .hass=${this.hass}
        .selector=${{boolean:{}}}
        .label=${n?.label||this._getLabel(e)}
        .value=${l(this._config,e,a)}
        .required=${!1}
        @value-changed=${a=>this._valueChangedHandler(e,a)}
      >
      </ha-selector>
    `}_updateConfig(e){this._config=e,A(this,"config-changed",{config:this._config})}render(){if(!this.hass||!this._config)return s``;const a=B(this.hass),t=l(this._config,An)||[];return s`
      ${this._configUpgradeable?s` <div class="upgrade">
              <span>${e("editor.upgrade_available")}</span>
              <span>
                <mwc-button
                  raised
                  label="${e("editor.upgrade")}"
                  @click=${()=>{if(this._config){const e=n(this._config);P(e),this._updateConfig(e)}}}
                >
                </mwc-button>
              </span>
            </div>
            <br />`:s``}
      <div class="card-config">
        ${this._renderOptionSetHeader("cameras")}
        ${"cameras"===this._expandedMenus[En]?s`
              <div class="values">
                ${t.map(((e,n)=>this._renderCamera(t,n,a)))}
                ${this._renderCamera(t,t.length,a,!0)}
              </div>
            `:""}
        ${this._renderOptionSetHeader("view")}
        ${"view"===this._expandedMenus[En]?s`
              <div class="values">
                ${this._renderOptionSelector(H,this._viewModes)}
                ${this._renderOptionSelector(E,this._cameraSelectViewModes)}
                ${this._renderOptionSelector(L,this._darkModes)}
                ${this._renderNumberInput(U)}
                ${this._renderSwitch(j,this._defaults.view.reset_after_interaction)}
                ${this._renderNumberInput(q)}
                ${this._renderSwitch(V,this._defaults.view.update_force)}
                ${this._renderSwitch(Z,this._defaults.view.update_cycle_camera)}
                ${this._renderViewScanMenu()}
              </div>
            `:""}
        ${this._renderOptionSetHeader("menu")}
        ${"menu"===this._expandedMenus[En]?s`
              <div class="values">
                ${this._renderOptionSelector(F,this._menuStyles)}
                ${this._renderOptionSelector(D,this._menuPositions)}
                ${this._renderOptionSelector(R,this._menuAlignments)}
                ${this._renderNumberInput(G,{min:C})}
                ${this._renderMenuButton("frigate")}
                ${this._renderMenuButton("cameras")}
                ${this._renderMenuButton("substreams")}
                ${this._renderMenuButton("live")}
                ${this._renderMenuButton("clips")}
                ${this._renderMenuButton("snapshots")}
                ${this._renderMenuButton("recordings")}
                ${this._renderMenuButton("image")}
                ${this._renderMenuButton("download")}
                ${this._renderMenuButton("camera_ui")}
                ${this._renderMenuButton("fullscreen")}
                ${this._renderMenuButton("expand")}
                ${this._renderMenuButton("timeline")}
                ${this._renderMenuButton("media_player")}
                ${this._renderMenuButton("microphone",s`${this._renderOptionSelector(`${$}.microphone.type`,this._microphoneButtonTypes,{label:e("config.menu.buttons.type")})}`)}
                ${this._renderMenuButton("play")}
                ${this._renderMenuButton("mute")}
                ${this._renderMenuButton("screenshot")}
                ${this._renderMenuButton("display_mode")}
                ${this._renderMenuButton("ptz")}
              </div>
            `:""}
        ${this._renderOptionSetHeader("live")}
        ${"live"===this._expandedMenus[En]?s`
              <div class="values">
                ${this._renderSwitch(J,this._defaults.live.preload)}
                ${this._renderSwitch(K,this._defaults.live.draggable)}
                ${this._renderSwitch(Q,this._defaults.live.zoomable)}
                ${this._renderSwitch(W,this._defaults.live.lazy_load)}
                ${this._renderOptionSelector(X,this._mediaActionNegativeConditions,{multiple:!0})}
                ${this._renderOptionSelector(Y,this._mediaActionPositiveConditions,{multiple:!0})}
                ${this._renderOptionSelector(ee,this._mediaActionNegativeConditions,{multiple:!0})}
                ${this._renderOptionSelector(ae,this._mediaLiveMuteConditions,{multiple:!0})}
                ${this._renderOptionSelector(ne,this._mediaLiveUnmuteConditions,{multiple:!0})}
                ${this._renderOptionSelector(te,this._transitionEffects)}
                ${this._renderSwitch(ie,this._defaults.live.show_image_during_load)}
                ${this._renderViewDisplay("live.display",oe,se,le,re)}
                ${this._putInSubmenu("live.controls",!0,"config.live.controls.editor_label",{name:"mdi:gamepad"},s`
                    ${this._renderSwitch(ce,this._defaults.live.controls.builtin,{label:e("config.common.controls.builtin")})}
                    ${this._renderNextPreviousControls("live.controls.next_previous",de,me,{allowIcons:!0})}
                    ${this._renderThumbnailsControls("live.controls.thumbnails",ue,he,_e,be,pe,this._defaults.live.controls.thumbnails,{configPathMediaType:ge,configPathEventsMediaType:ve,configPathMode:fe})}
                    ${this._renderTitleControls("live.controls.title",$e,ye)}
                    ${this._renderMiniTimeline("live.controls.timeline",we,Se,Me,xe,Ie,Ce,this._defaults.live.controls.timeline.show_recordings)}
                    ${this._putInSubmenu("live.controls.ptz",!0,"config.live.controls.ptz.editor_label",{name:"mdi:pan"},s`
                        ${this._renderOptionSelector(Oe,this._ptzModes)}
                        ${this._renderOptionSelector(ze,this._ptzPositions)}
                        ${this._renderOptionSelector(Te,this._ptzOrientations)}
                        ${this._renderSwitch(ke,this._defaults.live.controls.ptz.hide_pan_tilt,{label:e("config.live.controls.ptz.hide_pan_tilt")})}
                        ${this._renderSwitch(Ne,this._defaults.live.controls.ptz.hide_pan_tilt,{label:e("config.live.controls.ptz.hide_zoom")})}
                        ${this._renderSwitch(Ae,this._defaults.live.controls.ptz.hide_home,{label:e("config.live.controls.ptz.hide_home")})}
                      `)}
                  `)}
                ${this._renderMediaLayout("live.layout","config.live.layout",Be,Pe,He)}
                ${this._putInSubmenu("live.microphone",!0,"config.live.microphone.editor_label",{name:"mdi:microphone"},s`
                    ${this._renderNumberInput(Ee)}
                    ${this._renderSwitch(Le,this._defaults.live.microphone.always_connected)}
                    ${this._renderNumberInput(Ue)}
                  `)}
              </div>
            `:""}
        ${this._renderOptionSetHeader("media_gallery")}
        ${"media_gallery"===this._expandedMenus[En]?s` <div class="values">
              ${this._renderThumbnailsControls("media_gallery.controls.thumbnails",je,qe,Ve,Ze,Fe,this._defaults.media_gallery.controls.thumbnails)}
              ${this._renderFilterControls("media_gallery.controls.filter",De)}
            </div>`:""}
        ${this._renderOptionSetHeader("media_viewer")}
        ${"media_viewer"===this._expandedMenus[En]?s` <div class="values">
              ${this._renderOptionSelector(Re,this._mediaActionPositiveConditions,{multiple:!0})}
              ${this._renderOptionSelector(Ge,this._mediaActionNegativeConditions,{multiple:!0})}
              ${this._renderOptionSelector(Je,this._mediaActionNegativeConditions,{multiple:!0})}
              ${this._renderOptionSelector(Ke,this._mediaActionPositiveConditions,{multiple:!0})}
              ${this._renderSwitch(Qe,this._defaults.media_viewer.draggable)}
              ${this._renderSwitch(We,this._defaults.media_viewer.zoomable)}
              ${this._renderSwitch(Xe,this._defaults.media_viewer.lazy_load)}
              ${this._renderOptionSelector(Ye,this._transitionEffects)}
              ${this._renderSwitch(ea,this._defaults.media_viewer.snapshot_click_plays_clip)}
              ${this._renderViewDisplay("media_viewer.display",aa,na,ta,ia)}
              ${this._putInSubmenu("media_viewer.controls",!0,"config.media_viewer.controls.editor_label",{name:"mdi:gamepad"},s`
                  ${this._renderSwitch(oa,this._defaults.media_viewer.controls.builtin,{label:e("config.common.controls.builtin")})}
                  ${this._renderNextPreviousControls("media_viewer.controls.next_previous",sa,la,{allowThumbnails:!0})}
                  ${this._renderThumbnailsControls("media_viewer.controls.thumbnails",ra,ca,da,ma,ua,this._defaults.media_viewer.controls.thumbnails,{configPathMode:ha})}
                  ${this._renderTitleControls("media_viewer.controls.title",_a,ba)}
                  ${this._renderMiniTimeline("media_viewer.controls.timeline",pa,ga,va,fa,$a,ya,this._defaults.media_viewer.controls.timeline.show_recordings)}
                `)}
              ${this._renderMediaLayout("media_viewer.layout","config.media_viewer.layout",wa,Sa,Ma)}
            </div>`:""}
        ${this._renderOptionSetHeader("image")}
        ${"image"===this._expandedMenus[En]?s` <div class="values">
              ${this._renderOptionSelector(xa,this._imageModes)}
              ${this._renderStringInput(Ia)}
              ${this._renderNumberInput(Ca)}
              ${this._renderSwitch(Oa,this._defaults.image.zoomable)}
              ${this._renderMediaLayout("image.layout","config.image.layout",za,Ta,ka)}
            </div>`:""}
        ${this._renderOptionSetHeader("timeline")}
        ${"timeline"===this._expandedMenus[En]?s` <div class="values">
              ${this._renderTimelineCoreControls(w,S,M,x,I,this._defaults.timeline.show_recordings)}
              ${this._renderThumbnailsControls("timeline.controls.thumbnails",Na,Aa,Ba,Pa,Ha,this._defaults.timeline.controls.thumbnails,{configPathMode:Ea})}
            </div>`:""}
        ${this._renderOptionSetHeader("dimensions")}
        ${"dimensions"===this._expandedMenus[En]?s` <div class="values">
              ${this._renderOptionSelector(La,this._aspectRatioModes)}
              ${this._renderStringInput(Ua)}
              ${this._renderStringInput(ja)}
              ${this._renderStringInput(qa)}
            </div>`:""}
        ${this._renderOptionSetHeader("performance","low"===l(this._config,Va)?"warning":void 0)}
        ${"performance"===this._expandedMenus[En]?s` <div class="values">
              ${"low"===l(this._config,Va)?this._renderInfo(e("config.performance.warning")):s``}
              ${this._renderOptionSelector(Va,this._performanceProfiles)}
              ${this._putInSubmenu("performance.features",!0,"config.performance.features.editor_label",{name:"mdi:feature-search"},s`
                  ${this._renderSwitch(Za,this._defaults.performance.features.animated_progress_indicator)}
                  ${this._renderNumberInput(Fa,{max:Da})}
                `)}
              ${this._putInSubmenu("performance.style",!0,"config.performance.style.editor_label",{name:"mdi:palette-swatch-variant"},s`
                  ${this._renderSwitch(Ra,this._defaults.performance.style.border_radius)}
                  ${this._renderSwitch(Ga,this._defaults.performance.style.box_shadow)}
                `)}
            </div>`:""}
        ${void 0!==this._config.overrides?s` ${this._renderOptionSetHeader("overrides")}
            ${"overrides"===this._expandedMenus[En]?s` <div class="values">
                  ${this._renderInfo(e("config.overrides.info"))}
                </div>`:""}`:s``}
      </div>
    `}_closeMenu(e){delete this._expandedMenus[e],this.requestUpdate()}_openMenu(e,a){this._expandedMenus[e]=a,this.requestUpdate()}_toggleMenu(e){if(e&&e.target){const a=e.target.domain,n=e.target.key;this._expandedMenus[a]===n?this._closeMenu(a):this._openMenu(a,n)}}_valueChangedHandler(e,a){if(!this._config||!this.hass)return;let t;if(a.detail&&void 0!==a.detail.value&&(t=a.detail.value,"string"==typeof t&&(t=t.trim())),l(this._config,e)===t)return;const i=n(this._config);""===t||void 0===t?Ja(i,e):Ka(i,e,t),this._updateConfig(i)}static get styles(){return Qa('ha-icon-button.button {\n  color: var(--secondary-color, white);\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  padding: 0px;\n  margin: 3px;\n  --ha-icon-display: block;\n  /* Buttons can always be clicked */\n  pointer-events: auto;\n  opacity: 0.9;\n}\n\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nha-icon[data-domain=alert][data-state=on],\nha-icon[data-domain=automation][data-state=on],\nha-icon[data-domain=binary_sensor][data-state=on],\nha-icon[data-domain=calendar][data-state=on],\nha-icon[data-domain=camera][data-state=streaming],\nha-icon[data-domain=cover][data-state=open],\nha-icon[data-domain=fan][data-state=on],\nha-icon[data-domain=humidifier][data-state=on],\nha-icon[data-domain=light][data-state=on],\nha-icon[data-domain=input_boolean][data-state=on],\nha-icon[data-domain=lock][data-state=unlocked],\nha-icon[data-domain=media_player][data-state=on],\nha-icon[data-domain=media_player][data-state=paused],\nha-icon[data-domain=media_player][data-state=playing],\nha-icon[data-domain=script][data-state=on],\nha-icon[data-domain=sun][data-state=above_horizon],\nha-icon[data-domain=switch][data-state=on],\nha-icon[data-domain=timer][data-state=active],\nha-icon[data-domain=vacuum][data-state=cleaning],\nha-icon[data-domain=group][data-state=on],\nha-icon[data-domain=group][data-state=home],\nha-icon[data-domain=group][data-state=open],\nha-icon[data-domain=group][data-state=locked],\nha-icon[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=pending],\nha-icon[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon[data-domain=plant][data-state=problem],\nha-icon[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\nha-icon-button[data-domain=alert][data-state=on],\nha-icon-button[data-domain=automation][data-state=on],\nha-icon-button[data-domain=binary_sensor][data-state=on],\nha-icon-button[data-domain=calendar][data-state=on],\nha-icon-button[data-domain=camera][data-state=streaming],\nha-icon-button[data-domain=cover][data-state=open],\nha-icon-button[data-domain=fan][data-state=on],\nha-icon-button[data-domain=humidifier][data-state=on],\nha-icon-button[data-domain=light][data-state=on],\nha-icon-button[data-domain=input_boolean][data-state=on],\nha-icon-button[data-domain=lock][data-state=unlocked],\nha-icon-button[data-domain=media_player][data-state=on],\nha-icon-button[data-domain=media_player][data-state=paused],\nha-icon-button[data-domain=media_player][data-state=playing],\nha-icon-button[data-domain=script][data-state=on],\nha-icon-button[data-domain=sun][data-state=above_horizon],\nha-icon-button[data-domain=switch][data-state=on],\nha-icon-button[data-domain=timer][data-state=active],\nha-icon-button[data-domain=vacuum][data-state=cleaning],\nha-icon-button[data-domain=group][data-state=on],\nha-icon-button[data-domain=group][data-state=home],\nha-icon-button[data-domain=group][data-state=open],\nha-icon-button[data-domain=group][data-state=locked],\nha-icon-button[data-domain=group][data-state=problem] {\n  color: var(--paper-item-icon-active-color, #fdd835);\n}\n\nha-icon-button[data-domain=climate][data-state=cooling] {\n  color: var(--cool-color, var(--state-climate-cool-color));\n}\n\nha-icon-button[data-domain=climate][data-state=heating] {\n  color: var(--heat-color, var(--state-climate-heat-color));\n}\n\nha-icon-button[data-domain=climate][data-state=drying] {\n  color: var(--dry-color, var(--state-climate-dry-color));\n}\n\nha-icon-button[data-domain=alarm_control_panel] {\n  color: var(--alarm-color-armed, var(--label-badge-red));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=disarmed] {\n  color: var(--alarm-color-disarmed, var(--label-badge-green));\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=pending],\nha-icon-button[data-domain=alarm_control_panel][data-state=arming] {\n  color: var(--alarm-color-pending, var(--label-badge-yellow));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=alarm_control_panel][data-state=triggered] {\n  color: var(--alarm-color-triggered, var(--label-badge-red));\n  animation: pulse 1s infinite;\n}\n\nha-icon-button[data-domain=plant][data-state=problem],\nha-icon-button[data-domain=zwave][data-state=dead] {\n  color: var(--state-icon-error-color);\n}\n\n/* Color the icon if unavailable */\nha-icon-button[data-state=unavailable] {\n  color: var(--state-unavailable-color);\n}\n\n.option {\n  padding: 4px 4px;\n  cursor: pointer;\n}\n\n.option.option-overrides .title {\n  color: var(--warning-color);\n}\n\n.row {\n  display: flex;\n  margin-bottom: -14px;\n  pointer-events: none;\n}\n\n.title {\n  padding-left: 16px;\n  margin-top: -6px;\n  pointer-events: none;\n}\n\n.title.warning {\n  color: var(--warning-color);\n}\n\n.secondary {\n  padding-left: 40px;\n  color: var(--secondary-text-color);\n  pointer-events: none;\n}\n\n.values {\n  background: var(--secondary-background-color);\n  display: grid;\n}\n\n.values + .option,\n.submenu + .option {\n  margin-top: 10px;\n}\n\ndiv.upgrade {\n  width: auto;\n  border: 1px dotted var(--primary-color);\n  margin: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\ndiv.upgrade span {\n  padding: 10px;\n}\n\n.submenu-header {\n  display: flex;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.submenu.selected > .submenu-header {\n  background-color: var(--primary-color);\n  color: var(--primary-text-color);\n}\n\n.submenu-header * {\n  flex-basis: auto;\n  pointer-events: none;\n}\n\n.submenu-header .new-camera {\n  font-style: italic;\n}\n\n.submenu:not(.selected) > .submenu-header .new-camera {\n  color: var(--secondary-text-color, "black");\n}\n\n.submenu-header ha-icon,\n.submenu-header ha-svg-icon {\n  padding-right: 15px;\n}\n\n.submenu.selected {\n  border: 1px solid var(--primary-color);\n}\n\n.submenu {\n  width: calc(100% - 20px);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n}\n\n.submenu:first-child,\n:not(.submenu) + .submenu {\n  margin-top: 10px;\n}\n\n.submenu .controls {\n  display: inline-block;\n  margin-left: auto;\n  margin-right: 0px;\n  margin-bottom: 5px;\n}\n\n.submenu .controls ha-icon-button.button {\n  --mdc-icon-button-size: 32px;\n  --mdc-icon-size: calc(var(--mdc-icon-button-size) / 2);\n}\n\nspan.info {\n  padding: 10px;\n}\n\nha-selector {\n  padding: 10px;\n  border: 1px solid var(--divider-color);\n}')}};Wa([Xa({attribute:!1})],Un.prototype,"hass",void 0),Wa([Ya()],Un.prototype,"_config",void 0),Wa([Ya()],Un.prototype,"_defaults",void 0),Wa([Ya()],Un.prototype,"_expandedMenus",void 0),Un=Wa([en("frigate-card-editor")],Un);export{Un as FrigateCardEditor};
