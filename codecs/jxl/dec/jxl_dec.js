
var jxl_dec = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(jxl_dec) {
  jxl_dec = jxl_dec || {};


var f;f||(f=typeof jxl_dec !== 'undefined' ? jxl_dec : {});var aa,ba;f.ready=new Promise(function(a,b){aa=a;ba=b});var r={},t;for(t in f)f.hasOwnProperty(t)&&(r[t]=f[t]);var ca="./this.program",u=!1,v=!1,da=!1,ea=!1;u="object"===typeof window;v="function"===typeof importScripts;da="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;ea=!u&&!da&&!v;var w="",x,z,fa,ha;
if(da)w=v?require("path").dirname(w)+"/":__dirname+"/",x=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},z=function(a){a=x(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",A),f.inspect=function(){return"[Emscripten Module object]"};else if(ea)"undefined"!=
typeof read&&(x=function(a){return read(a)}),z=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(u||v)v?w=self.location.href:"undefined"!==typeof document&&document.currentScript&&(w=document.currentScript.src),_scriptDir&&(w=_scriptDir),0!==
w.indexOf("blob:")?w=w.substr(0,w.lastIndexOf("/")+1):w="",x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(z=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ia=f.print||console.log.bind(console),B=f.printErr||console.warn.bind(console);for(t in r)r.hasOwnProperty(t)&&(f[t]=r[t]);r=null;f.thisProgram&&(ca=f.thisProgram);var D;f.wasmBinary&&(D=f.wasmBinary);var noExitRuntime;
f.noExitRuntime&&(noExitRuntime=f.noExitRuntime);"object"!==typeof WebAssembly&&A("no native wasm support detected");var E,ja=!1;function assert(a,b){a||A("Assertion failed: "+b)}var ka="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function la(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ka)return ka.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var l=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|l:(e&7)<<18|g<<12|l<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}
function ma(a,b,c){var d=F;if(0<c){c=b+c-1;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var l=a.charCodeAt(++e);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0}}var na="undefined"!==typeof TextDecoder?new TextDecoder("utf-16le"):void 0;
function oa(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&G[c];)++c;c<<=1;if(32<c-a&&na)return na.decode(F.subarray(a,c));c=0;for(d="";;){var e=H[a+2*c>>1];if(0==e||c==b/2)return d;++c;d+=String.fromCharCode(e)}}function pa(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var e=0;e<c;++e)H[b>>1]=a.charCodeAt(e),b+=2;H[b>>1]=0;return b-d}function qa(a){return 2*a.length}
function ra(a,b){for(var c=0,d="";!(c>=b/4);){var e=I[a+4*c>>2];if(0==e)break;++c;65536<=e?(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023)):d+=String.fromCharCode(e)}return d}function sa(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var e=0;e<a.length;++e){var g=a.charCodeAt(e);if(55296<=g&&57343>=g){var l=a.charCodeAt(++e);g=65536+((g&1023)<<10)|l&1023}I[b>>2]=g;b+=4;if(b+4>c)break}I[b>>2]=0;return b-d}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}var K,L,F,H,G,I,M,ua,va;function wa(a){K=a;f.HEAP8=L=new Int8Array(a);f.HEAP16=H=new Int16Array(a);f.HEAP32=I=new Int32Array(a);f.HEAPU8=F=new Uint8Array(a);f.HEAPU16=G=new Uint16Array(a);f.HEAPU32=M=new Uint32Array(a);f.HEAPF32=ua=new Float32Array(a);f.HEAPF64=va=new Float64Array(a)}var xa=f.INITIAL_MEMORY||16777216;f.wasmMemory?E=f.wasmMemory:E=new WebAssembly.Memory({initial:xa/65536,maximum:32768});
E&&(K=E.buffer);xa=K.byteLength;wa(K);var N,ya=[],za=[],Aa=[],Ba=[];function Ca(){var a=f.preRun.shift();ya.unshift(a)}var O=0,Da=null,Q=null;f.preloadedImages={};f.preloadedAudios={};function A(a){if(f.onAbort)f.onAbort(a);B(a);ja=!0;a=new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");ba(a);throw a;}function Ea(a){var b=R;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Fa(){return Ea("data:application/octet-stream;base64,")}
var R="jxl_dec.wasm";if(!Fa()){var Ga=R;R=f.locateFile?f.locateFile(Ga,w):w+Ga}function Ha(){try{if(D)return new Uint8Array(D);if(z)return z(R);throw"both async and sync fetching of the wasm failed";}catch(a){A(a)}}function Ia(){return D||!u&&!v||"function"!==typeof fetch||Ea("file://")?Promise.resolve().then(Ha):fetch(R,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+R+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}
function S(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.L;"number"===typeof c?void 0===b.I?N.get(c)():N.get(c)(b.I):c(void 0===b.I?null:b.I)}}}function Ja(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ka=void 0;function T(a){for(var b="";F[a];)b+=Ka[F[a++]];return b}var U={},V={},La={};
function Ma(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function Na(a,b){a=Ma(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}
function Oa(a){var b=Error,c=Na(a,function(d){this.name=a;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}var Pa=void 0;function W(a){throw new Pa(a);}var Qa=void 0;
function Ra(a,b){function c(k){k=b(k);if(k.length!==d.length)throw new Qa("Mismatched type converter count");for(var h=0;h<d.length;++h)X(d[h],k[h])}var d=[];d.forEach(function(k){La[k]=a});var e=Array(a.length),g=[],l=0;a.forEach(function(k,h){V.hasOwnProperty(k)?e[h]=V[k]:(g.push(k),U.hasOwnProperty(k)||(U[k]=[]),U[k].push(function(){e[h]=V[k];++l;l===g.length&&c(e)}))});0===g.length&&c(e)}
function X(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||W('type "'+d+'" must have a positive integer typeid pointer');if(V.hasOwnProperty(a)){if(c.M)return;W("Cannot register type '"+d+"' twice")}V[a]=b;delete La[a];U.hasOwnProperty(a)&&(b=U[a],delete U[a],b.forEach(function(e){e()}))}var Sa=[],Y=[{},{value:void 0},{value:null},{value:!0},{value:!1}];
function Ta(a){4<a&&0===--Y[a].J&&(Y[a]=void 0,Sa.push(a))}function Ua(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=Sa.length?Sa.pop():Y.length;Y[b]={J:1,value:a};return b}}function Va(a){return this.fromWireType(M[a>>2])}function Wa(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}
function Xa(a,b){switch(b){case 2:return function(c){return this.fromWireType(ua[c>>2])};case 3:return function(c){return this.fromWireType(va[c>>3])};default:throw new TypeError("Unknown float type: "+a);}}function Ya(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Na(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function ab(a){for(;a.length;){var b=a.pop();a.pop()(b)}}function bb(a,b){var c=f;if(void 0===c[a].G){var d=c[a];c[a]=function(){c[a].G.hasOwnProperty(arguments.length)||W("Function '"+b+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+c[a].G+")!");return c[a].G[arguments.length].apply(this,arguments)};c[a].G=[];c[a].G[d.K]=d}}
function cb(a,b,c){f.hasOwnProperty(a)?((void 0===c||void 0!==f[a].G&&void 0!==f[a].G[c])&&W("Cannot register public name '"+a+"' twice"),bb(a,a),f.hasOwnProperty(c)&&W("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),f[a].G[c]=b):(f[a]=b,void 0!==c&&(f[a].O=c))}function db(a,b){for(var c=[],d=0;d<a;d++)c.push(I[(b>>2)+d]);return c}
function eb(a,b){assert(0<=a.indexOf("j"),"getDynCaller should only be called with i64 sigs");var c=[];return function(){c.length=arguments.length;for(var d=0;d<arguments.length;d++)c[d]=arguments[d];var e;-1!=a.indexOf("j")?e=c&&c.length?f["dynCall_"+a].apply(null,[b].concat(c)):f["dynCall_"+a].call(null,b):e=N.get(b).apply(null,c);return e}}function fb(a,b){a=T(a);var c=-1!=a.indexOf("j")?eb(a,b):N.get(b);"function"!==typeof c&&W("unknown function pointer with signature "+a+": "+b);return c}
var gb=void 0;function hb(a){a=ib(a);var b=T(a);Z(a);return b}function jb(a,b){function c(g){e[g]||V[g]||(La[g]?La[g].forEach(c):(d.push(g),e[g]=!0))}var d=[],e={};b.forEach(c);throw new gb(a+": "+d.map(hb).join([", "]));}
function kb(a,b,c){switch(b){case 0:return c?function(d){return L[d]}:function(d){return F[d]};case 1:return c?function(d){return H[d>>1]}:function(d){return G[d>>1]};case 2:return c?function(d){return I[d>>2]}:function(d){return M[d>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var lb={};function mb(){return"object"===typeof globalThis?globalThis:Function("return this")()}function nb(a,b){var c=V[a];void 0===c&&W(b+" has unknown type "+hb(a));return c}var ob={},pb={};
function qb(){if(!rb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in pb)a[b]=pb[b];var c=[];for(b in a)c.push(b+"="+a[b]);rb=c}return rb}for(var rb,sb=[null,[],[]],tb=Array(256),ub=0;256>ub;++ub)tb[ub]=String.fromCharCode(ub);Ka=tb;Pa=f.BindingError=Oa("BindingError");Qa=f.InternalError=Oa("InternalError");
f.count_emval_handles=function(){for(var a=0,b=5;b<Y.length;++b)void 0!==Y[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<Y.length;++a)if(void 0!==Y[a])return Y[a];return null};gb=f.UnboundTypeError=Oa("UnboundTypeError");za.push({L:function(){vb()}});
var xb={h:function(){},o:function(a,b,c,d,e){var g=Ja(c);b=T(b);X(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,k){return k?d:e},argPackAdvance:8,readValueFromPointer:function(l){if(1===c)var k=L;else if(2===c)k=H;else if(4===c)k=I;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[l>>g])},H:null})},x:function(a,b){b=T(b);X(a,{name:b,fromWireType:function(c){var d=Y[c].value;Ta(c);return d},toWireType:function(c,d){return Ua(d)},argPackAdvance:8,
readValueFromPointer:Va,H:null})},n:function(a,b,c){c=Ja(c);b=T(b);X(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,e){if("number"!==typeof e&&"boolean"!==typeof e)throw new TypeError('Cannot convert "'+Wa(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:Xa(b,c),H:null})},q:function(a,b,c,d,e,g){var l=db(b,c);a=T(a);e=fb(d,e);cb(a,function(){jb("Cannot call "+a+" due to unbound types",l)},b-1);Ra(l,function(k){var h=[k[0],null].concat(k.slice(1)),n=k=a,p=e,
q=h.length;2>q&&W("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var y=null!==h[1]&&!1,C=!1,m=1;m<h.length;++m)if(null!==h[m]&&void 0===h[m].H){C=!0;break}var Za="void"!==h[0].name,J="",P="";for(m=0;m<q-2;++m)J+=(0!==m?", ":"")+"arg"+m,P+=(0!==m?", ":"")+"arg"+m+"Wired";n="return function "+Ma(n)+"("+J+") {\nif (arguments.length !== "+(q-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(q-2)+" args!');\n}\n";
C&&(n+="var destructors = [];\n");var $a=C?"destructors":"null";J="throwBindingError invoker fn runDestructors retType classParam".split(" ");p=[W,p,g,ab,h[0],h[1]];y&&(n+="var thisWired = classParam.toWireType("+$a+", this);\n");for(m=0;m<q-2;++m)n+="var arg"+m+"Wired = argType"+m+".toWireType("+$a+", arg"+m+"); // "+h[m+2].name+"\n",J.push("argType"+m),p.push(h[m+2]);y&&(P="thisWired"+(0<P.length?", ":"")+P);n+=(Za?"var rv = ":"")+"invoker(fn"+(0<P.length?", ":"")+P+");\n";if(C)n+="runDestructors(destructors);\n";
else for(m=y?1:2;m<h.length;++m)q=1===m?"thisWired":"arg"+(m-2)+"Wired",null!==h[m].H&&(n+=q+"_dtor("+q+"); // "+h[m].name+"\n",J.push(q+"_dtor"),p.push(h[m].H));Za&&(n+="var ret = retType.fromWireType(rv);\nreturn ret;\n");J.push(n+"}\n");h=Ya(J).apply(null,p);m=b-1;if(!f.hasOwnProperty(k))throw new Qa("Replacing nonexistant public symbol");void 0!==f[k].G&&void 0!==m?f[k].G[m]=h:(f[k]=h,f[k].K=m);return[]})},d:function(a,b,c,d,e){function g(n){return n}b=T(b);-1===e&&(e=4294967295);var l=Ja(c);
if(0===d){var k=32-8*c;g=function(n){return n<<k>>>k}}var h=-1!=b.indexOf("unsigned");X(a,{name:b,fromWireType:g,toWireType:function(n,p){if("number"!==typeof p&&"boolean"!==typeof p)throw new TypeError('Cannot convert "'+Wa(p)+'" to '+this.name);if(p<d||p>e)throw new TypeError('Passing a number "'+Wa(p)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+e+"]!");return h?p>>>0:p|0},argPackAdvance:8,readValueFromPointer:kb(b,l,0!==d),H:null})},
c:function(a,b,c){function d(g){g>>=2;var l=M;return new e(K,l[g+1],l[g])}var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][b];c=T(c);X(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{M:!0})},j:function(a,b){b=T(b);var c="std::string"===b;X(a,{name:b,fromWireType:function(d){var e=M[d>>2];if(c)for(var g=d+4,l=0;l<=e;++l){var k=d+4+l;if(l==e||0==F[k]){g=g?la(F,g,k-g):"";if(void 0===h)var h=g;else h+=String.fromCharCode(0),h+=g;g=
k+1}}else{h=Array(e);for(l=0;l<e;++l)h[l]=String.fromCharCode(F[d+4+l]);h=h.join("")}Z(d);return h},toWireType:function(d,e){e instanceof ArrayBuffer&&(e=new Uint8Array(e));var g="string"===typeof e;g||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||W("Cannot pass non-string to std::string");var l=(c&&g?function(){for(var n=0,p=0;p<e.length;++p){var q=e.charCodeAt(p);55296<=q&&57343>=q&&(q=65536+((q&1023)<<10)|e.charCodeAt(++p)&1023);127>=q?++n:n=2047>=q?n+2:65535>=
q?n+3:n+4}return n}:function(){return e.length})(),k=wb(4+l+1);M[k>>2]=l;if(c&&g)ma(e,k+4,l+1);else if(g)for(g=0;g<l;++g){var h=e.charCodeAt(g);255<h&&(Z(k),W("String has UTF-16 code units that do not fit in 8 bits"));F[k+4+g]=h}else for(g=0;g<l;++g)F[k+4+g]=e[g];null!==d&&d.push(Z,k);return k},argPackAdvance:8,readValueFromPointer:Va,H:function(d){Z(d)}})},i:function(a,b,c){c=T(c);if(2===b){var d=oa;var e=pa;var g=qa;var l=function(){return G};var k=1}else 4===b&&(d=ra,e=sa,g=ta,l=function(){return M},
k=2);X(a,{name:c,fromWireType:function(h){for(var n=M[h>>2],p=l(),q,y=h+4,C=0;C<=n;++C){var m=h+4+C*b;if(C==n||0==p[m>>k])y=d(y,m-y),void 0===q?q=y:(q+=String.fromCharCode(0),q+=y),y=m+b}Z(h);return q},toWireType:function(h,n){"string"!==typeof n&&W("Cannot pass non-string to C++ string type "+c);var p=g(n),q=wb(4+p+b);M[q>>2]=p>>k;e(n,q+4,p+b);null!==h&&h.push(Z,q);return q},argPackAdvance:8,readValueFromPointer:Va,H:function(h){Z(h)}})},p:function(a,b){b=T(b);X(a,{N:!0,name:b,argPackAdvance:0,fromWireType:function(){},
toWireType:function(){}})},f:Ta,g:function(a){if(0===a)return Ua(mb());var b=lb[a];a=void 0===b?T(a):b;return Ua(mb()[a])},k:function(a){4<a&&(Y[a].J+=1)},l:function(a,b,c,d){a||W("Cannot use deleted val. handle = "+a);a=Y[a].value;var e=ob[b];if(!e){e="";for(var g=0;g<b;++g)e+=(0!==g?", ":"")+"arg"+g;var l="return function emval_allocator_"+b+"(constructor, argTypes, args) {\n";for(g=0;g<b;++g)l+="var argType"+g+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+g+'], "parameter '+g+
'");\nvar arg'+g+" = argType"+g+".readValueFromPointer(args);\nargs += argType"+g+"['argPackAdvance'];\n";e=(new Function("requireRegisteredType","Module","__emval_register",l+("var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n")))(nb,f,Ua);ob[b]=e}return e(a,c,d)},b:function(){A()},t:function(a,b,c){F.copyWithin(a,b,b+c)},e:function(a){a>>>=0;var b=F.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%
65536&&(d+=65536-d%65536);a:{try{E.grow(Math.min(2147483648,d)-K.byteLength+65535>>>16);wa(E.buffer);var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},u:function(a,b){var c=0;qb().forEach(function(d,e){var g=b+c;e=I[a+4*e>>2]=g;for(g=0;g<d.length;++g)L[e++>>0]=d.charCodeAt(g);L[e>>0]=0;c+=d.length+1});return 0},v:function(a,b){var c=qb();I[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});I[b>>2]=d;return 0},w:function(){return 0},r:function(){},m:function(a,b,c,d){for(var e=0,
g=0;g<c;g++){for(var l=I[b+8*g>>2],k=I[b+(8*g+4)>>2],h=0;h<k;h++){var n=F[l+h],p=sb[a];0===n||10===n?((1===a?ia:B)(la(p,0)),p.length=0):p.push(n)}e+=k}I[d>>2]=e;return 0},a:E,s:function(){}};
(function(){function a(e){f.asm=e.exports;N=f.asm.y;O--;f.monitorRunDependencies&&f.monitorRunDependencies(O);0==O&&(null!==Da&&(clearInterval(Da),Da=null),Q&&(e=Q,Q=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){B("failed to asynchronously prepare wasm: "+g);A(g)})}var d={a:xb};O++;f.monitorRunDependencies&&f.monitorRunDependencies(O);if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(e){return B("Module.instantiateWasm callback failed with error: "+
e),!1}(function(){return D||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||Ea("file://")||"function"!==typeof fetch?c(b):fetch(R,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){B("wasm streaming compile failed: "+g);B("falling back to ArrayBuffer instantiation");return c(b)})})})().catch(ba);return{}})();
var vb=f.___wasm_call_ctors=function(){return(vb=f.___wasm_call_ctors=f.asm.z).apply(null,arguments)},wb=f._malloc=function(){return(wb=f._malloc=f.asm.A).apply(null,arguments)},Z=f._free=function(){return(Z=f._free=f.asm.B).apply(null,arguments)},ib=f.___getTypeName=function(){return(ib=f.___getTypeName=f.asm.C).apply(null,arguments)};f.___embind_register_native_and_builtin_types=function(){return(f.___embind_register_native_and_builtin_types=f.asm.D).apply(null,arguments)};
f.dynCall_iiji=function(){return(f.dynCall_iiji=f.asm.E).apply(null,arguments)};f.dynCall_jiji=function(){return(f.dynCall_jiji=f.asm.F).apply(null,arguments)};var yb;Q=function zb(){yb||Ab();yb||(Q=zb)};
function Ab(){function a(){if(!yb&&(yb=!0,f.calledRun=!0,!ja)){S(za);S(Aa);aa(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var b=f.postRun.shift();Ba.unshift(b)}S(Ba)}}if(!(0<O)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ca();S(ya);0<O||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);a()},1)):a())}}
f.run=Ab;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();noExitRuntime=!0;Ab();


  return jxl_dec.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = jxl_dec;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return jxl_dec; });
    else if (typeof exports === 'object')
      exports["jxl_dec"] = jxl_dec;
    