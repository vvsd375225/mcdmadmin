import{$ as e,Et as t,Ii as n,Mr as r,Or as i,Pr as a,Q as o,bt as s,di as c,dt as l,ei as u,fn as d,gt as f,ht as p,ir as m,jr as h,kr as g,kt as _,li as v,mn as y,on as b,pi as x,rr as S,sn as C,vt as w,wr as T,wt as E,xt as D,yt as O}from"./index-D7-2mGpy.js";function k(t){let{lineHeight:n,borderRadius:r,fontWeightStrong:i,baseColor:a,dividerColor:o,actionColor:s,textColor1:c,textColor2:l,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:h,infoColor:g,successColor:_,warningColor:v,errorColor:y,fontSize:b}=t;return Object.assign(Object.assign({},e),{fontSize:b,lineHeight:n,titleFontWeight:i,borderRadius:r,border:`1px solid ${o}`,color:s,titleTextColor:c,iconColor:l,contentTextColor:l,closeBorderRadius:r,closeColorHover:u,closeColorPressed:d,closeIconColor:f,closeIconColorHover:p,closeIconColorPressed:h,borderInfo:`1px solid ${m(a,S(g,{alpha:.25}))}`,colorInfo:m(a,S(g,{alpha:.08})),titleTextColorInfo:c,iconColorInfo:g,contentTextColorInfo:l,closeColorHoverInfo:u,closeColorPressedInfo:d,closeIconColorInfo:f,closeIconColorHoverInfo:p,closeIconColorPressedInfo:h,borderSuccess:`1px solid ${m(a,S(_,{alpha:.25}))}`,colorSuccess:m(a,S(_,{alpha:.08})),titleTextColorSuccess:c,iconColorSuccess:_,contentTextColorSuccess:l,closeColorHoverSuccess:u,closeColorPressedSuccess:d,closeIconColorSuccess:f,closeIconColorHoverSuccess:p,closeIconColorPressedSuccess:h,borderWarning:`1px solid ${m(a,S(v,{alpha:.33}))}`,colorWarning:m(a,S(v,{alpha:.08})),titleTextColorWarning:c,iconColorWarning:v,contentTextColorWarning:l,closeColorHoverWarning:u,closeColorPressedWarning:d,closeIconColorWarning:f,closeIconColorHoverWarning:p,closeIconColorPressedWarning:h,borderError:`1px solid ${m(a,S(y,{alpha:.25}))}`,colorError:m(a,S(y,{alpha:.08})),titleTextColorError:c,iconColorError:y,contentTextColorError:l,closeColorHoverError:u,closeColorPressedError:d,closeIconColorError:f,closeIconColorHoverError:p,closeIconColorPressedError:h})}var A={name:`Alert`,common:l,self:k},j=g(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[h(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),r(`closable`,[g(`alert-body`,[h(`title`,`
 padding-right: 24px;
 `)])]),h(`icon`,{color:`var(--n-icon-color)`}),g(`alert-body`,{padding:`var(--n-padding)`},[h(`title`,{color:`var(--n-title-text-color)`}),h(`content`,{color:`var(--n-content-text-color)`})]),o({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),h(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),h(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),r(`show-icon`,[g(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),r(`right-adjust`,[g(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),g(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[h(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[i(`& +`,[h(`content`,{marginTop:`9px`})])]),h(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),h(`icon`,{transition:`color .3s var(--n-bezier)`})]),M=v({name:`Alert`,inheritAttrs:!1,props:Object.assign(Object.assign({},t.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),slots:Object,setup(e){let{mergedClsPrefixRef:r,mergedBorderedRef:i,inlineThemeDisabled:o,mergedRtlRef:s}=C(e),c=t(`Alert`,`-alert`,j,A,e,r),l=_(`Alert`,s,r),d=u(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=c.value,{fontSize:r,borderRadius:i,titleFontWeight:o,lineHeight:s,iconSize:l,iconMargin:u,iconMarginRtl:d,closeIconSize:f,closeBorderRadius:p,closeSize:m,closeMargin:h,closeMarginRtl:g,padding:_}=n,{type:v}=e,{left:y,right:b}=T(u);return{"--n-bezier":t,"--n-color":n[a(`color`,v)],"--n-close-icon-size":f,"--n-close-border-radius":p,"--n-close-color-hover":n[a(`closeColorHover`,v)],"--n-close-color-pressed":n[a(`closeColorPressed`,v)],"--n-close-icon-color":n[a(`closeIconColor`,v)],"--n-close-icon-color-hover":n[a(`closeIconColorHover`,v)],"--n-close-icon-color-pressed":n[a(`closeIconColorPressed`,v)],"--n-icon-color":n[a(`iconColor`,v)],"--n-border":n[a(`border`,v)],"--n-title-text-color":n[a(`titleTextColor`,v)],"--n-content-text-color":n[a(`contentTextColor`,v)],"--n-line-height":s,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":o,"--n-icon-size":l,"--n-icon-margin":u,"--n-icon-margin-rtl":d,"--n-close-size":m,"--n-close-margin":h,"--n-close-margin-rtl":g,"--n-padding":_,"--n-icon-margin-left":y,"--n-icon-margin-right":b}}),f=o?b(`alert`,u(()=>e.type[0]),d,e):void 0,p=n(!0),m=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:l,mergedClsPrefix:r,mergedBordered:i,visible:p,handleCloseClick:()=>{Promise.resolve(e.onClose?.call(e)).then(e=>{e!==!1&&(p.value=!1)})},handleAfterLeave:()=>{m()},mergedTheme:c,cssVars:o?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),c(p,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,n={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?c(`div`,Object.assign({},x(this.$attrs,n)),this.closable&&c(f,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&c(`div`,{class:`${e}-alert__border`}),this.showIcon&&c(`div`,{class:`${e}-alert__icon`,"aria-hidden":`true`},d(t.icon,()=>[c(E,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return c(O,null);case`info`:return c(s,null);case`warning`:return c(w,null);case`error`:return c(D,null);default:return null}}})])),c(`div`,{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},y(t.header,t=>{let n=t||this.title;return n?c(`div`,{class:`${e}-alert-body__title`},n):null}),t.default&&c(`div`,{class:`${e}-alert-body__content`},t))):null}})}});export{M as t};