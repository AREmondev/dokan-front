(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,6],{249:function(t,e,r){"use strict";r.r(e);var n={},o=r(15),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("client-only",[e("div")])}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,r){"use strict";r.r(e);r(36),r(67),r(68),r(35),r(41),r(13),r(42),r(29),r(28),r(43),r(44),r(30);function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,v=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){v=!0,l=t},f:function(){try{c||null==r.return||r.return()}finally{if(v)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={components:{Search:r(249).default},props:{customers:{type:Array,default:[],required:!0}},data:function(){return{search_text:"",filterData:this.$props.customers,village:""}},created:function(){},methods:{search:function(){var t=this;this.filterData=this.filterData.filter((function(data){return data.name.toLowerCase().includes(t.search_text.toLowerCase())}))},filterByVillage:function(){if(this.filterData=[],this.$props.customers){var t,e=n(this.$props.customers);try{for(e.s();!(t=e.n()).done;){var data=t.value;"all"==this.village.toLowerCase()&&(this.filterData=this.$props.customers),this.village.toLowerCase()==data.village.toLowerCase()&&this.filterData.push(data)}}catch(t){e.e(t)}finally{e.f()}}}}},c=r(15),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("client-only",[r("div",{staticClass:"py-5"},[r("Search"),t._v(" "),r("div",{staticClass:"input-group mb-3"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.village,expression:"village"}],staticClass:"form-select",attrs:{id:"village","aria-label":"Default select example"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.village=e.target.multiple?r:r[0]},t.filterByVillage]}},[r("option",{attrs:{value:"Andhorail"}},[t._v("Andhorail")]),t._v(" "),r("option",{attrs:{value:"Dorbeshpur"}},[t._v("Dorbeshpur")]),t._v(" "),r("option",{attrs:{value:"dulahar"}},[t._v("dulahar")]),t._v(" "),r("option",{attrs:{value:"Nasirabad"}},[t._v("Nasirabad")]),t._v(" "),r("option",{attrs:{value:"Murshida"}},[t._v("Murshida")]),t._v(" "),r("option",{attrs:{value:"Mirzapur"}},[t._v("Mirzapur")]),t._v(" "),r("option",{attrs:{value:"Mirapara"}},[t._v("Mirapara")]),t._v(" "),r("option",{attrs:{value:"Amjoan"}},[t._v("Amjoan")]),t._v(" "),r("option",{attrs:{value:"Pirpur"}},[t._v("Pirpur")]),t._v(" "),r("option",{attrs:{value:"Lokkhonpur"}},[t._v("Lokkhonpur")]),t._v(" "),r("option",{attrs:{value:"Nachole"}},[t._v("Nachole")]),t._v(" "),r("option",{attrs:{value:"Muradpur"}},[t._v("Muradpur")]),t._v(" "),r("option",{attrs:{value:"Maktapur"}},[t._v("Maktapur")]),t._v(" "),r("option",{attrs:{value:"Konnanogor"}},[t._v("Konnanogor")]),t._v(" "),r("option",{attrs:{value:"Surjopur"}},[t._v("Surjopur")]),t._v(" "),r("option",{attrs:{value:"Verendi"}},[t._v("Verendi")]),t._v(" "),r("option",{attrs:{value:"Rahoigram"}},[t._v("Rahoigram")]),t._v(" "),r("option",{attrs:{value:"Sonabor"}},[t._v("Sonabor")]),t._v(" "),r("option",{attrs:{value:"Surjopur"}},[t._v("Surjopur")]),t._v(" "),r("option",{attrs:{value:"Muradpur"}},[t._v("Muradpur")]),t._v(" "),r("option",{attrs:{value:"others"}},[t._v("others")])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.search_text,expression:"search_text"}],staticClass:"form-control p-2",attrs:{type:"search","aria-label":"Text input with dropdown button"},domProps:{value:t.search_text},on:{keyup:t.search,input:function(e){e.target.composing||(t.search_text=e.target.value)}}}),t._v(" "),r("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",id:"inputGroupFileAddon04"}},[t._v("Search")])]),t._v(" "),t.filterData.length>0?r("div",{staticClass:"list-group"},t._l(t.filterData,(function(e){return r("div",{key:e.id,staticClass:"list-group-item row"},[r("div",{staticClass:"col"},[r("nuxt-link",{staticClass:"name",attrs:{to:"/customer/persons?name="+e._id}},[t._v(t._s(e.name))])],1),t._v(" "),r("div",{staticClass:"col"},[r("h5",[t._v(t._s(e.village))])]),t._v(" "),r("div",{staticClass:"col"},[r("h5",{staticClass:"number"},[t._v(t._s(e.total_due)+"tk")])]),t._v(" "),r("div",{staticClass:"col"},[r("h5",{staticClass:"number"},[t._v(t._s(e.phone_number))])]),t._v(" "),r("div",{staticClass:"col"},[r("nuxt-link",{staticClass:"number",attrs:{to:"/order/persons?name="+e.id}},[t._v("Order")])],1),t._v(" "),r("div",{staticClass:"col"},[r("nuxt-link",{staticClass:"number",attrs:{to:"/payment/persons?name="+e.id}},[t._v("Payment")])],1)])})),0):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Search:r(249).default})},253:function(t,e,r){var content=r(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("42abe31e",content,!0,{sourceMap:!1})},255:function(t,e,r){"use strict";r(253)},256:function(t,e,r){var n=r(95)(!1);n.push([t.i,".spinner{position:fixed;left:0;top:0;background:rgba(187,182,182,.67843);width:100%;height:100%;display:flex;align-items:center;justify-content:center}",""]),t.exports=n},262:function(t,e,r){var content=r(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("1b7833da",content,!0,{sourceMap:!1})},264:function(t,e,r){"use strict";r.r(e);r(255);var n=r(15),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"spinner"},[e("div",{staticClass:"spinner-grow",attrs:{role:"status"}})])}],!1,null,null,null);e.default=component.exports},275:function(t,e,r){"use strict";r(262)},276:function(t,e,r){var n=r(95)(!1);n.push([t.i,".active{background-color:#86ec9f}",""]),t.exports=n},289:function(t,e,r){"use strict";r.r(e);r(41),r(13),r(35),r(42),r(29),r(28),r(43),r(44),r(30);var main=r(250),n=r(264),o=r(52);function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,v=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){v=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(v)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var v={components:{Main:main.default,Loader:n.default},data:function(){return{orders:[],isLoading:!0,totalOrderValue:0,estimetedProfit:0}},created:function(){this.getOrder()},methods:{getOrder:function(){var t=this,e=Object(o.a)("order"),r=Object(o.c)("Bearer");this.$axios.get(e,{headers:{Authorization:r}}).then((function(e){if(console.log(e),200==e.status){t.orders=e.data.reverse();var r,n=0,o=l(t.orders);try{for(o.s();!(r=o.n()).done;){n+=r.value.due}}catch(t){o.e(t)}finally{o.f()}t.estimetedProfit=n/100*10,t.totalOrderValue=n}})).catch((function(t){return console.log(t)}))}}},d=(r(275),r(15)),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-content-wrapper "},[r("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-3 col-md-6"},[r("div",{staticClass:"card bg-primary mini-stat text-white"},[r("div",{staticClass:"p-3 mini-stat-desc"},[r("div",{staticClass:"clearfix"},[r("h6",{staticClass:"text-uppercase mt-0 float-left text-white-50"},[t._v("Orders")]),t._v(" "),r("h4",{staticClass:"mb-3 mt-0 float-right"},[t._v(t._s(t.totalOrderValue)+"Tk")])])])])]),t._v(" "),r("div",{staticClass:"col-xl-3 col-md-6"},[r("div",{staticClass:"card bg-info mini-stat text-white"},[r("div",{staticClass:"p-3 mini-stat-desc"},[r("div",{staticClass:"clearfix"},[r("h6",{staticClass:"text-uppercase mt-0 float-left text-white-50"},[t._v("Revenue")]),t._v(" "),r("h4",{staticClass:"mb-3 mt-0 float-right"},[t._v(t._s(t.estimetedProfit)+"tk")])])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xl-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"mt-0 header-title mb-4"},[t._v("Latest Trasaction")]),t._v(" "),r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),t.orders&&t.orders.length?r("tbody",t._l(t.orders,(function(e,i){return r("tr",{key:i,class:{active:"Payment"===e.type}},[r("th",{attrs:{scope:"row"}},[t._v("#"+t._s(i+1))]),t._v(" "),r("td",[t._v(t._s(e.customer.name))]),t._v(" "),r("td",[t._v(t._s(e.createdAt.split("T")[0].split("-").reverse().join("/")))]),t._v(" "),r("td",[t._v(t._s(e.payment||e.due)+"Tk")]),t._v(" "),r("td",[t._v(t._s(e.customer.total_due)+"Tk")])])})),0):t._e()])])])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"page-title-box"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-md-8"},[r("h4",{staticClass:"page-title m-0"},[t._v("Dashboard")])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"float-right d-none d-md-block"})])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("ID No.")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Date")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Order Due")]),t._v(" "),r("th",{attrs:{scope:"col"}},[t._v("Total Due")])])])}],!1,null,null,null);e.default=component.exports}}]);