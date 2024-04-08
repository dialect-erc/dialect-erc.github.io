/*!
 * Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
!function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){r(t,e,n[e])})}return t}function o(t,e){return f(t)||u(t,e)||m()}function c(t){return s(t)||l(t)||d()}function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function f(t){if(Array.isArray(t))return t}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t,e){var n=[],a=!0,r=!1,i=undefined;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(s){r=!0,i=s}finally{try{a||null==c["return"]||c["return"]()}finally{if(r)throw i}}return n}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function p(t){var e=Kt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function h(t){return""===t||"false"!==t&&("true"===t||t)}function g(t){Zt&&(ze?setTimeout(t,0):Ne.push(t))}function b(){for(var t=0;t<Fe.length;t++)Fe[t][0](Fe[t][1]);Fe=[],Ee=!1}function v(t,e){Fe.push([t,e]),Ee||(Ee=!0,Ye(b,0))}function y(t,e){function n(t){k(e,t)}function a(t){C(e,t)}try{t(n,a)}catch(r){a(r)}}function w(t){var e=t.owner,n=e._state,a=e._data,r=t[n],i=t.then;if("function"==typeof r){n=Re;try{a=r(a)}catch(o){C(i,o)}}x(i,a)||(n===Re&&k(i,a),n===_e&&C(i,a))}function x(e,n){var a;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===t(n))){var r=n.then;if("function"==typeof r)return r.call(n,function(t){a||(a=!0,n===t?A(e,t):k(e,t))},function(t){a||(a=!0,C(e,t))}),!0}}catch(i){return a||C(e,i),!0}return!1}function k(t,e){t!==e&&x(t,e)||A(t,e)}function A(t,e){t._state===je&&(t._state=Le,t._data=e,v(S,t))}function C(t,e){t._state===je&&(t._state=Le,t._data=e,v(P,t))}function O(t){t._then=t._then.forEach(w)}function S(t){t._state=Re,O(t)}function P(t){t._state=_e,O(t),!t._handled&&Ie&&global.process.emit("unhandledRejection",t._data,t)}function N(t){global.process.emit("rejectionHandled",t)}function M(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof M==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],y(t,this)}function z(t){return~ke.indexOf(t)}function E(t){try{t()}catch(e){if(!de)throw e}}function j(t){if(t&&Zt){var e=Kt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Kt.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return Kt.head.insertBefore(e,a),t}}function L(){for(var t=12,e="";t-- >0;)e+=We[62*Math.random()|0];return e}function R(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _(t){return t.classList?R(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(t){return t})}function T(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a!==t||""===r||z(r)?null:r}function I(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Y(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(I(t[n]),'" ')},"").trim()}function F(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n],";")},"")}function H(t){return t.size!==Ue.size||t.x!==Ue.x||t.y!==Ue.y||t.rotate!==Ue.rotate||t.flipX||t.flipY}function D(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}function U(t){var e=t.transform,n=t.width,a=void 0===n?ee:n,r=t.height,i=void 0===r?ee:r,o=t.startCentered,c=void 0!==o&&o,s="";return s+=c&&$t?"translate(".concat(e.x/De-a/2,"em, ").concat(e.y/De-i/2,"em) "):c?"translate(calc(-50% + ".concat(e.x/De,"em), calc(-50% + ").concat(e.y/De,"em)) "):"translate(".concat(e.x/De,"em, ").concat(e.y/De,"em) "),s+="scale(".concat(e.size/De*(e.flipX?-1:1),", ").concat(e.size/De*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) ")}function W(t){var e=!(arguments.length>1&&arguments[1]!==undefined)||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function q(t){return"g"===t.tag?t.children:[t]}function X(t){var e=t.children,n=t.attributes,a=t.main,r=t.mask,o=t.transform,c=a.width,s=a.icon,f=r.width,l=r.icon,u=D({transform:o,containerWidth:f,iconWidth:c}),d={tag:"rect",attributes:i({},qe,{fill:"white"})},m=s.children?{children:s.children.map(W)}:{},p={tag:"g",attributes:i({},u.inner),children:[W(i({tag:s.tag,attributes:i({},s.attributes,u.path)},m))]},h={tag:"g",attributes:i({},u.outer),children:[p]},g="mask-".concat(L()),b="clip-".concat(L()),v={tag:"mask",attributes:i({},qe,{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,h]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:q(l)},v]};return e.push(y,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(g,")")},qe)}),{children:e,attributes:n}}function B(t){var e=t.children,n=t.attributes,a=t.main,r=t.transform,o=F(t.styles);if(o.length>0&&(n.style=o),H(r)){var c=D({transform:r,containerWidth:a.width,iconWidth:a.width});e.push({tag:"g",attributes:i({},c.outer),children:[{tag:"g",attributes:i({},c.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:i({},a.icon.attributes,c.path)}]}]})}else e.push(a.icon);return{children:e,attributes:n}}function V(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,o=t.styles,c=t.transform;if(H(c)&&n.found&&!a.found){var s={x:n.width/n.height/2,y:.5};r.style=F(i({},o,{"transform-origin":"".concat(s.x+c.x/16,"em ").concat(s.y+c.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function K(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,o=t.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i({},r,{id:!0===o?"".concat(e,"-").concat(Oe.familyPrefix,"-").concat(n):o}),children:a}]}]}function G(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,o=t.iconName,c=t.transform,s=t.symbol,f=t.title,l=t.extra,u=t.watchable,d=void 0!==u&&u,m=a.found?a:n,p=m.width,h=m.height,g="fa-w-".concat(Math.ceil(p/h*16)),b=[Oe.replacementClass,o?"".concat(Oe.familyPrefix,"-").concat(o):"",g].filter(function(t){return-1===l.classes.indexOf(t)}).concat(l.classes).join(" "),v={children:[],attributes:i({},l.attributes,{"data-prefix":r,"data-icon":o,"class":b,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(h)})};d&&(v.attributes[re]=""),f&&v.children.push({tag:"title",attributes:{id:v.attributes["aria-labelledby"]||"title-".concat(L())},children:[f]});var y=i({},v,{prefix:r,iconName:o,main:n,mask:a,transform:c,symbol:s,styles:l.styles}),w=a.found&&n.found?X(y):B(y),x=w.children,k=w.attributes;return y.children=x,y.attributes=k,s?K(y):V(y)}function J(t){var e=t.content,n=t.width,a=t.height,r=t.transform,o=t.title,c=t.extra,s=t.watchable,f=void 0!==s&&s,l=i({},c.attributes,o?{title:o}:{},{"class":c.classes.join(" ")});f&&(l[re]="");var u=i({},c.styles);H(r)&&(u.transform=U({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var d=F(u);d.length>0&&(l.style=d);var m=[];return m.push({tag:"span",attributes:l,children:[e]}),o&&m.push({tag:"span",attributes:{"class":"sr-only"},children:[o]}),m}function Q(t){var e=t.content,n=t.title,a=t.extra,r=i({},a.attributes,n?{title:n}:{},{"class":a.classes.join(" ")}),o=F(a.styles);o.length>0&&(r.style=o);var c=[];return c.push({tag:"span",attributes:r,children:[e]}),n&&c.push({tag:"span",attributes:{"class":"sr-only"},children:[n]}),c}function Z(t){for(var e="",n=0;n<t.length;n++){e+=("000"+t.charCodeAt(n).toString(16)).slice(-4)}return e}function $(t,e){var n=(arguments.length>2&&arguments[2]!==undefined?arguments[2]:{}).skipHooks,a=void 0!==n&&n,r=Object.keys(e).reduce(function(t,n){var a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{});"function"!=typeof Pe.hooks.addPack||a?Pe.styles[t]=i({},Pe.styles[t]||{},r):Pe.hooks.addPack(t,r),"fas"===t&&$("fa",e)}function tt(t,e){return(en[t]||{})[e]}function et(t,e){return(nn[t]||{})[e]}function nt(t){return an[t]||{prefix:null,iconName:null}}function at(t){return t.reduce(function(t,e){var n=T(Oe.familyPrefix,e);if(on[e])t.prefix=e;else if(Oe.autoFetchSvg&&["fas","far","fal","fad","fab","fa"].indexOf(e)>-1)t.prefix=e;else if(n){var a="fa"===t.prefix?nt(n):{};t.iconName=a.iconName||n,t.prefix=a.prefix||t.prefix}else e!==Oe.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t},cn())}function rt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function it(t){var e=t.tag,n=t.attributes,a=void 0===n?{}:n,r=t.children,i=void 0===r?[]:r;return"string"==typeof t?I(t):"<".concat(e," ").concat(Y(a),">").concat(i.map(it).join(""),"</").concat(e,">")}function ot(t){return"string"==typeof(t.getAttribute?t.getAttribute(re):null)}function ct(){return!0===Oe.autoReplaceSvg?fn.replace:fn[Oe.autoReplaceSvg]||fn.replace}function st(t){t()}function ft(t,e){var n="function"==typeof e?e:sn;if(0===t.length)n();else{var a=st;Oe.mutateApproach===le&&(a=Vt.requestAnimationFrame||st),a(function(){var e=ct(),a=Je.begin("mutate");t.map(e),a(),n()})}}function lt(){ln=!0}function ut(){ln=!1}function dt(t){if(Gt&&Oe.observeMutations){var e=t.treeCallback,n=t.nodeCallback,a=t.pseudoElementsCallback,r=t.observeMutationsRoot,i=void 0===r?Kt:r;un=new Gt(function(t){ln||R(t).forEach(function(t){if("childList"===t.type&&t.addedNodes.length>0&&!ot(t.addedNodes[0])&&(Oe.searchPseudoElements&&a(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&Oe.searchPseudoElements&&a(t.target.parentNode),"attributes"===t.type&&ot(t.target)&&~we.indexOf(t.attributeName))if("class"===t.attributeName){var r=at(_(t.target)),i=r.prefix,o=r.iconName;i&&t.target.setAttribute("data-prefix",i),o&&t.target.setAttribute("data-icon",o)}else n(t.target)})}),Zt&&un.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mt(){un&&un.disconnect()}function pt(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(t,e){var n=e.split(":"),a=n[0],r=n.slice(1);return a&&r.length>0&&(t[a]=r.join(":").trim()),t},{})),n}function ht(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==undefined?t.innerText.trim():"",r=at(_(t));return e&&n&&(r.prefix=e,r.iconName=n),r.prefix&&a.length>1?r.iconName=et(r.prefix,t.innerText):r.prefix&&1===a.length&&(r.iconName=tt(r.prefix,Z(t.innerText))),r}function gt(t){return dn(t.getAttribute("data-fa-transform"))}function bt(t){var e=t.getAttribute("data-fa-symbol");return null!==e&&(""===e||e)}function vt(t){var e=R(t.attributes).reduce(function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t},{}),n=t.getAttribute("title");return Oe.autoA11y&&(n?e["aria-labelledby"]="".concat(Oe.replacementClass,"-title-").concat(L()):(e["aria-hidden"]="true",e.focusable="false")),e}function yt(t){var e=t.getAttribute("data-fa-mask");return e?at(e.split(" ").map(function(t){return t.trim()})):cn()}function wt(){return{iconName:null,title:null,prefix:null,transform:Ue,symbol:!1,mask:null,extra:{classes:[],styles:{},attributes:{}}}}function xt(t){var e=ht(t),n=e.iconName,a=e.prefix,r=e.rest,i=pt(t),o=gt(t),c=bt(t),s=vt(t),f=yt(t);return{iconName:n,title:t.getAttribute("title"),prefix:a,transform:o,symbol:c,mask:f,extra:{classes:r,styles:i,attributes:s}}}function kt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}function At(t){var e=t[0],n=t[1],a=o(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(a)?{tag:"g",attributes:{"class":"".concat(Oe.familyPrefix,"-").concat(xe.GROUP)},children:[{tag:"path",attributes:{"class":"".concat(Oe.familyPrefix,"-").concat(xe.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{"class":"".concat(Oe.familyPrefix,"-").concat(xe.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}}}}function Ct(e,n){return new He(function(a,r){var i={found:!1,width:512,height:512,icon:bn};if(e&&n&&vn[n]&&vn[n][e])return a(At(vn[n][e]));var o={};"object"===t(Vt.FontAwesomeKitConfig)&&"string"==typeof window.FontAwesomeKitConfig.token&&(o["fa-kit-token"]=Vt.FontAwesomeKitConfig.token),e&&n&&!Oe.showMissingIcons?r(new kt("Icon is missing for prefix ".concat(n," with icon name ").concat(e))):a(i)})}function Ot(t,e){var n=e.iconName,a=e.title,r=e.prefix,i=e.transform,c=e.symbol,s=e.mask,f=e.extra;return new He(function(e){He.all([Ct(n,r),Ct(s.iconName,s.prefix)]).then(function(s){var l=o(s,2),u=l[0],d=l[1];e([t,G({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:c,mask:d,title:a,extra:f,watchable:!0})])})})}function St(t,e){var n=e.title,a=e.transform,r=e.extra,i=null,o=null;if($t){var c=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect();i=s.width/c,o=s.height/c}return Oe.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),He.resolve([t,J({content:t.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}function Pt(t){var e=xt(t);return~e.extra.classes.indexOf(he)?St(t,e):Ot(t,e)}function Nt(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(Zt){var n=Kt.documentElement.classList,a=function(t){return n.add("".concat(fe,"-").concat(t))},r=function(t){return n.remove("".concat(fe,"-").concat(t))},i=Oe.autoFetchSvg?Object.keys(me):Object.keys(yn),o=[".".concat(he,":not([").concat(re,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(re,"])")})).join(", ");if(0!==o.length){var c=[];try{c=R(t.querySelectorAll(o))}catch(l){}if(c.length>0){a("pending"),r("complete");var s=Je.begin("onTree"),f=c.reduce(function(t,e){try{var n=Pt(e);n&&t.push(n)}catch(l){de||l instanceof kt&&console.error(l)}return t},[]);return new He(function(t,n){He.all(f).then(function(n){ft(n,function(){a("active"),a("complete"),r("pending"),"function"==typeof e&&e(),s(),t()})})["catch"](function(){s(),n()})})}}}}function Mt(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;Pt(t).then(function(t){t&&ft([t],e)})}function zt(t,e){var n="".concat(oe).concat(e.replace(":","-"));return new He(function(a,r){if(null!==t.getAttribute(n))return a();var o=R(t.children).filter(function(t){return t.getAttribute(ie)===e})[0],c=Vt.getComputedStyle(t,e),s=c.getPropertyValue("font-family").match(ge),f=c.getPropertyValue("font-weight");if(o&&!s)return t.removeChild(o),a();if(s){var l=c.getPropertyValue("content"),u=~["Solid","Regular","Light","Duotone","Brands"].indexOf(s[1])?pe[s[1].toLowerCase()]:be[f],d=Z(3===l.length?l.substr(1,1):l),m=tt(u,d),p=m;if(!m||o&&o.getAttribute(ce)===u&&o.getAttribute(se)===p)a();else{t.setAttribute(n,p),o&&t.removeChild(o);var h=wt(),g=h.extra;g.attributes[ie]=e,Ct(m,u).then(function(r){var o=G(i({},h,{icons:{main:r,mask:cn()},prefix:u,iconName:p,extra:g,watchable:!0})),c=Kt.createElement("svg");":before"===e?t.insertBefore(c,t.firstChild):t.appendChild(c),c.outerHTML=o.map(function(t){return it(t)}).join("\n"),t.removeAttribute(n),a()})["catch"](r)}}else a()})}function Et(t){return He.all([zt(t,":before"),zt(t,":after")])}function jt(t){return!(t.parentNode===document.head||~ue.indexOf(t.tagName.toUpperCase())||t.getAttribute(ie)||t.parentNode&&"svg"===t.parentNode.tagName)}function Lt(t){if(Zt)return new He(function(e,n){var a=R(t.querySelectorAll("*")).filter(jt).map(Et),r=Je.begin("searchPseudoElements");lt(),He.all(a).then(function(){r(),ut(),e()})["catch"](function(){r(),ut(),n()})})}function Rt(){var t=ne,e=ae,n=Oe.familyPrefix,a=Oe.replacementClass,r=wn;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(a))}return r}function _t(){Oe.autoAddCss&&!An&&(j(Rt()),An=!0)}function Tt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(t){return it(t)})}}),Object.defineProperty(t,"node",{get:function(){if(Zt){var e=Kt.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function It(t){var e=t.prefix,n=void 0===e?"fa":e,a=t.iconName;if(a)return rt(xn.definitions,n,a)||rt(Pe.styles,n,a)}function Yt(t){return function(e){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},a=(e||{}).icon?e:It(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:It(r||{})),t(a,i({},n,{mask:r}))}}function Ft(){Qt&&(Vt.FontAwesome||(Vt.FontAwesome=Pn),g(function(){Nn(),dt({treeCallback:Nt,nodeCallback:Mt,pseudoElementsCallback:Lt})})),Pe.hooks=i({},Pe.hooks,{addPack:function(t,e){Pe.styles[t]=i({},Pe.styles[t]||{},e),rn(),Nn()},addShims:function(t){var e;(e=Pe.shims).push.apply(e,c(t)),rn(),Nn()}})}var Ht=function(){},Dt={},Ut={},Wt=null,qt={mark:Ht,measure:Ht};try{"undefined"!=typeof window&&(Dt=window),"undefined"!=typeof document&&(Ut=document),"undefined"!=typeof MutationObserver&&(Wt=MutationObserver),"undefined"!=typeof performance&&(qt=performance)}catch(Mn){}var Xt=(Dt.navigator||{}).userAgent,Bt=void 0===Xt?"":Xt,Vt=Dt,Kt=Ut,Gt=Wt,Jt=qt,Qt=!!Vt.document,Zt=!!Kt.documentElement&&!!Kt.head&&"function"==typeof Kt.addEventListener&&"function"==typeof Kt.createElement,$t=~Bt.indexOf("MSIE")||~Bt.indexOf("Trident/"),te="___FONT_AWESOME___",ee=16,ne="fa",ae="svg-inline--fa",re="data-fa-i2svg",ie="data-fa-pseudo-element",oe="data-fa-pseudo-element-pending",ce="data-prefix",se="data-icon",fe="fontawesome-i2svg",le="async",ue=["HTML","HEAD","STYLE","SCRIPT"],de=function(){try{return!0}catch(Mn){return!1}}(),me={fas:"solid",far:"regular",fal:"light",fad:"duotone",fab:"brands",fa:"solid"},pe={solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab"},he="fa-layers-text",ge=/Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/,be={900:"fas",400:"far",normal:"far",300:"fal"},ve=[1,2,3,4,5,6,7,8,9,10],ye=ve.concat([11,12,13,14,15,16,17,18,19,20]),we=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xe={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ke=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",xe.GROUP,xe.SWAP_OPACITY,xe.PRIMARY,xe.SECONDARY].concat(ve.map(function(t){return"".concat(t,"x")})).concat(ye.map(function(t){return"w-".concat(t)})),Ae=Vt.FontAwesomeConfig||{};Kt&&"function"==typeof Kt.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(function(t){var e=o(t,2),n=e[0],a=e[1],r=h(p(n));r!==undefined&&null!==r&&(Ae[a]=r)});var Ce=i({},{familyPrefix:ne,replacementClass:ae,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Ae);Ce.autoReplaceSvg||(Ce.observeMutations=!1);var Oe=i({},Ce);Vt.FontAwesomeConfig=Oe;var Se=Vt||{};Se[te]||(Se[te]={}),Se[te].styles||(Se[te].styles={}),Se[te].hooks||(Se[te].hooks={}),Se[te].shims||(Se[te].shims=[]);var Pe=Se[te],Ne=[],Me=function zn(){Kt.removeEventListener("DOMContentLoaded",zn),ze=1,Ne.map(function(t){return t()})},ze=!1;Zt&&((ze=(Kt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Kt.readyState))||Kt.addEventListener("DOMContentLoaded",Me));var Ee,je="pending",Le="settled",Re="fulfilled",_e="rejected",Te=function(){},Ie="undefined"!=typeof global&&"undefined"!=typeof global.process&&"function"==typeof global.process.emit,Ye="undefined"==typeof setImmediate?setTimeout:setImmediate,Fe=[];M.prototype={constructor:M,_state:je,_then:null,_data:undefined,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(Te),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===_e&&Ie&&v(N,this)),this._state===Re||this._state===_e?v(w,n):this._then.push(n),n.then},"catch":function(t){return this.then(null,t)}},M.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new M(function(e,n){function a(t){return o++,function(n){i[t]=n,--o||e(i)}}for(var r,i=[],o=0,c=0;c<t.length;c++)(r=t[c])&&"function"==typeof r.then?r.then(a(c),n):i[c]=r;o||e(i)})},M.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new M(function(e,n){for(var a,r=0;r<t.length;r++)(a=t[r])&&"function"==typeof a.then?a.then(e,n):e(a)})},M.resolve=function(e){return e&&"object"===t(e)&&e.constructor===M?e:new M(function(t){t(e)})},M.reject=function(t){return new M(function(e,n){n(t)})};var He="function"==typeof Promise?Promise:M,De=ee,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1},We="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",qe={x:0,y:0,width:"100%",height:"100%"},Xe=function(){},Be=Oe.measurePerformance&&Jt&&Jt.mark&&Jt.measure?Jt:{mark:Xe,measure:Xe},Ve='FA "5.11.2"',Ke=function(t){return Be.mark("".concat(Ve," ").concat(t," begins")),function(){return Ge(t)}},Ge=function(t){Be.mark("".concat(Ve," ").concat(t," ends")),Be.measure("".concat(Ve," ").concat(t),"".concat(Ve," ").concat(t," begins"),"".concat(Ve," ").concat(t," ends"))},Je={begin:Ke,end:Ge},Qe=function(t,e){return function(n,a,r,i){return t.call(e,n,a,r,i)}},Ze=function(t,e,n,a){var r,i,o,c=Object.keys(t),s=c.length,f=a!==undefined?Qe(e,a):e;for(n===undefined?(r=1,o=t[c[0]]):(r=0,o=n);r<s;r++)o=f(o,t[i=c[r]],i,t);return o},$e=Pe.styles,tn=Pe.shims,en={},nn={},an={},rn=function(){var t=function(t){return Ze($e,function(e,n,a){return e[a]=Ze(n,t,{}),e},{})};en=t(function(t,e,n){return e[3]&&(t[e[3]]=n),t}),nn=t(function(t,e,n){var a=e[2];return t[n]=n,a.forEach(function(e){t[e]=n}),t});var e="far"in $e;an=Ze(tn,function(t,n){var a=n[0],r=n[1],i=n[2];return"far"!==r||e||(r="fas"),t[a]={prefix:r,iconName:i},t},{})};rn();var on=Pe.styles,cn=function(){return{prefix:null,iconName:null,rest:[]}},sn=function(){},fn={replace:function(t){var e=t[0],n=t[1].map(function(t){return it(t)}).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(Oe.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"<!-- ".concat(e.outerHTML," -->"):"");else if(e.parentNode){var a=document.createElement("span");e.parentNode.replaceChild(a,e),a.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~_(e).indexOf(Oe.replacementClass))return fn.replace(t);var a=new RegExp("".concat(Oe.familyPrefix,"-.*"));delete n[0].attributes.style,delete n[0].attributes.id;var r=n[0].attributes["class"].split(" ").reduce(function(t,e){return e===Oe.replacementClass||e.match(a)?t.toSvg.push(e):t.toNode.push(e),t},{toNode:[],toSvg:[]});n[0].attributes["class"]=r.toSvg.join(" ");var i=n.map(function(t){return it(t)}).join("\n");e.setAttribute("class",r.toNode.join(" ")),e.setAttribute(re,""),e.innerHTML=i}},ln=!1,un=null,dn=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce(function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t},e):e};kt.prototype=Object.create(Error.prototype),kt.prototype.constructor=kt;var mn={fill:"currentColor"},pn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},hn={tag:"path",attributes:i({},mn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},gn=i({},pn,{attributeName:"opacity"}),bn={tag:"g",children:[hn,{tag:"circle",attributes:i({},mn,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:i({},pn,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i({},gn,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:i({},mn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:i({},gn,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:i({},mn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i({},gn,{values:"0;0;1;1;0;0;"})}]}]
},vn=Pe.styles,yn=Pe.styles,wn="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}",xn=new(function(){function t(){e(this,t),this.definitions={}}return a(t,[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(function(e){t.definitions[e]=i({},t.definitions[e]||{},r[e]),$(e,r[e]),rn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(function(e){var a=n[e],r=a.prefix,i=a.iconName,o=a.icon;t[r]||(t[r]={}),t[r][i]=o}),t}}]),t}()),kn=function(){Oe.autoReplaceSvg=!1,Oe.observeMutations=!1,mt()},An=!1,Cn={i2svg:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};if(Zt){_t();var e=t.node,n=void 0===e?Kt:e,a=t.callback,r=void 0===a?function(){}:a;return Oe.searchPseudoElements&&Lt(n),Nt(n,r)}return He.reject("Operation requires a DOM of some kind.")},css:Rt,insertCss:function(){An||(j(Rt()),An=!0)},watch:function(){var t=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{},e=t.autoReplaceSvgRoot,n=t.observeMutationsRoot;!1===Oe.autoReplaceSvg&&(Oe.autoReplaceSvg=!0),Oe.observeMutations=!0,g(function(){Nn({autoReplaceSvgRoot:e}),dt({treeCallback:Nt,nodeCallback:Mt,pseudoElementsCallback:Lt,observeMutationsRoot:n})})}},On={transform:function(t){return dn(t)}},Sn=Yt(function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n=e.transform,a=void 0===n?Ue:n,r=e.symbol,o=void 0!==r&&r,c=e.mask,s=void 0===c?null:c,f=e.title,l=void 0===f?null:f,u=e.classes,d=void 0===u?[]:u,m=e.attributes,p=void 0===m?{}:m,h=e.styles,g=void 0===h?{}:h;if(t){var b=t.prefix,v=t.iconName,y=t.icon;return Tt(i({type:"icon"},t),function(){return _t(),Oe.autoA11y&&(l?p["aria-labelledby"]="".concat(Oe.replacementClass,"-title-").concat(L()):(p["aria-hidden"]="true",p.focusable="false")),G({icons:{main:At(y),mask:s?At(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:v,transform:i({},Ue,a),symbol:o,title:l,extra:{attributes:p,styles:g,classes:d}})})}}),Pn={noAuto:kn,config:Oe,dom:Cn,library:xn,parse:On,findIconDefinition:It,icon:Sn,text:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n=e.transform,a=void 0===n?Ue:n,r=e.title,o=void 0===r?null:r,s=e.classes,f=void 0===s?[]:s,l=e.attributes,u=void 0===l?{}:l,d=e.styles,m=void 0===d?{}:d;return Tt({type:"text",content:t},function(){return _t(),J({content:t,transform:i({},Ue,a),title:o,extra:{attributes:u,styles:m,classes:["".concat(Oe.familyPrefix,"-layers-text")].concat(c(f))}})})},counter:function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{},n=e.title,a=void 0===n?null:n,r=e.classes,i=void 0===r?[]:r,o=e.attributes,s=void 0===o?{}:o,f=e.styles,l=void 0===f?{}:f;return Tt({type:"counter",content:t},function(){return _t(),Q({content:t.toString(),title:a,extra:{attributes:s,styles:l,classes:["".concat(Oe.familyPrefix,"-layers-counter")].concat(c(i))}})})},layer:function(t){var e=(arguments.length>1&&arguments[1]!==undefined?arguments[1]:{}).classes,n=void 0===e?[]:e;return Tt({type:"layer"},function(){_t();var e=[];return t(function(t){Array.isArray(t)?t.map(function(t){e=e.concat(t.abstract)}):e=e.concat(t.abstract)}),[{tag:"span",attributes:{"class":["".concat(Oe.familyPrefix,"-layers")].concat(c(n)).join(" ")},children:e}]})},toHtml:it},Nn=function(){var t=(arguments.length>0&&arguments[0]!==undefined?arguments[0]:{}).autoReplaceSvgRoot,e=void 0===t?Kt:t;(Object.keys(Pe.styles).length>0||Oe.autoFetchSvg)&&Zt&&Oe.autoReplaceSvg&&Pn.dom.i2svg({node:e})};E(Ft)}();