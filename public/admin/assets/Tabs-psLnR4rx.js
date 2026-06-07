import{C as e,v as t,y as n}from"./Select-DrkxTXuY.js";import{d as r}from"./Input-DIUMRdkq.js";import{a as i}from"./Tag-DttUalMn.js";import{t as a}from"./Add-2NoPhAHn.js";import{$r as o,$t as s,An as c,Ci as l,Et as u,Ii as d,Kn as f,Kr as p,Mr as m,Nn as h,Nr as g,Oi as _,Or as v,Pr as y,Ri as b,Sn as x,Sr as ee,Ur as S,Xr as C,Xt as w,_n as T,bi as te,di as E,ei as D,fi as O,gn as k,gt as A,ji as j,jr as M,ki as ne,kr as N,li as P,mi as re,mn as F,on as ie,pi as I,rn as ae,s as oe,sn as se,wn as L,wr as R,wt as z,xn as B}from"./index-QEQuLFiJ.js";var V=t(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[t(`&::-webkit-scrollbar`,{width:0,height:0})]),ce=P({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=d(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let r=h();return V.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:n,ssr:r}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return E(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),le=/\s/;function ue(e){for(var t=e.length;t--&&le.test(e.charAt(t)););return t}var H=/^\s+/;function U(e){return e&&e.slice(0,ue(e)+1).replace(H,``)}var W=NaN,de=/^[-+]0x[0-9a-f]+$/i,fe=/^0b[01]+$/i,G=/^0o[0-7]+$/i,K=parseInt;function q(e){if(typeof e==`number`)return e;if(s(e))return W;if(w(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=w(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=U(e);var n=fe.test(e);return n||G.test(e)?K(e.slice(2),n?2:8):de.test(e)?W:+e}var J=function(){return ae.Date.now()},pe=`Expected a function`,me=Math.max,he=Math.min;function Y(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(pe);t=q(t)||0,w(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?me(q(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?he(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=J();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(J())}function x(){var e=J(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var ge=`Expected a function`;function _e(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(ge);return w(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),Y(e,t,{leading:r,maxWait:t,trailing:i})}var ve=f(`n-tabs`),ye={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},X=P({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:ye,slots:Object,setup(e){let t=O(ve,null);return t||L(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return E(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Z=P({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},T(ye,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=O(ve);return{trigger:d,mergedClosable:D(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??o;return E(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?E(`div`,{class:`${t}-tabs-tab-pad`}):null,E(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},I({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),E(`span`,{class:`${t}-tabs-tab__label`},e?E(C,null,E(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),E(z,{clsPrefix:t},{default:()=>E(a,null)})):u?u():typeof d==`object`?d:k(d??n)),c&&this.type===`card`?E(A,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),be=N(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[m(`segment-type`,[N(`tabs-rail`,[v(`&.transition-disabled`,[N(`tabs-capsule`,`
 transition: none;
 `)])])]),m(`top`,[N(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),m(`left`,[N(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),m(`left, right`,`
 flex-direction: row;
 `,[N(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),N(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),m(`right`,`
 flex-direction: row-reverse;
 `,[N(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),N(`tabs-bar`,`
 left: 0;
 `)]),m(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[N(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),N(`tabs-bar`,`
 top: 0;
 `)]),N(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[N(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),N(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[N(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[m(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),v(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),m(`flex`,[N(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[N(`tabs-wrapper`,`
 width: 100%;
 `,[N(`tabs-tab`,`
 margin-right: 0;
 `)])])]),N(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[M(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),M(`prefix`,`padding-right: 16px;`),M(`suffix`,`padding-left: 16px;`)]),m(`top, bottom`,[v(`>`,[N(`tabs-nav`,[N(`tabs-nav-scroll-wrapper`,[v(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),v(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),m(`shadow-start`,[v(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),m(`shadow-end`,[v(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),m(`left, right`,[N(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),v(`>`,[N(`tabs-nav`,[N(`tabs-nav-scroll-wrapper`,[v(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),v(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),m(`shadow-start`,[v(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),m(`shadow-end`,[v(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),N(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[N(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[v(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),v(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),N(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),N(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),N(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),N(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[m(`disabled`,{cursor:`not-allowed`}),M(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),M(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),N(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[v(`&.transition-disabled`,`
 transition: none;
 `),m(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),N(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),N(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[v(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),v(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),v(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),v(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),v(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),N(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),m(`line-type, bar-type`,[N(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[v(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),m(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),m(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),N(`tabs-nav`,[m(`line-type`,[m(`top`,[M(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),N(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),N(`tabs-bar`,`
 bottom: -1px;
 `)]),m(`left`,[M(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),N(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),N(`tabs-bar`,`
 right: -1px;
 `)]),m(`right`,[M(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),N(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),N(`tabs-bar`,`
 left: -1px;
 `)]),m(`bottom`,[M(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),N(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),N(`tabs-bar`,`
 top: -1px;
 `)]),M(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),N(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),N(`tabs-bar`,`
 border-radius: 0;
 `)]),m(`card-type`,[M(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),N(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),N(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),N(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[m(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[M(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),g(`disabled`,[v(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),m(`closable`,`padding-right: 8px;`),m(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),m(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),m(`left, right`,`
 flex-direction: column; 
 `,[M(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),N(`tabs-wrapper`,`
 flex-direction: column;
 `),N(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[N(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),m(`top`,[m(`card-type`,[N(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),M(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),N(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[m(`active`,`
 border-bottom: 1px solid #0000;
 `)]),N(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),N(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),m(`left`,[m(`card-type`,[N(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),M(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),N(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[m(`active`,`
 border-right: 1px solid #0000;
 `)]),N(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),N(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),m(`right`,[m(`card-type`,[N(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),M(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),N(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[m(`active`,`
 border-left: 1px solid #0000;
 `)]),N(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),N(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),m(`bottom`,[m(`card-type`,[N(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),M(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),N(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[m(`active`,`
 border-top: 1px solid #0000;
 `)]),N(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),N(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),xe=_e,Se=P({name:`Tabs`,props:Object.assign(Object.assign({},u.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:a,inlineThemeDisabled:o,mergedComponentPropsRef:s}=se(t),c=u(`Tabs`,`-tabs`,be,oe,t,a),f=d(null),p=d(null),m=d(null),h=d(null),g=d(null),v=d(null),S=d(!0),C=d(!0),w=i(t,[`labelSize`,`size`]),T=D(()=>w.value?w.value:s?.value?.Tabs?.size||`medium`),E=i(t,[`activeName`,`value`]),O=d(E.value??t.defaultValue??(n.default?B(n.default())[0]?.props?.name:null)),k=r(E,O),A={id:0},j=D(()=>{if(!(!t.justifyContent||t.type===`card`))return{display:`flex`,justifyContent:t.justifyContent}});_(k,()=>{A.id=0,I(),ae()});function M(){let{value:e}=k;return e===null?null:f.value?.querySelector(`[data-name="${e}"]`)}function N(e){if(t.type===`card`)return;let{value:n}=p;if(!n)return;let r=n.style.opacity===`0`;if(e){let i=`${a.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=t;if(e.dataset.disabled===`true`?n.classList.add(i):n.classList.remove(i),[`top`,`bottom`].includes(s)){if(F([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,r&&(n.style.transition=`none`),n.offsetWidth,r&&(n.style.transition=``,n.style.opacity=`1`)}else{if(F([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,r&&(n.style.transition=`none`),n.offsetHeight,r&&(n.style.transition=``,n.style.opacity=`1`)}}}function P(){if(t.type===`card`)return;let{value:e}=p;e&&(e.style.opacity=`0`)}function F(e){let{value:t}=p;if(t)for(let n of e)t.style[n]=``}function I(){if(t.type===`card`)return;let e=M();e?N(e):P()}function ae(){let e=g.value?.$el;if(!e)return;let t=M();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let L=d(null),z=0,V=null;function ce(e){let t=L.value;if(t){z=e.getBoundingClientRect().height;let n=`${z}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};V?(r(),V(),V=null):V=r}}function le(e){let t=L.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(z,n)}px`};V?(V(),V=null,r()):V=r}}function ue(){let e=L.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let H={value:[]},U=d(`next`);function W(e){let t=k.value,n=`next`;for(let r of H.value){if(r===t)break;if(r===e){n=`prev`;break}}U.value=n,de(e)}function de(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&x(n,e),r&&x(r,e),i&&x(i,e),O.value=e}function fe(e){let{onClose:n}=t;n&&x(n,e)}let G=!0;function K(){let{value:e}=p;if(!e)return;G||=!1;let t=`transition-disabled`;e.classList.add(t),I(),e.classList.remove(t)}let q=d(null);function J({transitionDisabled:e}){let t=f.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=M();n&&q.value&&(q.value.style.width=`${n.offsetWidth}px`,q.value.style.height=`${n.offsetHeight}px`,q.value.style.transform=`translateX(${n.offsetLeft-ee(getComputedStyle(t).paddingLeft)}px)`,e&&q.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}_([k],()=>{t.type===`segment`&&re(()=>{J({transitionDisabled:!1})})}),te(()=>{t.type===`segment`&&J({transitionDisabled:!0})});let pe=0;function me(e){if(e.contentRect.width===0&&e.contentRect.height===0||pe===e.contentRect.width)return;pe=e.contentRect.width;let{type:n}=t;if((n===`line`||n===`bar`)&&(G||t.justifyContent?.startsWith(`space`))&&K(),n!==`segment`){let{placement:e}=t;X((e===`top`||e===`bottom`?g.value?.$el:v.value)||null)}}let he=xe(me,64);_([()=>t.justifyContent,()=>t.size],()=>{re(()=>{let{type:e}=t;(e===`line`||e===`bar`)&&K()})});let Y=d(!1);function ge(e){let{target:n,contentRect:{width:r,height:i}}=e,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=t;if(!Y.value)s===`top`||s===`bottom`?a<r&&(Y.value=!0):o<i&&(Y.value=!0);else{let{value:e}=h;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(Y.value=!1):o-i>e.$el.offsetHeight&&(Y.value=!1)}X(g.value?.$el||null)}let _e=xe(ge,64);function ye(){let{onAdd:e}=t;e&&e(),re(()=>{let e=M(),{value:t}=g;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function X(e){if(!e)return;let{placement:n}=t;if(n===`top`||n===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e;S.value=t<=0,C.value=t+r>=n}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;S.value=t<=0,C.value=t+r>=n}}let Z=xe(e=>{X(e.target)},64);l(ve,{triggerRef:b(t,`trigger`),tabStyleRef:b(t,`tabStyle`),tabClassRef:b(t,`tabClass`),addTabStyleRef:b(t,`addTabStyle`),addTabClassRef:b(t,`addTabClass`),paneClassRef:b(t,`paneClass`),paneStyleRef:b(t,`paneStyle`),mergedClsPrefixRef:a,typeRef:b(t,`type`),closableRef:b(t,`closable`),valueRef:k,tabChangeIdRef:A,onBeforeLeaveRef:b(t,`onBeforeLeave`),activateTab:W,handleClose:fe,handleAdd:ye}),e(()=>{I(),ae()}),ne(()=>{let{value:e}=m;if(!e)return;let{value:t}=a,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,r=`${t}-tabs-nav-scroll-wrapper--shadow-end`;S.value?e.classList.remove(n):e.classList.add(n),C.value?e.classList.remove(r):e.classList.add(r)});let Se={syncBarPosition:()=>{I()}},Ce=()=>{J({transitionDisabled:!0})},Q=D(()=>{let{value:e}=T,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:l,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:b,closeColorHover:x,closeColorPressed:ee,closeBorderRadius:S,[y(`panePadding`,e)]:C,[y(`tabPadding`,r)]:w,[y(`tabPaddingVertical`,r)]:te,[y(`tabGap`,r)]:E,[y(`tabGap`,`${r}Vertical`)]:D,[y(`tabTextColor`,n)]:O,[y(`tabTextColorActive`,n)]:k,[y(`tabTextColorHover`,n)]:A,[y(`tabTextColorDisabled`,n)]:j,[y(`tabFontSize`,e)]:M},common:{cubicBezierEaseInOut:ne}}=c.value;return{"--n-bezier":ne,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":M,"--n-tab-text-color":O,"--n-tab-text-color-active":k,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":b,"--n-close-color-hover":x,"--n-close-color-pressed":ee,"--n-close-border-radius":S,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":l,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":w,"--n-tab-padding-vertical":te,"--n-tab-gap":E,"--n-tab-gap-vertical":D,"--n-pane-padding-left":R(C,`left`),"--n-pane-padding-right":R(C,`right`),"--n-pane-padding-top":R(C,`top`),"--n-pane-padding-bottom":R(C,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),$=o?ie(`tabs`,D(()=>`${T.value[0]}${t.type[0]}`),Q,t):void 0;return Object.assign({mergedClsPrefix:a,mergedValue:k,renderedNames:new Set,segmentCapsuleElRef:q,tabsPaneWrapperRef:L,tabsElRef:f,barElRef:p,addTabInstRef:h,xScrollInstRef:g,scrollWrapperElRef:m,addTabFixed:Y,tabWrapperStyle:j,handleNavResize:he,mergedSize:T,handleScroll:Z,handleTabsResize:_e,cssVars:o?void 0:Q,themeClass:$?.themeClass,animationDirection:U,renderNameListRef:H,yScrollElRef:v,handleSegmentResize:Ce,onAnimationBeforeLeave:ce,onAnimationEnter:le,onAnimationAfterEnter:ue,onRender:$?.onRender},Se)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:l,paneWrapperStyle:u,$slots:{default:d,prefix:f,suffix:p}}=this;s?.();let m=d?B(d()).filter(e=>e.type.__TAB_PANE__===!0):[],h=d?B(d()).filter(e=>e.type.__TAB__===!0):[],g=!h.length,_=t===`card`,v=t===`segment`,y=!_&&!v&&this.justifyContent;o.value=[];let b=()=>{let t=E(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},y?null:E(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),g?m.map((e,t)=>(o.value.push(e.props.name),we(E(Z,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!y||y===`center`||y===`start`||y===`end`)}),e.children?{default:e.children.tab}:void 0)))):h.map((e,t)=>(o.value.push(e.props.name),we(t!==0&&!y?$(e):e))),!r&&i&&_?Q(i,(g?m.length:h.length)!==0):null,y?null:E(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return E(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},_&&i?E(c,{onResize:this.handleTabsResize},{default:()=>t}):t,_?E(`div`,{class:`${e}-tabs-pad`}):null,_?null:E(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},x=v?`top`:n;return E(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,y&&`${e}-tabs--flex`,`${e}-tabs--${x}`],style:this.cssVars},E(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${x}`,`${e}-tabs-nav`]},F(f,t=>t&&E(`div`,{class:`${e}-tabs-nav__prefix`},t)),v?E(c,{onResize:this.handleSegmentResize},{default:()=>E(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},E(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},E(`div`,{class:`${e}-tabs-wrapper`},E(`div`,{class:`${e}-tabs-tab`}))),g?m.map((e,t)=>(o.value.push(e.props.name),E(Z,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):h.map((e,t)=>(o.value.push(e.props.name),t===0?e:$(e))))}):E(c,{onResize:this.handleNavResize},{default:()=>E(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(x)?E(ce,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:b}):E(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},b()))}),r&&i&&_?Q(i,!0):null,F(p,t=>t&&E(`div`,{class:`${e}-tabs-nav__suffix`},t))),g&&(this.animated&&(x===`top`||x===`bottom`)?E(`div`,{ref:`tabsPaneWrapperRef`,style:u,class:[`${e}-tabs-pane-wrapper`,l]},Ce(m,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ce(m,this.mergedValue,this.renderedNames)))}});function Ce(e,t,n,r,i,a,o){let s=[];return e.forEach(e=>{let{name:r,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,c=t===r;if(e.key!==void 0&&(e.key=r),c||o(`show`)||o(`show:lazy`)&&n.has(r)){n.has(r)||n.add(r);let t=!o(`if`);s.push(t?j(e,[[p,c]]):e)}}),o?E(S,{name:`${o}-transition`,onBeforeLeave:r,onEnter:i,onAfterEnter:a},{default:()=>s}):s}function Q(e,t){return E(Z,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function $(e){let t=o(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function we(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}export{X as n,Se as t};