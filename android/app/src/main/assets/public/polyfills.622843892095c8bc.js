"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([["polyfills"],{7435:(ie,_e,Ee)=>{Ee(64924)},64924:()=>{
/**
         * @license Angular v15.1.0-next.0
         * (c) 2010-2022 Google LLC. https://angular.io/
         * License: MIT
         */
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
!function(e){const t=e.performance;function c(H){t&&t.mark&&t.mark(H)}function s(H,r){t&&t.measure&&t.measure(H,r)}c("Zone");const a=e.__Zone_symbol_prefix||"__zone_symbol__";function l(H){return a+H}const p=!0===e[l("forceDuplicateZoneCheck")];if(e.Zone){if(p||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}class _{constructor(r,n){this._parent=r,this._name=n?n.name||"unnamed":"<root>",this._properties=n&&n.properties||{},this._zoneDelegate=new k(this,this._parent&&this._parent._zoneDelegate,n)}static assertZonePatched(){if(e.Promise!==oe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let r=_.current;for(;r.parent;)r=r.parent;return r}static get current(){return U.zone}static get currentTask(){return re}static __load_patch(r,n,o=!1){if(oe.hasOwnProperty(r)){if(!o&&p)throw Error("Already loaded patch: "+r)}else if(!e["__Zone_disable_"+r]){const b="Zone:"+r;c(b),oe[r]=n(e,_,z),s(b,b)}}get parent(){return this._parent}get name(){return this._name}get(r){const n=this.getZoneWith(r);if(n)return n._properties[r]}getZoneWith(r){let n=this;for(;n;){if(n._properties.hasOwnProperty(r))return n;n=n._parent}return null}fork(r){if(!r)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,r)}wrap(r,n){if("function"!=typeof r)throw new Error("Expecting function got: "+r);const o=this._zoneDelegate.intercept(this,r,n),b=this;return function(){return b.runGuarded(o,this,arguments,n)}}run(r,n,o,b){U={parent:U,zone:this};try{return this._zoneDelegate.invoke(this,r,n,o,b)}finally{U=U.parent}}runGuarded(r,n=null,o,b){U={parent:U,zone:this};try{try{return this._zoneDelegate.invoke(this,r,n,o,b)}catch(G){if(this._zoneDelegate.handleError(this,G))throw G}}finally{U=U.parent}}runTask(r,n,o){if(r.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(r.zone||$).name+"; Execution: "+this.name+")");if(r.state===A&&(r.type===K||r.type===P))return;const b=r.state!=T;b&&r._transitionTo(T,L),r.runCount++;const G=re;re=r,U={parent:U,zone:this};try{r.type==P&&r.data&&!r.data.isPeriodic&&(r.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,r,n,o)}catch(te){if(this._zoneDelegate.handleError(this,te))throw te}}finally{r.state!==A&&r.state!==d&&(r.type==K||r.data&&r.data.isPeriodic?b&&r._transitionTo(L,T):(r.runCount=0,this._updateTaskCount(r,-1),b&&r._transitionTo(A,T,A))),U=U.parent,re=G}}scheduleTask(r){if(r.zone&&r.zone!==this){let o=this;for(;o;){if(o===r.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${r.zone.name}`);o=o.parent}}r._transitionTo(X,A);const n=[];r._zoneDelegates=n,r._zone=this;try{r=this._zoneDelegate.scheduleTask(this,r)}catch(o){throw r._transitionTo(d,X,A),this._zoneDelegate.handleError(this,o),o}return r._zoneDelegates===n&&this._updateTaskCount(r,1),r.state==X&&r._transitionTo(L,X),r}scheduleMicroTask(r,n,o,b){return this.scheduleTask(new m(N,r,n,o,b,void 0))}scheduleMacroTask(r,n,o,b,G){return this.scheduleTask(new m(P,r,n,o,b,G))}scheduleEventTask(r,n,o,b,G){return this.scheduleTask(new m(K,r,n,o,b,G))}cancelTask(r){if(r.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(r.zone||$).name+"; Execution: "+this.name+")");if(r.state===L||r.state===T){r._transitionTo(x,L,T);try{this._zoneDelegate.cancelTask(this,r)}catch(n){throw r._transitionTo(d,x),this._zoneDelegate.handleError(this,n),n}return this._updateTaskCount(r,-1),r._transitionTo(A,x),r.runCount=0,r}}_updateTaskCount(r,n){const o=r._zoneDelegates;-1==n&&(r._zoneDelegates=null);for(let b=0;b<o.length;b++)o[b]._updateTaskCount(r.type,n)}}_.__symbol__=l;const w={name:"",onHasTask:(H,r,n,o)=>H.hasTask(n,o),onScheduleTask:(H,r,n,o)=>H.scheduleTask(n,o),onInvokeTask:(H,r,n,o,b,G)=>H.invokeTask(n,o,b,G),onCancelTask:(H,r,n,o)=>H.cancelTask(n,o)};class k{constructor(r,n,o){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=r,this._parentDelegate=n,this._forkZS=o&&(o&&o.onFork?o:n._forkZS),this._forkDlgt=o&&(o.onFork?n:n._forkDlgt),this._forkCurrZone=o&&(o.onFork?this.zone:n._forkCurrZone),this._interceptZS=o&&(o.onIntercept?o:n._interceptZS),this._interceptDlgt=o&&(o.onIntercept?n:n._interceptDlgt),this._interceptCurrZone=o&&(o.onIntercept?this.zone:n._interceptCurrZone),this._invokeZS=o&&(o.onInvoke?o:n._invokeZS),this._invokeDlgt=o&&(o.onInvoke?n:n._invokeDlgt),this._invokeCurrZone=o&&(o.onInvoke?this.zone:n._invokeCurrZone),this._handleErrorZS=o&&(o.onHandleError?o:n._handleErrorZS),this._handleErrorDlgt=o&&(o.onHandleError?n:n._handleErrorDlgt),this._handleErrorCurrZone=o&&(o.onHandleError?this.zone:n._handleErrorCurrZone),this._scheduleTaskZS=o&&(o.onScheduleTask?o:n._scheduleTaskZS),this._scheduleTaskDlgt=o&&(o.onScheduleTask?n:n._scheduleTaskDlgt),this._scheduleTaskCurrZone=o&&(o.onScheduleTask?this.zone:n._scheduleTaskCurrZone),this._invokeTaskZS=o&&(o.onInvokeTask?o:n._invokeTaskZS),this._invokeTaskDlgt=o&&(o.onInvokeTask?n:n._invokeTaskDlgt),this._invokeTaskCurrZone=o&&(o.onInvokeTask?this.zone:n._invokeTaskCurrZone),this._cancelTaskZS=o&&(o.onCancelTask?o:n._cancelTaskZS),this._cancelTaskDlgt=o&&(o.onCancelTask?n:n._cancelTaskDlgt),this._cancelTaskCurrZone=o&&(o.onCancelTask?this.zone:n._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const b=o&&o.onHasTask,G=n&&n._hasTaskZS;(b||G)&&(this._hasTaskZS=b?o:w,this._hasTaskDlgt=n,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=r,o.onScheduleTask||(this._scheduleTaskZS=w,this._scheduleTaskDlgt=n,this._scheduleTaskCurrZone=this.zone),o.onInvokeTask||(this._invokeTaskZS=w,this._invokeTaskDlgt=n,this._invokeTaskCurrZone=this.zone),o.onCancelTask||(this._cancelTaskZS=w,this._cancelTaskDlgt=n,this._cancelTaskCurrZone=this.zone))}fork(r,n){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,r,n):new _(r,n)}intercept(r,n,o){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,r,n,o):n}invoke(r,n,o,b,G){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,r,n,o,b,G):n.apply(o,b)}handleError(r,n){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,r,n)}scheduleTask(r,n){let o=n;if(this._scheduleTaskZS)this._hasTaskZS&&o._zoneDelegates.push(this._hasTaskDlgtOwner),o=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,r,n),o||(o=n);else if(n.scheduleFn)n.scheduleFn(n);else{if(n.type!=N)throw new Error("Task is missing scheduleFn.");R(n)}return o}invokeTask(r,n,o,b){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,r,n,o,b):n.callback.apply(o,b)}cancelTask(r,n){let o;if(this._cancelTaskZS)o=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,r,n);else{if(!n.cancelFn)throw Error("Task is not cancelable");o=n.cancelFn(n)}return o}hasTask(r,n){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,r,n)}catch(o){this.handleError(r,o)}}_updateTaskCount(r,n){const o=this._taskCounts,b=o[r],G=o[r]=b+n;if(G<0)throw new Error("More tasks executed then were scheduled.");if(0==b||0==G){const te={microTask:o.microTask>0,macroTask:o.macroTask>0,eventTask:o.eventTask>0,change:r};this.hasTask(this.zone,te)}}}class m{constructor(r,n,o,b,G,te){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=r,this.source=n,this.data=b,this.scheduleFn=G,this.cancelFn=te,!o)throw new Error("callback is not defined");this.callback=o;const u=this;r===K&&b&&b.useG?this.invoke=m.invokeTask:this.invoke=function(){return m.invokeTask.call(e,u,this,arguments)}}static invokeTask(r,n,o){r||(r=this),Q++;try{return r.runCount++,r.zone.runTask(r,n,o)}finally{1==Q&&E(),Q--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(A,X)}_transitionTo(r,n,o){if(this._state!==n&&this._state!==o)throw new Error(`${this.type} '${this.source}': can not transition to '${r}', expecting state '${n}'${o?" or '"+o+"'":""}, was '${this._state}'.`);this._state=r,r==A&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const I=l("setTimeout"),O=l("Promise"),Z=l("then");let J,B=[],j=!1;function q(H){if(J||e[O]&&(J=e[O].resolve(0)),J){let r=J[Z];r||(r=J.then),r.call(J,H)}else e[I](H,0)}function R(H){0===Q&&0===B.length&&q(E),H&&B.push(H)}function E(){if(!j){for(j=!0;B.length;){const H=B;B=[];for(let r=0;r<H.length;r++){const n=H[r];try{n.zone.runTask(n,null,null)}catch(o){z.onUnhandledError(o)}}}z.microtaskDrainDone(),j=!1}}const $={name:"NO ZONE"},A="notScheduled",X="scheduling",L="scheduled",T="running",x="canceling",d="unknown",N="microTask",P="macroTask",K="eventTask",oe={},z={symbol:l,currentZoneFrame:()=>U,onUnhandledError:W,microtaskDrainDone:W,scheduleMicroTask:R,showUncaughtError:()=>!_[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:W,patchMethod:()=>W,bindArguments:()=>[],patchThen:()=>W,patchMacroTask:()=>W,patchEventPrototype:()=>W,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>W,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>W,wrapWithCurrentZone:()=>W,filterProperties:()=>[],attachOriginToPatched:()=>W,_redefineProperty:()=>W,patchCallbacks:()=>W,nativeScheduleMicroTask:q};let U={parent:null,zone:new _(null,null)},re=null,Q=0;function W(){}s("Zone","Zone"),e.Zone=_}(typeof window<"u"&&window||typeof self<"u"&&self||global);
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
const ie=Object.getOwnPropertyDescriptor,_e=Object.defineProperty,Ee=Object.getPrototypeOf,ge=Object.create,it=Array.prototype.slice,De="addEventListener",Oe="removeEventListener",Ze=Zone.__symbol__(De),Ne=Zone.__symbol__(Oe),ce="true",ae="false",ke=Zone.__symbol__("");function Ie(e,t){return Zone.current.wrap(e,t)}function Le(e,t,c,s,a){return Zone.current.scheduleMacroTask(e,t,c,s,a)}const M=Zone.__symbol__,we=typeof window<"u",Te=we?window:void 0,Y=we&&Te||"object"==typeof self&&self||global;function Me(e,t){for(let c=e.length-1;c>=0;c--)"function"==typeof e[c]&&(e[c]=Ie(e[c],t+"_"+c));return e}function Ve(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const Fe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,Pe=!("nw"in Y)&&typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process),je=!Pe&&!Fe&&!(!we||!Te.HTMLElement),Be=typeof Y.process<"u"&&"[object process]"==={}.toString.call(Y.process)&&!Fe&&!(!we||!Te.HTMLElement),Re={},Ue=function(e){if(!(e=e||Y.event))return;let t=Re[e.type];t||(t=Re[e.type]=M("ON_PROPERTY"+e.type));const c=this||e.target||Y,s=c[t];let a;if(je&&c===Te&&"error"===e.type){const l=e;a=s&&s.call(this,l.message,l.filename,l.lineno,l.colno,l.error),!0===a&&e.preventDefault()}else a=s&&s.apply(this,arguments),null!=a&&!a&&e.preventDefault();return a};function We(e,t,c){let s=ie(e,t);if(!s&&c&&ie(c,t)&&(s={enumerable:!0,configurable:!0}),!s||!s.configurable)return;const a=M("on"+t+"patched");if(e.hasOwnProperty(a)&&e[a])return;delete s.writable,delete s.value;const l=s.get,p=s.set,_=t.slice(2);let w=Re[_];w||(w=Re[_]=M("ON_PROPERTY"+_)),s.set=function(k){let m=this;!m&&e===Y&&(m=Y),m&&("function"==typeof m[w]&&m.removeEventListener(_,Ue),p&&p.call(m,null),m[w]=k,"function"==typeof k&&m.addEventListener(_,Ue,!1))},s.get=function(){let k=this;if(!k&&e===Y&&(k=Y),!k)return null;const m=k[w];if(m)return m;if(l){let I=l.call(this);if(I)return s.set.call(this,I),"function"==typeof k.removeAttribute&&k.removeAttribute(t),I}return null},_e(e,t,s),e[a]=!0}function qe(e,t,c){if(t)for(let s=0;s<t.length;s++)We(e,"on"+t[s],c);else{const s=[];for(const a in e)"on"==a.slice(0,2)&&s.push(a);for(let a=0;a<s.length;a++)We(e,s[a],c)}}const ne=M("originalInstance");function ve(e){const t=Y[e];if(!t)return;Y[M(e)]=t,Y[e]=function(){const a=Me(arguments,e);switch(a.length){case 0:this[ne]=new t;break;case 1:this[ne]=new t(a[0]);break;case 2:this[ne]=new t(a[0],a[1]);break;case 3:this[ne]=new t(a[0],a[1],a[2]);break;case 4:this[ne]=new t(a[0],a[1],a[2],a[3]);break;default:throw new Error("Arg list too long.")}},ue(Y[e],t);const c=new t(function(){});let s;for(s in c)"XMLHttpRequest"===e&&"responseBlob"===s||function(a){"function"==typeof c[a]?Y[e].prototype[a]=function(){return this[ne][a].apply(this[ne],arguments)}:_e(Y[e].prototype,a,{set:function(l){"function"==typeof l?(this[ne][a]=Ie(l,e+"."+a),ue(this[ne][a],l)):this[ne][a]=l},get:function(){return this[ne][a]}})}(s);for(s in t)"prototype"!==s&&t.hasOwnProperty(s)&&(Y[e][s]=t[s])}function le(e,t,c){let s=e;for(;s&&!s.hasOwnProperty(t);)s=Ee(s);!s&&e[t]&&(s=e);const a=M(t);let l=null;if(s&&(!(l=s[a])||!s.hasOwnProperty(a))){l=s[a]=s[t];if(Ve(s&&ie(s,t))){const _=c(l,a,t);s[t]=function(){return _(this,arguments)},ue(s[t],l)}}return l}function lt(e,t,c){let s=null;function a(l){const p=l.data;return p.args[p.cbIdx]=function(){l.invoke.apply(this,arguments)},s.apply(p.target,p.args),l}s=le(e,t,l=>function(p,_){const w=c(p,_);return w.cbIdx>=0&&"function"==typeof _[w.cbIdx]?Le(w.name,_[w.cbIdx],w,a):l.apply(p,_)})}function ue(e,t){e[M("OriginalDelegate")]=t}let Xe=!1,Ae=!1;function ft(){if(Xe)return Ae;Xe=!0;try{const e=Te.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Ae=!0)}catch{}return Ae}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */Zone.__load_patch("ZoneAwarePromise",(e,t,c)=>{const s=Object.getOwnPropertyDescriptor,a=Object.defineProperty;const p=c.symbol,_=[],w=!0===e[p("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],k=p("Promise"),m=p("then");c.onUnhandledError=u=>{if(c.showUncaughtError()){const f=u&&u.rejection;f?console.error("Unhandled Promise rejection:",f instanceof Error?f.message:f,"; Zone:",u.zone.name,"; Task:",u.task&&u.task.source,"; Value:",f,f instanceof Error?f.stack:void 0):console.error(u)}},c.microtaskDrainDone=()=>{for(;_.length;){const u=_.shift();try{u.zone.runGuarded(()=>{throw u.throwOriginal?u.rejection:u})}catch(f){Z(f)}}};const O=p("unhandledPromiseRejectionHandler");function Z(u){c.onUnhandledError(u);try{const f=t[O];"function"==typeof f&&f.call(this,u)}catch{}}function B(u){return u&&u.then}function j(u){return u}function J(u){return n.reject(u)}const q=p("state"),R=p("value"),E=p("finally"),$=p("parentPromiseValue"),A=p("parentPromiseState"),L=null,T=!0,x=!1;function N(u,f){return i=>{try{z(u,f,i)}catch(h){z(u,!1,h)}}}const P=function(){let u=!1;return function(i){return function(){u||(u=!0,i.apply(null,arguments))}}},oe=p("currentTaskTrace");function z(u,f,i){const h=P();if(u===i)throw new TypeError("Promise resolved with itself");if(u[q]===L){let g=null;try{("object"==typeof i||"function"==typeof i)&&(g=i&&i.then)}catch(v){return h(()=>{z(u,!1,v)})(),u}if(f!==x&&i instanceof n&&i.hasOwnProperty(q)&&i.hasOwnProperty(R)&&i[q]!==L)re(i),z(u,i[q],i[R]);else if(f!==x&&"function"==typeof g)try{g.call(i,h(N(u,f)),h(N(u,!1)))}catch(v){h(()=>{z(u,!1,v)})()}else{u[q]=f;const v=u[R];if(u[R]=i,u[E]===E&&f===T&&(u[q]=u[A],u[R]=u[$]),f===x&&i instanceof Error){const y=t.currentTask&&t.currentTask.data&&t.currentTask.data.__creationTrace__;y&&a(i,oe,{configurable:!0,enumerable:!1,writable:!0,value:y})}for(let y=0;y<v.length;)Q(u,v[y++],v[y++],v[y++],v[y++]);if(0==v.length&&f==x){u[q]=0;let y=i;try{throw new Error("Uncaught (in promise): "+function l(u){if(u&&u.toString===Object.prototype.toString)return(u.constructor&&u.constructor.name||"")+": "+JSON.stringify(u);return u?u.toString():Object.prototype.toString.call(u)}(i)+(i&&i.stack?"\n"+i.stack:""))}catch(C){y=C}w&&(y.throwOriginal=!0),y.rejection=i,y.promise=u,y.zone=t.current,y.task=t.currentTask,_.push(y),c.scheduleMicroTask()}}}return u}const U=p("rejectionHandledHandler");function re(u){if(0===u[q]){try{const f=t[U];f&&"function"==typeof f&&f.call(this,{rejection:u[R],promise:u})}catch{}u[q]=x;for(let f=0;f<_.length;f++)u===_[f].promise&&_.splice(f,1)}}function Q(u,f,i,h,g){re(u);const v=u[q],y=v?"function"==typeof h?h:j:"function"==typeof g?g:J;f.scheduleMicroTask("Promise.then",()=>{try{const C=u[R],S=!!i&&E===i[E];S&&(i[$]=C,i[A]=v);const D=f.run(y,void 0,S&&y!==J&&y!==j?[]:[C]);z(i,!0,D)}catch(C){z(i,!1,C)}},i)}const H=function(){},r=e.AggregateError;class n{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(f){return z(new this(null),T,f)}static reject(f){return z(new this(null),x,f)}static any(f){if(!f||"function"!=typeof f[Symbol.iterator])return Promise.reject(new r([],"All promises were rejected"));const i=[];let h=0;try{for(let y of f)h++,i.push(n.resolve(y))}catch{return Promise.reject(new r([],"All promises were rejected"))}if(0===h)return Promise.reject(new r([],"All promises were rejected"));let g=!1;const v=[];return new n((y,C)=>{for(let S=0;S<i.length;S++)i[S].then(D=>{g||(g=!0,y(D))},D=>{v.push(D),h--,0===h&&(g=!0,C(new r(v,"All promises were rejected")))})})}static race(f){let i,h,g=new this((C,S)=>{i=C,h=S});function v(C){i(C)}function y(C){h(C)}for(let C of f)B(C)||(C=this.resolve(C)),C.then(v,y);return g}static all(f){return n.allWithCallback(f)}static allSettled(f){return(this&&this.prototype instanceof n?this:n).allWithCallback(f,{thenCallback:h=>({status:"fulfilled",value:h}),errorCallback:h=>({status:"rejected",reason:h})})}static allWithCallback(f,i){let h,g,v=new this((D,V)=>{h=D,g=V}),y=2,C=0;const S=[];for(let D of f){B(D)||(D=this.resolve(D));const V=C;try{D.then(F=>{S[V]=i?i.thenCallback(F):F,y--,0===y&&h(S)},F=>{i?(S[V]=i.errorCallback(F),y--,0===y&&h(S)):g(F)})}catch(F){g(F)}y++,C++}return y-=2,0===y&&h(S),v}constructor(f){const i=this;if(!(i instanceof n))throw new Error("Must be an instanceof Promise.");i[q]=L,i[R]=[];try{const h=P();f&&f(h(N(i,T)),h(N(i,x)))}catch(h){z(i,!1,h)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return n}then(f,i){var h;let g=null===(h=this.constructor)||void 0===h?void 0:h[Symbol.species];(!g||"function"!=typeof g)&&(g=this.constructor||n);const v=new g(H),y=t.current;return this[q]==L?this[R].push(y,v,f,i):Q(this,y,v,f,i),v}catch(f){return this.then(null,f)}finally(f){var i;let h=null===(i=this.constructor)||void 0===i?void 0:i[Symbol.species];(!h||"function"!=typeof h)&&(h=n);const g=new h(H);g[E]=E;const v=t.current;return this[q]==L?this[R].push(v,g,f,f):Q(this,v,g,f,f),g}}n.resolve=n.resolve,n.reject=n.reject,n.race=n.race,n.all=n.all;const o=e[k]=e.Promise;e.Promise=n;const b=p("thenPatched");function G(u){const f=u.prototype,i=s(f,"then");if(i&&(!1===i.writable||!i.configurable))return;const h=f.then;f[m]=h,u.prototype.then=function(g,v){return new n((C,S)=>{h.call(this,C,S)}).then(g,v)},u[b]=!0}return c.patchThen=G,o&&(G(o),le(e,"fetch",u=>function te(u){return function(f,i){let h=u.apply(f,i);if(h instanceof n)return h;let g=h.constructor;return g[b]||G(g),h}}(u))),Promise[t.__symbol__("uncaughtPromiseErrors")]=_,n}),
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
Zone.__load_patch("toString",e=>{const t=Function.prototype.toString,c=M("OriginalDelegate"),s=M("Promise"),a=M("Error"),l=function(){if("function"==typeof this){const k=this[c];if(k)return"function"==typeof k?t.call(k):Object.prototype.toString.call(k);if(this===Promise){const m=e[s];if(m)return t.call(m)}if(this===Error){const m=e[a];if(m)return t.call(m)}}return t.call(this)};l[c]=t,Function.prototype.toString=l;const p=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":p.call(this)}});
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
let ye=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){ye=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{ye=!1}const ht={useG:!0},ee={},ze={},Ye=new RegExp("^"+ke+"(\\w+)(true|false)$"),$e=M("propagationStopped");function Je(e,t){const c=(t?t(e):e)+ae,s=(t?t(e):e)+ce,a=ke+c,l=ke+s;ee[e]={},ee[e][ae]=a,ee[e][ce]=l}function dt(e,t,c,s){const a=s&&s.add||De,l=s&&s.rm||Oe,p=s&&s.listeners||"eventListeners",_=s&&s.rmAll||"removeAllListeners",w=M(a),k="."+a+":",m="prependListener",I="."+m+":",O=function(R,E,$){if(R.isRemoved)return;const A=R.callback;let X;"object"==typeof A&&A.handleEvent&&(R.callback=T=>A.handleEvent(T),R.originalDelegate=A);try{R.invoke(R,E,[$])}catch(T){X=T}const L=R.options;if(L&&"object"==typeof L&&L.once){const T=R.originalDelegate?R.originalDelegate:R.callback;E[l].call(E,$.type,T,L)}return X};function Z(R,E,$){if(!(E=E||e.event))return;const A=R||E.target||e,X=A[ee[E.type][$?ce:ae]];if(X){const L=[];if(1===X.length){const T=O(X[0],A,E);T&&L.push(T)}else{const T=X.slice();for(let x=0;x<T.length&&(!E||!0!==E[$e]);x++){const d=O(T[x],A,E);d&&L.push(d)}}if(1===L.length)throw L[0];for(let T=0;T<L.length;T++){const x=L[T];t.nativeScheduleMicroTask(()=>{throw x})}}}const B=function(R){return Z(this,R,!1)},j=function(R){return Z(this,R,!0)};function J(R,E){if(!R)return!1;let $=!0;E&&void 0!==E.useG&&($=E.useG);const A=E&&E.vh;let X=!0;E&&void 0!==E.chkDup&&(X=E.chkDup);let L=!1;E&&void 0!==E.rt&&(L=E.rt);let T=R;for(;T&&!T.hasOwnProperty(a);)T=Ee(T);if(!T&&R[a]&&(T=R),!T||T[w])return!1;const x=E&&E.eventNameToString,d={},N=T[w]=T[a],P=T[M(l)]=T[l],K=T[M(p)]=T[p],oe=T[M(_)]=T[_];let z;function U(i,h){return!ye&&"object"==typeof i&&i?!!i.capture:ye&&h?"boolean"==typeof i?{capture:i,passive:!0}:i?"object"==typeof i&&!1!==i.passive?Object.assign(Object.assign({},i),{passive:!0}):i:{passive:!0}:i}E&&E.prepend&&(z=T[M(E.prepend)]=T[E.prepend]);const n=$?function(i){if(!d.isExisting)return N.call(d.target,d.eventName,d.capture?j:B,d.options)}:function(i){return N.call(d.target,d.eventName,i.invoke,d.options)},o=$?function(i){if(!i.isRemoved){const h=ee[i.eventName];let g;h&&(g=h[i.capture?ce:ae]);const v=g&&i.target[g];if(v)for(let y=0;y<v.length;y++)if(v[y]===i){v.splice(y,1),i.isRemoved=!0,0===v.length&&(i.allRemoved=!0,i.target[g]=null);break}}if(i.allRemoved)return P.call(i.target,i.eventName,i.capture?j:B,i.options)}:function(i){return P.call(i.target,i.eventName,i.invoke,i.options)},G=E&&E.diff?E.diff:function(i,h){const g=typeof h;return"function"===g&&i.callback===h||"object"===g&&i.originalDelegate===h},te=Zone[M("UNPATCHED_EVENTS")],u=e[M("PASSIVE_EVENTS")],f=function(i,h,g,v,y=!1,C=!1){return function(){const S=this||e;let D=arguments[0];E&&E.transferEventName&&(D=E.transferEventName(D));let V=arguments[1];if(!V)return i.apply(this,arguments);if(Pe&&"uncaughtException"===D)return i.apply(this,arguments);let F=!1;if("function"!=typeof V){if(!V.handleEvent)return i.apply(this,arguments);F=!0}if(A&&!A(i,V,S,arguments))return;const fe=ye&&!!u&&-1!==u.indexOf(D),se=U(arguments[2],fe);if(te)for(let de=0;de<te.length;de++)if(D===te[de])return fe?i.call(S,D,V,se):i.apply(this,arguments);const xe=!!se&&("boolean"==typeof se||se.capture),tt=!(!se||"object"!=typeof se)&&se.once,gt=Zone.current;let Ge=ee[D];Ge||(Je(D,x),Ge=ee[D]);const nt=Ge[xe?ce:ae];let Se,me=S[nt],rt=!1;if(me){if(rt=!0,X)for(let de=0;de<me.length;de++)if(G(me[de],V))return}else me=S[nt]=[];const ot=S.constructor.name,st=ze[ot];st&&(Se=st[D]),Se||(Se=ot+h+(x?x(D):D)),d.options=se,tt&&(d.options.once=!1),d.target=S,d.capture=xe,d.eventName=D,d.isExisting=rt;const be=$?ht:void 0;be&&(be.taskData=d);const he=gt.scheduleEventTask(Se,V,be,g,v);return d.target=null,be&&(be.taskData=null),tt&&(se.once=!0),!ye&&"boolean"==typeof he.options||(he.options=se),he.target=S,he.capture=xe,he.eventName=D,F&&(he.originalDelegate=V),C?me.unshift(he):me.push(he),y?S:void 0}};return T[a]=f(N,k,n,o,L),z&&(T[m]=f(z,I,function(i){return z.call(d.target,d.eventName,i.invoke,d.options)},o,L,!0)),T[l]=function(){const i=this||e;let h=arguments[0];E&&E.transferEventName&&(h=E.transferEventName(h));const g=arguments[2],v=!!g&&("boolean"==typeof g||g.capture),y=arguments[1];if(!y)return P.apply(this,arguments);if(A&&!A(P,y,i,arguments))return;const C=ee[h];let S;C&&(S=C[v?ce:ae]);const D=S&&i[S];if(D)for(let V=0;V<D.length;V++){const F=D[V];if(G(F,y)){if(D.splice(V,1),F.isRemoved=!0,0===D.length&&(F.allRemoved=!0,i[S]=null,"string"==typeof h)){i[ke+"ON_PROPERTY"+h]=null}return F.zone.cancelTask(F),L?i:void 0}}return P.apply(this,arguments)},T[p]=function(){const i=this||e;let h=arguments[0];E&&E.transferEventName&&(h=E.transferEventName(h));const g=[],v=Ke(i,x?x(h):h);for(let y=0;y<v.length;y++){const C=v[y];let S=C.originalDelegate?C.originalDelegate:C.callback;g.push(S)}return g},T[_]=function(){const i=this||e;let h=arguments[0];if(h){E&&E.transferEventName&&(h=E.transferEventName(h));const g=ee[h];if(g){const v=g[ae],y=g[ce],C=i[v],S=i[y];if(C){const D=C.slice();for(let V=0;V<D.length;V++){const F=D[V];let fe=F.originalDelegate?F.originalDelegate:F.callback;this[l].call(this,h,fe,F.options)}}if(S){const D=S.slice();for(let V=0;V<D.length;V++){const F=D[V];let fe=F.originalDelegate?F.originalDelegate:F.callback;this[l].call(this,h,fe,F.options)}}}}else{const g=Object.keys(i);for(let v=0;v<g.length;v++){const y=g[v],C=Ye.exec(y);let S=C&&C[1];S&&"removeListener"!==S&&this[_].call(this,S)}this[_].call(this,"removeListener")}if(L)return this},ue(T[a],N),ue(T[l],P),oe&&ue(T[_],oe),K&&ue(T[p],K),!0}let q=[];for(let R=0;R<c.length;R++)q[R]=J(c[R],s);return q}function Ke(e,t){if(!t){const l=[];for(let p in e){const _=Ye.exec(p);let w=_&&_[1];if(w&&(!t||w===t)){const k=e[p];if(k)for(let m=0;m<k.length;m++)l.push(k[m])}}return l}let c=ee[t];c||(Je(t),c=ee[t]);const s=e[c[ae]],a=e[c[ce]];return s?a?s.concat(a):s.slice():a?a.slice():[]}function _t(e,t){const c=e.Event;c&&c.prototype&&t.patchMethod(c.prototype,"stopImmediatePropagation",s=>function(a,l){a[$e]=!0,s&&s.apply(a,l)})}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */function Et(e,t,c,s,a){const l=Zone.__symbol__(s);if(t[l])return;const p=t[l]=t[s];t[s]=function(_,w,k){return w&&w.prototype&&a.forEach(function(m){const I=`${c}.${s}::`+m,O=w.prototype;try{if(O.hasOwnProperty(m)){const Z=e.ObjectGetOwnPropertyDescriptor(O,m);Z&&Z.value?(Z.value=e.wrapWithCurrentZone(Z.value,I),e._redefineProperty(w.prototype,m,Z)):O[m]&&(O[m]=e.wrapWithCurrentZone(O[m],I))}else O[m]&&(O[m]=e.wrapWithCurrentZone(O[m],I))}catch{}}),p.call(t,_,w,k)},e.attachOriginToPatched(t[s],p)}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */function Qe(e,t,c){if(!c||0===c.length)return t;const s=c.filter(l=>l.target===e);if(!s||0===s.length)return t;const a=s[0].ignoreProperties;return t.filter(l=>-1===a.indexOf(l))}function et(e,t,c,s){if(!e)return;qe(e,Qe(e,t,c),s)}function He(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}function Tt(e,t){if(Pe&&!Be||Zone[e.symbol("patchEvents")])return;const c=t.__Zone_ignore_on_properties;let s=[];if(je){const a=window;s=s.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function ut(){try{const e=Te.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:a,ignoreProperties:["error"]}]:[];et(a,He(a),c&&c.concat(l),Ee(a))}s=s.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let a=0;a<s.length;a++){const l=t[s[a]];l&&l.prototype&&et(l.prototype,He(l.prototype),c)}}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */Zone.__load_patch("util",(e,t,c)=>{const s=He(e);c.patchOnProperties=qe,c.patchMethod=le,c.bindArguments=Me,c.patchMacroTask=lt;const a=t.__symbol__("BLACK_LISTED_EVENTS"),l=t.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[a]=e[l]),e[a]&&(t[a]=t[l]=e[a]),c.patchEventPrototype=_t,c.patchEventTarget=dt,c.isIEOrEdge=ft,c.ObjectDefineProperty=_e,c.ObjectGetOwnPropertyDescriptor=ie,c.ObjectCreate=ge,c.ArraySlice=it,c.patchClass=ve,c.wrapWithCurrentZone=Ie,c.filterProperties=Qe,c.attachOriginToPatched=ue,c._redefineProperty=Object.defineProperty,c.patchCallbacks=Et,c.getGlobalObjects=()=>({globalSources:ze,zoneSymbolEventNames:ee,eventNames:s,isBrowser:je,isMix:Be,isNode:Pe,TRUE_STR:ce,FALSE_STR:ae,ZONE_SYMBOL_PREFIX:ke,ADD_EVENT_LISTENER_STR:De,REMOVE_EVENT_LISTENER_STR:Oe})});
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
const Ce=M("zoneTask");function pe(e,t,c,s){let a=null,l=null;c+=s;const p={};function _(k){const m=k.data;return m.args[0]=function(){return k.invoke.apply(this,arguments)},m.handleId=a.apply(e,m.args),k}function w(k){return l.call(e,k.data.handleId)}a=le(e,t+=s,k=>function(m,I){if("function"==typeof I[0]){const O={isPeriodic:"Interval"===s,delay:"Timeout"===s||"Interval"===s?I[1]||0:void 0,args:I},Z=I[0];I[0]=function(){try{return Z.apply(this,arguments)}finally{O.isPeriodic||("number"==typeof O.handleId?delete p[O.handleId]:O.handleId&&(O.handleId[Ce]=null))}};const B=Le(t,I[0],O,_,w);if(!B)return B;const j=B.data.handleId;return"number"==typeof j?p[j]=B:j&&(j[Ce]=B),j&&j.ref&&j.unref&&"function"==typeof j.ref&&"function"==typeof j.unref&&(B.ref=j.ref.bind(j),B.unref=j.unref.bind(j)),"number"==typeof j||j?j:B}return k.apply(e,I)}),l=le(e,c,k=>function(m,I){const O=I[0];let Z;"number"==typeof O?Z=p[O]:(Z=O&&O[Ce],Z||(Z=O)),Z&&"string"==typeof Z.type?"notScheduled"!==Z.state&&(Z.cancelFn&&Z.data.isPeriodic||0===Z.runCount)&&("number"==typeof O?delete p[O]:O&&(O[Ce]=null),Z.zone.cancelTask(Z)):k.apply(e,I)})}
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
Zone.__load_patch("legacy",e=>{const t=e[Zone.__symbol__("legacyPatch")];t&&t()}),Zone.__load_patch("queueMicrotask",(e,t,c)=>{c.patchMethod(e,"queueMicrotask",s=>function(a,l){t.current.scheduleMicroTask("queueMicrotask",l[0])})}),Zone.__load_patch("timers",e=>{const t="set",c="clear";pe(e,t,c,"Timeout"),pe(e,t,c,"Interval"),pe(e,t,c,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{pe(e,"request","cancel","AnimationFrame"),pe(e,"mozRequest","mozCancel","AnimationFrame"),pe(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,t)=>{const c=["alert","prompt","confirm"];for(let s=0;s<c.length;s++){const a=c[s];le(e,a,(l,p,_)=>function(w,k){return t.current.run(l,e,k,_)})}}),Zone.__load_patch("EventTarget",(e,t,c)=>{(function mt(e,t){t.patchEventPrototype(e,t)})(e,c),
/**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */
function pt(e,t){if(Zone[t.symbol("patchEventTarget")])return;const{eventNames:c,zoneSymbolEventNames:s,TRUE_STR:a,FALSE_STR:l,ZONE_SYMBOL_PREFIX:p}=t.getGlobalObjects();for(let w=0;w<c.length;w++){const k=c[w],O=p+(k+l),Z=p+(k+a);s[k]={},s[k][l]=O,s[k][a]=Z}const _=e.EventTarget;return _&&_.prototype?(t.patchEventTarget(e,t,[_&&_.prototype]),!0):void 0}(e,c);const s=e.XMLHttpRequestEventTarget;s&&s.prototype&&c.patchEventTarget(e,c,[s.prototype])}),Zone.__load_patch("MutationObserver",(e,t,c)=>{ve("MutationObserver"),ve("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,t,c)=>{ve("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,t,c)=>{ve("FileReader")}),Zone.__load_patch("on_property",(e,t,c)=>{Tt(c,e)}),Zone.__load_patch("customElements",(e,t,c)=>{!function yt(e,t){const{isBrowser:c,isMix:s}=t.getGlobalObjects();if(!c&&!s||!e.customElements||!("customElements"in e))return;t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,c)}),Zone.__load_patch("XHR",(e,t)=>{!function w(k){const m=k.XMLHttpRequest;if(!m)return;const I=m.prototype;let Z=I[Ze],B=I[Ne];if(!Z){const d=k.XMLHttpRequestEventTarget;if(d){const N=d.prototype;Z=N[Ze],B=N[Ne]}}const j="readystatechange",J="scheduled";function q(d){const N=d.data,P=N.target;P[l]=!1,P[_]=!1;const K=P[a];Z||(Z=P[Ze],B=P[Ne]),K&&B.call(P,j,K);const oe=P[a]=()=>{if(P.readyState===P.DONE)if(!N.aborted&&P[l]&&d.state===J){const U=P[t.__symbol__("loadfalse")];if(0!==P.status&&U&&U.length>0){const re=d.invoke;d.invoke=function(){const Q=P[t.__symbol__("loadfalse")];for(let W=0;W<Q.length;W++)Q[W]===d&&Q.splice(W,1);!N.aborted&&d.state===J&&re.call(d)},U.push(d)}else d.invoke()}else!N.aborted&&!1===P[l]&&(P[_]=!0)};return Z.call(P,j,oe),P[c]||(P[c]=d),T.apply(P,N.args),P[l]=!0,d}function R(){}function E(d){const N=d.data;return N.aborted=!0,x.apply(N.target,N.args)}const $=le(I,"open",()=>function(d,N){return d[s]=0==N[2],d[p]=N[1],$.apply(d,N)}),X=M("fetchTaskAborting"),L=M("fetchTaskScheduling"),T=le(I,"send",()=>function(d,N){if(!0===t.current[L]||d[s])return T.apply(d,N);{const P={target:d,url:d[p],isPeriodic:!1,args:N,aborted:!1},K=Le("XMLHttpRequest.send",R,P,q,E);d&&!0===d[_]&&!P.aborted&&K.state===J&&K.invoke()}}),x=le(I,"abort",()=>function(d,N){const P=function O(d){return d[c]}(d);if(P&&"string"==typeof P.type){if(null==P.cancelFn||P.data&&P.data.aborted)return;P.zone.cancelTask(P)}else if(!0===t.current[X])return x.apply(d,N)})}(e);const c=M("xhrTask"),s=M("xhrSync"),a=M("xhrListener"),l=M("xhrScheduled"),p=M("xhrURL"),_=M("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function at(e,t){const c=e.constructor.name;for(let s=0;s<t.length;s++){const a=t[s],l=e[a];if(l){if(!Ve(ie(e,a)))continue;e[a]=(_=>{const w=function(){return _.apply(this,Me(arguments,c+"."+a))};return ue(w,_),w})(l)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function c(s){return function(a){Ke(e,s).forEach(p=>{const _=e.PromiseRejectionEvent;if(_){const w=new _(s,{promise:a.promise,reason:a.rejection});p.invoke(w)}})}}e.PromiseRejectionEvent&&(t[M("unhandledPromiseRejectionHandler")]=c("unhandledrejection"),t[M("rejectionHandledHandler")]=c("rejectionhandled"))})}},ie=>{var ge;ge=7435,ie(ie.s=ge)}]);
//# sourceMappingURL=polyfills.622843892095c8bc.js.map