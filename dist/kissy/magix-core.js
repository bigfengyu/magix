/*Magix3.0 Licensed MIT*/KISSY.add("magix",function(n,t){var e,r=n.extend,i=function(t,e){n.use(t&&t+d,function(n){e&&e.apply(n,$.call(arguments,1))})},o=n.isObject,c=n.isArray,f=n.DOM,u=f.html,a=0,d="",s=[],$=s.slice,p=function(){},h=",",l=window,m=document,v="",w="object",g="prototype",y=/[#?].*$/,b=/([^=&?\/#]+)=?([^&#?]*)/g,x=/(?!^)=|&/,V=function(n){return(n||"mx_")+a++},I=V(),U={rootId:V(),defaultView:I,error:function(n){throw n}},Z=U.hasOwnProperty,A=function(n){return typeof n==w?n:m.getElementById(n)},O=function(n,t,e){if(n=A(n),t=A(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},j=function(n,t,e){for(e in t)n[e]=t[e];return n},k=function(n,t,e,r,i,o){for(c(n)||(n=[n]),c(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(f){U.error(f)}return i},C=function(n,t){return n&&Z.call(n,t)},E=function(n,t){return t.f-n.f||t.t-n.t},M=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};j(M[g],{get:function(n){var t=this,e=t.c,r=e[v+n];return r&&(r.f++,r.t=a++,r=r.v),r},set:function(n,t){var e=this,r=e.c,i=v+n,o=r[i],c=e.b;if(!o){if(r.length>=e.x)for(r.sort(E);c--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=a++},del:function(n){n=v+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=d,delete t[n],r&&k(r,e.o,e))},has:function(n){return C(this.c,v+n)}});var S,T=new M,D=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}S[t]=e},P=function(n){var t,e=T.get(n);return e||(S={},t=n.replace(y,d),n==t&&x.test(t)&&(t=d),n.replace(t,d).replace(b,D),T.set(n,e={a:t,b:S})),{path:e.a,params:j({},e.b)}},R=function(n,t,e){var r,i,o,c=[];for(i in t)r=t[i]+d,(!e||r||C(e,i))&&(r=encodeURIComponent(r),c.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+c.join("&")),n},q=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;i>e;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},B={config:function(n,t){return t=U,n&&(t=o(n)?j(t,n):t[n]),t},boot:function(n){j(U,n),i(U.exts,function(){z().mountView(U.defaultView)})},toMap:q,toTry:k,toUrl:R,parseUrl:P,mix:j,has:C,inside:O,node:A,guid:V,Cache:M},F="on",H={fire:function(n,t,e,r){var i,o,c,f,u=v+n,a=this,d=a[u];if(t||(t={}),t.type||(t.type=n),d)for(i=d.length,o=i-1;i--;)c=r?i:o-i,f=d[c],f.d?(d.splice(c,1),o--):k(f.f,t,a);d=a[F+n],d&&k(d,t,a),e&&a.off(n)},on:function(n,t){var e=this,r=v+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=v+n,o=this,c=o[i];if(t){if(c)for(e=c.length;e--;)if(r=c[e],r.f==t&&!r.d){r.d=1;break}}else delete o[i],delete o[F+n]}};B.Event=H;var K,L,N=n.all,Y=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=G[n.pId],e&&!C(e.$r,t)&&(e.$r[t]=1,e.$rc++,Y(e)))},_=function(n,t,e,r){t||(t={}),!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=G[n.pId],r&&C(r.$r,e)&&(r.$rc--,delete r.$r[e],_(r,t)))},z=function(n,t){return K||(e=m.body,n=U.rootId,t=A(n),t||(e.id=n),K=new W(n)),K},G={},J=function(n,t){C(G,n)||(G[n]=t,W.fire("add",{vframe:t}))},Q=function(n,t,e){e=G[n],e&&(delete G[n],W.fire("remove",{vframe:e,fcc:t}))},W=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.pId=t,J(n,e)};j(W,j({root:z,all:function(){return G},get:function(n){return G[n]}},H)),j(j(W[g],H),{mountView:function(n,t){var e,r,o,c=this,f=A(c.id);!c.$a&&f&&(c.$a=1,c.$t=u(f)),c.unmountView(),c.$d=0,f&&n&&(c.path=n,e=P(n),r=++c.$s,i(e.path,function(n){if(r==c.$s){$n(n);var i=j(e.params,t);o=new n({owner:c,id:c.id},i),c.$v=o,dn(o),o.init(i),o.render(),o.tmpl||o.$p||o.endUpdate()}}))},unmountView:function(){var n,t,e=this,r=e.$v;r&&(L||(t=1,L={id:e.id}),e.$d=1,e.unmountZone(0,1),_(e,L),e.$v=0,pn(r),n=A(e.id),n&&e.$a&&u(n,e.$t),t&&(L=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return _(i),r=G[n],r||(C(i.$c,n)||i.$cc++,i.$c[n]=n,r=new W(n,i.id)),r.mountView(t,e),r},mountZone:function(n,t){var e,r,i,o=this;n=n||o.id;var c=N("#"+n+" [mx-view]");for(o.$h=1,o.unmountZone(n,1),e=c.length-1;e>=0;e--)r=c[e],i=r.id||(r.id=V()),o.mountVframe(i,r.getAttribute("mx-view"),t);o.$h=0,Y(o)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=G[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),Q(n,r),e.id=e.pId=d,e=G[i],e&&C(e.$c,n)&&(delete e.$c[n],e.$cc--,t||Y(e)))},unmountZone:function(n,t){var e,r=this,i=r.$c;for(e in i)(!n||e!=n&&O(e,n))&&r.unmountVframe(e,1);t||Y(r)}}),B.Vframe=W;var X=function(n,t){t=this,k(t.f,n,t.v)},nn=function(n,e,r,i,o){t[i?"detach":F](n,e,r,o)},tn="parentNode",en=new M(30,10),rn=/([^\(]+)\(([\s\S]*)?\)/,on={},cn=function(n){for(var t,r,i,o,c,f,u,a,d,$,p=n.target,h=n.type,l="mx-"+h,m=[];p!=e&&1==p.nodeType;){if(t=p.getAttribute(l)){if(m=[],c=p.$f,!c)for(f=p;f=f[tn];)if(C(G,u=f.id)){p.$f=c=u;break}c?(i=G[c],o=i&&i.$v,o&&o.$s>0&&(a=en.get(t),a||(a=t.match(rn)||s,a={n:a[1],i:a[2]},a.p=a.i&&k(Function("return "+a.i))||{},en.set(t,a)),d=a.n+v+h,$=o[d],$&&(n.current=p,n.params=a.p,k($,n,o),n.previous=p))):U.error(Error("bad:"+t))}if((r=p.$)&&r[h])break;m.push(p),p=p[tn]||e}for(;p=m.pop();)r=p.$||(p.$={}),r[h]=1},fn=function(n,t){var r=0|on[n],i=r>0?1:0;r+=t?-i:i,r||(nn(e,n,cn,t),t||(r=1)),on[n]=r},un=/^([^<]+)<([^>]+)>$/,an=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),k(t,$.call(arguments),e))}},dn=function(n,t){var e,r,i=n.$eo;for(e in i)fn(e,t);for(i=n.$el,e=i.length;e--;)r=i[e],nn(r.h,r.t,X,t,{v:n,f:r.f})},sn={$win:l,$doc:m},$n=function(n){if(!n[v]){n[v]=1;var t,e,r,i,o,c,f=n[g],u={},a=[];for(c in f)if(t=f[c],e=c.match(un))for(r=e[1],i=e[2],i=i.split(h);e=i.pop();)o=sn[r],o?a.push({f:t,t:e,h:o}):(u[e]=1,f[r+v+e]=t);an(f),f.$eo=u,f.$el=a}},pn=function(n){n.$s>0&&(n.$s=0,n.fire("destroy",0,1,1),dn(n,1)),n.$s--},hn=function(n,t){t=this,j(t,n),t.$s=1},ln=hn[g];return j(hn,{extend:function(n,t){var e=this;n=n||{};var i=n.ctor,o=function(n,t){e.call(this,n,t),i&&i.call(this,t)};return o.extend=e.extend,r(o,e,n,t)}}),j(j(ln,H),{render:p,init:p,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&t.owner.unmountZone(n,1)},endUpdate:function(n,t){t=this,t.$s>0&&(t.$p=1,t.owner.mountZone(n))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=A(n),e&&u(e,t)),r.endUpdate(n)}}),B.View=hn,n.add(I,function(){return hn.extend()}),B},{requires:["event","node"]});