import{s as Be,n as We,o as bn,r as mn}from"../chunks/scheduler.46233b48.js";import{S as Ee,i as je,s as k,g as r,c as w,h as i,z as f,k as v,a as p,f as o,j as Pt,A as _n,y as n,m as _,r as ie,n as g,u as se,v as ae,B as De,d as Z,p as an,t as Ct,b as un,w as ue}from"../chunks/index.a26073d0.js";import{F as gn}from"../chunks/FreedomWallets.c8b46692.js";import{g as Cn}from"../chunks/helpers.a2ca6107.js";import{P as xn}from"../chunks/Philosophy.33ca3936.js";import{e as on}from"../chunks/each.e59479a4.js";import{o as kn}from"../chunks/off-chain-data.fb94c2f0.js";function hn(M,t,u){const a=M.slice();return a[3]=t[u],a}function fn(M){let t,u=on(M[0]),a=[];for(let l=0;l<u.length;l+=1)a[l]=cn(hn(M,u,l));return{c(){t=r("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){t=i(l,"DIV",{class:!0});var h=Pt(t);for(let s=0;s<a.length;s+=1)a[s].l(h);h.forEach(o),this.h()},h(){v(t,"class","grid-container svelte-ps7hak")},m(l,h){p(l,t,h);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(t,null)},p(l,h){if(h&1){u=on(l[0]);let s;for(s=0;s<u.length;s+=1){const c=hn(l,u,s);a[s]?a[s].p(c,h):(a[s]=cn(c),a[s].c(),a[s].m(t,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=u.length}},d(l){l&&o(t),_n(a,l)}}}function cn(M){let t,u,a,l;return{c(){t=r("div"),u=r("object"),l=k(),this.h()},l(h){t=i(h,"DIV",{class:!0});var s=Pt(t);u=i(s,"OBJECT",{width:!0,title:!0,data:!0});var c=Pt(u);c.forEach(o),l=w(s),s.forEach(o),this.h()},h(){v(u,"width","100%"),v(u,"title","some of the first ..."),v(u,"data",a=M[3].txt),v(t,"class","item1 svelte-ps7hak")},m(h,s){p(h,t,s),n(t,u),n(t,l)},p(h,s){s&1&&a!==(a=h[3].txt)&&v(u,"data",a)},d(h){h&&o(t)}}}function wn(M){let t,u,a="<br/>",l,h,s="<button>Mehr Videos</button>",c=M[1]&&fn(M);return{c(){c&&c.c(),t=k(),u=r("p"),u.innerHTML=a,l=k(),h=r("a"),h.innerHTML=s,this.h()},l(C){c&&c.l(C),t=w(C),u=i(C,"P",{"data-svelte-h":!0}),f(u)!=="svelte-pntvnr"&&(u.innerHTML=a),l=w(C),h=i(C,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(h)!=="svelte-11ozjta"&&(h.innerHTML=s),this.h()},h(){v(h,"href","https://rumble.com/c/c-5722872"),v(h,"target","_blank")},m(C,H){c&&c.m(C,H),p(C,t,H),p(C,u,H),p(C,l,H),p(C,h,H)},p(C,[H]){C[1]?c?c.p(C,H):(c=fn(C),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null)},i:We,o:We,d(C){C&&(o(t),o(u),o(l),o(h)),c&&c.d(C)}}}function Mn(M,t,u){let{displayAmount:a}=t,l=[],h;return bn(()=>{u(0,l=Cn(kn,a)),u(1,h=!0)}),M.$$set=s=>{"displayAmount"in s&&u(2,a=s.displayAmount)},[l,h,a]}class Tn extends Ee{constructor(t){super(),je(this,t,Mn,wn,Be,{displayAmount:2})}}function dn(M){let t,u;return t=new gn({}),{c(){ie(t.$$.fragment)},l(a){se(t.$$.fragment,a)},m(a,l){ae(t,a,l),u=!0},i(a){u||(Z(t.$$.fragment,a),u=!0)},o(a){Ct(t.$$.fragment,a),u=!1},d(a){ue(t,a)}}}function pn(M){let t,u="<br/><br/><br/>",a,l,h="<br/>",s,c,C="metamask.io",H,T,F="uniswap.org",xt,O,tt="<br/>",kt,z,N="Polygon POS Blockchain",wt,R,et="<br/><br/><br/>",Mt,V,X="Freiheit",Tt,U,nt="<br/>",Ht,lt,J,S,Dt="Friede",K,Y,Wt="<br/>",Q,At,rt,P,Ut="Geo Cash",it,W,Jt="<br/><br/><br/>",st,B,Kt="Support",at,$,Qt="<br/>",ut,q,Xt="<br/>",ot,E,Yt="<br/>",ht,G,Zt="<br/>",ft,D,te="jemanden der sich auskennt",ct;return{c(){t=r("p"),t.innerHTML=u,a=_(`
			Bitte tausche unsere Freiheitswährungen lediglich mit friedliebenden Menschen, die jeden Menschen
			auf der Welt mit Respekt behandeln.
			`),l=r("p"),l.innerHTML=h,s=_(`
			Falls Du noch niemanden kennst, der entsprechend auch schon Freiheitsgeld hat, kannst Du Freiheitsgeld
			mit einem Browser Wallet wie
			`),c=r("a"),c.textContent=C,H=_(` z.B. bei
			`),T=r("a"),T.textContent=F,xt=_(`
			kaufen und verkaufen.
			`),O=r("p"),O.innerHTML=tt,kt=_(`
			Dazu brauchst Du MATIC auf der
			`),z=r("a"),z.textContent=N,wt=_(`
			sowie die Smart Contract Adressen:
			`),R=r("p"),R.innerHTML=et,Mt=k(),V=r("a"),V.textContent=X,Tt=_(`: 0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7
			`),U=r("p"),U.innerHTML=nt,Ht=k(),lt=r("br"),J=k(),S=r("a"),S.textContent=Dt,K=_(`: 0x0715184614CA1e90EafDf7A4d7fE33B046b47C02
			`),Y=r("p"),Y.innerHTML=Wt,Q=k(),At=r("br"),rt=k(),P=r("a"),P.textContent=Ut,it=_(`: 0xb841A4f979F9510760ecf60512e038656E68f459
			`),W=r("p"),W.innerHTML=Jt,st=k(),B=r("h6"),B.textContent=Kt,at=k(),$=r("p"),$.innerHTML=Qt,ut=_(`
			Falls Du ein Neueinsteiger bist und gerade erst mal nicht weißt was hier los ist, atme tief durch.
			`),q=r("p"),q.innerHTML=Xt,ot=_(`
			Wahrscheinlich braucht es ein paar oder sogar viele entspannte Anläufe.
			`),E=r("p"),E.innerHTML=Yt,ht=_(`
			Fahrrad fahren lerntest Du wahrscheinlich auch eher weniger durch lesen und eher mehr durch geduldig
			mit vielen entspannten Anläufen ausprobieren.
			`),G=r("p"),G.innerHTML=Zt,ft=_(`
			Falls Du nach vielen entspannten Anläufen noch nicht klar kommst, frag vielleicht
			`),D=r("a"),D.textContent=te,ct=_(`
			und dem Du wirklich traust.`),this.h()},l(e){t=i(e,"P",{"data-svelte-h":!0}),f(t)!=="svelte-102w9s7"&&(t.innerHTML=u),a=g(e,`
			Bitte tausche unsere Freiheitswährungen lediglich mit friedliebenden Menschen, die jeden Menschen
			auf der Welt mit Respekt behandeln.
			`),l=i(e,"P",{"data-svelte-h":!0}),f(l)!=="svelte-pntvnr"&&(l.innerHTML=h),s=g(e,`
			Falls Du noch niemanden kennst, der entsprechend auch schon Freiheitsgeld hat, kannst Du Freiheitsgeld
			mit einem Browser Wallet wie
			`),c=i(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(c)!=="svelte-ckwul2"&&(c.textContent=C),H=g(e,` z.B. bei
			`),T=i(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(T)!=="svelte-e3y8gz"&&(T.textContent=F),xt=g(e,`
			kaufen und verkaufen.
			`),O=i(e,"P",{"data-svelte-h":!0}),f(O)!=="svelte-pntvnr"&&(O.innerHTML=tt),kt=g(e,`
			Dazu brauchst Du MATIC auf der
			`),z=i(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(z)!=="svelte-uke8jq"&&(z.textContent=N),wt=g(e,`
			sowie die Smart Contract Adressen:
			`),R=i(e,"P",{"data-svelte-h":!0}),f(R)!=="svelte-102w9s7"&&(R.innerHTML=et),Mt=w(e),V=i(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(V)!=="svelte-4fjl51"&&(V.textContent=X),Tt=g(e,`: 0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7
			`),U=i(e,"P",{"data-svelte-h":!0}),f(U)!=="svelte-pntvnr"&&(U.innerHTML=nt),Ht=w(e),lt=i(e,"BR",{}),J=w(e),S=i(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(S)!=="svelte-1fsomxz"&&(S.textContent=Dt),K=g(e,`: 0x0715184614CA1e90EafDf7A4d7fE33B046b47C02
			`),Y=i(e,"P",{"data-svelte-h":!0}),f(Y)!=="svelte-pntvnr"&&(Y.innerHTML=Wt),Q=w(e),At=i(e,"BR",{}),rt=w(e),P=i(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(P)!=="svelte-geowzn"&&(P.textContent=Ut),it=g(e,`: 0xb841A4f979F9510760ecf60512e038656E68f459
			`),W=i(e,"P",{"data-svelte-h":!0}),f(W)!=="svelte-102w9s7"&&(W.innerHTML=Jt),st=w(e),B=i(e,"H6",{"data-svelte-h":!0}),f(B)!=="svelte-1yf2t5r"&&(B.textContent=Kt),at=w(e),$=i(e,"P",{"data-svelte-h":!0}),f($)!=="svelte-pntvnr"&&($.innerHTML=Qt),ut=g(e,`
			Falls Du ein Neueinsteiger bist und gerade erst mal nicht weißt was hier los ist, atme tief durch.
			`),q=i(e,"P",{"data-svelte-h":!0}),f(q)!=="svelte-pntvnr"&&(q.innerHTML=Xt),ot=g(e,`
			Wahrscheinlich braucht es ein paar oder sogar viele entspannte Anläufe.
			`),E=i(e,"P",{"data-svelte-h":!0}),f(E)!=="svelte-pntvnr"&&(E.innerHTML=Yt),ht=g(e,`
			Fahrrad fahren lerntest Du wahrscheinlich auch eher weniger durch lesen und eher mehr durch geduldig
			mit vielen entspannten Anläufen ausprobieren.
			`),G=i(e,"P",{"data-svelte-h":!0}),f(G)!=="svelte-pntvnr"&&(G.innerHTML=Zt),ft=g(e,`
			Falls Du nach vielen entspannten Anläufen noch nicht klar kommst, frag vielleicht
			`),D=i(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(D)!=="svelte-nqsnei"&&(D.textContent=te),ct=g(e,`
			und dem Du wirklich traust.`),this.h()},h(){v(c,"href","https://metamask.io"),v(c,"target","_blank"),v(T,"href","https://app.uniswap.org/swap"),v(T,"target","_blank"),v(z,"href","https://portal.polygon.technology/bridge"),v(z,"target","_blank"),v(V,"href","https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7"),v(V,"target","_blank"),v(S,"href","https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02"),v(S,"target","_blank"),v(P,"href","https://polygonscan.com/token/0xb841a4f979f9510760ecf60512e038656e68f459"),v(P,"target","_blank"),v(D,"href","https://www.house-of-satoshi.ch/"),v(D,"target","_blank")},m(e,b){p(e,t,b),p(e,a,b),p(e,l,b),p(e,s,b),p(e,c,b),p(e,H,b),p(e,T,b),p(e,xt,b),p(e,O,b),p(e,kt,b),p(e,z,b),p(e,wt,b),p(e,R,b),p(e,Mt,b),p(e,V,b),p(e,Tt,b),p(e,U,b),p(e,Ht,b),p(e,lt,b),p(e,J,b),p(e,S,b),p(e,K,b),p(e,Y,b),p(e,Q,b),p(e,At,b),p(e,rt,b),p(e,P,b),p(e,it,b),p(e,W,b),p(e,st,b),p(e,B,b),p(e,at,b),p(e,$,b),p(e,ut,b),p(e,q,b),p(e,ot,b),p(e,E,b),p(e,ht,b),p(e,G,b),p(e,ft,b),p(e,D,b),p(e,ct,b)},d(e){e&&(o(t),o(a),o(l),o(s),o(c),o(H),o(T),o(xt),o(O),o(kt),o(z),o(wt),o(R),o(Mt),o(V),o(Tt),o(U),o(Ht),o(lt),o(J),o(S),o(K),o(Y),o(Q),o(At),o(rt),o(P),o(it),o(W),o(st),o(B),o(at),o($),o(ut),o(q),o(ot),o(E),o(ht),o(G),o(ft),o(D),o(ct))}}}function vn(M){let t,u="<br/><br/>",a,l,h;return l=new xn({}),{c(){t=r("p"),t.innerHTML=u,a=k(),ie(l.$$.fragment)},l(s){t=i(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-5q9igk"&&(t.innerHTML=u),a=w(s),se(l.$$.fragment,s)},m(s,c){p(s,t,c),p(s,a,c),ae(l,s,c),h=!0},i(s){h||(Z(l.$$.fragment,s),h=!0)},o(s){Ct(l.$$.fragment,s),h=!1},d(s){s&&(o(t),o(a)),ue(l,s)}}}function Hn(M){let t,u,a="Metamask App",l;return{c(){t=_(`Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite
			bitte mit dem in der `),u=r("a"),u.textContent=a,l=_(` eingebauten
			Browser.`),this.h()},l(h){t=g(h,`Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite
			bitte mit dem in der `),u=i(h,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(u)!=="svelte-8f3ltt"&&(u.textContent=a),l=g(h,` eingebauten
			Browser.`),this.h()},h(){v(u,"href","https://metamask.io"),v(u,"target","_blank")},m(h,s){p(h,t,s),p(h,u,s),p(h,l,s)},d(h){h&&(o(t),o(u),o(l))}}}function An(M){let t,u="<br/>",a,l,h="metamask.io",s,c,C="brave.com",H;return{c(){t=r("p"),t.innerHTML=u,a=_(`
			Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise`),l=r("a"),l.textContent=h,s=_(`
			oder nutze das im `),c=r("a"),c.textContent=C,H=_(` Browser eingebaute
			Wallet.`),this.h()},l(T){t=i(T,"P",{"data-svelte-h":!0}),f(t)!=="svelte-pntvnr"&&(t.innerHTML=u),a=g(T,`
			Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise`),l=i(T,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(l)!=="svelte-13yd2tt"&&(l.textContent=h),s=g(T,`
			oder nutze das im `),c=i(T,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(c)!=="svelte-12y5jy6"&&(c.textContent=C),H=g(T,` Browser eingebaute
			Wallet.`),this.h()},h(){v(l,"href","https://metamask.io"),v(l,"target","_blank"),v(c,"href","https://brave.com"),v(c,"target","_blank")},m(T,F){p(T,t,F),p(T,a,F),p(T,l,F),p(T,s,F),p(T,c,F),p(T,H,F)},d(T){T&&(o(t),o(a),o(l),o(s),o(c),o(H))}}}function Ln(M){let t,u,a="<br/>",l,h,s="<br/>",c,C,H="Freiheit",T,F,xt="Friede",O,tt,kt="<br/>",z,N,wt="Geo Caching",R,et,Mt="<br/><br/><br/>",V,X,Tt='<object title="Emma" data="https://rumble.com/embed/v4tuakn/?pub=3blg3u" class="svelte-1dugow7"></object>',U,nt,Ht="<br/>",lt,J,S="Architekturen der Freiheit",Dt,K,Y="<br/>",Wt,Q,At="<br/>",rt,P,Ut="Freiheit",it,W,Jt="Friede",st,B,Kt="Geo Cash",at,$,Qt="<br/>",ut,q,Xt="Initiale Verteilung",ot,E,Yt="Wir",ht,G,Zt="<br/>",ft,D,te="die Party",ct,e,b="<br/>",oe,dt,$e="Geo Caching",he,Bt,qe="<br/>",fe,Et,Ge="Mach es Besser",ce,pt,Ie="Open Source",de,jt,ze="<br/>",pe,$t,Ve="<br/>",ve,qt,Se="<br/><br/><br/>",be,Gt,Lt,me,m,yt,Oe="Gesamtmengen",_e,It,Ne="<br/>",ge,Ft,Re='<table class="svelte-1dugow7"><tr class="svelte-1dugow7"><th style="text-align: center" class="svelte-1dugow7">Währung</th> <th class="svelte-1dugow7">Gesamtmenge</th></tr> <tr class="svelte-1dugow7"><td class="svelte-1dugow7"><a href="https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7" target="_blank">Freiheit</a></td> <td class="longInfo svelte-1dugow7"><a href="https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9" target="_blank">9.000.000.000 Coins</a></td></tr> <tr class="svelte-1dugow7"><td class="svelte-1dugow7"><a href="https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02" target="_blank">Friede</a></td> <td class="longInfo svelte-1dugow7"><a href="https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368" target="_blank">9.000.000.000 Coins</a></td></tr> <tr class="svelte-1dugow7"><td class="svelte-1dugow7"><a href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a></td> <td class="longInfo svelte-1dugow7"><a href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c" target="_blank">360.000.000 Coins</a></td></tr></table>',Ce,zt,Ue="<br/><br/>",xe,vt,Je="Generiere Freiheitsgeldbeutel",ke,ee,Vt,Ke="<br/><br/>",we,bt,Qe="Kaufe und Verkaufe Freiheitsgeld",Me,ne,St,Xe="<br/><br/>",Te,mt,Ye="Philosophie",He,le,Ot,Ze="<br/><br/>",Ae,_t,tn="Geo Cash",Le,gt,en="<i>Monique Baumann</i>",ye,Nt,nn="<br/><br/>",Fe,re,Pe,ln;Lt=new Tn({props:{displayAmount:3}});let L=M[3]&&dn(),j=M[1]&&pn(),y=M[2]&&vn();function rn(A,d){if(!A[0]&&!A[4])return An;if(!A[0]&&A[4])return Hn}let Rt=rn(M),I=Rt&&Rt(M);return{c(){t=r("section"),u=r("p"),u.innerHTML=a,l=_(`
	Bitte behandelt jeden mit Respekt.

	`),h=r("p"),h.innerHTML=s,c=_(`
	Wir tragen
	`),C=r("a"),C.textContent=H,T=_(`,
	`),F=r("a"),F.textContent=xt,O=_(`
	und Freundschaft in die Welt.
	`),tt=r("p"),tt.innerHTML=kt,z=_(`
	Wir erkunden Architekturen der Freiheit mit
	`),N=r("a"),N.textContent=wt,R=_(`.

	`),et=r("p"),et.innerHTML=Mt,V=k(),X=r("div"),X.innerHTML=Tt,U=k(),nt=r("p"),nt.innerHTML=Ht,lt=k(),J=r("h4"),J.textContent=S,Dt=_(`

	Wir wissen auch noch nicht genau welches aktuell die besten Architekturen für Freiheit,
	Weltfrieden und Freundschaft sind.
	`),K=r("p"),K.innerHTML=Y,Wt=_(`
	Wir haben lediglich einige Möglichkeiten im Angebot, welche als Inspiration dienen können.
	`),Q=r("p"),Q.innerHTML=At,rt=_(`
	Unsere experimentellen Währungen sind beispielsweise
	`),P=r("a"),P.textContent=Ut,it=_(`,
	`),W=r("a"),W.textContent=Jt,st=_(`
	und
	`),B=r("a"),B.textContent=Kt,at=_(`.
	`),$=r("p"),$.innerHTML=Qt,ut=k(),q=r("h4"),q.textContent=Xt,ot=k(),E=r("a"),E.textContent=Yt,ht=_(`
	fördern zuerst eine breite initiale Verteilung.
	`),G=r("p"),G.innerHTML=Zt,ft=_(`
	Danach hinterlegen wir einen passenden Gegenwert, um
	`),D=r("a"),D.textContent=te,ct=_(`
	zu starten.
	`),e=r("p"),e.innerHTML=b,oe=_(`
	Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
	`),dt=r("a"),dt.textContent=$e,he=_(`.
	
	`),Bt=r("p"),Bt.innerHTML=qe,fe=k(),Et=r("h4"),Et.textContent=Ge,ce=_(`
	Unser Code ist
	`),pt=r("a"),pt.textContent=Ie,de=_(`. Gerne
	kopieren und besser machen.
	`),jt=r("p"),jt.innerHTML=ze,pe=_(`
	Falls Du investierst, investiere vielleicht nur sehr kleine experimentelle Beträge.
	`),$t=r("p"),$t.innerHTML=Ve,ve=_(`
	Wir wissen nicht wie sich der Wert unserer Währungen entwickelt.

	`),qt=r("p"),qt.innerHTML=Se,be=k(),Gt=r("div"),ie(Lt.$$.fragment),me=k(),m=r("div"),yt=r("h4"),yt.textContent=Oe,_e=k(),It=r("p"),It.innerHTML=Ne,ge=k(),Ft=r("div"),Ft.innerHTML=Re,Ce=k(),zt=r("p"),zt.innerHTML=Ue,xe=k(),vt=r("button"),vt.textContent=Je,ke=k(),L&&L.c(),ee=k(),Vt=r("p"),Vt.innerHTML=Ke,we=k(),bt=r("button"),bt.textContent=Qe,Me=k(),j&&j.c(),ne=k(),St=r("p"),St.innerHTML=Xe,Te=k(),mt=r("button"),mt.textContent=Ye,He=k(),y&&y.c(),le=k(),Ot=r("p"),Ot.innerHTML=Ze,Ae=_(`
		Ich kaufe und verkaufe
		`),_t=r("a"),_t.textContent=tn,Le=_(`, Silber und Gold.
		`),gt=r("a"),gt.innerHTML=en,ye=k(),Nt=r("p"),Nt.innerHTML=nn,Fe=k(),I&&I.c(),this.h()},l(A){t=i(A,"SECTION",{class:!0});var d=Pt(t);u=i(d,"P",{"data-svelte-h":!0}),f(u)!=="svelte-pntvnr"&&(u.innerHTML=a),l=g(d,`
	Bitte behandelt jeden mit Respekt.

	`),h=i(d,"P",{"data-svelte-h":!0}),f(h)!=="svelte-pntvnr"&&(h.innerHTML=s),c=g(d,`
	Wir tragen
	`),C=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(C)!=="svelte-3pnr0t"&&(C.textContent=H),T=g(d,`,
	`),F=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(F)!=="svelte-qugqk8"&&(F.textContent=xt),O=g(d,`
	und Freundschaft in die Welt.
	`),tt=i(d,"P",{"data-svelte-h":!0}),f(tt)!=="svelte-pntvnr"&&(tt.innerHTML=kt),z=g(d,`
	Wir erkunden Architekturen der Freiheit mit
	`),N=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(N)!=="svelte-2dzyje"&&(N.textContent=wt),R=g(d,`.

	`),et=i(d,"P",{"data-svelte-h":!0}),f(et)!=="svelte-102w9s7"&&(et.innerHTML=Mt),V=w(d),X=i(d,"DIV",{class:!0,"data-svelte-h":!0}),f(X)!=="svelte-nyqoku"&&(X.innerHTML=Tt),U=w(d),nt=i(d,"P",{"data-svelte-h":!0}),f(nt)!=="svelte-pntvnr"&&(nt.innerHTML=Ht),lt=w(d),J=i(d,"H4",{"data-svelte-h":!0}),f(J)!=="svelte-1xrxjrm"&&(J.textContent=S),Dt=g(d,`

	Wir wissen auch noch nicht genau welches aktuell die besten Architekturen für Freiheit,
	Weltfrieden und Freundschaft sind.
	`),K=i(d,"P",{"data-svelte-h":!0}),f(K)!=="svelte-pntvnr"&&(K.innerHTML=Y),Wt=g(d,`
	Wir haben lediglich einige Möglichkeiten im Angebot, welche als Inspiration dienen können.
	`),Q=i(d,"P",{"data-svelte-h":!0}),f(Q)!=="svelte-pntvnr"&&(Q.innerHTML=At),rt=g(d,`
	Unsere experimentellen Währungen sind beispielsweise
	`),P=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(P)!=="svelte-3pnr0t"&&(P.textContent=Ut),it=g(d,`,
	`),W=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(W)!=="svelte-qugqk8"&&(W.textContent=Jt),st=g(d,`
	und
	`),B=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(B)!=="svelte-10dttgi"&&(B.textContent=Kt),at=g(d,`.
	`),$=i(d,"P",{"data-svelte-h":!0}),f($)!=="svelte-pntvnr"&&($.innerHTML=Qt),ut=w(d),q=i(d,"H4",{"data-svelte-h":!0}),f(q)!=="svelte-11fsrya"&&(q.textContent=Xt),ot=w(d),E=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(E)!=="svelte-p3soxg"&&(E.textContent=Yt),ht=g(d,`
	fördern zuerst eine breite initiale Verteilung.
	`),G=i(d,"P",{"data-svelte-h":!0}),f(G)!=="svelte-pntvnr"&&(G.innerHTML=Zt),ft=g(d,`
	Danach hinterlegen wir einen passenden Gegenwert, um
	`),D=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(D)!=="svelte-1gsty2i"&&(D.textContent=te),ct=g(d,`
	zu starten.
	`),e=i(d,"P",{"data-svelte-h":!0}),f(e)!=="svelte-pntvnr"&&(e.innerHTML=b),oe=g(d,`
	Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
	`),dt=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(dt)!=="svelte-2dzyje"&&(dt.textContent=$e),he=g(d,`.
	
	`),Bt=i(d,"P",{"data-svelte-h":!0}),f(Bt)!=="svelte-pntvnr"&&(Bt.innerHTML=qe),fe=w(d),Et=i(d,"H4",{"data-svelte-h":!0}),f(Et)!=="svelte-ofj4jr"&&(Et.textContent=Ge),ce=g(d,`
	Unser Code ist
	`),pt=i(d,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(pt)!=="svelte-1eqruzd"&&(pt.textContent=Ie),de=g(d,`. Gerne
	kopieren und besser machen.
	`),jt=i(d,"P",{"data-svelte-h":!0}),f(jt)!=="svelte-pntvnr"&&(jt.innerHTML=ze),pe=g(d,`
	Falls Du investierst, investiere vielleicht nur sehr kleine experimentelle Beträge.
	`),$t=i(d,"P",{"data-svelte-h":!0}),f($t)!=="svelte-pntvnr"&&($t.innerHTML=Ve),ve=g(d,`
	Wir wissen nicht wie sich der Wert unserer Währungen entwickelt.

	`),qt=i(d,"P",{"data-svelte-h":!0}),f(qt)!=="svelte-102w9s7"&&(qt.innerHTML=Se),be=w(d),Gt=i(d,"DIV",{class:!0});var sn=Pt(Gt);se(Lt.$$.fragment,sn),sn.forEach(o),me=w(d),m=i(d,"DIV",{class:!0});var x=Pt(m);yt=i(x,"H4",{class:!0,"data-svelte-h":!0}),f(yt)!=="svelte-18kqqe1"&&(yt.textContent=Oe),_e=w(x),It=i(x,"P",{"data-svelte-h":!0}),f(It)!=="svelte-pntvnr"&&(It.innerHTML=Ne),ge=w(x),Ft=i(x,"DIV",{class:!0,"data-svelte-h":!0}),f(Ft)!=="svelte-6jrjp2"&&(Ft.innerHTML=Re),Ce=w(x),zt=i(x,"P",{"data-svelte-h":!0}),f(zt)!=="svelte-5q9igk"&&(zt.innerHTML=Ue),xe=w(x),vt=i(x,"BUTTON",{class:!0,"data-svelte-h":!0}),f(vt)!=="svelte-1ja53j5"&&(vt.textContent=Je),ke=w(x),L&&L.l(x),ee=w(x),Vt=i(x,"P",{"data-svelte-h":!0}),f(Vt)!=="svelte-5q9igk"&&(Vt.innerHTML=Ke),we=w(x),bt=i(x,"BUTTON",{class:!0,"data-svelte-h":!0}),f(bt)!=="svelte-kwq6e6"&&(bt.textContent=Qe),Me=w(x),j&&j.l(x),ne=w(x),St=i(x,"P",{"data-svelte-h":!0}),f(St)!=="svelte-5q9igk"&&(St.innerHTML=Xe),Te=w(x),mt=i(x,"BUTTON",{class:!0,"data-svelte-h":!0}),f(mt)!=="svelte-1yj694n"&&(mt.textContent=Ye),He=w(x),y&&y.l(x),le=w(x),Ot=i(x,"P",{"data-svelte-h":!0}),f(Ot)!=="svelte-5q9igk"&&(Ot.innerHTML=Ze),Ae=g(x,`
		Ich kaufe und verkaufe
		`),_t=i(x,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(_t)!=="svelte-1oa5di5"&&(_t.textContent=tn),Le=g(x,`, Silber und Gold.
		`),gt=i(x,"A",{href:!0,target:!0,"data-svelte-h":!0}),f(gt)!=="svelte-hosg9k"&&(gt.innerHTML=en),ye=w(x),Nt=i(x,"P",{"data-svelte-h":!0}),f(Nt)!=="svelte-5q9igk"&&(Nt.innerHTML=nn),Fe=w(x),I&&I.l(x),x.forEach(o),d.forEach(o),this.h()},h(){v(C,"href","https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9"),v(C,"target","_blank"),v(F,"href","https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"),v(F,"target","_blank"),v(N,"href","https://de.wikipedia.org/wiki/Geocaching"),v(N,"target","_blank"),v(X,"class","emma"),v(P,"href","https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9"),v(P,"target","_blank"),v(W,"href","https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"),v(W,"target","_blank"),v(B,"href","https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c"),v(B,"target","_blank"),v(E,"href","https://github.com/moniquebaumann/friends-of-satoshi/blob/main/README.md"),v(E,"target","_blank"),v(D,"href","https://www.youtube.com/watch?v=fW8amMCVAJQ"),v(D,"target","_blank"),v(dt,"href","https://de.wikipedia.org/wiki/Geocaching"),v(dt,"target","_blank"),v(pt,"href","https://github.com/FreiheitsGeld/freiheitsgeld"),v(pt,"target","_blank"),v(Gt,"class","content svelte-1dugow7"),v(yt,"class","text-center"),v(Ft,"class","tableDiv svelte-1dugow7"),v(vt,"class","button"),v(bt,"class","button"),v(mt,"class","button"),v(_t,"href","https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459"),v(_t,"target","_blank"),v(gt,"href","https://github.com/moniquebaumann"),v(gt,"target","_blank"),v(m,"class","content svelte-1dugow7"),v(t,"class","text-center")},m(A,d){p(A,t,d),n(t,u),n(t,l),n(t,h),n(t,c),n(t,C),n(t,T),n(t,F),n(t,O),n(t,tt),n(t,z),n(t,N),n(t,R),n(t,et),n(t,V),n(t,X),n(t,U),n(t,nt),n(t,lt),n(t,J),n(t,Dt),n(t,K),n(t,Wt),n(t,Q),n(t,rt),n(t,P),n(t,it),n(t,W),n(t,st),n(t,B),n(t,at),n(t,$),n(t,ut),n(t,q),n(t,ot),n(t,E),n(t,ht),n(t,G),n(t,ft),n(t,D),n(t,ct),n(t,e),n(t,oe),n(t,dt),n(t,he),n(t,Bt),n(t,fe),n(t,Et),n(t,ce),n(t,pt),n(t,de),n(t,jt),n(t,pe),n(t,$t),n(t,ve),n(t,qt),n(t,be),n(t,Gt),ae(Lt,Gt,null),n(t,me),n(t,m),n(m,yt),n(m,_e),n(m,It),n(m,ge),n(m,Ft),n(m,Ce),n(m,zt),n(m,xe),n(m,vt),n(m,ke),L&&L.m(m,null),n(m,ee),n(m,Vt),n(m,we),n(m,bt),n(m,Me),j&&j.m(m,null),n(m,ne),n(m,St),n(m,Te),n(m,mt),n(m,He),y&&y.m(m,null),n(m,le),n(m,Ot),n(m,Ae),n(m,_t),n(m,Le),n(m,gt),n(m,ye),n(m,Nt),n(m,Fe),I&&I.m(m,null),re=!0,Pe||(ln=[De(vt,"click",M[5]),De(bt,"click",M[6]),De(mt,"click",M[7])],Pe=!0)},p(A,[d]){A[3]?L?d&8&&Z(L,1):(L=dn(),L.c(),Z(L,1),L.m(m,ee)):L&&(an(),Ct(L,1,1,()=>{L=null}),un()),A[1]?j||(j=pn(),j.c(),j.m(m,ne)):j&&(j.d(1),j=null),A[2]?y?d&4&&Z(y,1):(y=vn(),y.c(),Z(y,1),y.m(m,le)):y&&(an(),Ct(y,1,1,()=>{y=null}),un()),Rt!==(Rt=rn(A))&&(I&&I.d(1),I=Rt&&Rt(A),I&&(I.c(),I.m(m,null)))},i(A){re||(Z(Lt.$$.fragment,A),Z(L),Z(y),re=!0)},o(A){Ct(Lt.$$.fragment,A),Ct(L),Ct(y),re=!1},d(A){A&&o(t),ue(Lt),L&&L.d(),j&&j.d(),y&&y.d(),I&&I.d(),Pe=!1,mn(ln)}}}function yn(M,t,u){let a=!1,l,h,s,c=!1;return bn(async()=>{typeof window.ethereum>"u"?u(0,a=!1):u(0,a=!0),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&u(4,c=!0)}),[a,l,h,s,c,()=>u(3,s=!s),()=>u(1,l=!l),()=>u(2,h=!h)]}class Fn extends Ee{constructor(t){super(),je(this,t,yn,Ln,Be,{})}}function Pn(M){let t,u="Weltfriede, Freiheit, Freundschaft",a,l,h,s;return h=new Fn({}),{c(){t=r("h2"),t.textContent=u,a=k(),l=r("main"),ie(h.$$.fragment),this.h()},l(c){t=i(c,"H2",{class:!0,"data-svelte-h":!0}),f(t)!=="svelte-191y3w"&&(t.textContent=u),a=w(c),l=i(c,"MAIN",{});var C=Pt(l);se(h.$$.fragment,C),C.forEach(o),this.h()},h(){v(t,"class","text-center")},m(c,C){p(c,t,C),p(c,a,C),p(c,l,C),ae(h,l,null),s=!0},p:We,i(c){s||(Z(h.$$.fragment,c),s=!0)},o(c){Ct(h.$$.fragment,c),s=!1},d(c){c&&(o(t),o(a),o(l)),ue(h)}}}class Gn extends Ee{constructor(t){super(),je(this,t,null,Pn,Be,{})}}export{Gn as component};
