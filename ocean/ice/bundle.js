(()=>{var $A=Object.create;var Qx=Object.defineProperty;var tw=Object.getOwnPropertyDescriptor;var ew=Object.getOwnPropertyNames;var nw=Object.getPrototypeOf,iw=Object.prototype.hasOwnProperty;var bs=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var sw=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ew(t))!iw.call(e,s)&&s!==n&&Qx(e,s,{get:()=>t[s],enumerable:!(i=tw(t,s))||i.enumerable});return e};var Jr=(e,t,n)=>(n=e!=null?$A(nw(e)):{},sw(t||!e||!e.__esModule?Qx(n,"default",{value:e,enumerable:!0}):n,e));var ly=bs(Wt=>{"use strict";var Hm=Symbol.for("react.transitional.element"),aw=Symbol.for("react.portal"),rw=Symbol.for("react.fragment"),ow=Symbol.for("react.strict_mode"),lw=Symbol.for("react.profiler"),cw=Symbol.for("react.consumer"),uw=Symbol.for("react.context"),hw=Symbol.for("react.forward_ref"),fw=Symbol.for("react.suspense"),dw=Symbol.for("react.memo"),ny=Symbol.for("react.lazy"),pw=Symbol.for("react.activity"),jx=Symbol.iterator;function mw(e){return e===null||typeof e!="object"?null:(e=jx&&e[jx]||e["@@iterator"],typeof e=="function"?e:null)}var iy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sy=Object.assign,ay={};function Ko(e,t,n){this.props=e,this.context=t,this.refs=ay,this.updater=n||iy}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ko.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ry(){}ry.prototype=Ko.prototype;function Gm(e,t,n){this.props=e,this.context=t,this.refs=ay,this.updater=n||iy}var km=Gm.prototype=new ry;km.constructor=Gm;sy(km,Ko.prototype);km.isPureReactComponent=!0;var $x=Array.isArray;function Vm(){}var Ue={H:null,A:null,T:null,S:null},oy=Object.prototype.hasOwnProperty;function Wm(e,t,n){var i=n.ref;return{$$typeof:Hm,type:e,key:t,ref:i!==void 0?i:null,props:n}}function gw(e,t){return Wm(e.type,t,e.props)}function Xm(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hm}function _w(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ty=/\/+/g;function zm(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_w(""+e.key):t.toString(36)}function vw(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Vm,Vm):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function Jo(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Hm:case aw:r=!0;break;case ny:return r=e._init,Jo(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+zm(e,0):i,$x(s)?(n="",r!=null&&(n=r.replace(ty,"$&/")+"/"),Jo(s,t,n,"",function(c){return c})):s!=null&&(Xm(s)&&(s=gw(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(ty,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if($x(e))for(var l=0;l<e.length;l++)i=e[l],a=o+zm(i,l),r+=Jo(i,t,n,a,s);else if(l=mw(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+zm(i,l++),r+=Jo(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return Jo(vw(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Bh(e,t,n){if(e==null)return e;var i=[],s=0;return Jo(e,i,"","",function(a){return t.call(n,a,s++)}),i}function xw(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ey=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yw={map:Bh,forEach:function(e,t,n){Bh(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Bh(e,function(){t++}),t},toArray:function(e){return Bh(e,function(t){return t})||[]},only:function(e){if(!Xm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Wt.Activity=pw;Wt.Children=yw;Wt.Component=Ko;Wt.Fragment=rw;Wt.Profiler=lw;Wt.PureComponent=Gm;Wt.StrictMode=ow;Wt.Suspense=fw;Wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ue;Wt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ue.H.useMemoCache(e)}};Wt.cache=function(e){return function(){return e.apply(null,arguments)}};Wt.cacheSignal=function(){return null};Wt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=sy({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!oy.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return Wm(e.type,s,i)};Wt.createContext=function(e){return e={$$typeof:uw,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:cw,_context:e},e};Wt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)oy.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return Wm(e,a,s)};Wt.createRef=function(){return{current:null}};Wt.forwardRef=function(e){return{$$typeof:hw,render:e}};Wt.isValidElement=Xm;Wt.lazy=function(e){return{$$typeof:ny,_payload:{_status:-1,_result:e},_init:xw}};Wt.memo=function(e,t){return{$$typeof:dw,type:e,compare:t===void 0?null:t}};Wt.startTransition=function(e){var t=Ue.T,n={};Ue.T=n;try{var i=e(),s=Ue.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Vm,ey)}catch(a){ey(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),Ue.T=t}};Wt.unstable_useCacheRefresh=function(){return Ue.H.useCacheRefresh()};Wt.use=function(e){return Ue.H.use(e)};Wt.useActionState=function(e,t,n){return Ue.H.useActionState(e,t,n)};Wt.useCallback=function(e,t){return Ue.H.useCallback(e,t)};Wt.useContext=function(e){return Ue.H.useContext(e)};Wt.useDebugValue=function(){};Wt.useDeferredValue=function(e,t){return Ue.H.useDeferredValue(e,t)};Wt.useEffect=function(e,t){return Ue.H.useEffect(e,t)};Wt.useEffectEvent=function(e){return Ue.H.useEffectEvent(e)};Wt.useId=function(){return Ue.H.useId()};Wt.useImperativeHandle=function(e,t,n){return Ue.H.useImperativeHandle(e,t,n)};Wt.useInsertionEffect=function(e,t){return Ue.H.useInsertionEffect(e,t)};Wt.useLayoutEffect=function(e,t){return Ue.H.useLayoutEffect(e,t)};Wt.useMemo=function(e,t){return Ue.H.useMemo(e,t)};Wt.useOptimistic=function(e,t){return Ue.H.useOptimistic(e,t)};Wt.useReducer=function(e,t,n){return Ue.H.useReducer(e,t,n)};Wt.useRef=function(e){return Ue.H.useRef(e)};Wt.useState=function(e){return Ue.H.useState(e)};Wt.useSyncExternalStore=function(e,t,n){return Ue.H.useSyncExternalStore(e,t,n)};Wt.useTransition=function(){return Ue.H.useTransition()};Wt.version="19.2.4"});var wc=bs((mO,cy)=>{"use strict";cy.exports=ly()});var xy=bs(ze=>{"use strict";function Jm(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Fh(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ts(e){return e.length===0?null:e[0]}function Vh(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Fh(o,n))l<s&&0>Fh(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Fh(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Fh(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}ze.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(uy=performance,ze.unstable_now=function(){return uy.now()}):(qm=Date,hy=qm.now(),ze.unstable_now=function(){return qm.now()-hy});var uy,qm,hy,js=[],Xa=[],Sw=1,Hi=null,In=3,Km=!1,Cc=!1,Rc=!1,Qm=!1,py=typeof setTimeout=="function"?setTimeout:null,my=typeof clearTimeout=="function"?clearTimeout:null,fy=typeof setImmediate<"u"?setImmediate:null;function zh(e){for(var t=Ts(Xa);t!==null;){if(t.callback===null)Vh(Xa);else if(t.startTime<=e)Vh(Xa),t.sortIndex=t.expirationTime,Jm(js,t);else break;t=Ts(Xa)}}function jm(e){if(Rc=!1,zh(e),!Cc)if(Ts(js)!==null)Cc=!0,jo||(jo=!0,Qo());else{var t=Ts(Xa);t!==null&&$m(jm,t.startTime-e)}}var jo=!1,Dc=-1,gy=5,_y=-1;function vy(){return Qm?!0:!(ze.unstable_now()-_y<gy)}function Ym(){if(Qm=!1,jo){var e=ze.unstable_now();_y=e;var t=!0;try{t:{Cc=!1,Rc&&(Rc=!1,my(Dc),Dc=-1),Km=!0;var n=In;try{e:{for(zh(e),Hi=Ts(js);Hi!==null&&!(Hi.expirationTime>e&&vy());){var i=Hi.callback;if(typeof i=="function"){Hi.callback=null,In=Hi.priorityLevel;var s=i(Hi.expirationTime<=e);if(e=ze.unstable_now(),typeof s=="function"){Hi.callback=s,zh(e),t=!0;break e}Hi===Ts(js)&&Vh(js),zh(e)}else Vh(js);Hi=Ts(js)}if(Hi!==null)t=!0;else{var a=Ts(Xa);a!==null&&$m(jm,a.startTime-e),t=!1}}break t}finally{Hi=null,In=n,Km=!1}t=void 0}}finally{t?Qo():jo=!1}}}var Qo;typeof fy=="function"?Qo=function(){fy(Ym)}:typeof MessageChannel<"u"?(Zm=new MessageChannel,dy=Zm.port2,Zm.port1.onmessage=Ym,Qo=function(){dy.postMessage(null)}):Qo=function(){py(Ym,0)};var Zm,dy;function $m(e,t){Dc=py(function(){e(ze.unstable_now())},t)}ze.unstable_IdlePriority=5;ze.unstable_ImmediatePriority=1;ze.unstable_LowPriority=4;ze.unstable_NormalPriority=3;ze.unstable_Profiling=null;ze.unstable_UserBlockingPriority=2;ze.unstable_cancelCallback=function(e){e.callback=null};ze.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gy=0<e?Math.floor(1e3/e):5};ze.unstable_getCurrentPriorityLevel=function(){return In};ze.unstable_next=function(e){switch(In){case 1:case 2:case 3:var t=3;break;default:t=In}var n=In;In=t;try{return e()}finally{In=n}};ze.unstable_requestPaint=function(){Qm=!0};ze.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=In;In=e;try{return t()}finally{In=n}};ze.unstable_scheduleCallback=function(e,t,n){var i=ze.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:Sw++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,Jm(Xa,e),Ts(js)===null&&e===Ts(Xa)&&(Rc?(my(Dc),Dc=-1):Rc=!0,$m(jm,n-i))):(e.sortIndex=s,Jm(js,e),Cc||Km||(Cc=!0,jo||(jo=!0,Qo()))),e};ze.unstable_shouldYield=vy;ze.unstable_wrapCallback=function(e){var t=In;return function(){var n=In;In=t;try{return e.apply(this,arguments)}finally{In=n}}}});var Sy=bs((_O,yy)=>{"use strict";yy.exports=xy()});var by=bs(Wn=>{"use strict";var Mw=wc();function My(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function qa(){}var kn={d:{f:qa,r:function(){throw Error(My(522))},D:qa,C:qa,L:qa,m:qa,X:qa,S:qa,M:qa},p:0,findDOMNode:null},bw=Symbol.for("react.portal");function Tw(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bw,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Uc=Mw.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Hh(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=kn;Wn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(My(299));return Tw(e,t,null,n)};Wn.flushSync=function(e){var t=Uc.T,n=kn.p;try{if(Uc.T=null,kn.p=2,e)return e()}finally{Uc.T=t,kn.p=n,kn.d.f()}};Wn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,kn.d.C(e,t))};Wn.prefetchDNS=function(e){typeof e=="string"&&kn.d.D(e)};Wn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=Hh(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?kn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&kn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Wn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Hh(t.as,t.crossOrigin);kn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&kn.d.M(e)};Wn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=Hh(n,t.crossOrigin);kn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Wn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Hh(t.as,t.crossOrigin);kn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else kn.d.m(e)};Wn.requestFormReset=function(e){kn.d.r(e)};Wn.unstable_batchedUpdates=function(e,t){return e(t)};Wn.useFormState=function(e,t,n){return Uc.H.useFormState(e,t,n)};Wn.useFormStatus=function(){return Uc.H.useHostTransitionStatus()};Wn.version="19.2.4"});var Ay=bs((xO,Ey)=>{"use strict";function Ty(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ty)}catch(e){console.error(e)}}Ty(),Ey.exports=by()});var Fb=bs(dd=>{"use strict";var un=Sy(),jS=wc(),Ew=Ay();function tt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function $S(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function t1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function e1(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function wy(e){if(_u(e)!==e)throw Error(tt(188))}function Aw(e){var t=e.alternate;if(!t){if(t=_u(e),t===null)throw Error(tt(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return wy(s),e;if(a===i)return wy(s),t;a=a.sibling}throw Error(tt(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(tt(189))}}if(n.alternate!==i)throw Error(tt(190))}if(n.tag!==3)throw Error(tt(188));return n.stateNode.current===n?e:t}function n1(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=n1(e),t!==null)return t;e=e.sibling}return null}var Pe=Object.assign,ww=Symbol.for("react.element"),Gh=Symbol.for("react.transitional.element"),zc=Symbol.for("react.portal"),sl=Symbol.for("react.fragment"),i1=Symbol.for("react.strict_mode"),N0=Symbol.for("react.profiler"),s1=Symbol.for("react.consumer"),ra=Symbol.for("react.context"),Cg=Symbol.for("react.forward_ref"),P0=Symbol.for("react.suspense"),O0=Symbol.for("react.suspense_list"),Rg=Symbol.for("react.memo"),Ya=Symbol.for("react.lazy");Symbol.for("react.scope");var I0=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var Cw=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var Cy=Symbol.iterator;function Lc(e){return e===null||typeof e!="object"?null:(e=Cy&&e[Cy]||e["@@iterator"],typeof e=="function"?e:null)}var Rw=Symbol.for("react.client.reference");function B0(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Rw?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sl:return"Fragment";case N0:return"Profiler";case i1:return"StrictMode";case P0:return"Suspense";case O0:return"SuspenseList";case I0:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case zc:return"Portal";case ra:return e.displayName||"Context";case s1:return(e._context.displayName||"Context")+".Consumer";case Cg:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rg:return t=e.displayName||null,t!==null?t:B0(e.type)||"Memo";case Ya:t=e._payload,e=e._init;try{return B0(e(t))}catch{}}return null}var Vc=Array.isArray,It=jS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe=Ew.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,eo={pending:!1,data:null,method:null,action:null},F0=[],al=-1;function Rs(e){return{current:e}}function xn(e){0>al||(e.current=F0[al],F0[al]=null,al--)}function Ce(e,t){al++,F0[al]=e.current,e.current=t}var Cs=Rs(null),iu=Rs(null),sr=Rs(null),Mf=Rs(null);function bf(e,t){switch(Ce(sr,t),Ce(iu,e),Ce(Cs,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?OS(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=OS(t),e=Tb(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xn(Cs),Ce(Cs,e)}function bl(){xn(Cs),xn(iu),xn(sr)}function z0(e){e.memoizedState!==null&&Ce(Mf,e);var t=Cs.current,n=Tb(t,e.type);t!==n&&(Ce(iu,e),Ce(Cs,n))}function Tf(e){iu.current===e&&(xn(Cs),xn(iu)),Mf.current===e&&(xn(Mf),pu._currentValue=eo)}var t0,Ry;function Qr(e){if(t0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);t0=t&&t[1]||"",Ry=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+t0+e+Ry}var e0=!1;function n0(e,t){if(!e||e0)return"";e0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(h){var f=h}Reflect.construct(e,[],d)}else{try{d.call()}catch(h){f=h}e.call(d.prototype)}}else{try{throw Error()}catch(h){f=h}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(h){if(h&&f&&typeof h.stack=="string")return[h.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var u=`
`+l[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=s);break}}}finally{e0=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Qr(n):""}function Dw(e,t){switch(e.tag){case 26:case 27:case 5:return Qr(e.type);case 16:return Qr("Lazy");case 13:return e.child!==t&&t!==null?Qr("Suspense Fallback"):Qr("Suspense");case 19:return Qr("SuspenseList");case 0:case 15:return n0(e.type,!1);case 11:return n0(e.type.render,!1);case 1:return n0(e.type,!0);case 31:return Qr("Activity");default:return""}}function Dy(e){try{var t="",n=null;do t+=Dw(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var V0=Object.prototype.hasOwnProperty,Dg=un.unstable_scheduleCallback,i0=un.unstable_cancelCallback,Uw=un.unstable_shouldYield,Lw=un.unstable_requestPaint,yi=un.unstable_now,Nw=un.unstable_getCurrentPriorityLevel,a1=un.unstable_ImmediatePriority,r1=un.unstable_UserBlockingPriority,Ef=un.unstable_NormalPriority,Pw=un.unstable_LowPriority,o1=un.unstable_IdlePriority,Ow=un.log,Iw=un.unstable_setDisableYieldValue,vu=null,Si=null;function $a(e){if(typeof Ow=="function"&&Iw(e),Si&&typeof Si.setStrictMode=="function")try{Si.setStrictMode(vu,e)}catch{}}var Mi=Math.clz32?Math.clz32:zw,Bw=Math.log,Fw=Math.LN2;function zw(e){return e>>>=0,e===0?32:31-(Bw(e)/Fw|0)|0}var kh=256,Wh=262144,Xh=4194304;function jr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qf(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=jr(i):(r&=o,r!==0?s=jr(r):n||(n=o&~e,n!==0&&(s=jr(n))))):(o=i&~a,o!==0?s=jr(o):r!==0?s=jr(r):n||(n=i&~e,n!==0&&(s=jr(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function xu(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Vw(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l1(){var e=Xh;return Xh<<=1,(Xh&62914560)===0&&(Xh=4194304),e}function s0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yu(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Hw(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var u=31-Mi(n),d=1<<u;o[u]=0,l[u]=-1;var f=c[u];if(f!==null)for(c[u]=null,u=0;u<f.length;u++){var h=f[u];h!==null&&(h.lane&=-536870913)}n&=~d}i!==0&&c1(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function c1(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Mi(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function u1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Mi(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function h1(e,t){var n=t&-t;return n=(n&42)!==0?1:Ug(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ug(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Lg(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function f1(){var e=fe.p;return e!==0?e:(e=window.event,e===void 0?32:Ob(e.type))}function Uy(e,t){var n=fe.p;try{return fe.p=e,t()}finally{fe.p=n}}var _r=Math.random().toString(36).slice(2),An="__reactFiber$"+_r,ri="__reactProps$"+_r,Pl="__reactContainer$"+_r,H0="__reactEvents$"+_r,Gw="__reactListeners$"+_r,kw="__reactHandles$"+_r,Ly="__reactResources$"+_r,Su="__reactMarker$"+_r;function Ng(e){delete e[An],delete e[ri],delete e[H0],delete e[Gw],delete e[kw]}function rl(e){var t=e[An];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pl]||n[An]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=VS(e);e!==null;){if(n=e[An])return n;e=VS(e)}return t}e=n,n=e.parentNode}return null}function Ol(e){if(e=e[An]||e[Pl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Hc(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(tt(33))}function gl(e){var t=e[Ly];return t||(t=e[Ly]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vn(e){e[Su]=!0}var d1=new Set,p1={};function ho(e,t){Tl(e,t),Tl(e+"Capture",t)}function Tl(e,t){for(p1[e]=t,e=0;e<t.length;e++)d1.add(t[e])}var Ww=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ny={},Py={};function Xw(e){return V0.call(Py,e)?!0:V0.call(Ny,e)?!1:Ww.test(e)?Py[e]=!0:(Ny[e]=!0,!1)}function of(e,t,n){if(Xw(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function qh(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function $s(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function ki(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function m1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qw(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function G0(e){if(!e._valueTracker){var t=m1(e)?"checked":"value";e._valueTracker=qw(e,t,""+e[t])}}function g1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=m1(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Af(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yw=/[\n"\\]/g;function qi(e){return e.replace(Yw,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function k0(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ki(t)):e.value!==""+ki(t)&&(e.value=""+ki(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?W0(e,r,ki(t)):n!=null?W0(e,r,ki(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ki(o):e.removeAttribute("name")}function _1(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){G0(e);return}n=n!=null?""+ki(n):"",t=t!=null?""+ki(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),G0(e)}function W0(e,t,n){t==="number"&&Af(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function _l(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ki(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function v1(e,t,n){if(t!=null&&(t=""+ki(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ki(n):""}function x1(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(tt(92));if(Vc(i)){if(1<i.length)throw Error(tt(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ki(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),G0(e)}function El(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oy(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Zw.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function y1(e,t,n){if(t!=null&&typeof t!="object")throw Error(tt(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&Oy(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&Oy(e,a,t[a])}function Pg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function lf(e){return Kw.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function oa(){}var X0=null;function Og(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,vl=null;function Iy(e){var t=Ol(e);if(t&&(e=t.stateNode)){var n=e[ri]||null;t:switch(e=t.stateNode,t.type){case"input":if(k0(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+qi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[ri]||null;if(!s)throw Error(tt(90));k0(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&g1(i)}break t;case"textarea":v1(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&_l(e,!!n.multiple,t,!1)}}}var a0=!1;function S1(e,t,n){if(a0)return e(t,n);a0=!0;try{var i=e(t);return i}finally{if(a0=!1,(ol!==null||vl!==null)&&(cd(),ol&&(t=ol,e=vl,vl=ol=null,Iy(t),e)))for(t=0;t<e.length;t++)Iy(e[t])}}function su(e,t){var n=e.stateNode;if(n===null)return null;var i=n[ri]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(tt(231,t,typeof n));return n}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),q0=!1;if(fa)try{$o={},Object.defineProperty($o,"passive",{get:function(){q0=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{q0=!1}var $o,tr=null,Ig=null,cf=null;function M1(){if(cf)return cf;var e,t=Ig,n=t.length,i,s="value"in tr?tr.value:tr.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return cf=s.slice(e,1<i?1-i:void 0)}function uf(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yh(){return!0}function By(){return!1}function oi(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Yh:By,this.isPropagationStopped=By,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yh)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yh)},persist:function(){},isPersistent:Yh}),t}var fo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=oi(fo),Mu=Pe({},fo,{view:0,detail:0}),Qw=oi(Mu),r0,o0,Nc,$f=Pe({},Mu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nc&&(Nc&&e.type==="mousemove"?(r0=e.screenX-Nc.screenX,o0=e.screenY-Nc.screenY):o0=r0=0,Nc=e),r0)},movementY:function(e){return"movementY"in e?e.movementY:o0}}),Fy=oi($f),jw=Pe({},$f,{dataTransfer:0}),$w=oi(jw),tC=Pe({},Mu,{relatedTarget:0}),l0=oi(tC),eC=Pe({},fo,{animationName:0,elapsedTime:0,pseudoElement:0}),nC=oi(eC),iC=Pe({},fo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sC=oi(iC),aC=Pe({},fo,{data:0}),zy=oi(aC),rC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cC(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lC[e])?!!t[e]:!1}function Bg(){return cC}var uC=Pe({},Mu,{key:function(e){if(e.key){var t=rC[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=uf(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oC[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bg,charCode:function(e){return e.type==="keypress"?uf(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uf(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hC=oi(uC),fC=Pe({},$f,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vy=oi(fC),dC=Pe({},Mu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bg}),pC=oi(dC),mC=Pe({},fo,{propertyName:0,elapsedTime:0,pseudoElement:0}),gC=oi(mC),_C=Pe({},$f,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vC=oi(_C),xC=Pe({},fo,{newState:0,oldState:0}),yC=oi(xC),SC=[9,13,27,32],Fg=fa&&"CompositionEvent"in window,Wc=null;fa&&"documentMode"in document&&(Wc=document.documentMode);var MC=fa&&"TextEvent"in window&&!Wc,b1=fa&&(!Fg||Wc&&8<Wc&&11>=Wc),Hy=" ",Gy=!1;function T1(e,t){switch(e){case"keyup":return SC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ll=!1;function bC(e,t){switch(e){case"compositionend":return E1(t);case"keypress":return t.which!==32?null:(Gy=!0,Hy);case"textInput":return e=t.data,e===Hy&&Gy?null:e;default:return null}}function TC(e,t){if(ll)return e==="compositionend"||!Fg&&T1(e,t)?(e=M1(),cf=Ig=tr=null,ll=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return b1&&t.locale!=="ko"?null:t.data;default:return null}}var EC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ky(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!EC[e.type]:t==="textarea"}function A1(e,t,n,i){ol?vl?vl.push(i):vl=[i]:ol=i,t=Wf(t,"onChange"),0<t.length&&(n=new jf("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Xc=null,au=null;function AC(e){Sb(e,0)}function td(e){var t=Hc(e);if(g1(t))return e}function Wy(e,t){if(e==="change")return t}var w1=!1;fa&&(fa?(Jh="oninput"in document,Jh||(c0=document.createElement("div"),c0.setAttribute("oninput","return;"),Jh=typeof c0.oninput=="function"),Zh=Jh):Zh=!1,w1=Zh&&(!document.documentMode||9<document.documentMode));var Zh,Jh,c0;function Xy(){Xc&&(Xc.detachEvent("onpropertychange",C1),au=Xc=null)}function C1(e){if(e.propertyName==="value"&&td(au)){var t=[];A1(t,au,e,Og(e)),S1(AC,t)}}function wC(e,t,n){e==="focusin"?(Xy(),Xc=t,au=n,Xc.attachEvent("onpropertychange",C1)):e==="focusout"&&Xy()}function CC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return td(au)}function RC(e,t){if(e==="click")return td(t)}function DC(e,t){if(e==="input"||e==="change")return td(t)}function UC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ti=typeof Object.is=="function"?Object.is:UC;function ru(e,t){if(Ti(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!V0.call(t,s)||!Ti(e[s],t[s]))return!1}return!0}function qy(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yy(e,t){var n=qy(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=qy(n)}}function R1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?R1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function D1(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Af(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Af(e.document)}return t}function zg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var LC=fa&&"documentMode"in document&&11>=document.documentMode,cl=null,Y0=null,qc=null,Z0=!1;function Zy(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Z0||cl==null||cl!==Af(i)||(i=cl,"selectionStart"in i&&zg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qc&&ru(qc,i)||(qc=i,i=Wf(Y0,"onSelect"),0<i.length&&(t=new jf("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=cl)))}function Kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ul={animationend:Kr("Animation","AnimationEnd"),animationiteration:Kr("Animation","AnimationIteration"),animationstart:Kr("Animation","AnimationStart"),transitionrun:Kr("Transition","TransitionRun"),transitionstart:Kr("Transition","TransitionStart"),transitioncancel:Kr("Transition","TransitionCancel"),transitionend:Kr("Transition","TransitionEnd")},u0={},U1={};fa&&(U1=document.createElement("div").style,"AnimationEvent"in window||(delete ul.animationend.animation,delete ul.animationiteration.animation,delete ul.animationstart.animation),"TransitionEvent"in window||delete ul.transitionend.transition);function po(e){if(u0[e])return u0[e];if(!ul[e])return e;var t=ul[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in U1)return u0[e]=t[n];return e}var L1=po("animationend"),N1=po("animationiteration"),P1=po("animationstart"),NC=po("transitionrun"),PC=po("transitionstart"),OC=po("transitioncancel"),O1=po("transitionend"),I1=new Map,J0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");J0.push("scrollEnd");function us(e,t){I1.set(e,t),ho(t,[e])}var wf=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Gi=[],hl=0,Vg=0;function ed(){for(var e=hl,t=Vg=hl=0;t<e;){var n=Gi[t];Gi[t++]=null;var i=Gi[t];Gi[t++]=null;var s=Gi[t];Gi[t++]=null;var a=Gi[t];if(Gi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&B1(n,s,a)}}function nd(e,t,n,i){Gi[hl++]=e,Gi[hl++]=t,Gi[hl++]=n,Gi[hl++]=i,Vg|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Hg(e,t,n,i){return nd(e,t,n,i),Cf(e)}function mo(e,t){return nd(e,null,null,t),Cf(e)}function B1(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Mi(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Cf(e){if(50<eu)throw eu=0,gg=null,Error(tt(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fl={};function IC(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,t,n,i){return new IC(e,t,n,i)}function Gg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ca(e,t){var n=e.alternate;return n===null?(n=vi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function F1(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hf(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")Gg(e)&&(r=1);else if(typeof e=="string")r=z2(e,n,Cs.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I0:return e=vi(31,n,t,s),e.elementType=I0,e.lanes=a,e;case sl:return no(n.children,s,a,t);case i1:r=8,s|=24;break;case N0:return e=vi(12,n,t,s|2),e.elementType=N0,e.lanes=a,e;case P0:return e=vi(13,n,t,s),e.elementType=P0,e.lanes=a,e;case O0:return e=vi(19,n,t,s),e.elementType=O0,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ra:r=10;break t;case s1:r=9;break t;case Cg:r=11;break t;case Rg:r=14;break t;case Ya:r=16,i=null;break t}r=29,n=Error(tt(130,e===null?"null":typeof e,"")),i=null}return t=vi(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function no(e,t,n,i){return e=vi(7,e,i,t),e.lanes=n,e}function h0(e,t,n){return e=vi(6,e,null,t),e.lanes=n,e}function z1(e){var t=vi(18,null,null,0);return t.stateNode=e,t}function f0(e,t,n){return t=vi(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Jy=new WeakMap;function Yi(e,t){if(typeof e=="object"&&e!==null){var n=Jy.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Dy(t)},Jy.set(e,t),t)}return{value:e,source:t,stack:Dy(t)}}var dl=[],pl=0,Rf=null,ou=0,Wi=[],Xi=0,dr=null,Es=1,As="";function sa(e,t){dl[pl++]=ou,dl[pl++]=Rf,Rf=e,ou=t}function V1(e,t,n){Wi[Xi++]=Es,Wi[Xi++]=As,Wi[Xi++]=dr,dr=e;var i=Es;e=As;var s=32-Mi(i)-1;i&=~(1<<s),n+=1;var a=32-Mi(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Es=1<<32-Mi(t)+s|n<<s|i,As=a+e}else Es=1<<a|n<<s|i,As=e}function kg(e){e.return!==null&&(sa(e,1),V1(e,1,0))}function Wg(e){for(;e===Rf;)Rf=dl[--pl],dl[pl]=null,ou=dl[--pl],dl[pl]=null;for(;e===dr;)dr=Wi[--Xi],Wi[Xi]=null,As=Wi[--Xi],Wi[Xi]=null,Es=Wi[--Xi],Wi[Xi]=null}function H1(e,t){Wi[Xi++]=Es,Wi[Xi++]=As,Wi[Xi++]=dr,Es=t.id,As=t.overflow,dr=e}var wn=null,Ne=null,ae=!1,ar=null,Zi=!1,K0=Error(tt(519));function pr(e){var t=Error(tt(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lu(Yi(t,e)),K0}function Ky(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[An]=e,t[ri]=i,n){case"dialog":$t("cancel",t),$t("close",t);break;case"iframe":case"object":case"embed":$t("load",t);break;case"video":case"audio":for(n=0;n<fu.length;n++)$t(fu[n],t);break;case"source":$t("error",t);break;case"img":case"image":case"link":$t("error",t),$t("load",t);break;case"details":$t("toggle",t);break;case"input":$t("invalid",t),_1(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":$t("invalid",t);break;case"textarea":$t("invalid",t),x1(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||bb(t.textContent,n)?(i.popover!=null&&($t("beforetoggle",t),$t("toggle",t)),i.onScroll!=null&&$t("scroll",t),i.onScrollEnd!=null&&$t("scrollend",t),i.onClick!=null&&(t.onclick=oa),t=!0):t=!1,t||pr(e,!0)}function Qy(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:Zi=!1;return;case 27:case 3:Zi=!0;return;default:wn=wn.return}}function tl(e){if(e!==wn)return!1;if(!ae)return Qy(e),ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Sg(e.type,e.memoizedProps)),n=!n),n&&Ne&&pr(e),Qy(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Ne=zS(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(317));Ne=zS(e)}else t===27?(t=Ne,vr(e.type)?(e=Eg,Eg=null,Ne=e):Ne=t):Ne=wn?Ki(e.stateNode.nextSibling):null;return!0}function ro(){Ne=wn=null,ae=!1}function d0(){var e=ar;return e!==null&&(si===null?si=e:si.push.apply(si,e),ar=null),e}function lu(e){ar===null?ar=[e]:ar.push(e)}var Q0=Rs(null),go=null,la=null;function Ja(e,t,n){Ce(Q0,t._currentValue),t._currentValue=n}function ua(e){e._currentValue=Q0.current,xn(Q0)}function j0(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function $0(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),j0(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(tt(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),j0(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Il(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(tt(387));if(r=r.memoizedProps,r!==null){var o=s.type;Ti(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Mf.current){if(r=s.alternate,r===null)throw Error(tt(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(pu):e=[pu])}s=s.return}e!==null&&$0(t,e,n,i),t.flags|=262144}function Df(e){for(e=e.firstContext;e!==null;){if(!Ti(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oo(e){go=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return G1(go,e)}function Kh(e,t){return go===null&&oo(e),G1(e,t)}function G1(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},la===null){if(e===null)throw Error(tt(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return n}var BC=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},FC=un.unstable_scheduleCallback,zC=un.unstable_NormalPriority,rn={$$typeof:ra,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xg(){return{controller:new BC,data:new Map,refCount:0}}function bu(e){e.refCount--,e.refCount===0&&FC(zC,function(){e.controller.abort()})}var Yc=null,tg=0,Al=0,xl=null;function VC(e,t){if(Yc===null){var n=Yc=[];tg=0,Al=g_(),xl={status:"pending",value:void 0,then:function(i){n.push(i)}}}return tg++,t.then(jy,jy),t}function jy(){if(--tg===0&&Yc!==null){xl!==null&&(xl.status="fulfilled");var e=Yc;Yc=null,Al=0,xl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function HC(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var $y=It.S;It.S=function(e,t){nb=yi(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&VC(e,t),$y!==null&&$y(e,t)};var io=Rs(null);function qg(){var e=io.current;return e!==null?e:Te.pooledCache}function ff(e,t){t===null?Ce(io,io.current):Ce(io,t.pool)}function k1(){var e=qg();return e===null?null:{parent:rn._currentValue,pool:e}}var Bl=Error(tt(460)),Yg=Error(tt(474)),id=Error(tt(542)),Uf={then:function(){}};function tS(e){return e=e.status,e==="fulfilled"||e==="rejected"}function W1(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(oa,oa),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nS(e),e;default:if(typeof t.status=="string")t.then(oa,oa);else{if(e=Te,e!==null&&100<e.shellSuspendCounter)throw Error(tt(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,nS(e),e}throw so=t,Bl}}function $r(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(so=n,Bl):n}}var so=null;function eS(){if(so===null)throw Error(tt(459));var e=so;return so=null,e}function nS(e){if(e===Bl||e===id)throw Error(tt(483))}var yl=null,cu=0;function Qh(e){var t=cu;return cu+=1,yl===null&&(yl=[]),W1(yl,e,t)}function Pc(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function jh(e,t){throw t.$$typeof===ww?Error(tt(525)):(e=Object.prototype.toString.call(t),Error(tt(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function X1(e){function t(p,v){if(e){var S=p.deletions;S===null?(p.deletions=[v],p.flags|=16):S.push(v)}}function n(p,v){if(!e)return null;for(;v!==null;)t(p,v),v=v.sibling;return null}function i(p){for(var v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function s(p,v){return p=ca(p,v),p.index=0,p.sibling=null,p}function a(p,v,S){return p.index=S,e?(S=p.alternate,S!==null?(S=S.index,S<v?(p.flags|=67108866,v):S):(p.flags|=67108866,v)):(p.flags|=1048576,v)}function r(p){return e&&p.alternate===null&&(p.flags|=67108866),p}function o(p,v,S,x){return v===null||v.tag!==6?(v=h0(S,p.mode,x),v.return=p,v):(v=s(v,S),v.return=p,v)}function l(p,v,S,x){var M=S.type;return M===sl?u(p,v,S.props.children,x,S.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ya&&$r(M)===v.type)?(v=s(v,S.props),Pc(v,S),v.return=p,v):(v=hf(S.type,S.key,S.props,null,p.mode,x),Pc(v,S),v.return=p,v)}function c(p,v,S,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=f0(S,p.mode,x),v.return=p,v):(v=s(v,S.children||[]),v.return=p,v)}function u(p,v,S,x,M){return v===null||v.tag!==7?(v=no(S,p.mode,x,M),v.return=p,v):(v=s(v,S),v.return=p,v)}function d(p,v,S){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=h0(""+v,p.mode,S),v.return=p,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gh:return S=hf(v.type,v.key,v.props,null,p.mode,S),Pc(S,v),S.return=p,S;case zc:return v=f0(v,p.mode,S),v.return=p,v;case Ya:return v=$r(v),d(p,v,S)}if(Vc(v)||Lc(v))return v=no(v,p.mode,S,null),v.return=p,v;if(typeof v.then=="function")return d(p,Qh(v),S);if(v.$$typeof===ra)return d(p,Kh(p,v),S);jh(p,v)}return null}function f(p,v,S,x){var M=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return M!==null?null:o(p,v,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Gh:return S.key===M?l(p,v,S,x):null;case zc:return S.key===M?c(p,v,S,x):null;case Ya:return S=$r(S),f(p,v,S,x)}if(Vc(S)||Lc(S))return M!==null?null:u(p,v,S,x,null);if(typeof S.then=="function")return f(p,v,Qh(S),x);if(S.$$typeof===ra)return f(p,v,Kh(p,S),x);jh(p,S)}return null}function h(p,v,S,x,M){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(S)||null,o(v,p,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Gh:return p=p.get(x.key===null?S:x.key)||null,l(v,p,x,M);case zc:return p=p.get(x.key===null?S:x.key)||null,c(v,p,x,M);case Ya:return x=$r(x),h(p,v,S,x,M)}if(Vc(x)||Lc(x))return p=p.get(S)||null,u(v,p,x,M,null);if(typeof x.then=="function")return h(p,v,S,Qh(x),M);if(x.$$typeof===ra)return h(p,v,S,Kh(v,x),M);jh(v,x)}return null}function m(p,v,S,x){for(var M=null,w=null,E=v,y=v=0,T=null;E!==null&&y<S.length;y++){E.index>y?(T=E,E=null):T=E.sibling;var R=f(p,E,S[y],x);if(R===null){E===null&&(E=T);break}e&&E&&R.alternate===null&&t(p,E),v=a(R,v,y),w===null?M=R:w.sibling=R,w=R,E=T}if(y===S.length)return n(p,E),ae&&sa(p,y),M;if(E===null){for(;y<S.length;y++)E=d(p,S[y],x),E!==null&&(v=a(E,v,y),w===null?M=E:w.sibling=E,w=E);return ae&&sa(p,y),M}for(E=i(E);y<S.length;y++)T=h(E,p,y,S[y],x),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?y:T.key),v=a(T,v,y),w===null?M=T:w.sibling=T,w=T);return e&&E.forEach(function(D){return t(p,D)}),ae&&sa(p,y),M}function _(p,v,S,x){if(S==null)throw Error(tt(151));for(var M=null,w=null,E=v,y=v=0,T=null,R=S.next();E!==null&&!R.done;y++,R=S.next()){E.index>y?(T=E,E=null):T=E.sibling;var D=f(p,E,R.value,x);if(D===null){E===null&&(E=T);break}e&&E&&D.alternate===null&&t(p,E),v=a(D,v,y),w===null?M=D:w.sibling=D,w=D,E=T}if(R.done)return n(p,E),ae&&sa(p,y),M;if(E===null){for(;!R.done;y++,R=S.next())R=d(p,R.value,x),R!==null&&(v=a(R,v,y),w===null?M=R:w.sibling=R,w=R);return ae&&sa(p,y),M}for(E=i(E);!R.done;y++,R=S.next())R=h(E,p,y,R.value,x),R!==null&&(e&&R.alternate!==null&&E.delete(R.key===null?y:R.key),v=a(R,v,y),w===null?M=R:w.sibling=R,w=R);return e&&E.forEach(function(L){return t(p,L)}),ae&&sa(p,y),M}function g(p,v,S,x){if(typeof S=="object"&&S!==null&&S.type===sl&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Gh:t:{for(var M=S.key;v!==null;){if(v.key===M){if(M=S.type,M===sl){if(v.tag===7){n(p,v.sibling),x=s(v,S.props.children),x.return=p,p=x;break t}}else if(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Ya&&$r(M)===v.type){n(p,v.sibling),x=s(v,S.props),Pc(x,S),x.return=p,p=x;break t}n(p,v);break}else t(p,v);v=v.sibling}S.type===sl?(x=no(S.props.children,p.mode,x,S.key),x.return=p,p=x):(x=hf(S.type,S.key,S.props,null,p.mode,x),Pc(x,S),x.return=p,p=x)}return r(p);case zc:t:{for(M=S.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(p,v.sibling),x=s(v,S.children||[]),x.return=p,p=x;break t}else{n(p,v);break}else t(p,v);v=v.sibling}x=f0(S,p.mode,x),x.return=p,p=x}return r(p);case Ya:return S=$r(S),g(p,v,S,x)}if(Vc(S))return m(p,v,S,x);if(Lc(S)){if(M=Lc(S),typeof M!="function")throw Error(tt(150));return S=M.call(S),_(p,v,S,x)}if(typeof S.then=="function")return g(p,v,Qh(S),x);if(S.$$typeof===ra)return g(p,v,Kh(p,S),x);jh(p,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,v!==null&&v.tag===6?(n(p,v.sibling),x=s(v,S),x.return=p,p=x):(n(p,v),x=h0(S,p.mode,x),x.return=p,p=x),r(p)):n(p,v)}return function(p,v,S,x){try{cu=0;var M=g(p,v,S,x);return yl=null,M}catch(E){if(E===Bl||E===id)throw E;var w=vi(29,E,null,p.mode);return w.lanes=x,w.return=p,w}finally{}}}var lo=X1(!0),q1=X1(!1),Za=!1;function Zg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function eg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function or(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(he&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Cf(e),B1(e,null,n),t}return nd(e,i,t,n),Cf(e)}function Zc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,u1(e,n)}}function p0(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ng=!1;function Jc(){if(ng){var e=xl;if(e!==null)throw e}}function Kc(e,t,n,i){ng=!1;var s=e.updateQueue;Za=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==r&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,u=c=l=null,o=a;do{var f=o.lane&-536870913,h=f!==o.lane;if(h?(ne&f)===f:(i&f)===f){f!==0&&f===Al&&(ng=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var m=e,_=o;f=t;var g=n;switch(_.tag){case 1:if(m=_.payload,typeof m=="function"){d=m.call(g,d,f);break t}d=m;break t;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,f=typeof m=="function"?m.call(g,d,f):m,f==null)break t;d=Pe({},d,f);break t;case 2:Za=!0}}f=o.callback,f!==null&&(e.flags|=64,h&&(e.flags|=8192),h=s.callbacks,h===null?s.callbacks=[f]:h.push(f))}else h={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=h,l=d):u=u.next=h,r|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;h=o,o=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,a===null&&(s.shared.lanes=0),gr|=r,e.lanes=r,e.memoizedState=d}}function Y1(e,t){if(typeof e!="function")throw Error(tt(191,e));e.call(t)}function Z1(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Y1(n[e],t)}var wl=Rs(null),Lf=Rs(0);function iS(e,t){e=ga,Ce(Lf,e),Ce(wl,t),ga=e|t.baseLanes}function ig(){Ce(Lf,ga),Ce(wl,wl.current)}function Jg(){ga=Lf.current,xn(wl),xn(Lf)}var Ei=Rs(null),Ji=null;function Ka(e){var t=e.alternate;Ce(je,je.current&1),Ce(Ei,e),Ji===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(Ji=e)}function sg(e){Ce(je,je.current),Ce(Ei,e),Ji===null&&(Ji=e)}function J1(e){e.tag===22?(Ce(je,je.current),Ce(Ei,e),Ji===null&&(Ji=e)):Qa(e)}function Qa(){Ce(je,je.current),Ce(Ei,Ei.current)}function _i(e){xn(Ei),Ji===e&&(Ji=null),xn(je)}var je=Rs(0);function Nf(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||bg(n)||Tg(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=0,Xt=null,be=null,sn=null,Pf=!1,Sl=!1,co=!1,Of=0,uu=0,Ml=null,GC=0;function Xe(){throw Error(tt(321))}function Kg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ti(e[n],t[n]))return!1;return!0}function Qg(e,t,n,i,s,a){return da=a,Xt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,It.H=e===null||e.memoizedState===null?AM:l_,co=!1,a=n(i,s),co=!1,Sl&&(a=Q1(t,n,i,s)),K1(e),a}function K1(e){It.H=hu;var t=be!==null&&be.next!==null;if(da=0,sn=be=Xt=null,Pf=!1,uu=0,Ml=null,t)throw Error(tt(300));e===null||on||(e=e.dependencies,e!==null&&Df(e)&&(on=!0))}function Q1(e,t,n,i){Xt=e;var s=0;do{if(Sl&&(Ml=null),uu=0,Sl=!1,25<=s)throw Error(tt(301));if(s+=1,sn=be=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}It.H=wM,a=t(n,i)}while(Sl);return a}function kC(){var e=It.H,t=e.useState()[0];return t=typeof t.then=="function"?Tu(t):t,e=e.useState()[0],(be!==null?be.memoizedState:null)!==e&&(Xt.flags|=1024),t}function jg(){var e=Of!==0;return Of=0,e}function $g(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function t_(e){if(Pf){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pf=!1}da=0,sn=be=Xt=null,Sl=!1,uu=Of=0,Ml=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Xt.memoizedState=sn=e:sn=sn.next=e,sn}function $e(){if(be===null){var e=Xt.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=sn===null?Xt.memoizedState:sn.next;if(t!==null)sn=t,be=e;else{if(e===null)throw Xt.alternate===null?Error(tt(467)):Error(tt(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},sn===null?Xt.memoizedState=sn=e:sn=sn.next=e}return sn}function sd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tu(e){var t=uu;return uu+=1,Ml===null&&(Ml=[]),e=W1(Ml,e,t),t=Xt,(sn===null?t.memoizedState:sn.next)===null&&(t=t.alternate,It.H=t===null||t.memoizedState===null?AM:l_),e}function ad(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Tu(e);if(e.$$typeof===ra)return Cn(e)}throw Error(tt(438,String(e)))}function e_(e){var t=null,n=Xt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Xt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=sd(),Xt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Cw;return t.index++,n}function pa(e,t){return typeof t=="function"?t(e):t}function df(e){var t=$e();return n_(t,be,e)}function n_(e,t,n){var i=e.queue;if(i===null)throw Error(tt(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,u=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(ne&d)===d:(da&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Al&&(u=!0);else if((da&f)===f){c=c.next,f===Al&&(u=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,Xt.lanes|=f,gr|=f;d=c.action,co&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else f={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,r=a):l=l.next=f,Xt.lanes|=d,gr|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Ti(a,e.memoizedState)&&(on=!0,u&&(n=xl,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function m0(e){var t=$e(),n=t.queue;if(n===null)throw Error(tt(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Ti(a,t.memoizedState)||(on=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function j1(e,t,n){var i=Xt,s=$e(),a=ae;if(a){if(n===void 0)throw Error(tt(407));n=n()}else n=t();var r=!Ti((be||s).memoizedState,n);if(r&&(s.memoizedState=n,on=!0),s=s.queue,i_(eM.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||sn!==null&&sn.memoizedState.tag&1){if(i.flags|=2048,Cl(9,{destroy:void 0},tM.bind(null,i,s,n,t),null),Te===null)throw Error(tt(349));a||(da&127)!==0||$1(i,t,n)}return n}function $1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xt.updateQueue,t===null?(t=sd(),Xt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tM(e,t,n,i){t.value=n,t.getSnapshot=i,nM(t)&&iM(e)}function eM(e,t,n){return n(function(){nM(t)&&iM(e)})}function nM(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ti(e,n)}catch{return!0}}function iM(e){var t=mo(e,2);t!==null&&ai(t,e,2)}function ag(e){var t=Xn();if(typeof e=="function"){var n=e;if(e=n(),co){$a(!0);try{n()}finally{$a(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function sM(e,t,n,i){return e.baseState=n,n_(e,be,typeof i=="function"?i:pa)}function WC(e,t,n,i,s){if(od(e))throw Error(tt(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};It.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,aM(t,a)):(a.next=n.next,t.pending=n.next=a)}}function aM(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=It.T,r={};It.T=r;try{var o=n(s,i),l=It.S;l!==null&&l(r,o),sS(e,t,o)}catch(c){rg(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),It.T=a}}else try{a=n(s,i),sS(e,t,a)}catch(c){rg(e,t,c)}}function sS(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){aS(e,t,i)},function(i){return rg(e,t,i)}):aS(e,t,n)}function aS(e,t,n){t.status="fulfilled",t.value=n,rM(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,aM(e,n)))}function rg(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,rM(t),t=t.next;while(t!==i)}e.action=null}function rM(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function oM(e,t){return t}function rS(e,t){if(ae){var n=Te.formState;if(n!==null){t:{var i=Xt;if(ae){if(Ne){e:{for(var s=Ne,a=Zi;s.nodeType!==8;){if(!a){s=null;break e}if(s=Ki(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Ne=Ki(s.nextSibling),i=s.data==="F!";break t}}pr(i)}i=!1}i&&(t=n[0])}}return n=Xn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oM,lastRenderedState:t},n.queue=i,n=bM.bind(null,Xt,i),i.dispatch=n,i=ag(!1),a=o_.bind(null,Xt,!1,i.queue),i=Xn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=WC.bind(null,Xt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function oS(e){var t=$e();return lM(t,be,e)}function lM(e,t,n){if(t=n_(e,t,oM)[0],e=df(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Tu(t)}catch(r){throw r===Bl?id:r}else i=t;t=$e();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(Xt.flags|=2048,Cl(9,{destroy:void 0},XC.bind(null,s,n),null)),[i,a,e]}function XC(e,t){e.action=t}function lS(e){var t=$e(),n=be;if(n!==null)return lM(t,n,e);$e(),t=t.memoizedState,n=$e();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Cl(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Xt.updateQueue,t===null&&(t=sd(),Xt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function cM(){return $e().memoizedState}function pf(e,t,n,i){var s=Xn();Xt.flags|=e,s.memoizedState=Cl(1|t,{destroy:void 0},n,i===void 0?null:i)}function rd(e,t,n,i){var s=$e();i=i===void 0?null:i;var a=s.memoizedState.inst;be!==null&&i!==null&&Kg(i,be.memoizedState.deps)?s.memoizedState=Cl(t,a,n,i):(Xt.flags|=e,s.memoizedState=Cl(1|t,a,n,i))}function cS(e,t){pf(8390656,8,e,t)}function i_(e,t){rd(2048,8,e,t)}function qC(e){Xt.flags|=4;var t=Xt.updateQueue;if(t===null)t=sd(),Xt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function uM(e){var t=$e().memoizedState;return qC({ref:t,nextImpl:e}),function(){if((he&2)!==0)throw Error(tt(440));return t.impl.apply(void 0,arguments)}}function hM(e,t){return rd(4,2,e,t)}function fM(e,t){return rd(4,4,e,t)}function dM(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pM(e,t,n){n=n!=null?n.concat([e]):null,rd(4,4,dM.bind(null,t,e),n)}function s_(){}function mM(e,t){var n=$e();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Kg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function gM(e,t){var n=$e();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Kg(t,i[1]))return i[0];if(i=e(),co){$a(!0);try{e()}finally{$a(!1)}}return n.memoizedState=[i,t],i}function a_(e,t,n){return n===void 0||(da&1073741824)!==0&&(ne&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=sb(),Xt.lanes|=e,gr|=e,n)}function _M(e,t,n,i){return Ti(n,t)?n:wl.current!==null?(e=a_(e,n,i),Ti(e,t)||(on=!0),e):(da&42)===0||(da&1073741824)!==0&&(ne&261930)===0?(on=!0,e.memoizedState=n):(e=sb(),Xt.lanes|=e,gr|=e,t)}function vM(e,t,n,i,s){var a=fe.p;fe.p=a!==0&&8>a?a:8;var r=It.T,o={};It.T=o,o_(e,!1,t,n);try{var l=s(),c=It.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=HC(l,i);Qc(e,t,u,bi(e))}else Qc(e,t,i,bi(e))}catch(d){Qc(e,t,{then:function(){},status:"rejected",reason:d},bi())}finally{fe.p=a,r!==null&&o.types!==null&&(r.types=o.types),It.T=r}}function YC(){}function og(e,t,n,i){if(e.tag!==5)throw Error(tt(476));var s=xM(e).queue;vM(e,s,t,eo,n===null?YC:function(){return yM(e),n(i)})}function xM(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:eo,baseState:eo,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:eo},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function yM(e){var t=xM(e);t.next===null&&(t=e.alternate.memoizedState),Qc(e,t.next.queue,{},bi())}function r_(){return Cn(pu)}function SM(){return $e().memoizedState}function MM(){return $e().memoizedState}function ZC(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=bi();e=rr(n);var i=or(t,e,n);i!==null&&(ai(i,t,n),Zc(i,t,n)),t={cache:Xg()},e.payload=t;return}t=t.return}}function JC(e,t,n){var i=bi();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},od(e)?TM(t,n):(n=Hg(e,t,n,i),n!==null&&(ai(n,e,i),EM(n,t,i)))}function bM(e,t,n){var i=bi();Qc(e,t,n,i)}function Qc(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(od(e))TM(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Ti(o,r))return nd(e,t,s,0),Te===null&&ed(),!1}catch{}finally{}if(n=Hg(e,t,s,i),n!==null)return ai(n,e,i),EM(n,t,i),!0}return!1}function o_(e,t,n,i){if(i={lane:2,revertLane:g_(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},od(e)){if(t)throw Error(tt(479))}else t=Hg(e,n,i,2),t!==null&&ai(t,e,2)}function od(e){var t=e.alternate;return e===Xt||t!==null&&t===Xt}function TM(e,t){Sl=Pf=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function EM(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,u1(e,n)}}var hu={readContext:Cn,use:ad,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};hu.useEffectEvent=Xe;var AM={readContext:Cn,use:ad,useCallback:function(e,t){return Xn().memoizedState=[e,t===void 0?null:t],e},useContext:Cn,useEffect:cS,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,pf(4194308,4,dM.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pf(4194308,4,e,t)},useInsertionEffect:function(e,t){pf(4,2,e,t)},useMemo:function(e,t){var n=Xn();t=t===void 0?null:t;var i=e();if(co){$a(!0);try{e()}finally{$a(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Xn();if(n!==void 0){var s=n(t);if(co){$a(!0);try{n(t)}finally{$a(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=JC.bind(null,Xt,e),[i.memoizedState,e]},useRef:function(e){var t=Xn();return e={current:e},t.memoizedState=e},useState:function(e){e=ag(e);var t=e.queue,n=bM.bind(null,Xt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:s_,useDeferredValue:function(e,t){var n=Xn();return a_(n,e,t)},useTransition:function(){var e=ag(!1);return e=vM.bind(null,Xt,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Xt,s=Xn();if(ae){if(n===void 0)throw Error(tt(407));n=n()}else{if(n=t(),Te===null)throw Error(tt(349));(ne&127)!==0||$1(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,cS(eM.bind(null,i,a,e),[e]),i.flags|=2048,Cl(9,{destroy:void 0},tM.bind(null,i,a,n,t),null),n},useId:function(){var e=Xn(),t=Te.identifierPrefix;if(ae){var n=As,i=Es;n=(i&~(1<<32-Mi(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Of++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=GC++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:r_,useFormState:rS,useActionState:rS,useOptimistic:function(e){var t=Xn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=o_.bind(null,Xt,!0,n),n.dispatch=t,[e,t]},useMemoCache:e_,useCacheRefresh:function(){return Xn().memoizedState=ZC.bind(null,Xt)},useEffectEvent:function(e){var t=Xn(),n={impl:e};return t.memoizedState=n,function(){if((he&2)!==0)throw Error(tt(440));return n.impl.apply(void 0,arguments)}}},l_={readContext:Cn,use:ad,useCallback:mM,useContext:Cn,useEffect:i_,useImperativeHandle:pM,useInsertionEffect:hM,useLayoutEffect:fM,useMemo:gM,useReducer:df,useRef:cM,useState:function(){return df(pa)},useDebugValue:s_,useDeferredValue:function(e,t){var n=$e();return _M(n,be.memoizedState,e,t)},useTransition:function(){var e=df(pa)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:Tu(e),t]},useSyncExternalStore:j1,useId:SM,useHostTransitionStatus:r_,useFormState:oS,useActionState:oS,useOptimistic:function(e,t){var n=$e();return sM(n,be,e,t)},useMemoCache:e_,useCacheRefresh:MM};l_.useEffectEvent=uM;var wM={readContext:Cn,use:ad,useCallback:mM,useContext:Cn,useEffect:i_,useImperativeHandle:pM,useInsertionEffect:hM,useLayoutEffect:fM,useMemo:gM,useReducer:m0,useRef:cM,useState:function(){return m0(pa)},useDebugValue:s_,useDeferredValue:function(e,t){var n=$e();return be===null?a_(n,e,t):_M(n,be.memoizedState,e,t)},useTransition:function(){var e=m0(pa)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:Tu(e),t]},useSyncExternalStore:j1,useId:SM,useHostTransitionStatus:r_,useFormState:lS,useActionState:lS,useOptimistic:function(e,t){var n=$e();return be!==null?sM(n,be,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:e_,useCacheRefresh:MM};wM.useEffectEvent=uM;function g0(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lg={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=bi(),s=rr(i);s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(ai(t,e,i),Zc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=bi(),s=rr(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=or(e,s,i),t!==null&&(ai(t,e,i),Zc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=bi(),i=rr(n);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,n),t!==null&&(ai(t,e,n),Zc(t,e,n))}};function uS(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!ru(n,i)||!ru(s,a):!0}function hS(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&lg.enqueueReplaceState(t,t.state,null)}function uo(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Pe({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function CM(e){wf(e)}function RM(e){console.error(e)}function DM(e){wf(e)}function If(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function fS(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function cg(e,t,n){return n=rr(n),n.tag=3,n.payload={element:null},n.callback=function(){If(e,t)},n}function UM(e){return e=rr(e),e.tag=3,e}function LM(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){fS(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){fS(t,n,i),typeof s!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function KC(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Il(t,n,s,!0),n=Ei.current,n!==null){switch(n.tag){case 31:case 13:return Ji===null?Hf():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Uf?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),w0(e,i,s)),!1;case 22:return n.flags|=65536,i===Uf?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),w0(e,i,s)),!1}throw Error(tt(435,n.tag))}return w0(e,i,s),Hf(),!1}if(ae)return t=Ei.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==K0&&(e=Error(tt(422),{cause:i}),lu(Yi(e,n)))):(i!==K0&&(t=Error(tt(423),{cause:i}),lu(Yi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Yi(i,n),s=cg(e.stateNode,i,s),p0(e,s),qe!==4&&(qe=2)),!1;var a=Error(tt(520),{cause:i});if(a=Yi(a,n),tu===null?tu=[a]:tu.push(a),qe!==4&&(qe=2),t===null)return!0;i=Yi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=cg(n.stateNode,i,e),p0(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(lr===null||!lr.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=UM(s),LM(s,e,n,i),p0(n,s),!1}n=n.return}while(n!==null);return!1}var c_=Error(tt(461)),on=!1;function En(e,t,n,i){t.child=e===null?q1(t,null,n,i):lo(t,e.child,n,i)}function dS(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return oo(t),i=Qg(e,t,n,r,a,s),o=jg(),e!==null&&!on?($g(e,t,s),ma(e,t,s)):(ae&&o&&kg(t),t.flags|=1,En(e,t,i,s),t.child)}function pS(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!Gg(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,NM(e,t,a,i,s)):(e=hf(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!u_(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:ru,n(r,i)&&e.ref===t.ref)return ma(e,t,s)}return t.flags|=1,e=ca(a,i),e.ref=t.ref,e.return=t,t.child=e}function NM(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(ru(a,i)&&e.ref===t.ref)if(on=!1,t.pendingProps=i=a,u_(e,s))(e.flags&131072)!==0&&(on=!0);else return t.lanes=e.lanes,ma(e,t,s)}return ug(e,t,n,i,s)}function PM(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return mS(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ff(t,a!==null?a.cachePool:null),a!==null?iS(t,a):ig(),J1(t);else return i=t.lanes=536870912,mS(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(ff(t,a.cachePool),iS(t,a),Qa(t),t.memoizedState=null):(e!==null&&ff(t,null),ig(),Qa(t));return En(e,t,s,n),t.child}function Gc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mS(e,t,n,i,s){var a=qg();return a=a===null?null:{parent:rn._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ff(t,null),ig(),J1(t),e!==null&&Il(e,t,i,!0),t.childLanes=s,null}function mf(e,t){return t=Bf({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gS(e,t,n){return lo(t,e.child,null,n),e=mf(t,t.pendingProps),e.flags|=2,_i(t),t.memoizedState=null,e}function QC(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ae){if(i.mode==="hidden")return e=mf(t,i),t.lanes=536870912,Gc(null,e);if(sg(t),(e=Ne)?(e=Ab(e,Zi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:dr!==null?{id:Es,overflow:As}:null,retryLane:536870912,hydrationErrors:null},n=z1(e),n.return=t,t.child=n,wn=t,Ne=null)):e=null,e===null)throw pr(t);return t.lanes=536870912,null}return mf(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(sg(t),s)if(t.flags&256)t.flags&=-257,t=gS(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(tt(558));else if(on||Il(e,t,n,!1),s=(n&e.childLanes)!==0,on||s){if(i=Te,i!==null&&(r=h1(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,mo(e,r),ai(i,e,r),c_;Hf(),t=gS(e,t,n)}else e=a.treeContext,Ne=Ki(r.nextSibling),wn=t,ae=!0,ar=null,Zi=!1,e!==null&&H1(t,e),t=mf(t,i),t.flags|=4096;return t}return e=ca(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gf(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(tt(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ug(e,t,n,i,s){return oo(t),n=Qg(e,t,n,i,void 0,s),i=jg(),e!==null&&!on?($g(e,t,s),ma(e,t,s)):(ae&&i&&kg(t),t.flags|=1,En(e,t,n,s),t.child)}function _S(e,t,n,i,s,a){return oo(t),t.updateQueue=null,n=Q1(t,i,n,s),K1(e),i=jg(),e!==null&&!on?($g(e,t,a),ma(e,t,a)):(ae&&i&&kg(t),t.flags|=1,En(e,t,n,a),t.child)}function vS(e,t,n,i,s){if(oo(t),t.stateNode===null){var a=fl,r=n.contextType;typeof r=="object"&&r!==null&&(a=Cn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=lg,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Zg(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?Cn(r):fl,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(g0(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&lg.enqueueReplaceState(a,a.state,null),Kc(t,i,a,s),Jc(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=uo(n,o);a.props=l;var c=a.context,u=n.contextType;r=fl,typeof u=="object"&&u!==null&&(r=Cn(u));var d=n.getDerivedStateFromProps;u=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&hS(t,a,i,r),Za=!1;var f=t.memoizedState;a.state=f,Kc(t,i,a,s),Jc(),c=t.memoizedState,o||f!==c||Za?(typeof d=="function"&&(g0(t,n,d,i),c=t.memoizedState),(l=Za||uS(t,n,l,i,f,c,r))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,eg(e,t),r=t.memoizedProps,u=uo(n,r),a.props=u,d=t.pendingProps,f=a.context,c=n.contextType,l=fl,typeof c=="object"&&c!==null&&(l=Cn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||f!==l)&&hS(t,a,i,l),Za=!1,f=t.memoizedState,a.state=f,Kc(t,i,a,s),Jc();var h=t.memoizedState;r!==d||f!==h||Za||e!==null&&e.dependencies!==null&&Df(e.dependencies)?(typeof o=="function"&&(g0(t,n,o,i),h=t.memoizedState),(u=Za||uS(t,n,u,i,f,h,l)||e!==null&&e.dependencies!==null&&Df(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,h,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,h,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=h),a.props=i,a.state=h,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,gf(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=lo(t,e.child,null,s),t.child=lo(t,null,n,s)):En(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ma(e,t,s),e}function xS(e,t,n,i){return ro(),t.flags|=256,En(e,t,n,i),t.child}var _0={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function v0(e){return{baseLanes:e,cachePool:k1()}}function x0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=xi),e}function OM(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(je.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(ae){if(s?Ka(t):Qa(t),(e=Ne)?(e=Ab(e,Zi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:dr!==null?{id:Es,overflow:As}:null,retryLane:536870912,hydrationErrors:null},n=z1(e),n.return=t,t.child=n,wn=t,Ne=null)):e=null,e===null)throw pr(t);return Tg(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Qa(t),s=t.mode,o=Bf({mode:"hidden",children:o},s),i=no(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=v0(n),i.childLanes=x0(e,r,n),t.memoizedState=_0,Gc(null,i)):(Ka(t),hg(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Ka(t),t.flags&=-257,t=y0(e,t,n)):t.memoizedState!==null?(Qa(t),t.child=e.child,t.flags|=128,t=null):(Qa(t),o=i.fallback,s=t.mode,i=Bf({mode:"visible",children:i.children},s),o=no(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,lo(t,e.child,null,n),i=t.child,i.memoizedState=v0(n),i.childLanes=x0(e,r,n),t.memoizedState=_0,t=Gc(null,i));else if(Ka(t),Tg(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error(tt(419)),i.stack="",i.digest=r,lu({value:i,source:null,stack:null}),t=y0(e,t,n)}else if(on||Il(e,t,n,!1),r=(n&e.childLanes)!==0,on||r){if(r=Te,r!==null&&(i=h1(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,mo(e,i),ai(r,e,i),c_;bg(o)||Hf(),t=y0(e,t,n)}else bg(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ne=Ki(o.nextSibling),wn=t,ae=!0,ar=null,Zi=!1,e!==null&&H1(t,e),t=hg(t,i.children),t.flags|=4096);return t}return s?(Qa(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=ca(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=ca(c,o):(o=no(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Gc(null,i),i=t.child,o=e.child.memoizedState,o===null?o=v0(n):(s=o.cachePool,s!==null?(l=rn._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=k1(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=x0(e,r,n),t.memoizedState=_0,Gc(e.child,i)):(Ka(t),n=e.child,e=n.sibling,n=ca(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function hg(e,t){return t=Bf({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Bf(e,t){return e=vi(22,e,null,t),e.lanes=0,e}function y0(e,t,n){return lo(t,e.child,null,n),e=hg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yS(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),j0(e.return,t,n)}function S0(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function IM(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=je.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Ce(je,r),En(e,t,i,n),i=ae?ou:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yS(e,n,t);else if(e.tag===19)yS(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Nf(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),S0(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Nf(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}S0(t,!0,n,null,a,i);break;case"together":S0(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ma(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Il(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(tt(153));if(t.child!==null){for(e=t.child,n=ca(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ca(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function u_(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Df(e)))}function jC(e,t,n){switch(t.tag){case 3:bf(t,t.stateNode.containerInfo),Ja(t,rn,e.memoizedState.cache),ro();break;case 27:case 5:z0(t);break;case 4:bf(t,t.stateNode.containerInfo);break;case 10:Ja(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,sg(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ka(t),t.flags|=128,null):(n&t.child.childLanes)!==0?OM(e,t,n):(Ka(t),e=ma(e,t,n),e!==null?e.sibling:null);Ka(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Il(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return IM(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ce(je,je.current),i)break;return null;case 22:return t.lanes=0,PM(e,t,n,t.pendingProps);case 24:Ja(t,rn,e.memoizedState.cache)}return ma(e,t,n)}function BM(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)on=!0;else{if(!u_(e,n)&&(t.flags&128)===0)return on=!1,jC(e,t,n);on=(e.flags&131072)!==0}else on=!1,ae&&(t.flags&1048576)!==0&&V1(t,ou,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=$r(t.elementType),t.type=e,typeof e=="function")Gg(e)?(i=uo(e,i),t.tag=1,t=vS(null,t,e,i,n)):(t.tag=0,t=ug(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Cg){t.tag=11,t=dS(null,t,e,i,n);break t}else if(s===Rg){t.tag=14,t=pS(null,t,e,i,n);break t}}throw t=B0(e)||e,Error(tt(306,t,""))}}return t;case 0:return ug(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=uo(i,t.pendingProps),vS(e,t,i,s,n);case 3:t:{if(bf(t,t.stateNode.containerInfo),e===null)throw Error(tt(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,eg(e,t),Kc(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ja(t,rn,i),i!==a.cache&&$0(t,[rn],n,!0),Jc(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=xS(e,t,i,n);break t}else if(i!==s){s=Yi(Error(tt(424)),t),lu(s),t=xS(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=Ki(e.firstChild),wn=t,ae=!0,ar=null,Zi=!0,n=q1(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ro(),i===s){t=ma(e,t,n);break t}En(e,t,i,n)}t=t.child}return t;case 26:return gf(e,t),e===null?(n=GS(t.type,null,t.pendingProps,null))?t.memoizedState=n:ae||(n=t.type,e=t.pendingProps,i=Xf(sr.current).createElement(n),i[An]=t,i[ri]=e,Rn(i,n,e),vn(i),t.stateNode=i):t.memoizedState=GS(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return z0(t),e===null&&ae&&(i=t.stateNode=wb(t.type,t.pendingProps,sr.current),wn=t,Zi=!0,s=Ne,vr(t.type)?(Eg=s,Ne=Ki(i.firstChild)):Ne=s),En(e,t,t.pendingProps.children,n),gf(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ae&&((s=i=Ne)&&(i=A2(i,t.type,t.pendingProps,Zi),i!==null?(t.stateNode=i,wn=t,Ne=Ki(i.firstChild),Zi=!1,s=!0):s=!1),s||pr(t)),z0(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Sg(s,a)?i=null:r!==null&&Sg(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Qg(e,t,kC,null,null,n),pu._currentValue=s),gf(e,t),En(e,t,i,n),t.child;case 6:return e===null&&ae&&((e=n=Ne)&&(n=w2(n,t.pendingProps,Zi),n!==null?(t.stateNode=n,wn=t,Ne=null,e=!0):e=!1),e||pr(t)),null;case 13:return OM(e,t,n);case 4:return bf(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=lo(t,null,i,n):En(e,t,i,n),t.child;case 11:return dS(e,t,t.type,t.pendingProps,n);case 7:return En(e,t,t.pendingProps,n),t.child;case 8:return En(e,t,t.pendingProps.children,n),t.child;case 12:return En(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ja(t,t.type,i.value),En(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,oo(t),s=Cn(s),i=i(s),t.flags|=1,En(e,t,i,n),t.child;case 14:return pS(e,t,t.type,t.pendingProps,n);case 15:return NM(e,t,t.type,t.pendingProps,n);case 19:return IM(e,t,n);case 31:return QC(e,t,n);case 22:return PM(e,t,n,t.pendingProps);case 24:return oo(t),i=Cn(rn),e===null?(s=qg(),s===null&&(s=Te,a=Xg(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Zg(t),Ja(t,rn,s)):((e.lanes&n)!==0&&(eg(e,t),Kc(t,null,null,n),Jc()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ja(t,rn,i)):(i=a.cache,Ja(t,rn,i),i!==s.cache&&$0(t,[rn],n,!0))),En(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(tt(156,t.tag))}function ta(e){e.flags|=4}function M0(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(ob())e.flags|=8192;else throw so=Uf,Yg}else e.flags&=-16777217}function SS(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Db(t))if(ob())e.flags|=8192;else throw so=Uf,Yg}function $h(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?l1():536870912,e.lanes|=t,Rl|=t)}function Oc(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function $C(e,t,n){var i=t.pendingProps;switch(Wg(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Le(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ua(rn),bl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(tl(t)?ta(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,d0())),Le(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ta(t),a!==null?(Le(t),SS(t,a)):(Le(t),M0(t,s,null,i,n))):a?a!==e.memoizedState?(ta(t),Le(t),SS(t,a)):(Le(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ta(t),Le(t),M0(t,s,e,i,n)),null;case 27:if(Tf(t),n=sr.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ta(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Le(t),null}e=Cs.current,tl(t)?Ky(t,e):(e=wb(s,i,n),t.stateNode=e,ta(t))}return Le(t),null;case 5:if(Tf(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ta(t);else{if(!i){if(t.stateNode===null)throw Error(tt(166));return Le(t),null}if(a=Cs.current,tl(t))Ky(t,a);else{var r=Xf(sr.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[An]=t,a[ri]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(Rn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ta(t)}}return Le(t),M0(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ta(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(tt(166));if(e=sr.current,tl(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=wn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[An]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||bb(e.nodeValue,n)),e||pr(t,!0)}else e=Xf(e).createTextNode(i),e[An]=t,t.stateNode=e}return Le(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=tl(t),n!==null){if(e===null){if(!i)throw Error(tt(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(tt(557));e[An]=t}else ro(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),e=!1}else n=d0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_i(t),t):(_i(t),null);if((t.flags&128)!==0)throw Error(tt(558))}return Le(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=tl(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(tt(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(tt(317));s[An]=t}else ro(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),s=!1}else s=d0(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(_i(t),t):(_i(t),null)}return _i(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),$h(t,t.updateQueue),Le(t),null);case 4:return bl(),e===null&&__(t.stateNode.containerInfo),Le(t),null;case 10:return ua(t.type),Le(t),null;case 19:if(xn(je),i=t.memoizedState,i===null)return Le(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)Oc(i,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Nf(e),a!==null){for(t.flags|=128,Oc(i,!1),e=a.updateQueue,t.updateQueue=e,$h(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)F1(n,e),n=n.sibling;return Ce(je,je.current&1|2),ae&&sa(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&yi()>zf&&(t.flags|=128,s=!0,Oc(i,!1),t.lanes=4194304)}else{if(!s)if(e=Nf(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,$h(t,e),Oc(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!ae)return Le(t),null}else 2*yi()-i.renderingStartTime>zf&&n!==536870912&&(t.flags|=128,s=!0,Oc(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=yi(),e.sibling=null,n=je.current,Ce(je,s?n&1|2:n&1),ae&&sa(t,i.treeForkCount),e):(Le(t),null);case 22:case 23:return _i(t),Jg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),n=t.updateQueue,n!==null&&$h(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&xn(io),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ua(rn),Le(t),null;case 25:return null;case 30:return null}throw Error(tt(156,t.tag))}function t2(e,t){switch(Wg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(rn),bl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Tf(t),null;case 31:if(t.memoizedState!==null){if(_i(t),t.alternate===null)throw Error(tt(340));ro()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_i(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(tt(340));ro()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return xn(je),null;case 4:return bl(),null;case 10:return ua(t.type),null;case 22:case 23:return _i(t),Jg(),e!==null&&xn(io),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ua(rn),null;case 25:return null;default:return null}}function FM(e,t){switch(Wg(t),t.tag){case 3:ua(rn),bl();break;case 26:case 27:case 5:Tf(t);break;case 4:bl();break;case 31:t.memoizedState!==null&&_i(t);break;case 13:_i(t);break;case 19:xn(je);break;case 10:ua(t.type);break;case 22:case 23:_i(t),Jg(),e!==null&&xn(io);break;case 24:ua(rn)}}function Eu(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ve(t,t.return,o)}}function mr(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(u){ve(s,l,u)}}}i=i.next}while(i!==a)}}catch(u){ve(t,t.return,u)}}function zM(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Z1(t,n)}catch(i){ve(e,e.return,i)}}}function VM(e,t,n){n.props=uo(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ve(e,t,i)}}function jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ve(e,t,s)}}function ws(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ve(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ve(e,t,s)}else n.current=null}function HM(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ve(e,e.return,s)}}function b0(e,t,n){try{var i=e.stateNode;y2(i,e.type,n,t),i[ri]=t}catch(s){ve(e,e.return,s)}}function GM(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&vr(e.type)||e.tag===4}function T0(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||GM(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&vr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fg(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(i!==4&&(i===27&&vr(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(fg(e,t,n),e=e.sibling;e!==null;)fg(e,t,n),e=e.sibling}function Ff(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&vr(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ff(e,t,n),e=e.sibling;e!==null;)Ff(e,t,n),e=e.sibling}function kM(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Rn(t,i,n),t[An]=e,t[ri]=n}catch(a){ve(e,e.return,a)}}var aa=!1,an=!1,E0=!1,MS=typeof WeakSet=="function"?WeakSet:Set,_n=null;function e2(e,t){if(e=e.containerInfo,xg=Jf,e=D1(e),zg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,u=0,d=e,f=null;e:for(;;){for(var h;d!==n||s!==0&&d.nodeType!==3||(o=r+s),d!==a||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(h=d.firstChild)!==null;)f=d,d=h;for(;;){if(d===e)break e;if(f===n&&++c===s&&(o=r),f===a&&++u===i&&(l=r),(h=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=h}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(yg={focusedElem:e,selectionRange:n},Jf=!1,_n=t;_n!==null;)if(t=_n,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_n=e;else for(;_n!==null;){switch(t=_n,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var m=uo(n.type,s);e=i.getSnapshotBeforeUpdate(m,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(_){ve(n,n.return,_)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Mg(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mg(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(tt(163))}if(e=t.sibling,e!==null){e.return=t.return,_n=e;break}_n=t.return}}function WM(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:na(e,n),i&4&&Eu(5,n);break;case 1:if(na(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ve(n,n.return,r)}else{var s=uo(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ve(n,n.return,r)}}i&64&&zM(n),i&512&&jc(n,n.return);break;case 3:if(na(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Z1(e,t)}catch(r){ve(n,n.return,r)}}break;case 27:t===null&&i&4&&kM(n);case 26:case 5:na(e,n),t===null&&i&4&&HM(n),i&512&&jc(n,n.return);break;case 12:na(e,n);break;case 31:na(e,n),i&4&&YM(e,n);break;case 13:na(e,n),i&4&&ZM(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=u2.bind(null,n),C2(e,n))));break;case 22:if(i=n.memoizedState!==null||aa,!i){t=t!==null&&t.memoizedState!==null||an,s=aa;var a=an;aa=i,(an=t)&&!a?ia(e,n,(n.subtreeFlags&8772)!==0):na(e,n),aa=s,an=a}break;case 30:break;default:na(e,n)}}function XM(e){var t=e.alternate;t!==null&&(e.alternate=null,XM(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ng(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,ii=!1;function ea(e,t,n){for(n=n.child;n!==null;)qM(e,t,n),n=n.sibling}function qM(e,t,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 26:an||ws(n,t),ea(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:an||ws(n,t);var i=Ve,s=ii;vr(n.type)&&(Ve=n.stateNode,ii=!1),ea(e,t,n),nu(n.stateNode),Ve=i,ii=s;break;case 5:an||ws(n,t);case 6:if(i=Ve,s=ii,Ve=null,ea(e,t,n),Ve=i,ii=s,Ve!==null)if(ii)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(n.stateNode)}catch(a){ve(n,t,a)}else try{Ve.removeChild(n.stateNode)}catch(a){ve(n,t,a)}break;case 18:Ve!==null&&(ii?(e=Ve,BS(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Nl(e)):BS(Ve,n.stateNode));break;case 4:i=Ve,s=ii,Ve=n.stateNode.containerInfo,ii=!0,ea(e,t,n),Ve=i,ii=s;break;case 0:case 11:case 14:case 15:mr(2,n,t),an||mr(4,n,t),ea(e,t,n);break;case 1:an||(ws(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&VM(n,t,i)),ea(e,t,n);break;case 21:ea(e,t,n);break;case 22:an=(i=an)||n.memoizedState!==null,ea(e,t,n),an=i;break;default:ea(e,t,n)}}function YM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Nl(e)}catch(n){ve(t,t.return,n)}}}function ZM(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Nl(e)}catch(n){ve(t,t.return,n)}}function n2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new MS),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new MS),t;default:throw Error(tt(435,e.tag))}}function tf(e,t){var n=n2(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=h2.bind(null,e,i);i.then(s,s)}})}function ei(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(vr(o.type)){Ve=o.stateNode,ii=!1;break t}break;case 5:Ve=o.stateNode,ii=!1;break t;case 3:case 4:Ve=o.stateNode.containerInfo,ii=!0;break t}o=o.return}if(Ve===null)throw Error(tt(160));qM(a,r,s),Ve=null,ii=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)JM(t,e),t=t.sibling}var cs=null;function JM(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(t,e),ni(e),i&4&&(mr(3,e,e.return),Eu(3,e),mr(5,e,e.return));break;case 1:ei(t,e),ni(e),i&512&&(an||n===null||ws(n,n.return)),i&64&&aa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=cs;if(ei(t,e),ni(e),i&512&&(an||n===null||ws(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[Su]||a[An]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),Rn(a,i,n),a[An]=e,vn(a),i=a;break t;case"link":var r=WS("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),Rn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=WS("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),Rn(a,i,n),s.head.appendChild(a);break;default:throw Error(tt(468,i))}a[An]=e,vn(a),i=a}e.stateNode=i}else XS(s,e.type,e.stateNode);else e.stateNode=kS(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?XS(s,e.type,e.stateNode):kS(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&b0(e,e.memoizedProps,n.memoizedProps)}break;case 27:ei(t,e),ni(e),i&512&&(an||n===null||ws(n,n.return)),n!==null&&i&4&&b0(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ei(t,e),ni(e),i&512&&(an||n===null||ws(n,n.return)),e.flags&32){s=e.stateNode;try{El(s,"")}catch(m){ve(e,e.return,m)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,b0(e,s,n!==null?n.memoizedProps:s)),i&1024&&(E0=!0);break;case 6:if(ei(t,e),ni(e),i&4){if(e.stateNode===null)throw Error(tt(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(m){ve(e,e.return,m)}}break;case 3:if(xf=null,s=cs,cs=qf(t.containerInfo),ei(t,e),cs=s,ni(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Nl(t.containerInfo)}catch(m){ve(e,e.return,m)}E0&&(E0=!1,KM(e));break;case 4:i=cs,cs=qf(e.stateNode.containerInfo),ei(t,e),ni(e),cs=i;break;case 12:ei(t,e),ni(e);break;case 31:ei(t,e),ni(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,tf(e,i)));break;case 13:ei(t,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ld=yi()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,tf(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=aa,u=an;if(aa=c||s,an=u||l,ei(t,e),an=u,aa=c,ni(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||aa||an||to(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(m){ve(l,l.return,m)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(m){ve(l,l.return,m)}}}else if(t.tag===18){if(n===null){l=t;try{var h=l.stateNode;s?FS(h,!0):FS(l.stateNode,!1)}catch(m){ve(l,l.return,m)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,tf(e,n))));break;case 19:ei(t,e),ni(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,tf(e,i)));break;case 30:break;case 21:break;default:ei(t,e),ni(e)}}function ni(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(GM(i)){n=i;break}i=i.return}if(n==null)throw Error(tt(160));switch(n.tag){case 27:var s=n.stateNode,a=T0(e);Ff(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(El(r,""),n.flags&=-33);var o=T0(e);Ff(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=T0(e);fg(e,c,l);break;default:throw Error(tt(161))}}catch(u){ve(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function KM(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;KM(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function na(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)WM(e,t.alternate,t),t=t.sibling}function to(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:mr(4,t,t.return),to(t);break;case 1:ws(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&VM(t,t.return,n),to(t);break;case 27:nu(t.stateNode);case 26:case 5:ws(t,t.return),to(t);break;case 22:t.memoizedState===null&&to(t);break;case 30:to(t);break;default:to(t)}e=e.sibling}}function ia(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:ia(s,a,n),Eu(4,a);break;case 1:if(ia(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ve(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Y1(l[s],o)}catch(c){ve(i,i.return,c)}}n&&r&64&&zM(a),jc(a,a.return);break;case 27:kM(a);case 26:case 5:ia(s,a,n),n&&i===null&&r&4&&HM(a),jc(a,a.return);break;case 12:ia(s,a,n);break;case 31:ia(s,a,n),n&&r&4&&YM(s,a);break;case 13:ia(s,a,n),n&&r&4&&ZM(s,a);break;case 22:a.memoizedState===null&&ia(s,a,n),jc(a,a.return);break;case 30:break;default:ia(s,a,n)}t=t.sibling}}function h_(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&bu(n))}function f_(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bu(e))}function ls(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)QM(e,t,n,i),t=t.sibling}function QM(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:ls(e,t,n,i),s&2048&&Eu(9,t);break;case 1:ls(e,t,n,i);break;case 3:ls(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bu(e)));break;case 12:if(s&2048){ls(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ve(t,t.return,l)}}else ls(e,t,n,i);break;case 31:ls(e,t,n,i);break;case 13:ls(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?ls(e,t,n,i):$c(e,t):a._visibility&2?ls(e,t,n,i):(a._visibility|=2,nl(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&h_(r,t);break;case 24:ls(e,t,n,i),s&2048&&f_(t.alternate,t);break;default:ls(e,t,n,i)}}function nl(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:nl(a,r,o,l,s),Eu(8,r);break;case 23:break;case 22:var u=r.stateNode;r.memoizedState!==null?u._visibility&2?nl(a,r,o,l,s):$c(a,r):(u._visibility|=2,nl(a,r,o,l,s)),s&&c&2048&&h_(r.alternate,r);break;case 24:nl(a,r,o,l,s),s&&c&2048&&f_(r.alternate,r);break;default:nl(a,r,o,l,s)}t=t.sibling}}function $c(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:$c(n,i),s&2048&&h_(i.alternate,i);break;case 24:$c(n,i),s&2048&&f_(i.alternate,i);break;default:$c(n,i)}t=t.sibling}}var kc=8192;function el(e,t,n){if(e.subtreeFlags&kc)for(e=e.child;e!==null;)jM(e,t,n),e=e.sibling}function jM(e,t,n){switch(e.tag){case 26:el(e,t,n),e.flags&kc&&e.memoizedState!==null&&V2(n,cs,e.memoizedState,e.memoizedProps);break;case 5:el(e,t,n);break;case 3:case 4:var i=cs;cs=qf(e.stateNode.containerInfo),el(e,t,n),cs=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=kc,kc=16777216,el(e,t,n),kc=i):el(e,t,n));break;default:el(e,t,n)}}function $M(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ic(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];_n=i,eb(i,e)}$M(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tb(e),e=e.sibling}function tb(e){switch(e.tag){case 0:case 11:case 15:Ic(e),e.flags&2048&&mr(9,e,e.return);break;case 3:Ic(e);break;case 12:Ic(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_f(e)):Ic(e);break;default:Ic(e)}}function _f(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];_n=i,eb(i,e)}$M(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:mr(8,t,t.return),_f(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,_f(t));break;default:_f(t)}e=e.sibling}}function eb(e,t){for(;_n!==null;){var n=_n;switch(n.tag){case 0:case 11:case 15:mr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:bu(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,_n=i;else t:for(n=e;_n!==null;){i=_n;var s=i.sibling,a=i.return;if(XM(i),i===n){_n=null;break t}if(s!==null){s.return=a,_n=s;break t}_n=a}}}var i2={getCacheForType:function(e){var t=Cn(rn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Cn(rn).controller.signal}},s2=typeof WeakMap=="function"?WeakMap:Map,he=0,Te=null,te=null,ne=0,_e=0,gi=null,er=!1,Fl=!1,d_=!1,ga=0,qe=0,gr=0,ao=0,p_=0,xi=0,Rl=0,tu=null,si=null,dg=!1,ld=0,nb=0,zf=1/0,Vf=null,lr=null,cn=0,cr=null,Dl=null,ha=0,pg=0,mg=null,ib=null,eu=0,gg=null;function bi(){return(he&2)!==0&&ne!==0?ne&-ne:It.T!==null?g_():f1()}function sb(){if(xi===0)if((ne&536870912)===0||ae){var e=Wh;Wh<<=1,(Wh&3932160)===0&&(Wh=262144),xi=e}else xi=536870912;return e=Ei.current,e!==null&&(e.flags|=32),xi}function ai(e,t,n){(e===Te&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(Ul(e,0),nr(e,ne,xi,!1)),yu(e,n),((he&2)===0||e!==Te)&&(e===Te&&((he&2)===0&&(ao|=n),qe===4&&nr(e,ne,xi,!1)),Ds(e))}function ab(e,t,n){if((he&6)!==0)throw Error(tt(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||xu(e,t),s=i?o2(e,t):A0(e,t,!0),a=i;do{if(s===0){Fl&&!i&&nr(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!a2(n)){s=A0(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=tu;var l=o.current.memoizedState.isDehydrated;if(l&&(Ul(o,r).flags|=256),r=A0(o,r,!1),r!==2){if(d_&&!l){o.errorRecoveryDisabledLanes|=a,ao|=a,s=4;break t}a=si,si=s,a!==null&&(si===null?si=a:si.push.apply(si,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Ul(e,0),nr(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(tt(345));case 4:if((t&4194048)!==t)break;case 6:nr(i,t,xi,!er);break t;case 2:si=null;break;case 3:case 5:break;default:throw Error(tt(329))}if((t&62914560)===t&&(s=ld+300-yi(),10<s)){if(nr(i,t,xi,!er),Qf(i,0,!0)!==0)break t;ha=t,i.timeoutHandle=Eb(bS.bind(null,i,n,si,Vf,dg,t,xi,ao,Rl,er,a,"Throttled",-0,0),s);break t}bS(i,n,si,Vf,dg,t,xi,ao,Rl,er,a,null,-0,0)}}break}while(!0);Ds(e)}function bS(e,t,n,i,s,a,r,o,l,c,u,d,f,h){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:oa},jM(t,a,d);var m=(a&62914560)===a?ld-yi():(a&4194048)===a?nb-yi():0;if(m=H2(d,m),m!==null){ha=a,e.cancelPendingCommit=m(ES.bind(null,e,t,a,n,i,s,r,o,l,u,d,null,f,h)),nr(e,a,r,!c);return}}ES(e,t,a,n,i,s,r,o,l)}function a2(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Ti(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t,n,i){t&=~p_,t&=~ao,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Mi(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&c1(e,n,t)}function cd(){return(he&6)===0?(Au(0,!1),!1):!0}function m_(){if(te!==null){if(_e===0)var e=te.return;else e=te,la=go=null,t_(e),yl=null,cu=0,e=te;for(;e!==null;)FM(e.alternate,e),e=e.return;te=null}}function Ul(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,b2(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ha=0,m_(),Te=e,te=n=ca(e.current,null),ne=t,_e=0,gi=null,er=!1,Fl=xu(e,t),d_=!1,Rl=xi=p_=ao=gr=qe=0,si=tu=null,dg=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Mi(i),a=1<<s;t|=e[s],i&=~a}return ga=t,ed(),n}function rb(e,t){Xt=null,It.H=hu,t===Bl||t===id?(t=eS(),_e=3):t===Yg?(t=eS(),_e=4):_e=t===c_?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gi=t,te===null&&(qe=1,If(e,Yi(t,e.current)))}function ob(){var e=Ei.current;return e===null?!0:(ne&4194048)===ne?Ji===null:(ne&62914560)===ne||(ne&536870912)!==0?e===Ji:!1}function lb(){var e=It.H;return It.H=hu,e===null?hu:e}function cb(){var e=It.A;return It.A=i2,e}function Hf(){qe=4,er||(ne&4194048)!==ne&&Ei.current!==null||(Fl=!0),(gr&134217727)===0&&(ao&134217727)===0||Te===null||nr(Te,ne,xi,!1)}function A0(e,t,n){var i=he;he|=2;var s=lb(),a=cb();(Te!==e||ne!==t)&&(Vf=null,Ul(e,t)),t=!1;var r=qe;t:do try{if(_e!==0&&te!==null){var o=te,l=gi;switch(_e){case 8:m_(),r=6;break t;case 3:case 2:case 9:case 6:Ei.current===null&&(t=!0);var c=_e;if(_e=0,gi=null,ml(e,o,l,c),n&&Fl){r=0;break t}break;default:c=_e,_e=0,gi=null,ml(e,o,l,c)}}r2(),r=qe;break}catch(u){rb(e,u)}while(!0);return t&&e.shellSuspendCounter++,la=go=null,he=i,It.H=s,It.A=a,te===null&&(Te=null,ne=0,ed()),r}function r2(){for(;te!==null;)ub(te)}function o2(e,t){var n=he;he|=2;var i=lb(),s=cb();Te!==e||ne!==t?(Vf=null,zf=yi()+500,Ul(e,t)):Fl=xu(e,t);t:do try{if(_e!==0&&te!==null){t=te;var a=gi;e:switch(_e){case 1:_e=0,gi=null,ml(e,t,a,1);break;case 2:case 9:if(tS(a)){_e=0,gi=null,TS(t);break}t=function(){_e!==2&&_e!==9||Te!==e||(_e=7),Ds(e)},a.then(t,t);break t;case 3:_e=7;break t;case 4:_e=5;break t;case 7:tS(a)?(_e=0,gi=null,TS(t)):(_e=0,gi=null,ml(e,t,a,7));break;case 5:var r=null;switch(te.tag){case 26:r=te.memoizedState;case 5:case 27:var o=te;if(r?Db(r):o.stateNode.complete){_e=0,gi=null;var l=o.sibling;if(l!==null)te=l;else{var c=o.return;c!==null?(te=c,ud(c)):te=null}break e}}_e=0,gi=null,ml(e,t,a,5);break;case 6:_e=0,gi=null,ml(e,t,a,6);break;case 8:m_(),qe=6;break t;default:throw Error(tt(462))}}l2();break}catch(u){rb(e,u)}while(!0);return la=go=null,It.H=i,It.A=s,he=n,te!==null?0:(Te=null,ne=0,ed(),qe)}function l2(){for(;te!==null&&!Uw();)ub(te)}function ub(e){var t=BM(e.alternate,e,ga);e.memoizedProps=e.pendingProps,t===null?ud(e):te=t}function TS(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=_S(n,t,t.pendingProps,t.type,void 0,ne);break;case 11:t=_S(n,t,t.pendingProps,t.type.render,t.ref,ne);break;case 5:t_(t);default:FM(n,t),t=te=F1(t,ga),t=BM(n,t,ga)}e.memoizedProps=e.pendingProps,t===null?ud(e):te=t}function ml(e,t,n,i){la=go=null,t_(t),yl=null,cu=0;var s=t.return;try{if(KC(e,s,t,n,ne)){qe=1,If(e,Yi(n,e.current)),te=null;return}}catch(a){if(s!==null)throw te=s,a;qe=1,If(e,Yi(n,e.current)),te=null;return}t.flags&32768?(ae||i===1?e=!0:Fl||(ne&536870912)!==0?e=!1:(er=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ei.current,i!==null&&i.tag===13&&(i.flags|=16384))),hb(t,e)):ud(t)}function ud(e){var t=e;do{if((t.flags&32768)!==0){hb(t,er);return}e=t.return;var n=$C(t.alternate,t,ga);if(n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);qe===0&&(qe=5)}function hb(e,t){do{var n=t2(e.alternate,e);if(n!==null){n.flags&=32767,te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){te=e;return}te=e=n}while(e!==null);qe=6,te=null}function ES(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do hd();while(cn!==0);if((he&6)!==0)throw Error(tt(327));if(t!==null){if(t===e.current)throw Error(tt(177));if(a=t.lanes|t.childLanes,a|=Vg,Hw(e,n,a,r,o,l),e===Te&&(te=Te=null,ne=0),Dl=t,cr=e,ha=n,pg=a,mg=s,ib=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,f2(Ef,function(){return gb(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=It.T,It.T=null,s=fe.p,fe.p=2,r=he,he|=4;try{e2(e,t,n)}finally{he=r,fe.p=s,It.T=i}}cn=1,fb(),db(),pb()}}function fb(){if(cn===1){cn=0;var e=cr,t=Dl,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=It.T,It.T=null;var i=fe.p;fe.p=2;var s=he;he|=4;try{JM(t,e);var a=yg,r=D1(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&R1(o.ownerDocument.documentElement,o)){if(l!==null&&zg(o)){var c=l.start,u=l.end;if(u===void 0&&(u=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(u,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var h=f.getSelection(),m=o.textContent.length,_=Math.min(l.start,m),g=l.end===void 0?_:Math.min(l.end,m);!h.extend&&_>g&&(r=g,g=_,_=r);var p=Yy(o,_),v=Yy(o,g);if(p&&v&&(h.rangeCount!==1||h.anchorNode!==p.node||h.anchorOffset!==p.offset||h.focusNode!==v.node||h.focusOffset!==v.offset)){var S=d.createRange();S.setStart(p.node,p.offset),h.removeAllRanges(),_>g?(h.addRange(S),h.extend(v.node,v.offset)):(S.setEnd(v.node,v.offset),h.addRange(S))}}}}for(d=[],h=o;h=h.parentNode;)h.nodeType===1&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var x=d[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Jf=!!xg,yg=xg=null}finally{he=s,fe.p=i,It.T=n}}e.current=t,cn=2}}function db(){if(cn===2){cn=0;var e=cr,t=Dl,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=It.T,It.T=null;var i=fe.p;fe.p=2;var s=he;he|=4;try{WM(e,t.alternate,t)}finally{he=s,fe.p=i,It.T=n}}cn=3}}function pb(){if(cn===4||cn===3){cn=0,Lw();var e=cr,t=Dl,n=ha,i=ib;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?cn=5:(cn=0,Dl=cr=null,mb(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(lr=null),Lg(n),t=t.stateNode,Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=It.T,s=fe.p,fe.p=2,It.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{It.T=t,fe.p=s}}(ha&3)!==0&&hd(),Ds(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===gg?eu++:(eu=0,gg=e):eu=0,Au(0,!1)}}function mb(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bu(t)))}function hd(){return fb(),db(),pb(),gb()}function gb(){if(cn!==5)return!1;var e=cr,t=pg;pg=0;var n=Lg(ha),i=It.T,s=fe.p;try{fe.p=32>n?32:n,It.T=null,n=mg,mg=null;var a=cr,r=ha;if(cn=0,Dl=cr=null,ha=0,(he&6)!==0)throw Error(tt(331));var o=he;if(he|=4,tb(a.current),QM(a,a.current,r,n),he=o,Au(0,!1),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(vu,a)}catch{}return!0}finally{fe.p=s,It.T=i,mb(e,t)}}function AS(e,t,n){t=Yi(n,t),t=cg(e.stateNode,t,2),e=or(e,t,2),e!==null&&(yu(e,2),Ds(e))}function ve(e,t,n){if(e.tag===3)AS(e,e,n);else for(;t!==null;){if(t.tag===3){AS(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(lr===null||!lr.has(i))){e=Yi(n,e),n=UM(2),i=or(t,n,2),i!==null&&(LM(n,i,t,e),yu(i,2),Ds(i));break}}t=t.return}}function w0(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new s2;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(d_=!0,s.add(n),e=c2.bind(null,e,t,n),t.then(e,e))}function c2(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Te===e&&(ne&n)===n&&(qe===4||qe===3&&(ne&62914560)===ne&&300>yi()-ld?(he&2)===0&&Ul(e,0):p_|=n,Rl===ne&&(Rl=0)),Ds(e)}function _b(e,t){t===0&&(t=l1()),e=mo(e,t),e!==null&&(yu(e,t),Ds(e))}function u2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_b(e,n)}function h2(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(tt(314))}i!==null&&i.delete(t),_b(e,n)}function f2(e,t){return Dg(e,t)}var Gf=null,il=null,_g=!1,kf=!1,C0=!1,ir=0;function Ds(e){e!==il&&e.next===null&&(il===null?Gf=il=e:il=il.next=e),kf=!0,_g||(_g=!0,p2())}function Au(e,t){if(!C0&&kf){C0=!0;do for(var n=!1,i=Gf;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Mi(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,wS(i,a))}else a=ne,a=Qf(i,i===Te?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||xu(i,a)||(n=!0,wS(i,a));i=i.next}while(n);C0=!1}}function d2(){vb()}function vb(){kf=_g=!1;var e=0;ir!==0&&M2()&&(e=ir);for(var t=yi(),n=null,i=Gf;i!==null;){var s=i.next,a=xb(i,t);a===0?(i.next=null,n===null?Gf=s:n.next=s,s===null&&(il=n)):(n=i,(e!==0||(a&3)!==0)&&(kf=!0)),i=s}cn!==0&&cn!==5||Au(e,!1),ir!==0&&(ir=0)}function xb(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Mi(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=Vw(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=Te,n=ne,n=Qf(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&i0(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||xu(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&i0(i),Lg(n)){case 2:case 8:n=r1;break;case 32:n=Ef;break;case 268435456:n=o1;break;default:n=Ef}return i=yb.bind(null,e),n=Dg(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&i0(i),e.callbackPriority=2,e.callbackNode=null,2}function yb(e,t){if(cn!==0&&cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(hd()&&e.callbackNode!==n)return null;var i=ne;return i=Qf(e,e===Te?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(ab(e,i,t),xb(e,yi()),e.callbackNode!=null&&e.callbackNode===n?yb.bind(null,e):null)}function wS(e,t){if(hd())return null;ab(e,t,!0)}function p2(){T2(function(){(he&6)!==0?Dg(a1,d2):vb()})}function g_(){if(ir===0){var e=Al;e===0&&(e=kh,kh<<=1,(kh&261888)===0&&(kh=256)),ir=e}return ir}function CS(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:lf(""+e)}function RS(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function m2(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=CS((s[ri]||null).action),r=i.submitter;r&&(t=(t=r[ri]||null)?CS(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new jf("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ir!==0){var l=r?RS(s,r):new FormData(s);og(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?RS(s,r):new FormData(s),og(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(ef=0;ef<J0.length;ef++)nf=J0[ef],DS=nf.toLowerCase(),US=nf[0].toUpperCase()+nf.slice(1),us(DS,"on"+US);var nf,DS,US,ef;us(L1,"onAnimationEnd");us(N1,"onAnimationIteration");us(P1,"onAnimationStart");us("dblclick","onDoubleClick");us("focusin","onFocus");us("focusout","onBlur");us(NC,"onTransitionRun");us(PC,"onTransitionStart");us(OC,"onTransitionCancel");us(O1,"onTransitionEnd");Tl("onMouseEnter",["mouseout","mouseover"]);Tl("onMouseLeave",["mouseout","mouseover"]);Tl("onPointerEnter",["pointerout","pointerover"]);Tl("onPointerLeave",["pointerout","pointerover"]);ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fu));function Sb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){wf(u)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(u){wf(u)}s.currentTarget=null,a=l}}}}function $t(e,t){var n=t[H0];n===void 0&&(n=t[H0]=new Set);var i=e+"__bubble";n.has(i)||(Mb(t,e,2,!1),n.add(i))}function R0(e,t,n){var i=0;t&&(i|=4),Mb(n,e,i,t)}var sf="_reactListening"+Math.random().toString(36).slice(2);function __(e){if(!e[sf]){e[sf]=!0,d1.forEach(function(n){n!=="selectionchange"&&(g2.has(n)||R0(n,!1,e),R0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sf]||(t[sf]=!0,R0("selectionchange",!1,t))}}function Mb(e,t,n,i){switch(Ob(t)){case 2:var s=W2;break;case 8:s=X2;break;default:s=S_}n=s.bind(null,t,n,e),s=void 0,!q0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function D0(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=rl(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}S1(function(){var c=a,u=Og(n),d=[];t:{var f=I1.get(e);if(f!==void 0){var h=jf,m=e;switch(e){case"keypress":if(uf(n)===0)break t;case"keydown":case"keyup":h=hC;break;case"focusin":m="focus",h=l0;break;case"focusout":m="blur",h=l0;break;case"beforeblur":case"afterblur":h=l0;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Fy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=$w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=pC;break;case L1:case N1:case P1:h=nC;break;case O1:h=gC;break;case"scroll":case"scrollend":h=Qw;break;case"wheel":h=vC;break;case"copy":case"cut":case"paste":h=sC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Vy;break;case"toggle":case"beforetoggle":h=yC}var _=(t&4)!==0,g=!_&&(e==="scroll"||e==="scrollend"),p=_?f!==null?f+"Capture":null:f;_=[];for(var v=c,S;v!==null;){var x=v;if(S=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||S===null||p===null||(x=su(v,p),x!=null&&_.push(du(v,x,S))),g)break;v=v.return}0<_.length&&(f=new h(f,m,null,n,u),d.push({event:f,listeners:_}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==X0&&(m=n.relatedTarget||n.fromElement)&&(rl(m)||m[Pl]))break t;if((h||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,h?(m=n.relatedTarget||n.toElement,h=c,m=m?rl(m):null,m!==null&&(g=_u(m),_=m.tag,m!==g||_!==5&&_!==27&&_!==6)&&(m=null)):(h=null,m=c),h!==m)){if(_=Fy,x="onMouseLeave",p="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(_=Vy,x="onPointerLeave",p="onPointerEnter",v="pointer"),g=h==null?f:Hc(h),S=m==null?f:Hc(m),f=new _(x,v+"leave",h,n,u),f.target=g,f.relatedTarget=S,x=null,rl(u)===c&&(_=new _(p,v+"enter",m,n,u),_.target=S,_.relatedTarget=g,x=_),g=x,h&&m)e:{for(_=_2,p=h,v=m,S=0,x=p;x;x=_(x))S++;x=0;for(var M=v;M;M=_(M))x++;for(;0<S-x;)p=_(p),S--;for(;0<x-S;)v=_(v),x--;for(;S--;){if(p===v||v!==null&&p===v.alternate){_=p;break e}p=_(p),v=_(v)}_=null}else _=null;h!==null&&LS(d,f,h,_,!1),m!==null&&g!==null&&LS(d,g,m,_,!0)}}t:{if(f=c?Hc(c):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var w=Wy;else if(ky(f))if(w1)w=DC;else{w=CC;var E=wC}else h=f.nodeName,!h||h.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&Pg(c.elementType)&&(w=Wy):w=RC;if(w&&(w=w(e,c))){A1(d,w,n,u);break t}E&&E(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&W0(f,"number",f.value)}switch(E=c?Hc(c):window,e){case"focusin":(ky(E)||E.contentEditable==="true")&&(cl=E,Y0=c,qc=null);break;case"focusout":qc=Y0=cl=null;break;case"mousedown":Z0=!0;break;case"contextmenu":case"mouseup":case"dragend":Z0=!1,Zy(d,n,u);break;case"selectionchange":if(LC)break;case"keydown":case"keyup":Zy(d,n,u)}var y;if(Fg)t:{switch(e){case"compositionstart":var T="onCompositionStart";break t;case"compositionend":T="onCompositionEnd";break t;case"compositionupdate":T="onCompositionUpdate";break t}T=void 0}else ll?T1(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(b1&&n.locale!=="ko"&&(ll||T!=="onCompositionStart"?T==="onCompositionEnd"&&ll&&(y=M1()):(tr=u,Ig="value"in tr?tr.value:tr.textContent,ll=!0)),E=Wf(c,T),0<E.length&&(T=new zy(T,e,null,n,u),d.push({event:T,listeners:E}),y?T.data=y:(y=E1(n),y!==null&&(T.data=y)))),(y=MC?bC(e,n):TC(e,n))&&(T=Wf(c,"onBeforeInput"),0<T.length&&(E=new zy("onBeforeInput","beforeinput",null,n,u),d.push({event:E,listeners:T}),E.data=y)),m2(d,e,c,n,u)}Sb(d,t)})}function du(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wf(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=su(e,n),s!=null&&i.unshift(du(e,s,a)),s=su(e,t),s!=null&&i.push(du(e,s,a))),e.tag===3)return i;e=e.return}return[]}function _2(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function LS(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=su(n,a),c!=null&&r.unshift(du(n,c,l))):s||(c=su(n,a),c!=null&&r.push(du(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var v2=/\r\n?/g,x2=/\u0000|\uFFFD/g;function NS(e){return(typeof e=="string"?e:""+e).replace(v2,`
`).replace(x2,"")}function bb(e,t){return t=NS(t),NS(e)===t}function Me(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||El(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&El(e,""+i);break;case"className":qh(e,"class",i);break;case"tabIndex":qh(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":qh(e,n,i);break;case"style":y1(e,i,a);break;case"data":if(t!=="object"){qh(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=lf(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&Me(e,t,"name",s.name,s,null),Me(e,t,"formEncType",s.formEncType,s,null),Me(e,t,"formMethod",s.formMethod,s,null),Me(e,t,"formTarget",s.formTarget,s,null)):(Me(e,t,"encType",s.encType,s,null),Me(e,t,"method",s.method,s,null),Me(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=lf(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=oa);break;case"onScroll":i!=null&&$t("scroll",e);break;case"onScrollEnd":i!=null&&$t("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=lf(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":$t("beforetoggle",e),$t("toggle",e),of(e,"popover",i);break;case"xlinkActuate":$s(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":$s(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":$s(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":$s(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":$s(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":$s(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":$s(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":$s(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":$s(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":of(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Jw.get(n)||n,of(e,n,i))}}function vg(e,t,n,i,s,a){switch(n){case"style":y1(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(tt(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(tt(60));e.innerHTML=n}}break;case"children":typeof i=="string"?El(e,i):(typeof i=="number"||typeof i=="bigint")&&El(e,""+i);break;case"onScroll":i!=null&&$t("scroll",e);break;case"onScrollEnd":i!=null&&$t("scrollend",e);break;case"onClick":i!=null&&(e.onclick=oa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!p1.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[ri]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):of(e,n,i)}}}function Rn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$t("error",e),$t("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:Me(e,t,a,r,n,null)}}s&&Me(e,t,"srcSet",n.srcSet,n,null),i&&Me(e,t,"src",n.src,n,null);return;case"input":$t("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"name":s=u;break;case"type":r=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(tt(137,t));break;default:Me(e,t,i,u,n,null)}}_1(e,a,o,l,c,r,s,!1);return;case"select":$t("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:Me(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?_l(e,!!i,t,!1):n!=null&&_l(e,!!i,n,!0);return;case"textarea":$t("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(tt(91));break;default:Me(e,t,r,o,n,null)}x1(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Me(e,t,l,i,n,null)}return;case"dialog":$t("beforetoggle",e),$t("toggle",e),$t("cancel",e),$t("close",e);break;case"iframe":case"object":$t("load",e);break;case"video":case"audio":for(i=0;i<fu.length;i++)$t(fu[i],e);break;case"image":$t("error",e),$t("load",e);break;case"details":$t("toggle",e);break;case"embed":case"source":case"link":$t("error",e),$t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(tt(137,t));default:Me(e,t,c,i,n,null)}return;default:if(Pg(t)){for(u in n)n.hasOwnProperty(u)&&(i=n[u],i!==void 0&&vg(e,t,u,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Me(e,t,o,i,n,null))}function y2(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,u=null;for(h in n){var d=n[h];if(n.hasOwnProperty(h)&&d!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(h)||Me(e,t,h,null,i,d)}}for(var f in i){var h=i[f];if(d=n[f],i.hasOwnProperty(f)&&(h!=null||d!=null))switch(f){case"type":a=h;break;case"name":s=h;break;case"checked":c=h;break;case"defaultChecked":u=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(tt(137,t));break;default:h!==d&&Me(e,t,f,h,i,d)}}k0(e,r,o,l,c,u,a,s);return;case"select":h=r=o=f=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":h=l;default:i.hasOwnProperty(a)||Me(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":f=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&Me(e,t,s,a,i,l)}t=o,n=r,i=h,f!=null?_l(e,!!n,f,!1):!!i!=!!n&&(t!=null?_l(e,!!n,t,!0):_l(e,!!n,n?[]:"",!1));return;case"textarea":h=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Me(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":f=s;break;case"defaultValue":h=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(tt(91));break;default:s!==a&&Me(e,t,r,s,i,a)}v1(e,f,h);return;case"option":for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&f!=null&&!i.hasOwnProperty(m))switch(m){case"selected":e.selected=!1;break;default:Me(e,t,m,null,i,f)}for(l in i)if(f=i[l],h=n[l],i.hasOwnProperty(l)&&f!==h&&(f!=null||h!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:Me(e,t,l,f,i,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!=null&&!i.hasOwnProperty(_)&&Me(e,t,_,null,i,f);for(c in i)if(f=i[c],h=n[c],i.hasOwnProperty(c)&&f!==h&&(f!=null||h!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(tt(137,t));break;default:Me(e,t,c,f,i,h)}return;default:if(Pg(t)){for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!==void 0&&!i.hasOwnProperty(g)&&vg(e,t,g,void 0,i,f);for(u in i)f=i[u],h=n[u],!i.hasOwnProperty(u)||f===h||f===void 0&&h===void 0||vg(e,t,u,f,i,h);return}}for(var p in n)f=n[p],n.hasOwnProperty(p)&&f!=null&&!i.hasOwnProperty(p)&&Me(e,t,p,null,i,f);for(d in i)f=i[d],h=n[d],!i.hasOwnProperty(d)||f===h||f==null&&h==null||Me(e,t,d,f,i,h)}function PS(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function S2(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&PS(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var u=l.transferSize,d=l.initiatorType;u&&PS(d)&&(l=l.responseEnd,r+=u*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xg=null,yg=null;function Xf(e){return e.nodeType===9?e:e.ownerDocument}function OS(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Tb(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Sg(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var U0=null;function M2(){var e=window.event;return e&&e.type==="popstate"?e===U0?!1:(U0=e,!0):(U0=null,!1)}var Eb=typeof setTimeout=="function"?setTimeout:void 0,b2=typeof clearTimeout=="function"?clearTimeout:void 0,IS=typeof Promise=="function"?Promise:void 0,T2=typeof queueMicrotask=="function"?queueMicrotask:typeof IS<"u"?function(e){return IS.resolve(null).then(e).catch(E2)}:Eb;function E2(e){setTimeout(function(){throw e})}function vr(e){return e==="head"}function BS(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Nl(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")nu(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,nu(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Su]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&nu(e.ownerDocument.body);n=s}while(n);Nl(t)}function FS(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Mg(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Mg(n),Ng(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function A2(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Su])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Ki(e.nextSibling),e===null)break}return null}function w2(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ki(e.nextSibling),e===null))return null;return e}function Ab(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Ki(e.nextSibling),e===null))return null;return e}function bg(e){return e.data==="$?"||e.data==="$~"}function Tg(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function C2(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ki(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Eg=null;function zS(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Ki(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function VS(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function wb(e,t,n){switch(t=Xf(n),e){case"html":if(e=t.documentElement,!e)throw Error(tt(452));return e;case"head":if(e=t.head,!e)throw Error(tt(453));return e;case"body":if(e=t.body,!e)throw Error(tt(454));return e;default:throw Error(tt(451))}}function nu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ng(e)}var Qi=new Map,HS=new Set;function qf(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=fe.d;fe.d={f:R2,r:D2,D:U2,C:L2,L:N2,m:P2,X:I2,S:O2,M:B2};function R2(){var e=_a.f(),t=cd();return e||t}function D2(e){var t=Ol(e);t!==null&&t.tag===5&&t.type==="form"?yM(t):_a.r(e)}var zl=typeof document>"u"?null:document;function Cb(e,t,n){var i=zl;if(i&&typeof t=="string"&&t){var s=qi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),HS.has(s)||(HS.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),Rn(t,"link",e),vn(t),i.head.appendChild(t)))}}function U2(e){_a.D(e),Cb("dns-prefetch",e,null)}function L2(e,t){_a.C(e,t),Cb("preconnect",e,t)}function N2(e,t,n){_a.L(e,t,n);var i=zl;if(i&&e&&t){var s='link[rel="preload"][as="'+qi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+qi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+qi(n.imageSizes)+'"]')):s+='[href="'+qi(e)+'"]';var a=s;switch(t){case"style":a=Ll(e);break;case"script":a=Vl(e)}Qi.has(a)||(e=Pe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(wu(a))||t==="script"&&i.querySelector(Cu(a))||(t=i.createElement("link"),Rn(t,"link",e),vn(t),i.head.appendChild(t)))}}function P2(e,t){_a.m(e,t);var n=zl;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+qi(i)+'"][href="'+qi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Vl(e)}if(!Qi.has(a)&&(e=Pe({rel:"modulepreload",href:e},t),Qi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Cu(a)))return}i=n.createElement("link"),Rn(i,"link",e),vn(i),n.head.appendChild(i)}}}function O2(e,t,n){_a.S(e,t,n);var i=zl;if(i&&e){var s=gl(i).hoistableStyles,a=Ll(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(wu(a)))o.loading=5;else{e=Pe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qi.get(a))&&v_(e,n);var l=r=i.createElement("link");vn(l),Rn(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,vf(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function I2(e,t){_a.X(e,t);var n=zl;if(n&&e){var i=gl(n).hoistableScripts,s=Vl(e),a=i.get(s);a||(a=n.querySelector(Cu(s)),a||(e=Pe({src:e,async:!0},t),(t=Qi.get(s))&&x_(e,t),a=n.createElement("script"),vn(a),Rn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function B2(e,t){_a.M(e,t);var n=zl;if(n&&e){var i=gl(n).hoistableScripts,s=Vl(e),a=i.get(s);a||(a=n.querySelector(Cu(s)),a||(e=Pe({src:e,async:!0,type:"module"},t),(t=Qi.get(s))&&x_(e,t),a=n.createElement("script"),vn(a),Rn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function GS(e,t,n,i){var s=(s=sr.current)?qf(s):null;if(!s)throw Error(tt(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ll(n.href),n=gl(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ll(n.href);var a=gl(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(wu(e)))&&!a._p&&(r.instance=a,r.state.loading=5),Qi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qi.set(e,n),a||F2(s,e,n,r.state))),t&&i===null)throw Error(tt(528,""));return r}if(t&&i!==null)throw Error(tt(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Vl(n),n=gl(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(tt(444,e))}}function Ll(e){return'href="'+qi(e)+'"'}function wu(e){return'link[rel="stylesheet"]['+e+"]"}function Rb(e){return Pe({},e,{"data-precedence":e.precedence,precedence:null})}function F2(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),Rn(t,"link",n),vn(t),e.head.appendChild(t))}function Vl(e){return'[src="'+qi(e)+'"]'}function Cu(e){return"script[async]"+e}function kS(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+qi(n.href)+'"]');if(i)return t.instance=i,vn(i),i;var s=Pe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),vn(i),Rn(i,"style",s),vf(i,n.precedence,e),t.instance=i;case"stylesheet":s=Ll(n.href);var a=e.querySelector(wu(s));if(a)return t.state.loading|=4,t.instance=a,vn(a),a;i=Rb(n),(s=Qi.get(s))&&v_(i,s),a=(e.ownerDocument||e).createElement("link"),vn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Rn(a,"link",i),t.state.loading|=4,vf(a,n.precedence,e),t.instance=a;case"script":return a=Vl(n.src),(s=e.querySelector(Cu(a)))?(t.instance=s,vn(s),s):(i=n,(s=Qi.get(a))&&(i=Pe({},n),x_(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),vn(s),Rn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(tt(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,vf(i,n.precedence,e));return t.instance}function vf(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function v_(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function x_(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xf=null;function WS(e,t,n){if(xf===null){var i=new Map,s=xf=new Map;s.set(n,i)}else s=xf,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Su]||a[An]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function XS(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function z2(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Db(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function V2(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=Ll(i.href),a=t.querySelector(wu(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Yf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,vn(a);return}a=t.ownerDocument||t,i=Rb(i),(s=Qi.get(s))&&v_(i,s),a=a.createElement("link"),vn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),Rn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Yf.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var L0=0;function H2(e,t){return e.stylesheets&&e.count===0&&yf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&yf(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&L0===0&&(L0=62500*S2());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yf(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>L0?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Yf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zf=null;function yf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zf=new Map,t.forEach(G2,e),Zf=null,Yf.call(e))}function G2(e,t){if(!(t.state.loading&4)){var n=Zf.get(e);if(n)var i=n.get(null);else{n=new Map,Zf.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Yf.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var pu={$$typeof:ra,Provider:null,Consumer:null,_currentValue:eo,_currentValue2:eo,_threadCount:0};function k2(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=s0(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=s0(0),this.hiddenUpdates=s0(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Ub(e,t,n,i,s,a,r,o,l,c,u,d){return e=new k2(e,t,n,r,l,c,u,d,o),t=1,a===!0&&(t|=24),a=vi(3,null,null,t),e.current=a,a.stateNode=e,t=Xg(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Zg(a),e}function Lb(e){return e?(e=fl,e):fl}function Nb(e,t,n,i,s,a){s=Lb(s),i.context===null?i.context=s:i.pendingContext=s,i=rr(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=or(e,i,t),n!==null&&(ai(n,e,t),Zc(n,e,t))}function qS(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function y_(e,t){qS(e,t),(e=e.alternate)&&qS(e,t)}function Pb(e){if(e.tag===13||e.tag===31){var t=mo(e,67108864);t!==null&&ai(t,e,67108864),y_(e,67108864)}}function YS(e){if(e.tag===13||e.tag===31){var t=bi();t=Ug(t);var n=mo(e,t);n!==null&&ai(n,e,t),y_(e,t)}}var Jf=!0;function W2(e,t,n,i){var s=It.T;It.T=null;var a=fe.p;try{fe.p=2,S_(e,t,n,i)}finally{fe.p=a,It.T=s}}function X2(e,t,n,i){var s=It.T;It.T=null;var a=fe.p;try{fe.p=8,S_(e,t,n,i)}finally{fe.p=a,It.T=s}}function S_(e,t,n,i){if(Jf){var s=Ag(i);if(s===null)D0(e,t,i,Kf,n),ZS(e,i);else if(Y2(s,e,t,n,i))i.stopPropagation();else if(ZS(e,i),t&4&&-1<q2.indexOf(e)){for(;s!==null;){var a=Ol(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=jr(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Mi(r);o.entanglements[1]|=l,r&=~l}Ds(a),(he&6)===0&&(zf=yi()+500,Au(0,!1))}}break;case 31:case 13:o=mo(a,2),o!==null&&ai(o,a,2),cd(),y_(a,2)}if(a=Ag(i),a===null&&D0(e,t,i,Kf,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else D0(e,t,i,null,n)}}function Ag(e){return e=Og(e),M_(e)}var Kf=null;function M_(e){if(Kf=null,e=rl(e),e!==null){var t=_u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=t1(t),e!==null)return e;e=null}else if(n===31){if(e=e1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Kf=e,null}function Ob(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nw()){case a1:return 2;case r1:return 8;case Ef:case Pw:return 32;case o1:return 268435456;default:return 32}default:return 32}}var wg=!1,ur=null,hr=null,fr=null,mu=new Map,gu=new Map,ja=[],q2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ZS(e,t){switch(e){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":mu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gu.delete(t.pointerId)}}function Bc(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Ol(t),t!==null&&Pb(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Y2(e,t,n,i,s){switch(t){case"focusin":return ur=Bc(ur,e,t,n,i,s),!0;case"dragenter":return hr=Bc(hr,e,t,n,i,s),!0;case"mouseover":return fr=Bc(fr,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return mu.set(a,Bc(mu.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,gu.set(a,Bc(gu.get(a)||null,e,t,n,i,s)),!0}return!1}function Ib(e){var t=rl(e.target);if(t!==null){var n=_u(t);if(n!==null){if(t=n.tag,t===13){if(t=t1(n),t!==null){e.blockedOn=t,Uy(e.priority,function(){YS(n)});return}}else if(t===31){if(t=e1(n),t!==null){e.blockedOn=t,Uy(e.priority,function(){YS(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sf(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ag(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);X0=i,n.target.dispatchEvent(i),X0=null}else return t=Ol(n),t!==null&&Pb(t),e.blockedOn=n,!1;t.shift()}return!0}function JS(e,t,n){Sf(e)&&n.delete(t)}function Z2(){wg=!1,ur!==null&&Sf(ur)&&(ur=null),hr!==null&&Sf(hr)&&(hr=null),fr!==null&&Sf(fr)&&(fr=null),mu.forEach(JS),gu.forEach(JS)}function af(e,t){e.blockedOn===t&&(e.blockedOn=null,wg||(wg=!0,un.unstable_scheduleCallback(un.unstable_NormalPriority,Z2)))}var rf=null;function KS(e){rf!==e&&(rf=e,un.unstable_scheduleCallback(un.unstable_NormalPriority,function(){rf===e&&(rf=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(M_(i||n)===null)continue;break}var a=Ol(n);a!==null&&(e.splice(t,3),t-=3,og(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Nl(e){function t(l){return af(l,e)}ur!==null&&af(ur,e),hr!==null&&af(hr,e),fr!==null&&af(fr,e),mu.forEach(t),gu.forEach(t);for(var n=0;n<ja.length;n++){var i=ja[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ja.length&&(n=ja[0],n.blockedOn===null);)Ib(n),n.blockedOn===null&&ja.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[ri]||null;if(typeof a=="function")r||KS(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[ri]||null)o=r.formAction;else if(M_(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),KS(n)}}}function Bb(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function b_(e){this._internalRoot=e}fd.prototype.render=b_.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(tt(409));var n=t.current,i=bi();Nb(n,i,e,t,null,null)};fd.prototype.unmount=b_.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nb(e.current,2,null,e,null,null),cd(),t[Pl]=null}};function fd(e){this._internalRoot=e}fd.prototype.unstable_scheduleHydration=function(e){if(e){var t=f1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ja.length&&t!==0&&t<ja[n].priority;n++);ja.splice(n,0,e),n===0&&Ib(e)}};var QS=jS.version;if(QS!=="19.2.4")throw Error(tt(527,QS,"19.2.4"));fe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(tt(188)):(e=Object.keys(e).join(","),Error(tt(268,e)));return e=Aw(t),e=e!==null?n1(e):null,e=e===null?null:e.stateNode,e};var J2={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:It,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Fc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Fc.isDisabled&&Fc.supportsFiber))try{vu=Fc.inject(J2),Si=Fc}catch{}var Fc;dd.createRoot=function(e,t){if(!$S(e))throw Error(tt(299));var n=!1,i="",s=CM,a=RM,r=DM;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Ub(e,1,!1,null,null,n,i,null,s,a,r,Bb),e[Pl]=t.current,__(e),new b_(t)};dd.hydrateRoot=function(e,t,n){if(!$S(e))throw Error(tt(299));var i=!1,s="",a=CM,r=RM,o=DM,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=Ub(e,1,!0,t,n??null,i,s,l,a,r,o,Bb),t.context=Lb(null),n=t.current,i=bi(),i=Ug(i),s=rr(i),s.callback=null,or(n,s,i),n=i,t.current.lanes=n,yu(t,n),Ds(t),e[Pl]=t.current,__(e),new fd(t)};dd.version="19.2.4"});var Hb=bs((SO,Vb)=>{"use strict";function zb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zb)}catch(e){console.error(e)}}zb(),Vb.exports=Fb()});var HA=bs(Rm=>{"use strict";var cO=Symbol.for("react.transitional.element"),uO=Symbol.for("react.fragment");function VA(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:cO,type:e,key:i,ref:t!==void 0?t:null,props:n}}Rm.Fragment=uO;Rm.jsx=VA;Rm.jsxs=VA});var Ah=bs((Hz,GA)=>{"use strict";GA.exports=HA()});var $z=Jr(wc(),1),WA=Jr(Hb(),1);var Pa=Jr(wc(),1);var rT=0,ev=1,oT=2;var Ku=1,lT=2,ac=3,Ea=0,Yn=1,zs=2,Vs=0,bo=1,nv=2,iv=3,sv=4,cT=5;var Ar=100,uT=101,hT=102,fT=103,dT=104,pT=200,mT=201,gT=202,_T=203,Od=204,Id=205,vT=206,xT=207,yT=208,ST=209,MT=210,bT=211,TT=212,ET=213,AT=214,Bd=0,Fd=1,zd=2,To=3,Vd=4,Hd=5,Gd=6,kd=7,av=0,wT=1,CT=2,gs=0,rv=1,ov=2,lv=3,cv=4,uv=5,hv=6,fv=7;var dv=300,Lr=301,Co=302,pp=303,mp=304,Qu=306,Wd=1e3,Ns=1001,Xd=1002,Sn=1003,RT=1004;var ju=1005;var me=1006,gp=1007;var Hs=1008;var Ui=1009,pv=1010,mv=1011,rc=1012,_p=1013,_s=1014,vs=1015,Gs=1016,vp=1017,xp=1018,oc=1020,gv=35902,_v=35899,vv=1021,xv=1022,es=1023,Ps=1026,Nr=1027,yv=1028,yp=1029,Pr=1030,Sp=1031;var Mp=1033,$u=33776,th=33777,eh=33778,nh=33779,bp=35840,Tp=35841,Ep=35842,Ap=35843,wp=36196,Cp=37492,Rp=37496,Dp=37488,Up=37489,ih=37490,Lp=37491,Np=37808,Pp=37809,Op=37810,Ip=37811,Bp=37812,Fp=37813,zp=37814,Vp=37815,Hp=37816,Gp=37817,kp=37818,Wp=37819,Xp=37820,qp=37821,Yp=36492,Zp=36494,Jp=36495,Kp=36283,Qp=36284,sh=36285,jp=36286;var Pu=2300,qd=2301,Pd=2302,Y_=2303,Z_=2400,J_=2401,K_=2402;var DT=3200;var Sv=0,UT=1,Ln="",qn="srgb",Ou="srgb-linear",Iu="linear",pe="srgb";var So=7680;var Q_=519,LT=512,NT=513,PT=514,$p=515,OT=516,IT=517,tm=518,BT=519,j_=35044;var Mv="300 es",ps=2e3,Bu=2001;function K2(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Q2(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Fu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function FT(){let e=Fu("canvas");return e.style.display="block",e}var Gb={},tc=null;function bv(...e){let t="THREE."+e.shift();tc?tc("log",t,...e):console.log(t,...e)}function zT(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Nt(...e){e=zT(e);let t="THREE."+e.shift();if(tc)tc("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Ot(...e){e=zT(e);let t="THREE."+e.shift();if(tc)tc("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Mo(...e){let t=e.join(" ");t in Gb||(Gb[t]=!0,Nt(...e))}function VT(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var HT={[Bd]:Fd,[zd]:Gd,[Vd]:kd,[To]:Hd,[Fd]:Bd,[Gd]:zd,[kd]:Vd,[Hd]:To},Os=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var T_=Math.PI/180,Yd=180/Math.PI;function ah(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bn[e&255]+Bn[e>>8&255]+Bn[e>>16&255]+Bn[e>>24&255]+"-"+Bn[t&255]+Bn[t>>8&255]+"-"+Bn[t>>16&15|64]+Bn[t>>24&255]+"-"+Bn[n&63|128]+Bn[n>>8&255]+"-"+Bn[n>>16&255]+Bn[n>>24&255]+Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]).toLowerCase()}function re(e,t,n){return Math.max(t,Math.min(n,e))}function j2(e,t){return(e%t+t)%t}function E_(e,t,n){return(1-n)*e+n*t}function Ru(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function li(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ht=class e{static{e.prototype.isVector2=!0}constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Is=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],f=a[r+0],h=a[r+1],m=a[r+2],_=a[r+3];if(d!==_||l!==f||c!==h||u!==m){let g=l*f+c*h+u*m+d*_;g<0&&(f=-f,h=-h,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),S=Math.sin(v);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S,l=l*p+f*o,c=c*p+h*o,u=u*p+m*o,d=d*p+_*o}else{l=l*p+f*o,c=c*p+h*o,u=u*p+m*o,d=d*p+_*o;let v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}t[n]=l,t[n+1]=c,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],f=a[r+1],h=a[r+2],m=a[r+3];return t[n]=o*m+u*d+l*h-c*f,t[n+1]=l*m+u*f+c*d-o*h,t[n+2]=c*m+u*h+o*f-l*d,t[n+3]=u*m-o*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),f=l(i/2),h=l(s/2),m=l(a/2);switch(r){case"XYZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"YXZ":this._x=f*u*d+c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"ZXY":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d-f*h*m;break;case"ZYX":this._x=f*u*d-c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d+f*h*m;break;case"YZX":this._x=f*u*d+c*h*m,this._y=c*h*d+f*u*m,this._z=c*u*m-f*h*d,this._w=c*u*d-f*h*m;break;case"XZY":this._x=f*u*d-c*h*m,this._y=c*h*d-f*u*m,this._z=c*u*m+f*h*d,this._w=c*u*d+f*h*m;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(a-c)*h,this._z=(r-s)*h}else if(i>o&&i>d){let h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+r)/h,this._z=(a+c)/h}else if(o>d){let h=2*Math.sqrt(1+o-i-d);this._w=(a-c)/h,this._x=(s+r)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-o);this._w=(r-s)/h,this._x=(a+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class e{static{e.prototype.isVector3=!0}constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(kb.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(kb.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),u=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this.z=re(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this.z=re(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return A_.copy(this).projectOnVector(t),this.sub(A_)}reflect(t){return this.sub(A_.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},A_=new W,kb=new Is,Vt=class e{static{e.prototype.isMatrix3=!0}constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],m=i[8],_=s[0],g=s[3],p=s[6],v=s[1],S=s[4],x=s[7],M=s[2],w=s[5],E=s[8];return a[0]=r*_+o*v+l*M,a[3]=r*g+o*S+l*w,a[6]=r*p+o*x+l*E,a[1]=c*_+u*v+d*M,a[4]=c*g+u*S+d*w,a[7]=c*p+u*x+d*E,a[2]=f*_+h*v+m*M,a[5]=f*g+h*S+m*w,a[8]=f*p+h*x+m*E,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return n*r*u-n*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*r-o*c,f=o*l-u*a,h=c*a-r*l,m=n*d+i*f+s*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(s*c-u*i)*_,t[2]=(o*i-s*r)*_,t[3]=f*_,t[4]=(u*n-s*l)*_,t[5]=(s*a-o*n)*_,t[6]=h*_,t[7]=(i*l-c*n)*_,t[8]=(r*n-i*a)*_,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Mo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(w_.makeScale(t,n)),this}rotate(t){return Mo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(w_.makeRotation(-t)),this}translate(t,n){return Mo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(w_.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},w_=new Vt,Wb=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xb=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $2(){let e={enabled:!0,workingColorSpace:Ou,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===pe&&(s.r=Ta(s.r),s.g=Ta(s.g),s.b=Ta(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===pe&&(s.r=$l(s.r),s.g=$l(s.g),s.b=$l(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ln?Iu:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Mo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Mo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Ou]:{primaries:t,whitePoint:i,transfer:Iu,toXYZ:Wb,fromXYZ:Xb,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Wb,fromXYZ:Xb,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),e}var ie=$2();function Ta(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function $l(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Hl,Zd=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Hl===void 0&&(Hl=Fu("canvas")),Hl.width=t.width,Hl.height=t.height;let s=Hl.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Hl}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Fu("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Ta(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ta(n[i]/255)*255):n[i]=Ta(n[i]);return{data:n,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tR=0,ec=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tR++}),this.uuid=ah(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(C_(s[r].image)):a.push(C_(s[r]))}else a=C_(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function C_(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Zd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var eR=0,R_=new W,Dn=class e extends Os{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=Ns,s=Ns,a=me,r=Hs,o=es,l=Ui,c=e.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=ah(),this.name="",this.source=new ec(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(R_).x}get height(){return this.source.getSize(R_).y}get depth(){return this.source.getSize(R_).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Nt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wd:t.x=t.x-Math.floor(t.x);break;case Ns:t.x=t.x<0?0:1;break;case Xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wd:t.y=t.y-Math.floor(t.y);break;case Ns:t.y=t.y<0?0:1;break;case Xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=dv;Dn.DEFAULT_ANISOTROPY=1;var se=class e{static{e.prototype.isVector4=!0}constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,x=(h+1)/2,M=(p+1)/2,w=(u+f)/4,E=(d+_)/4,y=(m+g)/4;return S>x&&S>M?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=w/i,a=E/i):x>M?x<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(x),i=w/s,a=y/s):M<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(M),i=E/a,s=y/a),this.set(i,s,a,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=re(this.x,t.x,n.x),this.y=re(this.y,t.y,n.y),this.z=re(this.z,t.z,n.z),this.w=re(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=re(this.x,t,n),this.y=re(this.y,t,n),this.z=re(this.z,t,n),this.w=re(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jd=class extends Os{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:me,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new se(0,0,t,n),this.scissorTest=!1,this.viewport=new se(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Dn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:me,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new ec(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends Jd{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},zu=class extends Dn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kd=class extends Dn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class e{static{e.prototype.isMatrix4=!0}constructor(t,n,i,s,a,r,o,l,c,u,d,f,h,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,u,d,f,h,m,_,g)}set(t,n,i,s,a,r,o,l,c,u,d,f,h,m,_,g){let p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Gl.setFromMatrixColumn(t,0).length(),a=1/Gl.setFromMatrixColumn(t,1).length(),r=1/Gl.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let f=r*u,h=r*d,m=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+m*c,n[5]=f-_*c,n[9]=-o*l,n[2]=_-f*c,n[6]=m+h*c,n[10]=r*l}else if(t.order==="YXZ"){let f=l*u,h=l*d,m=c*u,_=c*d;n[0]=f+_*o,n[4]=m*o-h,n[8]=r*c,n[1]=r*d,n[5]=r*u,n[9]=-o,n[2]=h*o-m,n[6]=_+f*o,n[10]=r*l}else if(t.order==="ZXY"){let f=l*u,h=l*d,m=c*u,_=c*d;n[0]=f-_*o,n[4]=-r*d,n[8]=m+h*o,n[1]=h+m*o,n[5]=r*u,n[9]=_-f*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let f=r*u,h=r*d,m=o*u,_=o*d;n[0]=l*u,n[4]=m*c-h,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=h*c-m,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let f=r*l,h=r*c,m=o*l,_=o*c;n[0]=l*u,n[4]=_-f*d,n[8]=m*d+h,n[1]=d,n[5]=r*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*d+m,n[10]=f-_*d}else if(t.order==="XZY"){let f=r*l,h=r*c,m=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=r*u,n[9]=h*d-m,n[2]=m*d-h,n[6]=o*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nR,t,iR)}lookAt(t,n,i){let s=this.elements;return Ai.subVectors(t,n),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),xr.crossVectors(i,Ai),xr.lengthSq()===0&&(Math.abs(i.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),xr.crossVectors(i,Ai)),xr.normalize(),pd.crossVectors(Ai,xr),s[0]=xr.x,s[4]=pd.x,s[8]=Ai.x,s[1]=xr.y,s[5]=pd.y,s[9]=Ai.y,s[2]=xr.z,s[6]=pd.z,s[10]=Ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],m=i[2],_=i[6],g=i[10],p=i[14],v=i[3],S=i[7],x=i[11],M=i[15],w=s[0],E=s[4],y=s[8],T=s[12],R=s[1],D=s[5],L=s[9],V=s[13],X=s[2],I=s[6],H=s[10],B=s[14],q=s[3],et=s[7],ot=s[11],at=s[15];return a[0]=r*w+o*R+l*X+c*q,a[4]=r*E+o*D+l*I+c*et,a[8]=r*y+o*L+l*H+c*ot,a[12]=r*T+o*V+l*B+c*at,a[1]=u*w+d*R+f*X+h*q,a[5]=u*E+d*D+f*I+h*et,a[9]=u*y+d*L+f*H+h*ot,a[13]=u*T+d*V+f*B+h*at,a[2]=m*w+_*R+g*X+p*q,a[6]=m*E+_*D+g*I+p*et,a[10]=m*y+_*L+g*H+p*ot,a[14]=m*T+_*V+g*B+p*at,a[3]=v*w+S*R+x*X+M*q,a[7]=v*E+S*D+x*I+M*et,a[11]=v*y+S*L+x*H+M*ot,a[15]=v*T+S*V+x*B+M*at,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],m=t[3],_=t[7],g=t[11],p=t[15],v=l*h-c*f,S=o*h-c*d,x=o*f-l*d,M=r*h-c*u,w=r*f-l*u,E=r*d-o*u;return n*(_*v-g*S+p*x)-i*(m*v-g*M+p*w)+s*(m*S-_*M+p*E)-a*(m*x-_*w+g*E)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return n*(r*u-o*c)-i*(a*u-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],m=t[12],_=t[13],g=t[14],p=t[15],v=n*o-i*r,S=n*l-s*r,x=n*c-a*r,M=i*l-s*o,w=i*c-a*o,E=s*c-a*l,y=u*_-d*m,T=u*g-f*m,R=u*p-h*m,D=d*g-f*_,L=d*p-h*_,V=f*p-h*g,X=v*V-S*L+x*D+M*R-w*T+E*y;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/X;return t[0]=(o*V-l*L+c*D)*I,t[1]=(s*L-i*V-a*D)*I,t[2]=(_*E-g*w+p*M)*I,t[3]=(f*w-d*E-h*M)*I,t[4]=(l*R-r*V-c*T)*I,t[5]=(n*V-s*R+a*T)*I,t[6]=(g*x-m*E-p*S)*I,t[7]=(u*E-f*x+h*S)*I,t[8]=(r*L-o*R+c*y)*I,t[9]=(i*R-n*L-a*y)*I,t[10]=(m*w-_*x+p*v)*I,t[11]=(d*x-u*w-h*v)*I,t[12]=(o*T-r*D-l*y)*I,t[13]=(n*D-i*T+s*y)*I,t[14]=(_*S-m*M-g*v)*I,t[15]=(u*M-d*S+f*v)*I,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,u=r+r,d=o+o,f=a*c,h=a*u,m=a*d,_=r*u,g=r*d,p=o*d,v=l*c,S=l*u,x=l*d,M=i.x,w=i.y,E=i.z;return s[0]=(1-(_+p))*M,s[1]=(h+x)*M,s[2]=(m-S)*M,s[3]=0,s[4]=(h-x)*w,s[5]=(1-(f+p))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(m+S)*E,s[9]=(g-v)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Gl.set(s[0],s[1],s[2]).length(),o=Gl.set(s[4],s[5],s[6]).length(),l=Gl.set(s[8],s[9],s[10]).length();a<0&&(r=-r),hs.copy(this);let c=1/r,u=1/o,d=1/l;return hs.elements[0]*=c,hs.elements[1]*=c,hs.elements[2]*=c,hs.elements[4]*=u,hs.elements[5]*=u,hs.elements[6]*=u,hs.elements[8]*=d,hs.elements[9]*=d,hs.elements[10]*=d,n.setFromRotationMatrix(hs),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=ps,l=!1){let c=this.elements,u=2*a/(n-t),d=2*a/(i-s),f=(n+t)/(n-t),h=(i+s)/(i-s),m,_;if(l)m=a/(r-a),_=r*a/(r-a);else if(o===ps)m=-(r+a)/(r-a),_=-2*r*a/(r-a);else if(o===Bu)m=-r/(r-a),_=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=ps,l=!1){let c=this.elements,u=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),h=-(i+s)/(i-s),m,_;if(l)m=1/(r-a),_=r/(r-a);else if(o===ps)m=-2/(r-a),_=-(r+a)/(r-a);else if(o===Bu)m=-1/(r-a),_=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Gl=new W,hs=new tn,nR=new W(0,0,0),iR=new W(1,1,1),xr=new W,pd=new W,Ai=new W,qb=new tn,Yb=new Is,wr=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return qb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qb,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Yb.setFromEuler(this),this.setFromQuaternion(Yb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wr.DEFAULT_ORDER="XYZ";var Vu=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sR=0,Zb=new W,kl=new Is,va=new tn,md=new W,Du=new W,aR=new W,rR=new Is,Jb=new W(1,0,0),Kb=new W(0,1,0),Qb=new W(0,0,1),jb={type:"added"},oR={type:"removed"},Wl={type:"childadded",child:null},D_={type:"childremoved",child:null},ts=class e extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=ah(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new W,n=new wr,i=new Is,s=new W(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tn},normalMatrix:{value:new Vt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return kl.setFromAxisAngle(t,n),this.quaternion.multiply(kl),this}rotateOnWorldAxis(t,n){return kl.setFromAxisAngle(t,n),this.quaternion.premultiply(kl),this}rotateX(t){return this.rotateOnAxis(Jb,t)}rotateY(t){return this.rotateOnAxis(Kb,t)}rotateZ(t){return this.rotateOnAxis(Qb,t)}translateOnAxis(t,n){return Zb.copy(t).applyQuaternion(this.quaternion),this.position.add(Zb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Jb,t)}translateY(t){return this.translateOnAxis(Kb,t)}translateZ(t){return this.translateOnAxis(Qb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?md.copy(t):md.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Du.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Du,md,this.up):va.lookAt(md,Du,this.up),this.quaternion.setFromRotationMatrix(va),s&&(va.extractRotation(s.matrixWorld),kl.setFromRotationMatrix(va),this.quaternion.premultiply(kl.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jb),Wl.child=t,this.dispatchEvent(Wl),Wl.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(oR),D_.child=t,this.dispatchEvent(D_),D_.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jb),Wl.child=t,this.dispatchEvent(Wl),Wl.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Du,t,aR),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Du,rR,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),d=r(t.shapes),f=r(t.skeletons),h=r(t.animations),m=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};ts.DEFAULT_UP=new W(0,1,0);ts.DEFAULT_MATRIX_AUTO_UPDATE=!0;ts.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ba=class extends ts{constructor(){super(),this.isGroup=!0,this.type="Group"}},lR={type:"move"},nc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let _ of t.hand.values()){let g=n.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lR)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new ba;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},GT={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},gd={h:0,s:0,l:0};function U_(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Kt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=ie.workingColorSpace){return this.r=t,this.g=n,this.b=i,ie.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=ie.workingColorSpace){if(t=j2(t,1),n=re(n,0,1),i=re(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=U_(r,a,t+1/3),this.g=U_(r,a,t),this.b=U_(r,a,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,n=qn){function i(a){a!==void 0&&parseFloat(a)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=qn){let i=GT[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}copyLinearToSRGB(t){return this.r=$l(t.r),this.g=$l(t.g),this.b=$l(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return ie.workingToColorSpace(Fn.copy(this),t),Math.round(re(Fn.r*255,0,255))*65536+Math.round(re(Fn.g*255,0,255))*256+Math.round(re(Fn.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ie.workingColorSpace){ie.workingToColorSpace(Fn.copy(this),n);let i=Fn.r,s=Fn.g,a=Fn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,n=ie.workingColorSpace){return ie.workingToColorSpace(Fn.copy(this),n),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=qn){ie.workingToColorSpace(Fn.copy(this),t);let n=Fn.r,i=Fn.g,s=Fn.b;return t!==qn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(yr),this.setHSL(yr.h+t,yr.s+n,yr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(yr),t.getHSL(gd);let i=E_(yr.h,gd.h,n),s=E_(yr.s,gd.s,n),a=E_(yr.l,gd.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new Kt;Kt.NAMES=GT;var Hu=class extends ts{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},fs=new W,xa=new W,L_=new W,ya=new W,Xl=new W,ql=new W,$b=new W,N_=new W,P_=new W,O_=new W,I_=new se,B_=new se,F_=new se,Er=class e{constructor(t=new W,n=new W,i=new W){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),fs.subVectors(t,n),s.cross(fs);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){fs.subVectors(s,n),xa.subVectors(i,n),L_.subVectors(t,n);let r=fs.dot(fs),o=fs.dot(xa),l=fs.dot(L_),c=xa.dot(xa),u=xa.dot(L_),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let f=1/d,h=(c*l-o*u)*f,m=(r*u-o*l)*f;return a.set(1-h-m,m,h)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,ya)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ya.x),l.addScaledVector(r,ya.y),l.addScaledVector(o,ya.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return I_.setScalar(0),B_.setScalar(0),F_.setScalar(0),I_.fromBufferAttribute(t,n),B_.fromBufferAttribute(t,i),F_.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(I_,a.x),r.addScaledVector(B_,a.y),r.addScaledVector(F_,a.z),r}static isFrontFacing(t,n,i,s){return fs.subVectors(i,n),xa.subVectors(t,n),fs.cross(xa).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fs.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),fs.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;Xl.subVectors(s,i),ql.subVectors(a,i),N_.subVectors(t,i);let l=Xl.dot(N_),c=ql.dot(N_);if(l<=0&&c<=0)return n.copy(i);P_.subVectors(t,s);let u=Xl.dot(P_),d=ql.dot(P_);if(u>=0&&d<=u)return n.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),n.copy(i).addScaledVector(Xl,r);O_.subVectors(t,a);let h=Xl.dot(O_),m=ql.dot(O_);if(m>=0&&h<=m)return n.copy(a);let _=h*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),n.copy(i).addScaledVector(ql,o);let g=u*m-h*d;if(g<=0&&d-u>=0&&h-m>=0)return $b.subVectors(a,s),o=(d-u)/(d-u+(h-m)),n.copy(s).addScaledVector($b,o);let p=1/(g+_+f);return r=_*p,o=f*p,n.copy(i).addScaledVector(Xl,r).addScaledVector(ql,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cr=class{constructor(t=new W(1/0,1/0,1/0),n=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(ds.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(ds.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=ds.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,ds):ds.fromBufferAttribute(a,r),ds.applyMatrix4(t.matrixWorld),this.expandByPoint(ds);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_d.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_d.copy(i.boundingBox)),_d.applyMatrix4(t.matrixWorld),this.union(_d)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ds),ds.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Uu),vd.subVectors(this.max,Uu),Yl.subVectors(t.a,Uu),Zl.subVectors(t.b,Uu),Jl.subVectors(t.c,Uu),Sr.subVectors(Zl,Yl),Mr.subVectors(Jl,Zl),_o.subVectors(Yl,Jl);let n=[0,-Sr.z,Sr.y,0,-Mr.z,Mr.y,0,-_o.z,_o.y,Sr.z,0,-Sr.x,Mr.z,0,-Mr.x,_o.z,0,-_o.x,-Sr.y,Sr.x,0,-Mr.y,Mr.x,0,-_o.y,_o.x,0];return!z_(n,Yl,Zl,Jl,vd)||(n=[1,0,0,0,1,0,0,0,1],!z_(n,Yl,Zl,Jl,vd))?!1:(xd.crossVectors(Sr,Mr),n=[xd.x,xd.y,xd.z],z_(n,Yl,Zl,Jl,vd))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ds).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ds).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Sa=[new W,new W,new W,new W,new W,new W,new W,new W],ds=new W,_d=new Cr,Yl=new W,Zl=new W,Jl=new W,Sr=new W,Mr=new W,_o=new W,Uu=new W,vd=new W,xd=new W,vo=new W;function z_(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){vo.fromArray(e,a);let o=s.x*Math.abs(vo.x)+s.y*Math.abs(vo.y)+s.z*Math.abs(vo.z),l=t.dot(vo),c=n.dot(vo),u=i.dot(vo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var ln=new W,yd=new Ht,cR=0,Ci=class extends Os{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cR++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=j_,this.updateRanges=[],this.gpuType=vs,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)yd.fromBufferAttribute(this,n),yd.applyMatrix3(t),this.setXY(n,yd.x,yd.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix3(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyMatrix4(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.applyNormalMatrix(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ln.fromBufferAttribute(this,n),ln.transformDirection(t),this.setXYZ(n,ln.x,ln.y,ln.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ru(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=li(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ru(n,this.array)),n}setX(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ru(n,this.array)),n}setY(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ru(n,this.array)),n}setZ(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ru(n,this.array)),n}setW(t,n){return this.normalized&&(n=li(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),s=li(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=li(n,this.array),i=li(i,this.array),s=li(s,this.array),a=li(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==j_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var Gu=class extends Ci{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var ku=class extends Ci{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var $i=class extends Ci{constructor(t,n,i){super(new Float32Array(t),n,i)}},uR=new Cr,Lu=new W,V_=new W,ic=class{constructor(t=new W,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):uR.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lu.subVectors(t,this.center);let n=Lu.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Lu,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(V_.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lu.copy(t.center).add(V_)),this.expandByPoint(Lu.copy(t.center).sub(V_))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},hR=0,ji=new tn,H_=new ts,Kl=new W,wi=new Cr,Nu=new Cr,yn=new W,Bs=class e extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hR++}),this.uuid=ah(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(K2(t)?ku:Gu)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Vt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ji.makeRotationFromQuaternion(t),this.applyMatrix4(ji),this}rotateX(t){return ji.makeRotationX(t),this.applyMatrix4(ji),this}rotateY(t){return ji.makeRotationY(t),this.applyMatrix4(ji),this}rotateZ(t){return ji.makeRotationZ(t),this.applyMatrix4(ji),this}translate(t,n,i){return ji.makeTranslation(t,n,i),this.applyMatrix4(ji),this}scale(t,n,i){return ji.makeScale(t,n,i),this.applyMatrix4(ji),this}lookAt(t){return H_.lookAt(t),H_.updateMatrix(),this.applyMatrix4(H_.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kl).negate(),this.translate(Kl.x,Kl.y,Kl.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new $i(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];wi.setFromBufferAttribute(a),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ic);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let i=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Nu.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(wi.min,Nu.min),wi.expandByPoint(yn),yn.addVectors(wi.max,Nu.max),wi.expandByPoint(yn)):(wi.expandByPoint(Nu.min),wi.expandByPoint(Nu.max))}wi.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)yn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(yn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)yn.fromBufferAttribute(o,c),l&&(Kl.fromBufferAttribute(t,c),yn.add(Kl)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new Ci(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new W,l[y]=new W;let c=new W,u=new W,d=new W,f=new Ht,h=new Ht,m=new Ht,_=new W,g=new W;function p(y,T,R){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,R),f.fromBufferAttribute(a,y),h.fromBufferAttribute(a,T),m.fromBufferAttribute(a,R),u.sub(c),d.sub(c),h.sub(f),m.sub(f);let D=1/(h.x*m.y-m.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(D),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-m.x).multiplyScalar(D),o[y].add(_),o[T].add(_),o[R].add(_),l[y].add(g),l[T].add(g),l[R].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,T=v.length;y<T;++y){let R=v[y],D=R.start,L=R.count;for(let V=D,X=D+L;V<X;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let S=new W,x=new W,M=new W,w=new W;function E(y){M.fromBufferAttribute(s,y),w.copy(M);let T=o[y];S.copy(T),S.sub(M.multiplyScalar(M.dot(T))).normalize(),x.crossVectors(w,T);let D=x.dot(l[y])<0?-1:1;r.setXYZW(y,S.x,S.y,S.z,D)}for(let y=0,T=v.length;y<T;++y){let R=v[y],D=R.start,L=R.count;for(let V=D,X=D+L;V<X;V+=3)E(t.getX(V+0)),E(t.getX(V+1)),E(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let s=new W,a=new W,r=new W,o=new W,l=new W,c=new W,u=new W,d=new W;if(t)for(let f=0,h=t.count;f<h;f+=3){let m=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(n,m),a.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(m,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)s.fromBufferAttribute(n,f+0),a.fromBufferAttribute(n,f+1),r.fromBufferAttribute(n,f+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)yn.fromBufferAttribute(t,n),yn.normalize(),t.setXYZ(n,yn.x,yn.y,yn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),h=0,m=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)f[m++]=c[h++]}return new Ci(f,u,d)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=t(f,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(n))}let a=t.morphAttributes;for(let c in a){let u=[],d=a[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var fR=0,Eo=class extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=ah(),this.name="",this.type="Material",this.blending=bo,this.side=Ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Id,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Nt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Nt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==bo&&(i.blending=this.blending),this.side!==Ea&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Od&&(i.blendSrc=this.blendSrc),this.blendDst!==Id&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Q_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==So&&(i.stencilFail=this.stencilFail),this.stencilZFail!==So&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==So&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ht().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Ma=new W,G_=new W,Sd=new W,br=new W,k_=new W,Md=new W,W_=new W,Qd=class{constructor(t=new W,n=new W(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=Ma.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,n),Ma.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){G_.copy(t).add(n).multiplyScalar(.5),Sd.copy(n).sub(t).normalize(),br.copy(this.origin).sub(G_);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Sd),o=br.dot(this.direction),l=-br.dot(Sd),c=br.lengthSq(),u=Math.abs(1-r*r),d,f,h,m;if(u>0)if(d=r*l-o,f=r*o-l,m=a*u,d>=0)if(f>=-m)if(f<=m){let _=1/u;d*=_,f*=_,h=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),h=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),h=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-a,-l),a),h=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),h=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(G_).addScaledVector(Sd,f),h}intersectSphere(t,n){Ma.subVectors(t.center,this.origin);let i=Ma.dot(this.direction),s=Ma.dot(Ma)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(a=(t.min.y-f.y)*u,r=(t.max.y-f.y)*u):(a=(t.max.y-f.y)*u,r=(t.min.y-f.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,n,i,s,a){k_.subVectors(n,t),Md.subVectors(i,t),W_.crossVectors(k_,Md);let r=this.direction.dot(W_),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;br.subVectors(this.origin,t);let l=o*this.direction.dot(Md.crossVectors(br,Md));if(l<0)return null;let c=o*this.direction.dot(k_.cross(br));if(c<0||l+c>r)return null;let u=-o*br.dot(W_);return u<0?null:this.at(u/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Wu=class extends Eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},tT=new tn,xo=new Qd,bd=new ic,eT=new W,Td=new W,Ed=new W,Ad=new W,X_=new W,wd=new W,nT=new W,Cd=new W,Un=class extends ts{constructor(t=new Bs,n=new Wu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){wd.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(X_.fromBufferAttribute(d,t),r?wd.addScaledVector(X_,u):wd.addScaledVector(X_.sub(n),u))}n.add(wd)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bd.copy(i.boundingSphere),bd.applyMatrix4(a),xo.copy(t.ray).recast(t.near),!(bd.containsPoint(xo.origin)===!1&&(xo.intersectSphere(bd,eT)===null||xo.origin.distanceToSquared(eT)>(t.far-t.near)**2))&&(tT.copy(a).invert(),xo.copy(t.ray).applyMatrix4(tT),!(i.boundingBox!==null&&xo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,xo)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,f=a.groups,h=a.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=r[g.materialIndex],v=Math.max(g.start,h.start),S=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let x=v,M=S;x<M;x+=3){let w=o.getX(x),E=o.getX(x+1),y=o.getX(x+2);s=Rd(this,p,t,i,c,u,d,w,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){let v=o.getX(g),S=o.getX(g+1),x=o.getX(g+2);s=Rd(this,r,t,i,c,u,d,v,S,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=r[g.materialIndex],v=Math.max(g.start,h.start),S=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let x=v,M=S;x<M;x+=3){let w=x,E=x+1,y=x+2;s=Rd(this,p,t,i,c,u,d,w,E,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=m,p=_;g<p;g+=3){let v=g,S=g+1,x=g+2;s=Rd(this,r,t,i,c,u,d,v,S,x),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function dR(e,t,n,i,s,a,r,o){let l;if(t.side===Yn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Ea,o),l===null)return null;Cd.copy(o),Cd.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Cd);return c<n.near||c>n.far?null:{distance:c,point:Cd.clone(),object:e}}function Rd(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Td),e.getVertexPosition(l,Ed),e.getVertexPosition(c,Ad);let u=dR(e,t,n,i,Td,Ed,Ad,nT);if(u){let d=new W;Er.getBarycoord(nT,Td,Ed,Ad,d),s&&(u.uv=Er.getInterpolatedAttribute(s,o,l,c,d,new Ht)),a&&(u.uv1=Er.getInterpolatedAttribute(a,o,l,c,d,new Ht)),r&&(u.normal=Er.getInterpolatedAttribute(r,o,l,c,d,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new W,materialIndex:0};Er.getNormal(Td,Ed,Ad,f.normal),u.face=f,u.barycoord=d}return u}var Ao=class extends Dn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=Sn,u=Sn,d,f){super(null,r,o,l,c,u,s,a,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var q_=new W,pR=new W,mR=new Vt,Ls=class{constructor(t=new W(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=q_.subVectors(i,n).cross(pR.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(q_),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||mR.getNormalMatrix(t),s=this.coplanarPoint(q_).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yo=new ic,gR=new Ht(.5,.5),Dd=new W,Xu=class{constructor(t=new Ls,n=new Ls,i=new Ls,s=new Ls,a=new Ls,r=new Ls){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ps,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],f=a[6],h=a[7],m=a[8],_=a[9],g=a[10],p=a[11],v=a[12],S=a[13],x=a[14],M=a[15];if(s[0].setComponents(c-r,h-u,p-m,M-v).normalize(),s[1].setComponents(c+r,h+u,p+m,M+v).normalize(),s[2].setComponents(c+o,h+d,p+_,M+S).normalize(),s[3].setComponents(c-o,h-d,p-_,M-S).normalize(),i)s[4].setComponents(l,f,g,x).normalize(),s[5].setComponents(c-l,h-f,p-g,M-x).normalize();else if(s[4].setComponents(c-l,h-f,p-g,M-x).normalize(),n===ps)s[5].setComponents(c+l,h+f,p+g,M+x).normalize();else if(n===Bu)s[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yo)}intersectsSprite(t){yo.center.set(0,0,0);let n=gR.distanceTo(t.center);return yo.radius=.7071067811865476+n,yo.applyMatrix4(t.matrixWorld),this.intersectsSphere(yo)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Dd.x=s.normal.x>0?t.max.x:t.min.x,Dd.y=s.normal.y>0?t.max.y:t.min.y,Dd.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dd)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qu=class extends Dn{constructor(t=[],n=Lr,i,s,a,r,o,l,c,u){super(t,n,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ms=class extends Dn{constructor(t,n,i,s,a,r,o,l,c){super(t,n,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Aa=class extends Dn{constructor(t,n,i=_s,s,a,r,o=Sn,l=Sn,c,u=Ps,d=1){if(u!==Ps&&u!==Nr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ec(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},jd=class extends Aa{constructor(t,n=_s,i=Lr,s,a,r=Sn,o=Sn,l,c=Ps){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,n,i,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Yu=class extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},sc=class e extends Bs{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],f=0,h=0;m("z","y","x",-1,-1,i,n,t,r,a,0),m("z","y","x",1,-1,i,n,-t,r,a,1),m("x","z","y",1,1,t,i,n,s,r,2),m("x","z","y",1,-1,t,i,-n,s,r,3),m("x","y","z",1,-1,t,n,i,s,a,4),m("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new $i(c,3)),this.setAttribute("normal",new $i(u,3)),this.setAttribute("uv",new $i(d,2));function m(_,g,p,v,S,x,M,w,E,y,T){let R=x/E,D=M/y,L=x/2,V=M/2,X=w/2,I=E+1,H=y+1,B=0,q=0,et=new W;for(let ot=0;ot<H;ot++){let at=ot*D-V;for(let mt=0;mt<I;mt++){let Qt=mt*R-L;et[_]=Qt*v,et[g]=at*S,et[p]=X,c.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[p]=w>0?1:-1,u.push(et.x,et.y,et.z),d.push(mt/E),d.push(1-ot/y),B+=1}}for(let ot=0;ot<y;ot++)for(let at=0;at<E;at++){let mt=f+at+I*ot,Qt=f+at+I*(ot+1),ee=f+(at+1)+I*(ot+1),Gt=f+(at+1)+I*ot;l.push(mt,Qt,Gt),l.push(Qt,ee,Gt),q+=6}o.addGroup(h,q,T),h+=q,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Fs=class e extends Bs{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=n/l,h=[],m=[],_=[],g=[];for(let p=0;p<u;p++){let v=p*f-r;for(let S=0;S<c;S++){let x=S*d-a;m.push(x,-v,0),_.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let S=v+c*p,x=v+c*(p+1),M=v+1+c*(p+1),w=v+1+c*p;h.push(S,x,w),h.push(x,M,w)}this.setIndex(h),this.setAttribute("position",new $i(m,3)),this.setAttribute("normal",new $i(_,3)),this.setAttribute("uv",new $i(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Ro(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(iT(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(iT(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function zn(e){let t={};for(let n=0;n<e.length;n++){let i=Ro(e[n]);for(let s in i)t[s]=i[s]}return t}function iT(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function _R(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Tv(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var kT={clone:Ro,merge:zn},vR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends Eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vR,this.fragmentShader=xR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ro(t.uniforms),this.uniformsGroups=_R(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ht().fromArray(s.value);break;case"v3":this.uniforms[i].value=new W().fromArray(s.value);break;case"v4":this.uniforms[i].value=new se().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new tn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$d=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var tp=class extends Eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ep=class extends Eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ud(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var Rr=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},np=class extends Rr{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Z_,endingEnd:Z_}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case J_:a=t,o=2*n-i;break;case K_:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case J_:r=t,l=2*i-n;break;case K_:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,u=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,m=(i-n)/(s-n),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,S=(-1-h)*g+(1.5+h)*_+.5*m,x=h*g-h*_;for(let M=0;M!==o;++M)a[M]=p*r[u+M]+v*r[c+M]+S*r[l+M]+x*r[d+M];return a}},ip=class extends Rr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-n)/(s-n),d=1-u;for(let f=0;f!==o;++f)a[f]=r[c+f]*d+r[l+f]*u;return a}},sp=class extends Rr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ap=class extends Rr{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let m=(i-n)/(s-n),_=1-m;for(let g=0;g!==o;++g)a[g]=r[c+g]*_+r[l+g]*m;return a}let f=o*2,h=t-1;for(let m=0;m!==o;++m){let _=r[c+m],g=r[l+m],p=h*f+m*2,v=d[p],S=d[p+1],x=t*f+m*2,M=u[x],w=u[x+1],E=(i-n)/(s-n),y,T,R,D,L;for(let V=0;V<8;V++){y=E*E,T=y*E,R=1-E,D=R*R,L=D*R;let I=L*n+3*D*E*v+3*R*y*M+T*s-i;if(Math.abs(I)<1e-10)break;let H=3*D*(v-n)+6*R*E*(M-v)+3*y*(s-M);if(Math.abs(H)<1e-10)break;E=E-I/H,E=Math.max(0,Math.min(1,E))}a[m]=L*_+3*D*E*S+3*R*y*w+T*g}return a}},Di=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ud(n,this.TimeBufferType),this.values=Ud(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Ud(t.times,Array),values:Ud(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new sp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ip(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new np(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new ap(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case Pu:n=this.InterpolantFactoryMethodDiscrete;break;case qd:n=this.InterpolantFactoryMethodLinear;break;case Pd:n=this.InterpolantFactoryMethodSmooth;break;case Y_:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Nt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pu;case this.InterpolantFactoryMethodLinear:return qd;case this.InterpolantFactoryMethodSmooth:return Pd;case this.InterpolantFactoryMethodBezier:return Y_}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&Q2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Pd,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,h=d+i;for(let m=0;m!==i;++m){let _=n[d+m];if(_!==n[f+m]||_!==n[h+m]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,f=r*i;for(let h=0;h!==i;++h)n[f+h]=n[d+h]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Di.prototype.ValueTypeName="";Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=qd;var Dr=class extends Di{constructor(t,n,i){super(t,n,i)}};Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Pu;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;var rp=class extends Di{constructor(t,n,i,s){super(t,n,i,s)}};rp.prototype.ValueTypeName="color";var op=class extends Di{constructor(t,n,i,s){super(t,n,i,s)}};op.prototype.ValueTypeName="number";var lp=class extends Rr{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let u=c+o;c!==u;c+=4)Is.slerpFlat(a,0,r,c-o,r,c,l);return a}},Zu=class extends Di{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new lp(this.times,this.values,this.getValueSize(),t)}};Zu.prototype.ValueTypeName="quaternion";Zu.prototype.InterpolantFactoryMethodSmooth=void 0;var Ur=class extends Di{constructor(t,n,i){super(t,n,i)}};Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Pu;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var cp=class extends Di{constructor(t,n,i,s){super(t,n,i,s)}};cp.prototype.ValueTypeName="vector";var up=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],m=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},WT=new up,hp=class{constructor(t){this.manager=t!==void 0?t:WT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};hp.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ld=new W,Nd=new Is,Us=new W,Ju=class extends ts{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=ps,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ld,Nd,Us),Us.x===1&&Us.y===1&&Us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ld,Nd,Us.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(Ld,Nd,Us),Us.x===1&&Us.y===1&&Us.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ld,Nd,Us.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Tr=new W,sT=new Ht,aT=new Ht,ci=class extends Ju{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Yd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(T_*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan(T_*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-t/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Tr.x,Tr.y).multiplyScalar(-t/Tr.z)}getViewSize(t,n){return this.getViewBounds(t,sT,aT),n.subVectors(aT,sT)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(T_*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var wo=class extends Ju{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}};var Ql=-90,jl=1,fp=class extends ts{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ci(Ql,jl,t,n);s.layers=this.layers,this.add(s);let a=new ci(Ql,jl,t,n);a.layers=this.layers,this.add(a);let r=new ci(Ql,jl,t,n);r.layers=this.layers,this.add(r);let o=new ci(Ql,jl,t,n);o.layers=this.layers,this.add(o);let l=new ci(Ql,jl,t,n);l.layers=this.layers,this.add(l);let c=new ci(Ql,jl,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===ps)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(d,f,h),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},dp=class extends ci{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ev="\\[\\]\\.:\\/",yR=new RegExp("["+Ev+"]","g"),Av="[^"+Ev+"]",SR="[^"+Ev.replace("\\.","")+"]",MR=/((?:WC+[\/:])*)/.source.replace("WC",Av),bR=/(WCOD+)?/.source.replace("WCOD",SR),TR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Av),ER=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Av),AR=new RegExp("^"+MR+bR+TR+ER+"$"),wR=["material","materials","bones","map"],$_=class{constructor(t,n,i){let s=i||Oe.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Oe=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yR,"")}static parseTrackName(t){let n=AR.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);wR.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=$_;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MO=new Float32Array(1);var tv=class e{static{e.prototype.isMatrix2=!0}constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};function wv(e,t,n,i){let s=CR(i);switch(n){case vv:return e*t;case yv:return e*t/s.components*s.byteLength;case yp:return e*t/s.components*s.byteLength;case Pr:return e*t*2/s.components*s.byteLength;case Sp:return e*t*2/s.components*s.byteLength;case xv:return e*t*3/s.components*s.byteLength;case es:return e*t*4/s.components*s.byteLength;case Mp:return e*t*4/s.components*s.byteLength;case $u:case th:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case eh:case nh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Tp:case Ap:return Math.max(e,16)*Math.max(t,8)/4;case bp:case Ep:return Math.max(e,8)*Math.max(t,8)/2;case wp:case Cp:case Dp:case Up:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Rp:case ih:case Lp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Np:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Pp:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Op:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Ip:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Bp:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Fp:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case zp:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Vp:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Hp:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Gp:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case kp:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Wp:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Xp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case qp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Yp:case Zp:case Jp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Kp:case Qp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case sh:case jp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function CR(e){switch(e){case Ui:case pv:return{byteLength:1,components:1};case rc:case mv:case Gs:return{byteLength:2,components:1};case vp:case xp:return{byteLength:2,components:4};case _s:case _p:case vs:return{byteLength:4,components:1};case gv:case _v:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function dE(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function DR(e){let t=new WeakMap;function n(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=e.HALF_FLOAT:h=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=e.SHORT;else if(c instanceof Uint32Array)h=e.UNSIGNED_INT;else if(c instanceof Int32Array)h=e.INT;else if(c instanceof Int8Array)h=e.BYTE;else if(c instanceof Uint8Array)h=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,u);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){let m=d[f],_=d[h];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){let _=d[h];e.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var UR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,FR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,VR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,WR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,XR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,YR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jR=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$R=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,t3=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e3=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n3=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,i3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o3="gl_FragColor = linearToOutputTexel( gl_FragColor );",l3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,u3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h3=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v3=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S3=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M3=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,b3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,T3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E3=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w3=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,R3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,P3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Z3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Q3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tD=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rD=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,oD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dD=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pD=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gD=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_D=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vD=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yD=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TD=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ED=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AD=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,UD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ND=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ID=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,HD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$D=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tU=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eU=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nU=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iU=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sU=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aU=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lU=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cU=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uU=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Zt={alphahash_fragment:UR,alphahash_pars_fragment:LR,alphamap_fragment:NR,alphamap_pars_fragment:PR,alphatest_fragment:OR,alphatest_pars_fragment:IR,aomap_fragment:BR,aomap_pars_fragment:FR,batching_pars_vertex:zR,batching_vertex:VR,begin_vertex:HR,beginnormal_vertex:GR,bsdfs:kR,iridescence_fragment:WR,bumpmap_pars_fragment:XR,clipping_planes_fragment:qR,clipping_planes_pars_fragment:YR,clipping_planes_pars_vertex:ZR,clipping_planes_vertex:JR,color_fragment:KR,color_pars_fragment:QR,color_pars_vertex:jR,color_vertex:$R,common:t3,cube_uv_reflection_fragment:e3,defaultnormal_vertex:n3,displacementmap_pars_vertex:i3,displacementmap_vertex:s3,emissivemap_fragment:a3,emissivemap_pars_fragment:r3,colorspace_fragment:o3,colorspace_pars_fragment:l3,envmap_fragment:c3,envmap_common_pars_fragment:u3,envmap_pars_fragment:h3,envmap_pars_vertex:f3,envmap_physical_pars_fragment:b3,envmap_vertex:d3,fog_vertex:p3,fog_pars_vertex:m3,fog_fragment:g3,fog_pars_fragment:_3,gradientmap_pars_fragment:v3,lightmap_pars_fragment:x3,lights_lambert_fragment:y3,lights_lambert_pars_fragment:S3,lights_pars_begin:M3,lights_toon_fragment:T3,lights_toon_pars_fragment:E3,lights_phong_fragment:A3,lights_phong_pars_fragment:w3,lights_physical_fragment:C3,lights_physical_pars_fragment:R3,lights_fragment_begin:D3,lights_fragment_maps:U3,lights_fragment_end:L3,lightprobes_pars_fragment:N3,logdepthbuf_fragment:P3,logdepthbuf_pars_fragment:O3,logdepthbuf_pars_vertex:I3,logdepthbuf_vertex:B3,map_fragment:F3,map_pars_fragment:z3,map_particle_fragment:V3,map_particle_pars_fragment:H3,metalnessmap_fragment:G3,metalnessmap_pars_fragment:k3,morphinstance_vertex:W3,morphcolor_vertex:X3,morphnormal_vertex:q3,morphtarget_pars_vertex:Y3,morphtarget_vertex:Z3,normal_fragment_begin:J3,normal_fragment_maps:K3,normal_pars_fragment:Q3,normal_pars_vertex:j3,normal_vertex:$3,normalmap_pars_fragment:tD,clearcoat_normal_fragment_begin:eD,clearcoat_normal_fragment_maps:nD,clearcoat_pars_fragment:iD,iridescence_pars_fragment:sD,opaque_fragment:aD,packing:rD,premultiplied_alpha_fragment:oD,project_vertex:lD,dithering_fragment:cD,dithering_pars_fragment:uD,roughnessmap_fragment:hD,roughnessmap_pars_fragment:fD,shadowmap_pars_fragment:dD,shadowmap_pars_vertex:pD,shadowmap_vertex:mD,shadowmask_pars_fragment:gD,skinbase_vertex:_D,skinning_pars_vertex:vD,skinning_vertex:xD,skinnormal_vertex:yD,specularmap_fragment:SD,specularmap_pars_fragment:MD,tonemapping_fragment:bD,tonemapping_pars_fragment:TD,transmission_fragment:ED,transmission_pars_fragment:AD,uv_pars_fragment:wD,uv_pars_vertex:CD,uv_vertex:RD,worldpos_vertex:DD,background_vert:UD,background_frag:LD,backgroundCube_vert:ND,backgroundCube_frag:PD,cube_vert:OD,cube_frag:ID,depth_vert:BD,depth_frag:FD,distance_vert:zD,distance_frag:VD,equirect_vert:HD,equirect_frag:GD,linedashed_vert:kD,linedashed_frag:WD,meshbasic_vert:XD,meshbasic_frag:qD,meshlambert_vert:YD,meshlambert_frag:ZD,meshmatcap_vert:JD,meshmatcap_frag:KD,meshnormal_vert:QD,meshnormal_frag:jD,meshphong_vert:$D,meshphong_frag:tU,meshphysical_vert:eU,meshphysical_frag:nU,meshtoon_vert:iU,meshtoon_frag:sU,points_vert:aU,points_frag:rU,shadow_vert:oU,shadow_frag:lU,sprite_vert:cU,sprite_frag:uU},yt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Ws={basic:{uniforms:zn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:zn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:zn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:zn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:zn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:zn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:zn([yt.points,yt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:zn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:zn([yt.common,yt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:zn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:zn([yt.sprite,yt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:zn([yt.common,yt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:zn([yt.lights,yt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Ws.physical={uniforms:zn([Ws.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var em={r:0,b:0,g:0},hU=new tn,pE=new Vt;pE.set(-1,0,0,0,1,0,0,0,1);function fU(e,t,n,i,s,a){let r=new Kt(0),o=s===!0?0:1,l,c,u=null,d=0,f=null;function h(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let x=v.backgroundBlurriness>0;S=t.get(S,x)}return S}function m(v){let S=!1,x=h(v);x===null?g(r,o):x&&x.isColor&&(g(x,1),S=!0);let M=e.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(v,S){let x=h(S);x&&(x.isCubeTexture||x.mapping===Qu)?(c===void 0&&(c=new Un(new sc(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ro(Ws.backgroundCube.uniforms),vertexShader:Ws.backgroundCube.vertexShader,fragmentShader:Ws.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hU.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pE),c.material.toneMapped=ie.getTransfer(x.colorSpace)!==pe,(u!==x||d!==x.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Un(new Fs(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ro(Ws.background.uniforms),vertexShader:Ws.background.vertexShader,fragmentShader:Ws.background.fragmentShader,side:Ea,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ie.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(em,Tv(e)),n.buffers.color.setClear(em.r,em.g,em.b,S,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(v,S=1){r.set(v),o=S,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(r,o)},render:m,addToRenderList:_,dispose:p}}function dU(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),a=s,r=!1;function o(D,L,V,X,I){let H=!1,B=d(D,X,V,L);a!==B&&(a=B,c(a.object)),H=h(D,X,V,I),H&&m(D,X,V,I),I!==null&&t.update(I,e.ELEMENT_ARRAY_BUFFER),(H||r)&&(r=!1,x(D,L,V,X),I!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return e.createVertexArray()}function c(D){return e.bindVertexArray(D)}function u(D){return e.deleteVertexArray(D)}function d(D,L,V,X){let I=X.wireframe===!0,H=i[L.id];H===void 0&&(H={},i[L.id]=H);let B=D.isInstancedMesh===!0?D.id:0,q=H[B];q===void 0&&(q={},H[B]=q);let et=q[V.id];et===void 0&&(et={},q[V.id]=et);let ot=et[I];return ot===void 0&&(ot=f(l()),et[I]=ot),ot}function f(D){let L=[],V=[],X=[];for(let I=0;I<n;I++)L[I]=0,V[I]=0,X[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:X,object:D,attributes:{},index:null}}function h(D,L,V,X){let I=a.attributes,H=L.attributes,B=0,q=V.getAttributes();for(let et in q)if(q[et].location>=0){let at=I[et],mt=H[et];if(mt===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(mt=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(mt=D.instanceColor)),at===void 0||at.attribute!==mt||mt&&at.data!==mt.data)return!0;B++}return a.attributesNum!==B||a.index!==X}function m(D,L,V,X){let I={},H=L.attributes,B=0,q=V.getAttributes();for(let et in q)if(q[et].location>=0){let at=H[et];at===void 0&&(et==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),et==="instanceColor"&&D.instanceColor&&(at=D.instanceColor));let mt={};mt.attribute=at,at&&at.data&&(mt.data=at.data),I[et]=mt,B++}a.attributes=I,a.attributesNum=B,a.index=X}function _(){let D=a.newAttributes;for(let L=0,V=D.length;L<V;L++)D[L]=0}function g(D){p(D,0)}function p(D,L){let V=a.newAttributes,X=a.enabledAttributes,I=a.attributeDivisors;V[D]=1,X[D]===0&&(e.enableVertexAttribArray(D),X[D]=1),I[D]!==L&&(e.vertexAttribDivisor(D,L),I[D]=L)}function v(){let D=a.newAttributes,L=a.enabledAttributes;for(let V=0,X=L.length;V<X;V++)L[V]!==D[V]&&(e.disableVertexAttribArray(V),L[V]=0)}function S(D,L,V,X,I,H,B){B===!0?e.vertexAttribIPointer(D,L,V,I,H):e.vertexAttribPointer(D,L,V,X,I,H)}function x(D,L,V,X){_();let I=X.attributes,H=V.getAttributes(),B=L.defaultAttributeValues;for(let q in H){let et=H[q];if(et.location>=0){let ot=I[q];if(ot===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor)),ot!==void 0){let at=ot.normalized,mt=ot.itemSize,Qt=t.get(ot);if(Qt===void 0)continue;let ee=Qt.buffer,Gt=Qt.type,Q=Qt.bytesPerElement,ft=Gt===e.INT||Gt===e.UNSIGNED_INT||ot.gpuType===_p;if(ot.isInterleavedBufferAttribute){let rt=ot.data,Pt=rt.stride,Ft=ot.offset;if(rt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<et.locationSize;Ut++)p(et.location+Ut,rt.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ut=0;Ut<et.locationSize;Ut++)g(et.location+Ut);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let Ut=0;Ut<et.locationSize;Ut++)S(et.location+Ut,mt/et.locationSize,Gt,at,Pt*Q,(Ft+mt/et.locationSize*Ut)*Q,ft)}else{if(ot.isInstancedBufferAttribute){for(let rt=0;rt<et.locationSize;rt++)p(et.location+rt,ot.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let rt=0;rt<et.locationSize;rt++)g(et.location+rt);e.bindBuffer(e.ARRAY_BUFFER,ee);for(let rt=0;rt<et.locationSize;rt++)S(et.location+rt,mt/et.locationSize,Gt,at,mt*Q,mt/et.locationSize*rt*Q,ft)}}else if(B!==void 0){let at=B[q];if(at!==void 0)switch(at.length){case 2:e.vertexAttrib2fv(et.location,at);break;case 3:e.vertexAttrib3fv(et.location,at);break;case 4:e.vertexAttrib4fv(et.location,at);break;default:e.vertexAttrib1fv(et.location,at)}}}}v()}function M(){T();for(let D in i){let L=i[D];for(let V in L){let X=L[V];for(let I in X){let H=X[I];for(let B in H)u(H[B].object),delete H[B];delete X[I]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let L=i[D.id];for(let V in L){let X=L[V];for(let I in X){let H=X[I];for(let B in H)u(H[B].object),delete H[B];delete X[I]}}delete i[D.id]}function E(D){for(let L in i){let V=i[L];for(let X in V){let I=V[X];if(I[D.id]===void 0)continue;let H=I[D.id];for(let B in H)u(H[B].object),delete H[B];delete I[D.id]}}}function y(D){for(let L in i){let V=i[L],X=D.isInstancedMesh===!0?D.id:0,I=V[X];if(I!==void 0){for(let H in I){let B=I[H];for(let q in B)u(B[q].object),delete B[q];delete I[H]}delete V[X],Object.keys(V).length===0&&delete i[L]}}}function T(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function pU(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,u){u!==0&&(e.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];n.update(f,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function mU(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(E){return!(E!==es&&i.convert(E)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let y=E===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Ui&&i.convert(E)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==vs&&!y)}function l(E){if(E==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);u!==c&&(Nt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:M,samples:w}}function gU(e){let t=this,n=null,i=0,s=!1,a=!1,r=new Ls,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=e.get(d);if(!s||m===null||m.length===0||a&&!g)a?u(null):c();else{let v=a?0:i,S=v*4,x=p.clippingState||null;l.value=x,x=u(m,f,S,h);for(let M=0;M!==S;++M)x[M]=n[M];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=h+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,x=h;S!==_;++S,x+=4)r.copy(d[S]).applyMatrix4(v,o),r.normal.toArray(g,x),g[x+3]=r.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Or=4,XT=[.125,.215,.35,.446,.526,.582],Do=20,_U=256,rh=new wo,qT=new Kt,Cv=null,Rv=0,Dv=0,Uv=!1,vU=new W,im=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=vU}=a;Cv=this._renderer.getRenderTarget(),Rv=this._renderer.getActiveCubeFace(),Dv=this._renderer.getActiveMipmapLevel(),Uv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=JT(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ZT(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Cv,Rv,Dv),this._renderer.xr.enabled=Uv,t.scissorTest=!1,lc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Lr||t.mapping===Co?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cv=this._renderer.getRenderTarget(),Rv=this._renderer.getActiveCubeFace(),Dv=this._renderer.getActiveMipmapLevel(),Uv=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:me,minFilter:me,generateMipmaps:!1,type:Gs,format:es,colorSpace:Ou,depthBuffer:!1},s=YT(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=YT(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xU(a)),this._blurMaterial=SU(a,t,n),this._ggxMaterial=yU(a,t,n)}return s}_compileMaterial(t){let n=new Un(new Bs,t);this._renderer.compile(n,rh)}_sceneToCubeUV(t,n,i,s,a){let l=new ci(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(qT),d.toneMapping=gs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new sc,new Wu({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,v=t.background;v?v.isColor&&(g.color.copy(v),t.background=null,p=!0):(g.color.copy(qT),p=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[S],a.y,a.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[S]));let M=this._cubeSize;lc(s,x*M,S>2?M:0,M,M),d.setRenderTarget(s),p&&d.render(_,l),d.render(t,l)}d.toneMapping=h,d.autoClear=f,t.background=v}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===Lr||t.mapping===Co;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=JT()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ZT());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;lc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,rh)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=0+c*1.25,h=d*f,{_lodMax:m}=this,_=this._sizeLods[i],g=3*_*(i>m-Or?i-m+Or:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=m-n,lc(a,g,p,3*_,2*_),s.setRenderTarget(a),s.render(o,rh),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=m-i,lc(t,g,p,3*_,2*_),s.setRenderTarget(t),s.render(o,rh)}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=c;let f=c.uniforms,h=this._sizeLods[i]-1,m=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*Do-1),_=a/m,g=isFinite(a)?1+Math.floor(u*_):Do;g>Do&&Nt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Do}`);let p=[],v=0;for(let E=0;E<Do;++E){let y=E/_,T=Math.exp(-y*y/2);p.push(T),E===0?v+=T:E<g&&(v+=2*T)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-i;let x=this._sizeLods[s],M=3*x*(s>S-Or?s-S+Or:0),w=4*(this._cubeSize-x);lc(n,M,w,3*x,2*x),l.setRenderTarget(n),l.render(d,rh)}};function xU(e){let t=[],n=[],i=[],s=e,a=e-Or+1+XT.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);t.push(o);let l=1/o;r>e-Or?l=XT[r-e+Or-1]:r===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,m=6,_=3,g=2,p=1,v=new Float32Array(_*m*h),S=new Float32Array(g*m*h),x=new Float32Array(p*m*h);for(let w=0;w<h;w++){let E=w%3*2/3-1,y=w>2?0:-1,T=[E,y,0,E+2/3,y,0,E+2/3,y+1,0,E,y,0,E+2/3,y+1,0,E,y+1,0];v.set(T,_*m*w),S.set(f,g*m*w);let R=[w,w,w,w,w,w];x.set(R,p*m*w)}let M=new Bs;M.setAttribute("position",new Ci(v,_)),M.setAttribute("uv",new Ci(S,g)),M.setAttribute("faceIndex",new Ci(x,p)),i.push(new Un(M,null)),s>Or&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function YT(e,t,n){let i=new Ri(e,t,n);return i.texture.mapping=Qu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lc(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function yU(e,t,n){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_U,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rm(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function SU(e,t,n){let i=new Float32Array(Do),s=new W(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Do,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function ZT(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function JT(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function rm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var sm=class extends Ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new qu(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new sc(5,5,5),a=new Mn({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yn,blending:Vs});a.uniforms.tEquirect.value=n;let r=new Un(s,a),o=n.minFilter;return n.minFilter===Hs&&(n.minFilter=me),new fp(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function MU(e){let t=new WeakMap,n=new WeakMap,i=null;function s(f,h=!1){return f==null?null:h?r(f):a(f)}function a(f){if(f&&f.isTexture){let h=f.mapping;if(h===pp||h===mp)if(t.has(f)){let m=t.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let _=new sm(m.height);return _.fromEquirectangularTexture(e,f),t.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture){let h=f.mapping,m=h===pp||h===mp,_=h===Lr||h===Co;if(m||_){let g=n.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new im(e)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return m&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new im(e)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,h){return h===pp?f.mapping=Lr:h===mp&&(f.mapping=Co),f}function l(f){let h=0,m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function c(f){let h=f.target;h.removeEventListener("dispose",c);let m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let m=n.get(h);m!==void 0&&(n.delete(h),m.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function bU(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Mo("WebGLRenderer: "+i+" extension not supported."),s}}}function TU(e,t,n,i){let s={},a=new WeakMap;function r(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",r),delete s[f.id];let h=a.get(f);h&&(t.remove(h),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)t.update(f[h],e.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,m=d.attributes.position,_=0;if(m===void 0)return;if(h!==null){let v=h.array;_=h.version;for(let S=0,x=v.length;S<x;S+=3){let M=v[S+0],w=v[S+1],E=v[S+2];f.push(M,w,w,E,E,M)}}else{let v=m.array;_=m.version;for(let S=0,x=v.length/3-1;S<x;S+=3){let M=S+0,w=S+1,E=S+2;f.push(M,w,w,E,E,M)}}let g=new(m.count>=65535?ku:Gu)(f,1);g.version=_;let p=a.get(d);p&&t.remove(p),a.set(d,g)}function u(d){let f=a.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function EU(e,t,n){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,f){e.drawElements(i,f,a,d*r),n.update(f,i,1)}function c(d,f,h){h!==0&&(e.drawElementsInstanced(i,f,a,d*r,h),n.update(f,i,h))}function u(d,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,d,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];n.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function AU(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Ot("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function wU(e,t,n){let i=new WeakMap,s=new se;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(o);if(f===void 0||f.count!==d){let T=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;h===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let x=o.attributes.position.count*S,M=1;x>t.maxTextureSize&&(M=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*M*4*d),E=new zu(w,x,M,d);E.type=vs,E.needsUpdate=!0;let y=S*4;for(let R=0;R<d;R++){let D=g[R],L=p[R],V=v[R],X=x*M*4*R;for(let I=0;I<D.count;I++){let H=I*y;h===!0&&(s.fromBufferAttribute(D,I),w[X+H+0]=s.x,w[X+H+1]=s.y,w[X+H+2]=s.z,w[X+H+3]=0),m===!0&&(s.fromBufferAttribute(L,I),w[X+H+4]=s.x,w[X+H+5]=s.y,w[X+H+6]=s.z,w[X+H+7]=0),_===!0&&(s.fromBufferAttribute(V,I),w[X+H+8]=s.x,w[X+H+9]=s.y,w[X+H+10]=s.z,w[X+H+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:E,size:new Ht(x,M)},i.set(o,f),o.addEventListener("dispose",T)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];let m=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:a}}function CU(e,t,n,i,s){let a=new WeakMap;function r(c){let u=s.render.frame,d=c.geometry,f=t.get(c,d);if(a.get(f)!==u&&(t.update(f),a.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;a.get(h)!==u&&(h.update(),a.set(h,u))}return f}function o(){a=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:r,dispose:o}}var RU={[rv]:"LINEAR_TONE_MAPPING",[ov]:"REINHARD_TONE_MAPPING",[lv]:"CINEON_TONE_MAPPING",[cv]:"ACES_FILMIC_TONE_MAPPING",[hv]:"AGX_TONE_MAPPING",[fv]:"NEUTRAL_TONE_MAPPING",[uv]:"CUSTOM_TONE_MAPPING"};function DU(e,t,n,i,s,a){let r=new Ri(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,depthTexture:s?new Aa(t,n):void 0}),o=new Ri(t,n,{type:Gs,depthBuffer:!1,stencilBuffer:!1}),l=new Bs;l.setAttribute("position",new $i([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $i([0,2,0,0,2,0],2));let c=new $d({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Un(l,c),d=new wo(-1,1,1,-1,0,1),f=null,h=null,m=!1,_,g=null,p=[],v=!1;this.setSize=function(S,x){r.setSize(S,x),o.setSize(S,x);for(let M=0;M<p.length;M++){let w=p[M];w.setSize&&w.setSize(S,x)}},this.setEffects=function(S){p=S,v=p.length>0&&p[0].isRenderPass===!0;let x=r.width,M=r.height;for(let w=0;w<p.length;w++){let E=p[w];E.setSize&&E.setSize(x,M)}},this.begin=function(S,x){if(m||S.toneMapping===gs&&p.length===0)return!1;if(g=x,x!==null){let M=x.width,w=x.height;(r.width!==M||r.height!==w)&&this.setSize(M,w)}return v===!1&&S.setRenderTarget(r),_=S.toneMapping,S.toneMapping=gs,!0},this.hasRenderPass=function(){return v},this.end=function(S,x){S.toneMapping=_,m=!0;let M=r,w=o;for(let E=0;E<p.length;E++){let y=p[E];if(y.enabled!==!1&&(y.render(S,w,M,x),y.needsSwap!==!1)){let T=M;M=w,w=T}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,c.defines={},ie.getTransfer(f)===pe&&(c.defines.SRGB_TRANSFER="");let E=RU[h];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(g),S.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),l.dispose(),c.dispose()}}var mE=new Dn,Pv=new Aa(1,1),gE=new zu,_E=new Kd,vE=new qu,KT=[],QT=[],jT=new Float32Array(16),$T=new Float32Array(9),tE=new Float32Array(4);function uc(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=KT[s];if(a===void 0&&(a=new Float32Array(s),KT[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function hn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function fn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function om(e,t){let n=QT[t];n===void 0&&(n=new Int32Array(t),QT[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function UU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function LU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2fv(this.addr,t),fn(n,t)}}function NU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hn(n,t))return;e.uniform3fv(this.addr,t),fn(n,t)}}function PU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4fv(this.addr,t),fn(n,t)}}function OU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(hn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),fn(n,t)}else{if(hn(n,i))return;tE.set(i),e.uniformMatrix2fv(this.addr,!1,tE),fn(n,i)}}function IU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(hn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),fn(n,t)}else{if(hn(n,i))return;$T.set(i),e.uniformMatrix3fv(this.addr,!1,$T),fn(n,i)}}function BU(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(hn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),fn(n,t)}else{if(hn(n,i))return;jT.set(i),e.uniformMatrix4fv(this.addr,!1,jT),fn(n,i)}}function FU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function zU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2iv(this.addr,t),fn(n,t)}}function VU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;e.uniform3iv(this.addr,t),fn(n,t)}}function HU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4iv(this.addr,t),fn(n,t)}}function GU(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function kU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hn(n,t))return;e.uniform2uiv(this.addr,t),fn(n,t)}}function WU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hn(n,t))return;e.uniform3uiv(this.addr,t),fn(n,t)}}function XU(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hn(n,t))return;e.uniform4uiv(this.addr,t),fn(n,t)}}function qU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Pv.compareFunction=n.isReversedDepthBuffer()?tm:$p,a=Pv):a=mE,n.setTexture2D(t||a,s)}function YU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||_E,s)}function ZU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||vE,s)}function JU(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||gE,s)}function KU(e){switch(e){case 5126:return UU;case 35664:return LU;case 35665:return NU;case 35666:return PU;case 35674:return OU;case 35675:return IU;case 35676:return BU;case 5124:case 35670:return FU;case 35667:case 35671:return zU;case 35668:case 35672:return VU;case 35669:case 35673:return HU;case 5125:return GU;case 36294:return kU;case 36295:return WU;case 36296:return XU;case 35678:case 36198:case 36298:case 36306:case 35682:return qU;case 35679:case 36299:case 36307:return YU;case 35680:case 36300:case 36308:case 36293:return ZU;case 36289:case 36303:case 36311:case 36292:return JU}}function QU(e,t){e.uniform1fv(this.addr,t)}function jU(e,t){let n=uc(t,this.size,2);e.uniform2fv(this.addr,n)}function $U(e,t){let n=uc(t,this.size,3);e.uniform3fv(this.addr,n)}function tL(e,t){let n=uc(t,this.size,4);e.uniform4fv(this.addr,n)}function eL(e,t){let n=uc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function nL(e,t){let n=uc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function iL(e,t){let n=uc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function sL(e,t){e.uniform1iv(this.addr,t)}function aL(e,t){e.uniform2iv(this.addr,t)}function rL(e,t){e.uniform3iv(this.addr,t)}function oL(e,t){e.uniform4iv(this.addr,t)}function lL(e,t){e.uniform1uiv(this.addr,t)}function cL(e,t){e.uniform2uiv(this.addr,t)}function uL(e,t){e.uniform3uiv(this.addr,t)}function hL(e,t){e.uniform4uiv(this.addr,t)}function fL(e,t,n){let i=this.cache,s=t.length,a=om(n,s);hn(i,a)||(e.uniform1iv(this.addr,a),fn(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=Pv:r=mE;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function dL(e,t,n){let i=this.cache,s=t.length,a=om(n,s);hn(i,a)||(e.uniform1iv(this.addr,a),fn(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||_E,a[r])}function pL(e,t,n){let i=this.cache,s=t.length,a=om(n,s);hn(i,a)||(e.uniform1iv(this.addr,a),fn(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||vE,a[r])}function mL(e,t,n){let i=this.cache,s=t.length,a=om(n,s);hn(i,a)||(e.uniform1iv(this.addr,a),fn(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||gE,a[r])}function gL(e){switch(e){case 5126:return QU;case 35664:return jU;case 35665:return $U;case 35666:return tL;case 35674:return eL;case 35675:return nL;case 35676:return iL;case 5124:case 35670:return sL;case 35667:case 35671:return aL;case 35668:case 35672:return rL;case 35669:case 35673:return oL;case 5125:return lL;case 36294:return cL;case 36295:return uL;case 36296:return hL;case 35678:case 36198:case 36298:case 36306:case 35682:return fL;case 35679:case 36299:case 36307:return dL;case 35680:case 36300:case 36308:case 36293:return pL;case 36289:case 36303:case 36311:case 36292:return mL}}var Ov=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=KU(n.type)}},Iv=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gL(n.type)}},Bv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},Lv=/(\w+)(\])?(\[|\.)?/g;function eE(e,t){e.seq.push(t),e.map[t.id]=t}function _L(e,t,n){let i=e.name,s=i.length;for(Lv.lastIndex=0;;){let a=Lv.exec(i),r=Lv.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){eE(n,c===void 0?new Ov(o,e,t):new Iv(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new Bv(o),eE(n,d)),n=d}}}var cc=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);_L(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function nE(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var vL=37297,xL=0;function yL(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var iE=new Vt;function SL(e){ie._getMatrix(iE,ie.workingColorSpace,e);let t=`mat3( ${iE.elements.map(n=>n.toFixed(4))} )`;switch(ie.getTransfer(e)){case Iu:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function sE(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+yL(e.getShaderSource(t),o)}else return a}function ML(e,t){let n=SL(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var bL={[rv]:"Linear",[ov]:"Reinhard",[lv]:"Cineon",[cv]:"ACESFilmic",[hv]:"AgX",[fv]:"Neutral",[uv]:"Custom"};function TL(e,t){let n=bL[t];return n===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var nm=new W;function EL(){ie.getLuminanceCoefficients(nm);let e=nm.x.toFixed(4),t=nm.y.toFixed(4),n=nm.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AL(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lh).join(`
`)}function wL(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function CL(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function lh(e){return e!==""}function aE(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rE(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var RL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fv(e){return e.replace(RL,UL)}var DL=new Map;function UL(e,t){let n=Zt[t];if(n===void 0){let i=DL.get(t);if(i!==void 0)n=Zt[i],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Fv(n)}var LL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oE(e){return e.replace(LL,NL)}function NL(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function lE(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var PL={[Ku]:"SHADOWMAP_TYPE_PCF",[ac]:"SHADOWMAP_TYPE_VSM"};function OL(e){return PL[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var IL={[Lr]:"ENVMAP_TYPE_CUBE",[Co]:"ENVMAP_TYPE_CUBE",[Qu]:"ENVMAP_TYPE_CUBE_UV"};function BL(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":IL[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var FL={[Co]:"ENVMAP_MODE_REFRACTION"};function zL(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":FL[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var VL={[av]:"ENVMAP_BLENDING_MULTIPLY",[wT]:"ENVMAP_BLENDING_MIX",[CT]:"ENVMAP_BLENDING_ADD"};function HL(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":VL[e.combine]||"ENVMAP_BLENDING_NONE"}function GL(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function kL(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=OL(n),c=BL(n),u=zL(n),d=HL(n),f=GL(n),h=AL(n),m=wL(a),_=s.createProgram(),g,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(lh).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(lh).join(`
`),p.length>0&&(p+=`
`)):(g=[lE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lh).join(`
`),p=[lE(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gs?"#define TONE_MAPPING":"",n.toneMapping!==gs?Zt.tonemapping_pars_fragment:"",n.toneMapping!==gs?TL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,ML("linearToOutputTexel",n.outputColorSpace),EL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(lh).join(`
`)),r=Fv(r),r=aE(r,n),r=rE(r,n),o=Fv(o),o=aE(o,n),o=rE(o,n),r=oE(r),o=oE(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Mv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=v+g+r,x=v+p+o,M=nE(s,s.VERTEX_SHADER,S),w=nE(s,s.FRAGMENT_SHADER,x);s.attachShader(_,M),s.attachShader(_,w),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(D){if(e.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(M)||"",X=s.getShaderInfoLog(w)||"",I=L.trim(),H=V.trim(),B=X.trim(),q=!0,et=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,M,w);else{let ot=sE(s,M,"vertex"),at=sE(s,w,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+I+`
`+ot+`
`+at)}else I!==""?Nt("WebGLProgram: Program Info Log:",I):(H===""||B==="")&&(et=!1);et&&(D.diagnostics={runnable:q,programLog:I,vertexShader:{log:H,prefix:g},fragmentShader:{log:B,prefix:p}})}s.deleteShader(M),s.deleteShader(w),y=new cc(s,_),T=CL(s,_)}let y;this.getUniforms=function(){return y===void 0&&E(this),y};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,vL)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xL++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}var WL=0,zv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new Vv(t),n.set(t,i)),i}},Vv=class{constructor(t){this.id=WL++,this.code=t,this.usedTimes=0}};function XL(e){return e===Pr||e===ih||e===sh}function qL(e,t,n,i,s,a){let r=new Vu,o=new zv,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,T,R,D,L,V){let X=D.fog,I=L.geometry,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,B=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=t.get(y.envMap||H,B),et=q&&q.mapping===Qu?q.image.height:null,ot=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Nt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let at=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,mt=at!==void 0?at.length:0,Qt=0;I.morphAttributes.position!==void 0&&(Qt=1),I.morphAttributes.normal!==void 0&&(Qt=2),I.morphAttributes.color!==void 0&&(Qt=3);let ee,Gt,Q,ft;if(ot){let Tt=Ws[ot];ee=Tt.vertexShader,Gt=Tt.fragmentShader}else{ee=y.vertexShader,Gt=y.fragmentShader;let Tt=o.getVertexShaderStage(y),De=o.getFragmentShaderStage(y);o.update(y,Tt,De),Q=Tt.id,ft=De.id}let rt=e.getRenderTarget(),Pt=e.state.buffers.depth.getReversed(),Ft=L.isInstancedMesh===!0,Ut=L.isBatchedMesh===!0,we=!!y.map,Lt=!!y.matcap,Bt=!!q,Jt=!!y.aoMap,jt=!!y.lightMap,Be=!!y.bumpMap&&y.wireframe===!1,xe=!!y.normalMap,Ke=!!y.displacementMap,Qe=!!y.emissiveMap,de=!!y.metalnessMap,Re=!!y.roughnessMap,N=y.anisotropy>0,pn=y.clearcoat>0,le=y.dispersion>0,C=y.iridescence>0,b=y.sheen>0,O=y.transmission>0,k=N&&!!y.anisotropyMap,Z=pn&&!!y.clearcoatMap,lt=pn&&!!y.clearcoatNormalMap,dt=pn&&!!y.clearcoatRoughnessMap,J=C&&!!y.iridescenceMap,j=C&&!!y.iridescenceThicknessMap,ut=b&&!!y.sheenColorMap,St=b&&!!y.sheenRoughnessMap,it=!!y.specularMap,ct=!!y.specularColorMap,Rt=!!y.specularIntensityMap,Dt=O&&!!y.transmissionMap,zt=O&&!!y.thicknessMap,U=!!y.gradientMap,ht=!!y.alphaMap,K=y.alphaTest>0,pt=!!y.alphaHash,vt=!!y.extensions,nt=gs;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(nt=e.toneMapping);let At={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:ee,fragmentShader:Gt,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:ft,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&L._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&L.instanceColor!==null,instancingMorph:Ft&&L.morphTexture!==null,outputColorSpace:rt===null?e.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:we,matcap:Lt,envMap:Bt,envMapMode:Bt&&q.mapping,envMapCubeUVHeight:et,aoMap:Jt,lightMap:jt,bumpMap:Be,normalMap:xe,displacementMap:Ke,emissiveMap:Qe,normalMapObjectSpace:xe&&y.normalMapType===UT,normalMapTangentSpace:xe&&y.normalMapType===Sv,packedNormalMap:xe&&y.normalMapType===Sv&&XL(y.normalMap.format),metalnessMap:de,roughnessMap:Re,anisotropy:N,anisotropyMap:k,clearcoat:pn,clearcoatMap:Z,clearcoatNormalMap:lt,clearcoatRoughnessMap:dt,dispersion:le,iridescence:C,iridescenceMap:J,iridescenceThicknessMap:j,sheen:b,sheenColorMap:ut,sheenRoughnessMap:St,specularMap:it,specularColorMap:ct,specularIntensityMap:Rt,transmission:O,transmissionMap:Dt,thicknessMap:zt,gradientMap:U,opaque:y.transparent===!1&&y.blending===bo&&y.alphaToCoverage===!1,alphaMap:ht,alphaTest:K,alphaHash:pt,combine:y.combine,mapUv:we&&m(y.map.channel),aoMapUv:Jt&&m(y.aoMap.channel),lightMapUv:jt&&m(y.lightMap.channel),bumpMapUv:Be&&m(y.bumpMap.channel),normalMapUv:xe&&m(y.normalMap.channel),displacementMapUv:Ke&&m(y.displacementMap.channel),emissiveMapUv:Qe&&m(y.emissiveMap.channel),metalnessMapUv:de&&m(y.metalnessMap.channel),roughnessMapUv:Re&&m(y.roughnessMap.channel),anisotropyMapUv:k&&m(y.anisotropyMap.channel),clearcoatMapUv:Z&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:lt&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:j&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(y.sheenRoughnessMap.channel),specularMapUv:it&&m(y.specularMap.channel),specularColorMapUv:ct&&m(y.specularColorMap.channel),specularIntensityMapUv:Rt&&m(y.specularIntensityMap.channel),transmissionMapUv:Dt&&m(y.transmissionMap.channel),thicknessMapUv:zt&&m(y.thicknessMap.channel),alphaMapUv:ht&&m(y.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xe||N),vertexNormals:!!I.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(we||ht),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||I.attributes.normal===void 0&&xe===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Qt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:nt,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&ie.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:Qe&&y.emissiveMap.isVideoTexture===!0&&ie.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zs,flipSided:y.side===Yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&y.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return At.vertexUv1s=l.has(1),At.vertexUv2s=l.has(2),At.vertexUv3s=l.has(3),l.clear(),At}function g(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)T.push(R),T.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(T,y),v(T,y),T.push(e.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function p(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){r.disableAll(),T.instancing&&r.enable(0),T.instancingColor&&r.enable(1),T.instancingMorph&&r.enable(2),T.matcap&&r.enable(3),T.envMap&&r.enable(4),T.normalMapObjectSpace&&r.enable(5),T.normalMapTangentSpace&&r.enable(6),T.clearcoat&&r.enable(7),T.iridescence&&r.enable(8),T.alphaTest&&r.enable(9),T.vertexColors&&r.enable(10),T.vertexAlphas&&r.enable(11),T.vertexUv1s&&r.enable(12),T.vertexUv2s&&r.enable(13),T.vertexUv3s&&r.enable(14),T.vertexTangents&&r.enable(15),T.anisotropy&&r.enable(16),T.alphaHash&&r.enable(17),T.batching&&r.enable(18),T.dispersion&&r.enable(19),T.batchingColor&&r.enable(20),T.gradientMap&&r.enable(21),T.packedNormalMap&&r.enable(22),T.vertexNormals&&r.enable(23),y.push(r.mask),r.disableAll(),T.fog&&r.enable(0),T.useFog&&r.enable(1),T.flatShading&&r.enable(2),T.logarithmicDepthBuffer&&r.enable(3),T.reversedDepthBuffer&&r.enable(4),T.skinning&&r.enable(5),T.morphTargets&&r.enable(6),T.morphNormals&&r.enable(7),T.morphColors&&r.enable(8),T.premultipliedAlpha&&r.enable(9),T.shadowMapEnabled&&r.enable(10),T.doubleSided&&r.enable(11),T.flipSided&&r.enable(12),T.useDepthPacking&&r.enable(13),T.dithering&&r.enable(14),T.transmission&&r.enable(15),T.sheen&&r.enable(16),T.opaque&&r.enable(17),T.pointsUvs&&r.enable(18),T.decodeVideoTexture&&r.enable(19),T.decodeVideoTextureEmissive&&r.enable(20),T.alphaToCoverage&&r.enable(21),T.numLightProbeGrids>0&&r.enable(22),T.hasPositionAttribute&&r.enable(23),y.push(r.mask)}function S(y){let T=h[y.type],R;if(T){let D=Ws[T];R=kT.clone(D.uniforms)}else R=y.uniforms;return R}function x(y,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new kL(e,T,y,s),c.push(R),u.set(T,R)),R}function M(y){if(--y.usedTimes===0){let T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:x,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:E}}function YL(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function ZL(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function cE(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function uE(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,m,_,g,p){let v=e[t];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,materialVariant:r(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},e[t]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.materialVariant=r(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=g,v.group=p),t++,v}function l(f,h,m,_,g,p){let v=o(f,h,m,_,g,p);m.transmission>0?i.push(v):m.transparent===!0?s.push(v):n.push(v)}function c(f,h,m,_,g,p){let v=o(f,h,m,_,g,p);m.transmission>0?i.unshift(v):m.transparent===!0?s.unshift(v):n.unshift(v)}function u(f,h,m){n.length>1&&n.sort(f||ZL),i.length>1&&i.sort(h||cE),s.length>1&&s.sort(h||cE),m&&(n.reverse(),i.reverse(),s.reverse())}function d(){for(let f=t,h=e.length;f<h;f++){let m=e[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:d,sort:u}}function JL(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new uE,e.set(i,[r])):s>=a.length?(r=new uE,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function KL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new W,color:new Kt};break;case"SpotLight":n={position:new W,direction:new W,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":n={color:new Kt,position:new W,halfWidth:new W,halfHeight:new W};break}return e[t.id]=n,n}}}function QL(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var jL=0;function $L(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function tN(e){let t=new KL,n=QL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);let s=new W,a=new tn,r=new tn;function o(c){let u=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,m=0,_=0,g=0,p=0,v=0,S=0,x=0,M=0,w=0,E=0;c.sort($L);for(let T=0,R=c.length;T<R;T++){let D=c[T],L=D.color,V=D.intensity,X=D.distance,I=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Pr?I=D.shadow.map.texture:I=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=L.r*V,d+=L.g*V,f+=L.b*V;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],V);E++}else if(D.isDirectionalLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let B=D.shadow,q=n.get(D);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=I,i.directionalShadowMatrix[h]=D.shadow.matrix,v++}i.directional[h]=H,h++}else if(D.isSpotLight){let H=t.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(L).multiplyScalar(V),H.distance=X,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[_]=H;let B=D.shadow;if(D.map&&(i.spotLightMap[M]=D.map,M++,B.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[_]=B.matrix,D.castShadow){let q=n.get(D);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=I,x++}_++}else if(D.isRectAreaLight){let H=t.get(D);H.color.copy(L).multiplyScalar(V),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=H,g++}else if(D.isPointLight){let H=t.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){let B=D.shadow,q=n.get(D);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=I,i.pointShadowMatrix[m]=D.shadow.matrix,S++}i.point[m]=H,m++}else if(D.isHemisphereLight){let H=t.get(D);H.skyColor.copy(D.color).multiplyScalar(V),H.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[p]=H,p++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let y=i.hash;(y.directionalLength!==h||y.pointLength!==m||y.spotLength!==_||y.rectAreaLength!==g||y.hemiLength!==p||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==x||y.numSpotMaps!==M||y.numLightProbes!==E)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+M-w,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,y.directionalLength=h,y.pointLength=m,y.spotLength=_,y.rectAreaLength=g,y.hemiLength=p,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=x,y.numSpotMaps=M,y.numLightProbes=E,i.version=jL++)}function l(c,u){let d=0,f=0,h=0,m=0,_=0,g=u.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let S=c[p];if(S.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(S.isSpotLight){let x=i.spot[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),h++}else if(S.isRectAreaLight){let x=i.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),r.identity(),a.copy(S.matrixWorld),a.premultiply(g),r.extractRotation(a),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(r),x.halfHeight.applyMatrix4(r),m++}else if(S.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function hE(e){let t=new tN(e),n=[],i=[],s=[];function a(f){d.camera=f,n.length=0,i.length=0,s.length=0}function r(f){n.push(f)}function o(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(n)}function u(f){t.setupView(n,f)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function eN(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new hE(e),t.set(s,[o])):a>=r.length?(o=new hE(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var nN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sN=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],aN=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],fE=new tn,oh=new W,Nv=new W;function rN(e,t,n){let i=new Xu,s=new Ht,a=new Ht,r=new se,o=new tp,l=new ep,c={},u=n.maxTextureSize,d={[Ea]:Yn,[Yn]:Ea,[zs]:zs},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:nN,fragmentShader:iN}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let m=new Bs;m.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Un(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let p=this.type;this.render=function(w,E,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===lT&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ku);let T=e.getRenderTarget(),R=e.getActiveCubeFace(),D=e.getActiveMipmapLevel(),L=e.state;L.setBlending(Vs),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let V=p!==this.type;V&&E.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(I=>I.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,I=w.length;X<I;X++){let H=w[X],B=H.shadow;if(B===void 0){Nt("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let q=B.getFrameExtents();s.multiply(q),a.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/q.x),s.x=a.x*q.x,B.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/q.y),s.y=a.y*q.y,B.mapSize.y=a.y));let et=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=et,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ac){if(H.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ri(s.x,s.y,{format:Pr,type:Gs,minFilter:me,magFilter:me,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new Aa(s.x,s.y,vs),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=Ps,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Sn,B.map.depthTexture.magFilter=Sn}else H.isPointLight?(B.map=new sm(s.x),B.map.depthTexture=new jd(s.x,_s)):(B.map=new Ri(s.x,s.y),B.map.depthTexture=new Aa(s.x,s.y,_s)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=Ps,this.type===Ku?(B.map.depthTexture.compareFunction=et?tm:$p,B.map.depthTexture.minFilter=me,B.map.depthTexture.magFilter=me):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Sn,B.map.depthTexture.magFilter=Sn);B.camera.updateProjectionMatrix()}let ot=B.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<ot;at++){if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,at),e.clear();else{at===0&&(e.setRenderTarget(B.map),e.clear());let mt=B.getViewport(at);r.set(a.x*mt.x,a.y*mt.y,a.x*mt.z,a.y*mt.w),L.viewport(r)}if(H.isPointLight){let mt=B.camera,Qt=B.matrix,ee=H.distance||mt.far;ee!==mt.far&&(mt.far=ee,mt.updateProjectionMatrix()),oh.setFromMatrixPosition(H.matrixWorld),mt.position.copy(oh),Nv.copy(mt.position),Nv.add(sN[at]),mt.up.copy(aN[at]),mt.lookAt(Nv),mt.updateMatrixWorld(),Qt.makeTranslation(-oh.x,-oh.y,-oh.z),fE.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(fE,mt.coordinateSystem,mt.reversedDepth)}else B.updateMatrices(H);i=B.getFrustum(),x(E,y,B.camera,H,this.type)}B.isPointLightShadow!==!0&&this.type===ac&&v(B,y),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,e.setRenderTarget(T,R,D)};function v(w,E){let y=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ri(s.x,s.y,{format:Pr,type:Gs})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(E,null,y,f,_,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(E,null,y,h,_,null)}function S(w,E,y,T){let R=null,D=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=y.isPointLight===!0?l:o,e.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let L=R.uuid,V=E.uuid,X=c[L];X===void 0&&(X={},c[L]=X);let I=X[V];I===void 0&&(I=R.clone(),X[V]=I,E.addEventListener("dispose",M)),R=I}if(R.visible=E.visible,R.wireframe=E.wireframe,T===ac?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:d[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=e.properties.get(R);L.light=y}return R}function x(w,E,y,T,R){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===ac)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let V=t.update(w),X=w.material;if(Array.isArray(X)){let I=V.groups;for(let H=0,B=I.length;H<B;H++){let q=I[H],et=X[q.materialIndex];if(et&&et.visible){let ot=S(w,et,T,R);w.onBeforeShadow(e,w,E,y,V,ot,q),e.renderBufferDirect(y,null,V,ot,w,q),w.onAfterShadow(e,w,E,y,V,ot,q)}}}else if(X.visible){let I=S(w,X,T,R);w.onBeforeShadow(e,w,E,y,V,I,null),e.renderBufferDirect(y,null,V,I,w,null),w.onAfterShadow(e,w,E,y,V,I,null)}}let L=w.children;for(let V=0,X=L.length;V<X;V++)x(L[V],E,y,T,R)}function M(w){w.target.removeEventListener("dispose",M);for(let y in c){let T=c[y],R=w.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function oN(e,t){function n(){let U=!1,ht=new se,K=null,pt=new se(0,0,0,0);return{setMask:function(vt){K!==vt&&!U&&(e.colorMask(vt,vt,vt,vt),K=vt)},setLocked:function(vt){U=vt},setClear:function(vt,nt,At,Tt,De){De===!0&&(vt*=Tt,nt*=Tt,At*=Tt),ht.set(vt,nt,At,Tt),pt.equals(ht)===!1&&(e.clearColor(vt,nt,At,Tt),pt.copy(ht))},reset:function(){U=!1,K=null,pt.set(-1,0,0,0)}}}function i(){let U=!1,ht=!1,K=null,pt=null,vt=null;return{setReversed:function(nt){if(ht!==nt){let At=t.get("EXT_clip_control");nt?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),ht=nt;let Tt=vt;vt=null,this.setClear(Tt)}},getReversed:function(){return ht},setTest:function(nt){nt?rt(e.DEPTH_TEST):Pt(e.DEPTH_TEST)},setMask:function(nt){K!==nt&&!U&&(e.depthMask(nt),K=nt)},setFunc:function(nt){if(ht&&(nt=HT[nt]),pt!==nt){switch(nt){case Bd:e.depthFunc(e.NEVER);break;case Fd:e.depthFunc(e.ALWAYS);break;case zd:e.depthFunc(e.LESS);break;case To:e.depthFunc(e.LEQUAL);break;case Vd:e.depthFunc(e.EQUAL);break;case Hd:e.depthFunc(e.GEQUAL);break;case Gd:e.depthFunc(e.GREATER);break;case kd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pt=nt}},setLocked:function(nt){U=nt},setClear:function(nt){vt!==nt&&(vt=nt,ht&&(nt=1-nt),e.clearDepth(nt))},reset:function(){U=!1,K=null,pt=null,vt=null,ht=!1}}}function s(){let U=!1,ht=null,K=null,pt=null,vt=null,nt=null,At=null,Tt=null,De=null;return{setTest:function(ye){U||(ye?rt(e.STENCIL_TEST):Pt(e.STENCIL_TEST))},setMask:function(ye){ht!==ye&&!U&&(e.stencilMask(ye),ht=ye)},setFunc:function(ye,Kn,Bi){(K!==ye||pt!==Kn||vt!==Bi)&&(e.stencilFunc(ye,Kn,Bi),K=ye,pt=Kn,vt=Bi)},setOp:function(ye,Kn,Bi){(nt!==ye||At!==Kn||Tt!==Bi)&&(e.stencilOp(ye,Kn,Bi),nt=ye,At=Kn,Tt=Bi)},setLocked:function(ye){U=ye},setClear:function(ye){De!==ye&&(e.clearStencil(ye),De=ye)},reset:function(){U=!1,ht=null,K=null,pt=null,vt=null,nt=null,At=null,Tt=null,De=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f={},h=new WeakMap,m=[],_=null,g=!1,p=null,v=null,S=null,x=null,M=null,w=null,E=null,y=new Kt(0,0,0),T=0,R=!1,D=null,L=null,V=null,X=null,I=null,H=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,q=0,et=e.getParameter(e.VERSION);et.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(et)[1]),B=q>=1):et.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),B=q>=2);let ot=null,at={},mt=e.getParameter(e.SCISSOR_BOX),Qt=e.getParameter(e.VIEWPORT),ee=new se().fromArray(mt),Gt=new se().fromArray(Qt);function Q(U,ht,K,pt){let vt=new Uint8Array(4),nt=e.createTexture();e.bindTexture(U,nt),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let At=0;At<K;At++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ht,0,e.RGBA,1,1,pt,0,e.RGBA,e.UNSIGNED_BYTE,vt):e.texImage2D(ht+At,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,vt);return nt}let ft={};ft[e.TEXTURE_2D]=Q(e.TEXTURE_2D,e.TEXTURE_2D,1),ft[e.TEXTURE_CUBE_MAP]=Q(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[e.TEXTURE_2D_ARRAY]=Q(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ft[e.TEXTURE_3D]=Q(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),rt(e.DEPTH_TEST),r.setFunc(To),Be(!1),xe(ev),rt(e.CULL_FACE),Jt(Vs);function rt(U){u[U]!==!0&&(e.enable(U),u[U]=!0)}function Pt(U){u[U]!==!1&&(e.disable(U),u[U]=!1)}function Ft(U,ht){return f[U]!==ht?(e.bindFramebuffer(U,ht),f[U]=ht,U===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=ht),U===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ut(U,ht){let K=m,pt=!1;if(U){K=h.get(ht),K===void 0&&(K=[],h.set(ht,K));let vt=U.textures;if(K.length!==vt.length||K[0]!==e.COLOR_ATTACHMENT0){for(let nt=0,At=vt.length;nt<At;nt++)K[nt]=e.COLOR_ATTACHMENT0+nt;K.length=vt.length,pt=!0}}else K[0]!==e.BACK&&(K[0]=e.BACK,pt=!0);pt&&e.drawBuffers(K)}function we(U){return _!==U?(e.useProgram(U),_=U,!0):!1}let Lt={[Ar]:e.FUNC_ADD,[uT]:e.FUNC_SUBTRACT,[hT]:e.FUNC_REVERSE_SUBTRACT};Lt[fT]=e.MIN,Lt[dT]=e.MAX;let Bt={[pT]:e.ZERO,[mT]:e.ONE,[gT]:e.SRC_COLOR,[Od]:e.SRC_ALPHA,[MT]:e.SRC_ALPHA_SATURATE,[yT]:e.DST_COLOR,[vT]:e.DST_ALPHA,[_T]:e.ONE_MINUS_SRC_COLOR,[Id]:e.ONE_MINUS_SRC_ALPHA,[ST]:e.ONE_MINUS_DST_COLOR,[xT]:e.ONE_MINUS_DST_ALPHA,[bT]:e.CONSTANT_COLOR,[TT]:e.ONE_MINUS_CONSTANT_COLOR,[ET]:e.CONSTANT_ALPHA,[AT]:e.ONE_MINUS_CONSTANT_ALPHA};function Jt(U,ht,K,pt,vt,nt,At,Tt,De,ye){if(U===Vs){g===!0&&(Pt(e.BLEND),g=!1);return}if(g===!1&&(rt(e.BLEND),g=!0),U!==cT){if(U!==p||ye!==R){if((v!==Ar||M!==Ar)&&(e.blendEquation(e.FUNC_ADD),v=Ar,M=Ar),ye)switch(U){case bo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case nv:e.blendFunc(e.ONE,e.ONE);break;case iv:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case sv:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ot("WebGLState: Invalid blending: ",U);break}else switch(U){case bo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case nv:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case iv:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sv:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",U);break}S=null,x=null,w=null,E=null,y.set(0,0,0),T=0,p=U,R=ye}return}vt=vt||ht,nt=nt||K,At=At||pt,(ht!==v||vt!==M)&&(e.blendEquationSeparate(Lt[ht],Lt[vt]),v=ht,M=vt),(K!==S||pt!==x||nt!==w||At!==E)&&(e.blendFuncSeparate(Bt[K],Bt[pt],Bt[nt],Bt[At]),S=K,x=pt,w=nt,E=At),(Tt.equals(y)===!1||De!==T)&&(e.blendColor(Tt.r,Tt.g,Tt.b,De),y.copy(Tt),T=De),p=U,R=!1}function jt(U,ht){U.side===zs?Pt(e.CULL_FACE):rt(e.CULL_FACE);let K=U.side===Yn;ht&&(K=!K),Be(K),U.blending===bo&&U.transparent===!1?Jt(Vs):Jt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let pt=U.stencilWrite;o.setTest(pt),pt&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Qe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(e.SAMPLE_ALPHA_TO_COVERAGE):Pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Be(U){D!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),D=U)}function xe(U){U!==rT?(rt(e.CULL_FACE),U!==L&&(U===ev?e.cullFace(e.BACK):U===oT?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Pt(e.CULL_FACE),L=U}function Ke(U){U!==V&&(B&&e.lineWidth(U),V=U)}function Qe(U,ht,K){U?(rt(e.POLYGON_OFFSET_FILL),(X!==ht||I!==K)&&(X=ht,I=K,r.getReversed()&&(ht=-ht),e.polygonOffset(ht,K))):Pt(e.POLYGON_OFFSET_FILL)}function de(U){U?rt(e.SCISSOR_TEST):Pt(e.SCISSOR_TEST)}function Re(U){U===void 0&&(U=e.TEXTURE0+H-1),ot!==U&&(e.activeTexture(U),ot=U)}function N(U,ht,K){K===void 0&&(ot===null?K=e.TEXTURE0+H-1:K=ot);let pt=at[K];pt===void 0&&(pt={type:void 0,texture:void 0},at[K]=pt),(pt.type!==U||pt.texture!==ht)&&(ot!==K&&(e.activeTexture(K),ot=K),e.bindTexture(U,ht||ft[U]),pt.type=U,pt.texture=ht)}function pn(){let U=at[ot];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function le(){try{e.compressedTexImage2D(...arguments)}catch(U){Ot("WebGLState:",U)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(U){Ot("WebGLState:",U)}}function b(){try{e.texSubImage2D(...arguments)}catch(U){Ot("WebGLState:",U)}}function O(){try{e.texSubImage3D(...arguments)}catch(U){Ot("WebGLState:",U)}}function k(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Ot("WebGLState:",U)}}function Z(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Ot("WebGLState:",U)}}function lt(){try{e.texStorage2D(...arguments)}catch(U){Ot("WebGLState:",U)}}function dt(){try{e.texStorage3D(...arguments)}catch(U){Ot("WebGLState:",U)}}function J(){try{e.texImage2D(...arguments)}catch(U){Ot("WebGLState:",U)}}function j(){try{e.texImage3D(...arguments)}catch(U){Ot("WebGLState:",U)}}function ut(U){return d[U]!==void 0?d[U]:e.getParameter(U)}function St(U,ht){d[U]!==ht&&(e.pixelStorei(U,ht),d[U]=ht)}function it(U){ee.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function ct(U){Gt.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),Gt.copy(U))}function Rt(U,ht){let K=c.get(ht);K===void 0&&(K=new WeakMap,c.set(ht,K));let pt=K.get(U);pt===void 0&&(pt=e.getUniformBlockIndex(ht,U.name),K.set(U,pt))}function Dt(U,ht){let pt=c.get(ht).get(U);l.get(ht)!==pt&&(e.uniformBlockBinding(ht,pt,U.__bindingPointIndex),l.set(ht,pt))}function zt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ot=null,at={},f={},h=new WeakMap,m=[],_=null,g=!1,p=null,v=null,S=null,x=null,M=null,w=null,E=null,y=new Kt(0,0,0),T=0,R=!1,D=null,L=null,V=null,X=null,I=null,ee.set(0,0,e.canvas.width,e.canvas.height),Gt.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:rt,disable:Pt,bindFramebuffer:Ft,drawBuffers:Ut,useProgram:we,setBlending:Jt,setMaterial:jt,setFlipSided:Be,setCullFace:xe,setLineWidth:Ke,setPolygonOffset:Qe,setScissorTest:de,activeTexture:Re,bindTexture:N,unbindTexture:pn,compressedTexImage2D:le,compressedTexImage3D:C,texImage2D:J,texImage3D:j,pixelStorei:St,getParameter:ut,updateUBOMapping:Rt,uniformBlockBinding:Dt,texStorage2D:lt,texStorage3D:dt,texSubImage2D:b,texSubImage3D:O,compressedTexSubImage2D:k,compressedTexSubImage3D:Z,scissor:it,viewport:ct,reset:zt}}function lN(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,u=new WeakMap,d=new Set,f,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return m?new OffscreenCanvas(C,b):Fu("canvas")}function g(C,b,O){let k=1,Z=le(C);if((Z.width>O||Z.height>O)&&(k=O/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let lt=Math.floor(k*Z.width),dt=Math.floor(k*Z.height);f===void 0&&(f=_(lt,dt));let J=b?_(lt,dt):f;return J.width=lt,J.height=dt,J.getContext("2d").drawImage(C,0,0,lt,dt),Nt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+lt+"x"+dt+")."),J}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function v(C){e.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(C,b,O,k,Z,lt=!1){if(C!==null){if(e[C]!==void 0)return e[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let dt;k&&(dt=t.get("EXT_texture_norm16"),dt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=b;if(b===e.RED&&(O===e.FLOAT&&(J=e.R32F),O===e.HALF_FLOAT&&(J=e.R16F),O===e.UNSIGNED_BYTE&&(J=e.R8),O===e.UNSIGNED_SHORT&&dt&&(J=dt.R16_EXT),O===e.SHORT&&dt&&(J=dt.R16_SNORM_EXT)),b===e.RED_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.R8UI),O===e.UNSIGNED_SHORT&&(J=e.R16UI),O===e.UNSIGNED_INT&&(J=e.R32UI),O===e.BYTE&&(J=e.R8I),O===e.SHORT&&(J=e.R16I),O===e.INT&&(J=e.R32I)),b===e.RG&&(O===e.FLOAT&&(J=e.RG32F),O===e.HALF_FLOAT&&(J=e.RG16F),O===e.UNSIGNED_BYTE&&(J=e.RG8),O===e.UNSIGNED_SHORT&&dt&&(J=dt.RG16_EXT),O===e.SHORT&&dt&&(J=dt.RG16_SNORM_EXT)),b===e.RG_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RG8UI),O===e.UNSIGNED_SHORT&&(J=e.RG16UI),O===e.UNSIGNED_INT&&(J=e.RG32UI),O===e.BYTE&&(J=e.RG8I),O===e.SHORT&&(J=e.RG16I),O===e.INT&&(J=e.RG32I)),b===e.RGB_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RGB8UI),O===e.UNSIGNED_SHORT&&(J=e.RGB16UI),O===e.UNSIGNED_INT&&(J=e.RGB32UI),O===e.BYTE&&(J=e.RGB8I),O===e.SHORT&&(J=e.RGB16I),O===e.INT&&(J=e.RGB32I)),b===e.RGBA_INTEGER&&(O===e.UNSIGNED_BYTE&&(J=e.RGBA8UI),O===e.UNSIGNED_SHORT&&(J=e.RGBA16UI),O===e.UNSIGNED_INT&&(J=e.RGBA32UI),O===e.BYTE&&(J=e.RGBA8I),O===e.SHORT&&(J=e.RGBA16I),O===e.INT&&(J=e.RGBA32I)),b===e.RGB&&(O===e.UNSIGNED_SHORT&&dt&&(J=dt.RGB16_EXT),O===e.SHORT&&dt&&(J=dt.RGB16_SNORM_EXT),O===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),O===e.UNSIGNED_INT_10F_11F_11F_REV&&(J=e.R11F_G11F_B10F)),b===e.RGBA){let j=lt?Iu:ie.getTransfer(Z);O===e.FLOAT&&(J=e.RGBA32F),O===e.HALF_FLOAT&&(J=e.RGBA16F),O===e.UNSIGNED_BYTE&&(J=j===pe?e.SRGB8_ALPHA8:e.RGBA8),O===e.UNSIGNED_SHORT&&dt&&(J=dt.RGBA16_EXT),O===e.SHORT&&dt&&(J=dt.RGBA16_SNORM_EXT),O===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),O===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(C,b){let O;return C?b===null||b===_s||b===oc?O=e.DEPTH24_STENCIL8:b===vs?O=e.DEPTH32F_STENCIL8:b===rc&&(O=e.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===_s||b===oc?O=e.DEPTH_COMPONENT24:b===vs?O=e.DEPTH_COMPONENT32F:b===rc&&(O=e.DEPTH_COMPONENT16),O}function w(C,b){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Sn&&C.minFilter!==me?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function E(C){let b=C.target;b.removeEventListener("dispose",E),T(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&d.delete(b)}function y(C){let b=C.target;b.removeEventListener("dispose",y),D(b)}function T(C){let b=i.get(C);if(b.__webglInit===void 0)return;let O=C.source,k=h.get(O);if(k){let Z=k[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(C),Object.keys(k).length===0&&h.delete(O)}i.remove(C)}function R(C){let b=i.get(C);e.deleteTexture(b.__webglTexture);let O=C.source,k=h.get(O);delete k[b.__cacheKey],r.memory.textures--}function D(C){let b=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(b.__webglFramebuffer[k]))for(let Z=0;Z<b.__webglFramebuffer[k].length;Z++)e.deleteFramebuffer(b.__webglFramebuffer[k][Z]);else e.deleteFramebuffer(b.__webglFramebuffer[k]);b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer[k])}else{if(Array.isArray(b.__webglFramebuffer))for(let k=0;k<b.__webglFramebuffer.length;k++)e.deleteFramebuffer(b.__webglFramebuffer[k]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&e.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let k=0;k<b.__webglColorRenderbuffer.length;k++)b.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(b.__webglColorRenderbuffer[k]);b.__webglDepthRenderbuffer&&e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let O=C.textures;for(let k=0,Z=O.length;k<Z;k++){let lt=i.get(O[k]);lt.__webglTexture&&(e.deleteTexture(lt.__webglTexture),r.memory.textures--),i.remove(O[k])}i.remove(C)}let L=0;function V(){L=0}function X(){return L}function I(C){L=C}function H(){let C=L;return C>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function B(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function q(C,b){let O=i.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let k=C.image;if(k===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(O,C,b);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,O.__webglTexture,e.TEXTURE0+b)}function et(C,b){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Pt(O,C,b);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,O.__webglTexture,e.TEXTURE0+b)}function ot(C,b){let O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Pt(O,C,b);return}n.bindTexture(e.TEXTURE_3D,O.__webglTexture,e.TEXTURE0+b)}function at(C,b){let O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){Ft(O,C,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,O.__webglTexture,e.TEXTURE0+b)}let mt={[Wd]:e.REPEAT,[Ns]:e.CLAMP_TO_EDGE,[Xd]:e.MIRRORED_REPEAT},Qt={[Sn]:e.NEAREST,[RT]:e.NEAREST_MIPMAP_NEAREST,[ju]:e.NEAREST_MIPMAP_LINEAR,[me]:e.LINEAR,[gp]:e.LINEAR_MIPMAP_NEAREST,[Hs]:e.LINEAR_MIPMAP_LINEAR},ee={[LT]:e.NEVER,[BT]:e.ALWAYS,[NT]:e.LESS,[$p]:e.LEQUAL,[PT]:e.EQUAL,[tm]:e.GEQUAL,[OT]:e.GREATER,[IT]:e.NOTEQUAL};function Gt(C,b){if(b.type===vs&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===me||b.magFilter===gp||b.magFilter===ju||b.magFilter===Hs||b.minFilter===me||b.minFilter===gp||b.minFilter===ju||b.minFilter===Hs)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,mt[b.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,mt[b.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,mt[b.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,Qt[b.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,Qt[b.minFilter]),b.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,ee[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Sn||b.minFilter!==ju&&b.minFilter!==Hs||b.type===vs&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Q(C,b){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",E));let k=b.source,Z=h.get(k);Z===void 0&&(Z={},h.set(k,Z));let lt=B(b);if(lt!==C.__cacheKey){Z[lt]===void 0&&(Z[lt]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,O=!0),Z[lt].usedTimes++;let dt=Z[C.__cacheKey];dt!==void 0&&(Z[C.__cacheKey].usedTimes--,dt.usedTimes===0&&R(b)),C.__cacheKey=lt,C.__webglTexture=Z[lt].texture}return O}function ft(C,b,O){return Math.floor(Math.floor(C/O)/b)}function rt(C,b,O,k){let lt=C.updateRanges;if(lt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,O,k,b.data);else{lt.sort((St,it)=>St.start-it.start);let dt=0;for(let St=1;St<lt.length;St++){let it=lt[dt],ct=lt[St],Rt=it.start+it.count,Dt=ft(ct.start,b.width,4),zt=ft(it.start,b.width,4);ct.start<=Rt+1&&Dt===zt&&ft(ct.start+ct.count-1,b.width,4)===Dt?it.count=Math.max(it.count,ct.start+ct.count-it.start):(++dt,lt[dt]=ct)}lt.length=dt+1;let J=n.getParameter(e.UNPACK_ROW_LENGTH),j=n.getParameter(e.UNPACK_SKIP_PIXELS),ut=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let St=0,it=lt.length;St<it;St++){let ct=lt[St],Rt=Math.floor(ct.start/4),Dt=Math.ceil(ct.count/4),zt=Rt%b.width,U=Math.floor(Rt/b.width),ht=Dt,K=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,zt),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,zt,U,ht,K,O,k,b.data)}C.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,J),n.pixelStorei(e.UNPACK_SKIP_PIXELS,j),n.pixelStorei(e.UNPACK_SKIP_ROWS,ut)}}function Pt(C,b,O){let k=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(k=e.TEXTURE_3D);let Z=Q(C,b),lt=b.source;n.bindTexture(k,C.__webglTexture,e.TEXTURE0+O);let dt=i.get(lt);if(lt.version!==dt.__version||Z===!0){if(n.activeTexture(e.TEXTURE0+O),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let K=ie.getPrimaries(ie.workingColorSpace),pt=b.colorSpace===Ln?null:ie.getPrimaries(b.colorSpace),vt=b.colorSpace===Ln||K===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}n.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment);let j=g(b.image,!1,s.maxTextureSize);j=pn(b,j);let ut=a.convert(b.format,b.colorSpace),St=a.convert(b.type),it=x(b.internalFormat,ut,St,b.normalized,b.colorSpace,b.isVideoTexture);Gt(k,b);let ct,Rt=b.mipmaps,Dt=b.isVideoTexture!==!0,zt=dt.__version===void 0||Z===!0,U=lt.dataReady,ht=w(b,j);if(b.isDepthTexture)it=M(b.format===Nr,b.type),zt&&(Dt?n.texStorage2D(e.TEXTURE_2D,1,it,j.width,j.height):n.texImage2D(e.TEXTURE_2D,0,it,j.width,j.height,0,ut,St,null));else if(b.isDataTexture)if(Rt.length>0){Dt&&zt&&n.texStorage2D(e.TEXTURE_2D,ht,it,Rt[0].width,Rt[0].height);for(let K=0,pt=Rt.length;K<pt;K++)ct=Rt[K],Dt?U&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,ct.width,ct.height,ut,St,ct.data):n.texImage2D(e.TEXTURE_2D,K,it,ct.width,ct.height,0,ut,St,ct.data);b.generateMipmaps=!1}else Dt?(zt&&n.texStorage2D(e.TEXTURE_2D,ht,it,j.width,j.height),U&&rt(b,j,ut,St)):n.texImage2D(e.TEXTURE_2D,0,it,j.width,j.height,0,ut,St,j.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Dt&&zt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ht,it,Rt[0].width,Rt[0].height,j.depth);for(let K=0,pt=Rt.length;K<pt;K++)if(ct=Rt[K],b.format!==es)if(ut!==null)if(Dt){if(U)if(b.layerUpdates.size>0){let vt=wv(ct.width,ct.height,b.format,b.type);for(let nt of b.layerUpdates){let At=ct.data.subarray(nt*vt/ct.data.BYTES_PER_ELEMENT,(nt+1)*vt/ct.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,nt,ct.width,ct.height,1,ut,At)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,ct.width,ct.height,j.depth,ut,ct.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,K,it,ct.width,ct.height,j.depth,0,ct.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,K,0,0,0,ct.width,ct.height,j.depth,ut,St,ct.data):n.texImage3D(e.TEXTURE_2D_ARRAY,K,it,ct.width,ct.height,j.depth,0,ut,St,ct.data)}else{Dt&&zt&&n.texStorage2D(e.TEXTURE_2D,ht,it,Rt[0].width,Rt[0].height);for(let K=0,pt=Rt.length;K<pt;K++)ct=Rt[K],b.format!==es?ut!==null?Dt?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,K,0,0,ct.width,ct.height,ut,ct.data):n.compressedTexImage2D(e.TEXTURE_2D,K,it,ct.width,ct.height,0,ct.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?U&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,ct.width,ct.height,ut,St,ct.data):n.texImage2D(e.TEXTURE_2D,K,it,ct.width,ct.height,0,ut,St,ct.data)}else if(b.isDataArrayTexture)if(Dt){if(zt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ht,it,j.width,j.height,j.depth),U)if(b.layerUpdates.size>0){let K=wv(j.width,j.height,b.format,b.type);for(let pt of b.layerUpdates){let vt=j.data.subarray(pt*K/j.data.BYTES_PER_ELEMENT,(pt+1)*K/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,pt,j.width,j.height,1,ut,St,vt)}b.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ut,St,j.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,it,j.width,j.height,j.depth,0,ut,St,j.data);else if(b.isData3DTexture)Dt?(zt&&n.texStorage3D(e.TEXTURE_3D,ht,it,j.width,j.height,j.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ut,St,j.data)):n.texImage3D(e.TEXTURE_3D,0,it,j.width,j.height,j.depth,0,ut,St,j.data);else if(b.isFramebufferTexture){if(zt)if(Dt)n.texStorage2D(e.TEXTURE_2D,ht,it,j.width,j.height);else{let K=j.width,pt=j.height;for(let vt=0;vt<ht;vt++)n.texImage2D(e.TEXTURE_2D,vt,it,K,pt,0,ut,St,null),K>>=1,pt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in e){let K=e.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),j.parentNode!==K){K.appendChild(j),d.add(b),K.onpaint=pt=>{let vt=pt.changedElements;for(let nt of d)vt.includes(nt.image)&&(nt.needsUpdate=!0)},K.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,j);else{let vt=e.RGBA,nt=e.RGBA,At=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,vt,nt,At,j)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Dt&&zt){let K=le(Rt[0]);n.texStorage2D(e.TEXTURE_2D,ht,it,K.width,K.height)}for(let K=0,pt=Rt.length;K<pt;K++)ct=Rt[K],Dt?U&&n.texSubImage2D(e.TEXTURE_2D,K,0,0,ut,St,ct):n.texImage2D(e.TEXTURE_2D,K,it,ut,St,ct);b.generateMipmaps=!1}else if(Dt){if(zt){let K=le(j);n.texStorage2D(e.TEXTURE_2D,ht,it,K.width,K.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,St,j)}else n.texImage2D(e.TEXTURE_2D,0,it,ut,St,j);p(b)&&v(k),dt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ft(C,b,O){if(b.image.length!==6)return;let k=Q(C,b),Z=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+O);let lt=i.get(Z);if(Z.version!==lt.__version||k===!0){n.activeTexture(e.TEXTURE0+O);let dt=ie.getPrimaries(ie.workingColorSpace),J=b.colorSpace===Ln?null:ie.getPrimaries(b.colorSpace),j=b.colorSpace===Ln||dt===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ut=b.isCompressedTexture||b.image[0].isCompressedTexture,St=b.image[0]&&b.image[0].isDataTexture,it=[];for(let nt=0;nt<6;nt++)!ut&&!St?it[nt]=g(b.image[nt],!0,s.maxCubemapSize):it[nt]=St?b.image[nt].image:b.image[nt],it[nt]=pn(b,it[nt]);let ct=it[0],Rt=a.convert(b.format,b.colorSpace),Dt=a.convert(b.type),zt=x(b.internalFormat,Rt,Dt,b.normalized,b.colorSpace),U=b.isVideoTexture!==!0,ht=lt.__version===void 0||k===!0,K=Z.dataReady,pt=w(b,ct);Gt(e.TEXTURE_CUBE_MAP,b);let vt;if(ut){U&&ht&&n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,zt,ct.width,ct.height);for(let nt=0;nt<6;nt++){vt=it[nt].mipmaps;for(let At=0;At<vt.length;At++){let Tt=vt[At];b.format!==es?Rt!==null?U?K&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,Tt.width,Tt.height,Rt,Tt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,zt,Tt.width,Tt.height,0,Tt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,0,0,Tt.width,Tt.height,Rt,Dt,Tt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At,zt,Tt.width,Tt.height,0,Rt,Dt,Tt.data)}}}else{if(vt=b.mipmaps,U&&ht){vt.length>0&&pt++;let nt=le(it[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,pt,zt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(St){U?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,it[nt].width,it[nt].height,Rt,Dt,it[nt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,zt,it[nt].width,it[nt].height,0,Rt,Dt,it[nt].data);for(let At=0;At<vt.length;At++){let De=vt[At].image[nt].image;U?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,De.width,De.height,Rt,Dt,De.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,zt,De.width,De.height,0,Rt,Dt,De.data)}}else{U?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Rt,Dt,it[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,zt,Rt,Dt,it[nt]);for(let At=0;At<vt.length;At++){let Tt=vt[At];U?K&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,0,0,Rt,Dt,Tt.image[nt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+nt,At+1,zt,Rt,Dt,Tt.image[nt])}}}p(b)&&v(e.TEXTURE_CUBE_MAP),lt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ut(C,b,O,k,Z,lt){let dt=a.convert(O.format,O.colorSpace),J=a.convert(O.type),j=x(O.internalFormat,dt,J,O.normalized,O.colorSpace),ut=i.get(b),St=i.get(O);if(St.__renderTarget=b,!ut.__hasExternalTextures){let it=Math.max(1,b.width>>lt),ct=Math.max(1,b.height>>lt);Z===e.TEXTURE_3D||Z===e.TEXTURE_2D_ARRAY?n.texImage3D(Z,lt,j,it,ct,b.depth,0,dt,J,null):n.texImage2D(Z,lt,j,it,ct,0,dt,J,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),Re(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,Z,St.__webglTexture,0,de(b)):(Z===e.TEXTURE_2D||Z>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,Z,St.__webglTexture,lt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(C,b,O){if(e.bindRenderbuffer(e.RENDERBUFFER,C),b.depthBuffer){let k=b.depthTexture,Z=k&&k.isDepthTexture?k.type:null,lt=M(b.stencilBuffer,Z),dt=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Re(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(b),lt,b.width,b.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(b),lt,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,lt,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,dt,e.RENDERBUFFER,C)}else{let k=b.textures;for(let Z=0;Z<k.length;Z++){let lt=k[Z],dt=a.convert(lt.format,lt.colorSpace),J=a.convert(lt.type),j=x(lt.internalFormat,dt,J,lt.normalized,lt.colorSpace);Re(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,de(b),j,b.width,b.height):O?e.renderbufferStorageMultisample(e.RENDERBUFFER,de(b),j,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,j,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Lt(C,b,O){let k=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(b.depthTexture);if(Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),k){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,b.depthTexture.addEventListener("dispose",E)),Z.__webglTexture===void 0){Z.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture),Gt(e.TEXTURE_CUBE_MAP,b.depthTexture);let ut=a.convert(b.depthTexture.format),St=a.convert(b.depthTexture.type),it;b.depthTexture.format===Ps?it=e.DEPTH_COMPONENT24:b.depthTexture.format===Nr&&(it=e.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,it,b.width,b.height,0,ut,St,null)}}else q(b.depthTexture,0);let lt=Z.__webglTexture,dt=de(b),J=k?e.TEXTURE_CUBE_MAP_POSITIVE_X+O:e.TEXTURE_2D,j=b.depthTexture.format===Nr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ps)Re(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,J,lt,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,j,J,lt,0);else if(b.depthTexture.format===Nr)Re(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,j,J,lt,0,dt):e.framebufferTexture2D(e.FRAMEBUFFER,j,J,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Bt(C){let b=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let k=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),k){let Z=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),b.__depthDisposeCallback=Z}b.__boundDepthTexture=k}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(O)for(let k=0;k<6;k++)Lt(b.__webglFramebuffer[k],C,k);else{let k=C.texture.mipmaps;k&&k.length>0?Lt(b.__webglFramebuffer[0],C,0):Lt(b.__webglFramebuffer,C,0)}else if(O){b.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[k]),b.__webglDepthbuffer[k]===void 0)b.__webglDepthbuffer[k]=e.createRenderbuffer(),we(b.__webglDepthbuffer[k],C,!1);else{let Z=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,lt)}}else{let k=C.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),we(b.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,lt=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,lt),e.framebufferRenderbuffer(e.FRAMEBUFFER,Z,e.RENDERBUFFER,lt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Jt(C,b,O){let k=i.get(C);b!==void 0&&Ut(k.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),O!==void 0&&Bt(C)}function jt(C){let b=C.texture,O=i.get(C),k=i.get(b);C.addEventListener("dispose",y);let Z=C.textures,lt=C.isWebGLCubeRenderTarget===!0,dt=Z.length>1;if(dt||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=b.version,r.memory.textures++),lt){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let j=0;j<b.mipmaps.length;j++)O.__webglFramebuffer[J][j]=e.createFramebuffer()}else O.__webglFramebuffer[J]=e.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<b.mipmaps.length;J++)O.__webglFramebuffer[J]=e.createFramebuffer()}else O.__webglFramebuffer=e.createFramebuffer();if(dt)for(let J=0,j=Z.length;J<j;J++){let ut=i.get(Z[J]);ut.__webglTexture===void 0&&(ut.__webglTexture=e.createTexture(),r.memory.textures++)}if(C.samples>0&&Re(C)===!1){O.__webglMultisampledFramebuffer=e.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<Z.length;J++){let j=Z[J];O.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let ut=a.convert(j.format,j.colorSpace),St=a.convert(j.type),it=x(j.internalFormat,ut,St,j.normalized,j.colorSpace,C.isXRRenderTarget===!0),ct=de(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,ct,it,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,O.__webglColorRenderbuffer[J])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=e.createRenderbuffer(),we(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(lt){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Gt(e.TEXTURE_CUBE_MAP,b);for(let J=0;J<6;J++)if(b.mipmaps&&b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)Ut(O.__webglFramebuffer[J][j],C,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,j);else Ut(O.__webglFramebuffer[J],C,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(b)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(dt){for(let J=0,j=Z.length;J<j;J++){let ut=Z[J],St=i.get(ut),it=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,St.__webglTexture),Gt(it,ut),Ut(O.__webglFramebuffer,C,ut,e.COLOR_ATTACHMENT0+J,it,0),p(ut)&&v(it)}n.unbindTexture()}else{let J=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(J=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(J,k.__webglTexture),Gt(J,b),b.mipmaps&&b.mipmaps.length>0)for(let j=0;j<b.mipmaps.length;j++)Ut(O.__webglFramebuffer[j],C,b,e.COLOR_ATTACHMENT0,J,j);else Ut(O.__webglFramebuffer,C,b,e.COLOR_ATTACHMENT0,J,0);p(b)&&v(J),n.unbindTexture()}C.depthBuffer&&Bt(C)}function Be(C){let b=C.textures;for(let O=0,k=b.length;O<k;O++){let Z=b[O];if(p(Z)){let lt=S(C),dt=i.get(Z).__webglTexture;n.bindTexture(lt,dt),v(lt),n.unbindTexture()}}}let xe=[],Ke=[];function Qe(C){if(C.samples>0){if(Re(C)===!1){let b=C.textures,O=C.width,k=C.height,Z=e.COLOR_BUFFER_BIT,lt=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=i.get(C),J=b.length>1;if(J)for(let ut=0;ut<b.length;ut++)n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let j=C.texture.mipmaps;j&&j.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=e.STENCIL_BUFFER_BIT)),J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ut]);let St=i.get(b[ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,St,0)}e.blitFramebuffer(0,0,O,k,0,0,O,k,Z,e.NEAREST),l===!0&&(xe.length=0,Ke.length=0,xe.push(e.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.resolveDepthBuffer===!1&&(xe.push(lt),Ke.push(lt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ke)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let ut=0;ut<b.length;ut++){n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,dt.__webglColorRenderbuffer[ut]);let St=i.get(b[ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,dt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,St,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let b=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function de(C){return Math.min(s.maxSamples,C.samples)}function Re(C){let b=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function N(C){let b=r.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function pn(C,b){let O=C.colorSpace,k=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ou&&O!==Ln&&(ie.getTransfer(O)===pe?(k!==es||Z!==Ui)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",O)),b}function le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.getTextureUnits=X,this.setTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=et,this.setTexture3D=ot,this.setTextureCube=at,this.rebindTextures=Jt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function cN(e,t){function n(i,s=Ln){let a,r=ie.getTransfer(s);if(i===Ui)return e.UNSIGNED_BYTE;if(i===vp)return e.UNSIGNED_SHORT_4_4_4_4;if(i===xp)return e.UNSIGNED_SHORT_5_5_5_1;if(i===gv)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===_v)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===pv)return e.BYTE;if(i===mv)return e.SHORT;if(i===rc)return e.UNSIGNED_SHORT;if(i===_p)return e.INT;if(i===_s)return e.UNSIGNED_INT;if(i===vs)return e.FLOAT;if(i===Gs)return e.HALF_FLOAT;if(i===vv)return e.ALPHA;if(i===xv)return e.RGB;if(i===es)return e.RGBA;if(i===Ps)return e.DEPTH_COMPONENT;if(i===Nr)return e.DEPTH_STENCIL;if(i===yv)return e.RED;if(i===yp)return e.RED_INTEGER;if(i===Pr)return e.RG;if(i===Sp)return e.RG_INTEGER;if(i===Mp)return e.RGBA_INTEGER;if(i===$u||i===th||i===eh||i===nh)if(r===pe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===$u)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===th)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===$u)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===th)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bp||i===Tp||i===Ep||i===Ap)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===bp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ep)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ap)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wp||i===Cp||i===Rp||i===Dp||i===Up||i===ih||i===Lp)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===wp||i===Cp)return r===pe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Rp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Dp)return a.COMPRESSED_R11_EAC;if(i===Up)return a.COMPRESSED_SIGNED_R11_EAC;if(i===ih)return a.COMPRESSED_RG11_EAC;if(i===Lp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Np||i===Pp||i===Op||i===Ip||i===Bp||i===Fp||i===zp||i===Vp||i===Hp||i===Gp||i===kp||i===Wp||i===Xp||i===qp)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Np)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Op)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ip)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===qp)return r===pe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yp||i===Zp||i===Jp)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Yp)return r===pe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kp||i===Qp||i===sh||i===jp)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Kp)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Qp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===oc?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var uN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hv=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Yu(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Mn({vertexShader:uN,fragmentShader:hN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Un(new Fs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gv=class extends Os{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,m=null,_=typeof XRWebGLBinding<"u",g=new Hv,p={},v=n.getContextAttributes(),S=null,x=null,M=[],w=[],E=new Ht,y=null,T=new ci;T.viewport=new se;let R=new ci;R.viewport=new se;let D=[T,R],L=new dp,V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ft=M[Q];return ft===void 0&&(ft=new nc,M[Q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Q){let ft=M[Q];return ft===void 0&&(ft=new nc,M[Q]=ft),ft.getGripSpace()},this.getHand=function(Q){let ft=M[Q];return ft===void 0&&(ft=new nc,M[Q]=ft),ft.getHandSpace()};function I(Q){let ft=w.indexOf(Q.inputSource);if(ft===-1)return;let rt=M[ft];rt!==void 0&&(rt.update(Q.inputSource,Q.frame,c||r),rt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",B);for(let Q=0;Q<M.length;Q++){let ft=w[Q];ft!==null&&(w[Q]=null,M[Q].disconnect(ft))}V=null,X=null,g.reset();for(let Q in p)delete p[Q];t.setRenderTarget(S),h=null,f=null,d=null,s=null,x=null,Gt.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",H),s.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await n.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,Pt=null,Ft=null;v.depth&&(Ft=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,rt=v.stencil?Nr:Ps,Pt=v.stencil?oc:_s);let Ut={colorFormat:n.RGBA8,depthFormat:Ft,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new Ri(f.textureWidth,f.textureHeight,{format:es,type:Ui,depthTexture:new Aa(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let rt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(s,n,rt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new Ri(h.framebufferWidth,h.framebufferHeight,{format:es,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),Gt.setContext(s),Gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(Q){for(let ft=0;ft<Q.removed.length;ft++){let rt=Q.removed[ft],Pt=w.indexOf(rt);Pt>=0&&(w[Pt]=null,M[Pt].disconnect(rt))}for(let ft=0;ft<Q.added.length;ft++){let rt=Q.added[ft],Pt=w.indexOf(rt);if(Pt===-1){for(let Ut=0;Ut<M.length;Ut++)if(Ut>=w.length){w.push(rt),Pt=Ut;break}else if(w[Ut]===null){w[Ut]=rt,Pt=Ut;break}if(Pt===-1)break}let Ft=M[Pt];Ft&&Ft.connect(rt)}}let q=new W,et=new W;function ot(Q,ft,rt){q.setFromMatrixPosition(ft.matrixWorld),et.setFromMatrixPosition(rt.matrixWorld);let Pt=q.distanceTo(et),Ft=ft.projectionMatrix.elements,Ut=rt.projectionMatrix.elements,we=Ft[14]/(Ft[10]-1),Lt=Ft[14]/(Ft[10]+1),Bt=(Ft[9]+1)/Ft[5],Jt=(Ft[9]-1)/Ft[5],jt=(Ft[8]-1)/Ft[0],Be=(Ut[8]+1)/Ut[0],xe=we*jt,Ke=we*Be,Qe=Pt/(-jt+Be),de=Qe*-jt;if(ft.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(de),Q.translateZ(Qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ft[10]===-1)Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let Re=we+Qe,N=Lt+Qe,pn=xe-de,le=Ke+(Pt-de),C=Bt*Lt/N*Re,b=Jt*Lt/N*Re;Q.projectionMatrix.makePerspective(pn,le,C,b,Re,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function at(Q,ft){ft===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ft.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ft=Q.near,rt=Q.far;g.texture!==null&&(g.depthNear>0&&(ft=g.depthNear),g.depthFar>0&&(rt=g.depthFar)),L.near=R.near=T.near=ft,L.far=R.far=T.far=rt,(V!==L.near||X!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),V=L.near,X=L.far),L.layers.mask=Q.layers.mask|6,T.layers.mask=L.layers.mask&-5,R.layers.mask=L.layers.mask&-3;let Pt=Q.parent,Ft=L.cameras;at(L,Pt);for(let Ut=0;Ut<Ft.length;Ut++)at(Ft[Ut],Pt);Ft.length===2?ot(L,T,R):L.projectionMatrix.copy(T.projectionMatrix),mt(Q,L,Pt)};function mt(Q,ft,rt){rt===null?Q.matrix.copy(ft.matrixWorld):(Q.matrix.copy(rt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ft.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Yd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(Q){return p[Q]};let Qt=null;function ee(Q,ft){if(u=ft.getViewerPose(c||r),m=ft,u!==null){let rt=u.views;h!==null&&(t.setRenderTargetFramebuffer(x,h.framebuffer),t.setRenderTarget(x));let Pt=!1;rt.length!==L.cameras.length&&(L.cameras.length=0,Pt=!0);for(let Lt=0;Lt<rt.length;Lt++){let Bt=rt[Lt],Jt=null;if(h!==null)Jt=h.getViewport(Bt);else{let Be=d.getViewSubImage(f,Bt);Jt=Be.viewport,Lt===0&&(t.setRenderTargetTextures(x,Be.colorTexture,Be.depthStencilTexture),t.setRenderTarget(x))}let jt=D[Lt];jt===void 0&&(jt=new ci,jt.layers.enable(Lt),jt.viewport=new se,D[Lt]=jt),jt.matrix.fromArray(Bt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Bt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Lt===0&&(L.matrix.copy(jt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Pt===!0&&L.cameras.push(jt)}let Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Lt=d.getDepthInformation(rt[0]);Lt&&Lt.isValid&&Lt.texture&&g.init(Lt,s.renderState)}if(Ft&&Ft.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let Lt=0;Lt<rt.length;Lt++){let Bt=rt[Lt].camera;if(Bt){let Jt=p[Bt];Jt||(Jt=new Yu,p[Bt]=Jt);let jt=d.getCameraImage(Bt);Jt.sourceTexture=jt}}}}for(let rt=0;rt<M.length;rt++){let Pt=w[rt],Ft=M[rt];Pt!==null&&Ft!==void 0&&Ft.update(Pt,ft,c||r)}Qt&&Qt(Q,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),m=null}let Gt=new dE;Gt.setAnimationLoop(ee),this.setAnimationLoop=function(Q){Qt=Q},this.dispose=function(){}}},fN=new tn,xE=new Vt;xE.set(-1,0,0,0,1,0,0,0,1);function dN(e,t){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Tv(e)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,S,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(g,p):p.isMeshLambertMaterial?(a(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(g,p),d(g,p)):p.isMeshPhongMaterial?(a(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,x)):p.isMeshMatcapMaterial?(a(g,p),m(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),_(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=t.get(p),S=v.envMap,x=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(fN.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(xE),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=S*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pN(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let w=M.program;i.uniformBlockBinding(x,w)}function c(x,M){let w=s[x.id];w===void 0&&(g(x),w=u(x),s[x.id]=w,x.addEventListener("dispose",v));let E=M.program;i.updateUBOMapping(x,E);let y=t.render.frame;a[x.id]!==y&&(f(x),a[x.id]=y)}function u(x){let M=d();x.__bindingPointIndex=M;let w=e.createBuffer(),E=x.__size,y=x.usage;return e.bindBuffer(e.UNIFORM_BUFFER,w),e.bufferData(e.UNIFORM_BUFFER,E,y),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,w),w}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let M=s[x.id],w=x.uniforms,E=x.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let y=0,T=w.length;y<T;y++){let R=w[y];if(Array.isArray(R))for(let D=0,L=R.length;D<L;D++)h(R[D],y,D,E);else h(R,y,0,E)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(x,M,w,E){if(_(x,M,w,E)===!0){let y=x.__offset,T=x.value;if(Array.isArray(T)){let R=0;for(let D=0;D<T.length;D++){let L=T[D],V=p(L);m(L,x.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(T,x.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,y,x.__data)}}function m(x,M,w){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,w)}function _(x,M,w,E){let y=x.value,T=M+"_"+w;if(E[T]===void 0)return typeof y=="number"||typeof y=="boolean"?E[T]=y:ArrayBuffer.isView(y)?E[T]=y.slice():E[T]=y.clone(),!0;{let R=E[T];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return E[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(x){let M=x.uniforms,w=0,E=16;for(let T=0,R=M.length;T<R;T++){let D=Array.isArray(M[T])?M[T]:[M[T]];for(let L=0,V=D.length;L<V;L++){let X=D[L],I=Array.isArray(X.value)?X.value:[X.value];for(let H=0,B=I.length;H<B;H++){let q=I[H],et=p(q),ot=w%E,at=ot%et.boundary,mt=ot+at;w+=at,mt!==0&&E-mt<et.storage&&(w+=E-mt),X.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=w,w+=et.storage}}}let y=w%E;return y>0&&(w+=E-y),x.__size=w,x.__cache={},this}function p(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",x),M}function v(x){let M=x.target;M.removeEventListener("dispose",v);let w=r.indexOf(M.__bindingPointIndex);r.splice(w,1),e.deleteBuffer(s[M.id]),delete s[M.id],delete a[M.id]}function S(){for(let x in s)e.deleteBuffer(s[x]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}var mN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ks=null;function gN(){return ks===null&&(ks=new Ao(mN,16,16,Pr,Gs),ks.name="DFG_LUT",ks.minFilter=me,ks.magFilter=me,ks.wrapS=Ns,ks.wrapT=Ns,ks.generateMipmaps=!1,ks.needsUpdate=!0),ks}var am=class{constructor(t={}){let{canvas:n=FT(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Ui}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=r;let _=h,g=new Set([Mp,Sp,yp]),p=new Set([Ui,_s,rc,oc,vp,xp]),v=new Uint32Array(4),S=new Int32Array(4),x=new W,M=null,w=null,E=[],y=[],T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,L=null,V=null,X=null,I=null;this._outputColorSpace=qn;let H=0,B=0,q=null,et=-1,ot=null,at=new se,mt=new se,Qt=null,ee=new Kt(0),Gt=0,Q=n.width,ft=n.height,rt=1,Pt=null,Ft=null,Ut=new se(0,0,Q,ft),we=new se(0,0,Q,ft),Lt=!1,Bt=new Xu,Jt=!1,jt=!1,Be=new tn,xe=new W,Ke=new se,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Re(){return q===null?rt:1}let N=i;function pn(A,P){return n.getContext(A,P)}try{let A={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"185"}`),n.addEventListener("webglcontextlost",De,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",Kn,!1),N===null){let P="webgl2";if(N=pn(P,A),N===null)throw pn(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ot("WebGLRenderer: "+A.message),A}let le,C,b,O,k,Z,lt,dt,J,j,ut,St,it,ct,Rt,Dt,zt,U,ht,K,pt,vt,nt;function At(){le=new bU(N),le.init(),pt=new cN(N,le),C=new mU(N,le,t,pt),b=new oN(N,le),C.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),V=N.createFramebuffer(),X=N.createFramebuffer(),I=N.createFramebuffer(),O=new AU(N),k=new YL,Z=new lN(N,le,b,k,C,pt,O),lt=new MU(R),dt=new DR(N),vt=new dU(N,dt),J=new TU(N,dt,O,vt),j=new CU(N,J,dt,vt,O),U=new wU(N,C,Z),Rt=new gU(k),ut=new qL(R,lt,le,C,vt,Rt),St=new dN(R,k),it=new JL,ct=new eN(le),zt=new fU(R,lt,b,j,m,l),Dt=new rN(R,j,C),nt=new pN(N,O,C,b),ht=new pU(N,le,O),K=new EU(N,le,O),O.programs=ut.programs,R.capabilities=C,R.extensions=le,R.properties=k,R.renderLists=it,R.shadowMap=Dt,R.state=b,R.info=O}At(),_!==Ui&&(T=new DU(_,n.width,n.height,o,s,a));let Tt=new Gv(R,N);this.xr=Tt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let A=le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(A){A!==void 0&&(rt=A,this.setSize(Q,ft,!1))},this.getSize=function(A){return A.set(Q,ft)},this.setSize=function(A,P,G=!0){if(Tt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Q=A,ft=P,n.width=Math.floor(A*rt),n.height=Math.floor(P*rt),G===!0&&(n.style.width=A+"px",n.style.height=P+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,A,P)},this.getDrawingBufferSize=function(A){return A.set(Q*rt,ft*rt).floor()},this.setDrawingBufferSize=function(A,P,G){Q=A,ft=P,rt=G,n.width=Math.floor(A*G),n.height=Math.floor(P*G),this.setViewport(0,0,A,P)},this.setEffects=function(A){if(_===Ui){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let P=0;P<A.length;P++)if(A[P].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(at)},this.getViewport=function(A){return A.copy(Ut)},this.setViewport=function(A,P,G,z){A.isVector4?Ut.set(A.x,A.y,A.z,A.w):Ut.set(A,P,G,z),b.viewport(at.copy(Ut).multiplyScalar(rt).round())},this.getScissor=function(A){return A.copy(we)},this.setScissor=function(A,P,G,z){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,P,G,z),b.scissor(mt.copy(we).multiplyScalar(rt).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(A){b.setScissorTest(Lt=A)},this.setOpaqueSort=function(A){Pt=A},this.setTransparentSort=function(A){Ft=A},this.getClearColor=function(A){return A.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(A=!0,P=!0,G=!0){let z=0;if(A){let F=!1;if(q!==null){let xt=q.texture.format;F=g.has(xt)}if(F){let xt=q.texture.type,bt=p.has(xt),_t=zt.getClearColor(),wt=zt.getClearAlpha(),Ct=_t.r,Y=_t.g,$=_t.b;bt?(v[0]=Ct,v[1]=Y,v[2]=$,v[3]=wt,N.clearBufferuiv(N.COLOR,0,v)):(S[0]=Ct,S[1]=Y,S[2]=$,S[3]=wt,N.clearBufferiv(N.COLOR,0,S))}else z|=N.COLOR_BUFFER_BIT}P&&(z|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){n.removeEventListener("webglcontextlost",De,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",Kn,!1),zt.dispose(),it.dispose(),ct.dispose(),k.dispose(),lt.dispose(),j.dispose(),vt.dispose(),nt.dispose(),ut.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Ba),Tt.removeEventListener("sessionend",Fa),Fi.stop()};function De(A){A.preventDefault(),bv("WebGLRenderer: Context Lost."),D=!0}function ye(){bv("WebGLRenderer: Context Restored."),D=!1;let A=O.autoReset,P=Dt.enabled,G=Dt.autoUpdate,z=Dt.needsUpdate,F=Dt.type;At(),O.autoReset=A,Dt.enabled=P,Dt.autoUpdate=G,Dt.needsUpdate=z,Dt.type=F}function Kn(A){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Bi(A){let P=A.target;P.removeEventListener("dispose",Bi),wh(P)}function wh(A){ko(A),k.remove(A)}function ko(A){let P=k.get(A).programs;P!==void 0&&(P.forEach(function(G){ut.releaseProgram(G)}),A.isShaderMaterial&&ut.releaseShaderCache(A))}this.renderBufferDirect=function(A,P,G,z,F,xt){P===null&&(P=Qe);let bt=F.isMesh&&F.matrixWorld.determinantAffine()<0,_t=Zr(A,P,G,z,F);b.setMaterial(z,bt);let wt=G.index,Ct=1;if(z.wireframe===!0){if(wt=J.getWireframeAttribute(G),wt===void 0)return;Ct=2}let Y=G.drawRange,$=G.attributes.position,st=Y.start*Ct,Et=(Y.start+Y.count)*Ct;xt!==null&&(st=Math.max(st,xt.start*Ct),Et=Math.min(Et,(xt.start+xt.count)*Ct)),wt!==null?(st=Math.max(st,0),Et=Math.min(Et,wt.count)):$!=null&&(st=Math.max(st,0),Et=Math.min(Et,$.count));let kt=Et-st;if(kt<0||kt===1/0)return;vt.setup(F,z,_t,G,wt);let ce,qt=ht;if(wt!==null&&(ce=dt.get(wt),qt=K,qt.setIndex(ce)),F.isMesh)z.wireframe===!0?(b.setLineWidth(z.wireframeLinewidth*Re()),qt.setMode(N.LINES)):qt.setMode(N.TRIANGLES);else if(F.isLine){let ue=z.linewidth;ue===void 0&&(ue=1),b.setLineWidth(ue*Re()),F.isLineSegments?qt.setMode(N.LINES):F.isLineLoop?qt.setMode(N.LINE_LOOP):qt.setMode(N.LINE_STRIP)}else F.isPoints?qt.setMode(N.POINTS):F.isSprite&&qt.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(le.get("WEBGL_multi_draw"))qt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let ue=F._multiDrawStarts,gt=F._multiDrawCounts,mn=F._multiDrawCount,Yt=wt?dt.get(wt).bytesPerElement:1,jn=k.get(z).currentProgram.getUniforms();for(let nn=0;nn<mn;nn++)jn.setValue(N,"_gl_DrawID",nn),qt.render(ue[nn]/Yt,gt[nn])}else if(F.isInstancedMesh)qt.renderInstances(st,kt,F.count);else if(G.isInstancedBufferGeometry){let ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,gt=Math.min(G.instanceCount,ue);qt.renderInstances(st,kt,gt)}else qt.render(st,kt)};function Oa(A,P,G){A.transparent===!0&&A.side===zs&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,mi(A,P,G),A.side=Ea,A.needsUpdate=!0,mi(A,P,G),A.side=zs):mi(A,P,G)}this.compile=function(A,P,G=null){G===null&&(G=A),w=ct.get(G),w.init(P),y.push(w),G.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),A!==G&&A.traverseVisible(function(F){F.isLight&&F.layers.test(P.layers)&&(w.pushLight(F),F.castShadow&&w.pushShadow(F))}),w.setupLights();let z=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let xt=F.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){let _t=xt[bt];Oa(_t,G,F),z.add(_t)}else Oa(xt,G,F),z.add(xt)}),w=y.pop(),z},this.compileAsync=function(A,P,G=null){let z=this.compile(A,P,G);return new Promise(F=>{function xt(){if(z.forEach(function(bt){k.get(bt).currentProgram.isReady()&&z.delete(bt)}),z.size===0){F(A);return}setTimeout(xt,10)}le.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Ia=null;function Yr(A){Ia&&Ia(A)}function Ba(){Fi.stop()}function Fa(){Fi.start()}let Fi=new dE;Fi.setAnimationLoop(Yr),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(A){Ia=A,Tt.setAnimationLoop(A),A===null?Fi.stop():Fi.start()},Tt.addEventListener("sessionstart",Ba),Tt.addEventListener("sessionend",Fa),this.render=function(A,P){if(P!==void 0&&P.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(A,P);let G=Tt.enabled===!0&&Tt.isPresenting===!0,z=T!==null&&(q===null||G)&&T.begin(R,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(P),P=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,P,q),w=ct.get(A,y.length),w.init(P),w.state.textureUnits=Z.getTextureUnits(),y.push(w),Be.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),Bt.setFromProjectionMatrix(Be,ps,P.reversedDepth),jt=this.localClippingEnabled,Jt=Rt.init(this.clippingPlanes,jt),M=it.get(A,E.length),M.init(),E.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){let bt=R.xr.getDepthSensingMesh();bt!==null&&zi(bt,P,-1/0,R.sortObjects)}zi(A,P,0,R.sortObjects),M.finish(),R.sortObjects===!0&&M.sort(Pt,Ft,P.reversedDepth),de=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,de&&zt.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Jt===!0&&Rt.beginShadows();let F=w.state.shadowsArray;if(Dt.render(F,A,P),Jt===!0&&Rt.endShadows(),(z&&T.hasRenderPass())===!1){let bt=M.opaque,_t=M.transmissive;if(w.setupLights(),P.isArrayCamera){let wt=P.cameras;if(_t.length>0)for(let Ct=0,Y=wt.length;Ct<Y;Ct++){let $=wt[Ct];Wo(bt,_t,A,$)}de&&zt.render(A);for(let Ct=0,Y=wt.length;Ct<Y;Ct++){let $=wt[Ct];za(M,A,$,$.viewport)}}else _t.length>0&&Wo(bt,_t,A,P),de&&zt.render(A),za(M,A,P)}q!==null&&B===0&&(Z.updateMultisampleRenderTarget(q),Z.updateRenderTargetMipmap(q)),z&&T.end(R),A.isScene===!0&&A.onAfterRender(R,A,P),vt.resetDefaultState(),et=-1,ot=null,y.pop(),y.length>0?(w=y[y.length-1],Z.setTextureUnits(w.state.textureUnits),Jt===!0&&Rt.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,L!==null&&L.renderEnd()};function zi(A,P,G,z){if(A.visible===!1)return;if(A.layers.test(P.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(P);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Bt.intersectsSprite(A)){z&&Ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Be);let bt=j.update(A),_t=A.material;_t.visible&&M.push(A,bt,_t,G,Ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Bt.intersectsObject(A))){let bt=j.update(A),_t=A.material;if(z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ke.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ke.copy(bt.boundingSphere.center)),Ke.applyMatrix4(A.matrixWorld).applyMatrix4(Be)),Array.isArray(_t)){let wt=bt.groups;for(let Ct=0,Y=wt.length;Ct<Y;Ct++){let $=wt[Ct],st=_t[$.materialIndex];st&&st.visible&&M.push(A,bt,st,G,Ke.z,$)}}else _t.visible&&M.push(A,bt,_t,G,Ke.z,null)}}let xt=A.children;for(let bt=0,_t=xt.length;bt<_t;bt++)zi(xt[bt],P,G,z)}function za(A,P,G,z){let{opaque:F,transmissive:xt,transparent:bt}=A;w.setupLightsView(G),Jt===!0&&Rt.setGlobalState(R.clippingPlanes,G),z&&b.viewport(at.copy(z)),F.length>0&&Vi(F,P,G),xt.length>0&&Vi(xt,P,G),bt.length>0&&Vi(bt,P,G),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Wo(A,P,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let st=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new Ri(1,1,{generateMipmaps:!0,type:st?Gs:Ui,minFilter:Hs,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let xt=w.state.transmissionRenderTarget[z.id],bt=z.viewport||at;xt.setSize(bt.z*R.transmissionResolutionScale,bt.w*R.transmissionResolutionScale);let _t=R.getRenderTarget(),wt=R.getActiveCubeFace(),Ct=R.getActiveMipmapLevel();R.setRenderTarget(xt),R.getClearColor(ee),Gt=R.getClearAlpha(),Gt<1&&R.setClearColor(16777215,.5),R.clear(),de&&zt.render(G);let Y=R.toneMapping;R.toneMapping=gs;let $=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),Jt===!0&&Rt.setGlobalState(R.clippingPlanes,z),Vi(A,G,z),Z.updateMultisampleRenderTarget(xt),Z.updateRenderTargetMipmap(xt),le.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Et=0,kt=P.length;Et<kt;Et++){let ce=P[Et],{object:qt,geometry:ue,material:gt,group:mn}=ce;if(gt.side===zs&&qt.layers.test(z.layers)){let Yt=gt.side;gt.side=Yn,gt.needsUpdate=!0,Xo(qt,G,z,ue,gt,mn),gt.side=Yt,gt.needsUpdate=!0,st=!0}}st===!0&&(Z.updateMultisampleRenderTarget(xt),Z.updateRenderTargetMipmap(xt))}R.setRenderTarget(_t,wt,Ct),R.setClearColor(ee,Gt),$!==void 0&&(z.viewport=$),R.toneMapping=Y}function Vi(A,P,G){let z=P.isScene===!0?P.overrideMaterial:null;for(let F=0,xt=A.length;F<xt;F++){let bt=A[F],{object:_t,geometry:wt,group:Ct}=bt,Y=bt.material;Y.allowOverride===!0&&z!==null&&(Y=z),_t.layers.test(G.layers)&&Xo(_t,P,G,wt,Y,Ct)}}function Xo(A,P,G,z,F,xt){A.onBeforeRender(R,P,G,z,F,xt),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(R,P,G,z,A,xt),F.transparent===!0&&F.side===zs&&F.forceSinglePass===!1?(F.side=Yn,F.needsUpdate=!0,R.renderBufferDirect(G,P,z,F,A,xt),F.side=Ea,F.needsUpdate=!0,R.renderBufferDirect(G,P,z,F,A,xt),F.side=zs):R.renderBufferDirect(G,P,z,F,A,xt),A.onAfterRender(R,P,G,z,F,xt)}function mi(A,P,G){P.isScene!==!0&&(P=Qe);let z=k.get(A),F=w.state.lights,xt=w.state.shadowsArray,bt=F.state.version,_t=ut.getParameters(A,F.state,xt,P,G,w.state.lightProbeGridArray),wt=ut.getProgramCacheKey(_t),Ct=z.programs;z.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?P.environment:null,z.fog=P.fog;let Y=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;z.envMap=lt.get(A.envMap||z.environment,Y),z.envMapRotation=z.environment!==null&&A.envMap===null?P.environmentRotation:A.envMapRotation,Ct===void 0&&(A.addEventListener("dispose",Bi),Ct=new Map,z.programs=Ct);let $=Ct.get(wt);if($!==void 0){if(z.currentProgram===$&&z.lightsStateVersion===bt)return Qn(A,_t),$}else _t.uniforms=ut.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,G,_t),A.onBeforeCompile(_t,R),$=ut.acquireProgram(_t,wt),Ct.set(wt,$),z.uniforms=_t.uniforms;let st=z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(st.clippingPlanes=Rt.uniform),Qn(A,_t),z.needsLights=Um(A),z.lightsStateVersion=bt,z.needsLights&&(st.ambientLightColor.value=F.state.ambient,st.lightProbe.value=F.state.probe,st.directionalLights.value=F.state.directional,st.directionalLightShadows.value=F.state.directionalShadow,st.spotLights.value=F.state.spot,st.spotLightShadows.value=F.state.spotShadow,st.rectAreaLights.value=F.state.rectArea,st.ltc_1.value=F.state.rectAreaLTC1,st.ltc_2.value=F.state.rectAreaLTC2,st.pointLights.value=F.state.point,st.pointLightShadows.value=F.state.pointShadow,st.hemisphereLights.value=F.state.hemi,st.directionalShadowMatrix.value=F.state.directionalShadowMatrix,st.spotLightMatrix.value=F.state.spotLightMatrix,st.spotLightMap.value=F.state.spotLightMap,st.pointShadowMatrix.value=F.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=$,z.uniformsList=null,$}function bc(A){if(A.uniformsList===null){let P=A.currentProgram.getUniforms();A.uniformsList=cc.seqWithValue(P.seq,A.uniforms)}return A.uniformsList}function Qn(A,P){let G=k.get(A);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function Va(A,P){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(P.matrixWorld);for(let G=0,z=A.length;G<z;G++){let F=A[G];if(F.texture!==null&&F.boundingBox.containsPoint(x))return F}return null}function Zr(A,P,G,z,F){P.isScene!==!0&&(P=Qe),Z.resetTextureUnits();let xt=P.fog,bt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?P.environment:null,_t=q===null?R.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:ie.workingColorSpace,wt=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ct=lt.get(z.envMap||bt,wt),Y=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,$=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),st=!!G.morphAttributes.position,Et=!!G.morphAttributes.normal,kt=!!G.morphAttributes.color,ce=gs;z.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ce=R.toneMapping);let qt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=qt!==void 0?qt.length:0,gt=k.get(z),mn=w.state.lights;if(Jt===!0&&(jt===!0||A!==ot)){let Se=A===ot&&z.id===et;Rt.setState(z,A,Se)}let Yt=!1;z.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==mn.state.version||gt.outputColorSpace!==_t||F.isBatchedMesh&&gt.batching===!1||!F.isBatchedMesh&&gt.batching===!0||F.isBatchedMesh&&gt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&gt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&gt.instancing===!1||!F.isInstancedMesh&&gt.instancing===!0||F.isSkinnedMesh&&gt.skinning===!1||!F.isSkinnedMesh&&gt.skinning===!0||F.isInstancedMesh&&gt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&gt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&gt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&gt.instancingMorph===!1&&F.morphTexture!==null||gt.envMap!==Ct||z.fog===!0&&gt.fog!==xt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Rt.numPlanes||gt.numIntersection!==Rt.numIntersection)||gt.vertexAlphas!==Y||gt.vertexTangents!==$||gt.morphTargets!==st||gt.morphNormals!==Et||gt.morphColors!==kt||gt.toneMapping!==ce||gt.morphTargetsCount!==ue||!!gt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Yt=!0):(Yt=!0,gt.__version=z.version);let jn=gt.currentProgram;Yt===!0&&(jn=mi(z,P,F),L&&z.isNodeMaterial&&L.onUpdateProgram(z,jn,gt));let nn=!1,$n=!1,Ks=!1,ge=jn.getUniforms(),Fe=gt.uniforms;if(b.useProgram(jn.program)&&(nn=!0,$n=!0,Ks=!0),z.id!==et&&(et=z.id,$n=!0),gt.needsLights){let Se=Va(w.state.lightProbeGridArray,F);gt.lightProbeGrid!==Se&&(gt.lightProbeGrid=Se,$n=!0)}if(nn||ot!==A){b.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ge.setValue(N,"projectionMatrix",A.projectionMatrix),ge.setValue(N,"viewMatrix",A.matrixWorldInverse);let rs=ge.map.cameraPosition;rs!==void 0&&rs.setValue(N,xe.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&ge.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ge.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),ot!==A&&(ot=A,$n=!0,Ks=!0)}if(gt.needsLights&&(mn.state.directionalShadowMap.length>0&&ge.setValue(N,"directionalShadowMap",mn.state.directionalShadowMap,Z),mn.state.spotShadowMap.length>0&&ge.setValue(N,"spotShadowMap",mn.state.spotShadowMap,Z),mn.state.pointShadowMap.length>0&&ge.setValue(N,"pointShadowMap",mn.state.pointShadowMap,Z)),F.isSkinnedMesh){ge.setOptional(N,F,"bindMatrix"),ge.setOptional(N,F,"bindMatrixInverse");let Se=F.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ge.setValue(N,"boneTexture",Se.boneTexture,Z))}F.isBatchedMesh&&(ge.setOptional(N,F,"batchingTexture"),ge.setValue(N,"batchingTexture",F._matricesTexture,Z),ge.setOptional(N,F,"batchingIdTexture"),ge.setValue(N,"batchingIdTexture",F._indirectTexture,Z),ge.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&ge.setValue(N,"batchingColorTexture",F._colorsTexture,Z));let as=G.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&U.update(F,G,jn),($n||gt.receiveShadow!==F.receiveShadow)&&(gt.receiveShadow=F.receiveShadow,ge.setValue(N,"receiveShadow",F.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&P.environment!==null&&(Fe.envMapIntensity.value=P.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=gN()),$n){if(ge.setValue(N,"toneMappingExposure",R.toneMappingExposure),gt.needsLights&&Dm(Fe,Ks),xt&&z.fog===!0&&St.refreshFogUniforms(Fe,xt),St.refreshMaterialUniforms(Fe,z,rt,ft,w.state.transmissionRenderTarget[A.id]),gt.needsLights&&gt.lightProbeGrid){let Se=gt.lightProbeGrid;Fe.probesSH.value=Se.texture,Fe.probesMin.value.copy(Se.boundingBox.min),Fe.probesMax.value.copy(Se.boundingBox.max),Fe.probesResolution.value.copy(Se.resolution)}cc.upload(N,bc(gt),Fe,Z)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(cc.upload(N,bc(gt),Fe,Z),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ge.setValue(N,"center",F.center),ge.setValue(N,"modelViewMatrix",F.modelViewMatrix),ge.setValue(N,"normalMatrix",F.normalMatrix),ge.setValue(N,"modelMatrix",F.matrixWorld),z.uniformsGroups!==void 0){let Se=z.uniformsGroups;for(let rs=0,Ha=Se.length;rs<Ha;rs++){let Ch=Se[rs];nt.update(Ch,jn),nt.bind(Ch,jn)}}return jn}function Dm(A,P){A.ambientLightColor.needsUpdate=P,A.lightProbe.needsUpdate=P,A.directionalLights.needsUpdate=P,A.directionalLightShadows.needsUpdate=P,A.pointLights.needsUpdate=P,A.pointLightShadows.needsUpdate=P,A.spotLights.needsUpdate=P,A.spotLightShadows.needsUpdate=P,A.rectAreaLights.needsUpdate=P,A.hemisphereLights.needsUpdate=P}function Um(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,P,G){let z=k.get(A);z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),k.get(A.texture).__webglTexture=P,k.get(A.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,P){let G=k.get(A);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(A,P=0,G=0){q=A,H=P,B=G;let z=null,F=!1,xt=!1;if(A){let _t=k.get(A);if(_t.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(N.FRAMEBUFFER,_t.__webglFramebuffer),at.copy(A.viewport),mt.copy(A.scissor),Qt=A.scissorTest,b.viewport(at),b.scissor(mt),b.setScissorTest(Qt),et=-1;return}else if(_t.__webglFramebuffer===void 0)Z.setupRenderTarget(A);else if(_t.__hasExternalTextures)Z.rebindTextures(A,k.get(A.texture).__webglTexture,k.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Y=A.depthTexture;if(_t.__boundDepthTexture!==Y){if(Y!==null&&k.has(Y)&&(A.width!==Y.image.width||A.height!==Y.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(A)}}let wt=A.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(xt=!0);let Ct=k.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ct[P])?z=Ct[P][G]:z=Ct[P],F=!0):A.samples>0&&Z.useMultisampledRTT(A)===!1?z=k.get(A).__webglMultisampledFramebuffer:Array.isArray(Ct)?z=Ct[G]:z=Ct,at.copy(A.viewport),mt.copy(A.scissor),Qt=A.scissorTest}else at.copy(Ut).multiplyScalar(rt).floor(),mt.copy(we).multiplyScalar(rt).floor(),Qt=Lt;if(G!==0&&(z=V),b.bindFramebuffer(N.FRAMEBUFFER,z)&&b.drawBuffers(A,z),b.viewport(at),b.scissor(mt),b.setScissorTest(Qt),F){let _t=k.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+P,_t.__webglTexture,G)}else if(xt){let _t=P;for(let wt=0;wt<A.textures.length;wt++){let Ct=k.get(A.textures[wt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+wt,Ct.__webglTexture,G,_t)}}else if(A!==null&&G!==0){let _t=k.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_t.__webglTexture,G)}et=-1},this.readRenderTargetPixels=function(A,P,G,z,F,xt,bt,_t=0){if(!(A&&A.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt){b.bindFramebuffer(N.FRAMEBUFFER,wt);try{let Ct=A.textures[_t],Y=Ct.format,$=Ct.type;if(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_t),!C.textureFormatReadable(Y)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable($)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=A.width-z&&G>=0&&G<=A.height-F&&N.readPixels(P,G,z,F,pt.convert(Y),pt.convert($),xt)}finally{let Ct=q!==null?k.get(q).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,P,G,z,F,xt,bt,_t=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=k.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(wt=wt[bt]),wt)if(P>=0&&P<=A.width-z&&G>=0&&G<=A.height-F){b.bindFramebuffer(N.FRAMEBUFFER,wt);let Ct=A.textures[_t],Y=Ct.format,$=Ct.type;if(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+_t),!C.textureFormatReadable(Y))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,st),N.bufferData(N.PIXEL_PACK_BUFFER,xt.byteLength,N.STREAM_READ),N.readPixels(P,G,z,F,pt.convert(Y),pt.convert($),0);let Et=q!==null?k.get(q).__webglFramebuffer:null;b.bindFramebuffer(N.FRAMEBUFFER,Et);let kt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await VT(N,kt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,st),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,xt),N.deleteBuffer(st),N.deleteSync(kt),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,P=null,G=0){let z=Math.pow(2,-G),F=Math.floor(A.image.width*z),xt=Math.floor(A.image.height*z),bt=P!==null?P.x:0,_t=P!==null?P.y:0;Z.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,bt,_t,F,xt),b.unbindTexture()},this.copyTextureToTexture=function(A,P,G=null,z=null,F=0,xt=0){let bt,_t,wt,Ct,Y,$,st,Et,kt,ce=A.isCompressedTexture?A.mipmaps[xt]:A.image;if(G!==null)bt=G.max.x-G.min.x,_t=G.max.y-G.min.y,wt=G.isBox3?G.max.z-G.min.z:1,Ct=G.min.x,Y=G.min.y,$=G.isBox3?G.min.z:0;else{let Fe=Math.pow(2,-F);bt=Math.floor(ce.width*Fe),_t=Math.floor(ce.height*Fe),A.isDataArrayTexture?wt=ce.depth:A.isData3DTexture?wt=Math.floor(ce.depth*Fe):wt=1,Ct=0,Y=0,$=0}z!==null?(st=z.x,Et=z.y,kt=z.z):(st=0,Et=0,kt=0);let qt=pt.convert(P.format),ue=pt.convert(P.type),gt;P.isData3DTexture?(Z.setTexture3D(P,0),gt=N.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Z.setTexture2DArray(P,0),gt=N.TEXTURE_2D_ARRAY):(Z.setTexture2D(P,0),gt=N.TEXTURE_2D),b.activeTexture(N.TEXTURE0),b.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,P.flipY),b.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),b.pixelStorei(N.UNPACK_ALIGNMENT,P.unpackAlignment);let mn=b.getParameter(N.UNPACK_ROW_LENGTH),Yt=b.getParameter(N.UNPACK_IMAGE_HEIGHT),jn=b.getParameter(N.UNPACK_SKIP_PIXELS),nn=b.getParameter(N.UNPACK_SKIP_ROWS),$n=b.getParameter(N.UNPACK_SKIP_IMAGES);b.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),b.pixelStorei(N.UNPACK_SKIP_PIXELS,Ct),b.pixelStorei(N.UNPACK_SKIP_ROWS,Y),b.pixelStorei(N.UNPACK_SKIP_IMAGES,$);let Ks=A.isDataArrayTexture||A.isData3DTexture,ge=P.isDataArrayTexture||P.isData3DTexture;if(A.isDepthTexture){let Fe=k.get(A),as=k.get(P),Se=k.get(Fe.__renderTarget),rs=k.get(as.__renderTarget);b.bindFramebuffer(N.READ_FRAMEBUFFER,Se.__webglFramebuffer),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let Ha=0;Ha<wt;Ha++)Ks&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(A).__webglTexture,F,$+Ha),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,k.get(P).__webglTexture,xt,kt+Ha)),N.blitFramebuffer(Ct,Y,bt,_t,st,Et,bt,_t,N.DEPTH_BUFFER_BIT,N.NEAREST);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(F!==0||A.isRenderTargetTexture||k.has(A)){let Fe=k.get(A),as=k.get(P);b.bindFramebuffer(N.READ_FRAMEBUFFER,X),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,I);for(let Se=0;Se<wt;Se++)Ks?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Fe.__webglTexture,F,$+Se):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Fe.__webglTexture,F),ge?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,as.__webglTexture,xt,kt+Se):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,as.__webglTexture,xt),F!==0?N.blitFramebuffer(Ct,Y,bt,_t,st,Et,bt,_t,N.COLOR_BUFFER_BIT,N.NEAREST):ge?N.copyTexSubImage3D(gt,xt,st,Et,kt+Se,Ct,Y,bt,_t):N.copyTexSubImage2D(gt,xt,st,Et,Ct,Y,bt,_t);b.bindFramebuffer(N.READ_FRAMEBUFFER,null),b.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ge?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(gt,xt,st,Et,kt,bt,_t,wt,qt,ue,ce.data):P.isCompressedArrayTexture?N.compressedTexSubImage3D(gt,xt,st,Et,kt,bt,_t,wt,qt,ce.data):N.texSubImage3D(gt,xt,st,Et,kt,bt,_t,wt,qt,ue,ce):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,xt,st,Et,bt,_t,qt,ue,ce.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,xt,st,Et,ce.width,ce.height,qt,ce.data):N.texSubImage2D(N.TEXTURE_2D,xt,st,Et,bt,_t,qt,ue,ce);b.pixelStorei(N.UNPACK_ROW_LENGTH,mn),b.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Yt),b.pixelStorei(N.UNPACK_SKIP_PIXELS,jn),b.pixelStorei(N.UNPACK_SKIP_ROWS,nn),b.pixelStorei(N.UNPACK_SKIP_IMAGES,$n),xt===0&&P.generateMipmaps&&N.generateMipmap(gt),b.unbindTexture()},this.initRenderTarget=function(A){k.get(A).__webglFramebuffer===void 0&&Z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),b.unbindTexture()},this.resetState=function(){H=0,B=0,q=null,b.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ps}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),n.unpackColorSpace=ie._getUnpackColorSpace()}};function wa(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function CE(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},mh={duration:.5,overwrite:!1,delay:0},rx,Nn,He,is=1e8,Ae=1/is,Kv=Math.PI*2,_N=Kv/4,vN=0,RE=Math.sqrt,xN=Math.cos,yN=Math.sin,dn=function(t){return typeof t=="string"},Ye=function(t){return typeof t=="function"},Ra=function(t){return typeof t=="number"},_m=function(t){return typeof t>"u"},Ys=function(t){return typeof t=="object"},fi=function(t){return t!==!1},ox=function(){return typeof window<"u"},lm=function(t){return Ye(t)||dn(t)},DE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,SN=/random\([^)]+\)/g,MN=/,\s*/g,yE=/(?:-?\.?\d|\.)+/gi,lx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Po=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kv=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,cx=/[+-]=-?[.\d]+/,bN=/[^,'"\[\]\s]+/gi,TN=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ke,Xs,Qv,ux,Ni={},fm={},UE,LE=function(t){return(fm=fc(t,Ni))&&Gn},vm=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},gh=function(t,n){return!n&&console.warn(t)},NE=function(t,n){return t&&(Ni[t]=n)&&fm&&(fm[t]=n)||Ni},_h=function(){return 0},EN={suppressEvents:!0,isStart:!0,kill:!1},cm={suppressEvents:!0,kill:!1},AN={suppressEvents:!0},hx={},Br=[],jv={},PE,ui={},Wv={},SE=30,um=[],fx="",dx=function(t){var n=t[0],i,s;if(Ys(n)||Ye(n)||(t=[t]),!(i=(n._gsap||{}).harness)){for(s=um.length;s--&&!um[s].targetTest(n););i=um[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new _x(t[s],i)))||t.splice(s,1);return t},Fr=function(t){return t._gsap||dx(ss(t))[0]._gsap},px=function(t,n,i){return(i=t[n])&&Ye(i)?t[n]():_m(i)&&t.getAttribute&&t.getAttribute(n)||i},Zn=function(t,n){return(t=t.split(",")).forEach(n)||t},Ze=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},Oo=function(t,n){var i=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},wN=function(t,n){for(var i=n.length,s=0;t.indexOf(n[s])<0&&++s<i;);return s<i},dm=function(){var t=Br.length,n=Br.slice(0),i,s;for(jv={},Br.length=0,i=0;i<t;i++)s=n[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},mx=function(t){return!!(t._initted||t._startAt||t.add)},OE=function(t,n,i,s){Br.length&&!Nn&&dm(),t.render(n,i,s||!!(Nn&&n<0&&mx(t))),Br.length&&!Nn&&dm()},IE=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(bN).length<2?n:dn(t)?t.trim():t},BE=function(t){return t},Pi=function(t,n){for(var i in n)i in t||(t[i]=n[i]);return t},CN=function(t){return function(n,i){for(var s in i)s in n||s==="duration"&&t||s==="ease"||(n[s]=i[s])}},fc=function(t,n){for(var i in n)t[i]=n[i];return t},ME=function e(t,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=Ys(n[i])?e(t[i]||(t[i]={}),n[i]):n[i]);return t},pm=function(t,n){var i={},s;for(s in t)s in n||(i[s]=t[s]);return i},fh=function(t){var n=t.parent||ke,i=t.keyframes?CN(Hn(t.keyframes)):Pi;if(fi(t.inherit))for(;n;)i(t,n.vars.defaults),n=n.parent||n._dp;return t},RN=function(t,n){for(var i=t.length,s=i===n.length;s&&i--&&t[i]===n[i];);return i<0},FE=function(t,n,i,s,a){i===void 0&&(i="_first"),s===void 0&&(s="_last");var r=t[s],o;if(a)for(o=n[a];r&&r[a]>o;)r=r._prev;return r?(n._next=r._next,r._next=n):(n._next=t[i],t[i]=n),n._next?n._next._prev=n:t[s]=n,n._prev=r,n.parent=n._dp=t,n},xm=function(t,n,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=n._prev,r=n._next;a?a._next=r:t[i]===n&&(t[i]=r),r?r._prev=a:t[s]===n&&(t[s]=a),n._next=n._prev=n.parent=null},zr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Uo=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},DN=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},$v=function(t,n,i,s){return t._startAt&&(Nn?t._startAt.revert(cm):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},UN=function e(t){return!t||t._ts&&e(t.parent)},bE=function(t){return t._repeat?dc(t._tTime,t=t.duration()+t._rDelay)*t:0},dc=function(t,n){var i=Math.floor(t=Ge(t/n));return t&&i===t?i-1:i},mm=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},ym=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ae)||0))},Sm=function(t,n){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ge(i._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),ym(t),i._dirty||Uo(i,t)),t},zE=function(t,n){var i;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(i=mm(t.rawTime(),n),(!n._dur||yh(0,n.totalDuration(),i)-n._tTime>Ae)&&n.render(i,!0)),Uo(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Ae}},qs=function(t,n,i,s){return n.parent&&zr(n),n._start=Ge((Ra(i)?i:i||t!==ke?ns(t,i,n):t._time)+n._delay),n._end=Ge(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),FE(t,n,"_first","_last",t._sort?"_start":0),tx(n)||(t._recent=n),s||zE(t,n),t._ts<0&&Sm(t,t._tTime),t},VE=function(t,n){return(Ni.ScrollTrigger||vm("scrollTrigger",n))&&Ni.ScrollTrigger.create(n,t)},HE=function(t,n,i,s,a){if(yx(t,n,a),!t._initted)return 1;if(!i&&t._pt&&!Nn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&PE!==hi.frame)return Br.push(t),t._lazy=[a,s],1},LN=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},tx=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},NN=function(t,n,i,s){var a=t.ratio,r=n<0||!n&&(!t._start&&LN(t)&&!(!t._initted&&tx(t))||(t._ts<0||t._dp._ts<0)&&!tx(t))?0:1,o=t._rDelay,l=0,c,u,d;if(o&&t._repeat&&(l=yh(0,t._tDur,n),u=dc(l,o),t._yoyo&&u&1&&(r=1-r),u!==dc(t._tTime,o)&&(a=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==a||Nn||s||t._zTime===Ae||!n&&t._zTime){if(!t._initted&&HE(t,n,s,i,l))return;for(d=t._zTime,t._zTime=n||(i?Ae:0),i||(i=n&&!d),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=l,c=t._pt;c;)c.r(r,c.d),c=c._next;n<0&&$v(t,n,i,!0),t._onUpdate&&!i&&Li(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Li(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===r&&(r&&zr(t,1),!i&&!Nn&&(Li(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},PN=function(t,n,i){var s;if(i>n)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},pc=function(t,n,i,s){var a=t._repeat,r=Ge(n)||0,o=t._tTime/t._tDur;return o&&!s&&(t._time*=r/t._dur),t._dur=r,t._tDur=a?a<0?1e10:Ge(r*(a+1)+t._rDelay*a):r,o>0&&!s&&Sm(t,t._tTime=t._tDur*o),t.parent&&ym(t),i||Uo(t.parent,t),t},TE=function(t){return t instanceof Vn?Uo(t):pc(t,t._dur)},ON={_start:0,endTime:_h,totalDuration:_h},ns=function e(t,n,i){var s=t.labels,a=t._recent||ON,r=t.duration()>=is?a.endTime(!1):t._dur,o,l,c;return dn(n)&&(isNaN(n)||n in s)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?a:i).totalDuration()/100:1)):o<0?(n in s||(s[n]=r),s[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(Hn(i)?i[0]:i).totalDuration()),o>1?e(t,n.substr(0,o-1),i)+l:r+l)):n==null?r:+n},dh=function(t,n,i){var s=Ra(n[1]),a=(s?2:1)+(t<2?0:1),r=n[a],o,l;if(s&&(r.duration=n[1]),r.parent=i,t){for(o=r,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=fi(l.vars.inherit)&&l.parent;r.immediateRender=fi(o.immediateRender),t<2?r.runBackwards=1:r.startAt=n[a-1]}return new en(n[0],r,n[a+1])},Vr=function(t,n){return t||t===0?n(t):n},yh=function(t,n,i){return i<t?t:i>n?n:i},Pn=function(t,n){return!dn(t)||!(n=TN.exec(t))?"":n[1]},IN=function(t,n,i){return Vr(i,function(s){return yh(t,n,s)})},ex=[].slice,GE=function(t,n){return t&&Ys(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Ys(t[0]))&&!t.nodeType&&t!==Xs},BN=function(t,n,i){return i===void 0&&(i=[]),t.forEach(function(s){var a;return dn(s)&&!n||GE(s,1)?(a=i).push.apply(a,ss(s)):i.push(s)})||i},ss=function(t,n,i){return He&&!n&&He.selector?He.selector(t):dn(t)&&!i&&(Qv||!mc())?ex.call((n||ux).querySelectorAll(t),0):Hn(t)?BN(t,i):GE(t)?ex.call(t,0):t?[t]:[]},nx=function(t){return t=ss(t)[0]||gh("Invalid scope")||{},function(n){var i=t.current||t.nativeElement||t;return ss(n,i.querySelectorAll?i:i===t?gh("Invalid scope")||ux.createElement("div"):t)}},kE=function(t){return t.sort(function(){return .5-Math.random()})},WE=function(t){if(Ye(t))return t;var n=Ys(t)?t:{each:t},i=Lo(n.ease),s=n.from||0,a=parseFloat(n.base)||0,r={},o=s>0&&s<1,l=isNaN(s)||o,c=n.axis,u=s,d=s;return dn(s)?u=d={center:.5,edges:.5,end:1}[s]||0:!o&&l&&(u=s[0],d=s[1]),function(f,h,m){var _=(m||n).length,g=r[_],p,v,S,x,M,w,E,y,T;if(!g){if(T=n.grid==="auto"?0:(n.grid||[1,is])[1],!T){for(E=-is;E<(E=m[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(g=r[_]=[],p=l?Math.min(T,_)*u-.5:s%T,v=T===is?0:l?_*d/T-.5:s/T|0,E=0,y=is,w=0;w<_;w++)S=w%T-p,x=v-(w/T|0),g[w]=M=c?Math.abs(c==="y"?x:S):RE(S*S+x*x),M>E&&(E=M),M<y&&(y=M);s==="random"&&kE(g),g.max=E-y,g.min=y,g.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(s==="edges"?-1:1),g.b=_<0?a-_:a,g.u=Pn(n.amount||n.each)||0,i=i&&_<0?KN(i):i}return _=(g[f]-g.min)/g.max||0,Ge(g.b+(i?i(_):_)*g.v)+g.u}},ix=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=Ge(Math.round(parseFloat(i)/t)*t*n);return(s-s%1)/n+(Ra(i)?0:Pn(i))}},XE=function(t,n){var i=Hn(t),s,a;return!i&&Ys(t)&&(s=i=t.radius||is,t.values?(t=ss(t.values),(a=!Ra(t[0]))&&(s*=s)):t=ix(t.increment)),Vr(n,i?Ye(t)?function(r){return a=t(r),Math.abs(a-r)<=s?a:r}:function(r){for(var o=parseFloat(a?r.x:r),l=parseFloat(a?r.y:0),c=is,u=0,d=t.length,f,h;d--;)a?(f=t[d].x-o,h=t[d].y-l,f=f*f+h*h):f=Math.abs(t[d]-o),f<c&&(c=f,u=d);return u=!s||c<=s?t[u]:r,a||u===r||Ra(r)?u:u+Pn(r)}:ix(t))},qE=function(t,n,i,s){return Vr(Hn(t)?!n:i===!0?!!(i=0):!s,function(){return Hn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(n-t+i*.99))/i)*i*s)/s})},FN=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return function(s){return n.reduce(function(a,r){return r(a)},s)}},zN=function(t,n){return function(i){return t(parseFloat(i))+(n||Pn(i))}},VN=function(t,n,i){return ZE(t,n,0,1,i)},YE=function(t,n,i){return Vr(i,function(s){return t[~~n(s)]})},HN=function e(t,n,i){var s=n-t;return Hn(t)?YE(t,e(0,t.length),n):Vr(i,function(a){return(s+(a-t)%s)%s+t})},GN=function e(t,n,i){var s=n-t,a=s*2;return Hn(t)?YE(t,e(0,t.length-1),n):Vr(i,function(r){return r=(a+(r-t)%a)%a||0,t+(r>s?a-r:r)})},gc=function(t){return t.replace(SN,function(n){var i=n.indexOf("[")+1,s=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(MN);return qE(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},ZE=function(t,n,i,s,a){var r=n-t,o=s-i;return Vr(a,function(l){return i+((l-t)/r*o||0)})},kN=function e(t,n,i,s){var a=isNaN(t+n)?0:function(h){return(1-h)*t+h*n};if(!a){var r=dn(t),o={},l,c,u,d,f;if(i===!0&&(s=1)&&(i=null),r)t={p:t},n={p:n};else if(Hn(t)&&!Hn(n)){for(u=[],d=t.length,f=d-2,c=1;c<d;c++)u.push(e(t[c-1],t[c]));d--,a=function(m){m*=d;var _=Math.min(f,~~m);return u[_](m-_)},i=n}else s||(t=fc(Hn(t)?[]:{},t));if(!u){for(l in n)vx.call(o,t,l,"get",n[l]);a=function(m){return bx(m,o)||(r?t.p:t)}}}return Vr(i,a)},EE=function(t,n,i){var s=t.labels,a=is,r,o,l;for(r in s)o=s[r]-n,o<0==!!i&&o&&a>(o=Math.abs(o))&&(l=r,a=o);return l},Li=function(t,n,i){var s=t.vars,a=s[n],r=He,o=t._ctx,l,c,u;if(a)return l=s[n+"Params"],c=s.callbackScope||t,i&&Br.length&&dm(),o&&(He=o),u=l?a.apply(c,l):a.call(c),He=r,u},uh=function(t){return zr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Nn),t.progress()<1&&Li(t,"onInterrupt"),t},hc,JE=[],KE=function(t){if(t)if(t=!t.name&&t.default||t,ox()||t.headless){var n=t.name,i=Ye(t),s=n&&!i&&t.init?function(){this._props=[]}:t,a={init:_h,render:bx,add:vx,kill:rP,modifier:aP,rawVars:0},r={targetTest:0,get:0,getSetter:Mm,aliases:{},register:0};if(mc(),t!==s){if(ui[n])return;Pi(s,Pi(pm(t,a),r)),fc(s.prototype,fc(a,pm(t,r))),ui[s.prop=n]=s,t.targetTest&&(um.push(s),hx[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}NE(n,s),t.register&&t.register(Gn,s,Jn)}else JE.push(t)},Ee=255,hh={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},Xv=function(t,n,i){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(i-n)*t*6:t<.5?i:t*3<2?n+(i-n)*(2/3-t)*6:n)*Ee+.5|0},QE=function(t,n,i){var s=t?Ra(t)?[t>>16,t>>8&Ee,t&Ee]:0:hh.black,a,r,o,l,c,u,d,f,h,m;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),hh[t])s=hh[t];else if(t.charAt(0)==="#"){if(t.length<6&&(a=t.charAt(1),r=t.charAt(2),o=t.charAt(3),t="#"+a+a+r+r+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Ee,s&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(s=m=t.match(yE),!n)l=+s[0]%360/360,c=+s[1]/100,u=+s[2]/100,r=u<=.5?u*(c+1):u+c-u*c,a=u*2-r,s.length>3&&(s[3]*=1),s[0]=Xv(l+1/3,a,r),s[1]=Xv(l,a,r),s[2]=Xv(l-1/3,a,r);else if(~t.indexOf("="))return s=t.match(lx),i&&s.length<4&&(s[3]=1),s}else s=t.match(yE)||hh.transparent;s=s.map(Number)}return n&&!m&&(a=s[0]/Ee,r=s[1]/Ee,o=s[2]/Ee,d=Math.max(a,r,o),f=Math.min(a,r,o),u=(d+f)/2,d===f?l=c=0:(h=d-f,c=u>.5?h/(2-d-f):h/(d+f),l=d===a?(r-o)/h+(r<o?6:0):d===r?(o-a)/h+2:(a-r)/h+4,l*=60),s[0]=~~(l+.5),s[1]=~~(c*100+.5),s[2]=~~(u*100+.5)),i&&s.length<4&&(s[3]=1),s},jE=function(t){var n=[],i=[],s=-1;return t.split(Ca).forEach(function(a){var r=a.match(Po)||[];n.push.apply(n,r),i.push(s+=r.length+1)}),n.c=i,n},AE=function(t,n,i){var s="",a=(t+s).match(Ca),r=n?"hsla(":"rgba(",o=0,l,c,u,d;if(!a)return t;if(a=a.map(function(f){return(f=QE(f,n,1))&&r+(n?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=jE(t),l=i.c,l.join(s)!==u.c.join(s)))for(c=t.replace(Ca,"1").split(Po),d=c.length-1;o<d;o++)s+=c[o]+(~l.indexOf(o)?a.shift()||r+"0,0,0,0)":(u.length?u:a.length?a:i).shift());if(!c)for(c=t.split(Ca),d=c.length-1;o<d;o++)s+=c[o]+a[o];return s+c[d]},Ca=(function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in hh)e+="|"+t+"\\b";return new RegExp(e+")","gi")})(),WN=/hsl[a]?\(/,gx=function(t){var n=t.join(" "),i;if(Ca.lastIndex=0,Ca.test(n))return i=WN.test(n),t[1]=AE(t[1],i),t[0]=AE(t[0],i,jE(t[1])),!0},vh,hi=(function(){var e=Date.now,t=500,n=33,i=e(),s=i,a=1e3/240,r=a,o=[],l,c,u,d,f,h,m=function _(g){var p=e()-s,v=g===!0,S,x,M,w;if((p>t||p<0)&&(i+=p-n),s+=p,M=s-i,S=M-r,(S>0||v)&&(w=++d.frame,f=M-d.time*1e3,d.time=M=M/1e3,r+=S+(S>=a?4:a-S),x=1),v||(l=c(_)),x)for(h=0;h<o.length;h++)o[h](M,f,w,g)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){UE&&(!Qv&&ox()&&(Xs=Qv=window,ux=Xs.document||{},Ni.gsap=Gn,(Xs.gsapVersions||(Xs.gsapVersions=[])).push(Gn.version),LE(fm||Xs.GreenSockGlobals||!Xs.gsap&&Xs||{}),JE.forEach(KE)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(g){return setTimeout(g,r-d.time*1e3+1|0)},vh=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),vh=0,c=_h},lagSmoothing:function(g,p){t=g||1/0,n=Math.min(p||33,t)},fps:function(g){a=1e3/(g||240),r=d.time*1e3+a},add:function(g,p,v){var S=p?function(x,M,w,E){g(x,M,w,E),d.remove(S)}:g;return d.remove(g),o[v?"unshift":"push"](S),mc(),S},remove:function(g,p){~(p=o.indexOf(g))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},d})(),mc=function(){return!vh&&hi.wake()},oe={},XN=/^[\d.\-M][\d.\-,\s]/,qN=/["']/g,YN=function(t){for(var n={},i=t.substr(1,t.length-3).split(":"),s=i[0],a=1,r=i.length,o,l,c;a<r;a++)l=i[a],o=a!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[s]=isNaN(c)?c.replace(qN,"").trim():+c,s=l.substr(o+1).trim();return n},ZN=function(t){var n=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<i?t.indexOf(")",i+1):i)},JN=function(t){var n=(t+"").split("("),i=oe[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[YN(n[1])]:ZN(t).split(",").map(IE)):oe._CE&&XN.test(t)?oe._CE("",t):i},KN=function(t){return function(n){return 1-t(1-n)}},Lo=function(t,n){return t&&(Ye(t)?t:oe[t]||JN(t))||n},Io=function(t,n,i,s){i===void 0&&(i=function(l){return 1-n(1-l)}),s===void 0&&(s=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var a={easeIn:n,easeOut:i,easeInOut:s},r;return Zn(t,function(o){oe[o]=Ni[o]=a,oe[r=o.toLowerCase()]=i;for(var l in a)oe[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[o+"."+l]=a[l]}),a},$E=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},qv=function e(t,n,i){var s=n>=1?n:1,a=(i||(t?.3:.45))/(n<1?n:1),r=a/Kv*(Math.asin(1/s)||0),o=function(u){return u===1?1:s*Math.pow(2,-10*u)*yN((u-r)*a)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:$E(o);return a=Kv/a,l.config=function(c,u){return e(t,c,u)},l},Yv=function e(t,n){n===void 0&&(n=1.70158);var i=function(r){return r?--r*r*((n+1)*r+n)+1:0},s=t==="out"?i:t==="in"?function(a){return 1-i(1-a)}:$E(i);return s.config=function(a){return e(t,a)},s};Zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var n=t<5?t+1:t;Io(e+",Power"+(n-1),t?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Io("Elastic",qv("in"),qv("out"),qv());(function(e,t){var n=1/t,i=2*n,s=2.5*n,a=function(o){return o<n?e*o*o:o<i?e*Math.pow(o-1.5/t,2)+.75:o<s?e*(o-=2.25/t)*o+.9375:e*Math.pow(o-2.625/t,2)+.984375};Io("Bounce",function(r){return 1-a(1-r)},a)})(7.5625,2.75);Io("Expo",function(e){return Math.pow(2,10*(e-1))*e+e*e*e*e*e*e*(1-e)});Io("Circ",function(e){return-(RE(1-e*e)-1)});Io("Sine",function(e){return e===1?1:-xN(e*_N)+1});Io("Back",Yv("in"),Yv("out"),Yv());oe.SteppedEase=oe.steps=Ni.SteppedEase={config:function(t,n){t===void 0&&(t=1);var i=1/t,s=t+(n?0:1),a=n?1:0,r=1-Ae;return function(o){return((s*yh(0,r,o)|0)+a)*i}}};mh.ease=oe["quad.out"];Zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return fx+=e+","+e+"Params,"});var _x=function(t,n){this.id=vN++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:px,this.set=n?n.getSetter:Mm},xh=(function(){function e(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,pc(this,+n.duration,1,1),this.data=n.data,He&&(this._ctx=He,He.data.push(this)),vh||hi.wake()}var t=e.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,pc(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(mc(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Sm(this,i),!a._dp||a.parent||zE(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&qs(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ae||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),OE(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+bE(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+bE(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,s){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*a,s):this._repeat?dc(this._tTime,a)+1:1},t.timeScale=function(i,s){if(!arguments.length)return this._rts===-Ae?0:this._rts;if(this._rts===i)return this;var a=this.parent&&this._ts?mm(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ae?0:this._rts,this.totalTime(yh(-Math.abs(this._delay),this.totalDuration(),a),s!==!1),ym(this),DN(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(mc(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ae&&(this._tTime-=Ae)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Ge(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&qs(s,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(fi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mm(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=AN);var s=Nn;return Nn=i,mx(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Nn=s,this},t.globalTime=function(i){for(var s=this,a=arguments.length?i:s.rawTime();s;)a=s._start+a/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):a},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,TE(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,TE(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(ns(this,i),fi(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,fi(s)),this._dur||(this._zTime=-Ae),this},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ae,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,a;return!!(!i||this._ts&&this._initted&&i.isActive()&&(a=i.rawTime(!0))>=s&&a<this.endTime(!0)-Ae)},t.eventCallback=function(i,s,a){var r=this.vars;return arguments.length>1?(s?(r[i]=s,a&&(r[i+"Params"]=a),i==="onUpdate"&&(this._onUpdate=s)):delete r[i],this):r[i]},t.then=function(i){var s=this,a=s._prom;return new Promise(function(r){var o=Ye(i)?i:BE,l=function(){var u=s.then;s.then=null,a&&a(),Ye(o)&&(o=o(s))&&(o.then||o===s)&&(s.then=u),r(o),s.then=u};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?l():s._prom=l})},t.kill=function(){uh(this)},e})();Pi(xh.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ae,_prom:0,_ps:!1,_rts:1});var Vn=(function(e){CE(t,e);function t(i,s){var a;return i===void 0&&(i={}),a=e.call(this,i)||this,a.labels={},a.smoothChildTiming=!!i.smoothChildTiming,a.autoRemoveChildren=!!i.autoRemoveChildren,a._sort=fi(i.sortChildren),ke&&qs(i.parent||ke,wa(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),i.scrollTrigger&&VE(wa(a),i.scrollTrigger),a}var n=t.prototype;return n.to=function(s,a,r){return dh(0,arguments,this),this},n.from=function(s,a,r){return dh(1,arguments,this),this},n.fromTo=function(s,a,r,o){return dh(2,arguments,this),this},n.set=function(s,a,r){return a.duration=0,a.parent=this,fh(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new en(s,a,ns(this,r),1),this},n.call=function(s,a,r){return qs(this,en.delayedCall(0,s,a),r)},n.staggerTo=function(s,a,r,o,l,c,u){return r.duration=a,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new en(s,r,ns(this,l)),this},n.staggerFrom=function(s,a,r,o,l,c,u){return r.runBackwards=1,fh(r).immediateRender=fi(r.immediateRender),this.staggerTo(s,a,r,o,l,c,u)},n.staggerFromTo=function(s,a,r,o,l,c,u,d){return o.startAt=r,fh(o).immediateRender=fi(o.immediateRender),this.staggerTo(s,a,o,l,c,u,d)},n.render=function(s,a,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=s<=0?0:Ge(s),d=this._zTime<0!=s<0&&(this._initted||!c),f,h,m,_,g,p,v,S,x,M,w,E;if(this!==ke&&u>l&&s>=0&&(u=l),u!==this._tTime||r||d){if(o!==this._time&&c&&(u+=this._time-o,s+=this._time-o),f=u,x=this._start,S=this._ts,p=!S,d&&(c||(o=this._zTime),(s||!a)&&(this._zTime=s)),this._repeat){if(w=this._yoyo,g=c+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(g*100+s,a,r);if(f=Ge(u%g),u===l?(_=this._repeat,f=c):(M=Ge(u/g),_=~~M,_&&_===M&&(f=c,_--),f>c&&(f=c)),M=dc(this._tTime,g),!o&&this._tTime&&M!==_&&this._tTime-M*g-this._dur<=0&&(M=_),w&&_&1&&(f=c-f,E=1),_!==M&&!this._lock){var y=w&&M&1,T=y===(w&&_&1);if(_<M&&(y=!y),o=y?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Ge(_*g)),a,!c)._lock=0,this._tTime=u,!a&&this.parent&&Li(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=y?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=PN(this,Ge(o),Ge(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,o=0),!o&&u&&c&&!a&&!M&&(Li(this,"onStart"),this._tTime!==u))return this;if(f>=o&&s>=0)for(h=this._first;h;){if(m=h._next,(h._act||f>=h._start)&&h._ts&&v!==h){if(h.parent!==this)return this.render(s,a,r);if(h.render(h._ts>0?(f-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(f-h._start)*h._ts,a,r),f!==this._time||!this._ts&&!p){v=0,m&&(u+=this._zTime=-Ae);break}}h=m}else{h=this._last;for(var R=s<0?s:f;h;){if(m=h._prev,(h._act||R<=h._end)&&h._ts&&v!==h){if(h.parent!==this)return this.render(s,a,r);if(h.render(h._ts>0?(R-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(R-h._start)*h._ts,a,r||Nn&&mx(h)),f!==this._time||!this._ts&&!p){v=0,m&&(u+=this._zTime=R?-Ae:Ae);break}}h=m}}if(v&&!a&&(this.pause(),v.render(f>=o?0:-Ae)._zTime=f>=o?1:-1,this._ts))return this._start=x,ym(this),this.render(s,a,r);this._onUpdate&&!a&&Li(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((s||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&zr(this,1),!a&&!(s<0&&!o)&&(u||o||!l)&&(Li(this,u===l&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,a){var r=this;if(Ra(a)||(a=ns(this,a,s)),!(s instanceof xh)){if(Hn(s))return s.forEach(function(o){return r.add(o,a)}),this;if(dn(s))return this.addLabel(s,a);if(Ye(s))s=en.delayedCall(0,s);else return this}return this!==s?qs(this,s,a):this},n.getChildren=function(s,a,r,o){s===void 0&&(s=!0),a===void 0&&(a=!0),r===void 0&&(r=!0),o===void 0&&(o=-is);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof en?a&&l.push(c):(r&&l.push(c),s&&l.push.apply(l,c.getChildren(!0,a,r)))),c=c._next;return l},n.getById=function(s){for(var a=this.getChildren(1,1,1),r=a.length;r--;)if(a[r].vars.id===s)return a[r]},n.remove=function(s){return dn(s)?this.removeLabel(s):Ye(s)?this.killTweensOf(s):(s.parent===this&&xm(this,s),s===this._recent&&(this._recent=this._last),Uo(this))},n.totalTime=function(s,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(hi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),e.prototype.totalTime.call(this,s,a),this._forcing=0,this):this._tTime},n.addLabel=function(s,a){return this.labels[s]=ns(this,a),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,a,r){var o=en.delayedCall(0,a||_h,r);return o.data="isPause",this._hasPause=1,qs(this,o,ns(this,s))},n.removePause=function(s){var a=this._first;for(s=ns(this,s);a;)a._start===s&&a.data==="isPause"&&zr(a),a=a._next},n.killTweensOf=function(s,a,r){for(var o=this.getTweensOf(s,r),l=o.length;l--;)Ir!==o[l]&&o[l].kill(s,a);return this},n.getTweensOf=function(s,a){for(var r=[],o=ss(s),l=this._first,c=Ra(a),u;l;)l instanceof en?wN(l._targets,o)&&(c?(!Ir||l._initted&&l._ts)&&l.globalTime(0)<=a&&l.globalTime(l.totalDuration())>a:!a||l.isActive())&&r.push(l):(u=l.getTweensOf(o,a)).length&&r.push.apply(r,u),l=l._next;return r},n.tweenTo=function(s,a){a=a||{};var r=this,o=ns(r,s),l=a,c=l.startAt,u=l.onStart,d=l.onStartParams,f=l.immediateRender,h,m=en.to(r,Pi({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:a.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||Ae,onStart:function(){if(r.pause(),!h){var g=a.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());m._dur!==g&&pc(m,g,0,1).render(m._time,!0,!0),h=1}u&&u.apply(m,d||[])}},a));return f?m.render(0):m},n.tweenFromTo=function(s,a,r){return this.tweenTo(a,Pi({startAt:{time:ns(this,s)}},r))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),EE(this,ns(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),EE(this,ns(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ae)},n.shiftChildren=function(s,a,r){r===void 0&&(r=0);var o=this._first,l=this.labels,c;for(s=Ge(s);o;)o._start>=r&&(o._start+=s,o._end+=s),o=o._next;if(a)for(c in l)l[c]>=r&&(l[c]+=s);return Uo(this)},n.invalidate=function(s){var a=this._first;for(this._lock=0;a;)a.invalidate(s),a=a._next;return e.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var a=this._first,r;a;)r=a._next,this.remove(a),a=r;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Uo(this)},n.totalDuration=function(s){var a=0,r=this,o=r._last,l=is,c,u,d;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-s:s));if(r._dirty){for(d=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,qs(r,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(a-=u,(!d&&!r._dp||d&&d.smoothChildTiming)&&(r._start+=Ge(u/r._ts),r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),o._end>a&&o._ts&&(a=o._end),o=c;pc(r,r===ke&&r._time>a?r._time:a,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(s){if(ke._ts&&(OE(ke,mm(s,ke)),PE=hi.frame),hi.frame>=SE){SE+=di.autoSleep||120;var a=ke._first;if((!a||!a._ts)&&di.autoSleep&&hi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||hi.sleep()}}},t})(xh);Pi(Vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var QN=function(t,n,i,s,a,r,o){var l=new Jn(this._pt,t,n,0,1,Mx,null,a),c=0,u=0,d,f,h,m,_,g,p,v;for(l.b=i,l.e=s,i+="",s+="",(p=~s.indexOf("random("))&&(s=gc(s)),r&&(v=[i,s],r(v,t,n),i=v[0],s=v[1]),f=i.match(kv)||[];d=kv.exec(s);)m=d[0],_=s.substring(c,d.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),m!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:m.charAt(1)==="="?Oo(g,m)-g:parseFloat(m)-g,m:h&&h<4?Math.round:0},c=kv.lastIndex);return l.c=c<s.length?s.substring(c,s.length):"",l.fp=o,(cx.test(s)||p)&&(l.e=0),this._pt=l,l},vx=function(t,n,i,s,a,r,o,l,c,u){Ye(s)&&(s=s(a||0,t,r));var d=t[n],f=i!=="get"?i:Ye(d)?c?t[n.indexOf("set")||!Ye(t["get"+n.substr(3)])?n:"get"+n.substr(3)](c):t[n]():d,h=Ye(d)?c?nP:nA:Sx,m;if(dn(s)&&(~s.indexOf("random(")&&(s=gc(s)),s.charAt(1)==="="&&(m=Oo(f,s)+(Pn(f)||0),(m||m===0)&&(s=m))),!u||f!==s||sx)return!isNaN(f*s)&&s!==""?(m=new Jn(this._pt,t,n,+f||0,s-(f||0),typeof d=="boolean"?sP:iA,0,h),c&&(m.fp=c),o&&m.modifier(o,this,t),this._pt=m):(!d&&!(n in t)&&vm(n,s),QN.call(this,t,n,f,s,h,l||di.stringFilter,c))},jN=function(t,n,i,s,a){if(Ye(t)&&(t=ph(t,a,n,i,s)),!Ys(t)||t.style&&t.nodeType||Hn(t)||DE(t))return dn(t)?ph(t,a,n,i,s):t;var r={},o;for(o in t)r[o]=ph(t[o],a,n,i,s);return r},xx=function(t,n,i,s,a,r){var o,l,c,u;if(ui[t]&&(o=new ui[t]).init(a,o.rawVars?n[t]:jN(n[t],s,a,r,i),i,s,r)!==!1&&(i._pt=l=new Jn(i._pt,a,t,0,1,o.render,o,0,o.priority),i!==hc))for(c=i._ptLookup[i._targets.indexOf(a)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ir,sx,yx=function e(t,n,i){var s=t.vars,a=s.ease,r=s.startAt,o=s.immediateRender,l=s.lazy,c=s.onUpdate,u=s.runBackwards,d=s.yoyoEase,f=s.keyframes,h=s.autoRevert,m=t._dur,_=t._startAt,g=t._targets,p=t.parent,v=p&&p.data==="nested"?p.vars.targets:g,S=t._overwrite==="auto"&&!rx,x=t.timeline,M=s.easeReverse||d,w,E,y,T,R,D,L,V,X,I,H,B,q;if(x&&(!f||!a)&&(a="none"),t._ease=Lo(a,mh.ease),t._rEase=M&&(Lo(M)||t._ease),t._from=!x&&!!s.runBackwards,t._from&&(t.ratio=1),!x||f&&!s.stagger){if(V=g[0]?Fr(g[0]).harness:0,B=V&&s[V.prop],w=pm(s,hx),_&&(_._zTime<0&&_.progress(1),n<0&&u&&o&&!h?_.render(-1,!0):_.revert(u&&m?cm:EN),_._lazy=0),r){if(zr(t._startAt=en.set(g,Pi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&fi(l),startAt:null,delay:0,onUpdate:c&&function(){return Li(t,"onUpdate")},stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Nn||!o&&!h)&&t._startAt.revert(cm),o&&m&&n<=0&&i<=0){n&&(t._zTime=n);return}}else if(u&&m&&!_){if(n&&(o=!1),y=Pi({overwrite:!1,data:"isFromStart",lazy:o&&!_&&fi(l),immediateRender:o,stagger:0,parent:p},w),B&&(y[V.prop]=B),zr(t._startAt=en.set(g,y)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Nn?t._startAt.revert(cm):t._startAt.render(-1,!0)),t._zTime=n,!o)e(t._startAt,Ae,Ae);else if(!n)return}for(t._pt=t._ptCache=0,l=m&&fi(l)||l&&!m,E=0;E<g.length;E++){if(R=g[E],L=R._gsap||dx(g)[E]._gsap,t._ptLookup[E]=I={},jv[L.id]&&Br.length&&dm(),H=v===g?E:v.indexOf(R),V&&(X=new V).init(R,B||w,t,H,v)!==!1&&(t._pt=T=new Jn(t._pt,R,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(et){I[et]=T}),X.priority&&(D=1)),!V||B)for(y in w)ui[y]&&(X=xx(y,w,t,H,R,v))?X.priority&&(D=1):I[y]=T=vx.call(t,R,y,"get",w[y],H,v,0,s.stringFilter);t._op&&t._op[E]&&t.kill(R,t._op[E]),S&&t._pt&&(Ir=t,ke.killTweensOf(R,I,t.globalTime(n)),q=!t.parent,Ir=0),t._pt&&l&&(jv[L.id]=1)}D&&Tx(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!q,f&&n<=0&&x.render(is,!0,!0)},$N=function(t,n,i,s,a,r,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[n],u,d,f,h;if(!c)for(c=t._ptCache[n]=[],f=t._ptLookup,h=t._targets.length;h--;){if(u=f[h][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return sx=1,t.vars[n]="+=0",yx(t,o),sx=0,l?gh(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)d=c[h],u=d._pt||d,u.s=(s||s===0)&&!a?s:u.s+(s||0)+r*u.c,u.c=i-u.s,d.e&&(d.e=Ze(i)+Pn(d.e)),d.b&&(d.b=u.s+Pn(d.b))},tP=function(t,n){var i=t[0]?Fr(t[0]).harness:0,s=i&&i.aliases,a,r,o,l;if(!s)return n;a=fc({},n);for(r in s)if(r in a)for(l=s[r].split(","),o=l.length;o--;)a[l[o]]=a[r];return a},eP=function(t,n,i,s){var a=n.ease||s||"power1.inOut",r,o;if(Hn(n))o=i[t]||(i[t]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:a})});else for(r in n)o=i[r]||(i[r]=[]),r==="ease"||o.push({t:parseFloat(t),v:n[r],e:a})},ph=function(t,n,i,s,a){return Ye(t)?t.call(n,i,s,a):dn(t)&&~t.indexOf("random(")?gc(t):t},tA=fx+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",eA={};Zn(tA+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return eA[e]=1});var en=(function(e){CE(t,e);function t(i,s,a,r){var o;typeof s=="number"&&(a.duration=s,s=a,a=null),o=e.call(this,r?s:fh(s))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,f=l.stagger,h=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=s.parent||ke,v=(Hn(i)||DE(i)?Ra(i[0]):"length"in s)?[i]:ss(i),S,x,M,w,E,y,T,R;if(o._targets=v.length?dx(v):gh("GSAP target "+i+" not found. https://gsap.com",!di.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,m||f||lm(c)||lm(u)){s=o.vars;var D=s.easeReverse||s.yoyoEase;if(S=o.timeline=new Vn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:v}),S.kill(),S.parent=S._dp=wa(o),S._start=0,f||lm(c)||lm(u)){if(w=v.length,T=f&&WE(f),Ys(f))for(E in f)~tA.indexOf(E)&&(R||(R={}),R[E]=f[E]);for(x=0;x<w;x++)M=pm(s,eA),M.stagger=0,D&&(M.easeReverse=D),R&&fc(M,R),y=v[x],M.duration=+ph(c,wa(o),x,y,v),M.delay=(+ph(u,wa(o),x,y,v)||0)-o._delay,!f&&w===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),S.to(y,M,T?T(x,y,v):0),S._ease=oe.none;S.duration()?c=u=0:o.timeline=0}else if(m){fh(Pi(S.vars.defaults,{ease:"none"})),S._ease=Lo(m.ease||s.ease||"none");var L=0,V,X,I;if(Hn(m))m.forEach(function(H){return S.to(v,H,">")}),S.duration();else{M={};for(E in m)E==="ease"||E==="easeEach"||eP(E,m[E],M,m.easeEach);for(E in M)for(V=M[E].sort(function(H,B){return H.t-B.t}),L=0,x=0;x<V.length;x++)X=V[x],I={ease:X.e,duration:(X.t-(x?V[x-1].t:0))/100*c},I[E]=X.v,S.to(v,I,L),L+=I.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return h===!0&&!rx&&(Ir=wa(o),ke.killTweensOf(v),Ir=0),qs(p,wa(o),a),s.reversed&&o.reverse(),s.paused&&o.paused(!0),(d||!c&&!m&&o._start===Ge(p._time)&&fi(d)&&UN(wa(o))&&p.data!=="nested")&&(o._tTime=-Ae,o.render(Math.max(0,-u)||0)),g&&VE(wa(o),g),o}var n=t.prototype;return n.render=function(s,a,r){var o=this._time,l=this._tDur,c=this._dur,u=s<0,d=s>l-Ae&&!u?l:s<Ae?0:s,f,h,m,_,g,p,v,S;if(!c)NN(this,s,a,r);else if(d!==this._tTime||!s||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=d,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+s,a,r);if(f=Ge(d%_),d===l?(m=this._repeat,f=c):(g=Ge(d/_),m=~~g,m&&m===g?(f=c,m--):f>c&&(f=c)),p=this._yoyo&&m&1,p&&(f=c-f),g=dc(this._tTime,_),f===o&&!r&&this._initted&&m===g)return this._tTime=d,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=r=1,this.render(Ge(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(HE(this,u?s:f,r,a,d))return this._tTime=0,this;if(o!==this._time&&!(r&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(s,a,r)}if(this._rEase){var x=f<o;if(x!==this._inv){var M=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(x?-1:1)/M:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!a&&!g&&(Li(this,"onStart"),this._tTime!==d))return this;for(h=this._pt;h;)h.r(v,h.d),h=h._next;S&&S.render(s<0?s:S._dur*S._ease(f/this._dur),a,r)||this._startAt&&(this._zTime=s),this._onUpdate&&!a&&(u&&$v(this,s,a,r),Li(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!a&&this.parent&&Li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&$v(this,s,!0,!0),(s||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&zr(this,1),!a&&!(u&&!o)&&(d||o||p)&&(Li(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),e.prototype.invalidate.call(this,s)},n.resetTo=function(s,a,r,o,l){vh||hi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||yx(this,c),u=this._ease(c/this._dur),$N(this,s,a,r,o,u,c,l)?this.resetTo(s,a,r,o,1):(Sm(this,0),this.parent||FE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,a){if(a===void 0&&(a="all"),!s&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?uh(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Nn),this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(s,a,Ir&&Ir.vars.overwrite!==!0)._first||uh(this),this.parent&&r!==this.timeline.totalDuration()&&pc(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=s?ss(s):o,c=this._ptLookup,u=this._pt,d,f,h,m,_,g,p;if((!a||a==="all")&&RN(o,l))return a==="all"&&(this._pt=0),uh(this);for(d=this._op=this._op||[],a!=="all"&&(dn(a)&&(_={},Zn(a,function(v){return _[v]=1}),a=_),a=tP(o,a)),p=o.length;p--;)if(~l.indexOf(o[p])){f=c[p],a==="all"?(d[p]=a,m=f,h={}):(h=d[p]=d[p]||{},m=a);for(_ in m)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&xm(this,g,"_pt"),delete f[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&uh(this),this},t.to=function(s,a){return new t(s,a,arguments[2])},t.from=function(s,a){return dh(1,arguments)},t.delayedCall=function(s,a,r,o){return new t(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:a,onReverseComplete:a,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},t.fromTo=function(s,a,r){return dh(2,arguments)},t.set=function(s,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new t(s,a)},t.killTweensOf=function(s,a,r){return ke.killTweensOf(s,a,r)},t})(xh);Pi(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zn("staggerTo,staggerFrom,staggerFromTo",function(e){en[e]=function(){var t=new Vn,n=ex.call(arguments,0);return n.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,n)}});var Sx=function(t,n,i){return t[n]=i},nA=function(t,n,i){return t[n](i)},nP=function(t,n,i,s){return t[n](s.fp,i)},iP=function(t,n,i){return t.setAttribute(n,i)},Mm=function(t,n){return Ye(t[n])?nA:_m(t[n])&&t.setAttribute?iP:Sx},iA=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},sP=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},Mx=function(t,n){var i=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=n.c}n.set(n.t,n.p,s,n)},bx=function(t,n){for(var i=n._pt;i;)i.r(t,i.d),i=i._next},aP=function(t,n,i,s){for(var a=this._pt,r;a;)r=a._next,a.p===s&&a.modifier(t,n,i),a=r},rP=function(t){for(var n=this._pt,i,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?xm(this,n,"_pt"):n.dep||(i=1),n=s;return!i},oP=function(t,n,i,s){s.mSet(t,n,s.m.call(s.tween,i,s.mt),s)},Tx=function(t){for(var n=t._pt,i,s,a,r;n;){for(i=n._next,s=a;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:r)?n._prev._next=n:a=n,(n._next=s)?s._prev=n:r=n,n=i}t._pt=a},Jn=(function(){function e(n,i,s,a,r,o,l,c,u){this.t=i,this.s=a,this.c=r,this.p=s,this.r=o||iA,this.d=l||this,this.set=c||Sx,this.pr=u||0,this._next=n,n&&(n._prev=this)}var t=e.prototype;return t.modifier=function(i,s,a){this.mSet=this.mSet||this.set,this.set=oP,this.m=i,this.mt=a,this.tween=s},e})();Zn(fx+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(e){return hx[e]=1});Ni.TweenMax=Ni.TweenLite=en;Ni.TimelineLite=Ni.TimelineMax=Vn;ke=new Vn({sortChildren:!1,defaults:mh,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});di.stringFilter=gx;var No=[],hm={},lP=[],wE=0,cP=0,Zv=function(t){return(hm[t]||lP).map(function(n){return n()})},ax=function(){var t=Date.now(),n=[];t-wE>2&&(Zv("matchMediaInit"),No.forEach(function(i){var s=i.queries,a=i.conditions,r,o,l,c;for(o in s)r=Xs.matchMedia(s[o]).matches,r&&(l=1),r!==a[o]&&(a[o]=r,c=1);c&&(i.revert(),l&&n.push(i))}),Zv("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),wE=t,Zv("matchMedia"))},sA=(function(){function e(n,i){this.selector=i&&nx(i),this.data=[],this._r=[],this.isReverted=!1,this.id=cP++,n&&this.add(n)}var t=e.prototype;return t.add=function(i,s,a){Ye(i)&&(a=s,s=i,i=Ye);var r=this,o=function(){var c=He,u=r.selector,d;return c&&c!==r&&c.data.push(r),a&&(r.selector=nx(a)),He=r,d=s.apply(r,arguments),Ye(d)&&r._r.push(d),He=c,r.selector=u,r.isReverted=!1,d};return r.last=o,i===Ye?o(r,function(l){return r.add(null,l)}):i?r[i]=o:o},t.ignore=function(i){var s=He;He=null,i(this),He=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof e?i.push.apply(i,s.getTweens()):s instanceof en&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var a=this;if(i?(function(){for(var o=a.getTweens(),l=a.data.length,c;l--;)c=a.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=a.data.length;l--;)c=a.data[l],c instanceof Vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(i);a._r.forEach(function(u){return u(i,a)}),a.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),s)for(var r=No.length;r--;)No[r].id===this.id&&No.splice(r,1)},t.revert=function(i){this.kill(i||{})},e})(),uP=(function(){function e(n){this.contexts=[],this.scope=n,He&&He.data.push(this)}var t=e.prototype;return t.add=function(i,s,a){Ys(i)||(i={matches:i});var r=new sA(0,a||this.scope),o=r.conditions={},l,c,u;He&&!r.selector&&(r.selector=He.selector),this.contexts.push(r),s=r.add("onMatch",s),r.queries=i;for(c in i)c==="all"?u=1:(l=Xs.matchMedia(i[c]),l&&(No.indexOf(r)<0&&No.push(r),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ax):l.addEventListener("change",ax)));return u&&s(r,function(d){return r.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},e})(),gm={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];n.forEach(function(s){return KE(s)})},timeline:function(t){return new Vn(t)},getTweensOf:function(t,n){return ke.getTweensOf(t,n)},getProperty:function(t,n,i,s){dn(t)&&(t=ss(t)[0]);var a=Fr(t||{}).get,r=i?BE:IE;return i==="native"&&(i=""),t&&(n?r((ui[n]&&ui[n].get||a)(t,n,i,s)):function(o,l,c){return r((ui[o]&&ui[o].get||a)(t,o,l,c))})},quickSetter:function(t,n,i){if(t=ss(t),t.length>1){var s=t.map(function(u){return Gn.quickSetter(u,n,i)}),a=s.length;return function(u){for(var d=a;d--;)s[d](u)}}t=t[0]||{};var r=ui[n],o=Fr(t),l=o.harness&&(o.harness.aliases||{})[n]||n,c=r?function(u){var d=new r;hc._pt=0,d.init(t,i?u+i:u,hc,0,[t]),d.render(1,d),hc._pt&&bx(1,hc)}:o.set(t,l);return r?c:function(u){return c(t,l,i?u+i:u,o,1)}},quickTo:function(t,n,i){var s,a=Gn.to(t,Pi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),r=function(l,c,u){return a.resetTo(n,l,c,u)};return r.tween=a,r},isTweening:function(t){return ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Lo(t.ease,mh.ease)),ME(mh,t||{})},config:function(t){return ME(di,t||{})},registerEffect:function(t){var n=t.name,i=t.effect,s=t.plugins,a=t.defaults,r=t.extendTimeline;(s||"").split(",").forEach(function(o){return o&&!ui[o]&&!Ni[o]&&gh(n+" effect requires "+o+" plugin.")}),Wv[n]=function(o,l,c){return i(ss(o),Pi(l||{},a),c)},r&&(Vn.prototype[n]=function(o,l,c){return this.add(Wv[n](o,Ys(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,n){oe[t]=Lo(n)},parseEase:function(t,n){return arguments.length?Lo(t,n):oe},getById:function(t){return ke.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var i=new Vn(t),s,a;for(i.smoothChildTiming=fi(t.smoothChildTiming),ke.remove(i),i._dp=0,i._time=i._tTime=ke._time,s=ke._first;s;)a=s._next,(n||!(!s._dur&&s instanceof en&&s.vars.onComplete===s._targets[0]))&&qs(i,s,s._start-s._delay),s=a;return qs(ke,i,0),i},context:function(t,n){return t?new sA(t,n):He},matchMedia:function(t){return new uP(t)},matchMediaRefresh:function(){return No.forEach(function(t){var n=t.conditions,i,s;for(s in n)n[s]&&(n[s]=!1,i=1);i&&t.revert()})||ax()},addEventListener:function(t,n){var i=hm[t]||(hm[t]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(t,n){var i=hm[t],s=i&&i.indexOf(n);s>=0&&i.splice(s,1)},utils:{wrap:HN,wrapYoyo:GN,distribute:WE,random:qE,snap:XE,normalize:VN,getUnit:Pn,clamp:IN,splitColor:QE,toArray:ss,selector:nx,mapRange:ZE,pipe:FN,unitize:zN,interpolate:kN,shuffle:kE},install:LE,effects:Wv,ticker:hi,updateRoot:Vn.updateRoot,plugins:ui,globalTimeline:ke,core:{PropTween:Jn,globals:NE,Tween:en,Timeline:Vn,Animation:xh,getCache:Fr,_removeLinkedListItem:xm,reverting:function(){return Nn},context:function(t){return t&&He&&(He.data.push(t),t._ctx=He),He},suppressOverwrites:function(t){return rx=t}}};Zn("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return gm[e]=en[e]});hi.add(Vn.updateRoot);hc=gm.to({},{duration:0});var hP=function(t,n){for(var i=t._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},fP=function(t,n){var i=t._targets,s,a,r;for(s in n)for(a=i.length;a--;)r=t._ptLookup[a][s],r&&(r=r.d)&&(r._pt&&(r=hP(r,s)),r&&r.modifier&&r.modifier(n[s],t,i[a],s))},Jv=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,a,r){r._onInit=function(o){var l,c;if(dn(a)&&(l={},Zn(a,function(u){return l[u]=1}),a=l),n){l={};for(c in a)l[c]=n(a[c]);a=l}fP(o,a)}}}},Gn=gm.registerPlugin({name:"attr",init:function(t,n,i,s,a){var r,o,l;this.tween=i;for(r in n)l=t.getAttribute(r)||"",o=this.add(t,"setAttribute",(l||0)+"",n[r],s,a,0,0,r),o.op=r,o.b=l,this._props.push(r)},render:function(t,n){for(var i=n._pt;i;)Nn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,n){for(var i=n.length;i--;)this.add(t,i,t[i]||0,n[i],0,0,0,0,0,1)}},Jv("roundProps",ix),Jv("modifiers"),Jv("snap",XE))||gm;en.version=Vn.version=Gn.version="3.15.0";UE=1;ox()&&mc();var dP=oe.Power0,pP=oe.Power1,mP=oe.Power2,gP=oe.Power3,_P=oe.Power4,vP=oe.Linear,xP=oe.Quad,yP=oe.Cubic,SP=oe.Quart,MP=oe.Quint,bP=oe.Strong,TP=oe.Elastic,EP=oe.Back,AP=oe.SteppedEase,wP=oe.Bounce,CP=oe.Sine,RP=oe.Expo,DP=oe.Circ;var aA,Hr,vc,Dx,Vo,UP,rA,Ux,LP=function(){return typeof window<"u"},Ua={},zo=180/Math.PI,xc=Math.PI/180,_c=Math.atan2,oA=1e8,Lx=/([A-Z])/g,NP=/(left|right|width|margin|padding|x)/i,PP=/[\s,\(]\S/,Zs={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ax=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},OP=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},IP=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},BP=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},FP=function(t,n){var i=n.s+n.c*t;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},mA=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},gA=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},zP=function(t,n,i){return t.style[n]=i},VP=function(t,n,i){return t.style.setProperty(n,i)},HP=function(t,n,i){return t._gsap[n]=i},GP=function(t,n,i){return t._gsap.scaleX=t._gsap.scaleY=i},kP=function(t,n,i,s,a){var r=t._gsap;r.scaleX=r.scaleY=i,r.renderTransform(a,r)},WP=function(t,n,i,s,a){var r=t._gsap;r[n]=i,r.renderTransform(a,r)},We="transform",pi=We+"Origin",XP=function e(t,n){var i=this,s=this.target,a=s.style,r=s._gsap;if(t in Ua&&a){if(this.tfm=this.tfm||{},t!=="transform")t=Zs[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=Da(s,o)}):this.tfm[t]=r.x?r[t]:Da(s,t),t===pi&&(this.tfm.zOrigin=r.zOrigin);else return Zs.transform.split(",").forEach(function(o){return e.call(i,o,n)});if(this.props.indexOf(We)>=0)return;r.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(pi,n,"")),t=We}(a||n)&&this.props.push(t,n,a[t])},_A=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},qP=function(){var t=this.props,n=this.target,i=n.style,s=n._gsap,a,r;for(a=0;a<t.length;a+=3)t[a+1]?t[a+1]===2?n[t[a]](t[a+2]):n[t[a]]=t[a+2]:t[a+2]?i[t[a]]=t[a+2]:i.removeProperty(t[a].substr(0,2)==="--"?t[a]:t[a].replace(Lx,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)s[r]=this.tfm[r];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),a=Ux(),(!a||!a.isStart)&&!i[We]&&(_A(i),s.zOrigin&&i[pi]&&(i[pi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},vA=function(t,n){var i={target:t,props:[],revert:qP,save:XP};return t._gsap||Gn.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return i.save(s)}),i},xA,wx=function(t,n){var i=Hr.createElementNS?Hr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Hr.createElement(t);return i&&i.style?i:Hr.createElement(t)},Oi=function e(t,n,i){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(Lx,"-$1").toLowerCase())||s.getPropertyValue(n)||!i&&e(t,yc(n)||n,1)||""},lA="O,Moz,ms,Ms,Webkit".split(","),yc=function(t,n,i){var s=n||Vo,a=s.style,r=5;if(t in a&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(lA[r]+t in a););return r<0?null:(r===3?"ms":r>=0?lA[r]:"")+t},Cx=function(){LP()&&window.document&&(aA=window,Hr=aA.document,vc=Hr.documentElement,Vo=wx("div")||{style:{}},UP=wx("div"),We=yc(We),pi=We+"Origin",Vo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xA=!!yc("perspective"),Ux=Gn.core.reverting,Dx=1)},cA=function(t){var n=t.ownerSVGElement,i=wx("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),a;s.style.display="block",i.appendChild(s),vc.appendChild(i);try{a=s.getBBox()}catch{}return i.removeChild(s),vc.removeChild(i),a},uA=function(t,n){for(var i=n.length;i--;)if(t.hasAttribute(n[i]))return t.getAttribute(n[i])},yA=function(t){var n,i;try{n=t.getBBox()}catch{n=cA(t),i=1}return n&&(n.width||n.height)||i||(n=cA(t)),n&&!n.width&&!n.x&&!n.y?{x:+uA(t,["x","cx","x1"])||0,y:+uA(t,["y","cy","y1"])||0,width:0,height:0}:n},SA=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&yA(t))},kr=function(t,n){if(n){var i=t.style,s;n in Ua&&n!==pi&&(n=We),i.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(s==="--"?n:n.replace(Lx,"-$1").toLowerCase())):i.removeAttribute(n)}},Gr=function(t,n,i,s,a,r){var o=new Jn(t._pt,n,i,0,1,r?gA:mA);return t._pt=o,o.b=s,o.e=a,t._props.push(i),o},hA={deg:1,rad:1,turn:1},YP={grid:1,flex:1},Wr=function e(t,n,i,s){var a=parseFloat(i)||0,r=(i+"").trim().substr((a+"").length)||"px",o=Vo.style,l=NP.test(n),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=s==="px",h=s==="%",m,_,g,p;if(s===r||!a||hA[s]||hA[r])return a;if(r!=="px"&&!f&&(a=e(t,n,i,"px")),p=t.getCTM&&SA(t),(h||r==="%")&&(Ua[n]||~n.indexOf("adius")))return m=p?t.getBBox()[l?"width":"height"]:t[u],Ze(h?a/m*d:a/100*m);if(o[l?"width":"height"]=d+(f?r:s),_=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Hr||!_.appendChild)&&(_=Hr.body),g=_._gsap,g&&h&&g.width&&l&&g.time===hi.time&&!g.uncache)return Ze(a/g.width*d);if(h&&(n==="height"||n==="width")){var v=t.style[n];t.style[n]=d+s,m=t[u],v?t.style[n]=v:kr(t,n)}else(h||r==="%")&&!YP[Oi(_,"display")]&&(o.position=Oi(t,"position")),_===t&&(o.position="static"),_.appendChild(Vo),m=Vo[u],_.removeChild(Vo),o.position="absolute";return l&&h&&(g=Fr(_),g.time=hi.time,g.width=_[u]),Ze(f?m*a/d:m&&a?d/m*a:0)},Da=function(t,n,i,s){var a;return Dx||Cx(),n in Zs&&n!=="transform"&&(n=Zs[n],~n.indexOf(",")&&(n=n.split(",")[0])),Ua[n]&&n!=="transform"?(a=bh(t,s),a=n!=="transformOrigin"?a[n]:a.svg?a.origin:Tm(Oi(t,pi))+" "+a.zOrigin+"px"):(a=t.style[n],(!a||a==="auto"||s||~(a+"").indexOf("calc("))&&(a=bm[n]&&bm[n](t,n,i)||Oi(t,n)||px(t,n)||(n==="opacity"?1:0))),i&&!~(a+"").trim().indexOf(" ")?Wr(t,n,a,i)+i:a},ZP=function(t,n,i,s){if(!i||i==="none"){var a=yc(n,t,1),r=a&&Oi(t,a,1);r&&r!==i?(n=a,i=r):n==="borderColor"&&(i=Oi(t,"borderTopColor"))}var o=new Jn(this._pt,t.style,n,0,1,Mx),l=0,c=0,u,d,f,h,m,_,g,p,v,S,x,M;if(o.b=i,o.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=Oi(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(_=t.style[n],t.style[n]=s,s=Oi(t,n)||s,_?t.style[n]=_:kr(t,n)),u=[i,s],gx(u),i=u[0],s=u[1],f=i.match(Po)||[],M=s.match(Po)||[],M.length){for(;d=Po.exec(s);)g=d[0],v=s.substring(l,d.index),m?m=(m+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(m=1),g!==(_=f[c++]||"")&&(h=parseFloat(_)||0,x=_.substr((h+"").length),g.charAt(1)==="="&&(g=Oo(h,g)+x),p=parseFloat(g),S=g.substr((p+"").length),l=Po.lastIndex-S.length,S||(S=S||di.units[n]||x,l===s.length&&(s+=S,o.e+=S)),x!==S&&(h=Wr(t,n,_,S)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:h,c:p-h,m:m&&m<4||n==="zIndex"?Math.round:0});o.c=l<s.length?s.substring(l,s.length):""}else o.r=n==="display"&&s==="none"?gA:mA;return cx.test(s)&&(o.e=0),this._pt=o,o},fA={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},JP=function(t){var n=t.split(" "),i=n[0],s=n[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),n[0]=fA[i]||i,n[1]=fA[s]||s,n.join(" ")},KP=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,s=i.style,a=n.u,r=i._gsap,o,l,c;if(a==="all"||a===!0)s.cssText="",l=1;else for(a=a.split(","),c=a.length;--c>-1;)o=a[c],Ua[o]&&(l=1,o=o==="transformOrigin"?pi:We),kr(i,o);l&&(kr(i,We),r&&(r.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",bh(i,1),r.uncache=1,_A(s)))}},bm={clearProps:function(t,n,i,s,a){if(a.data!=="isFromStart"){var r=t._pt=new Jn(t._pt,n,i,0,0,KP);return r.u=s,r.pr=-10,r.tween=a,t._props.push(i),1}}},Mh=[1,0,0,1,0,0],MA={},bA=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},dA=function(t){var n=Oi(t,We);return bA(n)?Mh:n.substr(7).match(lx).map(Ze)},Nx=function(t,n){var i=t._gsap||Fr(t),s=t.style,a=dA(t),r,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,a=[l.a,l.b,l.c,l.d,l.e,l.f],a.join(",")==="1,0,0,1,0,0"?Mh:a):(a===Mh&&!t.offsetParent&&t!==vc&&!i.svg&&(l=s.display,s.display="block",r=t.parentNode,(!r||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,vc.appendChild(t)),a=dA(t),l?s.display=l:kr(t,"display"),c&&(o?r.insertBefore(t,o):r?r.appendChild(t):vc.removeChild(t))),n&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Rx=function(t,n,i,s,a,r){var o=t._gsap,l=a||Nx(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,f=o.yOffset||0,h=l[0],m=l[1],_=l[2],g=l[3],p=l[4],v=l[5],S=n.split(" "),x=parseFloat(S[0])||0,M=parseFloat(S[1])||0,w,E,y,T;i?l!==Mh&&(E=h*g-m*_)&&(y=x*(g/E)+M*(-_/E)+(_*v-g*p)/E,T=x*(-m/E)+M*(h/E)-(h*v-m*p)/E,x=y,M=T):(w=yA(t),x=w.x+(~S[0].indexOf("%")?x/100*w.width:x),M=w.y+(~(S[1]||S[0]).indexOf("%")?M/100*w.height:M)),s||s!==!1&&o.smooth?(p=x-c,v=M-u,o.xOffset=d+(p*h+v*_)-p,o.yOffset=f+(p*m+v*g)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=M,o.smooth=!!s,o.origin=n,o.originIsAbsolute=!!i,t.style[pi]="0px 0px",r&&(Gr(r,o,"xOrigin",c,x),Gr(r,o,"yOrigin",u,M),Gr(r,o,"xOffset",d,o.xOffset),Gr(r,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+M)},bh=function(t,n){var i=t._gsap||new _x(t);if("x"in i&&!n&&!i.uncache)return i;var s=t.style,a=i.scaleX<0,r="px",o="deg",l=getComputedStyle(t),c=Oi(t,pi)||"0",u,d,f,h,m,_,g,p,v,S,x,M,w,E,y,T,R,D,L,V,X,I,H,B,q,et,ot,at,mt,Qt,ee,Gt;return u=d=f=_=g=p=v=S=x=0,h=m=1,i.svg=!!(t.getCTM&&SA(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(s[We]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[We]!=="none"?l[We]:"")),s.scale=s.rotate=s.translate="none"),E=Nx(t,i.svg),i.svg&&(i.uncache?(q=t.getBBox(),c=i.xOrigin-q.x+"px "+(i.yOrigin-q.y)+"px",B=""):B=!n&&t.getAttribute("data-svg-origin"),Rx(t,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,E)),M=i.xOrigin||0,w=i.yOrigin||0,E!==Mh&&(D=E[0],L=E[1],V=E[2],X=E[3],u=I=E[4],d=H=E[5],E.length===6?(h=Math.sqrt(D*D+L*L),m=Math.sqrt(X*X+V*V),_=D||L?_c(L,D)*zo:0,v=V||X?_c(V,X)*zo+_:0,v&&(m*=Math.abs(Math.cos(v*xc))),i.svg&&(u-=M-(M*D+w*V),d-=w-(M*L+w*X))):(Gt=E[6],Qt=E[7],ot=E[8],at=E[9],mt=E[10],ee=E[11],u=E[12],d=E[13],f=E[14],y=_c(Gt,mt),g=y*zo,y&&(T=Math.cos(-y),R=Math.sin(-y),B=I*T+ot*R,q=H*T+at*R,et=Gt*T+mt*R,ot=I*-R+ot*T,at=H*-R+at*T,mt=Gt*-R+mt*T,ee=Qt*-R+ee*T,I=B,H=q,Gt=et),y=_c(-V,mt),p=y*zo,y&&(T=Math.cos(-y),R=Math.sin(-y),B=D*T-ot*R,q=L*T-at*R,et=V*T-mt*R,ee=X*R+ee*T,D=B,L=q,V=et),y=_c(L,D),_=y*zo,y&&(T=Math.cos(y),R=Math.sin(y),B=D*T+L*R,q=I*T+H*R,L=L*T-D*R,H=H*T-I*R,D=B,I=q),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),h=Ze(Math.sqrt(D*D+L*L+V*V)),m=Ze(Math.sqrt(H*H+Gt*Gt)),y=_c(I,H),v=Math.abs(y)>2e-4?y*zo:0,x=ee?1/(ee<0?-ee:ee):0),i.svg&&(B=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!bA(Oi(t,We)),B&&t.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(a?(h*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+r,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+r,i.z=f+r,i.scaleX=Ze(h),i.scaleY=Ze(m),i.rotation=Ze(_)+o,i.rotationX=Ze(g)+o,i.rotationY=Ze(p)+o,i.skewX=v+o,i.skewY=S+o,i.transformPerspective=x+r,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(s[pi]=Tm(c)),i.xOffset=i.yOffset=0,i.force3D=di.force3D,i.renderTransform=i.svg?jP:xA?TA:QP,i.uncache=0,i},Tm=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ex=function(t,n,i){var s=Pn(n);return Ze(parseFloat(n)+parseFloat(Wr(t,"x",i+"px",s)))+s},QP=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,TA(t,n)},Bo="0deg",Sh="0px",Fo=") ",TA=function(t,n){var i=n||this,s=i.xPercent,a=i.yPercent,r=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,f=i.skewX,h=i.skewY,m=i.scaleX,_=i.scaleY,g=i.transformPerspective,p=i.force3D,v=i.target,S=i.zOrigin,x="",M=p==="auto"&&t&&t!==1||p===!0;if(S&&(d!==Bo||u!==Bo)){var w=parseFloat(u)*xc,E=Math.sin(w),y=Math.cos(w),T;w=parseFloat(d)*xc,T=Math.cos(w),r=Ex(v,r,E*T*-S),o=Ex(v,o,-Math.sin(w)*-S),l=Ex(v,l,y*T*-S+S)}g!==Sh&&(x+="perspective("+g+Fo),(s||a)&&(x+="translate("+s+"%, "+a+"%) "),(M||r!==Sh||o!==Sh||l!==Sh)&&(x+=l!==Sh||M?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+Fo),c!==Bo&&(x+="rotate("+c+Fo),u!==Bo&&(x+="rotateY("+u+Fo),d!==Bo&&(x+="rotateX("+d+Fo),(f!==Bo||h!==Bo)&&(x+="skew("+f+", "+h+Fo),(m!==1||_!==1)&&(x+="scale("+m+", "+_+Fo),v.style[We]=x||"translate(0, 0)"},jP=function(t,n){var i=n||this,s=i.xPercent,a=i.yPercent,r=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,f=i.scaleY,h=i.target,m=i.xOrigin,_=i.yOrigin,g=i.xOffset,p=i.yOffset,v=i.forceCSS,S=parseFloat(r),x=parseFloat(o),M,w,E,y,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=xc,c*=xc,M=Math.cos(l)*d,w=Math.sin(l)*d,E=Math.sin(l-c)*-f,y=Math.cos(l-c)*f,c&&(u*=xc,T=Math.tan(c-u),T=Math.sqrt(1+T*T),E*=T,y*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),M*=T,w*=T)),M=Ze(M),w=Ze(w),E=Ze(E),y=Ze(y)):(M=d,y=f,w=E=0),(S&&!~(r+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(S=Wr(h,"x",r,"px"),x=Wr(h,"y",o,"px")),(m||_||g||p)&&(S=Ze(S+m-(m*M+_*E)+g),x=Ze(x+_-(m*w+_*y)+p)),(s||a)&&(T=h.getBBox(),S=Ze(S+s/100*T.width),x=Ze(x+a/100*T.height)),T="matrix("+M+","+w+","+E+","+y+","+S+","+x+")",h.setAttribute("transform",T),v&&(h.style[We]=T)},$P=function(t,n,i,s,a){var r=360,o=dn(a),l=parseFloat(a)*(o&&~a.indexOf("rad")?zo:1),c=l-s,u=s+c+"deg",d,f;return o&&(d=a.split("_")[1],d==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),d==="cw"&&c<0?c=(c+r*oA)%r-~~(c/r)*r:d==="ccw"&&c>0&&(c=(c-r*oA)%r-~~(c/r)*r)),t._pt=f=new Jn(t._pt,n,i,s,c,OP),f.e=u,f.u="deg",t._props.push(i),f},pA=function(t,n){for(var i in n)t[i]=n[i];return t},tO=function(t,n,i){var s=pA({},i._gsap),a="perspective,force3D,transformOrigin,svgOrigin",r=i.style,o,l,c,u,d,f,h,m;s.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),r[We]=n,o=bh(i,1),kr(i,We),i.setAttribute("transform",c)):(c=getComputedStyle(i)[We],r[We]=n,o=bh(i,1),r[We]=c);for(l in Ua)c=s[l],u=o[l],c!==u&&a.indexOf(l)<0&&(h=Pn(c),m=Pn(u),d=h!==m?Wr(i,l,c,m):parseFloat(c),f=parseFloat(u),t._pt=new Jn(t._pt,o,l,d,f-d,Ax),t._pt.u=m||0,t._props.push(l));pA(o,s)};Zn("padding,margin,Width,Radius",function(e,t){var n="Top",i="Right",s="Bottom",a="Left",r=(t<3?[n,i,s,a]:[n+a,n+i,s+i,s+a]).map(function(o){return t<2?e+o:"border"+o+e});bm[t>1?"border"+e:e]=function(o,l,c,u,d){var f,h;if(arguments.length<4)return f=r.map(function(m){return Da(o,m,c)}),h=f.join(" "),h.split(f[0]).length===5?f[0]:h;f=(u+"").split(" "),h={},r.forEach(function(m,_){return h[m]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,h,d)}});var Px={name:"css",register:Cx,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,i,s,a){var r=this._props,o=t.style,l=i.vars.startAt,c,u,d,f,h,m,_,g,p,v,S,x,M,w,E,y,T;Dx||Cx(),this.styles=this.styles||vA(t),y=this.styles.props,this.tween=i;for(_ in n)if(_!=="autoRound"&&(u=n[_],!(ui[_]&&xx(_,n,i,s,t,a)))){if(h=typeof u,m=bm[_],h==="function"&&(u=u.call(i,s,t,a),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=gc(u)),m)m(this,t,_,u,i)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Ca.lastIndex=0,Ca.test(c)||(g=Pn(c),p=Pn(u),p?g!==p&&(c=Wr(t,_,c,p)+p):g&&(u+=g)),this.add(o,"setProperty",c,u,s,a,0,0,_),r.push(_),y.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,s,t,a):l[_],dn(c)&&~c.indexOf("random(")&&(c=gc(c)),Pn(c+"")||c==="auto"||(c+=di.units[_]||Pn(Da(t,_))||""),(c+"").charAt(1)==="="&&(c=Da(t,_))):c=Da(t,_),f=parseFloat(c),v=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),d=parseFloat(u),_ in Zs&&(_==="autoAlpha"&&(f===1&&Da(t,"visibility")==="hidden"&&d&&(f=0),y.push("visibility",0,o.visibility),Gr(this,o,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Zs[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Ua,S){if(this.styles.save(_),T=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Oi(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=t.style.perspective;t.style.perspective=u,u=Oi(t,"perspective"),R?t.style.perspective=R:kr(t,"perspective")}d=parseFloat(u)}if(x||(M=t._gsap,M.renderTransform&&!n.parseTransform||bh(t,n.parseTransform),w=n.smoothOrigin!==!1&&M.smooth,x=this._pt=new Jn(this._pt,o,We,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new Jn(this._pt,M,"scaleY",M.scaleY,(v?Oo(M.scaleY,v+d):d)-M.scaleY||0,Ax),this._pt.u=0,r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(pi,0,o[pi]),u=JP(u),M.svg?Rx(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Gr(this,M,"zOrigin",M.zOrigin,p),Gr(this,o,_,Tm(c),Tm(u)));continue}else if(_==="svgOrigin"){Rx(t,u,1,w,0,this);continue}else if(_ in MA){$P(this,M,_,f,v?Oo(f,v+u):u);continue}else if(_==="smoothOrigin"){Gr(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){tO(this,u,t);continue}}else _ in o||(_=yc(_)||_);if(S||(d||d===0)&&(f||f===0)&&!PP.test(u)&&_ in o)g=(c+"").substr((f+"").length),d||(d=0),p=Pn(u)||(_ in di.units?di.units[_]:g),g!==p&&(f=Wr(t,_,c,p)),this._pt=new Jn(this._pt,S?M:o,_,f,(v?Oo(f,v+d):d)-f,!S&&(p==="px"||_==="zIndex")&&n.autoRound!==!1?FP:Ax),this._pt.u=p||0,S&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=BP):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=IP);else if(_ in o)ZP.call(this,t,_,c,v?v+u:u);else if(_ in t)this.add(t,_,c||t[_],v?v+u:u,s,a);else if(_!=="parseTransform"){vm(_,u);continue}S||(_ in o?y.push(_,0,o[_]):typeof t[_]=="function"?y.push(_,2,t[_]()):y.push(_,1,c||t[_])),r.push(_)}}E&&Tx(this)},render:function(t,n){if(n.tween._time||!Ux())for(var i=n._pt;i;)i.r(t,i.d),i=i._next;else n.styles.revert()},get:Da,aliases:Zs,getSetter:function(t,n,i){var s=Zs[n];return s&&s.indexOf(",")<0&&(n=s),n in Ua&&n!==pi&&(t._gsap.x||Da(t,"x"))?i&&rA===i?n==="scale"?GP:HP:(rA=i||{})&&(n==="scale"?kP:WP):t.style&&!_m(t.style[n])?zP:~n.indexOf("-")?VP:Mm(t,n)},core:{_removeProperty:kr,_getMatrix:Nx}};Gn.utils.checkPrefix=yc;Gn.core.getStyleSaver=vA;(function(e,t,n,i){var s=Zn(e+","+t+","+n,function(a){Ua[a]=1});Zn(t,function(a){di.units[a]="deg",MA[a]=1}),Zs[s[13]]=e+","+t,Zn(i,function(a){var r=a.split(":");Zs[r[1]]=s[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){di.units[e]="px"});Gn.registerPlugin(Px);var Ie=Gn.registerPlugin(Px)||Gn,gz=Ie.core.Tween;var Xr="PHENOMELONGEVITY",Bx=2,Fx=0,zx=1,wA=7,EA=.0122,eO=.1155,Je=160,Ox=Je*.525,nO=Je*.15,iO=Je*1.15,sO=Je,Ix=e=>`700 ${e}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`,AA=e=>{e.fillStyle="#ffffff",e.textAlign="center",e.textBaseline="middle"};function aO(e,t,n){e.clearRect(0,0,Je,Je),e.font=Ix(n),e.fillText(t,Je*.5,Je*.51);let i=e.getImageData(0,0,Je,Je).data,s=0;for(let a=3;a<i.length;a+=4)s+=i[a];return s/(255*Je*Je)}function rO(e,t){let n=t.length>1?(eO/EA)**(1/(t.length-1)):1;return[...t].map((i,s)=>{let a=aO(e,i,Ox);if(a<=0)return Ox;let r=EA*n**s,o=Ox*Math.sqrt(r/a);return Math.min(Math.max(o,nO),iO)})}function CA(){let e=document.createElement("canvas");e.width=Je,e.height=Je;let t=e.getContext("2d",{willReadFrequently:!0});AA(t);let n=rO(t,Xr),i=document.createElement("canvas");i.width=Je*Xr.length,i.height=Je*Bx;let s=i.getContext("2d");s.clearRect(0,0,i.width,i.height),AA(s);for(let r=0;r<Xr.length;r++){let o=r*Je+Je*.5;s.font=Ix(n[r]),s.fillText(Xr[r],o,Fx*Je+Je*.51),s.font=Ix(sO),s.fillText(Xr[r],o,zx*Je+Je*.51)}let a=new ms(i);return a.colorSpace=Ln,a.minFilter=me,a.magFilter=me,a.generateMipmaps=!1,a.needsUpdate=!0,a}var Ii=32,qr=32,RA=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,DA=`
  precision highp float;

  #define MAX_PLANES ${Ii}
  #define MAX_LINKS ${qr}

  // Cells across the glyph atlas, and the last index in it.
  #define GLYPHS ${Xr.length}.0
  #define GLYPH_LAST ${Xr.length-1}.0

  // Rows down it: the per-letter density ramp, and the same letters at one
  // size. Cells 0..WORD-1 of the second row spell the brand.
  #define ASCII_ROWS ${Bx}.0
  #define RAMP_ROW ${Fx}.0
  #define WORD_ROW ${zx}.0
  #define WORD ${wA}.0

  // The three particle fields below each pick a glyph from an expression that
  // was tuned when the set was seven marks long, so they still speak in 0..6.
  // Normalising by that and scaling to GLYPH_LAST means the glyph set can grow
  // or shrink without any of the three needing to be retuned.
  #define RAMP_SPAN 6.0

  varying vec2 vUv;

  uniform vec2  uResolution;   // canvas size in px
  uniform vec2  uSize;         // resting plane size in px
  uniform float uRadius;       // resting corner radius in px

  // per-plane state, driven from JS
  uniform float uCount;
  uniform vec2  uPos[MAX_PLANES];    // centre in px, origin at screen centre
  uniform float uRot[MAX_PLANES];    // radians
  // xy = 0..1 per axis, z = brightness (1 = lit, 0 = black), w = which atlas
  // cell this plane wears. All three ride in here rather than in arrays of
  // their own because GLSL ES gives every element of a uniform array a full
  // vec4 row whatever it is declared as \u2014 zw were already being paid for and
  // thrown away. The cell is resolved on the CPU because it depends on where
  // the plane sits on the ring, not on its index, and working that out per
  // pixel in the loop below would be absurd.
  uniform vec4  uScale[MAX_PLANES];

  // honey threads between neighbours, driven from JS
  uniform float uLinkCount;
  uniform vec2  uLinkA[MAX_LINKS];
  uniform vec2  uLinkB[MAX_LINKS];
  // (radius at the ends, radius at the pinch, droop, fillet)
  uniform vec4  uLinkPar[MAX_LINKS];

  uniform float uK;            // smin blend strength in px
  uniform float uWobble;       // surface tension noise amount, px
  uniform float uTime;
  uniform vec3  uColor;
  uniform vec3  uPage;         // what is behind the ring, for the tag to read

  // All the artwork lives in one atlas: ESSL 1.00 cannot index an array of
  // samplers with a varying index, so a per-plane texture is not an option.
  uniform sampler2D uAtlas;
  uniform vec2  uGrid;         // atlas cells across, down
  uniform float uBlend;        // px over which neighbouring art crossfades
  uniform float uTextured;

  // --- ASCII particle opening ---------------------------------------------
  // Real glyphs rasterised into a tiny atlas for the intro assembly.
  uniform sampler2D uAsciiTex;
  uniform vec4 uIntro; // gather progress, cloud expansion, cell px, opacity
  uniform vec4 uCardParticles; // launch, reach px, cell px, opacity
  uniform vec2 uFocusParticlePos;
  uniform vec4 uFocusParticleBox; // half size, radius, rotation
  uniform vec4 uFocusParticles; // amount, reach px, cell px, opacity
  uniform vec2 uFocusParticleMotion; // flow phase, motion multiplier
  uniform vec2 uFocusWord; // spell the brand 0/1, how much of it survives 0..1

  // --- pointer -------------------------------------------------------------
  // Nothing is ever drawn at the cursor. It only changes how the ring behaves
  // around it: the field goes soft, and a wake runs out through the surface.
  // Packed into vec4s for the same reason the link parameters are.
  uniform vec4 uMouse;  // cursor.xy px, presence 0..1, blend px added at it
  uniform vec4 uMelt;   // reach px, wake px, wake frequency, wake speed

  // --- the cursor tag ------------------------------------------------------
  // Drawn in this pass with everything else rather than as an element over the
  // canvas. That is what lets its label inspect the pixels it is sitting on and
  // invert against them, and it means the glass refracts the ring the same way
  // the lip does instead of having to sample it back out of a backdrop.
  uniform sampler2D uTagTex;  // the label; only its alpha is used, as a mask
  uniform vec4 uTag;   // centre.xy px, scale.xy \u2014 scale 0 is simply absent
  uniform vec4 uTagP;  // half width, half height, corner radius, refract px
  uniform vec4 uTagQ;  // frost, rim gain, unused, unused

  vec2 atlasUV(vec2 uv, float idx) {
    float col = mod(idx, uGrid.x);
    float row = floor(idx / uGrid.x);
    return (vec2(col, row) + uv) / uGrid;
  }

  float hash21(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  // A place on the 0..RAMP_SPAN weight ramp to a cell in the glyph atlas.
  float glyphCell(float ramp) {
    return floor(clamp(ramp / RAMP_SPAN, 0.0, 1.0) * GLYPH_LAST);
  }

  /**
   * Where in the atlas to sample, given a row, a cell and the position inside
   * it. The atlas is a canvas, so its rows run downward, and it is uploaded
   * flipped like every other texture here \u2014 hence the V band of row r is
   * measured from the top. Getting this backwards samples the ramp where the
   * word should be, which looks like the wrong letters rather than the wrong
   * row.
   */
  vec2 asciiUV(float cell, float row, vec2 uv) {
    return vec2(
      (cell + uv.x) / GLYPHS,
      (ASCII_ROWS - 1.0 - row + uv.y) / ASCII_ROWS
    );
  }

  // The position inside a cell, for fields that mirror their tiling around the
  // origin to get four-way symmetry. Taking fract of abs runs backwards on the
  // negative side of each axis, which flipped the old abstract marks invisibly
  // but turns letters into a different alphabet. The grid stays mirrored; only
  // the sampling inside each cell is straightened back up.
  vec2 uprightUV(vec2 p) {
    vec2 uv = fract(abs(p));
    return mix(uv, 1.0 - uv, step(p, vec2(0.0)));
  }

  /** Which side of each axis a cell sits on, never zero. */
  vec2 mirrorSign(vec2 p) {
    return mix(vec2(1.0), vec2(-1.0), step(p, vec2(0.0)));
  }

  // Whatever a field reads to choose a glyph, it has to read it once per cell
  // and not once per pixel. All three ramps here run a step every few pixels
  // against cells of eleven to eighteen, so nearly every cell straddles a
  // boundary: sampled per pixel it draws the top of one letter above the
  // bottom of the next. Abstract marks absorbed that. Letters do not \u2014 they
  // come out as chimeras. So each field walks the pixel back to the centre of
  // its own cell and asks the question there.
  vec2 cellCentre(vec2 q, vec2 gridP, vec2 tile, vec2 sgn, float cell) {
    return q + (sgn * (tile + 0.5) - gridP) * cell;
  }

  // --- glass lip -----------------------------------------------------------
  // A band along the top and bottom of the screen behaving like the rounded
  // edge of a thick glass sheet. Because the whole scene is evaluated from p,
  // warping p here refracts the planes and the honey together, with no second
  // pass and no render target.
  uniform float uBandTop;     // px
  uniform float uBandBottom;  // px
  uniform vec4  uGlass;       // refract px, squeeze, ripple px, ripple freq
  uniform float uFringe;      // px of chromatic split inside the band
  uniform float uSheen;       // lift applied across the lip

  // Warps p in place and returns how deep into the lip this pixel sits, 0..1.
  float glassBend(inout vec2 p) {
    float band = p.y > 0.0 ? uBandTop : uBandBottom;
    if (band <= 0.5) return 0.0;

    float dy = abs(p.y) - (uResolution.y * 0.5 - band);
    if (dy <= 0.0) return 0.0;

    float t = clamp(dy / band, 0.0, 1.0);
    // Circular profile: barely bends at the inner edge, falls away sharply at
    // the very edge, which is what reads as thickness rather than a gradient.
    float bend = 1.0 - sqrt(max(0.0, 1.0 - t * t));

    float s = sign(p.y);
    // Sampling back toward centre throws content outward, so the image
    // stretches forward into the lip and swells as it reaches the edge.
    // Both terms are signed: negatives invert the lip and compress instead.
    p.y -= s * bend * (uGlass.x + sin(p.x * uGlass.w) * uGlass.z);
    p.x *= 1.0 - bend * uGlass.y;

    return bend;
  }

  // --- simplex noise -------------------------------------------------------
  // Copyright (C) 2011 Ashima Arts. All rights reserved.
  // Copyright (C) 2011-2016 by Stefan Gustavson (Classic noise and others)
  // Distributed under the MIT License. https://github.com/ashima/webgl-noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                            + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
                            dot(x12.zw, x12.zw)), 0.0);
    m = m * m; m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // --- sdf helpers ---------------------------------------------------------
  float sdRoundBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
  }

  // The honey between two planes: a flat slab spanning centre to centre, as
  // wide as the edges it comes off and pinched in the middle, drooping under
  // its own weight.
  //
  // Deliberately not a capsule. A capsule has a round cross-section, so at
  // full merge it bulges out past the flat sides of the planes themselves.
  // This is swept as a box, so while the planes overlap it stays entirely
  // inside them and the silhouette reads as one flat card.
  float sdBridge(vec2 p, vec2 a, vec2 b, float rEnd, float rMid, float sag) {
    vec2 ba = b - a;
    float len = length(ba);
    if (len < 0.001) return 1e6;

    vec2 dir = ba / len;
    vec2 nrm = vec2(-dir.y, dir.x);

    vec2 q = p - (a + b) * 0.5;
    float along = dot(q, dir);
    float across = dot(q, nrm);

    float h = clamp(along / len + 0.5, 0.0, 1.0);
    float bell = sin(3.14159265 * h);           // 0 at the ends, 1 in the middle

    // droop, world -Y, resolved onto the across axis
    across += sag * bell * nrm.y;

    float taper = pow(1.0 - bell, 1.7);         // 1 at the ends, 0 in the middle
    float r = mix(rMid, rEnd, taper);

    // Ends are square and buried inside the planes, so they never show.
    return max(abs(along) - len * 0.5, abs(across) - r);
  }

  // The tag's own outline, scaled by whatever the pop animation is doing.
  float sdTag(vec2 p) {
    vec2 hs = uTagP.xy * abs(uTag.zw);
    return sdRoundBox(p - uTag.xy, hs, min(uTagP.z, min(hs.x, hs.y)));
  }

  // Its surface normal, by difference. A pill's normal is vertical along the
  // flat edges and radial round the ends, so nothing simpler than this gets the
  // refraction pointing the right way the whole way round.
  vec2 tagNormal(vec2 p) {
    vec2 e = vec2(1.0, 0.0);
    vec2 g = vec2(
      sdTag(p + e.xy) - sdTag(p - e.xy),
      sdTag(p + e.yx) - sdTag(p - e.yx)
    );
    float l = length(g);
    return l > 0.0001 ? g / l : vec2(0.0);
  }

  // smooth minimum \u2014 this is what makes the shapes read as liquid.
  // Note it also behaves as a plain min() when a is the 1e6 sentinel.
  float smin(float a, float b, float k) {
    if (k <= 0.0001) return min(a, b);
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
  }

  vec4 introParticles(vec2 p) {
    float t = clamp(uIntro.x, 0.0, 1.0);
    float gather = t * t * (3.0 - 2.0 * t);
    float cloudScale = mix(max(1.0, uIntro.y), 1.0, gather);

    // Work in the seed card's local frame so the opening follows the image as
    // the centre card begins its launch onto the ring.
    vec2 q = p - uPos[0];
    float a = uRot[0];
    float ca = cos(a), sa = sin(a);
    q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

    vec2 target = q / cloudScale;
    vec2 halfSize = max(uSize * 0.5, vec2(1.0));
    vec2 normalised = target / halfSize;
    float diamondD = abs(normalised.x) + abs(normalised.y) - 1.0;
    float boxD = max(abs(normalised.x), abs(normalised.y)) - 1.0;
    float shapeMorph = smoothstep(0.35, 0.92, gather);
    float shapeD = mix(diamondD, boxD, shapeMorph);
    if (shapeD > 0.0) return vec4(0.0);

    float cell = max(uIntro.z, 5.0);
    float radius = max(length(q), 1.0);
    float ripple = sin(
      uTime * 1.4 + (abs(q.x) + abs(q.y)) * 0.018
    );
    vec2 current = q +
      (q / radius) * ripple * cell * 0.38 * (1.0 - gather);
    vec2 gridP = current / cell;
    vec2 mirrored = abs(gridP);
    vec2 tile = floor(mirrored);
    vec2 glyphUv = uprightUV(gridP);
    float seed = hash21(tile + 71.19);

    // Sampled at the cell centre, so the letter is one ramp step in one colour
    // rather than a gradient sliced across it. See cellCentre above.
    vec2 centreTarget =
      cellCentre(q, gridP, tile, mirrorSign(gridP), cell) / cloudScale;
    vec2 imageUv = centreTarget / uSize + 0.5;
    imageUv.y = 1.0 - imageUv.y;
    imageUv = clamp(imageUv, 0.004, 0.996);
    vec3 art = uTextured > 0.5
      ? texture2D(uAtlas, atlasUV(imageUv, uScale[0].w)).rgb
      : uColor;
    float luminance = dot(art, vec3(0.2126, 0.7152, 0.0722));

    float imageInfluence = smoothstep(0.28, 0.88, gather);
    float density = mix(0.30, 0.90, gather);
    float present = step(seed, density);
    float glyphBase = 3.0 + seed * 2.0;
    float glyphImage =
      (1.0 - luminance) * 4.8 + gather * 1.35 + seed * 0.8;
    float glyph = glyphCell(mix(glyphBase, glyphImage, imageInfluence));
    float mask = texture2D(uAsciiTex, asciiUV(glyph, RAMP_ROW, glyphUv)).a;

    float born = smoothstep(0.0, 0.09, t);
    float handoff = 1.0 - smoothstep(0.58, 0.96, t);
    float pulse = 0.82 + 0.18 * sin(uTime * 3.2 + seed * 6.2831853);
    float cloudEdge = 1.0 - smoothstep(-0.16, 0.0, shapeD);
    float alpha =
      mask * present * born * handoff * pulse * cloudEdge * uIntro.w;

    // Keep pale source pixels legible on the paper field without flattening
    // the image back to monochrome.
    vec3 particle = mix(uColor, mix(uColor, art, 0.68), imageInfluence);
    return vec4(particle, alpha);
  }

  vec4 singleCardParticles(vec2 p) {
    float gather = clamp(uIntro.x, 0.0, 1.0);
    float launch = clamp(uCardParticles.x, 0.0, 1.0);
    float enter = smoothstep(0.52, 0.94, gather);
    float leave = smoothstep(0.04, 0.76, launch);
    float life = enter * (1.0 - leave);
    if (life <= 0.001) return vec4(0.0);

    // The field belongs only to the seed card. It rotates and contracts with
    // that card, then dies before the fan starts opening into a ring.
    vec2 q = p - uPos[0];
    float a = uRot[0];
    float ca = cos(a), sa = sin(a);
    q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

    vec2 seedScale = max(uScale[0].xy, vec2(0.08));
    vec2 halfSize = max(uSize * 0.5 * seedScale, vec2(1.0));
    float cardD = sdRoundBox(q, halfSize, min(uRadius, halfSize.y));
    float reach = max(uCardParticles.y, 8.0);

    // A four-axis diamond holds the particles behind the card instead of
    // allowing a circular fog. The inner cutout keeps the photograph crisp.
    vec2 outerHalf = halfSize + vec2(reach * 1.35, reach);
    float diamondD =
      abs(q.x / outerHalf.x) + abs(q.y / outerHalf.y) - 1.0;
    float envelope = 1.0 - smoothstep(-0.10, 0.0, diamondD);
    float outside = smoothstep(1.5, 5.0, cardD);
    float falloff = 1.0 - smoothstep(0.0, reach, cardD);
    float field = envelope * outside * pow(max(falloff, 0.0), 0.72);
    if (field <= 0.001) return vec4(0.0);

    float cell = max(uCardParticles.z, 5.0);
    float radius = max(length(q), 1.0);
    vec2 direction = q / radius;

    // Positive travel pulls mirrored rows inward. The sign reverses on exit,
    // so the same glyphs visibly peel back out through the four diamond tips.
    float travel = enter * 2.2 - leave * 5.0 + uTime * 0.16 * life;
    vec2 particleP = q + direction * cell * travel;
    vec2 raw = particleP / cell;
    vec2 gridP = abs(raw);
    vec2 tile = floor(gridP);
    vec2 glyphUv = uprightUV(raw);
    float seed = hash21(tile + 143.57);

    float density = mix(0.12, 0.66, enter) *
                    mix(0.62, 1.0, pow(max(falloff, 0.0), 0.55));
    float present = step(seed, density);

    // Cell centre, not pixel. See cellCentre above.
    float centreD = sdRoundBox(
      cellCentre(q, raw, tile, mirrorSign(raw), cell),
      halfSize, min(uRadius, halfSize.y)
    );
    float centreFall = 1.0 - smoothstep(0.0, reach, centreD);
    float glyph = glyphCell(centreFall * 5.2 + seed * 1.45);
    float mask = texture2D(uAsciiTex, asciiUV(glyph, RAMP_ROW, glyphUv)).a;

    float phase = hash21(tile + 29.31) * 6.2831853;
    float pulse = 0.76 + 0.24 * sin(uTime * 3.0 + phase);
    float alpha =
      mask * present * field * life * pulse * uCardParticles.w;
    return vec4(uColor, alpha);
  }

  vec4 hoveredCardParticles(vec2 p) {
    float amount = clamp(uFocusParticles.x, 0.0, 1.0);
    if (amount <= 0.001) return vec4(0.0);

    vec2 q = p - uFocusParticlePos;
    float a = uFocusParticleBox.w;
    float ca = cos(a), sa = sin(a);
    q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

    vec2 halfSize = max(uFocusParticleBox.xy, vec2(1.0));
    float cardD = sdRoundBox(q, halfSize, uFocusParticleBox.z);
    float reach = max(uFocusParticles.y, 8.0);

    // Restore the original loose shadow field: distance from the rounded card
    // controls density, with no geometric envelope and no mirrored quadrants.
    float outside = smoothstep(1.5, 5.0, cardD);
    float falloff = 1.0 - smoothstep(0.0, reach, cardD);
    float field = outside * pow(max(falloff, 0.0), 1.25);
    if (field <= 0.001) return vec4(0.0);

    float cell = max(uFocusParticles.z, 5.0);
    float radius = max(length(q), 1.0);
    vec2 direction = q / radius;
    float travel =
      (uFocusParticleMotion.x + amount * 3.6) * uFocusParticleMotion.y;
    vec2 drift = vec2(
      uTime * 0.45 * cell,
      sin(uTime * 1.7 + q.x * 0.013) * cell * 0.34
    ) * uFocusParticleMotion.y;
    vec2 particleP = q + direction * cell * travel + drift;
    vec2 gridP = particleP / cell;
    vec2 tile = floor(gridP);
    vec2 glyphUv = fract(gridP);
    float seed = hash21(tile + 223.41);

    // Uniform, so the whole field is in one mode or the other and the branches
    // below cost nothing.
    float wordOn = step(0.5, uFocusWord.x);

    float density = mix(0.10, 0.76, pow(max(falloff, 0.0), 0.72)) *
                    mix(0.28, 1.0, amount);
    // Letters are dropped at random to give the field its grain, which reads as
    // texture on marks and as a misspelling on a word. So word mode lifts the
    // floor toward solid. What it gives up in grain the distance falloff pays
    // back, since that still fades the whole halo out on its own.
    density = mix(density, 1.0, clamp(uFocusWord.y, 0.0, 1.0) * wordOn);
    float present = step(seed, density);

    // Cell centre, not pixel. See cellCentre above. This field is the one the
    // cursor puts on screen, so it is also the one where sliced letterforms
    // were most obvious.
    float centreD = sdRoundBox(
      cellCentre(q, gridP, tile, vec2(1.0), cell),
      halfSize, uFocusParticleBox.z
    );
    float centreFall = 1.0 - smoothstep(0.0, reach, centreD);

    // Two ways to choose a letter, and they are not a blend of each other.
    //
    // By weight, the cell's distance from the card picks a rung of the ramp.
    // Particles bunch against the card, so that band is the tail of the ramp
    // and the field reads as V I T Y \u2014 weight, not language.
    //
    // By column, the cell's own x picks a letter of the word, so a row spells
    // PHENOME left to right and tiles across the halo. It has to come off the
    // column and not the distance for the order to survive: distance scatters
    // the letters radially, which is the whole reason the ramp never spelled
    // anything. The drift already in gridP then walks the word sideways.
    float rampGlyph = glyphCell(centreFall * 6.35 + (seed - 0.5) * 1.35);
    float wordGlyph = mod(floor(gridP.x), WORD);
    float glyph = mix(rampGlyph, wordGlyph, wordOn);
    float row = mix(RAMP_ROW, WORD_ROW, wordOn);
    float mask = texture2D(uAsciiTex, asciiUV(glyph, row, glyphUv)).a;

    float phase = hash21(tile + 47.13) * 6.2831853;
    float movingPulse = 0.74 + 0.26 * sin(uTime * 3.2 + phase);
    float pulse = mix(1.0, movingPulse, uFocusParticleMotion.y);
    float alpha =
      mask * present * field * amount * pulse * uFocusParticles.w;
    return vec4(uColor, alpha);
  }

  void main() {
    // Screen position, kept unbent: the tag is pinned to the cursor, so it is
    // placed and drawn here rather than in the lip's warped space.
    vec2 ps = (vUv - 0.5) * uResolution;

    vec2 p = ps;
    float bend = glassBend(p);

    // The tag refracts whatever is under it, so its warp has to be applied to
    // the sampling position before the field is read \u2014 the same order the lip
    // works in. Flat through the middle, bending hard at the rim, which is what
    // reads as a thickness of glass rather than a smear.
    float dTag = sdTag(ps);
    float tagOn = min(abs(uTag.z), abs(uTag.w));
    if (tagOn > 0.001 && dTag < 0.0 && uTagP.w > 0.0) {
      float depth = clamp(-dTag / max(uTagP.y * abs(uTag.w), 1.0), 0.0, 1.0);
      float t = 1.0 - depth;
      p += tagNormal(ps) * (1.0 - sqrt(max(0.0, 1.0 - t * t))) * uTagP.w;
    }

    // Read after the bend, so the cursor acts in the same warped space as the
    // ring: dragged into the lip, its influence is refracted with everything
    // else rather than sitting flat on top of it.
    float toMouse = length(p - uMouse.xy);

    // Blend strength is lifted in a halo around the cursor, so the ring goes
    // soft exactly where it is being touched and stays crisp everywhere else.
    // Resolved once per pixel rather than per plane: it costs one length().
    float k = uK;
    if (uMouse.z > 0.001) {
      float t = 1.0 - smoothstep(0.0, max(uMelt.x, 1.0), toMouse);
      k += uMouse.w * uMouse.z * t * t;
    }

    float d = 1e6;

    // The two planes nearest this pixel, tracked alongside the field so the
    // colour can be resolved without a second pass. In the goo between two
    // planes both are close, which is exactly where the crossfade belongs.
    float d0 = 1e6, d1 = 1e6;
    vec2 uv0 = vec2(0.5), uv1 = vec2(0.5);
    float im0 = 0.0, im1 = 0.0;
    float dm0 = 1.0, dm1 = 1.0;

    float halfSpan = length(uSize) * 0.5;

    for (int i = 0; i < MAX_PLANES; i++) {
      if (float(i) >= uCount) break;

      vec4 st = uScale[i];
      vec2 sc = st.xy;
      float grown = max(sc.x, sc.y);
      if (grown <= 0.0001) continue;

      vec2 q = p - uPos[i];
      // Anything further out than this cannot affect the surface, so it can be
      // skipped outright \u2014 this is what keeps 32 planes affordable. Scaled by
      // the plane rather than fixed, because a plane swollen under the cursor
      // reaches further than its resting size, as does the melt around it.
      float cull = halfSpan * grown + k + uWobble + 8.0;
      if (dot(q, q) > cull * cull) continue;

      // into the plane's local frame
      float a  = uRot[i];
      float ca = cos(a), sa = sin(a);
      q = vec2(q.x * ca + q.y * sa, -q.x * sa + q.y * ca);

      vec2 halfSize = max(uSize * 0.5 * sc, vec2(0.0001));

      // starts as a circle (r = half extent), relaxes into the rounded rect
      float rMax = min(halfSize.x, halfSize.y);
      float r = min(rMax, mix(rMax, uRadius, smoothstep(0.30, 1.0, min(sc.x, sc.y))));

      float di = sdRoundBox(q, halfSize, r);
      d = smin(d, di, k);

      // Local UV. Clamped, so the goo outside a plane carries that plane's
      // edge colour rather than repeating or sampling the next atlas cell.
      vec2 luv = q / (2.0 * halfSize) + 0.5;
      luv.y = 1.0 - luv.y;
      luv = clamp(luv, 0.004, 0.996);

      if (di < d0) {
        d1 = d0; uv1 = uv0; im1 = im0; dm1 = dm0;
        d0 = di; uv0 = luv; im0 = st.w; dm0 = st.z;
      } else if (di < d1) {
        d1 = di; uv1 = luv; im1 = st.w; dm1 = st.z;
      }
    }

    // Threads strung between neighbours as they pull apart.
    for (int i = 0; i < MAX_LINKS; i++) {
      if (float(i) >= uLinkCount) break;

      vec4 par = uLinkPar[i];
      // Radii are allowed to go negative: that lifts the bridge's field clear
      // of the surface so it fades out, rather than bottoming out at zero as a
      // half-covered hairline. Only cull once it is further out than the
      // antialiasing can reach.
      if (par.x <= -3.0) continue;

      vec2 a = uLinkA[i];
      vec2 b = uLinkB[i];
      vec2 mid = (a + b) * 0.5;
      float reach = length(b - a) * 0.5 + par.x + par.w + 8.0;
      if (dot(p - mid, p - mid) > reach * reach) continue;

      d = smin(d, sdBridge(p, a, b, par.x, par.y, par.z), par.w);
    }

    // Surface tension wobble, decays to zero so resting planes are dead flat.
    if (uWobble > 0.001) {
      float n = snoise(p * 0.012 + vec2(uTime * 0.22, uTime * -0.17));
      d += n * uWobble;
    }

    // A capillary wake off the cursor, amplitude driven by how fast it is
    // moving. Rings out from it and dies over the same reach the softening
    // uses, so a flick leaves a ripple in the surface that outlives the
    // movement that made it.
    if (uMelt.y > 0.001) {
      d += sin(toMouse * uMelt.z - uTime * uMelt.w)
         * uMelt.y * exp(-toMouse / max(uMelt.x, 1.0));
    }

    // Clamped, not just floored: the distance cull above leaves a step in the
    // field, and an unclamped fwidth across that step paints a half-opaque
    // outline along every cull boundary.
    float aa = clamp(fwidth(d), 0.5, 2.0);
    float alpha = 1.0 - smoothstep(-aa, aa, d);

    vec4 intro = vec4(0.0);
    if (uIntro.w > 0.001 && uIntro.x < 0.999) {
      intro = introParticles(p);
    }
    vec4 cardParticles = vec4(0.0);
    if (
      uCardParticles.w > 0.001 &&
      uIntro.x > 0.48 &&
      uCardParticles.x < 0.80
    ) {
      cardParticles = singleCardParticles(p);
    }
    vec4 focusParticles = vec4(0.0);
    if (uFocusParticles.x > 0.001) {
      focusParticles = hoveredCardParticles(p);
    }

    // The tag has to survive this: it can overhang the edge of a card, and
    // those pixels are its own even though the ring has nothing there.
    float taa = clamp(fwidth(dTag), 0.5, 2.0);
    float ta = tagOn > 0.001 ? 1.0 - smoothstep(-taa, taa, dTag) : 0.0;

    if (
      alpha <= 0.001 &&
      ta <= 0.001 &&
      focusParticles.a <= 0.001 &&
      cardParticles.a <= 0.001 &&
      intro.a <= 0.001
    ) discard;

    // Even mix where the two nearest planes are equidistant, resolving to
    // whichever is clearly nearer beyond uBlend. Both the art and the dim are
    // carried across on it, so neither can put a seam down the goo.
    float nearest = smoothstep(-uBlend, uBlend, d1 - d0);

    vec3 col = uColor;
    if (uTextured > 0.5) {
      vec3 c0, c1;

      // Uniform branch, so the derivatives the mip selection needs stay
      // defined. The offset is scaled by bend, so outside the lip the three
      // taps land on the same texel and there is no fringe.
      if (uFringe > 0.0) {
        vec2 fr = vec2(uFringe * bend / max(uSize.x, 1.0), 0.0);
        c0 = vec3(
          texture2D(uAtlas, atlasUV(uv0 + fr, im0)).r,
          texture2D(uAtlas, atlasUV(uv0, im0)).g,
          texture2D(uAtlas, atlasUV(uv0 - fr, im0)).b
        );
        c1 = vec3(
          texture2D(uAtlas, atlasUV(uv1 + fr, im1)).r,
          texture2D(uAtlas, atlasUV(uv1, im1)).g,
          texture2D(uAtlas, atlasUV(uv1 - fr, im1)).b
        );
      } else {
        c0 = texture2D(uAtlas, atlasUV(uv0, im0)).rgb;
        c1 = texture2D(uAtlas, atlasUV(uv1, im1)).rgb;
      }

      col = mix(c1, c0, nearest);
    }

    // Cards standing off the one being pointed at are turned down, so the
    // hovered card reads as the lit one. Untextured, uColor is already almost
    // black and there is nothing here to see \u2014 which is fine, that mode exists
    // to read the goo's silhouette.
    col *= mix(dm1, dm0, nearest);

    // A touch of lift where the lip is steepest, so the band reads as a
    // surface catching light rather than only a warp.
    col += bend * uSheen;

    // Composite both particle phases behind the photographic surface. This
    // keeps antialiased card edges clean instead of tinting them like an
    // outline, and prevents the field from following the completed ring.
    if (cardParticles.a > 0.001) {
      float combined = alpha + cardParticles.a * (1.0 - alpha);
      col = (col * alpha +
             cardParticles.rgb * cardParticles.a * (1.0 - alpha)) /
            max(combined, 0.0001);
      alpha = combined;
    }
    if (focusParticles.a > 0.001) {
      float combined = alpha + focusParticles.a * (1.0 - alpha);
      col = (col * alpha +
             focusParticles.rgb * focusParticles.a * (1.0 - alpha)) /
            max(combined, 0.0001);
      alpha = combined;
    }
    if (intro.a > 0.001) {
      float combined = alpha + intro.a * (1.0 - alpha);
      col = (col * alpha + intro.rgb * intro.a * (1.0 - alpha)) /
            max(combined, 0.0001);
      alpha = combined;
    }
    // --- the tag -------------------------------------------------------------
    if (ta > 0.001) {
        // Where the ring does not reach, the page is what shows through the
        // glass, so the label has something real to read there too.
        vec3 under = mix(uPage, col, alpha);
        vec3 glass = mix(under, vec3(1.0), uTagQ.x);

        // Rim: lit where it faces the light, dark where it turns away. Signing
        // it is what gives an edge that reads as thickness rather than as an
        // outline drawn on.
        float band = clamp(1.0 + dTag / max(uTagP.z, 1.0), 0.0, 1.0);
        glass += band * band * uTagQ.y *
                 dot(tagNormal(ps), vec2(-0.7071, 0.7071));

        // The label. Pure black or pure white, decided per pixel from what that
        // pixel is sitting on, so a glyph crossing a light edge onto a dark one
        // changes colour halfway across. A blend cannot do this \u2014 inverting a
        // mid grey returns a mid grey \u2014 and picking one colour for the whole
        // label cannot either.
        vec2 tuv = (ps - uTag.xy) / (uTagP.xy * 2.0 * abs(uTag.zw)) + 0.5;
        float m = texture2D(uTagTex, clamp(tuv, 0.0, 1.0)).a;
        float l = dot(glass, vec3(0.2126, 0.7152, 0.0722));
        // Narrow, not hard: a step here would alias along the boundary.
        glass = mix(glass, vec3(1.0 - smoothstep(0.46, 0.54, l)), m);

      col = mix(col, glass, ta);
      alpha = max(alpha, ta);
    }

    // Written straight through. The atlas is tagged NoColorSpace so sampling
    // returns the authored sRGB values, and this shader adds no output
    // encoding of its own \u2014 decoding on read without encoding on write is
    // what darkens everything.
    gl_FragColor = vec4(col, alpha);
  }
`;var Js=Array.from({length:12},(e,t)=>({file:null,name:"",type:"",year:"",project:t%5})),Em=Array.from({length:5},(e,t)=>t);var Am=Js.map(()=>null);function UA(e=Am,t){let i=Math.ceil(e.length/4),s=document.createElement("canvas");s.width=4*512,s.height=i*341;let a=s.getContext("2d");e.forEach((o,l)=>{a.fillStyle="#0756b8",a.fillRect(l%4*512,Math.floor(l/4)*341,512,341)});let r=new ms(s);return r.flipY=!1,r.colorSpace=Ln,r.minFilter=Hs,r.magFilter=me,r.needsUpdate=!0,t?.(1),{texture:r,grid:[4,i],count:e.length,first:Promise.resolve(),ready:Promise.resolve()}}var oO=["left"],Th=2,Sc=e=>e?.firstElementChild?.children;function LA(e,t,n){e&&(t>=1?(e.style.filter="none",e.style.opacity="1"):t<=0?(e.style.filter="none",e.style.opacity="0"):(e.style.filter=`blur(${Math.min(n/t-n,100)}px)`,e.style.opacity=`${Math.pow(t,.4)}`))}function lO(e,t,n){let i={t:1},s=Array(Th).fill(""),a=Array(Th).fill(!1),r=()=>{let l=t[e];if(!l)return;let c=Sc(l.layers[0]),u=Sc(l.layers[1]),d=Sc(l.plain),f=i.t;for(let h=0;h<Th;h++)a[h]?(LA(c?.[h],1-f,n.nameBlur),LA(u?.[h],f,n.nameBlur),d?.[h]&&(d[h].style.opacity="0")):(c?.[h]&&(c[h].style.opacity="0"),u?.[h]&&(u[h].style.opacity="0"),d?.[h]&&(d[h].style.opacity="1"));l.goo&&(l.goo.style.filter=f>=1?"none":`url(#name-goo) blur(${n.nameSoften}px)`)};return{m:i,set:l=>{let c=t[e];if(!c?.layers[0]||!c.layers[1]||!c.plain)return;Ie.killTweensOf(i),i.t=1,r();let u=Array.from({length:Th},(m,_)=>l[_]??"");a=u.map((m,_)=>m!==s[_]);let d=Sc(c.layers[0]),f=Sc(c.layers[1]),h=Sc(c.plain);for(let m=0;m<Th;m++)d?.[m]&&(d[m].textContent=s[m]),f?.[m]&&(f[m].textContent=u[m]),h?.[m]&&(h[m].textContent=u[m]);if(s=u,!a.some(Boolean)){i.t=1,r();return}i.t=0,r(),Ie.to(i,{t:1,duration:n.nameMorphTime,ease:n.nameEase,onUpdate:r})}}}function NA(e,t){let{groups:n,list:i,cut:s,live:a}=e,r=lO("left",n,t),o=()=>{s?.setAttribute("values",`1 0 0 0 0
       0 1 0 0 0
       0 0 1 0 0
       0 0 0 ${t.nameEdge} ${-t.nameEdge*t.nameCut}`)};return{show:d=>{let f=Js[d];f&&(r.set([f.product||f.type,f.name]),a&&(a.textContent=f.product?`${f.product}, ${f.name}. ${f.type}, ${f.year}.`:`${f.name}. ${f.type}, ${f.year}.`))},style:({textK:d,tight:f,viewW:h})=>{let m=t.nameSize*d*(f?t.tightName:1),_=`${m}vw`,g=`${t.idxSize*d}vw`,p=`"${t.nameFont}", ui-sans-serif, system-ui, sans-serif`,v=`"${t.idxFont}", ui-sans-serif, system-ui, sans-serif`,S=`${t.nameWeight}`,x=`${t.idxWeight}`,M=m*3;for(let w of oO){let E=n[w];if(!E?.box)continue;let y=w==="right",T=f&&!y;if(f&&y){E.box.style.display="none";continue}if(E.box.style.display="",E.box.style.width=`${T?t.tightMetaWidth:t.metaWidth}vw`,E.box.style.height=`${M}vw`,T){let R=M*h/100,D=m*h/100;E.box.style.top="auto",E.box.style.left="auto",E.box.style.right=`${t.tightNameRight}px`,E.box.style.bottom=`${t.tightNameBottom+D*.5-R*.5}px`,E.box.style.transform="none"}else E.box.style.top="",E.box.style.bottom="",E.box.style.transform="",E.box.style.left=y?"auto":`${t.metaLeft}vw`,E.box.style.right=y?`${t.metaRight}vw`:"auto";for(let R of[...E.layers,E.plain]){if(!R)continue;R.style.justifyContent=T||y?"flex-end":"flex-start";let D=R.firstElementChild;D.style.columnGap=`${y?t.metaGapR:t.metaGapL}vw`,D.style.rowGap=`${m*.22}vw`,D.style.justifyContent=T||y?"flex-end":"flex-start";let[L,V]=D.children;L.style.display=T?"none":"",L.style.fontFamily=v,L.style.fontSize=g,L.style.fontWeight=x,V.style.flexBasis="100%",V.style.fontFamily=y?v:p,V.style.fontSize=y?g:_,V.style.fontWeight=y?x:S}}i&&(i.style.fontSize=`${t.listSize*d}vw`),o()},setThreshold:o,dispose:()=>{Ie.killTweensOf(r.m)}}}var Vx=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,Hx=`
  precision highp float;

  varying vec2 vUv;

  uniform sampler2D uTex;
  uniform float uReveal;
  uniform vec3  uColor;
  uniform float uOpacity;
  // 1 = the texture is a MASK and uColor is the ink (a glyph); 0 = the texture
  // carries its own colour and uColor is ignored (the brand lockup). The wipe
  // above is identical either way, which is the point of doing it here rather
  // than with a second material.
  uniform float uTinted;

  void main() {
    float gy = vUv.y + 1.0 - uReveal;
    if (gy > 1.0 || gy < 0.0) discard;

    vec4 t = texture2D(uTex, vec2(vUv.x, gy));
    if (t.a <= 0.001) discard;

    // The canvas is premultiplied, so the picture's own colour has to be
    // divided back out before it is blended again.
    vec3 rgb = mix(t.rgb / max(t.a, 0.001), uColor, uTinted);
    gl_FragColor = vec4(rgb, t.a * uOpacity);
  }
`;function PA(e,t){let n=[],i=[],s=()=>{for(let o of[...e.children])e.remove(o),o.geometry.dispose(),o.material.uniforms.uTex.value?.dispose(),o.material.dispose();n=[],i=[]},a=()=>{let o=Math.min(window.devicePixelRatio,2)*2,l=new Image;l.crossOrigin="anonymous";let c=new Dn(document.createElement("canvas"));c.colorSpace=qn,c.minFilter=me,c.magFilter=me,c.generateMipmaps=!1;let u=new Mn({vertexShader:Vx,fragmentShader:Hx,uniforms:{uTex:{value:c},uReveal:{value:0},uColor:{value:new Kt(t.textColor)},uOpacity:{value:1},uTinted:{value:0}},transparent:!0,depthTest:!1,depthWrite:!1}),d=t.textSize*t.textImageScale,f=new Un(new Fs(1,1),u);f.renderOrder=0,e.add(f),n.push(u.uniforms.uReveal),i.push(u.uniforms.uOpacity),l.onload=()=>{let h=l.naturalHeight/l.naturalWidth||.153,m=d*h,_=m*.25,g=m+_*2,p=document.createElement("canvas");p.width=Math.max(1,Math.ceil(d*o)),p.height=Math.max(1,Math.ceil(g*o));let v=p.getContext("2d");v.scale(o,o),v.drawImage(l,0,_,d,m),c.image=p,c.needsUpdate=!0,f.scale.set(d,g,1),f.position.set(0,0,0)},l.src=t.textImage};return{build:()=>{if(s(),t.textImage){a();return}let o=t.textSize,l=Math.min(window.devicePixelRatio,2)*2,c=`${t.textWeight} ${o}px "${t.textFont}", ui-sans-serif, system-ui, sans-serif`,u=document.createElement("canvas").getContext("2d");u.font=c;let d=[...t.text],f=d.map(v=>u.measureText(v).width),h=t.textTracking*o,m=f.reduce((v,S)=>v+S,0)+h*(d.length-1),_=o*.25,g=o*1.3+_*2,p=-m/2;d.forEach((v,S)=>{let x=f[S];if(v.trim()){let M=x+_*2,w=document.createElement("canvas");w.width=Math.max(1,Math.ceil(M*l)),w.height=Math.max(1,Math.ceil(g*l));let E=w.getContext("2d");E.scale(l,l),E.font=c,E.textBaseline="alphabetic",E.fillStyle="#000",E.fillText(v,_,_+o);let y=new ms(w);y.colorSpace=Ln,y.minFilter=me,y.magFilter=me,y.generateMipmaps=!1;let T=new Mn({vertexShader:Vx,fragmentShader:Hx,uniforms:{uTex:{value:y},uReveal:{value:0},uColor:{value:new Kt(t.textColor)},uOpacity:{value:1},uTinted:{value:1}},transparent:!0,depthTest:!1,depthWrite:!1}),R=new Un(new Fs(1,1),T);R.scale.set(M,g,1),R.position.set(p+x/2,0,0),R.renderOrder=0,e.add(R),n.push(T.uniforms.uReveal),i.push(T.uniforms.uOpacity)}p+=x+h})},dispose:s,get chars(){return n},get fades(){return i}}}var wm=104,Mc=40;function OA(e,t){let n={sx:.5,sy:0},i=new Image,s=!1,a=null;return{box:n,build:()=>{let u=Math.min(window.devicePixelRatio,2)*2,d=document.createElement("canvas");d.width=Math.ceil(wm*u),d.height=Math.ceil(Mc*u);let f=d.getContext("2d");f.scale(u,u),f.font=`${e.tagWeight} ${e.tagSize}px "${e.textFont}", ui-sans-serif, system-ui, sans-serif`,f.textBaseline="middle",f.fillStyle="#fff";let h=f.measureText(e.tagText).width,m=e.tagArrow+e.tagGap+h,_=(wm-m)*.5;if(f.fillText(e.tagText,_+e.tagArrow+e.tagGap,Mc*.5),s){let g=(Mc-e.tagArrow)*.5;f.drawImage(i,_,g,e.tagArrow,e.tagArrow)}a?.dispose(),a=new ms(d),a.colorSpace=Ln,a.minFilter=me,a.magFilter=me,a.generateMipmaps=!1,t.uTagTex.value=a},show:u=>{Ie.killTweensOf(n),u?(Ie.to(n,{sx:1,duration:.62,ease:"elastic.out(1, 0.5)"}),Ie.to(n,{sy:1,duration:.74,ease:"elastic.out(1, 0.42)"})):Ie.to(n,{sx:.5,sy:0,duration:.28,ease:"power3.in"})},load:u=>{i.onload=()=>{s=!0,u?.()},u?.()},dispose:()=>{Ie.killTweensOf(n),a?.dispose()}}}function IA(){return{refWidth:1512,refHeight:870,fitHeight:0,minScale:.5,maxScale:1.75,narrowAt:1024,narrowPlane:1.25,narrowRadius:1.3,narrowText:1.5,narrowPosX:-2.5,narrowEndScale:4.22,tightAt:640,tightRadius:.82,tightPosX:-3.5,tightSplit:.8,tightName:1.5,tightNameBottom:16,tightNameRight:16,tightMetaWidth:70,planeSize:150,count:Js.length,ringRadius:340,seed:0,radial:!0,radius:6,textured:!0,blend:14,imageOffset:0,holdAfter:0,loaderChase:.18,stagger:.34,launchTime:1.95,spreadEase:"power2.out",spreadTime:3.6,stageAt:.7,spinTurns:1,spinTime:2.6,spinEase:"power2.inOut",spinDelay:0,posX:-1.72,posY:0,endScale:4.46,moveTime:2.2,moveEase:"power2.inOut",moveDelay:.2,scrollSpeed:.0022,damping:.94,maxSpeed:12,dragSpeed:1,snap:!0,snapTime:.8,snapFrom:1,pickTime:.55,pickEase:"power3.inOut",textImage:"",textImageScale:11,text:"",textSize:41,textFont:"Bahnschrift",textWeight:400,textTracking:0,textColor:"#0756b8",textAt:.42,textTime:.95,textStagger:.015,textEase:"power4.out",textOut:!0,textOutAt:-.5,textOutTime:.7,textOutEase:"power2.in",metaLeft:12,metaRight:5.5,metaGapL:2.5,metaGapR:3.6,metaWidth:34,nameSize:30/1440*100,nameFont:"Bahnschrift",nameWeight:500,idxSize:20/1440*100,idxFont:"Bahnschrift",idxWeight:400,listSize:.9,nameMorphTime:1.2,nameEase:"circ.out",nameBlur:8.5,nameEdge:400,nameCut:.33,nameSoften:.35,glass:!0,bandTop:.08,bandBottom:.08,refract:60,squeeze:.05,ripple:5,rippleFreq:.02,fringe:1.5,sheen:.05,hover:!0,touchHold:.16,touchSlop:10,lag:.3,melt:34,meltReach:260,reach:1.7,swell:.09,pull:26,grab:.14,release:.06,web:.2,webReach:1.15,wave:4,waveFreq:.05,waveSpeed:7,sideScale:.035,sidePush:17,sideDim:.15,sideReach:2.4,focusParticles:!1,focusParticleFrom:1024,focusParticleReach:82,focusParticleCell:15,focusParticleOpacity:.58,focusParticleWord:!1,focusParticleWordFill:.9,focusParticleEnter:.16,focusParticleExit:.11,focusParticleDrift:.7,focusParticleOut:3.2,openLaunched:!0,openHold:.7,assemble:!0,assembleFrom:1024,assembleTime:1.55,assembleEase:"power3.inOut",assembleSpread:3.8,assembleCardScale:3.9,assembleCell:13,assembleOpacity:.96,assembleHaloReach:148,assembleHaloOpacity:.72,tagFrom:1024,tagText:"Open",tagSize:14,tagWeight:500,tagArrow:0,tagGap:6,tagX:64,tagY:-38,tagFrost:.16,tagRim:.02,tagRefract:39.5,thread:1,thin:.4,pinch:.35,sag:6,dissolve:2.9,fillet:14,wobble:3,goo:35}}var La=Math.PI*2,BA=Math.PI/2,Cm=Math.PI/180,On=e=>e<0?0:e>1?1:e,Eh=e=>1-Math.pow(1-e,3),FA=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Na=(e,t,n)=>{let i=On((n-e)/(t-e));return i*i*(3-2*i)},Ho=e=>e===0?0:e%2===1?(e+1)/2:-e/2,zA=e=>e===0?0:e>0?2*e-1:-2*e,Go=(e,t)=>1-Math.pow(1-t,e*60);var bn=Jr(Ah(),1),kA=.06,hO=()=>{let e=new Ao(new Uint8Array([255,255,255,255]),1,1);return e.needsUpdate=!0,e};function Gx(){let e=(0,Pa.useRef)(null),t=(0,Pa.useRef)(null),n=(0,Pa.useRef)([]),i=(0,Pa.useRef)(null),s=(0,Pa.useRef)(null),a=(0,Pa.useRef)({left:{box:null,goo:null,layers:[],plain:null},right:{box:null,goo:null,layers:[],plain:null}});return(0,Pa.useEffect)(()=>{let r=e.current,o=t.current,l=new URLSearchParams(location.search).has("driven");l&&(document.documentElement.dataset.driven="");let c=!1,u=window.matchMedia("(prefers-reduced-motion: reduce)").matches,d=!0,f=!0,h=IA(),m={progress:0,launch:0,spread:0,spin:0,shift:0},_={restingGap:0,window:"",scale:1,band:"wide"},g;try{g=new am({antialias:!0,alpha:!0})}catch(Y){console.error("[ring] could not create a WebGL context:",Y);return}g.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(g.domElement);let p=new Hu,v=new wo(-1,1,1,-1,-100,100),S=CA(),x=window.matchMedia("(prefers-reduced-motion: reduce)"),M={uResolution:{value:new Ht(1,1)},uSize:{value:new Ht(150,100)},uRadius:{value:h.radius},uCount:{value:h.count},uPos:{value:Array.from({length:Ii},()=>new Ht)},uRot:{value:new Float32Array(Ii)},uScale:{value:Array.from({length:Ii},()=>new se(0,0,1,0))},uLinkCount:{value:0},uLinkA:{value:Array.from({length:qr},()=>new Ht)},uLinkB:{value:Array.from({length:qr},()=>new Ht)},uLinkPar:{value:Array.from({length:qr},()=>new se)},uK:{value:h.goo},uWobble:{value:h.wobble},uTime:{value:0},uColor:{value:new Kt("#0756b8").convertLinearToSRGB()},uAtlas:{value:hO()},uGrid:{value:new Ht(1,1)},uBlend:{value:h.blend},uTextured:{value:0},uBandTop:{value:0},uBandBottom:{value:0},uGlass:{value:new se},uFringe:{value:0},uSheen:{value:0},uMouse:{value:new se},uMelt:{value:new se},uAsciiTex:{value:S},uIntro:{value:new se(1,1,12,0)},uCardParticles:{value:new se(1,0,12,0)},uFocusParticlePos:{value:new Ht},uFocusParticleBox:{value:new se},uFocusParticles:{value:new se},uFocusParticleMotion:{value:new Ht},uFocusWord:{value:new Ht},uTagTex:{value:new Ao(new Uint8Array([0,0,0,0]),1,1)},uTag:{value:new se},uTagP:{value:new se},uTagQ:{value:new se},uPage:{value:new Kt("#f2f1eb").convertLinearToSRGB()}},w=new Un(new Fs(1,1),new Mn({vertexShader:RA,fragmentShader:DA,uniforms:M,transparent:!0,depthWrite:!1}));w.renderOrder=10,p.add(w);let E=new ba;p.add(E);let y=PA(E,h),T=OA(h,M),R=NA({groups:a.current,list:o,cut:s.current,live:i.current},h),D=!1,L=0,V=!1,X=[],I=Y=>V?Y():X.push(Y),H=UA(Am,Y=>{c||(L=Y)});M.uAtlas.value.dispose(),H.texture.anisotropy=g.capabilities.getMaxAnisotropy(),M.uAtlas.value=H.texture,M.uGrid.value.set(H.grid[0],H.grid[1]);let B=H.count;H.first.then(()=>{c||(D=!0)}),H.ready.then(()=>{c||(L=1)});let q=1,et=1,ot={left:0,top:0},at=1,mt=1,Qt=1,ee=1,Gt=!1,Q=!1,ft=()=>{let Y=q/Math.max(1,h.refWidth),$=et/Math.max(1,h.refHeight),st=Y*(1-h.fitHeight)+Math.min(Y,$)*h.fitHeight;at=Math.min(h.maxScale,Math.max(h.minScale,st));let Et=q<=h.narrowAt,kt=q<=h.tightAt;Gt=Et,Q=kt,mt=Et?h.narrowPlane:1,kt&&(mt=Math.min(mt,q*.72/(h.planeSize*h.narrowEndScale*at))),Qt=(Et?h.narrowRadius:1)*(kt?h.tightRadius:1),ee=Et?h.narrowText:1,_.window=`${Math.round(q)} x ${Math.round(et)}`,_.scale=Math.round(at*1e3)/1e3,_.band=kt?"tight":Et?"narrow":"wide";let ce=at*ee*(kt?h.tightSplit:1);E.scale.set(ce,ce,1)},rt=()=>R.style({textK:ee,tight:Q,viewW:q}),Pt=()=>{q=r.clientWidth,et=r.clientHeight,ft(),g.setSize(q,et),v.left=-q/2,v.right=q/2,v.top=et/2,v.bottom=-et/2,v.updateProjectionMatrix(),w.scale.set(q,et,1),M.uResolution.value.set(q,et);let Y=g.domElement.getBoundingClientRect();ot.left=Y.left,ot.top=Y.top},Ft=()=>{Pt(),rt()};Pt(),window.addEventListener("resize",Ft);let Ut={x:0,y:0},we=0,Lt=!1,Bt=0,Jt=!1,jt=0,Be=0,xe=!1,Ke=0,Qe=0,de=!1,Re=0,N=0,pn=0,le=0,C=0,b=Y=>{let $=Y.clientX-ot.left-Ut.x,st=Y.clientY-ot.top-Ut.y;return Math.atan2(-st,$)},O=()=>{de&&(Ie.killTweensOf(m),de=!1)},k=Y=>{let $=La/Math.round(h.count),st=we-h.seed*Cm-Ho(Y)*$,Et=st+Math.round((m.spin-st)/La)*La,kt=Math.abs(Et-m.spin)/$;if(u||x.matches){Ie.killTweensOf(m),m.spin=Et,Bt=0,de=!1,f=!0;return}kt<.01||(Bt=0,xe=!1,de=!0,Ie.killTweensOf(m),Ie.to(m,{spin:Et,duration:h.pickTime*Math.sqrt(Math.max(1,kt)),ease:h.pickEase,onComplete:()=>{de=!1}}))},Z=-1,lt=Y=>{let $=Math.round(h.count),Et=((Math.round(h.imageOffset)-Y)%$+$)%$,kt=Math.ceil(($-1)/2);return Et>kt&&(Et-=$),zA(Et)},dt=Y=>{let $=Math.round(h.count);return!(Y>=0)||$<=0?-1:((Math.round(h.imageOffset)-Ho(Y))%$+$)%$},J=Y=>{let $=Em[Y];$===void 0||$===Z||(Z=$,k(lt($)))},j=Y=>{if(Y.origin!==location.origin||Y.source!==window.parent)return;let $=Y&&Y.data;if($?.type==="ocean-motion"){u=!!$.paused||x.matches,d=!!$.active,u&&G&&(G.progress(1),Ie.getTweensOf(m).forEach(st=>st.progress(1)),Object.assign(m,{progress:1,launch:1,spread:1,shift:1}),Lt=!0),Ie.globalTimeline.paused(u||!d),f=!0;return}!$||$.type!=="phenome-focus"||Lt&&J($.index|0)},ut=(Y,$)=>{if(window.parent!==window)try{window.parent.postMessage(Object.assign({source:"phenome-ring-showcase",type:Y},$),location.origin)}catch{}};window.addEventListener("message",j);let St={x:0,y:0,inside:!1,seeded:!1},it={x:0,y:0,amt:0,wake:0},ct=!1,Rt=!1,Dt=0,zt=()=>{clearTimeout(Dt),Dt=0,Rt=!1},U=()=>{clearTimeout(Dt),Dt=setTimeout(()=>{Rt=!0},h.touchHold*1e3)},ht=()=>ct?Rt:St.inside,K=Y=>{ct=Y.pointerType==="touch",St.x=Y.clientX-ot.left-q*.5,St.y=et*.5-(Y.clientY-ot.top),St.inside=!0,St.seeded||(St.seeded=!0,it.x=St.x,it.y=St.y)},pt=()=>{St.inside=!1},vt=Y=>{if(!Lt)return;Y.preventDefault();let $=Math.abs(Y.deltaX)>Math.abs(Y.deltaY)?Y.deltaX:Y.deltaY;O(),xe=!1,Bt+=$*h.scrollSpeed,Bt=Math.max(-h.maxSpeed,Math.min(h.maxSpeed,Bt))},nt=Y=>{Re=0,N=Y.clientX,pn=Y.clientY,le=Y.clientX,C=Y.clientY,K(Y),Lt&&(l||(O(),ct&&U(),Jt=!0,xe=!1,Bt=0,jt=b(Y),Be=performance.now(),g.domElement.setPointerCapture?.(Y.pointerId)))},At=Y=>{if(K(Y),Re+=Math.abs(Y.clientX-N)+Math.abs(Y.clientY-pn),N=Y.clientX,pn=Y.clientY,ct&&!Rt&&Re>h.touchSlop&&zt(),!Jt)return;let $=b(Y),st=$-jt;st>Math.PI&&(st-=La),st<-Math.PI&&(st+=La);let Et=st*h.dragSpeed;m.spin+=Et;let kt=performance.now();Bt=Et/(Math.max(8,kt-Be)/1e3),jt=$,Be=kt},Tt=Y=>{l&&Math.abs(Y.clientX-le)>50&&Math.abs(Y.clientX-le)>Math.abs(Y.clientY-C)*1.2&&ut("step",{delta:Y.clientX<le?1:-1}),K(Y),zt(),Jt&&(Jt=!1,g.domElement.releasePointerCapture?.(Y.pointerId))},De=()=>{if(!Lt||Re>=5||mi<0)return;let Y=dt(mi);if(Y>=0&&Js[Y].project===Js[Math.max(0,Z)].project){let $=Js[Y];ut("card-click",{index:$.project});return}ut("select",{index:Js[Y].project})};l||r.addEventListener("wheel",vt,{passive:!1}),r.addEventListener("pointerdown",nt),r.addEventListener("pointermove",At),r.addEventListener("pointerup",Tt),r.addEventListener("pointercancel",Tt),r.addEventListener("pointerleave",pt),r.addEventListener("click",De);let ye=Y=>{let $=!u&&!x.matches&&h.hover&&ht()&&St.seeded&&Lt;it.amt+=(($?1:0)-it.amt)*Go(Y,.12);let st=Go(Y,h.lag);it.x+=(St.x-it.x)*st,it.y+=(St.y-it.y)*st;let Et=Math.hypot(St.x-it.x,St.y-it.y);it.wake=Math.max(it.wake*Math.pow(.94,Y*60),On(Et/(Math.max(Y,.001)*2600))),M.uMouse.value.set(it.x,it.y,it.amt,h.melt*at),M.uMelt.value.set(h.meltReach*at,h.wave*at*it.wake*it.amt,h.waveFreq,h.waveSpeed)},Kn={shown:0},Bi=Y=>{let $=Math.min(L,On(m.progress));Kn.shown+=($-Kn.shown)*Go(Y,h.loaderChase);let st=Math.min(100,Math.max(1,Math.round(Kn.shown*100)));if(!V&&st>=100){V=!0;for(let Et of X)Et();X.length=0}},wh=new Float32Array(Ii),ko=new Float32Array(Ii),Oa=[],Ia=Array.from({length:Ii},()=>new Ht),Yr=new Float32Array(Ii),Ba=new Float32Array(Ii),Fa=new Float32Array(Ii),Fi=new Float32Array(qr),zi=new Float32Array(Ii),za=new Ht,Wo=Y=>Math.max(.05,1+h.swell*Yr[Y]-h.sideScale*zi[Y]),Vi=-1,Xo=-1,mi=-1,bc=!1,Qn=-1,Va=0,Zr=0,Dm=()=>{let Y=n.current;for(let $=0;$<Y.length;$++){let st=Y[$];if(!st)continue;let Et=$===Vi;st.style.opacity=Et?"1":"0.2",Et?st.setAttribute("aria-current","true"):st.removeAttribute("aria-current")}},Um=Y=>{let $=Math.round(h.count);M.uCount.value=$;let st=La/$,Et=On(m.spread),kt=Gt?h.narrowEndScale:h.endScale,ce=Q?h.tightPosX:Gt?h.narrowPosX:h.posX,qt=On(m.shift),ue=(1+(kt-1)*qt)*at,gt=Q?-h.ringRadius*Qt*ue*qt:ce*q*.5*qt,mn=h.posY*et*.5*qt,Yt=h.assemble&&!h.openLaunched&&q>h.assembleFrom&&!x.matches,jn=Yt?1+(h.assembleCardScale-1)*(1-Na(.05,.82,m.launch)):1;Ut.x=q*.5+gt,Ut.y=et*.5-mn,we=gt!==0||mn!==0?Math.atan2(-mn,-gt):0;let nn=h.planeSize*mt*ue*jn,$n=nn/1.5;M.uSize.value.set(nn,$n),M.uRadius.value=h.radius*mt*ue;let Ks=h.radial?$n:nn,ge=h.radial?nn:$n,Fe=h.ringRadius*Qt*ue,as=2*Fe*Math.sin(st/2)-Ks;_.restingGap=Math.round(as/ue*10)/10;let Se=Math.max(1,as),rs=Math.max(1,Math.abs(Ho($-1))),Ha=Math.max(.1,1-kA-h.stagger);ko[0]=0;for(let Mt=1;Mt<=rs;Mt++){let Tn=kA+(Mt-1)/rs*h.stagger,ti=On((Et-Tn)/Ha),gn=ti*ti*(3-2*ti);wh[Mt]=gn,ko[Mt]=ko[Mt-1]+gn}let Ch=h.seed*Cm,kx=FA(On(m.launch)),Wx=Fe*kx;Oa.length=0;let Lm=it.amt>.001,Xx=Math.max(1,h.reach*nn),qx=Math.max(1,h.sideReach*nn),Nm=Go(Y,h.grab),Pm=Go(Y,h.release),Yx=-1,Zx=1e9,Om=0,qA=Math.round(h.imageOffset),YA=Mt=>B>0?((qA-Mt)%B+B)%B:0,ZA=St.inside&&St.seeded&&Lt,Im=-1,Jx=Lm?mi:-1;for(let Mt=0;Mt<$;Mt++){let Tn=Ho(Mt),ti=Math.abs(Tn),gn=Mt===0?On(m.progress):wh[ti],xs=YA(Tn),ys=Ch+Math.sign(Tn)*st*ko[ti]+m.spin,os=Math.cos(ys)*Wx+gt,Ga=Math.sin(ys)*Wx+mn;Ia[Mt].set(os,Ga);let Lh=ys-we,Nh=Math.abs(Math.atan2(Math.sin(Lh),Math.cos(Lh)));Nh<Zx&&(Zx=Nh,Yx=Mt,Om=xs);let Ss=0,qo=0,Ph=0;if(Lm){let Ms=it.x-os,ka=it.y-Ga,Qs=Math.hypot(Ms,ka);if(Ss=Na(Xx,Xx*.22,Qs)*it.amt*gn,Ss>1e-4&&Qs>1e-4){let Wa=h.pull*at*Ss/Qs;qo=Ms*Wa,Ph=ka*Wa}}let Yo=Ss>Yr[Mt]?Nm:Pm;Yr[Mt]+=(Ss-Yr[Mt])*Yo,Ba[Mt]+=(qo-Ba[Mt])*Yo,Fa[Mt]+=(Ph-Fa[Mt])*Yo;let Zo=0;if(Jx>=0&&Mt!==Jx){let Ms=Math.hypot(za.x-os,za.y-Ga);Zo=Na(qx,qx*.2,Ms)*gn}zi[Mt]+=(Zo-zi[Mt])*(Zo>zi[Mt]?Nm:Pm);let Tc=0,Ec=0;if(zi[Mt]>1e-4){let Ms=os-za.x,ka=Ga-za.y,Qs=Math.hypot(Ms,ka);if(Qs>1e-4){let Wa=h.sidePush*at*zi[Mt]/Qs;Tc=Ms*Wa,Ec=ka*Wa}}M.uPos.value[Mt].set(os+Ba[Mt]+Tc,Ga+Fa[Mt]+Ec),M.uRot.value[Mt]=(h.radial?ys:ys+BA)*kx;let Ac=Mt===0?Eh(On(Yt?(gn-.5)/.46:gn/.7)):Eh(On(gn/.34)),Oh=Mt===0?Eh(On(Yt?(gn-.58)/.38:(gn-.18)/.74)):Eh(On((gn-.06)/.36)),Ih=Wo(Mt);if(M.uScale.value[Mt].set(Ac*Ih,Oh*Ih,1-h.sideDim*zi[Mt],xs),ZA&&Im<0){let Ms=M.uRot.value[Mt],ka=it.x-(os+Ba[Mt]+Tc),Qs=it.y-(Ga+Fa[Mt]+Ec),Wa=Math.cos(Ms),Kx=Math.sin(Ms);Math.abs(ka*Wa+Qs*Kx)<=nn*.5*Ac*Ih&&Math.abs(-ka*Kx+Qs*Wa)<=$n*.5*Oh*Ih&&(Im=Mt)}Oa.push(Mt)}for(let Mt=$;Mt<Ii;Mt++)M.uScale.value[Mt].set(0,0,1,0),Yr[Mt]=0,Ba[Mt]=0,Fa[Mt]=0,zi[Mt]=0;mi=Im;let Rh=h.focusParticles&&q>h.focusParticleFrom&&!ct&&Lt&&Et>.995?mi:-1;Qn<0&&Rh>=0&&(Qn=Rh,Zr=0);let Dh=Qn>=0&&Qn===Rh,JA=Dh?1:0,KA=Dh?h.focusParticleEnter:h.focusParticleExit;if(Va+=(JA-Va)*Go(Y,KA),!x.matches&&Qn>=0&&(Zr+=Y*(Dh?h.focusParticleDrift:-h.focusParticleOut)),!Dh&&Va<.015&&(Qn=Rh,Va=0,Zr=0),Qn>=0){let Mt=M.uPos.value[Qn],Tn=M.uScale.value[Qn],ti=nn*.5*Tn.x,gn=$n*.5*Tn.y,xs=Math.min(ti,gn),ys=Na(.3,1,Math.min(Tn.x,Tn.y)),os=Math.min(xs,xs+(M.uRadius.value-xs)*ys);M.uFocusParticlePos.value.copy(Mt),M.uFocusParticleBox.value.set(ti,gn,os,M.uRot.value[Qn])}M.uFocusParticles.value.set(Va,h.focusParticleReach*at,Math.max(6,h.focusParticleCell*at),h.focusParticleOpacity),M.uFocusParticleMotion.value.set(Zr,x.matches?0:1),M.uFocusWord.value.set(h.focusParticleWord?1:0,h.focusParticleWordFill);let Bm=mi>=0&&!ct&&q>h.tagFrom;Bm!==bc&&(bc=Bm,T.show(Bm)),mi>=0&&za.copy(Ia[mi]),M.uTag.value.set(it.x+h.tagX,it.y+h.tagY,T.box.sx,T.box.sy),M.uTagP.value.set(wm*.5,Mc*.5,Mc*.5,h.tagRefract),M.uTagQ.value.set(h.tagFrost,h.tagRim,0,0),Yx>=0&&B>0&&Om!==Vi&&(Vi=Om,Dm()),Oa.sort((Mt,Tn)=>Ho(Mt)-Ho(Tn));let QA=ge*.5*h.thread,jA=Et>.995&&$>2,Fm=Math.min(jA?$:$-1,qr);for(let Mt=0;Mt<Fm;Mt++){let Tn=Oa[Mt],ti=Oa[(Mt+1)%$],gn=M.uPos.value[Tn],xs=M.uPos.value[ti],ys=M.uScale.value[Tn],os=M.uScale.value[ti],Ga=(h.radial?ys.y:ys.x)/Wo(Tn),Lh=(h.radial?os.y:os.x)/Wo(ti),Nh=Ia[Tn].distanceTo(Ia[ti])-Ks*.5*(Ga+Lh),Ss=On(Nh/Se),qo=0;if(Lm&&h.web>1e-4){let Tc=(gn.x+xs.x)*.5,Ec=(gn.y+xs.y)*.5,Ac=Math.max(1,h.webReach*nn),Oh=Math.hypot(it.x-Tc,it.y-Ec);qo=Na(Ac,Ac*.15,Oh)*it.amt}Fi[Mt]+=(qo-Fi[Mt])*(qo>Fi[Mt]?Nm:Pm);let Ph=Math.max(Math.pow(1-Ss,h.thin),h.web*Fi[Mt]),Yo=QA*Ph-h.dissolve,Zo=Yo*(1-(1-h.pinch)*Na(0,.7,Ss));M.uLinkA.value[Mt].copy(gn),M.uLinkB.value[Mt].copy(xs),M.uLinkPar.value[Mt].set(Yo,Zo,h.sag*ue*Math.pow(Ss,1.5),Math.min(h.fillet*ue*Na(0,.35,Ss),Math.max(Zo,0)*1.5))}for(let Mt=Fm;Mt<qr;Mt++)M.uLinkPar.value[Mt].set(-100,-100,0,0);M.uLinkCount.value=Fm,M.uK.value=h.goo*mt*at,M.uWobble.value=h.wobble*at*(1-Na(.2,.95,m.progress)),M.uTextured.value=h.textured&&D?1:0,M.uBlend.value=Math.max(.5,h.blend*mt*ue),M.uIntro.value.set(Yt?On(m.progress):1,h.assembleSpread,Math.max(7,h.assembleCell*at),Yt?h.assembleOpacity:0),M.uCardParticles.value.set(On(m.launch),h.assembleHaloReach*at,Math.max(7,h.assembleCell*at),Yt?h.assembleHaloOpacity:0);let Uh=h.glass;M.uBandTop.value=Uh?h.bandTop*et:0,M.uBandBottom.value=Uh?h.bandBottom*et:0,M.uGlass.value.set(h.refract,h.squeeze,h.ripple,h.rippleFreq),M.uFringe.value=Uh?h.fringe:0,M.uSheen.value=Uh?h.sheen:0},A=0,P=()=>{Lt=!1,Xo=-1,Bt=0,Jt=!1,xe=!1,Qn=-1,Va=0,Zr=0,M.uFocusParticles.value.x=0,O();let Y=++A,$=Ie.timeline({delay:.25,paused:h.openLaunched,onComplete:()=>{Lt=!0,ut("ready",{count:Em.length})}}),st=h.openLaunched,Et=h.assemble&&!st&&q>h.assembleFrom&&!x.matches;st?Ie.set(m,{progress:1,launch:1,spread:0,spin:0,shift:0}):$.fromTo(m,{progress:0,launch:0,spread:0,spin:0,shift:0},{progress:1,duration:Et?h.assembleTime:.65,ease:Et?h.assembleEase:"power1.out"});let kt=()=>{I(()=>{let gt=h.holdAfter+(st?h.openHold:0);Ie.delayedCall(gt,()=>{c||Y!==A||$.resume()})})};st?kt():$.addPause(">",kt),st||$.to(m,{launch:1,duration:h.launchTime,ease:"power2.inOut"});let ce=Math.max(0,$.duration()-.15);$.to(m,{spread:1,duration:h.spreadTime,ease:h.spreadEase},ce);let qt=ce+h.stageAt*h.spreadTime;$.to(m,{spin:h.spinTurns*La,duration:h.spinTime,ease:h.spinEase},qt+h.spinDelay),$.to(m,{shift:1,duration:h.moveTime,ease:h.moveEase},qt+h.moveDelay);let ue=ce+h.textAt*h.spreadTime;if(y.chars.length&&$.fromTo(y.chars,{value:0},{value:1,duration:h.textTime,ease:h.textEase,stagger:h.textStagger},ue),h.textOut&&y.fades.length){let gt=Math.max(qt+h.spinDelay+h.spinTime,qt+h.moveDelay+h.moveTime);$.fromTo(y.fades,{value:1},{value:0,duration:h.textOutTime,ease:h.textOutEase,stagger:h.textStagger},Math.max(0,gt+h.textOutAt))}return o&&$.fromTo(o,{opacity:0},{opacity:1,duration:h.textTime,ease:h.textEase},ue),$};T.build(),T.load(()=>{c||T.build()}),rt();let G=null,z=()=>{G?.kill(),G=P()},F=()=>{c||G||(y.build(),T.build(),rt(),z(),u&&(G.progress(1),Object.assign(m,{progress:1,launch:1,spread:1,shift:1}),Lt=!0,Ie.globalTimeline.pause(),f=!0,ut("ready",{count:Em.length})))},xt=document.fonts?Promise.all([document.fonts.load(`400 40px "${h.textFont}"`),document.fonts.load(`500 40px "${h.nameFont}"`)]).then(()=>document.fonts.ready):Promise.resolve(),bt=setTimeout(F,3e3);Promise.all([xt,H.first]).then(F).catch(F);let _t,Ct=performance.now();return g.setAnimationLoop(()=>{let Y=performance.now();if(!d||document.hidden||u&&!f){Ct=Y;return}f=!1;let $=Math.min(.05,(Y-Ct)/1e3);if(Ct=Y,u||(M.uTime.value+=$),Lt&&!Jt&&!de){m.spin+=Bt*$,Bt*=Math.pow(h.damping,$*60);let st=0;if(h.snap){let Et=La/Math.round(h.count),kt=Math.max(.01,-Math.log(h.damping)*60),ce=Math.max(h.snapFrom,kt*Et*.5),qt=4.8/Math.max(.05,h.snapTime);if(!xe&&Math.abs(Bt)<ce){let ue=m.spin+Bt/kt,gt=h.seed*Cm-we;Ke=Math.round((ue+gt)/Et)*Et-gt,Qe=Math.max(Math.abs(Bt),Et*.5*qt),xe=!0}if(xe){st=Ke-m.spin;let ue=Math.max(-Qe,Math.min(Qe,st*qt));Bt+=(ue-Bt)*On(qt*$)}}else xe=!1;Math.abs(Bt)<.0015&&Math.abs(st)<8e-4&&(Bt=0,m.spin+=st)}Bi($),ye($),Um($),Lt&&!Jt&&!de&&Bt===0&&Vi>=0&&Vi!==Xo&&(Xo=Vi,R.show(Vi)),g.render(p,v)}),()=>{c=!0,clearTimeout(Dt),clearTimeout(bt),g.setAnimationLoop(null),window.removeEventListener("resize",Ft),window.removeEventListener("message",j),l||r.removeEventListener("wheel",vt),r.removeEventListener("pointerdown",nt),r.removeEventListener("pointermove",At),r.removeEventListener("pointerup",Tt),r.removeEventListener("pointercancel",Tt),r.removeEventListener("pointerleave",pt),r.removeEventListener("click",De),G?.kill(),Ie.killTweensOf(y.chars),Ie.killTweensOf(y.fades),Ie.killTweensOf(o),R.dispose(),T.dispose(),y.dispose(),_t?.destroy(),w.geometry.dispose(),w.material.dispose(),M.uAtlas.value?.dispose(),M.uAsciiTex.value?.dispose(),M.uTagTex.value?.dispose(),g.dispose(),g.forceContextLoss(),g.domElement.remove()}},[]),(0,bn.jsxs)(bn.Fragment,{children:[(0,bn.jsx)("div",{ref:e,className:"fixed inset-0 touch-none"}),[{side:"left",justify:"flex-start"}].map(({side:r,justify:o})=>{let l=(0,bn.jsxs)("span",{className:"flex flex-wrap items-baseline",children:[(0,bn.jsx)("span",{className:"whitespace-nowrap"}),(0,bn.jsx)("span",{className:"whitespace-nowrap"})]});return(0,bn.jsxs)("div",{ref:c=>{a.current[r].box=c},"aria-hidden":"true",className:"pointer-events-none fixed top-1/2 z-10 -translate-y-1/2 tracking-[-0.01em] text-[#0a0a0a]",children:[(0,bn.jsx)("span",{ref:c=>{a.current[r].goo=c},className:"absolute inset-0",style:{willChange:"filter"},children:[0,1].map(c=>(0,bn.jsx)("span",{ref:u=>{a.current[r].layers[c]=u},className:"absolute inset-0 flex items-center",style:{justifyContent:o},children:l},c))}),(0,bn.jsx)("span",{ref:c=>{a.current[r].plain=c},className:"absolute inset-0 flex items-center",style:{justifyContent:o},children:l})]},r)}),(0,bn.jsx)("div",{ref:i,"aria-live":"polite",className:"sr-only"}),(0,bn.jsx)("svg",{"aria-hidden":"true",className:"pointer-events-none absolute h-0 w-0",focusable:"false",children:(0,bn.jsx)("defs",{children:(0,bn.jsx)("filter",{id:"name-goo",x:"-20%",y:"-100%",width:"140%",height:"300%",colorInterpolationFilters:"sRGB",children:(0,bn.jsx)("feColorMatrix",{ref:s,in:"SourceGraphic",type:"matrix",values:`1 0 0 0 0\r
                      0 1 0 0 0\r
                      0 0 1 0 0\r
                      0 0 0 255 -140`})})})})]})}var XA=Jr(Ah(),1);(0,WA.createRoot)(document.getElementById("root")).render((0,XA.jsx)(Gx,{}));})();
/*! For license information please see bundle.js.LEGAL.txt */
