(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{27:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(27),a(4),a(1)),i=function(e){var t=e.data;return(null===t||void 0===t?void 0:t.name)?r.a.createElement("div",{className:"text-wrap"},"Name: ",null===t||void 0===t?void 0:t.name,r.a.createElement("br",null),"Model: ",null===t||void 0===t?void 0:t.model,r.a.createElement("br",null),"Manufacturer: ",null===t||void 0===t?void 0:t.manufacturer,r.a.createElement("br",null),"Starship class: ",null===t||void 0===t?void 0:t.starship_class,r.a.createElement("br",null)):r.a.createElement("div",{className:"noStarShip"},r.a.createElement("div",{className:"noStarShipIn"},"Starship not found"))},s=function(e){var t=e.data,a=e.searchList,c=e.searchString,l=Object(n.useState)({}),s=Object(o.a)(l,2),u=s[0],m=s[1];return Object(n.useEffect)((function(){"number"===typeof t?fetch("".concat("https://swapi.dev/api/","starships/").concat(t,"/")).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return console.error(e)})):"string"===typeof t&&fetch(t).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return console.error(e)}))}),[t]),c?a.length>0?r.a.createElement("div",{className:"search-block"},r.a.createElement("ul",null,a)):r.a.createElement("div",{className:"search-block"},r.a.createElement(r.a.Fragment,null,"Not found")):r.a.createElement(i,{data:u})},u=function(e){var t=e.setShipNumber,a=e.searchString,c=e.setSearchString,l=Object(n.useState)(0),i=Object(o.a)(l,2),s=i[0],u=i[1];return r.a.createElement("div",{className:"main-menu"},r.a.createElement("input",{type:"number",placeholder:"Enter ship number",onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Find",onClick:function(){t(parseInt(s))}}),r.a.createElement("input",{className:"search-textarea",type:"text",placeholder:"Search",onChange:function(e){return c(e.target.value)},value:a}),r.a.createElement("input",{className:"search-textarea",type:"button",value:"Clear",onClick:function(){localStorage.removeItem("swapiSearch"),c("")}}))},m=function(){var e=Object(n.useState)(9),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(localStorage.getItem("swapiSearch")||""),i=Object(o.a)(l,2),m=i[0],h=i[1],p=Object(n.useState)([]),d=Object(o.a)(p,2),v=d[0],f=d[1];Object(n.useEffect)((function(){fetch("https://swapi.dev/api/starships/?search=".concat(m)).then((function(e){return e.json()})).then((function(e){return f(e.results)})).catch((function(e){return console.error(e)}))}),[m]);var E=v.map((function(e){return r.a.createElement("li",{key:e.name.toString(),onClick:function(){return t=e.url,c(t),localStorage.setItem("swapiSearch",m),void h("");var t}},e.name)}));return r.a.createElement("div",{className:"main-page"},r.a.createElement(u,{setShipNumber:c,searchString:m,setSearchString:h}),r.a.createElement("div",{className:"content-wrap"},r.a.createElement(s,{data:a,searchList:E,searchString:m})))},h=a(16),p=function(e){var t=e.setSearchString,a=e.searchString,c=e.setPersonId,l=Object(n.useState)(0),i=Object(o.a)(l,2),s=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"main-menu"},r.a.createElement("input",{type:"number",placeholder:"Enter person id",onChange:function(e){return u(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Find",onClick:function(){c(s)}}),r.a.createElement("input",{className:"search-textarea",type:"text",placeholder:"Search",onChange:function(e){return t(e.target.value)},value:a})))},d=function(e){var t,a,n,c,l,o,i=null===(t=e.data)||void 0===t?void 0:t.starships.map((function(e){return r.a.createElement(s,{key:e.toString(),data:e})}));return r.a.createElement("div",null,r.a.createElement("div",null,"Name: ",null===(a=e.data)||void 0===a?void 0:a.name,r.a.createElement("br",null),"Birth date: ",null===(n=e.data)||void 0===n?void 0:n.birth_year,r.a.createElement("br",null),"Gender: ",null===(c=e.data)||void 0===c?void 0:c.gender,r.a.createElement("br",null),"Height: ",null===(l=e.data)||void 0===l?void 0:l.height,r.a.createElement("br",null),"Skin color: ",null===(o=e.data)||void 0===o?void 0:o.skin_color,r.a.createElement("br",null)),r.a.createElement("div",{className:"personShip"},i))},v=function(e){var t=e.searchArr,a=e.searchString,n=e.data;return""!==a?r.a.createElement("div",{className:"search-block"},t):(null===n||void 0===n?void 0:n.name)?r.a.createElement("div",null,r.a.createElement(d,{data:n})):r.a.createElement("div",{className:"noStarShip text-wrap"},r.a.createElement("div",null,"Person not found"))},f=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),i=Object(o.a)(l,2),s=i[0],u=i[1],m=Object(n.useState)([]),d=Object(o.a)(m,2),f=d[0],E=d[1],b=Object(n.useState)(""),S=Object(o.a)(b,2),g=S[0],j=S[1],O=Object(n.useState)(1),N=Object(o.a)(O,2),w=N[0],k=N[1],y=Object(n.useState)(""),C=Object(o.a)(y,2),I=C[0],x=C[1],L=Object(h.a)(s),_=Object(h.a)(f),P=L.concat(_).map((function(e){return r.a.createElement("li",{key:e.name,onClick:function(){return t=e.url,x(t),localStorage.setItem("searchString",g),void j("");var t}},e.name)}));return Object(n.useEffect)((function(){localStorage.getItem("searchString")&&(j(localStorage.getItem("searchString")),localStorage.removeItem("searchString"))}),[]),Object(n.useEffect)((function(){fetch("https://swapi.dev/api/people/?search=".concat(g)).then((function(e){return e.json()})).then((function(e){return u(e.results)})).catch((function(e){return console.error(e)})),fetch("https://swapi.dev/api/starships/?search=".concat(g)).then((function(e){return e.json()})).then((function(e){return E(e.results)})).catch((function(e){return console.error(e)}))}),[g]),Object(n.useEffect)((function(){fetch(I||"https://swapi.dev/api/people/".concat(w,"/")).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.error(e)}))}),[w,I]),r.a.createElement("div",{className:"main-page"},r.a.createElement(p,{setSearchList:u,setSearchString:j,searchString:g,setData:c,setPersonId:k}),r.a.createElement("div",{className:"content-wrap"},r.a.createElement(v,{searchList:s,searchString:g,data:a,searchArr:P})))},E=function(){var e=Object(n.useState)((new Date).toLocaleTimeString()),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){var e=setInterval((function(){return l()}),1e3);return function(){clearInterval(e)}}),[a]);var l=function(){c((new Date).toLocaleTimeString())};return r.a.createElement("div",{className:"clock"},r.a.createElement("h1",null,a))},b=a(2),S=a(9),g=function(){var e=Object(b.f)();return r.a.createElement("div",{className:"menu"},r.a.createElement(E,null),r.a.createElement(S.b,{className:"/"===e.pathname?"active":"",to:"/"},"Main"),r.a.createElement(S.b,{className:"/persons"===e.pathname?"active":"",to:"/persons"},"Persons"),r.a.createElement(S.b,{className:"/planets"===e.pathname?"active":"",to:"/planets"},"Planets"))},j=function(){return r.a.createElement("div",{className:"content-wrap "},r.a.createElement(g,null),r.a.createElement("div",{className:"text-wrap"},"404"))},O=function(e){return r.a.createElement("div",null,r.a.createElement("li",null,"Name: ",e.name,", Orbital period: ",e.orbital_period,", Rotation period: ",e.rotation_period,";"),r.a.createElement("br",null))},N=a(22),w=a.n(N),k=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),i=Object(o.a)(l,2),s=i[0],u=i[1];Object(n.useEffect)((function(){fetch("https://swapi.dev/api/planets/?page=".concat(s)).then((function(e){return e.json()})).then((function(e){return c(e.results)})).catch((function(e){return console.error(e)}))}),[s]);var m=a.map((function(e){return r.a.createElement(O,{key:e.name,name:e.name,rotation_period:e.rotation_period,orbital_period:e.orbital_period})}));return r.a.createElement("div",{className:"content-wrap planets"},r.a.createElement("div",{className:"text-wrap"},r.a.createElement("ul",null,m),r.a.createElement(w.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:6,marginPagesDisplayed:10,pageRangeDisplayed:10,onPageChange:function(e){return u(e.selected+1)},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))};var y=function(){return r.a.createElement("div",{className:"mainWrapper"},r.a.createElement(S.a,null,r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/"},r.a.createElement(g,null),r.a.createElement(m,null)),r.a.createElement(b.a,{path:"/persons"},r.a.createElement(g,null),r.a.createElement(f,null)),r.a.createElement(b.a,{path:"/planets"},r.a.createElement(g,null),r.a.createElement(k,null)),r.a.createElement(b.a,{path:"*"},r.a.createElement(g,null),r.a.createElement(j,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){}},[[32,1,2]]]);
//# sourceMappingURL=main.a7f97d02.chunk.js.map