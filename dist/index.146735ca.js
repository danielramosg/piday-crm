function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequiree6f1;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequiree6f1=o),o("27Lyk").register(JSON.parse('{"lekR4":"index.146735ca.js","6JwK3":"pi1000000.4fed8581.txt","24hVL":"index.8b199b36.js","30X8c":"index.f3f39fba.js"}'));var l=o("e8YdG"),r=o("4rSa5"),d=o("hOxpW"),i={};function p(){const e=4e3,t=450,n=document.createElement("div"),a=d.default(n).append("div").attr("id","canvasContainer").append("canvas").attr("width",e).attr("height",t).style("width",e).style("height",t),o=d.default(n).append("div").append("input").attr("id","searchInput"),l=d.default(n).append("div").attr("id","searchOutput").html("Loading..."),r=a.node()?.getContext("2d");r.font="50px monospace";const p=r.measureText("3").width,c=r.measureText("3").actualBoundingBoxAscent+14,s=()=>{r.clearRect(0,0,e,t)},h=()=>{const e="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104";u(e.slice(0,7).padStart(50," "),"",e.slice(7,57),6)},u=(n,a,o,l)=>{r.clearRect(0,0,e,t);const d=280,i=l-n.length,s=n.length+a.length+o.length,h=(e-s*p)/2;r.fillText(n,h,d),r.fillStyle="limegreen",r.fillRect(h+p*n.length,285,p*a.length,-50),r.fillStyle="#000000",r.fillText(a,h+p*n.length,d),r.fillText(o,h+p*(n.length+a.length),d);for(let e=i;e<i+s;e++){if(e%10==0&&e>=0){const t=h+p*(.5+(e-i));r.beginPath(),r.moveTo(t,d-c-5),r.lineTo(t,d-c-150-5),r.stroke(),r.font="30px monospace",r.setTransform(0,-1,1,0,t-10,d-c-20),r.fillText(e.toLocaleString("fr"),0,0),r.resetTransform(),r.font="50px monospace"}}a.length&&(r.beginPath(),r.moveTo(h+p*(n.length+.5),300),r.lineTo(h+p*(n.length+.5),340),r.stroke(),r.font="30px monospace",r.fillText(l.toLocaleString("fr"),h+p*(n.length+.5)+10,340),r.font="50px monospace")};return h(),fetch(new URL(i).href).then((e=>e.text())).then((e=>{l.html("Cerca alguns dígits...");o.on("input",(()=>{let t=o.node()?.value;if(null!==t&&(t=t.replace(/[^0-9]/g,""),o.node().value=t),""===t)l.html("Cerca alguns dígits..."),h();else{const n=(t=>{const n=50,a=e.indexOf(t);return a<0?{found:!1,str:t}:{found:!0,str:t,index:a-1,neighborhood:e.slice(Math.max(a-n,0),Math.min(a+t.length+n,e.length)),prev:e.slice(Math.max(a-n,0),a).padStart(n," "),post:e.slice(a+t.length,Math.min(a+t.length+n,e.length)).padEnd(n," ")}})(t);n.found?(l.html(`La seqüència ${n.str.toString()} es troba al \n            decimal ${n.index?.toLocaleString("fr")}.`),u(n.prev,n.str,n.post,n.index)):(l.html("Buscant..."),fetch(`http://localhost:3000/search/${t}`).then((e=>e.json())).then((e=>{e.found?(l.html(`La seqüència ${e.str} es troba al\n                decimal ${Number(e.index).toLocaleString("fr")}.`),u(e.prev,e.str,e.post,Number(e.index))):(l.html("La seqüència no es troba entre els primers 1 000 000 000 dígits"),s())})).catch((e=>{l.html("La seqüència no es troba entre els primers 1 000 000 dígits. \n                  Servidor no disponible per a cercar més enllà."),s()})))}}))})).catch((e=>{console.error(e)})),n}i=new URL(o("27Lyk").resolve("6JwK3"),import.meta.url).toString();d=o("hOxpW");const c=[{id:"alpha",txt:"Alfabètic (A=01, ..., Z=26)",validator:e=>{if(null!==e)return e.replace(/[^a-zA-Z]/g,"").toUpperCase()},encoder:e=>e.toUpperCase().split("").map((e=>(e.charCodeAt(0)-64).toLocaleString().padStart(2,"0"))).join("")},{id:"alphaNoZeroes",txt:"Alfabètic (A=1, ..., Z=26)",validator:e=>{if(null!==e)return e.replace(/[^a-zA-Z]/g,"").toUpperCase()},encoder:e=>e.toUpperCase().split("").map((e=>(e.charCodeAt(0)-64).toLocaleString())).join("")},{id:"unicode",txt:"Unicode",validator:e=>e,encoder:e=>e.split("").map((e=>e.charCodeAt(0).toLocaleString())).join("")}];function s(){const e=document.createElement("div"),t=d.default(e).append("span"),n=d.default(e).append("span"),a=t.append("div").append("input").attr("id","textEncodeInput"),o=n.append("div").attr("id","textEncodeOutput");n.append("div").append("button").classed("btn btn-secondary",!0).html("Cerca'l").on("click",(()=>{const e=o.html();d.default("#searchInput").node().value=e,d.default("#searchInput").dispatch("input"),d.default("#searchApp").node().scrollIntoView()}));const l=t.append("div").selectAll("div").data(c).enter().append("div"),r=l.append("input").attr("type","radio").attr("id",(e=>e.id)).attr("name","encodeOption").attr("value",(e=>e.id)).on("change",((e,t)=>{let n=a.node()?.value;n=t.validator(n),a.node().value=n,o.html(t.encoder(n)),a.on("input",(()=>{let e=a.node()?.value;e=t.validator(e),a.node().value=e,o.html(t.encoder(e))}))}));l.append("label").attr("for",(e=>e.id)).html((e=>e.txt));const i=r.filter((e=>"alphaNoZeroes"===e.id));return i.attr("checked",!0),i.dispatch("change"),e}e(l)((()=>{document.getElementById("searchApp").appendChild(p()),document.getElementById("textEncodeApp").appendChild(s()),(0,r.makeHeader)(),(0,r.renderKaTeX)(document.body),document.getElementById("searchInput")?.focus({preventScroll:!0})}));
//# sourceMappingURL=index.146735ca.js.map
