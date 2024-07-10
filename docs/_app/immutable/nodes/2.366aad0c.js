import{s as Ve,n as ze,o as An,r as yn}from"../chunks/scheduler.46233b48.js";import{S as Se,i as Oe,s as g,g as r,c as k,h as i,z as o,k as v,a as c,f as a,j as Bt,A as Fn,y as e,m as C,r as fe,n as x,u as he,v as ce,B as qe,d as lt,p as _n,t as Mt,b as Cn,w as de}from"../chunks/index.a26073d0.js";import{F as Pn}from"../chunks/FreedomWallets.c8b46692.js";import{P as Dn}from"../chunks/Philosophy.9ac0495e.js";import{e as xn}from"../chunks/each.e59479a4.js";import{g as Bn,o as Wn}from"../chunks/helpers.fbfb69d9.js";function gn(T,t,h){const u=T.slice();return u[3]=t[h],u}function kn(T){let t,h=xn(T[0]),u=[];for(let l=0;l<h.length;l+=1)u[l]=wn(gn(T,h,l));return{c(){t=r("div");for(let l=0;l<u.length;l+=1)u[l].c();this.h()},l(l){t=i(l,"DIV",{class:!0});var d=Bt(t);for(let s=0;s<u.length;s+=1)u[s].l(d);d.forEach(a),this.h()},h(){v(t,"class","grid-container svelte-ps7hak")},m(l,d){c(l,t,d);for(let s=0;s<u.length;s+=1)u[s]&&u[s].m(t,null)},p(l,d){if(d&1){h=xn(l[0]);let s;for(s=0;s<h.length;s+=1){const f=gn(l,h,s);u[s]?u[s].p(f,d):(u[s]=wn(f),u[s].c(),u[s].m(t,null))}for(;s<u.length;s+=1)u[s].d(1);u.length=h.length}},d(l){l&&a(t),Fn(u,l)}}}function wn(T){let t,h,u,l;return{c(){t=r("div"),h=r("object"),l=g(),this.h()},l(d){t=i(d,"DIV",{class:!0});var s=Bt(t);h=i(s,"OBJECT",{width:!0,title:!0,data:!0});var f=Bt(h);f.forEach(a),l=k(s),s.forEach(a),this.h()},h(){v(h,"width","100%"),v(h,"title","some of the first ..."),v(h,"data",u=T[3].txt),v(t,"class","item1 svelte-ps7hak")},m(d,s){c(d,t,s),e(t,h),e(t,l)},p(d,s){s&1&&u!==(u=d[3].txt)&&v(h,"data",u)},d(d){d&&a(t)}}}function En(T){let t,h,u="<br/>",l,d,s="<button>Mehr Videos</button>",f=T[1]&&kn(T);return{c(){f&&f.c(),t=g(),h=r("p"),h.innerHTML=u,l=g(),d=r("a"),d.innerHTML=s,this.h()},l(m){f&&f.l(m),t=k(m),h=i(m,"P",{"data-svelte-h":!0}),o(h)!=="svelte-pntvnr"&&(h.innerHTML=u),l=k(m),d=i(m,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(d)!=="svelte-11ozjta"&&(d.innerHTML=s),this.h()},h(){v(d,"href","https://rumble.com/c/c-5722872"),v(d,"target","_blank")},m(m,L){f&&f.m(m,L),c(m,t,L),c(m,h,L),c(m,l,L),c(m,d,L)},p(m,[L]){m[1]?f?f.p(m,L):(f=kn(m),f.c(),f.m(t.parentNode,t)):f&&(f.d(1),f=null)},i:ze,o:ze,d(m){m&&(a(t),a(h),a(l),a(d)),f&&f.d(m)}}}function jn(T,t,h){let{displayAmount:u}=t,l=[],d;return An(()=>{h(0,l=Bn(Wn,u)),h(1,d=!0)}),T.$$set=s=>{"displayAmount"in s&&h(2,u=s.displayAmount)},[l,d,u]}class $n extends Se{constructor(t){super(),Oe(this,t,jn,En,Ve,{displayAmount:2})}}function Mn(T){let t,h;return t=new Pn({}),{c(){fe(t.$$.fragment)},l(u){he(t.$$.fragment,u)},m(u,l){ce(t,u,l),h=!0},i(u){h||(lt(t.$$.fragment,u),h=!0)},o(u){Mt(t.$$.fragment,u),h=!1},d(u){de(t,u)}}}function Tn(T){let t,h="<br/><br/><br/>",u,l,d="<br/>",s,f,m="metamask.io",L,w,y="uniswap.org",U,P,J="<br/>",H,A,Q="Polygon POS Blockchain",Tt,Z,rt="<br/><br/><br/>",Ht,N,et="Freiheit",Lt,X,it="<br/>",At,st,Y,K,Wt="Friede",R,nt,Et="<br/>",tt,yt,at,W,Zt="Geo Cash",ut,z,Xt="<br/><br/><br/>",ot,j,Yt="Hilfe",ft,$,te="<br/>",ht,G,ee="<br/>",ct,V,ne="<br/>",dt,S,le="<br/>",pt,E,re="jemanden der sich auskennt",vt;return{c(){t=r("p"),t.innerHTML=h,u=C(`
			Bitte tausche unsere Freiheitswährungen lediglich mit friedliebenden Menschen, die jeden Menschen
			auf der Welt mit Respekt behandeln.
			`),l=r("p"),l.innerHTML=d,s=C(`
			Falls Du noch niemanden kennst, der entsprechend auch schon Freiheitsgeld hat, kannst Du Freiheitsgeld
			mit einem Browser Wallet wie
			`),f=r("a"),f.textContent=m,L=C(` z.B. bei
			`),w=r("a"),w.textContent=y,U=C(`
			kaufen und verkaufen.
			`),P=r("p"),P.innerHTML=J,H=C(`
			Dazu brauchst Du MATIC auf der
			`),A=r("a"),A.textContent=Q,Tt=C(`
			sowie die Smart Contract Adressen:
			`),Z=r("p"),Z.innerHTML=rt,Ht=g(),N=r("a"),N.textContent=et,Lt=C(`: 0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7
			`),X=r("p"),X.innerHTML=it,At=g(),st=r("br"),Y=g(),K=r("a"),K.textContent=Wt,R=C(`: 0x0715184614CA1e90EafDf7A4d7fE33B046b47C02
			`),nt=r("p"),nt.innerHTML=Et,tt=g(),yt=r("br"),at=g(),W=r("a"),W.textContent=Zt,ut=C(`: 0xb841A4f979F9510760ecf60512e038656E68f459
			`),z=r("p"),z.innerHTML=Xt,ot=g(),j=r("h6"),j.textContent=Yt,ft=g(),$=r("p"),$.innerHTML=te,ht=C(`
			Falls Du ein Neueinsteiger bist und gerade erst mal nicht weißt was hier los ist, atme tief durch.
			`),G=r("p"),G.innerHTML=ee,ct=C(`
			Wahrscheinlich braucht es ein paar oder sogar viele entspannte Anläufe.
			`),V=r("p"),V.innerHTML=ne,dt=C(`
			Fahrrad fahren lerntest Du wahrscheinlich auch eher weniger durch lesen und eher mehr durch geduldig
			mit vielen entspannten Anläufen ausprobieren.
			`),S=r("p"),S.innerHTML=le,pt=C(`
			Falls Du nach vielen entspannten Anläufen noch nicht klar kommst, frag vielleicht
			`),E=r("a"),E.textContent=re,vt=C(`
			und dem Du wirklich traust.`),this.h()},l(n){t=i(n,"P",{"data-svelte-h":!0}),o(t)!=="svelte-102w9s7"&&(t.innerHTML=h),u=x(n,`
			Bitte tausche unsere Freiheitswährungen lediglich mit friedliebenden Menschen, die jeden Menschen
			auf der Welt mit Respekt behandeln.
			`),l=i(n,"P",{"data-svelte-h":!0}),o(l)!=="svelte-pntvnr"&&(l.innerHTML=d),s=x(n,`
			Falls Du noch niemanden kennst, der entsprechend auch schon Freiheitsgeld hat, kannst Du Freiheitsgeld
			mit einem Browser Wallet wie
			`),f=i(n,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(f)!=="svelte-ckwul2"&&(f.textContent=m),L=x(n,` z.B. bei
			`),w=i(n,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(w)!=="svelte-e3y8gz"&&(w.textContent=y),U=x(n,`
			kaufen und verkaufen.
			`),P=i(n,"P",{"data-svelte-h":!0}),o(P)!=="svelte-pntvnr"&&(P.innerHTML=J),H=x(n,`
			Dazu brauchst Du MATIC auf der
			`),A=i(n,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(A)!=="svelte-uke8jq"&&(A.textContent=Q),Tt=x(n,`
			sowie die Smart Contract Adressen:
			`),Z=i(n,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-102w9s7"&&(Z.innerHTML=rt),Ht=k(n),N=i(n,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(N)!=="svelte-4fjl51"&&(N.textContent=et),Lt=x(n,`: 0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7
			`),X=i(n,"P",{"data-svelte-h":!0}),o(X)!=="svelte-pntvnr"&&(X.innerHTML=it),At=k(n),st=i(n,"BR",{}),Y=k(n),K=i(n,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(K)!=="svelte-1fsomxz"&&(K.textContent=Wt),R=x(n,`: 0x0715184614CA1e90EafDf7A4d7fE33B046b47C02
			`),nt=i(n,"P",{"data-svelte-h":!0}),o(nt)!=="svelte-pntvnr"&&(nt.innerHTML=Et),tt=k(n),yt=i(n,"BR",{}),at=k(n),W=i(n,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(W)!=="svelte-geowzn"&&(W.textContent=Zt),ut=x(n,`: 0xb841A4f979F9510760ecf60512e038656E68f459
			`),z=i(n,"P",{"data-svelte-h":!0}),o(z)!=="svelte-102w9s7"&&(z.innerHTML=Xt),ot=k(n),j=i(n,"H6",{"data-svelte-h":!0}),o(j)!=="svelte-1so3fd6"&&(j.textContent=Yt),ft=k(n),$=i(n,"P",{"data-svelte-h":!0}),o($)!=="svelte-pntvnr"&&($.innerHTML=te),ht=x(n,`
			Falls Du ein Neueinsteiger bist und gerade erst mal nicht weißt was hier los ist, atme tief durch.
			`),G=i(n,"P",{"data-svelte-h":!0}),o(G)!=="svelte-pntvnr"&&(G.innerHTML=ee),ct=x(n,`
			Wahrscheinlich braucht es ein paar oder sogar viele entspannte Anläufe.
			`),V=i(n,"P",{"data-svelte-h":!0}),o(V)!=="svelte-pntvnr"&&(V.innerHTML=ne),dt=x(n,`
			Fahrrad fahren lerntest Du wahrscheinlich auch eher weniger durch lesen und eher mehr durch geduldig
			mit vielen entspannten Anläufen ausprobieren.
			`),S=i(n,"P",{"data-svelte-h":!0}),o(S)!=="svelte-pntvnr"&&(S.innerHTML=le),pt=x(n,`
			Falls Du nach vielen entspannten Anläufen noch nicht klar kommst, frag vielleicht
			`),E=i(n,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(E)!=="svelte-nqsnei"&&(E.textContent=re),vt=x(n,`
			und dem Du wirklich traust.`),this.h()},h(){v(f,"href","https://metamask.io"),v(f,"target","_blank"),v(w,"href","https://app.uniswap.org/swap"),v(w,"target","_blank"),v(A,"href","https://portal.polygon.technology/bridge"),v(A,"target","_blank"),v(N,"href","https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7"),v(N,"target","_blank"),v(K,"href","https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02"),v(K,"target","_blank"),v(W,"href","https://polygonscan.com/token/0xb841a4f979f9510760ecf60512e038656e68f459"),v(W,"target","_blank"),v(E,"href","https://www.house-of-satoshi.ch/"),v(E,"target","_blank")},m(n,_){c(n,t,_),c(n,u,_),c(n,l,_),c(n,s,_),c(n,f,_),c(n,L,_),c(n,w,_),c(n,U,_),c(n,P,_),c(n,H,_),c(n,A,_),c(n,Tt,_),c(n,Z,_),c(n,Ht,_),c(n,N,_),c(n,Lt,_),c(n,X,_),c(n,At,_),c(n,st,_),c(n,Y,_),c(n,K,_),c(n,R,_),c(n,nt,_),c(n,tt,_),c(n,yt,_),c(n,at,_),c(n,W,_),c(n,ut,_),c(n,z,_),c(n,ot,_),c(n,j,_),c(n,ft,_),c(n,$,_),c(n,ht,_),c(n,G,_),c(n,ct,_),c(n,V,_),c(n,dt,_),c(n,S,_),c(n,pt,_),c(n,E,_),c(n,vt,_)},d(n){n&&(a(t),a(u),a(l),a(s),a(f),a(L),a(w),a(U),a(P),a(H),a(A),a(Tt),a(Z),a(Ht),a(N),a(Lt),a(X),a(At),a(st),a(Y),a(K),a(R),a(nt),a(tt),a(yt),a(at),a(W),a(ut),a(z),a(ot),a(j),a(ft),a($),a(ht),a(G),a(ct),a(V),a(dt),a(S),a(pt),a(E),a(vt))}}}function Hn(T){let t,h="<br/><br/>",u,l,d;return l=new Dn({}),{c(){t=r("p"),t.innerHTML=h,u=g(),fe(l.$$.fragment)},l(s){t=i(s,"P",{"data-svelte-h":!0}),o(t)!=="svelte-5q9igk"&&(t.innerHTML=h),u=k(s),he(l.$$.fragment,s)},m(s,f){c(s,t,f),c(s,u,f),ce(l,s,f),d=!0},i(s){d||(lt(l.$$.fragment,s),d=!0)},o(s){Mt(l.$$.fragment,s),d=!1},d(s){s&&(a(t),a(u)),de(l,s)}}}function Ln(T){let t,h="Lockeres Fernsehprogramm für die ganze Familie",u,l,d="<br/>",s,f,m='<object title="Die DAO" data="https://rumble.com/embed/v53ssul/?pub=3blg3u" class="svelte-1dugow7"></object>',L,w,y="<br/>",U,P,J='<object title="Bitcoin" data="https://rumble.com/embed/v53ssml/?pub=3blg3u" class="svelte-1dugow7"></object>';return{c(){t=r("h4"),t.textContent=h,u=g(),l=r("p"),l.innerHTML=d,s=g(),f=r("div"),f.innerHTML=m,L=g(),w=r("p"),w.innerHTML=y,U=g(),P=r("div"),P.innerHTML=J,this.h()},l(H){t=i(H,"H4",{"data-svelte-h":!0}),o(t)!=="svelte-sznog"&&(t.textContent=h),u=k(H),l=i(H,"P",{"data-svelte-h":!0}),o(l)!=="svelte-pntvnr"&&(l.innerHTML=d),s=k(H),f=i(H,"DIV",{class:!0,"data-svelte-h":!0}),o(f)!=="svelte-tnlpy6"&&(f.innerHTML=m),L=k(H),w=i(H,"P",{"data-svelte-h":!0}),o(w)!=="svelte-pntvnr"&&(w.innerHTML=y),U=k(H),P=i(H,"DIV",{class:!0,"data-svelte-h":!0}),o(P)!=="svelte-24noey"&&(P.innerHTML=J),this.h()},h(){v(f,"class","emma"),v(P,"class","emma")},m(H,A){c(H,t,A),c(H,u,A),c(H,l,A),c(H,s,A),c(H,f,A),c(H,L,A),c(H,w,A),c(H,U,A),c(H,P,A)},d(H){H&&(a(t),a(u),a(l),a(s),a(f),a(L),a(w),a(U),a(P))}}}function Gn(T){let t,h,u="Metamask App",l;return{c(){t=C(`Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite
			bitte mit dem in der `),h=r("a"),h.textContent=u,l=C(` eingebauten
			Browser.`),this.h()},l(d){t=x(d,`Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite
			bitte mit dem in der `),h=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(h)!=="svelte-8f3ltt"&&(h.textContent=u),l=x(d,` eingebauten
			Browser.`),this.h()},h(){v(h,"href","https://metamask.io"),v(h,"target","_blank")},m(d,s){c(d,t,s),c(d,h,s),c(d,l,s)},d(d){d&&(a(t),a(h),a(l))}}}function In(T){let t,h="<br/>",u,l,d="metamask.io",s,f,m="brave.com",L;return{c(){t=r("p"),t.innerHTML=h,u=C(`
			Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise`),l=r("a"),l.textContent=d,s=C(`
			oder nutze das im `),f=r("a"),f.textContent=m,L=C(` Browser eingebaute
			Wallet.`),this.h()},l(w){t=i(w,"P",{"data-svelte-h":!0}),o(t)!=="svelte-pntvnr"&&(t.innerHTML=h),u=x(w,`
			Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise`),l=i(w,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(l)!=="svelte-13yd2tt"&&(l.textContent=d),s=x(w,`
			oder nutze das im `),f=i(w,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(f)!=="svelte-12y5jy6"&&(f.textContent=m),L=x(w,` Browser eingebaute
			Wallet.`),this.h()},h(){v(l,"href","https://metamask.io"),v(l,"target","_blank"),v(f,"href","https://brave.com"),v(f,"target","_blank")},m(w,y){c(w,t,y),c(w,u,y),c(w,l,y),c(w,s,y),c(w,f,y),c(w,L,y)},d(w){w&&(a(t),a(u),a(l),a(s),a(f),a(L))}}}function qn(T){let t,h,u="<br/>",l,d,s="<br/>",f,m,L="Freiheit",w,y,U="Friede",P,J,H="<br/>",A,Q,Tt="Geo Cash",Z,rt,Ht="<br/><br/><br/>",N,et,Lt='<object title="Emma" data="https://rumble.com/embed/v4tuakn/?pub=3blg3u" class="svelte-1dugow7"></object>',X,it,At="<br/>",st,Y,K="Architekturen der Freiheit",Wt,R,nt="Gewaltenteilung",Et,tt,yt="<br/>",at,W,Zt="das Volk",ut,z,Xt="<br/>",ot,j,Yt="Freiheit",ft,$,te="Friede",ht,G,ee="Geo Cash",ct,V,ne="<br/>",dt,S,le="Initiale Verteilung",pt,E,re="Wir",vt,n,_="<br/>",pe,bt,Ne="die Party",ve,jt,Re="<br/>",be,mt,Ue="Geo Caching",me,$t,Je="<br/>",_e,Gt,Ke="Mach es Besser",Ce,_t,Qe="Open Source",xe,It,Ze="<br/>",ge,qt,Xe="<br/>",ke,zt,Ye="<br/><br/><br/>",we,Vt,Ft,Me,b,Pt,tn="Gesamtmengen",Te,St,en="<br/>",He,Dt,nn='<table class="svelte-1dugow7"><tr class="svelte-1dugow7"><th style="text-align: center" class="svelte-1dugow7">Währung</th> <th class="svelte-1dugow7">Gesamtmenge</th></tr> <tr class="svelte-1dugow7"><td class="svelte-1dugow7"><a href="https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7" target="_blank">Freiheit</a></td> <td class="longInfo svelte-1dugow7"><a href="https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9" target="_blank">9.000.000.000 Coins</a></td></tr> <tr class="svelte-1dugow7"><td class="svelte-1dugow7"><a href="https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02" target="_blank">Friede</a></td> <td class="longInfo svelte-1dugow7"><a href="https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368" target="_blank">9.000.000.000 Coins</a></td></tr> <tr class="svelte-1dugow7"><td class="svelte-1dugow7"><a href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a></td> <td class="longInfo svelte-1dugow7"><a href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c" target="_blank">360.000.000 Coins</a></td></tr></table>',Le,Ot,ln="<br/><br/>",Ae,Ct,rn="Generiere Freiheitsgeldbeutel",ye,ie,Nt,sn="<br/><br/>",Fe,xt,an="Kaufe und Verkaufe Freiheitsgeld",Pe,se,Rt,un="<br/><br/>",De,gt,on="Philosophie",Be,ae,Ut,fn="<br/><br/><br/>",We,kt,hn="Geo Cash",Ee,wt,cn="<i>Monique Baumann</i>",je,Jt,dn="<br/><br/><br/>",$e,ue,Kt,pn="<br/><br/>",Ge,oe,Ie,vn;Ft=new $n({props:{displayAmount:3}});let D=T[3]&&Mn(),I=T[1]&&Tn(),B=T[2]&&Hn(),q=T[5]&&Ln();function bn(F,p){if(!F[0]&&!F[4])return In;if(!F[0]&&F[4])return Gn}let Qt=bn(T),O=Qt&&Qt(T);return{c(){t=r("section"),h=r("p"),h.innerHTML=u,l=C(`
	Bitte behandelt jeden mit Respekt.

	`),d=r("p"),d.innerHTML=s,f=C(`
	Wir tragen
	`),m=r("a"),m.textContent=L,w=C(`,
	`),y=r("a"),y.textContent=U,P=C(`
	und Freundschaft in die Welt.
	`),J=r("p"),J.innerHTML=H,A=C(`
	Wir erkunden Architekturen der Freiheit mit
	`),Q=r("a"),Q.textContent=Tt,Z=C(`.

	`),rt=r("p"),rt.innerHTML=Ht,N=g(),et=r("div"),et.innerHTML=Lt,X=g(),it=r("p"),it.innerHTML=At,st=g(),Y=r("h4"),Y.textContent=K,Wt=C(`

	Wir glauben an
	`),R=r("a"),R.textContent=nt,Et=C(`.
	`),tt=r("p"),tt.innerHTML=yt,at=C(`
	Wir glauben an
	`),W=r("a"),W.textContent=Zt,ut=C(`
	als Souverän.
	`),z=r("p"),z.innerHTML=Xt,ot=C(`
	Unsere experimentellen Währungen sind
	`),j=r("a"),j.textContent=Yt,ft=C(`,
	`),$=r("a"),$.textContent=te,ht=C(`
	und
	`),G=r("a"),G.textContent=ee,ct=C(`.
	`),V=r("p"),V.innerHTML=ne,dt=g(),S=r("h4"),S.textContent=le,pt=g(),E=r("a"),E.textContent=re,vt=C(`
	fördern zuerst eine breite initiale Verteilung.
	`),n=r("p"),n.innerHTML=_,pe=C(`
	Danach hinterlegen wir einen passenden Gegenwert, um
	`),bt=r("a"),bt.textContent=Ne,ve=C(`
	zu starten.
	`),jt=r("p"),jt.innerHTML=Re,be=C(`
	Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
	`),mt=r("a"),mt.textContent=Ue,me=C(`.
	
	`),$t=r("p"),$t.innerHTML=Je,_e=g(),Gt=r("h4"),Gt.textContent=Ke,Ce=C(`
	Unser Code ist
	`),_t=r("a"),_t.textContent=Qe,xe=C(`. Gerne
	kopieren und besser machen.
	`),It=r("p"),It.innerHTML=Ze,ge=C(`
	Falls Du investierst, investiere vielleicht nur sehr kleine experimentelle Beträge.
	`),qt=r("p"),qt.innerHTML=Xe,ke=C(`
	Wir wissen nicht wie sich der Wert unserer Währungen entwickelt.

	`),zt=r("p"),zt.innerHTML=Ye,we=g(),Vt=r("div"),fe(Ft.$$.fragment),Me=g(),b=r("div"),Pt=r("h4"),Pt.textContent=tn,Te=g(),St=r("p"),St.innerHTML=en,He=g(),Dt=r("div"),Dt.innerHTML=nn,Le=g(),Ot=r("p"),Ot.innerHTML=ln,Ae=g(),Ct=r("button"),Ct.textContent=rn,ye=g(),D&&D.c(),ie=g(),Nt=r("p"),Nt.innerHTML=sn,Fe=g(),xt=r("button"),xt.textContent=an,Pe=g(),I&&I.c(),se=g(),Rt=r("p"),Rt.innerHTML=un,De=g(),gt=r("button"),gt.textContent=on,Be=g(),B&&B.c(),ae=g(),Ut=r("p"),Ut.innerHTML=fn,We=C(`
		Ich kaufe und verkaufe
		`),kt=r("a"),kt.textContent=hn,Ee=C(`, Silber und Gold.
		`),wt=r("a"),wt.innerHTML=cn,je=g(),Jt=r("p"),Jt.innerHTML=dn,$e=g(),q&&q.c(),ue=g(),Kt=r("p"),Kt.innerHTML=pn,Ge=g(),O&&O.c(),this.h()},l(F){t=i(F,"SECTION",{class:!0});var p=Bt(t);h=i(p,"P",{"data-svelte-h":!0}),o(h)!=="svelte-pntvnr"&&(h.innerHTML=u),l=x(p,`
	Bitte behandelt jeden mit Respekt.

	`),d=i(p,"P",{"data-svelte-h":!0}),o(d)!=="svelte-pntvnr"&&(d.innerHTML=s),f=x(p,`
	Wir tragen
	`),m=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(m)!=="svelte-3pnr0t"&&(m.textContent=L),w=x(p,`,
	`),y=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(y)!=="svelte-qugqk8"&&(y.textContent=U),P=x(p,`
	und Freundschaft in die Welt.
	`),J=i(p,"P",{"data-svelte-h":!0}),o(J)!=="svelte-pntvnr"&&(J.innerHTML=H),A=x(p,`
	Wir erkunden Architekturen der Freiheit mit
	`),Q=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(Q)!=="svelte-10dttgi"&&(Q.textContent=Tt),Z=x(p,`.

	`),rt=i(p,"P",{"data-svelte-h":!0}),o(rt)!=="svelte-102w9s7"&&(rt.innerHTML=Ht),N=k(p),et=i(p,"DIV",{class:!0,"data-svelte-h":!0}),o(et)!=="svelte-4ybcdw"&&(et.innerHTML=Lt),X=k(p),it=i(p,"P",{"data-svelte-h":!0}),o(it)!=="svelte-pntvnr"&&(it.innerHTML=At),st=k(p),Y=i(p,"H4",{"data-svelte-h":!0}),o(Y)!=="svelte-1xrxjrm"&&(Y.textContent=K),Wt=x(p,`

	Wir glauben an
	`),R=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(R)!=="svelte-yuk18t"&&(R.textContent=nt),Et=x(p,`.
	`),tt=i(p,"P",{"data-svelte-h":!0}),o(tt)!=="svelte-pntvnr"&&(tt.innerHTML=yt),at=x(p,`
	Wir glauben an
	`),W=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(W)!=="svelte-16o41oy"&&(W.textContent=Zt),ut=x(p,`
	als Souverän.
	`),z=i(p,"P",{"data-svelte-h":!0}),o(z)!=="svelte-pntvnr"&&(z.innerHTML=Xt),ot=x(p,`
	Unsere experimentellen Währungen sind
	`),j=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(j)!=="svelte-3pnr0t"&&(j.textContent=Yt),ft=x(p,`,
	`),$=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o($)!=="svelte-qugqk8"&&($.textContent=te),ht=x(p,`
	und
	`),G=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(G)!=="svelte-10dttgi"&&(G.textContent=ee),ct=x(p,`.
	`),V=i(p,"P",{"data-svelte-h":!0}),o(V)!=="svelte-pntvnr"&&(V.innerHTML=ne),dt=k(p),S=i(p,"H4",{"data-svelte-h":!0}),o(S)!=="svelte-11fsrya"&&(S.textContent=le),pt=k(p),E=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(E)!=="svelte-p3soxg"&&(E.textContent=re),vt=x(p,`
	fördern zuerst eine breite initiale Verteilung.
	`),n=i(p,"P",{"data-svelte-h":!0}),o(n)!=="svelte-pntvnr"&&(n.innerHTML=_),pe=x(p,`
	Danach hinterlegen wir einen passenden Gegenwert, um
	`),bt=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(bt)!=="svelte-1gsty2i"&&(bt.textContent=Ne),ve=x(p,`
	zu starten.
	`),jt=i(p,"P",{"data-svelte-h":!0}),o(jt)!=="svelte-pntvnr"&&(jt.innerHTML=Re),be=x(p,`
	Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
	`),mt=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(mt)!=="svelte-2dzyje"&&(mt.textContent=Ue),me=x(p,`.
	
	`),$t=i(p,"P",{"data-svelte-h":!0}),o($t)!=="svelte-pntvnr"&&($t.innerHTML=Je),_e=k(p),Gt=i(p,"H4",{"data-svelte-h":!0}),o(Gt)!=="svelte-ofj4jr"&&(Gt.textContent=Ke),Ce=x(p,`
	Unser Code ist
	`),_t=i(p,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(_t)!=="svelte-1eqruzd"&&(_t.textContent=Qe),xe=x(p,`. Gerne
	kopieren und besser machen.
	`),It=i(p,"P",{"data-svelte-h":!0}),o(It)!=="svelte-pntvnr"&&(It.innerHTML=Ze),ge=x(p,`
	Falls Du investierst, investiere vielleicht nur sehr kleine experimentelle Beträge.
	`),qt=i(p,"P",{"data-svelte-h":!0}),o(qt)!=="svelte-pntvnr"&&(qt.innerHTML=Xe),ke=x(p,`
	Wir wissen nicht wie sich der Wert unserer Währungen entwickelt.

	`),zt=i(p,"P",{"data-svelte-h":!0}),o(zt)!=="svelte-102w9s7"&&(zt.innerHTML=Ye),we=k(p),Vt=i(p,"DIV",{class:!0});var mn=Bt(Vt);he(Ft.$$.fragment,mn),mn.forEach(a),Me=k(p),b=i(p,"DIV",{class:!0});var M=Bt(b);Pt=i(M,"H4",{class:!0,"data-svelte-h":!0}),o(Pt)!=="svelte-18kqqe1"&&(Pt.textContent=tn),Te=k(M),St=i(M,"P",{"data-svelte-h":!0}),o(St)!=="svelte-pntvnr"&&(St.innerHTML=en),He=k(M),Dt=i(M,"DIV",{class:!0,"data-svelte-h":!0}),o(Dt)!=="svelte-6jrjp2"&&(Dt.innerHTML=nn),Le=k(M),Ot=i(M,"P",{"data-svelte-h":!0}),o(Ot)!=="svelte-5q9igk"&&(Ot.innerHTML=ln),Ae=k(M),Ct=i(M,"BUTTON",{class:!0,"data-svelte-h":!0}),o(Ct)!=="svelte-1ja53j5"&&(Ct.textContent=rn),ye=k(M),D&&D.l(M),ie=k(M),Nt=i(M,"P",{"data-svelte-h":!0}),o(Nt)!=="svelte-5q9igk"&&(Nt.innerHTML=sn),Fe=k(M),xt=i(M,"BUTTON",{class:!0,"data-svelte-h":!0}),o(xt)!=="svelte-kwq6e6"&&(xt.textContent=an),Pe=k(M),I&&I.l(M),se=k(M),Rt=i(M,"P",{"data-svelte-h":!0}),o(Rt)!=="svelte-5q9igk"&&(Rt.innerHTML=un),De=k(M),gt=i(M,"BUTTON",{class:!0,"data-svelte-h":!0}),o(gt)!=="svelte-1yj694n"&&(gt.textContent=on),Be=k(M),B&&B.l(M),ae=k(M),Ut=i(M,"P",{"data-svelte-h":!0}),o(Ut)!=="svelte-102w9s7"&&(Ut.innerHTML=fn),We=x(M,`
		Ich kaufe und verkaufe
		`),kt=i(M,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(kt)!=="svelte-1oa5di5"&&(kt.textContent=hn),Ee=x(M,`, Silber und Gold.
		`),wt=i(M,"A",{href:!0,target:!0,"data-svelte-h":!0}),o(wt)!=="svelte-hosg9k"&&(wt.innerHTML=cn),je=k(M),Jt=i(M,"P",{"data-svelte-h":!0}),o(Jt)!=="svelte-102w9s7"&&(Jt.innerHTML=dn),$e=k(M),q&&q.l(M),ue=k(M),Kt=i(M,"P",{"data-svelte-h":!0}),o(Kt)!=="svelte-5q9igk"&&(Kt.innerHTML=pn),Ge=k(M),O&&O.l(M),M.forEach(a),p.forEach(a),this.h()},h(){v(m,"href","https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9"),v(m,"target","_blank"),v(y,"href","https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"),v(y,"target","_blank"),v(Q,"href","https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c"),v(Q,"target","_blank"),v(et,"class","emma"),v(R,"href","https://www.youtube.com/watch?v=oPZK3l93LyI"),v(R,"target","_blank"),v(W,"href","https://rumble.com/v4y53lt-chroniken-der-plandemie-legen-eine-aufarbeitung-der-verbrechen-nahe..html"),v(W,"target","_blank"),v(j,"href","https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9"),v(j,"target","_blank"),v($,"href","https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"),v($,"target","_blank"),v(G,"href","https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c"),v(G,"target","_blank"),v(E,"href","https://github.com/moniquebaumann/friends-of-satoshi/blob/main/README.md"),v(E,"target","_blank"),v(bt,"href","https://www.youtube.com/watch?v=fW8amMCVAJQ"),v(bt,"target","_blank"),v(mt,"href","https://de.wikipedia.org/wiki/Geocaching"),v(mt,"target","_blank"),v(_t,"href","https://github.com/FreiheitsGeld/freiheitsgeld"),v(_t,"target","_blank"),v(Vt,"class","content svelte-1dugow7"),v(Pt,"class","text-center"),v(Dt,"class","tableDiv svelte-1dugow7"),v(Ct,"class","button"),v(xt,"class","button"),v(gt,"class","button"),v(kt,"href","https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459"),v(kt,"target","_blank"),v(wt,"href","https://github.com/moniquebaumann"),v(wt,"target","_blank"),v(b,"class","content svelte-1dugow7"),v(t,"class","text-center")},m(F,p){c(F,t,p),e(t,h),e(t,l),e(t,d),e(t,f),e(t,m),e(t,w),e(t,y),e(t,P),e(t,J),e(t,A),e(t,Q),e(t,Z),e(t,rt),e(t,N),e(t,et),e(t,X),e(t,it),e(t,st),e(t,Y),e(t,Wt),e(t,R),e(t,Et),e(t,tt),e(t,at),e(t,W),e(t,ut),e(t,z),e(t,ot),e(t,j),e(t,ft),e(t,$),e(t,ht),e(t,G),e(t,ct),e(t,V),e(t,dt),e(t,S),e(t,pt),e(t,E),e(t,vt),e(t,n),e(t,pe),e(t,bt),e(t,ve),e(t,jt),e(t,be),e(t,mt),e(t,me),e(t,$t),e(t,_e),e(t,Gt),e(t,Ce),e(t,_t),e(t,xe),e(t,It),e(t,ge),e(t,qt),e(t,ke),e(t,zt),e(t,we),e(t,Vt),ce(Ft,Vt,null),e(t,Me),e(t,b),e(b,Pt),e(b,Te),e(b,St),e(b,He),e(b,Dt),e(b,Le),e(b,Ot),e(b,Ae),e(b,Ct),e(b,ye),D&&D.m(b,null),e(b,ie),e(b,Nt),e(b,Fe),e(b,xt),e(b,Pe),I&&I.m(b,null),e(b,se),e(b,Rt),e(b,De),e(b,gt),e(b,Be),B&&B.m(b,null),e(b,ae),e(b,Ut),e(b,We),e(b,kt),e(b,Ee),e(b,wt),e(b,je),e(b,Jt),e(b,$e),q&&q.m(b,null),e(b,ue),e(b,Kt),e(b,Ge),O&&O.m(b,null),oe=!0,Ie||(vn=[qe(Ct,"click",T[6]),qe(xt,"click",T[7]),qe(gt,"click",T[8])],Ie=!0)},p(F,[p]){F[3]?D?p&8&&lt(D,1):(D=Mn(),D.c(),lt(D,1),D.m(b,ie)):D&&(_n(),Mt(D,1,1,()=>{D=null}),Cn()),F[1]?I||(I=Tn(),I.c(),I.m(b,se)):I&&(I.d(1),I=null),F[2]?B?p&4&&lt(B,1):(B=Hn(),B.c(),lt(B,1),B.m(b,ae)):B&&(_n(),Mt(B,1,1,()=>{B=null}),Cn()),F[5]?q||(q=Ln(),q.c(),q.m(b,ue)):q&&(q.d(1),q=null),Qt!==(Qt=bn(F))&&(O&&O.d(1),O=Qt&&Qt(F),O&&(O.c(),O.m(b,null)))},i(F){oe||(lt(Ft.$$.fragment,F),lt(D),lt(B),oe=!0)},o(F){Mt(Ft.$$.fragment,F),Mt(D),Mt(B),oe=!1},d(F){F&&a(t),de(Ft),D&&D.d(),I&&I.d(),B&&B.d(),q&&q.d(),O&&O.d(),Ie=!1,yn(vn)}}}function zn(T,t,h){let u=!1,l,d,s,f=!1,m=!1;return An(async()=>{typeof window.ethereum>"u"?h(0,u=!1):h(0,u=!0),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&h(4,f=!0),setTimeout(()=>{h(5,m=!0)},60*60)}),[u,l,d,s,f,m,()=>h(3,s=!s),()=>h(1,l=!l),()=>h(2,d=!d)]}class Vn extends Se{constructor(t){super(),Oe(this,t,zn,qn,Ve,{})}}function Sn(T){let t,h="Weltfriede, Freiheit, Freundschaft",u,l,d,s;return d=new Vn({}),{c(){t=r("h2"),t.textContent=h,u=g(),l=r("main"),fe(d.$$.fragment),this.h()},l(f){t=i(f,"H2",{class:!0,"data-svelte-h":!0}),o(t)!=="svelte-191y3w"&&(t.textContent=h),u=k(f),l=i(f,"MAIN",{});var m=Bt(l);he(d.$$.fragment,m),m.forEach(a),this.h()},h(){v(t,"class","text-center")},m(f,m){c(f,t,m),c(f,u,m),c(f,l,m),ce(d,l,null),s=!0},p:ze,i(f){s||(lt(d.$$.fragment,f),s=!0)},o(f){Mt(d.$$.fragment,f),s=!1},d(f){f&&(a(t),a(u),a(l)),de(d)}}}class Qn extends Se{constructor(t){super(),Oe(this,t,null,Sn,Ve,{})}}export{Qn as component};
