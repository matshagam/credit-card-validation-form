!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r){},function(e,r){const t=document.querySelector(".identification-head_bank form"),n=t.querySelector(".card-cvc"),o=t.querySelector(".card-user"),l=t.querySelectorAll(".card-number"),u=t.querySelector(".card-month"),a=t.querySelector(".card-year"),c=(new Date).getFullYear(),i=(new Date).getMonth();validateForm=(()=>{return event.preventDefault(),removeValidation(),checkErrors(),!t.querySelectorAll(".error").length}),removeValidation=(()=>{const e=t.querySelectorAll(".error");for(let r=0;r<e.length;r++)e[r].classList.remove("error")}),checkErrors=(()=>{for(let e=0;e<l.length;e++)4!==l[e].value.length&&(l[e].className+=" error");3!==n.value.length&&(n.className+=" error"),/^([- A-Za-z0-9]+){4,}$/.test(o.value)||(o.className+=" error"),Number(u.value)<i&&Number(a.value)===c&&(u.className+=" error")})},function(e,r,t){t(1),e.exports=t(0)}]);