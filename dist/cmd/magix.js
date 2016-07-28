/*Magix3.0.7 Licensed MIT*/define("magix",["$"],function(n){var t,e=n("$"),r=function(n,t){n?seajs.use(n,t):t&&t()},i=function(){},o=function(n,t,e,r,o){return i[x]=t[x],o=new i,A(o,e),A(n,r),o.constructor=n,n[x]=o,n},c=e.isPlainObject,u=e.isArray,a=function(n,t){e(n).html(t)},f=function(n,t,r,i){t&&!f[n]&&(f[n]=1,r=e(y+S),r.length?(i=r.prop("styleSheet"),i?i.cssText+=t:r.append(t)):e("head").append('<style id="'+S+'">'+t+"</style>"))},s=0,h="",$=[],d=$.slice,p=function(){},l=",",v=null,m=window,g=document,y="#",b="",w="object",x="prototype",k="/",V=/[#?].*$/,q=/([^=&?\/#]+)=?([^&#?]*)/g,I=/(?!^)=|&/,U=function(n){return(n||"mx_")+s++},S=U(),P=U(),j={rootId:U(),defaultView:P,error:function(n){throw n}},O=j.hasOwnProperty,T=function(n){return typeof n==w?n:g.getElementById(n)},Z=function(n,t,e){if(n=T(n),t=T(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},A=function(n,t,e){for(e in t)n[e]=t[e];return n},C=function(n,t,e,r,i,o){for(u(n)||(n=[n]),u(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(c){j.error(c)}return i},E=function(n,t){return n&&O.call(n,t)},H=function(n,t){return t.f-n.f||t.t-n.t},R=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};A(R[x],{get:function(n){var t=this,e=t.c,r=e[b+n];return r&&(r.f++,r.t=s++,r=r.v),r},each:function(n,t,e,r,i){for(e=this,r=e.c,i=r.length-1;i>-1;i--)n(r[i].v,t,e)},set:function(n,t){var e=this,r=e.c,i=b+n,o=r[i],c=e.b;if(!o){if(r.length>=e.x)for(r.sort(H);c--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=s++},del:function(n){n=b+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=h,delete t[n],r&&C(r,e.o,e))},has:function(n){return E(this.c,b+n)}});var M,N=new R,B=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}M[t]=e},D=function(n){var t,e=N.get(n);return e||(M={},t=n.replace(V,h),n==t&&I.test(t)&&(t=h),n.replace(t,h).replace(q,B),N.set(n,e={a:t,b:M})),{path:e.a,params:A({},e.b)}},J=function(n,t,e){var r,i,o,c=[];for(i in t)r=t[i]+h,(!e||r||E(e,i))&&(r=encodeURIComponent(r),c.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+c.join("&")),n},L=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;i>e;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},F=Object.keys||function(n,t,e){t=[];for(e in n)E(n,e)&&t.push(e);return t},Q={config:function(n,t){return t=j,n&&(t=c(n)?A(t,n):t[n]),t},boot:function(n){A(j,n),r(j.ini,function(t){A(j,t),A(j,n),r(j.exts,function(){pn.on("changed",qn),pn.bind()})})},toMap:L,toTry:C,toUrl:J,parseUrl:D,mix:A,has:E,keys:F,inside:Z,node:T,applyStyle:f,guid:U,Cache:R},_="on",z={fire:function(n,t,e,r){var i,o,c,u,a=b+n,f=this,s=f[a];if(t||(t={}),t.type||(t.type=n),s)for(i=s.length,o=i-1;i--;)c=r?i:o-i,u=s[c],u.d?(s.splice(c,1),o--):C(u.f,t,f);s=f[_+n],s&&C(s,t,f),e&&f.off(n)},on:function(n,t){var e=this,r=b+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=b+n,o=this,c=o[i];if(t){if(c)for(e=c.length;e--;)if(r=c[e],r.f==t&&!r.d){r.d=1;break}}else delete o[i],delete o[_+n]}};Q.Event=z;var G,K,W,X,Y,nn,tn="path",en="view",rn="params",on=new R,cn=new R,un=m.location,an={params:{},href:h},fn=/(?:^https?:\/\/[^\/]+|#.*$)/gi,sn=/^[^#]*#?!?/,hn=function(n,t,e){if(n){e=this[rn],n=(n+h).split(l);for(var r=0;r<n.length&&!(t=E(e,n[r]));r++);}return t},$n=function(n){if(W||(W=j.routes||{},X=j.unmatchView,Y=j.defaultView,nn=j.defaultPath||k,W[nn]||(W[nn]=Y)),!n[en]){var t=n.hash[tn]||pn.edge&&n.query[tn]||nn;n[tn]=t,n[en]=W[t]||X||Y}},dn=function(n,t){var e=n.href,r=t.href,i=e+b+r,o=cn.get(i);if(!o){var c,u,a,f;o={isParam:hn,force:!n.href},o[rn]=f={};var s,h,$=n[rn],d=t[rn],p=[tn,en].concat(F($),F(d));for(s=p.length-1;s>=0;s--)h=p[s],1==s&&($=n,d=t,f=o),u=$[h],a=d[h],u!=a&&(f[h]={from:u,to:a},c=1);cn.set(i,o={a:c,b:o})}return o},pn=A({update:function(n,t,e,r){n=J(n,t,e.query[rn]),n!=e.srcHash&&(n="#!"+n,r?un.replace(n):un.hash=n)},parse:function(n){n=n||un.href;var t,e,r,i,o=on.get(n);return o||(t=n.replace(fn,h),e=n.replace(sn,h),r=D(t),i=D(e),o={href:n,srcQuery:t,srcHash:e,query:r,hash:i,params:A(A({},r[rn]),i[rn])},$n(o),on.set(n,o)),o},diff:function(){var n=pn.parse(),t=dn(an,an=n);return t.a&&(K=an[rn],pn.fire("changed",G=t.b)),G},to:function(n,t,e){!t&&c(n)&&(t=n,n=h);var r=D(n),i=r[rn],o=r[tn],u=an[tn];if(A(i,t),o)for(u in an.query[rn])E(i,u)||(i[u]=h);else K&&(o=u,i=A(A({},K),i));pn.update(o,K=i,an,e)}},z);Q.Router=pn,pn.bind=function(){e(m).on("hashchange",pn.diff),pn.diff()};var ln,vn,mn=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=bn[n.pId],e&&!E(e.$r,t)&&(e.$r[t]=1,e.$rc++,mn(e)))},gn=function(n,t,e,r){t||(t={}),!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=bn[n.pId],r&&E(r.$r,e)&&(r.$rc--,delete r.$r[e],gn(r,t)))},yn=function(n,e){return ln||(t=g.body,n=j.rootId,e=T(n),e||(t.id=n),ln=new In(n)),ln},bn={},wn=function(n,t){E(bn,n)||(bn[n]=t,In.fire("add",{vframe:t}))},xn=function(n,t,e){for(t=n.$il;t.length;)e=t.shift(),e.r||n.invoke(e.n,e.a),delete t[e.k]},kn=function(n,t,e){e=bn[n],e&&(delete bn[n],In.fire("remove",{vframe:e,fcc:t}))},Vn=function(n,t){if(n&&(t=n.$v)&&t.$s>0){var e=Dn(t);e&&t.render();for(var r=n.children(),i=r.length,o=0;i>o;)Vn(bn[r[o++]])}},qn=function(n){var t,e=yn();(t=n.view)?e.mountView(t.to):Vn(e)},In=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.$il=[],e.pId=t,wn(n,e)};A(In,A({root:yn,all:function(){return bn},get:function(n){return bn[n]}},z)),A(A(In[x],z),{mountView:function(n,t){var e,i,o,c=this,u=T(c.id);!c.$a&&u&&(c.$a=1,c.$t=u.innerHTML),c.unmountView(),c.$d=0,u&&n&&(c.path=n,e=D(n),i=++c.$s,r(e.path,function(n){if(i==c.$s){Bn(n);var r=A(e.params,t),a=decodeURIComponent(u.getAttribute("mx-options"));a&&(a=C(JSON.parse,a),A(r,a)),o=new n({owner:c,id:c.id},r),c.$v=o,Mn(o),o.init(r),o.render(),o.tmpl||o.$p||o.endUpdate()}}))},unmountView:function(){var n,t,e=this,r=e.$v;e.$il=[],r&&(vn||(t=1,vn={id:e.id}),e.$d=1,e.unmountZone(0,1),gn(e,vn),e.$v=0,Jn(r),n=T(e.id),n&&e.$a&&a(n,e.$t),t&&(vn=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return gn(i),r=bn[n],r||(E(i.$c,n)||(i.$cl=h,i.$cc++),i.$c[n]=n,r=new In(n,i.id)),r.mountView(t,e),r},mountZone:function(n,t){var r,i,o,c=this;n=n||c.id;var u=e(y+n+" [mx-view]");for(c.$h=1,c.unmountZone(n,1),r=u.length-1;r>=0;r--)i=u[r],o=i.id||(i.id=U()),c.mountVframe(o,i.getAttribute("mx-view"),t);c.$h=0,mn(c)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=bn[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),kn(n,r),e.id=e.pId=h,e=bn[i],e&&E(e.$c,n)&&(delete e.$c[n],e.$cl=h,e.$cc--,t||mn(e)))},unmountZone:function(n,t){var e,r=this,i=r.$c;for(e in i)(!n||e!=n&&Z(e,n))&&r.unmountVframe(e,1);t||mn(r)},parent:function(n,t){for(t=this,n=n>>>0||1;t&&n--;)t=bn[t.pId];return t},children:function(n){return n=this,n.$cl||(n.$cl=F(n.$c))},invoke:function(n,t){var e,r,i,o,c,u,a=this;return(r=a.$v)&&r.$p?e=(i=r[n])&&C(i,t,r):(c=a.$il,o=c[u=b+n],o&&(o.r=1),o={n:n,a:t,k:u},c.push(o),c[u]=o),e}}),Q.Vframe=In;var Un=function(n,t,r,i){e(n)[i?"off":_](t,r)},Sn="parentNode",Pn=new R(30,10),jn=/([^\(]+)\(([\s\S]*)?\)/,On={},Tn={},Zn=function(n){for(var e,r,i,o,c,u,a,f,s,h,d=n.target,p=n.type,l="mx-"+p,v=[];d!=t&&1==d.nodeType;){if(e=d.getAttribute(l)){if(v=[],c=d.$f,!c)for(u=d;u=u[Sn];)if(a=u.id,E(bn,a)||E(Tn,a)){d.$f=c=a;break}c?(i=bn[c]||Tn[c],o=i&&i.$v,o&&o.$s>0&&(f=Pn.get(e),f||(f=e.match(jn)||$,f={n:f[1],i:f[2]},f.p=f.i&&C(Function("return "+f.i))||{},Pn.set(e,f)),s=f.n+b+p,h=o[s],h&&(n.current=d,n.params=f.p,C(h,n,o)))):j.error(Error("bad:"+e))}if((r=d.$)&&r[p]||n.mxStop||n.isPropagationStopped())break;v.push(d),d=d[Sn]||t}for(;d=v.pop();)r=d.$||(d.$={}),r[p]=1},An=function(n,e){var r=0|On[n],i=r>0?1:0;r+=e?-i:i,r||(Un(t,n,Zn,e),e||(r=1)),On[n]=r},Cn=/^([^<]+)<([^>]+)>$/,En=function(n,t){var e,r,i=n.$r;for(e in i)r=i[e],(t||r.x)&&Hn(i,e,1)},Hn=function(n,t,e){var r,i,o=n[t];return o&&(i=o.e,r=i.destroy,r&&e&&C(r,$,i),delete n[t]),i},Rn=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),En(e),C(t,d.call(arguments),e))}},Mn=function(n,t){var e,r=n.$eo;for(e in r)An(e,t)},Nn=[],Bn=function(n){if(!n[b]){n[b]=1;var t,e,r,i,o,c=n[x],u={};for(o in c)if(t=c[o],e=o.match(Cn))for(r=e[1],i=e[2],i=i.split(l);e=i.pop();)u[e]=1,c[r+b+e]=t;Rn(c),c.$eo=u}},Dn=function(n){var t,e=n.$l;return e.f&&(e.p&&(t=G.path),t||(t=G.isParam(e.k))),t},Jn=function(n){n.$s>0&&(n.$s=0,n.fire("destroy",0,1,1),En(n,1),Mn(n,1)),n.$s--},Ln=function(n,t){t=this,A(t,n),t.$l={k:[]},t.$r={},t.$s=1,C(Nn,n,t)},Fn=Ln[x];A(Ln,{merge:function(n,t){t=n&&n.ctor,t&&Nn.push(t),A(Fn,n)},extend:function(n,t){var e=this;n=n||{};var r=n.ctor,i=function(n,t){e.call(this,n,t),r&&r.call(this,t)};return i.extend=e.extend,o(i,e,n,t)}}),A(A(Fn,z),{render:p,init:p,relate:function(n){var t=n.id||(n.id=U()),e=this;Tn[t]=e.owner,e.on("destroy",function(){delete Tn[t]})},beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&t.owner.unmountZone(n,1)},endUpdate:function(n,t,e,r){t=this,t.$s>0&&(r=t.$p,t.$p=1,e=t.owner,e.mountZone(n),r||xn(e))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},observe:function(n,t){var e,r,i=this;e=i.$l,e.f=1,r=e.k,t&&(e.p=t),n&&(e.k=r.concat((n+h).split(l)))},capture:function(n,t,e,r,i){return r=this.$r,Hn(r,n,1),i={e:t,x:e},r[n]=i,t},release:function(n,t){return Hn(this.$r,n,t)},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=T(n),e&&a(e,t)),r.endUpdate(n)}}),Q.View=Ln;var Qn=e.type,_n=e.proxy,zn=e.now||Date.now,Gn=JSON.stringify,Kn=function(){this.id=U("b"),this.$={}};A(Kn[x],{get:function(n,t,e){var r=this,i=arguments.length,o=i>=2,c=r.$,a=c;if(i){for(var f,s=u(n)?d.call(n):(n+h).split(".");(f=s.shift())&&a;)a=a[f];f&&(a=e)}return o&&Qn(t)!=Qn(a)&&(j.error(Error("type neq:"+n+"\n"+Gn(c))),a=t),a},set:function(n,t){var e,r=this;c(n)||(e={},e[n]=t,n=e),A(r.$,n)}});var Wn=1,Xn=2,Yn=function(n,t,e){e=this[n],delete this[n],C(e,t,e.e)},nt=function(n,t,e,r,i,o){var c=[],u=v,a=0;return function(f,s){var h,$=this;a++;var d=$.$m,p=d.k;c[f+1]=$;var l={bag:$,error:s};if(s)u=s,t.fire("fail",l),h=1;else if(!o.has(p)){p&&o.set(p,$),d.t=zn();var m=d.a;m&&C(m,$,$),d.x&&t.clear(d.x),t.fire("done",l),h=1}if(!e.$o){var g=a==r;g&&(e.$b=0,i==Xn&&(c[0]=u,C(n,c,e))),i==Wn&&C(n,[s?s:v,$,g,f],e)}h&&t.fire("end",l)}},tt=function(n,t,e,r,i){if(n.$o)return n;if(n.$b)return n.enqueue(function(){tt(this,t,e,r,i)});n.$b=1;var o=n.constructor,c=o.$r;u(t)||(t=[t]);for(var a,f=t.length,s=nt(e,o,n,f,r,o.$c),h=0;f>h;h++)if(a=t[h]){var $,d=o.get(a,i),p=d.e,l=p.$m.k,v=_n(s,p,h);l&&c[l]?c[l].push(v):d.u?(l&&($=[v],$.e=p,c[l]=$,v=_n(Yn,c,l)),o.$s(p,v)):v()}return n},et=function(){var n=this;n.id=U("s"),n.$q=[]};A(et[x],{all:function(n,t){return tt(this,n,t,Xn)},save:function(n,t){return tt(this,n,t,Xn,1)},one:function(n,t){return tt(this,n,t,Wn)},enqueue:function(n){var t=this;return t.$o||(t.$q.push(n),t.dequeue(t.$a)),t},dequeue:function(){var n=this,t=d.call(arguments);n.$b||n.$o||(n.$b=1,setTimeout(function(){if(n.$b=0,!n.$o){var e=n.$q.shift();e&&C(e,n.$a=t,n)}},0))},destroy:function(n){n=this,n.$o=1,n.$q=0}});var rt=function(n,t,e){return e=[Gn(t),Gn(n)],e.join(b)},it=function(n,t,e,r){r=n&&n.$m,r&&t[r.n]&&e.del(r.k)},ot=A({add:function(n){var t=this,e=t.$m;u(n)||(n=[n]);for(var r,i,o=n.length-1;o>-1;o--)r=n[o],r&&(i=r.name,r.cache=0|r.cache,e[i]=r)},create:function(n){var t=this,e=t.meta(n),r=e.cache,i=new Kn;i.set(e),i.$m={n:e.name,a:e.after,x:e.cleans,k:r&&rt(e,n)},c(n)&&i.set(n);var o=e.before;return o&&C(o,i,i),t.fire("begin",{bag:i}),i},meta:function(n){var t=this,e=t.$m,r=n.name||n,i=e[r];return i||n},get:function(n,t){var e,r,i=this;return t||(e=i.cached(n)),e||(e=i.create(n),r=1),{e:e,u:r}},clear:function(n){this.$c.each(it,L((n+h).split(l)))},cached:function(n){var t,e,r=this,i=r.$c,o=r.meta(n),c=o.cache;if(c&&(e=rt(o,n)),e){var u=r.$r,a=u[e];a?t=a.e:(t=i.get(e),t&&c>0&&zn()-t.$m.t>c&&(t=0))}return t}},z);et.extend=function(n,t,e){var r=this,i=function(){r.call(this)};return i.$s=n,i.$c=new R(t,e),i.$r={},i.$m={},o(i,r,v,ot)},Q.Service=et;var ct=function(n,t){var e=this,r=n&&n.ctor,i=function(){var n=this,t=arguments;e.apply(n,t),r&&r.apply(n,t)};return i.extend=ct,o(i,e,n,t)};return A(p[x],z),p.extend=ct,Q.Base=p,Q});