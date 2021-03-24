(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},123:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(55),o=c.n(s),i=(c(63),c(13)),r=(c(64),c(57)),l=c(2),j=c(56),b=(c(94),c(19)),u=c.n(b),d={searchBooks:function(e){return u.a.get("/api/search/".concat(e))},saveBook:function(e){return u.a.post("/api/books",e)},deleteBook:function(e){return u.a.delete("/api/books/".concat(e))},getBooks:function(){return u.a.get("/api/books")}},h=c(0);var f=function(e){var t,c,n=e.bookInfo,a=e.isSearch,s=e.setBookList,o=e.socket,i={},r="No Listed Author";if(a){if(n.title&&(i.title=n.title),n.description&&(i.description=n.description),n.authors){i.authors=n.authors,r=i.authors[0];for(var l=1;l<i.authors.length;l++)r=r+", "+i.authors[l]}n.imageLinks&&(i.image=n.imageLinks.smallThumbnail),n.infoLink&&(i.link=n.infoLink),c="Save",t=function(e){e.preventDefault(),d.saveBook(i).then((function(){o.emit("saved",i.title)})).catch((function(e){console.log(e)}))}}else i=n,c="Delete",t=function(e){e.preventDefault(),d.deleteBook(n._id).then((function(e){o.emit("removed",i.title),d.getBooks().then((function(e){return s(e.data)}))})).catch((function(e){console.log(e)}))};return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-10",children:[Object(h.jsx)("p",{children:i.title||"NO TITLE"}),Object(h.jsxs)("p",{children:["Written By: ",r]})]}),Object(h.jsxs)("div",{className:"col-2",children:[Object(h.jsx)("form",{action:i.link,children:Object(h.jsx)("button",{type:"submit",children:"View"})}),Object(h.jsx)("button",{onClick:t,children:c})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-3",children:Object(h.jsx)("img",{alt:"book cover",src:i.image})}),Object(h.jsx)("div",{className:"col-9",children:Object(h.jsx)("p",{children:i.description||"NO DESCRIPTION"})})]})]})})};c(113);var O=function(e){var t=e.socket,c=Object(n.useState)([]),a=Object(i.a)(c,2),s=a[0],o=a[1];Object(n.useEffect)((function(){d.getBooks().then((function(e){o(e.data)}))}),[]);var r=s.map((function(e){return Object(h.jsx)(f,{socket:t,setBookList:o,isSearch:!1,bookInfo:e},e._id)}));return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:"Saved Books"}),r]})})};c(114);var v=function(e){var t=e.socket,c=Object(n.useState)(""),a=Object(i.a)(c,2),s=a[0],o=a[1],r=Object(n.useState)([]),l=Object(i.a)(r,2),j=l[0],b=l[1],u=j.map((function(e){return Object(h.jsx)(f,{socket:t,isSearch:!0,bookInfo:e},e.infoLink)}));return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),d.searchBooks(s).then((function(e){console.log(e.data.items),b(e.data.items.map((function(e){return e.volumeInfo})))})).catch((function(e){console.log(e)}))},children:[Object(h.jsx)("h3",{children:"Book Search"}),Object(h.jsx)("input",{type:"text",value:s,onChange:function(e){o(e.target.value)},placeholder:"Search By title"}),Object(h.jsx)("button",{type:"submit",children:"Search"})]}),u]})})};c(115);var x=function(){return Object(h.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(h.jsx)("a",{className:"navbar-brand",href:"./",children:"Google Books"}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(h.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"./Search",children:"Search"})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)("a",{className:"nav-link",href:"./saved",children:"Saved"})})]})})]})};c(116);var m=function(){return Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col-12 text-center",children:[Object(h.jsx)("h1",{children:"(React) Google Book Search "}),Object(h.jsx)("h2",{children:"Search For and Save Books of Interest"})]})})};c(117);var k=function(e){var t=e.msg;return Object(h.jsx)("div",{className:"notification",children:Object(h.jsx)("p",{children:t})})};var p=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),o=Object(i.a)(s,2),b=o[0],u=o[1];return Object(n.useEffect)((function(){console.log("hello");var e=Object(j.io)();u(e)}),[]),Object(n.useEffect)((function(){b&&b.on("notify",(function(e){a(Object(h.jsx)(k,{msg:e})),setTimeout((function(){a()}),1e4)}))}),[b]),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(r.a,{children:[Object(h.jsx)(x,{}),Object(h.jsx)(m,{}),Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",exact:!0,component:function(){return Object(h.jsx)(O,{socket:b})}}),Object(h.jsx)(l.a,{path:"/saved",exact:!0,component:function(){return Object(h.jsx)(O,{socket:b})}}),Object(h.jsx)(l.a,{path:"/search",exact:!0,component:function(){return Object(h.jsx)(v,{socket:b})}})]}),c]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,124)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))};c(122);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),g()},63:function(e,t,c){},64:function(e,t,c){},94:function(e,t,c){}},[[123,1,2]]]);
//# sourceMappingURL=main.a18fad32.chunk.js.map