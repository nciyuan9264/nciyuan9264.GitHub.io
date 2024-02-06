import{ad as V,r as P,a as z,g as U,ae as N,s as y,e as u,_ as s,af as T,u as G,b as A,j as i,c as O,d as K,m as B,ag as Z,ah as q,C as H,x as J,B as Q,ai as X,t as L,aj as Y,S as k,T as S,L as E,i as $,D as oo,a0 as to,I as io,W as no}from"./index-f0a86d54.js";import{C as ro}from"./Card-acca9c44.js";import{T as D}from"./TextField-3dad62c1.js";import"./isMuiElement-bacf1854.js";import"./Select-1d811f49.js";function ao(){const t=V();return P.useMemo(()=>({back:()=>t(-1),forward:()=>t(1),reload:()=>window.location.reload(),push:n=>t(n),replace:n=>t(n,{replace:!0})}),[t])}function so(t){return z("MuiCircularProgress",t)}U("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const eo=["className","color","disableShrink","size","style","thickness","value","variant"];let M=t=>t,W,w,F,_;const g=44,lo=N(W||(W=M`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),co=N(w||(w=M`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),go=t=>{const{classes:o,variant:n,color:r,disableShrink:e}=t,a={root:["root",n,`color${u(r)}`],svg:["svg"],circle:["circle",`circle${u(n)}`,e&&"circleDisableShrink"]};return K(a,so,o)},uo=y("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.root,o[n.variant],o[`color${u(n.color)}`]]}})(({ownerState:t,theme:o})=>s({display:"inline-block"},t.variant==="determinate"&&{transition:o.transitions.create("transform")},t.color!=="inherit"&&{color:(o.vars||o).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&T(F||(F=M`
      animation: ${0} 1.4s linear infinite;
    `),lo)),ho=y("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,o)=>o.svg})({display:"block"}),xo=y("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.circle,o[`circle${u(n.variant)}`],n.disableShrink&&o.circleDisableShrink]}})(({ownerState:t,theme:o})=>s({stroke:"currentColor"},t.variant==="determinate"&&{transition:o.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&T(_||(_=M`
      animation: ${0} 1.4s ease-in-out infinite;
    `),co)),po=P.forwardRef(function(o,n){const r=G({props:o,name:"MuiCircularProgress"}),{className:e,color:a="primary",disableShrink:j=!1,size:h=40,style:R,thickness:d=3.6,value:x=0,variant:b="indeterminate"}=r,C=A(r,eo),p=s({},r,{color:a,disableShrink:j,size:h,thickness:d,value:x,variant:b}),f=go(p),m={},c={},v={};if(b==="determinate"){const I=2*Math.PI*((g-d)/2);m.strokeDasharray=I.toFixed(3),v["aria-valuenow"]=Math.round(x),m.strokeDashoffset=`${((100-x)/100*I).toFixed(3)}px`,c.transform="rotate(-90deg)"}return i.jsx(uo,s({className:O(f.root,e),style:s({width:h,height:h},c,R),ownerState:p,ref:n,role:"progressbar"},v,C,{children:i.jsx(ho,{className:f.svg,ownerState:p,viewBox:`${g/2} ${g/2} ${g} ${g}`,children:i.jsx(xo,{className:f.circle,style:m,ownerState:p,cx:g,cy:g,r:(g-d)/2,fill:"none",strokeWidth:d})})}))}),fo=po;function mo(t){return z("MuiLoadingButton",t)}const vo=U("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),l=vo,Io=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],Po=t=>{const{loading:o,loadingPosition:n,classes:r}=t,e={root:["root",o&&"loading"],startIcon:[o&&`startIconLoading${u(n)}`],endIcon:[o&&`endIconLoading${u(n)}`],loadingIndicator:["loadingIndicator",o&&`loadingIndicator${u(n)}`]},a=K(e,mo,r);return s({},r,a)},yo=t=>t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"&&t!=="classes",jo=y(B,{shouldForwardProp:t=>yo(t)||t==="classes",name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,o)=>[o.root,o.startIconLoadingStart&&{[`& .${l.startIconLoadingStart}`]:o.startIconLoadingStart},o.endIconLoadingEnd&&{[`& .${l.endIconLoadingEnd}`]:o.endIconLoadingEnd}]})(({ownerState:t,theme:o})=>s({[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0}},t.loadingPosition==="center"&&{transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),[`&.${l.loading}`]:{color:"transparent"}},t.loadingPosition==="start"&&t.fullWidth&&{[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginRight:-8}},t.loadingPosition==="end"&&t.fullWidth&&{[`& .${l.startIconLoadingStart}, & .${l.endIconLoadingEnd}`]:{transition:o.transitions.create(["opacity"],{duration:o.transitions.duration.short}),opacity:0,marginLeft:-8}})),bo=y("span",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,o)=>{const{ownerState:n}=t;return[o.loadingIndicator,o[`loadingIndicator${u(n.loadingPosition)}`]]}})(({theme:t,ownerState:o})=>s({position:"absolute",visibility:"visible",display:"flex"},o.loadingPosition==="start"&&(o.variant==="outlined"||o.variant==="contained")&&{left:o.size==="small"?10:14},o.loadingPosition==="start"&&o.variant==="text"&&{left:6},o.loadingPosition==="center"&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},o.loadingPosition==="end"&&(o.variant==="outlined"||o.variant==="contained")&&{right:o.size==="small"?10:14},o.loadingPosition==="end"&&o.variant==="text"&&{right:6},o.loadingPosition==="start"&&o.fullWidth&&{position:"relative",left:-10},o.loadingPosition==="end"&&o.fullWidth&&{position:"relative",right:-10})),Co=P.forwardRef(function(o,n){const r=P.useContext(Z),e=q(r,o),a=G({props:e,name:"MuiLoadingButton"}),{children:j,disabled:h=!1,id:R,loading:d=!1,loadingIndicator:x,loadingPosition:b="center",variant:C="text"}=a,p=A(a,Io),f=H(R),m=x??i.jsx(fo,{"aria-labelledby":f,color:"inherit",size:16}),c=s({},a,{disabled:h,loading:d,loadingIndicator:m,loadingPosition:b,variant:C}),v=Po(c),I=d?i.jsx(bo,{className:v.loadingIndicator,ownerState:c,children:m}):null;return i.jsxs(jo,s({disabled:h||d,id:f,ref:n},p,{variant:C,classes:v,ownerState:c,children:[c.loadingPosition==="end"?j:I,c.loadingPosition==="end"?I:j]}))}),Lo=Co;function ko(){const t=J(),o=ao(),[n,r]=P.useState(!1),e=()=>{o.push("/dashboard")},a=i.jsxs(i.Fragment,{children:[i.jsxs(k,{spacing:3,children:[i.jsx(D,{name:"email",label:"Email address"}),i.jsx(D,{name:"password",label:"Password",type:n?"text":"password",InputProps:{endAdornment:i.jsx(to,{position:"end",children:i.jsx(io,{onClick:()=>r(!n),edge:"end",children:i.jsx($,{icon:n?"eva:eye-fill":"eva:eye-off-fill"})})})}})]}),i.jsx(k,{direction:"row",alignItems:"center",justifyContent:"flex-end",sx:{my:3},children:i.jsx(E,{variant:"subtitle2",underline:"hover",children:"Forgot password?"})}),i.jsx(Lo,{fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"inherit",onClick:e,children:"Login"})]});return i.jsxs(Q,{sx:{...X({color:L(t.palette.background.default,.9),imgUrl:"/assets/background/overlay_4.jpg"}),height:1},children:[i.jsx(Y,{sx:{position:"fixed",top:{xs:16,md:24},left:{xs:16,md:24}}}),i.jsx(k,{alignItems:"center",justifyContent:"center",sx:{height:1},children:i.jsxs(ro,{sx:{p:5,width:1,maxWidth:420},children:[i.jsx(S,{variant:"h4",children:"Sign in to Minimal"}),i.jsxs(S,{variant:"body2",sx:{mt:2,mb:5},children:["Don’t have an account?",i.jsx(E,{variant:"subtitle2",sx:{ml:.5},children:"Get started"})]}),i.jsxs(k,{direction:"row",spacing:2,children:[i.jsx(B,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:L(t.palette.grey[500],.16)},children:i.jsx($,{icon:"eva:google-fill",color:"#DF3E30"})}),i.jsx(B,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:L(t.palette.grey[500],.16)},children:i.jsx($,{icon:"eva:facebook-fill",color:"#1877F2"})}),i.jsx(B,{fullWidth:!0,size:"large",color:"inherit",variant:"outlined",sx:{borderColor:L(t.palette.grey[500],.16)},children:i.jsx($,{icon:"eva:twitter-fill",color:"#1C9CEA"})})]}),i.jsx(oo,{sx:{my:3},children:i.jsx(S,{variant:"body2",sx:{color:"text.secondary"},children:"OR"})}),a]})})]})}function Eo(){return i.jsxs(i.Fragment,{children:[i.jsx(no,{children:i.jsx("title",{children:" Login | Minimal UI "})}),i.jsx(ko,{})]})}export{Eo as default};