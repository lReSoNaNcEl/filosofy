(function(t){function e(e){for(var o,n,c=e[0],r=e[1],s=e[2],a=0,p=[];a<c.length;a++)n=c[a],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&p.push(l[n][0]),l[n]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);u&&u(e);while(p.length)p.shift()();return d.push.apply(d,s||[]),i()}function i(){for(var t,e=0;e<d.length;e++){for(var i=d[e],o=!0,n=1;n<i.length;n++){var c=i[n];0!==l[c]&&(o=!1)}o&&(d.splice(e--,1),t=r(r.s=i[0]))}return t}var o={},n={app:0},l={app:0},d=[];function c(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-20b67dec":"ef3fcc1b"}[t]+".js"}function r(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i={"chunk-20b67dec":1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise((function(e,i){for(var o="css/"+({}[t]||t)+"."+{"chunk-20b67dec":"8aadff1d"}[t]+".css",l=r.p+o,d=document.getElementsByTagName("link"),c=0;c<d.length;c++){var s=d[c],a=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(a===o||a===l))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){s=p[c],a=s.getAttribute("data-href");if(a===o||a===l)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var o=e&&e.target&&e.target.src||l,d=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");d.code="CSS_CHUNK_LOAD_FAILED",d.request=o,delete n[t],u.parentNode.removeChild(u),i(d)},u.href=l;var f=document.getElementsByTagName("head")[0];f.appendChild(u)})).then((function(){n[t]=0})));var o=l[t];if(0!==o)if(o)e.push(o[2]);else{var d=new Promise((function(e,i){o=l[t]=[e,i]}));e.push(o[2]=d);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.src=c(t);var p=new Error;s=function(e){a.onerror=a.onload=null,clearTimeout(u);var i=l[t];if(0!==i){if(i){var o=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",p.name="ChunkLoadError",p.type=o,p.request=n,i[1](p)}l[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(e)},r.m=t,r.c=o,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(i,o,function(e){return t[e]}.bind(null,o));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var u=a;d.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"3cd9":function(t,e,i){"use strict";var o=i("b0a2"),n=i.n(o);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Header"),i("router-view")],1)},l=[],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header-layout"},[o("div",{staticClass:"header container"},[o("router-link",{attrs:{to:"/"}},[o("img",{attrs:{src:i("9b19")}})]),o("nav",{staticClass:"header__navmenu"},[o("router-link",{staticClass:"header__link",attrs:{to:"/"}},[t._v("Учебные материалы")])],1)],1)])},c=[],r=(i("3cd9"),i("2877")),s={},a=Object(r["a"])(s,d,c,!1,null,"3406dd08",null),p=a.exports,u={components:{Header:p}},f=u,_=(i("5c0b"),Object(r["a"])(f,n,l,!1,null,null,null)),k=_.exports,x=(i("d3b7"),i("8c4f"));o["a"].use(x["a"]);var m=[{path:"/",name:"Index",component:function(){return i.e("chunk-20b67dec").then(i.bind(null,"9261"))}}],w=new x["a"]({mode:"history",base:"/",routes:m}),b=w,h=i("2f62"),y={namespaced:!0,state:function(){return{menu:[{id:1,title:"Лекции",submenu:[{id:1,title:"Основные понятия и предмет философии",payload:{videos:[{id:1,title:"Философия как мировоззрение",link:"https://www.youtube.com/embed/aCP1S8cULM4"},{id:2,title:"Функции философии",link:"https://www.youtube.com/embed/1N1zNDO4uqA"},{id:3,title:"Что такое философия",link:"https://www.youtube.com/embed/KshafAmECAo"}],presentations:[{id:1,title:"Становление философии из мифологии.ppt",link:"/files/presentation/Становление_философии_из_мифологии.ppt"},{id:2,title:"Основые понятия и предмет философии.ppt",link:"/files/presentation/Основые_понятия_и_предмет_философии.ppt"},{id:3,title:"Основные направления философии XX века.ppt",link:"/files/presentation/Основые_понятия_и_предмет_философии.ppt"}]}},{id:2,title:"Философия древнего мира и средневековая философия",payload:{presentations:[{id:1,title:"Философия Древней Индии и Древнего Китая.ppt",link:"/files/presentation/Философия_Древней_Индии_и_Древнего_Китая.ppt"},{id:2,title:"Философия древней Греции.ppt",link:"/files/presentation/Философия_древней_Греции.ppt"}]}},{id:3,title:"Философия Возрождения и Нового времени",payload:{videos:[{id:1,title:"Философия Возрождения",link:"https://www.youtube.com/embed/KwUGI1Y7Gmk"},{id:2,title:"Философия эпохи Возрождения",link:"https://www.youtube.com/embed/Jsx1hhkg_6Q"}],presentations:[{id:1,title:"Немецкая классическая философия.ppt",link:"/files/presentation/Немецкая_классическая_философия.ppt"}]}},{id:4,title:"Современная философия",payload:{videos:[{id:1,title:"Особенности философии 20 века",link:"https://www.youtube.com/embed/g0IO53U6LiU"}],presentations:[{id:1,title:"Современная философия.ppt",link:"/files/presentation/Современная_философия.ppt"},{id:2,title:"Основы русской философии.pptx",link:"/files/presentation/Основы_русской_философии.pptx"}]}},{id:5,title:"Методы философии и её внутреннее строение",payload:{videos:[{id:1,title:"Специфика философского знания",link:"https://www.youtube.com/embed/QkYu6B3KfWc"},{id:2,title:"Методы и внутреннее строение философии",link:"https://www.youtube.com/embed/4G7HxYvVZ5U"}],presentations:[{id:1,title:"Методы философии и её внутреннее строение.ppt",link:"/files/presentation/Методы_философии_и_её_внутреннее_строение.ppt"}]}},{id:6,title:"Учение о бытии и теория познания",payload:{videos:[{id:1,title:"Онтология в структуре философского знания",link:"https://www.youtube.com/embed/sNbc5X2p0VY"},{id:2,title:"Познание как предмет философии",link:"https://www.youtube.com/embed/E9QRh2J27bY"}],presentations:[{id:1,title:"Онтология.ppt",link:"/files/presentation/Онтология.ppt"}]}},{id:7,title:"Этика и социальная философия",payload:{videos:[{id:1,title:"Общество как предмет философии",link:"https://www.youtube.com/embed/UDDVifEJCmA"},{id:2,title:"Мораль и нравственность",link:"https://www.youtube.com/embed/qJ9GfJLiN4o"},{id:3,title:"Жизнь как категория наук об обществе и культуре",link:"https://www.youtube.com/embed/Z4wZywXXsHM"}]}},{id:8,title:"Место философии в духовной культуре и её значение",payload:{videos:[{id:1,title:"Аксиология в системе философского знания",link:"https://www.youtube.com/embed/ZhwYCcctmIk"},{id:2,title:"Философия в системе духовного знания",link:"https://www.youtube.com/embed/S5c-zLOV2ac"},{id:3,title:"Философия ее предмет и место в культуре",link:"https://www.youtube.com/embed/WOaG0_vpd0I"}],presentations:[{id:1,title:"Место философии в духовной культуре и её значение 1.ppt",link:"/files/presentation/Место_философии_в_духовной_культуре_и_её_значение_1.ppt"},{id:2,title:"Место философии в духовной культуре и её значение 2.ppt",link:"/files/presentation/Место_философии_в_духовной_культуре_и_её_значение_2.ppt"}]}}]},{id:2,title:"Практические работы",payload:{works:[{id:1,title:"Практическая работа 1.docx",link:"/files/practice/Практическая_работа_№1.docx"},{id:2,title:"Практическая работа 2.docx",link:"/files/practice/Практическая_работа_№2.docx"},{id:3,title:"Практическая работа 3.docx",link:"/files/practice/Практическая_работа_№3.docx"},{id:4,title:"Практическая работа 4.docx",link:"/files/practice/Практическая_работа_№4.docx"},{id:5,title:"Практическая работа 5.docx",link:"/files/practice/Практическая_работа_№5.docx"},{id:6,title:"Практическая работа 6.docx",link:"/files/practice/Практическая_работа_№6.docx"},{id:7,title:"Практическая работа 7.docx",link:"/files/practice/Практическая_работа_№7.docx"},{id:8,title:"Практическая работа 8.docx",link:"/files/practice/Практическая_работа_№8.docx"},{id:9,title:"Практическая работа 9.docx",link:"/files/practice/Практическая_работа_№9.docx"},{id:10,title:"Практическая работа 10.docx",link:"/files/practice/Практическая_работа_№10.docx"},{id:11,title:"Практическая работа 11.docx",link:"/files/practice/Практическая_работа_№11.docx"},{id:12,title:"Практическая работа 12.docx",link:"/files/practice/Практическая_работа_№12.docx"},{id:13,title:"Практическая работа 13.docx",link:"/files/practice/Практическая_работа_№13.docx"},{id:14,title:"Практическая работа 14.docx",link:"/files/practice/Практическая_работа_№14.docx"},{id:15,title:"Практическая работа 15.docx",link:"/files/practice/Практическая_работа_№15.docx"},{id:16,title:"Практическая работа 16.docx",link:"/files/practice/Практическая_работа_№16.docx"},{id:17,title:"Практическая работа 17.docx",link:"/files/practice/Практическая_работа_№17.docx"}]}},{id:3,title:"Контрольные работы",submenu:[{id:9,title:"Контрольная работа 1",payload:{works:[{id:1,title:"Вариант 1.docx",link:"/files/control/1/Вариант_1.docx"},{id:2,title:"Вариант 2.docx",link:"/files/control/1/Вариант_2.docx"},{id:3,title:"Вариант 3.docx",link:"/files/control/1/Вариант_3.docx"},{id:4,title:"Вариант 4.docx",link:"/files/control/1/Вариант_4.docx"}]}},{id:10,title:"Контрольная работа 2",payload:{works:[{id:1,title:"Вариант 1.docx",link:"/files/control/2/Вариант_1.docx"},{id:2,title:"Вариант 2.docx",link:"/files/control/2/Вариант_2.docx"},{id:3,title:"Вариант 3.docx",link:"/files/control/2/Вариант_3.docx"},{id:4,title:"Вариант 4.docx",link:"/files/control/2/Вариант_4.docx"}]}},{id:11,title:"Контрольная работа 3",payload:{works:[{id:1,title:"Вариант 1.docx",link:"/files/control/3/Вариант_1.docx"},{id:2,title:"Вариант 2.docx",link:"/files/control/3/Вариант_2.docx"},{id:3,title:"Вариант 3.docx",link:"/files/control/3/Вариант_3.docx"},{id:4,title:"Вариант 4.docx",link:"/files/control/3/Вариант_4.docx"}]}},{id:12,title:"Контрольная работа 4",payload:{works:[{id:1,title:"Вариант 1.docx",link:"/files/control/4/Вариант_1.docx"},{id:2,title:"Вариант 2.docx",link:"/files/control/4/Вариант_2.docx"},{id:3,title:"Вариант 3.docx",link:"/files/control/4/Вариант_3.docx"},{id:4,title:"Вариант 4.docx",link:"/files/control/4/Вариант_4.docx"}]}},{id:13,title:"Контрольная работа 5",payload:{works:[{id:1,title:"Вариант 1.docx",link:"/files/control/5/Вариант_1.docx"},{id:2,title:"Вариант 2.docx",link:"/files/control/5/Вариант_2.docx"},{id:3,title:"Вариант 3.docx",link:"/files/control/5/Вариант_3.docx"},{id:4,title:"Вариант 4.docx",link:"/files/control/5/Вариант_4.docx"}]}}]},{id:4,title:"Методические указания",payload:{works:[{id:1,title:"ОГСЭ 01 Основы философии.doc",link:"/files/instruction/ОГСЭ_01_Основы_философии.doc"},{id:2,title:"Рабочая программа.doc",link:"/files/instruction/Рабочая_программа.doc"},{id:3,title:"Основы философии Горелов А.А.doc",link:"/files/instruction/Основы_философии_Горелов_А.А.doc"},{id:4,title:"Вопросы.docx",link:"/files/instruction/Вопросы.docx"}]}}]}},getters:{getMenu:function(t){return t.menu}}};o["a"].use(h["a"]);var v=new h["a"].Store({modules:{menu:y}}),g=i("42fb");o["a"].use(g["a"]),o["a"].config.productionTip=!1,new o["a"]({router:b,store:v,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var o=i("9c0c"),n=i.n(o);n.a},"9b19":function(t,e,i){t.exports=i.p+"img/logo.f70f9609.svg"},"9c0c":function(t,e,i){},b0a2:function(t,e,i){}});
//# sourceMappingURL=app.6132b5ff.js.map