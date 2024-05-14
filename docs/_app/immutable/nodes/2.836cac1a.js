import{s as dt,n as pt,o as Nt,r as Jt}from"../chunks/scheduler.46233b48.js";import{S as vt,i as bt,e as qt,a as v,f,g as s,s as w,h as a,z as p,c as M,j as me,k as b,A as Kt,y as t,m as T,r as ze,n as H,u as We,v as De,B as ut,d as W,p as ht,t as K,b as ct,w as Ee}from"../chunks/index.a26073d0.js";import{e as Gt}from"../chunks/each.e59479a4.js";import{o as Qt}from"../chunks/off-chain-data.fb94c2f0.js";import{g as Xt}from"../chunks/helpers.a2ca6107.js";import{F as Yt}from"../chunks/FreedomWallets.c8b46692.js";import{L as Zt}from"../chunks/LogBook.4c730ec4.js";import{P as en}from"../chunks/Philosophy.030133e2.js";function It(k,e,n){const l=k.slice();return l[4]=e[n],l}function Vt(k){let e,n="<button>Mehr Videos</button>",l,i,d="<br/>",o,u,A=Gt(k[0]),_=[];for(let h=0;h<A.length;h+=1)_[h]=St(It(k,A,h));return{c(){e=s("a"),e.innerHTML=n,l=w(),i=s("p"),i.innerHTML=d,o=w(),u=s("div");for(let h=0;h<_.length;h+=1)_[h].c();this.h()},l(h){e=a(h,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(e)!=="svelte-11ozjta"&&(e.innerHTML=n),l=M(h),i=a(h,"P",{"data-svelte-h":!0}),p(i)!=="svelte-pntvnr"&&(i.innerHTML=d),o=M(h),u=a(h,"DIV",{class:!0});var L=me(u);for(let x=0;x<_.length;x+=1)_[x].l(L);L.forEach(f),this.h()},h(){b(e,"href","https://rumble.com/c/c-5722872"),b(e,"target","_blank"),b(u,"class","grid-container svelte-ps7hak")},m(h,L){v(h,e,L),v(h,l,L),v(h,i,L),v(h,o,L),v(h,u,L);for(let x=0;x<_.length;x+=1)_[x]&&_[x].m(u,null)},p(h,L){if(L&1){A=Gt(h[0]);let x;for(x=0;x<A.length;x+=1){const D=It(h,A,x);_[x]?_[x].p(D,L):(_[x]=St(D),_[x].c(),_[x].m(u,null))}for(;x<_.length;x+=1)_[x].d(1);_.length=A.length}},d(h){h&&(f(e),f(l),f(i),f(o),f(u)),Kt(_,h)}}}function St(k){let e,n,l,i;return{c(){e=s("div"),n=s("object"),i=w(),this.h()},l(d){e=a(d,"DIV",{class:!0});var o=me(e);n=a(o,"OBJECT",{width:!0,title:!0,data:!0});var u=me(n);u.forEach(f),i=M(o),o.forEach(f),this.h()},h(){b(n,"width","100%"),b(n,"title","some of the first ..."),b(n,"data",l=k[4].txt),b(e,"class","item1 svelte-ps7hak")},m(d,o){v(d,e,o),t(e,n),t(e,i)},p(d,o){o&1&&l!==(l=d[4].txt)&&b(n,"data",l)},d(d){d&&f(e)}}}function tn(k){let e,n=k[1]&&Vt(k);return{c(){n&&n.c(),e=qt()},l(l){n&&n.l(l),e=qt()},m(l,i){n&&n.m(l,i),v(l,e,i)},p(l,[i]){l[1]?n?n.p(l,i):(n=Vt(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:pt,o:pt,d(l){l&&f(e),n&&n.d(l)}}}function nn(k,e,n){let{displayAmount:l}=e,i=[],d;return Nt(()=>{n(0,i=Xt(Qt,l)),n(1,d=!0)}),k.$$set=o=>{"displayAmount"in o&&n(2,l=o.displayAmount)},[i,d,l]}class ln extends vt{constructor(e){super(),bt(this,e,nn,tn,dt,{displayAmount:2})}}function Ot(k){let e,n;return e=new Yt({}),{c(){ze(e.$$.fragment)},l(l){We(e.$$.fragment,l)},m(l,i){De(e,l,i),n=!0},i(l){n||(W(e.$$.fragment,l),n=!0)},o(l){K(e.$$.fragment,l),n=!1},d(l){Ee(e,l)}}}function Rt(k){let e,n="<br/><br/>",l,i,d="<br/>",o,u,A="uniswap.org",_,h,L="<br/>",x,D,_e="<br/><br/><br/>",E,O,ge="Freiheit",q,Q,Ce="<br/>",G,fe,ee,B,Be="Friede",te,$,$e="<br/>",ne,I,ue,V,X="Geo Cash",he,U,N="<br/>",ce,J,Y="<br/>",pe,R,S;return R=new Zt({props:{visitorWithMobile:k[4]}}),{c(){e=s("p"),e.innerHTML=n,l=T(`
			Bitte tausche unsere Freiheitswährungen lediglich mit friedliebenden Menschen aus, die jeden Menschen
			auf der Welt mit Respekt behandeln.
			`),i=s("p"),i.innerHTML=d,o=T(`
			Falls Du noch niemanden persönlich kennst der entsprechend auch schon Freiheitsgeld hat, kannst
			Du Freiheitsgeld z.B. bei
			`),u=s("a"),u.textContent=A,_=T(`
			kaufen und verkaufen.
			`),h=s("p"),h.innerHTML=L,x=T(`
			Dazu brauchst Du die jeweilige Smart Contract Adresse:
			`),D=s("p"),D.innerHTML=_e,E=w(),O=s("a"),O.textContent=ge,q=T(`: 0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7
			`),Q=s("p"),Q.innerHTML=Ce,G=w(),fe=s("br"),ee=w(),B=s("a"),B.textContent=Be,te=T(`: 0x0715184614CA1e90EafDf7A4d7fE33B046b47C02
			`),$=s("p"),$.innerHTML=$e,ne=w(),I=s("br"),ue=w(),V=s("a"),V.textContent=X,he=T(`: 0xb841A4f979F9510760ecf60512e038656E68f459
			`),U=s("p"),U.innerHTML=N,ce=w(),J=s("p"),J.innerHTML=Y,pe=w(),ze(R.$$.fragment),this.h()},l(r){e=a(r,"P",{"data-svelte-h":!0}),p(e)!=="svelte-5q9igk"&&(e.innerHTML=n),l=H(r,`
			Bitte tausche unsere Freiheitswährungen lediglich mit friedliebenden Menschen aus, die jeden Menschen
			auf der Welt mit Respekt behandeln.
			`),i=a(r,"P",{"data-svelte-h":!0}),p(i)!=="svelte-pntvnr"&&(i.innerHTML=d),o=H(r,`
			Falls Du noch niemanden persönlich kennst der entsprechend auch schon Freiheitsgeld hat, kannst
			Du Freiheitsgeld z.B. bei
			`),u=a(r,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(u)!=="svelte-e3y8gz"&&(u.textContent=A),_=H(r,`
			kaufen und verkaufen.
			`),h=a(r,"P",{"data-svelte-h":!0}),p(h)!=="svelte-pntvnr"&&(h.innerHTML=L),x=H(r,`
			Dazu brauchst Du die jeweilige Smart Contract Adresse:
			`),D=a(r,"P",{"data-svelte-h":!0}),p(D)!=="svelte-102w9s7"&&(D.innerHTML=_e),E=M(r),O=a(r,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(O)!=="svelte-4fjl51"&&(O.textContent=ge),q=H(r,`: 0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7
			`),Q=a(r,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-pntvnr"&&(Q.innerHTML=Ce),G=M(r),fe=a(r,"BR",{}),ee=M(r),B=a(r,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(B)!=="svelte-1fsomxz"&&(B.textContent=Be),te=H(r,`: 0x0715184614CA1e90EafDf7A4d7fE33B046b47C02
			`),$=a(r,"P",{"data-svelte-h":!0}),p($)!=="svelte-pntvnr"&&($.innerHTML=$e),ne=M(r),I=a(r,"BR",{}),ue=M(r),V=a(r,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(V)!=="svelte-geowzn"&&(V.textContent=X),he=H(r,`: 0xb841A4f979F9510760ecf60512e038656E68f459
			`),U=a(r,"P",{"data-svelte-h":!0}),p(U)!=="svelte-pntvnr"&&(U.innerHTML=N),ce=M(r),J=a(r,"P",{"data-svelte-h":!0}),p(J)!=="svelte-pntvnr"&&(J.innerHTML=Y),pe=M(r),We(R.$$.fragment,r),this.h()},h(){b(u,"href","https://app.uniswap.org/swap"),b(u,"target","_blank"),b(O,"href","https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7"),b(O,"target","_blank"),b(B,"href","https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02"),b(B,"target","_blank"),b(V,"href","https://polygonscan.com/token/0xb841a4f979f9510760ecf60512e038656e68f459"),b(V,"target","_blank")},m(r,g){v(r,e,g),v(r,l,g),v(r,i,g),v(r,o,g),v(r,u,g),v(r,_,g),v(r,h,g),v(r,x,g),v(r,D,g),v(r,E,g),v(r,O,g),v(r,q,g),v(r,Q,g),v(r,G,g),v(r,fe,g),v(r,ee,g),v(r,B,g),v(r,te,g),v(r,$,g),v(r,ne,g),v(r,I,g),v(r,ue,g),v(r,V,g),v(r,he,g),v(r,U,g),v(r,ce,g),v(r,J,g),v(r,pe,g),De(R,r,g),S=!0},p(r,g){const Z={};g&16&&(Z.visitorWithMobile=r[4]),R.$set(Z)},i(r){S||(W(R.$$.fragment,r),S=!0)},o(r){K(R.$$.fragment,r),S=!1},d(r){r&&(f(e),f(l),f(i),f(o),f(u),f(_),f(h),f(x),f(D),f(E),f(O),f(q),f(Q),f(G),f(fe),f(ee),f(B),f(te),f($),f(ne),f(I),f(ue),f(V),f(he),f(U),f(ce),f(J),f(pe)),Ee(R,r)}}}function Ut(k){let e,n="<br/><br/>",l,i,d;return i=new en({}),{c(){e=s("p"),e.innerHTML=n,l=w(),ze(i.$$.fragment)},l(o){e=a(o,"P",{"data-svelte-h":!0}),p(e)!=="svelte-5q9igk"&&(e.innerHTML=n),l=M(o),We(i.$$.fragment,o)},m(o,u){v(o,e,u),v(o,l,u),De(i,o,u),d=!0},i(o){d||(W(i.$$.fragment,o),d=!0)},o(o){K(i.$$.fragment,o),d=!1},d(o){o&&(f(e),f(l)),Ee(i,o)}}}function rn(k){let e,n,l="Metamask App",i;return{c(){e=T(`Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite
			bitte mit dem in der `),n=s("a"),n.textContent=l,i=T(` eingebauten
			Browser.`),this.h()},l(d){e=H(d,`Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite
			bitte mit dem in der `),n=a(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(n)!=="svelte-8f3ltt"&&(n.textContent=l),i=H(d,` eingebauten
			Browser.`),this.h()},h(){b(n,"href","https://metamask.io"),b(n,"target","_blank")},m(d,o){v(d,e,o),v(d,n,o),v(d,i,o)},d(d){d&&(f(e),f(n),f(i))}}}function sn(k){let e,n="<br/>",l,i,d="metamask.io",o,u,A="brave.com",_;return{c(){e=s("p"),e.innerHTML=n,l=T(`
			Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise`),i=s("a"),i.textContent=d,o=T(`
			oder nutze das im `),u=s("a"),u.textContent=A,_=T(` Browser eingebaute
			Wallet.`),this.h()},l(h){e=a(h,"P",{"data-svelte-h":!0}),p(e)!=="svelte-pntvnr"&&(e.innerHTML=n),l=H(h,`
			Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise`),i=a(h,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(i)!=="svelte-13yd2tt"&&(i.textContent=d),o=H(h,`
			oder nutze das im `),u=a(h,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(u)!=="svelte-12y5jy6"&&(u.textContent=A),_=H(h,` Browser eingebaute
			Wallet.`),this.h()},h(){b(i,"href","https://metamask.io"),b(i,"target","_blank"),b(u,"href","https://brave.com"),b(u,"target","_blank")},m(h,L){v(h,e,L),v(h,l,L),v(h,i,L),v(h,o,L),v(h,u,L),v(h,_,L)},d(h){h&&(f(e),f(l),f(i),f(o),f(u),f(_))}}}function an(k){let e,n,l,i="<br/>",d,o,u="Architekturen der Freiheit",A,_,h="<br/>",L,x,D="<br/>",_e,E,O="Freiheit",ge,q,Q="Friede",Ce,G,fe="Geo Cash",ee,B,Be="<br/>",te,$,$e="Initiale Verteilung",ne,I,ue="Wir",V,X,he="<br/>",U,N,ce="die Party",J,Y,pe="<br/>",R,S,r="Geo Caching",g,Z,mt="<br/>",Se,xe,_t="Mach es Besser",Oe,le,gt="Open Source",Re,ke,Ct="<br/>",Ue,we,xt="<br/>",Ne,Me,kt="<br/><br/><br/>",Je,Te,de,Ke,m,ve,wt="Gesamtmengen",Qe,He,Mt="<br/>",Xe,be,Tt='<table class="svelte-jezr9l"><tr class="svelte-jezr9l"><th style="text-align: center" class="svelte-jezr9l">Währung</th> <th class="svelte-jezr9l">Gesamtmenge</th></tr> <tr class="svelte-jezr9l"><td class="svelte-jezr9l"><a href="https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7" target="_blank">Freiheit</a></td> <td class="longInfo svelte-jezr9l"><a href="https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9" target="_blank">9.000.000.000 Coins</a></td></tr> <tr class="svelte-jezr9l"><td class="svelte-jezr9l"><a href="https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02" target="_blank">Friede</a></td> <td class="longInfo svelte-jezr9l"><a href="https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368" target="_blank">9.000.000.000 Coins</a></td></tr> <tr class="svelte-jezr9l"><td class="svelte-jezr9l"><a href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a></td> <td class="longInfo svelte-jezr9l"><a href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c" target="_blank">360.000.000 Coins</a></td></tr></table>',Ye,Le,Ht="<br/><br/>",Ze,re,Lt="Generiere Freiheitsgeldbeutel",et,qe,Ae,At="<br/><br/>",tt,ie,yt="Kaufe und Verkaufe Freiheitsgeld",nt,Ge,ye,Ft="<br/><br/>",lt,se,jt="Philosophie",rt,Ie,Fe,Pt="<br/><br/>",it,ae,Bt="Geo Cash",st,oe,$t="<i>Monique Baumann</i>",at,je,zt="<br/><br/>",ot,Ve,ft,Wt;de=new ln({props:{displayAmount:3}});let j=k[3]&&Ot(),F=k[1]&&Rt(k),P=k[2]&&Ut();function Dt(y,c){if(!y[0]&&!y[4])return sn;if(!y[0]&&y[4])return rn}let Pe=Dt(k),z=Pe&&Pe(k);return{c(){e=s("section"),n=T(`Lasst uns einander mit Respekt behandeln.

	`),l=s("p"),l.innerHTML=i,d=w(),o=s("h4"),o.textContent=u,A=T(`

	Wir wissen auch noch nicht genau welches aktuell die besten Architekturen für Freiheit,
	Weltfrieden und Freundschaft sind.
	`),_=s("p"),_.innerHTML=h,L=T(`
	Wir haben lediglich einige Möglichkeiten im Angebot, welche als Inspiration dienen können.
	`),x=s("p"),x.innerHTML=D,_e=T(`
	Unsere experimentellen Währungen sind beispielsweise
	`),E=s("a"),E.textContent=O,ge=T(`,
	`),q=s("a"),q.textContent=Q,Ce=T(`
	und
	`),G=s("a"),G.textContent=fe,ee=T(`.
	`),B=s("p"),B.innerHTML=Be,te=w(),$=s("h4"),$.textContent=$e,ne=w(),I=s("a"),I.textContent=ue,V=T(`
	fördern zuerst eine breite initiale Verteilung.
	`),X=s("p"),X.innerHTML=he,U=T(`
	Danach hinterlegen wir einen passenden Gegenwert, um
	`),N=s("a"),N.textContent=ce,J=T(`
	zu starten.
	`),Y=s("p"),Y.innerHTML=pe,R=T(`
	Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
	`),S=s("a"),S.textContent=r,g=T(`.
	
	`),Z=s("p"),Z.innerHTML=mt,Se=w(),xe=s("h4"),xe.textContent=_t,Oe=T(`
	Unser Code ist
	`),le=s("a"),le.textContent=gt,Re=T(`. Gerne
	kopieren und besser machen.
	`),ke=s("p"),ke.innerHTML=Ct,Ue=T(`
	Falls Du investierst, investiere vielleicht nur sehr kleine experimentelle Beträge.
	`),we=s("p"),we.innerHTML=xt,Ne=T(`
	Wir wissen nicht wie sich der Wert unserer Währungen entwickelt.

	`),Me=s("p"),Me.innerHTML=kt,Je=w(),Te=s("div"),ze(de.$$.fragment),Ke=w(),m=s("div"),ve=s("h4"),ve.textContent=wt,Qe=w(),He=s("p"),He.innerHTML=Mt,Xe=w(),be=s("div"),be.innerHTML=Tt,Ye=w(),Le=s("p"),Le.innerHTML=Ht,Ze=w(),re=s("button"),re.textContent=Lt,et=w(),j&&j.c(),qe=w(),Ae=s("p"),Ae.innerHTML=At,tt=w(),ie=s("button"),ie.textContent=yt,nt=w(),F&&F.c(),Ge=w(),ye=s("p"),ye.innerHTML=Ft,lt=w(),se=s("button"),se.textContent=jt,rt=w(),P&&P.c(),Ie=w(),Fe=s("p"),Fe.innerHTML=Pt,it=T(`
		Ich kaufe und verkaufe
		`),ae=s("a"),ae.textContent=Bt,st=T(`, Silber und Gold.
		`),oe=s("a"),oe.innerHTML=$t,at=w(),je=s("p"),je.innerHTML=zt,ot=w(),z&&z.c(),this.h()},l(y){e=a(y,"SECTION",{class:!0});var c=me(e);n=H(c,`Lasst uns einander mit Respekt behandeln.

	`),l=a(c,"P",{"data-svelte-h":!0}),p(l)!=="svelte-pntvnr"&&(l.innerHTML=i),d=M(c),o=a(c,"H4",{"data-svelte-h":!0}),p(o)!=="svelte-1xrxjrm"&&(o.textContent=u),A=H(c,`

	Wir wissen auch noch nicht genau welches aktuell die besten Architekturen für Freiheit,
	Weltfrieden und Freundschaft sind.
	`),_=a(c,"P",{"data-svelte-h":!0}),p(_)!=="svelte-pntvnr"&&(_.innerHTML=h),L=H(c,`
	Wir haben lediglich einige Möglichkeiten im Angebot, welche als Inspiration dienen können.
	`),x=a(c,"P",{"data-svelte-h":!0}),p(x)!=="svelte-pntvnr"&&(x.innerHTML=D),_e=H(c,`
	Unsere experimentellen Währungen sind beispielsweise
	`),E=a(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(E)!=="svelte-3pnr0t"&&(E.textContent=O),ge=H(c,`,
	`),q=a(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(q)!=="svelte-qugqk8"&&(q.textContent=Q),Ce=H(c,`
	und
	`),G=a(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(G)!=="svelte-10dttgi"&&(G.textContent=fe),ee=H(c,`.
	`),B=a(c,"P",{"data-svelte-h":!0}),p(B)!=="svelte-pntvnr"&&(B.innerHTML=Be),te=M(c),$=a(c,"H4",{"data-svelte-h":!0}),p($)!=="svelte-11fsrya"&&($.textContent=$e),ne=M(c),I=a(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(I)!=="svelte-p3soxg"&&(I.textContent=ue),V=H(c,`
	fördern zuerst eine breite initiale Verteilung.
	`),X=a(c,"P",{"data-svelte-h":!0}),p(X)!=="svelte-pntvnr"&&(X.innerHTML=he),U=H(c,`
	Danach hinterlegen wir einen passenden Gegenwert, um
	`),N=a(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(N)!=="svelte-1gsty2i"&&(N.textContent=ce),J=H(c,`
	zu starten.
	`),Y=a(c,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-pntvnr"&&(Y.innerHTML=pe),R=H(c,`
	Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
	`),S=a(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(S)!=="svelte-2dzyje"&&(S.textContent=r),g=H(c,`.
	
	`),Z=a(c,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-pntvnr"&&(Z.innerHTML=mt),Se=M(c),xe=a(c,"H4",{"data-svelte-h":!0}),p(xe)!=="svelte-ofj4jr"&&(xe.textContent=_t),Oe=H(c,`
	Unser Code ist
	`),le=a(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(le)!=="svelte-1eqruzd"&&(le.textContent=gt),Re=H(c,`. Gerne
	kopieren und besser machen.
	`),ke=a(c,"P",{"data-svelte-h":!0}),p(ke)!=="svelte-pntvnr"&&(ke.innerHTML=Ct),Ue=H(c,`
	Falls Du investierst, investiere vielleicht nur sehr kleine experimentelle Beträge.
	`),we=a(c,"P",{"data-svelte-h":!0}),p(we)!=="svelte-pntvnr"&&(we.innerHTML=xt),Ne=H(c,`
	Wir wissen nicht wie sich der Wert unserer Währungen entwickelt.

	`),Me=a(c,"P",{"data-svelte-h":!0}),p(Me)!=="svelte-102w9s7"&&(Me.innerHTML=kt),Je=M(c),Te=a(c,"DIV",{class:!0});var Et=me(Te);We(de.$$.fragment,Et),Et.forEach(f),Ke=M(c),m=a(c,"DIV",{class:!0});var C=me(m);ve=a(C,"H4",{class:!0,"data-svelte-h":!0}),p(ve)!=="svelte-18kqqe1"&&(ve.textContent=wt),Qe=M(C),He=a(C,"P",{"data-svelte-h":!0}),p(He)!=="svelte-pntvnr"&&(He.innerHTML=Mt),Xe=M(C),be=a(C,"DIV",{class:!0,"data-svelte-h":!0}),p(be)!=="svelte-6jrjp2"&&(be.innerHTML=Tt),Ye=M(C),Le=a(C,"P",{"data-svelte-h":!0}),p(Le)!=="svelte-5q9igk"&&(Le.innerHTML=Ht),Ze=M(C),re=a(C,"BUTTON",{class:!0,"data-svelte-h":!0}),p(re)!=="svelte-1ja53j5"&&(re.textContent=Lt),et=M(C),j&&j.l(C),qe=M(C),Ae=a(C,"P",{"data-svelte-h":!0}),p(Ae)!=="svelte-5q9igk"&&(Ae.innerHTML=At),tt=M(C),ie=a(C,"BUTTON",{class:!0,"data-svelte-h":!0}),p(ie)!=="svelte-kwq6e6"&&(ie.textContent=yt),nt=M(C),F&&F.l(C),Ge=M(C),ye=a(C,"P",{"data-svelte-h":!0}),p(ye)!=="svelte-5q9igk"&&(ye.innerHTML=Ft),lt=M(C),se=a(C,"BUTTON",{class:!0,"data-svelte-h":!0}),p(se)!=="svelte-1yj694n"&&(se.textContent=jt),rt=M(C),P&&P.l(C),Ie=M(C),Fe=a(C,"P",{"data-svelte-h":!0}),p(Fe)!=="svelte-5q9igk"&&(Fe.innerHTML=Pt),it=H(C,`
		Ich kaufe und verkaufe
		`),ae=a(C,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(ae)!=="svelte-1oa5di5"&&(ae.textContent=Bt),st=H(C,`, Silber und Gold.
		`),oe=a(C,"A",{href:!0,target:!0,"data-svelte-h":!0}),p(oe)!=="svelte-hosg9k"&&(oe.innerHTML=$t),at=M(C),je=a(C,"P",{"data-svelte-h":!0}),p(je)!=="svelte-5q9igk"&&(je.innerHTML=zt),ot=M(C),z&&z.l(C),C.forEach(f),c.forEach(f),this.h()},h(){b(E,"href","https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9"),b(E,"target","_blank"),b(q,"href","https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"),b(q,"target","_blank"),b(G,"href","https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c"),b(G,"target","_blank"),b(I,"href","https://github.com/moniquebaumann/friends-of-satoshi/blob/main/README.md"),b(I,"target","_blank"),b(N,"href","https://www.youtube.com/watch?v=fW8amMCVAJQ"),b(N,"target","_blank"),b(S,"href","https://de.wikipedia.org/wiki/Geocaching"),b(S,"target","_blank"),b(le,"href","https://github.com/FreiheitsGeld/freiheitsgeld"),b(le,"target","_blank"),b(Te,"class","content svelte-jezr9l"),b(ve,"class","text-center"),b(be,"class","tableDiv svelte-jezr9l"),b(re,"class","button"),b(ie,"class","button"),b(se,"class","button"),b(ae,"href","https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459"),b(ae,"target","_blank"),b(oe,"href","https://github.com/moniquebaumann"),b(oe,"target","_blank"),b(m,"class","content svelte-jezr9l"),b(e,"class","text-center")},m(y,c){v(y,e,c),t(e,n),t(e,l),t(e,d),t(e,o),t(e,A),t(e,_),t(e,L),t(e,x),t(e,_e),t(e,E),t(e,ge),t(e,q),t(e,Ce),t(e,G),t(e,ee),t(e,B),t(e,te),t(e,$),t(e,ne),t(e,I),t(e,V),t(e,X),t(e,U),t(e,N),t(e,J),t(e,Y),t(e,R),t(e,S),t(e,g),t(e,Z),t(e,Se),t(e,xe),t(e,Oe),t(e,le),t(e,Re),t(e,ke),t(e,Ue),t(e,we),t(e,Ne),t(e,Me),t(e,Je),t(e,Te),De(de,Te,null),t(e,Ke),t(e,m),t(m,ve),t(m,Qe),t(m,He),t(m,Xe),t(m,be),t(m,Ye),t(m,Le),t(m,Ze),t(m,re),t(m,et),j&&j.m(m,null),t(m,qe),t(m,Ae),t(m,tt),t(m,ie),t(m,nt),F&&F.m(m,null),t(m,Ge),t(m,ye),t(m,lt),t(m,se),t(m,rt),P&&P.m(m,null),t(m,Ie),t(m,Fe),t(m,it),t(m,ae),t(m,st),t(m,oe),t(m,at),t(m,je),t(m,ot),z&&z.m(m,null),Ve=!0,ft||(Wt=[ut(re,"click",k[5]),ut(ie,"click",k[6]),ut(se,"click",k[7])],ft=!0)},p(y,[c]){y[3]?j?c&8&&W(j,1):(j=Ot(),j.c(),W(j,1),j.m(m,qe)):j&&(ht(),K(j,1,1,()=>{j=null}),ct()),y[1]?F?(F.p(y,c),c&2&&W(F,1)):(F=Rt(y),F.c(),W(F,1),F.m(m,Ge)):F&&(ht(),K(F,1,1,()=>{F=null}),ct()),y[2]?P?c&4&&W(P,1):(P=Ut(),P.c(),W(P,1),P.m(m,Ie)):P&&(ht(),K(P,1,1,()=>{P=null}),ct()),Pe!==(Pe=Dt(y))&&(z&&z.d(1),z=Pe&&Pe(y),z&&(z.c(),z.m(m,null)))},i(y){Ve||(W(de.$$.fragment,y),W(j),W(F),W(P),Ve=!0)},o(y){K(de.$$.fragment,y),K(j),K(F),K(P),Ve=!1},d(y){y&&f(e),Ee(de),j&&j.d(),F&&F.d(),P&&P.d(),z&&z.d(),ft=!1,Jt(Wt)}}}function on(k,e,n){let l=!1,i,d,o,u=!1;return Nt(async()=>{typeof window.ethereum>"u"?n(0,l=!1):n(0,l=!0),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&n(4,u=!0)}),[l,i,d,o,u,()=>n(3,o=!o),()=>n(1,i=!i),()=>n(2,d=!d)]}class fn extends vt{constructor(e){super(),bt(this,e,on,an,dt,{})}}function un(k){let e,n="Weltfriede, Freiheit, Freundschaft",l,i,d,o;return d=new fn({}),{c(){e=s("h2"),e.textContent=n,l=w(),i=s("main"),ze(d.$$.fragment),this.h()},l(u){e=a(u,"H2",{class:!0,"data-svelte-h":!0}),p(e)!=="svelte-191y3w"&&(e.textContent=n),l=M(u),i=a(u,"MAIN",{});var A=me(i);We(d.$$.fragment,A),A.forEach(f),this.h()},h(){b(e,"class","text-center")},m(u,A){v(u,e,A),v(u,l,A),v(u,i,A),De(d,i,null),o=!0},p:pt,i(u){o||(W(d.$$.fragment,u),o=!0)},o(u){K(d.$$.fragment,u),o=!1},d(u){u&&(f(e),f(l),f(i)),Ee(d)}}}class gn extends vt{constructor(e){super(),bt(this,e,null,un,dt,{})}}export{gn as component};
