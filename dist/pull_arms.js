import t from"https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm";import{SimpleBandit as s}from"https://cdn.jsdelivr.net/npm/simplebandit/+esm";import{model as e}from"../../../../src/assets/model.js";console.log(e),t.defaults.baseURL="https://lit-backed.onrender.com",t.defaults.withCredentials=!0;var o=window.localStorage;const n=e,r=function(t,e){const o=[];for(let n of e){n=s.fromJSON(n[0],n[1]);const e=n.recommend(t);o.push(e)}return o}({time_of_day:(new Date).getHours()},n),[a,c,i]=function(t){return t.map((t=>t.actionId.slice(2)))}(r);!async function(){if(null!==o.getItem("status")){const[s,e]=JSON.parse(o.getItem("status"));try{const o=await t.post("/",[s,e]);console.log("Success:",o)}catch(t){console.error("Error:",t)}}}(),o.setItem("status",JSON.stringify([!1,r]));var m=0;setInterval((async function(){++m%120==0&&o.setItem("status",JSON.stringify({status:!0,recommendations:r}))}),1e3);export{a as motionTrail_N,i as slideshow_N,c as trigger_N};
