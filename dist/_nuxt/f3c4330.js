(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{260:function(t,e,r){var content=r(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(96).default)("0da8a14e",content,!0,{sourceMap:!1})},271:function(t,e,r){"use strict";r(260)},272:function(t,e,r){var o=r(95)(!1);o.push([t.i,".pointer{cursor:pointer}.text-red{color:red!important}",""]),t.exports=o},284:function(t,e,r){"use strict";r.r(e);r(35),r(41),r(13),r(42),r(29),r(28),r(43),r(44),r(30);var o=r(52);function n(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,l=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){d=!0,n=t},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw n}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={data:function(){return{name:"",price:0,stock:0,products:[],total:0}},created:function(){this.getAllProduct()},methods:{totalProductValue:function(){if(console.log(this.products),this.products){var t,e=0,r=n(this.products);try{for(r.s();!(t=r.n()).done;){var o=t.value,c=o.price*o.countInStock;console.log(c),e+=c}}catch(t){r.e(t)}finally{r.f()}console.log(e),this.total=e}},getAllProduct:function(){var t=this,e=Object(o.a)("product");this.$axios.get(e).then((function(e){200==e.status&&(t.products=e.data,t.totalProductValue())})).catch((function(t){return console.log(t)}))},createProduct:function(){var t=this,data={name:this.name,price:this.price,countInStock:this.stock,expireDate:new Date},e=Object(o.a)("product/create");this.$axios.post(e,data).then((function(e){console.log(e),201==e.status&&(t.stock="",t.price="",t.name="",t.$toast.open({position:"top",message:"Successfully product added",type:"success"}))})).catch((function(e){t.$toast.open({position:"top",message:"Product creation faield",type:"warning"})}))}}},d=l,v=(r(271),r(15)),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-content-wrapper "},[r("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"row p-4"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("label",[t._v("NAME")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("label",[t._v("Price")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.price,expression:"price"}],staticClass:"form-control",attrs:{type:"number",required:"",placeholder:"Price"},domProps:{value:t.price},on:{input:function(e){e.target.composing||(t.price=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("label",[t._v("In Stock")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.stock,expression:"stock"}],staticClass:"form-control",attrs:{type:"text",required:"",placeholder:"10"},domProps:{value:t.stock},on:{input:function(e){e.target.composing||(t.stock=e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-md-12"},[r("button",{staticClass:"btn btn-primary waves-effect waves-light",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.createProduct.apply(null,arguments)}}},[t._v("Add Product")])])])])])]),t._v(" "),r("p",[t._v("Total Product Value "+t._s(t.total))]),t._v(" "),t.products&&t.products.length?r("table",{staticClass:"table table-bordered dt-responsive nowrap",staticStyle:{"border-collapse":"collapse","border-spacing":"0",width:"100%"},attrs:{id:"datatable"}},[t._m(1),t._v(" "),r("tbody",t._l(t.products,(function(e){return r("tr",{key:e.id},[r("td",[t._v(t._s(e.name))]),t._v(" "),r("td",[t._v(t._s(e.price))]),t._v(" "),r("td",[t._v(t._s(e.countInStock))]),t._v(" "),r("td",[t._v(t._s(e.expireDate))]),t._v(" "),r("td",[t._v(t._s(e.price*e.countInStock))]),t._v(" "),t._m(2,!0)])})),0)]):t._e()])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"page-title-box"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-md-8"},[r("h4",{staticClass:"page-title m-0"},[t._v("Dashboard")])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"float-right d-none d-md-block"},[r("div",{staticClass:"dropdown"},[r("button",{staticClass:"btn btn-primary dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("i",{staticClass:"ti-settings mr-1"}),t._v(" Settings\n                                     ")]),t._v(" "),r("div",{staticClass:"dropdown-menu dropdown-menu-right dropdown-menu-animated"},[r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")]),t._v(" "),r("div",{staticClass:"dropdown-divider"}),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Separated link")])])])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Price")]),t._v(" "),r("th",[t._v("Stock")]),t._v(" "),r("th",[t._v("Expire Date")]),t._v(" "),r("th",[t._v("Total valuation")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",[r("a",{staticClass:"dlt mr-2 pointer text-red"},[t._v("Delete")]),t._v(" "),r("a",{staticClass:"dlt pointer"},[t._v("Edit")])])}],!1,null,null,null);e.default=component.exports}}]);