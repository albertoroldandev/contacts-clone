(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.getElementById("createContactForm").addEventListener("submit",function(o){o.preventDefault();const n=document.getElementById("colorSelector"),c=document.getElementById("createContactFormName"),r=document.getElementById("createContactFormSurname"),e=document.getElementById("createContactEmail"),t=document.getElementById("createContactPhone");if(n.value==="#ffffff"){alert("Por favor, selecciona un color");return}const a=document.getElementById("contactList"),s=document.createElement("div");s.classList.add("contact"),a.appendChild(s);const l=document.createElement("div");l.classList.add("contact__identity"),s.appendChild(l);const d=document.createElement("span");d.textContent=c.value[0].toUpperCase(),d.classList.add("contact__image"),d.style.backgroundColor=n.value,l.appendChild(d);const u=document.createElement("span");u.textContent=c.value+" "+r.value,u.classList.add("contact__name"),l.appendChild(u);const i=document.createElement("span");i.textContent=e.value,i.classList.add("contact__email"),s.appendChild(i);const m=document.createElement("span");m.textContent=t.value,m.classList.add("contact__phone"),s.appendChild(m);const p=document.getElementById("contactCounter");let f=p.textContent.replace(/[()]/g,"");f=parseInt(f,10)+1,p.textContent="("+f+")",n.value="#ffffff",n.style.backgroundColor="#fff",n.style.color="#000",c.value="",r.value="",e.value="",t.value=""});const g=document.querySelector(".header__search-bar-input"),y=document.querySelector(".header__search-bar-button");g.addEventListener("focus",()=>{y.style.backgroundColor="white"});g.addEventListener("blur",()=>{y.style.backgroundColor=""});const h=document.getElementById("colorSelector");h.addEventListener("change",function(){const o=this.value;this.style.backgroundColor=o,this.style.color=C(o)});function C(o){const n=parseInt(o.substr(1,2),16),c=parseInt(o.substr(3,2),16),r=parseInt(o.substr(5,2),16);return(n*299+c*587+r*114)/1e3>125?"black":"white"}
