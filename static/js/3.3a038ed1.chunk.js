(this["webpackJsonpreact-hackaprev"]=this["webpackJsonpreact-hackaprev"]||[]).push([[3],{120:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return l}));var n=a(123),r=a.n(n),o=a(122),c=a.n(o);a(124);c.a.locale("pt-br");var i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"BRL",a={BRL:function(e){return r()(e,{symbol:"R$ ",separator:".",decimal:",",precision:2,formatWithSymbol:!0})},USD:function(e){return r()(e,{symbol:"$ ",separator:".",decimal:",",precision:2})}}[t];return a(e).format()},s=function(e){var t=0,a=0;return e.forEach((function(e){var n=e.seller_feedback_score,r=e.price_value,o=e.cashback_percentage;t+=r*o,a+=n})),{cashback_amount:i(t),average_feedback_score:a/e.length}},l=function(e){return c()(e).format("DD MMM YYYY").toUpperCase()}},121:function(e,t,a){"use strict";var n=a(0),r=n.createContext({});t.a=r},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1),c=a(2),i=(a(4),a(3)),s=a(5),l=a(62);var d=a(30),u=a(121),m=a(22),f="undefined"===typeof window?n.useEffect:n.useLayoutEffect,p=n.forwardRef((function(e,t){var a=e.alignItems,r=void 0===a?"center":a,s=e.autoFocus,p=void 0!==s&&s,b=e.button,g=void 0!==b&&b,v=e.children,h=e.classes,y=e.className,E=e.component,j=e.ContainerComponent,x=void 0===j?"li":j,O=e.ContainerProps,N=(O=void 0===O?{}:O).className,k=Object(c.a)(O,["className"]),C=e.dense,S=void 0!==C&&C,w=e.disabled,I=void 0!==w&&w,R=e.disableGutters,_=void 0!==R&&R,z=e.divider,F=void 0!==z&&z,M=e.focusVisibleClassName,A=e.selected,D=void 0!==A&&A,L=Object(c.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),V=n.useContext(u.a),P={dense:S||V.dense||!1,alignItems:r},W=n.useRef(null);f((function(){p&&W.current&&W.current.focus()}),[p]);var $,B,T=n.Children.toArray(v),Y=T.length&&($=T[T.length-1],B=["ListItemSecondaryAction"],n.isValidElement($)&&-1!==B.indexOf($.type.muiName)),G=n.useCallback((function(e){W.current=m.findDOMNode(e)}),[]),J=Object(d.a)(G,t),U=Object(o.a)({className:Object(i.a)(h.root,y,P.dense&&h.dense,!_&&h.gutters,F&&h.divider,I&&h.disabled,g&&h.button,"center"!==r&&h.alignItemsFlexStart,Y&&h.secondaryAction,D&&h.selected),disabled:I},L),q=E||"li";return g&&(U.component=E||"div",U.focusVisibleClassName=Object(i.a)(h.focusVisible,M),q=l.a),Y?(q=U.component||E?q:"div","li"===x&&("li"===q?q="div":"li"===U.component&&(U.component="div")),n.createElement(u.a.Provider,{value:P},n.createElement(x,Object(o.a)({className:Object(i.a)(h.container,N),ref:J},k),n.createElement(q,U,T),T.pop()))):n.createElement(u.a.Provider,{value:P},n.createElement(q,Object(o.a)({ref:J},U),T))})),b=Object(s.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(p),g=n.forwardRef((function(e,t){var a=e.classes,r=e.className,s=Object(c.a)(e,["classes","className"]),l=n.useContext(u.a);return n.createElement("div",Object(o.a)({className:Object(i.a)(a.root,r,"flex-start"===l.alignItems&&a.alignItemsFlexStart),ref:t},s))})),v=Object(s.a)({root:{minWidth:56,flexShrink:0},alignItemsFlexStart:{marginTop:8}},{name:"MuiListItemAvatar"})(g),h=a(35);var y=function(e,t){var a=r.a.memo(r.a.forwardRef((function(t,a){return r.a.createElement(h.a,Object(o.a)({ref:a},t),e)})));return a.muiName=h.a.muiName,a}(n.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));var E=n.forwardRef((function(e,t){var a=e.alt,r=e.children,s=e.classes,l=e.className,d=e.component,u=void 0===d?"div":d,m=e.imgProps,f=e.sizes,p=e.src,b=e.srcSet,g=e.variant,v=void 0===g?"circle":g,h=Object(c.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=null,j=function(e){var t=e.src,a=e.srcSet,r=n.useState(!1),o=r[0],c=r[1];return n.useEffect((function(){if(t||a){c(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&c("loaded")},n.onerror=function(){e&&c("error")},function(){e=!1}}}),[t,a]),o}({src:p,srcSet:b}),x=p||b,O=x&&"error"!==j;return E=O?n.createElement("img",Object(o.a)({alt:a,src:p,srcSet:b,sizes:f,className:s.img},m)):null!=r?r:x&&a?a[0]:n.createElement(y,{className:s.fallback}),n.createElement(u,Object(o.a)({className:Object(i.a)(s.root,s.system,s[v],l,!O&&s.colorDefault),ref:t},h),E)})),j=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(E),x=a(117),O=a(28);var N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(x.a)(e,Object(o.a)({defaultTheme:O.a},t))},k=a(135),C=a(134),S=a(120),w=N((function(e){return{root:{flexGrow:1},category:{fontSize:"0.9em",color:e.palette.text.secondary},product:{fontSize:"1.1em",fontWeight:"bold"},price:{fontWeight:"bold"},percentage:{fontWeight:"bold",fontSize:"0.9em",color:e.palette.success.main}}}));t.default=function(e){var t=e.transaction,a=w(),o=t.product,c=t.category,i=t.cashback_percentage,s=t.price_currency,l=t.price_value,d=t.seller_feedback_score,u=t.date,m=Object(n.useMemo)((function(){return Object(S.b)(l,s)}),[]),f=Object(n.useMemo)((function(){return Object(S.c)(u)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{container:!0,style:{paddingLeft:20,paddingRight:20},justify:"space-between"},r.a.createElement(C.a,{item:!0},r.a.createElement(k.a,{component:"p",align:"right",className:a.category},f)),r.a.createElement(C.a,{item:!0},r.a.createElement(k.a,{component:"p",align:"right",className:a.category},"+",d," pontos"))),r.a.createElement(b,null,r.a.createElement(v,null,r.a.createElement(j,{alt:c},c.charAt(0))),r.a.createElement(C.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(C.a,{item:!0,xs:6,lg:"auto"},r.a.createElement(k.a,{component:"p",noWrap:!0,className:a.category},c),r.a.createElement(k.a,{component:"p",className:a.product},o)),r.a.createElement(C.a,{item:!0},r.a.createElement(k.a,{component:"p",align:"right",className:a.price},m),r.a.createElement(k.a,{component:"p",align:"right",className:a.percentage},i,"% de volta")))))}}}]);
//# sourceMappingURL=3.3a038ed1.chunk.js.map