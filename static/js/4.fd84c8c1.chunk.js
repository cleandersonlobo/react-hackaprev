(this["webpackJsonpreact-hackaprev"]=this["webpackJsonpreact-hackaprev"]||[]).push([[4,5,7],{120:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return c}));var n=a(121),r=a.n(n),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"BRL",a={BRL:function(e){return r()(e,{symbol:"R$ ",separator:".",decimal:",",precision:2,formatWithSymbol:!0})},USD:function(e){return r()(e,{symbol:"$ ",separator:".",decimal:",",precision:2})}}[t];return a(e).format()},c=function(e){var t=0,a=0;return e.forEach((function(e){var n=e.seller_feedback_score,r=e.price_value,o=e.cashback_percentage;t+=r*o,a+=n})),{cashback_amount:o(t),average_feedback_score:a/e.length}}},63:function(e,t,a){"use strict";a.r(t),a.d(t,"BoxDivider",(function(){return o}));var n=a(15);function r(){var e=Object(n.a)(["\n  display: flex;\n  height: 30px;\n  width: 56px;\n  justify-content: center;\n  padding-left: 16px;\n  :last-child {\n    display: none;\n  }\n"]);return r=function(){return e},e}var o=a(16).a.div(r())},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(141),c=a(138),i=a(140),l=a(137),s=a(139),d=a(125),u=a(120),m=Object(l.a)((function(e){return{root:{flexGrow:1},category:{fontSize:"0.9em",color:e.palette.text.secondary},product:{fontSize:"1.1em",fontWeight:"bold"},price:{fontWeight:"bold"},percentage:{fontWeight:"bold",fontSize:"0.9em",color:e.palette.success.dark}}}));t.default=function(e){var t=e.transaction,a=m(),l=t.product,p=t.category,f=t.cashback_percentage,g=t.price_currency,h=t.price_value,v=Object(n.useMemo)((function(){return Object(u.b)(h,g)}),[h]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{button:!0},r.a.createElement(c.a,null,r.a.createElement(i.a,{alt:p},p.charAt(0))),r.a.createElement(d.a,{container:!0,direction:"row",justify:"space-between"},r.a.createElement(d.a,{item:!0,xs:6,lg:"auto"},r.a.createElement(s.a,{component:"p",noWrap:!0,color:"light",className:a.category},p),r.a.createElement(s.a,{component:"p",className:a.product},l)),r.a.createElement(d.a,{item:!0},r.a.createElement(s.a,{component:"p",align:"right",className:a.price},v),r.a.createElement(s.a,{component:"p",align:"right",className:a.percentage},f,"% de volta")))))}},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(1),c=a(2),i=(a(4),a(3)),l=a(5),s=a(122),d=n.forwardRef((function(e,t){var a=e.children,r=e.classes,l=e.className,d=e.component,u=void 0===d?"ul":d,m=e.dense,p=void 0!==m&&m,f=e.disablePadding,g=void 0!==f&&f,h=e.subheader,v=Object(c.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),b=n.useMemo((function(){return{dense:p}}),[p]);return n.createElement(s.a.Provider,{value:b},n.createElement(u,Object(o.a)({className:Object(i.a)(r.root,l,p&&r.dense,!g&&r.padding,h&&r.subheader),ref:t},v),h,a))})),u=Object(l.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(d),m=a(18),p=n.forwardRef((function(e,t){var a=e.absolute,r=void 0!==a&&a,l=e.classes,s=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,p=void 0!==m&&m,f=e.light,g=void 0!==f&&f,h=e.orientation,v=void 0===h?"horizontal":h,b=e.role,E=void 0===b?"hr"!==u?"separator":void 0:b,j=e.variant,x=void 0===j?"fullWidth":j,k=Object(c.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(u,Object(o.a)({className:Object(i.a)(l.root,s,"fullWidth"!==x&&l[x],r&&l.absolute,p&&l.flexItem,g&&l.light,"vertical"===v&&l.vertical),role:E,ref:t},k))})),f=Object(l.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(m.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(p),g=a(42),h=a(63),v=a(64);t.default=function(){var e=Object(n.useContext)(g.a).client,t=void 0===e?null:e;if(!t)return null;var a=t.transactions;return r.a.createElement(u,null,a.map((function(e){return r.a.createElement(r.a.Fragment,{key:"".concat(e.product,"-").concat(e.date)},r.a.createElement(v.default,{transaction:e}),r.a.createElement(h.BoxDivider,null,r.a.createElement(f,{orientation:"vertical"})))})))}}}]);
//# sourceMappingURL=4.fd84c8c1.chunk.js.map