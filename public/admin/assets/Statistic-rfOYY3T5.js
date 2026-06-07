import{Et as e,di as t,ei as n,jr as r,kr as i,kt as a,l as o,li as s,mn as c,on as l,sn as u}from"./index-QEQuLFiJ.js";var d=i(`statistic`,[r(`label`,`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),i(`statistic-value`,`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[r(`prefix`,`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[i(`icon`,{verticalAlign:`-0.125em`})]),r(`content`,`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),r(`suffix`,`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[i(`icon`,{verticalAlign:`-0.125em`})])])]),f=s({name:`Statistic`,props:Object.assign(Object.assign({},e.props),{tabularNums:Boolean,label:String,value:[String,Number]}),slots:Object,setup(t){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedRtlRef:s}=u(t),c=e(`Statistic`,`-statistic`,d,o,t,r),f=a(`Statistic`,s,r),p=n(()=>{let{self:{labelFontWeight:e,valueFontSize:t,valueFontWeight:n,valuePrefixTextColor:r,labelTextColor:i,valueSuffixTextColor:a,valueTextColor:o,labelFontSize:s},common:{cubicBezierEaseInOut:l}}=c.value;return{"--n-bezier":l,"--n-label-font-size":s,"--n-label-font-weight":e,"--n-label-text-color":i,"--n-value-font-weight":n,"--n-value-font-size":t,"--n-value-prefix-text-color":r,"--n-value-suffix-text-color":a,"--n-value-text-color":o}}),m=i?l(`statistic`,void 0,p,t):void 0;return{rtlEnabled:f,mergedClsPrefix:r,cssVars:i?void 0:p,themeClass:m?.themeClass,onRender:m?.onRender}},render(){var e;let{mergedClsPrefix:n,$slots:{default:r,label:i,prefix:a,suffix:o}}=this;return(e=this.onRender)==null||e.call(this),t(`div`,{class:[`${n}-statistic`,this.themeClass,this.rtlEnabled&&`${n}-statistic--rtl`],style:this.cssVars},c(i,e=>t(`div`,{class:`${n}-statistic__label`},this.label||e)),t(`div`,{class:`${n}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?`tabular-nums`:``}},c(a,e=>e&&t(`span`,{class:`${n}-statistic-value__prefix`},e)),this.value===void 0?c(r,e=>e&&t(`span`,{class:`${n}-statistic-value__content`},e)):t(`span`,{class:`${n}-statistic-value__content`},this.value),c(o,e=>e&&t(`span`,{class:`${n}-statistic-value__suffix`},e))))}});export{f as t};