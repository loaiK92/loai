!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=33)}({29:function(t,e,n){"use strict";var i,o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};
/*! MenuSpy v1.3.0 (Jan 31 2018) - http://leocs.me/menuspy/ - Copyright (c) 2018 Leonardo Santos; MIT License */!function(a,s){"object"===r(e)&&void 0!==t?t.exports=s():void 0===(o="function"==typeof(i=s)?i.call(e,n,e,t):i)||(t.exports=o)}(0,function(){var t=function(){return window.pageYOffset||document.documentElement.scrollTop},e=function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")},n=function(t,e){var n=null;return function(){var i=arguments,o=this;n||(n=setTimeout(function(){return n=0,t.apply(o,i)},e))}},i=function(e,i){var o=this;e&&(this.element="string"==typeof e?document.querySelector(e):e,this.options=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}({menuItemSelector:'a[href^="#"]',activeClass:"active",threshold:15,enableLocationHash:!0,hashTimeout:600,callback:null},i),this.assignValues(),this.debouncedAssignValuesFn=n(function(){return o.assignValues()}),window.addEventListener("resize",this.debouncedAssignValuesFn),this.debouncedHashFn=n(function(){var e=o.lastInViewElm?"#"+o.lastInViewElm.id:"#";if(history.replaceState)history.replaceState(null,null,e);else{var n=t();window.location.hash=e,window.scrollTo(0,n)}},this.options.hashTimeout),this.cacheItems(),this.scrollFn())};return i.prototype.assignValues=function(){this.currScrollTop=0,this.lastInViewElm=null,this.menuHeight=this.element.offsetHeight+this.options.threshold,this.menuItems=[].slice.call(this.element.querySelectorAll(this.options.menuItemSelector)),this.raf=null},i.prototype.cacheItems=function(){this.scrollItems=this.menuItems.map(function(t){var e=t.dataset.target?document.querySelector(t.dataset.target):document.getElementById(t.hash.slice(1));return!!e&&{elm:t,target:e,offset:Math.floor(function(t){var e=t.getBoundingClientRect();return{top:e.top+window.pageYOffset,left:e.left+window.pageXOffset}}(e).top)}}),this.scrollItems=this.scrollItems.filter(Boolean).sort(function(t,e){return t.offset-e.offset})},i.prototype.tick=function(){var t=this.currScrollTop+this.menuHeight,e=this.scrollItems.filter(function(e){return e.offset<t});this.activateItem(e.pop())},i.prototype.activateItem=function(t){var n=this,i=this.options,o=i.activeClass,r=i.callback;if(!t)return this.scrollItems.forEach(function(t){return e(t.elm.parentNode,o)}),this.lastInViewElm=null,void(this.options.enableLocationHash&&this.debouncedHashFn());this.lastInViewElm!==t.target&&(this.lastInViewElm=t.target,this.scrollItems.forEach(function(i){e(i.elm.parentNode,o),i.target===t.target&&(function(t,e){if(t.classList)t.classList.add(e);else{var n=t.className.split(" ");-1===n.indexOf(e)&&n.push(e),t.className=n.join(" ")}}(i.elm.parentNode,o),"function"==typeof r&&r.call(n,i),n.options.enableLocationHash&&n.debouncedHashFn())}))},i.prototype.scrollFn=function(){var e=t();this.currScrollTop!==e&&(this.currScrollTop=e,this.tick()),this.raf=window.requestAnimationFrame(this.scrollFn.bind(this))},i.prototype.destroy=function(){this.raf&&window.cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.debouncedAssignValuesFn)},i})},30:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),$(document).ready(function(){$(".frontend--border").css({height:$(".frontend--content").height()+35+"px"}),$(".backend--border").css({height:$(".backend--content").height()+35+"px"}),window.sr=ScrollReveal(),sr.reveal(".nav__left",{origin:"left",distance:"500px",delay:500,duration:500,easing:"cubic-bezier(.61,.19,.44,1.37)"}),sr.reveal(".nav__right",{origin:"right",distance:"500px",delay:500,duration:500,easing:"cubic-bezier(.61,.19,.44,1.37)"}),sr.reveal(".intro__home--content",{origin:"bottom",distance:"100px",delay:1200,duration:300,easing:"cubic-bezier(.44,.44,.75,1.18)"}),sr.reveal(".intro__about",{origin:"left",distance:"500px",delay:700,duration:500,easing:"cubic-bezier(.44,.44,.75,1.18)"}),sr.reveal(".intro__skills",{origin:"left",distance:"40px",delay:1300,duration:1e3,easing:"cubic-bezier(.44,.44,.75,1.18)"}),sr.reveal(".frontend--border",{origin:"right",distance:"20px",delay:1600,duration:1e3,easing:"cubic-bezier(.44,.44,.75,1.18)"}),sr.reveal(".backend--border",{origin:"right",distance:"20px",delay:1600,duration:1e3,easing:"cubic-bezier(.44,.44,.75,1.18)"}),sr.reveal(".skills--content--frontend",{origin:"right",distance:"40px",delay:1700,duration:500,easing:"cubic-bezier(.61,.19,.44,1.37)"}),sr.reveal(".skills--border--frontend",{origin:"right",distance:"200px",delay:1300,duration:500,easing:"cubic-bezier(.44,.44,.75,1.18)",opacity:0}),sr.reveal(".skills--content--tools",{origin:"right",distance:"40px",delay:1e3,duration:500,easing:"cubic-bezier(.61,.19,.44,1.37)"}),sr.reveal(".skills--border--tools",{origin:"right",distance:"200px",delay:700,duration:500,easing:"cubic-bezier(.44,.44,.75,1.18)",opacity:0}),sr.reveal(".skills--content--backend",{origin:"right",distance:"40px",delay:300,duration:500,easing:"cubic-bezier(.61,.19,.44,1.37)"}),sr.reveal(".skills--border--backend",{origin:"right",distance:"200px",delay:0,duration:500,easing:"cubic-bezier(.44,.44,.75,1.18)",opacity:0}),sr.reveal(".card-1",{origin:"left",distance:"200px",delay:100,duration:500,easing:"cubic-bezier(.44,.44,.75,1.18)",opacity:0}),sr.reveal(".card-2",{origin:"top",distance:"200px",delay:500,duration:500,easing:"cubic-bezier(.44,.44,.75,1.18)",opacity:0}),sr.reveal(".card-3",{origin:"bottom",distance:"200px",delay:900,duration:500,easing:"cubic-bezier(.44,.44,.75,1.18)",opacity:0}),sr.reveal(".card-4",{origin:"right",distance:"200px",delay:1200,duration:500,easing:"cubic-bezier(.44,.44,.75,1.18)",opacity:0}),sr.reveal(".card-5",{origin:"bottom",distance:"200px",delay:500,duration:500,easing:"cubic-bezier(.44,.44,.75,1.18)",opacity:0}),$(".intro__qoutes--items").slick({slidesToShow:1,slidesToScroll:1,dots:!0,adaptiveHeight:!0})}),e.default=document},31:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),$(document).ready(function(){$("#name").on("focus",function(){$(".name").addClass("animate-label"),$("#name").addClass("animate-input")}),$("#name").on("blur",function(){$("#name").val()||($(".name").removeClass("animate-label"),$("#name").removeClass("animate-input"))}),$("#email").on("focus",function(){$(".email").addClass("animate-label"),$("#email").addClass("animate-input")}),$("#email").on("blur",function(){$("#email").val()||($(".email").removeClass("animate-label"),$("#email").removeClass("animate-input"))}),$("#msg").on("focus",function(){$(".msg").addClass("animate-label"),$("#msg").addClass("animate-input")}),$("#msg").on("blur",function(){$("#msg").val()||($(".msg").removeClass("animate-label"),$("#msg").removeClass("animate-input"))})}),e.default=document},32:function(t,e,n){"use strict";var i,o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};
/*! @preserve sweet-scroll v3.0.1 - tsuyoshiwada | MIT License */!function(a,s){"object"===r(e)&&void 0!==t?t.exports=s():void 0===(o="function"==typeof(i=s)?i.call(e,n,e,t):i)||(t.exports=o)}(0,function(){
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
      See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
var t=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e=!("undefined"==typeof window||!window.document||!window.document.createElement),n=!!e&&window.history&&"pushState"in window.history&&"file:"!==window.location.protocol,i=function(){var t=!1;if(!e)return t;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){t=!0}}))}catch(t){}return t}(),o=function(t){return"string"==typeof t},r=function(t){return"function"==typeof t},a=function(t){return Array.isArray(t)},s=function(t){return t instanceof Element},l=function(t,e){return t&&t.hasOwnProperty(e)},c=e?window.requestAnimationFrame.bind(window):null,u=e?window.cancelAnimationFrame.bind(window):null,f=Math.cos,d=Math.sin,p=Math.pow,h=Math.sqrt,m=Math.PI,g={linear:function(t){return t},easeInQuad:function(t,e,n,i,o){return i*(e/=o)*e+n},easeOutQuad:function(t,e,n,i,o){return-i*(e/=o)*(e-2)+n},easeInOutQuad:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,i,o){return i*(e/=o)*e*e+n},easeOutCubic:function(t,e,n,i,o){return i*((e=e/o-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,i,o){return i*(e/=o)*e*e*e+n},easeOutQuart:function(t,e,n,i,o){return-i*((e=e/o-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e+n:-i/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,i,o){return i*(e/=o)*e*e*e*e+n},easeOutQuint:function(t,e,n,i,o){return i*((e=e/o-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e*e+n:i/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,i,o){return-i*f(e/o*(m/2))+i+n},easeOutSine:function(t,e,n,i,o){return i*d(e/o*(m/2))+n},easeInOutSine:function(t,e,n,i,o){return-i/2*(f(m*e/o)-1)+n},easeInExpo:function(t,e,n,i,o){return 0===e?n:i*p(2,10*(e/o-1))+n},easeOutExpo:function(t,e,n,i,o){return e===o?n+i:i*(1-p(2,-10*e/o))+n},easeInOutExpo:function(t,e,n,i,o){return 0===e?n:e===o?n+i:(e/=o/2)<1?i/2*p(2,10*(e-1))+n:i/2*(2-p(2,-10*--e))+n},easeInCirc:function(t,e,n,i,o){return-i*(h(1-(e/=o)*e)-1)+n},easeOutCirc:function(t,e,n,i,o){return i*h(1-(e=e/o-1)*e)+n},easeInOutCirc:function(t,e,n,i,o){return(e/=o/2)<1?-i/2*(h(1-e*e)-1)+n:i/2*(h(1-(e-=2)*e)+1)+n}},v={y:"scrollTop",x:"scrollLeft"},y=function(t,e){return t[v[e]]},b=function(t,e,n){t[v[n]]=e},w=function(t,e){var n=t.getBoundingClientRect();if(n.width||n.height){var i={top:0,left:0},o=void 0;if(I(e))o=document.documentElement,i.top=window.pageYOffset,i.left=window.pageXOffset;else{var r=(o=e).getBoundingClientRect();i.top=-1*r.top+o[v.y],i.left=-1*r.left+o[v.x]}return{top:n.top+i.top-o.clientTop,left:n.left+i.left-o.clientLeft}}return n},x=function(t){return Array.prototype.slice.call(t?document.querySelectorAll(t):[])},$=function(t){return x(t).shift()||null},S=function(t,e){if(s(e))return t===e;for(var n=x(e),i=n.length;--i>=0&&n[i]!==t;);return i>-1},I=function(t){return t===document.documentElement||t===document.body},O=function(t,e){for(var n=v[e],i=s(t)?[t]:x(t),o=document.createElement("div"),r=0;r<i.length;r+=1){var a=i[r],l=null;if(a[n]>0)l=a;else{var c=window.outerWidth,u=window.innerWidth,f=c?c/u:1;o.style.width=a.clientWidth+1+"px",o.style.height=a.clientHeight+1+"px",a.appendChild(o),a[n]=Math.max(1,1.5/f),a[n]>0&&(l=a),a[n]=0,a.removeChild(o)}if(l)return l}return null},k=function(t){return Math.max(t.scrollHeight,t.clientHeight,t.offsetHeight)},E=function(t){return Math.max(t.scrollWidth,t.clientWidth,t.offsetWidth)},C=function(t){return{width:E(t),height:k(t)}},M=function(t){var e=I(t);return{viewport:{width:e?Math.min(window.innerWidth,document.documentElement.clientWidth):t.clientWidth,height:e?window.innerHeight:t.clientHeight},size:e?{width:Math.max(E(document.body),E(document.documentElement)),height:Math.max(k(document.body),k(document.documentElement))}:C(t)}},z=e?"onwheel"in document?"wheel":"mousewheel":"wheel",L=function(t,e,n,o,r){n.split(" ").forEach(function(n){t[e]("wheel"===n?z:n,o,!!i&&{passive:r})})},_=function(t,e,n,i){L(t,"addEventListener",e,n,i)},P=function(t,e,n,i){L(t,"removeEventListener",e,n,i)},T=/^(\+|-)=(\d+(?:\.\d+)?)$/,j=function(e,n){var i={top:0,left:0,relative:!1};if(l(e,"top")||l(e,"left"))i=t({},i,e);else if(a(e))if(e.length>1)i.top=e[0],i.left=e[1];else{if(1!==e.length)return null;i.top=n?e[0]:0,i.left=n?0:e[0]}else if(function(t){return!a(t)&&t-parseFloat(t)+1>=0}(e))n?i.top=e:i.left=e;else{if(!o(e))return null;var r=e.trim().match(T);if(!r)return null;var s=r[1],c=parseInt(r[2],10);"+"===s?(i.top=n?c:0,i.left=n?0:c):(i.top=n?-c:0,i.left=n?0:-c),i.relative=!0}return i},H={trigger:"[data-scroll]",header:"[data-scroll-header]",duration:1e3,easing:"easeOutQuint",offset:0,vertical:!0,horizontal:!1,cancellable:!0,updateURL:!1,preventDefault:!0,stopPropagation:!0,quickMode:!1,before:null,after:null,cancel:null,complete:null,step:null};return function(){function i(n,o){var r=this;this.ctx={$trigger:null,opts:null,progress:!1,pos:null,startPos:null,easing:null,start:0,id:0,cancel:!1,hash:null},this.loop=function(t){var e=r,n=e.$el,o=e.ctx;if(o.start||(o.start=t),o.progress&&n){var a=o.opts,s=o.pos,l=o.start,c=o.startPos,u=o.easing,f=a.duration,d={top:"y",left:"x"},p=t-l,h=Math.min(1,Math.max(p/f,0));Object.keys(s).forEach(function(t){var e=s[t],i=c[t],o=e-i;if(0!==o){var r=u(h,f*h,0,1,f);b(n,Math.round(i+o*r),d[t])}}),p<=f?(r.hook(a,"step",h),o.id=i.raf(r.loop)):r.stop(!0)}else r.stop()},this.handleClick=function(e){for(var n=r.opts,i=e.target;i&&i!==document;i=i.parentNode)if(S(i,n.trigger)){var o=JSON.parse(i.getAttribute("data-scroll-options")||"{}"),a=i.getAttribute("data-scroll")||i.getAttribute("href"),s=t({},n,o),l=s.preventDefault,c=s.stopPropagation,u=s.vertical,f=s.horizontal;l&&e.preventDefault(),c&&e.stopPropagation(),r.ctx.$trigger=i,f&&u?r.to(a,s):u?r.toTop(a,s):f&&r.toLeft(a,s)}},this.handleStop=function(t){var e=r.ctx,n=e.opts;n&&n.cancellable?(e.cancel=!0,r.stop()):t.preventDefault()};var a=t({},H,n||{}),s=a.vertical,l=a.horizontal,c=void 0===o?"body,html":o,u=null;e&&(s&&(u=O(c,"y")),!u&&l&&(u=O(c,"x"))),u&&(this.opts=a,this.$el=u,this.bind(!0,!1))}return i.create=function(t,e){return new i(t,e)},i.prototype.to=function(n,i){if(e){var r=this.$el,a=this.ctx,l=this.opts,c=a.$trigger,u=t({},l,i||{}),f=u.offset,d=u.vertical,p=u.horizontal,h=s(u.header)?u.header:$(u.header),m=o(n)&&/^#/.test(n)?n:null;if(a.opts=u,a.cancel=!1,a.hash=m,this.stop(),r){var g=j(f,d),v=j(n,d),b={top:0,left:0};if(v)if(v.relative){var x=y(r,d?"y":"x");b.top=d?x+v.top:v.top,b.left=d?v.left:x+v.left}else b=v;else if(o(n)&&"#"!==n){var S=$(n);if(!S)return;b=w(S,r)}g&&(b.top+=g.top,b.left+=g.left),h&&(b.top=Math.max(0,b.top-C(h).height));var I=M(r),O=I.viewport,k=I.size;b.top=d?Math.max(0,Math.min(k.height-O.height,b.top)):y(r,"y"),b.left=p?Math.max(0,Math.min(k.width-O.width,b.left)):y(r,"x"),!1!==this.hook(u,"before",b,c)?(a.pos=b,this.start(u),this.bind(!1,!0)):a.opts=null}}},i.prototype.toTop=function(e,n){this.to(e,t({},n||{},{vertical:!0,horizontal:!1}))},i.prototype.toLeft=function(e,n){this.to(e,t({},n||{},{vertical:!1,horizontal:!0}))},i.prototype.toElement=function(t,n){var i=this.$el;e&&i&&this.to(w(t,i),n||{})},i.prototype.stop=function(t){void 0===t&&(t=!1);var e=this.$el,n=this.ctx,o=n.pos;e&&n.progress&&(i.caf(n.id),n.progress=!1,n.start=0,n.id=0,t&&o&&(b(e,o.left,"x"),b(e,o.top,"y")),this.complete())},i.prototype.update=function(e){if(this.$el){var n=t({},this.opts,e);this.stop(),this.unbind(!0,!0),this.opts=n,this.bind(!0,!1)}},i.prototype.destroy=function(){this.$el&&(this.stop(),this.unbind(!0,!0),this.$el=null)},i.prototype.onBefore=function(t,e){return!0},i.prototype.onStep=function(t){},i.prototype.onAfter=function(t,e){},i.prototype.onCancel=function(){},i.prototype.onComplete=function(t){},i.prototype.start=function(t){var e=this.ctx;e.opts=t,e.progress=!0,e.easing=r(t.easing)?t.easing:g[t.easing];var n=this.$el,o=e.pos,a={top:y(n,"y"),left:y(n,"x")};if(t.quickMode){var s=M(n).viewport,l=s.width,c=s.height;Math.abs(a.top-o.top)>c&&(a.top=a.top>o.top?o.top+c:o.top-c),Math.abs(a.left-o.left)>l&&(a.left=a.left>o.left?o.left+l:o.left-l)}e.startPos=a,e.id=i.raf(this.loop)},i.prototype.complete=function(){var t=this.$el,i=this.ctx,o=i.hash,r=i.cancel,a=i.opts,s=i.pos,l=i.$trigger;if(t&&a){if(null!=o&&o!==window.location.hash){var c=a.updateURL;e&&n&&!1!==c&&window.history["replace"===c?"replaceState":"pushState"](null,"",o)}this.unbind(!1,!0),i.opts=null,i.$trigger=null,r?this.hook(a,"cancel"):this.hook(a,"after",s,l),this.hook(a,"complete",r)}},i.prototype.hook=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];var o,a,s=t[e];return r(s)&&(o=s.apply(this,n.concat([this]))),a=this["on"+(e[0].toUpperCase()+e.slice(1))].apply(this,n),void 0!==o?o:a},i.prototype.bind=function(t,e){var n=this.$el,i=this.ctx.opts;n&&(t&&_(n,"click",this.handleClick,!1),e&&_(n,"wheel touchstart touchmove",this.handleStop,!i||i.cancellable))},i.prototype.unbind=function(t,e){var n=this.$el,i=this.ctx.opts;n&&(t&&P(n,"click",this.handleClick,!1),e&&P(n,"wheel touchstart touchmove",this.handleStop,!i||i.cancellable))},i.raf=c,i.caf=u,i}()})},33:function(t,e,n){"use strict";n(47);var i=o(n(32));function o(t){return t&&t.__esModule?t:{default:t}}o(n(31)),o(n(30));var r=n(29);document.addEventListener("DOMContentLoaded",function(){new i.default({trigger:"[data-scroll]",header:"[data-scroll-header]",duration:1500,easing:"easeOutQuint",offset:-24,vertical:!0,horizontal:!1,cancellable:!0,updateURL:!1,preventDefault:!0,stopPropagation:!0,quickMode:!1})},!1),new r(document.getElementById("header"),{menuItemSelector:'a[href^="#"]',activeClass:"active-nav",threshold:30,enableLocationHash:!0,hashTimeout:600});var a=document.getElementById("menu"),s=document.getElementById("nav");a.addEventListener("click",function(){a.checked&&s.classList.remove("activ-nav")}),s.addEventListener("click",function(){s.classList.add("activ-nav"),a.checked=!1})},47:function(t,e){}});