(this.webpackJsonppmdb=this.webpackJsonppmdb||[]).push([[0],{19:function(e,n,a){},20:function(e,n,a){},33:function(e,n,a){"use strict";a.r(n);var l=a(1),t=a.n(l),r=a(7),i=a.n(r),u=(a(19),a(14)),o=a(3),s=(a(20),a(13)),c=a.n(s),d=a(8),b=a(0),m=function(e){var n=e.list,a=e.handleFilters,t=Object(l.useState)([]),r=Object(o.a)(t,2),i=r[0],u=r[1],s=function(e){var l=function(e,n){var a=n.indexOf(e),l=Object(d.a)(n);if(-1===a){if(0===e)l=[];else{var t=l.filter((function(e){return 0!==e}));l=Object(d.a)(t)}l.push(e)}else l.splice(a,1);return l.sort((function(e,n){return e-n}))}(e,i);u(l),a(l.map((function(e){return n[e].value})))};return n.map((function(e,n){return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"checkbox",id:e.name,checked:-1!==i.indexOf(e.id),onChange:function(){return s(e.id)}}),Object(b.jsx)("label",{htmlFor:e.name,children:e.label})]},n)}))},f=[{id:1,name:"Lillie",pokemon:"Lunala",type:["Ghost"],role:["Spe.Striker"],region:"Alola",rarity:"5",extra:["Master"],buff:[""],debuff:[""],status:[""],terrain:[""],icon:"../img/trainers/0Z_0G_ANNIV_2021_Lillie.png",url:"https://gamepress.gg/pokemonmasters/pokemon/lillie-lunala"},{id:2,name:"N",pokemon:"Reshiram",type:["Fire"],role:["Tech"],region:"Unova",rarity:"5",extra:["Master"],buff:["SPDup","Move_Gauge"],debuff:["SP.DEFdown"],status:["Burn"],terrain:[""],icon:"../img/trainers/0Z_0G_ANNIV_2021_N.png",url:"https://gamepress.gg/pokemonmasters/pokemon/n-reshiram"},{id:3,name:"Steven",pokemon:"Rayquaza",type:["Flying","Dragon"],role:["Phy.Striker","Spe.Striker"],region:"Hoenn",rarity:"5",extra:["Master","Mega"],buff:[""],debuff:["SP.DEFdown"],status:[""],terrain:[""],icon:"../img/trainers/0Z_0G_ANNIV_2021_Steven.png",url:"https://gamepress.gg/pokemonmasters/pokemon/n-reshiram"},{id:4,name:"Serena",pokemon:"Whimsicott",type:["Fairy"],role:["Support"],region:"Kalos",rarity:"5",extra:["Seasonal"],buff:[""],debuff:["SP.DEFdown"],status:[""],terrain:[""],icon:"../img/trainers/0Z_0B_PAL_2021_Serena.png",url:"https://gamepress.gg/pokemonmasters/pokemon/n-reshiram"},{id:5,name:"Elesa",pokemon:"Rotom",type:["Electric"],role:["Support"],region:"Unova",rarity:"5",extra:["General"],buff:["SP.ATKup","CRITup","ACCup"],debuff:[""],status:["Paralyze"],terrain:[""],icon:"../img/trainers/0E_UNOVA_0B-04_SSElesa.png",url:"https://gamepress.gg/pokemonmasters/pokemon/n-reshiram"}],p=[{id:0,name:"type",label:"Any Type",value:""},{id:1,name:"ghost",label:"Ghost",value:"Ghost"},{id:2,name:"fire",label:"Fire",value:"Fire"},{id:3,name:"flying",label:"Flying",value:"Flying"},{id:4,name:"fairy",label:"Fairy",value:"Fairy"},{id:5,name:"electric",label:"Electric",value:"Electric"},{id:6,name:"dragon",label:"Dragon",value:"Dragon"}],h=[{id:0,name:"role",label:"Any Role",value:""},{id:1,name:"phy.striker",label:"Phy.Striker",value:"Phy.Striker"},{id:2,name:"spe.striker",label:"Spe.Striker",value:"Spe.Striker"},{id:3,name:"tech",label:"Tech",value:"Tech"},{id:4,name:"support",label:"Support",value:"Support"}],v=[{id:0,name:"region",label:"Any Region",value:""},{id:1,name:"kanto",label:"Kanto",value:"Kanto"},{id:2,name:"johto",label:"Johto",value:"Johto"},{id:3,name:"hoenn",label:"Hoenn",value:"Hoenn"},{id:4,name:"sinnoh",label:"Sinnoh",value:"Sinnoh"},{id:5,name:"unova",label:"Unova",value:"Unova"},{id:6,name:"kalos",label:"Kalos",value:"Kalos"},{id:7,name:"alola",label:"Alola",value:"Alola"},{id:8,name:"galar",label:"Galar",value:"Galar"}],j=[{id:0,name:"rarity",label:"Any Rarity",value:""},{id:1,name:"3",label:"3\u2605",value:"3"},{id:2,name:"4",label:"4\u2605",value:"4"},{id:3,name:"5",label:"5\u2605",value:"5"}],g=[{id:0,name:"extra",label:"Any Extra",value:""},{id:1,name:"general",label:"General",value:"General"},{id:2,name:"fair",label:"Fair",value:"Fair"},{id:3,name:"seasonal",label:"Seasonal",value:"Seasonal"},{id:4,name:"master",label:"Master",value:"Master"},{id:5,name:"mega",label:"Mega",value:"Mega"},{id:6,name:"dynamax",label:"Dynamax",value:"Dynamax"}],y=[{id:0,name:"buff",label:"Any Buff",value:""},{id:1,name:"ATKup",label:"Attack \u2191",value:"ATKup"},{id:2,name:"DEFup",label:"Defense \u2191",value:"DEFup"},{id:3,name:"SP.ATKup",label:"Spe.Attack \u2191",value:"SP.ATKup"},{id:4,name:"SP.DEFup",label:"Spe.Defense \u2191",value:"SP.DEFup"},{id:5,name:"SPDup",label:"Speed \u2191",value:"SPDup"},{id:6,name:"CRITup",label:"Critical Rate \u2191",value:"CRITup"},{id:7,name:"ACCup",label:"Accuracy \u2191",value:"ACCup"},{id:8,name:"EVAup",label:"Evasion \u2191",value:"EVAup"}],x=[{id:0,name:"debuff",label:"Any Debuff",value:""},{id:1,name:"ATKdown",label:"Attack \u2193",value:"ATKdown"},{id:2,name:"DEFdown",label:"Defense \u2193",value:"DEFdown"},{id:3,name:"SP.ATKdown",label:"Spe.Attack \u2193",value:"SP.ATKdown"},{id:4,name:"SP.DEFdown",label:"Spe.Defense \u2193",value:"SP.DEFdown"},{id:5,name:"SPDdown",label:"Speed \u2193",value:"SPDdown"},{id:6,name:"CRITdown",label:"Critical Rate \u2193",value:"CRITdown"},{id:7,name:"ACCdown",label:"Accuracy \u2193",value:"ACCdown"},{id:8,name:"EVAdown",label:"Evasion \u2193",value:"EVAdown"}];c.a.setAppElement("#root");var S=function(){var e=Object(l.useState)(f),n=Object(o.a)(e,2),a=n[0],t=n[1],r=Object(l.useState)({type:[],role:[],region:[],rarity:[],extra:[],buff:[],debuff:[]}),i=Object(o.a)(r,2),s=i[0],c=i[1],d=function(e,n){var a=Object(u.a)({},s);a[n]=e;var l=a.type.length>0,r=a.role.length>0,i=a.region.length>0,o=a.rarity.length>0,d=a.extra.length>0,b=a.buff.length>0,m=a.debuff.length>0,p=l||r||i||o||d||b||m,h=function(e){return a.type.includes("")||a.type.some((function(n){return e.type.includes(n)}))},v=function(e){return a.role.includes("")||a.role.some((function(n){return e.role.includes(n)}))},j=function(e){return a.region.includes("")||a.region.includes(e.region)},g=function(e){return a.rarity.includes("")||a.rarity.includes(e.rarity)},y=function(e){return a.extra.includes("")||a.extra.some((function(n){return e.extra.includes(n)}))},x=function(e){return a.buff.includes("")||a.buff.some((function(n){return e.buff.includes(n)}))},S=function(e){return a.debuff.includes("")||a.debuff.some((function(n){return e.debuff.includes(n)}))};console.log(e);var O=f.filter((function(e){return!p||(!l||h(e))&&(!r||v(e))&&(!i||j(e))&&(!o||g(e))&&(!d||y(e))&&(!b||x(e))&&(!m||S(e))}));t(O),c(a)};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col type",children:[Object(b.jsx)("h3",{children:"Filter by Type"}),Object(b.jsx)(m,{list:p,handleFilters:function(e){return d(e,"type")}})]}),Object(b.jsxs)("div",{className:"col role",children:[Object(b.jsx)("h3",{children:"Filter by Role"}),Object(b.jsx)(m,{list:h,handleFilters:function(e){return d(e,"role")}})]}),Object(b.jsxs)("div",{className:"col region",children:[Object(b.jsx)("h3",{children:"Filter by Region"}),Object(b.jsx)(m,{list:v,handleFilters:function(e){return d(e,"region")}})]}),Object(b.jsxs)("div",{className:"col rarity",children:[Object(b.jsx)("h3",{children:"Filter by Rarity"}),Object(b.jsx)(m,{list:j,handleFilters:function(e){return d(e,"rarity")}})]}),Object(b.jsxs)("div",{className:"col extra",children:[Object(b.jsx)("h3",{children:"Filter by Extras"}),Object(b.jsx)(m,{list:g,handleFilters:function(e){return d(e,"extra")}})]}),Object(b.jsxs)("div",{className:"col buff",children:[Object(b.jsx)("h3",{children:"Filter by Buffs"}),Object(b.jsx)(m,{list:y,handleFilters:function(e){return d(e,"buff")}})]}),Object(b.jsxs)("div",{className:"col debuff",children:[Object(b.jsx)("h3",{children:"Filter by Debuffs"}),Object(b.jsx)(m,{list:x,handleFilters:function(e){return d(e,"debuff")}})]})]}),Object(b.jsx)("div",{className:"list",children:a.map((function(e){return Object(b.jsxs)("div",{className:"trainerBox",children:[Object(b.jsx)("div",{className:"trainerIcon",children:Object(b.jsx)("img",{src:e.icon,alt:"trainericon"})}),Object(b.jsxs)("h4",{children:[" ",e.name," "]}),Object(b.jsxs)("h5",{children:[" ",e.pokemon," "]})]},e.id)}))})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(n){var a=n.getCLS,l=n.getFID,t=n.getFCP,r=n.getLCP,i=n.getTTFB;a(e),l(e),t(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(t.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),O()}},[[33,1,2]]]);
//# sourceMappingURL=main.d9581b8f.chunk.js.map