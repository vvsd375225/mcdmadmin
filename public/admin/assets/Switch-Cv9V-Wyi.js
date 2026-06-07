import{d as e}from"./Input-sQ_C-O2R.js";import{Ct as t,Et as n,Ii as r,Mr as i,Nr as a,Or as o,Pr as s,Ri as c,Sn as l,Sr as u,Tr as d,_t as f,an as p,c as m,di as h,dn as g,dt as _,ei as v,jr as y,kr as b,li as x,mn as S,on as C,pt as w,rr as T,sn as E}from"./index-BPkAzZ_Q.js";function D(e){let{primaryColor:t,opacityDisabled:n,borderRadius:r,textColor3:i}=e;return Object.assign(Object.assign({},m),{iconColor:i,textColor:`white`,loadingColor:t,opacityDisabled:n,railColor:`rgba(0, 0, 0, .14)`,railColorActive:t,buttonBoxShadow:`0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)`,buttonColor:`#FFF`,railBorderRadiusSmall:r,railBorderRadiusMedium:r,railBorderRadiusLarge:r,buttonBorderRadiusSmall:r,buttonBorderRadiusMedium:r,buttonBorderRadiusLarge:r,boxShadowFocus:`0 0 0 2px ${T(t,{alpha:.2})}`})}var O={name:`Switch`,common:_,self:D},k=b(`switch`,`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[y(`children-placeholder`,`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),y(`rail-placeholder`,`
 display: flex;
 flex-wrap: none;
 `),y(`button-placeholder`,`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),b(`base-loading`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[f({left:`50%`,top:`50%`,originalTransform:`translateX(-50%) translateY(-50%)`})]),y(`checked, unchecked`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),y(`checked`,`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),y(`unchecked`,`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),o(`&:focus`,[y(`rail`,`
 box-shadow: var(--n-box-shadow-focus);
 `)]),i(`round`,[y(`rail`,`border-radius: calc(var(--n-rail-height) / 2);`,[y(`button`,`border-radius: calc(var(--n-button-height) / 2);`)])]),a(`disabled`,[a(`icon`,[i(`rubber-band`,[i(`pressed`,[y(`rail`,[y(`button`,`max-width: var(--n-button-width-pressed);`)])]),y(`rail`,[o(`&:active`,[y(`button`,`max-width: var(--n-button-width-pressed);`)])]),i(`active`,[i(`pressed`,[y(`rail`,[y(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])]),y(`rail`,[o(`&:active`,[y(`button`,`left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));`)])])])])])]),i(`active`,[y(`rail`,[y(`button`,`left: calc(100% - var(--n-button-width) - var(--n-offset))`)])]),y(`rail`,`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[y(`button-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[f()]),y(`button`,`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),i(`active`,[y(`rail`,`background-color: var(--n-rail-color-active);`)]),i(`loading`,[y(`rail`,`
 cursor: wait;
 `)]),i(`disabled`,[y(`rail`,`
 cursor: not-allowed;
 opacity: .5;
 `)])]),A=Object.assign(Object.assign({},n.props),{size:String,value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},spinProps:Object,onChange:[Function,Array]}),j,M=x({name:`Switch`,props:A,slots:Object,setup(t){j===void 0&&(j=typeof CSS<`u`?CSS.supports===void 0?!1:CSS.supports(`width`,`max(1px)`):!0);let{mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedComponentPropsRef:o}=E(t),f=n(`Switch`,`-switch`,k,O,t,i),m=p(t,{mergedSize(e){return t.size===void 0?e?e.mergedSize.value:o?.value?.Switch?.size||`medium`:t.size}}),{mergedSizeRef:h,mergedDisabledRef:g}=m,_=r(t.defaultValue),y=e(c(t,`value`),_),b=v(()=>y.value===t.checkedValue),x=r(!1),S=r(!1),w=v(()=>{let{railStyle:e}=t;if(e)return e({focused:S.value,checked:b.value})});function T(e){let{"onUpdate:value":n,onChange:r,onUpdateValue:i}=t,{nTriggerFormInput:a,nTriggerFormChange:o}=m;n&&l(n,e),i&&l(i,e),r&&l(r,e),_.value=e,a(),o()}function D(){let{nTriggerFormFocus:e}=m;e()}function A(){let{nTriggerFormBlur:e}=m;e()}function M(){t.loading||g.value||(y.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue))}function N(){S.value=!0,D()}function P(){S.value=!1,A(),x.value=!1}function F(e){t.loading||g.value||e.key===` `&&(y.value===t.checkedValue?T(t.uncheckedValue):T(t.checkedValue),x.value=!1)}function I(e){t.loading||g.value||e.key===` `&&(e.preventDefault(),x.value=!0)}let L=v(()=>{let{value:e}=h,{self:{opacityDisabled:t,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:o,loadingColor:c,textColor:l,iconColor:p,[s(`buttonHeight`,e)]:m,[s(`buttonWidth`,e)]:g,[s(`buttonWidthPressed`,e)]:_,[s(`railHeight`,e)]:v,[s(`railWidth`,e)]:y,[s(`railBorderRadius`,e)]:b,[s(`buttonBorderRadius`,e)]:x},common:{cubicBezierEaseInOut:S}}=f.value,C,w,T;return j?(C=`calc((${v} - ${m}) / 2)`,w=`max(${v}, ${m})`,T=`max(${y}, calc(${y} + ${m} - ${v}))`):(C=d((u(v)-u(m))/2),w=d(Math.max(u(v),u(m))),T=u(v)>u(m)?y:d(u(y)+u(m)-u(v))),{"--n-bezier":S,"--n-button-border-radius":x,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":g,"--n-button-width-pressed":_,"--n-button-height":m,"--n-height":w,"--n-offset":C,"--n-opacity-disabled":t,"--n-rail-border-radius":b,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":v,"--n-rail-width":y,"--n-width":T,"--n-box-shadow-focus":o,"--n-loading-color":c,"--n-text-color":l,"--n-icon-color":p}}),R=a?C(`switch`,v(()=>h.value[0]),L,t):void 0;return{handleClick:M,handleBlur:P,handleFocus:N,handleKeyup:F,handleKeydown:I,mergedRailStyle:w,pressed:x,mergedClsPrefix:i,mergedValue:y,checked:b,mergedDisabled:g,cssVars:a?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender}},render(){let{mergedClsPrefix:e,mergedDisabled:n,checked:r,mergedRailStyle:i,onRender:a,$slots:o}=this;a?.();let{checked:s,unchecked:c,icon:l,"checked-icon":u,"unchecked-icon":d}=o,f=!(g(l)&&g(u)&&g(d));return h(`div`,{role:`switch`,"aria-checked":r,class:[`${e}-switch`,this.themeClass,f&&`${e}-switch--icon`,r&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},h(`div`,{class:`${e}-switch__rail`,"aria-hidden":`true`,style:i},S(s,t=>S(c,n=>t||n?h(`div`,{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},h(`div`,{class:`${e}-switch__rail-placeholder`},h(`div`,{class:`${e}-switch__button-placeholder`}),t),h(`div`,{class:`${e}-switch__rail-placeholder`},h(`div`,{class:`${e}-switch__button-placeholder`}),n)):null)),h(`div`,{class:`${e}-switch__button`},S(l,n=>S(u,r=>S(d,i=>h(t,null,{default:()=>this.loading?h(w,Object.assign({key:`loading`,clsPrefix:e,strokeWidth:20},this.spinProps)):this.checked&&(r||n)?h(`div`,{class:`${e}-switch__button-icon`,key:r?`checked-icon`:`icon`},r||n):!this.checked&&(i||n)?h(`div`,{class:`${e}-switch__button-icon`,key:i?`unchecked-icon`:`icon`},i||n):null})))),S(s,t=>t&&h(`div`,{key:`checked`,class:`${e}-switch__checked`},t)),S(c,t=>t&&h(`div`,{key:`unchecked`,class:`${e}-switch__unchecked`},t)))))}});export{M as t};