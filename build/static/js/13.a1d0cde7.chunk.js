(this.webpackJsonpfrontcrivo=this.webpackJsonpfrontcrivo||[]).push([[13],{130:function(e,t,a){"use strict";var n=a(41),c=a(42),r=a(44),l=a(43),o=a(1),i=a.n(o),s=a(24),m=a(2),u=a.n(m),p=a(39),d=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.heading,a=e.icon,n=e.subheading,c=e.bgcolor,r=e.color;return i.a.createElement("div",{className:"app-page-title ".concat(c," text-white")},i.a.createElement("div",{className:"page-title-wrapper"},i.a.createElement("div",{className:"page-title-heading"},i.a.createElement("div",{className:[u()("page-title-icon"),"pl-3","text-".concat(r)].join(" ")},i.a.createElement(p.a,{icon:a})),i.a.createElement("div",null,t,i.a.createElement("div",{className:u()("page-title-subheading")},n)))))}}]),a}(o.Component);t.a=Object(s.connect)((function(e){return{enablePageTitleIcon:e.ThemeOptions.enablePageTitleIcon,enablePageTitleSubheading:e.ThemeOptions.enablePageTitleSubheading}}),(function(e){return{}}))(d)},148:function(e,t,a){"use strict";var n=a(1),c=a.n(n);t.a=function(e){return c.a.createElement("div",{className:"mb-3 card card-body ".concat(e.bgColor)},c.a.createElement("h4",{className:"cart-title ".concat(e.titleStyle)},e.title),c.a.createElement("p",null,e.comentary),e.children)}},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(32);var c=a(55);function r(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},629:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(18),l=a(16),o=a(130),i=a(40),s=a(148),m=a(129),u=a.n(m),p=a(14),d=a(12),b=a(38),E=Object(n.memo)((function(e){return c.a.createElement("div",{className:"loading-adv-search"},c.a.createElement("div",{className:"sk-folding-cube"},c.a.createElement("div",{className:"sk-cube1 sk-cube"}),c.a.createElement("div",{className:"sk-cube2 sk-cube"}),c.a.createElement("div",{className:"sk-cube4 sk-cube"}),c.a.createElement("div",{className:"sk-cube3 sk-cube"})),c.a.createElement("p",{className:"text-center enfase"},"Isso pode demorar um pouco..."),c.a.createElement("p",{className:"text-center"},"(mas vai valer a pena!)"))})),v=a(190),g=a(39),f=Object(r.e)((function(e){var t=e.fiis,a=Object(n.useState)(null),r=Object(l.a)(a,2),o=r[0],i=r[1],s=Object(v.a)(t),m=function(e){var t=o&&o.key===e&&"ascending"===o.direction?"descending":"ascending";i({key:e,direction:t})};o&&s.sort((function(e,t){return e[o.key]<t[o.key]?"ascending"===o.direction?-1:1:e[o.key]>t[o.key]?"ascending"===o.direction?1:-1:0}));var u=function(e){return o&&o.key===e?o&&o.key===e&&"ascending"===o.direction?c.a.createElement(g.a,{icon:"sort-up"}):o&&o.key===e&&"descending"===o.direction?c.a.createElement(g.a,{icon:"sort-down"}):void 0:c.a.createElement(g.a,{icon:"sort"})};return e.fiis&&c.a.createElement("div",{className:"over"},c.a.createElement("table",{className:"table table-striped text-center table-hover"},c.a.createElement("caption",null,"Lista de fundos"),c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col",className:o&&"codfii"===o.key?"table-primary":"",onClick:function(){return m("codfii")}},"C\xf3digo",c.a.createElement("br",null),u("codfii")),c.a.createElement("th",{scope:"col",className:o&&"razao_social"===o.key?"table-primary":"",onClick:function(){return m("razao_social")}},"Nome",c.a.createElement("br",null),u("razao_social")),c.a.createElement("th",{scope:"col",className:o&&"descricao"===o.key?"table-primary":"",onClick:function(){return m("descricao")}},"Segmento",c.a.createElement("br",null),u("descricao")),c.a.createElement("th",{scope:"col",className:o&&"cotacao"===o.key?"table-primary":"",onClick:function(){return m("cotacao")}},"Cota\xe7\xe3o",c.a.createElement("br",null),u("cotacao")),c.a.createElement("th",{scope:"col",className:o&&"tipo_gestao"===o.key?"table-primary":"",onClick:function(){return m("tipo_gestao")}},"Gest\xe3o",c.a.createElement("br",null),u("tipo_gestao")),c.a.createElement("th",{scope:"col",className:o&&"pat_liq"===o.key?"table-primary":"",onClick:function(){return m("pat_liq")}},"Pat. L\xedq",c.a.createElement("br",null),u("pat_liq")),c.a.createElement("th",{scope:"col",className:o&&"valor_mercado"===o.key?"table-primary":"",onClick:function(){return m("valor_mercado")}},"Valor de Mercado",c.a.createElement("br",null),u("valor_mercado")),c.a.createElement("th",{scope:"col",className:o&&"numero_negocios"===o.key?"table-primary":"",onClick:function(){return m("numero_negocios")}},"Neg\xf3cios",c.a.createElement("br",null),u("numero_negocios")),c.a.createElement("th",{scope:"col",className:o&&"bens_qtt"===o.key?"table-primary":"",onClick:function(){return m("bens_qtt")}},"Ativos F\xeds.",c.a.createElement("br",null),u("bens_qtt")),c.a.createElement("th",{scope:"col",className:o&&"dy_medio"===o.key?"table-primary":"",onClick:function(){return m("dy_medio")}},"Yield",c.a.createElement("br",null),u("dy")),c.a.createElement("th",{scope:"col",className:o&&"pvp"===o.key?"table-primary":"",onClick:function(){return m("pvp")}},"P/VP",c.a.createElement("br",null),u("pvp")),c.a.createElement("th",{scope:"col",className:o&&"vpc"===o.key?"table-primary":"",onClick:function(){return m("vpc")}},"VPC",c.a.createElement("br",null),u("vpc")))),c.a.createElement("tbody",null,s.length>0?c.a.createElement(n.Fragment,null,s.map((function(t,a){return c.a.createElement("tr",{key:a,onClick:function(){return a=t.codfii,void e.history.push("/".concat(a,"/profile"));var a},className:"link"},c.a.createElement("th",{scope:"row",className:o&&"codfii"===o.key?"table-primary":""},t.codfii),c.a.createElement("td",{className:o&&"razao_social"===o.key?"table-primary":""},t.razao_social),c.a.createElement("td",{className:o&&"descricao"===o.key?"table-primary":""},t.descricao),c.a.createElement("td",{className:o&&"cotacao"===o.key?"table-primary":""},t.cotacao?Object(b.j)(t.cotacao):"N/A"),c.a.createElement("td",{className:o&&"tipo_gestao"===o.key?"table-primary":""},t.tipo_gestao?"Ativa":"Passiva"),c.a.createElement("td",{className:o&&"pat_liq"===o.key?"table-primary":""},Object(b.v)(t.pat_liq)),c.a.createElement("td",{className:o&&"valor_mercado"===o.key?"table-primary":""},t.valor_mercado?Object(b.v)(t.valor_mercado):"N/A"),c.a.createElement("td",{className:o&&"numero_negocios"===o.key?"table-primary":""},t.numero_negocios?Object(b.b)(t.numero_negocios):"N/A"),c.a.createElement("td",{className:o&&"bens_qtt"===o.key?"table-primary":""},t.bens_qtt?Object(b.b)(t.bens_qtt):0),c.a.createElement("td",{className:o&&"dy_medio"===o.key?"table-primary":""},t.dy_medio?Object(b.p)(t.dy_medio):0),c.a.createElement("td",{className:o&&"pvp"===o.key?"table-primary":""},t.pvp?Object(b.e)(t.pvp):0),c.a.createElement("td",{className:o&&"vpc"===o.key?"table-primary":""},t.vpc?Object(b.j)(t.vpc):0))}))):c.a.createElement(n.Fragment,null,c.a.createElement("td",{className:"table-danger",colSpan:"12"},"Nenhum fundo atende aos crit\xe9rios.")))))})),y=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),r=a[0],m=a[1],v=Object(n.useState)(),g=Object(l.a)(v,2),y=g[0],h=g[1],j=Object(n.useState)(!1),N=Object(l.a)(j,2),O=N[0],k=N[1],C=Object(n.useState)(!1),_=Object(l.a)(C,2),x=_[0],S=_[1],q=Object(n.useState)(""),P=Object(l.a)(q,2),w=P[0],M=P[1],A=Object(n.useState)(""),F=Object(l.a)(A,2),R=F[0],$=F[1],T=Object(n.useState)("Pesquisar"),V=Object(l.a)(T,2),z=V[0],L=V[1],B=Object(n.useState)(!1),I=Object(l.a)(B,2),G=I[0],Y=I[1],Q=Object(n.useState)(!1),D=Object(l.a)(Q,2),J=D[0],H=D[1],K=Object(n.useState)(!1),U=Object(l.a)(K,2),W=U[0],X=U[1],Z=Object(n.useState)(!1),ee=Object(l.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(!1),ce=Object(l.a)(ne,2),re=ce[0],le=ce[1],oe=Object(n.useState)(!1),ie=Object(l.a)(oe,2),se=ie[0],me=ie[1],ue=Object(n.useState)(!1),pe=Object(l.a)(ue,2),de=pe[0],be=pe[1],Ee=Object(n.useState)(!1),ve=Object(l.a)(Ee,2),ge=ve[0],fe=ve[1],ye=Object(n.useState)(!1),he=Object(l.a)(ye,2),je=he[0],Ne=he[1],Oe=Object(n.useState)(">="),ke=Object(l.a)(Oe,2),Ce=ke[0],_e=ke[1],xe=Object(n.useState)(0),Se=Object(l.a)(xe,2),qe=Se[0],Pe=Se[1],we=Object(n.useState)(1),Me=Object(l.a)(we,2),Ae=Me[0],Fe=Me[1],Re=Object(n.useState)([2]),$e=Object(l.a)(Re,2),Te=$e[0],Ve=$e[1],ze=Object(n.useState)(">="),Le=Object(l.a)(ze,2),Be=Le[0],Ie=Le[1],Ge=Object(n.useState)(10),Ye=Object(l.a)(Ge,2),Qe=Ye[0],De=Ye[1],Je=Object(n.useState)(">="),He=Object(l.a)(Je,2),Ke=He[0],Ue=He[1],We=Object(n.useState)(1e8),Xe=Object(l.a)(We,2),Ze=Xe[0],et=Xe[1],tt=Object(n.useState)(">="),at=Object(l.a)(tt,2),nt=at[0],ct=at[1],rt=Object(n.useState)(1),lt=Object(l.a)(rt,2),ot=lt[0],it=lt[1],st=Object(n.useState)(">="),mt=Object(l.a)(st,2),ut=mt[0],pt=mt[1],dt=Object(n.useState)(50),bt=Object(l.a)(dt,2),Et=bt[0],vt=bt[1],gt=Object(n.useState)(">="),ft=Object(l.a)(gt,2),yt=ft[0],ht=ft[1],jt=Object(n.useState)(2),Nt=Object(l.a)(jt,2),Ot=Nt[0],kt=Nt[1];Object(n.useEffect)((function(){k(!0),i.a.get("/segmento").then((function(e){k(!1),h(e.data.segmentos)})).catch((function(e){k(!1),M(e.response.data.message||"Ops, um erro ocorreu!")}))}),[]);return c.a.createElement(n.Fragment,null,!w&&c.a.createElement(u.a,{component:"div",transitionName:"TabsAnimation",transitionAppear:!0,transitionAppearTimeout:0,transitionEnter:!1,transitionLeave:!1},c.a.createElement(n.Fragment,null,c.a.createElement(o.a,{heading:"Pesquisa avan\xe7ada de fundos imobili\xe1rios",subheading:"",icon:"pe-7s-search",bgcolor:"bg-royal",color:"dark"}),c.a.createElement("div",{className:"row"},c.a.createElement(s.a,{className:"col-12"},c.a.createElement("div",{className:"mb-4"},c.a.createElement("input",{className:"form-control mb-1",type:"text",placeholder:"Procure por nome ou c\xf3digo...","aria-label":"procurar",value:R,onChange:function(e){return $(e.target.value)}}),c.a.createElement("div",null,c.a.createElement("button",{className:"mb-2 mr-2 border-0 btn-transition btn btn-outline-alternate",onClick:function(){return Y((function(e){return!e}))}},"Pesquisa avan\xe7ada")),G&&c.a.createElement("div",{className:"text-center mb-4"},c.a.createElement(d.b,{className:"flex-wrap",size:"lg"},c.a.createElement(d.a,{color:"alternate",onClick:function(){return H((function(e){return!e}))},active:J},"Yield m\xe9dio"),c.a.createElement(d.a,{color:"danger",onClick:function(){return X((function(e){return!e}))},active:W},"Segmentos"),c.a.createElement(d.a,{color:"primary",onClick:function(){return ae((function(e){return!e}))},active:te},"Neg\xf3cios"),c.a.createElement(d.a,{color:"success",onClick:function(){return le((function(e){return!e}))},active:re},"Pat. L\xedquido"),c.a.createElement(d.a,{color:"warning",onClick:function(){return me((function(e){return!e}))},active:se},"P/VP"),c.a.createElement(d.a,{color:"secondary",onClick:function(){return be((function(e){return!e}))},active:de},"VPC"),c.a.createElement(d.a,{color:"dark",onClick:function(){return fe((function(e){return!e}))},active:ge},"At. F\xedsicos"),c.a.createElement(d.a,{color:"info",onClick:function(){return Ne((function(e){return!e}))},active:je},"Gest\xe3o"))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"row"},G&&c.a.createElement(n.Fragment,null,J&&c.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2"},c.a.createElement(d.c,{body:!0,inverse:!0,color:"alternate"},c.a.createElement(d.f,{className:"text-white text-center"},"Dividend Yeld M\xe9dio (mensal)"),c.a.createElement(d.j,{type:"select",value:Ce,onChange:function(e){return _e(e.target.value)}},c.a.createElement("option",{value:">="},"Maior que"),c.a.createElement("option",{value:"<="},"Menor que")),c.a.createElement(d.j,{type:"range",min:"0",max:"2",step:"0.1",value:qe,onChange:function(e){return Pe(e.target.value)}}),c.a.createElement("h4",{className:"text-center enfase"},qe,"%"))),W&&y&&c.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2"},c.a.createElement(d.c,{body:!0,inverse:!0,color:"danger"},c.a.createElement(d.f,{className:"text-white text-center"},"Segmentos"),c.a.createElement(d.j,{type:"select",multiple:!0,value:Te,onChange:function(e){if(e.target.options){for(var t=[],a=0;a<e.target.options.length;a++)e.target.options[a].selected&&t.push(e.target.options[a].value);Ve(t)}}},y.map((function(e){return c.a.createElement("option",{value:e.segmento_fii_id,key:"seg".concat(e.segmento_fii_id)},e.descricao)}))))),te&&c.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2"},c.a.createElement(d.c,{body:!0,inverse:!0,color:"primary"},c.a.createElement(d.f,{className:"text-white text-center"},"Quantidade de neg\xf3cios"),c.a.createElement(d.j,{type:"select",value:Be,onChange:function(e){return Ie(e.target.value)}},c.a.createElement("option",{value:">="},"Mais que"),c.a.createElement("option",{value:"<="},"Menos que")),c.a.createElement(d.j,{type:"select",className:"mt-2",value:Qe,onChange:function(e){return De(e.target.value)}},c.a.createElement("option",{value:"10"},"10 por dia"),c.a.createElement("option",{value:"25"},"30 por dia"),c.a.createElement("option",{value:"50"},"50 por dia"),c.a.createElement("option",{value:"100"},"100 por dia"),c.a.createElement("option",{value:"250"},"250 por dia"),c.a.createElement("option",{value:"500"},"500 por dia"),c.a.createElement("option",{value:"1000"},"1000 por dia")))),re&&c.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2"},c.a.createElement(d.c,{body:!0,inverse:!0,color:"success"},c.a.createElement(d.f,{className:"text-white text-center"},"Patrim\xf4nio L\xedquido"),c.a.createElement(d.j,{type:"select",value:Ke,onChange:function(e){return Ue(e.target.value)}},c.a.createElement("option",{value:">="},"Maior que"),c.a.createElement("option",{value:"<="},"Menor que")),c.a.createElement(d.j,{type:"select",className:"mt-2",value:Ze,onChange:function(e){return et(e.target.value)}},c.a.createElement("option",{value:"0"},"R$ 0"),c.a.createElement("option",{value:"10000000"},"R$10 Milh\xf5es"),c.a.createElement("option",{value:"50000000"},"R$50 Milh\xf5es"),c.a.createElement("option",{value:"100000000"},"R$100 Milh\xf5es"),c.a.createElement("option",{value:"200000000"},"R$200 Milh\xf5es"),c.a.createElement("option",{value:"300000000"},"R$300 Milh\xf5es"),c.a.createElement("option",{value:"500000000"},"R$500 Milh\xf5es"),c.a.createElement("option",{value:"750000000"},"R$750 Milh\xf5es"),c.a.createElement("option",{value:"1000000000"},"R$1 Bilh\xe3o"),c.a.createElement("option",{value:"2000000000"},"R$2 Bilh\xf5es"),c.a.createElement("option",{value:"3000000000"},"R$3 Bilh\xf5es"),c.a.createElement("option",{value:"4000000000"},"R$4 Bilh\xf5es"),c.a.createElement("option",{value:"5000000000"},"R$5 Bilh\xf5es")))),se&&c.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2"},c.a.createElement(d.c,{body:!0,inverse:!0,color:"warning"},c.a.createElement(d.f,{className:"text-white text-center"},"Pre\xe7o / Valor Patrimonial"),c.a.createElement(d.j,{type:"select",value:nt,onChange:function(e){return ct(e.target.value)}},c.a.createElement("option",{value:">="},"Maior que"),c.a.createElement("option",{value:"<="},"Menor que")),c.a.createElement(d.j,{type:"range",min:"0.1",max:"3",step:"0.1",value:ot,onChange:function(e){return it(e.target.value)}}),c.a.createElement("h4",{className:"text-center enfase"},ot))),de&&c.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2"},c.a.createElement(d.c,{body:!0,color:"secondary"},c.a.createElement(d.f,{className:"text-dark text-center"},"Valor Patrimonial por Cota"),c.a.createElement(d.j,{type:"select",value:ut,onChange:function(e){return pt(e.target.value)}},c.a.createElement("option",{value:">="},"Maior que"),c.a.createElement("option",{value:"<="},"Menor que")),c.a.createElement(d.j,{type:"range",min:"10",max:"1000",step:"10",value:Et,onChange:function(e){return vt(e.target.value)}}),c.a.createElement("h4",{className:"text-center enfase"},Object(b.j)(Et)))),ge&&c.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2"},c.a.createElement(d.c,{body:!0,inverse:!0,color:"dark"},c.a.createElement(d.f,{className:"text-white text-center"},"Quantidade de ativos f\xedsicos"),c.a.createElement(d.j,{type:"select",value:yt,onChange:function(e){return ht(e.target.value)}},c.a.createElement("option",{value:">="},"Mais que"),c.a.createElement("option",{value:"<="},"Menos que")),c.a.createElement(d.j,{type:"range",min:"0",max:"30",step:"1",value:Ot,onChange:function(e){return kt(e.target.value)}}),c.a.createElement("h4",{className:"text-center enfase"},Ot))),je&&c.a.createElement("div",{className:"col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-2"},c.a.createElement(d.c,{body:!0,inverse:!0,color:"info"},c.a.createElement(d.f,{className:"text-white text-center"},"Tipo de Gest\xe3o"),c.a.createElement(d.j,{type:"range",min:"0",max:"1",step:"1",value:Ae,onChange:function(e){return Fe(e.target.value)}}),c.a.createElement("h4",{className:"text-center enfase"},1===Ae?"Ativa":"Passiva"))))),c.a.createElement("div",{className:"text-center"},r&&r.length>0&&c.a.createElement("div",{className:"alert alert-success mt-2",role:"alert"},r.length>1?"Foram achados ".concat(r.length," fundos!"):"Foi achado um fundo!"),c.a.createElement("button",{className:"btn btn-primary btn-rounded btn-lg my-4 ".concat(x?"disabled":""),onClick:function(){S(!0),L("Pesquisando..."),i.a.get("/fii/search",{params:{search:R,selectAvancada:G,selectDY:J,selectSegmento:W,selectQtdNegocios:te,selectPL:re,selectPVP:se,selectVPC:de,selectAtvFis:ge,selectGestao:je,dyChange:Ce,dy:qe,segmento:Te,negociosChange:Be,negocios:Qe,plChange:Ke,gestao:Ae,pl:Ze,pvpChange:nt,pvp:ot,vpcChange:ut,vpc:Et,atvFisChange:yt,atvFis:Ot}}).then((function(e){S(!1),L("Pesquisar"),m(e.data)})).catch((function(e){S(!1),L("Pesquisar"),M(e.response.data.message||"Ops, um erro ocorreu!")}))}},z)),x&&c.a.createElement(E,null)))),r&&c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement(s.a,null,c.a.createElement(f,{fiis:r})))))),O&&c.a.createElement(p.a,null),w&&c.a.createElement("div",{className:"alert alert-danger"},c.a.createElement("p",null,w)))},h=a(143),j=a(144),N=a(141);t.default=function(e){var t=e.match;return c.a.createElement(n.Fragment,null,c.a.createElement(h.a,null),c.a.createElement("div",{className:"app-main"},c.a.createElement(j.a,null),c.a.createElement("div",{className:"app-main__outer"},c.a.createElement("div",{className:"app-main__inner"},c.a.createElement(r.a,{path:"".concat(t.path),component:y})),c.a.createElement(N.a,null))))}}}]);
//# sourceMappingURL=13.a1d0cde7.chunk.js.map