import{s as Ge,n as $e,o as kn,r as wn}from"../chunks/scheduler.46233b48.js";import{S as qe,i as ze,s as k,g as l,c as w,h as r,z as h,k as p,a as v,f,j as Dt,A as Mn,y as n,m,r as se,n as _,u as ue,v as oe,B as je,d as Y,p as dn,t as xt,b as pn,w as he}from"../chunks/index.a26073d0.js";import{F as Tn}from"../chunks/FreedomWallets.c8b46692.js";import{g as Hn}from"../chunks/helpers.a2ca6107.js";import{P as Ln}from"../chunks/Philosophy.33ca3936.js";import{e as vn}from"../chunks/each.e59479a4.js";import{o as An}from"../chunks/off-chain-data.fb94c2f0.js";function bn(M,t,u){const s=M.slice();return s[3]=t[u],s}function mn(M){let t,u=vn(M[0]),s=[];for(let i=0;i<u.length;i+=1)s[i]=_n(bn(M,u,i));return{c(){t=l("div");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){t=r(i,"DIV",{class:!0});var c=Dt(t);for(let a=0;a<s.length;a+=1)s[a].l(c);c.forEach(f),this.h()},h(){p(t,"class","grid-container svelte-ps7hak")},m(i,c){v(i,t,c);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null)},p(i,c){if(c&1){u=vn(i[0]);let a;for(a=0;a<u.length;a+=1){const d=bn(i,u,a);s[a]?s[a].p(d,c):(s[a]=_n(d),s[a].c(),s[a].m(t,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=u.length}},d(i){i&&f(t),Mn(s,i)}}}function _n(M){let t,u,s,i;return{c(){t=l("div"),u=l("object"),i=k(),this.h()},l(c){t=r(c,"DIV",{class:!0});var a=Dt(t);u=r(a,"OBJECT",{width:!0,title:!0,data:!0});var d=Dt(u);d.forEach(f),i=w(a),a.forEach(f),this.h()},h(){p(u,"width","100%"),p(u,"title","some of the first ..."),p(u,"data",s=M[3].txt),p(t,"class","item1 svelte-ps7hak")},m(c,a){v(c,t,a),n(t,u),n(t,i)},p(c,a){a&1&&s!==(s=c[3].txt)&&p(u,"data",s)},d(c){c&&f(t)}}}function yn(M){let t,u,s="<br/>",i,c,a="<button>Mehr Videos</button>",d=M[1]&&mn(M);return{c(){d&&d.c(),t=k(),u=l("p"),u.innerHTML=s,i=k(),c=l("a"),c.innerHTML=a,this.h()},l(C){d&&d.l(C),t=w(C),u=r(C,"P",{"data-svelte-h":!0}),h(u)!=="svelte-pntvnr"&&(u.innerHTML=s),i=w(C),c=r(C,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(c)!=="svelte-11ozjta"&&(c.innerHTML=a),this.h()},h(){p(c,"href","https://rumble.com/c/c-5722872"),p(c,"target","_blank")},m(C,H){d&&d.m(C,H),v(C,t,H),v(C,u,H),v(C,i,H),v(C,c,H)},p(C,[H]){C[1]?d?d.p(C,H):(d=mn(C),d.c(),d.m(t.parentNode,t)):d&&(d.d(1),d=null)},i:$e,o:$e,d(C){C&&(f(t),f(u),f(i),f(c)),d&&d.d(C)}}}function Fn(M,t,u){let{displayAmount:s}=t,i=[],c;return kn(()=>{u(0,i=Hn(An,s)),u(1,c=!0)}),M.$$set=a=>{"displayAmount"in a&&u(2,s=a.displayAmount)},[i,c,s]}class Pn extends qe{constructor(t){super(),ze(this,t,Fn,yn,Ge,{displayAmount:2})}}function gn(M){let t,u;return t=new Tn({}),{c(){se(t.$$.fragment)},l(s){ue(t.$$.fragment,s)},m(s,i){oe(t,s,i),u=!0},i(s){u||(Y(t.$$.fragment,s),u=!0)},o(s){xt(t.$$.fragment,s),u=!1},d(s){he(t,s)}}}function Cn(M){let t,u="<br/><br/><br/>",s,i,c="<br/>",a,d,C="metamask.io",H,T,F="uniswap.org",kt,N,tt="<br/>",wt,I,R="Polygon POS Blockchain",Mt,U,et="<br/><br/><br/>",Tt,S,Z="Freiheit",Ht,J,nt="<br/>",Lt,lt,K,O,Bt="Friede",V,X,Wt="<br/>",Q,At,rt,P,Kt="Geo Cash",it,$,Qt="<br/><br/><br/>",at,B,Zt="Support",st,W,Xt="<br/>",ut,E,Yt="<br/>",ot,G,te="<br/>",ht,q,ee="<br/>",ft,D,ne="jemanden der sich auskennt",ct;return{c(){t=l("p"),t.innerHTML=u,s=m(`
			Bitte tausche unsere Freiheitswährungen lediglich mit friedliebenden Menschen, die jeden Menschen
			auf der Welt mit Respekt behandeln.
			`),i=l("p"),i.innerHTML=c,a=m(`
			Falls Du noch niemanden kennst, der entsprechend auch schon Freiheitsgeld hat, kannst Du Freiheitsgeld
			mit einem Browser Wallet wie
			`),d=l("a"),d.textContent=C,H=m(` z.B. bei
			`),T=l("a"),T.textContent=F,kt=m(`
			kaufen und verkaufen.
			`),N=l("p"),N.innerHTML=tt,wt=m(`
			Dazu brauchst Du MATIC auf der
			`),I=l("a"),I.textContent=R,Mt=m(`
			sowie die Smart Contract Adressen:
			`),U=l("p"),U.innerHTML=et,Tt=k(),S=l("a"),S.textContent=Z,Ht=m(`: 0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7
			`),J=l("p"),J.innerHTML=nt,Lt=k(),lt=l("br"),K=k(),O=l("a"),O.textContent=Bt,V=m(`: 0x0715184614CA1e90EafDf7A4d7fE33B046b47C02
			`),X=l("p"),X.innerHTML=Wt,Q=k(),At=l("br"),rt=k(),P=l("a"),P.textContent=Kt,it=m(`: 0xb841A4f979F9510760ecf60512e038656E68f459
			`),$=l("p"),$.innerHTML=Qt,at=k(),B=l("h6"),B.textContent=Zt,st=k(),W=l("p"),W.innerHTML=Xt,ut=m(`
			Falls Du ein Neueinsteiger bist und gerade erst mal nicht weißt was hier los ist, atme tief durch.
			`),E=l("p"),E.innerHTML=Yt,ot=m(`
			Wahrscheinlich braucht es ein paar oder sogar viele entspannte Anläufe.
			`),G=l("p"),G.innerHTML=te,ht=m(`
			Fahrrad fahren lerntest Du wahrscheinlich auch eher weniger durch lesen und eher mehr durch geduldig
			mit vielen entspannten Anläufen ausprobieren.
			`),q=l("p"),q.innerHTML=ee,ft=m(`
			Falls Du nach vielen entspannten Anläufen noch nicht klar kommst, frag vielleicht
			`),D=l("a"),D.textContent=ne,ct=m(`
			und dem Du wirklich traust.`),this.h()},l(e){t=r(e,"P",{"data-svelte-h":!0}),h(t)!=="svelte-102w9s7"&&(t.innerHTML=u),s=_(e,`
			Bitte tausche unsere Freiheitswährungen lediglich mit friedliebenden Menschen, die jeden Menschen
			auf der Welt mit Respekt behandeln.
			`),i=r(e,"P",{"data-svelte-h":!0}),h(i)!=="svelte-pntvnr"&&(i.innerHTML=c),a=_(e,`
			Falls Du noch niemanden kennst, der entsprechend auch schon Freiheitsgeld hat, kannst Du Freiheitsgeld
			mit einem Browser Wallet wie
			`),d=r(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(d)!=="svelte-ckwul2"&&(d.textContent=C),H=_(e,` z.B. bei
			`),T=r(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(T)!=="svelte-e3y8gz"&&(T.textContent=F),kt=_(e,`
			kaufen und verkaufen.
			`),N=r(e,"P",{"data-svelte-h":!0}),h(N)!=="svelte-pntvnr"&&(N.innerHTML=tt),wt=_(e,`
			Dazu brauchst Du MATIC auf der
			`),I=r(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(I)!=="svelte-uke8jq"&&(I.textContent=R),Mt=_(e,`
			sowie die Smart Contract Adressen:
			`),U=r(e,"P",{"data-svelte-h":!0}),h(U)!=="svelte-102w9s7"&&(U.innerHTML=et),Tt=w(e),S=r(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(S)!=="svelte-4fjl51"&&(S.textContent=Z),Ht=_(e,`: 0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7
			`),J=r(e,"P",{"data-svelte-h":!0}),h(J)!=="svelte-pntvnr"&&(J.innerHTML=nt),Lt=w(e),lt=r(e,"BR",{}),K=w(e),O=r(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(O)!=="svelte-1fsomxz"&&(O.textContent=Bt),V=_(e,`: 0x0715184614CA1e90EafDf7A4d7fE33B046b47C02
			`),X=r(e,"P",{"data-svelte-h":!0}),h(X)!=="svelte-pntvnr"&&(X.innerHTML=Wt),Q=w(e),At=r(e,"BR",{}),rt=w(e),P=r(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(P)!=="svelte-geowzn"&&(P.textContent=Kt),it=_(e,`: 0xb841A4f979F9510760ecf60512e038656E68f459
			`),$=r(e,"P",{"data-svelte-h":!0}),h($)!=="svelte-102w9s7"&&($.innerHTML=Qt),at=w(e),B=r(e,"H6",{"data-svelte-h":!0}),h(B)!=="svelte-1yf2t5r"&&(B.textContent=Zt),st=w(e),W=r(e,"P",{"data-svelte-h":!0}),h(W)!=="svelte-pntvnr"&&(W.innerHTML=Xt),ut=_(e,`
			Falls Du ein Neueinsteiger bist und gerade erst mal nicht weißt was hier los ist, atme tief durch.
			`),E=r(e,"P",{"data-svelte-h":!0}),h(E)!=="svelte-pntvnr"&&(E.innerHTML=Yt),ot=_(e,`
			Wahrscheinlich braucht es ein paar oder sogar viele entspannte Anläufe.
			`),G=r(e,"P",{"data-svelte-h":!0}),h(G)!=="svelte-pntvnr"&&(G.innerHTML=te),ht=_(e,`
			Fahrrad fahren lerntest Du wahrscheinlich auch eher weniger durch lesen und eher mehr durch geduldig
			mit vielen entspannten Anläufen ausprobieren.
			`),q=r(e,"P",{"data-svelte-h":!0}),h(q)!=="svelte-pntvnr"&&(q.innerHTML=ee),ft=_(e,`
			Falls Du nach vielen entspannten Anläufen noch nicht klar kommst, frag vielleicht
			`),D=r(e,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(D)!=="svelte-nqsnei"&&(D.textContent=ne),ct=_(e,`
			und dem Du wirklich traust.`),this.h()},h(){p(d,"href","https://metamask.io"),p(d,"target","_blank"),p(T,"href","https://app.uniswap.org/swap"),p(T,"target","_blank"),p(I,"href","https://portal.polygon.technology/bridge"),p(I,"target","_blank"),p(S,"href","https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7"),p(S,"target","_blank"),p(O,"href","https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02"),p(O,"target","_blank"),p(P,"href","https://polygonscan.com/token/0xb841a4f979f9510760ecf60512e038656e68f459"),p(P,"target","_blank"),p(D,"href","https://www.house-of-satoshi.ch/"),p(D,"target","_blank")},m(e,b){v(e,t,b),v(e,s,b),v(e,i,b),v(e,a,b),v(e,d,b),v(e,H,b),v(e,T,b),v(e,kt,b),v(e,N,b),v(e,wt,b),v(e,I,b),v(e,Mt,b),v(e,U,b),v(e,Tt,b),v(e,S,b),v(e,Ht,b),v(e,J,b),v(e,Lt,b),v(e,lt,b),v(e,K,b),v(e,O,b),v(e,V,b),v(e,X,b),v(e,Q,b),v(e,At,b),v(e,rt,b),v(e,P,b),v(e,it,b),v(e,$,b),v(e,at,b),v(e,B,b),v(e,st,b),v(e,W,b),v(e,ut,b),v(e,E,b),v(e,ot,b),v(e,G,b),v(e,ht,b),v(e,q,b),v(e,ft,b),v(e,D,b),v(e,ct,b)},d(e){e&&(f(t),f(s),f(i),f(a),f(d),f(H),f(T),f(kt),f(N),f(wt),f(I),f(Mt),f(U),f(Tt),f(S),f(Ht),f(J),f(Lt),f(lt),f(K),f(O),f(V),f(X),f(Q),f(At),f(rt),f(P),f(it),f($),f(at),f(B),f(st),f(W),f(ut),f(E),f(ot),f(G),f(ht),f(q),f(ft),f(D),f(ct))}}}function xn(M){let t,u="<br/><br/>",s,i,c;return i=new Ln({}),{c(){t=l("p"),t.innerHTML=u,s=k(),se(i.$$.fragment)},l(a){t=r(a,"P",{"data-svelte-h":!0}),h(t)!=="svelte-5q9igk"&&(t.innerHTML=u),s=w(a),ue(i.$$.fragment,a)},m(a,d){v(a,t,d),v(a,s,d),oe(i,a,d),c=!0},i(a){c||(Y(i.$$.fragment,a),c=!0)},o(a){xt(i.$$.fragment,a),c=!1},d(a){a&&(f(t),f(s)),he(i,a)}}}function Dn(M){let t,u,s="Metamask App",i;return{c(){t=m(`Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite
			bitte mit dem in der `),u=l("a"),u.textContent=s,i=m(` eingebauten
			Browser.`),this.h()},l(c){t=_(c,`Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite
			bitte mit dem in der `),u=r(c,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(u)!=="svelte-8f3ltt"&&(u.textContent=s),i=_(c,` eingebauten
			Browser.`),this.h()},h(){p(u,"href","https://metamask.io"),p(u,"target","_blank")},m(c,a){v(c,t,a),v(c,u,a),v(c,i,a)},d(c){c&&(f(t),f(u),f(i))}}}function Bn(M){let t,u="<br/>",s,i,c="metamask.io",a,d,C="brave.com",H;return{c(){t=l("p"),t.innerHTML=u,s=m(`
			Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise`),i=l("a"),i.textContent=c,a=m(`
			oder nutze das im `),d=l("a"),d.textContent=C,H=m(` Browser eingebaute
			Wallet.`),this.h()},l(T){t=r(T,"P",{"data-svelte-h":!0}),h(t)!=="svelte-pntvnr"&&(t.innerHTML=u),s=_(T,`
			Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise`),i=r(T,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(i)!=="svelte-13yd2tt"&&(i.textContent=c),a=_(T,`
			oder nutze das im `),d=r(T,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(d)!=="svelte-12y5jy6"&&(d.textContent=C),H=_(T,` Browser eingebaute
			Wallet.`),this.h()},h(){p(i,"href","https://metamask.io"),p(i,"target","_blank"),p(d,"href","https://brave.com"),p(d,"target","_blank")},m(T,F){v(T,t,F),v(T,s,F),v(T,i,F),v(T,a,F),v(T,d,F),v(T,H,F)},d(T){T&&(f(t),f(s),f(i),f(a),f(d),f(H))}}}function Wn(M){let t,u,s="<br/>",i,c,a="<br/>",d,C,H="Freiheit",T,F,kt="Friede",N,tt,wt="<br/>",I,R,Mt="Geo Caching",U,et,Tt="<br/><br/><br/>",S,Z,Ht='<object title="Emma" data="https://rumble.com/embed/v4tuakn/?pub=3blg3u" class="svelte-1dugow7"></object>',J,nt,Lt="<br/>",lt,K,O="Architekturen der Freiheit",Bt,V,X="Gewaltenteilung",Wt,Q,At="<br/>",rt,P,Kt="das Volk",it,$,Qt="<br/>",at,B,Zt="Freiheit",st,W,Xt="Friede",ut,E,Yt="Geo Cash",ot,G,te="<br/>",ht,q,ee="Initiale Verteilung",ft,D,ne="Wir",ct,e,b="<br/>",fe,dt,Ie="die Party",ce,Et,Se="<br/>",de,pt,Ve="Geo Caching",pe,jt,Oe="<br/>",ve,$t,Ne="Mach es Besser",be,vt,Re="Open Source",me,Gt,Ue="<br/>",_e,qt,Je="<br/>",ge,zt,Ke="<br/><br/><br/>",Ce,It,yt,xe,g,Ft,Qe="Gesamtmengen",ke,St,Ze="<br/>",we,Pt,Xe='<table class="svelte-1dugow7"><tr class="svelte-1dugow7"><th style="text-align: center" class="svelte-1dugow7">Währung</th> <th class="svelte-1dugow7">Gesamtmenge</th></tr> <tr class="svelte-1dugow7"><td class="svelte-1dugow7"><a href="https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7" target="_blank">Freiheit</a></td> <td class="longInfo svelte-1dugow7"><a href="https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9" target="_blank">9.000.000.000 Coins</a></td></tr> <tr class="svelte-1dugow7"><td class="svelte-1dugow7"><a href="https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02" target="_blank">Friede</a></td> <td class="longInfo svelte-1dugow7"><a href="https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368" target="_blank">9.000.000.000 Coins</a></td></tr> <tr class="svelte-1dugow7"><td class="svelte-1dugow7"><a href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a></td> <td class="longInfo svelte-1dugow7"><a href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c" target="_blank">360.000.000 Coins</a></td></tr></table>',Me,Vt,Ye="<br/><br/>",Te,bt,tn="Generiere Freiheitsgeldbeutel",He,le,Ot,en="<br/><br/>",Le,mt,nn="Kaufe und Verkaufe Freiheitsgeld",Ae,re,Nt,ln="<br/><br/>",ye,_t,rn="Philosophie",Fe,ie,Rt,an="<br/><br/>",Pe,gt,sn="Geo Cash",De,Ct,un="<i>Monique Baumann</i>",Be,Ut,on="<br/><br/>",We,ae,Ee,hn;yt=new Pn({props:{displayAmount:3}});let A=M[3]&&gn(),j=M[1]&&Cn(),y=M[2]&&xn();function fn(L,o){if(!L[0]&&!L[4])return Bn;if(!L[0]&&L[4])return Dn}let Jt=fn(M),z=Jt&&Jt(M);return{c(){t=l("section"),u=l("p"),u.innerHTML=s,i=m(`
	Bitte behandelt jeden mit Respekt.

	`),c=l("p"),c.innerHTML=a,d=m(`
	Wir tragen
	`),C=l("a"),C.textContent=H,T=m(`,
	`),F=l("a"),F.textContent=kt,N=m(`
	und Freundschaft in die Welt.
	`),tt=l("p"),tt.innerHTML=wt,I=m(`
	Wir erkunden Architekturen der Freiheit mit
	`),R=l("a"),R.textContent=Mt,U=m(`.

	`),et=l("p"),et.innerHTML=Tt,S=k(),Z=l("div"),Z.innerHTML=Ht,J=k(),nt=l("p"),nt.innerHTML=Lt,lt=k(),K=l("h4"),K.textContent=O,Bt=m(`

	Wir glauben an `),V=l("a"),V.textContent=X,Wt=m(`.
	`),Q=l("p"),Q.innerHTML=At,rt=m(`
	Wir glauben an `),P=l("a"),P.textContent=Kt,it=m(` als Souverän.
	`),$=l("p"),$.innerHTML=Qt,at=m(`
	Unsere experimentellen Währungen sind 
	`),B=l("a"),B.textContent=Zt,st=m(`,
	`),W=l("a"),W.textContent=Xt,ut=m(`
	und
	`),E=l("a"),E.textContent=Yt,ot=m(`.
	`),G=l("p"),G.innerHTML=te,ht=k(),q=l("h4"),q.textContent=ee,ft=k(),D=l("a"),D.textContent=ne,ct=m(`
	fördern zuerst eine breite initiale Verteilung.
	`),e=l("p"),e.innerHTML=b,fe=m(`
	Danach hinterlegen wir einen passenden Gegenwert, um
	`),dt=l("a"),dt.textContent=Ie,ce=m(`
	zu starten.
	`),Et=l("p"),Et.innerHTML=Se,de=m(`
	Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
	`),pt=l("a"),pt.textContent=Ve,pe=m(`.
	
	`),jt=l("p"),jt.innerHTML=Oe,ve=k(),$t=l("h4"),$t.textContent=Ne,be=m(`
	Unser Code ist
	`),vt=l("a"),vt.textContent=Re,me=m(`. Gerne
	kopieren und besser machen.
	`),Gt=l("p"),Gt.innerHTML=Ue,_e=m(`
	Falls Du investierst, investiere vielleicht nur sehr kleine experimentelle Beträge.
	`),qt=l("p"),qt.innerHTML=Je,ge=m(`
	Wir wissen nicht wie sich der Wert unserer Währungen entwickelt.

	`),zt=l("p"),zt.innerHTML=Ke,Ce=k(),It=l("div"),se(yt.$$.fragment),xe=k(),g=l("div"),Ft=l("h4"),Ft.textContent=Qe,ke=k(),St=l("p"),St.innerHTML=Ze,we=k(),Pt=l("div"),Pt.innerHTML=Xe,Me=k(),Vt=l("p"),Vt.innerHTML=Ye,Te=k(),bt=l("button"),bt.textContent=tn,He=k(),A&&A.c(),le=k(),Ot=l("p"),Ot.innerHTML=en,Le=k(),mt=l("button"),mt.textContent=nn,Ae=k(),j&&j.c(),re=k(),Nt=l("p"),Nt.innerHTML=ln,ye=k(),_t=l("button"),_t.textContent=rn,Fe=k(),y&&y.c(),ie=k(),Rt=l("p"),Rt.innerHTML=an,Pe=m(`
		Ich kaufe und verkaufe
		`),gt=l("a"),gt.textContent=sn,De=m(`, Silber und Gold.
		`),Ct=l("a"),Ct.innerHTML=un,Be=k(),Ut=l("p"),Ut.innerHTML=on,We=k(),z&&z.c(),this.h()},l(L){t=r(L,"SECTION",{class:!0});var o=Dt(t);u=r(o,"P",{"data-svelte-h":!0}),h(u)!=="svelte-pntvnr"&&(u.innerHTML=s),i=_(o,`
	Bitte behandelt jeden mit Respekt.

	`),c=r(o,"P",{"data-svelte-h":!0}),h(c)!=="svelte-pntvnr"&&(c.innerHTML=a),d=_(o,`
	Wir tragen
	`),C=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(C)!=="svelte-3pnr0t"&&(C.textContent=H),T=_(o,`,
	`),F=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(F)!=="svelte-qugqk8"&&(F.textContent=kt),N=_(o,`
	und Freundschaft in die Welt.
	`),tt=r(o,"P",{"data-svelte-h":!0}),h(tt)!=="svelte-pntvnr"&&(tt.innerHTML=wt),I=_(o,`
	Wir erkunden Architekturen der Freiheit mit
	`),R=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(R)!=="svelte-2dzyje"&&(R.textContent=Mt),U=_(o,`.

	`),et=r(o,"P",{"data-svelte-h":!0}),h(et)!=="svelte-102w9s7"&&(et.innerHTML=Tt),S=w(o),Z=r(o,"DIV",{class:!0,"data-svelte-h":!0}),h(Z)!=="svelte-4ybcdw"&&(Z.innerHTML=Ht),J=w(o),nt=r(o,"P",{"data-svelte-h":!0}),h(nt)!=="svelte-pntvnr"&&(nt.innerHTML=Lt),lt=w(o),K=r(o,"H4",{"data-svelte-h":!0}),h(K)!=="svelte-1xrxjrm"&&(K.textContent=O),Bt=_(o,`

	Wir glauben an `),V=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(V)!=="svelte-c9h6z1"&&(V.textContent=X),Wt=_(o,`.
	`),Q=r(o,"P",{"data-svelte-h":!0}),h(Q)!=="svelte-pntvnr"&&(Q.innerHTML=At),rt=_(o,`
	Wir glauben an `),P=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(P)!=="svelte-uotm3v"&&(P.textContent=Kt),it=_(o,` als Souverän.
	`),$=r(o,"P",{"data-svelte-h":!0}),h($)!=="svelte-pntvnr"&&($.innerHTML=Qt),at=_(o,`
	Unsere experimentellen Währungen sind 
	`),B=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(B)!=="svelte-3pnr0t"&&(B.textContent=Zt),st=_(o,`,
	`),W=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(W)!=="svelte-qugqk8"&&(W.textContent=Xt),ut=_(o,`
	und
	`),E=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(E)!=="svelte-10dttgi"&&(E.textContent=Yt),ot=_(o,`.
	`),G=r(o,"P",{"data-svelte-h":!0}),h(G)!=="svelte-pntvnr"&&(G.innerHTML=te),ht=w(o),q=r(o,"H4",{"data-svelte-h":!0}),h(q)!=="svelte-11fsrya"&&(q.textContent=ee),ft=w(o),D=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(D)!=="svelte-p3soxg"&&(D.textContent=ne),ct=_(o,`
	fördern zuerst eine breite initiale Verteilung.
	`),e=r(o,"P",{"data-svelte-h":!0}),h(e)!=="svelte-pntvnr"&&(e.innerHTML=b),fe=_(o,`
	Danach hinterlegen wir einen passenden Gegenwert, um
	`),dt=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(dt)!=="svelte-1gsty2i"&&(dt.textContent=Ie),ce=_(o,`
	zu starten.
	`),Et=r(o,"P",{"data-svelte-h":!0}),h(Et)!=="svelte-pntvnr"&&(Et.innerHTML=Se),de=_(o,`
	Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
	`),pt=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(pt)!=="svelte-2dzyje"&&(pt.textContent=Ve),pe=_(o,`.
	
	`),jt=r(o,"P",{"data-svelte-h":!0}),h(jt)!=="svelte-pntvnr"&&(jt.innerHTML=Oe),ve=w(o),$t=r(o,"H4",{"data-svelte-h":!0}),h($t)!=="svelte-ofj4jr"&&($t.textContent=Ne),be=_(o,`
	Unser Code ist
	`),vt=r(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(vt)!=="svelte-1eqruzd"&&(vt.textContent=Re),me=_(o,`. Gerne
	kopieren und besser machen.
	`),Gt=r(o,"P",{"data-svelte-h":!0}),h(Gt)!=="svelte-pntvnr"&&(Gt.innerHTML=Ue),_e=_(o,`
	Falls Du investierst, investiere vielleicht nur sehr kleine experimentelle Beträge.
	`),qt=r(o,"P",{"data-svelte-h":!0}),h(qt)!=="svelte-pntvnr"&&(qt.innerHTML=Je),ge=_(o,`
	Wir wissen nicht wie sich der Wert unserer Währungen entwickelt.

	`),zt=r(o,"P",{"data-svelte-h":!0}),h(zt)!=="svelte-102w9s7"&&(zt.innerHTML=Ke),Ce=w(o),It=r(o,"DIV",{class:!0});var cn=Dt(It);ue(yt.$$.fragment,cn),cn.forEach(f),xe=w(o),g=r(o,"DIV",{class:!0});var x=Dt(g);Ft=r(x,"H4",{class:!0,"data-svelte-h":!0}),h(Ft)!=="svelte-18kqqe1"&&(Ft.textContent=Qe),ke=w(x),St=r(x,"P",{"data-svelte-h":!0}),h(St)!=="svelte-pntvnr"&&(St.innerHTML=Ze),we=w(x),Pt=r(x,"DIV",{class:!0,"data-svelte-h":!0}),h(Pt)!=="svelte-6jrjp2"&&(Pt.innerHTML=Xe),Me=w(x),Vt=r(x,"P",{"data-svelte-h":!0}),h(Vt)!=="svelte-5q9igk"&&(Vt.innerHTML=Ye),Te=w(x),bt=r(x,"BUTTON",{class:!0,"data-svelte-h":!0}),h(bt)!=="svelte-1ja53j5"&&(bt.textContent=tn),He=w(x),A&&A.l(x),le=w(x),Ot=r(x,"P",{"data-svelte-h":!0}),h(Ot)!=="svelte-5q9igk"&&(Ot.innerHTML=en),Le=w(x),mt=r(x,"BUTTON",{class:!0,"data-svelte-h":!0}),h(mt)!=="svelte-kwq6e6"&&(mt.textContent=nn),Ae=w(x),j&&j.l(x),re=w(x),Nt=r(x,"P",{"data-svelte-h":!0}),h(Nt)!=="svelte-5q9igk"&&(Nt.innerHTML=ln),ye=w(x),_t=r(x,"BUTTON",{class:!0,"data-svelte-h":!0}),h(_t)!=="svelte-1yj694n"&&(_t.textContent=rn),Fe=w(x),y&&y.l(x),ie=w(x),Rt=r(x,"P",{"data-svelte-h":!0}),h(Rt)!=="svelte-5q9igk"&&(Rt.innerHTML=an),Pe=_(x,`
		Ich kaufe und verkaufe
		`),gt=r(x,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(gt)!=="svelte-1oa5di5"&&(gt.textContent=sn),De=_(x,`, Silber und Gold.
		`),Ct=r(x,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(Ct)!=="svelte-hosg9k"&&(Ct.innerHTML=un),Be=w(x),Ut=r(x,"P",{"data-svelte-h":!0}),h(Ut)!=="svelte-5q9igk"&&(Ut.innerHTML=on),We=w(x),z&&z.l(x),x.forEach(f),o.forEach(f),this.h()},h(){p(C,"href","https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9"),p(C,"target","_blank"),p(F,"href","https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"),p(F,"target","_blank"),p(R,"href","https://de.wikipedia.org/wiki/Geocaching"),p(R,"target","_blank"),p(Z,"class","emma"),p(V,"href","https://www.youtube.com/watch?v=oPZK3l93LyI"),p(V,"target","_blank"),p(P,"href","https://rumble.com/v4y53lt-chroniken-der-plandemie-legen-eine-aufarbeitung-der-verbrechen-nahe..html"),p(P,"target","_blank"),p(B,"href","https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9"),p(B,"target","_blank"),p(W,"href","https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"),p(W,"target","_blank"),p(E,"href","https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c"),p(E,"target","_blank"),p(D,"href","https://github.com/moniquebaumann/friends-of-satoshi/blob/main/README.md"),p(D,"target","_blank"),p(dt,"href","https://www.youtube.com/watch?v=fW8amMCVAJQ"),p(dt,"target","_blank"),p(pt,"href","https://de.wikipedia.org/wiki/Geocaching"),p(pt,"target","_blank"),p(vt,"href","https://github.com/FreiheitsGeld/freiheitsgeld"),p(vt,"target","_blank"),p(It,"class","content svelte-1dugow7"),p(Ft,"class","text-center"),p(Pt,"class","tableDiv svelte-1dugow7"),p(bt,"class","button"),p(mt,"class","button"),p(_t,"class","button"),p(gt,"href","https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459"),p(gt,"target","_blank"),p(Ct,"href","https://github.com/moniquebaumann"),p(Ct,"target","_blank"),p(g,"class","content svelte-1dugow7"),p(t,"class","text-center")},m(L,o){v(L,t,o),n(t,u),n(t,i),n(t,c),n(t,d),n(t,C),n(t,T),n(t,F),n(t,N),n(t,tt),n(t,I),n(t,R),n(t,U),n(t,et),n(t,S),n(t,Z),n(t,J),n(t,nt),n(t,lt),n(t,K),n(t,Bt),n(t,V),n(t,Wt),n(t,Q),n(t,rt),n(t,P),n(t,it),n(t,$),n(t,at),n(t,B),n(t,st),n(t,W),n(t,ut),n(t,E),n(t,ot),n(t,G),n(t,ht),n(t,q),n(t,ft),n(t,D),n(t,ct),n(t,e),n(t,fe),n(t,dt),n(t,ce),n(t,Et),n(t,de),n(t,pt),n(t,pe),n(t,jt),n(t,ve),n(t,$t),n(t,be),n(t,vt),n(t,me),n(t,Gt),n(t,_e),n(t,qt),n(t,ge),n(t,zt),n(t,Ce),n(t,It),oe(yt,It,null),n(t,xe),n(t,g),n(g,Ft),n(g,ke),n(g,St),n(g,we),n(g,Pt),n(g,Me),n(g,Vt),n(g,Te),n(g,bt),n(g,He),A&&A.m(g,null),n(g,le),n(g,Ot),n(g,Le),n(g,mt),n(g,Ae),j&&j.m(g,null),n(g,re),n(g,Nt),n(g,ye),n(g,_t),n(g,Fe),y&&y.m(g,null),n(g,ie),n(g,Rt),n(g,Pe),n(g,gt),n(g,De),n(g,Ct),n(g,Be),n(g,Ut),n(g,We),z&&z.m(g,null),ae=!0,Ee||(hn=[je(bt,"click",M[5]),je(mt,"click",M[6]),je(_t,"click",M[7])],Ee=!0)},p(L,[o]){L[3]?A?o&8&&Y(A,1):(A=gn(),A.c(),Y(A,1),A.m(g,le)):A&&(dn(),xt(A,1,1,()=>{A=null}),pn()),L[1]?j||(j=Cn(),j.c(),j.m(g,re)):j&&(j.d(1),j=null),L[2]?y?o&4&&Y(y,1):(y=xn(),y.c(),Y(y,1),y.m(g,ie)):y&&(dn(),xt(y,1,1,()=>{y=null}),pn()),Jt!==(Jt=fn(L))&&(z&&z.d(1),z=Jt&&Jt(L),z&&(z.c(),z.m(g,null)))},i(L){ae||(Y(yt.$$.fragment,L),Y(A),Y(y),ae=!0)},o(L){xt(yt.$$.fragment,L),xt(A),xt(y),ae=!1},d(L){L&&f(t),he(yt),A&&A.d(),j&&j.d(),y&&y.d(),z&&z.d(),Ee=!1,wn(hn)}}}function En(M,t,u){let s=!1,i,c,a,d=!1;return kn(async()=>{typeof window.ethereum>"u"?u(0,s=!1):u(0,s=!0),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&u(4,d=!0)}),[s,i,c,a,d,()=>u(3,a=!a),()=>u(1,i=!i),()=>u(2,c=!c)]}class jn extends qe{constructor(t){super(),ze(this,t,En,Wn,Ge,{})}}function $n(M){let t,u="Weltfriede, Freiheit, Freundschaft",s,i,c,a;return c=new jn({}),{c(){t=l("h2"),t.textContent=u,s=k(),i=l("main"),se(c.$$.fragment),this.h()},l(d){t=r(d,"H2",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-191y3w"&&(t.textContent=u),s=w(d),i=r(d,"MAIN",{});var C=Dt(i);ue(c.$$.fragment,C),C.forEach(f),this.h()},h(){p(t,"class","text-center")},m(d,C){v(d,t,C),v(d,s,C),v(d,i,C),oe(c,i,null),a=!0},p:$e,i(d){a||(Y(c.$$.fragment,d),a=!0)},o(d){xt(c.$$.fragment,d),a=!1},d(d){d&&(f(t),f(s),f(i)),he(c)}}}class Nn extends qe{constructor(t){super(),ze(this,t,null,$n,Ge,{})}}export{Nn as component};
