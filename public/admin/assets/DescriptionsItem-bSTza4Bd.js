import{a as e}from"./Tag-BXeFvVmF.js";import{t}from"./get-slot-6kXJmSMP.js";import{Et as n,Fr as r,Ir as i,Mr as a,Nr as o,Or as s,Pr as c,di as l,ei as u,j as d,jr as f,kr as p,li as m,nr as h,on as g,sn as _,xn as v}from"./index-BPkAzZ_Q.js";function y(e,t=`default`,n=[]){let{children:r}=e;if(typeof r==`object`&&r&&!Array.isArray(r)){let e=r[t];if(typeof e==`function`)return e()}return n}var b=s([p(`descriptions`,{fontSize:`var(--n-font-size)`},[p(`descriptions-separator`,`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),p(`descriptions-table-wrapper`,[p(`descriptions-table`,[p(`descriptions-table-row`,[p(`descriptions-table-header`,{padding:`var(--n-th-padding)`}),p(`descriptions-table-content`,{padding:`var(--n-td-padding)`})])])]),o(`bordered`,[p(`descriptions-table-wrapper`,[p(`descriptions-table`,[p(`descriptions-table-row`,[s(`&:last-child`,[p(`descriptions-table-content`,{paddingBottom:0})])])])])]),a(`left-label-placement`,[p(`descriptions-table-content`,[s(`> *`,{verticalAlign:`top`})])]),a(`left-label-align`,[s(`th`,{textAlign:`left`})]),a(`center-label-align`,[s(`th`,{textAlign:`center`})]),a(`right-label-align`,[s(`th`,{textAlign:`right`})]),a(`bordered`,[p(`descriptions-table-wrapper`,`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[p(`descriptions-table`,[p(`descriptions-table-row`,[s(`&:not(:last-child)`,[p(`descriptions-table-content`,{borderBottom:`1px solid var(--n-merged-border-color)`}),p(`descriptions-table-header`,{borderBottom:`1px solid var(--n-merged-border-color)`})]),p(`descriptions-table-header`,`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[s(`&:not(:last-child)`,{borderRight:`1px solid var(--n-merged-border-color)`})]),p(`descriptions-table-content`,[s(`&:not(:last-child)`,{borderRight:`1px solid var(--n-merged-border-color)`})])])])])]),p(`descriptions-header`,`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),p(`descriptions-table-wrapper`,`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[p(`descriptions-table`,`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[p(`descriptions-table-row`,`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[p(`descriptions-table-header`,`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),p(`descriptions-table-content`,`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[f(`content`,`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),f(`label`,`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),p(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),r(p(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),i(p(`descriptions-table-wrapper`,`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),x=`DESCRIPTION_ITEM_FLAG`;function S(e){return typeof e==`object`&&e&&!Array.isArray(e)?e.type&&e.type.DESCRIPTION_ITEM_FLAG:!1}var C=m({name:`Descriptions`,props:Object.assign(Object.assign({},n.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:`top`},labelAlign:{type:String,default:`left`},separator:{type:String,default:`:`},size:String,bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),slots:Object,setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a}=_(t),o=u(()=>t.size||a?.value?.Descriptions?.size||`medium`),s=n(`Descriptions`,`-descriptions`,b,d,t,r),l=u(()=>{let{bordered:e}=t,n=o.value,{common:{cubicBezierEaseInOut:r},self:{titleTextColor:i,thColor:a,thColorModal:l,thColorPopover:u,thTextColor:d,thFontWeight:f,tdTextColor:p,tdColor:m,tdColorModal:h,tdColorPopover:g,borderColor:_,borderColorModal:v,borderColorPopover:y,borderRadius:b,lineHeight:x,[c(`fontSize`,n)]:S,[c(e?`thPaddingBordered`:`thPadding`,n)]:C,[c(e?`tdPaddingBordered`:`tdPadding`,n)]:w}}=s.value;return{"--n-title-text-color":i,"--n-th-padding":C,"--n-td-padding":w,"--n-font-size":S,"--n-bezier":r,"--n-th-font-weight":f,"--n-line-height":x,"--n-th-text-color":d,"--n-td-text-color":p,"--n-th-color":a,"--n-th-color-modal":l,"--n-th-color-popover":u,"--n-td-color":m,"--n-td-color-modal":h,"--n-td-color-popover":g,"--n-border-radius":b,"--n-border-color":_,"--n-border-color-modal":v,"--n-border-color-popover":y}}),f=i?g(`descriptions`,u(()=>{let e=``,{bordered:n}=t;return n&&(e+=`a`),e+=o.value[0],e}),l,t):void 0;return{mergedClsPrefix:r,cssVars:i?void 0:l,themeClass:f?.themeClass,onRender:f?.onRender,compitableColumn:e(t,[`columns`,`column`]),inlineThemeDisabled:i,mergedSize:o}},render(){let e=this.$slots.default,n=e?v(e()):[];n.length;let{contentClass:r,labelClass:i,compitableColumn:a,labelPlacement:o,labelAlign:s,mergedSize:c,bordered:u,title:d,cssVars:f,mergedClsPrefix:p,separator:m,onRender:g}=this;g?.();let _=n.filter(e=>S(e)),b=_.reduce((e,t,n)=>{let s=t.props||{},c=_.length-1===n,d=[`label`in s?s.label:y(t,`label`)],f=[y(t)],h=s.span||1,g=e.span;e.span+=h;let v=s.labelStyle||s[`label-style`]||this.labelStyle,b=s.contentStyle||s[`content-style`]||this.contentStyle;if(o===`left`)u?e.row.push(l(`th`,{class:[`${p}-descriptions-table-header`,i],colspan:1,style:v},d),l(`td`,{class:[`${p}-descriptions-table-content`,r],colspan:c?(a-g)*2+1:h*2-1,style:b},f)):e.row.push(l(`td`,{class:`${p}-descriptions-table-content`,colspan:c?(a-g)*2:h*2},l(`span`,{class:[`${p}-descriptions-table-content__label`,i],style:v},[...d,m&&l(`span`,{class:`${p}-descriptions-separator`},m)]),l(`span`,{class:[`${p}-descriptions-table-content__content`,r],style:b},f)));else{let t=c?(a-g)*2:h*2;e.row.push(l(`th`,{class:[`${p}-descriptions-table-header`,i],colspan:t,style:v},d)),e.secondRow.push(l(`td`,{class:[`${p}-descriptions-table-content`,r],colspan:t,style:b},f))}return(e.span>=a||c)&&(e.span=0,e.row.length&&(e.rows.push(e.row),e.row=[]),o!==`left`&&e.secondRow.length&&(e.rows.push(e.secondRow),e.secondRow=[])),e},{span:0,row:[],secondRow:[],rows:[]}).rows.map(e=>l(`tr`,{class:`${p}-descriptions-table-row`},e));return l(`div`,{style:f,class:[`${p}-descriptions`,this.themeClass,`${p}-descriptions--${o}-label-placement`,`${p}-descriptions--${s}-label-align`,`${p}-descriptions--${c}-size`,u&&`${p}-descriptions--bordered`]},d||this.$slots.header?l(`div`,{class:`${p}-descriptions-header`},d||t(this,`header`)):null,l(`div`,{class:`${p}-descriptions-table-wrapper`},l(`table`,{class:`${p}-descriptions-table`},l(`tbody`,null,o===`top`&&l(`tr`,{class:`${p}-descriptions-table-row`,style:{visibility:`collapse`}},h(a*2,l(`td`,null))),b))))}}),w={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},T=m({name:`DescriptionsItem`,[x]:!0,props:w,slots:Object,render(){return null}});export{C as n,T as t};