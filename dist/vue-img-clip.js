!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueImgClip",[],t):"object"==typeof exports?exports.VueImgClip=t():e.VueImgClip=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,n){"use strict";t.a={props:{sliders:{type:Object,default:function(){}}},data:function(){return{maxWidth:this.sliders.maxWidth,maxHeight:this.sliders.maxHeight,url:this.sliders.url,imgdata:[]}},computed:{prevIndex:function(){}},methods:{},mounted:function(){var e=this.$refs.files,t=new FileReader,n=new Image,r=this.url,o=this.maxWidth,i=this.maxHeight,s=this.sliders.error,a=this.sliders.success,u=this.sliders.onProgress,d=this.sliders.NoImgType,c=this.imgdata,f=null,l=document.createElement("canvas"),p=l.getContext("2d");n.onload=function(){var e=this.width,t=this.height,d=o||400,c=i||400,h=e,v=t;(e>d||t>c)&&(e/t>d/c?(h=d,v=Math.round(d*(t/e))):(v=c,h=Math.round(c*(e/t)))),l.width=h,l.height=v,p.clearRect(0,0,h,v),p.drawImage(n,0,0,h,v),l.toBlob(function(e){var t=new XMLHttpRequest;t.upload&&t.upload.addEventListener("progress",function(e){u(f,e.loaded,e.total)},!1),t.onreadystatechange=function(){4==t.readyState&&(200==t.status?a(t.responseText,f):s(f))},t.open("POST",r,!0),t.send(e)},f.type||"image/png")},t.onload=function(e){n.src=e.target.result,c.push(e.target.result)},e.addEventListener("change",function(e){f=e.target.files[0],0==f.type.indexOf("image")?t.readAsDataURL(f):d(f)})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o={install:function(e){e.component("uplodaImg",r.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),t.default=o},function(e,t,n){"use strict";function r(e){n(3)}var o=n(0),i=n(9),s=n(8),a=r,u=s(o.a,i.a,!1,a,"data-v-f3240bbc",null);t.a=u.exports},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(6)("a2aee980",r,!0,{})},function(e,t,n){t=e.exports=n(5)(!1),t.push([e.i,".imgfile[data-v-f3240bbc]{display:none}.labelFile[data-v-f3240bbc]{display:inline-block;padding:12px 20px;background-color:#6495ed;color:#fff;line-height:1;white-space:nowrap;cursor:pointer;background-color:#409eff;border-color:#409eff;font-weight:500;border-radius:4px;font-size:14px}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",f.appendChild(e),e}function i(e){var t,n,r=document.querySelector("style["+m+'~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(y){var i=p++;r=l||(l=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),g.ssrId&&e.setAttribute(m,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),c={},f=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,h=!1,v=function(){},g=null,m="data-vue-ssr-id",y="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n,o){h=n,g=o||{};var i=d(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],a=c[s.id];a.refs--,n.push(a)}t?(i=d(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var a=n[o];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete c[a.id]}}}};var b=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],u=i[2],d=i[3],c={id:e+":"+o,css:a,media:u,sourceMap:d};r[s]?r[s].parts.push(c):n.push(r[s]={id:s,parts:[c]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var d="function"==typeof a?a.options:a;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),o&&(d._scopeId=o);var c;if(i?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},d._ssrRegister=c):r&&(c=r),c){var f=d.functional,l=f?d.render:d.beforeCreate;f?(d._injectStyles=c,d.render=function(e,t){return c.call(t),l(e,t)}):d.beforeCreate=l?[].concat(l,c):[c]}return{esModule:s,exports:a,options:d}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{staticClass:"labelFile",attrs:{for:"file"}},[e._v("选择图片")]),e._v(" "),n("input",{ref:"files",staticClass:"imgfile",attrs:{id:"file",type:"file"}})])},o=[],i={render:r,staticRenderFns:o};t.a=i}])});
//# sourceMappingURL=vue-img-clip.js.map