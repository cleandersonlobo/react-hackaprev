(this["webpackJsonpreact-hackaprev"]=this["webpackJsonpreact-hackaprev"]||[]).push([[5],{134:function(t,e,a){"use strict";var n=a(2),i=a(1),r=a(0),o=(a(4),a(3)),c=a(5),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(t);return"".concat(a/e).concat(String(t).replace(String(a),"")||"px")}var p=r.forwardRef((function(t,e){var a=t.alignContent,c=void 0===a?"stretch":a,s=t.alignItems,l=void 0===s?"stretch":s,g=t.classes,p=t.className,d=t.component,m=void 0===d?"div":d,f=t.container,u=void 0!==f&&f,h=t.direction,x=void 0===h?"row":h,y=t.item,v=void 0!==y&&y,A=t.justify,I=void 0===A?"flex-start":A,b=t.lg,C=void 0!==b&&b,w=t.md,j=void 0!==w&&w,W=t.sm,S=void 0!==W&&W,O=t.spacing,k=void 0===O?0:O,M=t.wrap,P=void 0===M?"wrap":M,U=t.xl,N=void 0!==U&&U,z=t.xs,q=void 0!==z&&z,E=t.zeroMinWidth,B=void 0!==E&&E,Y=Object(n.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),R=Object(o.a)(g.root,p,u&&[g.container,0!==k&&g["spacing-xs-".concat(String(k))]],v&&g.item,B&&g.zeroMinWidth,"row"!==x&&g["direction-xs-".concat(String(x))],"wrap"!==P&&g["wrap-xs-".concat(String(P))],"stretch"!==l&&g["align-items-xs-".concat(String(l))],"stretch"!==c&&g["align-content-xs-".concat(String(c))],"flex-start"!==I&&g["justify-xs-".concat(String(I))],!1!==q&&g["grid-xs-".concat(String(q))],!1!==S&&g["grid-sm-".concat(String(S))],!1!==j&&g["grid-md-".concat(String(j))],!1!==C&&g["grid-lg-".concat(String(C))],!1!==N&&g["grid-xl-".concat(String(N))]);return r.createElement(m,Object(i.a)({className:R,ref:e},Y))})),d=Object(c.a)((function(t){return Object(i.a)(Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var a={};return s.forEach((function(n){var i=t.spacing(n);0!==i&&(a["spacing-".concat(e,"-").concat(n)]={margin:"-".concat(g(i,2)),width:"calc(100% + ".concat(g(i),")"),"& > $item":{padding:g(i,2)}})})),a}(t,"xs")),t.breakpoints.keys.reduce((function(e,a){return function(t,e,a){var n={};l.forEach((function(t){var e="grid-".concat(a,"-").concat(t);if(!0!==t)if("auto"!==t){var i="".concat(Math.round(t/12*1e8)/1e6,"%");n[e]={flexBasis:i,flexGrow:0,maxWidth:i}}else n[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(i.a)(t,n):t[e.breakpoints.up(a)]=n}(e,t,a),e}),{}))}),{name:"MuiGrid"})(p);e.a=d},135:function(t,e,a){"use strict";var n=a(1),i=a(2),r=a(0),o=(a(4),a(3)),c=a(5),s=a(13),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},g=r.forwardRef((function(t,e){var a=t.align,c=void 0===a?"inherit":a,g=t.classes,p=t.className,d=t.color,m=void 0===d?"initial":d,f=t.component,u=t.display,h=void 0===u?"initial":u,x=t.gutterBottom,y=void 0!==x&&x,v=t.noWrap,A=void 0!==v&&v,I=t.paragraph,b=void 0!==I&&I,C=t.variant,w=void 0===C?"body1":C,j=t.variantMapping,W=void 0===j?l:j,S=Object(i.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),O=f||(b?"p":W[w]||l[w])||"span";return r.createElement(O,Object(n.a)({className:Object(o.a)(g.root,p,"inherit"!==w&&g[w],"initial"!==m&&g["color".concat(Object(s.a)(m))],A&&g.noWrap,y&&g.gutterBottom,b&&g.paragraph,"inherit"!==c&&g["align".concat(Object(s.a)(c))],"initial"!==h&&g["display".concat(Object(s.a)(h))]),ref:e},S))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(g)},68:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),r=a(116),o=a(134),c=a(118),s=a(135),l=a(29),g=[{name:"Submarino",discont:"15%",img:"data:image/png;base64,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"},{name:"Americanas",discont:"10%",img:"https://cuponomia-a.akamaihd.net/img/stores/original/americanas-637195380182765939.png"},{name:"Magalu",discont:"3%",img:"https://media.glassdoor.com/sqll/382606/magazine-luiza-squarelogo-1564520166281.png"},{name:"Kabum",discont:"5%",img:"https://imagens.canaltech.com.br/empresas/5193.400.jpg"},{name:"Amazon",discont:"5%",img:"https://cdn-istoedinheiro-ssl.akamaized.net/wp-content/uploads/sites/17/2018/08/amazon-1024x683.png"}];e.default=function(){return i.a.createElement(r.a,null,i.a.createElement("h2",null,"Lojas em destaque"),i.a.createElement(o.a,{container:!0,spacing:2,alignItems:"stretch",direction:"row"},g.map((function(t){return i.a.createElement(o.a,{key:t.name,item:!0,xs:4,sm:4,md:2,lg:1},i.a.createElement(l.a,null,i.a.createElement(c.a,{display:"flex",alignItems:"stretch",height:"100%",maxHeight:120},i.a.createElement(l.c,{src:t.img,alt:t.name,draggable:"false"})),i.a.createElement("div",{className:"card-details"},i.a.createElement(s.a,null,t.discont),i.a.createElement(s.a,null,"de volta"))))}))))}}}]);
//# sourceMappingURL=5.9ab14e65.chunk.js.map