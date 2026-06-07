import{S as e,_ as t,b as n,c as r,h as i,p as a,t as o,x as s}from"./Select-DwMuVUEV.js";import{d as c,t as l,u}from"./Input-t5XHO0vM.js";import{a as d,n as f}from"./Tag-BSf8rGbY.js";import{n as p,t as m}from"./Dropdown-DOvPSTqc.js";import{n as h,t as g}from"./Tabs-CCzHwJja.js";import{t as _}from"./use-locale-DntgLxqy.js";import{n as v,t as y}from"./utils-CN9n-l0c.js";import{t as ee}from"./Tooltip-B5u3x672.js";import{t as b}from"./Icon-CLLRyWro.js";import{t as x}from"./Divider-Dv-UQCL9.js";import{t as S}from"./Switch-HEB0dEGW.js";import{$n as C,Ai as w,An as T,Bi as E,Bn as te,Br as D,Ci as O,Di as k,Dr as ne,Dt as A,Ei as re,En as j,Et as M,Fn as N,Fr as P,G as ie,Gn as F,H as ae,Hn as oe,Hr as I,Ii as L,Ir as se,J as ce,Jr as le,Kn as ue,Kr as de,Mn as fe,Mr as R,Nr as pe,Oi as me,On as z,Or as B,Ot as he,Pn as ge,Pr as _e,Q as ve,Qn as ye,Ri as V,Rn as be,Si as H,Sn as U,Tn as xe,Tt as Se,Ui as Ce,Un as we,Ur as Te,Vi as Ee,Vn as De,Wn as Oe,Xr as ke,Y as Ae,_i as je,_r as Me,an as Ne,ar as Pe,at as Fe,bi as Ie,br as Le,ci as W,cr as Re,ct as ze,d as Be,di as G,dn as Ve,dr as He,dt as Ue,ei as K,er as We,et as Ge,fi as q,fn as Ke,fr as qe,ft as Je,gn as Ye,gr as Xe,gt as Ze,h as Qe,hn as $e,hr as et,ht as tt,ii as J,ir as nt,ji as rt,jr as Y,ki as it,kn as at,kr as X,kt as ot,li as Z,lr as st,mi as ct,mn as lt,mr as ut,n as dt,ni as ft,oi as pt,on as mt,or as ht,pi as gt,pr as _t,qn as vt,r as yt,ri as bt,si as xt,sn as St,sr as Ct,t as wt,ti as Q,tr as Tt,tt as Et,ur as Dt,ut as Ot,v as kt,vi as At,vn as jt,vr as Mt,wi as Nt,wn as Pt,wt as Ft,xi as It,xr as Lt,yn as Rt,yr as zt,zn as Bt,zr as Vt}from"./index-D7-2mGpy.js";import{t as Ht}from"./user-UOxPHEGG.js";import{n as Ut,t as Wt}from"./FlashOutline-BGzJGQrj.js";import{t as Gt}from"./PersonOutline-mkCOlM3V.js";import{n as Kt}from"./notification-Bh4h4_ZU.js";import{t as qt}from"./_plugin-vue_export-helper-BDNMzG2s.js";var Jt=Z({name:`ChevronDownFilled`,render(){return G(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},G(`path`,{d:`M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z`,fill:`currentColor`}))}}),Yt=Z({name:`SlotMachineNumber`,props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(e){let t=L(null),n=L(e.value),r=L(e.value),i=L(`up`),a=L(!1),o=K(()=>a.value?`${e.clsPrefix}-base-slot-machine-current-number--${i.value}-scroll`:null),s=K(()=>a.value?`${e.clsPrefix}-base-slot-machine-old-number--${i.value}-scroll`:null);me(V(e,`value`),(e,t)=>{n.value=t,r.value=e,ct(c)});function c(){let t=e.newOriginalNumber,n=e.oldOriginalNumber;n===void 0||t===void 0||(t>n?l(`up`):n>t&&l(`down`))}function l(e){i.value=e,a.value=!1,ct(()=>{var e;(e=t.value)==null||e.offsetWidth,a.value=!0})}return()=>{let{clsPrefix:i}=e;return G(`span`,{ref:t,class:`${i}-base-slot-machine-number`},n.value===null?null:G(`span`,{class:[`${i}-base-slot-machine-old-number ${i}-base-slot-machine-old-number--top`,s.value]},n.value),G(`span`,{class:[`${i}-base-slot-machine-current-number`,o.value]},G(`span`,{ref:`numberWrapper`,class:[`${i}-base-slot-machine-current-number__inner`,typeof e.value!=`number`&&`${i}-base-slot-machine-current-number__inner--not-number`]},r.value)),n.value===null?null:G(`span`,{class:[`${i}-base-slot-machine-old-number ${i}-base-slot-machine-old-number--bottom`,s.value]},n.value))}}}),{cubicBezierEaseOut:Xt}=he;function Zt({duration:e=`.2s`}={}){return[B(`&.fade-up-width-expand-transition-leave-active`,{transition:`
 opacity ${e} ${Xt},
 max-width ${e} ${Xt},
 transform ${e} ${Xt}
 `}),B(`&.fade-up-width-expand-transition-enter-active`,{transition:`
 opacity ${e} ${Xt},
 max-width ${e} ${Xt},
 transform ${e} ${Xt}
 `}),B(`&.fade-up-width-expand-transition-enter-to`,{opacity:1,transform:`translateX(0) translateY(0)`}),B(`&.fade-up-width-expand-transition-enter-from`,{maxWidth:`0 !important`,opacity:0,transform:`translateY(60%)`}),B(`&.fade-up-width-expand-transition-leave-from`,{opacity:1,transform:`translateY(0)`}),B(`&.fade-up-width-expand-transition-leave-to`,{maxWidth:`0 !important`,opacity:0,transform:`translateY(60%)`})]}var Qt=B([B(`@keyframes n-base-slot-machine-fade-up-in`,`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),B(`@keyframes n-base-slot-machine-fade-down-in`,`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),B(`@keyframes n-base-slot-machine-fade-up-out`,`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),B(`@keyframes n-base-slot-machine-fade-down-out`,`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),X(`base-slot-machine`,`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[X(`base-slot-machine-number`,`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[Zt({duration:`.2s`}),Et({duration:`.2s`,delay:`0s`}),X(`base-slot-machine-old-number`,`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[R(`top`,{transform:`translateY(-100%)`}),R(`bottom`,{transform:`translateY(100%)`}),R(`down-scroll`,{animation:`n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1}),R(`up-scroll`,{animation:`n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1})]),X(`base-slot-machine-current-number`,`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[R(`down-scroll`,{animation:`n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1}),R(`up-scroll`,{animation:`n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)`,animationIterationCount:1}),Y(`inner`,`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[R(`not-number`,`
 right: unset;
 left: 0;
 `)])])])])]),$t=Z({name:`BaseSlotMachine`,props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(e){A(`-base-slot-machine`,Qt,V(e,`clsPrefix`));let t=L(),n=L(),r=K(()=>{if(typeof e.value==`string`)return[];if(e.value<1)return[0];let t=[],n=e.value;for(e.max!==void 0&&(n=Math.min(e.max,n));n>=1;)t.push(n%10),n/=10,n=Math.floor(n);return t.reverse(),t});return me(V(e,`value`),(e,r)=>{typeof e==`string`?(n.value=void 0,t.value=void 0):typeof r==`string`?(n.value=e,t.value=void 0):(n.value=e,t.value=r)}),()=>{let{value:i,clsPrefix:a}=e;return typeof i==`number`?G(`span`,{class:`${a}-base-slot-machine`},G(Te,{name:`fade-up-width-expand-transition`,tag:`span`},{default:()=>r.value.map((e,i)=>G(Yt,{clsPrefix:a,key:r.value.length-i-1,oldOriginalNumber:t.value,newOriginalNumber:n.value,value:e}))}),G(tt,{key:`+`,width:!0},{default:()=>e.max!==void 0&&e.max<i?G(Yt,{clsPrefix:a,value:`+`}):null})):G(`span`,{class:`${a}-base-slot-machine`},i)}}}),en=X(`input-group`,`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[B(`>`,[X(`input`,[B(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),B(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),X(`button`,[B(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[Y(`state-border, border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),B(`&:not(:first-child)`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[Y(`state-border, border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),B(`*`,[B(`&:not(:last-child)`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[B(`>`,[X(`input`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),X(`base-selection`,[X(`base-selection-label`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),X(`base-selection-tags`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),Y(`box-shadow, border, state-border`,`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),B(`&:not(:first-child)`,`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[B(`>`,[X(`input`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),X(`base-selection`,[X(`base-selection-label`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),X(`base-selection-tags`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),Y(`box-shadow, border, state-border`,`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),tn=Z({name:`InputGroup`,props:{},setup(e){let{mergedClsPrefixRef:t}=St(e);return A(`-input-group`,en,t),{mergedClsPrefix:t}},render(){let{mergedClsPrefix:e}=this;return G(`div`,{class:`${e}-input-group`},this.$slots)}}),nn=ue(`n-avatar-group`),rn=X(`avatar`,`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[P(B(`&`,`--n-merged-color: var(--n-color-modal);`)),se(B(`&`,`--n-merged-color: var(--n-color-popover);`)),B(`img`,`
 width: 100%;
 height: 100%;
 `),Y(`text`,`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),X(`icon`,`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),Y(`text`,`line-height: 1.25`)]),an=Z({name:`Avatar`,props:Object.assign(Object.assign({},M.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),slots:Object,setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=St(e),r=L(!1),i=null,a=L(null),o=L(null),s=()=>{let{value:e}=a;if(e&&(i===null||i!==e.innerHTML)){i=e.innerHTML;let{value:t}=o;if(t){let{offsetWidth:n,offsetHeight:r}=t,{offsetWidth:i,offsetHeight:a}=e,o=.9,s=Math.min(n/i*o,r/a*o,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${s})`}}},c=q(nn,null),l=K(()=>{let{size:t}=e;if(t)return t;let{size:n}=c||{};return n||`medium`}),u=M(`Avatar`,`-avatar`,rn,Ae,e,t),d=q(f,null),p=K(()=>{if(c)return!0;let{round:t,circle:n}=e;return t!==void 0||n!==void 0?t||n:d?d.roundRef.value:!1}),m=K(()=>c?!0:e.bordered||!1),h=K(()=>{let t=l.value,n=p.value,r=m.value,{color:i}=e,{self:{borderRadius:a,fontSize:o,color:s,border:c,colorModal:d,colorPopover:f},common:{cubicBezierEaseInOut:h}}=u.value,g;return g=typeof t==`number`?`${t}px`:u.value.self[_e(`height`,t)],{"--n-font-size":o,"--n-border":r?c:`none`,"--n-border-radius":n?`50%`:a,"--n-color":i||s,"--n-color-modal":i||d,"--n-color-popover":i||f,"--n-bezier":h,"--n-merged-size":`var(--n-avatar-size-override, ${g})`}}),g=n?mt(`avatar`,K(()=>{let t=l.value,n=p.value,r=m.value,{color:i}=e,a=``;return t&&(typeof t==`number`?a+=`a${t}`:a+=t[0]),n&&(a+=`b`),r&&(a+=`c`),i&&(a+=z(i)),a}),h,e):void 0,_=L(!e.lazy);Ie(()=>{if(e.lazy&&e.intersectionObserverOptions){let t,n=it(()=>{t?.(),t=void 0,e.lazy&&(t=y(o.value,e.intersectionObserverOptions,_))});je(()=>{n(),t?.()})}}),me(()=>e.src||e.imgProps?.src,()=>{r.value=!1});let v=L(!e.lazy);return{textRef:a,selfRef:o,mergedRoundRef:p,mergedClsPrefix:t,fitTextTransform:s,cssVars:n?void 0:h,themeClass:g?.themeClass,onRender:g?.onRender,hasLoadError:r,shouldStartLoading:_,loaded:v,mergedOnError:t=>{if(!_.value)return;r.value=!0;let{onError:n,imgProps:{onError:i}={}}=e;n?.(t),i?.(t)},mergedOnLoad:t=>{let{onLoad:n,imgProps:{onLoad:r}={}}=e;n?.(t),r?.(t),v.value=!0}}},render(){var e;let{$slots:t,src:n,mergedClsPrefix:r,lazy:i,onRender:a,loaded:o,hasLoadError:s,imgProps:c={}}=this;a?.();let l,u=!o&&!s&&(this.renderPlaceholder?this.renderPlaceholder():(e=this.$slots).placeholder?.call(e));return l=this.hasLoadError?this.renderFallback?this.renderFallback():Ke(t.fallback,()=>[G(`img`,{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):lt(t.default,e=>{if(e)return G(T,{onResize:this.fitTextTransform},{default:()=>G(`span`,{ref:`textRef`,class:`${r}-avatar__text`},e)});if(n||c.src){let e=this.src||c.src;return G(`img`,Object.assign(Object.assign({},c),{loading:v&&!this.intersectionObserverOptions&&i?`lazy`:`eager`,src:i&&this.intersectionObserverOptions?this.shouldStartLoading?e:void 0:e,"data-image-src":e,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[c.style||``,{objectFit:this.objectFit},u?{height:`0`,width:`0`,visibility:`hidden`,position:`absolute`}:``]}))}}),G(`span`,{ref:`selfRef`,class:[`${r}-avatar`,this.themeClass],style:this.cssVars},l,i&&u)}});function on(e){let{errorColor:t,infoColor:n,successColor:r,warningColor:i,fontFamily:a}=e;return{color:t,colorInfo:n,colorSuccess:r,colorError:t,colorWarning:i,fontSize:`12px`,fontFamily:a}}var sn={name:`Badge`,common:Ue,self:on},cn=B([B(`@keyframes badge-wave-spread`,{from:{boxShadow:`0 0 0.5px 0px var(--n-ripple-color)`,opacity:.6},to:{boxShadow:`0 0 0.5px 4.5px var(--n-ripple-color)`,opacity:0}}),X(`badge`,`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 font-family: var(--n-font-family);
 `,[R(`as-is`,[X(`badge-sup`,{position:`static`,transform:`translateX(0)`},[Fe({transformOrigin:`left bottom`,originalTransform:`translateX(0)`})])]),R(`dot`,[X(`badge-sup`,`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[B(`::before`,`border-radius: 4px;`)])]),X(`badge-sup`,`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 2;
 display: flex;
 align-items: center;
 `,[Fe({transformOrigin:`left bottom`,originalTransform:`translateX(-50%)`}),X(`base-wave`,{zIndex:1,animationDuration:`2s`,animationIterationCount:`infinite`,animationDelay:`1s`,animationTimingFunction:`var(--n-ripple-bezier)`,animationName:`badge-wave-spread`}),B(`&::before`,`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),ln=Z({name:`Badge`,props:Object.assign(Object.assign({},M.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:`default`},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=St(e),a=M(`Badge`,`-badge`,cn,sn,e,n),o=L(!1),s=()=>{o.value=!0},c=()=>{o.value=!1},l=K(()=>e.show&&(e.dot||e.value!==void 0&&!(!e.showZero&&Number(e.value)<=0)||!Ve(t.value)));Ie(()=>{l.value&&(o.value=!0)});let u=ot(`Badge`,i,n),d=K(()=>{let{type:t,color:n}=e,{common:{cubicBezierEaseInOut:r,cubicBezierEaseOut:i},self:{[_e(`color`,t)]:o,fontFamily:s,fontSize:c}}=a.value;return{"--n-font-size":c,"--n-font-family":s,"--n-color":n||o,"--n-ripple-color":n||o,"--n-bezier":r,"--n-ripple-bezier":i}}),f=r?mt(`badge`,K(()=>{let t=``,{type:n,color:r}=e;return n&&(t+=n[0]),r&&(t+=z(r)),t}),d,e):void 0,p=K(()=>{let{offset:t}=e;if(!t)return;let[n,r]=t,i=typeof n==`number`?`${n}px`:n,a=typeof r==`number`?`${r}px`:r;return{transform:`translate(calc(${u?.value?`50%`:`-50%`} + ${i}), ${a})`}});return{rtlEnabled:u,mergedClsPrefix:n,appeared:o,showBadge:l,handleAfterEnter:s,handleAfterLeave:c,cssVars:r?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender,offsetStyle:p}},render(){let{mergedClsPrefix:e,onRender:t,themeClass:n,$slots:r}=this;t?.();let i=r.default?.call(r);return G(`div`,{class:[`${e}-badge`,this.rtlEnabled&&`${e}-badge--rtl`,n,{[`${e}-badge--dot`]:this.dot,[`${e}-badge--as-is`]:!i}],style:this.cssVars},i,G(I,{name:`fade-in-scale-up-transition`,onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?G(`sup`,{class:`${e}-badge-sup`,title:a(this.value),style:this.offsetStyle},Ke(r.value,()=>[this.dot?null:G($t,{clsPrefix:e,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?G(Ge,{clsPrefix:e}):null):null}))}}),un=X(`breadcrumb`,`
 white-space: nowrap;
 cursor: default;
 line-height: var(--n-item-line-height);
`,[B(`ul`,`
 list-style: none;
 padding: 0;
 margin: 0;
 `),B(`a`,`
 color: inherit;
 text-decoration: inherit;
 `),X(`breadcrumb-item`,`
 font-size: var(--n-font-size);
 transition: color .3s var(--n-bezier);
 display: inline-flex;
 align-items: center;
 `,[X(`icon`,`
 font-size: 18px;
 vertical-align: -.2em;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `),B(`&:not(:last-child)`,[R(`clickable`,[Y(`link`,`
 cursor: pointer;
 `,[B(`&:hover`,`
 background-color: var(--n-item-color-hover);
 `),B(`&:active`,`
 background-color: var(--n-item-color-pressed); 
 `)])])]),Y(`link`,`
 padding: 4px;
 border-radius: var(--n-item-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 position: relative;
 `,[B(`&:hover`,`
 color: var(--n-item-text-color-hover);
 `,[X(`icon`,`
 color: var(--n-item-text-color-hover);
 `)]),B(`&:active`,`
 color: var(--n-item-text-color-pressed);
 `,[X(`icon`,`
 color: var(--n-item-text-color-pressed);
 `)])]),Y(`separator`,`
 margin: 0 8px;
 color: var(--n-separator-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 `),B(`&:last-child`,[Y(`link`,`
 font-weight: var(--n-font-weight-active);
 cursor: unset;
 color: var(--n-item-text-color-active);
 `,[X(`icon`,`
 color: var(--n-item-text-color-active);
 `)]),Y(`separator`,`
 display: none;
 `)])])]),dn=ue(`n-breadcrumb`),fn=Z({name:`Breadcrumb`,props:Object.assign(Object.assign({},M.props),{separator:{type:String,default:`/`}}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=St(e),r=M(`Breadcrumb`,`-breadcrumb`,un,ce,e,t);O(dn,{separatorRef:V(e,`separator`),mergedClsPrefixRef:t});let i=K(()=>{let{common:{cubicBezierEaseInOut:e},self:{separatorColor:t,itemTextColor:n,itemTextColorHover:i,itemTextColorPressed:a,itemTextColorActive:o,fontSize:s,fontWeightActive:c,itemBorderRadius:l,itemColorHover:u,itemColorPressed:d,itemLineHeight:f}}=r.value;return{"--n-font-size":s,"--n-bezier":e,"--n-item-text-color":n,"--n-item-text-color-hover":i,"--n-item-text-color-pressed":a,"--n-item-text-color-active":o,"--n-separator-color":t,"--n-item-color-hover":u,"--n-item-color-pressed":d,"--n-item-border-radius":l,"--n-font-weight-active":c,"--n-item-line-height":f}}),a=n?mt(`breadcrumb`,void 0,i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;return(e=this.onRender)==null||e.call(this),G(`nav`,{class:[`${this.mergedClsPrefix}-breadcrumb`,this.themeClass],style:this.cssVars,"aria-label":`Breadcrumb`},G(`ul`,null,this.$slots))}});function pn(e=De?window:null){let t=()=>{let{hash:t,host:n,hostname:r,href:i,origin:a,pathname:o,port:s,protocol:c,search:l}=e?.location||{};return{hash:t,host:n,hostname:r,href:i,origin:a,pathname:o,port:s,protocol:c,search:l}},n=L(t()),r=()=>{n.value=t()};return Ie(()=>{e&&(e.addEventListener(`popstate`,r),e.addEventListener(`hashchange`,r))}),It(()=>{e&&(e.removeEventListener(`popstate`,r),e.removeEventListener(`hashchange`,r))}),n}var mn=Z({name:`BreadcrumbItem`,props:{separator:String,href:String,clickable:{type:Boolean,default:!0},showSeparator:{type:Boolean,default:!0},onClick:Function},slots:Object,setup(e,{slots:t}){let n=q(dn,null);if(!n)return()=>null;let{separatorRef:r,mergedClsPrefixRef:i}=n,a=pn(),o=K(()=>e.href?`a`:`span`),s=K(()=>a.value.href===e.href?`location`:null);return()=>{let{value:n}=i;return G(`li`,{class:[`${n}-breadcrumb-item`,e.clickable&&`${n}-breadcrumb-item--clickable`]},G(o.value,{class:`${n}-breadcrumb-item__link`,"aria-current":s.value,href:e.href,onClick:e.onClick},t),e.showSeparator&&G(`span`,{class:`${n}-breadcrumb-item__separator`,"aria-hidden":`true`},Ke(t.separator,()=>[e.separator??r.value])))}}});function hn(e,t){switch(e[0]){case`hex`:return t?`#000000FF`:`#000000`;case`rgb`:return t?`rgba(0, 0, 0, 1)`:`rgb(0, 0, 0)`;case`hsl`:return t?`hsla(0, 0%, 0%, 1)`:`hsl(0, 0%, 0%)`;case`hsv`:return t?`hsva(0, 0%, 0%, 1)`:`hsv(0, 0%, 0%)`}return`#000000`}function gn(e){return e===null?null:/^ *#/.test(e)?`hex`:e.includes(`rgb`)?`rgb`:e.includes(`hsl`)?`hsl`:e.includes(`hsv`)?`hsv`:null}function _n(e,t=[255,255,255],n=`AA`){let[r,i,a,o]=Ct(He(e));if(o===1){let e=vn([r,i,a]),o=vn(t);return(Math.max(e,o)+.05)/(Math.min(e,o)+.05)>=(n===`AA`?4.5:7)}let s=vn([Math.round(r*o+t[0]*(1-o)),Math.round(i*o+t[1]*(1-o)),Math.round(a*o+t[2]*(1-o))]),c=vn(t);return(Math.max(s,c)+.05)/(Math.min(s,c)+.05)>=(n===`AA`?4.5:7)}function vn(e){let[t,n,r]=e.map(e=>(e/=255,e<=.03928?e/12.92:((e+.055)/1.055)**2.4));return .2126*t+.7152*n+.0722*r}function yn(e){return e=Math.round(e),e>=360?359:e<0?0:e}function bn(e){return e=Math.round(e*100)/100,e>1?1:e<0?0:e}var xn={rgb:{hex(e){return st(Ct(e))},hsl(e){let[t,n,r,i]=Ct(e);return He([...Le(t,n,r),i])},hsv(e){let[t,n,r,i]=Ct(e);return _t([...Lt(t,n,r),i])}},hex:{rgb(e){return et(Ct(e))},hsl(e){let[t,n,r,i]=Ct(e);return He([...Le(t,n,r),i])},hsv(e){let[t,n,r,i]=Ct(e);return _t([...Lt(t,n,r),i])}},hsl:{hex(e){let[t,n,r,i]=Pe(e);return st([...Me(t,n,r),i])},rgb(e){let[t,n,r,i]=Pe(e);return et([...Me(t,n,r),i])},hsv(e){let[t,n,r,i]=Pe(e);return _t([...Xe(t,n,r),i])}},hsv:{hex(e){let[t,n,r,i]=ht(e);return st([...zt(t,n,r),i])},rgb(e){let[t,n,r,i]=ht(e);return et([...zt(t,n,r),i])},hsl(e){let[t,n,r,i]=ht(e);return He([...Mt(t,n,r),i])}}};function Sn(e,t,n){return n||=gn(e),n?n===t?e:xn[n][t](e):null}var Cn=`12px`,wn=12,Tn=`6px`,En=Z({name:`AlphaSlider`,props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},alpha:{type:Number,default:0},onUpdateAlpha:{type:Function,required:!0},onComplete:Function},setup(e){let t=L(null);function n(n){!t.value||!e.rgba||(We(`mousemove`,document,r),We(`mouseup`,document,i),r(n))}function r(n){let{value:r}=t;if(!r)return;let{width:i,left:a}=r.getBoundingClientRect(),o=(n.clientX-a)/(i-wn);e.onUpdateAlpha(bn(o))}function i(){var t;C(`mousemove`,document,r),C(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{railRef:t,railBackgroundImage:K(()=>{let{rgba:t}=e;return t?`linear-gradient(to right, rgba(${t[0]}, ${t[1]}, ${t[2]}, 0) 0%, rgba(${t[0]}, ${t[1]}, ${t[2]}, 1) 100%)`:``}),handleMouseDown:n}},render(){let{clsPrefix:e}=this;return G(`div`,{class:`${e}-color-picker-slider`,ref:`railRef`,style:{height:Cn,borderRadius:Tn},onMousedown:this.handleMouseDown},G(`div`,{style:{borderRadius:Tn,position:`absolute`,left:0,right:0,top:0,bottom:0,overflow:`hidden`}},G(`div`,{class:`${e}-color-picker-checkboard`}),G(`div`,{class:`${e}-color-picker-slider__image`,style:{backgroundImage:this.railBackgroundImage}})),this.rgba&&G(`div`,{style:{position:`absolute`,left:Tn,right:Tn,top:0,bottom:0}},G(`div`,{class:`${e}-color-picker-handle`,style:{left:`calc(${this.alpha*100}% - ${Tn})`,borderRadius:Tn,width:Cn,height:Cn}},G(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:et(this.rgba),borderRadius:Tn,width:Cn,height:Cn}}))))}}),Dn=ue(`n-color-picker`);function On(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),255)):!1}function kn(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),360)):!1}function An(e){return/^\d{1,3}\.?\d*$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e),100)):!1}function jn(e){let t=e.trim();return/^#[0-9a-fA-F]+$/.test(t)?[4,5,7,9].includes(t.length):!1}function Mn(e){return/^\d{1,3}\.?\d*%$/.test(e.trim())?Math.max(0,Math.min(Number.parseInt(e)/100,100)):!1}var Nn={paddingSmall:`0 4px`},Pn=Z({name:`ColorInputUnit`,props:{label:{type:String,required:!0},value:{type:[Number,String],default:null},showAlpha:Boolean,onUpdateValue:{type:Function,required:!0}},setup(e){let t=L(``),{themeRef:n}=q(Dn,null);it(()=>{t.value=r()});function r(){let{value:t}=e;if(t===null)return``;let{label:n}=e;return n===`HEX`?t:n===`A`?`${Math.floor(t*100)}%`:String(Math.floor(t))}function i(e){t.value=e}function a(n){let i,a;switch(e.label){case`HEX`:a=jn(n),a&&e.onUpdateValue(n),t.value=r();break;case`H`:i=kn(n),i===!1?t.value=r():e.onUpdateValue(i);break;case`S`:case`L`:case`V`:i=An(n),i===!1?t.value=r():e.onUpdateValue(i);break;case`A`:i=Mn(n),i===!1?t.value=r():e.onUpdateValue(i);break;case`R`:case`G`:case`B`:i=On(n),i===!1?t.value=r():e.onUpdateValue(i);break}}return{mergedTheme:n,inputValue:t,handleInputChange:a,handleInputUpdateValue:i}},render(){let{mergedTheme:e}=this;return G(l,{size:`small`,placeholder:this.label,theme:e.peers.Input,themeOverrides:e.peerOverrides.Input,builtinThemeOverrides:Nn,value:this.inputValue,onUpdateValue:this.handleInputUpdateValue,onChange:this.handleInputChange,style:this.label===`A`?`flex-grow: 1.25;`:``})}}),Fn=Z({name:`ColorInput`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},modes:{type:Array,required:!0},showAlpha:{type:Boolean,required:!0},value:{type:String,default:null},valueArr:{type:Array,default:null},onUpdateValue:{type:Function,required:!0},onUpdateMode:{type:Function,required:!0}},setup(e){return{handleUnitUpdateValue(t,n){let{showAlpha:r}=e;if(e.mode===`hex`){e.onUpdateValue((r?st:Re)(n));return}let i;switch(i=e.valueArr===null?[0,0,0,0]:Array.from(e.valueArr),e.mode){case`hsv`:i[t]=n,e.onUpdateValue((r?_t:qe)(i));break;case`rgb`:i[t]=n,e.onUpdateValue((r?et:ut)(i));break;case`hsl`:i[t]=n,e.onUpdateValue((r?He:Dt)(i));break}}}},render(){let{clsPrefix:e,modes:t}=this;return G(`div`,{class:`${e}-color-picker-input`},G(`div`,{class:`${e}-color-picker-input__mode`,onClick:this.onUpdateMode,style:{cursor:t.length===1?``:`pointer`}},this.mode.toUpperCase()+(this.showAlpha?`A`:``)),G(tn,null,{default:()=>{let{mode:e,valueArr:t,showAlpha:n}=this;if(e===`hex`){let e=null;try{e=t===null?null:(n?st:Re)(t)}catch{}return G(Pn,{label:`HEX`,showAlpha:n,value:e,onUpdateValue:e=>{this.handleUnitUpdateValue(0,e)}})}return(e+(n?`a`:``)).split(``).map((e,n)=>G(Pn,{label:e.toUpperCase(),value:t===null?null:t[n],onUpdateValue:e=>{this.handleUnitUpdateValue(n,e)}}))}}))}});function In(e,t){if(t===`hsv`){let[t,n,r,i]=ht(e);return et([...zt(t,n,r),i])}return e}function Ln(e){let t=document.createElement(`canvas`).getContext(`2d`);return t?(t.fillStyle=e,t.fillStyle):`#000000`}var Rn=Z({name:`ColorPickerSwatches`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},swatches:{type:Array,required:!0},onUpdateColor:{type:Function,required:!0}},setup(e){let t=K(()=>e.swatches.map(e=>{let t=gn(e);return{value:e,mode:t,legalValue:In(e,t)}}));function n(t){let{mode:n}=e,{value:r,mode:i}=t;return i||(i=`hex`,/^[a-zA-Z]+$/.test(r)?r=Ln(r):(xe(`color-picker`,`color ${r} in swatches is invalid.`),r=`#000000`)),i===n?r:Sn(r,n,i)}function r(t){e.onUpdateColor(n(t))}function i(e,t){e.key===`Enter`&&r(t)}return{parsedSwatchesRef:t,handleSwatchSelect:r,handleSwatchKeyDown:i}},render(){let{clsPrefix:e}=this;return G(`div`,{class:`${e}-color-picker-swatches`},this.parsedSwatchesRef.map(t=>G(`div`,{class:`${e}-color-picker-swatch`,tabindex:0,onClick:()=>{this.handleSwatchSelect(t)},onKeydown:e=>{this.handleSwatchKeyDown(e,t)}},G(`div`,{class:`${e}-color-picker-swatch__fill`,style:{background:t.legalValue}}))))}}),zn=Z({name:`ColorPickerTrigger`,slots:Object,props:{clsPrefix:{type:String,required:!0},value:{type:String,default:null},hsla:{type:Array,default:null},disabled:Boolean,onClick:Function},setup(e){let{colorPickerSlots:t,renderLabelRef:n}=q(Dn,null);return()=>{let{hsla:r,value:i,clsPrefix:a,onClick:o,disabled:s}=e,c=t.label||n.value;return G(`div`,{class:[`${a}-color-picker`,s&&`${a}-color-picker--disabled`],onClick:s?void 0:o},G(`div`,{class:`${a}-color-picker__fill`},G(`div`,{class:`${a}-color-picker-checkboard`}),G(`div`,{style:{position:`absolute`,left:0,right:0,top:0,bottom:0,backgroundColor:r?He(r):``}}),i&&r?G(`div`,{class:`${a}-color-picker__value`,style:{color:_n(r)?`white`:`black`}},c?c(i):i):null))}}}),Bn=Z({name:`ColorPreview`,props:{clsPrefix:{type:String,required:!0},mode:{type:String,required:!0},color:{type:String,default:null,validator:e=>{let t=gn(e);return!!(!e||t&&t!==`hsv`)}},onUpdateColor:{type:Function,required:!0}},setup(e){function t(t){var n;let r=t.target.value;(n=e.onUpdateColor)==null||n.call(e,Sn(r.toUpperCase(),e.mode,`hex`)),t.stopPropagation()}return{handleChange:t}},render(){let{clsPrefix:e}=this;return G(`div`,{class:`${e}-color-picker-preview__preview`},G(`span`,{class:`${e}-color-picker-preview__fill`,style:{background:this.color||`#000000`}}),G(`input`,{class:`${e}-color-picker-preview__input`,type:`color`,value:this.color,onChange:this.handleChange}))}}),Vn=`12px`,Hn=12,Un=`6px`,Wn=6,Gn=`linear-gradient(90deg,red,#ff0 16.66%,#0f0 33.33%,#0ff 50%,#00f 66.66%,#f0f 83.33%,red)`,Kn=Z({name:`HueSlider`,props:{clsPrefix:{type:String,required:!0},hue:{type:Number,required:!0},onUpdateHue:{type:Function,required:!0},onComplete:Function},setup(e){let t=L(null);function n(e){t.value&&(We(`mousemove`,document,r),We(`mouseup`,document,i),r(e))}function r(n){let{value:r}=t;if(!r)return;let{width:i,left:a}=r.getBoundingClientRect(),o=yn((n.clientX-a-Wn)/(i-Hn)*360);e.onUpdateHue(o)}function i(){var t;C(`mousemove`,document,r),C(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{railRef:t,handleMouseDown:n}},render(){let{clsPrefix:e}=this;return G(`div`,{class:`${e}-color-picker-slider`,style:{height:Vn,borderRadius:Un}},G(`div`,{ref:`railRef`,style:{boxShadow:`inset 0 0 2px 0 rgba(0, 0, 0, .24)`,boxSizing:`border-box`,backgroundImage:Gn,height:Vn,borderRadius:Un,position:`relative`},onMousedown:this.handleMouseDown},G(`div`,{style:{position:`absolute`,left:Un,right:Un,top:0,bottom:0}},G(`div`,{class:`${e}-color-picker-handle`,style:{left:`calc((${this.hue}%) / 359 * 100 - ${Un})`,borderRadius:Un,width:Vn,height:Vn}},G(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:`hsl(${this.hue}, 100%, 50%)`,borderRadius:Un,width:Vn,height:Vn}})))))}}),qn=`12px`,Jn=`6px`,Yn=Z({name:`Pallete`,props:{clsPrefix:{type:String,required:!0},rgba:{type:Array,default:null},displayedHue:{type:Number,required:!0},displayedSv:{type:Array,required:!0},onUpdateSV:{type:Function,required:!0},onComplete:Function},setup(e){let t=L(null);function n(e){t.value&&(We(`mousemove`,document,r),We(`mouseup`,document,i),r(e))}function r(n){let{value:r}=t;if(!r)return;let{width:i,height:a,left:o,bottom:s}=r.getBoundingClientRect(),c=(s-n.clientY)/a,l=(n.clientX-o)/i,u=100*(l>1?1:l<0?0:l),d=100*(c>1?1:c<0?0:c);e.onUpdateSV(u,d)}function i(){var t;C(`mousemove`,document,r),C(`mouseup`,document,i),(t=e.onComplete)==null||t.call(e)}return{palleteRef:t,handleColor:K(()=>{let{rgba:t}=e;return t?`rgb(${t[0]}, ${t[1]}, ${t[2]})`:``}),handleMouseDown:n}},render(){let{clsPrefix:e}=this;return G(`div`,{class:`${e}-color-picker-pallete`,onMousedown:this.handleMouseDown,ref:`palleteRef`},G(`div`,{class:`${e}-color-picker-pallete__layer`,style:{backgroundImage:`linear-gradient(90deg, white, hsl(${this.displayedHue}, 100%, 50%))`}}),G(`div`,{class:`${e}-color-picker-pallete__layer ${e}-color-picker-pallete__layer--shadowed`,style:{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0%), rgba(0, 0, 0, 100%))`}}),this.rgba&&G(`div`,{class:`${e}-color-picker-handle`,style:{width:qn,height:qn,borderRadius:Jn,left:`calc(${this.displayedSv[0]}% - ${Jn})`,bottom:`calc(${this.displayedSv[1]}% - ${Jn})`}},G(`div`,{class:`${e}-color-picker-handle__fill`,style:{backgroundColor:this.handleColor,borderRadius:Jn,width:qn,height:qn}})))}}),Xn=B([X(`color-picker-panel`,`
 margin: 4px 0;
 width: 240px;
 font-size: var(--n-panel-font-size);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 `,[Fe(),X(`input`,`
 text-align: center;
 `)]),X(`color-picker-checkboard`,`
 background: white; 
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[B(`&::after`,`
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 12px 12px;
 background-position: 0 0, 0 6px, 6px -6px, -6px 0px;
 background-repeat: repeat;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),X(`color-picker-slider`,`
 margin-bottom: 8px;
 position: relative;
 box-sizing: border-box;
 `,[Y(`image`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `),B(`&::after`,`
 content: "";
 position: absolute;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 pointer-events: none;
 `)]),X(`color-picker-handle`,`
 z-index: 1;
 box-shadow: 0 0 2px 0 rgba(0, 0, 0, .45);
 position: absolute;
 background-color: white;
 overflow: hidden;
 `,[Y(`fill`,`
 box-sizing: border-box;
 border: 2px solid white;
 `)]),X(`color-picker-pallete`,`
 height: 180px;
 position: relative;
 margin-bottom: 8px;
 cursor: crosshair;
 `,[Y(`layer`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[R(`shadowed`,`
 box-shadow: inset 0 0 2px 0 rgba(0, 0, 0, .24);
 `)])]),X(`color-picker-preview`,`
 display: flex;
 `,[Y(`sliders`,`
 flex: 1 0 auto;
 `),Y(`preview`,`
 position: relative;
 height: 30px;
 width: 30px;
 margin: 0 0 8px 6px;
 border-radius: 50%;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 overflow: hidden;
 `),Y(`fill`,`
 display: block;
 width: 30px;
 height: 30px;
 `),Y(`input`,`
 position: absolute;
 top: 0;
 left: 0;
 width: 30px;
 height: 30px;
 opacity: 0;
 z-index: 1;
 `)]),X(`color-picker-input`,`
 display: flex;
 align-items: center;
 `,[X(`input`,`
 flex-grow: 1;
 flex-basis: 0;
 `),Y(`mode`,`
 width: 72px;
 text-align: center;
 `)]),X(`color-picker-control`,`
 padding: 12px;
 `),X(`color-picker-action`,`
 display: flex;
 margin-top: -4px;
 border-top: 1px solid var(--n-divider-color);
 padding: 8px 12px;
 justify-content: flex-end;
 `,[X(`button`,`margin-left: 8px;`)]),X(`color-picker`,`
 display: inline-block;
 box-sizing: border-box;
 height: var(--n-height);
 font-size: var(--n-font-size);
 width: 100%;
 position: relative;
 cursor: pointer;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[R(`disabled`,`cursor: not-allowed`),Y(`value`,`
 white-space: nowrap;
 position: relative;
 `),Y(`fill`,`
 border-radius: var(--n-border-radius);
 position: absolute;
 display: flex;
 align-items: center;
 justify-content: center;
 left: 4px;
 right: 4px;
 top: 4px;
 bottom: 4px;
 `),X(`color-picker-checkboard`,`
 border-radius: var(--n-border-radius);
 `,[B(`&::after`,`
 --n-block-size: calc((var(--n-height) - 8px) / 3);
 background-size: calc(var(--n-block-size) * 2) calc(var(--n-block-size) * 2);
 background-position: 0 0, 0 var(--n-block-size), var(--n-block-size) calc(-1 * var(--n-block-size)), calc(-1 * var(--n-block-size)) 0px; 
 `)])]),X(`color-picker-swatches`,`
 display: grid;
 grid-gap: 8px;
 flex-wrap: wrap;
 position: relative;
 grid-template-columns: repeat(auto-fill, 18px);
 margin-top: 10px;
 `,[X(`color-picker-swatch`,`
 width: 18px;
 height: 18px;
 background-image: linear-gradient(45deg, #DDD 25%, #0000 25%), linear-gradient(-45deg, #DDD 25%, #0000 25%), linear-gradient(45deg, #0000 75%, #DDD 75%), linear-gradient(-45deg, #0000 75%, #DDD 75%);
 background-size: 8px 8px;
 background-position: 0px 0, 0px 4px, 4px -4px, -4px 0px;
 background-repeat: repeat;
 `,[Y(`fill`,`
 position: relative;
 width: 100%;
 height: 100%;
 border-radius: 3px;
 box-shadow: rgba(0, 0, 0, .15) 0px 0px 0px 1px inset;
 cursor: pointer;
 `),B(`&:focus`,`
 outline: none;
 `,[Y(`fill`,[B(`&::after`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 background: inherit;
 filter: blur(2px);
 content: "";
 `)])])])])]),$=Z({name:`ColorPicker`,props:Object.assign(Object.assign({},M.props),{value:String,show:{type:Boolean,default:void 0},defaultShow:Boolean,defaultValue:String,modes:{type:Array,default:()=>[`rgb`,`hex`,`hsl`]},placement:{type:String,default:`bottom-start`},to:e.propTo,showAlpha:{type:Boolean,default:!0},showPreview:Boolean,swatches:Array,disabled:{type:Boolean,default:void 0},actions:{type:Array,default:null},internalActions:Array,size:String,renderLabel:Function,onComplete:Function,onConfirm:Function,onClear:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),slots:Object,setup(t,{slots:n}){let r=null;function i(e){r=e}let a=null,{mergedClsPrefixRef:o,namespaceRef:s,inlineThemeDisabled:l,mergedComponentPropsRef:u}=St(t),d=Ne(t,{mergedSize:e=>{let{size:n}=t;if(n)return n;let{mergedSize:r}=e||{};return r?.value?r.value:u?.value?.ColorPicker?.size||`medium`}}),{mergedSizeRef:f,mergedDisabledRef:p}=d,{localeRef:m}=_(`global`),h=M(`ColorPicker`,`-color-picker`,Xn,ae,t,o);O(Dn,{themeRef:h,renderLabelRef:V(t,`renderLabel`),colorPickerSlots:n});let g=L(t.defaultShow),v=c(V(t,`show`),g);function y(e){let{onUpdateShow:n,"onUpdate:show":r}=t;n&&U(n,e),r&&U(r,e),g.value=e}let{defaultValue:ee}=t,b=L(ee===void 0?hn(t.modes,t.showAlpha):ee),x=c(V(t,`value`),b),S=L([x.value]),C=L(0),w=K(()=>gn(x.value)),{modes:T}=t,E=L(gn(x.value)||T[0]||`rgb`);function te(){let{modes:e}=t,{value:n}=E,r=e.findIndex(e=>e===n);~r?E.value=e[(r+1)%e.length]:E.value=`rgb`}let D,k,A,re,j,N,P,F,oe=K(()=>{let{value:e}=x;if(!e)return null;switch(w.value){case`hsv`:return ht(e);case`hsl`:return[D,k,A,F]=Pe(e),[...Xe(D,k,A),F];case`rgb`:case`hex`:return[j,N,P,F]=Ct(e),[...Lt(j,N,P),F]}}),I=K(()=>{let{value:e}=x;if(!e)return null;switch(w.value){case`rgb`:case`hex`:return Ct(e);case`hsv`:return[D,k,re,F]=ht(e),[...zt(D,k,re),F];case`hsl`:return[D,k,A,F]=Pe(e),[...Me(D,k,A),F]}}),se=K(()=>{let{value:e}=x;if(!e)return null;switch(w.value){case`hsl`:return Pe(e);case`hsv`:return[D,k,re,F]=ht(e),[...Mt(D,k,re),F];case`rgb`:case`hex`:return[j,N,P,F]=Ct(e),[...Le(j,N,P),F]}}),ce=K(()=>{switch(E.value){case`rgb`:case`hex`:return I.value;case`hsv`:return oe.value;case`hsl`:return se.value}}),le=L(0),ue=L(1),de=L([0,0]);function fe(e,n){let{value:r}=oe,i=le.value,a=r?r[3]:1;de.value=[e,n];let{showAlpha:o}=t;switch(E.value){case`hsv`:z((o?_t:qe)([i,e,n,a]),`cursor`);break;case`hsl`:z((o?He:Dt)([...Mt(i,e,n),a]),`cursor`);break;case`rgb`:z((o?et:ut)([...zt(i,e,n),a]),`cursor`);break;case`hex`:z((o?st:Re)([...zt(i,e,n),a]),`cursor`);break}}function R(e){le.value=e;let{value:n}=oe;if(!n)return;let[,r,i,a]=n,{showAlpha:o}=t;switch(E.value){case`hsv`:z((o?_t:qe)([e,r,i,a]),`cursor`);break;case`rgb`:z((o?et:ut)([...zt(e,r,i),a]),`cursor`);break;case`hex`:z((o?st:Re)([...zt(e,r,i),a]),`cursor`);break;case`hsl`:z((o?He:Dt)([...Mt(e,r,i),a]),`cursor`);break}}function pe(e){switch(E.value){case`hsv`:[D,k,re]=oe.value,z(_t([D,k,re,e]),`cursor`);break;case`rgb`:[j,N,P]=I.value,z(et([j,N,P,e]),`cursor`);break;case`hex`:[j,N,P]=I.value,z(st([j,N,P,e]),`cursor`);break;case`hsl`:[D,k,A]=se.value,z(He([D,k,A,e]),`cursor`);break}ue.value=e}function z(e,n){a=n===`cursor`?e:null;let{nTriggerFormChange:r,nTriggerFormInput:i}=d,{onUpdateValue:o,"onUpdate:value":s}=t;o&&U(o,e),s&&U(s,e),r(),i(),b.value=e}function B(e){z(e,`input`),ct(he)}function he(e=!0){let{value:n}=x;if(n){let{nTriggerFormChange:r,nTriggerFormInput:i}=d,{onComplete:a}=t;a&&a(n);let{value:o}=S,{value:s}=C;e&&(o.splice(s+1,o.length,n),C.value=s+1),r(),i()}}function ge(){let{value:e}=C;e-1<0||(z(S.value[e-1],`input`),he(!1),C.value=e-1)}function ve(){let{value:e}=C;e<0||e+1>=S.value.length||(z(S.value[e+1],`input`),he(!1),C.value=e+1)}function ye(){z(null,`input`);let{onClear:e}=t;e&&e(),y(!1)}function be(){let{value:e}=x,{onConfirm:n}=t;n&&n(e),y(!1)}let H=K(()=>C.value>=1),xe=K(()=>{let{value:e}=S;return e.length>1&&C.value<e.length-1});me(v,e=>{e||(S.value=[x.value],C.value=0)}),it(()=>{if(!(a&&a===x.value)){let{value:e}=oe;e&&(le.value=e[0],ue.value=e[3],de.value=[e[1],e[2]])}a=null});let Se=K(()=>{let{value:e}=f,{common:{cubicBezierEaseInOut:t},self:{textColor:n,color:r,panelFontSize:i,boxShadow:a,border:o,borderRadius:s,dividerColor:c,[_e(`height`,e)]:l,[_e(`fontSize`,e)]:u}}=h.value;return{"--n-bezier":t,"--n-text-color":n,"--n-color":r,"--n-panel-font-size":i,"--n-font-size":u,"--n-box-shadow":a,"--n-border":o,"--n-border-radius":s,"--n-height":l,"--n-divider-color":c}}),Ce=l?mt(`color-picker`,K(()=>f.value[0]),Se,t):void 0;function we(){let{value:e}=I,{value:r}=le,{internalActions:i,modes:a,actions:s}=t,{value:c}=h,{value:u}=o;return G(`div`,{class:[`${u}-color-picker-panel`,Ce?.themeClass.value],onDragstart:e=>{e.preventDefault()},style:l?void 0:Se.value},G(`div`,{class:`${u}-color-picker-control`},G(Yn,{clsPrefix:u,rgba:e,displayedHue:r,displayedSv:de.value,onUpdateSV:fe,onComplete:he}),G(`div`,{class:`${u}-color-picker-preview`},G(`div`,{class:`${u}-color-picker-preview__sliders`},G(Kn,{clsPrefix:u,hue:r,onUpdateHue:R,onComplete:he}),t.showAlpha?G(En,{clsPrefix:u,rgba:e,alpha:ue.value,onUpdateAlpha:pe,onComplete:he}):null),t.showPreview?G(Bn,{clsPrefix:u,mode:E.value,color:I.value&&Re(I.value),onUpdateColor:e=>{z(e,`input`)}}):null),G(Fn,{clsPrefix:u,showAlpha:t.showAlpha,mode:E.value,modes:a,onUpdateMode:te,value:x.value,valueArr:ce.value,onUpdateValue:B}),t.swatches?.length&&G(Rn,{clsPrefix:u,mode:E.value,swatches:t.swatches,onUpdateColor:e=>{z(e,`input`)}})),s?.length?G(`div`,{class:`${u}-color-picker-action`},s.includes(`confirm`)&&G(ie,{size:`small`,onClick:be,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>m.value.confirm}),s.includes(`clear`)&&G(ie,{size:`small`,onClick:ye,disabled:!x.value,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>m.value.clear})):null,n.action?G(`div`,{class:`${u}-color-picker-action`},{default:n.action}):i?G(`div`,{class:`${u}-color-picker-action`},i.includes(`undo`)&&G(ie,{size:`small`,onClick:ge,disabled:!H.value,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>m.value.undo}),i.includes(`redo`)&&G(ie,{size:`small`,onClick:ve,disabled:!xe.value,theme:c.peers.Button,themeOverrides:c.peerOverrides.Button},{default:()=>m.value.redo})):null)}return{mergedClsPrefix:o,namespace:s,hsla:se,rgba:I,mergedShow:v,mergedDisabled:p,isMounted:vt(),adjustedTo:e(t),mergedValue:x,handleTriggerClick(){p.value||y(!0)},setTriggerRef:i,handleClickOutside(e){if(r instanceof Element){if(r.contains(ne(e)))return}else if(r&&r.$el.contains(ne(e)))return;y(!1)},renderPanel:we,cssVars:l?void 0:Se,themeClass:Ce?.themeClass,onRender:Ce?.onRender}},render(){let{mergedClsPrefix:r,onRender:i}=this;return i?.(),G(s,null,{default:()=>[G(n,null,{default:()=>$e(this.$slots.trigger,{value:this.mergedValue,onClick:this.handleTriggerClick,ref:this.setTriggerRef},e=>e||G(zn,{clsPrefix:r,value:this.mergedValue,hsla:this.hsla,style:this.cssVars,ref:this.setTriggerRef,disabled:this.mergedDisabled,class:this.themeClass,onClick:this.mergedDisabled?void 0:this.handleTriggerClick}))}),G(t,{placement:this.placement,show:this.mergedShow,containerClass:this.namespace,teleportDisabled:this.adjustedTo===e.tdkey,to:this.adjustedTo},{default:()=>G(I,{name:`fade-in-scale-up-transition`,appear:this.isMounted},{default:()=>this.mergedShow?rt(this.renderPanel(),[[N,this.handleClickOutside,void 0,{capture:!0}]]):null})})]})}}),Zn=Z({name:`NDrawerContent`,inheritAttrs:!1,props:{blockScroll:Boolean,show:{type:Boolean,default:void 0},displayDirective:{type:String,required:!0},placement:{type:String,required:!0},contentClass:String,contentStyle:[Object,String],nativeScrollbar:{type:Boolean,required:!0},scrollbarProps:Object,trapFocus:{type:Boolean,default:!0},autoFocus:{type:Boolean,default:!0},showMask:{type:[Boolean,String],required:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,onClickoutside:Function,onAfterLeave:Function,onAfterEnter:Function,onEsc:Function},setup(e){let t=L(!!e.show),n=L(null),r=q(F),i=0,a=``,o=null,s=L(!1),c=L(!1),l=K(()=>e.placement===`top`||e.placement===`bottom`),{mergedClsPrefixRef:u,mergedRtlRef:d}=St(e),f=ot(`Drawer`,d,u),p=x,m=e=>{c.value=!0,i=l.value?e.clientY:e.clientX,a=document.body.style.cursor,document.body.style.cursor=l.value?`ns-resize`:`ew-resize`,document.body.addEventListener(`mousemove`,b),document.body.addEventListener(`mouseleave`,p),document.body.addEventListener(`mouseup`,x)},h=()=>{o!==null&&(window.clearTimeout(o),o=null),c.value?s.value=!0:o=window.setTimeout(()=>{s.value=!0},300)},g=()=>{o!==null&&(window.clearTimeout(o),o=null),s.value=!1},{doUpdateHeight:_,doUpdateWidth:v}=r,y=t=>{let{maxWidth:n}=e;if(n&&t>n)return n;let{minWidth:r}=e;return r&&t<r?r:t},ee=t=>{let{maxHeight:n}=e;if(n&&t>n)return n;let{minHeight:r}=e;return r&&t<r?r:t};function b(t){if(c.value)if(l.value){let r=n.value?.offsetHeight||0,a=i-t.clientY;r+=e.placement===`bottom`?a:-a,r=ee(r),_(r),i=t.clientY}else{let r=n.value?.offsetWidth||0,a=i-t.clientX;r+=e.placement===`right`?a:-a,r=y(r),v(r),i=t.clientX}}function x(){c.value&&(i=0,c.value=!1,document.body.style.cursor=a,document.body.removeEventListener(`mousemove`,b),document.body.removeEventListener(`mouseup`,x),document.body.removeEventListener(`mouseleave`,p))}it(()=>{e.show&&(t.value=!0)}),me(()=>e.show,e=>{e||x()}),je(()=>{x()});let S=K(()=>{let{show:t}=e,n=[[de,t]];return e.showMask||n.push([N,e.onClickoutside,void 0,{capture:!0}]),n});function C(){var n;t.value=!1,(n=e.onAfterLeave)==null||n.call(e)}return Bt(K(()=>e.blockScroll&&t.value)),O(Oe,n),O(oe,null),O(we,null),{bodyRef:n,rtlEnabled:f,mergedClsPrefix:r.mergedClsPrefixRef,isMounted:r.isMountedRef,mergedTheme:r.mergedThemeRef,displayed:t,transitionName:K(()=>({right:`slide-in-from-right-transition`,left:`slide-in-from-left-transition`,top:`slide-in-from-top-transition`,bottom:`slide-in-from-bottom-transition`})[e.placement]),handleAfterLeave:C,bodyDirectives:S,handleMousedownResizeTrigger:m,handleMouseenterResizeTrigger:h,handleMouseleaveResizeTrigger:g,isDragging:c,isHoverOnResizeTrigger:s}},render(){let{$slots:e,mergedClsPrefix:t}=this;return this.displayDirective===`show`||this.displayed||this.show?rt(G(`div`,{role:`none`},G(at,{disabled:!this.showMask||!this.trapFocus,active:this.show,autoFocus:this.autoFocus,onEsc:this.onEsc},{default:()=>G(I,{name:this.transitionName,appear:this.isMounted,onAfterEnter:this.onAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>rt(G(`div`,gt(this.$attrs,{role:`dialog`,ref:`bodyRef`,"aria-modal":`true`,class:[`${t}-drawer`,this.rtlEnabled&&`${t}-drawer--rtl`,`${t}-drawer--${this.placement}-placement`,this.isDragging&&`${t}-drawer--unselectable`,this.nativeScrollbar&&`${t}-drawer--native-scrollbar`]}),[this.resizable?G(`div`,{class:[`${t}-drawer__resize-trigger`,(this.isDragging||this.isHoverOnResizeTrigger)&&`${t}-drawer__resize-trigger--hover`],onMouseenter:this.handleMouseenterResizeTrigger,onMouseleave:this.handleMouseleaveResizeTrigger,onMousedown:this.handleMousedownResizeTrigger}):null,this.nativeScrollbar?G(`div`,{class:[`${t}-drawer-content-wrapper`,this.contentClass],style:this.contentStyle,role:`none`},e):G(ze,Object.assign({},this.scrollbarProps,{contentStyle:this.contentStyle,contentClass:[`${t}-drawer-content-wrapper`,this.contentClass],theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar}),e)]),this.bodyDirectives)})})),[[de,this.displayDirective===`if`||this.displayed||this.show]]):null}}),{cubicBezierEaseIn:Qn,cubicBezierEaseOut:$n}=he;function er({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-bottom`}={}){return[B(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${Qn}`}),B(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${$n}`}),B(`&.${n}-transition-enter-to`,{transform:`translateY(0)`}),B(`&.${n}-transition-enter-from`,{transform:`translateY(100%)`}),B(`&.${n}-transition-leave-from`,{transform:`translateY(0)`}),B(`&.${n}-transition-leave-to`,{transform:`translateY(100%)`})]}var{cubicBezierEaseIn:tr,cubicBezierEaseOut:nr}=he;function rr({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-left`}={}){return[B(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${tr}`}),B(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${nr}`}),B(`&.${n}-transition-enter-to`,{transform:`translateX(0)`}),B(`&.${n}-transition-enter-from`,{transform:`translateX(-100%)`}),B(`&.${n}-transition-leave-from`,{transform:`translateX(0)`}),B(`&.${n}-transition-leave-to`,{transform:`translateX(-100%)`})]}var{cubicBezierEaseIn:ir,cubicBezierEaseOut:ar}=he;function or({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-right`}={}){return[B(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${ir}`}),B(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${ar}`}),B(`&.${n}-transition-enter-to`,{transform:`translateX(0)`}),B(`&.${n}-transition-enter-from`,{transform:`translateX(100%)`}),B(`&.${n}-transition-leave-from`,{transform:`translateX(0)`}),B(`&.${n}-transition-leave-to`,{transform:`translateX(100%)`})]}var{cubicBezierEaseIn:sr,cubicBezierEaseOut:cr}=he;function lr({duration:e=`0.3s`,leaveDuration:t=`0.2s`,name:n=`slide-in-from-top`}={}){return[B(`&.${n}-transition-leave-active`,{transition:`transform ${t} ${sr}`}),B(`&.${n}-transition-enter-active`,{transition:`transform ${e} ${cr}`}),B(`&.${n}-transition-enter-to`,{transform:`translateY(0)`}),B(`&.${n}-transition-enter-from`,{transform:`translateY(-100%)`}),B(`&.${n}-transition-leave-from`,{transform:`translateY(0)`}),B(`&.${n}-transition-leave-to`,{transform:`translateY(-100%)`})]}var ur=B([X(`drawer`,`
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `,[or(),rr(),lr(),er(),R(`unselectable`,`
 user-select: none; 
 -webkit-user-select: none;
 `),R(`native-scrollbar`,[X(`drawer-content-wrapper`,`
 overflow: auto;
 height: 100%;
 `)]),Y(`resize-trigger`,`
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `,[R(`hover`,`
 background-color: var(--n-resize-trigger-color-hover);
 `)]),X(`drawer-content-wrapper`,`
 box-sizing: border-box;
 `),X(`drawer-content`,`
 height: 100%;
 display: flex;
 flex-direction: column;
 `,[R(`native-scrollbar`,[X(`drawer-body-content-wrapper`,`
 height: 100%;
 overflow: auto;
 `)]),X(`drawer-body`,`
 flex: 1 0 0;
 overflow: hidden;
 `),X(`drawer-body-content-wrapper`,`
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `),X(`drawer-header`,`
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `,[Y(`main`,`
 flex: 1;
 `),Y(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),X(`drawer-footer`,`
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]),R(`right-placement`,`
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `,[Y(`resize-trigger`,`
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]),R(`left-placement`,`
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[Y(`resize-trigger`,`
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]),R(`top-placement`,`
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `,[Y(`resize-trigger`,`
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]),R(`bottom-placement`,`
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `,[Y(`resize-trigger`,`
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]),B(`body`,[B(`>`,[X(`drawer-container`,`
 position: fixed;
 `)])]),X(`drawer-container`,`
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `,[B(`> *`,`
 pointer-events: all;
 `)]),X(`drawer-mask`,`
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `,[R(`invisible`,`
 background-color: rgba(0, 0, 0, 0)
 `),Je({enterDuration:`0.2s`,leaveDuration:`0.2s`,enterCubicBezier:`var(--n-bezier-in)`,leaveCubicBezier:`var(--n-bezier-out)`})])]),dr=Z({name:`Drawer`,inheritAttrs:!1,props:Object.assign(Object.assign({},M.props),{show:Boolean,width:[Number,String],height:[Number,String],placement:{type:String,default:`right`},maskClosable:{type:Boolean,default:!0},showMask:{type:[Boolean,String],default:!0},to:[String,Object],displayDirective:{type:String,default:`if`},nativeScrollbar:{type:Boolean,default:!0},zIndex:Number,onMaskClick:Function,scrollbarProps:Object,contentClass:String,contentStyle:[Object,String],trapFocus:{type:Boolean,default:!0},onEsc:Function,autoFocus:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!0},blockScroll:{type:Boolean,default:!0},maxWidth:Number,maxHeight:Number,minWidth:Number,minHeight:Number,resizable:Boolean,defaultWidth:{type:[Number,String],default:251},defaultHeight:{type:[Number,String],default:251},onUpdateWidth:[Function,Array],onUpdateHeight:[Function,Array],"onUpdate:width":[Function,Array],"onUpdate:height":[Function,Array],"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,drawerStyle:[String,Object],drawerClass:String,target:null,onShow:Function,onHide:Function}),setup(e){let{mergedClsPrefixRef:t,namespaceRef:n,inlineThemeDisabled:r}=St(e),i=vt(),a=M(`Drawer`,`-drawer`,ur,kt,e,t),o=L(e.defaultWidth),s=L(e.defaultHeight),l=c(V(e,`width`),o),d=c(V(e,`height`),s),f=K(()=>{let{placement:t}=e;return t===`top`||t===`bottom`?``:u(l.value)}),p=K(()=>{let{placement:t}=e;return t===`left`||t===`right`?``:u(d.value)}),m=t=>{let{onUpdateWidth:n,"onUpdate:width":r}=e;n&&U(n,t),r&&U(r,t),o.value=t},h=t=>{let{onUpdateHeight:n,"onUpdate:width":r}=e;n&&U(n,t),r&&U(r,t),s.value=t},g=K(()=>[{width:f.value,height:p.value},e.drawerStyle||``]);function _(t){let{onMaskClick:n,maskClosable:r}=e;r&&b(!1),n&&n(t)}function v(e){_(e)}let y=te();function ee(t){var n;(n=e.onEsc)==null||n.call(e),e.show&&e.closeOnEsc&&j(t)&&(y.value||b(!1))}function b(t){let{onHide:n,onUpdateShow:r,"onUpdate:show":i}=e;r&&U(r,t),i&&U(i,t),n&&!t&&U(n,t)}O(F,{isMountedRef:i,mergedThemeRef:a,mergedClsPrefixRef:t,doUpdateShow:b,doUpdateHeight:h,doUpdateWidth:m});let x=K(()=>{let{common:{cubicBezierEaseInOut:e,cubicBezierEaseIn:t,cubicBezierEaseOut:n},self:{color:r,textColor:i,boxShadow:o,lineHeight:s,headerPadding:c,footerPadding:l,borderRadius:u,bodyPadding:d,titleFontSize:f,titleTextColor:p,titleFontWeight:m,headerBorderBottom:h,footerBorderTop:g,closeIconColor:_,closeIconColorHover:v,closeIconColorPressed:y,closeColorHover:ee,closeColorPressed:b,closeIconSize:x,closeSize:S,closeBorderRadius:C,resizableTriggerColorHover:w}}=a.value;return{"--n-line-height":s,"--n-color":r,"--n-border-radius":u,"--n-text-color":i,"--n-box-shadow":o,"--n-bezier":e,"--n-bezier-out":n,"--n-bezier-in":t,"--n-header-padding":c,"--n-body-padding":d,"--n-footer-padding":l,"--n-title-text-color":p,"--n-title-font-size":f,"--n-title-font-weight":m,"--n-header-border-bottom":h,"--n-footer-border-top":g,"--n-close-icon-color":_,"--n-close-icon-color-hover":v,"--n-close-icon-color-pressed":y,"--n-close-size":S,"--n-close-color-hover":ee,"--n-close-color-pressed":b,"--n-close-icon-size":x,"--n-close-border-radius":C,"--n-resize-trigger-color-hover":w}}),S=r?mt(`drawer`,void 0,x,e):void 0;return{mergedClsPrefix:t,namespace:n,mergedBodyStyle:g,handleOutsideClick:v,handleMaskClick:_,handleEsc:ee,mergedTheme:a,cssVars:r?void 0:x,themeClass:S?.themeClass,onRender:S?.onRender,isMounted:i}},render(){let{mergedClsPrefix:e}=this;return G(fe,{to:this.to,show:this.show},{default:()=>{var t;return(t=this.onRender)==null||t.call(this),rt(G(`div`,{class:[`${e}-drawer-container`,this.namespace,this.themeClass],style:this.cssVars,role:`none`},this.showMask?G(I,{name:`fade-in-transition`,appear:this.isMounted},{default:()=>this.show?G(`div`,{"aria-hidden":!0,class:[`${e}-drawer-mask`,this.showMask===`transparent`&&`${e}-drawer-mask--invisible`],onClick:this.handleMaskClick}):null}):null,G(Zn,Object.assign({},this.$attrs,{class:[this.drawerClass,this.$attrs.class],style:[this.mergedBodyStyle,this.$attrs.style],blockScroll:this.blockScroll,contentStyle:this.contentStyle,contentClass:this.contentClass,placement:this.placement,scrollbarProps:this.scrollbarProps,show:this.show,displayDirective:this.displayDirective,nativeScrollbar:this.nativeScrollbar,onAfterEnter:this.onAfterEnter,onAfterLeave:this.onAfterLeave,trapFocus:this.trapFocus,autoFocus:this.autoFocus,resizable:this.resizable,maxHeight:this.maxHeight,minHeight:this.minHeight,maxWidth:this.maxWidth,minWidth:this.minWidth,showMask:this.showMask,onEsc:this.handleEsc,onClickoutside:this.handleOutsideClick}),this.$slots)),[[ge,{zIndex:this.zIndex,enabled:this.show}]])}})}}),fr=Z({name:`DrawerContent`,props:{title:String,headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],bodyClass:String,bodyStyle:[Object,String],bodyContentClass:String,bodyContentStyle:[Object,String],nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,closable:Boolean},slots:Object,setup(){let e=q(F,null);e||Pt(`drawer-content`,"`n-drawer-content` must be placed inside `n-drawer`.");let{doUpdateShow:t}=e;function n(){t(!1)}return{handleCloseClick:n,mergedTheme:e.mergedThemeRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){let{title:e,mergedClsPrefix:t,nativeScrollbar:n,mergedTheme:r,bodyClass:i,bodyStyle:a,bodyContentClass:o,bodyContentStyle:s,headerClass:c,headerStyle:l,footerClass:u,footerStyle:d,scrollbarProps:f,closable:p,$slots:m}=this;return G(`div`,{role:`none`,class:[`${t}-drawer-content`,n&&`${t}-drawer-content--native-scrollbar`]},m.header||e||p?G(`div`,{class:[`${t}-drawer-header`,c],style:l,role:`none`},G(`div`,{class:`${t}-drawer-header__main`,role:`heading`,"aria-level":`1`},m.header===void 0?e:m.header()),p&&G(Ze,{onClick:this.handleCloseClick,clsPrefix:t,class:`${t}-drawer-header__close`,absolute:!0})):null,n?G(`div`,{class:[`${t}-drawer-body`,i],style:a,role:`none`},G(`div`,{class:[`${t}-drawer-body-content-wrapper`,o],style:s,role:`none`},m)):G(ze,Object.assign({themeOverrides:r.peerOverrides.Scrollbar,theme:r.peers.Scrollbar},f,{class:`${t}-drawer-body`,contentClass:[`${t}-drawer-body-content-wrapper`,o],contentStyle:s}),m),m.footer?G(`div`,{class:[`${t}-drawer-footer`,u],style:d,role:`none`},m.footer()):null)}});function pr(e){let{baseColor:t,textColor2:n,bodyColor:r,cardColor:i,dividerColor:a,actionColor:o,scrollbarColor:s,scrollbarColorHover:c,invertedColor:l}=e;return{textColor:n,textColorInverted:`#FFF`,color:r,colorEmbedded:o,headerColor:i,headerColorInverted:l,footerColor:o,footerColorInverted:l,headerBorderColor:a,headerBorderColorInverted:l,footerBorderColor:a,footerBorderColorInverted:l,siderBorderColor:a,siderBorderColorInverted:l,siderColor:i,siderColorInverted:l,siderToggleButtonBorder:`1px solid ${a}`,siderToggleButtonColor:t,siderToggleButtonIconColor:n,siderToggleButtonIconColorInverted:n,siderToggleBarColor:nt(r,s),siderToggleBarColorHover:nt(r,c),__invertScrollbar:`true`}}var mr=Se({name:`Layout`,common:Ue,peers:{Scrollbar:Ot},self:pr});function hr(e){let{railColor:t,primaryColor:n,baseColor:r,cardColor:i,modalColor:a,popoverColor:o,borderRadius:s,fontSize:c,opacityDisabled:l}=e;return Object.assign(Object.assign({},Be),{fontSize:c,markFontSize:c,railColor:t,railColorHover:t,fillColor:n,fillColorHover:n,opacityDisabled:l,handleColor:`#FFF`,dotColor:i,dotColorModal:a,dotColorPopover:o,handleBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowHover:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowActive:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,handleBoxShadowFocus:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,indicatorColor:`rgba(0, 0, 0, .85)`,indicatorBoxShadow:`0 2px 8px 0 rgba(0, 0, 0, 0.12)`,indicatorTextColor:r,indicatorBorderRadius:s,dotBorder:`2px solid ${t}`,dotBorderActive:`2px solid ${n}`,dotBoxShadow:``})}var gr={name:`Slider`,common:Ue,self:hr},_r=ue(`n-layout-sider`),vr={type:String,default:`static`},yr=X(`layout`,`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[X(`layout-scroll-container`,`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),R(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),br={embedded:Boolean,position:vr,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:``},hasSider:Boolean,siderPlacement:{type:String,default:`left`}},xr=ue(`n-layout`);function Sr(e){return Z({name:e?`LayoutContent`:`Layout`,props:Object.assign(Object.assign({},M.props),br),setup(e){let t=L(null),n=L(null),{mergedClsPrefixRef:r,inlineThemeDisabled:i}=St(e),a=M(`Layout`,`-layout`,yr,mr,e,r);function o(r,i){if(e.nativeScrollbar){let{value:e}=t;e&&(i===void 0?e.scrollTo(r):e.scrollTo(r,i))}else{let{value:e}=n;e&&e.scrollTo(r,i)}}O(xr,e);let s=0,c=0,l=t=>{var n;let r=t.target;s=r.scrollLeft,c=r.scrollTop,(n=e.onScroll)==null||n.call(e,t)};be(()=>{if(e.nativeScrollbar){let e=t.value;e&&(e.scrollTop=c,e.scrollLeft=s)}});let u={display:`flex`,flexWrap:`nowrap`,width:`100%`,flexDirection:`row`},d={scrollTo:o},f=K(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=a.value;return{"--n-bezier":t,"--n-color":e.embedded?n.colorEmbedded:n.color,"--n-text-color":n.textColor}}),p=i?mt(`layout`,K(()=>e.embedded?`e`:``),f,e):void 0;return Object.assign({mergedClsPrefix:r,scrollableElRef:t,scrollbarInstRef:n,hasSiderStyle:u,mergedTheme:a,handleNativeElScroll:l,cssVars:i?void 0:f,themeClass:p?.themeClass,onRender:p?.onRender},d)},render(){var t;let{mergedClsPrefix:n,hasSider:r}=this;(t=this.onRender)==null||t.call(this);let i=r?this.hasSiderStyle:void 0;return G(`div`,{class:[this.themeClass,e&&`${n}-layout-content`,`${n}-layout`,`${n}-layout--${this.position}-positioned`],style:this.cssVars},this.nativeScrollbar?G(`div`,{ref:`scrollableElRef`,class:[`${n}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):G(ze,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,i]}),this.$slots))}})}var Cr=Sr(!1),wr=Sr(!0),Tr=X(`layout-header`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[R(`absolute-positioned`,`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),R(`bordered`,`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Er={position:vr,inverted:Boolean,bordered:{type:Boolean,default:!1}},Dr=Z({name:`LayoutHeader`,props:Object.assign(Object.assign({},M.props),Er),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=St(e),r=M(`Layout`,`-layout-header`,Tr,mr,e,t),i=K(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=r.value,i={"--n-bezier":t};return e.inverted?(i[`--n-color`]=n.headerColorInverted,i[`--n-text-color`]=n.textColorInverted,i[`--n-border-color`]=n.headerBorderColorInverted):(i[`--n-color`]=n.headerColor,i[`--n-text-color`]=n.textColor,i[`--n-border-color`]=n.headerBorderColor),i}),a=n?mt(`layout-header`,K(()=>e.inverted?`a`:`b`),i,e):void 0;return{mergedClsPrefix:t,cssVars:n?void 0:i,themeClass:a?.themeClass,onRender:a?.onRender}},render(){var e;let{mergedClsPrefix:t}=this;return(e=this.onRender)==null||e.call(this),G(`div`,{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Or=X(`layout-sider`,`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[R(`bordered`,[Y(`border`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),Y(`left-placement`,[R(`bordered`,[Y(`border`,`
 right: 0;
 `)])]),R(`right-placement`,`
 justify-content: flex-start;
 `,[R(`bordered`,[Y(`border`,`
 left: 0;
 `)]),R(`collapsed`,[X(`layout-toggle-button`,[X(`base-icon`,`
 transform: rotate(180deg);
 `)]),X(`layout-toggle-bar`,[B(`&:hover`,[Y(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),Y(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])])]),X(`layout-toggle-button`,`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[X(`base-icon`,`
 transform: rotate(0);
 `)]),X(`layout-toggle-bar`,`
 left: -28px;
 transform: rotate(180deg);
 `,[B(`&:hover`,[Y(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),Y(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})])])]),R(`collapsed`,[X(`layout-toggle-bar`,[B(`&:hover`,[Y(`top`,{transform:`rotate(-12deg) scale(1.15) translateY(-2px)`}),Y(`bottom`,{transform:`rotate(12deg) scale(1.15) translateY(2px)`})])]),X(`layout-toggle-button`,[X(`base-icon`,`
 transform: rotate(0);
 `)])]),X(`layout-toggle-button`,`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[X(`base-icon`,`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),X(`layout-toggle-bar`,`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[Y(`top, bottom`,`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),Y(`bottom`,`
 position: absolute;
 top: 34px;
 `),B(`&:hover`,[Y(`top`,{transform:`rotate(12deg) scale(1.15) translateY(-2px)`}),Y(`bottom`,{transform:`rotate(-12deg) scale(1.15) translateY(2px)`})]),Y(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color)`}),B(`&:hover`,[Y(`top, bottom`,{backgroundColor:`var(--n-toggle-bar-color-hover)`})])]),Y(`border`,`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),X(`layout-sider-scroll-container`,`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),R(`show-content`,[X(`layout-sider-scroll-container`,{opacity:1})]),R(`absolute-positioned`,`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),kr=Z({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return G(`div`,{onClick:this.onClick,class:`${e}-layout-toggle-bar`},G(`div`,{class:`${e}-layout-toggle-bar__top`}),G(`div`,{class:`${e}-layout-toggle-bar__bottom`}))}}),Ar=Z({name:`LayoutToggleButton`,props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){let{clsPrefix:e}=this;return G(`div`,{class:`${e}-layout-toggle-button`,onClick:this.onClick},G(Ft,{clsPrefix:e},{default:()=>G(p,null)}))}}),jr={position:vr,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:``},collapseMode:{type:String,default:`transform`},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Mr=Z({name:`LayoutSider`,props:Object.assign(Object.assign({},M.props),jr),setup(e){let t=q(xr),n=L(null),r=L(null),i=L(e.defaultCollapsed),a=c(V(e,`collapsed`),i),o=K(()=>u(a.value?e.collapsedWidth:e.width)),s=K(()=>e.collapseMode===`transform`?{minWidth:u(e.width)}:{}),l=K(()=>t?t.siderPlacement:`left`);function d(t,i){if(e.nativeScrollbar){let{value:e}=n;e&&(i===void 0?e.scrollTo(t):e.scrollTo(t,i))}else{let{value:e}=r;e&&e.scrollTo(t,i)}}function f(){let{"onUpdate:collapsed":t,onUpdateCollapsed:n,onExpand:r,onCollapse:o}=e,{value:s}=a;n&&U(n,!s),t&&U(t,!s),i.value=!s,s?r&&U(r):o&&U(o)}let p=0,m=0,h=t=>{var n;let r=t.target;p=r.scrollLeft,m=r.scrollTop,(n=e.onScroll)==null||n.call(e,t)};be(()=>{if(e.nativeScrollbar){let e=n.value;e&&(e.scrollTop=m,e.scrollLeft=p)}}),O(_r,{collapsedRef:a,collapseModeRef:V(e,`collapseMode`)});let{mergedClsPrefixRef:g,inlineThemeDisabled:_}=St(e),v=M(`Layout`,`-layout-sider`,Or,mr,e,g);function y(t){var n,r;t.propertyName===`max-width`&&(a.value?(n=e.onAfterLeave)==null||n.call(e):(r=e.onAfterEnter)==null||r.call(e))}let ee={scrollTo:d},b=K(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=v.value,{siderToggleButtonColor:r,siderToggleButtonBorder:i,siderToggleBarColor:a,siderToggleBarColorHover:o}=n,s={"--n-bezier":t,"--n-toggle-button-color":r,"--n-toggle-button-border":i,"--n-toggle-bar-color":a,"--n-toggle-bar-color-hover":o};return e.inverted?(s[`--n-color`]=n.siderColorInverted,s[`--n-text-color`]=n.textColorInverted,s[`--n-border-color`]=n.siderBorderColorInverted,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColorInverted,s.__invertScrollbar=n.__invertScrollbar):(s[`--n-color`]=n.siderColor,s[`--n-text-color`]=n.textColor,s[`--n-border-color`]=n.siderBorderColor,s[`--n-toggle-button-icon-color`]=n.siderToggleButtonIconColor),s}),x=_?mt(`layout-sider`,K(()=>e.inverted?`a`:`b`),b,e):void 0;return Object.assign({scrollableElRef:n,scrollbarInstRef:r,mergedClsPrefix:g,mergedTheme:v,styleMaxWidth:o,mergedCollapsed:a,scrollContainerStyle:s,siderPlacement:l,handleNativeElScroll:h,handleTransitionend:y,handleTriggerClick:f,inlineThemeDisabled:_,cssVars:b,themeClass:x?.themeClass,onRender:x?.onRender},ee)},render(){var e;let{mergedClsPrefix:t,mergedCollapsed:n,showTrigger:r}=this;return(e=this.onRender)==null||e.call(this),G(`aside`,{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,n&&`${t}-layout-sider--collapsed`,(!n||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:u(this.width)}]},this.nativeScrollbar?G(`div`,{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:`auto`},this.contentStyle],ref:`scrollableElRef`},this.$slots):G(ze,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:`scrollbarInstRef`,style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar===`true`?{colorHover:`rgba(255, 255, 255, .4)`,color:`rgba(255, 255, 255, .3)`}:void 0}),this.$slots),r?G(r===`bar`?kr:Ar,{clsPrefix:t,class:n?this.collapsedTriggerClass:this.triggerClass,style:n?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?G(`div`,{class:`${t}-layout-sider__border`}):null)}}),Nr=ue(`n-menu`),Pr=ue(`n-submenu`),Fr=ue(`n-menu-item-group`),Ir=[B(`&::before`,`background-color: var(--n-item-color-hover);`),Y(`arrow`,`
 color: var(--n-arrow-color-hover);
 `),Y(`icon`,`
 color: var(--n-item-icon-color-hover);
 `),X(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover);
 `,[B(`a`,`
 color: var(--n-item-text-color-hover);
 `),Y(`extra`,`
 color: var(--n-item-text-color-hover);
 `)])],Lr=[Y(`icon`,`
 color: var(--n-item-icon-color-hover-horizontal);
 `),X(`menu-item-content-header`,`
 color: var(--n-item-text-color-hover-horizontal);
 `,[B(`a`,`
 color: var(--n-item-text-color-hover-horizontal);
 `),Y(`extra`,`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Rr=B([X(`menu`,`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[R(`horizontal`,`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[X(`submenu`,`margin: 0;`),X(`menu-item`,`margin: 0;`),X(`menu-item-content`,`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[B(`&::before`,`display: none;`),R(`selected`,`border-bottom: 2px solid var(--n-border-color-horizontal)`)]),X(`menu-item-content`,[R(`selected`,[Y(`icon`,`color: var(--n-item-icon-color-active-horizontal);`),X(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-horizontal);
 `,[B(`a`,`color: var(--n-item-text-color-active-horizontal);`),Y(`extra`,`color: var(--n-item-text-color-active-horizontal);`)])]),R(`child-active`,`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[X(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[B(`a`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `),Y(`extra`,`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),Y(`icon`,`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),pe(`disabled`,[pe(`selected, child-active`,[B(`&:focus-within`,Lr)]),R(`selected`,[zr(null,[Y(`icon`,`color: var(--n-item-icon-color-active-hover-horizontal);`),X(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[B(`a`,`color: var(--n-item-text-color-active-hover-horizontal);`),Y(`extra`,`color: var(--n-item-text-color-active-hover-horizontal);`)])])]),R(`child-active`,[zr(null,[Y(`icon`,`color: var(--n-item-icon-color-child-active-hover-horizontal);`),X(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[B(`a`,`color: var(--n-item-text-color-child-active-hover-horizontal);`),Y(`extra`,`color: var(--n-item-text-color-child-active-hover-horizontal);`)])])]),zr(`border-bottom: 2px solid var(--n-border-color-horizontal);`,Lr)]),X(`menu-item-content-header`,[B(`a`,`color: var(--n-item-text-color-horizontal);`)])])]),pe(`responsive`,[X(`menu-item-content-header`,`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),R(`collapsed`,[X(`menu-item-content`,[R(`selected`,[B(`&::before`,`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),X(`menu-item-content-header`,`opacity: 0;`),Y(`arrow`,`opacity: 0;`),Y(`icon`,`color: var(--n-item-icon-color-collapsed);`)])]),X(`menu-item`,`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),X(`menu-item-content`,`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[B(`> *`,`z-index: 1;`),B(`&::before`,`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),R(`disabled`,`
 opacity: .45;
 cursor: not-allowed;
 `),R(`collapsed`,[Y(`arrow`,`transform: rotate(0);`)]),R(`selected`,[B(`&::before`,`background-color: var(--n-item-color-active);`),Y(`arrow`,`color: var(--n-arrow-color-active);`),Y(`icon`,`color: var(--n-item-icon-color-active);`),X(`menu-item-content-header`,`
 color: var(--n-item-text-color-active);
 `,[B(`a`,`color: var(--n-item-text-color-active);`),Y(`extra`,`color: var(--n-item-text-color-active);`)])]),R(`child-active`,[X(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active);
 `,[B(`a`,`
 color: var(--n-item-text-color-child-active);
 `),Y(`extra`,`
 color: var(--n-item-text-color-child-active);
 `)]),Y(`arrow`,`
 color: var(--n-arrow-color-child-active);
 `),Y(`icon`,`
 color: var(--n-item-icon-color-child-active);
 `)]),pe(`disabled`,[pe(`selected, child-active`,[B(`&:focus-within`,Ir)]),R(`selected`,[zr(null,[Y(`arrow`,`color: var(--n-arrow-color-active-hover);`),Y(`icon`,`color: var(--n-item-icon-color-active-hover);`),X(`menu-item-content-header`,`
 color: var(--n-item-text-color-active-hover);
 `,[B(`a`,`color: var(--n-item-text-color-active-hover);`),Y(`extra`,`color: var(--n-item-text-color-active-hover);`)])])]),R(`child-active`,[zr(null,[Y(`arrow`,`color: var(--n-arrow-color-child-active-hover);`),Y(`icon`,`color: var(--n-item-icon-color-child-active-hover);`),X(`menu-item-content-header`,`
 color: var(--n-item-text-color-child-active-hover);
 `,[B(`a`,`color: var(--n-item-text-color-child-active-hover);`),Y(`extra`,`color: var(--n-item-text-color-child-active-hover);`)])])]),R(`selected`,[zr(null,[B(`&::before`,`background-color: var(--n-item-color-active-hover);`)])]),zr(null,Ir)]),Y(`icon`,`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),Y(`arrow`,`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),X(`menu-item-content-header`,`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[B(`a`,`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[B(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Y(`extra`,`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),X(`submenu`,`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[X(`menu-item-content`,`
 height: var(--n-item-height);
 `),X(`submenu-children`,`
 overflow: hidden;
 padding: 0;
 `,[ve({duration:`.2s`})])]),X(`menu-item-group`,[X(`menu-item-group-title`,`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),X(`menu-tooltip`,[B(`a`,`
 color: inherit;
 text-decoration: none;
 `)]),X(`menu-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function zr(e,t){return[R(`hover`,e,t),B(`&:hover`,e,t)]}var Br=Z({name:`MenuOptionContent`,props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){let{props:t}=q(Nr);return{menuProps:t,style:K(()=>{let{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:K(()=>{let{maxIconSize:t,activeIconSize:n,iconMarginRight:r}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${n}px`,marginRight:`${r}px`}})}},render(){let{clsPrefix:e,tmNode:t,menuProps:{renderIcon:n,renderLabel:r,renderExtra:i,expandIcon:a}}=this,o=n?n(t.rawNode):Ye(this.icon);return G(`div`,{onClick:e=>{var t;(t=this.onClick)==null||t.call(this,e)},role:`none`,class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},o&&G(`div`,{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:`none`},[o]),G(`div`,{class:`${e}-menu-item-content-header`,role:`none`},this.isEllipsisPlaceholder?this.title:r?r(t.rawNode):Ye(this.title),this.extra||i?G(`span`,{class:`${e}-menu-item-content-header__extra`},` `,i?i(t.rawNode):Ye(this.extra)):null),this.showArrow?G(Ft,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(t.rawNode):G(Jt,null)}):null)}}),Vr=8;function Hr(e){let t=q(Nr),{props:n,mergedCollapsedRef:r}=t,i=q(Pr,null),a=q(Fr,null),o=K(()=>n.mode===`horizontal`),s=K(()=>o.value?n.dropdownPlacement:`tmNodes`in e?`right-start`:`right`),c=K(()=>Math.max(n.collapsedIconSize??n.iconSize,n.iconSize));return{dropdownPlacement:s,activeIconSize:K(()=>!o.value&&e.root&&r.value?n.collapsedIconSize??n.iconSize:n.iconSize),maxIconSize:c,paddingLeft:K(()=>{if(o.value)return;let{collapsedWidth:t,indent:s,rootIndent:l}=n,{root:u,isGroup:d}=e,f=l===void 0?s:l;return u?r.value?t/2-c.value/2:f:a&&typeof a.paddingLeftRef.value==`number`?s/2+a.paddingLeftRef.value:i&&typeof i.paddingLeftRef.value==`number`?(d?s/2:s)+i.paddingLeftRef.value:0}),iconMarginRight:K(()=>{let{collapsedWidth:t,indent:i,rootIndent:a}=n,{value:s}=c,{root:l}=e;return o.value||!l||!r.value?Vr:(a===void 0?i:a)+s+Vr-(t+s)/2}),NMenu:t,NSubmenu:i,NMenuOptionGroup:a}}var Ur={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Wr=Z({name:`MenuDivider`,setup(){let{mergedClsPrefixRef:e,isHorizontalRef:t}=q(Nr);return()=>t.value?null:G(`div`,{class:`${e.value}-menu-divider`})}}),Gr=Object.assign(Object.assign({},Ur),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Kr=jt(Gr),qr=Z({name:`MenuOption`,props:Gr,setup(e){let t=Hr(e),{NSubmenu:n,NMenu:r,NMenuOptionGroup:i}=t,{props:a,mergedClsPrefixRef:o,mergedCollapsedRef:s}=r,c=n?n.mergedDisabledRef:i?i.mergedDisabledRef:{value:!1},l=K(()=>c.value||e.disabled);function u(t){let{onClick:n}=e;n&&n(t)}function d(t){l.value||(r.doSelect(e.internalKey,e.tmNode.rawNode),u(t))}return{mergedClsPrefix:o,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:r.mergedThemeRef,menuProps:a,dropdownEnabled:ye(()=>e.root&&s.value&&a.mode!==`horizontal`&&!l.value),selected:ye(()=>r.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:d}},render(){let{mergedClsPrefix:e,mergedTheme:t,tmNode:n,menuProps:{renderLabel:r,nodeProps:i}}=this,a=i?.(n.rawNode);return G(`div`,Object.assign({},a,{role:`menuitem`,class:[`${e}-menu-item`,a?.class]}),G(ee,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:`hover`,placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:[`menu-tooltip`]},{default:()=>r?r(n.rawNode):Ye(this.title),trigger:()=>G(Br,{tmNode:n,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Jr=Object.assign(Object.assign({},Ur),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Yr=jt(Jr),Xr=Z({name:`MenuOptionGroup`,props:Jr,setup(e){let t=Hr(e),{NSubmenu:n}=t,r=K(()=>n?.mergedDisabledRef.value?!0:e.tmNode.disabled);O(Fr,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:r});let{mergedClsPrefixRef:i,props:a}=q(Nr);return function(){let{value:n}=i,r=t.paddingLeft.value,{nodeProps:o}=a,s=o?.(e.tmNode.rawNode);return G(`div`,{class:`${n}-menu-item-group`,role:`group`},G(`div`,Object.assign({},s,{class:[`${n}-menu-item-group-title`,s?.class],style:[s?.style||``,r===void 0?``:`padding-left: ${r}px;`]}),Ye(e.title),e.extra?G(ke,null,` `,Ye(e.extra)):null),G(`div`,null,e.tmNodes.map(e=>$r(e,a))))}}});function Zr(e){return e.type===`divider`||e.type===`render`}function Qr(e){return e.type===`divider`}function $r(e,t){let{rawNode:n}=e,{show:r}=n;if(r===!1)return null;if(Zr(n))return Qr(n)?G(Wr,Object.assign({key:e.key},n.props)):null;let{labelField:i}=t,{key:a,level:o,isGroup:s}=e,c=Object.assign(Object.assign({},n),{title:n.title||n[i],extra:n.titleExtra||n.extra,key:a,internalKey:a,level:o,root:o===0,isGroup:s});return e.children?e.isGroup?G(Xr,Rt(c,Yr,{tmNode:e,tmNodes:e.children,key:a})):G(ni,Rt(c,ti,{key:a,rawNodes:n[t.childrenField],tmNodes:e.children,tmNode:e})):G(qr,Rt(c,Kr,{key:a,tmNode:e}))}var ei=Object.assign(Object.assign({},Ur),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),ti=jt(ei),ni=Z({name:`Submenu`,props:ei,setup(e){let t=Hr(e),{NMenu:n,NSubmenu:r}=t,{props:i,mergedCollapsedRef:a,mergedThemeRef:o}=n,s=K(()=>{let{disabled:t}=e;return r?.mergedDisabledRef.value||i.disabled?!0:t}),c=L(!1);O(Pr,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:s}),O(Fr,null);function l(){let{onClick:t}=e;t&&t()}function u(){s.value||(a.value||n.toggleExpand(e.internalKey),l())}function d(e){c.value=e}return{menuProps:i,mergedTheme:o,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:c,paddingLeft:t.paddingLeft,mergedDisabled:s,mergedValue:n.mergedValueRef,childActive:ye(()=>e.virtualChildActive??n.activePathRef.value.includes(e.internalKey)),collapsed:K(()=>i.mode===`horizontal`?!1:a.value?!0:!n.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:K(()=>!s.value&&(i.mode===`horizontal`||a.value)),handlePopoverShowChange:d,handleClick:u}},render(){let{mergedClsPrefix:e,menuProps:{renderIcon:t,renderLabel:n}}=this,r=()=>{let{isHorizontal:e,paddingLeft:t,collapsed:n,mergedDisabled:r,maxIconSize:i,activeIconSize:a,title:o,childActive:s,icon:c,handleClick:l,menuProps:{nodeProps:u},dropdownShow:d,iconMarginRight:f,tmNode:p,mergedClsPrefix:m,isEllipsisPlaceholder:h,extra:g}=this,_=u?.(p.rawNode);return G(`div`,Object.assign({},_,{class:[`${m}-menu-item`,_?.class],role:`menuitem`}),G(Br,{tmNode:p,paddingLeft:t,collapsed:n,disabled:r,iconMarginRight:f,maxIconSize:i,activeIconSize:a,title:o,extra:g,showArrow:!e,childActive:s,clsPrefix:m,icon:c,hover:d,onClick:l,isEllipsisPlaceholder:h}))},i=()=>G(tt,null,{default:()=>{let{tmNodes:t,collapsed:n}=this;return n?null:G(`div`,{class:`${e}-submenu-children`,role:`menu`},t.map(e=>$r(e,this.menuProps)))}});return this.root?G(m,Object.assign({size:`large`,trigger:`hover`},this.menuProps?.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:`14px`,optionIconSizeLarge:`18px`},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:n}),{default:()=>G(`div`,{class:`${e}-submenu`,role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},r(),this.isHorizontal?null:i())}):G(`div`,{class:`${e}-submenu`,role:`menu`,"aria-expanded":!this.collapsed,id:this.domId},r(),i())}}),ri=Z({name:`Menu`,inheritAttrs:!1,props:Object.assign(Object.assign({},M.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},disabledField:{type:String,default:`disabled`},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:`vertical`},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:`bottom`},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),setup(e){let{mergedClsPrefixRef:t,inlineThemeDisabled:n}=St(e),i=M(`Menu`,`-menu`,Rr,Qe,e,t),a=q(_r,null),o=K(()=>{let{collapsed:t}=e;if(t!==void 0)return t;if(a){let{collapseModeRef:e,collapsedRef:t}=a;if(e.value===`width`)return t.value??!1}return!1}),s=K(()=>{let{keyField:t,childrenField:n,disabledField:i}=e;return r(e.items||e.options,{getIgnored(e){return Zr(e)},getChildren(e){return e[n]},getDisabled(e){return e[i]},getKey(e){return e[t]??e.name}})}),l=K(()=>new Set(s.value.treeNodes.map(e=>e.key))),{watchProps:u}=e,f=L(null);u?.includes(`defaultValue`)?it(()=>{f.value=e.defaultValue}):f.value=e.defaultValue;let p=c(V(e,`value`),f),m=L([]),h=()=>{m.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(p.value,{includeSelf:!1}).keyPath};u?.includes(`defaultExpandedKeys`)?it(h):h();let g=d(e,[`expandedNames`,`expandedKeys`]),_=c(g,m),v=K(()=>s.value.treeNodes),y=K(()=>s.value.getPath(p.value).keyPath);O(Nr,{props:e,mergedCollapsedRef:o,mergedThemeRef:i,mergedValueRef:p,mergedExpandedKeysRef:_,activePathRef:y,mergedClsPrefixRef:t,isHorizontalRef:K(()=>e.mode===`horizontal`),invertedRef:V(e,`inverted`),doSelect:ee,toggleExpand:x});function ee(t,n){let{"onUpdate:value":r,onUpdateValue:i,onSelect:a}=e;i&&U(i,t,n),r&&U(r,t,n),a&&U(a,t,n),f.value=t}function b(t){let{"onUpdate:expandedKeys":n,onUpdateExpandedKeys:r,onExpandedNamesChange:i,onOpenNamesChange:a}=e;n&&U(n,t),r&&U(r,t),i&&U(i,t),a&&U(a,t),m.value=t}function x(t){let n=Array.from(_.value),r=n.findIndex(e=>e===t);if(~r)n.splice(r,1);else{if(e.accordion&&l.value.has(t)){let e=n.findIndex(e=>l.value.has(e));e>-1&&n.splice(e,1)}n.push(t)}b(n)}let S=t=>{let n=s.value.getPath(t??p.value,{includeSelf:!1}).keyPath;if(!n.length)return;let r=Array.from(_.value),i=new Set([...r,...n]);e.accordion&&l.value.forEach(e=>{i.has(e)&&!n.includes(e)&&i.delete(e)}),b(Array.from(i))},C=K(()=>{let{inverted:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=i.value,{borderRadius:a,borderColorHorizontal:o,fontSize:s,itemHeight:c,dividerColor:l}=r,u={"--n-divider-color":l,"--n-bezier":n,"--n-font-size":s,"--n-border-color-horizontal":o,"--n-border-radius":a,"--n-item-height":c};return t?(u[`--n-group-text-color`]=r.groupTextColorInverted,u[`--n-color`]=r.colorInverted,u[`--n-item-text-color`]=r.itemTextColorInverted,u[`--n-item-text-color-hover`]=r.itemTextColorHoverInverted,u[`--n-item-text-color-active`]=r.itemTextColorActiveInverted,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveInverted,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHoverInverted,u[`--n-item-icon-color`]=r.itemIconColorInverted,u[`--n-item-icon-color-hover`]=r.itemIconColorHoverInverted,u[`--n-item-icon-color-active`]=r.itemIconColorActiveInverted,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHoverInverted,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActiveInverted,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHoverInverted,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsedInverted,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontalInverted,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontalInverted,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontalInverted,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontalInverted,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontalInverted,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontalInverted,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontalInverted,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontalInverted,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontalInverted,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontalInverted,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontalInverted,u[`--n-arrow-color`]=r.arrowColorInverted,u[`--n-arrow-color-hover`]=r.arrowColorHoverInverted,u[`--n-arrow-color-active`]=r.arrowColorActiveInverted,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHoverInverted,u[`--n-arrow-color-child-active`]=r.arrowColorChildActiveInverted,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHoverInverted,u[`--n-item-color-hover`]=r.itemColorHoverInverted,u[`--n-item-color-active`]=r.itemColorActiveInverted,u[`--n-item-color-active-hover`]=r.itemColorActiveHoverInverted,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsedInverted):(u[`--n-group-text-color`]=r.groupTextColor,u[`--n-color`]=r.color,u[`--n-item-text-color`]=r.itemTextColor,u[`--n-item-text-color-hover`]=r.itemTextColorHover,u[`--n-item-text-color-active`]=r.itemTextColorActive,u[`--n-item-text-color-child-active`]=r.itemTextColorChildActive,u[`--n-item-text-color-child-active-hover`]=r.itemTextColorChildActiveHover,u[`--n-item-text-color-active-hover`]=r.itemTextColorActiveHover,u[`--n-item-icon-color`]=r.itemIconColor,u[`--n-item-icon-color-hover`]=r.itemIconColorHover,u[`--n-item-icon-color-active`]=r.itemIconColorActive,u[`--n-item-icon-color-active-hover`]=r.itemIconColorActiveHover,u[`--n-item-icon-color-child-active`]=r.itemIconColorChildActive,u[`--n-item-icon-color-child-active-hover`]=r.itemIconColorChildActiveHover,u[`--n-item-icon-color-collapsed`]=r.itemIconColorCollapsed,u[`--n-item-text-color-horizontal`]=r.itemTextColorHorizontal,u[`--n-item-text-color-hover-horizontal`]=r.itemTextColorHoverHorizontal,u[`--n-item-text-color-active-horizontal`]=r.itemTextColorActiveHorizontal,u[`--n-item-text-color-child-active-horizontal`]=r.itemTextColorChildActiveHorizontal,u[`--n-item-text-color-child-active-hover-horizontal`]=r.itemTextColorChildActiveHoverHorizontal,u[`--n-item-text-color-active-hover-horizontal`]=r.itemTextColorActiveHoverHorizontal,u[`--n-item-icon-color-horizontal`]=r.itemIconColorHorizontal,u[`--n-item-icon-color-hover-horizontal`]=r.itemIconColorHoverHorizontal,u[`--n-item-icon-color-active-horizontal`]=r.itemIconColorActiveHorizontal,u[`--n-item-icon-color-active-hover-horizontal`]=r.itemIconColorActiveHoverHorizontal,u[`--n-item-icon-color-child-active-horizontal`]=r.itemIconColorChildActiveHorizontal,u[`--n-item-icon-color-child-active-hover-horizontal`]=r.itemIconColorChildActiveHoverHorizontal,u[`--n-arrow-color`]=r.arrowColor,u[`--n-arrow-color-hover`]=r.arrowColorHover,u[`--n-arrow-color-active`]=r.arrowColorActive,u[`--n-arrow-color-active-hover`]=r.arrowColorActiveHover,u[`--n-arrow-color-child-active`]=r.arrowColorChildActive,u[`--n-arrow-color-child-active-hover`]=r.arrowColorChildActiveHover,u[`--n-item-color-hover`]=r.itemColorHover,u[`--n-item-color-active`]=r.itemColorActive,u[`--n-item-color-active-hover`]=r.itemColorActiveHover,u[`--n-item-color-active-collapsed`]=r.itemColorActiveCollapsed),u}),w=n?mt(`menu`,K(()=>e.inverted?`a`:`b`),C,e):void 0,T=Tt(),E=L(null),te=L(null),D=!0,k=()=>{var e;D?D=!1:(e=E.value)==null||e.sync({showAllItemsBeforeCalculate:!0})};function ne(){return document.getElementById(T)}let A=L(-1);function re(t){A.value=e.options.length-t}function j(e){e||(A.value=-1)}let N=K(()=>{let t=A.value;return{children:t===-1?[]:e.options.slice(t)}}),P=K(()=>{let{childrenField:t,disabledField:n,keyField:i}=e;return r([N.value],{getIgnored(e){return Zr(e)},getChildren(e){return e[t]},getDisabled(e){return e[n]},getKey(e){return e[i]??e.name}})}),ie=K(()=>r([{}]).treeNodes[0]);function F(){if(A.value===-1)return G(ni,{root:!0,level:0,key:`__ellpisisGroupPlaceholder__`,internalKey:`__ellpisisGroupPlaceholder__`,title:`···`,tmNode:ie.value,domId:T,isEllipsisPlaceholder:!0});let e=P.value.treeNodes[0],t=y.value;return G(ni,{level:0,root:!0,key:`__ellpisisGroup__`,internalKey:`__ellpisisGroup__`,title:`···`,virtualChildActive:!!e.children?.some(e=>t.includes(e.key)),tmNode:e,domId:T,rawNodes:e.rawNode.children||[],tmNodes:e.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:g,uncontrolledExpanededKeys:m,mergedExpandedKeys:_,uncontrolledValue:f,mergedValue:p,activePath:y,tmNodes:v,mergedTheme:i,mergedCollapsed:o,cssVars:n?void 0:C,themeClass:w?.themeClass,overflowRef:E,counterRef:te,updateCounter:()=>{},onResize:k,onUpdateOverflow:j,onUpdateCount:re,renderCounter:F,getCounter:ne,onRender:w?.onRender,showOption:S,deriveResponsiveState:k}},render(){let{mergedClsPrefix:e,mode:t,themeClass:n,onRender:r}=this;r?.();let a=()=>this.tmNodes.map(e=>$r(e,this.$props)),o=t===`horizontal`&&this.responsive,s=()=>G(`div`,gt(this.$attrs,{role:t===`horizontal`?`menubar`:`menu`,class:[`${e}-menu`,n,`${e}-menu--${t}`,o&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),o?G(i,{ref:`overflowRef`,onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:`100%`,display:`flex`,overflow:`hidden`}},{default:a,counter:this.renderCounter}):a());return o?G(T,{onResize:this.onResize},{default:s}):s()}}),ii=B([X(`slider`,`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[R(`reverse`,[X(`slider-handles`,[X(`slider-handle-wrapper`,`
 transform: translate(50%, -50%);
 `)]),X(`slider-dots`,[X(`slider-dot`,`
 transform: translateX(50%, -50%);
 `)]),R(`vertical`,[X(`slider-handles`,[X(`slider-handle-wrapper`,`
 transform: translate(-50%, -50%);
 `)]),X(`slider-marks`,[X(`slider-mark`,`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),X(`slider-dots`,[X(`slider-dot`,`
 transform: translateX(-50%) translateY(0);
 `)])])]),R(`vertical`,`
 box-sizing: content-box;
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[X(`slider-handles`,`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[X(`slider-handle-wrapper`,`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),X(`slider-rail`,`
 height: 100%;
 `,[Y(`fill`,`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),R(`with-mark`,`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),X(`slider-marks`,`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[X(`slider-mark`,`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),X(`slider-dots`,`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[X(`slider-dot`,`
 transform: translateX(-50%) translateY(50%);
 `)])]),R(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[X(`slider-handle`,`
 cursor: not-allowed;
 `)]),R(`with-mark`,`
 width: 100%;
 margin: 8px 0 32px 0;
 `),B(`&:hover`,[X(`slider-rail`,{backgroundColor:`var(--n-rail-color-hover)`},[Y(`fill`,{backgroundColor:`var(--n-fill-color-hover)`})]),X(`slider-handle`,{boxShadow:`var(--n-handle-box-shadow-hover)`})]),R(`active`,[X(`slider-rail`,{backgroundColor:`var(--n-rail-color-hover)`},[Y(`fill`,{backgroundColor:`var(--n-fill-color-hover)`})]),X(`slider-handle`,{boxShadow:`var(--n-handle-box-shadow-hover)`})]),X(`slider-marks`,`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[X(`slider-mark`,`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),X(`slider-rail`,`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[Y(`fill`,`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),X(`slider-handles`,`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[X(`slider-handle-wrapper`,`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[X(`slider-handle`,`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[B(`&:hover`,`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),B(`&:focus`,[X(`slider-handle`,`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[B(`&:hover`,`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),X(`slider-dots`,`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[R(`transition-disabled`,[X(`slider-dot`,`transition: none;`)]),X(`slider-dot`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[R(`active`,`border: var(--n-dot-border-active);`)])])]),X(`slider-handle-indicator`,`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[Fe()]),X(`slider-handle-indicator`,`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[R(`top`,`
 margin-bottom: 12px;
 `),R(`right`,`
 margin-left: 12px;
 `),R(`bottom`,`
 margin-top: 12px;
 `),R(`left`,`
 margin-right: 12px;
 `),Fe()]),P(X(`slider`,[X(`slider-dot`,`background-color: var(--n-dot-color-modal);`)])),se(X(`slider`,[X(`slider-dot`,`background-color: var(--n-dot-color-popover);`)]))]);function ai(e){return window.TouchEvent&&e instanceof window.TouchEvent}function oi(){let e=new Map;return At(()=>{e.clear()}),[e,t=>n=>{e.set(t,n)}]}var si=0,ci=Z({name:`Slider`,props:Object.assign(Object.assign({},M.props),{to:e.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onDragstart:[Function],onDragend:[Function]}),slots:Object,setup(t){let{mergedClsPrefixRef:n,namespaceRef:r,inlineThemeDisabled:i}=St(t),a=M(`Slider`,`-slider`,ii,gr,t,n),o=L(null),[s,l]=oi(),[u,d]=oi(),f=L(new Set),p=Ne(t),{mergedDisabledRef:m}=p,h=K(()=>{let{step:e}=t;if(Number(e)<=0||e===`mark`)return 0;let n=e.toString(),r=0;return n.includes(`.`)&&(r=n.length-n.indexOf(`.`)-1),r}),g=L(t.defaultValue),_=c(V(t,`value`),g),v=K(()=>{let{value:e}=_;return(t.range?e:[e]).map(ae)}),y=K(()=>v.value.length>2),ee=K(()=>t.placement===void 0?t.vertical?`right`:`top`:t.placement),b=K(()=>{let{marks:e}=t;return e?Object.keys(e).map(Number.parseFloat):null}),x=L(-1),S=L(-1),w=L(-1),T=L(!1),E=L(!1),te=K(()=>{let{vertical:e,reverse:n}=t;return e?n?`top`:`bottom`:n?`right`:`left`}),D=K(()=>{if(y.value)return;let e=v.value,n=oe(t.range?Math.min(...e):t.min),r=oe(t.range?Math.max(...e):e[0]),{value:i}=te;return t.vertical?{[i]:`${n}%`,height:`${r-n}%`}:{[i]:`${n}%`,width:`${r-n}%`}}),O=K(()=>{let e=[],{marks:n}=t;if(n){let r=v.value.slice();r.sort((e,t)=>e-t);let{value:i}=te,{value:a}=y,{range:o}=t,s=a?()=>!1:e=>o?e>=r[0]&&e<=r[r.length-1]:e<=r[0];for(let t of Object.keys(n)){let r=Number(t);e.push({active:s(r),key:r,label:n[t],style:{[i]:`${oe(r)}%`}})}}return e});function k(e,t){let n=oe(e),{value:r}=te;return{[r]:`${n}%`,zIndex:+(t===x.value)}}function ne(e){return t.showTooltip||w.value===e||x.value===e&&T.value}function A(e){return T.value?!(x.value===e&&S.value===e):!0}function re(e){var t;~e&&(x.value=e,(t=s.get(e))==null||t.focus())}function j(){u.forEach((e,t)=>{ne(t)&&e.syncPosition()})}function N(e){let{"onUpdate:value":n,onUpdateValue:r}=t,{nTriggerFormInput:i,nTriggerFormChange:a}=p;r&&U(r,e),n&&U(n,e),g.value=e,i(),a()}function P(e){let{range:n}=t;if(n){if(Array.isArray(e)){let{value:t}=v;e.join()!==t.join()&&N(e)}}else Array.isArray(e)||v.value[0]!==e&&N(e)}function ie(e,n){if(t.range){let t=v.value.slice();t.splice(n,1,e),P(t)}else P(e)}function F(e,n,r){let i=r!==void 0;r||=e-n>0?1:-1;let a=b.value||[],{step:o}=t;if(o===`mark`){let t=ce(e,a.concat(n),i?r:void 0);return t?t.value:n}if(o<=0)return n;let{value:s}=h,c;if(i){let e=Number((n/o).toFixed(s)),t=Math.floor(e),i=e>t?t:t-1,l=e<t?t:t+1;c=ce(n,[Number((i*o).toFixed(s)),Number((l*o).toFixed(s)),...a],r)}else{let t=se(e);c=ce(e,[...a,t])}return c?ae(c.value):n}function ae(e){return Math.min(t.max,Math.max(t.min,e))}function oe(e){let{max:n,min:r}=t;return(e-r)/(n-r)*100}function I(e){let{max:n,min:r}=t;return r+(n-r)*e}function se(e){let{step:n,min:r}=t;if(Number(n)<=0||n===`mark`)return e;let i=Math.round((e-r)/n)*n+r;return Number(i.toFixed(h.value))}function ce(e,t=b.value,n){if(!t?.length)return null;let r=null,i=-1;for(;++i<t.length;){let a=t[i]-e,o=Math.abs(a);(n===void 0||a*n>0)&&(r===null||o<r.distance)&&(r={index:i,distance:o,value:t[i]})}return r}function le(e){let n=o.value;if(!n)return;let r=ai(e)?e.touches[0]:e,i=n.getBoundingClientRect(),a;return a=t.vertical?(i.bottom-r.clientY)/i.height:(r.clientX-i.left)/i.width,t.reverse&&(a=1-a),I(a)}function ue(e){if(m.value||!t.keyboard)return;let{vertical:n,reverse:r}=t;switch(e.key){case`ArrowUp`:e.preventDefault(),de(n&&r?-1:1);break;case`ArrowRight`:e.preventDefault(),de(!n&&r?-1:1);break;case`ArrowDown`:e.preventDefault(),de(n&&r?1:-1);break;case`ArrowLeft`:e.preventDefault(),de(!n&&r?1:-1);break}}function de(e){let n=x.value;if(n===-1)return;let{step:r}=t,i=v.value[n];ie(F(Number(r)<=0||r===`mark`?i:i+r*e,i,e>0?1:-1),n)}function fe(e){if(m.value||!ai(e)&&e.button!==si)return;let n=le(e);if(n===void 0)return;let r=v.value.slice(),i=t.range?ce(n,r)?.index??-1:0;i!==-1&&(e.preventDefault(),re(i),R(),ie(F(n,v.value[i]),i))}function R(){T.value||(T.value=!0,t.onDragstart&&U(t.onDragstart),We(`touchend`,document,B),We(`mouseup`,document,B),We(`touchmove`,document,z),We(`mousemove`,document,z))}function pe(){T.value&&(T.value=!1,t.onDragend&&U(t.onDragend),C(`touchend`,document,B),C(`mouseup`,document,B),C(`touchmove`,document,z),C(`mousemove`,document,z))}function z(e){let{value:t}=x;if(!T.value||t===-1){pe();return}let n=le(e);n!==void 0&&ie(F(n,v.value[t]),t)}function B(){pe()}function he(e){x.value=e,m.value||(w.value=e)}function ge(e){x.value===e&&(x.value=-1,pe()),w.value===e&&(w.value=-1)}function _e(e){w.value=e}function ve(e){w.value===e&&(w.value=-1)}me(x,(e,t)=>void ct(()=>S.value=t)),me(_,()=>{if(t.marks){if(E.value)return;E.value=!0,ct(()=>{E.value=!1})}ct(j)}),je(()=>{pe()});let ye=K(()=>{let{self:{markFontSize:e,railColor:t,railColorHover:n,fillColor:r,fillColorHover:i,handleColor:o,opacityDisabled:s,dotColor:c,dotColorModal:l,handleBoxShadow:u,handleBoxShadowHover:d,handleBoxShadowActive:f,handleBoxShadowFocus:p,dotBorder:m,dotBoxShadow:h,railHeight:g,railWidthVertical:_,handleSize:v,dotHeight:y,dotWidth:ee,dotBorderRadius:b,fontSize:x,dotBorderActive:S,dotColorPopover:C},common:{cubicBezierEaseInOut:w}}=a.value;return{"--n-bezier":w,"--n-dot-border":m,"--n-dot-border-active":S,"--n-dot-border-radius":b,"--n-dot-box-shadow":h,"--n-dot-color":c,"--n-dot-color-modal":l,"--n-dot-color-popover":C,"--n-dot-height":y,"--n-dot-width":ee,"--n-fill-color":r,"--n-fill-color-hover":i,"--n-font-size":x,"--n-handle-box-shadow":u,"--n-handle-box-shadow-active":f,"--n-handle-box-shadow-focus":p,"--n-handle-box-shadow-hover":d,"--n-handle-color":o,"--n-handle-size":v,"--n-opacity-disabled":s,"--n-rail-color":t,"--n-rail-color-hover":n,"--n-rail-height":g,"--n-rail-width-vertical":_,"--n-mark-font-size":e}}),be=i?mt(`slider`,void 0,ye,t):void 0,H=K(()=>{let{self:{fontSize:e,indicatorColor:t,indicatorBoxShadow:n,indicatorTextColor:r,indicatorBorderRadius:i}}=a.value;return{"--n-font-size":e,"--n-indicator-border-radius":i,"--n-indicator-box-shadow":n,"--n-indicator-color":t,"--n-indicator-text-color":r}}),xe=i?mt(`slider-indicator`,void 0,H,t):void 0;return{mergedClsPrefix:n,namespace:r,uncontrolledValue:g,mergedValue:_,mergedDisabled:m,mergedPlacement:ee,isMounted:vt(),adjustedTo:e(t),dotTransitionDisabled:E,markInfos:O,isShowTooltip:ne,shouldKeepTooltipTransition:A,handleRailRef:o,setHandleRefs:l,setFollowerRefs:d,fillStyle:D,getHandleStyle:k,activeIndex:x,arrifiedValues:v,followerEnabledIndexSet:f,handleRailMouseDown:fe,handleHandleFocus:he,handleHandleBlur:ge,handleHandleMouseEnter:_e,handleHandleMouseLeave:ve,handleRailKeyDown:ue,indicatorCssVars:i?void 0:H,indicatorThemeClass:xe?.themeClass,indicatorOnRender:xe?.onRender,cssVars:i?void 0:ye,themeClass:be?.themeClass,onRender:be?.onRender}},render(){var r;let{mergedClsPrefix:i,themeClass:a,formatTooltip:o}=this;return(r=this.onRender)==null||r.call(this),G(`div`,{class:[`${i}-slider`,a,{[`${i}-slider--disabled`]:this.mergedDisabled,[`${i}-slider--active`]:this.activeIndex!==-1,[`${i}-slider--with-mark`]:this.marks,[`${i}-slider--vertical`]:this.vertical,[`${i}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},G(`div`,{class:`${i}-slider-rail`},G(`div`,{class:`${i}-slider-rail__fill`,style:this.fillStyle}),this.marks?G(`div`,{class:[`${i}-slider-dots`,this.dotTransitionDisabled&&`${i}-slider-dots--transition-disabled`]},this.markInfos.map(e=>G(`div`,{key:e.key,class:[`${i}-slider-dot`,{[`${i}-slider-dot--active`]:e.active}],style:e.style}))):null,G(`div`,{ref:`handleRailRef`,class:`${i}-slider-handles`},this.arrifiedValues.map((r,a)=>{let c=this.isShowTooltip(a);return G(s,null,{default:()=>[G(n,null,{default:()=>G(`div`,{ref:this.setHandleRefs(a),class:`${i}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,role:`slider`,"aria-valuenow":r,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-orientation":this.vertical?`vertical`:`horizontal`,"aria-disabled":this.disabled,style:this.getHandleStyle(r,a),onFocus:()=>{this.handleHandleFocus(a)},onBlur:()=>{this.handleHandleBlur(a)},onMouseenter:()=>{this.handleHandleMouseEnter(a)},onMouseleave:()=>{this.handleHandleMouseLeave(a)}},Ke(this.$slots.thumb,()=>[G(`div`,{class:`${i}-slider-handle`})]))}),this.tooltip&&G(t,{ref:this.setFollowerRefs(a),show:c,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(a),teleportDisabled:this.adjustedTo===e.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>G(I,{name:`fade-in-scale-up-transition`,appear:this.isMounted,css:this.shouldKeepTooltipTransition(a),onEnter:()=>{this.followerEnabledIndexSet.add(a)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(a)}},{default:()=>{var e;return c?((e=this.indicatorOnRender)==null||e.call(this),G(`div`,{class:[`${i}-slider-handle-indicator`,this.indicatorThemeClass,`${i}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof o==`function`?o(r):r)):null}})})]})})),this.marks?G(`div`,{class:`${i}-slider-marks`},this.markInfos.map(e=>G(`div`,{key:e.key,class:`${i}-slider-mark`,style:e.style},typeof e.label==`function`?e.label():e.label))):null))}}),li={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},ui=Z({name:`BarChartOutline`,render:function(e,t){return H(),J(`svg`,li,t[0]||=[Q(`path`,{d:`M32 32v432a16 16 0 0 0 16 16h432`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`rect`,{x:`96`,y:`224`,width:`80`,height:`192`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`rect`,{x:`240`,y:`176`,width:`80`,height:`240`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`rect`,{x:`383.64`,y:`112`,width:`80`,height:`304`,rx:`20`,ry:`20`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),di={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},fi=Z({name:`CardOutline`,render:function(e,t){return H(),J(`svg`,di,t[0]||=[Q(`rect`,{x:`48`,y:`96`,width:`416`,height:`320`,rx:`56`,ry:`56`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`60`,d:`M48 192h416`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`60`,d:`M128 300h48v20h-48z`},null,-1)])}}),pi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},mi=Z({name:`ChevronBackOutline`,render:function(e,t){return H(),J(`svg`,pi,t[0]||=[Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`48`,d:`M328 112L184 256l144 144`},null,-1)])}}),hi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},gi=Z({name:`ChevronForwardOutline`,render:function(e,t){return H(),J(`svg`,hi,t[0]||=[Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`48`,d:`M184 112l144 144l-144 144`},null,-1)])}}),_i={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},vi=Z({name:`CloseOutline`,render:function(e,t){return H(),J(`svg`,_i,t[0]||=[Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M368 368L144 144`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M368 144L144 368`},null,-1)])}}),yi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},bi=Z({name:`CodeOutline`,render:function(e,t){return H(),J(`svg`,yi,t[0]||=[Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M160 368L32 256l128-112`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M352 368l128-112l-128-112`},null,-1)])}}),xi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Si=Z({name:`CubeOutline`,render:function(e,t){return H(),J(`svg`,xi,t[0]||=[Q(`path`,{d:`M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M69 153.99l187 110l187-110`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M256 463.99v-200`},null,-1)])}}),Ci={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},wi=Z({name:`DocumentTextOutline`,render:function(e,t){return H(),J(`svg`,Ci,t[0]||=[Q(`path`,{d:`M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62z`,fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M256 56v120a32 32 0 0 0 32 32h120`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 288h160`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 368h160`},null,-1)])}}),Ti={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ei=Z({name:`HomeOutline`,render:function(e,t){return H(),J(`svg`,Ti,t[0]||=[Q(`path`,{d:`M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M400 179V64h-48v69`},null,-1)])}}),Di={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Oi=Z({name:`LayersOutline`,render:function(e,t){return H(),J(`svg`,Di,t[0]||=[Q(`path`,{d:`M434.8 137.65l-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M160 204.48l-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),ki={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ai=Z({name:`MenuOutline`,render:function(e,t){return H(),J(`svg`,ki,t[0]||=[Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`,d:`M80 160h352`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`,d:`M80 256h352`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`,d:`M80 352h352`},null,-1)])}}),ji={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Mi=Z({name:`MoonOutline`,render:function(e,t){return H(),J(`svg`,ji,t[0]||=[Q(`path`,{d:`M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),Ni={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Pi=Z({name:`NewspaperOutline`,render:function(e,t){return H(),J(`svg`,Ni,t[0]||=[pt(`<path d="M368 415.86V72a24.07 24.07 0 0 0-24-24H72a24.07 24.07 0 0 0-24 24v352a40.12 40.12 0 0 0 40 40h328" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><path d="M416 464h0a48 48 0 0 1-48-48V128h72a24 24 0 0 1 24 24v264a48 48 0 0 1-48 48z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 128h64"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M240 192h64"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 256h192"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 320h192"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 384h192"></path><path d="M176 208h-64a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16z" fill="currentColor"></path>`,8)])}}),Fi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ii=Z({name:`NotificationsOutline`,render:function(e,t){return H(),J(`svg`,Fi,t[0]||=[Q(`path`,{d:`M427.68 351.43C402 320 383.87 304 383.87 217.35C383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53c-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43C73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M320 384v16a64 64 0 0 1-128 0v-16`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),Li={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ri=Z({name:`PeopleOutline`,render:function(e,t){return H(),J(`svg`,Li,t[0]||=[Q(`path`,{d:`M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M336 304c-65.17 0-127.84 32.37-143.54 95.41c-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z`,fill:`none`,stroke:`currentColor`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M206 306c-18.05-8.27-37.93-11.45-59-11.45c-52 0-102.1 25.85-114.65 76.2c-1.65 6.66 2.53 13.25 9.37 13.25H154`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1)])}}),zi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Bi=Z({name:`ServerOutline`,render:function(e,t){return H(),J(`svg`,zi,t[0]||=[Q(`ellipse`,{cx:`256`,cy:`128`,rx:`192`,ry:`80`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M448 214c0 44.18-86 80-192 80S64 258.18 64 214`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M448 300c0 44.18-86 80-192 80S64 344.18 64 300`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1),Q(`path`,{d:`M64 127.24v257.52C64 428.52 150 464 256 464s192-35.48 192-79.24V127.24`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1)])}}),Vi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Hi=Z({name:`SettingsOutline`,render:function(e,t){return H(),J(`svg`,Vi,t[0]||=[Q(`path`,{d:`M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),Ui={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Wi=Z({name:`ShieldOutline`,render:function(e,t){return H(),J(`svg`,Ui,t[0]||=[Q(`path`,{d:`M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),Gi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ki=Z({name:`SunnyOutline`,render:function(e,t){return H(),J(`svg`,Gi,t[0]||=[pt(`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 416v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 108.92l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 369.14l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M464 256h-48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M96 256H48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 403.08l-33.94-33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>`,9)])}}),qi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Ji=Z({name:`TerminalOutline`,render:function(e,t){return H(),J(`svg`,qi,t[0]||=[Q(`rect`,{x:`32`,y:`48`,width:`448`,height:`416`,rx:`48`,ry:`48`,fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M96 112l80 64l-80 64`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M192 240h64`},null,-1)])}}),Yi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Xi=Z({name:`TimeOutline`,render:function(e,t){return H(),J(`svg`,Yi,t[0]||=[Q(`path`,{d:`M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64z`,fill:`none`,stroke:`currentColor`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1),Q(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M256 128v144h96`},null,-1)])}}),Zi={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},Qi=Z({name:`TvOutline`,render:function(e,t){return H(),J(`svg`,Zi,t[0]||=[Q(`rect`,{x:`32`,y:`96`,width:`448`,height:`272`,rx:`32.14`,ry:`32.14`,fill:`none`,stroke:`currentColor`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),Q(`path`,{stroke:`currentColor`,"stroke-linecap":`round`,"stroke-miterlimit":`10`,"stroke-width":`32`,d:`M128 416h256`,fill:`currentColor`},null,-1)])}}),$i={class:`setting-group`},ea={class:`setting-group`},ta={class:`setting-label`},na={class:`setting-group`},ra={class:`setting-group`},ia={class:`setting-group`},aa={class:`setting-group`},oa={class:`setting-group`},sa={class:`setting-group`},ca={class:`setting-group`},la={class:`setting-group`},ua={class:`setting-group`},da={class:`setting-group`},fa={class:`setting-group`},pa={class:`setting-group`},ma={class:`setting-group`},ha={class:`setting-group`},ga={class:`setting-group`},_a={class:`setting-group`},va={class:`setting-group`},ya={class:`setting-group`},ba={class:`setting-group`},xa={class:`setting-group`},Sa={class:`setting-group`},Ca={class:`setting-group`},wa={class:`setting-group`},Ta={class:`setting-group`},Ea={class:`drawer-footer`},Da=qt(Z({__name:`layout`,setup(e,{expose:t}){let n=wt(),r=L(!1),i=L(`layout`),a=[{label:`默认`,value:`default`},{label:`经典`,value:`classic`},{label:`单栏`,value:`single`}];function s(){n.reset()}function c(){r.value=!0}function l(){r.value=!1}return t({open:c,close:l}),(e,t)=>(H(),ft(E(dr),{show:r.value,"onUpdate:show":t[28]||=e=>r.value=e,width:380,placement:`right`},{default:w(()=>[W(E(fr),{title:`布局配置`,closable:``},{footer:w(()=>[Q(`div`,Ea,[W(E(ie),{onClick:s,type:`warning`,ghost:``},{default:w(()=>[...t[56]||=[xt(`恢复默认`,-1)]]),_:1}),W(E(ie),{onClick:t[27]||=e=>r.value=!1},{default:w(()=>[...t[57]||=[xt(`关闭`,-1)]]),_:1})])]),default:w(()=>[W(E(g),{value:i.value,"onUpdate:value":t[26]||=e=>i.value=e,type:`line`,"justify-content":`space-around`},{default:w(()=>[W(E(h),{name:`layout`,tab:`布局`},{default:w(()=>[Q(`div`,$i,[t[29]||=Q(`div`,{class:`setting-label`},`布局方式`,-1),W(E(o),{value:E(n).settings.layoutMode,"onUpdate:value":t[0]||=e=>E(n).settings.layoutMode=e,options:a},null,8,[`value`])]),Q(`div`,ea,[Q(`div`,ta,`侧边菜单宽度 (`+Ce(E(n).settings.sidebarWidth)+`px)`,1),W(E(ci),{value:E(n).settings.sidebarWidth,"onUpdate:value":t[1]||=e=>E(n).settings.sidebarWidth=e,min:180,max:320,step:10},null,8,[`value`])]),Q(`div`,na,[t[30]||=Q(`div`,{class:`setting-label`},`侧边菜单水平折叠`,-1),W(E(S),{value:E(n).settings.sidebarCollapsed,"onUpdate:value":t[2]||=e=>E(n).settings.sidebarCollapsed=e},null,8,[`value`])]),Q(`div`,ra,[t[31]||=Q(`div`,{class:`setting-label`},`侧边菜单手风琴模式`,-1),W(E(S),{value:E(n).settings.sidebarAccordion,"onUpdate:value":t[3]||=e=>E(n).settings.sidebarAccordion=e},null,8,[`value`])]),Q(`div`,ia,[t[32]||=Q(`div`,{class:`setting-label`},`后台页面切换动画`,-1),W(E(S),{value:E(n).settings.pageTransition,"onUpdate:value":t[4]||=e=>E(n).settings.pageTransition=e},null,8,[`value`])])]),_:1}),W(E(h),{name:`global`,tab:`全局`},{default:w(()=>[Q(`div`,aa,[t[33]||=Q(`div`,{class:`setting-label`},`暗黑模式`,-1),W(E(S),{value:E(n).settings.darkMode,"onUpdate:value":t[5]||=e=>E(n).settings.darkMode=e},null,8,[`value`])]),Q(`div`,oa,[t[34]||=Q(`div`,{class:`setting-label`},`后台页面切换动画`,-1),W(E(S),{value:E(n).settings.pageTransition,"onUpdate:value":t[6]||=e=>E(n).settings.pageTransition=e},null,8,[`value`])])]),_:1}),W(E(h),{name:`sidebar`,tab:`侧边栏`},{default:w(()=>[Q(`div`,sa,[t[35]||=Q(`div`,{class:`setting-label`},`侧边菜单栏背景色`,-1),W(E($),{value:E(n).settings.sidebarBgColor,"onUpdate:value":t[7]||=e=>E(n).settings.sidebarBgColor=e,modes:[`hex`]},null,8,[`value`])]),Q(`div`,ca,[t[36]||=Q(`div`,{class:`setting-label`},`侧边菜单激活项背景色`,-1),W(E($),{value:E(n).settings.sidebarActiveBg,"onUpdate:value":t[8]||=e=>E(n).settings.sidebarActiveBg=e,modes:[`rgb`]},null,8,[`value`])]),Q(`div`,la,[t[37]||=Q(`div`,{class:`setting-label`},`侧边菜单激活项文字色`,-1),W(E($),{value:E(n).settings.sidebarActiveText,"onUpdate:value":t[9]||=e=>E(n).settings.sidebarActiveText=e,modes:[`hex`]},null,8,[`value`])]),Q(`div`,ua,[t[38]||=Q(`div`,{class:`setting-label`},`侧边菜单文字颜色`,-1),W(E($),{value:E(n).settings.sidebarTextColor,"onUpdate:value":t[10]||=e=>E(n).settings.sidebarTextColor=e,modes:[`hex`]},null,8,[`value`])]),Q(`div`,da,[t[39]||=Q(`div`,{class:`setting-label`},`侧边菜单悬停时背景色`,-1),W(E($),{value:E(n).settings.sidebarHoverBg,"onUpdate:value":t[11]||=e=>E(n).settings.sidebarHoverBg=e,modes:[`rgb`]},null,8,[`value`])]),W(E(x),null,{default:w(()=>[...t[40]||=[xt(`顶栏设置`,-1)]]),_:1}),Q(`div`,fa,[t[41]||=Q(`div`,{class:`setting-label`},`显示侧边菜单顶栏`,-1),W(E(S),{value:E(n).settings.showSidebarTop,"onUpdate:value":t[12]||=e=>E(n).settings.showSidebarTop=e},null,8,[`value`])]),Q(`div`,pa,[t[42]||=Q(`div`,{class:`setting-label`},`侧边菜单顶栏背景色`,-1),W(E($),{value:E(n).settings.sidebarTopBg,"onUpdate:value":t[13]||=e=>E(n).settings.sidebarTopBg=e,modes:[`hex`]},null,8,[`value`])]),Q(`div`,ma,[t[43]||=Q(`div`,{class:`setting-label`},`侧边菜单顶栏文字色`,-1),W(E($),{value:E(n).settings.sidebarTopText,"onUpdate:value":t[14]||=e=>E(n).settings.sidebarTopText=e,modes:[`hex`]},null,8,[`value`])]),Q(`div`,ha,[t[44]||=Q(`div`,{class:`setting-label`},`侧边菜单顶栏内容居中`,-1),W(E(S),{value:E(n).settings.sidebarTopCentered,"onUpdate:value":t[15]||=e=>E(n).settings.sidebarTopCentered=e},null,8,[`value`])]),Q(`div`,ga,[t[45]||=Q(`div`,{class:`setting-label`},`侧边菜单顶栏显示LOGO`,-1),W(E(S),{value:E(n).settings.sidebarTopLogo,"onUpdate:value":t[16]||=e=>E(n).settings.sidebarTopLogo=e},null,8,[`value`])]),W(E(x),null,{default:w(()=>[...t[46]||=[xt(`底部工具栏`,-1)]]),_:1}),Q(`div`,_a,[t[47]||=Q(`div`,{class:`setting-label`},`底部工具栏自动隐藏`,-1),W(E(S),{value:E(n).settings.sidebarFooterAutoHide,"onUpdate:value":t[17]||=e=>E(n).settings.sidebarFooterAutoHide=e},null,8,[`value`])]),Q(`div`,va,[t[48]||=Q(`div`,{class:`setting-label`},`底部工具栏图标颜色`,-1),W(E($),{value:E(n).settings.sidebarFooterIconColor,"onUpdate:value":t[18]||=e=>E(n).settings.sidebarFooterIconColor=e,modes:[`hex`]},null,8,[`value`])]),Q(`div`,ya,[t[49]||=Q(`div`,{class:`setting-label`},`底部工具栏悬停图标色`,-1),W(E($),{value:E(n).settings.sidebarFooterHoverIconColor,"onUpdate:value":t[19]||=e=>E(n).settings.sidebarFooterHoverIconColor=e,modes:[`hex`]},null,8,[`value`])]),Q(`div`,ba,[t[50]||=Q(`div`,{class:`setting-label`},`底部工具栏悬停背景色`,-1),W(E($),{value:E(n).settings.sidebarFooterHoverBg,"onUpdate:value":t[20]||=e=>E(n).settings.sidebarFooterHoverBg=e,modes:[`rgb`]},null,8,[`value`])])]),_:1}),W(E(h),{name:`header`,tab:`顶栏`},{default:w(()=>[Q(`div`,xa,[t[51]||=Q(`div`,{class:`setting-label`},`顶栏背景色`,-1),W(E($),{value:E(n).settings.headerBgColor,"onUpdate:value":t[21]||=e=>E(n).settings.headerBgColor=e,modes:[`hex`]},null,8,[`value`])]),Q(`div`,Sa,[t[52]||=Q(`div`,{class:`setting-label`},`顶栏文字色`,-1),W(E($),{value:E(n).settings.headerTextColor,"onUpdate:value":t[22]||=e=>E(n).settings.headerTextColor=e,modes:[`hex`]},null,8,[`value`])]),Q(`div`,Ca,[t[53]||=Q(`div`,{class:`setting-label`},`顶栏悬停时背景色`,-1),W(E($),{value:E(n).settings.headerHoverBg,"onUpdate:value":t[23]||=e=>E(n).settings.headerHoverBg=e,modes:[`rgb`]},null,8,[`value`])]),Q(`div`,wa,[t[54]||=Q(`div`,{class:`setting-label`},`顶栏激活项背景色`,-1),W(E($),{value:E(n).settings.headerActiveBg,"onUpdate:value":t[24]||=e=>E(n).settings.headerActiveBg=e,modes:[`rgb`]},null,8,[`value`])]),Q(`div`,Ta,[t[55]||=Q(`div`,{class:`setting-label`},`顶栏激活项文字色`,-1),W(E($),{value:E(n).settings.headerActiveText,"onUpdate:value":t[25]||=e=>E(n).settings.headerActiveText=e,modes:[`hex`]},null,8,[`value`])])]),_:1})]),_:1},8,[`value`])]),_:1})]),_:1},8,[`show`]))}}),[[`__scopeId`,`data-v-6eca0f25`]]),Oa={key:0,class:`logo-icon`},ka={key:0,class:`logo-text`},Aa={class:`sider-footer`},ja={class:`header-left`},Ma={class:`header-right`},Na={class:`user-trigger`},Pa={class:`user-name`},Fa={key:0,class:`tabs-bar`},Ia={class:`tabs-inner`},La=[`onClick`],Ra={key:0,class:`tab-dot`},za={class:`tab-title`},Ba=qt(Z({__name:`index`,setup(e){let t=D(),n=Vt(),r=Ht(),i=wt(),a=dt();function o(){i.settings.darkMode=!i.settings.darkMode}let s=L(null),c=K(()=>i.settings.sidebarCollapsed),{width:l}=yt(),u=K(()=>l.value<768.98),d=L(!1),f=L(!1);function p(){d.value=!d.value}function h(){d.value=!1}me(u,e=>{e?(f.value=i.settings.sidebarCollapsed,i.settings.sidebarCollapsed=!1):(d.value=!1,i.settings.sidebarCollapsed=f.value)},{immediate:!0});let g=L(n.path),_=L([]),v=L([{path:`/dashboard`,title:`控制台`}]),y=L(`/dashboard`),x={HomeOutline:Ei,ShieldOutline:Wi,PeopleOutline:Ri,SettingsOutline:Hi,ServerOutline:Bi,CodeOutline:bi,PersonOutline:Gt,CubeOutline:Si,NotificationsOutline:Ii,FlashOutline:Wt,BarChartOutline:ui,TimeOutline:Xi,CardOutline:fi,TerminalOutline:Ji,DocumentTextOutline:wi,LayersOutline:Oi,NewspaperOutline:Pi,TvOutline:Qi},S={"time-outline":`TimeOutline`,"card-outline":`CardOutline`,"code-outline":`CodeOutline`,"monitor-outline":`TvOutline`,"people-outline":`PeopleOutline`},C={CMS:Pi,消息通知:Ii,数据管理:Bi,权限管理:Wi,会员管理:Ri,系统管理:Hi,代码生成:bi,个人资料:Gt,数据大屏:ui,AI智能开发:Wt,模块市场:Si,定时任务:Xi,支付管理:fi,CRUD生成器:bi,租户管理:Ri,WEB终端:Ji,控制台:Ei},T={管理员管理:Wi,角色管理:Ri,菜单规则:Oi,管理员日志:wi,会员列表:Ri,会员分组:Oi,系统配置:Hi,附件管理:wi,系统监控:Qi,回收站:Bi,栏目管理:Oi,文章管理:Pi};function te(e,t,n){if(e&&x[e])return x[e];if(e&&S[e])return x[S[e]];if(!n&&C[t])return C[t];if(n&&T[t])return T[t]}function O(e,t=!1){return e.map(e=>{let n=te(e.icon,e.title,t);return{label:e.title||e.name,key:e.path||e.name||``,icon:n?()=>G(b,null,{default:()=>G(n)}):void 0,children:e.children?.length?O(e.children,!0):void 0}})}let ne=K(()=>O(r.menus)),A=K(()=>{let e=[{path:`/`,title:`首页`}];return n.matched.filter(e=>e.path!==`/`).forEach(t=>e.push({path:t.path,title:t.meta?.title||t.name||``})),e});function j(e,t){for(let n of e){if(n.path===t)return n;if(n.children){let e=j(n.children,t);if(e)return e}}return null}function M(e,t){for(let n of e){if(n.path===t)return n.title;if(n.children){let e=M(n.children,t);if(e)return e}}return null}function N(e,t){for(let n of e)if(n.path===t||n.children?.length&&N(n.children,t))return!0;return!1}function P(e,t){for(let n of e){if(n.path===t&&n.children?.length)return[n.path];if(n.children?.length){if(N(n.children,t))return[n.path];let e=P(n.children,t);if(e.length)return[n.path,...e]}}return[]}function F(e){_.value=e}function ae(){_.value=P(r.menus,n.path)}function oe(e){if(j(r.menus,e)?.children?.length){g.value=e;return}if(!v.value.find(t=>t.path===e)){let t=M(r.menus,e)||e.split(`/`).pop()||e;v.value.push({path:e,title:t})}g.value=e,y.value=e,u.value&&(d.value=!1),t.push(e)}function se(e){let n=v.value.findIndex(t=>t.path===e);if(n!==-1&&(v.value.splice(n,1),y.value===e)){let e=v.value[Math.min(n,v.value.length-1)];e&&(y.value=e.path,g.value=e.path,t.push(e.path))}}let ce=[{label:`个人资料`,key:`profile`},{type:`divider`},{label:`退出登录`,key:`logout`}];function ue(e){e===`logout`?(r.logout(),t.push(`/login`)):e===`profile`&&t.push(`/profile`)}let de=L(0),fe=null;function R(){t.push(`/notification`)}async function pe(){try{de.value=(await Kt()).data.count||0}catch{}}return Ie(async()=>{await r.getPermissions(),ae(),pe(),fe=setInterval(pe,3e4)}),je(()=>{fe&&clearInterval(fe)}),me(()=>r.menus,()=>ae()),me(()=>n.path,e=>{if(g.value=e,y.value=e,ae(),!v.value.find(t=>t.path===e)){let t=n.meta?.title||e.split(`/`).pop()||e;v.value.push({path:e,title:t})}}),(e,n)=>{let l=ri,f=ie,x=Mr,S=mn,C=fn,T=ee,te=ln,D=an,O=m,j=Dr,M=re(`router-view`),N=wr,P=Cr;return H(),J(ke,null,[W(P,{class:`layout`,"has-sider":``},{default:w(()=>[u.value&&d.value?(H(),J(`div`,{key:0,class:`mobile-backdrop`,onClick:h})):bt(``,!0),W(x,{width:c.value?72:E(i).settings.sidebarWidth,"native-scrollbar":!1,class:Ee([`sider`,{"sider-mobile":u.value,"sider-mobile-open":d.value}])},{default:w(()=>[E(i).settings.showSidebarTop?(H(),J(`div`,{key:0,class:Ee([`logo`,{"logo-centered":E(i).settings.sidebarTopCentered}]),onClick:n[0]||=e=>E(t).push(`/dashboard`)},[E(i).settings.sidebarTopLogo?(H(),J(`div`,Oa,[W(E(b),{size:`24`,color:`#fff`},{default:w(()=>[W(E(Si))]),_:1})])):bt(``,!0),W(I,{name:`logo-fade`},{default:w(()=>[c.value?bt(``,!0):(H(),J(`span`,ka,`McdmAdmin`))]),_:1})],2)):bt(``,!0),W(l,{value:g.value,"expanded-keys":_.value,options:ne.value,collapsed:c.value,"collapsed-width":72,indent:20,"root-indent":14,accordion:E(i).settings.sidebarAccordion,class:`sidebar-menu`,"onUpdate:value":oe,"onUpdate:expandedKeys":F},null,8,[`value`,`expanded-keys`,`options`,`collapsed`,`accordion`]),Q(`div`,Aa,[W(f,{quaternary:``,class:`collapse-btn`,onClick:n[1]||=e=>u.value?p():E(i).settings.sidebarCollapsed=!E(i).settings.sidebarCollapsed},{icon:w(()=>[W(E(b),{size:`18`},{default:w(()=>[u.value?(H(),ft(E(Ai),{key:0})):c.value?(H(),ft(E(gi),{key:2})):(H(),ft(E(mi),{key:1}))]),_:1})]),_:1})])]),_:1},8,[`width`,`class`]),W(P,{class:`main-area`},{default:w(()=>[W(j,{class:`header`},{default:w(()=>[Q(`div`,ja,[u.value?(H(),ft(f,{key:0,quaternary:``,circle:``,size:`small`,class:`mobile-menu-btn`,onClick:p},{icon:w(()=>[W(E(b),{size:`20`},{default:w(()=>[W(E(Ai))]),_:1})]),_:1})):bt(``,!0),W(C,{class:`breadcrumb`},{separator:w(()=>[W(E(b),{size:`14`,color:`#c0c4cc`},{default:w(()=>[W(E(gi))]),_:1})]),default:w(()=>[(H(!0),J(ke,null,Nt(A.value,e=>(H(),ft(S,{key:e.path},{default:w(()=>[xt(Ce(e.title),1)]),_:2},1024))),128))]),_:1})]),Q(`div`,Ma,[W(f,{quaternary:``,size:`small`,class:`header-link-btn`,tag:`a`,href:`http://127.0.0.1:3002/member`,target:`_blank`},{icon:w(()=>[W(E(b),{size:`16`},{default:w(()=>[W(E(Gt))]),_:1})]),default:w(()=>[n[4]||=xt(` 会员中心 `,-1)]),_:1}),W(f,{quaternary:``,size:`small`,class:`header-link-btn`,tag:`a`,href:`https://www.mcdmadmin.cn/admin/`,target:`_blank`},{icon:w(()=>[W(E(b),{size:`16`},{default:w(()=>[W(E(Ei))]),_:1})]),default:w(()=>[n[5]||=xt(` 码创官网 `,-1)]),_:1}),W(T,null,{trigger:w(()=>[W(f,{quaternary:``,circle:``,size:`small`,onClick:n[2]||=e=>s.value?.open()},{icon:w(()=>[W(E(b),{size:`18`},{default:w(()=>[W(E(Hi))]),_:1})]),_:1})]),default:w(()=>[n[6]||=xt(` 布局配置 `,-1)]),_:1}),W(T,null,{trigger:w(()=>[W(f,{quaternary:``,circle:``,size:`small`,onClick:n[3]||=e=>o()},{icon:w(()=>[W(E(b),{size:`18`},{default:w(()=>[E(a)?(H(),ft(E(Ki),{key:1})):(H(),ft(E(Mi),{key:0}))]),_:1})]),_:1})]),default:w(()=>[xt(` `+Ce(E(a)?`切换亮色模式`:`切换暗黑模式`),1)]),_:1}),W(T,null,{trigger:w(()=>[W(te,{value:de.value,max:99,show:de.value>0,dot:``},{default:w(()=>[W(f,{quaternary:``,circle:``,size:`small`,onClick:R},{icon:w(()=>[W(E(b),{size:`18`},{default:w(()=>[W(E(Ii))]),_:1})]),_:1})]),_:1},8,[`value`,`show`])]),default:w(()=>[n[7]||=xt(` 消息通知 `,-1)]),_:1}),W(O,{options:ce,onSelect:ue,placement:`bottom-end`},{default:w(()=>[Q(`div`,Na,[W(D,{size:32,round:``,style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`}},{default:w(()=>[xt(Ce(E(r).info.nickname?.charAt(0)||`A`),1)]),_:1}),Q(`span`,Pa,Ce(E(r).info.nickname||`Admin`),1),W(E(b),{size:`14`,color:`#999`},{default:w(()=>[W(E(Ut))]),_:1})])]),_:1})])]),_:1}),v.value.length>0?(H(),J(`div`,Fa,[Q(`div`,Ia,[(H(!0),J(ke,null,Nt(v.value,e=>(H(),J(`div`,{key:e.path,class:Ee([`tab-item`,{active:y.value===e.path}]),onClick:n=>{y.value=e.path,E(t).push(e.path)}},[y.value===e.path?(H(),J(`span`,Ra)):bt(``,!0),Q(`span`,za,Ce(e.title),1),v.value.length>1?(H(),ft(E(b),{key:1,size:`14`,class:`tab-close`,onClick:le(t=>se(e.path),[`stop`])},{default:w(()=>[W(E(vi))]),_:1},8,[`onClick`])):bt(``,!0)],10,La))),128))])])):bt(``,!0),W(N,{class:`content`},{default:w(()=>[W(M,null,{default:w(({Component:e})=>[W(I,{name:`fade-slide`,mode:`out-in`},{default:w(()=>[(H(),ft(k(e)))]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1}),W(Da,{ref_key:`settingsDrawer`,ref:s},null,512)],64)}}}),[[`__scopeId`,`data-v-d5dacb8b`]]);export{Ba as default};