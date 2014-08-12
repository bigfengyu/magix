/*!Magix 1.2 Licensed MIT*/(function(e,t,n,r,i,a,o,s,f,c){c=1,f=function(e){return e.id||(e.id="mx_n_"+c++)},s("magix/magix",function(){var n=/\/\.(?:\/|$)|\/[^\/]+?\/\.{2}(?:\/|$)|\/\/+|\.{2}\//,o=/\/[^\/]*$/,s=/[#?].*$/,f=/([^=&?\/#]+)=?([^&#?]*)/g,u=/\?|(?!^)=/,h=/^https?:\/\//i,v="/",l="vframe",m=t.console,d=m&&m.error,p={tagName:l,rootId:"magix_vf_root",coded:1,error:d?function(e){m.error(e)}:r},g=p.hasOwnProperty,y=function(e,t){return e&&g.call(e,t)},w=function(t){return function(n,r,i){switch(arguments.length){case 0:i=t;break;case 1:i=P._o(n)?C(t,n):y(t,n)?t[n]:e;break;case 2:r===e?(delete t[n],i=r):t[n]=i=r}return i}},x=function(e,t){return t.f-e.f||t.t-e.t},b=function(e,t){var n=this;return n.get?(n.c=[],n.b=0|t||5,n.x=n.b+(e||20)):n=new b(e,t),n},C=function(e,t,n,r){for(r in t)n&&y(n,r)||(e[r]=t[r]);return e};C(b.prototype,{get:function(e){var t,n=this,r=n.c;return e=i+e,y(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=c++,t=t.v)),t},list:function(){return this.c},set:function(e,t,n){var r=this,a=r.c,o=i+e,s=a[o];if(!y(a,o)){if(a.length>=r.x){a.sort(x);for(var f=r.b;f--;)s=a.pop(),s.f>0&&r.del(s.o)}s={o:e},a.push(s),a[o]=s}return s.v=t,s.f=1,s.t=c++,s.m=n,t},del:function(e){e=i+e;var t=this.c,n=t[e];n&&(n.f=-1,n.v=a,delete t[e],n.m&&(q(n.m,n.o,n),n.m=a))},has:function(e){return y(this.c,i+e)}});var M=b(40),_=b(),q=function(e,t,n,r,i,a){for(P._a(e)||(e=[e]),t&&(P._a(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){p.error(o)}return i},k=function(e,t,n){if(p.coded)try{n=decodeURIComponent(n)}catch(r){}k.p[t]=n},P={mix:C,has:y,tryCall:q,config:w(p),start:function(e){var t=this;C(p,e),t.use(["magix/router","magix/vom",e.iniFile],function(n,r,i){p=C(p,i,e),p["!tnc"]=p.tagName!=l,n.on("!ul",r.loc),n.on("changed",r.loc),t.use(p.extensions||p.exts,n.start)})},keys:Object.keys||function(e){var t,n=[];for(t in e)y(e,t)&&n.push(t);return n},local:w({}),path:function(e,t){var r,f=e+i+t,c=_.get(f),u=a;if(!_.has(f)){for(h.test(e)&&(r=e.indexOf(v,8),0>r&&(r=e.length),u=e.slice(0,r),e=e.slice(r)),e=e.replace(s,a).replace(o,v),(h.test(t)||t.charAt(0)==v)&&(e=a),c=e+t;n.test(c);)c=c.replace(n,v);_.set(f,c=u+c)}return c},toObject:function(e){var t,n,r=M.get(e);return r||(k.p=t={},n=e.replace(s,a),u.test(n)&&(n=a),e.replace(n,a).replace(f,k),M.set(e,r=[n,t])),{path:r[0],params:C({},r[1])}},toUrl:function(e,t,n){var r,i,a,o=[];for(i in t)r=t[i],(!n||r||y(n,i))&&(p.coded&&(r=encodeURIComponent(r)),a=1,o.push(i+"="+r));return a&&(e=(e&&e+(u.test(e)?"&":"?"))+o.join("&")),e},toMap:function(e,t){var n,r,i,a={},o=arguments.length>1;if(e&&(i=e.length))for(n=0;i>n;n++)r=e[n],a[o?r[t]:r]=o?r:(0|a[r])+1;return a},cache:b},V=Object.prototype.toString,I=function(){};return C(P,{use:function(e,t){e?seajs.use(e,t):t&&t()},_a:$.isArray,_f:$.isFunction,_o:function(e){return"[object Object]"==V.call(e)},extend:function(e,t,n,r){var i=t.prototype;i.constructor=t,I.prototype=i;var a=new I;return C(a,n),C(e,r),a.constructor=e,e.prototype=a,e}})}),s("magix/event",function(e){var t=e("./magix"),n=t.tryCall,r={fire:function(e,t,r,a){var o=i+e,s=this,f=s[o];if(f){t||(t={}),t.type||(t.type=e);for(var c,u,h=f.length,v=h-1;h--;)c=a?h:v-h,u=f[c],(u.d||u.r)&&(f.splice(c,1),v--),u.d||n(u.f,t,s);r=r||0>v}r&&delete s[o]},on:function(e,t,r,a){var o=this,s=i+e,f=o[s]||(o[s]=[]),c={f:t},u=0|r;u!==r?(r&&r.on&&a&&(r.on(a,function(){c.r=1},n),r=0),c.r=r,f.push(c)):f.splice(u,0,c)},off:function(e,t){var n=i+e,r=this[n];if(r)if(t){for(var a,o=r.length-1;o>=0;o--)if(a=r[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,n)}};return t.mix(t.local,r),r}),s("magix/router",function(e){var n,r,a,s,f,c,u=e("./magix"),h=e("./event"),v="",l="path",m="view",d=u.has,p=u.mix,g=u.keys,y=u.toUrl,w=u.toObject,x=u.config(),b=u.cache(),C=u.cache(),M=t.location,_=t.history,q={params:{},href:v},k=/(?:^https?:\/\/[^\/]+|#.*$)/gi,P=/^[^#]*#?!?/,V="params",I=function(e,t,n){if(e){n=this[V],e=(e+v).split(o);for(var r=0;e.length>r&&!(t=d(n,e[r]));r++);}return t},A=function(){return this[l]},j=function(){return this[m]},U=function(e,t,n,r){return n=this,r=n[V],arguments.length>1?r[e]=t:r[e]||v},T=function(e,t){var n,i,a,o;return r||(r={rs:x.routes||{},nf:x.unfoundView},a=x.defaultView,r.dv=a,o=x.defaultPath,n=r.rs,r.f=u._f(n),r.f||n[o]||!a||(n[o]=a),r[l]=o),e||(e=r[l]),n=r.rs,i=r.f?n.call(x,e,t):n[e],{view:i||r.nf||r.dv,path:e}},N=function(e,t){var n=e.href,r=t.href,a=n+i+r,o=C.get(a);if(!o){var s,f,c,u;o={isParam:I,isPath:A,isView:j},o[m]=c,o[l]=c,o[V]=u={};var h,v,d=e[V],p=t[V],$=[l,m].concat(g(d),g(p));for(h=$.length-1;h>=0;h--)v=$[h],1==h&&(d=e,p=t,u=o),f=d[v],c=p[v],f!=c&&(u[v]={from:f,to:c},s=1);C.set(a,o=[s,o])}return o},O=p({start:function(){a=x.edge,s=a&&_.pushState,f=a&&!s,c=s?"srcQuery":"srcHash",s?O.useState():O.useHash(),O.route()},parse:function(e,t){e=e||M.href;var n,r,i,o,s,c,h=b.get(e);return h||(i=e.replace(k,v),o=e.replace(P,v),s=w(i),c=w(o),f&&(c[l]=u.path(M.pathname,c[l])),h={get:U,set:U,href:e,refHref:q.href,srcQuery:i,srcHash:o,query:s,hash:c,params:p(p({},s[V]),c[V])},b.set(e,h)),t&&!h[m]&&(r=h.hash[l]||a&&h.query[l],n=T(r,h),p(h,n)),h},route:function(){var e=O.parse(0,1),t=!q.get,r=N(q,e);q=e,r[0]&&(n=e,O.fire("changed",{location:e,changed:r[1],force:t}))},navigate:function(e,t,r){if(n){!t&&u._o(e)&&(t=e,e=v);var i=w(e),o=n.query[V],h=i[V],m=i[l],g=n[l];if(p(h,t),m){if(m=u.path(g,m),f)for(var $ in o)d(o,$)&&!d(h,$)&&(h[$]=v)}else m=g,h=p(p({},n[V]),h);m=y(i[l]=m,h,a?l:o),m!=n[c]&&(s?(O.poped=1,_[r?"replaceState":"pushState"](v,v,m),O.route()):(p(i,n,i),i.srcHash=m,O.fire("!ul",{loc:n=i}),m="#!"+m,r?M.replace(m):M.hash=m))}}},h);return O.useState=function(){var e=O,t=location.href;$(window).on("popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())})},O.useHash=function(){$(window).on("hashchange",O.route)},O}),s("magix/vom",function(e){var t=e("./vframe"),n=e("./magix"),r=e("./event"),i=n.has,a=n.mix,o={},s={},f={},c=n.mix({all:function(){return o},add:function(e,t){i(o,e)||(o[e]=t,c.fire("add",{vframe:t}))},get:function(e){return o[e]},remove:function(e,t){var n=o[e];n&&(delete o[e],c.fire("remove",{vframe:n,fcc:t}))},loc:function(e){var n,r=e.loc;if(r?n=1:r=e.location,a(s,r),!n){a(f,e.changed);var i=t.root(c,s,f);f.view?i.mountView(r.view):i.locChged()}}},r);return c}),s("magix/vframe",function(t){var r,i,s,c,u,h,v,l,m,d,p,g=t("./magix"),$=t("./event"),y=t("./view"),w=g.tryCall,x=[],b=g.mix,C=g.config(),M="mx-vframe",_=g.has,q="querySelectorAll",k="alter",P="created",V="object",I=function(e){return typeof e==V?e:n.getElementById(e)},A=function(e,t,i){return t=I(e),t&&(i=s?n[q]("#"+f(t)+u):t.getElementsByTagName(r)),i||x},j=function(e,t,n){if(e=I(e),t=I(t),e&&t)if(e!==t)try{n=h?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},U=function(e,t){var n=this;n.id=e,n.cM={},n.cC=0,n.rC=0,n.sign=1,n.rM={},n.owner=p,n.pId=t,p.add(e,n)};return U.root=function(t,a,o){if(!v){r=C.tagName,i=C["!tnc"],s=i&&n[q],u=" "+r+"["+M+"=true]",c=i&&!s;var f=n.body;h=f.contains,m=a,d=o,p=t;var l=C.rootId,g=I(l);g||(g=n.createElement(r),g.id=l,f.appendChild(g),g=e),v=new U(l)}return v},b(b(U.prototype,$),{mountView:function(e,t,n){var r=this,i=I(r.id);if(!r._a&&i&&(r._a=1,r._t=i.innerHTML),r.unmountView(n),r._d=0,e){r.path=e;var a=g.toObject(e),o=a.path,s=++r.sign;g.use(o,function(e){if(s==r.sign){y.prepare(e,p);var n=new e({owner:r,id:r.id,$:I,$i:j,path:o,vom:p,location:m});r.view=n;var f=function(e){r.mountZoneVframes(e.id)};n.on("interact",function(){n.hasTmpl||(i&&(i.innerHTML=r._t),f(I)),n.on("primed",function(){r.viewPrimed=1,r.fire("viewMounted")}),n.on("rendered",f),n.on("prerender",function(e){r.unmountZoneVframes(e.id,0,1)||r.cAlter()})},0),n.load(b(a.params,t),d)}})}},unmountView:function(e){var t=this,n=t.view;if(n){l||(l={}),t._d=1,t.unmountZoneVframes(0,e,1),t.cAlter(l),t.view=0,n.oust();var r=I(t.id);r&&t._a&&!e&&(r.innerHTML=t._t),t.viewInited=0,t.viewPrimed&&(t.viewPrimed=0,t.fire("viewUnmounted")),l=0}t.sign++},mountVframe:function(e,t,n,r,i){var a=this;a.fcc&&!r&&a.cAlter();var o=p.get(e);return o||(_(a.cM,e)||a.cC++,a.cM[e]=1,o=new U(e,a.id)),o._p=r,o.mountView(t,n,i),o},mountZoneVframes:function(e,t,n,r){var i=this;e=e||i.id,i.unmountZoneVframes(e,r,1);var a=A(e),o=a.length,s={};if(o)for(var u,h,v,l,m=0;o>m;m++)if(u=a[m],h=f(u),!_(s,h)&&(v=u.getAttribute("mx-view"),l=c?u.getAttribute(M):1,l||v)){i.mountVframe(h,v,t,n,r);for(var d,p=A(u),g=0,$=p.length;$>g;g++)d=p[g],s[f(d)]=1}i.cCreated()},unmountVframe:function(e,t,n){var r=this;e=e||r.id;var i=p.get(e);if(i){var a=i.fcc;i.unmountView(t),p.remove(e,a);var o=p.get(i.pId);o&&_(o.cM,e)&&(delete o.cM[e],o.cC--,n||r._d||o.cCreated())}},unmountZoneVframes:function(e,t,n){var r,i,a=this,o=a.cM;for(i in o)(!e||j(i,e))&&a.unmountVframe(i,t,r=1);return n||a._d||a.cCreated(),r},parent:function(e){var t=this,n=t;for(e=e>>>0||1;n&&e--;)n=p.get(n.pId);return n},invokeView:function(e,t){var n,r=this;if(r.viewInited){var i=r.view,a=i&&i[e];a&&(n=w(a,t||x,i))}return n},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,t.fca=0,n.fire(P,e),t.fire(P,e));var r=t.id,i=p.get(t.pId);i&&!_(i.rM,r)&&(i.rM[r]=i.cM[r],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),!t.fca&&t.fcc){t.fcc=0;var n=t.view,r=t.id;n&&(t.fca=1,n.fire(k,e),t.fire(k,e));var i=p.get(t.pId);i&&_(i.rM,r)&&(i.rC--,delete i.rM[r],t._p||i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(e.viewInited&&t&&t.sign>0){var n=t.olChg(d),r={location:m,changed:d,prevent:function(){this.cs=x},to:function(e){e=(e+a).split(o),this.cs=e||x}};n&&t.render(r);for(var i,s=r.cs||g.keys(e.cM),f=0,c=s.length;c>f;f++)i=p.get(s[f]),i&&i.locChged()}}}),U}),s("magix/view",function(s){var c,u=s("./magix"),h=s("./event"),v=s("./router"),l={focus:2,blur:2,mouseenter:2,mouseleave:2},m=$.now(),d=function(e,t,n,r,i,o){var s=l[t];if(i){n.$n||(n.$n=m--);var f="_$"+n.$n;i[f]||(i[f]=function(){n.apply(i,arguments)}),n=i[f]}o||2!=s?$(e)[r?"off":j](t,n):$(e)[(r?"un":a)+"delegate"]("[mx-"+t+"]",t,n)},p=u.tryCall,g=u.has,y=[],w=u.mix,x=0,b="destroy",C=u.cache(40),M=/(\w+)(?:<(\w+)>)?(?:\(({[\s\S]*})\))?/,_=/([$\w]+)<([\w,]+)>/,q={},k="mx-ei",P=n.body,V="parentNode",I={},A=/\smx-(?!view|vframe)[a-z]+\s*=\s*"/g,j="on",U="",T=function(e,t){return function(){t=this,t.sign>0&&(t.sign++,t.fire("rendercall"),N(t),p(e,arguments,t))}},N=function(e,t){var n,r,i=e.$res;for(n in i)r=i[n],(t||r.mr)&&O(i,n,1)},O=function(e,t,n){var r,i,a=e[t];a&&(r=a.e,i=r&&r[b],i&&p(i,y,r),(!a.hk||n)&&delete e[t])},H=function(e,t){var n,r,i=e.$evts;for(n in i)E(n,t);for(i=e.$sevts,n=i.length;n-->0;)r=i[n],d(r.h,r.t,r.f,t,e,1)},R=function(e,t,n){return n?e.setAttribute(t,n):n=e.getAttribute(t),n},S=function(t){if(t&&!t[j]){var n=t.target;t[j]=1;for(var r,a,s,u=n,h=t.type,v=I[h]||(I[h]=RegExp(o+h+"(?:,|$)")),l="mx-"+h,m=[];u&&1==u.nodeType&&(r=R(u,l),a=R(u,k),!r&&!v.test(a));)m.push(u),u=u[V];if(r){for(var d,$,y,w,x,b,_,q,P,A=r.split(U);A.length;)if($=A.shift()){if(y=$.split(i),$=y.pop(),b=y[0],!b&&!d)for(_=u,q=c.all();_;){if(g(q,P=_.id)){R(u,l,(b=P)+i+r);break}_=_[V]}if(d=1,!b)throw Error("bad:"+$);if(w=c.get(b),x=w&&w.view,x&&x.sign>0){t.currentId=f(u),t.targetId=f(n),t.prevent=t.preventDefault,t.stop=t.stopPropagation;var T=C.get($);T||(T=$.match(M),T={n:T[1],f:T[2],i:T[3]},T.p=T.i&&p(Function("return "+T.i))||{},C.set($,T));var N=T.n+i+h,O=x[N];O&&(t[T.f]&&t[T.f](),t.params=T.p,p(O,t,x))}}}else{for(;m.length;)s=m.pop(),a=R(s,k)||j,v.test(a)||(a=a+o+h,R(s,k,a));s=e}u=n=e}},E=function(e,t){var n=0|q[e],r=n>0?1:0;n+=t?-r:r,n||(d(P,e,S,t),t||(n=1)),q[e]=n},F=function(e){var t=this;w(t,e),t.$ol={ks:[]},t.$ns={},t.$res={},t.sign=1,t.addNode(t.id),p(F.$,e,t)},L=F.prototype,Z={$win:t,$doc:n};F.$=[],F.prepare=function(e,t){if(!e[i]){e[i]=1,c=t;var n,a,s,f,u,h,v=e.prototype,l={},m=[];for(var d in v)if(n=v[d],a=d.match(_))for(s=a[1],f=a[2],f=f.split(o),u=f.length-1;u>-1;u--)a=f[u],h=Z[s],h?m.push({n:s,t:a,h:h,f:n}):(l[a]=1,v[s+i+a]=n);else"render"==d&&n!=r&&(v[d]=T(n));v.$evts=l,v.$sevts=m}},F.mixin=function(e,t){t&&F.$.push(t),w(L,e)},w(w(L,h),{render:r,navigate:v.navigate,init:r,hasTmpl:!0,wrapEvent:function(e,t){e+=a;var n=this.id+i;return e=t?[a].concat(e).join(U+n):e.replace(A,"$&"+n)},load:function(){var e=this,t=e.hasTmpl,n=arguments,r=function(r){t&&(e.tmpl=e.wrapEvent(r)),H(e),e.fire("interact",0,1),p(e.init,n,e),e.fire("inited",0,1),e.owner.viewInited=1,e.render();var i=!t&&!e.rendered;i&&(e.rendered=1,e.fire("primed",0,1))};t?e.fetchTmpl(e.path,e.wrapAsync(r)):r()},beginUpdate:function(e){var t=this;t.sign>0&&t.rendered&&t.fire("prerender",{id:e||t.id})},endUpdate:function(e){var t=this;t.sign>0&&(t.rendered||(t.fire("primed",0,1),t.rendered=1),t.fire("rendered",{id:e||t.id}))},wrapAsync:function(e){var t=this,n=t.sign;return function(){n>0&&n==t.sign&&e&&e.apply(this,arguments)}},setHTML:function(e,t){var n,r=this;r.beginUpdate(e),r.sign>0&&(n=r.$(e),n&&(n.innerHTML=t)),r.endUpdate(e)},observeLocation:function(e){var t,n=this;t=n.$ol,t.f=1;var r=t.ks;u._o(e)&&(t.pn=e.path,e=e.params),e&&(t.ks=r.concat((e+a).split(o)))},olChg:function(e){var t,n=this,r=n.$ol;return r.f&&(r.pn&&(t=e.path),t||(t=e.isParam(r.ks))),t},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire(b,0,1,1),N(e,1),H(e,1)),e.sign--},addNode:function(e){this.$ns[e]=1},removeNode:function(e){delete this.$ns[e]},inside:function(e){var t,n,r=this;for(n in r.$ns)if(t=r.$i(e,n))break;return t},manage:function(e,t){var n=this,r=arguments.length,o=1,s=n.$res;1==r&&(t=e,e=a),e&&O(s,e),e||(o=0,e="res_"+x++);var f={hk:o,e:t,mr:t&&t[i]==i};return s[e]=f,t},getManaged:function(t,n){var r=this,i=r.$res,a=t?e:i;return t&&g(i,t)&&(a=i[t].e,n&&delete i[t]),a},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(e){O(this.$res,e,1)}});var D={},z="?t="+Math.random(),B={},Q={};return L.fetchTmpl=function(e,t){var n=this,r="tmpl"in n;if(r)t(n.tmpl);else if(g(B,e))t(B[e]);else{var i=e.indexOf("/"),a=e.substring(0,i);D[a]||(D[a]=seajs.data.paths[a]);var o=D[a]+e.substring(i+1)+".html",s=Q[o],f=function(n){t(B[e]=n)};s?s.push(f):(s=Q[o]=[f],$.ajax({url:o+z,success:function(e){p(s,e),delete Q[o]},error:function(e,t){p(s,t),delete Q[o]}}))}},F.extend=function(e,t,n){var r=this,i=function(e){r.call(this,e),n&&n.call(this,e)};return i.extend=r.extend,u.extend(i,r,e,t)},F}),s("magix/model",function(e){var t=e("./magix"),n=t.has,o=t._o,s=t.toString,f="URL",u="FORM",h=function(){this.id="m"+c++},v=function(e){return function(r,a,s){var f,c,u,h=this,v=i+e;h[v]||(h[v]={}),u=h[v],t._f(r)&&(r=t.tryCall(r)),r&&!o(r)&&(f={},f[r]=a,r=f);for(c in r)s&&n(u,c)||(u[c]=r[c])}};return t.mix(h.prototype,{sync:r,getFormParams:function(){return this[i+u]},getUrlParams:function(){return this[i+f]},setFormParams:v(u),setUrlParams:v(f),get:function(e,t,n){var r=this,i=arguments.length,o=2==i,f=r.$attrs;if(i){for(var c=(e+a).split(".");f&&c[0];)f=f[c.shift()];c[0]&&(f=n)}return o&&s.call(t)!=s.call(f)&&(f=t),f},set:function(e,t){var n=this;if(n.$attrs||(n.$attrs={}),e){if(!o(e)){var r={};r[e]=t,e=r}for(var i in e)n.$attrs[i]=e[i]}},request:function(e,t){var n=this;if(!n.$ost){var r=function(r,i){n.$ost||(o(i)||(i={data:i}),n.set(i),n.$temp=0,e(r,t))};n.$tspt=n.sync(n.$temp=r)}},destroy:function(){var e=this,t=e.$tspt,n=e.$temp;n&&(n("abort"),e.$temp=0),e.$ost=1,t&&t.abort&&t.abort(),e.$tspt=0}}),h.extend=function(e,n,r){var i=this,a=function(){i.call(this),r&&r.call(this)};return t.extend(a,i,e,n)},h}),s("magix/manager",function(n){var r=n("./magix"),s=n("./event"),f=r.has,u=r.tryCall,h=r._a,v=r._f;r._o;var l=1,m=2,d=4,p="formParams",g="urlParams",$=[p,g],y=Date.now||function(){return+new Date},w=t.JSON,x=r.mix,b=12e5,C=function(e,t,n,r){return t?v(e)&&n.push(C(u(e))):r=w?w.stringify(e):y(),r},M=function(e,t){for(var n,r=[C(t),C(e)],a=$.length-1;a>-1;a--)n=$[a],C(e[n],1,r),C(t[n],1,r);return C(e.key,1,r),r.join(i)},_=function(e){var t=e.cache;return t&&(t=t===!0?b:0|t),t},q=function(e){throw Error(e)},k=function(e,t,n){var i=this;i.$mClz=e,i.$mCache=r.cache(t,n),i.$mReqs={},i.$mMetas={},i.id="mm"+c++},P=function(e){var t=this;t.$host=e,t.$reqs={},t[i]=i,t.sign=1,t.id="mr"+c++,t.$queue=[]},V=[].slice,I=function(e,t,n,r){return function(i){return e.apply(t,[n,r,i])}},A=function(e,t){var n=t.b,r=t.a,i=r[n];if(i){var a=i.q;delete r[n],u(a,e,i.e)}},j=function(t,n,r){var i,a,o=this,s=n.a,f=n.c,c=n.d,h=n.g,v=n.i,p=n.j,g=n.k,$=n.l,w=n.m,x=n.n,b=n.o;n.b++,delete f[o.id];var C=o.$mm,M=C.key;if(c[t]=o,r)n.e=1,i=1,n.f=r,h.msg=r,h[t]=r,p.fire("fail",{model:o,msg:r}),a=1;else if(!v.has(M)){M&&v.set(M,o),C.time=y();var _=C.after;_&&u(_,o),C.cls&&p.clearCache(C.cls),p.fire("done",{model:o}),a=1}if(!s.$ost){if(g==l){var q=$?w[t]:w;q&&(x[t]=u(q,[i?h:e,o,h],s))}else if(g==m){b[t]={m:o,e:i,s:r};for(var k,P,V=b.i||0;k=b[V];V++)P=$?w[V]:w,k.e&&(h.msg=k.s,h[V]=k.s),x[V]=u(P,[k.e?h:e,k.m,h].concat(x),s);b.i=V}n.b==n.h&&(n.e||(h=e),x.unshift(h),g==d&&(c.unshift(h),x[1]=u(w,c,s)),s.$busy=0,s.doNext(x)),a&&p.fire("finish",{msg:r,model:o})}},U=function(e,t,n,r,i){if(e.$busy)return e.next(function(){U(this,t,n,r,i)});e.$busy=1,e.sign++;var a=e.$host,o=a.$mCache,s=a.$mReqs,c=e.$reqs;h(t)||(t=[t]);var u=t.length,v=[],l=h(n);l&&(v=Array(n.length));for(var m,d={a:e,b:0,c:e.$reqs,d:Array(u),g:{},h:u,i:o,j:a,k:r,l:l,m:n,n:v,o:[]},p=0;t.length>p;p++)if(m=t[p]){var g=a.getModel(m,i),$=g.entity,y=$.$mm.key,w=I(j,$,p,d);w.id=e.id,y&&f(s,y)?s[y].q.push(w):g.update?(c[$.id]=$,y&&(s[y]={q:[w],e:$},w=A),$.request(w,{a:s,b:y})):w()}else q("empty model");return e},T=function(e,t){return function(n,r){var i=V.call(arguments,1);return U(this,n,i.length>1?i:r,e,t)}};x(k,{create:function(e,t,n){return new k(e,t,n)}}),x(P.prototype,{fetchAll:function(e,t){return U(this,e,t,d)},save:function(e,t){return U(this,e,t,d,1)},fetchOrder:T(m),fetchOne:T(l),stop:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,n=e.$reqs,r=t.$mReqs;for(var i in n){var a,o,s=n[i],c=s.$mm.key,h=[],v=[];if(c&&f(r,c)){a=r[c],o=a.q;for(var l,m=0;o.length>m;m++)l=o[m],l.id!=e.id?h.push(l):v.push(l)}h.length?(u(v,"abort",a.e),a.q=h):s.destroy()}e.$reqs={},e.$queue=[],e.$busy=0},next:function(e){var t=this;return t.$queue.push(e),t.doNext(t.$args),t},doNext:function(e){var t=this;if(!t.$busy){t.$busy=1;var n=++t.sign;t.$ntId=setTimeout(function(){t.$busy=0,t.$args=e;var r,i=t.$queue,a=i.shift();a&&(r=u(a,e,t),n==t.sign&&t.doNext(r===i.$?e:[null,r]))},0)}},destroy:function(){var e=this;e.$ost=1,e.stop()}});var N=k.prototype;return x(x(N,s),{registerModels:function(e){var t=this,n=t.$mMetas;h(e)||(e=[e]);for(var r,i,a,o=0;e.length>o;o++)r=e[o],r&&(i=r.name,i?n[i]&&q("already exist:"+i):q("miss name"),a=_(r),a&&(r.cache=a),n[i]=r)},registerMethods:function(e){x(this,e)},create:function(e){var t=this,n=t.getMeta(e),r=_(e)||n.cache,i=new t.$mClz;i.set(n),i.$mm={name:n.name,after:n.after,cls:n.cleans,key:r&&M(n,e)},e.name&&i.set(e),i.setUrlParams(n[g]),i.setFormParams(n[p]),i.setUrlParams(e[g]),i.setFormParams(e[p]);var a=n.before;return a&&u(a,i),t.fire("start",{model:i}),i},getMeta:function(e){var t=this,n=t.$mMetas,r=e.name||e,i=n[r];return i||q("Unfound:"+r),i},getModel:function(e,t){var n,r,i=this;return t||(n=i.getCached(e)),n||(r=1,n=i.create(e)),{entity:n,update:r}},createRequest:function(e,t){return e.manage(t,new P(this))},clearCache:function(e){var t=this,n=t.$mCache,i=n.list();e=r.toMap((e+a).split(o));for(var s=0;i.length>s;s++){var c=i[s],u=c.v,h=u&&u.$mm;h&&f(e,h.name)&&n.del(h.key)}},getCached:function(e){var t,n,r=this,i=r.$mCache,a=r.getMeta(e),o=_(e)||a.cache;if(o&&(n=M(a,e)),n){var s=r.$mReqs,f=s[n];f?t=f.e:(t=i.get(n),t&&o>0&&y()-t.$mm.time>o&&(i.del(n),t=0))}return t}}),k}),n.createElement("vframe")})(null,this,document,function(){},"","",",",define);