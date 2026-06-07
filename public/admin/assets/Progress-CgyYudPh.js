import{u as e}from"./Input-DIUMRdkq.js";import{Et as t,Mr as n,Or as r,Pr as i,Rr as a,bt as o,di as s,ei as c,kr as l,li as u,on as d,p as f,sn as p,vt as m,wt as h,xt as g,yt as _}from"./index-QEQuLFiJ.js";var v={success:s(_,null),error:s(g,null),warning:s(m,null),info:s(o,null)},y=u({name:`ProgressCircle`,props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){let n=c(()=>{let t=`gradient`,{fillColor:n}=e;return typeof n==`object`?`${t}-${a(JSON.stringify(n))}`:t});function r(t,r,i,a){let{gapDegree:o,viewBoxWidth:s,strokeWidth:c}=e,l=50+c/2,u=`M ${l},${l} m 0,50
      a 50,50 0 1 1 0,-100
      a 50,50 0 1 1 0,100`,d=Math.PI*2*50;return{pathString:u,pathStyle:{stroke:a===`rail`?i:typeof e.fillColor==`object`?`url(#${n.value})`:i,strokeDasharray:`${Math.min(t,100)/100*(d-o)}px ${s*8}px`,strokeDashoffset:`-${o/2}px`,transformOrigin:r?`center`:void 0,transform:r?`rotate(${r}deg)`:void 0}}}let i=()=>{let t=typeof e.fillColor==`object`,r=t?e.fillColor.stops[0]:``,i=t?e.fillColor.stops[1]:``;return t&&s(`defs`,null,s(`linearGradient`,{id:n.value,x1:`0%`,y1:`100%`,x2:`100%`,y2:`0%`},s(`stop`,{offset:`0%`,"stop-color":r}),s(`stop`,{offset:`100%`,"stop-color":i})))};return()=>{let{fillColor:n,railColor:a,strokeWidth:o,offsetDegree:c,status:l,percentage:u,showIndicator:d,indicatorTextColor:f,unit:p,gapOffsetDegree:m,clsPrefix:g}=e,{pathString:_,pathStyle:y}=r(100,0,a,`rail`),{pathString:b,pathStyle:x}=r(u,c,n,`fill`),S=100+o;return s(`div`,{class:`${g}-progress-content`,role:`none`},s(`div`,{class:`${g}-progress-graph`,"aria-hidden":!0},s(`div`,{class:`${g}-progress-graph-circle`,style:{transform:m?`rotate(${m}deg)`:void 0}},s(`svg`,{viewBox:`0 0 ${S} ${S}`},i(),s(`g`,null,s(`path`,{class:`${g}-progress-graph-circle-rail`,d:_,"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:y})),s(`g`,null,s(`path`,{class:[`${g}-progress-graph-circle-fill`,u===0&&`${g}-progress-graph-circle-fill--empty`],d:b,"stroke-width":o,"stroke-linecap":`round`,fill:`none`,style:x}))))),d?s(`div`,null,t.default?s(`div`,{class:`${g}-progress-custom-content`,role:`none`},t.default()):l===`default`?s(`div`,{class:`${g}-progress-text`,style:{color:f},role:`none`},s(`span`,{class:`${g}-progress-text__percentage`},u),s(`span`,{class:`${g}-progress-text__unit`},p)):s(`div`,{class:`${g}-progress-icon`,"aria-hidden":!0},s(h,{clsPrefix:g},{default:()=>v[l]}))):null)}}}),b={success:s(_,null),error:s(g,null),warning:s(m,null),info:s(o,null)},x=u({name:`ProgressLine`,props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:`%`},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(t,{slots:n}){let r=c(()=>e(t.height)),i=c(()=>typeof t.fillColor==`object`?`linear-gradient(to right, ${t.fillColor?.stops[0]} , ${t.fillColor?.stops[1]})`:t.fillColor),a=c(()=>t.railBorderRadius===void 0?t.height===void 0?``:e(t.height,{c:.5}):e(t.railBorderRadius)),o=c(()=>t.fillBorderRadius===void 0?t.railBorderRadius===void 0?t.height===void 0?``:e(t.height,{c:.5}):e(t.railBorderRadius):e(t.fillBorderRadius));return()=>{let{indicatorPlacement:e,railColor:c,railStyle:l,percentage:u,unit:d,indicatorTextColor:f,status:p,showIndicator:m,processing:g,clsPrefix:_}=t;return s(`div`,{class:`${_}-progress-content`,role:`none`},s(`div`,{class:`${_}-progress-graph`,"aria-hidden":!0},s(`div`,{class:[`${_}-progress-graph-line`,{[`${_}-progress-graph-line--indicator-${e}`]:!0}]},s(`div`,{class:`${_}-progress-graph-line-rail`,style:[{backgroundColor:c,height:r.value,borderRadius:a.value},l]},s(`div`,{class:[`${_}-progress-graph-line-fill`,g&&`${_}-progress-graph-line-fill--processing`],style:{maxWidth:`${t.percentage}%`,background:i.value,height:r.value,lineHeight:r.value,borderRadius:o.value}},e===`inside`?s(`div`,{class:`${_}-progress-graph-line-indicator`,style:{color:f}},n.default?n.default():`${u}${d}`):null)))),m&&e===`outside`?s(`div`,null,n.default?s(`div`,{class:`${_}-progress-custom-content`,style:{color:f},role:`none`},n.default()):p===`default`?s(`div`,{role:`none`,class:`${_}-progress-icon ${_}-progress-icon--as-text`,style:{color:f}},u,d):s(`div`,{class:`${_}-progress-icon`,"aria-hidden":!0},s(h,{clsPrefix:_},{default:()=>b[p]}))):null)}}});function S(e,t,n=100){return`m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}var C=u({name:`ProgressMultipleCircle`,props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){let n=c(()=>e.percentage.map((t,n)=>`${Math.PI*t/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*n)-e.circleGap*n)*2}, ${e.viewBoxWidth*8}`)),r=(t,n)=>{let r=e.fillColor[n],i=typeof r==`object`?r.stops[0]:``,a=typeof r==`object`?r.stops[1]:``;return typeof e.fillColor[n]==`object`&&s(`linearGradient`,{id:`gradient-${n}`,x1:`100%`,y1:`0%`,x2:`0%`,y2:`100%`},s(`stop`,{offset:`0%`,"stop-color":i}),s(`stop`,{offset:`100%`,"stop-color":a}))};return()=>{let{viewBoxWidth:i,strokeWidth:a,circleGap:o,showIndicator:c,fillColor:l,railColor:u,railStyle:d,percentage:f,clsPrefix:p}=e;return s(`div`,{class:`${p}-progress-content`,role:`none`},s(`div`,{class:`${p}-progress-graph`,"aria-hidden":!0},s(`div`,{class:`${p}-progress-graph-circle`},s(`svg`,{viewBox:`0 0 ${i} ${i}`},s(`defs`,null,f.map((e,t)=>r(e,t))),f.map((e,t)=>s(`g`,{key:t},s(`path`,{class:`${p}-progress-graph-circle-rail`,d:S(i/2-a/2*(1+2*t)-o*t,a,i),"stroke-width":a,"stroke-linecap":`round`,fill:`none`,style:[{strokeDashoffset:0,stroke:u[t]},d[t]]}),s(`path`,{class:[`${p}-progress-graph-circle-fill`,e===0&&`${p}-progress-graph-circle-fill--empty`],d:S(i/2-a/2*(1+2*t)-o*t,a,i),"stroke-width":a,"stroke-linecap":`round`,fill:`none`,style:{strokeDasharray:n.value[t],strokeDashoffset:0,stroke:typeof l[t]==`object`?`url(#gradient-${t})`:l[t]}})))))),c&&t.default?s(`div`,null,s(`div`,{class:`${p}-progress-text`},t.default())):null)}}}),w=r([l(`progress`,{display:`inline-block`},[l(`progress-icon`,`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),n(`line`,`
 width: 100%;
 display: block;
 `,[l(`progress-content`,`
 display: flex;
 align-items: center;
 `,[l(`progress-graph`,{flex:1})]),l(`progress-custom-content`,{marginLeft:`14px`}),l(`progress-icon`,`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[n(`as-text`,`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),n(`circle, dashboard`,{width:`120px`},[l(`progress-custom-content`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),l(`progress-text`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),l(`progress-icon`,`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),n(`multiple-circle`,`
 width: 200px;
 color: inherit;
 `,[l(`progress-text`,`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),l(`progress-content`,{position:`relative`}),l(`progress-graph`,{position:`relative`},[l(`progress-graph-circle`,[r(`svg`,{verticalAlign:`bottom`}),l(`progress-graph-circle-fill`,`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[n(`empty`,{opacity:0})]),l(`progress-graph-circle-rail`,`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),l(`progress-graph-line`,[n(`indicator-inside`,[l(`progress-graph-line-rail`,`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[l(`progress-graph-line-fill`,`
 height: inherit;
 border-radius: 10px;
 `),l(`progress-graph-line-indicator`,`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),n(`indicator-inside-label`,`
 height: 16px;
 display: flex;
 align-items: center;
 `,[l(`progress-graph-line-rail`,`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),l(`progress-graph-line-indicator`,`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),l(`progress-graph-line-rail`,`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[l(`progress-graph-line-fill`,`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[n(`processing`,[r(`&::after`,`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),r(`@keyframes progress-processing-animation`,`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),T=u({name:`Progress`,props:Object.assign(Object.assign({},t.props),{processing:Boolean,type:{type:String,default:`line`},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:`default`},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:`%`},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:`outside`},indicatorPlacement:{type:String,default:`outside`},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),setup(e){let n=c(()=>e.indicatorPlacement||e.indicatorPosition),r=c(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type===`dashboard`)return 75}),{mergedClsPrefixRef:a,inlineThemeDisabled:o}=p(e),s=t(`Progress`,`-progress`,w,f,e,a),l=c(()=>{let{status:t}=e,{common:{cubicBezierEaseInOut:n},self:{fontSize:r,fontSizeCircle:a,railColor:o,railHeight:c,iconSizeCircle:l,iconSizeLine:u,textColorCircle:d,textColorLineInner:f,textColorLineOuter:p,lineBgProcessing:m,fontWeightCircle:h,[i(`iconColor`,t)]:g,[i(`fillColor`,t)]:_}}=s.value;return{"--n-bezier":n,"--n-fill-color":_,"--n-font-size":r,"--n-font-size-circle":a,"--n-font-weight-circle":h,"--n-icon-color":g,"--n-icon-size-circle":l,"--n-icon-size-line":u,"--n-line-bg-processing":m,"--n-rail-color":o,"--n-rail-height":c,"--n-text-color-circle":d,"--n-text-color-line-inner":f,"--n-text-color-line-outer":p}}),u=o?d(`progress`,c(()=>e.status[0]),l,e):void 0;return{mergedClsPrefix:a,mergedIndicatorPlacement:n,gapDeg:r,cssVars:o?void 0:l,themeClass:u?.themeClass,onRender:u?.onRender}},render(){let{type:e,cssVars:t,indicatorTextColor:n,showIndicator:r,status:i,railColor:a,railStyle:o,color:c,percentage:l,viewBoxWidth:u,strokeWidth:d,mergedIndicatorPlacement:f,unit:p,borderRadius:m,fillBorderRadius:h,height:g,processing:_,circleGap:v,mergedClsPrefix:b,gapDeg:S,gapOffsetDegree:w,themeClass:T,$slots:E,onRender:D}=this;return D?.(),s(`div`,{class:[T,`${b}-progress`,`${b}-progress--${e}`,`${b}-progress--${i}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,role:e===`circle`||e===`line`||e===`dashboard`?`progressbar`:`none`},e===`circle`||e===`dashboard`?s(y,{clsPrefix:b,status:i,showIndicator:r,indicatorTextColor:n,railColor:a,fillColor:c,railStyle:o,offsetDegree:this.offsetDegree,percentage:l,viewBoxWidth:u,strokeWidth:d,gapDegree:S===void 0?e===`dashboard`?75:0:S,gapOffsetDegree:w,unit:p},E):e===`line`?s(x,{clsPrefix:b,status:i,showIndicator:r,indicatorTextColor:n,railColor:a,fillColor:c,railStyle:o,percentage:l,processing:_,indicatorPlacement:f,unit:p,fillBorderRadius:h,railBorderRadius:m,height:g},E):e===`multiple-circle`?s(C,{clsPrefix:b,strokeWidth:d,railColor:a,fillColor:c,railStyle:o,viewBoxWidth:u,percentage:l,showIndicator:r,circleGap:v},E):null)}});export{T as t};