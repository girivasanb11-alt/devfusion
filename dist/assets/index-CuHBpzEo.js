function sk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ik(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ww={exports:{}},Lc={},Ew={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),ok=Symbol.for("react.portal"),ak=Symbol.for("react.fragment"),lk=Symbol.for("react.strict_mode"),uk=Symbol.for("react.profiler"),ck=Symbol.for("react.provider"),hk=Symbol.for("react.context"),dk=Symbol.for("react.forward_ref"),fk=Symbol.for("react.suspense"),pk=Symbol.for("react.memo"),mk=Symbol.for("react.lazy"),ty=Symbol.iterator;function gk(t){return t===null||typeof t!="object"?null:(t=ty&&t[ty]||t["@@iterator"],typeof t=="function"?t:null)}var xw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tw=Object.assign,Iw={};function Ji(t,e,n){this.props=t,this.context=e,this.refs=Iw,this.updater=n||xw}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ji.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cw(){}Cw.prototype=Ji.prototype;function kp(t,e,n){this.props=t,this.context=e,this.refs=Iw,this.updater=n||xw}var Rp=kp.prototype=new Cw;Rp.constructor=kp;Tw(Rp,Ji.prototype);Rp.isPureReactComponent=!0;var ny=Array.isArray,Sw=Object.prototype.hasOwnProperty,bp={current:null},kw={key:!0,ref:!0,__self:!0,__source:!0};function Rw(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Sw.call(e,r)&&!kw.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:tl,type:t,key:i,ref:o,props:s,_owner:bp.current}}function _k(t,e){return{$$typeof:tl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ap(t){return typeof t=="object"&&t!==null&&t.$$typeof===tl}function yk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ry=/\/+/g;function Zh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?yk(""+t.key):e.toString(36)}function cu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case tl:case ok:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Zh(o,0):r,ny(s)?(n="",t!=null&&(n=t.replace(ry,"$&/")+"/"),cu(s,e,n,"",function(c){return c})):s!=null&&(Ap(s)&&(s=_k(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ry,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",ny(t))for(var a=0;a<t.length;a++){i=t[a];var u=r+Zh(i,a);o+=cu(i,e,n,u,s)}else if(u=gk(t),typeof u=="function")for(t=u.call(t),a=0;!(i=t.next()).done;)i=i.value,u=r+Zh(i,a++),o+=cu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ul(t,e,n){if(t==null)return t;var r=[],s=0;return cu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function vk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Rt={current:null},hu={transition:null},wk={ReactCurrentDispatcher:Rt,ReactCurrentBatchConfig:hu,ReactCurrentOwner:bp};function bw(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Ul,forEach:function(t,e,n){Ul(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ul(t,function(){e++}),e},toArray:function(t){return Ul(t,function(e){return e})||[]},only:function(t){if(!Ap(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Ji;ae.Fragment=ak;ae.Profiler=uk;ae.PureComponent=kp;ae.StrictMode=lk;ae.Suspense=fk;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wk;ae.act=bw;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Tw({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=bp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Sw.call(e,u)&&!kw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:tl,type:t.type,key:s,ref:i,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:hk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ck,_context:t},t.Consumer=t};ae.createElement=Rw;ae.createFactory=function(t){var e=Rw.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:dk,render:t}};ae.isValidElement=Ap;ae.lazy=function(t){return{$$typeof:mk,_payload:{_status:-1,_result:t},_init:vk}};ae.memo=function(t,e){return{$$typeof:pk,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=hu.transition;hu.transition={};try{t()}finally{hu.transition=e}};ae.unstable_act=bw;ae.useCallback=function(t,e){return Rt.current.useCallback(t,e)};ae.useContext=function(t){return Rt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Rt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Rt.current.useEffect(t,e)};ae.useId=function(){return Rt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Rt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Rt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Rt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Rt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Rt.current.useReducer(t,e,n)};ae.useRef=function(t){return Rt.current.useRef(t)};ae.useState=function(t){return Rt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Rt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Rt.current.useTransition()};ae.version="18.3.1";Ew.exports=ae;var M=Ew.exports;const Aw=ik(M),Ek=sk({__proto__:null,default:Aw},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xk=M,Tk=Symbol.for("react.element"),Ik=Symbol.for("react.fragment"),Ck=Object.prototype.hasOwnProperty,Sk=xk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kk={key:!0,ref:!0,__self:!0,__source:!0};function Nw(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ck.call(e,r)&&!kk.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Tk,type:t,key:i,ref:o,props:s,_owner:Sk.current}}Lc.Fragment=Ik;Lc.jsx=Nw;Lc.jsxs=Nw;ww.exports=Lc;var p=ww.exports,$d={},Pw={exports:{}},Kt={},Dw={exports:{}},Ow={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var Q=U.length;U.push(H);e:for(;0<Q;){var de=Q-1>>>1,re=U[de];if(0<s(re,H))U[de]=H,U[Q]=re,Q=de;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var H=U[0],Q=U.pop();if(Q!==H){U[0]=Q;e:for(var de=0,re=U.length,we=re>>>1;de<we;){var Xt=2*(de+1)-1,G=U[Xt],X=Xt+1,Re=U[X];if(0>s(G,Q))X<re&&0>s(Re,G)?(U[de]=Re,U[X]=Q,de=X):(U[de]=G,U[Xt]=Q,de=Xt);else if(X<re&&0>s(Re,Q))U[de]=Re,U[X]=Q,de=X;else break e}}return H}function s(U,H){var Q=U.sortIndex-H.sortIndex;return Q!==0?Q:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],d=1,f=null,g=3,w=!1,T=!1,R=!1,N=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(U){for(var H=n(c);H!==null;){if(H.callback===null)r(c);else if(H.startTime<=U)r(c),H.sortIndex=H.expirationTime,e(u,H);else break;H=n(c)}}function A(U){if(R=!1,C(U),!T)if(n(u)!==null)T=!0,Yt(O);else{var H=n(c);H!==null&&At(A,H.startTime-U)}}function O(U,H){T=!1,R&&(R=!1,x(_),_=-1),w=!0;var Q=g;try{for(C(H),f=n(u);f!==null&&(!(f.expirationTime>H)||U&&!b());){var de=f.callback;if(typeof de=="function"){f.callback=null,g=f.priorityLevel;var re=de(f.expirationTime<=H);H=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(u)&&r(u),C(H)}else r(u);f=n(u)}if(f!==null)var we=!0;else{var Xt=n(c);Xt!==null&&At(A,Xt.startTime-H),we=!1}return we}finally{f=null,g=Q,w=!1}}var V=!1,v=null,_=-1,I=5,S=-1;function b(){return!(t.unstable_now()-S<I)}function P(){if(v!==null){var U=t.unstable_now();S=U;var H=!0;try{H=v(!0,U)}finally{H?k():(V=!1,v=null)}}else V=!1}var k;if(typeof E=="function")k=function(){E(P)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,qe=Ne.port2;Ne.port1.onmessage=P,k=function(){qe.postMessage(null)}}else k=function(){N(P,0)};function Yt(U){v=U,V||(V=!0,k())}function At(U,H){_=N(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){T||w||(T=!0,Yt(O))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var Q=g;g=H;try{return U()}finally{g=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var Q=g;g=U;try{return H()}finally{g=Q}},t.unstable_scheduleCallback=function(U,H,Q){var de=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?de+Q:de):Q=de,U){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,U={id:d++,callback:H,priorityLevel:U,startTime:Q,expirationTime:re,sortIndex:-1},Q>de?(U.sortIndex=Q,e(c,U),n(u)===null&&U===n(c)&&(R?(x(_),_=-1):R=!0,At(A,Q-de))):(U.sortIndex=re,e(u,U),T||w||(T=!0,Yt(O))),U},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(U){var H=g;return function(){var Q=g;g=H;try{return U.apply(this,arguments)}finally{g=Q}}}})(Ow);Dw.exports=Ow;var Rk=Dw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bk=M,Gt=Rk;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lw=new Set,_a={};function Ws(t,e){Di(t,e),Di(t+"Capture",e)}function Di(t,e){for(_a[t]=e,t=0;t<e.length;t++)Lw.add(e[t])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qd=Object.prototype.hasOwnProperty,Ak=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sy={},iy={};function Nk(t){return qd.call(iy,t)?!0:qd.call(sy,t)?!1:Ak.test(t)?iy[t]=!0:(sy[t]=!0,!1)}function Pk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Dk(t,e,n,r){if(e===null||typeof e>"u"||Pk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){lt[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];lt[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){lt[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){lt[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){lt[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){lt[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){lt[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){lt[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){lt[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Np=/[\-:]([a-z])/g;function Pp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Np,Pp);lt[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Np,Pp);lt[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Np,Pp);lt[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){lt[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});lt.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){lt[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Dp(t,e,n,r){var s=lt.hasOwnProperty(e)?lt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Dk(e,n,s,r)&&(n=null),r||s===null?Nk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var cr=bk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,zl=Symbol.for("react.element"),oi=Symbol.for("react.portal"),ai=Symbol.for("react.fragment"),Op=Symbol.for("react.strict_mode"),Hd=Symbol.for("react.profiler"),Mw=Symbol.for("react.provider"),Vw=Symbol.for("react.context"),Lp=Symbol.for("react.forward_ref"),Gd=Symbol.for("react.suspense"),Kd=Symbol.for("react.suspense_list"),Mp=Symbol.for("react.memo"),Er=Symbol.for("react.lazy"),Fw=Symbol.for("react.offscreen"),oy=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=oy&&t[oy]||t["@@iterator"],typeof t=="function"?t:null)}var Oe=Object.assign,ed;function Bo(t){if(ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ed=e&&e[1]||""}return`
`+ed+t}var td=!1;function nd(t,e){if(!t||td)return"";td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{td=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function Ok(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=nd(t.type,!1),t;case 11:return t=nd(t.type.render,!1),t;case 1:return t=nd(t.type,!0),t;default:return""}}function Qd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ai:return"Fragment";case oi:return"Portal";case Hd:return"Profiler";case Op:return"StrictMode";case Gd:return"Suspense";case Kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vw:return(t.displayName||"Context")+".Consumer";case Mw:return(t._context.displayName||"Context")+".Provider";case Lp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mp:return e=t.displayName||null,e!==null?e:Qd(t.type)||"Memo";case Er:e=t._payload,t=t._init;try{return Qd(t(e))}catch{}}return null}function Lk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(e);case 8:return e===Op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Mk(t){var e=jw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bl(t){t._valueTracker||(t._valueTracker=Mk(t))}function Uw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yd(t,e){var n=e.checked;return Oe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ay(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zw(t,e){e=e.checked,e!=null&&Dp(t,"checked",e,!1)}function Xd(t,e){zw(t,e);var n=Gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jd(t,e.type,Gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ly(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jd(t,e,n){(e!=="number"||Pu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wo=Array.isArray;function wi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Zd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Oe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Wo(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gr(n)}}function Bw(t,e){var n=Gr(e.value),r=Gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ww(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ef(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ww(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wl,$w=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wl=Wl||document.createElement("div"),Wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vk=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(t){Vk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Jo[e]=Jo[t]})});function qw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Jo.hasOwnProperty(t)&&Jo[t]?(""+e).trim():e+"px"}function Hw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=qw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var Fk=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tf(t,e){if(e){if(Fk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rf=null;function Vp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sf=null,Ei=null,xi=null;function hy(t){if(t=sl(t)){if(typeof sf!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Uc(e),sf(t.stateNode,t.type,e))}}function Gw(t){Ei?xi?xi.push(t):xi=[t]:Ei=t}function Kw(){if(Ei){var t=Ei,e=xi;if(xi=Ei=null,hy(t),e)for(t=0;t<e.length;t++)hy(e[t])}}function Qw(t,e){return t(e)}function Yw(){}var rd=!1;function Xw(t,e,n){if(rd)return t(e,n);rd=!0;try{return Qw(t,e,n)}finally{rd=!1,(Ei!==null||xi!==null)&&(Yw(),Kw())}}function va(t,e){var n=t.stateNode;if(n===null)return null;var r=Uc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var of=!1;if(er)try{var Ao={};Object.defineProperty(Ao,"passive",{get:function(){of=!0}}),window.addEventListener("test",Ao,Ao),window.removeEventListener("test",Ao,Ao)}catch{of=!1}function jk(t,e,n,r,s,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Zo=!1,Du=null,Ou=!1,af=null,Uk={onError:function(t){Zo=!0,Du=t}};function zk(t,e,n,r,s,i,o,a,u){Zo=!1,Du=null,jk.apply(Uk,arguments)}function Bk(t,e,n,r,s,i,o,a,u){if(zk.apply(this,arguments),Zo){if(Zo){var c=Du;Zo=!1,Du=null}else throw Error(z(198));Ou||(Ou=!0,af=c)}}function $s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dy(t){if($s(t)!==t)throw Error(z(188))}function Wk(t){var e=t.alternate;if(!e){if(e=$s(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return dy(s),t;if(i===r)return dy(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function Zw(t){return t=Wk(t),t!==null?eE(t):null}function eE(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=eE(t);if(e!==null)return e;t=t.sibling}return null}var tE=Gt.unstable_scheduleCallback,fy=Gt.unstable_cancelCallback,$k=Gt.unstable_shouldYield,qk=Gt.unstable_requestPaint,je=Gt.unstable_now,Hk=Gt.unstable_getCurrentPriorityLevel,Fp=Gt.unstable_ImmediatePriority,nE=Gt.unstable_UserBlockingPriority,Lu=Gt.unstable_NormalPriority,Gk=Gt.unstable_LowPriority,rE=Gt.unstable_IdlePriority,Mc=null,kn=null;function Kk(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Mc,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:Xk,Qk=Math.log,Yk=Math.LN2;function Xk(t){return t>>>=0,t===0?32:31-(Qk(t)/Yk|0)|0}var $l=64,ql=4194304;function $o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=$o(a):(i&=o,i!==0&&(r=$o(i)))}else o=n&~s,o!==0?r=$o(o):i!==0&&(r=$o(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),s=1<<n,r|=t[n],e&=~s;return r}function Jk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-mn(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=Jk(a,e)):u<=e&&(t.expiredLanes|=a),i&=~a}}function lf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sE(){var t=$l;return $l<<=1,!($l&4194240)&&($l=64),t}function sd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function eR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-mn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function jp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ge=0;function iE(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var oE,Up,aE,lE,uE,uf=!1,Hl=[],Dr=null,Or=null,Lr=null,wa=new Map,Ea=new Map,Tr=[],tR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function py(t,e){switch(t){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Or=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function No(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=sl(e),e!==null&&Up(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function nR(t,e,n,r,s){switch(e){case"focusin":return Dr=No(Dr,t,e,n,r,s),!0;case"dragenter":return Or=No(Or,t,e,n,r,s),!0;case"mouseover":return Lr=No(Lr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return wa.set(i,No(wa.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Ea.set(i,No(Ea.get(i)||null,t,e,n,r,s)),!0}return!1}function cE(t){var e=vs(t.target);if(e!==null){var n=$s(e);if(n!==null){if(e=n.tag,e===13){if(e=Jw(n),e!==null){t.blockedOn=e,uE(t.priority,function(){aE(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rf=r,n.target.dispatchEvent(r),rf=null}else return e=sl(n),e!==null&&Up(e),t.blockedOn=n,!1;e.shift()}return!0}function my(t,e,n){du(t)&&n.delete(e)}function rR(){uf=!1,Dr!==null&&du(Dr)&&(Dr=null),Or!==null&&du(Or)&&(Or=null),Lr!==null&&du(Lr)&&(Lr=null),wa.forEach(my),Ea.forEach(my)}function Po(t,e){t.blockedOn===e&&(t.blockedOn=null,uf||(uf=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,rR)))}function xa(t){function e(s){return Po(s,t)}if(0<Hl.length){Po(Hl[0],t);for(var n=1;n<Hl.length;n++){var r=Hl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dr!==null&&Po(Dr,t),Or!==null&&Po(Or,t),Lr!==null&&Po(Lr,t),wa.forEach(e),Ea.forEach(e),n=0;n<Tr.length;n++)r=Tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Tr.length&&(n=Tr[0],n.blockedOn===null);)cE(n),n.blockedOn===null&&Tr.shift()}var Ti=cr.ReactCurrentBatchConfig,Vu=!0;function sR(t,e,n,r){var s=ge,i=Ti.transition;Ti.transition=null;try{ge=1,zp(t,e,n,r)}finally{ge=s,Ti.transition=i}}function iR(t,e,n,r){var s=ge,i=Ti.transition;Ti.transition=null;try{ge=4,zp(t,e,n,r)}finally{ge=s,Ti.transition=i}}function zp(t,e,n,r){if(Vu){var s=cf(t,e,n,r);if(s===null)pd(t,e,r,Fu,n),py(t,r);else if(nR(s,t,e,n,r))r.stopPropagation();else if(py(t,r),e&4&&-1<tR.indexOf(t)){for(;s!==null;){var i=sl(s);if(i!==null&&oE(i),i=cf(t,e,n,r),i===null&&pd(t,e,r,Fu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else pd(t,e,r,null,n)}}var Fu=null;function cf(t,e,n,r){if(Fu=null,t=Vp(r),t=vs(t),t!==null)if(e=$s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fu=t,null}function hE(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hk()){case Fp:return 1;case nE:return 4;case Lu:case Gk:return 16;case rE:return 536870912;default:return 16}default:return 16}}var br=null,Bp=null,fu=null;function dE(){if(fu)return fu;var t,e=Bp,n=e.length,r,s="value"in br?br.value:br.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return fu=s.slice(t,1<r?1-r:void 0)}function pu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Gl(){return!0}function gy(){return!1}function Qt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Gl:gy,this.isPropagationStopped=gy,this}return Oe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Gl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Gl)},persist:function(){},isPersistent:Gl}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wp=Qt(Zi),rl=Oe({},Zi,{view:0,detail:0}),oR=Qt(rl),id,od,Do,Vc=Oe({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$p,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(id=t.screenX-Do.screenX,od=t.screenY-Do.screenY):od=id=0,Do=t),id)},movementY:function(t){return"movementY"in t?t.movementY:od}}),_y=Qt(Vc),aR=Oe({},Vc,{dataTransfer:0}),lR=Qt(aR),uR=Oe({},rl,{relatedTarget:0}),ad=Qt(uR),cR=Oe({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),hR=Qt(cR),dR=Oe({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fR=Qt(dR),pR=Oe({},Zi,{data:0}),yy=Qt(pR),mR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_R={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_R[t])?!!e[t]:!1}function $p(){return yR}var vR=Oe({},rl,{key:function(t){if(t.key){var e=mR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$p,charCode:function(t){return t.type==="keypress"?pu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wR=Qt(vR),ER=Oe({},Vc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vy=Qt(ER),xR=Oe({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$p}),TR=Qt(xR),IR=Oe({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),CR=Qt(IR),SR=Oe({},Vc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kR=Qt(SR),RR=[9,13,27,32],qp=er&&"CompositionEvent"in window,ea=null;er&&"documentMode"in document&&(ea=document.documentMode);var bR=er&&"TextEvent"in window&&!ea,fE=er&&(!qp||ea&&8<ea&&11>=ea),wy=" ",Ey=!1;function pE(t,e){switch(t){case"keyup":return RR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var li=!1;function AR(t,e){switch(t){case"compositionend":return mE(e);case"keypress":return e.which!==32?null:(Ey=!0,wy);case"textInput":return t=e.data,t===wy&&Ey?null:t;default:return null}}function NR(t,e){if(li)return t==="compositionend"||!qp&&pE(t,e)?(t=dE(),fu=Bp=br=null,li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fE&&e.locale!=="ko"?null:e.data;default:return null}}var PR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!PR[t.type]:e==="textarea"}function gE(t,e,n,r){Gw(r),e=ju(e,"onChange"),0<e.length&&(n=new Wp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ta=null,Ta=null;function DR(t){kE(t,0)}function Fc(t){var e=hi(t);if(Uw(e))return t}function OR(t,e){if(t==="change")return e}var _E=!1;if(er){var ld;if(er){var ud="oninput"in document;if(!ud){var Ty=document.createElement("div");Ty.setAttribute("oninput","return;"),ud=typeof Ty.oninput=="function"}ld=ud}else ld=!1;_E=ld&&(!document.documentMode||9<document.documentMode)}function Iy(){ta&&(ta.detachEvent("onpropertychange",yE),Ta=ta=null)}function yE(t){if(t.propertyName==="value"&&Fc(Ta)){var e=[];gE(e,Ta,t,Vp(t)),Xw(DR,e)}}function LR(t,e,n){t==="focusin"?(Iy(),ta=e,Ta=n,ta.attachEvent("onpropertychange",yE)):t==="focusout"&&Iy()}function MR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fc(Ta)}function VR(t,e){if(t==="click")return Fc(e)}function FR(t,e){if(t==="input"||t==="change")return Fc(e)}function jR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var wn=typeof Object.is=="function"?Object.is:jR;function Ia(t,e){if(wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!qd.call(e,s)||!wn(t[s],e[s]))return!1}return!0}function Cy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sy(t,e){var n=Cy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cy(n)}}function vE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wE(){for(var t=window,e=Pu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pu(t.document)}return e}function Hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function UR(t){var e=wE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vE(n.ownerDocument.documentElement,n)){if(r!==null&&Hp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Sy(n,i);var o=Sy(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var zR=er&&"documentMode"in document&&11>=document.documentMode,ui=null,hf=null,na=null,df=!1;function ky(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;df||ui==null||ui!==Pu(r)||(r=ui,"selectionStart"in r&&Hp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),na&&Ia(na,r)||(na=r,r=ju(hf,"onSelect"),0<r.length&&(e=new Wp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ui)))}function Kl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ci={animationend:Kl("Animation","AnimationEnd"),animationiteration:Kl("Animation","AnimationIteration"),animationstart:Kl("Animation","AnimationStart"),transitionend:Kl("Transition","TransitionEnd")},cd={},EE={};er&&(EE=document.createElement("div").style,"AnimationEvent"in window||(delete ci.animationend.animation,delete ci.animationiteration.animation,delete ci.animationstart.animation),"TransitionEvent"in window||delete ci.transitionend.transition);function jc(t){if(cd[t])return cd[t];if(!ci[t])return t;var e=ci[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in EE)return cd[t]=e[n];return t}var xE=jc("animationend"),TE=jc("animationiteration"),IE=jc("animationstart"),CE=jc("transitionend"),SE=new Map,Ry="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ts(t,e){SE.set(t,e),Ws(e,[t])}for(var hd=0;hd<Ry.length;hd++){var dd=Ry[hd],BR=dd.toLowerCase(),WR=dd[0].toUpperCase()+dd.slice(1);ts(BR,"on"+WR)}ts(xE,"onAnimationEnd");ts(TE,"onAnimationIteration");ts(IE,"onAnimationStart");ts("dblclick","onDoubleClick");ts("focusin","onFocus");ts("focusout","onBlur");ts(CE,"onTransitionEnd");Di("onMouseEnter",["mouseout","mouseover"]);Di("onMouseLeave",["mouseout","mouseover"]);Di("onPointerEnter",["pointerout","pointerover"]);Di("onPointerLeave",["pointerout","pointerover"]);Ws("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ws("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ws("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ws("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ws("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$R=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function by(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Bk(r,e,void 0,t),t.currentTarget=null}function kE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;by(s,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;by(s,a,c),i=u}}}if(Ou)throw t=af,Ou=!1,af=null,t}function Ie(t,e){var n=e[_f];n===void 0&&(n=e[_f]=new Set);var r=t+"__bubble";n.has(r)||(RE(e,t,2,!1),n.add(r))}function fd(t,e,n){var r=0;e&&(r|=4),RE(n,t,r,e)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[Ql]){t[Ql]=!0,Lw.forEach(function(n){n!=="selectionchange"&&($R.has(n)||fd(n,!1,t),fd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ql]||(e[Ql]=!0,fd("selectionchange",!1,e))}}function RE(t,e,n,r){switch(hE(e)){case 1:var s=sR;break;case 4:s=iR;break;default:s=zp}n=s.bind(null,e,n,t),s=void 0,!of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function pd(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=vs(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}Xw(function(){var c=i,d=Vp(n),f=[];e:{var g=SE.get(t);if(g!==void 0){var w=Wp,T=t;switch(t){case"keypress":if(pu(n)===0)break e;case"keydown":case"keyup":w=wR;break;case"focusin":T="focus",w=ad;break;case"focusout":T="blur",w=ad;break;case"beforeblur":case"afterblur":w=ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=_y;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=lR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=TR;break;case xE:case TE:case IE:w=hR;break;case CE:w=CR;break;case"scroll":w=oR;break;case"wheel":w=kR;break;case"copy":case"cut":case"paste":w=fR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=vy}var R=(e&4)!==0,N=!R&&t==="scroll",x=R?g!==null?g+"Capture":null:g;R=[];for(var E=c,C;E!==null;){C=E;var A=C.stateNode;if(C.tag===5&&A!==null&&(C=A,x!==null&&(A=va(E,x),A!=null&&R.push(Sa(E,A,C)))),N)break;E=E.return}0<R.length&&(g=new w(g,T,null,n,d),f.push({event:g,listeners:R}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",w=t==="mouseout"||t==="pointerout",g&&n!==rf&&(T=n.relatedTarget||n.fromElement)&&(vs(T)||T[tr]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(T=n.relatedTarget||n.toElement,w=c,T=T?vs(T):null,T!==null&&(N=$s(T),T!==N||T.tag!==5&&T.tag!==6)&&(T=null)):(w=null,T=c),w!==T)){if(R=_y,A="onMouseLeave",x="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(R=vy,A="onPointerLeave",x="onPointerEnter",E="pointer"),N=w==null?g:hi(w),C=T==null?g:hi(T),g=new R(A,E+"leave",w,n,d),g.target=N,g.relatedTarget=C,A=null,vs(d)===c&&(R=new R(x,E+"enter",T,n,d),R.target=C,R.relatedTarget=N,A=R),N=A,w&&T)t:{for(R=w,x=T,E=0,C=R;C;C=ei(C))E++;for(C=0,A=x;A;A=ei(A))C++;for(;0<E-C;)R=ei(R),E--;for(;0<C-E;)x=ei(x),C--;for(;E--;){if(R===x||x!==null&&R===x.alternate)break t;R=ei(R),x=ei(x)}R=null}else R=null;w!==null&&Ay(f,g,w,R,!1),T!==null&&N!==null&&Ay(f,N,T,R,!0)}}e:{if(g=c?hi(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var O=OR;else if(xy(g))if(_E)O=FR;else{O=MR;var V=LR}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(O=VR);if(O&&(O=O(t,c))){gE(f,O,n,d);break e}V&&V(t,g,c),t==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&Jd(g,"number",g.value)}switch(V=c?hi(c):window,t){case"focusin":(xy(V)||V.contentEditable==="true")&&(ui=V,hf=c,na=null);break;case"focusout":na=hf=ui=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,ky(f,n,d);break;case"selectionchange":if(zR)break;case"keydown":case"keyup":ky(f,n,d)}var v;if(qp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else li?pE(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(fE&&n.locale!=="ko"&&(li||_!=="onCompositionStart"?_==="onCompositionEnd"&&li&&(v=dE()):(br=d,Bp="value"in br?br.value:br.textContent,li=!0)),V=ju(c,_),0<V.length&&(_=new yy(_,t,null,n,d),f.push({event:_,listeners:V}),v?_.data=v:(v=mE(n),v!==null&&(_.data=v)))),(v=bR?AR(t,n):NR(t,n))&&(c=ju(c,"onBeforeInput"),0<c.length&&(d=new yy("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=v))}kE(f,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ju(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=va(t,n),i!=null&&r.unshift(Sa(t,i,s)),i=va(t,e),i!=null&&r.push(Sa(t,i,s))),t=t.return}return r}function ei(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ay(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,s?(u=va(n,i),u!=null&&o.unshift(Sa(n,u,a))):s||(u=va(n,i),u!=null&&o.push(Sa(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qR=/\r\n?/g,HR=/\u0000|\uFFFD/g;function Ny(t){return(typeof t=="string"?t:""+t).replace(qR,`
`).replace(HR,"")}function Yl(t,e,n){if(e=Ny(e),Ny(t)!==e&&n)throw Error(z(425))}function Uu(){}var ff=null,pf=null;function mf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gf=typeof setTimeout=="function"?setTimeout:void 0,GR=typeof clearTimeout=="function"?clearTimeout:void 0,Py=typeof Promise=="function"?Promise:void 0,KR=typeof queueMicrotask=="function"?queueMicrotask:typeof Py<"u"?function(t){return Py.resolve(null).then(t).catch(QR)}:gf;function QR(t){setTimeout(function(){throw t})}function md(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),xa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);xa(e)}function Mr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var eo=Math.random().toString(36).slice(2),Cn="__reactFiber$"+eo,ka="__reactProps$"+eo,tr="__reactContainer$"+eo,_f="__reactEvents$"+eo,YR="__reactListeners$"+eo,XR="__reactHandles$"+eo;function vs(t){var e=t[Cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[tr]||n[Cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dy(t);t!==null;){if(n=t[Cn])return n;t=Dy(t)}return e}t=n,n=t.parentNode}return null}function sl(t){return t=t[Cn]||t[tr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Uc(t){return t[ka]||null}var yf=[],di=-1;function ns(t){return{current:t}}function ke(t){0>di||(t.current=yf[di],yf[di]=null,di--)}function xe(t,e){di++,yf[di]=t.current,t.current=e}var Kr={},wt=ns(Kr),Vt=ns(!1),Rs=Kr;function Oi(t,e){var n=t.type.contextTypes;if(!n)return Kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ft(t){return t=t.childContextTypes,t!=null}function zu(){ke(Vt),ke(wt)}function Oy(t,e,n){if(wt.current!==Kr)throw Error(z(168));xe(wt,e),xe(Vt,n)}function bE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,Lk(t)||"Unknown",s));return Oe({},n,r)}function Bu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kr,Rs=wt.current,xe(wt,t),xe(Vt,Vt.current),!0}function Ly(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=bE(t,e,Rs),r.__reactInternalMemoizedMergedChildContext=t,ke(Vt),ke(wt),xe(wt,t)):ke(Vt),xe(Vt,n)}var Bn=null,zc=!1,gd=!1;function AE(t){Bn===null?Bn=[t]:Bn.push(t)}function JR(t){zc=!0,AE(t)}function rs(){if(!gd&&Bn!==null){gd=!0;var t=0,e=ge;try{var n=Bn;for(ge=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,zc=!1}catch(s){throw Bn!==null&&(Bn=Bn.slice(t+1)),tE(Fp,rs),s}finally{ge=e,gd=!1}}return null}var fi=[],pi=0,Wu=null,$u=0,Jt=[],Zt=0,bs=null,Wn=1,$n="";function ms(t,e){fi[pi++]=$u,fi[pi++]=Wu,Wu=t,$u=e}function NE(t,e,n){Jt[Zt++]=Wn,Jt[Zt++]=$n,Jt[Zt++]=bs,bs=t;var r=Wn;t=$n;var s=32-mn(r)-1;r&=~(1<<s),n+=1;var i=32-mn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Wn=1<<32-mn(e)+s|n<<s|r,$n=i+t}else Wn=1<<i|n<<s|r,$n=t}function Gp(t){t.return!==null&&(ms(t,1),NE(t,1,0))}function Kp(t){for(;t===Wu;)Wu=fi[--pi],fi[pi]=null,$u=fi[--pi],fi[pi]=null;for(;t===bs;)bs=Jt[--Zt],Jt[Zt]=null,$n=Jt[--Zt],Jt[Zt]=null,Wn=Jt[--Zt],Jt[Zt]=null}var Ht=null,$t=null,be=!1,hn=null;function PE(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function My(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,$t=Mr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,$t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=bs!==null?{id:Wn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,$t=null,!0):!1;default:return!1}}function vf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wf(t){if(be){var e=$t;if(e){var n=e;if(!My(t,e)){if(vf(t))throw Error(z(418));e=Mr(n.nextSibling);var r=Ht;e&&My(t,e)?PE(r,n):(t.flags=t.flags&-4097|2,be=!1,Ht=t)}}else{if(vf(t))throw Error(z(418));t.flags=t.flags&-4097|2,be=!1,Ht=t}}}function Vy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function Xl(t){if(t!==Ht)return!1;if(!be)return Vy(t),be=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mf(t.type,t.memoizedProps)),e&&(e=$t)){if(vf(t))throw DE(),Error(z(418));for(;e;)PE(t,e),e=Mr(e.nextSibling)}if(Vy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$t=Mr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$t=null}}else $t=Ht?Mr(t.stateNode.nextSibling):null;return!0}function DE(){for(var t=$t;t;)t=Mr(t.nextSibling)}function Li(){$t=Ht=null,be=!1}function Qp(t){hn===null?hn=[t]:hn.push(t)}var ZR=cr.ReactCurrentBatchConfig;function Oo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Jl(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fy(t){var e=t._init;return e(t._payload)}function OE(t){function e(x,E){if(t){var C=x.deletions;C===null?(x.deletions=[E],x.flags|=16):C.push(E)}}function n(x,E){if(!t)return null;for(;E!==null;)e(x,E),E=E.sibling;return null}function r(x,E){for(x=new Map;E!==null;)E.key!==null?x.set(E.key,E):x.set(E.index,E),E=E.sibling;return x}function s(x,E){return x=Ur(x,E),x.index=0,x.sibling=null,x}function i(x,E,C){return x.index=C,t?(C=x.alternate,C!==null?(C=C.index,C<E?(x.flags|=2,E):C):(x.flags|=2,E)):(x.flags|=1048576,E)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function a(x,E,C,A){return E===null||E.tag!==6?(E=Td(C,x.mode,A),E.return=x,E):(E=s(E,C),E.return=x,E)}function u(x,E,C,A){var O=C.type;return O===ai?d(x,E,C.props.children,A,C.key):E!==null&&(E.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Er&&Fy(O)===E.type)?(A=s(E,C.props),A.ref=Oo(x,E,C),A.return=x,A):(A=Eu(C.type,C.key,C.props,null,x.mode,A),A.ref=Oo(x,E,C),A.return=x,A)}function c(x,E,C,A){return E===null||E.tag!==4||E.stateNode.containerInfo!==C.containerInfo||E.stateNode.implementation!==C.implementation?(E=Id(C,x.mode,A),E.return=x,E):(E=s(E,C.children||[]),E.return=x,E)}function d(x,E,C,A,O){return E===null||E.tag!==7?(E=Ss(C,x.mode,A,O),E.return=x,E):(E=s(E,C),E.return=x,E)}function f(x,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Td(""+E,x.mode,C),E.return=x,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case zl:return C=Eu(E.type,E.key,E.props,null,x.mode,C),C.ref=Oo(x,null,E),C.return=x,C;case oi:return E=Id(E,x.mode,C),E.return=x,E;case Er:var A=E._init;return f(x,A(E._payload),C)}if(Wo(E)||bo(E))return E=Ss(E,x.mode,C,null),E.return=x,E;Jl(x,E)}return null}function g(x,E,C,A){var O=E!==null?E.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return O!==null?null:a(x,E,""+C,A);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case zl:return C.key===O?u(x,E,C,A):null;case oi:return C.key===O?c(x,E,C,A):null;case Er:return O=C._init,g(x,E,O(C._payload),A)}if(Wo(C)||bo(C))return O!==null?null:d(x,E,C,A,null);Jl(x,C)}return null}function w(x,E,C,A,O){if(typeof A=="string"&&A!==""||typeof A=="number")return x=x.get(C)||null,a(E,x,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case zl:return x=x.get(A.key===null?C:A.key)||null,u(E,x,A,O);case oi:return x=x.get(A.key===null?C:A.key)||null,c(E,x,A,O);case Er:var V=A._init;return w(x,E,C,V(A._payload),O)}if(Wo(A)||bo(A))return x=x.get(C)||null,d(E,x,A,O,null);Jl(E,A)}return null}function T(x,E,C,A){for(var O=null,V=null,v=E,_=E=0,I=null;v!==null&&_<C.length;_++){v.index>_?(I=v,v=null):I=v.sibling;var S=g(x,v,C[_],A);if(S===null){v===null&&(v=I);break}t&&v&&S.alternate===null&&e(x,v),E=i(S,E,_),V===null?O=S:V.sibling=S,V=S,v=I}if(_===C.length)return n(x,v),be&&ms(x,_),O;if(v===null){for(;_<C.length;_++)v=f(x,C[_],A),v!==null&&(E=i(v,E,_),V===null?O=v:V.sibling=v,V=v);return be&&ms(x,_),O}for(v=r(x,v);_<C.length;_++)I=w(v,x,_,C[_],A),I!==null&&(t&&I.alternate!==null&&v.delete(I.key===null?_:I.key),E=i(I,E,_),V===null?O=I:V.sibling=I,V=I);return t&&v.forEach(function(b){return e(x,b)}),be&&ms(x,_),O}function R(x,E,C,A){var O=bo(C);if(typeof O!="function")throw Error(z(150));if(C=O.call(C),C==null)throw Error(z(151));for(var V=O=null,v=E,_=E=0,I=null,S=C.next();v!==null&&!S.done;_++,S=C.next()){v.index>_?(I=v,v=null):I=v.sibling;var b=g(x,v,S.value,A);if(b===null){v===null&&(v=I);break}t&&v&&b.alternate===null&&e(x,v),E=i(b,E,_),V===null?O=b:V.sibling=b,V=b,v=I}if(S.done)return n(x,v),be&&ms(x,_),O;if(v===null){for(;!S.done;_++,S=C.next())S=f(x,S.value,A),S!==null&&(E=i(S,E,_),V===null?O=S:V.sibling=S,V=S);return be&&ms(x,_),O}for(v=r(x,v);!S.done;_++,S=C.next())S=w(v,x,_,S.value,A),S!==null&&(t&&S.alternate!==null&&v.delete(S.key===null?_:S.key),E=i(S,E,_),V===null?O=S:V.sibling=S,V=S);return t&&v.forEach(function(P){return e(x,P)}),be&&ms(x,_),O}function N(x,E,C,A){if(typeof C=="object"&&C!==null&&C.type===ai&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case zl:e:{for(var O=C.key,V=E;V!==null;){if(V.key===O){if(O=C.type,O===ai){if(V.tag===7){n(x,V.sibling),E=s(V,C.props.children),E.return=x,x=E;break e}}else if(V.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Er&&Fy(O)===V.type){n(x,V.sibling),E=s(V,C.props),E.ref=Oo(x,V,C),E.return=x,x=E;break e}n(x,V);break}else e(x,V);V=V.sibling}C.type===ai?(E=Ss(C.props.children,x.mode,A,C.key),E.return=x,x=E):(A=Eu(C.type,C.key,C.props,null,x.mode,A),A.ref=Oo(x,E,C),A.return=x,x=A)}return o(x);case oi:e:{for(V=C.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===C.containerInfo&&E.stateNode.implementation===C.implementation){n(x,E.sibling),E=s(E,C.children||[]),E.return=x,x=E;break e}else{n(x,E);break}else e(x,E);E=E.sibling}E=Id(C,x.mode,A),E.return=x,x=E}return o(x);case Er:return V=C._init,N(x,E,V(C._payload),A)}if(Wo(C))return T(x,E,C,A);if(bo(C))return R(x,E,C,A);Jl(x,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,E!==null&&E.tag===6?(n(x,E.sibling),E=s(E,C),E.return=x,x=E):(n(x,E),E=Td(C,x.mode,A),E.return=x,x=E),o(x)):n(x,E)}return N}var Mi=OE(!0),LE=OE(!1),qu=ns(null),Hu=null,mi=null,Yp=null;function Xp(){Yp=mi=Hu=null}function Jp(t){var e=qu.current;ke(qu),t._currentValue=e}function Ef(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ii(t,e){Hu=t,Yp=mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ot=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(Yp!==t)if(t={context:t,memoizedValue:e,next:null},mi===null){if(Hu===null)throw Error(z(308));mi=t,Hu.dependencies={lanes:0,firstContext:t}}else mi=mi.next=t;return e}var ws=null;function Zp(t){ws===null?ws=[t]:ws.push(t)}function ME(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Zp(e)):(n.next=s.next,s.next=n),e.interleaved=n,nr(t,r)}function nr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function em(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function VE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,nr(t,n)}return s=r.interleaved,s===null?(e.next=e,Zp(r)):(e.next=s.next,s.next=e),r.interleaved=e,nr(t,n)}function mu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jp(t,n)}}function jy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Gu(t,e,n,r){var s=t.updateQueue;xr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=s.baseState;o=0,d=c=u=null,a=i;do{var g=a.lane,w=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,R=a;switch(g=e,w=n,R.tag){case 1:if(T=R.payload,typeof T=="function"){f=T.call(w,f,g);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=R.payload,g=typeof T=="function"?T.call(w,f,g):T,g==null)break e;f=Oe({},f,g);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=w,u=f):d=d.next=w,o|=g;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;g=a,a=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(d===null&&(u=f),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ns|=o,t.lanes=o,t.memoizedState=f}}function Uy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var il={},Rn=ns(il),Ra=ns(il),ba=ns(il);function Es(t){if(t===il)throw Error(z(174));return t}function tm(t,e){switch(xe(ba,e),xe(Ra,t),xe(Rn,il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ef(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ef(e,t)}ke(Rn),xe(Rn,e)}function Vi(){ke(Rn),ke(Ra),ke(ba)}function FE(t){Es(ba.current);var e=Es(Rn.current),n=ef(e,t.type);e!==n&&(xe(Ra,t),xe(Rn,n))}function nm(t){Ra.current===t&&(ke(Rn),ke(Ra))}var Pe=ns(0);function Ku(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _d=[];function rm(){for(var t=0;t<_d.length;t++)_d[t]._workInProgressVersionPrimary=null;_d.length=0}var gu=cr.ReactCurrentDispatcher,yd=cr.ReactCurrentBatchConfig,As=0,De=null,He=null,Je=null,Qu=!1,ra=!1,Aa=0,eb=0;function ft(){throw Error(z(321))}function sm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!wn(t[n],e[n]))return!1;return!0}function im(t,e,n,r,s,i){if(As=i,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gu.current=t===null||t.memoizedState===null?sb:ib,t=n(r,s),ra){i=0;do{if(ra=!1,Aa=0,25<=i)throw Error(z(301));i+=1,Je=He=null,e.updateQueue=null,gu.current=ob,t=n(r,s)}while(ra)}if(gu.current=Yu,e=He!==null&&He.next!==null,As=0,Je=He=De=null,Qu=!1,e)throw Error(z(300));return t}function om(){var t=Aa!==0;return Aa=0,t}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?De.memoizedState=Je=t:Je=Je.next=t,Je}function sn(){if(He===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Je===null?De.memoizedState:Je.next;if(e!==null)Je=e,He=t;else{if(t===null)throw Error(z(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Je===null?De.memoizedState=Je=t:Je=Je.next=t}return Je}function Na(t,e){return typeof e=="function"?e(t):e}function vd(t){var e=sn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=He,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,c=i;do{var d=c.lane;if((As&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,De.lanes|=d,Ns|=d}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,wn(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,De.lanes|=i,Ns|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wd(t){var e=sn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);wn(i,e.memoizedState)||(Ot=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function jE(){}function UE(t,e){var n=De,r=sn(),s=e(),i=!wn(r.memoizedState,s);if(i&&(r.memoizedState=s,Ot=!0),r=r.queue,am(WE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Je!==null&&Je.memoizedState.tag&1){if(n.flags|=2048,Pa(9,BE.bind(null,n,r,s,e),void 0,null),tt===null)throw Error(z(349));As&30||zE(n,e,s)}return s}function zE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function BE(t,e,n,r){e.value=n,e.getSnapshot=r,$E(e)&&qE(t)}function WE(t,e,n){return n(function(){$E(e)&&qE(t)})}function $E(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!wn(t,n)}catch{return!0}}function qE(t){var e=nr(t,1);e!==null&&gn(e,t,1,-1)}function zy(t){var e=In();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e.queue=t,t=t.dispatch=rb.bind(null,De,t),[e.memoizedState,t]}function Pa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function HE(){return sn().memoizedState}function _u(t,e,n,r){var s=In();De.flags|=t,s.memoizedState=Pa(1|e,n,void 0,r===void 0?null:r)}function Bc(t,e,n,r){var s=sn();r=r===void 0?null:r;var i=void 0;if(He!==null){var o=He.memoizedState;if(i=o.destroy,r!==null&&sm(r,o.deps)){s.memoizedState=Pa(e,n,i,r);return}}De.flags|=t,s.memoizedState=Pa(1|e,n,i,r)}function By(t,e){return _u(8390656,8,t,e)}function am(t,e){return Bc(2048,8,t,e)}function GE(t,e){return Bc(4,2,t,e)}function KE(t,e){return Bc(4,4,t,e)}function QE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function YE(t,e,n){return n=n!=null?n.concat([t]):null,Bc(4,4,QE.bind(null,e,t),n)}function lm(){}function XE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function JE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ZE(t,e,n){return As&21?(wn(n,e)||(n=sE(),De.lanes|=n,Ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n)}function tb(t,e){var n=ge;ge=n!==0&&4>n?n:4,t(!0);var r=yd.transition;yd.transition={};try{t(!1),e()}finally{ge=n,yd.transition=r}}function ex(){return sn().memoizedState}function nb(t,e,n){var r=jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tx(t))nx(e,n);else if(n=ME(t,e,n,r),n!==null){var s=St();gn(n,t,r,s),rx(n,e,r)}}function rb(t,e,n){var r=jr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tx(t))nx(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,wn(a,o)){var u=e.interleaved;u===null?(s.next=s,Zp(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=ME(t,e,s,r),n!==null&&(s=St(),gn(n,t,r,s),rx(n,e,r))}}function tx(t){var e=t.alternate;return t===De||e!==null&&e===De}function nx(t,e){ra=Qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function rx(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jp(t,n)}}var Yu={readContext:rn,useCallback:ft,useContext:ft,useEffect:ft,useImperativeHandle:ft,useInsertionEffect:ft,useLayoutEffect:ft,useMemo:ft,useReducer:ft,useRef:ft,useState:ft,useDebugValue:ft,useDeferredValue:ft,useTransition:ft,useMutableSource:ft,useSyncExternalStore:ft,useId:ft,unstable_isNewReconciler:!1},sb={readContext:rn,useCallback:function(t,e){return In().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:By,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_u(4194308,4,QE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _u(4194308,4,t,e)},useInsertionEffect:function(t,e){return _u(4,2,t,e)},useMemo:function(t,e){var n=In();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=In();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=nb.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=In();return t={current:t},e.memoizedState=t},useState:zy,useDebugValue:lm,useDeferredValue:function(t){return In().memoizedState=t},useTransition:function(){var t=zy(!1),e=t[0];return t=tb.bind(null,t[1]),In().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,s=In();if(be){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),tt===null)throw Error(z(349));As&30||zE(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,By(WE.bind(null,r,i,t),[t]),r.flags|=2048,Pa(9,BE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=In(),e=tt.identifierPrefix;if(be){var n=$n,r=Wn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ib={readContext:rn,useCallback:XE,useContext:rn,useEffect:am,useImperativeHandle:YE,useInsertionEffect:GE,useLayoutEffect:KE,useMemo:JE,useReducer:vd,useRef:HE,useState:function(){return vd(Na)},useDebugValue:lm,useDeferredValue:function(t){var e=sn();return ZE(e,He.memoizedState,t)},useTransition:function(){var t=vd(Na)[0],e=sn().memoizedState;return[t,e]},useMutableSource:jE,useSyncExternalStore:UE,useId:ex,unstable_isNewReconciler:!1},ob={readContext:rn,useCallback:XE,useContext:rn,useEffect:am,useImperativeHandle:YE,useInsertionEffect:GE,useLayoutEffect:KE,useMemo:JE,useReducer:wd,useRef:HE,useState:function(){return wd(Na)},useDebugValue:lm,useDeferredValue:function(t){var e=sn();return He===null?e.memoizedState=t:ZE(e,He.memoizedState,t)},useTransition:function(){var t=wd(Na)[0],e=sn().memoizedState;return[t,e]},useMutableSource:jE,useSyncExternalStore:UE,useId:ex,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=Oe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Oe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wc={isMounted:function(t){return(t=t._reactInternals)?$s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=St(),s=jr(t),i=Yn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Vr(t,i,s),e!==null&&(gn(e,t,s,r),mu(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=St(),s=jr(t),i=Yn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Vr(t,i,s),e!==null&&(gn(e,t,s,r),mu(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=St(),r=jr(t),s=Yn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Vr(t,s,r),e!==null&&(gn(e,t,r,n),mu(e,t,r))}};function Wy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ia(n,r)||!Ia(s,i):!0}function sx(t,e,n){var r=!1,s=Kr,i=e.contextType;return typeof i=="object"&&i!==null?i=rn(i):(s=Ft(e)?Rs:wt.current,r=e.contextTypes,i=(r=r!=null)?Oi(t,s):Kr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function $y(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wc.enqueueReplaceState(e,e.state,null)}function Tf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},em(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=rn(i):(i=Ft(e)?Rs:wt.current,s.context=Oi(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(xf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Wc.enqueueReplaceState(s,s.state,null),Gu(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Fi(t,e){try{var n="",r=e;do n+=Ok(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Ed(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function If(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ab=typeof WeakMap=="function"?WeakMap:Map;function ix(t,e,n){n=Yn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ju||(Ju=!0,Of=r),If(t,e)},n}function ox(t,e,n){n=Yn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){If(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){If(t,e),typeof r!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ab;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Eb.bind(null,t,e,n),e.then(t,t))}function Hy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gy(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yn(-1,1),e.tag=2,Vr(n,e,1))),n.lanes|=1),t)}var lb=cr.ReactCurrentOwner,Ot=!1;function It(t,e,n,r){e.child=t===null?LE(e,null,n,r):Mi(e,t.child,n,r)}function Ky(t,e,n,r,s){n=n.render;var i=e.ref;return Ii(e,s),r=im(t,e,n,r,i,s),n=om(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rr(t,e,s)):(be&&n&&Gp(e),e.flags|=1,It(t,e,r,s),e.child)}function Qy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!gm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,ax(t,e,i,r,s)):(t=Eu(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ia,n(o,r)&&t.ref===e.ref)return rr(t,e,s)}return e.flags|=1,t=Ur(i,r),t.ref=e.ref,t.return=e,e.child=t}function ax(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ia(i,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ot=!0);else return e.lanes=t.lanes,rr(t,e,s)}return Cf(t,e,n,r,s)}function lx(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(_i,Wt),Wt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(_i,Wt),Wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,xe(_i,Wt),Wt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,xe(_i,Wt),Wt|=r;return It(t,e,s,n),e.child}function ux(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cf(t,e,n,r,s){var i=Ft(n)?Rs:wt.current;return i=Oi(e,i),Ii(e,s),n=im(t,e,n,r,i,s),r=om(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,rr(t,e,s)):(be&&r&&Gp(e),e.flags|=1,It(t,e,n,s),e.child)}function Yy(t,e,n,r,s){if(Ft(n)){var i=!0;Bu(e)}else i=!1;if(Ii(e,s),e.stateNode===null)yu(t,e),sx(e,n,r),Tf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=Ft(n)?Rs:wt.current,c=Oi(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&$y(e,o,r,c),xr=!1;var g=e.memoizedState;o.state=g,Gu(e,r,o,s),u=e.memoizedState,a!==r||g!==u||Vt.current||xr?(typeof d=="function"&&(xf(e,n,d,r),u=e.memoizedState),(a=xr||Wy(e,n,a,r,g,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,VE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ln(e.type,a),o.props=c,f=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Ft(n)?Rs:wt.current,u=Oi(e,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==u)&&$y(e,o,r,u),xr=!1,g=e.memoizedState,o.state=g,Gu(e,r,o,s);var T=e.memoizedState;a!==f||g!==T||Vt.current||xr?(typeof w=="function"&&(xf(e,n,w,r),T=e.memoizedState),(c=xr||Wy(e,n,c,r,g,T,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Sf(t,e,n,r,i,s)}function Sf(t,e,n,r,s,i){ux(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Ly(e,n,!1),rr(t,e,i);r=e.stateNode,lb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mi(e,t.child,null,i),e.child=Mi(e,null,a,i)):It(t,e,a,i),e.memoizedState=r.state,s&&Ly(e,n,!0),e.child}function cx(t){var e=t.stateNode;e.pendingContext?Oy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Oy(t,e.context,!1),tm(t,e.containerInfo)}function Xy(t,e,n,r,s){return Li(),Qp(s),e.flags|=256,It(t,e,n,r),e.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function Rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function hx(t,e,n){var r=e.pendingProps,s=Pe.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),xe(Pe,s&1),t===null)return wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Hc(o,r,0,null),t=Ss(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Rf(n),e.memoizedState=kf,t):um(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return ub(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ur(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Ur(a,i):(i=Ss(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=kf,r}return i=t.child,t=i.sibling,r=Ur(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function um(t,e){return e=Hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Zl(t,e,n,r){return r!==null&&Qp(r),Mi(e,t.child,null,n),t=um(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ub(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Ed(Error(z(422))),Zl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Hc({mode:"visible",children:r.children},s,0,null),i=Ss(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Mi(e,t.child,null,o),e.child.memoizedState=Rf(o),e.memoizedState=kf,i);if(!(e.mode&1))return Zl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=Ed(i,r,void 0),Zl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ot||a){if(r=tt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,nr(t,s),gn(r,t,s,-1))}return mm(),r=Ed(Error(z(421))),Zl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=xb.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,$t=Mr(s.nextSibling),Ht=e,be=!0,hn=null,t!==null&&(Jt[Zt++]=Wn,Jt[Zt++]=$n,Jt[Zt++]=bs,Wn=t.id,$n=t.overflow,bs=e),e=um(e,r.children),e.flags|=4096,e)}function Jy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ef(t.return,e,n)}function xd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function dx(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(It(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jy(t,n,e);else if(t.tag===19)Jy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Ku(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),xd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Ku(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}xd(e,!0,n,null,i);break;case"together":xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function rr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function cb(t,e,n){switch(e.tag){case 3:cx(e),Li();break;case 5:FE(e);break;case 1:Ft(e.type)&&Bu(e);break;case 4:tm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;xe(qu,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?hx(t,e,n):(xe(Pe,Pe.current&1),t=rr(t,e,n),t!==null?t.sibling:null);xe(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return dx(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xe(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,lx(t,e,n)}return rr(t,e,n)}var fx,bf,px,mx;fx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bf=function(){};px=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Es(Rn.current);var i=null;switch(n){case"input":s=Yd(t,s),r=Yd(t,r),i=[];break;case"select":s=Oe({},s,{value:void 0}),r=Oe({},r,{value:void 0}),i=[];break;case"textarea":s=Zd(t,s),r=Zd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Uu)}tf(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_a.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_a.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Ie("scroll",t),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};mx=function(t,e,n,r){n!==r&&(e.flags|=4)};function Lo(t,e){if(!be)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function hb(t,e,n){var r=e.pendingProps;switch(Kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(e),null;case 1:return Ft(e.type)&&zu(),pt(e),null;case 3:return r=e.stateNode,Vi(),ke(Vt),ke(wt),rm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(Vf(hn),hn=null))),bf(t,e),pt(e),null;case 5:nm(e);var s=Es(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)px(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return pt(e),null}if(t=Es(Rn.current),Xl(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Cn]=e,r[ka]=i,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(s=0;s<qo.length;s++)Ie(qo[s],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":ay(r,i),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ie("invalid",r);break;case"textarea":uy(r,i),Ie("invalid",r)}tf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Yl(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Yl(r.textContent,a,t),s=["children",""+a]):_a.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Bl(r),ly(r,i,!0);break;case"textarea":Bl(r),cy(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Uu)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ww(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Cn]=e,t[ka]=r,fx(t,e,!1,!1),e.stateNode=t;e:{switch(o=nf(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),s=r;break;case"iframe":case"object":case"embed":Ie("load",t),s=r;break;case"video":case"audio":for(s=0;s<qo.length;s++)Ie(qo[s],t);s=r;break;case"source":Ie("error",t),s=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),s=r;break;case"details":Ie("toggle",t),s=r;break;case"input":ay(t,r),s=Yd(t,r),Ie("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Oe({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":uy(t,r),s=Zd(t,r),Ie("invalid",t);break;default:s=r}tf(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?Hw(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$w(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&ya(t,u):typeof u=="number"&&ya(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(_a.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ie("scroll",t):u!=null&&Dp(t,i,u,o))}switch(n){case"input":Bl(t),ly(t,r,!1);break;case"textarea":Bl(t),cy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?wi(t,!!r.multiple,i,!1):r.defaultValue!=null&&wi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Uu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pt(e),null;case 6:if(t&&e.stateNode!=null)mx(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Es(ba.current),Es(Rn.current),Xl(e)){if(r=e.stateNode,n=e.memoizedProps,r[Cn]=e,(i=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:Yl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Yl(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Cn]=e,e.stateNode=r}return pt(e),null;case 13:if(ke(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(be&&$t!==null&&e.mode&1&&!(e.flags&128))DE(),Li(),e.flags|=98560,i=!1;else if(i=Xl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[Cn]=e}else Li(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pt(e),i=!1}else hn!==null&&(Vf(hn),hn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ke===0&&(Ke=3):mm())),e.updateQueue!==null&&(e.flags|=4),pt(e),null);case 4:return Vi(),bf(t,e),t===null&&Ca(e.stateNode.containerInfo),pt(e),null;case 10:return Jp(e.type._context),pt(e),null;case 17:return Ft(e.type)&&zu(),pt(e),null;case 19:if(ke(Pe),i=e.memoizedState,i===null)return pt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Lo(i,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ku(t),o!==null){for(e.flags|=128,Lo(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(Pe,Pe.current&1|2),e.child}t=t.sibling}i.tail!==null&&je()>ji&&(e.flags|=128,r=!0,Lo(i,!1),e.lanes=4194304)}else{if(!r)if(t=Ku(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!be)return pt(e),null}else 2*je()-i.renderingStartTime>ji&&n!==1073741824&&(e.flags|=128,r=!0,Lo(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=je(),e.sibling=null,n=Pe.current,xe(Pe,r?n&1|2:n&1),e):(pt(e),null);case 22:case 23:return pm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Wt&1073741824&&(pt(e),e.subtreeFlags&6&&(e.flags|=8192)):pt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function db(t,e){switch(Kp(e),e.tag){case 1:return Ft(e.type)&&zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vi(),ke(Vt),ke(wt),rm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nm(e),null;case 13:if(ke(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));Li()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Pe),null;case 4:return Vi(),null;case 10:return Jp(e.type._context),null;case 22:case 23:return pm(),null;case 24:return null;default:return null}}var eu=!1,_t=!1,fb=typeof WeakSet=="function"?WeakSet:Set,$=null;function gi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Me(t,e,r)}else n.current=null}function Af(t,e,n){try{n()}catch(r){Me(t,e,r)}}var Zy=!1;function pb(t,e){if(ff=Vu,t=wE(),Hp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,d=0,f=t,g=null;t:for(;;){for(var w;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(w=f.firstChild)!==null;)g=f,f=w;for(;;){if(f===t)break t;if(g===n&&++c===s&&(a=o),g===i&&++d===r&&(u=o),(w=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(pf={focusedElem:t,selectionRange:n},Vu=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var R=T.memoizedProps,N=T.memoizedState,x=e.stateNode,E=x.getSnapshotBeforeUpdate(e.elementType===e.type?R:ln(e.type,R),N);x.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(A){Me(e,e.return,A)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return T=Zy,Zy=!1,T}function sa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Af(e,n,i)}s=s.next}while(s!==r)}}function $c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Nf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function gx(t){var e=t.alternate;e!==null&&(t.alternate=null,gx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Cn],delete e[ka],delete e[_f],delete e[YR],delete e[XR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _x(t){return t.tag===5||t.tag===3||t.tag===4}function ev(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_x(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Pf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Uu));else if(r!==4&&(t=t.child,t!==null))for(Pf(t,e,n),t=t.sibling;t!==null;)Pf(t,e,n),t=t.sibling}function Df(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}var rt=null,cn=!1;function vr(t,e,n){for(n=n.child;n!==null;)yx(t,e,n),n=n.sibling}function yx(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Mc,n)}catch{}switch(n.tag){case 5:_t||gi(n,e);case 6:var r=rt,s=cn;rt=null,vr(t,e,n),rt=r,cn=s,rt!==null&&(cn?(t=rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(cn?(t=rt,n=n.stateNode,t.nodeType===8?md(t.parentNode,n):t.nodeType===1&&md(t,n),xa(t)):md(rt,n.stateNode));break;case 4:r=rt,s=cn,rt=n.stateNode.containerInfo,cn=!0,vr(t,e,n),rt=r,cn=s;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Af(n,e,o),s=s.next}while(s!==r)}vr(t,e,n);break;case 1:if(!_t&&(gi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Me(n,e,a)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,vr(t,e,n),_t=r):vr(t,e,n);break;default:vr(t,e,n)}}function tv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new fb),e.forEach(function(r){var s=Tb.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:rt=a.stateNode,cn=!1;break e;case 3:rt=a.stateNode.containerInfo,cn=!0;break e;case 4:rt=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(rt===null)throw Error(z(160));yx(i,o,s),rt=null,cn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){Me(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vx(e,t),e=e.sibling}function vx(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),Tn(t),r&4){try{sa(3,t,t.return),$c(3,t)}catch(R){Me(t,t.return,R)}try{sa(5,t,t.return)}catch(R){Me(t,t.return,R)}}break;case 1:an(e,t),Tn(t),r&512&&n!==null&&gi(n,n.return);break;case 5:if(an(e,t),Tn(t),r&512&&n!==null&&gi(n,n.return),t.flags&32){var s=t.stateNode;try{ya(s,"")}catch(R){Me(t,t.return,R)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&zw(s,i),nf(a,o);var c=nf(a,i);for(o=0;o<u.length;o+=2){var d=u[o],f=u[o+1];d==="style"?Hw(s,f):d==="dangerouslySetInnerHTML"?$w(s,f):d==="children"?ya(s,f):Dp(s,d,f,c)}switch(a){case"input":Xd(s,i);break;case"textarea":Bw(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?wi(s,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?wi(s,!!i.multiple,i.defaultValue,!0):wi(s,!!i.multiple,i.multiple?[]:"",!1))}s[ka]=i}catch(R){Me(t,t.return,R)}}break;case 6:if(an(e,t),Tn(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(R){Me(t,t.return,R)}}break;case 3:if(an(e,t),Tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(R){Me(t,t.return,R)}break;case 4:an(e,t),Tn(t);break;case 13:an(e,t),Tn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(dm=je())),r&4&&tv(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(_t=(c=_t)||d,an(e,t),_t=c):an(e,t),Tn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for($=t,d=t.child;d!==null;){for(f=$=d;$!==null;){switch(g=$,w=g.child,g.tag){case 0:case 11:case 14:case 15:sa(4,g,g.return);break;case 1:gi(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(R){Me(r,n,R)}}break;case 5:gi(g,g.return);break;case 22:if(g.memoizedState!==null){rv(f);continue}}w!==null?(w.return=g,$=w):rv(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{s=f.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=qw("display",o))}catch(R){Me(t,t.return,R)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(R){Me(t,t.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(e,t),Tn(t),r&4&&tv(t);break;case 21:break;default:an(e,t),Tn(t)}}function Tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_x(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ya(s,""),r.flags&=-33);var i=ev(t);Df(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ev(t);Pf(t,a,o);break;default:throw Error(z(161))}}catch(u){Me(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mb(t,e,n){$=t,wx(t)}function wx(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var s=$,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||eu;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||_t;a=eu;var c=_t;if(eu=o,(_t=u)&&!c)for($=s;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?sv(s):u!==null?(u.return=o,$=u):sv(s);for(;i!==null;)$=i,wx(i),i=i.sibling;$=s,eu=a,_t=c}nv(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,$=i):nv(t)}}function nv(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:_t||$c(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!_t)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Uy(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&xa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}_t||e.flags&512&&Nf(e)}catch(g){Me(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function rv(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function sv(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$c(4,e)}catch(u){Me(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Me(e,s,u)}}var i=e.return;try{Nf(e)}catch(u){Me(e,i,u)}break;case 5:var o=e.return;try{Nf(e)}catch(u){Me(e,o,u)}}}catch(u){Me(e,e.return,u)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var gb=Math.ceil,Xu=cr.ReactCurrentDispatcher,cm=cr.ReactCurrentOwner,tn=cr.ReactCurrentBatchConfig,he=0,tt=null,Be=null,ot=0,Wt=0,_i=ns(0),Ke=0,Da=null,Ns=0,qc=0,hm=0,ia=null,Pt=null,dm=0,ji=1/0,zn=null,Ju=!1,Of=null,Fr=null,tu=!1,Ar=null,Zu=0,oa=0,Lf=null,vu=-1,wu=0;function St(){return he&6?je():vu!==-1?vu:vu=je()}function jr(t){return t.mode&1?he&2&&ot!==0?ot&-ot:ZR.transition!==null?(wu===0&&(wu=sE()),wu):(t=ge,t!==0||(t=window.event,t=t===void 0?16:hE(t.type)),t):1}function gn(t,e,n,r){if(50<oa)throw oa=0,Lf=null,Error(z(185));nl(t,n,r),(!(he&2)||t!==tt)&&(t===tt&&(!(he&2)&&(qc|=n),Ke===4&&Ir(t,ot)),jt(t,r),n===1&&he===0&&!(e.mode&1)&&(ji=je()+500,zc&&rs()))}function jt(t,e){var n=t.callbackNode;Zk(t,e);var r=Mu(t,t===tt?ot:0);if(r===0)n!==null&&fy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fy(n),e===1)t.tag===0?JR(iv.bind(null,t)):AE(iv.bind(null,t)),KR(function(){!(he&6)&&rs()}),n=null;else{switch(iE(r)){case 1:n=Fp;break;case 4:n=nE;break;case 16:n=Lu;break;case 536870912:n=rE;break;default:n=Lu}n=Rx(n,Ex.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ex(t,e){if(vu=-1,wu=0,he&6)throw Error(z(327));var n=t.callbackNode;if(Ci()&&t.callbackNode!==n)return null;var r=Mu(t,t===tt?ot:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ec(t,r);else{e=r;var s=he;he|=2;var i=Tx();(tt!==t||ot!==e)&&(zn=null,ji=je()+500,Cs(t,e));do try{vb();break}catch(a){xx(t,a)}while(!0);Xp(),Xu.current=i,he=s,Be!==null?e=0:(tt=null,ot=0,e=Ke)}if(e!==0){if(e===2&&(s=lf(t),s!==0&&(r=s,e=Mf(t,s))),e===1)throw n=Da,Cs(t,0),Ir(t,r),jt(t,je()),n;if(e===6)Ir(t,r);else{if(s=t.current.alternate,!(r&30)&&!_b(s)&&(e=ec(t,r),e===2&&(i=lf(t),i!==0&&(r=i,e=Mf(t,i))),e===1))throw n=Da,Cs(t,0),Ir(t,r),jt(t,je()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:gs(t,Pt,zn);break;case 3:if(Ir(t,r),(r&130023424)===r&&(e=dm+500-je(),10<e)){if(Mu(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){St(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=gf(gs.bind(null,t,Pt,zn),e);break}gs(t,Pt,zn);break;case 4:if(Ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-mn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*gb(r/1960))-r,10<r){t.timeoutHandle=gf(gs.bind(null,t,Pt,zn),r);break}gs(t,Pt,zn);break;case 5:gs(t,Pt,zn);break;default:throw Error(z(329))}}}return jt(t,je()),t.callbackNode===n?Ex.bind(null,t):null}function Mf(t,e){var n=ia;return t.current.memoizedState.isDehydrated&&(Cs(t,e).flags|=256),t=ec(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&Vf(e)),t}function Vf(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function _b(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!wn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ir(t,e){for(e&=~hm,e&=~qc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function iv(t){if(he&6)throw Error(z(327));Ci();var e=Mu(t,0);if(!(e&1))return jt(t,je()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var r=lf(t);r!==0&&(e=r,n=Mf(t,r))}if(n===1)throw n=Da,Cs(t,0),Ir(t,e),jt(t,je()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gs(t,Pt,zn),jt(t,je()),null}function fm(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(ji=je()+500,zc&&rs())}}function Ps(t){Ar!==null&&Ar.tag===0&&!(he&6)&&Ci();var e=he;he|=1;var n=tn.transition,r=ge;try{if(tn.transition=null,ge=1,t)return t()}finally{ge=r,tn.transition=n,he=e,!(he&6)&&rs()}}function pm(){Wt=_i.current,ke(_i)}function Cs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,GR(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(Kp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zu();break;case 3:Vi(),ke(Vt),ke(wt),rm();break;case 5:nm(r);break;case 4:Vi();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:Jp(r.type._context);break;case 22:case 23:pm()}n=n.return}if(tt=t,Be=t=Ur(t.current,null),ot=Wt=e,Ke=0,Da=null,hm=qc=Ns=0,Pt=ia=null,ws!==null){for(e=0;e<ws.length;e++)if(n=ws[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ws=null}return t}function xx(t,e){do{var n=Be;try{if(Xp(),gu.current=Yu,Qu){for(var r=De.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Qu=!1}if(As=0,Je=He=De=null,ra=!1,Aa=0,cm.current=null,n===null||n.return===null){Ke=1,Da=e,Be=null;break}e:{var i=t,o=n.return,a=n,u=e;if(e=ot,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Hy(o);if(w!==null){w.flags&=-257,Gy(w,o,a,i,e),w.mode&1&&qy(i,c,e),e=w,u=c;var T=e.updateQueue;if(T===null){var R=new Set;R.add(u),e.updateQueue=R}else T.add(u);break e}else{if(!(e&1)){qy(i,c,e),mm();break e}u=Error(z(426))}}else if(be&&a.mode&1){var N=Hy(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Gy(N,o,a,i,e),Qp(Fi(u,a));break e}}i=u=Fi(u,a),Ke!==4&&(Ke=2),ia===null?ia=[i]:ia.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=ix(i,u,e);jy(i,x);break e;case 1:a=u;var E=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Fr===null||!Fr.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var A=ox(i,a,e);jy(i,A);break e}}i=i.return}while(i!==null)}Cx(n)}catch(O){e=O,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function Tx(){var t=Xu.current;return Xu.current=Yu,t===null?Yu:t}function mm(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),tt===null||!(Ns&268435455)&&!(qc&268435455)||Ir(tt,ot)}function ec(t,e){var n=he;he|=2;var r=Tx();(tt!==t||ot!==e)&&(zn=null,Cs(t,e));do try{yb();break}catch(s){xx(t,s)}while(!0);if(Xp(),he=n,Xu.current=r,Be!==null)throw Error(z(261));return tt=null,ot=0,Ke}function yb(){for(;Be!==null;)Ix(Be)}function vb(){for(;Be!==null&&!$k();)Ix(Be)}function Ix(t){var e=kx(t.alternate,t,Wt);t.memoizedProps=t.pendingProps,e===null?Cx(t):Be=e,cm.current=null}function Cx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=db(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,Be=null;return}}else if(n=hb(n,e,Wt),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Ke===0&&(Ke=5)}function gs(t,e,n){var r=ge,s=tn.transition;try{tn.transition=null,ge=1,wb(t,e,n,r)}finally{tn.transition=s,ge=r}return null}function wb(t,e,n,r){do Ci();while(Ar!==null);if(he&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(eR(t,i),t===tt&&(Be=tt=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tu||(tu=!0,Rx(Lu,function(){return Ci(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=tn.transition,tn.transition=null;var o=ge;ge=1;var a=he;he|=4,cm.current=null,pb(t,n),vx(n,t),UR(pf),Vu=!!ff,pf=ff=null,t.current=n,mb(n),qk(),he=a,ge=o,tn.transition=i}else t.current=n;if(tu&&(tu=!1,Ar=t,Zu=s),i=t.pendingLanes,i===0&&(Fr=null),Kk(n.stateNode),jt(t,je()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ju)throw Ju=!1,t=Of,Of=null,t;return Zu&1&&t.tag!==0&&Ci(),i=t.pendingLanes,i&1?t===Lf?oa++:(oa=0,Lf=t):oa=0,rs(),null}function Ci(){if(Ar!==null){var t=iE(Zu),e=tn.transition,n=ge;try{if(tn.transition=null,ge=16>t?16:t,Ar===null)var r=!1;else{if(t=Ar,Ar=null,Zu=0,he&6)throw Error(z(331));var s=he;for(he|=4,$=t.current;$!==null;){var i=$,o=i.child;if($.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for($=c;$!==null;){var d=$;switch(d.tag){case 0:case 11:case 15:sa(8,d,i)}var f=d.child;if(f!==null)f.return=d,$=f;else for(;$!==null;){d=$;var g=d.sibling,w=d.return;if(gx(d),d===c){$=null;break}if(g!==null){g.return=w,$=g;break}$=w}}}var T=i.alternate;if(T!==null){var R=T.child;if(R!==null){T.child=null;do{var N=R.sibling;R.sibling=null,R=N}while(R!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:sa(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,$=x;break e}$=i.return}}var E=t.current;for($=E;$!==null;){o=$;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,$=C;else e:for(o=E;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$c(9,a)}}catch(O){Me(a,a.return,O)}if(a===o){$=null;break e}var A=a.sibling;if(A!==null){A.return=a.return,$=A;break e}$=a.return}}if(he=s,rs(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Mc,t)}catch{}r=!0}return r}finally{ge=n,tn.transition=e}}return!1}function ov(t,e,n){e=Fi(n,e),e=ix(t,e,1),t=Vr(t,e,1),e=St(),t!==null&&(nl(t,1,e),jt(t,e))}function Me(t,e,n){if(t.tag===3)ov(t,t,n);else for(;e!==null;){if(e.tag===3){ov(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fr===null||!Fr.has(r))){t=Fi(n,t),t=ox(e,t,1),e=Vr(e,t,1),t=St(),e!==null&&(nl(e,1,t),jt(e,t));break}}e=e.return}}function Eb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=St(),t.pingedLanes|=t.suspendedLanes&n,tt===t&&(ot&n)===n&&(Ke===4||Ke===3&&(ot&130023424)===ot&&500>je()-dm?Cs(t,0):hm|=n),jt(t,e)}function Sx(t,e){e===0&&(t.mode&1?(e=ql,ql<<=1,!(ql&130023424)&&(ql=4194304)):e=1);var n=St();t=nr(t,e),t!==null&&(nl(t,e,n),jt(t,n))}function xb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sx(t,n)}function Tb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),Sx(t,n)}var kx;kx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Vt.current)Ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ot=!1,cb(t,e,n);Ot=!!(t.flags&131072)}else Ot=!1,be&&e.flags&1048576&&NE(e,$u,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yu(t,e),t=e.pendingProps;var s=Oi(e,wt.current);Ii(e,n),s=im(null,e,r,t,s,n);var i=om();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(i=!0,Bu(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,em(e),s.updater=Wc,e.stateNode=s,s._reactInternals=e,Tf(e,r,t,n),e=Sf(null,e,r,!0,i,n)):(e.tag=0,be&&i&&Gp(e),It(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Cb(r),t=ln(r,t),s){case 0:e=Cf(null,e,r,t,n);break e;case 1:e=Yy(null,e,r,t,n);break e;case 11:e=Ky(null,e,r,t,n);break e;case 14:e=Qy(null,e,r,ln(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Cf(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Yy(t,e,r,s,n);case 3:e:{if(cx(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,VE(t,e),Gu(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Fi(Error(z(423)),e),e=Xy(t,e,r,n,s);break e}else if(r!==s){s=Fi(Error(z(424)),e),e=Xy(t,e,r,n,s);break e}else for($t=Mr(e.stateNode.containerInfo.firstChild),Ht=e,be=!0,hn=null,n=LE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Li(),r===s){e=rr(t,e,n);break e}It(t,e,r,n)}e=e.child}return e;case 5:return FE(e),t===null&&wf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,mf(r,s)?o=null:i!==null&&mf(r,i)&&(e.flags|=32),ux(t,e),It(t,e,o,n),e.child;case 6:return t===null&&wf(e),null;case 13:return hx(t,e,n);case 4:return tm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mi(e,null,r,n):It(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Ky(t,e,r,s,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,xe(qu,r._currentValue),r._currentValue=o,i!==null)if(wn(i.value,o)){if(i.children===s.children&&!Vt.current){e=rr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Yn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ef(i.return,n,e),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ef(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}It(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ii(e,n),s=rn(s),r=r(s),e.flags|=1,It(t,e,r,n),e.child;case 14:return r=e.type,s=ln(r,e.pendingProps),s=ln(r.type,s),Qy(t,e,r,s,n);case 15:return ax(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),yu(t,e),e.tag=1,Ft(r)?(t=!0,Bu(e)):t=!1,Ii(e,n),sx(e,r,s),Tf(e,r,s,n),Sf(null,e,r,!0,t,n);case 19:return dx(t,e,n);case 22:return lx(t,e,n)}throw Error(z(156,e.tag))};function Rx(t,e){return tE(t,e)}function Ib(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new Ib(t,e,n,r)}function gm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cb(t){if(typeof t=="function")return gm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lp)return 11;if(t===Mp)return 14}return 2}function Ur(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Eu(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")gm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ai:return Ss(n.children,s,i,e);case Op:o=8,s|=8;break;case Hd:return t=en(12,n,e,s|2),t.elementType=Hd,t.lanes=i,t;case Gd:return t=en(13,n,e,s),t.elementType=Gd,t.lanes=i,t;case Kd:return t=en(19,n,e,s),t.elementType=Kd,t.lanes=i,t;case Fw:return Hc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mw:o=10;break e;case Vw:o=9;break e;case Lp:o=11;break e;case Mp:o=14;break e;case Er:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=en(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Ss(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function Hc(t,e,n,r){return t=en(22,t,r,e),t.elementType=Fw,t.lanes=n,t.stateNode={isHidden:!1},t}function Td(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function Id(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Sb(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sd(0),this.expirationTimes=sd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function _m(t,e,n,r,s,i,o,a,u){return t=new Sb(t,e,n,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=en(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},em(i),t}function kb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function bx(t){if(!t)return Kr;t=t._reactInternals;e:{if($s(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Ft(n))return bE(t,n,e)}return e}function Ax(t,e,n,r,s,i,o,a,u){return t=_m(n,r,!0,t,s,i,o,a,u),t.context=bx(null),n=t.current,r=St(),s=jr(n),i=Yn(r,s),i.callback=e??null,Vr(n,i,s),t.current.lanes=s,nl(t,s,r),jt(t,r),t}function Gc(t,e,n,r){var s=e.current,i=St(),o=jr(s);return n=bx(n),e.context===null?e.context=n:e.pendingContext=n,e=Yn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vr(s,e,o),t!==null&&(gn(t,s,o,i),mu(t,s,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function av(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ym(t,e){av(t,e),(t=t.alternate)&&av(t,e)}function Rb(){return null}var Nx=typeof reportError=="function"?reportError:function(t){console.error(t)};function vm(t){this._internalRoot=t}Kc.prototype.render=vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Gc(t,e,null,null)};Kc.prototype.unmount=vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ps(function(){Gc(null,t,null,null)}),e[tr]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=lE();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tr.length&&e!==0&&e<Tr[n].priority;n++);Tr.splice(n,0,t),n===0&&cE(t)}};function wm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lv(){}function bb(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=tc(o);i.call(c)}}var o=Ax(e,r,t,0,null,!1,!1,"",lv);return t._reactRootContainer=o,t[tr]=o.current,Ca(t.nodeType===8?t.parentNode:t),Ps(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=tc(u);a.call(c)}}var u=_m(t,0,!1,null,null,!1,!1,"",lv);return t._reactRootContainer=u,t[tr]=u.current,Ca(t.nodeType===8?t.parentNode:t),Ps(function(){Gc(e,u,n,r)}),u}function Yc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=tc(o);a.call(u)}}Gc(e,o,t,s)}else o=bb(n,e,t,s,r);return tc(o)}oE=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$o(e.pendingLanes);n!==0&&(jp(e,n|1),jt(e,je()),!(he&6)&&(ji=je()+500,rs()))}break;case 13:Ps(function(){var r=nr(t,1);if(r!==null){var s=St();gn(r,t,1,s)}}),ym(t,1)}};Up=function(t){if(t.tag===13){var e=nr(t,134217728);if(e!==null){var n=St();gn(e,t,134217728,n)}ym(t,134217728)}};aE=function(t){if(t.tag===13){var e=jr(t),n=nr(t,e);if(n!==null){var r=St();gn(n,t,e,r)}ym(t,e)}};lE=function(){return ge};uE=function(t,e){var n=ge;try{return ge=t,e()}finally{ge=n}};sf=function(t,e,n){switch(e){case"input":if(Xd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Uc(r);if(!s)throw Error(z(90));Uw(r),Xd(r,s)}}}break;case"textarea":Bw(t,n);break;case"select":e=n.value,e!=null&&wi(t,!!n.multiple,e,!1)}};Qw=fm;Yw=Ps;var Ab={usingClientEntryPoint:!1,Events:[sl,hi,Uc,Gw,Kw,fm]},Mo={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Nb={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zw(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||Rb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{Mc=nu.inject(Nb),kn=nu}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ab;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wm(e))throw Error(z(200));return kb(t,e,null,n)};Kt.createRoot=function(t,e){if(!wm(t))throw Error(z(299));var n=!1,r="",s=Nx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=_m(t,1,!1,null,null,n,!1,r,s),t[tr]=e.current,Ca(t.nodeType===8?t.parentNode:t),new vm(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=Zw(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return Ps(t)};Kt.hydrate=function(t,e,n){if(!Qc(e))throw Error(z(200));return Yc(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!wm(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Nx;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Ax(e,null,t,1,n??null,s,!1,i,o),t[tr]=e.current,Ca(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Kc(e)};Kt.render=function(t,e,n){if(!Qc(e))throw Error(z(200));return Yc(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!Qc(t))throw Error(z(40));return t._reactRootContainer?(Ps(function(){Yc(null,null,t,!1,function(){t._reactRootContainer=null,t[tr]=null})}),!0):!1};Kt.unstable_batchedUpdates=fm;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qc(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Yc(t,e,n,!1,r)};Kt.version="18.3.1-next-f1338f8080-20240426";function Px(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Px)}catch(t){console.error(t)}}Px(),Pw.exports=Kt;var Pb=Pw.exports,uv=Pb;$d.createRoot=uv.createRoot,$d.hydrateRoot=uv.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Oa.apply(null,arguments)}var Nr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Nr||(Nr={}));const cv="popstate";function Db(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return Ff("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:nc(s)}return Lb(e,n,null,t)}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Em(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ob(){return Math.random().toString(36).substr(2,8)}function hv(t,e){return{usr:t.state,key:t.key,idx:e}}function Ff(t,e,n,r){return n===void 0&&(n=null),Oa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?to(e):e,{state:n,key:e&&e.key||r||Ob()})}function nc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function to(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Lb(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=Nr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Oa({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){a=Nr.Pop;let N=d(),x=N==null?null:N-c;c=N,u&&u({action:a,location:R.location,delta:x})}function g(N,x){a=Nr.Push;let E=Ff(R.location,N,x);c=d()+1;let C=hv(E,c),A=R.createHref(E);try{o.pushState(C,"",A)}catch(O){if(O instanceof DOMException&&O.name==="DataCloneError")throw O;s.location.assign(A)}i&&u&&u({action:a,location:R.location,delta:1})}function w(N,x){a=Nr.Replace;let E=Ff(R.location,N,x);c=d();let C=hv(E,c),A=R.createHref(E);o.replaceState(C,"",A),i&&u&&u({action:a,location:R.location,delta:0})}function T(N){let x=s.location.origin!=="null"?s.location.origin:s.location.href,E=typeof N=="string"?N:nc(N);return E=E.replace(/ $/,"%20"),Ue(x,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,x)}let R={get action(){return a},get location(){return t(s,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(cv,f),u=N,()=>{s.removeEventListener(cv,f),u=null}},createHref(N){return e(s,N)},createURL:T,encodeLocation(N){let x=T(N);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:w,go(N){return o.go(N)}};return R}var dv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dv||(dv={}));function Mb(t,e,n){return n===void 0&&(n="/"),Vb(t,e,n)}function Vb(t,e,n,r){let s=typeof e=="string"?to(e):e,i=xm(s.pathname||"/",n);if(i==null)return null;let o=Dx(t);Fb(o);let a=null,u=Yb(i);for(let c=0;a==null&&c<o.length;++c)a=Gb(o[c],u);return a}function Dx(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let u={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Ue(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=zr([r,u.relativePath]),d=n.concat(u);i.children&&i.children.length>0&&(Ue(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Dx(i.children,e,d,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:qb(c,i.index),routesMeta:d})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let u of Ox(i.path))s(i,o,u)}),e}function Ox(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=Ox(r.join("/")),a=[];return a.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function Fb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Hb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jb=/^:[\w-]+$/,Ub=3,zb=2,Bb=1,Wb=10,$b=-2,fv=t=>t==="*";function qb(t,e){let n=t.split("/"),r=n.length;return n.some(fv)&&(r+=$b),e&&(r+=zb),n.filter(s=>!fv(s)).reduce((s,i)=>s+(jb.test(i)?Ub:i===""?Bb:Wb),r)}function Hb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function Gb(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",f=Kb({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!f)return null;Object.assign(s,f.params),o.push({params:s,pathname:zr([i,f.pathname]),pathnameBase:tA(zr([i,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(i=zr([i,f.pathnameBase]))}return o}function Kb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Qb(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,d,f)=>{let{paramName:g,isOptional:w}=d;if(g==="*"){let R=a[f]||"";o=i.slice(0,i.length-R.length).replace(/(.)\/+$/,"$1")}const T=a[f];return w&&!T?c[g]=void 0:c[g]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function Qb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Em(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function Yb(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Em(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Xb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jb=t=>Xb.test(t);function Zb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?to(t):t,i;if(n)if(Jb(n))i=n;else{if(n.includes("//")){let o=n;n=Lx(n),Em(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=pv(n.substring(1),"/"):i=pv(n,e)}else i=e;return{pathname:i,search:nA(r),hash:rA(s)}}function pv(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Cd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Tm(t,e){let n=eA(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Im(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=to(t):(s=Oa({},t),Ue(!s.pathname||!s.pathname.includes("?"),Cd("?","pathname","search",s)),Ue(!s.pathname||!s.pathname.includes("#"),Cd("#","pathname","hash",s)),Ue(!s.search||!s.search.includes("#"),Cd("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;s.pathname=g.join("/")}a=f>=0?e[f]:"/"}let u=Zb(s,a),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Lx=t=>t.replace(/\/\/+/g,"/"),zr=t=>Lx(t.join("/")),tA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),nA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,rA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function sA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Mx=["post","put","patch","delete"];new Set(Mx);const iA=["get",...Mx];new Set(iA);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function La(){return La=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},La.apply(null,arguments)}const Cm=M.createContext(null),oA=M.createContext(null),ss=M.createContext(null),Xc=M.createContext(null),hr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Vx=M.createContext(null);function aA(t,e){let{relative:n}=e===void 0?{}:e;no()||Ue(!1);let{basename:r,navigator:s}=M.useContext(ss),{hash:i,pathname:o,search:a}=Ux(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:zr([r,o])),s.createHref({pathname:u,search:a,hash:i})}function no(){return M.useContext(Xc)!=null}function is(){return no()||Ue(!1),M.useContext(Xc).location}function Fx(t){M.useContext(ss).static||M.useLayoutEffect(t)}function dr(){let{isDataRoute:t}=M.useContext(hr);return t?wA():lA()}function lA(){no()||Ue(!1);let t=M.useContext(Cm),{basename:e,future:n,navigator:r}=M.useContext(ss),{matches:s}=M.useContext(hr),{pathname:i}=is(),o=JSON.stringify(Tm(s,n.v7_relativeSplatPath)),a=M.useRef(!1);return Fx(()=>{a.current=!0}),M.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Im(c,JSON.parse(o),i,d.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:zr([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,i,t])}function jx(){let{matches:t}=M.useContext(hr),e=t[t.length-1];return e?e.params:{}}function Ux(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(ss),{matches:s}=M.useContext(hr),{pathname:i}=is(),o=JSON.stringify(Tm(s,r.v7_relativeSplatPath));return M.useMemo(()=>Im(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function uA(t,e){return cA(t,e)}function cA(t,e,n,r){no()||Ue(!1);let{navigator:s}=M.useContext(ss),{matches:i}=M.useContext(hr),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=is(),d;if(e){var f;let N=typeof e=="string"?to(e):e;u==="/"||(f=N.pathname)!=null&&f.startsWith(u)||Ue(!1),d=N}else d=c;let g=d.pathname||"/",w=g;if(u!=="/"){let N=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(N.length).join("/")}let T=Mb(t,{pathname:w}),R=mA(T&&T.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:zr([u,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:zr([u,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),i,n,r);return e&&R?M.createElement(Xc.Provider,{value:{location:La({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Nr.Pop}},R):R}function hA(){let t=vA(),e=sA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:s},n):null,null)}const dA=M.createElement(hA,null);class fA extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(hr.Provider,{value:this.props.routeContext},M.createElement(Vx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pA(t){let{routeContext:e,match:n,children:r}=t,s=M.useContext(Cm);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(hr.Provider,{value:e},r)}function mA(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let d=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);d>=0||Ue(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:g,errors:w}=n,T=f.route.loader&&g[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||T){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,f,g)=>{let w,T=!1,R=null,N=null;n&&(w=a&&f.route.id?a[f.route.id]:void 0,R=f.route.errorElement||dA,u&&(c<0&&g===0?(EA("route-fallback"),T=!0,N=null):c===g&&(T=!0,N=f.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,g+1)),E=()=>{let C;return w?C=R:T?C=N:f.route.Component?C=M.createElement(f.route.Component,null):f.route.element?C=f.route.element:C=d,M.createElement(pA,{match:f,routeContext:{outlet:d,matches:x,isDataRoute:n!=null},children:C})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?M.createElement(fA,{location:n.location,revalidation:n.revalidation,component:R,error:w,children:E(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):E()},null)}var zx=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(zx||{}),Bx=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Bx||{});function gA(t){let e=M.useContext(Cm);return e||Ue(!1),e}function _A(t){let e=M.useContext(oA);return e||Ue(!1),e}function yA(t){let e=M.useContext(hr);return e||Ue(!1),e}function Wx(t){let e=yA(),n=e.matches[e.matches.length-1];return n.route.id||Ue(!1),n.route.id}function vA(){var t;let e=M.useContext(Vx),n=_A(),r=Wx();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function wA(){let{router:t}=gA(zx.UseNavigateStable),e=Wx(Bx.UseNavigateStable),n=M.useRef(!1);return Fx(()=>{n.current=!0}),M.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,La({fromRouteId:e},i)))},[t,e])}const mv={};function EA(t,e,n){mv[t]||(mv[t]=!0)}function xA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function TA(t){let{to:e,replace:n,state:r,relative:s}=t;no()||Ue(!1);let{future:i,static:o}=M.useContext(ss),{matches:a}=M.useContext(hr),{pathname:u}=is(),c=dr(),d=Im(e,Tm(a,i.v7_relativeSplatPath),u,s==="path"),f=JSON.stringify(d);return M.useEffect(()=>c(JSON.parse(f),{replace:n,state:r,relative:s}),[c,f,s,n,r]),null}function jn(t){Ue(!1)}function IA(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Nr.Pop,navigator:i,static:o=!1,future:a}=t;no()&&Ue(!1);let u=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:u,navigator:i,static:o,future:La({v7_relativeSplatPath:!1},a)}),[u,a,i,o]);typeof r=="string"&&(r=to(r));let{pathname:d="/",search:f="",hash:g="",state:w=null,key:T="default"}=r,R=M.useMemo(()=>{let N=xm(d,u);return N==null?null:{location:{pathname:N,search:f,hash:g,state:w,key:T},navigationType:s}},[u,d,f,g,w,T,s]);return R==null?null:M.createElement(ss.Provider,{value:c},M.createElement(Xc.Provider,{children:n,value:R}))}function CA(t){let{children:e,location:n}=t;return uA(jf(e),n)}new Promise(()=>{});function jf(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,s)=>{if(!M.isValidElement(r))return;let i=[...e,s];if(r.type===M.Fragment){n.push.apply(n,jf(r.props.children,i));return}r.type!==jn&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jf(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uf(){return Uf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uf.apply(null,arguments)}function SA(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function kA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function RA(t,e){return t.button===0&&(!e||e==="_self")&&!kA(t)}const bA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],AA="6";try{window.__reactRouterVersion=AA}catch{}const NA="startTransition",gv=Ek[NA];function PA(t){let{basename:e,children:n,future:r,window:s}=t,i=M.useRef();i.current==null&&(i.current=Db({window:s,v5Compat:!0}));let o=i.current,[a,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=M.useCallback(f=>{c&&gv?gv(()=>u(f)):u(f)},[u,c]);return M.useLayoutEffect(()=>o.listen(d),[o,d]),M.useEffect(()=>xA(r),[r]),M.createElement(IA,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const DA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_n=M.forwardRef(function(e,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f}=e,g=SA(e,bA),{basename:w}=M.useContext(ss),T,R=!1;if(typeof c=="string"&&OA.test(c)&&(T=c,DA))try{let C=new URL(window.location.href),A=c.startsWith("//")?new URL(C.protocol+c):new URL(c),O=xm(A.pathname,w);A.origin===C.origin&&O!=null?c=O+A.search+A.hash:R=!0}catch{}let N=aA(c,{relative:s}),x=LA(c,{replace:o,state:a,target:u,preventScrollReset:d,relative:s,viewTransition:f});function E(C){r&&r(C),C.defaultPrevented||x(C)}return M.createElement("a",Uf({},g,{href:T||N,onClick:R||i?r:E,ref:n,target:u}))});var _v;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_v||(_v={}));var yv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(yv||(yv={}));function LA(t,e){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:a}=e===void 0?{}:e,u=dr(),c=is(),d=Ux(t,{relative:o});return M.useCallback(f=>{if(RA(f,n)){f.preventDefault();let g=r!==void 0?r:nc(c)===nc(d);u(t,{replace:g,state:s,preventScrollReset:i,relative:o,viewTransition:a})}},[c,u,d,r,s,n,t,i,o,a])}var vv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=function(t,e){if(!t)throw ro(e)},ro=function(t){return new Error("Firebase Database ("+$x.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},MA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let g=(a&15)<<2|c>>6,w=c&63;u||(w=64,o||(g=64)),r.push(n[d],n[f],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new VA;const g=i<<2|a>>4;if(r.push(g),c!==64){const w=a<<4&240|c>>2;if(r.push(w),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hx=function(t){const e=qx(t);return Sm.encodeByteArray(e,!0)},rc=function(t){return Hx(t).replace(/\./g,"")},sc=function(t){try{return Sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t){return Gx(void 0,t)}function Gx(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!jA(n)||(t[n]=Gx(t[n],e[n]));return t}function jA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=()=>UA().__FIREBASE_DEFAULTS__,BA=()=>{if(typeof process>"u"||typeof vv>"u")return;const t=vv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sc(t[1]);return e&&JSON.parse(e)},Jc=()=>{try{return zA()||BA()||WA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kx=t=>{var e,n;return(n=(e=Jc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qx=t=>{const e=Kx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Yx=()=>{var t;return(t=Jc())===null||t===void 0?void 0:t.config},Xx=t=>{var e;return(e=Jc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function km(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function $A(){var t;const e=(t=Jc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GA(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function KA(){return $x.NODE_ADMIN===!0}function QA(){return!$A()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YA(){try{return typeof indexedDB=="object"}catch{return!1}}function XA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="FirebaseError";class fr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JA,Object.setPrototypeOf(this,fr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ol.prototype.create)}}class ol{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ZA(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new fr(s,a,r)}}function ZA(t,e){return t.replace(eN,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){return JSON.parse(t)}function et(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ma(sc(i[0])||""),n=Ma(sc(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},tN=function(t){const e=eT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},nN=function(t){const e=eT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ui(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function zf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ic(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function oc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(wv(i)&&wv(o)){if(!oc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function wv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ho(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Go(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],c,d;for(let f=0;f<80;f++){f<40?f<20?(c=a^i&(o^a),d=1518500249):(c=i^o^a,d=1859775393):f<60?(c=i&o|a&(i|o),d=2400959708):(c=i^o^a,d=3395469782);const g=(s<<5|s>>>27)+c+u+d+r[f]&4294967295;u=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function sN(t,e){const n=new iN(t,e);return n.subscribe.bind(n)}class iN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oN(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sd),s.error===void 0&&(s.error=Sd),s.complete===void 0&&(s.complete=Sd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sd(){}function Rm(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,B(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eh=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cN(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uN(t){return t===_s?void 0:t}function cN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const dN={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},fN=le.INFO,pN={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},mN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=pN[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class th{constructor(e){this.name=e,this._logLevel=fN,this._logHandler=mN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const gN=(t,e)=>e.some(n=>t instanceof n);let Ev,xv;function _N(){return Ev||(Ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yN(){return xv||(xv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tT=new WeakMap,Bf=new WeakMap,nT=new WeakMap,kd=new WeakMap,bm=new WeakMap;function vN(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Br(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tT.set(n,t)}).catch(()=>{}),bm.set(e,t),e}function wN(t){if(Bf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Bf.set(t,e)}let Wf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EN(t){Wf=t(Wf)}function xN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rd(this),e,...n);return nT.set(r,e.sort?e.sort():[e]),Br(r)}:yN().includes(t)?function(...e){return t.apply(Rd(this),e),Br(tT.get(this))}:function(...e){return Br(t.apply(Rd(this),e))}}function TN(t){return typeof t=="function"?xN(t):(t instanceof IDBTransaction&&wN(t),gN(t,_N())?new Proxy(t,Wf):t)}function Br(t){if(t instanceof IDBRequest)return vN(t);if(kd.has(t))return kd.get(t);const e=TN(t);return e!==t&&(kd.set(t,e),bm.set(e,t)),e}const Rd=t=>bm.get(t);function IN(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Br(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Br(o.result),u.oldVersion,u.newVersion,Br(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const CN=["get","getKey","getAll","getAllKeys","count"],SN=["put","add","delete","clear"],bd=new Map;function Tv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bd.get(e))return bd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=SN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||CN.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return bd.set(e,i),i}EN(t=>({...t,get:(e,n,r)=>Tv(e,n)||t.get(e,n,r),has:(e,n)=>!!Tv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $f="@firebase/app",Iv="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new th("@firebase/app"),bN="@firebase/app-compat",AN="@firebase/analytics-compat",NN="@firebase/analytics",PN="@firebase/app-check-compat",DN="@firebase/app-check",ON="@firebase/auth",LN="@firebase/auth-compat",MN="@firebase/database",VN="@firebase/data-connect",FN="@firebase/database-compat",jN="@firebase/functions",UN="@firebase/functions-compat",zN="@firebase/installations",BN="@firebase/installations-compat",WN="@firebase/messaging",$N="@firebase/messaging-compat",qN="@firebase/performance",HN="@firebase/performance-compat",GN="@firebase/remote-config",KN="@firebase/remote-config-compat",QN="@firebase/storage",YN="@firebase/storage-compat",XN="@firebase/firestore",JN="@firebase/vertexai-preview",ZN="@firebase/firestore-compat",eP="firebase",tP="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="[DEFAULT]",nP={[$f]:"fire-core",[bN]:"fire-core-compat",[NN]:"fire-analytics",[AN]:"fire-analytics-compat",[DN]:"fire-app-check",[PN]:"fire-app-check-compat",[ON]:"fire-auth",[LN]:"fire-auth-compat",[MN]:"fire-rtdb",[VN]:"fire-data-connect",[FN]:"fire-rtdb-compat",[jN]:"fire-fn",[UN]:"fire-fn-compat",[zN]:"fire-iid",[BN]:"fire-iid-compat",[WN]:"fire-fcm",[$N]:"fire-fcm-compat",[qN]:"fire-perf",[HN]:"fire-perf-compat",[GN]:"fire-rc",[KN]:"fire-rc-compat",[QN]:"fire-gcs",[YN]:"fire-gcs-compat",[XN]:"fire-fst",[ZN]:"fire-fst-compat",[JN]:"fire-vertex","fire-js":"fire-js",[eP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Map,rP=new Map,Hf=new Map;function Cv(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ds(t){const e=t.name;if(Hf.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;Hf.set(e,t);for(const n of ac.values())Cv(n,t);for(const n of rP.values())Cv(n,t);return!0}function nh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new ol("app","Firebase",sP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=tP;function rT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qf,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Wr.create("bad-app-name",{appName:String(s)});if(n||(n=Yx()),!n)throw Wr.create("no-options");const i=ac.get(s);if(i){if(oc(n,i.options)&&oc(r,i.config))return i;throw Wr.create("duplicate-app",{appName:s})}const o=new hN(s);for(const u of Hf.values())o.addComponent(u);const a=new iP(n,r,o);return ac.set(s,a),a}function Am(t=qf){const e=ac.get(t);if(!e&&t===qf&&Yx())return rT();if(!e)throw Wr.create("no-app",{appName:t});return e}function bn(t,e,n){var r;let s=(r=nP[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}Ds(new Qr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP="firebase-heartbeat-database",aP=1,Va="firebase-heartbeat-store";let Ad=null;function sT(){return Ad||(Ad=IN(oP,aP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Va)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wr.create("idb-open",{originalErrorMessage:t.message})})),Ad}async function lP(t){try{const n=(await sT()).transaction(Va),r=await n.objectStore(Va).get(iT(t));return await n.done,r}catch(e){if(e instanceof fr)sr.warn(e.message);else{const n=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sr.warn(n.message)}}}async function Sv(t,e){try{const r=(await sT()).transaction(Va,"readwrite");await r.objectStore(Va).put(e,iT(t)),await r.done}catch(n){if(n instanceof fr)sr.warn(n.message);else{const r=Wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sr.warn(r.message)}}}function iT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=1024,cP=30*24*60*60*1e3;class hP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=cP}),this._storage.overwrite(this._heartbeatsCache))}catch(r){sr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kv(),{heartbeatsToSend:r,unsentEntries:s}=dP(this._heartbeatsCache.heartbeats),i=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return sr.warn(n),""}}}function kv(){return new Date().toISOString().substring(0,10)}function dP(t,e=uP){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Rv(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Rv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YA()?XA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Rv(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(t){Ds(new Qr("platform-logger",e=>new kN(e),"PRIVATE")),Ds(new Qr("heartbeat",e=>new hP(e),"PRIVATE")),bn($f,Iv,t),bn($f,Iv,"esm2017"),bn("fire-js","")}pP("");function Nm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function oT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mP=oT,aT=new ol("auth","Firebase",oT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new th("@firebase/auth");function gP(t,...e){lc.logLevel<=le.WARN&&lc.warn(`Auth (${qs}): ${t}`,...e)}function xu(t,...e){lc.logLevel<=le.ERROR&&lc.error(`Auth (${qs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,...e){throw Pm(t,...e)}function An(t,...e){return Pm(t,...e)}function lT(t,e,n){const r=Object.assign(Object.assign({},mP()),{[e]:n});return new ol("auth","Firebase",r).create(e,{appName:t.name})}function Xn(t){return lT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aT.create(t,...e)}function J(t,e,...n){if(!t)throw Pm(e,...n)}function qn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xu(e),new Error(e)}function ir(t,e){t||qn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _P(){return bv()==="http:"||bv()==="https:"}function bv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_P()||HA()||"connection"in navigator)?navigator.onLine:!0}function vP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.shortDelay=e,this.longDelay=n,ir(n>e,"Short delay should be less than long delay!"),this.isMobile=km()||Zx()}get(){return yP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t,e){ir(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=new al(3e4,6e4);function os(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function as(t,e,n,r,s={}){return cT(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=so(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return qA()||(c.referrerPolicy="no-referrer"),uT.fetch()(hT(t,t.config.apiHost,n,a),c)})}async function cT(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wP),e);try{const s=new TP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ru(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ru(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ru(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ru(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw lT(t,d,c);En(t,d)}}catch(s){if(s instanceof fr)throw s;En(t,"network-request-failed",{message:String(s)})}}async function ll(t,e,n,r,s={}){const i=await as(t,e,n,r,s);return"mfaPendingCredential"in i&&En(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hT(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Dm(t.config,s):`${t.config.apiScheme}://${s}`}function xP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),EP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ru(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=An(t,e,r);return s.customData._tokenResponse=n,s}function Av(t){return t!==void 0&&t.enterprise!==void 0}class IP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return xP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function CP(t,e){return as(t,"GET","/v2/recaptchaConfig",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e){return as(t,"POST","/v1/accounts:delete",e)}async function dT(t,e){return as(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kP(t,e=!1){const n=Ae(t),r=await n.getIdToken(e),s=Om(r);J(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:aa(Nd(s.auth_time)),issuedAtTime:aa(Nd(s.iat)),expirationTime:aa(Nd(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nd(t){return Number(t)*1e3}function Om(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xu("JWT malformed, contained fewer than 3 sections"),null;try{const s=sc(n);return s?JSON.parse(s):(xu("Failed to decode base64 JWT payload"),null)}catch(s){return xu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nv(t){const e=Om(t);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fr&&RP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=aa(this.lastLoginAt),this.creationTime=aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fa(t,dT(n,{idToken:r}));J(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fT(i.providerUserInfo):[],a=NP(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=u?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Kf(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function AP(t){const e=Ae(t);await uc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function NP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fT(t){return t.map(e=>{var{providerId:n}=e,r=Nm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t,e){const n=await cT(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hT(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uT.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function DP(t,e){return as(t,"POST","/v2/accounts:revokeToken",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){J(e.length!==0,"internal-error");const n=Nv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Si;return r&&(J(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return qn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t,e){J(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Nm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Kf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fa(this,this.stsTokenManager.getToken(this.auth,e));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kP(this,e)}reload(){return AP(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await uc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Xn(this.auth));const e=await this.getIdToken();return await Fa(this,SP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,u,c,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:C,emailVerified:A,isAnonymous:O,providerData:V,stsTokenManager:v}=n;J(C&&v,e,"internal-error");const _=Si.fromJSON(this.name,v);J(typeof C=="string",e,"internal-error"),wr(f,e.name),wr(g,e.name),J(typeof A=="boolean",e,"internal-error"),J(typeof O=="boolean",e,"internal-error"),wr(w,e.name),wr(T,e.name),wr(R,e.name),wr(N,e.name),wr(x,e.name),wr(E,e.name);const I=new Hn({uid:C,auth:e,email:g,emailVerified:A,displayName:f,isAnonymous:O,photoURL:T,phoneNumber:w,tenantId:R,stsTokenManager:_,createdAt:x,lastLoginAt:E});return V&&Array.isArray(V)&&(I.providerData=V.map(S=>Object.assign({},S))),N&&(I._redirectEventId=N),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Si;s.updateFromServerResponse(n);const i=new Hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await uc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?fT(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Si;a.updateFromIdToken(r);const u=new Hn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Kf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=new Map;function Gn(t){ir(t instanceof Function,"Expected a class definition");let e=Pv.get(t);return e?(ir(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pT.type="NONE";const Dv=pT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t,e,n){return`firebase:${t}:${e}:${n}`}class ki{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Tu(this.userKey,s.apiKey,i),this.fullPersistenceKey=Tu("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Hn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ki(Gn(Dv),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Gn(Dv);const o=Tu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const f=Hn._fromJSON(e,d);c!==i&&(a=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ki(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ki(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wT(e))return"Blackberry";if(ET(e))return"Webos";if(gT(e))return"Safari";if((e.includes("chrome/")||_T(e))&&!e.includes("edge/"))return"Chrome";if(vT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mT(t=Et()){return/firefox\//i.test(t)}function gT(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _T(t=Et()){return/crios\//i.test(t)}function yT(t=Et()){return/iemobile/i.test(t)}function vT(t=Et()){return/android/i.test(t)}function wT(t=Et()){return/blackberry/i.test(t)}function ET(t=Et()){return/webos/i.test(t)}function Lm(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OP(t=Et()){var e;return Lm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LP(){return GA()&&document.documentMode===10}function xT(t=Et()){return Lm(t)||vT(t)||ET(t)||wT(t)||/windows phone/i.test(t)||yT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t,e=[]){let n;switch(t){case"Browser":n=Ov(Et());break;case"Worker":n=`${Ov(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${qs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e={}){return as(t,"GET","/v2/passwordPolicy",os(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=6;class jP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lv(this),this.idTokenSubscription=new Lv(this),this.beforeStateQueue=new MP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dT(this,{idToken:e}),r=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await uc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Xn(this));const n=e?Ae(e):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Xn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Xn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await VP(this),n=new jP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ol("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await DP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hs(t){return Ae(t)}class Lv{constructor(e){this.auth=e,this.observer=null,this.addObserver=sN(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zP(t){rh=t}function IT(t){return rh.loadJS(t)}function BP(){return rh.recaptchaEnterpriseScript}function WP(){return rh.gapiScript}function $P(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qP="recaptcha-enterprise",HP="NO_RECAPTCHA";class GP{constructor(e){this.type=qP,this.auth=Hs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{CP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new IP(u);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(u=>{a(u)})})}function s(i,o,a){const u=window.grecaptcha;Av(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(HP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Av(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=BP();u.length!==0&&(u+=a),IT(u).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Mv(t,e,n,r=!1){const s=new GP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qf(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Mv(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Mv(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KP(t,e){const n=nh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(oc(i,e??{}))return s;En(s,"already-initialized")}return n.initialize({options:e})}function QP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YP(t,e,n){const r=Hs(t);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=CT(e),{host:o,port:a}=XP(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),JP()}function CT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XP(t){const e=CT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vv(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vv(o)}}}function Vv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return qn("not implemented")}_getIdTokenResponse(e){return qn("not implemented")}_linkToIdToken(e,n){return qn("not implemented")}_getReauthenticationResolver(e){return qn("not implemented")}}async function ZP(t,e){return as(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(t,e){return ll(t,"POST","/v1/accounts:signInWithPassword",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(t,e){return ll(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}async function n1(t,e){return ll(t,"POST","/v1/accounts:signInWithEmailLink",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends Mm{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ja(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ja(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qf(e,n,"signInWithPassword",e1);case"emailLink":return t1(e,{email:this._email,oobCode:this._password});default:En(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qf(e,r,"signUpPassword",ZP);case"emailLink":return n1(e,{idToken:n,email:this._email,oobCode:this._password});default:En(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ri(t,e){return ll(t,"POST","/v1/accounts:signInWithIdp",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="http://localhost";class Os extends Mm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):En("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Nm(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Os(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:r1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function i1(t){const e=Ho(Go(t)).link,n=e?Ho(Go(e)).deep_link_id:null,r=Ho(Go(t)).deep_link_id;return(r?Ho(Go(r)).link:null)||r||n||e||t}class Vm{constructor(e){var n,r,s,i,o,a;const u=Ho(Go(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,f=s1((s=u.mode)!==null&&s!==void 0?s:null);J(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=i1(e);try{return new Vm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.providerId=io.PROVIDER_ID}static credential(e,n){return ja._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vm.parseLink(n);return J(r,"argument-error"),ja._fromEmailAndCode(e,r.code,r.tenantId)}}io.PROVIDER_ID="password";io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends ST{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends ul{constructor(){super("facebook.com")}static credential(e){return Os._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cr.credential(e.oauthAccessToken)}catch{return null}}}Cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends ul{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Os._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.GOOGLE_SIGN_IN_METHOD="google.com";Sr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends ul{constructor(){super("github.com")}static credential(e){return Os._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends ul{constructor(){super("twitter.com")}static credential(e,n){return Os._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.TWITTER_SIGN_IN_METHOD="twitter.com";Rr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t,e){return ll(t,"POST","/v1/accounts:signUp",os(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Hn._fromIdTokenResponse(e,r,s),o=Fv(r);return new Ls({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fv(r);return new Ls({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends fr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new cc(e,n,r,s)}}function kT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,i,e,r):i})}async function a1(t,e,n=!1){const r=await Fa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ls._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e,n=!1){const{auth:r}=t;if(Sn(r.app))return Promise.reject(Xn(r));const s="reauthenticate";try{const i=await Fa(t,kT(r,s,e,t),n);J(i.idToken,r,"internal-error");const o=Om(i.idToken);J(o,r,"internal-error");const{sub:a}=o;return J(t.uid===a,r,"user-mismatch"),Ls._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&En(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RT(t,e,n=!1){if(Sn(t.app))return Promise.reject(Xn(t));const r="signIn",s=await kT(t,r,e),i=await Ls._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function u1(t,e){return RT(Hs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(t){const e=Hs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AT(t,e,n){if(Sn(t.app))return Promise.reject(Xn(t));const r=Hs(t),o=await Qf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",o1).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&bT(t),u}),a=await Ls._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function NT(t,e,n){return Sn(t.app)?Promise.reject(Xn(t)):u1(Ae(t),io.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&bT(t),r})}function c1(t,e,n,r){return Ae(t).onIdTokenChanged(e,n,r)}function h1(t,e,n){return Ae(t).beforeAuthStateChanged(e,n)}function d1(t,e,n,r){return Ae(t).onAuthStateChanged(e,n,r)}function f1(t){return Ae(t).signOut()}const hc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hc,"1"),this.storage.removeItem(hc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=1e3,m1=10;class DT extends PT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);LP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,m1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},p1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DT.type="LOCAL";const g1=DT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT extends PT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OT.type="SESSION";const LT=OT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),u=await _1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const c=Fm("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const g=f;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function v1(t){Nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function w1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function E1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x1(){return MT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT="firebaseLocalStorageDb",T1=1,dc="firebaseLocalStorage",FT="fbase_key";class cl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ih(t,e){return t.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function I1(){const t=indexedDB.deleteDatabase(VT);return new cl(t).toPromise()}function Yf(){const t=indexedDB.open(VT,T1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dc,{keyPath:FT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dc)?e(r):(r.close(),await I1(),e(await Yf()))})})}async function jv(t,e,n){const r=ih(t,!0).put({[FT]:e,value:n});return new cl(r).toPromise()}async function C1(t,e){const n=ih(t,!1).get(e),r=await new cl(n).toPromise();return r===void 0?null:r.value}function Uv(t,e){const n=ih(t,!0).delete(e);return new cl(n).toPromise()}const S1=800,k1=3;class jT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>k1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return MT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sh._getInstance(x1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await w1(),!this.activeServiceWorker)return;this.sender=new y1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||E1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yf();return await jv(e,hc,"1"),await Uv(e,hc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>C1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ih(s,!1).getAll();return new cl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),S1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jT.type="LOCAL";const R1=jT;new al(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(t,e){return e?Gn(e):(J(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm extends Mm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function A1(t){return RT(t.auth,new jm(t),t.bypassAuthState)}function N1(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),l1(n,new jm(t),t.bypassAuthState)}async function P1(t){const{auth:e,user:n}=t;return J(n,e,"internal-error"),a1(n,new jm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return A1;case"linkViaPopup":case"linkViaRedirect":return P1;case"reauthViaPopup":case"reauthViaRedirect":return N1;default:En(this.auth,"internal-error")}}resolve(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=new al(2e3,1e4);class yi extends UT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){ir(this.filter.length===1,"Popup operations only handle one event");const e=Fm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,D1.get())};e()}}yi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="pendingRedirect",Iu=new Map;class L1 extends UT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Iu.get(this.auth._key());if(!e){try{const r=await M1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Iu.set(this.auth._key(),e)}return this.bypassAuthState||Iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M1(t,e){const n=j1(e),r=F1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function V1(t,e){Iu.set(t._key(),e)}function F1(t){return Gn(t._redirectPersistence)}function j1(t){return Tu(O1,t.config.apiKey,t.name)}async function U1(t,e,n=!1){if(Sn(t.app))return Promise.reject(Xn(t));const r=Hs(t),s=b1(r,e),o=await new L1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=10*60*1e3;class B1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=z1&&this.cachedEventUids.clear(),this.cachedEventUids.has(zv(e))}saveEventToCache(e){this.cachedEventUids.add(zv(e)),this.lastProcessedEventTime=Date.now()}}function zv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function W1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e={}){return as(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,H1=/^https?/;async function G1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $1(t);for(const n of e)try{if(K1(n))return}catch{}En(t,"unauthorized-domain")}function K1(t){const e=Gf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!H1.test(n))return!1;if(q1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=new al(3e4,6e4);function Bv(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Y1(t){return new Promise((e,n)=>{var r,s,i;function o(){Bv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bv(),n(An(t,"network-request-failed"))},timeout:Q1.get()})}if(!((s=(r=Nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Nn().gapi)===null||i===void 0)&&i.load)o();else{const a=$P("iframefcb");return Nn()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},IT(`${WP()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Cu=null,e})}let Cu=null;function X1(t){return Cu=Cu||Y1(t),Cu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=new al(5e3,15e3),Z1="__/auth/iframe",eD="emulator/auth/iframe",tD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rD(t){const e=t.config;J(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dm(e,eD):`https://${t.config.authDomain}/${Z1}`,r={apiKey:e.apiKey,appName:t.name,v:qs},s=nD.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${so(r).slice(1)}`}async function sD(t){const e=await X1(t),n=Nn().gapi;return J(n,t,"internal-error"),e.open({where:document.body,url:rD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tD,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=Nn().setTimeout(()=>{i(o)},J1.get());function u(){Nn().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oD=500,aD=600,lD="_blank",uD="http://localhost";class Wv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cD(t,e,n,r=oD,s=aD){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},iD),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Et().toLowerCase();n&&(a=_T(c)?lD:n),mT(c)&&(e=e||uD,u.scrollbars="yes");const d=Object.entries(u).reduce((g,[w,T])=>`${g}${w}=${T},`,"");if(OP(c)&&a!=="_self")return hD(e||"",a),new Wv(null);const f=window.open(e||"",a,d);J(f,t,"popup-blocked");try{f.focus()}catch{}return new Wv(f)}function hD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD="__/auth/handler",fD="emulator/auth/handler",pD=encodeURIComponent("fac");async function $v(t,e,n,r,s,i){J(t.config.authDomain,t,"auth-domain-config-required"),J(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:qs,eventId:s};if(e instanceof ST){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",zf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof ul){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const u=await t._getAppCheckToken(),c=u?`#${pD}=${encodeURIComponent(u)}`:"";return`${mD(t)}?${so(a).slice(1)}${c}`}function mD({config:t}){return t.emulator?Dm(t,fD):`https://${t.authDomain}/${dD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="webStorageSupport";class gD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=LT,this._completeRedirectFn=U1,this._overrideRedirectResult=V1}async _openPopup(e,n,r,s){var i;ir((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $v(e,n,r,Gf(),s);return cD(e,o,Fm())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $v(e,n,r,Gf(),s);return v1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ir(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await sD(e),r=new B1(e);return n.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Pd,{type:Pd},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Pd];o!==void 0&&n(!!o),En(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=G1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xT()||gT()||Lm()}}const _D=gD;var qv="@firebase/auth",Hv="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wD(t){Ds(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TT(t)},c=new UP(r,s,i,u);return QP(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ds(new Qr("auth-internal",e=>{const n=Hs(e.getProvider("auth").getImmediate());return(r=>new yD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(qv,Hv,vD(t)),bn(qv,Hv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=5*60,xD=Xx("authIdTokenMaxAge")||ED;let Gv=null;const TD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xD)return;const s=n==null?void 0:n.token;Gv!==s&&(Gv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ID(t=Am()){const e=nh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KP(t,{popupRedirectResolver:_D,persistence:[R1,g1,LT]}),r=Xx("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=TD(i.toString());h1(n,o,()=>o(n.currentUser)),c1(n,a=>o(a))}}const s=Kx("auth");return s&&YP(n,`http://${s}`),n}function CD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}zP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=An("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",CD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wD("Browser");var Kv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ks,BT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,_){function I(){}I.prototype=_.prototype,v.D=_.prototype,v.prototype=new I,v.prototype.constructor=v,v.C=function(S,b,P){for(var k=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)k[Ne-2]=arguments[Ne];return _.prototype[b].apply(S,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,_,I){I||(I=0);var S=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)S[b]=_.charCodeAt(I++)|_.charCodeAt(I++)<<8|_.charCodeAt(I++)<<16|_.charCodeAt(I++)<<24;else for(b=0;16>b;++b)S[b]=_[I++]|_[I++]<<8|_[I++]<<16|_[I++]<<24;_=v.g[0],I=v.g[1],b=v.g[2];var P=v.g[3],k=_+(P^I&(b^P))+S[0]+3614090360&4294967295;_=I+(k<<7&4294967295|k>>>25),k=P+(b^_&(I^b))+S[1]+3905402710&4294967295,P=_+(k<<12&4294967295|k>>>20),k=b+(I^P&(_^I))+S[2]+606105819&4294967295,b=P+(k<<17&4294967295|k>>>15),k=I+(_^b&(P^_))+S[3]+3250441966&4294967295,I=b+(k<<22&4294967295|k>>>10),k=_+(P^I&(b^P))+S[4]+4118548399&4294967295,_=I+(k<<7&4294967295|k>>>25),k=P+(b^_&(I^b))+S[5]+1200080426&4294967295,P=_+(k<<12&4294967295|k>>>20),k=b+(I^P&(_^I))+S[6]+2821735955&4294967295,b=P+(k<<17&4294967295|k>>>15),k=I+(_^b&(P^_))+S[7]+4249261313&4294967295,I=b+(k<<22&4294967295|k>>>10),k=_+(P^I&(b^P))+S[8]+1770035416&4294967295,_=I+(k<<7&4294967295|k>>>25),k=P+(b^_&(I^b))+S[9]+2336552879&4294967295,P=_+(k<<12&4294967295|k>>>20),k=b+(I^P&(_^I))+S[10]+4294925233&4294967295,b=P+(k<<17&4294967295|k>>>15),k=I+(_^b&(P^_))+S[11]+2304563134&4294967295,I=b+(k<<22&4294967295|k>>>10),k=_+(P^I&(b^P))+S[12]+1804603682&4294967295,_=I+(k<<7&4294967295|k>>>25),k=P+(b^_&(I^b))+S[13]+4254626195&4294967295,P=_+(k<<12&4294967295|k>>>20),k=b+(I^P&(_^I))+S[14]+2792965006&4294967295,b=P+(k<<17&4294967295|k>>>15),k=I+(_^b&(P^_))+S[15]+1236535329&4294967295,I=b+(k<<22&4294967295|k>>>10),k=_+(b^P&(I^b))+S[1]+4129170786&4294967295,_=I+(k<<5&4294967295|k>>>27),k=P+(I^b&(_^I))+S[6]+3225465664&4294967295,P=_+(k<<9&4294967295|k>>>23),k=b+(_^I&(P^_))+S[11]+643717713&4294967295,b=P+(k<<14&4294967295|k>>>18),k=I+(P^_&(b^P))+S[0]+3921069994&4294967295,I=b+(k<<20&4294967295|k>>>12),k=_+(b^P&(I^b))+S[5]+3593408605&4294967295,_=I+(k<<5&4294967295|k>>>27),k=P+(I^b&(_^I))+S[10]+38016083&4294967295,P=_+(k<<9&4294967295|k>>>23),k=b+(_^I&(P^_))+S[15]+3634488961&4294967295,b=P+(k<<14&4294967295|k>>>18),k=I+(P^_&(b^P))+S[4]+3889429448&4294967295,I=b+(k<<20&4294967295|k>>>12),k=_+(b^P&(I^b))+S[9]+568446438&4294967295,_=I+(k<<5&4294967295|k>>>27),k=P+(I^b&(_^I))+S[14]+3275163606&4294967295,P=_+(k<<9&4294967295|k>>>23),k=b+(_^I&(P^_))+S[3]+4107603335&4294967295,b=P+(k<<14&4294967295|k>>>18),k=I+(P^_&(b^P))+S[8]+1163531501&4294967295,I=b+(k<<20&4294967295|k>>>12),k=_+(b^P&(I^b))+S[13]+2850285829&4294967295,_=I+(k<<5&4294967295|k>>>27),k=P+(I^b&(_^I))+S[2]+4243563512&4294967295,P=_+(k<<9&4294967295|k>>>23),k=b+(_^I&(P^_))+S[7]+1735328473&4294967295,b=P+(k<<14&4294967295|k>>>18),k=I+(P^_&(b^P))+S[12]+2368359562&4294967295,I=b+(k<<20&4294967295|k>>>12),k=_+(I^b^P)+S[5]+4294588738&4294967295,_=I+(k<<4&4294967295|k>>>28),k=P+(_^I^b)+S[8]+2272392833&4294967295,P=_+(k<<11&4294967295|k>>>21),k=b+(P^_^I)+S[11]+1839030562&4294967295,b=P+(k<<16&4294967295|k>>>16),k=I+(b^P^_)+S[14]+4259657740&4294967295,I=b+(k<<23&4294967295|k>>>9),k=_+(I^b^P)+S[1]+2763975236&4294967295,_=I+(k<<4&4294967295|k>>>28),k=P+(_^I^b)+S[4]+1272893353&4294967295,P=_+(k<<11&4294967295|k>>>21),k=b+(P^_^I)+S[7]+4139469664&4294967295,b=P+(k<<16&4294967295|k>>>16),k=I+(b^P^_)+S[10]+3200236656&4294967295,I=b+(k<<23&4294967295|k>>>9),k=_+(I^b^P)+S[13]+681279174&4294967295,_=I+(k<<4&4294967295|k>>>28),k=P+(_^I^b)+S[0]+3936430074&4294967295,P=_+(k<<11&4294967295|k>>>21),k=b+(P^_^I)+S[3]+3572445317&4294967295,b=P+(k<<16&4294967295|k>>>16),k=I+(b^P^_)+S[6]+76029189&4294967295,I=b+(k<<23&4294967295|k>>>9),k=_+(I^b^P)+S[9]+3654602809&4294967295,_=I+(k<<4&4294967295|k>>>28),k=P+(_^I^b)+S[12]+3873151461&4294967295,P=_+(k<<11&4294967295|k>>>21),k=b+(P^_^I)+S[15]+530742520&4294967295,b=P+(k<<16&4294967295|k>>>16),k=I+(b^P^_)+S[2]+3299628645&4294967295,I=b+(k<<23&4294967295|k>>>9),k=_+(b^(I|~P))+S[0]+4096336452&4294967295,_=I+(k<<6&4294967295|k>>>26),k=P+(I^(_|~b))+S[7]+1126891415&4294967295,P=_+(k<<10&4294967295|k>>>22),k=b+(_^(P|~I))+S[14]+2878612391&4294967295,b=P+(k<<15&4294967295|k>>>17),k=I+(P^(b|~_))+S[5]+4237533241&4294967295,I=b+(k<<21&4294967295|k>>>11),k=_+(b^(I|~P))+S[12]+1700485571&4294967295,_=I+(k<<6&4294967295|k>>>26),k=P+(I^(_|~b))+S[3]+2399980690&4294967295,P=_+(k<<10&4294967295|k>>>22),k=b+(_^(P|~I))+S[10]+4293915773&4294967295,b=P+(k<<15&4294967295|k>>>17),k=I+(P^(b|~_))+S[1]+2240044497&4294967295,I=b+(k<<21&4294967295|k>>>11),k=_+(b^(I|~P))+S[8]+1873313359&4294967295,_=I+(k<<6&4294967295|k>>>26),k=P+(I^(_|~b))+S[15]+4264355552&4294967295,P=_+(k<<10&4294967295|k>>>22),k=b+(_^(P|~I))+S[6]+2734768916&4294967295,b=P+(k<<15&4294967295|k>>>17),k=I+(P^(b|~_))+S[13]+1309151649&4294967295,I=b+(k<<21&4294967295|k>>>11),k=_+(b^(I|~P))+S[4]+4149444226&4294967295,_=I+(k<<6&4294967295|k>>>26),k=P+(I^(_|~b))+S[11]+3174756917&4294967295,P=_+(k<<10&4294967295|k>>>22),k=b+(_^(P|~I))+S[2]+718787259&4294967295,b=P+(k<<15&4294967295|k>>>17),k=I+(P^(b|~_))+S[9]+3951481745&4294967295,v.g[0]=v.g[0]+_&4294967295,v.g[1]=v.g[1]+(b+(k<<21&4294967295|k>>>11))&4294967295,v.g[2]=v.g[2]+b&4294967295,v.g[3]=v.g[3]+P&4294967295}r.prototype.u=function(v,_){_===void 0&&(_=v.length);for(var I=_-this.blockSize,S=this.B,b=this.h,P=0;P<_;){if(b==0)for(;P<=I;)s(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<_;)if(S[b++]=v.charCodeAt(P++),b==this.blockSize){s(this,S),b=0;break}}else for(;P<_;)if(S[b++]=v[P++],b==this.blockSize){s(this,S),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var _=1;_<v.length-8;++_)v[_]=0;var I=8*this.o;for(_=v.length-8;_<v.length;++_)v[_]=I&255,I/=256;for(this.u(v),v=Array(16),_=I=0;4>_;++_)for(var S=0;32>S;S+=8)v[I++]=this.g[_]>>>S&255;return v};function i(v,_){var I=a;return Object.prototype.hasOwnProperty.call(I,v)?I[v]:I[v]=_(v)}function o(v,_){this.h=_;for(var I=[],S=!0,b=v.length-1;0<=b;b--){var P=v[b]|0;S&&P==_||(I[b]=P,S=!1)}this.g=I}var a={};function u(v){return-128<=v&&128>v?i(v,function(_){return new o([_|0],0>_?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return f;if(0>v)return N(c(-v));for(var _=[],I=1,S=0;v>=I;S++)_[S]=v/I|0,I*=4294967296;return new o(_,0)}function d(v,_){if(v.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(v.charAt(0)=="-")return N(d(v.substring(1),_));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=c(Math.pow(_,8)),S=f,b=0;b<v.length;b+=8){var P=Math.min(8,v.length-b),k=parseInt(v.substring(b,b+P),_);8>P?(P=c(Math.pow(_,P)),S=S.j(P).add(c(k))):(S=S.j(I),S=S.add(c(k)))}return S}var f=u(0),g=u(1),w=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-N(this).m();for(var v=0,_=1,I=0;I<this.g.length;I++){var S=this.i(I);v+=(0<=S?S:4294967296+S)*_,_*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T(this))return"0";if(R(this))return"-"+N(this).toString(v);for(var _=c(Math.pow(v,6)),I=this,S="";;){var b=A(I,_).g;I=x(I,b.j(_));var P=((0<I.g.length?I.g[0]:I.h)>>>0).toString(v);if(I=b,T(I))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function T(v){if(v.h!=0)return!1;for(var _=0;_<v.g.length;_++)if(v.g[_]!=0)return!1;return!0}function R(v){return v.h==-1}t.l=function(v){return v=x(this,v),R(v)?-1:T(v)?0:1};function N(v){for(var _=v.g.length,I=[],S=0;S<_;S++)I[S]=~v.g[S];return new o(I,~v.h).add(g)}t.abs=function(){return R(this)?N(this):this},t.add=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],S=0,b=0;b<=_;b++){var P=S+(this.i(b)&65535)+(v.i(b)&65535),k=(P>>>16)+(this.i(b)>>>16)+(v.i(b)>>>16);S=k>>>16,P&=65535,k&=65535,I[b]=k<<16|P}return new o(I,I[I.length-1]&-2147483648?-1:0)};function x(v,_){return v.add(N(_))}t.j=function(v){if(T(this)||T(v))return f;if(R(this))return R(v)?N(this).j(N(v)):N(N(this).j(v));if(R(v))return N(this.j(N(v)));if(0>this.l(w)&&0>v.l(w))return c(this.m()*v.m());for(var _=this.g.length+v.g.length,I=[],S=0;S<2*_;S++)I[S]=0;for(S=0;S<this.g.length;S++)for(var b=0;b<v.g.length;b++){var P=this.i(S)>>>16,k=this.i(S)&65535,Ne=v.i(b)>>>16,qe=v.i(b)&65535;I[2*S+2*b]+=k*qe,E(I,2*S+2*b),I[2*S+2*b+1]+=P*qe,E(I,2*S+2*b+1),I[2*S+2*b+1]+=k*Ne,E(I,2*S+2*b+1),I[2*S+2*b+2]+=P*Ne,E(I,2*S+2*b+2)}for(S=0;S<_;S++)I[S]=I[2*S+1]<<16|I[2*S];for(S=_;S<2*_;S++)I[S]=0;return new o(I,0)};function E(v,_){for(;(v[_]&65535)!=v[_];)v[_+1]+=v[_]>>>16,v[_]&=65535,_++}function C(v,_){this.g=v,this.h=_}function A(v,_){if(T(_))throw Error("division by zero");if(T(v))return new C(f,f);if(R(v))return _=A(N(v),_),new C(N(_.g),N(_.h));if(R(_))return _=A(v,N(_)),new C(N(_.g),_.h);if(30<v.g.length){if(R(v)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var I=g,S=_;0>=S.l(v);)I=O(I),S=O(S);var b=V(I,1),P=V(S,1);for(S=V(S,2),I=V(I,2);!T(S);){var k=P.add(S);0>=k.l(v)&&(b=b.add(I),P=k),S=V(S,1),I=V(I,1)}return _=x(v,b.j(_)),new C(b,_)}for(b=f;0<=v.l(_);){for(I=Math.max(1,Math.floor(v.m()/_.m())),S=Math.ceil(Math.log(I)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=c(I),k=P.j(_);R(k)||0<k.l(v);)I-=S,P=c(I),k=P.j(_);T(P)&&(P=g),b=b.add(P),v=x(v,k)}return new C(b,v)}t.A=function(v){return A(this,v).h},t.and=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],S=0;S<_;S++)I[S]=this.i(S)&v.i(S);return new o(I,this.h&v.h)},t.or=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],S=0;S<_;S++)I[S]=this.i(S)|v.i(S);return new o(I,this.h|v.h)},t.xor=function(v){for(var _=Math.max(this.g.length,v.g.length),I=[],S=0;S<_;S++)I[S]=this.i(S)^v.i(S);return new o(I,this.h^v.h)};function O(v){for(var _=v.g.length+1,I=[],S=0;S<_;S++)I[S]=v.i(S)<<1|v.i(S-1)>>>31;return new o(I,v.h)}function V(v,_){var I=_>>5;_%=32;for(var S=v.g.length-I,b=[],P=0;P<S;P++)b[P]=0<_?v.i(P+I)>>>_|v.i(P+I+1)<<32-_:v.i(P+I);return new o(b,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,BT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,ks=o}).apply(typeof Kv<"u"?Kv:typeof self<"u"?self:typeof window<"u"?window:{});var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var WT,Ko,$T,Su,Xf,qT,HT,GT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof su=="object"&&su];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function s(l,h){if(h)e:{var m=r;l=l.split(".");for(var y=0;y<l.length-1;y++){var D=l[y];if(!(D in m))break e;m=m[D]}l=l[l.length-1],y=m[l],h=h(y),h!=y&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function i(l,h){l instanceof String&&(l+="");var m=0,y=!1,D={next:function(){if(!y&&m<l.length){var L=m++;return{value:h(L,l[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}s("Array.prototype.values",function(l){return l||function(){return i(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),l.apply(h,D)}}return function(){return l.apply(h,arguments)}}function g(l,h,m){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,g.apply(null,arguments)}function w(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function T(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,D,L){for(var W=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)W[ye-2]=arguments[ye];return h.prototype[D].apply(y,W)}}function R(l){const h=l.length;if(0<h){const m=Array(h);for(let y=0;y<h;y++)m[y]=l[y];return m}return[]}function N(l,h){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const D=l.length||0,L=y.length||0;l.length=D+L;for(let W=0;W<L;W++)l[D+W]=y[W]}else l.push(y)}}class x{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function E(l){return/^[\s\xa0]*$/.test(l)}function C(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function A(l){return A[" "](l),l}A[" "]=function(){};var O=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function V(l,h,m){for(const y in l)h.call(m,l[y],y,l)}function v(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function _(l){const h={};for(const m in l)h[m]=l[m];return h}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,h){let m,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(m in y)l[m]=y[m];for(let L=0;L<I.length;L++)m=I[L],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function b(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function P(l){a.setTimeout(()=>{throw l},0)}function k(){var l=H;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Ne{constructor(){this.h=this.g=null}add(h,m){const y=qe.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var qe=new x(()=>new Yt,l=>l.reset());class Yt{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let At,U=!1,H=new Ne,Q=()=>{const l=a.Promise.resolve(void 0);At=()=>{l.then(de)}};var de=()=>{for(var l;l=k();){try{l.h.call(l.g)}catch(m){P(m)}var h=qe;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}U=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};a.addEventListener("test",m,h),a.removeEventListener("test",m,h)}catch{}return l}();function G(l,h){if(we.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(O){e:{try{A(h.nodeName);var D=!0;break e}catch{}D=!1}D||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:X[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&G.aa.h.call(this)}}T(G,we);var X={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Re="closure_listenable_"+(1e6*Math.random()|0),Nt=0;function t_(l,h,m,y,D){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=D,this.key=++Nt,this.da=this.fa=!1}function mr(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function cs(l){this.src=l,this.g={},this.h=0}cs.prototype.add=function(l,h,m,y,D){var L=l.toString();l=this.g[L],l||(l=this.g[L]=[],this.h++);var W=Nh(l,h,y,D);return-1<W?(h=l[W],m||(h.fa=!1)):(h=new t_(h,this.src,L,!!y,D),h.fa=m,l.push(h)),h};function Ah(l,h){var m=h.type;if(m in l.g){var y=l.g[m],D=Array.prototype.indexOf.call(y,h,void 0),L;(L=0<=D)&&Array.prototype.splice.call(y,D,1),L&&(mr(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Nh(l,h,m,y){for(var D=0;D<l.length;++D){var L=l[D];if(!L.da&&L.listener==h&&L.capture==!!m&&L.ha==y)return D}return-1}var Ph="closure_lm_"+(1e6*Math.random()|0),Dh={};function n_(l,h,m,y,D){if(Array.isArray(h)){for(var L=0;L<h.length;L++)n_(l,h[L],m,y,D);return null}return m=i_(m),l&&l[Re]?l.K(h,m,c(y)?!!y.capture:!1,D):bS(l,h,m,!1,y,D)}function bS(l,h,m,y,D,L){if(!h)throw Error("Invalid event type");var W=c(D)?!!D.capture:!!D,ye=Lh(l);if(ye||(l[Ph]=ye=new cs(l)),m=ye.add(h,m,y,W,L),m.proxy)return m;if(y=AS(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)Xt||(D=W),D===void 0&&(D=!1),l.addEventListener(h.toString(),y,D);else if(l.attachEvent)l.attachEvent(s_(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function AS(){function l(m){return h.call(l.src,l.listener,m)}const h=NS;return l}function r_(l,h,m,y,D){if(Array.isArray(h))for(var L=0;L<h.length;L++)r_(l,h[L],m,y,D);else y=c(y)?!!y.capture:!!y,m=i_(m),l&&l[Re]?(l=l.i,h=String(h).toString(),h in l.g&&(L=l.g[h],m=Nh(L,m,y,D),-1<m&&(mr(L[m]),Array.prototype.splice.call(L,m,1),L.length==0&&(delete l.g[h],l.h--)))):l&&(l=Lh(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Nh(h,m,y,D)),(m=-1<l?h[l]:null)&&Oh(m))}function Oh(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[Re])Ah(h.i,l);else{var m=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(m,y,l.capture):h.detachEvent?h.detachEvent(s_(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=Lh(h))?(Ah(m,l),m.h==0&&(m.src=null,h[Ph]=null)):mr(l)}}}function s_(l){return l in Dh?Dh[l]:Dh[l]="on"+l}function NS(l,h){if(l.da)l=!0;else{h=new G(h,this);var m=l.listener,y=l.ha||l.src;l.fa&&Oh(l),l=m.call(y,h)}return l}function Lh(l){return l=l[Ph],l instanceof cs?l:null}var Mh="__closure_events_fn_"+(1e9*Math.random()>>>0);function i_(l){return typeof l=="function"?l:(l[Mh]||(l[Mh]=function(h){return l.handleEvent(h)}),l[Mh])}function ct(){re.call(this),this.i=new cs(this),this.M=this,this.F=null}T(ct,re),ct.prototype[Re]=!0,ct.prototype.removeEventListener=function(l,h,m,y){r_(this,l,h,m,y)};function xt(l,h){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new we(h,l);else if(h instanceof we)h.target=h.target||l;else{var D=h;h=new we(y,l),S(h,D)}if(D=!0,m)for(var L=m.length-1;0<=L;L--){var W=h.g=m[L];D=Il(W,y,!0,h)&&D}if(W=h.g=l,D=Il(W,y,!0,h)&&D,D=Il(W,y,!1,h)&&D,m)for(L=0;L<m.length;L++)W=h.g=m[L],D=Il(W,y,!1,h)&&D}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],y=0;y<m.length;y++)mr(m[y]);delete l.g[h],l.h--}}this.F=null},ct.prototype.K=function(l,h,m,y){return this.i.add(String(l),h,!1,m,y)},ct.prototype.L=function(l,h,m,y){return this.i.add(String(l),h,!0,m,y)};function Il(l,h,m,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var D=!0,L=0;L<h.length;++L){var W=h[L];if(W&&!W.da&&W.capture==m){var ye=W.listener,nt=W.ha||W.src;W.fa&&Ah(l.i,W),D=ye.call(nt,y)!==!1&&D}}return D&&!y.defaultPrevented}function o_(l,h,m){if(typeof l=="function")m&&(l=g(l,m));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function a_(l){l.g=o_(()=>{l.g=null,l.i&&(l.i=!1,a_(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class PS extends re{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:a_(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function go(l){re.call(this),this.h=l,this.g={}}T(go,re);var l_=[];function u_(l){V(l.g,function(h,m){this.g.hasOwnProperty(m)&&Oh(h)},l),l.g={}}go.prototype.N=function(){go.aa.N.call(this),u_(this)},go.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vh=a.JSON.stringify,DS=a.JSON.parse,OS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Fh(){}Fh.prototype.h=null;function c_(l){return l.h||(l.h=l.i())}function h_(){}var _o={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jh(){we.call(this,"d")}T(jh,we);function Uh(){we.call(this,"c")}T(Uh,we);var hs={},d_=null;function Cl(){return d_=d_||new ct}hs.La="serverreachability";function f_(l){we.call(this,hs.La,l)}T(f_,we);function yo(l){const h=Cl();xt(h,new f_(h))}hs.STAT_EVENT="statevent";function p_(l,h){we.call(this,hs.STAT_EVENT,l),this.stat=h}T(p_,we);function Tt(l){const h=Cl();xt(h,new p_(h,l))}hs.Ma="timingevent";function m_(l,h){we.call(this,hs.Ma,l),this.size=h}T(m_,we);function vo(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function wo(){this.g=!0}wo.prototype.xa=function(){this.g=!1};function LS(l,h,m,y,D,L){l.info(function(){if(l.g)if(L)for(var W="",ye=L.split("&"),nt=0;nt<ye.length;nt++){var fe=ye[nt].split("=");if(1<fe.length){var ht=fe[0];fe=fe[1];var dt=ht.split("_");W=2<=dt.length&&dt[1]=="type"?W+(ht+"="+fe+"&"):W+(ht+"=redacted&")}}else W=null;else W=L;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+h+`
`+m+`
`+W})}function MS(l,h,m,y,D,L,W){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+h+`
`+m+`
`+L+" "+W})}function Ys(l,h,m,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+FS(l,m)+(y?" "+y:"")})}function VS(l,h){l.info(function(){return"TIMEOUT: "+h})}wo.prototype.info=function(){};function FS(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var W=1;W<D.length;W++)D[W]=""}}}}return Vh(m)}catch{return h}}var Sl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},g_={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},zh;function kl(){}T(kl,Fh),kl.prototype.g=function(){return new XMLHttpRequest},kl.prototype.i=function(){return{}},zh=new kl;function gr(l,h,m,y){this.j=l,this.i=h,this.l=m,this.R=y||1,this.U=new go(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new __}function __(){this.i=null,this.g="",this.h=!1}var y_={},Bh={};function Wh(l,h,m){l.L=1,l.v=Nl(Mn(h)),l.m=m,l.P=!0,v_(l,null)}function v_(l,h){l.F=Date.now(),Rl(l),l.A=Mn(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),D_(m.i,"t",y),l.C=0,m=l.j.J,l.h=new __,l.g=X_(l.j,m?h:null,!l.m),0<l.O&&(l.M=new PS(g(l.Y,l,l.g),l.O)),h=l.U,m=l.g,y=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(l_[0]=D.toString()),D=l_);for(var L=0;L<D.length;L++){var W=n_(m,D[L],y||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),yo(),LS(l.i,l.u,l.A,l.l,l.R,l.m)}gr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Vn(l)==3?h.j():this.Y(l)},gr.prototype.Y=function(l){try{if(l==this.g)e:{const dt=Vn(this.g);var h=this.g.Ba();const Zs=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||U_(this.g)))){this.J||dt!=4||h==7||(h==8||0>=Zs?yo(3):yo(2)),$h(this);var m=this.g.Z();this.X=m;t:if(w_(this)){var y=U_(this.g);l="";var D=y.length,L=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ds(this),Eo(this);var W="";break t}this.h.i=new a.TextDecoder}for(h=0;h<D;h++)this.h.h=!0,l+=this.h.i.decode(y[h],{stream:!(L&&h==D-1)});y.length=0,this.h.g+=l,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=m==200,MS(this.i,this.u,this.A,this.l,this.R,dt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,nt=this.g;if((ye=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ye)){var fe=ye;break t}}fe=null}if(m=fe)Ys(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qh(this,m);else{this.o=!1,this.s=3,Tt(12),ds(this),Eo(this);break e}}if(this.P){m=!0;let on;for(;!this.J&&this.C<W.length;)if(on=jS(this,W),on==Bh){dt==4&&(this.s=4,Tt(14),m=!1),Ys(this.i,this.l,null,"[Incomplete Response]");break}else if(on==y_){this.s=4,Tt(15),Ys(this.i,this.l,W,"[Invalid Chunk]"),m=!1;break}else Ys(this.i,this.l,on,null),qh(this,on);if(w_(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||W.length!=0||this.h.h||(this.s=1,Tt(16),m=!1),this.o=this.o&&m,!m)Ys(this.i,this.l,W,"[Invalid Chunked Response]"),ds(this),Eo(this);else if(0<W.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Xh(ht),ht.M=!0,Tt(11))}}else Ys(this.i,this.l,W,null),qh(this,W);dt==4&&ds(this),this.o&&!this.J&&(dt==4?G_(this.j,this):(this.o=!1,Rl(this)))}else nk(this.g),m==400&&0<W.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),ds(this),Eo(this)}}}catch{}finally{}};function w_(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function jS(l,h){var m=l.C,y=h.indexOf(`
`,m);return y==-1?Bh:(m=Number(h.substring(m,y)),isNaN(m)?y_:(y+=1,y+m>h.length?Bh:(h=h.slice(y,y+m),l.C=y+m,h)))}gr.prototype.cancel=function(){this.J=!0,ds(this)};function Rl(l){l.S=Date.now()+l.I,E_(l,l.I)}function E_(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=vo(g(l.ba,l),h)}function $h(l){l.B&&(a.clearTimeout(l.B),l.B=null)}gr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(VS(this.i,this.A),this.L!=2&&(yo(),Tt(17)),ds(this),this.s=2,Eo(this)):E_(this,this.S-l)};function Eo(l){l.j.G==0||l.J||G_(l.j,l)}function ds(l){$h(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,u_(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function qh(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||Hh(m.h,l))){if(!l.K&&Hh(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Vl(m),Ll(m);else break e;Yh(m),Tt(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=vo(g(m.Za,m),6e3));if(1>=I_(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ps(m,11)}else if((l.K||m.g==l)&&Vl(m),!E(h))for(D=m.Da.g.parse(h),h=0;h<D.length;h++){let fe=D[h];if(m.T=fe[0],fe=fe[1],m.G==2)if(fe[0]=="c"){m.K=fe[1],m.ia=fe[2];const ht=fe[3];ht!=null&&(m.la=ht,m.j.info("VER="+m.la));const dt=fe[4];dt!=null&&(m.Aa=dt,m.j.info("SVER="+m.Aa));const Zs=fe[5];Zs!=null&&typeof Zs=="number"&&0<Zs&&(y=1.5*Zs,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const on=l.g;if(on){const jl=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jl){var L=y.h;L.g||jl.indexOf("spdy")==-1&&jl.indexOf("quic")==-1&&jl.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Gh(L,L.h),L.h=null))}if(y.D){const Jh=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Jh&&(y.ya=Jh,Te(y.I,y.D,Jh))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var W=l;if(y.qa=Y_(y,y.J?y.ia:null,y.W),W.K){C_(y.h,W);var ye=W,nt=y.L;nt&&(ye.I=nt),ye.B&&($h(ye),Rl(ye)),y.g=W}else q_(y);0<m.i.length&&Ml(m)}else fe[0]!="stop"&&fe[0]!="close"||ps(m,7);else m.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?ps(m,7):Qh(m):fe[0]!="noop"&&m.l&&m.l.ta(fe),m.v=0)}}yo(4)}catch{}}var US=class{constructor(l,h){this.g=l,this.map=h}};function x_(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function T_(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function I_(l){return l.h?1:l.g?l.g.size:0}function Hh(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Gh(l,h){l.g?l.g.add(h):l.h=h}function C_(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}x_.prototype.cancel=function(){if(this.i=S_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function S_(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return R(l.i)}function zS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,y=0;y<m;y++)h.push(l[y]);return h}h=[],m=0;for(y in l)h[m++]=l[y];return h}function BS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const y in l)h[m++]=y;return h}}}function k_(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=BS(l),y=zS(l),D=y.length,L=0;L<D;L++)h.call(void 0,y[L],m&&m[L],l)}var R_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WS(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),D=null;if(0<=y){var L=l[m].substring(0,y);D=l[m].substring(y+1)}else L=l[m];h(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function fs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fs){this.h=l.h,bl(this,l.j),this.o=l.o,this.g=l.g,Al(this,l.s),this.l=l.l;var h=l.i,m=new Io;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),b_(this,m),this.m=l.m}else l&&(h=String(l).match(R_))?(this.h=!1,bl(this,h[1]||"",!0),this.o=xo(h[2]||""),this.g=xo(h[3]||"",!0),Al(this,h[4]),this.l=xo(h[5]||"",!0),b_(this,h[6]||"",!0),this.m=xo(h[7]||"")):(this.h=!1,this.i=new Io(null,this.h))}fs.prototype.toString=function(){var l=[],h=this.j;h&&l.push(To(h,A_,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(To(h,A_,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(To(m,m.charAt(0)=="/"?HS:qS,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",To(m,KS)),l.join("")};function Mn(l){return new fs(l)}function bl(l,h,m){l.j=m?xo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Al(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function b_(l,h,m){h instanceof Io?(l.i=h,QS(l.i,l.h)):(m||(h=To(h,GS)),l.i=new Io(h,l.h))}function Te(l,h,m){l.i.set(h,m)}function Nl(l){return Te(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function xo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function To(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,$S),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function $S(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var A_=/[#\/\?@]/g,qS=/[#\?:]/g,HS=/[#\?]/g,GS=/[#\?@]/g,KS=/#/g;function Io(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function _r(l){l.g||(l.g=new Map,l.h=0,l.i&&WS(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Io.prototype,t.add=function(l,h){_r(this),this.i=null,l=Xs(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function N_(l,h){_r(l),h=Xs(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function P_(l,h){return _r(l),h=Xs(l,h),l.g.has(h)}t.forEach=function(l,h){_r(this),this.g.forEach(function(m,y){m.forEach(function(D){l.call(h,D,y,this)},this)},this)},t.na=function(){_r(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let y=0;y<h.length;y++){const D=l[y];for(let L=0;L<D.length;L++)m.push(h[y])}return m},t.V=function(l){_r(this);let h=[];if(typeof l=="string")P_(this,l)&&(h=h.concat(this.g.get(Xs(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return _r(this),this.i=null,l=Xs(this,l),P_(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function D_(l,h,m){N_(l,h),0<m.length&&(l.i=null,l.g.set(Xs(l,h),R(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var y=h[m];const L=encodeURIComponent(String(y)),W=this.V(y);for(y=0;y<W.length;y++){var D=L;W[y]!==""&&(D+="="+encodeURIComponent(String(W[y]))),l.push(D)}}return this.i=l.join("&")};function Xs(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function QS(l,h){h&&!l.j&&(_r(l),l.i=null,l.g.forEach(function(m,y){var D=y.toLowerCase();y!=D&&(N_(this,y),D_(this,D,m))},l)),l.j=h}function YS(l,h){const m=new wo;if(a.Image){const y=new Image;y.onload=w(yr,m,"TestLoadImage: loaded",!0,h,y),y.onerror=w(yr,m,"TestLoadImage: error",!1,h,y),y.onabort=w(yr,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=w(yr,m,"TestLoadImage: timeout",!1,h,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function XS(l,h){const m=new wo,y=new AbortController,D=setTimeout(()=>{y.abort(),yr(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(L=>{clearTimeout(D),L.ok?yr(m,"TestPingServer: ok",!0,h):yr(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(D),yr(m,"TestPingServer: error",!1,h)})}function yr(l,h,m,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(m)}catch{}}function JS(){this.g=new OS}function ZS(l,h,m){const y=m||"";try{k_(l,function(D,L){let W=D;c(D)&&(W=Vh(D)),h.push(y+L+"="+encodeURIComponent(W))})}catch(D){throw h.push(y+"type="+encodeURIComponent("_badmap")),D}}function Pl(l){this.l=l.Ub||null,this.j=l.eb||!1}T(Pl,Fh),Pl.prototype.g=function(){return new Dl(this.l,this.j)},Pl.prototype.i=function(l){return function(){return l}}({});function Dl(l,h){ct.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Dl,ct),t=Dl.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,So(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Co(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,So(this)),this.g&&(this.readyState=3,So(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;O_(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function O_(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Co(this):So(this),this.readyState==3&&O_(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Co(this))},t.Qa=function(l){this.g&&(this.response=l,Co(this))},t.ga=function(){this.g&&Co(this)};function Co(l){l.readyState=4,l.l=null,l.j=null,l.v=null,So(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function So(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Dl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function L_(l){let h="";return V(l,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function Kh(l,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=L_(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Te(l,h,m))}function Le(l){ct.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Le,ct);var ek=/^https?$/i,tk=["POST","PUT"];t=Le.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():zh.g(),this.v=this.o?c_(this.o):c_(zh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(L){M_(this,L);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)m.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())m.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(tk,h,void 0))||y||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,W]of m)this.g.setRequestHeader(L,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{j_(this),this.u=!0,this.g.send(l),this.u=!1}catch(L){M_(this,L)}};function M_(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,V_(l),Ol(l)}function V_(l){l.A||(l.A=!0,xt(l,"complete"),xt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,xt(this,"complete"),xt(this,"abort"),Ol(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ol(this,!0)),Le.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?F_(this):this.bb())},t.bb=function(){F_(this)};function F_(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Vn(l)!=4||l.Z()!=2)){if(l.u&&Vn(l)==4)o_(l.Ea,0,l);else if(xt(l,"readystatechange"),Vn(l)==4){l.h=!1;try{const W=l.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=W===0){var D=String(l.D).match(R_)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!ek.test(D?D.toLowerCase():"")}m=y}if(m)xt(l,"complete"),xt(l,"success");else{l.m=6;try{var L=2<Vn(l)?l.g.statusText:""}catch{L=""}l.l=L+" ["+l.Z()+"]",V_(l)}}finally{Ol(l)}}}}function Ol(l,h){if(l.g){j_(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||xt(l,"ready");try{m.onreadystatechange=y}catch{}}}function j_(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Vn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),DS(h)}};function U_(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function nk(l){const h={};l=(l.g&&2<=Vn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(E(l[y]))continue;var m=b(l[y]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const L=h[D]||[];h[D]=L,L.push(m)}v(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ko(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function z_(l){this.Aa=0,this.i=[],this.j=new wo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ko("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ko("baseRetryDelayMs",5e3,l),this.cb=ko("retryDelaySeedMs",1e4,l),this.Wa=ko("forwardChannelMaxRetries",2,l),this.wa=ko("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new x_(l&&l.concurrentRequestLimit),this.Da=new JS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=z_.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,y){Tt(0),this.W=l,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=Y_(this,null,this.W),Ml(this)};function Qh(l){if(B_(l),l.G==3){var h=l.U++,m=Mn(l.I);if(Te(m,"SID",l.K),Te(m,"RID",h),Te(m,"TYPE","terminate"),Ro(l,m),h=new gr(l,l.j,h),h.L=2,h.v=Nl(Mn(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=h.v,m=!0),m||(h.g=X_(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Rl(h)}Q_(l)}function Ll(l){l.g&&(Xh(l),l.g.cancel(),l.g=null)}function B_(l){Ll(l),l.u&&(a.clearTimeout(l.u),l.u=null),Vl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Ml(l){if(!T_(l.h)&&!l.s){l.s=!0;var h=l.Ga;At||Q(),U||(At(),U=!0),H.add(h,l),l.B=0}}function rk(l,h){return I_(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=vo(g(l.Ga,l,h),K_(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new gr(this,this.j,l);let L=this.o;if(this.S&&(L?(L=_(L),S(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=$_(this,D,h),m=Mn(this.I),Te(m,"RID",l),Te(m,"CVER",22),this.D&&Te(m,"X-HTTP-Session-Id",this.D),Ro(this,m),L&&(this.O?h="headers="+encodeURIComponent(String(L_(L)))+"&"+h:this.m&&Kh(m,this.m,L)),Gh(this.h,D),this.Ua&&Te(m,"TYPE","init"),this.P?(Te(m,"$req",h),Te(m,"SID","null"),D.T=!0,Wh(D,m,null)):Wh(D,m,h),this.G=2}}else this.G==3&&(l?W_(this,l):this.i.length==0||T_(this.h)||W_(this))};function W_(l,h){var m;h?m=h.l:m=l.U++;const y=Mn(l.I);Te(y,"SID",l.K),Te(y,"RID",m),Te(y,"AID",l.T),Ro(l,y),l.m&&l.o&&Kh(y,l.m,l.o),m=new gr(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=$_(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Gh(l.h,m),Wh(m,y,h)}function Ro(l,h){l.H&&V(l.H,function(m,y){Te(h,y,m)}),l.l&&k_({},function(m,y){Te(h,y,m)})}function $_(l,h,m){m=Math.min(l.i.length,m);var y=l.l?g(l.l.Na,l.l,l):null;e:{var D=l.i;let L=-1;for(;;){const W=["count="+m];L==-1?0<m?(L=D[0].g,W.push("ofs="+L)):L=0:W.push("ofs="+L);let ye=!0;for(let nt=0;nt<m;nt++){let fe=D[nt].g;const ht=D[nt].map;if(fe-=L,0>fe)L=Math.max(0,D[nt].g-100),ye=!1;else try{ZS(ht,W,"req"+fe+"_")}catch{y&&y(ht)}}if(ye){y=W.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,y}function q_(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;At||Q(),U||(At(),U=!0),H.add(h,l),l.v=0}}function Yh(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=vo(g(l.Fa,l),K_(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,H_(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=vo(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Ll(this),H_(this))};function Xh(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function H_(l){l.g=new gr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Mn(l.qa);Te(h,"RID","rpc"),Te(h,"SID",l.K),Te(h,"AID",l.T),Te(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Te(h,"TO",l.ja),Te(h,"TYPE","xmlhttp"),Ro(l,h),l.m&&l.o&&Kh(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Nl(Mn(h)),m.m=null,m.P=!0,v_(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Ll(this),Yh(this),Tt(19))};function Vl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function G_(l,h){var m=null;if(l.g==h){Vl(l),Xh(l),l.g=null;var y=2}else if(Hh(l.h,h))m=h.D,C_(l.h,h),y=1;else return;if(l.G!=0){if(h.o)if(y==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var D=l.B;y=Cl(),xt(y,new m_(y,m)),Ml(l)}else q_(l);else if(D=h.s,D==3||D==0&&0<h.X||!(y==1&&rk(l,h)||y==2&&Yh(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),D){case 1:ps(l,5);break;case 4:ps(l,10);break;case 3:ps(l,6);break;default:ps(l,2)}}}function K_(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function ps(l,h){if(l.j.info("Error code "+h),h==2){var m=g(l.fb,l),y=l.Xa;const D=!y;y=new fs(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bl(y,"https"),Nl(y),D?YS(y.toString(),m):XS(y.toString(),m)}else Tt(2);l.G=0,l.l&&l.l.sa(h),Q_(l),B_(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Q_(l){if(l.G=0,l.ka=[],l.l){const h=S_(l.h);(h.length!=0||l.i.length!=0)&&(N(l.ka,h),N(l.ka,l.i),l.h.i.length=0,R(l.i),l.i.length=0),l.l.ra()}}function Y_(l,h,m){var y=m instanceof fs?Mn(m):new fs(m);if(y.g!="")h&&(y.g=h+"."+y.g),Al(y,y.s);else{var D=a.location;y=D.protocol,h=h?h+"."+D.hostname:D.hostname,D=+D.port;var L=new fs(null);y&&bl(L,y),h&&(L.g=h),D&&Al(L,D),m&&(L.l=m),y=L}return m=l.D,h=l.ya,m&&h&&Te(y,m,h),Te(y,"VER",l.la),Ro(l,y),y}function X_(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Le(new Pl({eb:m})):new Le(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function J_(){}t=J_.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Fl(){}Fl.prototype.g=function(l,h){return new Bt(l,h)};function Bt(l,h){ct.call(this),this.g=new z_(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!E(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Js(this)}T(Bt,ct),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){Qh(this.g)},Bt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Vh(l),l=m);h.i.push(new US(h.Ya++,l)),h.G==3&&Ml(h)},Bt.prototype.N=function(){this.g.l=null,delete this.j,Qh(this.g),delete this.g,Bt.aa.N.call(this)};function Z_(l){jh.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}T(Z_,jh);function ey(){Uh.call(this),this.status=1}T(ey,Uh);function Js(l){this.g=l}T(Js,J_),Js.prototype.ua=function(){xt(this.g,"a")},Js.prototype.ta=function(l){xt(this.g,new Z_(l))},Js.prototype.sa=function(l){xt(this.g,new ey)},Js.prototype.ra=function(){xt(this.g,"b")},Fl.prototype.createWebChannel=Fl.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,GT=function(){return new Fl},HT=function(){return Cl()},qT=hs,Xf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Sl.NO_ERROR=0,Sl.TIMEOUT=8,Sl.HTTP_ERROR=6,Su=Sl,g_.COMPLETE="complete",$T=g_,h_.EventType=_o,_o.OPEN="a",_o.CLOSE="b",_o.ERROR="c",_o.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Ko=h_,Le.prototype.listenOnce=Le.prototype.L,Le.prototype.getLastError=Le.prototype.Ka,Le.prototype.getLastErrorCode=Le.prototype.Ba,Le.prototype.getStatus=Le.prototype.Z,Le.prototype.getResponseJson=Le.prototype.Oa,Le.prototype.getResponseText=Le.prototype.oa,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Ha,WT=Le}).apply(typeof su<"u"?su:typeof self<"u"?self:typeof window<"u"?window:{});const Qv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=new th("@firebase/firestore");function Vo(){return Ms.logLevel}function K(t,...e){if(Ms.logLevel<=le.DEBUG){const n=e.map(Um);Ms.debug(`Firestore (${oo}): ${t}`,...n)}}function or(t,...e){if(Ms.logLevel<=le.ERROR){const n=e.map(Um);Ms.error(`Firestore (${oo}): ${t}`,...n)}}function zi(t,...e){if(Ms.logLevel<=le.WARN){const n=e.map(Um);Ms.warn(`Firestore (${oo}): ${t}`,...n)}}function Um(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${oo}) INTERNAL ASSERTION FAILED: `+t;throw or(e),new Error(e)}function _e(t,e){t||ee()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends fr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class SD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(gt.UNAUTHENTICATED))}shutdown(){}}class kD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class RD{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){_e(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new KT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new gt(e)}}class bD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class AD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new bD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ND{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){_e(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.R=n.token,new ND(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=DD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Bi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Qe(0,0))}static max(){return new te(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ua.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ua?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Ua{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const OD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Ua{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return OD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new q(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new q(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Se.fromString(e))}static fromName(e){return new Y(Se.fromString(e).popFirst(5))}static empty(){return new Y(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Se(e.slice()))}}function LD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new Yr(s,Y.empty(),e)}function MD(t){return new Yr(t.readTime,t.key,-1)}class Yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yr(te.min(),Y.empty(),-1)}static max(){return new Yr(te.max(),Y.empty(),-1)}}function VD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==FD)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(s=>s?j.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new j((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++a,a===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new j((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function UD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function dl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zm.oe=-1;function oh(t){return t==null}function fc(t){return t===0&&1/t==-1/0}function zD(t){return typeof t=="number"&&Number.isInteger(t)&&!fc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function YT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e=class Jf{constructor(e,n){this.comparator=e,this.root=n||$r.EMPTY}insert(e,n){return new Jf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$r.BLACK,null,null))}remove(e){return new Jf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$r.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new iu(this.root,e,this.comparator,!0)}},iu=class{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},$r=class Un{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Un.RED,this.left=s??Un.EMPTY,this.right=i??Un.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Un(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Un.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Un.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Un.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Un.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}};$r.EMPTY=null,$r.RED=!0,$r.BLACK=!1;$r.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new $r(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xv(this.data.getIterator())}getIteratorFrom(e){return new Xv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class Xv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new qt([])}unionWith(e){let n=new at(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new XT("Invalid base64 string: "+i):i}}(e);return new ut(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ut(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const BD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xr(t){if(_e(!!t),typeof t=="string"){let e=0;const n=BD.exec(t);if(_e(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vs(t){return typeof t=="string"?ut.fromBase64String(t):ut.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Wm(t){const e=t.mapValue.fields.__previous_value__;return Bm(e)?Wm(e):e}function za(t){const e=Xr(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(e,n,r,s,i,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Ba{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ba("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ba&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou={mapValue:{}};function Fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bm(t)?4:qD(t)?9007199254740991:$D(t)?10:11:ee()}function On(t,e){if(t===e)return!0;const n=Fs(t);if(n!==Fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return za(t).isEqual(za(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xr(s.timestampValue),a=Xr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Vs(s.bytesValue).isEqual(Vs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Fe(s.doubleValue),a=Fe(i.doubleValue);return o===a?fc(o)===fc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Bi(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Yv(o)!==Yv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!On(o[u],a[u])))return!1;return!0}(t,e);default:return ee()}}function Wa(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Wi(t,e){if(t===e)return 0;const n=Fs(t),r=Fs(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Fe(i.integerValue||i.doubleValue),u=Fe(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return Jv(t.timestampValue,e.timestampValue);case 4:return Jv(za(t),za(e));case 5:return pe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Vs(i),u=Vs(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const d=pe(a[c],u[c]);if(d!==0)return d}return pe(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=pe(Fe(i.latitude),Fe(o.latitude));return a!==0?a:pe(Fe(i.longitude),Fe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Zv(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,u,c,d;const f=i.fields||{},g=o.fields||{},w=(a=f.value)===null||a===void 0?void 0:a.arrayValue,T=(u=g.value)===null||u===void 0?void 0:u.arrayValue,R=pe(((c=w==null?void 0:w.values)===null||c===void 0?void 0:c.length)||0,((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0);return R!==0?R:Zv(w,T)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ou.mapValue&&o===ou.mapValue)return 0;if(i===ou.mapValue)return 1;if(o===ou.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const g=pe(u[f],d[f]);if(g!==0)return g;const w=Wi(a[u[f]],c[d[f]]);if(w!==0)return w}return pe(u.length,d.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Jv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=Xr(t),r=Xr(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function Zv(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Wi(n[s],r[s]);if(i)return i}return pe(n.length,r.length)}function $i(t){return Zf(t)}function Zf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Zf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Zf(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function e0(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ep(t){return!!t&&"integerValue"in t}function $m(t){return!!t&&"arrayValue"in t}function t0(t){return!!t&&"nullValue"in t}function n0(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ku(t){return!!t&&"mapValue"in t}function $D(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function la(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=la(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=la(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ku(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=la(n)}setAll(e){let n=it.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=la(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ku(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ku(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(la(this.value))}}function JT(t){const e=[];return Gs(t.fields,(n,r)=>{const s=new it([n]);if(ku(r)){const i=JT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new yt(e,0,te.min(),te.min(),te.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,te.min(),te.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,te.min(),te.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,n){this.position=e,this.inclusive=n}}function r0(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Wi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function s0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n="asc"){this.field=e,this.dir=n}}function HD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{}class We extends ZT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new KD(e,n,r):n==="array-contains"?new XD(e,r):n==="in"?new JD(e,r):n==="not-in"?new ZD(e,r):n==="array-contains-any"?new eO(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new QD(e,r):new YD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Wi(n,this.value)):n!==null&&Fs(this.value)===Fs(n)&&this.matchesComparison(Wi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends ZT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xn(e,n)}matches(e){return eI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function eI(t){return t.op==="and"}function tI(t){return GD(t)&&eI(t)}function GD(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function tp(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+$i(t.value);if(tI(t))return t.filters.map(e=>tp(e)).join(",");{const e=t.filters.map(n=>tp(n)).join(",");return`${t.op}(${e})`}}function nI(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&On(r.value,s.value)}(t,e):t instanceof xn?function(r,s){return s instanceof xn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&nI(o,s.filters[a]),!0):!1}(t,e):void ee()}function rI(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${$i(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(rI).join(" ,")+"}"}(t):"Filter"}class KD extends We{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class QD extends We{constructor(e,n){super(e,"in",n),this.keys=sI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YD extends We{constructor(e,n){super(e,"not-in",n),this.keys=sI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class XD extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $m(n)&&Wa(n.arrayValue,this.value)}}class JD extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Wa(this.value.arrayValue,n)}}class ZD extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Wa(this.value.arrayValue,n)}}class eO extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$m(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function i0(t,e=null,n=[],r=[],s=null,i=null,o=null){return new tO(t,e,n,r,s,i,o)}function qm(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),oh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$i(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$i(r)).join(",")),e.ue=n}return e.ue}function Hm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!nI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!s0(t.startAt,e.startAt)&&s0(t.endAt,e.endAt)}function np(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function nO(t,e,n,r,s,i,o,a){return new fl(t,e,n,r,s,i,o,a)}function Gm(t){return new fl(t)}function o0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function iI(t){return t.collectionGroup!==null}function ua(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new at(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new mc(i,r))}),n.has(it.keyField().canonicalString())||e.ce.push(new mc(it.keyField(),r))}return e.ce}function Pn(t){const e=ne(t);return e.le||(e.le=rO(e,ua(t))),e.le}function rO(t,e){if(t.limitType==="F")return i0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new mc(s.field,i)});const n=t.endAt?new pc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pc(t.startAt.position,t.startAt.inclusive):null;return i0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rp(t,e){const n=t.filters.concat([e]);return new fl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function sp(t,e,n){return new fl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ah(t,e){return Hm(Pn(t),Pn(e))&&t.limitType===e.limitType}function oI(t){return`${qm(Pn(t))}|lt:${t.limitType}`}function ri(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>rI(s)).join(", ")}]`),oh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>$i(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>$i(s)).join(",")),`Target(${r})`}(Pn(t))}; limitType=${t.limitType})`}function lh(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ua(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=r0(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,ua(r),s)||r.endAt&&!function(o,a,u){const c=r0(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,ua(r),s))}(t,e)}function sO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function aI(t){return(e,n)=>{let r=!1;for(const s of ua(t)){const i=iO(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function iO(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?Wi(u,c):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Gs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return YT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=new $e(Y.comparator);function ar(){return oO}const lI=new $e(Y.comparator);function Qo(...t){let e=lI;for(const n of t)e=e.insert(n.key,n);return e}function uI(t){let e=lI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xs(){return ca()}function cI(){return ca()}function ca(){return new ao(t=>t.toString(),(t,e)=>t.isEqual(e))}const aO=new $e(Y.comparator),lO=new at(Y.comparator);function ue(...t){let e=lO;for(const n of t)e=e.add(n);return e}const uO=new at(pe);function cO(){return uO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fc(e)?"-0":e}}function hI(t){return{integerValue:""+t}}function hO(t,e){return zD(e)?hI(e):Km(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this._=void 0}}function dO(t,e,n){return t instanceof $a?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bm(i)&&(i=Wm(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof qa?fI(t,e):t instanceof Ha?pI(t,e):function(s,i){const o=dI(s,i),a=a0(o)+a0(s.Pe);return ep(o)&&ep(s.Pe)?hI(a):Km(s.serializer,a)}(t,e)}function fO(t,e,n){return t instanceof qa?fI(t,e):t instanceof Ha?pI(t,e):n}function dI(t,e){return t instanceof gc?function(r){return ep(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class $a extends uh{}class qa extends uh{constructor(e){super(),this.elements=e}}function fI(t,e){const n=mI(e);for(const r of t.elements)n.some(s=>On(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ha extends uh{constructor(e){super(),this.elements=e}}function pI(t,e){let n=mI(e);for(const r of t.elements)n=n.filter(s=>!On(s,r));return{arrayValue:{values:n}}}class gc extends uh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function a0(t){return Fe(t.integerValue||t.doubleValue)}function mI(t){return $m(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e,n){this.field=e,this.transform=n}}function mO(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof qa&&s instanceof qa||r instanceof Ha&&s instanceof Ha?Bi(r.elements,s.elements,On):r instanceof gc&&s instanceof gc?On(r.Pe,s.Pe):r instanceof $a&&s instanceof $a}(t.transform,e.transform)}class gO{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ru(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ch{}function gI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new yI(t.key,yn.none()):new pl(t.key,t.data,yn.none());{const n=t.data,r=Dt.empty();let s=new at(it.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ls(t.key,r,new qt(s.toArray()),yn.none())}}function _O(t,e,n){t instanceof pl?function(s,i,o){const a=s.value.clone(),u=u0(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ls?function(s,i,o){if(!Ru(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=u0(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(_I(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ha(t,e,n,r){return t instanceof pl?function(i,o,a,u){if(!Ru(i.precondition,o))return a;const c=i.value.clone(),d=c0(i.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ls?function(i,o,a,u){if(!Ru(i.precondition,o))return a;const c=c0(i.fieldTransforms,u,o),d=o.data;return d.setAll(_I(i)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Ru(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function yO(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=dI(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function l0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bi(r,s,(i,o)=>mO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pl extends ch{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ls extends ch{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _I(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function u0(t,e,n){const r=new Map;_e(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,fO(o,a,n[s]))}return r}function c0(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,dO(i,o,e))}return r}class yI extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vO extends ch{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&_O(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=cI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=gI(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ue())}isEqual(e){return this.batchId===e.batchId&&Bi(this.mutations,e.mutations,(n,r)=>l0(n,r))&&Bi(this.baseMutations,e.baseMutations,(n,r)=>l0(n,r))}}class Qm{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){_e(e.mutations.length===r.length);let s=function(){return aO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Qm(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,ce;function TO(t){switch(t){default:return ee();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function vI(t){if(t===void 0)return or("GRPC error has no .code"),F.UNKNOWN;switch(t){case ze.OK:return F.OK;case ze.CANCELLED:return F.CANCELLED;case ze.UNKNOWN:return F.UNKNOWN;case ze.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ze.INTERNAL:return F.INTERNAL;case ze.UNAVAILABLE:return F.UNAVAILABLE;case ze.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ze.NOT_FOUND:return F.NOT_FOUND;case ze.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ze.ABORTED:return F.ABORTED;case ze.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ze.DATA_LOSS:return F.DATA_LOSS;default:return ee()}}(ce=ze||(ze={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=new ks([4294967295,4294967295],0);function h0(t){const e=IO().encode(t),n=new BT;return n.update(e),new Uint8Array(n.digest())}function d0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ks([n,r],0),new ks([s,i],0)]}class Ym{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Yo(`Invalid padding: ${n}`);if(r<0)throw new Yo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Yo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Yo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=ks.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(ks.fromNumber(r)));return s.compare(CO)===1&&(s=new ks([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=h0(e),[r,s]=d0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ym(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=h0(e),[r,s]=d0(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Yo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ml.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new hh(te.min(),s,new $e(pe),ar(),ue())}}class ml{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ml(r,n,ue(),ue(),ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class wI{constructor(e,n){this.targetId=e,this.me=n}}class EI{constructor(e,n,r=ut.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class f0{constructor(){this.fe=0,this.ge=m0(),this.pe=ut.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ue(),n=ue(),r=ue();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new ml(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=m0()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,_e(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class SO{constructor(e){this.Le=e,this.Be=new Map,this.ke=ar(),this.qe=p0(),this.Qe=new $e(pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(np(i))if(r===0){const o=new Y(i.path);this.Ue(n,o,yt.newNoDocument(o,te.min()))}else _e(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Vs(r).toUint8Array()}catch(u){if(u instanceof XT)return zi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Ym(o,s,i)}catch(u){return zi(u instanceof Yo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&np(a.target)){const u=new Y(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,yt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ue();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new hh(e,n,this.Qe,this.ke,r);return this.ke=ar(),this.qe=p0(),this.Qe=new $e(pe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new f0,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new f0),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function p0(){return new $e(Y.comparator)}function m0(){return new $e(Y.comparator)}const kO={asc:"ASCENDING",desc:"DESCENDING"},RO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bO={and:"AND",or:"OR"};class AO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ip(t,e){return t.useProto3Json||oh(e)?e:{value:e}}function _c(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NO(t,e){return _c(t,e.toTimestamp())}function Dn(t){return _e(!!t),te.fromTimestamp(function(n){const r=Xr(n);return new Qe(r.seconds,r.nanos)}(t))}function Xm(t,e){return op(t,e).canonicalString()}function op(t,e){const n=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function TI(t){const e=Se.fromString(t);return _e(RI(e)),e}function ap(t,e){return Xm(t.databaseId,e.path)}function Dd(t,e){const n=TI(e);if(n.get(1)!==t.databaseId.projectId)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Y(CI(n))}function II(t,e){return Xm(t.databaseId,e)}function PO(t){const e=TI(t);return e.length===4?Se.emptyPath():CI(e)}function lp(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CI(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function g0(t,e,n){return{name:ap(t,e),fields:n.value.mapValue.fields}}function DO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,d){return c.useProto3Json?(_e(d===void 0||typeof d=="string"),ut.fromBase64String(d||"")):(_e(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ut.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const d=c.code===void 0?F.UNKNOWN:vI(c.code);return new q(d,c.message||"")}(o);n=new EI(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Dd(t,r.document.name),i=Dn(r.document.updateTime),o=r.document.createTime?Dn(r.document.createTime):te.min(),a=new Dt({mapValue:{fields:r.document.fields}}),u=yt.newFoundDocument(s,i,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];n=new bu(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Dd(t,r.document),i=r.readTime?Dn(r.readTime):te.min(),o=yt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new bu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Dd(t,r.document),i=r.removedTargetIds||[];n=new bu([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new xO(s,i),a=r.targetId;n=new wI(a,o)}}return n}function OO(t,e){let n;if(e instanceof pl)n={update:g0(t,e.key,e.value)};else if(e instanceof yI)n={delete:ap(t,e.key)};else if(e instanceof ls)n={update:g0(t,e.key,e.data),updateMask:WO(e.fieldMask)};else{if(!(e instanceof vO))return ee();n={verify:ap(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof $a)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ha)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:NO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function LO(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Dn(s.updateTime):Dn(i);return o.isEqual(te.min())&&(o=Dn(i)),new gO(o,s.transformResults||[])}(n,e))):[]}function MO(t,e){return{documents:[II(t,e.path)]}}function VO(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=II(t,s);const i=function(c){if(c.length!==0)return kI(xn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(d=>function(g){return{field:si(g.field),direction:UO(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ip(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:s}}function FO(t){let e=PO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){_e(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const g=SI(f);return g instanceof xn&&tI(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(g=>function(T){return new mc(ii(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(f){let g;return g=typeof f=="object"?f.value:f,oh(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(f){const g=!!f.before,w=f.values||[];return new pc(w,g)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const g=!f.before,w=f.values||[];return new pc(w,g)}(n.endAt)),nO(e,s,o,i,a,"F",u,c)}function jO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function SI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ii(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ii(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ii(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ii(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return We.create(ii(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>SI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function UO(t){return kO[t]}function zO(t){return RO[t]}function BO(t){return bO[t]}function si(t){return{fieldPath:t.canonicalString()}}function ii(t){return it.fromServerFormat(t.fieldPath)}function kI(t){return t instanceof We?function(n){if(n.op==="=="){if(n0(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NAN"}};if(t0(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(n0(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NAN"}};if(t0(n.value))return{unaryFilter:{field:si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(n.field),op:zO(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(s=>kI(s));return r.length===1?r[0]:{compositeFilter:{op:BO(n.op),filters:r}}}(t):ee()}function WO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r,s,i=te.min(),o=te.min(),a=ut.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.ct=e}}function qO(t){const e=FO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sp(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(){this.un=new GO}addToCollectionParentIndex(e,n){return this.un.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Yr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Yr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class GO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new qi(0)}static kn(){return new qi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(){this.changes=new ao(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ha(r.mutation,s,qt.empty(),Qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ue()){const s=xs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Qo();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ue()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=ar();const o=ca(),a=function(){return ca()}();return n.forEach((u,c)=>{const d=r.get(c.key);s.has(c.key)&&(d===void 0||d.mutation instanceof ls)?i=i.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),ha(d.mutation,c,d.mutation.getFieldMask(),Qe.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var f;return a.set(c,new QO(d,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ca();let s=new $e((o,a)=>o-a),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||qt.empty();d=a.applyToLocalView(c,d),r.set(u,d);const f=(s.get(a.batchId)||ue()).add(u);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,d=u.value,f=cI();d.forEach(g=>{if(!i.has(g)){const w=gI(n.get(g),r.get(g));w!==null&&f.set(g,w),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):iI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):j.resolve(xs());let a=-1,u=i;return o.next(c=>j.forEach(c,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?j.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{u=u.insert(d,g)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,ue())).next(d=>({batchId:a,changes:uI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let s=Qo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Qo();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,u=>{const c=function(f,g){return new fl(g,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(d=>{d.forEach((f,g)=>{o=o.insert(f,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,yt.newInvalidDocument(d)))});let a=Qo();return o.forEach((u,c)=>{const d=i.get(u);d!==void 0&&ha(d.mutation,c,qt.empty(),Qe.now()),lh(n,c)&&(a=a.insert(u,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return j.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Dn(s.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:qO(s.bundledQuery),readTime:Dn(s.readTime)}}(n)),j.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(){this.overlays=new $e(Y.comparator),this.Ir=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xs();return j.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const s=xs(),i=n.length+1,o=new Y(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return j.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=i.get(c.largestBatchId);d===null&&(d=xs(),i=i.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=xs(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>a.set(c,d)),!(a.size()>=s)););return j.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new EO(n,r));let i=this.Ir.get(n);i===void 0&&(i=ue(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(){this.Tr=new at(Xe.Er),this.dr=new at(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Y(new Se([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Y(new Se([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=ue();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Y.comparator(e.key,n.key)||pe(e.wr,n.wr)}static Ar(e,n){return pe(e.wr,n.wr)||Y.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new at(Xe.Er)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new wO(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new Xe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(pe);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),j.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new Y(i),0);let a=new at(pe);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.wr)),!0)},o),j.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){_e(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return j.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Xe(n,0),s=this.br.firstAfterOrEqual(r);return j.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e){this.Mr=e,this.docs=function(){return new $e(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ar();const o=n.path,a=new Y(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||VD(MD(d),r)<=0||(s.has(d.key)||lh(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}Or(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new n2(this)}getSize(e){return j.resolve(this.size)}}class n2 extends KO{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.persistence=e,this.Nr=new ao(n=>qm(n),Hm),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jm,this.targetCount=0,this.kr=qi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),j.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new qi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Kn(n),j.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),j.waitFor(i).next(()=>s)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,n){this.qr={},this.overlays={},this.Qr=new zm(0),this.Kr=!1,this.Kr=!0,this.$r=new ZO,this.referenceDelegate=e(this),this.Ur=new r2(this),this.indexManager=new HO,this.remoteDocumentCache=function(s){return new t2(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new $O(n),this.Gr=new XO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new e2(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new i2(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return j.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class i2 extends jD{constructor(e){super(),this.currentSequenceNumber=e}}class Zm{constructor(e){this.persistence=e,this.Jr=new Jm,this.Yr=null}static Zr(e){return new Zm(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),j.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Xr,r=>{const s=Y.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return j.or([()=>j.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ue(),s=ue();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new eg(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return QA()?8:UD(Et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new o2;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Vo()<=le.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",ri(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),j.resolve()):(Vo()<=le.DEBUG&&K("QueryEngine","Query:",ri(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Vo()<=le.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",ri(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pn(n))):j.resolve())}Yi(e,n){if(o0(n))return j.resolve(null);let r=Pn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=sp(n,null,"F"),r=Pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ue(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,sp(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return o0(n)||s.isEqual(te.min())?j.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?j.resolve(null):(Vo()<=le.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ri(n)),this.rs(e,o,n,LD(s,-1)).next(a=>a))})}ts(e,n){let r=new at(aI(e));return n.forEach((s,i)=>{lh(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Vo()<=le.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",ri(n)),this.Ji.getDocumentsMatchingQuery(e,n,Yr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new $e(pe),this._s=new ao(i=>qm(i),Hm),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new YO(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function u2(t,e,n,r){return new l2(t,e,n,r)}async function bI(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=ue();for(const c of s){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of i){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function c2(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,d){const f=c.batch,g=f.keys();let w=j.resolve();return g.forEach(T=>{w=w.next(()=>d.getEntry(u,T)).next(R=>{const N=c.docVersions.get(T);_e(N!==null),R.version.compareTo(N)<0&&(f.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),d.addEntry(R)))})}),w.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=ue();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function AI(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function h2(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((d,f)=>{const g=s.get(f);if(!g)return;a.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,f)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?w=w.withResumeToken(ut.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,r)),s=s.insert(f,w),function(R,N,x){return R.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,w,d)&&a.push(n.Ur.updateTargetData(i,w))});let u=ar(),c=ue();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(d2(i,o,e.documentUpdates).next(d=>{u=d.Ps,c=d.Is})),!r.isEqual(te.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(d)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.os=s,i))}function d2(t,e,n){let r=ue(),s=ue();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ar();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):K("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function f2(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function p2(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,j.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Pr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function up(t,e,n){const r=ne(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!dl(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function _0(t,e,n){const r=ne(t);let s=te.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const f=ne(u),g=f._s.get(d);return g!==void 0?j.resolve(f.os.get(g)):f.Ur.getTargetData(c,d)}(r,o,Pn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:ue())).next(a=>(m2(r,sO(e),a),{documents:a,Ts:i})))}function m2(t,e,n){let r=t.us.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class y0{constructor(){this.activeTargetIds=cO()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class g2{constructor(){this.so=new y0,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new y0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let au=null;function Od(){return au===null?au=function(){return 268435456+Math.round(2147483648*Math.random())}():au++,"0x"+au.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class w2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=Od(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(d=>(K("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw zi("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",u,"request:",s),d})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=y2[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Od();return new Promise((o,a)=>{const u=new WT;u.setWithCredentials(!0),u.listenOnce($T.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Su.NO_ERROR:const d=u.getResponseJson();K(mt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Su.TIMEOUT:K(mt,`RPC '${e}' ${i} timed out`),a(new q(F.DEADLINE_EXCEEDED,"Request time out"));break;case Su.HTTP_ERROR:const f=u.getStatus();if(K(mt,`RPC '${e}' ${i} failed with status:`,f,"response text:",u.getResponseText()),f>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const T=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(x)>=0?x:F.UNKNOWN}(w.status);a(new q(T,w.message))}else a(new q(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new q(F.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{K(mt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);K(mt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=Od(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GT(),a=HT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=i.join("");K(mt,`Creating RPC '${e}' stream ${s}: ${d}`,u);const f=o.createWebChannel(d,u);let g=!1,w=!1;const T=new v2({Io:N=>{w?K(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(K(mt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),K(mt,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},To:()=>f.close()}),R=(N,x,E)=>{N.listen(x,C=>{try{E(C)}catch(A){setTimeout(()=>{throw A},0)}})};return R(f,Ko.EventType.OPEN,()=>{w||(K(mt,`RPC '${e}' stream ${s} transport opened.`),T.yo())}),R(f,Ko.EventType.CLOSE,()=>{w||(w=!0,K(mt,`RPC '${e}' stream ${s} transport closed`),T.So())}),R(f,Ko.EventType.ERROR,N=>{w||(w=!0,zi(mt,`RPC '${e}' stream ${s} transport errored:`,N),T.So(new q(F.UNAVAILABLE,"The operation could not be completed")))}),R(f,Ko.EventType.MESSAGE,N=>{var x;if(!w){const E=N.data[0];_e(!!E);const C=E,A=C.error||((x=C[0])===null||x===void 0?void 0:x.error);if(A){K(mt,`RPC '${e}' stream ${s} received error:`,A);const O=A.status;let V=function(I){const S=ze[I];if(S!==void 0)return vI(S)}(O),v=A.message;V===void 0&&(V=F.INTERNAL,v="Unknown error status: "+O+" with message "+A.message),w=!0,T.So(new q(V,v)),f.close()}else K(mt,`RPC '${e}' stream ${s} received:`,E),T.bo(E)}}),R(a,qT.STAT_EVENT,N=>{N.stat===Xf.PROXY?K(mt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Xf.NOPROXY&&K(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function Ld(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t){return new AO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,n,r,s,i,o,a,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new NI(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(or(n.toString()),or("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new q(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E2 extends PI{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=DO(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?Dn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=lp(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=np(u)?{documents:MO(i,u)}:{query:VO(i,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xI(i,o.resumeToken);const c=ip(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(te.min())>0){a.readTime=_c(i,o.snapshotVersion.toTimestamp());const c=ip(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=jO(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=lp(this.serializer),n.removeTarget=e,this.a_(n)}}class x2 extends PI{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return _e(!!e.streamToken),this.lastStreamToken=e.streamToken,_e(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=LO(e.writeResults,e.commitTime),r=Dn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=lp(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>OO(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,op(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(F.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,op(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(F.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class I2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(or(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Ks(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=ne(u);c.L_.add(4),await gl(c),c.q_.set("Unknown"),c.L_.delete(4),await fh(c)}(this))})}),this.q_=new I2(r,s)}}async function fh(t){if(Ks(t))for(const e of t.B_)await e(!0)}async function gl(t){for(const e of t.B_)await e(!1)}function DI(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),sg(n)?rg(n):lo(n).r_()&&ng(n,e))}function tg(t,e){const n=ne(t),r=lo(n);n.N_.delete(e),r.r_()&&OI(n,e),n.N_.size===0&&(r.r_()?r.o_():Ks(n)&&n.q_.set("Unknown"))}function ng(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}lo(t).A_(e)}function OI(t,e){t.Q_.xe(e),lo(t).R_(e)}function rg(t){t.Q_=new SO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),lo(t).start(),t.q_.v_()}function sg(t){return Ks(t)&&!lo(t).n_()&&t.N_.size>0}function Ks(t){return ne(t).L_.size===0}function LI(t){t.Q_=void 0}async function S2(t){t.q_.set("Online")}async function k2(t){t.N_.forEach((e,n)=>{ng(t,e)})}async function R2(t,e){LI(t),sg(t)?(t.q_.M_(e),rg(t)):t.q_.set("Unknown")}async function b2(t,e,n){if(t.q_.set("Online"),e instanceof EI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yc(t,r)}else if(e instanceof bu?t.Q_.Ke(e):e instanceof wI?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await AI(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.N_.get(c);d&&i.N_.set(c,d.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const d=i.N_.get(u);if(!d)return;i.N_.set(u,d.withResumeToken(ut.EMPTY_BYTE_STRING,d.snapshotVersion)),OI(i,u);const f=new Pr(d.target,u,c,d.sequenceNumber);ng(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await yc(t,r)}}async function yc(t,e,n){if(!dl(e))throw e;t.L_.add(1),await gl(t),t.q_.set("Offline"),n||(n=()=>AI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await fh(t)})}function MI(t,e){return e().catch(n=>yc(t,n,e))}async function ph(t){const e=ne(t),n=Jr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;A2(e);)try{const s=await f2(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,N2(e,s)}catch(s){await yc(e,s)}VI(e)&&FI(e)}function A2(t){return Ks(t)&&t.O_.length<10}function N2(t,e){t.O_.push(e);const n=Jr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function VI(t){return Ks(t)&&!Jr(t).n_()&&t.O_.length>0}function FI(t){Jr(t).start()}async function P2(t){Jr(t).p_()}async function D2(t){const e=Jr(t);for(const n of t.O_)e.m_(n.mutations)}async function O2(t,e,n){const r=t.O_.shift(),s=Qm.from(r,e,n);await MI(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ph(t)}async function L2(t,e){e&&Jr(t).V_&&await async function(r,s){if(function(o){return TO(o)&&o!==F.ABORTED}(s.code)){const i=r.O_.shift();Jr(r).s_(),await MI(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ph(r)}}(t,e),VI(t)&&FI(t)}async function w0(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=Ks(n);n.L_.add(3),await gl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await fh(n)}async function M2(t,e){const n=ne(t);e?(n.L_.delete(2),await fh(n)):e||(n.L_.add(2),await gl(n),n.q_.set("Unknown"))}function lo(t){return t.K_||(t.K_=function(n,r,s){const i=ne(n);return i.w_(),new E2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:S2.bind(null,t),Ro:k2.bind(null,t),mo:R2.bind(null,t),d_:b2.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),sg(t)?rg(t):t.q_.set("Unknown")):(await t.K_.stop(),LI(t))})),t.K_}function Jr(t){return t.U_||(t.U_=function(n,r,s){const i=ne(n);return i.w_(),new x2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:P2.bind(null,t),mo:L2.bind(null,t),f_:D2.bind(null,t),g_:O2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ph(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ig(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function og(t,e){if(or("AsyncQueue",`${e}: ${t}`),dl(t))return new q(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Y.comparator(n.key,r.key):(n,r)=>Y.comparator(n.key,r.key),this.keyedMap=Qo(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new bi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof bi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new bi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.W_=new $e(Y.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Hi{constructor(e,n,r,s,i,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Hi(e,n,bi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ah(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class F2{constructor(){this.queries=x0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=x0(),i.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new q(F.ABORTED,"Firestore shutting down"))}}function x0(){return new ao(t=>oI(t),ah)}async function jI(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new V2,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=og(o,`Initialization of query '${ri(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&ag(n)}async function UI(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function j2(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&ag(n)}function U2(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function ag(t){t.Y_.forEach(e=>{e.next()})}var cp,T0;(T0=cp||(cp={})).ea="default",T0.Cache="cache";class zI{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==cp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.key=e}}class WI{constructor(e){this.key=e}}class z2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ue(),this.mutatedKeys=ue(),this.Aa=aI(e),this.Ra=new bi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new E0,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const g=s.get(d),w=lh(this.query,f)?f:null,T=!!g&&this.mutatedKeys.has(g.key),R=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;g&&w?g.data.isEqual(w.data)?T!==R&&(r.track({type:3,doc:w}),N=!0):this.ga(g,w)||(r.track({type:2,doc:w}),N=!0,(u&&this.Aa(w,u)>0||c&&this.Aa(w,c)<0)&&(a=!0)):!g&&w?(r.track({type:0,doc:w}),N=!0):g&&!w&&(r.track({type:1,doc:g}),N=!0,(u||c)&&(a=!0)),N&&(w?(o=o.add(w),i=R?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,f)=>function(w,T){const R=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return R(w)-R(T)}(d.type,f.type)||this.Aa(d.doc,f.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new Hi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new E0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ue(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new WI(r))}),this.da.forEach(r=>{e.has(r)||n.push(new BI(r))}),n}ba(e){this.Ta=e.Ts,this.da=ue();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Hi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class B2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class W2{constructor(e){this.key=e,this.va=!1}}class $2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ao(a=>oI(a),ah),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(Y.comparator),this.Na=new Map,this.La=new Jm,this.Ba={},this.ka=new Map,this.qa=qi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function q2(t,e,n=!0){const r=QI(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await $I(r,e,n,!0),s}async function H2(t,e){const n=QI(t);await $I(n,e,!0,!1)}async function $I(t,e,n,r){const s=await p2(t.localStore,Pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await G2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&DI(t.remoteStore,s),a}async function G2(t,e,n,r,s){t.Ka=(f,g,w)=>async function(R,N,x,E){let C=N.view.ma(x);C.ns&&(C=await _0(R.localStore,N.query,!1).then(({documents:v})=>N.view.ma(v,C)));const A=E&&E.targetChanges.get(N.targetId),O=E&&E.targetMismatches.get(N.targetId)!=null,V=N.view.applyChanges(C,R.isPrimaryClient,A,O);return C0(R,N.targetId,V.wa),V.snapshot}(t,f,g,w);const i=await _0(t.localStore,e,!0),o=new z2(e,i.Ts),a=o.ma(i.documents),u=ml.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,u);C0(t,n,c.wa);const d=new B2(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function K2(t,e,n){const r=ne(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ah(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await up(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&tg(r.remoteStore,s.targetId),hp(r,s.targetId)}).catch(hl)):(hp(r,s.targetId),await up(r.localStore,s.targetId,!0))}async function Q2(t,e){const n=ne(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),tg(n.remoteStore,r.targetId))}async function Y2(t,e,n){const r=rL(t);try{const s=await function(o,a){const u=ne(o),c=Qe.now(),d=a.reduce((w,T)=>w.add(T.key),ue());let f,g;return u.persistence.runTransaction("Locally write mutations","readwrite",w=>{let T=ar(),R=ue();return u.cs.getEntries(w,d).next(N=>{T=N,T.forEach((x,E)=>{E.isValidDocument()||(R=R.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(w,T)).next(N=>{f=N;const x=[];for(const E of a){const C=yO(E,f.get(E.key).overlayedDocument);C!=null&&x.push(new ls(E.key,C,JT(C.value.mapValue),yn.exists(!0)))}return u.mutationQueue.addMutationBatch(w,c,x,a)}).next(N=>{g=N;const x=N.applyToLocalDocumentSet(f,R);return u.documentOverlayCache.saveOverlays(w,N.batchId,x)})}).then(()=>({batchId:g.batchId,changes:uI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new $e(pe)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await _l(r,s.changes),await ph(r.remoteStore)}catch(s){const i=og(s,"Failed to persist write");n.reject(i)}}async function qI(t,e){const n=ne(t);try{const r=await h2(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(_e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?_e(o.va):s.removedDocuments.size>0&&(_e(o.va),o.va=!1))}),await _l(n,r,e)}catch(r){await hl(r)}}function I0(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=ne(o);u.onlineState=a;let c=!1;u.queries.forEach((d,f)=>{for(const g of f.j_)g.Z_(a)&&(c=!0)}),c&&ag(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function X2(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new $e(Y.comparator);o=o.insert(i,yt.newNoDocument(i,te.min()));const a=ue().add(i),u=new hh(te.min(),new Map,new $e(pe),o,a);await qI(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),lg(r)}else await up(r.localStore,e,!1).then(()=>hp(r,e,n)).catch(hl)}async function J2(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await c2(n.localStore,e);GI(n,r,null),HI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _l(n,s)}catch(s){await hl(s)}}async function Z2(t,e,n){const r=ne(t);try{const s=await function(o,a){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(_e(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);GI(r,e,n),HI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _l(r,s)}catch(s){await hl(s)}}function HI(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function GI(t,e,n){const r=ne(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function hp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||KI(t,r)})}function KI(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(tg(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),lg(t))}function C0(t,e,n){for(const r of n)r instanceof BI?(t.La.addReference(r.key,e),eL(t,r)):r instanceof WI?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||KI(t,r.key)):ee()}function eL(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),lg(t))}function lg(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Y(Se.fromString(e)),r=t.qa.next();t.Na.set(r,new W2(n)),t.Oa=t.Oa.insert(n,r),DI(t.remoteStore,new Pr(Pn(Gm(n.path)),r,"TargetPurposeLimboResolution",zm.oe))}}async function _l(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){s.push(c);const f=eg.Wi(u.targetId,c);i.push(f)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const d=ne(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,g=>j.forEach(g.$i,w=>d.persistence.referenceDelegate.addReference(f,g.targetId,w)).next(()=>j.forEach(g.Ui,w=>d.persistence.referenceDelegate.removeReference(f,g.targetId,w)))))}catch(f){if(!dl(f))throw f;K("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const g=f.targetId;if(!f.fromCache){const w=d.os.get(g),T=w.snapshotVersion,R=w.withLastLimboFreeSnapshotVersion(T);d.os=d.os.insert(g,R)}}}(r.localStore,i))}async function tL(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await bI(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(u=>{u.reject(new q(F.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _l(n,r.hs)}}function nL(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return ue().add(r.key);{let s=ue();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function QI(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=X2.bind(null,e),e.Ca.d_=j2.bind(null,e.eventManager),e.Ca.$a=U2.bind(null,e.eventManager),e}function rL(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=J2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Z2.bind(null,e),e}class vc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=dh(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return u2(this.persistence,new a2,e.initialUser,this.serializer)}Ga(e){return new s2(Zm.Zr,this.serializer)}Wa(e){return new g2}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vc.provider={build:()=>new vc};class dp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>I0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tL.bind(null,this.syncEngine),await M2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F2}()}createDatastore(e){const n=dh(e.databaseInfo.databaseId),r=function(i){return new w2(i)}(e.databaseInfo);return function(i,o,a,u){return new T2(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new C2(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>I0(this.syncEngine,n,0),function(){return v0.D()?new v0:new _2}())}createSyncEngine(e,n){return function(s,i,o,a,u,c,d){const f=new $2(s,i,o,a,u,c);return d&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await gl(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}dp.provider={build:()=>new dp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):or("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=QT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=og(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Md(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await bI(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function S0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await iL(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>w0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>w0(e.remoteStore,s)),t._onlineComponents=e}async function iL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Md(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;zi("Error using user provided cache. Falling back to memory cache: "+n),await Md(t,new vc)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Md(t,new vc);return t._offlineComponents}async function XI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await S0(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await S0(t,new dp))),t._onlineComponents}function oL(t){return XI(t).then(e=>e.syncEngine)}async function JI(t){const e=await XI(t),n=e.eventManager;return n.onListen=q2.bind(null,e.syncEngine),n.onUnlisten=K2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=H2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Q2.bind(null,e.syncEngine),n}function aL(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const d=new YI({next:g=>{d.Za(),o.enqueueAndForget(()=>UI(i,f));const w=g.docs.has(a);!w&&g.fromCache?c.reject(new q(F.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&u&&u.source==="server"?c.reject(new q(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new zI(Gm(a.path),d,{includeMetadataChanges:!0,_a:!0});return jI(i,f)}(await JI(t),t.asyncQueue,e,n,r)),r.promise}function lL(t,e,n={}){const r=new Jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const d=new YI({next:g=>{d.Za(),o.enqueueAndForget(()=>UI(i,f)),g.fromCache&&u.source==="server"?c.reject(new q(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(g)},error:g=>c.reject(g)}),f=new zI(a,d,{includeMetadataChanges:!0,_a:!0});return jI(i,f)}(await JI(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e,n){if(!n)throw new q(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uL(t,e,n,r){if(e===!0&&r===!0)throw new q(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function R0(t){if(!Y.isDocumentKey(t))throw new q(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function b0(t){if(Y.isDocumentKey(t))throw new q(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Ln(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mh(t);throw new q(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ZI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gh{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new A0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new A0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new SD;switch(r.type){case"firstParty":return new AD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=k0.get(n);r&&(K("ComponentProvider","Removing Datastore"),k0.delete(n),r.terminate())}(this),Promise.resolve()}}function cL(t,e,n,r={}){var s;const i=(t=Ln(t,gh))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&zi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=gt.MOCK_USER;else{a=Jx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new q(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new gt(c)}t._authCredentials=new kD(new KT(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new uo(this.firestore,e,this._query)}}class kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class qr extends uo{constructor(e,n,r){super(e,n,Gm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new Y(e))}withConverter(e){return new qr(this.firestore,e,this._path)}}function Ga(t,e,...n){if(t=Ae(t),eC("collection","path",e),t instanceof gh){const r=Se.fromString(e,...n);return b0(r),new qr(t,null,r)}{if(!(t instanceof kt||t instanceof qr))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return b0(r),new qr(t.firestore,null,r)}}function nn(t,e,...n){if(t=Ae(t),arguments.length===1&&(e=QT.newId()),eC("doc","path",e),t instanceof gh){const r=Se.fromString(e,...n);return R0(r),new kt(t,null,new Y(r))}{if(!(t instanceof kt||t instanceof qr))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return R0(r),new kt(t.firestore,t instanceof qr?t.converter:null,new Y(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new NI(this,"async_queue_retry"),this.Vu=()=>{const r=Ld();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Ld();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Ld();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Jn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!dl(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw or("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=ig.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class co extends gh{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new N0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new N0(e),this._firestoreClient=void 0,await e}}}function hL(t,e){const n=typeof t=="object"?t:Am(),r=typeof t=="string"?t:"(default)",s=nh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Qx("firestore");i&&cL(s,...i)}return s}function ug(t){if(t._terminated)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dL(t),t._firestoreClient}function dL(t){var e,n,r;const s=t._freezeSettings(),i=function(a,u,c,d){return new WD(a,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,ZI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new sL(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gi(ut.fromBase64String(e))}catch(n){throw new q(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gi(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL=/^__.*__$/;class pL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ls(e,this.data,this.fieldMask,n,this.fieldTransforms):new pl(e,this.data,n,this.fieldTransforms)}}class tC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ls(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nC(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class dg{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new dg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return wc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(nC(this.Cu)&&fL.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class mL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||dh(e)}Qu(e,n,r,s=!1){return new dg({Cu:e,methodName:n,qu:r,path:it.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vh(t){const e=t._freezeSettings(),n=dh(t._databaseId);return new mL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rC(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);pg("Data must be an object, but it was:",o,r);const a=sC(r,o);let u,c;if(i.merge)u=new qt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const g=fp(e,f,n);if(!o.contains(g))throw new q(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);oC(d,g)||d.push(g)}u=new qt(d),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new pL(new Dt(a),u,c)}class wh extends yh{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wh}}class fg extends yh{_toFieldTransform(e){return new pO(e.path,new $a)}isEqual(e){return e instanceof fg}}function gL(t,e,n,r){const s=t.Qu(1,e,n);pg("Data must be an object, but it was:",s,r);const i=[],o=Dt.empty();Gs(r,(u,c)=>{const d=mg(e,u,n);c=Ae(c);const f=s.Nu(d);if(c instanceof wh)i.push(d);else{const g=yl(c,f);g!=null&&(i.push(d),o.set(d,g))}});const a=new qt(i);return new tC(o,a,s.fieldTransforms)}function _L(t,e,n,r,s,i){const o=t.Qu(1,e,n),a=[fp(e,r,n)],u=[s];if(i.length%2!=0)throw new q(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)a.push(fp(e,i[g])),u.push(i[g+1]);const c=[],d=Dt.empty();for(let g=a.length-1;g>=0;--g)if(!oC(c,a[g])){const w=a[g];let T=u[g];T=Ae(T);const R=o.Nu(w);if(T instanceof wh)c.push(w);else{const N=yl(T,R);N!=null&&(c.push(w),d.set(w,N))}}const f=new qt(c);return new tC(d,f,o.fieldTransforms)}function yL(t,e,n,r=!1){return yl(n,t.Qu(r?4:3,e))}function yl(t,e){if(iC(t=Ae(t)))return pg("Unsupported field value:",e,t),sC(t,e);if(t instanceof yh)return function(r,s){if(!nC(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=yl(a,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Qe.fromDate(r);return{timestampValue:_c(s.serializer,i)}}if(r instanceof Qe){const i=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_c(s.serializer,i)}}if(r instanceof cg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gi)return{bytesValue:xI(s.serializer,r._byteString)};if(r instanceof kt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Xm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof hg)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return Km(a.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${mh(r)}`)}(t,e)}function sC(t,e){const n={};return YT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Gs(t,(r,s)=>{const i=yl(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function iC(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof cg||t instanceof Gi||t instanceof kt||t instanceof yh||t instanceof hg)}function pg(t,e,n){if(!iC(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=mh(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function fp(t,e,n){if((e=Ae(e))instanceof _h)return e._internalPath;if(typeof e=="string")return mg(t,e);throw wc("Field path arguments must be of type string or ",t,!1,void 0,n)}const vL=new RegExp("[~\\*/\\[\\]]");function mg(t,e,n){if(e.search(vL)>=0)throw wc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _h(...e.split("."))._internalPath}catch{throw wc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new q(F.INVALID_ARGUMENT,a+t+u)}function oC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wL extends aC{data(){return super.data()}}function gg(t,e){return typeof e=="string"?mg(t,e):e instanceof _h?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _g{}class xL extends _g{}function TL(t,e,...n){let r=[];e instanceof _g&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof yg).length,a=i.filter(u=>u instanceof Eh).length;if(o>1||o>0&&a>0)throw new q(F.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Eh extends xL{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Eh(e,n,r)}_apply(e){const n=this._parse(e);return lC(e._query,n),new uo(e.firestore,e.converter,rp(e._query,n))}_parse(e){const n=vh(e.firestore);return function(i,o,a,u,c,d,f){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new q(F.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){D0(f,d);const w=[];for(const T of f)w.push(P0(u,i,T));g={arrayValue:{values:w}}}else g=P0(u,i,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||D0(f,d),g=yL(a,o,f,d==="in"||d==="not-in");return We.create(c,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function IL(t,e,n){const r=e,s=gg("where",t);return Eh._create(s,r,n)}class yg extends _g{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new yg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:xn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)lC(o,u),o=rp(o,u)}(e._query,n),new uo(e.firestore,e.converter,rp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function P0(t,e,n){if(typeof(n=Ae(n))=="string"){if(n==="")throw new q(F.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iI(e)&&n.indexOf("/")!==-1)throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!Y.isDocumentKey(r))throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return e0(t,new Y(r))}if(n instanceof kt)return e0(t,n._key);throw new q(F.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mh(n)}.`)}function D0(t,e){if(!Array.isArray(t)||t.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function lC(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(F.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(F.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class CL{convertValue(e,n="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Gs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Fe(o.doubleValue));return new hg(i)}convertGeoPoint(e){return new cg(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Wm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(za(e));default:return null}}convertTimestamp(e){const n=Xr(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);_e(RI(r));const s=new Ba(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(n)||or(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cC extends aC{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Au(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Au extends cC{data(e={}){return super.data(e)}}class SL{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Au(this._firestore,this._userDataWriter,r.key,r,new Xo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Au(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Au(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xo(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:kL(a.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){t=Ln(t,kt);const e=Ln(t.firestore,co);return aL(ug(e),t._key).then(n=>bL(e,t,n))}class hC extends CL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function Ec(t){t=Ln(t,uo);const e=Ln(t.firestore,co),n=ug(e),r=new hC(e);return EL(t._query),lL(n,t._query).then(s=>new SL(e,r,t,s))}function vg(t,e,n){t=Ln(t,kt);const r=Ln(t.firestore,co),s=uC(t.converter,e);return wg(r,[rC(vh(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,yn.none())])}function pp(t,e,n,...r){t=Ln(t,kt);const s=Ln(t.firestore,co),i=vh(s);let o;return o=typeof(e=Ae(e))=="string"||e instanceof _h?_L(i,"updateDoc",t._key,e,n,r):gL(i,"updateDoc",t._key,e),wg(s,[o.toMutation(t._key,yn.exists(!0))])}function RL(t,e){const n=Ln(t.firestore,co),r=nn(t),s=uC(t.converter,e);return wg(n,[rC(vh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function wg(t,e){return function(r,s){const i=new Jn;return r.asyncQueue.enqueueAndForget(async()=>Y2(await oL(r),s,i)),i.promise}(ug(t),e)}function bL(t,e,n){const r=n.docs.get(e._key),s=new hC(t);return new cC(t,s,e._key,r,new Xo(n.hasPendingWrites,n.fromCache),e.converter)}function un(){return new fg("serverTimestamp")}(function(e,n=!0){(function(s){oo=s})(qs),Ds(new Qr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new co(new RD(r.getProvider("auth-internal")),new PD(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new q(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ba(c.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),bn(Qv,"4.7.3",e),bn(Qv,"4.7.3","esm2017")})();var AL="firebase",NL="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(AL,NL,"app");var O0={};const L0="@firebase/database",M0="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dC="";function PL(t){dC=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),et(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ma(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return pr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new DL(e)}}catch{}return new OL},Ts=fC("localStorage"),LL=fC("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai=new th("@firebase/database"),ML=function(){let t=1;return function(){return t++}}(),pC=function(t){const e=aN(t),n=new rN;n.update(e);const r=n.digest();return Sm.encodeByteArray(r)},vl=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=vl.apply(null,r):typeof r=="object"?e+=et(r):e+=r,e+=" "}return e};let da=null,V0=!0;const VL=function(t,e){B(!0,"Can't turn on custom loggers persistently."),Ai.logLevel=le.VERBOSE,da=Ai.log.bind(Ai)},vt=function(...t){if(V0===!0&&(V0=!1,da===null&&LL.get("logging_enabled")===!0&&VL()),da){const e=vl.apply(null,t);da(e)}},wl=function(t){return function(...e){vt(t,...e)}},mp=function(...t){const e="FIREBASE INTERNAL ERROR: "+vl(...t);Ai.error(e)},lr=function(...t){const e=`FIREBASE FATAL ERROR: ${vl(...t)}`;throw Ai.error(e),new Error(e)},Ut=function(...t){const e="FIREBASE WARNING: "+vl(...t);Ai.warn(e)},FL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},mC=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},jL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Qi="[MIN_NAME]",js="[MAX_NAME]",ho=function(t,e){if(t===e)return 0;if(t===Qi||e===js)return-1;if(e===Qi||t===js)return 1;{const n=F0(t),r=F0(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},UL=function(t,e){return t===e?0:t<e?-1:1},Fo=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+et(e))},Eg=function(t){if(typeof t!="object"||t===null)return et(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=et(e[r]),n+=":",n+=Eg(t[e[r]]);return n+="}",n},gC=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function zt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const _C=function(t){B(!mC(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,u;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(u=n;u;u-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const d=c.join("");let f="";for(u=0;u<64;u+=8){let g=parseInt(d.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},zL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function WL(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const $L=new RegExp("^-?(0*)\\d{1,10}$"),qL=-2147483648,HL=2147483647,F0=function(t){if($L.test(t)){const e=Number(t);if(e>=qL&&e<=HL)return e}return null},fo=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},GL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},fa=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QL{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(vt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ut(e)}}class Nu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg="5",yC="v",vC="s",wC="r",EC="f",xC=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,TC="ls",IC="p",gp="ac",CC="websocket",SC="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(e,n,r,s,i=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ts.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ts.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function YL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function RC(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let r;if(e===CC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===SC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);YL(t)&&(n.ns=t.namespace);const s=[];return zt(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(){this.counters_={}}incrementCounter(e,n=1){pr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return FA(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd={},Fd={};function Tg(t){const e=t.toString();return Vd[e]||(Vd[e]=new XL),Vd[e]}function JL(t,e){const n=t.toString();return Fd[n]||(Fd[n]=e()),Fd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&fo(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="start",eM="close",tM="pLPCommand",nM="pRTLPCB",bC="id",AC="pw",NC="ser",rM="cb",sM="seg",iM="ts",oM="d",aM="dframe",PC=1870,DC=30,lM=PC-DC,uM=25e3,cM=3e4;class vi{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wl(e),this.stats_=Tg(n),this.urlFn=u=>(this.appCheckToken&&(u[gp]=this.appCheckToken),RC(n,SC,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ZL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cM)),jL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ig((...i)=>{const[o,a,u,c,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===j0)this.id=a,this.password=u;else if(o===eM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[j0]="t",r[NC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[rM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[yC]=xg,this.transportSessionId&&(r[vC]=this.transportSessionId),this.lastSessionId&&(r[TC]=this.lastSessionId),this.applicationId&&(r[IC]=this.applicationId),this.appCheckToken&&(r[gp]=this.appCheckToken),typeof location<"u"&&location.hostname&&xC.test(location.hostname)&&(r[wC]=EC);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){vi.forceAllow_=!0}static forceDisallow(){vi.forceDisallow_=!0}static isAvailable(){return vi.forceAllow_?!0:!vi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zL()&&!BL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hx(n),s=gC(r,lM);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[aM]="t",r[bC]=e,r[AC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=et(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ig{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ML(),window[tM+this.uniqueCallbackIdentifier]=e,window[nM+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ig.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){vt("frame writing exception"),a.stack&&vt(a.stack),vt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||vt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bC]=this.myID,e[AC]=this.myPW,e[NC]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+DC+r.length<=PC;){const o=this.pendingSegs.shift();r=r+"&"+sM+s+"="+o.seg+"&"+iM+s+"="+o.ts+"&"+oM+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(uM)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{vt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hM=16384,dM=45e3;let xc=null;typeof MozWebSocket<"u"?xc=MozWebSocket:typeof WebSocket<"u"&&(xc=WebSocket);class dn{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wl(this.connId),this.stats_=Tg(n),this.connURL=dn.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[yC]=xg,typeof location<"u"&&location.hostname&&xC.test(location.hostname)&&(o[wC]=EC),n&&(o[vC]=n),r&&(o[TC]=r),s&&(o[gp]=s),i&&(o[IC]=i),RC(e,CC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ts.set("previous_websocket_failure",!0);try{let r;KA(),this.mySock=new xc(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){dn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&xc!==null&&!dn.forceDisallow_}static previouslyFailed(){return Ts.isInMemoryStorage||Ts.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ts.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ma(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=et(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=gC(n,hM);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dM))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}dn.responsesRequiredToBeHealthy=2;dn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[vi,dn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=dn&&dn.isAvailable();let r=n&&!dn.previouslyFailed();if(e.webSocketOnly&&(n||Ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[dn];else{const s=this.transports_=[];for(const i of Ka.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ka.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ka.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM=6e4,pM=5e3,mM=10*1024,gM=100*1024,jd="t",U0="d",_M="s",z0="r",yM="e",B0="o",W0="a",$0="n",q0="p",vM="h";class wM{constructor(e,n,r,s,i,o,a,u,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wl("c:"+this.id+":"),this.transportManager_=new Ka(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=fa(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>gM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(jd in e){const n=e[jd];n===W0?this.upgradeIfSecondaryHealthy_():n===z0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===B0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fo("t",e),r=Fo("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:q0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:W0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:$0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fo("t",e),r=Fo("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fo(jd,e);if(U0 in e){const r=e[U0];if(n===vM){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===$0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===_M?this.onConnectionShutdown_(r):n===z0?this.onReset_(r):n===yM?mp("Server Error: "+r):n===B0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mp("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xg!==r&&Ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),fa(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(fM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):fa(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(pM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:q0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ts.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends LC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!km()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Tc}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=32,G0=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function me(){return new ve("")}function se(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zr(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function MC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function EM(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function VC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function FC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ve)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new ve(n,0)}function oe(t){return t.pieceNum_>=t.pieces_.length}function Lt(t,e){const n=se(t),r=se(e);if(n===null)return e;if(n===r)return Lt(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Cg(t,e){if(Zr(t)!==Zr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function fn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Zr(t)>Zr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class xM{constructor(e,n){this.errorPrefix_=n,this.parts_=VC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=eh(this.parts_[r]);jC(this)}}function TM(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=eh(e),jC(t)}function IM(t){const e=t.parts_.pop();t.byteLength_-=eh(e),t.parts_.length>0&&(t.byteLength_-=1)}function jC(t){if(t.byteLength_>G0)throw new Error(t.errorPrefix_+"has a key path longer than "+G0+" bytes ("+t.byteLength_+").");if(t.parts_.length>H0)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+H0+") or object contains a cycle "+ys(t))}function ys(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg extends LC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Sg}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=1e3,CM=60*5*1e3,K0=30*1e3,SM=1.3,kM=3e4,RM="server_kill",Q0=3;class Zn extends OC{constructor(e,n,r,s,i,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Zn.nextPersistentConnectionId_++,this.log_=wl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jo,this.maxReconnectDelay_=CM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Sg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Tc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(et(i)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new Zc,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const u=a.d,c=a.s;Zn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&pr(e,"w")){const r=Ui(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nN(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=K0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=tN(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+et(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mp("Unrecognized action received from server: "+et(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>kM&&(this.reconnectDelay_=jo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Zn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},c=function(f){B(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?vt("getToken() completed but was canceled"):(vt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new wM(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,w=>{Ut(w+" ("+this.repoInfo_.toString()+")"),this.interrupt(RM)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Ut(f),u())}}}interrupt(e){vt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){vt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zf(this.interruptReasons_)&&(this.reconnectDelay_=jo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Eg(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new ve(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){vt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Q0&&(this.reconnectDelay_=K0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){vt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Q0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+dC.replace(/\./g,"-")]=1,km()?e["framework.cordova"]=1:Zx()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tc.getInstance().currentlyOnline();return zf(this.interruptReasons_)&&e}}Zn.nextPersistentConnectionId_=0;Zn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ie(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new ie(Qi,e),s=new ie(Qi,n);return this.compare(r,s)!==0}minPost(){return ie.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lu;class UC extends xh{static get __EMPTY_NODE(){return lu}static set __EMPTY_NODE(e){lu=e}compare(e,n){return ho(e.name,n.name)}isDefinedOn(e){throw ro("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ie.MIN}maxPost(){return new ie(js,lu)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ie(e,lu)}toString(){return".key"}}const Ni=new UC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Mt.EMPTY_NODE,this.right=i??Mt.EMPTY_NODE}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Mt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ze.RED=!0;Ze.BLACK=!1;class bM{copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Mt{constructor(e,n=Mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ze.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new uu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new uu(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new uu(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new uu(this.root_,null,this.comparator_,!0,e)}}Mt.EMPTY_NODE=new bM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AM(t,e){return ho(t.name,e.name)}function kg(t,e){return ho(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _p;function NM(t){_p=t}const zC=function(t){return typeof t=="number"?"number:"+_C(t):"string:"+t},BC=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pr(e,".sv"),"Priority must be a string or number.")}else B(t===_p||t.isEmpty(),"priority of unexpected type.");B(t===_p||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Y0;class Ye{constructor(e,n=Ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),BC(this.priorityNode_)}static set __childrenNodeConstructor(e){Y0=e}static get __childrenNodeConstructor(){return Y0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return oe(e)?this:se(e)===".priority"?this.priorityNode_:Ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=se(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(B(r!==".priority"||Zr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=_C(this.value_):e+=this.value_,this.lazyHash_=pC(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ye.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ye.VALUE_TYPE_ORDER.indexOf(n),i=Ye.VALUE_TYPE_ORDER.indexOf(r);return B(s>=0,"Unknown leaf type: "+n),B(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let WC,$C;function PM(t){WC=t}function DM(t){$C=t}class OM extends xh{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?ho(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ie.MIN}maxPost(){return new ie(js,new Ye("[PRIORITY-POST]",$C))}makePost(e,n){const r=WC(e);return new ie(n,new Ye("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ve=new OM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LM=Math.log(2);class MM{constructor(e){const n=i=>parseInt(Math.log(i)/LM,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ic=function(t,e,n,r){t.sort(e);const s=function(u,c){const d=c-u;let f,g;if(d===0)return null;if(d===1)return f=t[u],g=n?n(f):f,new Ze(g,f.node,Ze.BLACK,null,null);{const w=parseInt(d/2,10)+u,T=s(u,w),R=s(w+1,c);return f=t[w],g=n?n(f):f,new Ze(g,f.node,Ze.BLACK,T,R)}},i=function(u){let c=null,d=null,f=t.length;const g=function(T,R){const N=f-T,x=f;f-=T;const E=s(N+1,x),C=t[N],A=n?n(C):C;w(new Ze(A,C.node,R,null,E))},w=function(T){c?(c.left=T,c=T):(d=T,c=T)};for(let T=0;T<u.count;++T){const R=u.nextBitIsOne(),N=Math.pow(2,u.count-(T+1));R?g(N,Ze.BLACK):(g(N,Ze.BLACK),g(N,Ze.RED))}return d},o=new MM(t.length),a=i(o);return new Mt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud;const ti={};class Kn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return B(ti&&Ve,"ChildrenNode.ts has not been loaded"),Ud=Ud||new Kn({".priority":ti},{".priority":Ve}),Ud}get(e){const n=Ui(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Mt?n:null}hasIndex(e){return pr(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(ie.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Ic(r,e.getCompare()):a=ti;const u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;const d=Object.assign({},this.indexes_);return d[u]=a,new Kn(d,c)}addToIndexes(e,n){const r=ic(this.indexes_,(s,i)=>{const o=Ui(this.indexSet_,i);if(B(o,"Missing index implementation for "+i),s===ti)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(ie.Wrap);let c=u.getNext();for(;c;)c.name!==e.name&&a.push(c),c=u.getNext();return a.push(e),Ic(a,o.getCompare())}else return ti;else{const a=n.get(e.name);let u=s;return a&&(u=u.remove(new ie(e.name,a))),u.insert(e,e.node)}});return new Kn(r,this.indexSet_)}removeFromIndexes(e,n){const r=ic(this.indexes_,s=>{if(s===ti)return s;{const i=n.get(e.name);return i?s.remove(new ie(e.name,i)):s}});return new Kn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;class Z{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&BC(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Uo||(Uo=new Z(new Mt(kg),null,Kn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Uo}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Uo:n}}getChild(e){const n=se(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new ie(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Uo:this.priorityNode_;return new Z(s,o,i)}}updateChild(e,n){const r=se(e);if(r===null)return n;{B(se(e)!==".priority"||Zr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ee(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(Ve,(o,a)=>{n[o]=a.val(e),r++,i&&Z.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zC(this.getPriority().val())+":"),this.forEachChild(Ve,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":pC(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new ie(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ie(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ie(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,ie.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,ie.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===El?-1:0}withIndex(e){if(e===Ni||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ni||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ve),s=n.getIterator(Ve);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ni?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VM extends Z{constructor(){super(new Mt(kg),Z.EMPTY_NODE,Kn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const El=new VM;Object.defineProperties(ie,{MIN:{value:new ie(Qi,Z.EMPTY_NODE)},MAX:{value:new ie(js,El)}});UC.__EMPTY_NODE=Z.EMPTY_NODE;Ye.__childrenNodeConstructor=Z;NM(El);DM(El);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM=!0;function st(t,e=null){if(t===null)return Z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ye(n,st(e))}if(!(t instanceof Array)&&FM){const n=[];let r=!1;if(zt(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=st(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new ie(o,u)))}}),n.length===0)return Z.EMPTY_NODE;const i=Ic(n,AM,o=>o.name,kg);if(r){const o=Ic(n,Ve.getCompare());return new Z(i,st(e),new Kn({".priority":o},{".priority":Ve}))}else return new Z(i,st(e),Kn.Default)}else{let n=Z.EMPTY_NODE;return zt(t,(r,s)=>{if(pr(t,r)&&r.substring(0,1)!=="."){const i=st(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(st(e))}}PM(st);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM extends xh{constructor(e){super(),this.indexPath_=e,B(!oe(e)&&se(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?ho(e.name,n.name):i}makePost(e,n){const r=st(e),s=Z.EMPTY_NODE.updateChild(this.indexPath_,r);return new ie(n,s)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,El);return new ie(js,e)}toString(){return VC(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UM extends xh{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ho(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ie.MIN}maxPost(){return ie.MAX}makePost(e,n){const r=st(e);return new ie(n,r)}toString(){return".value"}}const zM=new UM;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(t){return{type:"value",snapshotNode:t}}function Yi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ya(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function BM(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Qa(n,a)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Yi(n,r)):o.trackChildChange(Ya(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ve,(s,i)=>{n.hasChild(s)||r.trackChildChange(Qa(s,i))}),n.isLeafNode()||n.forEachChild(Ve,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Ya(s,i,o))}else r.trackChildChange(Yi(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.indexedFilter_=new Rg(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xa.getStartPost_(e),this.endPost_=Xa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new ie(n,r))||(r=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=Z.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(Z.EMPTY_NODE);const i=this;return n.forEachChild(Ve,(o,a)=>{i.matches(new ie(o,a))||(s=s.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Xa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new ie(n,r))||(r=Z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=Z.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(Z.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(g,w)=>f(w,g)}else o=this.index_.getCompare();const a=e;B(a.numChildren()===this.limit_,"");const u=new ie(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let g=s.getChildAfterChild(this.index_,c,this.reverse_);for(;g!=null&&(g.name===n||a.hasChild(g.name));)g=s.getChildAfterChild(this.index_,g,this.reverse_);const w=g==null?1:o(g,u);if(d&&!r.isEmpty()&&w>=0)return i!=null&&i.trackChildChange(Ya(n,r,f)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Qa(n,f));const R=a.updateImmediateChild(n,Z.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(i!=null&&i.trackChildChange(Yi(g.name,g.node)),R.updateImmediateChild(g.name,g.node)):R}}else return r.isEmpty()?e:d&&o(c,u)>=0?(i!=null&&(i.trackChildChange(Qa(c.name,c.node)),i.trackChildChange(Yi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,Z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qi}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:js}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new bg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $M(t){return t.loadsAllData()?new Rg(t.getIndex()):t.hasLimit()?new WM(t):new Xa(t)}function X0(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ve?n="$priority":t.index_===zM?n="$value":t.index_===Ni?n="$key":(B(t.index_ instanceof jM,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=et(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=et(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+et(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=et(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+et(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function J0(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ve&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends OC{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=wl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Cc.getListenId_(e,r),a={};this.listens_[o]=a;const u=X0(e._queryParams);this.restRequest_(i+".json",u,(c,d)=>{let f=d;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(i,f,!1,r),Ui(this.listens_,o)===a){let g;c?c===401?g="permission_denied":g="rest_error:"+c:g="ok",s(g,null)}})}unlisten(e,n){const r=Cc.getListenId_(e,n);delete this.listens_[r]}get(e){const n=X0(e._queryParams),r=e._path.toString(),s=new Zc;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+so(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=Ma(a.responseText)}catch{Ut("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&Ut("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(){return{value:null,children:new Map}}function HC(t,e,n){if(oe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=se(e);t.children.has(r)||t.children.set(r,Sc());const s=t.children.get(r);e=Ee(e),HC(s,e,n)}}function yp(t,e,n){t.value!==null?n(e,t.value):HM(t,(r,s)=>{const i=new ve(e.toString()+"/"+r);yp(s,i,n)})}function HM(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&zt(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=10*1e3,KM=30*1e3,QM=5*60*1e3;class YM{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new GM(e);const r=Z0+(KM-Z0)*Math.random();fa(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;zt(e,(s,i)=>{i>0&&pr(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),fa(this.reportStats_.bind(this),Math.floor(Math.random()*2*QM))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pn||(pn={}));function GC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ag(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ng(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=pn.ACK_USER_WRITE,this.source=GC()}operationForChild(e){if(oe(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new kc(me(),n,this.revert)}}else return B(se(this.path)===e,"operationForChild called for unrelated child."),new kc(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n){this.source=e,this.path=n,this.type=pn.LISTEN_COMPLETE}operationForChild(e){return oe(this.path)?new Ja(this.source,me()):new Ja(this.source,Ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=pn.OVERWRITE}operationForChild(e){return oe(this.path)?new Us(this.source,me(),this.snap.getImmediateChild(e)):new Us(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=pn.MERGE}operationForChild(e){if(oe(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new Us(this.source,me(),n.value):new Za(this.source,me(),n)}else return B(se(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Za(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(oe(e))return this.isFullyInitialized()&&!this.filtered_;const n=se(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XM{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function JM(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(BM(o.childName,o.snapshotNode))}),zo(t,s,"child_removed",e,r,n),zo(t,s,"child_added",e,r,n),zo(t,s,"child_moved",i,r,n),zo(t,s,"child_changed",e,r,n),zo(t,s,"value",e,r,n),s}function zo(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,u)=>eV(t,a,u)),o.forEach(a=>{const u=ZM(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(u,t.query_))})})}function ZM(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function eV(t,e,n){if(e.childName==null||n.childName==null)throw ro("Should only compare child_ events.");const r=new ie(e.childName,e.snapshotNode),s=new ie(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(t,e){return{eventCache:t,serverCache:e}}function pa(t,e,n,r){return Th(new zs(e,n,r),t.serverCache)}function KC(t,e,n,r){return Th(t.eventCache,new zs(e,n,r))}function vp(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zd;const tV=()=>(zd||(zd=new Mt(UL)),zd);class Ce{constructor(e,n=tV()){this.value=e,this.children=n}static fromObject(e){let n=new Ce(null);return zt(e,(r,s)=>{n=n.set(new ve(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:me(),value:this.value};if(oe(e))return null;{const r=se(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ee(e),n);return i!=null?{path:Ge(new ve(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(oe(e))return this;{const n=se(e),r=this.children.get(n);return r!==null?r.subtree(Ee(e)):new Ce(null)}}set(e,n){if(oe(e))return new Ce(n,this.children);{const r=se(e),i=(this.children.get(r)||new Ce(null)).set(Ee(e),n),o=this.children.insert(r,i);return new Ce(this.value,o)}}remove(e){if(oe(e))return this.children.isEmpty()?new Ce(null):new Ce(null,this.children);{const n=se(e),r=this.children.get(n);if(r){const s=r.remove(Ee(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new Ce(null):new Ce(this.value,i)}else return this}}get(e){if(oe(e))return this.value;{const n=se(e),r=this.children.get(n);return r?r.get(Ee(e)):null}}setTree(e,n){if(oe(e))return n;{const r=se(e),i=(this.children.get(r)||new Ce(null)).setTree(Ee(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ce(this.value,o)}}fold(e){return this.fold_(me(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(Ge(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,me(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(oe(e))return null;{const i=se(e),o=this.children.get(i);return o?o.findOnPath_(Ee(e),Ge(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,me(),n)}foreachOnPath_(e,n,r){if(oe(e))return this;{this.value&&r(n,this.value);const s=se(e),i=this.children.get(s);return i?i.foreachOnPath_(Ee(e),Ge(n,s),r):new Ce(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(Ge(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.writeTree_=e}static empty(){return new vn(new Ce(null))}}function ma(t,e,n){if(oe(e))return new vn(new Ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Lt(s,e);return i=i.updateChild(o,n),new vn(t.writeTree_.set(s,i))}else{const s=new Ce(n),i=t.writeTree_.setTree(e,s);return new vn(i)}}}function ew(t,e,n){let r=t;return zt(n,(s,i)=>{r=ma(r,Ge(e,s),i)}),r}function tw(t,e){if(oe(e))return vn.empty();{const n=t.writeTree_.setTree(e,new Ce(null));return new vn(n)}}function wp(t,e){return Qs(t,e)!=null}function Qs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Lt(n.path,e)):null}function nw(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ve,(r,s)=>{e.push(new ie(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new ie(r,s.value))}),e}function Hr(t,e){if(oe(e))return t;{const n=Qs(t,e);return n!=null?new vn(new Ce(n)):new vn(t.writeTree_.subtree(e))}}function Ep(t){return t.writeTree_.isEmpty()}function Xi(t,e){return QC(me(),t.writeTree_,e)}function QC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(B(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=QC(Ge(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ge(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t,e){return ZC(e,t)}function nV(t,e,n,r,s){B(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=ma(t.visibleWrites,e,n)),t.lastWriteId=r}function rV(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function sV(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&iV(a,r.path)?s=!1:fn(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return oV(t),!0;if(r.snap)t.visibleWrites=tw(t.visibleWrites,r.path);else{const a=r.children;zt(a,u=>{t.visibleWrites=tw(t.visibleWrites,Ge(r.path,u))})}return!0}else return!1}function iV(t,e){if(t.snap)return fn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&fn(Ge(t.path,n),e))return!0;return!1}function oV(t){t.visibleWrites=YC(t.allWrites,aV,me()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function aV(t){return t.visible}function YC(t,e,n){let r=vn.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)fn(n,o)?(a=Lt(n,o),r=ma(r,a,i.snap)):fn(o,n)&&(a=Lt(o,n),r=ma(r,me(),i.snap.getChild(a)));else if(i.children){if(fn(n,o))a=Lt(n,o),r=ew(r,a,i.children);else if(fn(o,n))if(a=Lt(o,n),oe(a))r=ew(r,me(),i.children);else{const u=Ui(i.children,se(a));if(u){const c=u.getChild(Ee(a));r=ma(r,me(),c)}}}else throw ro("WriteRecord should have .snap or .children")}}return r}function XC(t,e,n,r,s){if(!r&&!s){const i=Qs(t.visibleWrites,e);if(i!=null)return i;{const o=Hr(t.visibleWrites,e);if(Ep(o))return n;if(n==null&&!wp(o,me()))return null;{const a=n||Z.EMPTY_NODE;return Xi(o,a)}}}else{const i=Hr(t.visibleWrites,e);if(!s&&Ep(i))return n;if(!s&&n==null&&!wp(i,me()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(fn(c.path,e)||fn(e,c.path))},a=YC(t.allWrites,o,e),u=n||Z.EMPTY_NODE;return Xi(a,u)}}}function lV(t,e,n){let r=Z.EMPTY_NODE;const s=Qs(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ve,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Hr(t.visibleWrites,e);return n.forEachChild(Ve,(o,a)=>{const u=Xi(Hr(i,new ve(o)),a);r=r.updateImmediateChild(o,u)}),nw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Hr(t.visibleWrites,e);return nw(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function uV(t,e,n,r,s){B(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=Ge(e,n);if(wp(t.visibleWrites,i))return null;{const o=Hr(t.visibleWrites,i);return Ep(o)?s.getChild(n):Xi(o,s.getChild(n))}}function cV(t,e,n,r){const s=Ge(e,n),i=Qs(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Hr(t.visibleWrites,s);return Xi(o,r.getNode().getImmediateChild(n))}else return null}function hV(t,e){return Qs(t.visibleWrites,e)}function dV(t,e,n,r,s,i,o){let a;const u=Hr(t.visibleWrites,e),c=Qs(u,me());if(c!=null)a=c;else if(n!=null)a=Xi(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],f=o.getCompare(),g=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let w=g.getNext();for(;w&&d.length<s;)f(w,r)!==0&&d.push(w),w=g.getNext();return d}else return[]}function fV(){return{visibleWrites:vn.empty(),allWrites:[],lastWriteId:-1}}function Rc(t,e,n,r){return XC(t.writeTree,t.treePath,e,n,r)}function Dg(t,e){return lV(t.writeTree,t.treePath,e)}function rw(t,e,n,r){return uV(t.writeTree,t.treePath,e,n,r)}function bc(t,e){return hV(t.writeTree,Ge(t.treePath,e))}function pV(t,e,n,r,s,i){return dV(t.writeTree,t.treePath,e,n,r,s,i)}function Og(t,e,n){return cV(t.writeTree,t.treePath,e,n)}function JC(t,e){return ZC(Ge(t.treePath,e),t.writeTree)}function ZC(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Ya(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Qa(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Yi(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Ya(r,e.snapshotNode,s.oldSnap));else throw ro("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const eS=new gV;class Lg{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new zs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Og(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bs(this.viewCache_),i=pV(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(t){return{filter:t}}function yV(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function vV(t,e,n,r,s){const i=new mV;let o,a;if(n.type===pn.OVERWRITE){const c=n;c.source.fromUser?o=xp(t,e,c.path,c.snap,r,s,i):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!oe(c.path),o=Ac(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===pn.MERGE){const c=n;c.source.fromUser?o=EV(t,e,c.path,c.children,r,s,i):(B(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Tp(t,e,c.path,c.children,r,s,a,i))}else if(n.type===pn.ACK_USER_WRITE){const c=n;c.revert?o=IV(t,e,c.path,r,s,i):o=xV(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===pn.LISTEN_COMPLETE)o=TV(t,e,n.path,r,i);else throw ro("Unknown operation type: "+n.type);const u=i.getChanges();return wV(e,o,u),{viewCache:o,changes:u}}function wV(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=vp(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(qC(vp(e)))}}function tS(t,e,n,r,s,i){const o=e.eventCache;if(bc(r,n)!=null)return e;{let a,u;if(oe(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Bs(e),d=c instanceof Z?c:Z.EMPTY_NODE,f=Dg(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const c=Rc(r,Bs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=se(n);if(c===".priority"){B(Zr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();u=e.serverCache.getNode();const f=rw(r,n,d,u);f!=null?a=t.filter.updatePriority(d,f):a=o.getNode()}else{const d=Ee(n);let f;if(o.isCompleteForChild(c)){u=e.serverCache.getNode();const g=rw(r,n,o.getNode(),u);g!=null?f=o.getNode().getImmediateChild(c).updateChild(d,g):f=o.getNode().getImmediateChild(c)}else f=Og(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,d,s,i):a=o.getNode()}}return pa(e,a,o.isFullyInitialized()||oe(n),t.filter.filtersNodes())}}function Ac(t,e,n,r,s,i,o,a){const u=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(oe(n))c=d.updateFullNode(u.getNode(),r,null);else if(d.filtersNodes()&&!u.isFiltered()){const w=u.getNode().updateChild(n,r);c=d.updateFullNode(u.getNode(),w,null)}else{const w=se(n);if(!u.isCompleteForPath(n)&&Zr(n)>1)return e;const T=Ee(n),N=u.getNode().getImmediateChild(w).updateChild(T,r);w===".priority"?c=d.updatePriority(u.getNode(),N):c=d.updateChild(u.getNode(),w,N,T,eS,null)}const f=KC(e,c,u.isFullyInitialized()||oe(n),d.filtersNodes()),g=new Lg(s,f,i);return tS(t,f,n,s,g,a)}function xp(t,e,n,r,s,i,o){const a=e.eventCache;let u,c;const d=new Lg(s,e,i);if(oe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=pa(e,c,!0,t.filter.filtersNodes());else{const f=se(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),u=pa(e,c,a.isFullyInitialized(),a.isFiltered());else{const g=Ee(n),w=a.getNode().getImmediateChild(f);let T;if(oe(g))T=r;else{const R=d.getCompleteChild(f);R!=null?MC(g)===".priority"&&R.getChild(FC(g)).isEmpty()?T=R:T=R.updateChild(g,r):T=Z.EMPTY_NODE}if(w.equals(T))u=e;else{const R=t.filter.updateChild(a.getNode(),f,T,g,d,o);u=pa(e,R,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function sw(t,e){return t.eventCache.isCompleteForChild(e)}function EV(t,e,n,r,s,i,o){let a=e;return r.foreach((u,c)=>{const d=Ge(n,u);sw(e,se(d))&&(a=xp(t,a,d,c,s,i,o))}),r.foreach((u,c)=>{const d=Ge(n,u);sw(e,se(d))||(a=xp(t,a,d,c,s,i,o))}),a}function iw(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Tp(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,c;oe(n)?c=r:c=new Ce(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((f,g)=>{if(d.hasChild(f)){const w=e.serverCache.getNode().getImmediateChild(f),T=iw(t,w,g);u=Ac(t,u,new ve(f),T,s,i,o,a)}}),c.children.inorderTraversal((f,g)=>{const w=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!d.hasChild(f)&&!w){const T=e.serverCache.getNode().getImmediateChild(f),R=iw(t,T,g);u=Ac(t,u,new ve(f),R,s,i,o,a)}}),u}function xV(t,e,n,r,s,i,o){if(bc(s,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(oe(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return Ac(t,e,n,u.getNode().getChild(n),s,i,a,o);if(oe(n)){let c=new Ce(null);return u.getNode().forEachChild(Ni,(d,f)=>{c=c.set(new ve(d),f)}),Tp(t,e,n,c,s,i,a,o)}else return e}else{let c=new Ce(null);return r.foreach((d,f)=>{const g=Ge(n,d);u.isCompleteForPath(g)&&(c=c.set(d,u.getNode().getChild(g)))}),Tp(t,e,n,c,s,i,a,o)}}function TV(t,e,n,r,s){const i=e.serverCache,o=KC(e,i.getNode(),i.isFullyInitialized()||oe(n),i.isFiltered());return tS(t,o,n,r,eS,s)}function IV(t,e,n,r,s,i){let o;if(bc(r,n)!=null)return e;{const a=new Lg(r,e,s),u=e.eventCache.getNode();let c;if(oe(n)||se(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Rc(r,Bs(e));else{const f=e.serverCache.getNode();B(f instanceof Z,"serverChildren would be complete if leaf node"),d=Dg(r,f)}d=d,c=t.filter.updateFullNode(u,d,i)}else{const d=se(n);let f=Og(r,d,e.serverCache);f==null&&e.serverCache.isCompleteForChild(d)&&(f=u.getImmediateChild(d)),f!=null?c=t.filter.updateChild(u,d,f,Ee(n),a,i):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(u,d,Z.EMPTY_NODE,Ee(n),a,i):c=u,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Rc(r,Bs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||bc(r,me())!=null,pa(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new Rg(r.getIndex()),i=$M(r);this.processor_=_V(i);const o=n.serverCache,a=n.eventCache,u=s.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(Z.EMPTY_NODE,a.getNode(),null),d=new zs(u,o.isFullyInitialized(),s.filtersNodes()),f=new zs(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Th(f,d),this.eventGenerator_=new XM(this.query_)}get query(){return this.query_}}function SV(t){return t.viewCache_.serverCache.getNode()}function kV(t,e){const n=Bs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!oe(e)&&!n.getImmediateChild(se(e)).isEmpty())?n.getChild(e):null}function ow(t){return t.eventRegistrations_.length===0}function RV(t,e){t.eventRegistrations_.push(e)}function aw(t,e,n){const r=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function lw(t,e,n,r){e.type===pn.MERGE&&e.source.queryId!==null&&(B(Bs(t.viewCache_),"We should always have a full cache before handling merges"),B(vp(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=vV(t.processor_,s,e,n,r);return yV(t.processor_,i.viewCache),B(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,nS(t,i.changes,i.viewCache.eventCache.getNode(),null)}function bV(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ve,(i,o)=>{r.push(Yi(i,o))}),n.isFullyInitialized()&&r.push(qC(n.getNode())),nS(t,r,n.getNode(),e)}function nS(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return JM(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc;class AV{constructor(){this.views=new Map}}function NV(t){B(!Nc,"__referenceConstructor has already been defined"),Nc=t}function PV(){return B(Nc,"Reference.ts has not been loaded"),Nc}function DV(t){return t.views.size===0}function Mg(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return B(i!=null,"SyncTree gave us an op for an invalid query."),lw(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(lw(o,e,n,r));return i}}function OV(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Rc(n,s?r:null),u=!1;a?u=!0:r instanceof Z?(a=Dg(n,r),u=!1):(a=Z.EMPTY_NODE,u=!1);const c=Th(new zs(a,u,!1),new zs(r,s,!1));return new CV(e,c)}return o}function LV(t,e,n,r,s,i){const o=OV(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),RV(o,n),bV(o,n)}function MV(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=es(t);if(s==="default")for(const[u,c]of t.views.entries())o=o.concat(aw(c,n,r)),ow(c)&&(t.views.delete(u),c.query._queryParams.loadsAllData()||i.push(c.query));else{const u=t.views.get(s);u&&(o=o.concat(aw(u,n,r)),ow(u)&&(t.views.delete(s),u.query._queryParams.loadsAllData()||i.push(u.query)))}return a&&!es(t)&&i.push(new(PV())(e._repo,e._path)),{removed:i,events:o}}function rS(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pi(t,e){let n=null;for(const r of t.views.values())n=n||kV(r,e);return n}function sS(t,e){if(e._queryParams.loadsAllData())return Ih(t);{const r=e._queryIdentifier;return t.views.get(r)}}function iS(t,e){return sS(t,e)!=null}function es(t){return Ih(t)!=null}function Ih(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pc;function VV(t){B(!Pc,"__referenceConstructor has already been defined"),Pc=t}function FV(){return B(Pc,"Reference.ts has not been loaded"),Pc}let jV=1;class uw{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ce(null),this.pendingWriteTree_=fV(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oS(t,e,n,r,s){return nV(t.pendingWriteTree_,e,n,r,s),s?xl(t,new Us(GC(),e,n)):[]}function Is(t,e,n=!1){const r=rV(t.pendingWriteTree_,e);if(sV(t.pendingWriteTree_,e)){let i=new Ce(null);return r.snap!=null?i=i.set(me(),!0):zt(r.children,o=>{i=i.set(new ve(o),!0)}),xl(t,new kc(r.path,i,n))}else return[]}function Ch(t,e,n){return xl(t,new Us(Ag(),e,n))}function UV(t,e,n){const r=Ce.fromObject(n);return xl(t,new Za(Ag(),e,r))}function zV(t,e){return xl(t,new Ja(Ag(),e))}function BV(t,e,n){const r=Fg(t,n);if(r){const s=jg(r),i=s.path,o=s.queryId,a=Lt(i,e),u=new Ja(Ng(o),a);return Ug(t,i,u)}else return[]}function Ip(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||iS(o,e))){const u=MV(o,e,n,r);DV(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=u.removed;if(a=u.events,!s){const d=c.findIndex(g=>g._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(i,(g,w)=>es(w));if(d&&!f){const g=t.syncPointTree_.subtree(i);if(!g.isEmpty()){const w=qV(g);for(let T=0;T<w.length;++T){const R=w[T],N=R.query,x=uS(t,R);t.listenProvider_.startListening(ga(N),Dc(t,N),x.hashFn,x.onComplete)}}}!f&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(ga(e),null):c.forEach(g=>{const w=t.queryToTagMap.get(Sh(g));t.listenProvider_.stopListening(ga(g),w)}))}HV(t,c)}return a}function WV(t,e,n,r){const s=Fg(t,r);if(s!=null){const i=jg(s),o=i.path,a=i.queryId,u=Lt(o,e),c=new Us(Ng(a),u,n);return Ug(t,o,c)}else return[]}function $V(t,e,n,r){const s=Fg(t,r);if(s){const i=jg(s),o=i.path,a=i.queryId,u=Lt(o,e),c=Ce.fromObject(n),d=new Za(Ng(a),u,c);return Ug(t,o,d)}else return[]}function cw(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(g,w)=>{const T=Lt(g,s);i=i||Pi(w,T),o=o||es(w)});let a=t.syncPointTree_.get(s);a?(o=o||es(a),i=i||Pi(a,me())):(a=new AV,t.syncPointTree_=t.syncPointTree_.set(s,a));let u;i!=null?u=!0:(u=!1,i=Z.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((w,T)=>{const R=Pi(T,me());R&&(i=i.updateImmediateChild(w,R))}));const c=iS(a,e);if(!c&&!e._queryParams.loadsAllData()){const g=Sh(e);B(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const w=GV();t.queryToTagMap.set(g,w),t.tagToQueryMap.set(w,g)}const d=Pg(t.pendingWriteTree_,s);let f=LV(a,e,n,d,i,u);if(!c&&!o&&!r){const g=sS(a,e);f=f.concat(KV(t,e,g))}return f}function Vg(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=Lt(o,e),c=Pi(a,u);if(c)return c});return XC(s,e,i,n,!0)}function xl(t,e){return aS(e,t.syncPointTree_,null,Pg(t.pendingWriteTree_,me()))}function aS(t,e,n,r){if(oe(t.path))return lS(t,e,n,r);{const s=e.get(me());n==null&&s!=null&&(n=Pi(s,me()));let i=[];const o=se(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const c=n?n.getImmediateChild(o):null,d=JC(r,o);i=i.concat(aS(a,u,c,d))}return s&&(i=i.concat(Mg(s,t,r,n))),i}}function lS(t,e,n,r){const s=e.get(me());n==null&&s!=null&&(n=Pi(s,me()));let i=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,c=JC(r,o),d=t.operationForChild(o);d&&(i=i.concat(lS(d,a,u,c)))}),s&&(i=i.concat(Mg(s,t,r,n))),i}function uS(t,e){const n=e.query,r=Dc(t,n);return{hashFn:()=>(SV(e)||Z.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?BV(t,n._path,r):zV(t,n._path);{const i=WL(s,n);return Ip(t,n,null,i)}}}}function Dc(t,e){const n=Sh(e);return t.queryToTagMap.get(n)}function Sh(t){return t._path.toString()+"$"+t._queryIdentifier}function Fg(t,e){return t.tagToQueryMap.get(e)}function jg(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Ug(t,e,n){const r=t.syncPointTree_.get(e);B(r,"Missing sync point for query tag that we're tracking");const s=Pg(t.pendingWriteTree_,e);return Mg(r,n,s,null)}function qV(t){return t.fold((e,n,r)=>{if(n&&es(n))return[Ih(n)];{let s=[];return n&&(s=rS(n)),zt(r,(i,o)=>{s=s.concat(o)}),s}})}function ga(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(FV())(t._repo,t._path):t}function HV(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=Sh(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function GV(){return jV++}function KV(t,e,n){const r=e._path,s=Dc(t,e),i=uS(t,n),o=t.listenProvider_.startListening(ga(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)B(!es(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((c,d,f)=>{if(!oe(c)&&d&&es(d))return[Ih(d).query];{let g=[];return d&&(g=g.concat(rS(d).map(w=>w.query))),zt(f,(w,T)=>{g=g.concat(T)}),g}});for(let c=0;c<u.length;++c){const d=u[c];t.listenProvider_.stopListening(ga(d),Dc(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new zg(n)}node(){return this.node_}}class Bg{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ge(this.path_,e);return new Bg(this.syncTree_,n)}node(){return Vg(this.syncTree_,this.path_)}}const QV=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},hw=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return YV(t[".sv"],e,n);if(typeof t[".sv"]=="object")return XV(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},YV=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},XV=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&B(!1,"Unexpected increment value: "+r);const s=e.node();if(B(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},JV=function(t,e,n,r){return Wg(e,new Bg(n,t),r)},cS=function(t,e,n){return Wg(t,new zg(e),n)};function Wg(t,e,n){const r=t.getPriority().val(),s=hw(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=hw(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ye(a,st(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ye(s))),o.forEachChild(Ve,(a,u)=>{const c=Wg(u,e.getImmediateChild(a),n);c!==u&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function qg(t,e){let n=e instanceof ve?e:new ve(e),r=t,s=se(n);for(;s!==null;){const i=Ui(r.node.children,s)||{children:{},childCount:0};r=new $g(s,r,i),n=Ee(n),s=se(n)}return r}function po(t){return t.node.value}function hS(t,e){t.node.value=e,Cp(t)}function dS(t){return t.node.childCount>0}function ZV(t){return po(t)===void 0&&!dS(t)}function kh(t,e){zt(t.node.children,(n,r)=>{e(new $g(n,t,r))})}function fS(t,e,n,r){n&&e(t),kh(t,s=>{fS(s,e,!0)})}function eF(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Tl(t){return new ve(t.parent===null?t.name:Tl(t.parent)+"/"+t.name)}function Cp(t){t.parent!==null&&tF(t.parent,t.name,t)}function tF(t,e,n){const r=ZV(n),s=pr(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Cp(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Cp(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nF=/[\[\].#$\/\u0000-\u001F\u007F]/,rF=/[\[\].#$\u0000-\u001F\u007F]/,Bd=10*1024*1024,pS=function(t){return typeof t=="string"&&t.length!==0&&!nF.test(t)},mS=function(t){return typeof t=="string"&&t.length!==0&&!rF.test(t)},sF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mS(t)},gS=function(t,e,n,r){r&&e===void 0||Hg(Rm(t,"value"),e,n)},Hg=function(t,e,n){const r=n instanceof ve?new xM(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ys(r));if(typeof e=="function")throw new Error(t+"contains a function "+ys(r)+" with contents = "+e.toString());if(mC(e))throw new Error(t+"contains "+e.toString()+" "+ys(r));if(typeof e=="string"&&e.length>Bd/3&&eh(e)>Bd)throw new Error(t+"contains a string greater than "+Bd+" utf8 bytes "+ys(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(zt(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!pS(o)))throw new Error(t+" contains an invalid key ("+o+") "+ys(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TM(r,o),Hg(t,a,r),IM(r)}),s&&i)throw new Error(t+' contains ".value" child '+ys(r)+" in addition to actual children.")}},_S=function(t,e,n,r){if(!mS(n))throw new Error(Rm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iF=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_S(t,e,n)},yS=function(t,e){if(se(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},oF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sF(n))throw new Error(Rm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gg(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Cg(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function vS(t,e,n){Gg(t,n),wS(t,r=>Cg(r,e))}function ur(t,e,n){Gg(t,n),wS(t,r=>fn(r,e)||fn(e,r))}function wS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(lF(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();da&&vt("event: "+n.toString()),fo(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uF="repo_interrupt",cF=25;class hF{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Sc(),this.transactionQueueTree_=new $g,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dF(t,e,n){if(t.stats_=Tg(t.repoInfo_),t.forceRestClient_||GL())t.server_=new Cc(t.repoInfo_,(r,s,i,o)=>{dw(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fw(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{et(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Zn(t.repoInfo_,e,(r,s,i,o)=>{dw(t,r,s,i,o)},r=>{fw(t,r)},r=>{fF(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=JL(t.repoInfo_,()=>new YM(t.stats_,t.server_)),t.infoData_=new qM,t.infoSyncTree_=new uw({startListening:(r,s,i,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=Ch(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qg(t,"connected",!1),t.serverSyncTree_=new uw({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,u)=>{const c=o(a,u);ur(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function ES(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Kg(t){return QV({timestamp:ES(t)})}function dw(t,e,n,r,s){t.dataUpdateCount++;const i=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const u=ic(n,c=>st(c));o=$V(t.serverSyncTree_,i,u,s)}else{const u=st(n);o=WV(t.serverSyncTree_,i,u,s)}else if(r){const u=ic(n,c=>st(c));o=UV(t.serverSyncTree_,i,u)}else{const u=st(n);o=Ch(t.serverSyncTree_,i,u)}let a=i;o.length>0&&(a=Rh(t,i)),ur(t.eventQueue_,a,o)}function fw(t,e){Qg(t,"connected",e),e===!1&&mF(t)}function fF(t,e){zt(e,(n,r)=>{Qg(t,n,r)})}function Qg(t,e,n){const r=new ve("/.info/"+e),s=st(n);t.infoData_.updateSnapshot(r,s);const i=Ch(t.infoSyncTree_,r,s);ur(t.eventQueue_,r,i)}function xS(t){return t.nextWriteId_++}function pF(t,e,n,r,s){Yg(t,"set",{path:e.toString(),value:n,priority:r});const i=Kg(t),o=st(n,r),a=Vg(t.serverSyncTree_,e),u=cS(o,a,i),c=xS(t),d=oS(t.serverSyncTree_,e,u,c,!0);Gg(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(g,w)=>{const T=g==="ok";T||Ut("set at "+e+" failed: "+g);const R=Is(t.serverSyncTree_,c,!T);ur(t.eventQueue_,e,R),yF(t,s,g,w)});const f=kS(t,e);Rh(t,f),ur(t.eventQueue_,f,[])}function mF(t){Yg(t,"onDisconnectEvents");const e=Kg(t),n=Sc();yp(t.onDisconnect_,me(),(s,i)=>{const o=JV(s,i,t.serverSyncTree_,e);HC(n,s,o)});let r=[];yp(n,me(),(s,i)=>{r=r.concat(Ch(t.serverSyncTree_,s,i));const o=kS(t,s);Rh(t,o)}),t.onDisconnect_=Sc(),ur(t.eventQueue_,me(),r)}function gF(t,e,n){let r;se(e._path)===".info"?r=cw(t.infoSyncTree_,e,n):r=cw(t.serverSyncTree_,e,n),vS(t.eventQueue_,e._path,r)}function pw(t,e,n){let r;se(e._path)===".info"?r=Ip(t.infoSyncTree_,e,n):r=Ip(t.serverSyncTree_,e,n),vS(t.eventQueue_,e._path,r)}function _F(t){t.persistentConnection_&&t.persistentConnection_.interrupt(uF)}function Yg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),vt(n,...e)}function yF(t,e,n,r){e&&fo(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function TS(t,e,n){return Vg(t.serverSyncTree_,e,n)||Z.EMPTY_NODE}function Xg(t,e=t.transactionQueueTree_){if(e||bh(t,e),po(e)){const n=CS(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&vF(t,Tl(e),n)}else dS(e)&&kh(e,n=>{Xg(t,n)})}function vF(t,e,n){const r=n.map(c=>c.currentWriteId),s=TS(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];B(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const f=Lt(e,d.path);i=i.updateChild(f,d.currentOutputSnapshotRaw)}const a=i.val(!0),u=e;t.server_.put(u.toString(),a,c=>{Yg(t,"transaction put response",{path:u.toString(),status:c});let d=[];if(c==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,d=d.concat(Is(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();bh(t,qg(t.transactionQueueTree_,e)),Xg(t,t.transactionQueueTree_),ur(t.eventQueue_,e,d);for(let g=0;g<f.length;g++)fo(f[g])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Ut("transaction at "+u.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}Rh(t,e)}},o)}function Rh(t,e){const n=IS(t,e),r=Tl(n),s=CS(t,n);return wF(t,s,r),r}function wF(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],c=Lt(n,u.path);let d=!1,f;if(B(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,f=u.abortReason,s=s.concat(Is(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=cF)d=!0,f="maxretry",s=s.concat(Is(t.serverSyncTree_,u.currentWriteId,!0));else{const g=TS(t,u.path,o);u.currentInputSnapshot=g;const w=e[a].update(g.val());if(w!==void 0){Hg("transaction failed: Data returned ",w,u.path);let T=st(w);typeof w=="object"&&w!=null&&pr(w,".priority")||(T=T.updatePriority(g.getPriority()));const N=u.currentWriteId,x=Kg(t),E=cS(T,g,x);u.currentOutputSnapshotRaw=T,u.currentOutputSnapshotResolved=E,u.currentWriteId=xS(t),o.splice(o.indexOf(N),1),s=s.concat(oS(t.serverSyncTree_,u.path,E,u.currentWriteId,u.applyLocally)),s=s.concat(Is(t.serverSyncTree_,N,!0))}else d=!0,f="nodata",s=s.concat(Is(t.serverSyncTree_,u.currentWriteId,!0))}ur(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}bh(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)fo(r[a]);Xg(t,t.transactionQueueTree_)}function IS(t,e){let n,r=t.transactionQueueTree_;for(n=se(e);n!==null&&po(r)===void 0;)r=qg(r,n),e=Ee(e),n=se(e);return r}function CS(t,e){const n=[];return SS(t,e,n),n.sort((r,s)=>r.order-s.order),n}function SS(t,e,n){const r=po(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);kh(e,s=>{SS(t,s,n)})}function bh(t,e){const n=po(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,hS(e,n.length>0?n:void 0)}kh(e,r=>{bh(t,r)})}function kS(t,e){const n=Tl(IS(t,e)),r=qg(t.transactionQueueTree_,e);return eF(r,s=>{Wd(t,s)}),Wd(t,r),fS(r,s=>{Wd(t,s)}),n}function Wd(t,e){const n=po(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(B(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(B(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Is(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?hS(e,void 0):n.length=i+1,ur(t.eventQueue_,Tl(e),s);for(let o=0;o<r.length;o++)fo(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EF(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function xF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const mw=function(t,e){const n=TF(t),r=n.namespace;n.domain==="firebase.com"&&lr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&lr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||FL();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kC(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new ve(n.pathString)}},TF=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",u=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(d,f)),d<f&&(s=EF(t.substring(d,f)));const g=xF(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(c+1),10)):c=e.length;const w=e.slice(0,c);if(w.toLowerCase()==="localhost")n="localhost";else if(w.split(".").length<=2)n=w;else{const T=e.indexOf(".");r=e.substring(0,T).toLowerCase(),n=e.substring(T+1),i=r}"ns"in g&&(i=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",IF=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=gw.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=gw.charAt(e[s]);return B(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+et(this.snapshot.exportVal())}}class SF{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kF{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return oe(this._path)?null:MC(this._path)}get ref(){return new us(this._repo,this._path)}get _queryIdentifier(){const e=J0(this._queryParams),n=Eg(e);return n==="{}"?"default":n}get _queryObject(){return J0(this._queryParams)}isEqual(e){if(e=Ae(e),!(e instanceof Jg))return!1;const n=this._repo===e._repo,r=Cg(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+EM(this._path)}}class us extends Jg{constructor(e,n){super(e,n,new bg,!1)}get parent(){const e=FC(this._path);return e===null?null:new us(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Oc{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),r=el(this.ref,e);return new Oc(this._node.getChild(n),r,Ve)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Oc(s,el(this.ref,r),Ve)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _w(t,e){return t=Ae(t),t._checkNotDeleted("ref"),e!==void 0?el(t._root,e):t._root}function el(t,e){return t=Ae(t),se(t._path)===null?iF("child","path",e):_S("child","path",e),new us(t._repo,Ge(t._path,e))}function RF(t,e){t=Ae(t),yS("push",t._path),gS("push",e,t._path,!0);const n=ES(t._repo),r=IF(n),s=el(t,r),i=el(t,r);let o;return e!=null?o=bF(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function bF(t,e){t=Ae(t),yS("set",t._path),gS("set",e,t._path,!1);const n=new Zc;return pF(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Zg{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new CF("value",this,new Oc(e.snapshotNode,new us(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SF(this,e,n):null}matches(e){return e instanceof Zg?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function AF(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const u=n,c=(d,f)=>{pw(t._repo,t,a),u(d,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new kF(n,i||void 0),a=new Zg(o);return gF(t._repo,t,a),()=>pw(t._repo,t,a)}function NF(t,e,n,r){return AF(t,"value",e,n,r)}NV(us);VV(us);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PF="FIREBASE_DATABASE_EMULATOR_HOST",Sp={};let DF=!1;function OF(t,e,n,r){t.repoInfo_=new kC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function LF(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||lr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),vt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mw(i,s),a=o.repoInfo,u;typeof process<"u"&&O0&&(u=O0[PF]),u?(i=`http://${u}?ns=${a.namespace}`,o=mw(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new QL(t.name,t.options,e);oF("Invalid Firebase Database URL",o),oe(o.path)||lr("Database URL must point to the root of a Firebase Database (not including a child path).");const d=VF(a,t,c,new KL(t.name,n));return new FF(d,t)}function MF(t,e){const n=Sp[e];(!n||n[t.key]!==t)&&lr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),_F(t),delete n[t.key]}function VF(t,e,n,r){let s=Sp[e.name];s||(s={},Sp[e.name]=s);let i=s[t.toURLString()];return i&&lr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new hF(t,DF,n,r),s[t.toURLString()]=i,i}class FF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new us(this._repo,me())),this._rootInternal}_delete(){return this._rootInternal!==null&&(MF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&lr("Cannot call "+e+" on a deleted database.")}}function jF(t=Am(),e){const n=nh(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Qx("database");r&&UF(n,...r)}return n}function UF(t,e,n,r={}){t=Ae(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&lr("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&lr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Nu(Nu.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Jx(r.mockUserToken,t.app.options.projectId);i=new Nu(o)}OF(s,e,n,i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zF(t){PL(qs),Ds(new Qr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return LF(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),bn(L0,M0,t),bn(L0,M0,"esm2017")}Zn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Zn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zF();const BF={apiKey:"AIzaSyAFBsA1yqBuf-cNT7ww-VBUoJ4IHycUXFU",authDomain:"skillswap-77832.firebaseapp.com",databaseURL:"https://skillswap-77832-default-rtdb.firebaseio.com/",projectId:"skillswap-77832",storageBucket:"skillswap-77832.firebasestorage.app",messagingSenderId:"930479858258",appId:"1:930479858258:web:1aeeacce842d61b21fb58b"},e_=rT(BF),Qn=ID(e_),Ct=hL(e_),yw=jF(e_),RS=M.createContext();function mo(){return M.useContext(RS)}function WF({children:t}){const[e,n]=M.useState(null),[r,s]=M.useState(!0);async function i(c,d,f){const g=await AT(Qn,c,d),w=g.user,T=nn(Ct,"users",w.uid);return await vg(T,{name:f.name||"",college:f.college||"",skillsOffered:f.skillsOffered||[],skillsWanted:f.skillsWanted||[],rating:0,sessionCount:0,badges:[],createdAt:un(),email:c}),g}function o(c,d){return NT(Qn,c,d)}function a(){return f1(Qn)}M.useEffect(()=>d1(Qn,d=>{n(d),s(!1)}),[]);const u={currentUser:e,login:o,register:i,logout:a};return p.jsx(RS.Provider,{value:u,children:!r&&t})}function ni({children:t}){const{currentUser:e}=mo();return e?t:p.jsx(TA,{to:"/login",replace:!0})}function $F(){const t=dr(),[e,n]=M.useState(""),[r,s]=M.useState(""),[i,o]=M.useState(""),[a,u]=M.useState(!1),c=async d=>{d.preventDefault(),o("");try{u(!0),await NT(Qn,e,r),t("/matches")}catch(f){o(f.message||"Failed to log in.")}finally{u(!1)}};return p.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[p.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to SkillSwap"}),p.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Need an account?"," ",p.jsx(_n,{to:"/register",className:"font-medium text-blue-600 hover:text-blue-500",children:"Register here"})]})]}),p.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:p.jsx("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:p.jsxs("form",{className:"space-y-6",onSubmit:c,children:[i&&p.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm",children:i}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Email address"}),p.jsx("div",{className:"mt-1",children:p.jsx("input",{type:"email",required:!0,value:e,onChange:d=>n(d.target.value),className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Password"}),p.jsx("div",{className:"mt-1",children:p.jsx("input",{type:"password",required:!0,value:r,onChange:d=>s(d.target.value),className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})})]}),p.jsx("div",{children:p.jsx("button",{type:"submit",disabled:a,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50",children:a?"Signing in...":"Sign in"})})]})})})]})}function qF(){const t=dr(),[e,n]=M.useState(""),[r,s]=M.useState(""),[i,o]=M.useState(""),[a,u]=M.useState(""),[c,d]=M.useState(!1),f=async g=>{if(g.preventDefault(),u(""),r!==i)return u("Passwords do not match.");try{d(!0),await AT(Qn,e,r),t("/profile-setup")}catch(w){u(w.message||"Failed to create an account.")}finally{d(!1)}};return p.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[p.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Join SkillSwap"}),p.jsxs("p",{className:"mt-2 text-center text-sm text-gray-600",children:["Already have an account?"," ",p.jsx(_n,{to:"/",className:"font-medium text-blue-600 hover:text-blue-500",children:"Log in here"})]})]}),p.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:p.jsx("div",{className:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",children:p.jsxs("form",{className:"space-y-6",onSubmit:f,children:[a&&p.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm",children:a}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Email address"}),p.jsx("div",{className:"mt-1",children:p.jsx("input",{type:"email",required:!0,value:e,onChange:g=>n(g.target.value),className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Password"}),p.jsx("div",{className:"mt-1",children:p.jsx("input",{type:"password",required:!0,value:r,onChange:g=>s(g.target.value),className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Confirm Password"}),p.jsx("div",{className:"mt-1",children:p.jsx("input",{type:"password",required:!0,value:i,onChange:g=>o(g.target.value),className:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"})})]}),p.jsx("div",{children:p.jsx("button",{type:"submit",disabled:c,className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50",children:c?"Creating account...":"Register"})})]})})})]})}function HF(){const t=dr(),[e,n]=M.useState({name:"",college:"",bio:""}),[r,s]=M.useState([]),[i,o]=M.useState(""),[a,u]=M.useState("Beginner"),[c,d]=M.useState([]),[f,g]=M.useState(""),[w,T]=M.useState(""),[R,N]=M.useState(!1),x=v=>{const{name:_,value:I}=v.target;n(S=>({...S,[_]:I}))},E=v=>{v.preventDefault(),i.trim()&&(s(_=>[..._,{skill:i.trim(),proficiency:a}]),o(""),u("Beginner"))},C=v=>{s(_=>_.filter((I,S)=>S!==v))},A=v=>{v.preventDefault(),f.trim()&&(d(_=>[..._,f.trim()]),g(""))},O=v=>{d(_=>_.filter((I,S)=>S!==v))},V=async v=>{if(v.preventDefault(),T(""),!e.name||!e.college)return T("Please fill in required basic info.");if(!Qn.currentUser)return T("No authenticated user found. Please log in.");try{N(!0);const _=nn(Ct,"users",Qn.currentUser.uid);await vg(_,{uid:Qn.currentUser.uid,name:e.name,college:e.college,bio:e.bio||"",skillsOffered:r,skillsWanted:c,rating:0,sessionsCount:0,badges:[],createdAt:un()}),t("/matches")}catch(_){T(_.message||"Failed to save profile setup.")}finally{N(!1)}};return p.jsx("div",{className:"min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8",children:[p.jsx("h2",{className:"text-3xl font-extrabold text-gray-900 mb-2",children:"Set up your profile"}),p.jsx("p",{className:"text-gray-600 mb-8",children:"Tell us about yourself and the skills you want to trade."}),p.jsxs("form",{onSubmit:V,className:"space-y-8",children:[w&&p.jsx("div",{className:"bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm",children:w}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Name"}),p.jsx("input",{type:"text",name:"name",required:!0,value:e.name,onChange:x,className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"College"}),p.jsx("input",{type:"text",name:"college",required:!0,value:e.college,onChange:x,className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Bio"}),p.jsx("textarea",{name:"bio",rows:"3",value:e.bio,onChange:x,className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"})]})]}),p.jsxs("div",{className:"pt-6 border-t border-gray-200",children:[p.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Skills I can TEACH"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("input",{type:"text",placeholder:"e.g., Python",value:i,onChange:v=>o(v.target.value),className:"flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"}),p.jsxs("select",{value:a,onChange:v=>u(v.target.value),className:"w-1/3 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border bg-white",children:[p.jsx("option",{value:"Beginner",children:"Beginner"}),p.jsx("option",{value:"Intermediate",children:"Intermediate"}),p.jsx("option",{value:"Expert",children:"Expert"})]}),p.jsx("button",{type:"button",onClick:E,className:"px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700",children:"Add"})]}),p.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:r.map((v,_)=>p.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800",children:[v.skill," (",v.proficiency,")",p.jsx("button",{type:"button",onClick:()=>C(_),className:"ml-2 text-blue-500 hover:text-blue-700 font-bold",children:"×"})]},_))})]}),p.jsxs("div",{className:"pt-6 border-t border-gray-200",children:[p.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Skills I want to LEARN"}),p.jsxs("div",{className:"flex gap-2",children:[p.jsx("input",{type:"text",placeholder:"e.g., React",value:f,onChange:v=>g(v.target.value),className:"flex-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm px-3 py-2 border"}),p.jsx("button",{type:"button",onClick:A,className:"px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700",children:"Add"})]}),p.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:c.map((v,_)=>p.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800",children:[v,p.jsx("button",{type:"button",onClick:()=>O(_),className:"ml-2 text-green-500 hover:text-green-700 font-bold",children:"×"})]},_))})]}),p.jsx("div",{className:"pt-6",children:p.jsx("button",{type:"submit",disabled:R,className:"w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50",children:R?"Saving Profile...":"Complete Setup"})})]})]})})}async function GF(t){try{const n=nn(t,"users","demo_user_1");if((await Ki(n)).exists()){console.log("Demo users already seeded. Skipping.");return}}catch(n){console.error("Error checking demo user status:",n)}const e=[{uid:"demo_user_1",name:"Arjun Kumar",college:"IIT Madras",skillsOffered:[{skill:"Python",proficiency:"Expert"},{skill:"Machine Learning",proficiency:"Expert"}],skillsWanted:["UI Design","Figma"],rating:4.8,sessionsCount:12,sessionCount:12,badges:["⭐ Top Mentor","🎓 First Session"],bio:"Demo user for SkillSwap",createdAt:un()},{uid:"demo_user_2",name:"Priya Sharma",college:"NIT Trichy",skillsOffered:[{skill:"UI Design",proficiency:"Expert"},{skill:"Figma",proficiency:"Intermediate"}],skillsWanted:["Python","Data Science"],rating:4.5,sessionsCount:8,sessionCount:8,badges:["⭐ Top Mentor","🎓 First Session"],bio:"Demo user for SkillSwap",createdAt:un()},{uid:"demo_user_3",name:"Rahul Verma",college:"VIT Vellore",skillsOffered:[{skill:"React",proficiency:"Expert"},{skill:"JavaScript",proficiency:"Expert"}],skillsWanted:["Machine Learning","Python"],rating:4.2,sessionsCount:6,sessionCount:6,badges:["🎓 First Session"],bio:"Demo user for SkillSwap",createdAt:un()},{uid:"demo_user_4",name:"Sneha Patel",college:"BITS Pilani",skillsOffered:[{skill:"Data Science",proficiency:"Expert"},{skill:"Python",proficiency:"Expert"}],skillsWanted:["React","UI Design"],rating:4.9,sessionsCount:15,sessionCount:15,badges:["⭐ Top Mentor","🎓 First Session"],bio:"Demo user for SkillSwap",createdAt:un()},{uid:"demo_user_5",name:"Karthik Raja",college:"Anna University",skillsOffered:[{skill:"Android Dev",proficiency:"Expert"},{skill:"Kotlin",proficiency:"Intermediate"}],skillsWanted:["AI","Machine Learning"],rating:4,sessionsCount:4,sessionCount:4,badges:["🎓 First Session"],bio:"Demo user for SkillSwap",createdAt:un()},{uid:"demo_user_6",name:"Divya Menon",college:"PSG Tech",skillsOffered:[{skill:"AI",proficiency:"Expert"},{skill:"Deep Learning",proficiency:"Expert"}],skillsWanted:["Android Dev","React"],rating:4.7,sessionsCount:10,sessionCount:10,badges:["⭐ Top Mentor","🎓 First Session"],bio:"Demo user for SkillSwap",createdAt:un()},{uid:"demo_user_7",name:"Vikram Singh",college:"DTU Delhi",skillsOffered:[{skill:"Blockchain",proficiency:"Expert"},{skill:"Solidity",proficiency:"Intermediate"}],skillsWanted:["Python","Data Science"],rating:3.9,sessionsCount:3,sessionCount:3,badges:["🎓 First Session"],bio:"Demo user for SkillSwap",createdAt:un()},{uid:"demo_user_8",name:"Ananya Iyer",college:"SASTRA University",skillsOffered:[{skill:"Figma",proficiency:"Expert"},{skill:"UI Design",proficiency:"Expert"}],skillsWanted:["JavaScript","React"],rating:4.3,sessionsCount:5,sessionCount:5,badges:["🎓 First Session"],bio:"Demo user for SkillSwap",createdAt:un()}];for(const n of e)try{const r=nn(t,"users",n.uid);await vg(r,n),console.log(`Successfully seeded ${n.name}`)}catch(r){console.error(`Error seeding ${n.name}:`,r)}}const vw={Python:[{title:"Python Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=rfscVS0vtbw",type:"video"},{title:"Python Quiz - W3Schools",url:"https://www.w3schools.com/python/python_quiz.asp",type:"quiz"}],JavaScript:[{title:"JS Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=PkZNo7MFNFg",type:"video"},{title:"JS Quiz - W3Schools",url:"https://www.w3schools.com/js/js_quiz.asp",type:"quiz"}],Java:[{title:"Java Full Course - Telusko",url:"https://www.youtube.com/watch?v=GoXwIVyNvX0",type:"video"},{title:"Java Quiz - W3Schools",url:"https://www.w3schools.com/java/java_quiz.asp",type:"quiz"}],C:[{title:"C Programming Full Course",url:"https://www.youtube.com/watch?v=KJgsSFOSQv0",type:"video"},{title:"C Quiz - W3Schools",url:"https://www.w3schools.com/c/c_quiz.asp",type:"quiz"}],"C++":[{title:"C++ Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=vLnPwxZdW4Y",type:"video"},{title:"C++ Quiz - W3Schools",url:"https://www.w3schools.com/cpp/cpp_quiz.asp",type:"quiz"}],Kotlin:[{title:"Kotlin Full Course - Telusko",url:"https://www.youtube.com/watch?v=F9UC9DY-vIU",type:"video"},{title:"Kotlin Quiz - W3Schools",url:"https://www.w3schools.com/kotlin/kotlin_quiz.asp",type:"quiz"}],Swift:[{title:"Swift Full Course for Beginners",url:"https://www.youtube.com/watch?v=comQ1-x2a1Q",type:"video"},{title:"Swift Quiz - Hacking with Swift",url:"https://www.hackingwithswift.com/review",type:"quiz"}],Go:[{title:"Golang Full Course - TechWorld",url:"https://www.youtube.com/watch?v=yyUHQIec83I",type:"video"},{title:"Go Quiz - W3Schools",url:"https://www.w3schools.com/go/go_quiz.asp",type:"quiz"}],Rust:[{title:"Rust Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=BpPEoZW5IiY",type:"video"},{title:"Rust Quiz - Exercism",url:"https://exercism.org/tracks/rust",type:"quiz"}],TypeScript:[{title:"TypeScript Full Course - Traversy",url:"https://www.youtube.com/watch?v=BCg4U1FzODs",type:"video"},{title:"TS Quiz - W3Schools",url:"https://www.w3schools.com/typescript/typescript_quiz.php",type:"quiz"}],PHP:[{title:"PHP Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=OK_JCtrrv-c",type:"video"},{title:"PHP Quiz - W3Schools",url:"https://www.w3schools.com/php/php_quiz.asp",type:"quiz"}],Ruby:[{title:"Ruby Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=t_ispmWmdjY",type:"video"},{title:"Ruby Quiz - Exercism",url:"https://exercism.org/tracks/ruby",type:"quiz"}],R:[{title:"R Programming Full Course",url:"https://www.youtube.com/watch?v=_V8eKsto3Ug",type:"video"},{title:"R Quiz - W3Schools",url:"https://www.w3schools.com/r/r_quiz.asp",type:"quiz"}],Dart:[{title:"Dart Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=Ej_Pcr4uC2Q",type:"video"},{title:"Dart Quiz - Exercism",url:"https://exercism.org/tracks/dart",type:"quiz"}],React:[{title:"React Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=bMknfKXIFA8",type:"video"},{title:"React Quiz - W3Schools",url:"https://www.w3schools.com/react/react_quiz.asp",type:"quiz"}],"Next.js":[{title:"Next.js Full Course - Vercel",url:"https://www.youtube.com/watch?v=mTz0GXj8NN0",type:"video"},{title:"Next.js Quiz - Scrimba",url:"https://scrimba.com/learn/nextjs",type:"quiz"}],"Vue.js":[{title:"Vue.js Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=FXpIoQ_rT_c",type:"video"},{title:"Vue Quiz - W3Schools",url:"https://www.w3schools.com/vue/vue_quiz.php",type:"quiz"}],Angular:[{title:"Angular Full Course - Mosh",url:"https://www.youtube.com/watch?v=k5E2AVpwsko",type:"video"},{title:"Angular Quiz - W3Schools",url:"https://www.w3schools.com/angular/angular_quiz.asp",type:"quiz"}],HTML:[{title:"HTML Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=pQN-pnXPaVg",type:"video"},{title:"HTML Quiz - W3Schools",url:"https://www.w3schools.com/html/html_quiz.asp",type:"quiz"}],CSS:[{title:"CSS Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=OXGznpKZ_sA",type:"video"},{title:"CSS Quiz - W3Schools",url:"https://www.w3schools.com/css/css_quiz.asp",type:"quiz"}],"Tailwind CSS":[{title:"Tailwind CSS Full Course - Traversy",url:"https://www.youtube.com/watch?v=dFgzHOX84xQ",type:"video"},{title:"Tailwind Quiz - Scrimba",url:"https://scrimba.com/learn/tailwind",type:"quiz"}],"Node.js":[{title:"Node.js Full Course - Mosh",url:"https://www.youtube.com/watch?v=TlB_eWDSMt4",type:"video"},{title:"Node Quiz - W3Schools",url:"https://www.w3schools.com/nodejs/nodejs_quiz.asp",type:"quiz"}],"Express.js":[{title:"Express.js Full Course - Traversy",url:"https://www.youtube.com/watch?v=L72fhGm1tfE",type:"video"},{title:"Express Quiz - JavaTpoint",url:"https://www.javatpoint.com/expressjs-quiz",type:"quiz"}],"Android Dev":[{title:"Android Dev Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=fis26HvvDII",type:"video"},{title:"Android Quiz - Javatpoint",url:"https://www.javatpoint.com/android-quiz",type:"quiz"}],"iOS Dev":[{title:"iOS Dev Full Course - Stanford",url:"https://www.youtube.com/watch?v=bqu6BquVi2M",type:"video"},{title:"iOS Quiz - Hacking with Swift",url:"https://www.hackingwithswift.com/review",type:"quiz"}],Flutter:[{title:"Flutter Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=VPvVD8t02U8",type:"video"},{title:"Flutter Quiz - Javatpoint",url:"https://www.javatpoint.com/flutter-quiz",type:"quiz"}],"React Native":[{title:"React Native Full Course - Mosh",url:"https://www.youtube.com/watch?v=0-S5a0eXPoc",type:"video"},{title:"RN Quiz - Scrimba",url:"https://scrimba.com/learn/reactnative",type:"quiz"}],"Machine Learning":[{title:"ML by Andrew Ng - Stanford",url:"https://www.youtube.com/watch?v=jGwO_UgTS7I",type:"video"},{title:"ML Assessment - Kaggle",url:"https://www.kaggle.com/learn/intro-to-machine-learning",type:"quiz"}],"Deep Learning":[{title:"Deep Learning Specialization",url:"https://www.youtube.com/watch?v=CS4cs9xVecg",type:"video"},{title:"DL Assessment - Kaggle",url:"https://www.kaggle.com/learn/intro-to-deep-learning",type:"quiz"}],AI:[{title:"AI For Everyone - Andrew Ng",url:"https://www.youtube.com/watch?v=2ePf9rue1Ao",type:"video"},{title:"AI Quiz - W3Schools",url:"https://www.w3schools.com/ai/ai_quiz.asp",type:"quiz"}],"Data Science":[{title:"Data Science Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=ua-CiDNNj30",type:"video"},{title:"DS Assessment - Kaggle",url:"https://www.kaggle.com/learn/data-visualization",type:"quiz"}],"Data Analysis":[{title:"Data Analysis with Python - FreeCodeCamp",url:"https://www.youtube.com/watch?v=r-uOLxNrNk8",type:"video"},{title:"DA Assessment - Kaggle",url:"https://www.kaggle.com/learn/pandas",type:"quiz"}],NLP:[{title:"NLP Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=fOvTtapxa9c",type:"video"},{title:"NLP Assessment - Kaggle",url:"https://www.kaggle.com/learn/natural-language-processing",type:"quiz"}],"Computer Vision":[{title:"Computer Vision Full Course",url:"https://www.youtube.com/watch?v=01sAkU_NvOY",type:"video"},{title:"CV Assessment - Kaggle",url:"https://www.kaggle.com/learn/computer-vision",type:"quiz"}],"Power BI":[{title:"Power BI Full Course - Edureka",url:"https://www.youtube.com/watch?v=3u7MQz1EyPY",type:"video"},{title:"Power BI Quiz - Javatpoint",url:"https://www.javatpoint.com/power-bi-quiz",type:"quiz"}],Tableau:[{title:"Tableau Full Course - Simplilearn",url:"https://www.youtube.com/watch?v=TPMlZxRRaBQ",type:"video"},{title:"Tableau Quiz - Javatpoint",url:"https://www.javatpoint.com/tableau-quiz",type:"quiz"}],SQL:[{title:"SQL Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=HXV3zeQKqGY",type:"video"},{title:"SQL Quiz - W3Schools",url:"https://www.w3schools.com/sql/sql_quiz.asp",type:"quiz"}],MySQL:[{title:"MySQL Full Course - Mosh",url:"https://www.youtube.com/watch?v=7S_tz1z_5bA",type:"video"},{title:"MySQL Quiz - W3Schools",url:"https://www.w3schools.com/mysql/mysql_quiz.asp",type:"quiz"}],MongoDB:[{title:"MongoDB Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=ofme2o29ngU",type:"video"},{title:"MongoDB Quiz - W3Schools",url:"https://www.w3schools.com/mongodb/mongodb_quiz.php",type:"quiz"}],PostgreSQL:[{title:"PostgreSQL Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=qw--VYLpxG4",type:"video"},{title:"PostgreSQL Quiz - Javatpoint",url:"https://www.javatpoint.com/postgresql-quiz",type:"quiz"}],Firebase:[{title:"Firebase Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=fgdpvwEWJ9M",type:"video"},{title:"Firebase Codelab - Google",url:"https://firebase.google.com/codelabs/firebase-web",type:"quiz"}],Docker:[{title:"Docker Full Course - TechWorld",url:"https://www.youtube.com/watch?v=3c-iBn73dDE",type:"video"},{title:"Docker Quiz - Javatpoint",url:"https://www.javatpoint.com/docker-quiz",type:"quiz"}],Kubernetes:[{title:"Kubernetes Full Course - TechWorld",url:"https://www.youtube.com/watch?v=X48VuDVv0do",type:"video"},{title:"K8s Quiz - Javatpoint",url:"https://www.javatpoint.com/kubernetes-quiz",type:"quiz"}],AWS:[{title:"AWS Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=ulprqHHWlng",type:"video"},{title:"AWS Practice - Tutorials Dojo",url:"https://tutorialsdojo.com/aws-cheat-sheets/",type:"quiz"}],Git:[{title:"Git Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=RGOj5yH7evk",type:"video"},{title:"Git Quiz - W3Schools",url:"https://www.w3schools.com/git/git_quiz.asp",type:"quiz"}],"UI Design":[{title:"UI Design Crash Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=c9Wg6Cb_YlU",type:"video"},{title:"Design Quiz - Canva",url:"https://www.canva.com/learn/quiz-graphic-design/",type:"quiz"}],Figma:[{title:"Figma Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=FTFaQWZBqQ8",type:"video"},{title:"Figma Quiz - DesignCourse",url:"https://designcourse.com",type:"quiz"}],"UX Design":[{title:"UX Design Full Course - Google",url:"https://www.youtube.com/watch?v=uL2ZB7XXIgg",type:"video"},{title:"UX Quiz - Interaction Design",url:"https://www.interaction-design.org/courses",type:"quiz"}],Cybersecurity:[{title:"Cybersecurity Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=hXSFdwIOfnE",type:"video"},{title:"Security Quiz - Cybrary",url:"https://www.cybrary.it/catalog/",type:"quiz"}],"Ethical Hacking":[{title:"Ethical Hacking Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=3Kq1MIfTWCE",type:"video"},{title:"CEH Practice - Cybrary",url:"https://www.cybrary.it/course/ethical-hacking/",type:"quiz"}],Blockchain:[{title:"Blockchain Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=gyMwXuJrbJQ",type:"video"},{title:"Blockchain Quiz - Javatpoint",url:"https://www.javatpoint.com/blockchain-quiz",type:"quiz"}],Solidity:[{title:"Solidity Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=M576WGiDBdQ",type:"video"},{title:"Solidity Quiz - CryptoZombies",url:"https://cryptozombies.io",type:"quiz"}],DSA:[{title:"DSA Full Course - FreeCodeCamp",url:"https://www.youtube.com/watch?v=8hly31xKli0",type:"video"},{title:"DSA Practice - LeetCode",url:"https://leetcode.com/studyplan/top-interview-150/",type:"quiz"}],"Competitive Programming":[{title:"CP Course - Errichto",url:"https://www.youtube.com/watch?v=xAeiXy8-9Y8",type:"video"},{title:"CP Practice - Codeforces",url:"https://codeforces.com",type:"quiz"}],"OBD Sensor":[{title:"OBD-II Full Guide",url:"https://www.youtube.com/watch?v=0RvO8GFjWaU",type:"video"},{title:"OBD Quiz - Quizlet",url:"https://quizlet.com/subject/obd/",type:"quiz"}],"AI Chip Design":[{title:"AI Hardware Course - MIT",url:"https://www.youtube.com/watch?v=cdMFcVVl_cs",type:"video"},{title:"VLSI Quiz - Javatpoint",url:"https://www.javatpoint.com/vlsi-quiz",type:"quiz"}]};function KF(t){const e=Object.keys(vw).find(n=>n.toLowerCase()===t.toLowerCase());return e?vw[e]:[{title:`Learn ${t} on YouTube`,url:`https://www.youtube.com/results?search_query=learn+${encodeURIComponent(t)}`,type:"video"},{title:`${t} Practice - W3Schools`,url:`https://www.w3schools.com/search/search_result.php?search=${encodeURIComponent(t)}`,type:"quiz"}]}const QF=t=>{const e=["bg-red-100 text-red-800 border-red-200","bg-orange-100 text-orange-800 border-orange-200","bg-amber-100 text-amber-800 border-amber-200","bg-green-100 text-green-800 border-green-200","bg-teal-100 text-teal-800 border-teal-200","bg-blue-100 text-blue-800 border-blue-200","bg-indigo-100 text-indigo-800 border-indigo-200","bg-purple-100 text-purple-800 border-purple-200","bg-pink-100 text-pink-800 border-pink-200"];let n=0;const r=t||"Anonymous";for(let o=0;o<r.length;o++)n+=r.charCodeAt(o);const s=e[n%e.length],i=r.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2);return{colorClass:s,initials:i}};function YF(){const{currentUser:t,logout:e}=mo(),n=dr(),r=is(),[s,i]=M.useState([]),o=T=>r.pathname===T?"text-blue-600 font-bold border-b-2 border-blue-600 pb-1":"text-gray-600 hover:text-blue-600 font-medium transition-colors",[a,u]=M.useState(!0),[c,d]=M.useState(!1);async function f(){if(t){u(!0);try{const T=nn(Ct,"users",t.uid),R=await Ki(T);if(!R.exists()){u(!1);return}const x=({uid:R.id,...R.data()}.skillsWanted||[]).map(v=>v.trim().toLowerCase()),E=Ga(Ct,"users"),C=await Ec(E),A=[];C.forEach(v=>{v.id!==t.uid&&A.push({uid:v.id,...v.data()})});const V=A.map(v=>{let _=0;return(v.skillsOffered||[]).forEach(I=>{const S=(I.skill||"").trim().toLowerCase();if(x.includes(S)){let b=2;(I.proficiency||I.level||"").trim().toLowerCase()==="expert"&&(b+=1),_+=b}}),{...v,score:_}}).sort((v,_)=>v.score>0&&_.score>0?_.score-v.score:v.score>0&&_.score===0?-1:v.score===0&&_.score>0?1:0);i(V)}catch(T){console.error("Error fetching matches:",T)}finally{u(!1)}}}M.useEffect(()=>{f()},[t]);const g=async()=>{d(!0);try{await GF(Ct),await f()}catch(T){console.error("Seeding failed:",T)}finally{d(!1)}},w=!s.some(T=>T.uid==="demo_user_1");return p.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col",children:[p.jsx("nav",{className:"bg-white shadow",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"flex justify-between h-16 items-center",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx("span",{className:"font-bold text-xl text-blue-600",children:"SkillSwap"})}),p.jsxs("div",{className:"flex items-center space-x-6",children:[p.jsx(_n,{to:"/profile",className:o("/profile"),children:"My Profile"}),p.jsx(_n,{to:"/matches",className:o("/matches"),children:"Matches"}),p.jsx(_n,{to:"/leaderboard",className:o("/leaderboard"),children:"Leaderboard"}),p.jsx("div",{onClick:e,className:"text-gray-600 hover:text-red-600 font-medium transition-colors cursor-pointer",children:"Logout"})]})]})})}),p.jsxs("main",{className:"flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8",children:[p.jsxs("div",{children:[p.jsx("h1",{className:"text-3xl font-extrabold text-gray-900",children:"Your Skill Matches"}),p.jsx("p",{className:"text-gray-500 mt-2",children:"Connect with users who teach what you want to learn"})]}),w&&p.jsx("div",{onClick:c?void 0:g,className:`mt-4 sm:mt-0 px-4 py-2 text-sm font-semibold rounded-lg shadow-sm border transition-colors cursor-pointer text-center ${c?"bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed":"bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100"}`,children:c?"Loading Demo Users...":"Load Demo Users"})]}),a?p.jsx("div",{className:"flex justify-center items-center h-40",children:p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):s.length===0?p.jsx("div",{className:"bg-white rounded-lg shadow-sm p-12 text-center border border-gray-200",children:p.jsx("p",{className:"text-lg text-gray-500 font-medium",children:"No other users found. Click 'Load Demo Users' to populate data."})}):p.jsx("div",{className:"grid gap-6 md:grid-cols-2",children:s.map(T=>{const R=QF(T.name);return p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all flex flex-col justify-between",children:[p.jsxs("div",{className:"p-6",children:[p.jsxs("div",{className:"flex items-start justify-between mb-4",children:[p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{className:`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-base ${R.colorClass}`,children:R.initials}),p.jsxs("div",{children:[p.jsx("h2",{className:"text-lg font-bold text-gray-900",children:T.name}),p.jsx("p",{className:"text-xs text-gray-500",children:T.college||"SkillSwap Member"})]})]}),T.score>0?p.jsxs("div",{className:"bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold px-3 py-1 rounded-full",children:["Score: ",T.score]}):p.jsx("div",{className:"bg-gray-100 border border-gray-200 text-gray-600 text-xs font-bold px-3 py-1 rounded-full",children:"Explore"})]}),p.jsxs("div",{className:"mb-4 flex items-center space-x-3",children:[p.jsxs("div",{className:"flex items-center text-xs font-semibold text-gray-700 bg-yellow-50 px-2 py-0.5 rounded border border-yellow-250",children:[p.jsx("span",{className:"text-yellow-400 mr-1 text-sm leading-none",children:"★"}),p.jsx("span",{children:(T.rating||0).toFixed(1)})]}),p.jsx("span",{className:"text-gray-300",children:"•"}),p.jsxs("span",{className:"text-xs text-gray-500 font-medium",children:[T.sessionsCount!==void 0?T.sessionsCount:T.sessionCount||0," sessions"]})]}),T.bio&&p.jsxs("p",{className:"text-sm text-gray-600 mb-4 line-clamp-2 italic",children:['"',T.bio,'"']}),p.jsxs("div",{className:"space-y-3 mb-4",children:[p.jsxs("div",{children:[p.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1",children:"Can Teach You:"}),p.jsx("div",{className:"flex flex-wrap gap-1.5",children:T.skillsOffered&&T.skillsOffered.length>0?T.skillsOffered.map((N,x)=>p.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 border border-blue-100 text-blue-800",children:[N.skill," ",p.jsxs("span",{className:"opacity-75 ml-1 text-[10px]",children:["(",N.proficiency||N.level,")"]})]},x)):p.jsx("span",{className:"text-gray-400 text-xs italic",children:"None"})})]}),p.jsxs("div",{children:[p.jsx("span",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1",children:"Wants to Learn:"}),p.jsx("div",{className:"flex flex-wrap gap-1.5",children:T.skillsWanted&&T.skillsWanted.length>0?T.skillsWanted.map((N,x)=>p.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 border border-green-100 text-green-800",children:N},x)):p.jsx("span",{className:"text-gray-400 text-xs italic",children:"None"})})]})]}),T.skillsOffered&&T.skillsOffered.length>0&&p.jsxs("div",{className:"mt-4 border-t border-gray-150 pt-4",children:[p.jsx("h4",{className:"text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2",children:"Learning Resources:"}),p.jsx("div",{className:"space-y-2",children:T.skillsOffered.map((N,x)=>{const E=KF(N.skill);return p.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-2 rounded-lg border border-gray-100",children:[p.jsx("span",{className:"text-xs font-semibold text-gray-700 mb-1.5 sm:mb-0",children:N.skill}),p.jsx("div",{className:"flex flex-wrap gap-1",children:E.map((C,A)=>p.jsxs("a",{href:C.url,target:"_blank",rel:"noopener noreferrer",className:`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border transition-colors ${C.type==="video"?"bg-red-50 hover:bg-red-100 text-red-700 border-red-200":"bg-yellow-50 hover:bg-yellow-100 text-yellow-800 border-yellow-250"}`,children:[p.jsx("span",{className:"mr-1",children:C.type==="video"?"🎥":"📝"}),C.title]},A))})]},x)})})]})]}),p.jsx("div",{className:"p-6 pt-0 border-t border-gray-50 bg-gray-50/50",children:p.jsx("div",{onClick:()=>n(`/chat/${T.uid}`),className:"w-full flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-semibold rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 cursor-pointer transition-colors",children:"Connect & Chat"})})]},T.uid)})})]})]})}const XF={Python:["Machine Learning","Data Science","Django","FastAPI"],React:["TypeScript","Next.js","Node.js","GraphQL"],"Machine Learning":["Python","Deep Learning","NLP","Computer Vision"],"UI Design":["Figma","UX Design","CSS","Prototyping"],JavaScript:["TypeScript","React","Node.js","Vue.js"],"Data Science":["Python","SQL","Power BI","Tableau","Statistics"],"Android Dev":["Kotlin","Firebase","REST APIs","Jetpack Compose"],Flutter:["Dart","Firebase","REST APIs","State Management"],AI:["Python","Machine Learning","Deep Learning","NLP"],Blockchain:["Solidity","Web3.js","Cryptography","Smart Contracts"],Cybersecurity:["Networking","Linux","Ethical Hacking","Python"],DevOps:["Docker","Kubernetes","AWS","Linux","CI/CD"],DSA:["C++","Java","Competitive Programming","System Design"],SQL:["PostgreSQL","MongoDB","Data Analysis","Power BI"],"iOS Dev":["Swift","SwiftUI","Xcode","Firebase"]},JF=t=>{const e=["bg-red-100 text-red-800 border-red-200","bg-orange-100 text-orange-800 border-orange-200","bg-amber-100 text-amber-800 border-amber-200","bg-green-100 text-green-800 border-green-200","bg-teal-100 text-teal-800 border-teal-200","bg-blue-100 text-blue-800 border-blue-200","bg-indigo-100 text-indigo-800 border-indigo-200","bg-purple-100 text-purple-800 border-purple-200","bg-pink-100 text-pink-800 border-pink-200"];let n=0;const r=t||"Anonymous";for(let o=0;o<r.length;o++)n+=r.charCodeAt(o);const s=e[n%e.length],i=r.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2);return{colorClass:s,initials:i}};function ZF(){const{currentUser:t,logout:e}=mo(),n=is();dr();const[r,s]=M.useState(null),[i,o]=M.useState(!0),[a,u]=M.useState(!1),[c,d]=M.useState(!1),[f,g]=M.useState(""),[w,T]=M.useState(""),[R,N]=M.useState(""),[x,E]=M.useState(""),[C,A]=M.useState([]),[O,V]=M.useState([]),[v,_]=M.useState(""),[I,S]=M.useState("Intermediate"),[b,P]=M.useState("");M.useEffect(()=>{async function G(){if(t)try{const X=nn(Ct,"users",t.uid),Re=await Ki(X);if(Re.exists()){const Nt=Re.data();s(Nt),k(Nt)}}catch(X){console.error("Error fetching user profile:",X)}finally{o(!1)}}G()},[t]);const k=G=>{T(G.name||""),N(G.college||""),E(G.bio||""),A(G.skillsOffered||[]),V(G.skillsWanted||[])},Ne=()=>{r&&k(r),u(!1)},qe=async()=>{if(!w.trim()){g("Name is required.");return}if(t){d(!0),g("");try{const G=nn(Ct,"users",t.uid),X={name:w.trim(),college:R.trim(),bio:x.trim(),skillsOffered:C,skillsWanted:O};await pp(G,X),s(Re=>({...Re,...X})),u(!1)}catch(G){console.error("Error updating profile:",G),g("Failed to update profile changes.")}finally{d(!1)}}},Yt=()=>{!v.trim()||C.some(X=>X.skill.toLowerCase()===v.trim().toLowerCase())||(A(X=>[...X,{skill:v.trim(),proficiency:I}]),_(""))},At=G=>{A(X=>X.filter((Re,Nt)=>Nt!==G))},U=()=>{!b.trim()||O.some(X=>X.toLowerCase()===b.trim().toLowerCase())||(V(X=>[...X,b.trim()]),P(""))},H=G=>{V(X=>X.filter((Re,Nt)=>Nt!==G))},Q=async G=>{if(!t||!r)return;const X=[...r.skillsWanted||[],G];try{await pp(nn(Ct,"users",t.uid),{skillsWanted:X}),s(Re=>({...Re,skillsWanted:X})),V(X)}catch(Re){console.error("Error adding suggested skill:",Re)}},re=(()=>{if(!r)return[];const G=(r.skillsWanted||[]).map(Nt=>Nt.trim().toLowerCase()),X=(r.skillsOffered||[]).map(Nt=>Nt.skill.trim().toLowerCase()),Re=[];return(r.skillsWanted||[]).forEach(Nt=>{(XF[Nt]||[]).forEach(mr=>{const cs=mr.trim().toLowerCase();!G.includes(cs)&&!X.includes(cs)&&!Re.includes(mr)&&Re.push(mr)})}),Re})(),we=G=>n.pathname===G?"text-blue-600 font-bold border-b-2 border-blue-600 pb-1":"text-gray-600 hover:text-blue-600 font-medium transition-colors";if(i)return p.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})});if(!r)return p.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:p.jsx("p",{className:"text-gray-500",children:"Failed to load user document. Make sure you are logged in."})});const Xt=JF(r.name);return p.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col",children:[p.jsx("nav",{className:"bg-white shadow",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"flex justify-between h-16 items-center",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx("span",{className:"font-bold text-xl text-blue-600",children:"SkillSwap"})}),p.jsxs("div",{className:"flex items-center space-x-6",children:[p.jsx(_n,{to:"/profile",className:we("/profile"),children:"My Profile"}),p.jsx(_n,{to:"/matches",className:we("/matches"),children:"Matches"}),p.jsx(_n,{to:"/leaderboard",className:we("/leaderboard"),children:"Leaderboard"}),p.jsx("div",{onClick:e,className:"text-gray-600 hover:text-red-600 font-medium transition-colors cursor-pointer",children:"Logout"})]})]})})}),p.jsxs("main",{className:"flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-6",children:[f&&p.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4 text-sm text-red-700 rounded shadow-sm",children:f}),p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6",children:[p.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left",children:[p.jsx("div",{className:`w-20 h-20 rounded-full border-2 flex items-center justify-center font-bold text-2xl ${Xt.colorClass}`,children:Xt.initials}),p.jsxs("div",{children:[p.jsx("h1",{className:"text-2xl font-extrabold text-gray-900",children:r.name}),p.jsx("p",{className:"text-sm font-semibold text-blue-600",children:r.college||"No college specified"}),p.jsxs("p",{className:"text-sm text-gray-600 mt-2 italic max-w-xl",children:['"',r.bio||"Add a bio to tell matches more about yourself.",'"']})]})]}),!a&&p.jsx("div",{onClick:()=>u(!0),className:"px-4 py-2 text-sm font-semibold rounded-lg border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 cursor-pointer shadow-sm transition-colors whitespace-nowrap",children:"Edit Profile"})]}),a&&p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 border-b pb-2",children:"Edit Profile Info"}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("span",{className:"block text-sm font-semibold text-gray-700 mb-1",children:"Name"}),p.jsx("input",{type:"text",value:w,onChange:G=>T(G.target.value),className:"w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"block text-sm font-semibold text-gray-700 mb-1",children:"College"}),p.jsx("input",{type:"text",value:R,onChange:G=>N(G.target.value),className:"w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"block text-sm font-semibold text-gray-700 mb-1",children:"Bio"}),p.jsx("textarea",{rows:"3",value:x,onChange:G=>E(G.target.value),className:"w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"})]}),p.jsxs("div",{className:"border-t pt-4",children:[p.jsx("span",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Skills I can Teach"}),p.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[C.map((G,X)=>p.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-200 text-blue-800",children:[G.skill," ",p.jsxs("span",{className:"opacity-70",children:["(",G.proficiency,")"]}),p.jsx("span",{onClick:()=>At(X),className:"font-bold text-blue-500 hover:text-red-500 cursor-pointer ml-1 text-sm select-none",children:"×"})]},X)),C.length===0&&p.jsx("span",{className:"text-gray-400 text-xs italic",children:"No offered skills added."})]}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 max-w-lg",children:[p.jsx("input",{type:"text",placeholder:"Add a skill...",value:v,onChange:G=>_(G.target.value),className:"flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"}),p.jsxs("select",{value:I,onChange:G=>S(G.target.value),className:"bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none",children:[p.jsx("option",{value:"Beginner",children:"Beginner"}),p.jsx("option",{value:"Intermediate",children:"Intermediate"}),p.jsx("option",{value:"Expert",children:"Expert"})]}),p.jsx("div",{onClick:Yt,className:"px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transition-colors shadow-sm whitespace-nowrap",children:"Add"})]})]}),p.jsxs("div",{className:"border-t pt-4",children:[p.jsx("span",{className:"block text-sm font-semibold text-gray-700 mb-2",children:"Skills I want to Learn"}),p.jsxs("div",{className:"flex flex-wrap gap-2 mb-3",children:[O.map((G,X)=>p.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-50 border border-green-200 text-green-800",children:[G,p.jsx("span",{onClick:()=>H(X),className:"font-bold text-green-500 hover:text-red-500 cursor-pointer ml-1 text-sm select-none",children:"×"})]},X)),O.length===0&&p.jsx("span",{className:"text-gray-400 text-xs italic",children:"No wanted skills added."})]}),p.jsxs("div",{className:"flex gap-2 max-w-md",children:[p.jsx("input",{type:"text",placeholder:"Add a skill...",value:b,onChange:G=>P(G.target.value),className:"flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"}),p.jsx("div",{onClick:U,className:"px-4 py-2 text-sm font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer transition-colors shadow-sm whitespace-nowrap",children:"Add"})]})]})]}),p.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t",children:[p.jsx("div",{onClick:Ne,className:"px-5 py-2.5 text-sm font-semibold rounded-lg border border-gray-200 text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors",children:"Cancel"}),p.jsx("div",{onClick:c?void 0:qe,className:`px-5 py-2.5 text-sm font-semibold rounded-lg text-white shadow-sm transition-colors cursor-pointer flex items-center justify-center ${c?"bg-blue-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,children:c?"Saving...":"Save Changes"})]})]}),p.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[p.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs",children:[p.jsx("span",{className:"block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1",children:"Sessions Completed"}),p.jsx("span",{className:"text-2xl font-extrabold text-gray-800",children:r.sessionsCount!==void 0?r.sessionsCount:r.sessionCount||0})]}),p.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs",children:[p.jsx("span",{className:"block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1",children:"Average Rating"}),p.jsxs("span",{className:"text-2xl font-extrabold text-gray-800 flex items-center justify-center",children:[p.jsx("span",{className:"text-yellow-400 mr-1 text-xl leading-none",children:"★"}),(r.rating||0).toFixed(1)]})]}),p.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 p-4 text-center shadow-xs",children:[p.jsx("span",{className:"block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1",children:"Badges Earned"}),p.jsx("span",{className:"text-2xl font-extrabold text-gray-800",children:(r.badges||[]).length})]})]}),p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[p.jsx("h2",{className:"text-lg font-bold text-gray-900 mb-3",children:"Badges Earned"}),p.jsx("div",{className:"flex flex-wrap gap-2",children:r.badges&&r.badges.length>0?r.badges.map((G,X)=>p.jsx("span",{className:`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-xs ${G.includes("Top")?"bg-yellow-100 text-yellow-800 border border-yellow-250":G.includes("Expert")?"bg-purple-100 text-purple-800 border border-purple-250":"bg-green-100 text-green-800 border border-green-255"}`,children:G},X)):p.jsx("p",{className:"text-sm text-gray-500 italic",children:"Complete sessions to earn badges!"})})]}),p.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[p.jsx("h2",{className:"text-lg font-bold text-gray-900 mb-3",children:"I can Teach:"}),p.jsx("div",{className:"flex flex-wrap gap-2",children:r.skillsOffered&&r.skillsOffered.length>0?r.skillsOffered.map((G,X)=>p.jsxs("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 border border-blue-100 text-blue-800",children:[G.skill," ",p.jsxs("span",{className:"opacity-75 ml-1",children:["(",G.proficiency,")"]})]},X)):p.jsx("p",{className:"text-sm text-gray-500 italic",children:"Add skills you can offer by editing your profile."})})]}),p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 p-6",children:[p.jsx("h2",{className:"text-lg font-bold text-gray-900 mb-3",children:"I want to Learn:"}),p.jsx("div",{className:"flex flex-wrap gap-2",children:r.skillsWanted&&r.skillsWanted.length>0?r.skillsWanted.map((G,X)=>p.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-50 border border-green-100 text-green-800",children:G},X)):p.jsx("p",{className:"text-sm text-gray-500 italic",children:"Add skills you'd like to learn by editing your profile."})})]})]}),p.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-xs",children:[p.jsxs("h2",{className:"text-lg font-bold text-blue-900 flex items-center mb-2",children:[p.jsx("span",{className:"mr-2",children:"🤖"})," AI Suggests for You"]}),p.jsx("p",{className:"text-xs text-blue-700 mb-4 font-medium",children:"Based on the skills you want to learn, here are related fields you should explore adding:"}),p.jsxs("div",{className:"flex flex-wrap gap-2",children:[re.map((G,X)=>p.jsxs("div",{onClick:()=>Q(G),className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-blue-200 text-blue-700 hover:bg-blue-100 cursor-pointer shadow-2xs hover:shadow-xs transition-all active:scale-95",children:[p.jsx("span",{children:"+"}),p.jsx("span",{children:G})]},X)),re.length===0&&p.jsx("p",{className:"text-xs text-blue-600 italic",children:r.skillsWanted&&r.skillsWanted.length>0?"You have already added all recommended skills!":"Add some skills to your learning list, and AI will suggest related ones here!"})]})]})]})]})}const ej=t=>{const e=["bg-red-100 text-red-800 border-red-200","bg-orange-100 text-orange-800 border-orange-200","bg-amber-100 text-amber-800 border-amber-200","bg-green-100 text-green-800 border-green-200","bg-teal-100 text-teal-800 border-teal-200","bg-blue-100 text-blue-800 border-blue-200","bg-indigo-100 text-indigo-800 border-indigo-200","bg-purple-100 text-purple-800 border-purple-200","bg-pink-100 text-pink-800 border-pink-200"];let n=0;const r=t||"Anonymous";for(let o=0;o<r.length;o++)n+=r.charCodeAt(o);const s=e[n%e.length],i=r.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2);return{colorClass:s,initials:i}};function tj(){const{uid:t}=jx(),{currentUser:e}=mo(),n=dr(),[r,s]=M.useState(null),[i,o]=M.useState([]),[a,u]=M.useState(""),[c,d]=M.useState(!0),f=M.useRef(null);M.useEffect(()=>{async function x(){if(t)try{const E=nn(Ct,"users",t),C=await Ki(E);C.exists()&&s(C.data())}catch(E){console.error("Error fetching user data:",E)}}x()},[t]),M.useEffect(()=>{if(!e||!t)return;const x=[e.uid,t].sort().join("_"),E=_w(yw,`chats/${x}/messages`),C=NF(E,A=>{const O=A.val();if(O){const V=Object.keys(O).map(v=>({id:v,...O[v]})).sort((v,_)=>(v.timestamp||0)-(_.timestamp||0));o(V)}else o([]);d(!1)},A=>{console.error("Error fetching messages:",A),d(!1)});return()=>C()},[e,t]),M.useEffect(()=>{var x;(x=f.current)==null||x.scrollIntoView({behavior:"smooth"})},[i]);const g=async()=>{if(!(!a.trim()||!e||!t))try{const x=[e.uid,t].sort().join("_"),E=_w(yw,`chats/${x}/messages`);await RF(E,{senderUid:e.uid,text:a.trim(),timestamp:Date.now()}),u("")}catch(x){console.error("Error sending message:",x)}},w=x=>{x.key==="Enter"&&g()},T=["When are you free? 📅","Let's schedule a session! 🎯","Can you teach me more about this? 🤔"],R=x=>{u(x)},N=r?ej(r.name):{colorClass:"bg-gray-150",initials:""};return p.jsxs("div",{className:"flex flex-col h-screen bg-gray-50",children:[p.jsxs("div",{className:"bg-white border-b px-4 py-3 flex items-center justify-between shadow-sm z-10",children:[p.jsxs("div",{className:"flex items-center space-x-3",children:[p.jsx("div",{onClick:()=>n("/matches"),className:"p-2 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-100 cursor-pointer transition-colors",children:p.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})}),p.jsxs("div",{className:"flex items-center space-x-2",children:[p.jsx("div",{className:`w-9 h-9 rounded-full border flex items-center justify-center font-bold text-xs ${N.colorClass}`,children:N.initials}),p.jsxs("div",{children:[p.jsx("h2",{className:"text-sm font-bold text-gray-900",children:r?r.name:"Loading..."}),r&&p.jsx("p",{className:"text-[10px] text-gray-500 font-medium",children:r.college||"SkillSwap Member"})]})]})]}),i.length>=3&&p.jsx("div",{onClick:()=>n(`/review/${t}`),className:"bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg cursor-pointer transition-colors shadow-sm",children:"Rate Session"})]}),p.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:[c?p.jsx("div",{className:"flex justify-center items-center h-full",children:p.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})}):i.length===0?p.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-400 px-4 text-center",children:[p.jsx("svg",{className:"w-12 h-12 mb-2 text-gray-300",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),p.jsx("p",{className:"text-sm font-medium",children:"No messages yet. Send a message or a quick reply to start swapping skills!"})]}):i.map(x=>{const E=x.senderUid===(e==null?void 0:e.uid);return p.jsx("div",{className:`flex ${E?"justify-end":"justify-start"}`,children:p.jsxs("div",{className:`max-w-[75%] sm:max-w-[60%] flex flex-col ${E?"items-end":"items-start"}`,children:[p.jsx("div",{className:`px-4 py-2.5 rounded-2xl shadow-sm text-sm break-words whitespace-pre-wrap ${E?"bg-blue-600 text-white rounded-tr-none":"bg-gray-200 text-gray-800 rounded-tl-none"}`,children:x.text}),p.jsx("span",{className:"text-[9px] text-gray-400 mt-1 px-1 font-semibold",children:new Date(x.timestamp).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!1})})]})},x.id)}),p.jsx("div",{ref:f})]}),p.jsxs("div",{className:"bg-white border-t p-4 space-y-3",children:[a.length===0&&p.jsx("div",{className:"flex flex-wrap gap-2 justify-center py-1",children:T.map((x,E)=>p.jsx("div",{onClick:()=>R(x),className:"px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 border border-gray-200 rounded-full cursor-pointer transition-all active:scale-95 shadow-2xs",children:x},E))}),p.jsxs("div",{className:"flex items-center space-x-2 max-w-4xl mx-auto",children:[p.jsx("input",{type:"text",value:a,onChange:x=>u(x.target.value),onKeyDown:w,placeholder:"Type your message here...",className:"flex-1 bg-gray-100 border border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"}),p.jsx("div",{onClick:g,className:`rounded-xl p-3 flex items-center justify-center cursor-pointer transition-colors ${a.trim()?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-100 text-gray-400 cursor-not-allowed"}`,children:p.jsx("svg",{className:"w-5 h-5 transform rotate-90",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 19V5m0 0l-7 7m7-7l7 7"})})})]})]})]})}function nj(){const{uid:t}=jx(),{currentUser:e}=mo(),n=dr(),[r,s]=M.useState(null),[i,o]=M.useState(0),[a,u]=M.useState(0),[c,d]=M.useState(""),[f,g]=M.useState([]),[w,T]=M.useState(!1),[R,N]=M.useState(!0),[x,E]=M.useState("");M.useEffect(()=>{async function O(){if(t)try{const V=nn(Ct,"users",t),v=await Ki(V);v.exists()?s(v.data()):E("User not found.")}catch(V){console.error("Error fetching user:",V),E("Failed to load user details.")}finally{N(!1)}}O()},[t]);const C=O=>{f.includes(O)?g(V=>V.filter(v=>v!==O)):g(V=>[...V,O])},A=async()=>{if(i===0){E("Please select a star rating between 1 and 5.");return}if(e){T(!0),E("");try{await RL(Ga(Ct,"reviews"),{reviewerId:e.uid,revieweeId:t,stars:Number(i),text:c.trim(),skillsRated:f,timestamp:un()});const O=TL(Ga(Ct,"reviews"),IL("revieweeId","==",t)),V=await Ec(O);let v=0,_=0;V.forEach(P=>{const k=P.data();v+=k.stars||0,_++});const I=_>0?v/_:0,S=nn(Ct,"users",t),b=await Ki(S);if(b.exists()){const P=b.data(),Ne=(P.sessionsCount!==void 0?P.sessionsCount:P.sessionCount||0)+1;let qe=[...P.badges||[]];Ne>=1&&(qe.includes("🎓 First Session")||qe.push("🎓 First Session")),Ne>=3&&I>=4&&(qe.includes("⭐ Top Mentor")||qe.push("⭐ Top Mentor")),Ne>=10&&(qe.includes("🏆 Expert Mentor")||qe.push("🏆 Expert Mentor")),await pp(S,{rating:I,sessionsCount:Ne,sessionCount:Ne,badges:qe})}n("/matches")}catch(O){console.error("Error submitting review:",O),E("An error occurred while submitting your review. Please try again."),T(!1)}}};return R?p.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center",children:p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):p.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"sm:mx-auto sm:w-full sm:max-w-md text-center",children:[p.jsx("h2",{className:"text-3xl font-extrabold text-gray-900",children:"Rate your session"}),r&&p.jsxs("p",{className:"mt-2 text-sm text-gray-600",children:["with ",p.jsx("span",{className:"font-semibold text-blue-600",children:r.name})]})]}),p.jsx("div",{className:"mt-8 sm:mx-auto sm:w-full sm:max-w-md",children:p.jsxs("div",{className:"bg-white py-8 px-4 shadow-md rounded-xl sm:px-10 border border-gray-100 space-y-6",children:[x&&p.jsx("div",{className:"bg-red-50 border-l-4 border-red-400 p-4 text-sm text-red-700 rounded",children:x}),p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("span",{className:"text-sm font-semibold text-gray-700 mb-2",children:"Overall Rating"}),p.jsx("div",{className:"flex space-x-2",children:[1,2,3,4,5].map(O=>p.jsx("div",{onClick:()=>o(O),onMouseEnter:()=>u(O),onMouseLeave:()=>u(0),className:"cursor-pointer transition-transform duration-100 hover:scale-110 active:scale-95",children:p.jsx("span",{className:`text-4xl transition-colors duration-100 ${O<=(a||i)?"text-yellow-400":"text-gray-300"}`,children:"★"})},O))}),i>0&&p.jsxs("span",{className:"text-xs text-gray-500 mt-2 font-medium",children:[i," out of 5 stars selected"]})]}),r&&r.skillsOffered&&r.skillsOffered.length>0&&p.jsxs("div",{className:"space-y-2 border-t pt-4",children:[p.jsx("span",{className:"block text-sm font-semibold text-gray-700",children:"Which skills did they teach you?"}),p.jsx("div",{className:"flex flex-wrap gap-2",children:r.skillsOffered.map((O,V)=>{const v=f.includes(O.skill);return p.jsxs("div",{onClick:()=>C(O.skill),className:`flex items-center gap-2 px-3 py-1.5 rounded-lg border cursor-pointer select-none transition-all ${v?"bg-blue-50 border-blue-500 text-blue-700 font-semibold shadow-2xs":"bg-gray-50 border-gray-250 text-gray-700 hover:bg-gray-100"}`,children:[p.jsx("div",{className:`w-4 h-4 rounded border flex items-center justify-center transition-colors ${v?"bg-blue-600 border-blue-600 text-white":"bg-white border-gray-300"}`,children:v&&p.jsx("svg",{className:"w-2.5 h-2.5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M5 13l4 4L19 7"})})}),p.jsx("span",{className:"text-xs",children:O.skill})]},V)})})]}),p.jsxs("div",{className:"space-y-2 border-t pt-4",children:[p.jsx("span",{className:"block text-sm font-semibold text-gray-700",children:"Write a Review"}),p.jsx("textarea",{rows:"4",value:c,onChange:O=>d(O.target.value),placeholder:"Tell others about your learning session...",className:"w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"})]}),p.jsxs("div",{className:"flex space-x-3 pt-2",children:[p.jsx("div",{onClick:()=>n("/matches"),className:"flex-1 text-center px-4 py-3 border border-gray-200 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 cursor-pointer transition-colors shadow-sm",children:"Cancel"}),p.jsx("div",{onClick:w?void 0:A,className:`flex-2 text-center px-6 py-3 text-sm font-medium rounded-xl text-white shadow-sm transition-colors cursor-pointer flex items-center justify-center ${w?"bg-blue-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,children:w?p.jsxs(p.Fragment,{children:[p.jsxs("svg",{className:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",fill:"none",viewBox:"0 0 24 24",children:[p.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),p.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Submitting..."]}):"Submit Review"})]})]})})]})}const Fn=t=>{const e=["bg-red-100 text-red-800 border-red-200","bg-orange-100 text-orange-800 border-orange-200","bg-amber-100 text-amber-800 border-amber-200","bg-green-100 text-green-800 border-green-200","bg-teal-100 text-teal-800 border-teal-200","bg-blue-100 text-blue-800 border-blue-200","bg-indigo-100 text-indigo-800 border-indigo-200","bg-purple-100 text-purple-800 border-purple-200","bg-pink-100 text-pink-800 border-pink-200"];let n=0;const r=t||"Anonymous";for(let o=0;o<r.length;o++)n+=r.charCodeAt(o);const s=e[n%e.length],i=r.split(" ").map(o=>o[0]).join("").toUpperCase().slice(0,2);return{colorClass:s,initials:i}};function rj(){const{currentUser:t,logout:e}=mo(),n=is(),[r,s]=M.useState([]),[i,o]=M.useState(!0),[a,u]=M.useState({topDemand:"React",fastestGrowing:"Python",rarestSkill:"N/A"});M.useEffect(()=>{async function A(){try{const O=await Ec(Ga(Ct,"users")),V=[];O.forEach(U=>{V.push({uid:U.id,...U.data()})});const v=V.sort((U,H)=>{const Q=U.sessionsCount!==void 0?U.sessionsCount:U.sessionCount||0,de=H.sessionsCount!==void 0?H.sessionsCount:H.sessionCount||0;if(de!==Q)return de-Q;const re=U.rating||0;return(H.rating||0)-re});s(v);const _=await Ec(Ga(Ct,"reviews")),I=[];_.forEach(U=>{I.push(U.data())});const S={};V.forEach(U=>{(U.skillsWanted||[]).forEach(H=>{const Q=H.trim();S[Q]=(S[Q]||0)+1})});const b=Object.entries(S).sort((U,H)=>H[1]-U[1]),P=b.length>0?b[0][0]:"React",k={};I.forEach(U=>{(U.skillsRated||[]).forEach(H=>{const Q=H.trim();k[Q]=(k[Q]||0)+1})});const Ne=Object.entries(k).sort((U,H)=>H[1]-U[1]),qe=Ne.length>0?Ne[0][0]:b.length>1?b[1][0]:"Python",Yt=t&&v.find(U=>U.uid===t.uid);let At="N/A";if(Yt&&Yt.skillsOffered&&Yt.skillsOffered.length>0){const U={};V.forEach(Q=>{(Q.skillsOffered||[]).forEach(de=>{if(de.skill){const re=de.skill.trim();U[re]=(U[re]||0)+1}})});let H=1/0;Yt.skillsOffered.forEach(Q=>{const de=Q.skill.trim(),re=U[de]||0;re<H&&(H=re,At=Q.skill)})}u({topDemand:P,fastestGrowing:qe,rarestSkill:At})}catch(O){console.error("Error fetching leaderboard data:",O)}finally{o(!1)}}A()},[t]);const c=r.map((A,O)=>({...A,rank:O+1})),d=c[0],f=c[1],g=c[2],w=c.slice(3,10),T=t&&c.slice(0,10).some(A=>A.uid===t.uid),R=t&&c.find(A=>A.uid===t.uid),N=A=>n.pathname===A?"text-blue-600 font-bold border-b-2 border-blue-600 pb-1":"text-gray-600 hover:text-blue-600 font-medium transition-colors",x=A=>t&&A.uid===t.uid?"bg-blue-50 border-l-4 border-blue-500 hover:bg-blue-100 font-semibold":"bg-white hover:bg-gray-50 border-l-4 border-transparent",C=(()=>{const A={};return r.forEach(O=>{(O.skillsOffered||[]).forEach(V=>{const v=V.skill;if(v){const _=v.trim();A[_]=(A[_]||0)+1}})}),Object.entries(A).map(([O,V])=>({skill:O,count:V})).sort((O,V)=>V.count-O.count).slice(0,8)})();return p.jsxs("div",{className:"min-h-screen bg-gray-50 flex flex-col",children:[p.jsx("nav",{className:"bg-white shadow",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"flex justify-between h-16 items-center",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx("span",{className:"font-bold text-xl text-blue-600",children:"SkillSwap"})}),p.jsxs("div",{className:"flex items-center space-x-6",children:[p.jsx(_n,{to:"/profile",className:N("/profile"),children:"My Profile"}),p.jsx(_n,{to:"/matches",className:N("/matches"),children:"Matches"}),p.jsx(_n,{to:"/leaderboard",className:N("/leaderboard"),children:"Leaderboard"}),p.jsx("div",{onClick:e,className:"text-gray-600 hover:text-red-600 font-medium transition-colors cursor-pointer",children:"Logout"})]})]})})}),p.jsxs("main",{className:"flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8",children:[p.jsxs("div",{className:"mb-8",children:[p.jsx("h1",{className:"text-3xl font-extrabold text-gray-900",children:"Leaderboard"}),p.jsx("p",{className:"text-gray-500 mt-2",children:"Top mentors and active learners in the SkillSwap community"})]}),i?p.jsx("div",{className:"flex justify-center items-center h-48",children:p.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"})}):p.jsxs("div",{className:"space-y-8",children:[p.jsxs("div",{className:"flex flex-col md:flex-row items-center md:items-end justify-center gap-6 mt-6",children:[f&&p.jsxs("div",{className:"order-2 md:order-1 bg-gradient-to-br from-slate-50 to-zinc-100 border border-slate-350 rounded-2xl p-6 text-center w-full md:w-64 h-80 flex flex-col justify-between shadow-sm relative border-t-8 border-t-slate-400",children:[p.jsx("div",{className:"absolute top-3 right-3 text-sm font-extrabold text-slate-400",children:"#2"}),p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("span",{className:"text-4xl mb-2",children:"🥈"}),p.jsx("div",{className:`w-14 h-14 rounded-full border flex items-center justify-center font-bold text-lg mb-3 ${Fn(f.name).colorClass}`,children:Fn(f.name).initials}),p.jsx("h2",{className:"text-base font-bold text-gray-900 truncate w-full",children:f.name}),p.jsx("p",{className:"text-xs text-gray-500 truncate w-full",children:f.college})]}),p.jsxs("div",{className:"mt-4 border-t pt-3 flex items-center justify-around text-xs font-semibold text-gray-600",children:[p.jsxs("div",{children:[p.jsx("span",{className:"block text-[10px] text-gray-400 uppercase",children:"Sessions"}),p.jsx("span",{className:"text-sm font-extrabold text-gray-800",children:f.sessionsCount!==void 0?f.sessionsCount:f.sessionCount||0})]}),p.jsx("div",{className:"border-r h-6 border-gray-200"}),p.jsxs("div",{children:[p.jsx("span",{className:"block text-[10px] text-gray-400 uppercase",children:"Rating"}),p.jsxs("span",{className:"text-sm font-extrabold text-gray-800 flex items-center",children:["★ ",(f.rating||0).toFixed(1)]})]})]}),p.jsx("div",{className:"flex flex-wrap justify-center gap-1 mt-3",children:(f.badges||[]).map((A,O)=>p.jsx("span",{className:"px-2 py-0.5 text-[9px] font-bold rounded-full bg-white text-slate-800 border border-slate-200",children:A},O))})]}),d&&p.jsxs("div",{className:"order-1 md:order-2 bg-gradient-to-br from-yellow-50 to-amber-100 border border-yellow-250 rounded-2xl p-6 text-center w-full md:w-72 h-90 flex flex-col justify-between shadow-md relative border-t-8 border-t-yellow-400 md:-top-4",children:[p.jsx("div",{className:"absolute top-3 right-3 text-sm font-extrabold text-yellow-600",children:"#1"}),p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("span",{className:"text-5xl mb-2",children:"🥇"}),p.jsx("div",{className:`w-16 h-16 rounded-full border flex items-center justify-center font-bold text-xl mb-3 ${Fn(d.name).colorClass}`,children:Fn(d.name).initials}),p.jsx("h2",{className:"text-lg font-bold text-gray-900 truncate w-full",children:d.name}),p.jsx("p",{className:"text-xs text-gray-500 truncate w-full",children:d.college})]}),p.jsxs("div",{className:"mt-4 border-t pt-3 flex items-center justify-around text-xs font-semibold text-gray-600",children:[p.jsxs("div",{children:[p.jsx("span",{className:"block text-[10px] text-gray-400 uppercase",children:"Sessions"}),p.jsx("span",{className:"text-base font-extrabold text-gray-800",children:d.sessionsCount!==void 0?d.sessionsCount:d.sessionCount||0})]}),p.jsx("div",{className:"border-r h-6 border-gray-200"}),p.jsxs("div",{children:[p.jsx("span",{className:"block text-[10px] text-gray-400 uppercase",children:"Rating"}),p.jsxs("span",{className:"text-base font-extrabold text-gray-800 flex items-center",children:["★ ",(d.rating||0).toFixed(1)]})]})]}),p.jsx("div",{className:"flex flex-wrap justify-center gap-1 mt-3",children:(d.badges||[]).map((A,O)=>p.jsx("span",{className:"px-2 py-0.5 text-[9px] font-bold rounded-full bg-white text-yellow-800 border border-yellow-200",children:A},O))})]}),g&&p.jsxs("div",{className:"order-3 bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-250 rounded-2xl p-6 text-center w-full md:w-64 h-76 flex flex-col justify-between shadow-sm relative border-t-8 border-t-amber-500",children:[p.jsx("div",{className:"absolute top-3 right-3 text-sm font-extrabold text-amber-600",children:"#3"}),p.jsxs("div",{className:"flex flex-col items-center",children:[p.jsx("span",{className:"text-4xl mb-2",children:"🥉"}),p.jsx("div",{className:`w-12 h-12 rounded-full border flex items-center justify-center font-bold text-sm mb-3 ${Fn(g.name).colorClass}`,children:Fn(g.name).initials}),p.jsx("h2",{className:"text-base font-bold text-gray-900 truncate w-full",children:g.name}),p.jsx("p",{className:"text-xs text-gray-500 truncate w-full",children:g.college})]}),p.jsxs("div",{className:"mt-4 border-t pt-3 flex items-center justify-around text-xs font-semibold text-gray-600",children:[p.jsxs("div",{children:[p.jsx("span",{className:"block text-[10px] text-gray-400 uppercase",children:"Sessions"}),p.jsx("span",{className:"text-sm font-extrabold text-gray-800",children:g.sessionsCount!==void 0?g.sessionsCount:g.sessionCount||0})]}),p.jsx("div",{className:"border-r h-6 border-gray-200"}),p.jsxs("div",{children:[p.jsx("span",{className:"block text-[10px] text-gray-400 uppercase",children:"Rating"}),p.jsxs("span",{className:"text-sm font-extrabold text-gray-800 flex items-center",children:["★ ",(g.rating||0).toFixed(1)]})]})]}),p.jsx("div",{className:"flex flex-wrap justify-center gap-1 mt-3",children:(g.badges||[]).map((A,O)=>p.jsx("span",{className:"px-2 py-0.5 text-[9px] font-bold rounded-full bg-white text-amber-900 border border-amber-200",children:A},O))})]})]}),p.jsx("div",{className:"bg-white shadow-md rounded-xl overflow-hidden border border-gray-150",children:p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[p.jsx("thead",{className:"bg-gray-50",children:p.jsxs("tr",{children:[p.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider w-20",children:"#"}),p.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Name"}),p.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"College"}),p.jsx("th",{scope:"col",className:"px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Sessions"}),p.jsx("th",{scope:"col",className:"px-6 py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"⭐Rating"}),p.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider",children:"Badges"})]})}),p.jsxs("tbody",{className:"divide-y divide-gray-150 bg-white",children:[w.map(A=>{const O=Fn(A.name);return p.jsxs("tr",{className:`transition-colors ${x(A)}`,children:[p.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-left text-sm font-bold text-gray-500",children:["#",A.rank]}),p.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium flex items-center space-x-3",children:[p.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs ${O.colorClass}`,children:O.initials}),p.jsxs("span",{children:[A.name," ",t&&A.uid===t.uid&&" (You)"]})]}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:A.college||"N/A"}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium",children:A.sessionsCount!==void 0?A.sessionsCount:A.sessionCount||0}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-center text-sm font-semibold text-gray-800",children:(A.rating||0).toFixed(1)}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:p.jsx("div",{className:"flex flex-wrap gap-1.5",children:A.badges&&A.badges.length>0?A.badges.map((V,v)=>p.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${V.includes("Top")?"bg-yellow-100 text-yellow-800 border border-yellow-250":V.includes("Expert")?"bg-purple-100 text-purple-800 border border-purple-250":"bg-green-100 text-green-800 border border-green-200"}`,children:V},v)):p.jsx("span",{className:"text-gray-400 text-xs italic",children:"None"})})})]},A.uid)}),R&&!T&&p.jsxs(p.Fragment,{children:[p.jsx("tr",{className:"bg-gray-50",children:p.jsx("td",{colSpan:"6",className:"px-6 py-2 text-center text-sm font-semibold text-gray-400 tracking-widest bg-gray-50 border-t border-b select-none",children:"•••"})}),p.jsxs("tr",{className:`transition-colors ${x(R)}`,children:[p.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-left text-sm font-bold text-gray-500",children:["#",R.rank]}),p.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium flex items-center space-x-3",children:[p.jsx("div",{className:`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs ${Fn(R.name).colorClass}`,children:Fn(R.name).initials}),p.jsxs("span",{children:[R.name," (You)"]})]}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:R.college||"N/A"}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium",children:R.sessionsCount!==void 0?R.sessionsCount:R.sessionCount||0}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-center text-sm font-semibold text-gray-800",children:(R.rating||0).toFixed(1)}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm",children:p.jsx("div",{className:"flex flex-wrap gap-1.5",children:R.badges&&R.badges.length>0?R.badges.map((A,O)=>p.jsx("span",{className:`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold ${A.includes("Top")?"bg-yellow-100 text-yellow-800 border border-yellow-250":A.includes("Expert")?"bg-purple-100 text-purple-800 border border-purple-250":"bg-green-100 text-green-800 border border-green-200"}`,children:A},O)):p.jsx("span",{className:"text-gray-400 text-xs italic",children:"None"})})})]})]})]})]})})}),p.jsxs("div",{className:"bg-white shadow-md rounded-xl p-6 border border-gray-150",children:[p.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"Most Popular Skills Offered"}),p.jsx("p",{className:"text-sm text-gray-500 mb-6 font-medium",children:"Skills that mentors are sharing most in the community"}),p.jsxs("div",{className:"space-y-4",children:[C.map((A,O)=>{const V=C.length>0?C[0].count:1,v=`${A.count/V*100}%`;return p.jsxs("div",{className:"flex items-center",children:[p.jsx("div",{className:"w-32 text-sm font-semibold text-gray-700 truncate pr-2",children:A.skill}),p.jsx("div",{className:"flex-1 bg-gray-100 rounded-full h-4 relative overflow-hidden",children:p.jsx("div",{className:"bg-blue-600 h-full rounded-full transition-all duration-500",style:{width:v}})}),p.jsxs("div",{className:"w-20 text-right text-xs font-bold text-gray-600 pl-3",children:[A.count," ",A.count===1?"mentor":"mentors"]})]},O)}),C.length===0&&p.jsx("p",{className:"text-sm text-gray-400 italic",children:"No skills recorded yet."})]})]}),p.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-xs",children:[p.jsxs("h2",{className:"text-lg font-bold text-blue-900 flex items-center mb-4",children:[p.jsx("span",{className:"mr-2",children:"🤖"})," AI Learning Insights"]}),p.jsxs("div",{className:"grid gap-4 sm:grid-cols-3",children:[p.jsxs("div",{className:"bg-white rounded-lg p-4 border border-blue-100",children:[p.jsx("span",{className:"block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1",children:"Top Skill in Demand"}),p.jsx("span",{className:"text-sm font-bold text-gray-800 block mb-1",children:a.topDemand}),p.jsx("p",{className:"text-[10px] text-gray-500",children:"Most wanted skill across all student profiles"})]}),p.jsxs("div",{className:"bg-white rounded-lg p-4 border border-blue-100",children:[p.jsx("span",{className:"block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1",children:"Fastest Growing"}),p.jsx("span",{className:"text-sm font-bold text-gray-800 block mb-1",children:a.fastestGrowing}),p.jsx("p",{className:"text-[10px] text-gray-500",children:"Most taught skill in recent learning sessions"})]}),p.jsxs("div",{className:"bg-white rounded-lg p-4 border border-blue-100",children:[p.jsx("span",{className:"block text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1",children:"Your Rarest Skill"}),p.jsx("span",{className:"text-sm font-bold text-gray-800 block mb-1",children:a.rarestSkill}),p.jsx("p",{className:"text-[10px] text-gray-500",children:"Your offered skill that is least common globally"})]})]})]})]})]})]})}function sj(){return p.jsx(WF,{children:p.jsx(PA,{basename:"/devfusion/dist/",children:p.jsxs(CA,{children:[p.jsx(jn,{path:"/",element:p.jsx($F,{})}),p.jsx(jn,{path:"/register",element:p.jsx(qF,{})}),p.jsx(jn,{path:"/profile-setup",element:p.jsx(ni,{children:p.jsx(HF,{})})}),p.jsx(jn,{path:"/matches",element:p.jsx(ni,{children:p.jsx(YF,{})})}),p.jsx(jn,{path:"/profile",element:p.jsx(ni,{children:p.jsx(ZF,{})})}),p.jsx(jn,{path:"/chat/:uid",element:p.jsx(ni,{children:p.jsx(tj,{})})}),p.jsx(jn,{path:"/review/:uid",element:p.jsx(ni,{children:p.jsx(nj,{})})}),p.jsx(jn,{path:"/leaderboard",element:p.jsx(ni,{children:p.jsx(rj,{})})})]})})})}$d.createRoot(document.getElementById("root")).render(p.jsx(Aw.StrictMode,{children:p.jsx(sj,{})}));
