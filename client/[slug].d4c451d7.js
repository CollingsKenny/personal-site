import{S as t,i as a,s as e,e as s,t as d,b as o,f as n,g as r,d as c,h as l,j as i,k as h,l as u,a as p,q as M,c as f,n as y}from"./client.23bad0ba.js";import{f as m}from"./index.46fcae8b.js";function v(t){let a,e,p,M,f=m(new Date(t[0].data.date_updated),"MMMM do, yyyy")+"";return{c(){a=s("p"),e=s("em"),p=d("Updated on\n      "),M=d(f),this.h()},l(t){a=o(t,"P",{class:!0});var s=n(a);e=o(s,"EM",{});var d=n(e);p=r(d,"Updated on\n      "),M=r(d,f),d.forEach(c),s.forEach(c),this.h()},h(){l(a,"class","date svelte-10eub74")},m(t,s){i(t,a,s),h(a,e),h(e,p),h(e,M)},p(t,a){1&a&&f!==(f=m(new Date(t[0].data.date_updated),"MMMM do, yyyy")+"")&&u(M,f)},d(t){t&&c(a)}}}function E(t){let a,e,E,b,g,w,j,D,x,P,_,H,$=t[0].data.title+"",C=m(new Date(t[0].data.date),"MMMM do, yyyy")+"",K=t[0].html+"";document.title=a=t[0].data.title+" - KennyC";let L=t[0].data.date_updated&&v(t);return{c(){e=p(),E=s("h1"),b=d($),g=p(),w=s("p"),j=s("em"),D=d("Posted on "),x=d(C),P=p(),L&&L.c(),_=p(),H=s("div"),this.h()},l(t){M('[data-svelte="svelte-s8hrg"]',document.head).forEach(c),e=f(t),E=o(t,"H1",{});var a=n(E);b=r(a,$),a.forEach(c),g=f(t),w=o(t,"P",{class:!0});var s=n(w);j=o(s,"EM",{});var d=n(j);D=r(d,"Posted on "),x=r(d,C),d.forEach(c),s.forEach(c),P=f(t),L&&L.l(t),_=f(t),H=o(t,"DIV",{class:!0}),n(H).forEach(c),this.h()},h(){l(w,"class","date svelte-10eub74"),l(H,"class","content")},m(t,a){i(t,e,a),i(t,E,a),h(E,b),i(t,g,a),i(t,w,a),h(w,j),h(j,D),h(j,x),i(t,P,a),L&&L.m(t,a),i(t,_,a),i(t,H,a),H.innerHTML=K},p(t,[e]){1&e&&a!==(a=t[0].data.title+" - KennyC")&&(document.title=a),1&e&&$!==($=t[0].data.title+"")&&u(b,$),1&e&&C!==(C=m(new Date(t[0].data.date),"MMMM do, yyyy")+"")&&u(x,C),t[0].data.date_updated?L?L.p(t,e):(L=v(t),L.c(),L.m(_.parentNode,_)):L&&(L.d(1),L=null),1&e&&K!==(K=t[0].html+"")&&(H.innerHTML=K)},i:y,o:y,d(t){t&&c(e),t&&c(E),t&&c(g),t&&c(w),t&&c(P),L&&L.d(t),t&&c(_),t&&c(H)}}}async function b({params:t}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};console.log("error:",e),this.error(a.status,e.message)}function g(t,a,e){let{post:s}=a;return t.$$set=t=>{"post"in t&&e(0,s=t.post)},[s]}export default class extends t{constructor(t){super(),a(this,t,g,E,e,{post:0})}}export{b as preload};