(this["webpackJsonprestaurant-app"]=this["webpackJsonprestaurant-app"]||[]).push([[0],{36:function(e,t,a){e.exports=a(71)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(30),c=a(31),r=a(35),s=a(34),i=a(0),l=a.n(i),o=a(12),u=a.n(o),m=(a(41),a(9)),d=(a(42),a(43),a(7)),E=a(6),p=a(10),f=a.n(p),h=a(16),v=a(5),b=a(13),g=a.n(b),w=a(8),O={restaurants:[],selectedScreen:"",selectedItem:null},N=function(e){return{type:"GET_RESTAURANTS_FULFILLED",payload:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RESTAURANTS_FULFILLED":return Object(w.a)(Object(w.a)({},e),{},{restaurants:t.payload});case"GET_RESTAURANTS_ERROR":return Object(w.a)(Object(w.a)({},e),{},{restaurants:[],error:t.payload});case"ITEM_SELECTED_FULFILLED":return Object(w.a)(Object(w.a)({},e),{},{selectedItem:t.payload});default:return e}},j=a(32),y=a.n(j),I=function(e){return window.location.host.includes("localhost")?"http://localhost:8000/".concat(e):"/".concat(e)},R="CATEGORIES",C="LOCATION",T={CATEGORIES:"categories",LOCATION:"location"},k=function(e,t){return function(){var a=Object(h.a)(f.a.mark((function a(n){var c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e||t||n(N([])),c="restaurants/".concat(20),e?c+="/".concat(e,"/null"):t&&(c+="/".concat("san francisco","/").concat(t)),y.a.get(I(c)).then((function(e){n(N(e.data.data))})).catch((function(e){n({type:"GET_RESTAURANTS_ERROR",payload:e})}));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(h.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"ITEM_SELECTED_FULFILLED",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},L=(Object(v.c)(S,Object(v.a)(g.a)),a(3));var z=Object(L.b)((function(e){return{}}),(function(e){return{getRestaurants:function(t){return e(k(t))}}}))((function(e){var t=e.page,a=e.getRestaurants,n=e.setPage,c=e.setSearch,r=function(e){a([]),n(e),c("")};return l.a.createElement("div",{id:"side-bar"},t===C?l.a.createElement("div",{id:"side-inner"},l.a.createElement("div",{className:"icon-cont icon-clicked",onClick:function(){return r(C)}},l.a.createElement(d.a,{class:"icon",icon:E.c})),l.a.createElement("div",{className:"icon-cont icon-cont-down",onClick:function(){return r(R)}},l.a.createElement(d.a,{class:"icon",icon:E.a}))):l.a.createElement("div",{id:"side-inner"},l.a.createElement("div",{className:"icon-cont icon-cont-up",onClick:function(){return r(C)}},l.a.createElement(d.a,{class:"icon",icon:E.c})),l.a.createElement("div",{className:"icon-cont icon-clicked",onClick:function(){return r(R)}},l.a.createElement(d.a,{class:"icon",icon:E.a}))))}));a(67),a(68);var _=Object(L.b)((function(e){return{}}),(function(e){return{getRestaurants:function(t,a){return e(k(t,a))}}}))((function(e){var t=e.search,a=e.searchChange,n=e.page,c=e.getRestaurants,r=function(e){e&&(n===C?c(e):n===R&&c(null,e))};return l.a.createElement("div",{id:"list-top"},l.a.createElement("div",{id:"top-inner"},t?l.a.createElement("div",{className:"title-cont"},l.a.createElement("button",{onClick:function(){r(t)},id:"search-butt"},"Search")):l.a.createElement("div",{id:"search-butt-cont"},l.a.createElement("span",{className:"header-title"},T[n])),l.a.createElement("div",{className:"search-cont"},l.a.createElement("input",{id:"search",onKeyPress:function(e){"Enter"==e.key&&r(t)},placeholder:"Search by ".concat(T[n]),value:t,onChange:a}),l.a.createElement(d.a,{className:"searchIcon",icon:E.b}))))})),D=(a(69),a(19));var F=Object(L.b)((function(e){return{restaurants:e.restaurants}}),(function(e){return{setSelectedItem:function(t){return e(A(t))}}}))((function(e){var t=e.restaurants,a=e.setSelectedItem;return l.a.createElement("div",{id:"list-results"},t&&t.map((function(e){return l.a.createElement("div",{onClick:function(){return a(e)},key:e,className:"list-item"},l.a.createElement("div",{className:"result-inner"},l.a.createElement(D.a,{className:"result-name",lines:1,ellipsis:"..."},e.name),l.a.createElement(D.a,{className:"result-category",lines:1,ellipsis:"..."},e.categories[0].title)))})))}));var U=function(e){e.data;var t=e.page,a=e.search,n=e.setSearch,c=Object(i.useState)([]),r=Object(m.a)(c,2),s=r[0];return r[1],l.a.createElement("div",{id:"list-container"},l.a.createElement(_,{page:t,search:a,setSearch:n,searchChange:function(e){n(e.target.value)}}),l.a.createElement(F,{list:s}))};a(70);var G=function(){return l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60%",viewBox:"0 0 380.721 380.721"},l.a.createElement("path",{fill:"#AEAEAE",d:"M190.372 29.813c-88.673 0-160.546 71.873-160.546 160.547 0 65.89 39.73 122.438 96.504 147.173l2.092-40.525c0-32.242-23.83-21.912-23.83-44.465 0-12.641.395-38.98.395-58.755 0-52.697 22.377-103.673 27.874-115.048 5.53-11.363 18.537-23.76 18.677-11.828 0 17.312.738 218.618.738 218.618h-.035l2.463 61.241c11.497 2.626 23.395 4.125 35.669 4.125 6.728 0 13.304-.546 19.822-1.349l5.31-102.906c-13.106-2.869-24.283-11.212-31.295-21.68-8.685-13.014 6.675-128.067 6.675-128.067h10.004v107.978h9.922V96.894h10.84v107.978h9.889V96.894h11.258v107.978h9.911V96.894h7.668s15.349 115.054 6.669 128.067c-6.947 10.363-18.009 18.682-30.952 21.633-.232.07-.441.163-.441.163l5.02 95.993c63.995-21.11 110.249-81.307 110.249-152.39-.015-88.673-71.888-160.547-160.55-160.547z"}),l.a.createElement("path",{fill:"#5D5D5D",d:"M190.372 0C85.415 0 0 85.397 0 190.36 0 295.3 85.415 380.721 190.372 380.721c104.952 0 190.35-85.421 190.35-190.361C380.721 85.397 295.324 0 190.372 0zm0 366.523c-97.144 0-176.18-79.03-176.18-176.163 0-97.144 79.036-176.18 176.18-176.18 97.133 0 176.175 79.036 176.175 176.18-.001 97.133-79.043 176.163-176.175 176.163z"}))};var x=Object(L.b)((function(e){return{selectedItem:e.selectedItem}}),(function(e){return{setSelectedItem:function(t){return e(A(t))}}}))((function(e){var t=e.selectedItem,a=e.setSelectedItem;return l.a.createElement("div",{id:"detail-container"},t?l.a.createElement("div",{id:"data-cont"},l.a.createElement("div",{id:"details-close-row"},l.a.createElement("span",{id:"details-close",onClick:function(){return a(null)}},"X")),l.a.createElement("span",{className:"details-data-row name-size-row"},t.name),l.a.createElement("span",{className:"details-data-row big-size-row"},t.is_closed?"Is closed now":"Is open now"),l.a.createElement("br",null),l.a.createElement("span",{className:"details-data-row big-size-row"},"Category: ",l.a.createElement("span",{className:"small-size-row"},t.categories[0].alias)),l.a.createElement("span",{className:"details-data-row big-size-row"},"Phone: ",l.a.createElement("span",{className:"small-size-row"},"+",t.display_phone)),l.a.createElement("span",{className:"details-data-row big-size-row"},"Address: ",l.a.createElement("span",{className:"small-size-row"},t.location.address1,", ",t.location.city)),l.a.createElement("span",{className:"details-data-row big-size-row"},"Price range: ",l.a.createElement("span",{className:"small-size-row"},t.price)),l.a.createElement("span",{className:"details-data-row big-size-row"},"Rating(",t.review_count,"): ",l.a.createElement("span",{className:"small-size-row"},t.rating," stars"))):l.a.createElement("div",{id:"no-data-cont"},l.a.createElement(G,null),l.a.createElement("span",{id:"icon-detail"},"Select a restaurant to display it here!")))}));var P=Object(L.b)((function(e){return{}}),(function(e){return{getRestaurants:function(){return e(k())}}}))((function(e){var t=Object(i.useState)(C),a=Object(m.a)(t,2),n=a[0],c=a[1],r=Object(i.useState)(""),s=Object(m.a)(r,2),o=s[0],u=s[1];return l.a.createElement("div",{id:"main-page-container"},l.a.createElement(z,{setSearch:u,setPage:c,page:n}),l.a.createElement(U,{setSearch:u,search:o,page:n,data:e.data}),l.a.createElement(x,null))})),M=Object(v.c)(S,Object(v.a)(g.a)),V=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(P,null)}}]),a}(l.a.Component);u.a.render(l.a.createElement(L.a,{store:M},l.a.createElement(V,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b4bc0a3d.chunk.js.map