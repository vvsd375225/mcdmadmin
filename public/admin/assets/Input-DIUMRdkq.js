import{t as e}from"./use-locale-BwcgwzJC.js";import{$n as t,$t as n,An as r,Ci as i,Ct as a,Dt as o,Et as s,Ft as c,Ii as l,Kn as u,Mr as d,Nr as f,Oi as p,Or as m,Pr as h,Pt as g,Qn as _,Ri as v,Sn as y,St as b,X as ee,Xr as x,Z as te,Zt as S,_t as C,an as ne,bi as re,ct as w,di as T,ei as E,er as ie,fi as D,fn as O,jr as k,ki as A,kr as j,kt as ae,li as M,mi as N,mn as P,on as oe,pn as F,pt as se,sn as ce,ui as le,wr as ue,wt as I}from"./index-QEQuLFiJ.js";function de(e,t){return p(e,e=>{e!==void 0&&(t.value=e)}),E(()=>e.value===void 0?t.value:e.value)}var L=/^(\d|\.)+$/,R=/(\d|\.)+/;function z(e,{c:t=1,offset:n=0,attachPx:r=!0}={}){if(typeof e==`number`){let r=(e+n)*t;return r===0?`0`:`${r}px`}else if(typeof e==`string`)if(L.test(e)){let i=(Number(e)+n)*t;return r?i===0?`0`:`${i}px`:`${i}`}else{let r=R.exec(e);return r?e.replace(R,String((Number(r[0])+n)*t)):e}return e}var B=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/;function H(e,t){if(S(e))return!1;var r=typeof e;return r==`number`||r==`symbol`||r==`boolean`||e==null||n(e)?!0:V.test(e)||!B.test(e)||t!=null&&e in Object(t)}var fe=`Expected a function`;function U(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(fe);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(U.Cache||c),n}U.Cache=c;var pe=500;function W(e){var t=U(e,function(e){return n.size===pe&&n.clear(),e}),n=t.cache;return t}var G=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,me=/\\(\\)?/g,K=W(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(``),e.replace(G,function(e,n,r,i){t.push(r?i.replace(me,`$1`):n||e)}),t});function he(e,t){return S(e)?e:H(e,t)?[e]:K(g(e))}var ge=1/0;function q(e){if(typeof e==`string`||n(e))return e;var t=e+``;return t==`0`&&1/e==-ge?`-0`:t}function J(e,t){t=he(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[q(t[n++])];return n&&n==r?e:void 0}function Y(e,t,n){var r=e==null?void 0:J(e,t);return r===void 0?n:r}var _e=M({name:`ChevronDown`,render(){return T(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},T(`path`,{d:`M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z`,fill:`currentColor`}))}}),ve=b(`clear`,()=>T(`svg`,{viewBox:`0 0 16 16`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},T(`g`,{stroke:`none`,"stroke-width":`1`,fill:`none`,"fill-rule":`evenodd`},T(`g`,{fill:`currentColor`,"fill-rule":`nonzero`},T(`path`,{d:`M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z`}))))),ye=M({name:`Eye`,render(){return T(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`},T(`path`,{d:`M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`}),T(`circle`,{cx:`256`,cy:`256`,r:`80`,fill:`none`,stroke:`currentColor`,"stroke-miterlimit":`10`,"stroke-width":`32`}))}}),be=M({name:`EyeOff`,render(){return T(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 512 512`},T(`path`,{d:`M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z`,fill:`currentColor`}),T(`path`,{d:`M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z`,fill:`currentColor`}),T(`path`,{d:`M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z`,fill:`currentColor`}),T(`path`,{d:`M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z`,fill:`currentColor`}),T(`path`,{d:`M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z`,fill:`currentColor`}))}}),xe=j(`base-clear`,`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[m(`>`,[k(`clear`,`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[m(`&:hover`,`
 color: var(--n-clear-color-hover)!important;
 `),m(`&:active`,`
 color: var(--n-clear-color-pressed)!important;
 `)]),k(`placeholder`,`
 display: flex;
 `),k(`clear, placeholder`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[C({originalTransform:`translateX(-50%) translateY(-50%)`,left:`50%`,top:`50%`})])])]),X=M({name:`BaseClear`,props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return o(`-base-clear`,xe,v(e,`clsPrefix`)),{handleMouseDown(e){e.preventDefault()}}},render(){let{clsPrefix:e}=this;return T(`div`,{class:`${e}-base-clear`},T(a,null,{default:()=>{var t;return this.show?T(`div`,{key:`dismiss`,class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},O(this.$slots.icon,()=>[T(I,{clsPrefix:e},{default:()=>T(ve,null)})])):T(`div`,{key:`icon`,class:`${e}-base-clear__placeholder`},(t=this.$slots).placeholder?.call(t))}}))}}),Se=M({name:`InternalSelectionSuffix`,props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:t}){return()=>{let{clsPrefix:n}=e;return T(se,{clsPrefix:n,class:`${n}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?T(X,{clsPrefix:n,show:e.showClear,onClear:e.onClear},{placeholder:()=>T(I,{clsPrefix:n,class:`${n}-base-suffix__arrow`},{default:()=>O(t.default,()=>[T(_e,null)])})}):null})}}}),Ce=u(`n-input`),we=j(`input`,`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[k(`input, textarea`,`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),k(`input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder`,`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),k(`input-el, textarea-el`,`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[m(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `),m(`&::placeholder`,`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),m(`&:-webkit-autofill ~`,[k(`placeholder`,`display: none;`)])]),d(`round`,[f(`textarea`,`border-radius: calc(var(--n-height) / 2);`)]),k(`placeholder`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[m(`span`,`
 width: 100%;
 display: inline-block;
 `)]),d(`textarea`,[k(`placeholder`,`overflow: visible;`)]),f(`autosize`,`width: 100%;`),d(`autosize`,[k(`textarea-el, input-el`,`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),j(`input-wrapper`,`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),k(`input-mirror`,`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),k(`input-el`,`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[m(`&[type=password]::-ms-reveal`,`display: none;`),m(`+`,[k(`placeholder`,`
 display: flex;
 align-items: center; 
 `)])]),f(`textarea`,[k(`placeholder`,`white-space: nowrap;`)]),k(`eye`,`
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),d(`textarea`,`width: 100%;`,[j(`input-word-count`,`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),d(`resizable`,[j(`input-wrapper`,`
 resize: vertical;
 min-height: var(--n-height);
 `)]),k(`textarea-el, textarea-mirror, placeholder`,`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `),k(`textarea-mirror`,`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),d(`pair`,[k(`input-el, placeholder`,`text-align: center;`),k(`separator`,`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[j(`icon`,`
 color: var(--n-icon-color);
 `),j(`base-icon`,`
 color: var(--n-icon-color);
 `)])]),d(`disabled`,`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[k(`border`,`border: var(--n-border-disabled);`),k(`input-el, textarea-el`,`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),k(`placeholder`,`color: var(--n-placeholder-color-disabled);`),k(`separator`,`color: var(--n-text-color-disabled);`,[j(`icon`,`
 color: var(--n-icon-color-disabled);
 `),j(`base-icon`,`
 color: var(--n-icon-color-disabled);
 `)]),j(`input-word-count`,`
 color: var(--n-count-text-color-disabled);
 `),k(`suffix, prefix`,`color: var(--n-text-color-disabled);`,[j(`icon`,`
 color: var(--n-icon-color-disabled);
 `),j(`internal-icon`,`
 color: var(--n-icon-color-disabled);
 `)])]),f(`disabled`,[k(`eye`,`
 color: var(--n-icon-color);
 cursor: pointer;
 `,[m(`&:hover`,`
 color: var(--n-icon-color-hover);
 `),m(`&:active`,`
 color: var(--n-icon-color-pressed);
 `)]),m(`&:hover`,[k(`state-border`,`border: var(--n-border-hover);`)]),d(`focus`,`background-color: var(--n-color-focus);`,[k(`state-border`,`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),k(`border, state-border`,`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),k(`state-border`,`
 border-color: #0000;
 z-index: 1;
 `),k(`prefix`,`margin-right: 4px;`),k(`suffix`,`
 margin-left: 4px;
 `),k(`suffix, prefix`,`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[j(`base-loading`,`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),j(`base-clear`,`
 font-size: var(--n-icon-size);
 `,[k(`placeholder`,[j(`base-icon`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),m(`>`,[j(`icon`,`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),j(`base-icon`,`
 font-size: var(--n-icon-size);
 `)]),j(`input-word-count`,`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),[`warning`,`error`].map(e=>d(`${e}-status`,[f(`disabled`,[j(`base-loading`,`
 color: var(--n-loading-color-${e})
 `),k(`input-el, textarea-el`,`
 caret-color: var(--n-caret-color-${e});
 `),k(`state-border`,`
 border: var(--n-border-${e});
 `),m(`&:hover`,[k(`state-border`,`
 border: var(--n-border-hover-${e});
 `)]),m(`&:focus`,`
 background-color: var(--n-color-focus-${e});
 `,[k(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),d(`focus`,`
 background-color: var(--n-color-focus-${e});
 `,[k(`state-border`,`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),Te=j(`input`,[d(`disabled`,[k(`input-el, textarea-el`,`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);function Ee(e){let t=0;for(let n of e)t++;return t}function Z(e){return e===``||e==null}function De(e){let t=l(null);function n(){let{value:n}=e;if(!n?.focus){i();return}let{selectionStart:r,selectionEnd:a,value:o}=n;if(r==null||a==null){i();return}t.value={start:r,end:a,beforeText:o.slice(0,r),afterText:o.slice(a)}}function r(){var n;let{value:r}=t,{value:i}=e;if(!r||!i)return;let{value:a}=i,{start:o,beforeText:s,afterText:c}=r,l=a.length;if(a.endsWith(c))l=a.length-c.length;else if(a.startsWith(s))l=s.length;else{let e=s[o-1],t=a.indexOf(e,o-1);t!==-1&&(l=t+1)}(n=i.setSelectionRange)==null||n.call(i,l,l)}function i(){t.value=null}return p(e,i),{recordCursor:n,restoreCursor:r}}var Oe=M({name:`InputWordCount`,setup(e,{slots:t}){let{mergedValueRef:n,maxlengthRef:r,mergedClsPrefixRef:i,countGraphemesRef:a}=D(Ce),o=E(()=>{let{value:e}=n;return e===null||Array.isArray(e)?0:(a.value||Ee)(e)});return()=>{let{value:e}=r,{value:a}=n;return T(`span`,{class:`${i.value}-input-word-count`},F(t.default,{value:a===null||Array.isArray(a)?``:a},()=>[e===void 0?o.value:`${o.value} / ${e}`]))}}}),ke=M({name:`Input`,props:Object.assign(Object.assign({},s.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:`text`},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:[Function,Array],onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:{type:Boolean,default:!0},showPasswordToggle:Boolean}),slots:Object,setup(n){let{mergedClsPrefixRef:r,mergedBorderedRef:a,inlineThemeDisabled:c,mergedRtlRef:u,mergedComponentPropsRef:d}=ce(n),f=s(`Input`,`-input`,we,ee,n,r);te&&o(`-input-safari`,Te,r);let m=l(null),g=l(null),b=l(null),x=l(null),S=l(null),C=l(null),w=l(null),T=De(w),D=l(null),{localeRef:O}=e(`Input`),k=l(n.defaultValue),j=de(v(n,`value`),k),M=ne(n,{mergedSize:e=>{let{size:t}=n;if(t)return t;let{mergedSize:r}=e||{};return r?.value?r.value:d?.value?.Input?.size||`medium`}}),{mergedSizeRef:P,mergedDisabledRef:F,mergedStatusRef:se}=M,I=l(!1),L=l(!1),R=l(!1),z=l(!1),B=null,V=E(()=>{let{placeholder:e,pair:t}=n;return t?Array.isArray(e)?e:e===void 0?[``,``]:[e,e]:e===void 0?[O.value.placeholder]:[e]}),H=E(()=>{let{value:e}=R,{value:t}=j,{value:n}=V;return!e&&(Z(t)||Array.isArray(t)&&Z(t[0]))&&n[0]}),fe=E(()=>{let{value:e}=R,{value:t}=j,{value:n}=V;return!e&&n[1]&&(Z(t)||Array.isArray(t)&&Z(t[1]))}),U=_(()=>n.internalForceFocus||I.value),pe=_(()=>{if(F.value||n.readonly||!n.clearable||!U.value&&!L.value)return!1;let{value:e}=j,{value:t}=U;return n.pair?!!(Array.isArray(e)&&(e[0]||e[1]))&&(L.value||t):!!e&&(L.value||t)}),W=E(()=>{let{showPasswordOn:e}=n;if(e)return e;if(n.showPasswordToggle)return`click`}),G=l(!1),me=E(()=>{let{textDecoration:e}=n;return e?Array.isArray(e)?e.map(e=>({textDecoration:e})):[{textDecoration:e}]:[``,``]}),K=l(void 0),he=()=>{if(n.type===`textarea`){let{autosize:e}=n;if(e&&(K.value=D.value?.$el?.offsetWidth),!g.value||typeof e==`boolean`)return;let{paddingTop:t,paddingBottom:r,lineHeight:i}=window.getComputedStyle(g.value),a=Number(t.slice(0,-2)),o=Number(r.slice(0,-2)),s=Number(i.slice(0,-2)),{value:c}=b;if(!c)return;if(e.minRows){let t=Math.max(e.minRows,1),n=`${a+o+s*t}px`;c.style.minHeight=n}if(e.maxRows){let t=`${a+o+s*e.maxRows}px`;c.style.maxHeight=t}}},ge=E(()=>{let{maxlength:e}=n;return e===void 0?void 0:Number(e)});re(()=>{let{value:e}=j;Array.isArray(e)||nt(e)});let q=le().proxy;function J(e,t){let{onUpdateValue:r,"onUpdate:value":i,onInput:a}=n,{nTriggerFormInput:o}=M;r&&y(r,e,t),i&&y(i,e,t),a&&y(a,e,t),k.value=e,o()}function Y(e,t){let{onChange:r}=n,{nTriggerFormChange:i}=M;r&&y(r,e,t),k.value=e,i()}function _e(e){let{onBlur:t}=n,{nTriggerFormBlur:r}=M;t&&y(t,e),r()}function ve(e){let{onFocus:t}=n,{nTriggerFormFocus:r}=M;t&&y(t,e),r()}function ye(e){let{onClear:t}=n;t&&y(t,e)}function be(e){let{onInputBlur:t}=n;t&&y(t,e)}function xe(e){let{onInputFocus:t}=n;t&&y(t,e)}function X(){let{onDeactivate:e}=n;e&&y(e)}function Se(){let{onActivate:e}=n;e&&y(e)}function Ee(e){let{onClick:t}=n;t&&y(t,e)}function Oe(e){let{onWrapperFocus:t}=n;t&&y(t,e)}function ke(e){let{onWrapperBlur:t}=n;t&&y(t,e)}function Ae(){R.value=!0}function je(e){R.value=!1,e.target===C.value?Q(e,1):Q(e,0)}function Q(e,t=0,r=`input`){let i=e.target.value;if(nt(i),e instanceof InputEvent&&!e.isComposing&&(R.value=!1),n.type===`textarea`){let{value:e}=D;e&&e.syncUnifiedContainer()}if(B=i,R.value)return;T.recordCursor();let a=Me(i);if(a)if(!n.pair)r===`input`?J(i,{source:t}):Y(i,{source:t});else{let{value:e}=j;e=Array.isArray(e)?[e[0],e[1]]:[``,``],e[t]=i,r===`input`?J(e,{source:t}):Y(e,{source:t})}q.$forceUpdate(),a||N(T.restoreCursor)}function Me(e){let{countGraphemes:t,maxlength:r,minlength:i}=n;if(t){let n;if(r!==void 0&&(n===void 0&&(n=t(e)),n>Number(r))||i!==void 0&&(n===void 0&&(n=t(e)),n<Number(r)))return!1}let{allowInput:a}=n;return typeof a==`function`?a(e):!0}function Ne(e){be(e),e.relatedTarget===m.value&&X(),e.relatedTarget!==null&&(e.relatedTarget===S.value||e.relatedTarget===C.value||e.relatedTarget===g.value)||(z.value=!1),$(e,`blur`),w.value=null}function Pe(e,t){xe(e),I.value=!0,z.value=!0,Se(),$(e,`focus`),t===0?w.value=S.value:t===1?w.value=C.value:t===2&&(w.value=g.value)}function Fe(e){n.passivelyActivated&&(ke(e),$(e,`blur`))}function Ie(e){n.passivelyActivated&&(I.value=!0,Oe(e),$(e,`focus`))}function $(e,t){e.relatedTarget!==null&&(e.relatedTarget===S.value||e.relatedTarget===C.value||e.relatedTarget===g.value||e.relatedTarget===m.value)||(t===`focus`?(ve(e),I.value=!0):t===`blur`&&(_e(e),I.value=!1))}function Le(e,t){Q(e,t,`change`)}function Re(e){Ee(e)}function ze(e){ye(e),Be()}function Be(){n.pair?(J([``,``],{source:`clear`}),Y([``,``],{source:`clear`})):(J(``,{source:`clear`}),Y(``,{source:`clear`}))}function Ve(e){let{onMousedown:t}=n;t&&t(e);let{tagName:r}=e.target;if(r!==`INPUT`&&r!==`TEXTAREA`){if(n.resizable){let{value:t}=m;if(t){let{left:n,top:r,width:i,height:a}=t.getBoundingClientRect();if(n+i-14<e.clientX&&e.clientX<n+i&&r+a-14<e.clientY&&e.clientY<r+a)return}}e.preventDefault(),I.value||Xe()}}function He(){var e;L.value=!0,n.type===`textarea`&&((e=D.value)==null||e.handleMouseEnterWrapper())}function Ue(){var e;L.value=!1,n.type===`textarea`&&((e=D.value)==null||e.handleMouseLeaveWrapper())}function We(){F.value||W.value===`click`&&(G.value=!G.value)}function Ge(e){if(F.value)return;e.preventDefault();let n=e=>{e.preventDefault(),t(`mouseup`,document,n)};if(ie(`mouseup`,document,n),W.value!==`mousedown`)return;G.value=!0;let r=()=>{G.value=!1,t(`mouseup`,document,r)};ie(`mouseup`,document,r)}function Ke(e){n.onKeyup&&y(n.onKeyup,e)}function qe(e){switch(n.onKeydown&&y(n.onKeydown,e),e.key){case`Escape`:Ye();break;case`Enter`:Je(e);break}}function Je(e){var t,r;if(n.passivelyActivated){let{value:i}=z;if(i){n.internalDeactivateOnEnter&&Ye();return}e.preventDefault(),n.type===`textarea`?(t=g.value)==null||t.focus():(r=S.value)==null||r.focus()}}function Ye(){n.passivelyActivated&&(z.value=!1,N(()=>{var e;(e=m.value)==null||e.focus()}))}function Xe(){var e,t,r;F.value||(n.passivelyActivated?(e=m.value)==null||e.focus():((t=g.value)==null||t.focus(),(r=S.value)==null||r.focus()))}function Ze(){m.value?.contains(document.activeElement)&&document.activeElement.blur()}function Qe(){var e,t;(e=g.value)==null||e.select(),(t=S.value)==null||t.select()}function $e(){F.value||(g.value?g.value.focus():S.value&&S.value.focus())}function et(){let{value:e}=m;e?.contains(document.activeElement)&&e!==document.activeElement&&Ye()}function tt(e){if(n.type===`textarea`){let{value:t}=g;t?.scrollTo(e)}else{let{value:t}=S;t?.scrollTo(e)}}function nt(e){let{type:t,pair:r,autosize:i}=n;if(!r&&i)if(t===`textarea`){let{value:t}=b;t&&(t.textContent=`${e??``}\r\n`)}else{let{value:t}=x;t&&(e?t.textContent=e:t.innerHTML=`&nbsp;`)}}function rt(){he()}let it=l({top:`0`});function at(e){var t;let{scrollTop:n}=e.target;it.value.top=`${-n}px`,(t=D.value)==null||t.syncUnifiedContainer()}let ot=null;A(()=>{let{autosize:e,type:t}=n;e&&t===`textarea`?ot=p(j,e=>{!Array.isArray(e)&&e!==B&&nt(e)}):ot?.()});let st=null;A(()=>{n.type===`textarea`?st=p(j,e=>{var t;!Array.isArray(e)&&e!==B&&((t=D.value)==null||t.syncUnifiedContainer())}):st?.()}),i(Ce,{mergedValueRef:j,maxlengthRef:ge,mergedClsPrefixRef:r,countGraphemesRef:v(n,`countGraphemes`)});let ct={wrapperElRef:m,inputElRef:S,textareaElRef:g,isCompositing:R,clear:Be,focus:Xe,blur:Ze,select:Qe,deactivate:et,activate:$e,scrollTo:tt},lt=ae(`Input`,u,r),ut=E(()=>{let{value:e}=P,{common:{cubicBezierEaseInOut:t},self:{color:n,borderRadius:r,textColor:i,caretColor:a,caretColorError:o,caretColorWarning:s,textDecorationColor:c,border:l,borderDisabled:u,borderHover:d,borderFocus:p,placeholderColor:m,placeholderColorDisabled:g,lineHeightTextarea:_,colorDisabled:v,colorFocus:y,textColorDisabled:b,boxShadowFocus:ee,iconSize:x,colorFocusWarning:te,boxShadowFocusWarning:S,borderWarning:C,borderFocusWarning:ne,borderHoverWarning:re,colorFocusError:w,boxShadowFocusError:T,borderError:E,borderFocusError:ie,borderHoverError:D,clearSize:O,clearColor:k,clearColorHover:A,clearColorPressed:j,iconColor:ae,iconColorDisabled:M,suffixTextColor:N,countTextColor:oe,countTextColorDisabled:F,iconColorHover:se,iconColorPressed:ce,loadingColor:le,loadingColorError:I,loadingColorWarning:de,fontWeight:L,[h(`padding`,e)]:R,[h(`fontSize`,e)]:z,[h(`height`,e)]:B}}=f.value,{left:V,right:H}=ue(R);return{"--n-bezier":t,"--n-count-text-color":oe,"--n-count-text-color-disabled":F,"--n-color":n,"--n-font-size":z,"--n-font-weight":L,"--n-border-radius":r,"--n-height":B,"--n-padding-left":V,"--n-padding-right":H,"--n-text-color":i,"--n-caret-color":a,"--n-text-decoration-color":c,"--n-border":l,"--n-border-disabled":u,"--n-border-hover":d,"--n-border-focus":p,"--n-placeholder-color":m,"--n-placeholder-color-disabled":g,"--n-icon-size":x,"--n-line-height-textarea":_,"--n-color-disabled":v,"--n-color-focus":y,"--n-text-color-disabled":b,"--n-box-shadow-focus":ee,"--n-loading-color":le,"--n-caret-color-warning":s,"--n-color-focus-warning":te,"--n-box-shadow-focus-warning":S,"--n-border-warning":C,"--n-border-focus-warning":ne,"--n-border-hover-warning":re,"--n-loading-color-warning":de,"--n-caret-color-error":o,"--n-color-focus-error":w,"--n-box-shadow-focus-error":T,"--n-border-error":E,"--n-border-focus-error":ie,"--n-border-hover-error":D,"--n-loading-color-error":I,"--n-clear-color":k,"--n-clear-size":O,"--n-clear-color-hover":A,"--n-clear-color-pressed":j,"--n-icon-color":ae,"--n-icon-color-hover":se,"--n-icon-color-pressed":ce,"--n-icon-color-disabled":M,"--n-suffix-text-color":N}}),dt=c?oe(`input`,E(()=>{let{value:e}=P;return e[0]}),ut,n):void 0;return Object.assign(Object.assign({},ct),{wrapperElRef:m,inputElRef:S,inputMirrorElRef:x,inputEl2Ref:C,textareaElRef:g,textareaMirrorElRef:b,textareaScrollbarInstRef:D,rtlEnabled:lt,uncontrolledValue:k,mergedValue:j,passwordVisible:G,mergedPlaceholder:V,showPlaceholder1:H,showPlaceholder2:fe,mergedFocus:U,isComposing:R,activated:z,showClearButton:pe,mergedSize:P,mergedDisabled:F,textDecorationStyle:me,mergedClsPrefix:r,mergedBordered:a,mergedShowPasswordOn:W,placeholderStyle:it,mergedStatus:se,textAreaScrollContainerWidth:K,handleTextAreaScroll:at,handleCompositionStart:Ae,handleCompositionEnd:je,handleInput:Q,handleInputBlur:Ne,handleInputFocus:Pe,handleWrapperBlur:Fe,handleWrapperFocus:Ie,handleMouseEnter:He,handleMouseLeave:Ue,handleMouseDown:Ve,handleChange:Le,handleClick:Re,handleClear:ze,handlePasswordToggleClick:We,handlePasswordToggleMousedown:Ge,handleWrapperKeydown:qe,handleWrapperKeyup:Ke,handleTextAreaMirrorResize:rt,getTextareaScrollContainer:()=>g.value,mergedTheme:f,cssVars:c?void 0:ut,themeClass:dt?.themeClass,onRender:dt?.onRender})},render(){let{mergedClsPrefix:e,mergedStatus:t,themeClass:n,type:i,countGraphemes:a,onRender:o}=this,s=this.$slots;return o?.(),T(`div`,{ref:`wrapperElRef`,class:[`${e}-input`,`${e}-input--${this.mergedSize}-size`,n,t&&`${e}-input--${t}-status`,{[`${e}-input--rtl`]:this.rtlEnabled,[`${e}-input--disabled`]:this.mergedDisabled,[`${e}-input--textarea`]:i===`textarea`,[`${e}-input--resizable`]:this.resizable&&!this.autosize,[`${e}-input--autosize`]:this.autosize,[`${e}-input--round`]:this.round&&i!==`textarea`,[`${e}-input--pair`]:this.pair,[`${e}-input--focus`]:this.mergedFocus,[`${e}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.handleWrapperKeyup,onKeydown:this.handleWrapperKeydown},T(`div`,{class:`${e}-input-wrapper`},P(s.prefix,t=>t&&T(`div`,{class:`${e}-input__prefix`},t)),i===`textarea`?T(w,{ref:`textareaScrollbarInstRef`,class:`${e}-input__textarea`,container:this.getTextareaScrollContainer,theme:this.theme?.peers?.Scrollbar,themeOverrides:this.themeOverrides?.peers?.Scrollbar,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{let{textAreaScrollContainerWidth:t}=this,n={width:this.autosize&&t&&`${t}px`};return T(x,null,T(`textarea`,Object.assign({},this.inputProps,{ref:`textareaElRef`,class:[`${e}-input__textarea-el`,this.inputProps?.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],this.inputProps?.style,n],onBlur:this.handleInputBlur,onFocus:e=>{this.handleInputFocus(e,2)},onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?T(`div`,{class:`${e}-input__placeholder`,style:[this.placeholderStyle,n],key:`placeholder`},this.mergedPlaceholder[0]):null,this.autosize?T(r,{onResize:this.handleTextAreaMirrorResize},{default:()=>T(`div`,{ref:`textareaMirrorElRef`,class:`${e}-input__textarea-mirror`,key:`mirror`})}):null)}}):T(`div`,{class:`${e}-input__input`},T(`input`,Object.assign({type:i===`password`&&this.mergedShowPasswordOn&&this.passwordVisible?`text`:i},this.inputProps,{ref:`inputElRef`,class:[`${e}-input__input-el`,this.inputProps?.class],style:[this.textDecorationStyle[0],this.inputProps?.style],tabindex:this.passivelyActivated&&!this.activated?-1:this.inputProps?.tabindex,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:e=>{this.handleInputFocus(e,0)},onInput:e=>{this.handleInput(e,0)},onChange:e=>{this.handleChange(e,0)}})),this.showPlaceholder1?T(`div`,{class:`${e}-input__placeholder`},T(`span`,null,this.mergedPlaceholder[0])):null,this.autosize?T(`div`,{class:`${e}-input__input-mirror`,key:`mirror`,ref:`inputMirrorElRef`},`\xA0`):null),!this.pair&&P(s.suffix,t=>t||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?T(`div`,{class:`${e}-input__suffix`},[P(s[`clear-icon-placeholder`],t=>(this.clearable||t)&&T(X,{clsPrefix:e,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>t,icon:()=>{var e;return(e=this.$slots)[`clear-icon`]?.call(e)}})),this.internalLoadingBeforeSuffix?null:t,this.loading===void 0?null:T(Se,{clsPrefix:e,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}),this.internalLoadingBeforeSuffix?t:null,this.showCount&&this.type!==`textarea`?T(Oe,null,{default:e=>{let{renderCount:t}=this;return t?t(e):s.count?.call(s,e)}}):null,this.mergedShowPasswordOn&&this.type===`password`?T(`div`,{class:`${e}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?O(s[`password-visible-icon`],()=>[T(I,{clsPrefix:e},{default:()=>T(ye,null)})]):O(s[`password-invisible-icon`],()=>[T(I,{clsPrefix:e},{default:()=>T(be,null)})])):null]):null)),this.pair?T(`span`,{class:`${e}-input__separator`},O(s.separator,()=>[this.separator])):null,this.pair?T(`div`,{class:`${e}-input-wrapper`},T(`div`,{class:`${e}-input__input`},T(`input`,{ref:`inputEl2Ref`,type:this.type,class:`${e}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:a?void 0:this.maxlength,minlength:a?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:e=>{this.handleInputFocus(e,1)},onInput:e=>{this.handleInput(e,1)},onChange:e=>{this.handleChange(e,1)}}),this.showPlaceholder2?T(`div`,{class:`${e}-input__placeholder`},T(`span`,null,this.mergedPlaceholder[1])):null),P(s.suffix,t=>(this.clearable||t)&&T(`div`,{class:`${e}-input__suffix`},[this.clearable&&T(X,{clsPrefix:e,show:this.showClearButton,onClear:this.handleClear},{icon:()=>s[`clear-icon`]?.call(s),placeholder:()=>s[`clear-icon-placeholder`]?.call(s)}),t]))):null,this.mergedBordered?T(`div`,{class:`${e}-input__border`}):null,this.mergedBordered?T(`div`,{class:`${e}-input__state-border`}):null,this.showCount&&i===`textarea`?T(Oe,null,{default:e=>{let{renderCount:t}=this;return t?t(e):s.count?.call(s,e)}}):null)}});export{Y as a,he as c,de as d,_e as i,H as l,Se as n,J as o,ye as r,q as s,ke as t,z as u};