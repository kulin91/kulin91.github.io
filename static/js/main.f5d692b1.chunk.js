(this["webpackJsonpusers-table"]=this["webpackJsonpusers-table"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(14),i=n.n(r),c=(n(21),n(22),n(16)),l=(n(23),n(24),n(0));function o(e){var t=e.id,n=e.firstName,s=e.lastName,a=e.email,r=e.phone,i=e.state,c=e.item,o=e.setSelectedProfile,d=e.selectedProfile;return Object(l.jsxs)("tr",{onClick:function(){o(c)},className:c===d?"tableItemRowActive":{},children:[Object(l.jsx)("th",{className:"tableItemContainer",children:t}),Object(l.jsx)("th",{className:"tableItemContainer",children:n}),Object(l.jsx)("th",{className:"tableItemContainer",children:s}),Object(l.jsx)("th",{className:"tableItemContainer",children:a}),Object(l.jsx)("th",{className:"tableItemContainer",children:r}),Object(l.jsx)("th",{className:"tableItemContainer",children:i})]})}n(26);function d(e){var t=e.isPrevVisible,n=e.isNextVisible,s=e.nextPage,a=e.prevPage;return Object(l.jsxs)("div",{className:"paginationContainer",children:[Object(l.jsx)("button",{className:"paginationButton button_add",disabled:!t,onClick:function(){return a()},children:"Prev"}),Object(l.jsx)("button",{className:"paginationButton button_add",disabled:!n,onClick:function(){return s()},children:"Next"})]})}function u(e){var t=e.categoryTitles,n=e.users,s=e.selectedCategoryIndex,a=e.selectStateCategory,r=e.setSelectCategoryIndex,i=e.activeSymbol,u=e.setSelectedProfile,f=e.selectedProfile,p=e.pagination,j=n.slice(p.skip,p.limit);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("table",{className:"tableMainContainer",cellSpacing:"0",children:[Object(l.jsx)("thead",{className:"tableContainerHead",children:Object(l.jsx)("tr",{children:t.map((function(e,t){return Object(l.jsx)("th",{onClick:function(){r(t),a()},className:s===t?"tableThItemActive":"tableThItem",children:s===t?e+i():e},e+t)}))})}),Object(l.jsx)("tbody",{className:"tableContainer",children:j.map((function(e,t){return Object(l.jsx)(o,{setSelectedProfile:u,selectedProfile:f,item:e,id:e.id,firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,state:e.adress.state},e.phone+t)}))})]}),Object(l.jsx)(d,Object(c.a)({},p))]})}n(27);function f(e){var t=e.selectedProfile;return Object(l.jsxs)("div",{className:"profileInfoContainer",children:[Object(l.jsx)("div",{className:"profileInfoTitle",children:"Profile Info:"}),Object(l.jsxs)("div",{className:"profileInfoDescriptionDiv",children:[Object(l.jsx)("span",{className:"profileInfoDescription",children:"Selected Profile: "}),Object(l.jsxs)("span",{className:"profileInfoDescriptionSpan",children:[t.firstName," ",t.lastName]})]}),Object(l.jsxs)("div",{className:"profileInfoDescriptionDiv",children:[Object(l.jsx)("span",{className:"profileInfoDescription",children:"Description: "}),Object(l.jsx)("span",{className:"profileInfoDescriptionSpan",children:t.description})]}),Object(l.jsxs)("div",{className:"profileInfoDescriptionDiv",children:[Object(l.jsx)("span",{className:"profileInfoDescription",children:"Address: "}),Object(l.jsx)("span",{className:"profileInfoDescriptionSpan",children:t.adress.streetAddress})]}),Object(l.jsxs)("div",{className:"profileInfoDescriptionDiv",children:[Object(l.jsx)("span",{className:"profileInfoDescription",children:"City: "}),Object(l.jsx)("span",{className:"profileInfoDescriptionSpan",children:t.adress.city})]}),Object(l.jsxs)("div",{className:"profileInfoDescriptionDiv",children:[Object(l.jsx)("span",{className:"profileInfoDescription",children:"State: "}),Object(l.jsx)("span",{className:"profileInfoDescriptionSpan",children:t.adress.state})]}),Object(l.jsxs)("div",{className:"profileInfoDescriptionDiv",children:[Object(l.jsx)("span",{className:"profileInfoDescription",children:"Index: "}),Object(l.jsx)("span",{className:"profileInfoDescriptionSpan",children:t.adress.zip})]})]})}var p=n(3),j=n(15),b=n.n(j);var m=[{name:"Id",filter:function(e,t){return!0===t?e.sort((function(e,t){return O(e,t,"id")})):e.sort((function(e,t){return O(e,t,"id")})).reverse()}},{name:"First name",filter:function(e,t){return!0===t?e.sort((function(e,t){return O(e,t,"firstName")})):e.sort((function(e,t){return O(e,t,"firstName")})).reverse()}},{name:"Last name",filter:function(e,t){return!0===t?e.sort((function(e,t){return O(e,t,"lastName")})):e.sort((function(e,t){return O(e,t,"lastName")})).reverse()}},{name:"Email",filter:function(e,t){return!0===t?e.sort((function(e,t){return O(e,t,"email")})):e.sort((function(e,t){return O(e,t,"email")})).reverse()}},{name:"Phone",filter:function(e,t){return!0===t?e.sort((function(e,t){return O(e,t,"phone")})):e.sort((function(e,t){return O(e,t,"phone")})).reverse()}},{name:"State",filter:function(e,t){return!0===t?e.sort(x):e.sort(x).reverse()}}],h=m.map((function(e){return e.name}));function S(){for(var e=Object(s.useState)(3),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)("All state"),i=Object(p.a)(r,2),c=i[0],l=i[1],o=Object(s.useState)(!0),d=Object(p.a)(o,2),u=d[0],f=d[1],j=Object(s.useState)(""),S=Object(p.a)(j,2),x=S[0],O=S[1],g=Object(s.useState)({id:"",firstName:"",lastName:"",email:"",phone:"",adress:{streetAddress:"",city:"",state:"",zip:""},description:""}),I=Object(p.a)(g,2),C=I[0],y=I[1],D=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){b.a.get("https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json").then((function(e){var t=e.data;a(t)}))}),[a]),n}(),P=N(D,x),U=new Set,A=0;A<P.length;A++)U.add(P[A].adress.state);P=v(P,c);var k=m[n].filter(P,u);return{stateCategory:u,categoryTitles:h,users:k,selectedCategoryIndex:n,selectedProfile:C,allStates:U,selectedState:c,activeSymbol:function(){return u?" \u25b2":" \u25bc"},setSelectCategoryIndex:a,selectStateCategory:function(){return f(!0!==u)},setSelectedProfile:y,setValueSearchInput:O,setSelectedState:l}}function x(e,t){return e.adress.state<t.adress.state?-1:e.adress.state>t.adress.state?1:0}function O(e,t,n){return"string"===typeof e[n]?e[n]<t[n]?-1:e[n]>t[n]?1:0:e[n]-t[n]}var N=function(e,t){return t.length<2?e:e.filter((function(e){return e.id.toString().toUpperCase().includes(t.toUpperCase())||e.firstName.toString().toUpperCase().includes(t.toUpperCase())||e.lastName.toString().toUpperCase().includes(t.toUpperCase())||e.email.toString().toUpperCase().includes(t.toUpperCase())||e.phone.toString().toUpperCase().includes(t.toUpperCase())||e.adress.state.toString().toUpperCase().includes(t.toUpperCase())}))},v=function(e,t){return"All state"===t?e:e.filter((function(e){return e.adress.state.toString().includes(t)}))};n(47),n(48);function g(e){var t=e.allStates,n=e.selectedState,s=e.setSelectedState,a=e.pagination,r=Array.from(t);r.unshift("All state");return Object(l.jsx)("div",{className:"selectComponentContainer",children:Object(l.jsx)("select",{className:"select-css",value:n,onChange:function(e){a.reset(),s(e.target.value)},children:r.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},e+t)}))})})}var I=a.a.createRef();function C(e){var t=e.setValueSearchInput,n=e.allStates,s=e.setSelectedState,a=e.selectedState,r=e.pagination;return Object(l.jsxs)("div",{className:"dataInputContainer",children:[Object(l.jsx)("span",{className:"titleOfSearchInput",children:"Search"}),Object(l.jsxs)("div",{className:"boxForInput",children:[Object(l.jsx)("input",{ref:I,type:"text",onChange:function(){t(I.current.value),r.reset()},className:"entryField",placeholder:" Search..."}),Object(l.jsx)(g,{allStates:n,setSelectedState:s,selectedState:a,pagination:r})]})]})}function y(){var e=S(),t=e.categoryTitles,n=e.users,a=e.selectedCategoryIndex,r=e.selectedProfile,i=e.allStates,c=e.selectedState,o=e.selectStateCategory,d=e.setSelectCategoryIndex,j=e.activeSymbol,b=e.setSelectedProfile,m=e.setValueSearchInput,h=e.setSelectedState,x=function(e){var t=Object(s.useState)(1),n=Object(p.a)(t,2),a=n[0],r=n[1],i=Math.floor(e/20);return{isNextVisible:a<i,isPrevVisible:a>1,nextPage:function(){a!==i&&r(a+1)},prevPage:function(){1!==a&&r(a-1)},reset:function(){r(1)},skip:20*(a-1),limit:20*a}}(n.length);return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)(C,{pagination:x,allStates:i,setSelectedState:h,selectedState:c,setValueSearchInput:m})}),Object(l.jsx)(u,{pagination:x,categoryTitles:t,users:n,selectedCategoryIndex:a,selectStateCategory:o,setSelectCategoryIndex:d,activeSymbol:j,setSelectedProfile:b,selectedProfile:r}),Object(l.jsx)(f,{selectedProfile:r})]})}n(49);function D(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(y,{})})}i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f5d692b1.chunk.js.map