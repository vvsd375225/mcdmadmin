import{Ci as e,Et as t,Ii as n,Kn as r,Mr as i,Nr as a,On as o,Or as s,Pr as c,Ri as l,Sn as u,di as d,dt as f,ei as p,gt as m,jr as h,kr as g,kt as _,li as v,mn as y,on as b,rr as x,rt as S,sn as C,wr as w}from"./index-QEQuLFiJ.js";function T(e,t){return p(()=>{for(let n of t)if(e[n]!==void 0)return e[n];return e[t[t.length-1]]})}function E(e){let{textColor2:t,primaryColorHover:n,primaryColorPressed:r,primaryColor:i,infoColor:a,successColor:o,warningColor:s,errorColor:c,baseColor:l,borderColor:u,opacityDisabled:d,tagColor:f,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,borderRadiusSmall:g,fontSizeMini:_,fontSizeTiny:v,fontSizeSmall:y,fontSizeMedium:b,heightMini:C,heightTiny:w,heightSmall:T,heightMedium:E,closeColorHover:D,closeColorPressed:O,buttonColor2Hover:k,buttonColor2Pressed:A,fontWeightStrong:j}=e;return Object.assign(Object.assign({},S),{closeBorderRadius:g,heightTiny:C,heightSmall:w,heightMedium:T,heightLarge:E,borderRadius:g,opacityDisabled:d,fontSizeTiny:_,fontSizeSmall:v,fontSizeMedium:y,fontSizeLarge:b,fontWeightStrong:j,textColorCheckable:t,textColorHoverCheckable:t,textColorPressedCheckable:t,textColorChecked:l,colorCheckable:`#0000`,colorHoverCheckable:k,colorPressedCheckable:A,colorChecked:i,colorCheckedHover:n,colorCheckedPressed:r,border:`1px solid ${u}`,textColor:t,color:f,colorBordered:`rgb(250, 250, 252)`,closeIconColor:p,closeIconColorHover:m,closeIconColorPressed:h,closeColorHover:D,closeColorPressed:O,borderPrimary:`1px solid ${x(i,{alpha:.3})}`,textColorPrimary:i,colorPrimary:x(i,{alpha:.12}),colorBorderedPrimary:x(i,{alpha:.1}),closeIconColorPrimary:i,closeIconColorHoverPrimary:i,closeIconColorPressedPrimary:i,closeColorHoverPrimary:x(i,{alpha:.12}),closeColorPressedPrimary:x(i,{alpha:.18}),borderInfo:`1px solid ${x(a,{alpha:.3})}`,textColorInfo:a,colorInfo:x(a,{alpha:.12}),colorBorderedInfo:x(a,{alpha:.1}),closeIconColorInfo:a,closeIconColorHoverInfo:a,closeIconColorPressedInfo:a,closeColorHoverInfo:x(a,{alpha:.12}),closeColorPressedInfo:x(a,{alpha:.18}),borderSuccess:`1px solid ${x(o,{alpha:.3})}`,textColorSuccess:o,colorSuccess:x(o,{alpha:.12}),colorBorderedSuccess:x(o,{alpha:.1}),closeIconColorSuccess:o,closeIconColorHoverSuccess:o,closeIconColorPressedSuccess:o,closeColorHoverSuccess:x(o,{alpha:.12}),closeColorPressedSuccess:x(o,{alpha:.18}),borderWarning:`1px solid ${x(s,{alpha:.35})}`,textColorWarning:s,colorWarning:x(s,{alpha:.15}),colorBorderedWarning:x(s,{alpha:.12}),closeIconColorWarning:s,closeIconColorHoverWarning:s,closeIconColorPressedWarning:s,closeColorHoverWarning:x(s,{alpha:.12}),closeColorPressedWarning:x(s,{alpha:.18}),borderError:`1px solid ${x(c,{alpha:.23})}`,textColorError:c,colorError:x(c,{alpha:.1}),colorBorderedError:x(c,{alpha:.08}),closeIconColorError:c,closeIconColorHoverError:c,closeIconColorPressedError:c,closeColorHoverError:x(c,{alpha:.12}),closeColorPressedError:x(c,{alpha:.18})})}var D={name:`Tag`,common:f,self:E},O={color:Object,type:{type:String,default:`default`},round:Boolean,size:String,closable:Boolean,disabled:{type:Boolean,default:void 0}},k=g(`tag`,`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[i(`strong`,`
 font-weight: var(--n-font-weight-strong);
 `),h(`border`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),h(`icon`,`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),h(`avatar`,`
 display: flex;
 margin: 0 6px 0 0;
 `),h(`close`,`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),i(`round`,`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[h(`icon`,`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),h(`avatar`,`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),i(`closable`,`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),i(`icon, avatar`,[i(`round`,`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),i(`disabled`,`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),i(`checkable`,`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[a(`disabled`,[s(`&:hover`,`background-color: var(--n-color-hover-checkable);`,[a(`checked`,`color: var(--n-text-color-hover-checkable);`)]),s(`&:active`,`background-color: var(--n-color-pressed-checkable);`,[a(`checked`,`color: var(--n-text-color-pressed-checkable);`)])]),i(`checked`,`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[a(`disabled`,[s(`&:hover`,`background-color: var(--n-color-checked-hover);`),s(`&:active`,`background-color: var(--n-color-checked-pressed);`)])])])]),A=Object.assign(Object.assign(Object.assign({},t.props),O),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),j=r(`n-tag`),M=v({name:`Tag`,props:A,slots:Object,setup(r){let i=n(null),{mergedBorderedRef:a,mergedClsPrefixRef:s,inlineThemeDisabled:d,mergedRtlRef:f,mergedComponentPropsRef:m}=C(r),h=p(()=>r.size||m?.value?.Tag?.size||`medium`),g=t(`Tag`,`-tag`,k,D,r,s);e(j,{roundRef:l(r,`round`)});function v(){if(!r.disabled&&r.checkable){let{checked:e,onCheckedChange:t,onUpdateChecked:n,"onUpdate:checked":i}=r;n&&n(!e),i&&i(!e),t&&t(!e)}}function y(e){if(r.triggerClickOnClose||e.stopPropagation(),!r.disabled){let{onClose:t}=r;t&&u(t,e)}}let x={setTextContent(e){let{value:t}=i;t&&(t.textContent=e)}},S=_(`Tag`,f,s),T=p(()=>{let{type:e,color:{color:t,textColor:n}={}}=r,i=h.value,{common:{cubicBezierEaseInOut:o},self:{padding:s,closeMargin:l,borderRadius:u,opacityDisabled:d,textColorCheckable:f,textColorHoverCheckable:p,textColorPressedCheckable:m,textColorChecked:_,colorCheckable:v,colorHoverCheckable:y,colorPressedCheckable:b,colorChecked:x,colorCheckedHover:S,colorCheckedPressed:C,closeBorderRadius:T,fontWeightStrong:E,[c(`colorBordered`,e)]:D,[c(`closeSize`,i)]:O,[c(`closeIconSize`,i)]:k,[c(`fontSize`,i)]:A,[c(`height`,i)]:j,[c(`color`,e)]:M,[c(`textColor`,e)]:N,[c(`border`,e)]:P,[c(`closeIconColor`,e)]:F,[c(`closeIconColorHover`,e)]:I,[c(`closeIconColorPressed`,e)]:L,[c(`closeColorHover`,e)]:R,[c(`closeColorPressed`,e)]:z}}=g.value,B=w(l);return{"--n-font-weight-strong":E,"--n-avatar-size-override":`calc(${j} - 8px)`,"--n-bezier":o,"--n-border-radius":u,"--n-border":P,"--n-close-icon-size":k,"--n-close-color-pressed":z,"--n-close-color-hover":R,"--n-close-border-radius":T,"--n-close-icon-color":F,"--n-close-icon-color-hover":I,"--n-close-icon-color-pressed":L,"--n-close-icon-color-disabled":F,"--n-close-margin-top":B.top,"--n-close-margin-right":B.right,"--n-close-margin-bottom":B.bottom,"--n-close-margin-left":B.left,"--n-close-size":O,"--n-color":t||(a.value?D:M),"--n-color-checkable":v,"--n-color-checked":x,"--n-color-checked-hover":S,"--n-color-checked-pressed":C,"--n-color-hover-checkable":y,"--n-color-pressed-checkable":b,"--n-font-size":A,"--n-height":j,"--n-opacity-disabled":d,"--n-padding":s,"--n-text-color":n||N,"--n-text-color-checkable":f,"--n-text-color-checked":_,"--n-text-color-hover-checkable":p,"--n-text-color-pressed-checkable":m}}),E=d?b(`tag`,p(()=>{let e=``,{type:t,color:{color:n,textColor:i}={}}=r;return e+=t[0],e+=h.value[0],n&&(e+=`a${o(n)}`),i&&(e+=`b${o(i)}`),a.value&&(e+=`c`),e}),T,r):void 0;return Object.assign(Object.assign({},x),{rtlEnabled:S,mergedClsPrefix:s,contentRef:i,mergedBordered:a,handleClick:v,handleCloseClick:y,cssVars:d?void 0:T,themeClass:E?.themeClass,onRender:E?.onRender})},render(){var e;let{mergedClsPrefix:t,rtlEnabled:n,closable:r,color:{borderColor:i}={},round:a,onRender:o,$slots:s}=this;o?.();let c=y(s.avatar,e=>e&&d(`div`,{class:`${t}-tag__avatar`},e)),l=y(s.icon,e=>e&&d(`div`,{class:`${t}-tag__icon`},e));return d(`div`,{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:n,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:a,[`${t}-tag--avatar`]:c,[`${t}-tag--icon`]:l,[`${t}-tag--closable`]:r}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},l||c,d(`span`,{class:`${t}-tag__content`,ref:`contentRef`},(e=this.$slots).default?.call(e)),!this.checkable&&r?d(m,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?d(`div`,{class:`${t}-tag__border`,style:{borderColor:i}}):null)}});export{T as a,D as i,j as n,O as r,M as t};