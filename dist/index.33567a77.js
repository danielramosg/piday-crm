function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=e.parcelRequiree6f1;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequiree6f1=i),i.register("hOxpW",(function(e,n){t(e.exports,"default",(()=>o));var r=i("3us5W");function o(t){return"string"==typeof t?new(0,r.Selection)([[document.querySelector(t)]],[document.documentElement]):new(0,r.Selection)([[t]],r.root)}})),i.register("3us5W",(function(e,n){t(e.exports,"root",(()=>B)),t(e.exports,"Selection",(()=>R));var r=i("4dcxD"),o=i("e48mM"),u=i("4i911"),s=i("cP92U"),f=i("kePFY"),a=i("hOWaJ"),l=i("5ndv3"),c=i("94na1"),h=i("b4sDG"),p=i("8yR9d"),d=i("awsX1"),g=i("lxGnS"),_=i("lv7c7"),v=i("gJ79D"),y=i("hryK9"),x=i("c7pKF"),m=i("5ouhg"),w=i("6neWh"),b=i("bZhEJ"),A=i("9a8q4"),S=i("3I2BK"),E=i("8G4xj"),N=i("34eax"),C=i("iju2Z"),M=i("h3vbL"),O=i("62NTp"),P=i("03tNP"),W=i("5WMZy"),j=i("ikClj"),L=i("4odnA"),D=i("hSH4f"),q=i("iZ2is"),k=i("3pIv8"),U=i("d4eXd"),B=[null];function R(t,e){this._groups=t,this._parents=e}function K(){return new R([[document.documentElement]],B)}R.prototype=K.prototype={constructor:R,select:r.default,selectAll:o.default,selectChild:u.default,selectChildren:s.default,filter:f.default,data:a.default,enter:l.default,exit:c.default,join:h.default,merge:p.default,selection:function(){return this},order:d.default,sort:g.default,call:_.default,nodes:v.default,node:y.default,size:x.default,empty:m.default,each:w.default,attr:b.default,style:A.default,property:S.default,classed:E.default,text:N.default,html:C.default,raise:M.default,lower:O.default,append:P.default,insert:W.default,remove:j.default,clone:L.default,datum:D.default,on:q.default,dispatch:k.default,[Symbol.iterator]:U.default}})),i.register("4dcxD",(function(e,n){t(e.exports,"default",(()=>u));var r=i("3us5W"),o=i("9rOh8");function u(t){"function"!=typeof t&&(t=(0,o.default)(t));for(var e=this._groups,n=e.length,i=new Array(n),u=0;u<n;++u)for(var s,f,a=e[u],l=a.length,c=i[u]=new Array(l),h=0;h<l;++h)(s=a[h])&&(f=t.call(s,s.__data__,h,a))&&("__data__"in s&&(f.__data__=s.__data__),c[h]=f);return new(0,r.Selection)(i,this._parents)}})),i.register("9rOh8",(function(e,n){function r(){}function i(t){return null==t?r:function(){return this.querySelector(t)}}t(e.exports,"default",(()=>i))})),i.register("e48mM",(function(e,n){t(e.exports,"default",(()=>s));var r=i("3us5W"),o=i("hpRkj"),u=i("aMqra");function s(t){t="function"==typeof t?function(t){return function(){return(0,o.default)(t.apply(this,arguments))}}(t):(0,u.default)(t);for(var e=this._groups,n=e.length,i=[],s=[],f=0;f<n;++f)for(var a,l=e[f],c=l.length,h=0;h<c;++h)(a=l[h])&&(i.push(t.call(a,a.__data__,h,l)),s.push(a));return new(0,r.Selection)(i,s)}})),i.register("hpRkj",(function(e,n){function r(t){return null==t?[]:Array.isArray(t)?t:Array.from(t)}t(e.exports,"default",(()=>r))})),i.register("aMqra",(function(e,n){function r(){return[]}function i(t){return null==t?r:function(){return this.querySelectorAll(t)}}t(e.exports,"default",(()=>i))})),i.register("4i911",(function(e,n){t(e.exports,"default",(()=>s));var r=i("8doa3"),o=Array.prototype.find;function u(){return this.firstElementChild}function s(t){return this.select(null==t?u:function(t){return function(){return o.call(this.children,t)}}("function"==typeof t?t:(0,r.childMatcher)(t)))}})),i.register("8doa3",(function(e,n){function r(t){return function(){return this.matches(t)}}function i(t){return function(e){return e.matches(t)}}t(e.exports,"default",(()=>r)),t(e.exports,"childMatcher",(()=>i))})),i.register("cP92U",(function(e,n){t(e.exports,"default",(()=>s));var r=i("8doa3"),o=Array.prototype.filter;function u(){return Array.from(this.children)}function s(t){return this.selectAll(null==t?u:function(t){return function(){return o.call(this.children,t)}}("function"==typeof t?t:(0,r.childMatcher)(t)))}})),i.register("kePFY",(function(e,n){t(e.exports,"default",(()=>u));var r=i("3us5W"),o=i("8doa3");function u(t){"function"!=typeof t&&(t=(0,o.default)(t));for(var e=this._groups,n=e.length,i=new Array(n),u=0;u<n;++u)for(var s,f=e[u],a=f.length,l=i[u]=[],c=0;c<a;++c)(s=f[c])&&t.call(s,s.__data__,c,f)&&l.push(s);return new(0,r.Selection)(i,this._parents)}})),i.register("hOWaJ",(function(e,n){t(e.exports,"default",(()=>l));var r=i("3us5W"),o=i("5ndv3"),u=i("iCdMC");function s(t,e,n,r,i,u){for(var s,f=0,a=e.length,l=u.length;f<l;++f)(s=e[f])?(s.__data__=u[f],r[f]=s):n[f]=new(0,o.EnterNode)(t,u[f]);for(;f<a;++f)(s=e[f])&&(i[f]=s)}function f(t,e,n,r,i,u,s){var f,a,l,c=new Map,h=e.length,p=u.length,d=new Array(h);for(f=0;f<h;++f)(a=e[f])&&(d[f]=l=s.call(a,a.__data__,f,e)+"",c.has(l)?i[f]=a:c.set(l,a));for(f=0;f<p;++f)l=s.call(t,u[f],f,u)+"",(a=c.get(l))?(r[f]=a,a.__data__=u[f],c.delete(l)):n[f]=new(0,o.EnterNode)(t,u[f]);for(f=0;f<h;++f)(a=e[f])&&c.get(d[f])===a&&(i[f]=a)}function a(t){return t.__data__}function l(t,e){if(!arguments.length)return Array.from(this,a);var n=e?f:s,i=this._parents,o=this._groups;"function"!=typeof t&&(t=(0,u.default)(t));for(var l=o.length,h=new Array(l),p=new Array(l),d=new Array(l),g=0;g<l;++g){var _=i[g],v=o[g],y=v.length,x=c(t.call(_,_&&_.__data__,g,i)),m=x.length,w=p[g]=new Array(m),b=h[g]=new Array(m);n(_,v,w,b,d[g]=new Array(y),x,e);for(var A,S,E=0,N=0;E<m;++E)if(A=w[E]){for(E>=N&&(N=E+1);!(S=b[N])&&++N<m;);A._next=S||null}}return(h=new(0,r.Selection)(h,i))._enter=p,h._exit=d,h}function c(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}})),i.register("5ndv3",(function(e,n){t(e.exports,"default",(()=>u)),t(e.exports,"EnterNode",(()=>s));var r=i("jUPKb"),o=i("3us5W");function u(){return new(0,o.Selection)(this._enter||this._groups.map(r.default),this._parents)}function s(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}s.prototype={constructor:s,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}})),i.register("jUPKb",(function(e,n){function r(t){return new Array(t.length)}t(e.exports,"default",(()=>r))})),i.register("iCdMC",(function(e,n){function r(t){return function(){return t}}t(e.exports,"default",(()=>r))})),i.register("94na1",(function(e,n){t(e.exports,"default",(()=>u));var r=i("jUPKb"),o=i("3us5W");function u(){return new(0,o.Selection)(this._exit||this._groups.map(r.default),this._parents)}})),i.register("b4sDG",(function(e,n){function r(t,e,n){var r=this.enter(),i=this,o=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=e&&(i=e(i))&&(i=i.selection()),null==n?o.remove():n(o),r&&i?r.merge(i).order():i}t(e.exports,"default",(()=>r))})),i.register("8yR9d",(function(e,n){t(e.exports,"default",(()=>o));var r=i("3us5W");function o(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,o=n.length,u=i.length,s=Math.min(o,u),f=new Array(o),a=0;a<s;++a)for(var l,c=n[a],h=i[a],p=c.length,d=f[a]=new Array(p),g=0;g<p;++g)(l=c[g]||h[g])&&(d[g]=l);for(;a<o;++a)f[a]=n[a];return new(0,r.Selection)(f,this._parents)}})),i.register("awsX1",(function(e,n){function r(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,i=t[e],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&4^r.compareDocumentPosition(u)&&u.parentNode.insertBefore(r,u),u=r);return this}t(e.exports,"default",(()=>r))})),i.register("lxGnS",(function(e,n){t(e.exports,"default",(()=>o));var r=i("3us5W");function o(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=u);for(var n=this._groups,i=n.length,o=new Array(i),s=0;s<i;++s){for(var f,a=n[s],l=a.length,c=o[s]=new Array(l),h=0;h<l;++h)(f=a[h])&&(c[h]=f);c.sort(e)}return new(0,r.Selection)(o,this._parents).order()}function u(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}})),i.register("lv7c7",(function(e,n){function r(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}t(e.exports,"default",(()=>r))})),i.register("gJ79D",(function(e,n){function r(){return Array.from(this)}t(e.exports,"default",(()=>r))})),i.register("hryK9",(function(e,n){function r(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null}t(e.exports,"default",(()=>r))})),i.register("c7pKF",(function(e,n){function r(){let t=0;for(const e of this)++t;return t}t(e.exports,"default",(()=>r))})),i.register("5ouhg",(function(e,n){function r(){return!this.node()}t(e.exports,"default",(()=>r))})),i.register("6neWh",(function(e,n){function r(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var i,o=e[n],u=0,s=o.length;u<s;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this}t(e.exports,"default",(()=>r))})),i.register("bZhEJ",(function(e,n){t(e.exports,"default",(()=>c));var r=i("fEEcv");function o(t){return function(){this.removeAttribute(t)}}function u(t){return function(){this.removeAttributeNS(t.space,t.local)}}function s(t,e){return function(){this.setAttribute(t,e)}}function f(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function a(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function l(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function c(t,e){var n=(0,r.default)(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((null==e?n.local?u:o:"function"==typeof e?n.local?l:a:n.local?f:s)(n,e))}})),i.register("fEEcv",(function(e,n){t(e.exports,"default",(()=>o));var r=i("7cQXC");function o(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),r.default.hasOwnProperty(e)?{space:r.default[e],local:t}:t}})),i.register("7cQXC",(function(e,n){t(e.exports,"xhtml",(()=>r)),t(e.exports,"default",(()=>i));var r="http://www.w3.org/1999/xhtml",i={svg:"http://www.w3.org/2000/svg",xhtml:r,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}})),i.register("9a8q4",(function(e,n){t(e.exports,"default",(()=>f));var r=i("bQhLV");function o(t){return function(){this.style.removeProperty(t)}}function u(t,e,n){return function(){this.style.setProperty(t,e,n)}}function s(t,e,n){return function(){var r=e.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}function f(t,e,n){return arguments.length>1?this.each((null==e?o:"function"==typeof e?s:u)(t,e,null==n?"":n)):function(t,e){return t.style.getPropertyValue(e)||(0,r.default)(t).getComputedStyle(t,null).getPropertyValue(e)}(this.node(),t)}})),i.register("bQhLV",(function(e,n){function r(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}t(e.exports,"default",(()=>r))})),i.register("3I2BK",(function(e,n){function r(t){return function(){delete this[t]}}function i(t,e){return function(){this[t]=e}}function o(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function u(t,e){return arguments.length>1?this.each((null==e?r:"function"==typeof e?o:i)(t,e)):this.node()[t]}t(e.exports,"default",(()=>u))})),i.register("8G4xj",(function(e,n){function r(t){return t.trim().split(/^|\s+/)}function i(t){return t.classList||new o(t)}function o(t){this._node=t,this._names=r(t.getAttribute("class")||"")}function u(t,e){for(var n=i(t),r=-1,o=e.length;++r<o;)n.add(e[r])}function s(t,e){for(var n=i(t),r=-1,o=e.length;++r<o;)n.remove(e[r])}function f(t){return function(){u(this,t)}}function a(t){return function(){s(this,t)}}function l(t,e){return function(){(e.apply(this,arguments)?u:s)(this,t)}}function c(t,e){var n=r(t+"");if(arguments.length<2){for(var o=i(this.node()),u=-1,s=n.length;++u<s;)if(!o.contains(n[u]))return!1;return!0}return this.each(("function"==typeof e?l:e?f:a)(n,e))}t(e.exports,"default",(()=>c)),o.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}}})),i.register("34eax",(function(e,n){function r(){this.textContent=""}function i(t){return function(){this.textContent=t}}function o(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function u(t){return arguments.length?this.each(null==t?r:("function"==typeof t?o:i)(t)):this.node().textContent}t(e.exports,"default",(()=>u))})),i.register("iju2Z",(function(e,n){function r(){this.innerHTML=""}function i(t){return function(){this.innerHTML=t}}function o(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function u(t){return arguments.length?this.each(null==t?r:("function"==typeof t?o:i)(t)):this.node().innerHTML}t(e.exports,"default",(()=>u))})),i.register("h3vbL",(function(e,n){function r(){this.nextSibling&&this.parentNode.appendChild(this)}function i(){return this.each(r)}t(e.exports,"default",(()=>i))})),i.register("62NTp",(function(e,n){function r(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function i(){return this.each(r)}t(e.exports,"default",(()=>i))})),i.register("03tNP",(function(e,n){t(e.exports,"default",(()=>o));var r=i("bkOxa");function o(t){var e="function"==typeof t?t:(0,r.default)(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))}})),i.register("bkOxa",(function(e,n){t(e.exports,"default",(()=>f));var r=i("fEEcv"),o=i("7cQXC");function u(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===o.xhtml&&e.documentElement.namespaceURI===o.xhtml?e.createElement(t):e.createElementNS(n,t)}}function s(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function f(t){var e=(0,r.default)(t);return(e.local?s:u)(e)}})),i.register("5WMZy",(function(e,n){t(e.exports,"default",(()=>s));var r=i("bkOxa"),o=i("9rOh8");function u(){return null}function s(t,e){var n="function"==typeof t?t:(0,r.default)(t),i=null==e?u:"function"==typeof e?e:(0,o.default)(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)}))}})),i.register("ikClj",(function(e,n){function r(){var t=this.parentNode;t&&t.removeChild(this)}function i(){return this.each(r)}t(e.exports,"default",(()=>i))})),i.register("4odnA",(function(e,n){function r(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function i(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function o(t){return this.select(t?i:r)}t(e.exports,"default",(()=>o))})),i.register("hSH4f",(function(e,n){function r(t){return arguments.length?this.property("__data__",t):this.node().__data__}t(e.exports,"default",(()=>r))})),i.register("iZ2is",(function(e,n){function r(t){return function(){var e=this.__on;if(e){for(var n,r=0,i=-1,o=e.length;r<o;++r)n=e[r],t.type&&n.type!==t.type||n.name!==t.name?e[++i]=n:this.removeEventListener(n.type,n.listener,n.options);++i?e.length=i:delete this.__on}}}function i(t,e,n){return function(){var r,i=this.__on,o=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(i)for(var u=0,s=i.length;u<s;++u)if((r=i[u]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),void(r.value=e);this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function o(t,e,n){var o,u,s=function(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}))}(t+""),f=s.length;if(!(arguments.length<2)){for(a=e?i:r,o=0;o<f;++o)this.each(a(s[o],e,n));return this}var a=this.node().__on;if(a)for(var l,c=0,h=a.length;c<h;++c)for(o=0,l=a[c];o<f;++o)if((u=s[o]).type===l.type&&u.name===l.name)return l.value}t(e.exports,"default",(()=>o))})),i.register("3pIv8",(function(e,n){t(e.exports,"default",(()=>f));var r=i("bQhLV");function o(t,e,n){var i=(0,r.default)(t),o=i.CustomEvent;"function"==typeof o?o=new o(e,n):(o=i.document.createEvent("Event"),n?(o.initEvent(e,n.bubbles,n.cancelable),o.detail=n.detail):o.initEvent(e,!1,!1)),t.dispatchEvent(o)}function u(t,e){return function(){return o(this,t,e)}}function s(t,e){return function(){return o(this,t,e.apply(this,arguments))}}function f(t,e){return this.each(("function"==typeof e?s:u)(t,e))}})),i.register("d4eXd",(function(e,n){function*r(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r,i=t[e],o=0,u=i.length;o<u;++o)(r=i[o])&&(yield r)}t(e.exports,"default",(()=>r))}));
//# sourceMappingURL=index.33567a77.js.map