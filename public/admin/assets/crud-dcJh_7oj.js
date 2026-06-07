import{n as e,t}from"./request-BZmH07Jh.js";import{t as n}from"./Select-DwMuVUEV.js";import{t as r}from"./Input-t5XHO0vM.js";import{n as i,t as a}from"./Grid-BNF4vwt5.js";import{n as o,t as s}from"./FormItem-DqzwjWjJ.js";import{n as c,t as l}from"./Tabs-CCzHwJja.js";import{n as u,t as d}from"./DescriptionsItem-CHQU33np.js";import{t as f}from"./DataTable-BnW4wMUF.js";import{t as p}from"./Divider-Dv-UQCL9.js";import{t as m}from"./Space-Bkv7eUyT.js";import{t as h}from"./Switch-HEB0dEGW.js";import{Ai as g,Bi as _,Et as v,G as y,Ii as b,Mr as x,Oi as S,Or as C,Pi as w,Ri as T,Si as E,Ui as D,W as O,bi as k,ci as A,di as j,dt as M,ei as N,fi as P,ii as ee,jr as F,kr as I,li as L,ln as R,ni as te,on as z,ri as ne,si as B,sn as V,w as re}from"./index-D7-2mGpy.js";function H(e,t){let n=P(R,null);return N(()=>e.hljs||n?.mergedHljsRef.value)}function U(e){let{textColor2:t,fontSize:n,fontWeightStrong:r,textColor3:i}=e;return{textColor:t,fontSize:n,fontWeightStrong:r,"mono-3":`#a0a1a7`,"hue-1":`#0184bb`,"hue-2":`#4078f2`,"hue-3":`#a626a4`,"hue-4":`#50a14f`,"hue-5":`#e45649`,"hue-5-2":`#c91243`,"hue-6":`#986801`,"hue-6-2":`#c18401`,lineNumberTextColor:i}}var W={name:`Code`,common:M,self:U},G=C([I(`code`,`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[x(`show-line-numbers`,`
 display: flex;
 `),F(`line-numbers`,`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),x(`word-wrap`,[C(`pre`,`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),C(`pre`,`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),C(`[class^=hljs]`,`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{let t=`${e.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),ie=L({name:`Code`,props:Object.assign(Object.assign({},v.props),{language:String,code:{type:String,default:``},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),setup(e,{slots:t}){let{internalNoHighlight:n}=e,{mergedClsPrefixRef:r,inlineThemeDisabled:i}=V(),a=b(null),o=n?{value:void 0}:H(e),s=(e,t,n)=>{let{value:r}=o;return!r||!(e&&r.getLanguage(e))?null:r.highlight(n?t.trim():t,{language:e}).value},c=N(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),l=()=>{if(t.default)return;let{value:n}=a;if(!n)return;let{language:r}=e,i=e.uri?window.decodeURIComponent(e.code):e.code;if(r){let t=s(r,i,e.trim);if(t!==null){if(e.inline)n.innerHTML=t;else{let e=n.querySelector(`.__code__`);e&&n.removeChild(e);let r=document.createElement(`pre`);r.className=`__code__`,r.innerHTML=t,n.appendChild(r)}return}}if(e.inline){n.textContent=i;return}let o=n.querySelector(`.__code__`);if(o)o.textContent=i;else{let e=document.createElement(`pre`);e.className=`__code__`,e.textContent=i,n.innerHTML=``,n.appendChild(e)}};k(l),S(T(e,`language`),l),S(T(e,`code`),l),n||S(o,l);let u=v(`Code`,`-code`,G,W,e,r),d=N(()=>{let{common:{cubicBezierEaseInOut:t,fontFamilyMono:n},self:{textColor:r,fontSize:i,fontWeightStrong:a,lineNumberTextColor:o,"mono-3":s,"hue-1":c,"hue-2":l,"hue-3":d,"hue-4":f,"hue-5":p,"hue-5-2":m,"hue-6":h,"hue-6-2":g}}=u.value,{internalFontSize:_}=e;return{"--n-font-size":_?`${_}px`:i,"--n-font-family":n,"--n-font-weight-strong":a,"--n-bezier":t,"--n-text-color":r,"--n-mono-3":s,"--n-hue-1":c,"--n-hue-2":l,"--n-hue-3":d,"--n-hue-4":f,"--n-hue-5":p,"--n-hue-5-2":m,"--n-hue-6":h,"--n-hue-6-2":g,"--n-line-number-text-color":o}}),f=i?z(`code`,N(()=>`${e.internalFontSize||`a`}`),d,e):void 0;return{mergedClsPrefix:r,codeRef:a,mergedShowLineNumbers:c,lineNumbers:N(()=>{let t=1,n=[],r=!1;for(let i of e.code)i===`
`?(r=!0,n.push(t++)):r=!1;return r||n.push(t++),n.join(`
`)}),cssVars:i?void 0:d,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;let{mergedClsPrefix:t,wordWrap:n,mergedShowLineNumbers:r,onRender:i}=this;return i?.(),j(`code`,{class:[`${t}-code`,this.themeClass,n&&`${t}-code--word-wrap`,r&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:`codeRef`},r?j(`pre`,{class:`${t}-code__line-numbers`},this.lineNumbers):null,(e=this.$slots).default?.call(e))}});function K(){return t.get(`/admin/crud/index`)}function q(){return t.get(`/admin/crud/types`)}function J(e){return t.post(`/admin/crud/generate`,e)}function Y(e){return t.post(`/admin/crud/preview`,e)}var ae={class:`page-wrap`},X=L({__name:`index`,setup(t){let v=e(),x=b(``),S=b(``),C=b([]),T=b(!1),M=b(!1),N=b(!1),P=b(!1),F=b(!1),I=b({}),L=b({}),R=b([]),z=b([]),V=b(-1),H=w({name:``,type:`varchar`,length:``,comment:``,default_val:``,nullable:!1}),U=[{title:`字段名`,key:`name`,width:130},{title:`类型`,key:`type`,width:110},{title:`注释`,key:`comment`},{title:`可空`,key:`nullable`,width:60,render:e=>e.nullable?`是`:`否`},{title:`操作`,key:`actions`,width:120,render:(e,t)=>j(m,null,{default:()=>[j(y,{size:`tiny`,onClick:()=>X(t)},`编辑`),j(y,{size:`tiny`,type:`error`,onClick:()=>{C.value.splice(t,1)}},`删除`)]})}],W=[{title:`数据表`,key:`table`},{title:`记录数`,key:`count`,width:90}];function G(){V.value=-1,Object.assign(H,{name:``,type:`varchar`,length:`255`,comment:``,default_val:``,nullable:!1}),T.value=!0}function X(e){V.value=e;let t=C.value[e];Object.assign(H,{...t,default_val:t.default||t.default_val||``}),T.value=!0}function oe(){let e={name:H.name,type:H.type,length:H.length||(H.type===`varchar`?`255`:H.type===`int`?`11`:``),comment:H.comment,default:H.default_val||``,nullable:H.nullable};e.name===`id`&&(e.pk=!0,e.type=`int`,e.length=`11`,e.nullable=!1),V.value>=0?C.value[V.value]=e:C.value.push(e),T.value=!1}function se(e){H.length={varchar:`255`,int:`11`,bigint:`20`,decimal:`10,2`}[e]||``}async function ce(){if(!x.value||C.value.filter(e=>e.name!==`id`).length===0){v.warning(`请输入表名并至少添加一个业务字段`);return}try{I.value=(await Y({table:x.value,comment:S.value,fields:C.value})).data,M.value=!0}catch{}}async function le(){if(!x.value||C.value.filter(e=>e.name!==`id`).length===0){v.warning(`请输入表名并至少添加一个业务字段`);return}F.value=!0;try{let e=await J({table:x.value,comment:S.value,fields:C.value});L.value=e.data,N.value=!0,e.data.sql_status===`已执行`&&v.success(`CRUD代码生成成功！`)}catch{}F.value=!1}return k(async()=>{C.value.push({name:`id`,type:`int`,length:`11`,comment:`主键ID`,default:``,nullable:!1,pk:!0});try{let[e,t]=await Promise.all([K(),q()]);R.value=e.data||[],z.value=(t.data||[]).map(e=>({label:e.label,value:e.value}))}catch{}}),(e,t)=>{let v=r,b=s,w=i,k=a,j=o,V=p,K=f,q=n,J=h,Y=O,X=re,Z=ie,Q=c,ue=l,$=d,de=u;return E(),ee(`div`,ae,[A(Y,{title:`可视化CRUD代码生成器`,bordered:!1},{"header-extra":g(()=>[A(_(m),null,{default:g(()=>[A(_(y),{onClick:t[0]||=e=>P.value=!0},{default:g(()=>[...t[14]||=[B(`浏览数据表`,-1)]]),_:1}),A(_(y),{type:`primary`,onClick:ce},{default:g(()=>[...t[15]||=[B(`预览代码`,-1)]]),_:1}),A(_(y),{type:`info`,onClick:le,loading:F.value},{default:g(()=>[...t[16]||=[B(`一键生成`,-1)]]),_:1},8,[`loading`])]),_:1})]),default:g(()=>[A(j,{"label-placement":`left`,"label-width":`100`},{default:g(()=>[A(k,{cols:2,"x-gap":16},{default:g(()=>[A(w,null,{default:g(()=>[A(b,{label:`数据表名`,required:``},{default:g(()=>[A(v,{value:x.value,"onUpdate:value":t[1]||=e=>x.value=e,placeholder:`英文名，如 news`},null,8,[`value`])]),_:1})]),_:1}),A(w,null,{default:g(()=>[A(b,{label:`表注释`,required:``},{default:g(()=>[A(v,{value:S.value,"onUpdate:value":t[2]||=e=>S.value=e,placeholder:`如 新闻管理`},null,8,[`value`])]),_:1})]),_:1})]),_:1})]),_:1}),A(V,null,{default:g(()=>[t[18]||=B(` 字段设计 `,-1),A(_(y),{size:`small`,type:`primary`,style:{"margin-left":`12px`},onClick:G},{default:g(()=>[...t[17]||=[B(`+ 添加字段`,-1)]]),_:1})]),_:1}),A(K,{columns:U,data:C.value,size:`small`,bordered:!1},null,8,[`data`]),A(X,{show:T.value,"onUpdate:show":t[10]||=e=>T.value=e,title:`编辑字段`},{default:g(()=>[A(Y,{style:{width:`500px`}},{footer:g(()=>[A(_(m),{justify:`end`},{default:g(()=>[A(_(y),{onClick:t[9]||=e=>T.value=!1},{default:g(()=>[...t[19]||=[B(`取消`,-1)]]),_:1}),A(_(y),{type:`primary`,onClick:oe},{default:g(()=>[...t[20]||=[B(`确定`,-1)]]),_:1})]),_:1})]),default:g(()=>[A(j,{model:H,"label-placement":`left`,"label-width":`80`},{default:g(()=>[A(b,{label:`字段名`},{default:g(()=>[A(v,{value:H.name,"onUpdate:value":t[3]||=e=>H.name=e,placeholder:`英文，如 title`},null,8,[`value`])]),_:1}),A(b,{label:`类型`},{default:g(()=>[A(q,{value:H.type,"onUpdate:value":[t[4]||=e=>H.type=e,se],options:z.value},null,8,[`value`,`options`])]),_:1}),A(b,{label:`注释`},{default:g(()=>[A(v,{value:H.comment,"onUpdate:value":t[5]||=e=>H.comment=e,placeholder:`如 标题`},null,8,[`value`])]),_:1}),H.type===`text`?ne(``,!0):(E(),te(b,{key:0,label:`长度`},{default:g(()=>[A(v,{value:H.length,"onUpdate:value":t[6]||=e=>H.length=e,placeholder:`如 255`},null,8,[`value`])]),_:1})),A(b,{label:`默认值`},{default:g(()=>[A(v,{value:H.default_val,"onUpdate:value":t[7]||=e=>H.default_val=e,placeholder:`可选`},null,8,[`value`])]),_:1}),A(b,{label:`可空`},{default:g(()=>[A(J,{value:H.nullable,"onUpdate:value":t[8]||=e=>H.nullable=e},null,8,[`value`])]),_:1})]),_:1},8,[`model`])]),_:1})]),_:1},8,[`show`])]),_:1}),A(X,{show:M.value,"onUpdate:show":t[11]||=e=>M.value=e,title:`代码预览`,style:{width:`950px`}},{default:g(()=>[A(ue,{type:`segment`,animated:``},{default:g(()=>[A(Q,{name:`sql`,tab:`SQL建表`},{default:g(()=>[A(Z,{code:I.value.sql||``,language:`sql`,style:{"max-height":`500px`,overflow:`auto`}},null,8,[`code`])]),_:1}),A(Q,{name:`php`,tab:`PHP控制器`},{default:g(()=>[A(Z,{code:I.value.controller||``,language:`php`,style:{"max-height":`500px`,overflow:`auto`}},null,8,[`code`])]),_:1}),A(Q,{name:`vue`,tab:`Vue页面`},{default:g(()=>[A(Z,{code:I.value.vue||``,language:`html`,style:{"max-height":`500px`,overflow:`auto`}},null,8,[`code`])]),_:1})]),_:1})]),_:1},8,[`show`]),A(X,{show:N.value,"onUpdate:show":t[12]||=e=>N.value=e,title:`生成结果`},{default:g(()=>[A(Y,{style:{width:`650px`}},{default:g(()=>[A(de,{column:1,bordered:``,size:`small`,"label-placement":`left`},{default:g(()=>[A($,{label:`建表SQL`},{default:g(()=>[B(D(L.value.sql_status||`-`),1)]),_:1}),A($,{label:`PHP控制器`},{default:g(()=>[B(D(L.value.ctrl_status||`-`),1)]),_:1}),A($,{label:`Vue页面`},{default:g(()=>[B(D(L.value.vue_status||`-`),1)]),_:1})]),_:1})]),_:1})]),_:1},8,[`show`]),A(X,{show:P.value,"onUpdate:show":t[13]||=e=>P.value=e,title:`现有数据表`},{default:g(()=>[A(Y,{style:{width:`450px`}},{default:g(()=>[A(K,{columns:W,data:R.value,size:`small`,bordered:!1},null,8,[`data`])]),_:1})]),_:1},8,[`show`])])}}});export{X as default};