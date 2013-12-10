define("magix/magix",function(){var e=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,s=0,c="/",f="vframe",u="\n",m=function(){},v={tagName:f,rootId:"magix_vf_root",execError:m},l=v.hasOwnProperty,h=function(e,t){return e?l.call(e,t):e},d=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=C.isObject(t)?x(e,t):h(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},g=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},p=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new p(e,t)},x=function(e,t,r){for(var n in t)r&&h(r,n)||(e[n]=t[n]);return e};x(p.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,h(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=s++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,o=a+e,c=i[o];if(!h(i,o)){if(i.length>=n.b){i.sort(g);for(var f=n.b-n.x;f--;)c=i.pop(),delete i[c.k],c.m&&w(c.m,c.o,c)}c={},i.push(c),i[o]=c}return c.o=e,c.k=o,c.v=t,c.f=1,c.t=s++,c.m=r,t},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e],r.m&&(w(r.m,r.o,r),r.m=n))},has:function(e){return e=a+e,h(this.c,e)}});var y=p(60),b=p(),w=function(e,t,r,n,i,a){for(C.isArray(e)||(e=[e]),t&&(C.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){v.execError(o)}return i},C={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:x,has:h,safeExec:w,noop:m,config:d(v),start:function(e){var t=this;x(v,e),t.libRequire(v.iniFile,function(r){v=x(v,r,e),v["!tnc"]=v.tagName!=f;var n=v.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(v.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)h(e,r)&&t.push(r);return t},local:d({}),path:function(i,a){var s=i+u+a,f=b.get(s);if(!f){if(o.test(a))f=a;else if(i=i.replace(r,n).replace(t,n)+c,a.charAt(0)==c){var m=o.test(i)?8:0,v=i.indexOf(c,m);f=i.substring(0,v)+a}else f=i+a;for(;e.test(f);)f=f.replace(e,"$1/");b.set(s,f)}return f},pathToObject:function(e,t){var s=e+u+t,f=y.get(s);if(!f){f={};var m={},v=n;r.test(e)?v=e.replace(r,n):~e.indexOf("=")||(v=e);var l=e.replace(v,n);if(v&&o.test(v)){var h=v.indexOf(c,8);v=~h?v.substring(h):c}l.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}m[r]=n}),f[a]=v,f.params=m,y.set(s,f)}return f},objectToPath:function(e,t,r){var n,i=e[a],o=[],s=e.params;for(var c in s)n=s[c],(!r||n||h(r,c))&&(t&&(n=encodeURIComponent(n)),o.push(c+"="+n));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(C.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:p},E=Object.prototype.toString;return x(C,{libRequire:function(e,t){e?seajs.use(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==E.call(e)},isString:function(e){return"[object String]"==E.call(e)},isNumber:function(e){return"[object Number]"==E.call(e)},isRegExp:function(e){return"[object RegExp]"==E.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,C.mix(e.prototype,r),C.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e){var t,r,n,i,a=e("magix/magix"),o=e("magix/event"),s=window,c="",f="pathname",u="view",m=a.has,v=a.mix,l=document,h=a.keys,d=/^UTF-8$/i.test(l.charset||l.characterSet||"UTF-8"),g=a.config(),p=a.cache(),x=a.cache(40),y={params:{},href:c},b=/#.*$/,w=/^[^#]*#?!?/,$="params",C=g.nativeHistory,E=function(e,t,r){if(e){r=this[$],a.isString(e)&&(e=e.split(","));for(var n=0;e.length>n&&!(t=m(r,e[n]));n++);}return t},M=function(){return this[f]},T=function(){return this[u]},P=function(e,t,r,n){return r=this,n=r[$],arguments.length>1?n[e]=t:n[e]},O=function(e){var t=a.pathToObject(e,d),r=t[f];return r&&i&&(t[f]=a.path(s.location[f],r)),t},A=v({viewInfo:function(e,t){var n,i;if(!r){r={rs:g.routes||{},nf:g.notFoundView};var o=g.defaultView;r.dv=o;var s=g.defaultPathname||c;n=r.rs,r.f=a.isFunction(n),r.f||n[s]||!o||(n[s]=o),r[f]=s}return e||(e=r[f]),n=r.rs,i=r.f?n.call(g,e,t):n[e],{view:i||r.nf||r.dv,pathname:i||C||r.nf?e:r[f]}},start:function(){var e=A,t=s.history;n=C&&t.pushState,i=C&&!n,n?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||s.location.href;var r=A,n=p.get(e);if(!n){var i=e.replace(b,c),a=e.replace(w,c),o=O(i),m=O(a),l={};v(l,o[$]),v(l,m[$]),n={get:P,set:P,href:e,refHref:y.href,srcQuery:i,srcHash:a,query:o,hash:m,params:l},p.set(e,n)}if(t&&!n[u]){var h;h=C?n.hash[f]||n.query[f]:n.hash[f];var d=r.viewInfo(h,n);v(n,d)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=x.get(i);if(!a){var o,s,c;a={},a[u]=c,a[f]=c,a[$]={};var m,v,l=[f,u];for(m=1;m>=0;m--)v=l[m],s=e[v],c=t[v],s!=c&&(a[v]={from:s,to:c},o=1);var d=e[$],g=t[$];for(l=h(d).concat(h(g)),m=l.length-1;m>=0;m--)v=l[m],s=d[v],c=g[v],s!=c&&(a[$][v]={from:s,to:c},o=1);a.occur=o,a.isParam=E,a.isPathname=M,a.isView=T,x.set(i,a)}return a},route:function(){var e=A,r=e.parseQH(0,1),n=!y.get,i=e.getChged(y,r);y=r,i.occur&&(t=r,e.fire("changed",{location:r,changed:i,force:n}))},navigate:function(e,r,o){var s=A;if(!r&&a.isObject(e)&&(r=e,e=c),r&&(e=a.objectToPath({params:r,pathname:e},d)),e){var u=O(e),l={};if(l[$]=v({},u[$]),l[f]=u[f],l[f]){if(i){var h=t.query[$];for(var g in h)m(h,g)&&!m(l[$],g)&&(l[$][g]=c)}}else{var p=v({},t[$]);l[$]=v(p,l[$]),l[f]=t[f]}var x,y=a.objectToPath(l,d,t.query[$]);x=n?y!=t.srcQuery:y!=t.srcHash,x&&(n?(s.poped=1,history[o?"replaceState":"pushState"](c,c,y),s.route()):(v(l,t,l),l.srcHash=y,l.hash={params:l[$],pathname:l[f]},s.fire("!ul",{loc:t=l}),y="#!"+y,o?location.replace(y):location.hash=y))}}},o);return A.useState=function(){var e=A,t=location.href;s.addEventListener("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())},!1)},A.useHash=function(){s.addEventListener("hashchange",A.route,!1)},A}),define("magix/body",["magix/magix"],function(e){var t,r=e("magix/magix"),n=r.has,i=r.mix,a={},o=document.body,s={},c=String.fromCharCode(26),f="mx-ei",u="mx-owner",m={},v=65536,l="on",h=",",d=function(e){return e.id||(e.id="mx-e-"+v--)},g=function(e,t,r){return e&&e.setAttribute&&(r?e.setAttribute(t,r):r=e.getAttribute(t)),r},p={special:function(e){i(a,e)},process:function(e){if(e=e||window.event,e&&!e[l]){var r=e.target||e.srcElement||o;for(e[l]=1;r&&1!=r.nodeType;)r=r.parentNode;var i=r,a=e.type,s=m[a]||(m[a]=RegExp(h+a+"(?:,|$)"));if(!s.test(g(r,f))){for(var v,p,x="mx-"+a,y=[];i&&(v=g(i,x),p=g(i,f),!v&&!s.test(p));)y.push(i),i=i.parentNode;if(v){var b,w=v.split(c);if(w.length>1&&(b=w[0],v=w.pop()),b=b||g(i,u),!b)for(var $=i,C=t.all();$;){if(n(C,$.id)){g(i,u,b=$.id);break}$=$.parentNode}if(!b)throw Error("bad:"+v);var E=t.get(b),M=E&&E.view;M&&M.processEvent({info:v,se:e,st:a,tId:d(r),cId:d(i)})}else for(var T;y.length;)T=y.shift(),p=g(T,f)||l,s.test(p)||(p=p+h+a,g(T,f,p))}}},act:function(e,r,n){var i=s[e]||0,c=i>0?1:0;if(i+=r?-c:c,!i){n&&(t=n);var f=a[e];f?p.lib(o,e,r,p.process):o[l+e]=r?null:p.process,r||(i=1)}s[e]=i}},x={focus:2,blur:2,mouseenter:2,mouseleave:2};return p.special(x),p.lib=function(e,t,r,n){var i=x[t];1==i?$(e)[r?"off":"on"](t,n):$(e)[(r?"un":"")+"delegate"]("[mx-"+t+"]",t,n)},p}),define("magix/event",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,m=c.length,v=m-1;m--;)f=a?m:v-m,u=c[f],(u.d||u.r)&&(c.splice(f,1),v--),u.d||n(u.f,t,s)}i&&delete s[o]},on:function(e,n,i){var a=r(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},off:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,!0)}};return i}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e){var t,r,n,i,a,o=e("magix/magix"),s=e("magix/event"),c=e("magix/view"),f=document,u=f.body,m=65536,v=o.safeExec,l=[],h=l.slice,d=o.mix,g=o.config("tagName"),p=o.config("rootId"),x=o.config("!tnc"),y=o.has,b=x?"mx-vframe":"mx-defer",w=u.contains,$=x&&u.querySelectorAll,C=" "+g+"[mx-vframe]",E="alter",M="created",T=function(e){return"object"==typeof e?e:f.getElementById(e)},P=function(e,t,r){return t=T(e),t&&(r=$?f.querySelectorAll("#"+t.id+C):t.getElementsByTagName(g)),r||l},O=function(e){return e.id||(e.id="magix_vf_"+m--)},A=function(e,t,r){if(e=T(e),t=T(t),e&&t)if(e!==t)try{r=w?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},V=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=a};return d(V,{root:function(e,r,o){if(!t){n=r,i=o,a=e;var s=T(p);s||(s=f.createElement(g),s.id=p,u.insertBefore(s,u.firstChild)),t=new V(p),e.add(t)}return t}}),d(d(V.prototype,s),{mountView:function(e,t,r){var s=this,f=T(s.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),s.unmountView(),e){var u=o.pathToObject(e),m=u.pathname,l=--s.sign;o.libRequire(m,function(e){if(l==s.sign){c.prepare(e);var o=new e({owner:s,id:s.id,$:T,path:m,vom:a,location:n});s.view=o,o.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),s.mountZoneVframes()),o.on("rendered",function(){s.mountZoneVframes()}),o.on("prerender",function(){s.unmountZoneVframes(0,1)||s.cAlter()}),o.on("inited",function(){s.viewInited=1,s.fire("viewInited",{view:o}),r&&v(r,o,s)})},0),t=t||{},o.load(d(t,u.params,t),i)}})}},unmountView:function(){var e=this;if(e.view){r||(r={}),e.unmountZoneVframes(0,1),e.cAlter(r),e.view.oust();var t=T(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,r=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r,n){var i=this,o=a.get(e);return o||(o=new V(e),o.pId=i.id,y(i.cM,e)||i.cC++,i.cM[e]=1,a.add(o)),o.mountView(t,r,n),o},mountZoneVframes:function(e,t,r){var n=this,i=e||n.id;n.unmountZoneVframes(i,1);var a=P(i),o=a.length,s={};if(o)for(var c,f,u,m,v=0;o>v;v++)if(c=a[v],f=O(c),!y(s,f)&&(u=c.getAttribute("mx-view"),m=!c.getAttribute(b),m=m!=x,m||u)){n.mountVframe(f,u,t,r);for(var l,h=P(c),d=0,g=h.length;g>d;d++)l=h[d],s[O(l)]=1}n.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=a.get(e);if(n){var i=n.fcc;n.unmountView(),a.remove(e,i);var o=a.get(n.pId);o&&y(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i=this,a=i.cM;for(n in a)e?A(n,e)&&i.unmountVframe(n,r=1):i.unmountVframe(n,r=1);return t||i.cCreated(),r},invokeView:function(e){var t,r=this,n=r.view,i=r.viewInited&&n[e],a=h.call(arguments,1);return i&&(t=v(i,a,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(M,e),t.fire(M,e)),a.vfCreated();var n=t.id,i=a.get(t.pId);i&&!y(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(E,e),t.fire(E,e));var i=a.get(t.pId);i&&y(i.rM,n)&&(i.rC--,delete i.rM[n],i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(t&&t.sign>0&&t.rendered){var r=t.olChanged(i),s={location:n,changed:i,prevent:function(){this.cs=l},toChildren:function(e){e=e||l,o.isString(e)&&(e=e.split(",")),this.cs=e}};r&&v(t.locationChange,s,t);for(var c,f=s.cs||o.keys(e.cM),u=0,m=f.length;m>u;u++)c=a.get(f[u]),c&&c.locChged()}}}),V}),define("magix/view",function(e){var t=e("magix/magix"),r=e("magix/event"),n=e("magix/body"),i=t.safeExec,a=t.has,o=",",s=[],c=t.noop,f=t.mix,u="~",m=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},v=t.cache(40),l="<",h=">",d=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,g=String.fromCharCode(26),p={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},x=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,y=/(\w+):([^,]+)/g,b=/([$\w]+)<([\w,]+)>/,w=function(e){var t=this;f(t,e),t.sign=1,i(w.ms,[e],t)};w.ms=[],w.prepare=function(e){if(!e[u]){e[u]=1;var t,r,n,i,s,f=e.prototype,v={};for(var d in f)if(a(f,d))if(t=f[d],r=d.match(b))for(n=r[1],i=r[2],i=i.split(o),s=i.length-1;s>-1;s--)r=i[s],v[r]=1,f[n+l+r+h]=t;else"render"==d&&t!=c&&(f[d]=m(t));i&&(f.$evts=v)}},w.mixin=function(e,t){t&&w.ms.push(t),f(w.prototype,e)},f(f(w.prototype,r),{render:c,locationChange:c,init:c,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,a=function(a){if(n>0&&n==e.sign){e.template=e.wrapMxEvent(a),e.delegateEvents(),e.fire("interact",{tmpl:t},1),i(e.init,r,e),e.fire("inited",0,1),i(e.render,s,e);var o=!t&&!e.rendered;o&&(e.rendered=!0,e.fire("primed",0,1))}};t?e.fetchTmpl(e.path,a):a()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=!0),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(d,"$&"+this.id+g)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(o)))},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var r=e.info,n=e.se,a=v.get(r);a||(a=r.match(x),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(y,function(e,t,r){a.p[t]=r}),v.set(r,a));var o=a.n+l+e.st+h,s=t[o];if(s){var c=p[a.f];c&&c.call(p,n),i(s,f({currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:n,params:a.p},p),t)}}},delegateEvents:function(e){var t=this,r=t.$evts,i=t.vom;for(var a in r)n.act(a,e,i)}});var C,E="?t="+Date.now(),M={},T={};return w.prototype.fetchTmpl=function(e,t){var r=this,n="template"in r;if(n)t(r.template);else if(a(M,e))t(M[e]);else{var o=e.indexOf("/");if(!C){var s=e.substring(0,o);C=seajs.data.paths[s]}e=e.substring(o+1);var c=C+e+".html",f=T[c],u=function(r){t(M[e]=r)};f?f.push(u):(f=T[c]=[u],$.ajax({url:c+E,success:function(e){i(f,e),delete T[c]},error:function(e,t){i(f,t),delete T[c]}}))}},w.extend=function(e,r,n){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&i(r,arguments,this)};return o.extend=a.extend,t.extend(o,a,e,n)},w}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e){var t=e("magix/vframe"),r=e("magix/magix"),n=e("magix/event"),i=r.has,a=r.mix,o=0,s=0,c=0,f=0,u={},m={},v={},l=r.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,l.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],l.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&l.fire("progress",{percent:c=e},f=1==e)}},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,a(m,n),!r){a(v,e.changed);var i=t.root(l,m,v);v.view?i.mountView(n.view):i.locChged()}}},n);return l}),define("mxext/mmanager",["magix/magix","magix/event"],function(e){var t=e("magix/magix"),r=e("magix/event"),n=t.has,i=t.safeExec,a=t.mix,o="mr",s=String.fromCharCode(26),c=t.isFunction,f=12e5,u=function(e,t,r){t=[];for(r in e)t.push(r,o,e[r]);return t},m=function(e,t){return[e.name,u(t.urlParams),u(t.postParams)].join(s)},v=Date.now||function(){return+new Date},l=v(),h=function(e){throw Error(e)},d=function(e){var r=this;r.$mClass=e,r.$mCache=t.cache(),r.$mCacheKeys={},r.$mMetas={},r.id="mm"+l--,i(d.ms,arguments,r)},g=[].slice,p=function(e,t,r){return function(){return e.apply(t,[t,r].concat(g.call(arguments)))}},x=function(e,t,r){var n=r.key,a=r.cKeys,o=a[n];if(o){var s=o.q;delete a[n],i(s,e)}},y=function(e){return function(){var t=new $(this),r=arguments,n=r[r.length-1];return n&&n.manage&&(n.manage(t.id,t),r=g.call(r,0,-1)),t[e].apply(t,r)}},b=function(e,t){return function(r,n){var i=g.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};a(d,{create:function(e){return e||h("ungiven modelClass"),new d(e)},mixin:function(e,t){t&&d.ms.push(t),a(d.prototype,e)},ms:[]});var w={ALL:1,ONE:2,ORDER:4},$=function(e){this.$host=e,this.$busy=0,this.$reqs={},this.id=o+l--};return a($.prototype,{send:function(e,r,a,o){var s=this;if(s.$busy)return s.next(function(){this.send(e,r,a,o)}),s;s.$busy=1;var c=s.$host,f=c.$mCache,u=c.$mCacheKeys,m=s.$reqs;t.isArray(e)||(e=[e]);var l,d,g,y=e.length,b=0,$=Array(y),C=[],E={},M=[],T=t.isArray(r);T&&(C=Array(r.length));for(var P,O=function(e,t,n){if(!s.$destroy){b++,delete m[e.id];var o=e.$mm,u=o.key;if($[t]=e,n)l=1,g=1,d=n,E.msg=n,E[t]=n;else{if(g=0,!u||u&&!f.has(u)){u&&f.set(u,e),o.done=v();var h=o.after,p=o.meta;h&&i(h,[e,p]),c.fire("done",{model:e,meta:p})}!e.fromCache&&o.used>0&&(e.fromCache=1),o.used++}if(a==w.ONE){var x=T?r[t]:r;x&&(C[t]=i(x,[g?E:null,e,E],s))}else if(a==w.ORDER){M[t]={m:e,e:g,s:n};for(var P,O,A=M.i||0;P=M[A];A++)O=T?r[A]:r,P.e&&(E.msg=P.s,E[A]=P.s),C[A]=i(O,[P.e?E:null,P.m,E].concat(C),s);M.i=A}b>=y&&(l||(E=null),a==w.ALL?($.unshift(E),C[0]=E,C[1]=i(r,$,s)):C.unshift(E),s.$ntId=setTimeout(function(){s.doNext(C)},30))}},A=0;e.length>A;A++)if(P=e[A]){var V=c.getModel(P,o),I=V.cKey,j=V.entity,k=p(O,j,A);k.id=s.id,I&&n(u,I)?u[I].q.push(k):V.update?(m[j.id]=j,I&&(u[I]={q:[k],e:j},k=x),j.request(k,{key:I,cKeys:u})):k()}else h("empty model");return s},fetchAll:function(e,t){return this.send(e,t,w.ALL)},saveAll:function(e,t){return this.send(e,t,w.ALL,1)},fetchOrder:b(w.ORDER),saveOrder:b(w.ORDER,1),saveOne:b(w.ONE,1),fetchOne:b(w.ONE),abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqs,a=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.key;if(c&&n(a,c)){for(var f,u=a[c],m=u.q,v=[],l=[],h=0;m.length>h;h++)f=m[h],f.id!=e.id?v.push(f):e.$destroy||l.push(f);i(l,["abort"],e),v.length?u.q=v:s.abort()}else s.abort()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$busy){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$busy=0;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=1,e.abort()}}),a(a(d.prototype,r),{registerModels:function(e){var r=this,n=r.$mMetas;t.isArray(e)||(e=[e]);for(var i,a,o=0;e.length>o;o++)i=e[o],i&&(a=i.name,a?n[a]&&h("already exist:"+a):h("miss name"),i.cache&&(i.cacheKey||(i.cacheKey=m),i.cacheTime||(i.cacheTime=f)),n[a]=i)},registerMethods:function(e){a(this,e)},createModel:function(e){var t=this,r=t.getModelMeta(e),n=new t.$mClass;n.set(r),n.$mm={used:0};var a=e.before||r.before;c(a)&&i(a,[n,r]);var o=e.after||r.after;n.$mm.after=o;var s=e.cacheKey||r.cacheKey;return c(s)&&(s=i(s,[r,e])),n.$mm.key=s,n.$mm.meta=r,n.set(e),n.setUrlParams(r.urlParams),n.setPostParams(r.postParams),n.setUrlParams(e.urlParams),n.setPostParams(e.postParams),t.fire("inited",{model:n,meta:r}),n},getModelMeta:function(e){var r,n=this,i=n.$mMetas;r=t.isString(e)?e:e.name;var a=i[r];return a||h("Unfound:"+r),a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=1,r=i.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:y("saveAll"),fetchAll:y("fetchAll"),saveOrder:y("saveOrder"),fetchOrder:y("fetchOrder"),saveOne:y("saveOne"),fetchOne:y("fetchOne"),createMRequest:function(e){var t=new $(this);return e&&e.manage&&e.manage(t.id,t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(e){var r,n,a=this,o=a.$mCache,s=null;if(t.isString(e)?r=e:(n=a.getModelMeta(e),r=e.cacheKey||n.cacheKey,c(r)&&(r=i(r,[n,e]))),r){var f=a.$mCacheKeys,u=f[r];if(u)s=u.e;else if(s=o.get(r)){n||(n=s.$mm.meta);var m=e.cacheTime||n.cacheTime||0;c(m)&&(m=i(m,[n,e])),m>0&&v()-s.$mm.done>m&&(a.clearCacheByKey(r),s=0)}}return s}}),d}),define("mxext/model",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),r&&t.safeExec(r,arguments,this)};return t.mix(i,n,{prototype:!0}),t.extend(i,n,e)},n=+new Date,i=encodeURIComponent,a=t.has,o=t.isObject,s=t.toString,c=function(e){this.set(e),this.id="m"+n--};return t.mix(c,{GET:"GET",POST:"POST",extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(c.POST)},getUrlParams:function(){return this.getParams(c.GET)},getParams:function(e){var r=this;e||(e=c.GET),e=e.toUpperCase();var n,a="$"+e,o=r[a],s=[];for(var f in o){n=o[f],t.isArray(n)||(n=[n]);for(var u=0;n.length>u;u++)s.push(f+"="+i(n[u]))}return s.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,c.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,c.POST,!0)},setParams:function(e,t,r,n){var i=this,s="$"+r;i[s]||(i[s]={});var c=i[s];if(!o(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&a(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,c.POST)},setUrlParams:function(e,t){this.setParams(e,t,c.GET)},get:function(e,t){var r=this,n=arguments.length,i=!n,a=2==n,o=r.$attrs;return o&&(o=i?o:o[e]),a&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)r.$attrs[n]=e[n];else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt?e("abort",null,t):n?e(n,i,t):(o(i)||(i={data:i}),r.set(i),e(n,i,t))};r.$trans=r.sync(n)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abt=1},isAborted:function(){return this.$abt}}),c}),define("mxext/view",["magix/magix","magix/view","magix/router"],function(e){var t=e("magix/magix"),r=e("magix/view"),n=e("magix/router"),i=window,a=function(e){i.clearTimeout(e),i.clearInterval(e)},o=function(e){c(e.destroy,[],e)},s=0,c=t.safeExec,f=t.has,u=r.extend({navigate:n.navigate,manage:function(e,r){var n=this,i=arguments,c=!0;1==i.length&&(r=e,e="res_"+s++,c=!1),n.$res||(n.$res={});var f;t.isNumber(r)?f=a:r&&r.destroy&&(f=o);var u={hasKey:c,res:r,sign:n.sign,destroy:f};return n.$res[e]=u,r},getManaged:function(e,t){var r=this,n=r.$res,i=null;if(n&&f(n,e)){var a=n[e];i=a.res,t&&delete n[e]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r];if(n.sign!=e.sign){var i=n.res,a=n.destroy,o=!1;a&&(a(i),o=!0),n.hasKey||delete t[r],e.fire("destroyManaged",{resource:i,processed:o})}}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)}),c(u.ms,arguments,e)},{ms:[],mixin:function(e,r){r&&u.ms.push(r),t.mix(u.prototype,e)}});return u}),document.createElement("vframe");