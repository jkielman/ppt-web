!function(e){var t={};function l(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=1)}({0:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){console.log("run");var e={phone:document.getElementById("phone"),vid1:document.getElementById("video__one"),vid2:document.getElementById("video__two"),getTitle:document.getElementById("titletag")},t={utility:document.querySelectorAll(".utility")},l=["#44E3C1","#FC5A4C","#FB4AAC"],i=l[Math.floor(Math.random()*l.length)];Array.from(t.utility).forEach(function(t){t.addEventListener("click",function(){e.getTitle.innerHTML=""+this.title,e.getTitle.style.color=i,this.classList.add("scale--selected")}),t.addEventListener("mouseover",function(){e.getTitle.innerHTML=""+this.title,e.getTitle.style.color=i,this.classList.className="scale--selected"},!1)});var o=0,n=t.utility.length;e.getTitle.innerHTML=t.utility[o].title,e.getTitle.style.color=i,t.utility[o].classList.add("scale--selected"),setInterval(function(){var i=l[Math.floor(Math.random()*l.length)];t.utility[o].classList.remove("scale--selected"),o>=n-1?o=0:o++,console.log(t.utility[o].title),e.getTitle.innerHTML=t.utility[o].title,e.getTitle.style.color=i,t.utility[o].classList.add("scale--selected")},6e3);var s=window.scrollY;window.addEventListener("scroll",function(){(s=window.scrollY)>320?e.phone.classList.add("fix"):e.phone.classList.remove("fix"),s>900?(e.vid1.classList.remove("opac--full"),e.vid2.classList.add("opac--full")):(e.vid1.classList.add("opac--full"),e.vid2.classList.remove("opac--full")),console.log(s)})}},1:function(e,t,l){"use strict";var i,o=l(0),n=(i=o)&&i.__esModule?i:{default:i};l(8),(0,n.default)()},8:function(e,t){}});