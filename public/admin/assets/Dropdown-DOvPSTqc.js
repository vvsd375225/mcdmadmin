import{_ as e,a as t,b as n,c as r,i,o as a,w as o,x as s}from"./Select-DwMuVUEV.js";import{d as c}from"./Input-t5XHO0vM.js";import{t as l}from"./create-ref-setter-CZwbUHKy.js";import{t as u}from"./Icon-CLLRyWro.js";import{$n as d,Ci as f,Et as p,Fi as m,Hn as h,Hr as g,Ii as _,Kn as v,L as y,Mr as b,Nr as x,Oi as S,Or as C,Pi as w,Pr as T,Qn as E,Ri as D,Sn as O,Tn as k,Un as A,Wn as j,Xn as M,Xr as N,_i as P,at as F,di as I,ei as L,er as R,fi as z,gi as B,gn as V,jr as H,kr as U,li as W,lt as ee,on as te,pi as G,sn as ne,yn as re}from"./index-D7-2mGpy.js";function ie(e={},t){let n=w({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:i}=e,a=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},o=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}i!==void 0&&Object.keys(i).forEach(t=>{if(t!==e.key)return;let n=i[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},s=()=>{(t===void 0||t.value)&&(R(`keydown`,document,a),R(`keyup`,document,o)),t!==void 0&&S(t,e=>{e?(R(`keydown`,document,a),R(`keyup`,document,o)):(d(`keydown`,document,a),d(`keyup`,document,o))})};return M()?(B(s),P(()=>{(t===void 0||t.value)&&(d(`keydown`,document,a),d(`keyup`,document,o))})):s(),m(n)}function ae(e,t,n){if(!t)return e;let r=_(e.value),i=null;return S(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}var K=W({name:`ChevronRight`,render(){return I(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},I(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),q=v(`n-dropdown-menu`),J=v(`n-dropdown`),Y=v(`n-dropdown-option`),X=W({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return I(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),oe=W({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=z(q),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=z(J);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=I(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),I(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},I(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},V(o.icon)),I(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):V(o.title??o[this.labelField])),I(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}});function Z(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function se(e){return e.type===`group`}function Q(e){return e.type===`divider`}function ce(e){return e.type===`render`}var $=W({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=z(J),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:i,pendingKeyPathRef:a,activeKeyPathRef:s,animatedRef:c,mergedShowRef:l,renderLabelRef:u,renderIconRef:d,labelFieldRef:p,childrenFieldRef:m,renderOptionRef:g,nodePropsRef:v,menuPropsRef:y}=t,b=z(Y,null),x=z(q),S=z(h),C=L(()=>e.tmNode.rawNode),w=L(()=>{let{value:t}=m;return Z(e.tmNode.rawNode,t)}),T=L(()=>{let{disabled:t}=e.tmNode;return t}),D=ae(L(()=>{if(!w.value)return!1;let{key:t,disabled:o}=e.tmNode;if(o)return!1;let{value:s}=n,{value:c}=r,{value:l}=i,{value:u}=a;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,L(()=>r.value===null&&!c.value)),O=L(()=>!!b?.enteringSubmenuRef.value),k=_(!1);f(Y,{enteringSubmenuRef:k});function A(){k.value=!0}function j(){k.value=!1}function M(){let{parentKey:t,tmNode:a}=e;a.disabled||l.value&&(i.value=t,r.value=null,n.value=a.key)}function N(){let{tmNode:t}=e;t.disabled||l.value&&n.value!==t.key&&M()}function P(t){if(e.tmNode.disabled||!l.value)return;let{relatedTarget:r}=t;r&&!o({target:r},`dropdownOption`)&&!o({target:r},`scrollbarRail`)&&(n.value=null)}function F(){let{value:n}=w,{tmNode:r}=e;l.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:p,renderLabel:u,renderIcon:d,siblingHasIcon:x.showIconRef,siblingHasSubmenu:x.hasSubmenuRef,menuProps:y,popoverBody:S,animated:c,mergedShowSubmenu:L(()=>D.value&&!O.value),rawNode:C,hasSubmenu:w,pending:E(()=>{let{value:t}=a,{key:n}=e.tmNode;return t.includes(n)}),childActive:E(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:E(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:T,renderOption:g,nodeProps:v,handleClick:F,handleMouseMove:N,handleMouseEnter:M,handleMouseLeave:P,handleSubmenuBeforeEnter:A,handleSubmenuAfterEnter:j}},render(){let{animated:t,rawNode:r,mergedShowSubmenu:i,clsPrefix:a,siblingHasIcon:o,siblingHasSubmenu:c,renderLabel:l,renderIcon:d,renderOption:f,nodeProps:p,props:m,scrollable:h}=this,_=null;if(i){let e=this.menuProps?.call(this,r,r.children);_=I(de,Object.assign({},e,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let v={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},y=p?.(r),b=I(`div`,Object.assign({class:[`${a}-dropdown-option`,y?.class],"data-dropdown-option":!0},y),I(`div`,G(v,m),[I(`div`,{class:[`${a}-dropdown-option-body__prefix`,o&&`${a}-dropdown-option-body__prefix--show-icon`]},[d?d(r):V(r.icon)]),I(`div`,{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},l?l(r):V(r[this.labelField]??r.title)),I(`div`,{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,c&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?I(u,null,{default:()=>I(K,null)}):null)]),this.hasSubmenu?I(s,null,{default:()=>[I(n,null,{default:()=>I(`div`,{class:`${a}-dropdown-offset-container`},I(e,{show:this.mergedShowSubmenu,placement:this.placement,to:h&&this.popoverBody||void 0,teleportDisabled:!h},{default:()=>I(`div`,{class:`${a}-dropdown-menu-wrapper`},t?I(g,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>_}):_)}))})]}):null);return f?f({node:b,option:r}):b}}),le=W({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return I(N,null,I(oe,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:Q(r)?I(X,{clsPrefix:n,key:e.key}):e.isGroup?(k(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):I($,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),ue=W({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return I(`div`,t,[e?.()])}}),de=W({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=z(J);f(q,{showIconRef:L(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:L(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Z(e,t));let{rawNode:n}=e;return Z(n,t)})})});let r=_(null);return f(A,null),f(j,null),f(h,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:ce(i)?I(ue,{tmNode:r,key:r.key}):Q(i)?I(X,{clsPrefix:t,key:r.key}):se(i)?I(le,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):I($,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return I(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?I(ee,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?a({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),fe=U(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[F(),U(`dropdown-option`,`
 position: relative;
 `,[C(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[C(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),U(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[C(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),x(`disabled`,[b(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[H(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),C(`&::before`,`background-color: var(--n-option-color-hover);`)]),b(`active`,`
 color: var(--n-option-text-color-active);
 `,[H(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),C(`&::before`,`background-color: var(--n-option-color-active);`)]),b(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[H(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),b(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),b(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[H(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[b(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),H(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[b(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),U(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),H(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),H(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[b(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),U(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),U(`dropdown-menu`,`pointer-events: all;`)]),U(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),U(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),U(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),C(`>`,[U(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),x(`scrollable`,`
 padding: var(--n-padding);
 `),b(`scrollable`,[H(`content`,`
 padding: var(--n-padding);
 `)])]),pe={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},me=Object.keys(t),he=W({name:`Dropdown`,inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},t),pe),p.props),setup(e){let t=_(!1),n=c(D(e,`show`),t),i=L(()=>{let{keyField:t,childrenField:n}=e;return r(e.options,{getKey(e){return e[t]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[n]}})}),a=L(()=>i.value.treeNodes),o=_(null),s=_(null),l=_(null),u=L(()=>o.value??s.value??l.value??null),d=L(()=>i.value.getPath(u.value).keyPath),m=L(()=>i.value.getPath(e.value).keyPath),h=E(()=>e.keyboard&&n.value);ie({keydown:{ArrowUp:{prevent:!0,handler:P},ArrowRight:{prevent:!0,handler:N},ArrowDown:{prevent:!0,handler:F},ArrowLeft:{prevent:!0,handler:M},Enter:{prevent:!0,handler:I},Escape:j}},h);let{mergedClsPrefixRef:g,inlineThemeDisabled:v,mergedComponentPropsRef:b}=ne(e),x=L(()=>e.size||b?.value?.Dropdown?.size||`medium`),C=p(`Dropdown`,`-dropdown`,fe,y,e,g);f(J,{labelFieldRef:D(e,`labelField`),childrenFieldRef:D(e,`childrenField`),renderLabelRef:D(e,`renderLabel`),renderIconRef:D(e,`renderIcon`),hoverKeyRef:o,keyboardKeyRef:s,lastToggledSubmenuKeyRef:l,pendingKeyPathRef:d,activeKeyPathRef:m,animatedRef:D(e,`animated`),mergedShowRef:n,nodePropsRef:D(e,`nodeProps`),renderOptionRef:D(e,`renderOption`),menuPropsRef:D(e,`menuProps`),doSelect:w,doUpdateShow:k}),S(n,t=>{!e.animated&&!t&&A()});function w(t,n){let{onSelect:r}=e;r&&O(r,t,n)}function k(n){let{"onUpdate:show":r,onUpdateShow:i}=e;r&&O(r,n),i&&O(i,n),t.value=n}function A(){o.value=null,s.value=null,l.value=null}function j(){k(!1)}function M(){z(`left`)}function N(){z(`right`)}function P(){z(`up`)}function F(){z(`down`)}function I(){let e=R();e?.isLeaf&&n.value&&(w(e.key,e.rawNode),k(!1))}function R(){let{value:e}=i,{value:t}=u;return!e||t===null?null:e.getNode(t)??null}function z(e){let{value:t}=u,{value:{getFirstAvailableNode:n}}=i,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=R();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(o.value=null,s.value=r)}let B=L(()=>{let{inverted:t}=e,n=x.value,{common:{cubicBezierEaseInOut:r},self:i}=C.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[T(`optionIconSuffixWidth`,n)]:l,[T(`optionSuffixWidth`,n)]:u,[T(`optionIconPrefixWidth`,n)]:d,[T(`optionPrefixWidth`,n)]:f,[T(`fontSize`,n)]:p,[T(`optionHeight`,n)]:m,[T(`optionIconSize`,n)]:h}=i,g={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":m,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":h,"--n-divider-color":o,"--n-option-opacity-disabled":c};return t?(g[`--n-color`]=i.colorInverted,g[`--n-option-color-hover`]=i.optionColorHoverInverted,g[`--n-option-color-active`]=i.optionColorActiveInverted,g[`--n-option-text-color`]=i.optionTextColorInverted,g[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,g[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,g[`--n-prefix-color`]=i.prefixColorInverted,g[`--n-suffix-color`]=i.suffixColorInverted,g[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(g[`--n-color`]=i.color,g[`--n-option-color-hover`]=i.optionColorHover,g[`--n-option-color-active`]=i.optionColorActive,g[`--n-option-text-color`]=i.optionTextColor,g[`--n-option-text-color-hover`]=i.optionTextColorHover,g[`--n-option-text-color-active`]=i.optionTextColorActive,g[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,g[`--n-prefix-color`]=i.prefixColor,g[`--n-suffix-color`]=i.suffixColor,g[`--n-group-header-text-color`]=i.groupHeaderTextColor),g}),V=v?te(`dropdown`,L(()=>`${x.value[0]}${e.inverted?`i`:``}`),B,e):void 0;return{mergedClsPrefix:g,mergedTheme:C,mergedSize:x,tmNodes:a,mergedShow:n,handleAfterLeave:()=>{e.animated&&A()},doUpdateShow:k,cssVars:v?void 0:B,themeClass:V?.themeClass,onRender:V?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},u={ref:l(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return I(de,G(this.$attrs,u,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return I(i,Object.assign({},re(this.$props,me),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{K as n,he as t};