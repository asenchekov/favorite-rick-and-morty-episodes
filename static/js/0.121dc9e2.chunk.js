(this["webpackJsonpmy-ts-react-app"]=this["webpackJsonpmy-ts-react-app"]||[]).push([[0],{25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n);t.default=function(e){var t=e.episodes,a=e.toggleFavAction,n=e.favorites,s=e.dispatch;return c.a.createElement("section",{className:"episode-layout"},t.map((function(e){var t=e.id,i=e.image,r=e.name,o=e.season,l=e.number;return c.a.createElement("section",{key:t,className:"episode-box"},c.a.createElement("img",{src:i.medium,alt:"Rick and Morty ".concat(r)}),c.a.createElement("div",null,r),c.a.createElement("section",{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("div",null,"Season: ",o," Number: ",l),c.a.createElement("button",{onClick:function(){return a(e,n,s)}},n.map((function(e){return e.id})).includes(t)?"Unfav":"Fav")))})))}}}]);
//# sourceMappingURL=0.121dc9e2.chunk.js.map