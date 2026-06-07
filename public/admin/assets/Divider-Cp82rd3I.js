import{Et as e,Mr as t,Nr as n,Xr as r,di as i,ei as a,jr as o,kr as s,li as c,on as l,sn as u,y as d}from"./index-BPkAzZ_Q.js";var f=s(`divider`,`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[n(`vertical`,`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[n(`no-title`,`
 display: flex;
 align-items: center;
 `)]),o(`title`,`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),t(`title-position-left`,[o(`line`,[t(`left`,{width:`28px`})])]),t(`title-position-right`,[o(`line`,[t(`right`,{width:`28px`})])]),t(`dashed`,[o(`line`,`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),t(`vertical`,`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),o(`line`,`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),n(`dashed`,[o(`line`,{backgroundColor:`var(--n-color)`})]),t(`dashed`,[o(`line`,{borderColor:`var(--n-color)`})]),t(`vertical`,{backgroundColor:`var(--n-color)`})]),p=c({name:`Divider`,props:Object.assign(Object.assign({},e.props),{titlePlacement:{type:String,default:`center`},dashed:Boolean,vertical:Boolean}),setup(t){let{mergedClsPrefixRef:n,inlineThemeDisabled:r}=u(t),i=e(`Divider`,`-divider`,f,d,t,n),o=a(()=>{let{common:{cubicBezierEaseInOut:e},self:{color:t,textColor:n,fontWeight:r}}=i.value;return{"--n-bezier":e,"--n-color":t,"--n-text-color":n,"--n-font-weight":r}}),s=r?l(`divider`,void 0,o,t):void 0;return{mergedClsPrefix:n,cssVars:r?void 0:o,themeClass:s?.themeClass,onRender:s?.onRender}},render(){var e;let{$slots:t,titlePlacement:n,vertical:a,dashed:o,cssVars:s,mergedClsPrefix:c}=this;return(e=this.onRender)==null||e.call(this),i(`div`,{role:`separator`,class:[`${c}-divider`,this.themeClass,{[`${c}-divider--vertical`]:a,[`${c}-divider--no-title`]:!t.default,[`${c}-divider--dashed`]:o,[`${c}-divider--title-position-${n}`]:t.default&&n}],style:s},a?null:i(`div`,{class:`${c}-divider__line ${c}-divider__line--left`}),!a&&t.default?i(r,null,i(`div`,{class:`${c}-divider__title`},this.$slots),i(`div`,{class:`${c}-divider__line ${c}-divider__line--right`})):null)}});export{p as t};