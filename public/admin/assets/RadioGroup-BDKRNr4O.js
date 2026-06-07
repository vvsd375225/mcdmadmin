import{d as e}from"./Input-sQ_C-O2R.js";import{t}from"./get-slot-6kXJmSMP.js";import{Ci as n,Et as r,Ii as i,Kn as a,Mr as o,Nr as s,Or as c,P as l,Pr as u,Qn as d,Ri as f,Sn as p,an as m,di as h,ei as g,fi as _,jr as v,kr as y,kt as b,li as x,mn as S,on as C,sn as w,xn as T}from"./index-BPkAzZ_Q.js";var E=y(`radio`,`
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`,[o(`checked`,[v(`dot`,`
 background-color: var(--n-color-active);
 `)]),v(`dot-wrapper`,`
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `),y(`radio-input`,`
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `),v(`dot`,`
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `,[c(`&::before`,`
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),o(`checked`,{boxShadow:`var(--n-box-shadow-active)`},[c(`&::before`,`
 opacity: 1;
 transform: scale(1);
 `)])]),v(`label`,`
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `),s(`disabled`,`
 cursor: pointer;
 `,[c(`&:hover`,[v(`dot`,{boxShadow:`var(--n-box-shadow-hover)`})]),o(`focus`,[c(`&:not(:active)`,[v(`dot`,{boxShadow:`var(--n-box-shadow-focus)`})])])]),o(`disabled`,`
 cursor: not-allowed;
 `,[v(`dot`,{boxShadow:`var(--n-box-shadow-disabled)`,backgroundColor:`var(--n-color-disabled)`},[c(`&::before`,{backgroundColor:`var(--n-dot-color-disabled)`}),o(`checked`,`
 opacity: 1;
 `)]),v(`label`,{color:`var(--n-text-color-disabled)`}),y(`radio-input`,`
 cursor: not-allowed;
 `)])]),D={name:String,value:{type:[String,Number,Boolean],default:`on`},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},O=a(`n-radio-group`);function k(t){let n=_(O,null),{mergedClsPrefixRef:r,mergedComponentPropsRef:a}=w(t),o=m(t,{mergedSize(e){let{size:r}=t;if(r!==void 0)return r;if(n){let{mergedSizeRef:{value:e}}=n;if(e!==void 0)return e}return e?e.mergedSize.value:a?.value?.Radio?.size||`medium`},mergedDisabled(e){return!!(t.disabled||n?.disabledRef.value||e?.disabled.value)}}),{mergedSizeRef:s,mergedDisabledRef:c}=o,l=i(null),u=i(null),h=i(t.defaultChecked),g=e(f(t,`checked`),h),v=d(()=>n?n.valueRef.value===t.value:g.value),y=d(()=>{let{name:e}=t;if(e!==void 0)return e;if(n)return n.nameRef.value}),b=i(!1);function x(){if(n){let{doUpdateValue:e}=n,{value:r}=t;p(e,r)}else{let{onUpdateChecked:e,"onUpdate:checked":n}=t,{nTriggerFormInput:r,nTriggerFormChange:i}=o;e&&p(e,!0),n&&p(n,!0),r(),i(),h.value=!0}}function S(){c.value||v.value||x()}function C(){S(),l.value&&(l.value.checked=v.value)}function T(){b.value=!1}function E(){b.value=!0}return{mergedClsPrefix:n?n.mergedClsPrefixRef:r,inputRef:l,labelRef:u,mergedName:y,mergedDisabled:c,renderSafeChecked:v,focus:b,mergedSize:s,handleRadioInputChange:C,handleRadioInputBlur:T,handleRadioInputFocus:E}}var A=x({name:`Radio`,props:Object.assign(Object.assign({},r.props),D),setup(e){let t=k(e),n=r(`Radio`,`-radio`,E,l,e,t.mergedClsPrefix),i=g(()=>{let{mergedSize:{value:e}}=t,{common:{cubicBezierEaseInOut:r},self:{boxShadow:i,boxShadowActive:a,boxShadowDisabled:o,boxShadowFocus:s,boxShadowHover:c,color:l,colorDisabled:d,colorActive:f,textColor:p,textColorDisabled:m,dotColorActive:h,dotColorDisabled:g,labelPadding:_,labelLineHeight:v,labelFontWeight:y,[u(`fontSize`,e)]:b,[u(`radioSize`,e)]:x}}=n.value;return{"--n-bezier":r,"--n-label-line-height":v,"--n-label-font-weight":y,"--n-box-shadow":i,"--n-box-shadow-active":a,"--n-box-shadow-disabled":o,"--n-box-shadow-focus":s,"--n-box-shadow-hover":c,"--n-color":l,"--n-color-active":f,"--n-color-disabled":d,"--n-dot-color-active":h,"--n-dot-color-disabled":g,"--n-font-size":b,"--n-radio-size":x,"--n-text-color":p,"--n-text-color-disabled":m,"--n-label-padding":_}}),{inlineThemeDisabled:a,mergedClsPrefixRef:o,mergedRtlRef:s}=w(e),c=b(`Radio`,s,o),d=a?C(`radio`,g(()=>t.mergedSize.value[0]),i,e):void 0;return Object.assign(t,{rtlEnabled:c,cssVars:a?void 0:i,themeClass:d?.themeClass,onRender:d?.onRender})},render(){let{$slots:e,mergedClsPrefix:t,onRender:n,label:r}=this;return n?.(),h(`label`,{class:[`${t}-radio`,this.themeClass,this.rtlEnabled&&`${t}-radio--rtl`,this.mergedDisabled&&`${t}-radio--disabled`,this.renderSafeChecked&&`${t}-radio--checked`,this.focus&&`${t}-radio--focus`],style:this.cssVars},h(`div`,{class:`${t}-radio__dot-wrapper`},`\xA0`,h(`div`,{class:[`${t}-radio__dot`,this.renderSafeChecked&&`${t}-radio__dot--checked`]}),h(`input`,{ref:`inputRef`,type:`radio`,class:`${t}-radio-input`,value:this.value,name:this.mergedName,checked:this.renderSafeChecked,disabled:this.mergedDisabled,onChange:this.handleRadioInputChange,onFocus:this.handleRadioInputFocus,onBlur:this.handleRadioInputBlur})),S(e.default,e=>!e&&!r?null:h(`div`,{ref:`labelRef`,class:`${t}-radio__label`},e||r)))}}),j=y(`radio-group`,`
 display: inline-block;
 font-size: var(--n-font-size);
`,[v(`splitor`,`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[o(`checked`,{backgroundColor:`var(--n-button-border-color-active)`}),o(`disabled`,{opacity:`var(--n-opacity-disabled)`})]),o(`button-group`,`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[y(`radio-button`,{height:`var(--n-height)`,lineHeight:`var(--n-height)`}),v(`splitor`,{height:`var(--n-height)`})]),y(`radio-button`,`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[y(`radio-input`,`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),v(`state-border`,`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),c(`&:first-child`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[v(`state-border`,`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),c(`&:last-child`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[v(`state-border`,`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),s(`disabled`,`
 cursor: pointer;
 `,[c(`&:hover`,[v(`state-border`,`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),s(`checked`,{color:`var(--n-button-text-color-hover)`})]),o(`focus`,[c(`&:not(:active)`,[v(`state-border`,{boxShadow:`var(--n-button-box-shadow-focus)`})])])]),o(`checked`,`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),o(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function M(e,t,n){let r=[],i=!1;for(let a=0;a<e.length;++a){let o=e[a],s=o.type?.name;s===`RadioButton`&&(i=!0);let c=o.props;if(s!==`RadioButton`){r.push(o);continue}if(a===0)r.push(o);else{let e=r[r.length-1].props,i=t===e.value,a=e.disabled,s=t===c.value,l=c.disabled,u=(i?2:0)+ +!a,d=(s?2:0)+ +!l,f={[`${n}-radio-group__splitor--disabled`]:a,[`${n}-radio-group__splitor--checked`]:i},p={[`${n}-radio-group__splitor--disabled`]:l,[`${n}-radio-group__splitor--checked`]:s},m=u<d?p:f;r.push(h(`div`,{class:[`${n}-radio-group__splitor`,m]}),o)}}return{children:r,isButtonGroup:i}}var N=x({name:`RadioGroup`,props:Object.assign(Object.assign({},r.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),setup(t){let a=i(null),{mergedSizeRef:o,mergedDisabledRef:s,nTriggerFormChange:c,nTriggerFormInput:d,nTriggerFormBlur:h,nTriggerFormFocus:_}=m(t),{mergedClsPrefixRef:v,inlineThemeDisabled:y,mergedRtlRef:x}=w(t),S=r(`Radio`,`-radio-group`,j,l,t,v),T=i(t.defaultValue),E=e(f(t,`value`),T);function D(e){let{onUpdateValue:n,"onUpdate:value":r}=t;n&&p(n,e),r&&p(r,e),T.value=e,c(),d()}function k(e){let{value:t}=a;t&&(t.contains(e.relatedTarget)||_())}function A(e){let{value:t}=a;t&&(t.contains(e.relatedTarget)||h())}n(O,{mergedClsPrefixRef:v,nameRef:f(t,`name`),valueRef:E,disabledRef:s,mergedSizeRef:o,doUpdateValue:D});let M=b(`Radio`,x,v),N=g(()=>{let{value:e}=o,{common:{cubicBezierEaseInOut:t},self:{buttonBorderColor:n,buttonBorderColorActive:r,buttonBorderRadius:i,buttonBoxShadow:a,buttonBoxShadowFocus:s,buttonBoxShadowHover:c,buttonColor:l,buttonColorActive:d,buttonTextColor:f,buttonTextColorActive:p,buttonTextColorHover:m,opacityDisabled:h,[u(`buttonHeight`,e)]:g,[u(`fontSize`,e)]:_}}=S.value;return{"--n-font-size":_,"--n-bezier":t,"--n-button-border-color":n,"--n-button-border-color-active":r,"--n-button-border-radius":i,"--n-button-box-shadow":a,"--n-button-box-shadow-focus":s,"--n-button-box-shadow-hover":c,"--n-button-color":l,"--n-button-color-active":d,"--n-button-text-color":f,"--n-button-text-color-hover":m,"--n-button-text-color-active":p,"--n-height":g,"--n-opacity-disabled":h}}),P=y?C(`radio-group`,g(()=>o.value[0]),N,t):void 0;return{selfElRef:a,rtlEnabled:M,mergedClsPrefix:v,mergedValue:E,handleFocusout:A,handleFocusin:k,cssVars:y?void 0:N,themeClass:P?.themeClass,onRender:P?.onRender}},render(){var e;let{mergedValue:n,mergedClsPrefix:r,handleFocusin:i,handleFocusout:a}=this,{children:o,isButtonGroup:s}=M(T(t(this)),n,r);return(e=this.onRender)==null||e.call(this),h(`div`,{onFocusin:i,onFocusout:a,ref:`selfElRef`,class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,s&&`${r}-radio-group--button-group`],style:this.cssVars},o)}});export{A as n,N as t};