import{E as e,h as t,l as n,v as r}from"./home-_plugin-vue_export-helper-D2vwUDmp.js";import{U as i}from"./home-FormItem-CphKeu3L.js";import{$t as a,Bt as o,Cn as s,En as c,Jn as l,K as u,Kt as d,L as f,Ln as p,Lt as m,Ot as h,Qt as g,S as _,Tn as v,U as y,Xt as b,Y as x,Yt as S,en as C,hn as w,kt as T,qn as E,qt as D,zt as O}from"./home-main-BXN-gKXs.js";var k=m(`n-checkbox-group`),A=s({name:`CheckboxGroup`,props:{min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},setup(e){let{mergedClsPrefixRef:t}=T(e),a=n(e),{mergedSizeRef:o,mergedDisabledRef:s}=a,c=E(e.defaultValue),u=i(w(()=>e.value),c),d=w(()=>u.value?.length||0),f=w(()=>Array.isArray(u.value)?new Set(u.value):new Set);function m(t,n){let{nTriggerFormInput:i,nTriggerFormChange:o}=a,{onChange:s,"onUpdate:value":l,onUpdateValue:d}=e;if(Array.isArray(u.value)){let e=Array.from(u.value),a=e.findIndex(e=>e===n);t?~a||(e.push(n),d&&r(d,e,{actionType:`check`,value:n}),l&&r(l,e,{actionType:`check`,value:n}),i(),o(),c.value=e,s&&r(s,e)):~a&&(e.splice(a,1),d&&r(d,e,{actionType:`uncheck`,value:n}),l&&r(l,e,{actionType:`uncheck`,value:n}),s&&r(s,e),c.value=e,i(),o())}else t?(d&&r(d,[n],{actionType:`check`,value:n}),l&&r(l,[n],{actionType:`check`,value:n}),s&&r(s,[n]),c.value=[n],i(),o()):(d&&r(d,[],{actionType:`uncheck`,value:n}),l&&r(l,[],{actionType:`uncheck`,value:n}),s&&r(s,[]),c.value=[],i(),o())}return p(k,{checkedCountRef:d,maxRef:l(e,`max`),minRef:l(e,`min`),valueSetRef:f,disabledRef:s,mergedSizeRef:o,toggleCheckbox:m}),{mergedClsPrefix:t}},render(){return v(`div`,{class:`${this.mergedClsPrefix}-checkbox-group`,role:`group`},this.$slots)}}),j=()=>v(`svg`,{viewBox:`0 0 64 64`,class:`check-icon`},v(`path`,{d:`M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z`})),M=()=>v(`svg`,{viewBox:`0 0 100 100`,class:`line-icon`},v(`path`,{d:`M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z`})),N=d([D(`checkbox`,`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[b(`show-label`,`line-height: var(--n-label-line-height);`),d(`&:hover`,[D(`checkbox-box`,[S(`border`,`border: var(--n-border-checked);`)])]),d(`&:focus:not(:active)`,[D(`checkbox-box`,[S(`border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),b(`inside-table`,[D(`checkbox-box`,`
 background-color: var(--n-merged-color-table);
 `)]),b(`checked`,[D(`checkbox-box`,`
 background-color: var(--n-color-checked);
 `,[D(`checkbox-icon`,[d(`.check-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),b(`indeterminate`,[D(`checkbox-box`,[D(`checkbox-icon`,[d(`.check-icon`,`
 opacity: 0;
 transform: scale(.5);
 `),d(`.line-icon`,`
 opacity: 1;
 transform: scale(1);
 `)])])]),b(`checked, indeterminate`,[d(`&:focus:not(:active)`,[D(`checkbox-box`,[S(`border`,`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),D(`checkbox-box`,`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[S(`border`,{border:`var(--n-border-checked)`})])]),b(`disabled`,{cursor:`not-allowed`},[b(`checked`,[D(`checkbox-box`,`
 background-color: var(--n-color-disabled-checked);
 `,[S(`border`,{border:`var(--n-border-disabled-checked)`}),D(`checkbox-icon`,[d(`.check-icon, .line-icon`,{fill:`var(--n-check-mark-color-disabled-checked)`})])])]),D(`checkbox-box`,`
 background-color: var(--n-color-disabled);
 `,[S(`border`,`
 border: var(--n-border-disabled);
 `),D(`checkbox-icon`,[d(`.check-icon, .line-icon`,`
 fill: var(--n-check-mark-color-disabled);
 `)])]),S(`label`,`
 color: var(--n-text-color-disabled);
 `)]),D(`checkbox-box-wrapper`,`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),D(`checkbox-box`,`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[S(`border`,`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),D(`checkbox-icon`,`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[d(`.check-icon, .line-icon`,`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),f({left:`1px`,top:`1px`})])]),S(`label`,`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[d(`&:empty`,{display:`none`})])]),a(D(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),C(D(`checkbox`,`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),P=s({name:`Checkbox`,props:Object.assign(Object.assign({},u.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),setup(e){let t=c(k,null),a=E(null),{mergedClsPrefixRef:s,inlineThemeDisabled:d,mergedRtlRef:f,mergedComponentPropsRef:p}=T(e),m=E(e.defaultChecked),v=i(l(e,`checked`),m),y=O(()=>{if(t){let n=t.valueSetRef.value;return n&&e.value!==void 0?n.has(e.value):!1}else return v.value===e.checkedValue}),b=n(e,{mergedSize(n){let{size:r}=e;if(r!==void 0)return r;if(t){let{value:e}=t.mergedSizeRef;if(e!==void 0)return e}if(n){let{mergedSize:e}=n;if(e!==void 0)return e.value}return p?.value?.Checkbox?.size||`medium`},mergedDisabled(n){let{disabled:r}=e;if(r!==void 0)return r;if(t){if(t.disabledRef.value)return!0;let{maxRef:{value:e},checkedCountRef:n}=t;if(e!==void 0&&n.value>=e&&!y.value)return!0;let{minRef:{value:r}}=t;if(r!==void 0&&n.value<=r&&y.value)return!0}return n?n.disabled.value:!1}}),{mergedDisabledRef:S,mergedSizeRef:C}=b,D=u(`Checkbox`,`-checkbox`,N,_,e,s);function A(n){if(t&&e.value!==void 0)t.toggleCheckbox(!y.value,e.value);else{let{onChange:t,"onUpdate:checked":i,onUpdateChecked:a}=e,{nTriggerFormInput:o,nTriggerFormChange:s}=b,c=y.value?e.uncheckedValue:e.checkedValue;i&&r(i,c,n),a&&r(a,c,n),t&&r(t,c,n),o(),s(),m.value=c}}function j(e){S.value||A(e)}function M(e){if(!S.value)switch(e.key){case` `:case`Enter`:A(e)}}function P(e){switch(e.key){case` `:e.preventDefault()}}let F={focus:()=>{var e;(e=a.value)==null||e.focus()},blur:()=>{var e;(e=a.value)==null||e.blur()}},I=x(`Checkbox`,f,s),L=w(()=>{let{value:e}=C,{common:{cubicBezierEaseInOut:t},self:{borderRadius:n,color:r,colorChecked:i,colorDisabled:a,colorTableHeader:o,colorTableHeaderModal:s,colorTableHeaderPopover:c,checkMarkColor:l,checkMarkColorDisabled:u,border:d,borderFocus:f,borderDisabled:p,borderChecked:m,boxShadowFocus:h,textColor:_,textColorDisabled:v,checkMarkColorDisabledChecked:y,colorDisabledChecked:b,borderDisabledChecked:x,labelPadding:S,labelLineHeight:w,labelFontWeight:T,[g(`fontSize`,e)]:E,[g(`size`,e)]:O}}=D.value;return{"--n-label-line-height":w,"--n-label-font-weight":T,"--n-size":O,"--n-bezier":t,"--n-border-radius":n,"--n-border":d,"--n-border-checked":m,"--n-border-focus":f,"--n-border-disabled":p,"--n-border-disabled-checked":x,"--n-box-shadow-focus":h,"--n-color":r,"--n-color-checked":i,"--n-color-table":o,"--n-color-table-modal":s,"--n-color-table-popover":c,"--n-color-disabled":a,"--n-color-disabled-checked":b,"--n-text-color":_,"--n-text-color-disabled":v,"--n-check-mark-color":l,"--n-check-mark-color-disabled":u,"--n-check-mark-color-disabled-checked":y,"--n-font-size":E,"--n-label-padding":S}}),R=d?h(`checkbox`,w(()=>C.value[0]),L,e):void 0;return Object.assign(b,F,{rtlEnabled:I,selfRef:a,mergedClsPrefix:s,mergedDisabled:S,renderedChecked:y,mergedTheme:D,labelId:o(),handleClick:j,handleKeyUp:M,handleKeyDown:P,cssVars:d?void 0:L,themeClass:R?.themeClass,onRender:R?.onRender})},render(){var n;let{$slots:r,renderedChecked:i,mergedDisabled:a,indeterminate:o,privateInsideTable:s,cssVars:c,labelId:l,label:u,mergedClsPrefix:d,focusable:f,handleKeyUp:p,handleKeyDown:m,handleClick:h}=this;(n=this.onRender)==null||n.call(this);let g=t(r.default,e=>u||e?v(`span`,{class:`${d}-checkbox__label`,id:l},u||e):null);return v(`div`,{ref:`selfRef`,class:[`${d}-checkbox`,this.themeClass,this.rtlEnabled&&`${d}-checkbox--rtl`,i&&`${d}-checkbox--checked`,a&&`${d}-checkbox--disabled`,o&&`${d}-checkbox--indeterminate`,s&&`${d}-checkbox--inside-table`,g&&`${d}-checkbox--show-label`],tabindex:a||!f?void 0:0,role:`checkbox`,"aria-checked":o?`mixed`:i,"aria-labelledby":l,style:c,onKeyup:p,onKeydown:m,onClick:h,onMousedown:()=>{e(`selectstart`,window,e=>{e.preventDefault()},{once:!0})}},v(`div`,{class:`${d}-checkbox-box-wrapper`},`\xA0`,v(`div`,{class:`${d}-checkbox-box`},v(y,null,{default:()=>this.indeterminate?v(`div`,{key:`indeterminate`,class:`${d}-checkbox-icon`},M()):v(`div`,{key:`check`,class:`${d}-checkbox-icon`},j())}),v(`div`,{class:`${d}-checkbox-box__border`}))),g)}});export{A as n,P as t};