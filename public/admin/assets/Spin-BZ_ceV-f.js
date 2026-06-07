import{a as e}from"./Tag-BSf8rGbY.js";import{Et as t,Hr as n,Ii as r,Mr as i,Or as a,Pr as o,Tr as s,di as c,ei as l,ft as u,ki as d,kr as f,li as p,mt as m,on as h,pt as g,sn as _,u as v}from"./index-D7-2mGpy.js";var y=a([a(`@keyframes spin-rotate`,`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),f(`spin-container`,`
 position: relative;
 `,[f(`spin-body`,`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[u()])]),f(`spin-body`,`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),f(`spin`,`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[i(`rotate`,`
 animation: spin-rotate 2s linear infinite;
 `)]),f(`spin-description`,`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),f(`spin-content`,`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[i(`spinning`,`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),b={small:20,medium:18,large:16},x=p({name:`Spin`,props:Object.assign(Object.assign(Object.assign({},t.props),{contentClass:String,contentStyle:[Object,String],description:String,size:{type:[String,Number],default:`medium`},show:{type:Boolean,default:!0},rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),m),slots:Object,setup(n){let{mergedClsPrefixRef:i,inlineThemeDisabled:a}=_(n),c=t(`Spin`,`-spin`,y,v,n,i),u=l(()=>{let{size:e}=n,{common:{cubicBezierEaseInOut:t},self:r}=c.value,{opacitySpinning:i,color:a,textColor:l}=r;return{"--n-bezier":t,"--n-opacity-spinning":i,"--n-size":typeof e==`number`?s(e):r[o(`size`,e)],"--n-color":a,"--n-text-color":l}}),f=a?h(`spin`,l(()=>{let{size:e}=n;return typeof e==`number`?String(e):e[0]}),u,n):void 0,p=e(n,[`spinning`,`show`]),m=r(!1);return d(e=>{let t;if(p.value){let{delay:r}=n;if(r){t=window.setTimeout(()=>{m.value=!0},r),e(()=>{clearTimeout(t)});return}}m.value=p.value}),{mergedClsPrefix:i,active:m,mergedStrokeWidth:l(()=>{let{strokeWidth:e}=n;if(e!==void 0)return e;let{size:t}=n;return b[typeof t==`number`?`medium`:t]}),cssVars:a?void 0:u,themeClass:f?.themeClass,onRender:f?.onRender}},render(){var e;let{$slots:t,mergedClsPrefix:r,description:i}=this,a=t.icon&&this.rotate,o=(i||t.description)&&c(`div`,{class:`${r}-spin-description`},i||t.description?.call(t)),s=t.icon?c(`div`,{class:[`${r}-spin-body`,this.themeClass]},c(`div`,{class:[`${r}-spin`,a&&`${r}-spin--rotate`],style:t.default?``:this.cssVars},t.icon()),o):c(`div`,{class:[`${r}-spin-body`,this.themeClass]},c(g,{clsPrefix:r,style:t.default?``:this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,radius:this.radius,scale:this.scale,class:`${r}-spin`}),o);return(e=this.onRender)==null||e.call(this),t.default?c(`div`,{class:[`${r}-spin-container`,this.themeClass],style:this.cssVars},c(`div`,{class:[`${r}-spin-content`,this.active&&`${r}-spin-content--spinning`,this.contentClass],style:this.contentStyle},t),c(n,{name:`fade-in-transition`},{default:()=>this.active?s:null})):s}});export{x as t};