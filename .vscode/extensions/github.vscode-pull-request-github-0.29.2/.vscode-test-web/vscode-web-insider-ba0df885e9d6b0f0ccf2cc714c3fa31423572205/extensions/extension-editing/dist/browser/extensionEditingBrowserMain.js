(()=>{"use strict";var e={516:(e,t,n)=>{function r(e,t){void 0===t&&(t=!1);var n=e.length,r=0,f="",c=0,s=16,u=0,l=0,d=0,g=0,h=0;function p(t,n){for(var o=0,a=0;o<t||!n;){var i=e.charCodeAt(r);if(i>=48&&i<=57)a=16*a+i-48;else if(i>=65&&i<=70)a=16*a+i-65+10;else{if(!(i>=97&&i<=102))break;a=16*a+i-97+10}r++,o++}return o<t&&(a=-1),a}function v(){if(f="",h=0,c=r,l=u,g=d,r>=n)return c=n,s=17;var t=e.charCodeAt(r);if(o(t)){do{r++,f+=String.fromCharCode(t),t=e.charCodeAt(r)}while(o(t));return s=15}if(a(t))return r++,f+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,f+="\n"),u++,d=r,s=14;switch(t){case 123:return r++,s=1;case 125:return r++,s=2;case 91:return r++,s=3;case 93:return r++,s=4;case 58:return r++,s=6;case 44:return r++,s=5;case 34:return r++,f=function(){for(var t="",o=r;;){if(r>=n){t+=e.substring(o,r),h=2;break}var i=e.charCodeAt(r);if(34===i){t+=e.substring(o,r),r++;break}if(92!==i){if(i>=0&&i<=31){if(a(i)){t+=e.substring(o,r),h=2;break}h=6}r++}else{if(t+=e.substring(o,r),++r>=n){h=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var f=p(4,!0);f>=0?t+=String.fromCharCode(f):h=4;break;default:h=5}o=r}}return t}(),s=10;case 47:var v=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!a(e.charCodeAt(r));)r++;return f=e.substring(v,r),s=12}if(42===e.charCodeAt(r+1)){r+=2;for(var m=n-1,y=!1;r<m;){var k=e.charCodeAt(r);if(42===k&&47===e.charCodeAt(r+1)){r+=2,y=!0;break}r++,a(k)&&(13===k&&10===e.charCodeAt(r)&&r++,u++,d=r)}return y||(r++,h=1),f=e.substring(v,r),s=13}return f+=String.fromCharCode(t),r++,s=16;case 45:if(f+=String.fromCharCode(t),++r===n||!i(e.charCodeAt(r)))return s=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return f+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&i(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&i(e.charCodeAt(r))))return h=3,e.substring(t,r);for(r++;r<e.length&&i(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&i(e.charCodeAt(r))){for(r++;r<e.length&&i(e.charCodeAt(r));)r++;n=r}else h=3;return e.substring(t,n)}(),s=11;default:for(;r<n&&b(t);)r++,t=e.charCodeAt(r);if(c!==r){switch(f=e.substring(c,r)){case"true":return s=8;case"false":return s=9;case"null":return s=7}return s=16}return f+=String.fromCharCode(t),r++,s=16}}function b(e){if(o(e)||a(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,f="",c=0,s=16,h=0},getPosition:function(){return r},scan:t?function(){var e;do{e=v()}while(e>=12&&e<=15);return e}:v,getToken:function(){return s},getTokenValue:function(){return f},getTokenOffset:function(){return c},getTokenLength:function(){return r-c},getTokenStartLine:function(){return l},getTokenStartCharacter:function(){return c-g},getTokenError:function(){return h}}}function o(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function a(e){return 10===e||13===e||8232===e||8233===e}function i(e){return e>=48&&e<=57}function f(e,t,n){var o,a,i,f,u;if(t){for(f=t.offset,u=f+t.length,i=f;i>0&&!s(e,i-1);)i--;for(var l=u;l<e.length&&!s(e,l);)l++;a=e.substring(i,l),o=function(e,t){for(var n=0,r=0,o=t.tabSize||4;n<e.length;){var a=e.charAt(n);if(" "===a)r++;else{if("\t"!==a)break;r+=o}n++}return Math.floor(r/o)}(a,n)}else a=e,o=0,i=0,f=0,u=e.length;var d,g=function(e,t){for(var n=0;n<t.length;n++){var r=t.charAt(n);if("\r"===r)return n+1<t.length&&"\n"===t.charAt(n+1)?"\r\n":"\r";if("\n"===r)return"\n"}return e&&e.eol||"\n"}(n,e),h=!1,p=0;d=n.insertSpaces?c(" ",n.tabSize||4):"\t";var v=r(a,!1),b=!1;function m(){return g+c(d,o+p)}function y(){var e=v.scan();for(h=!1;15===e||14===e;)h=h||14===e,e=v.scan();return b=16===e||0!==v.getTokenError(),e}var k=[];function C(t,n,r){!b&&n<u&&r>f&&e.substring(n,r)!==t&&k.push({offset:n,length:r-n,content:t})}var A=y();if(17!==A){var w=v.getTokenOffset()+i;C(c(d,o),i,w)}for(;17!==A;){for(var O=v.getTokenOffset()+v.getTokenLength()+i,T=y(),S="";!h&&(12===T||13===T);)C(" ",O,v.getTokenOffset()+i),O=v.getTokenOffset()+v.getTokenLength()+i,S=12===T?m():"",T=y();if(2===T)1!==A&&(p--,S=m());else if(4===T)3!==A&&(p--,S=m());else{switch(A){case 3:case 1:p++,S=m();break;case 5:case 12:S=m();break;case 13:S=h?m():" ";break;case 6:S=" ";break;case 10:if(6===T){S="";break}case 7:case 8:case 9:case 11:case 2:case 4:12===T||13===T?S=" ":5!==T&&17!==T&&(b=!0);break;case 16:b=!0}!h||12!==T&&13!==T||(S=m())}C(S,O,v.getTokenOffset()+i),A=T}return k}function c(e,t){for(var n="",r=0;r<t;r++)n+=e;return n}function s(e,t){return-1!=="\r\n".indexOf(e.charAt(t))}var u;function l(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=u.DEFAULT);var r={type:"array",offset:-1,length:-1,children:[],parent:void 0};function o(e){"property"===r.type&&(r.length=e-r.offset,r=r.parent)}function a(e){return r.children.push(e),e}g(e,{onObjectBegin:function(e){r=a({type:"object",offset:e,length:-1,parent:r,children:[]})},onObjectProperty:function(e,t,n){(r=a({type:"property",offset:t,length:-1,parent:r,children:[]})).children.push({type:"string",value:e,offset:t,length:n,parent:r})},onObjectEnd:function(e,t){o(e+t),r.length=e+t-r.offset,r=r.parent,o(e+t)},onArrayBegin:function(e,t){r=a({type:"array",offset:e,length:-1,parent:r,children:[]})},onArrayEnd:function(e,t){r.length=e+t-r.offset,r=r.parent,o(e+t)},onLiteralValue:function(e,t,n){a({type:h(e),offset:t,length:n,parent:r,value:e}),o(t+n)},onSeparator:function(e,t,n){"property"===r.type&&(":"===e?r.colonOffset=t:","===e&&o(t))},onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n);var i=r.children[0];return i&&delete i.parent,i}function d(e,t){if(e){for(var n=e,r=0,o=t;r<o.length;r++){var a=o[r];if("string"==typeof a){if("object"!==n.type||!Array.isArray(n.children))return;for(var i=!1,f=0,c=n.children;f<c.length;f++){var s=c[f];if(Array.isArray(s.children)&&s.children[0].value===a){n=s.children[1],i=!0;break}}if(!i)return}else{var u=a;if("array"!==n.type||u<0||!Array.isArray(n.children)||u>=n.children.length)return;n=n.children[u]}}return n}}function g(e,t,n){void 0===n&&(n=u.DEFAULT);var o=r(e,!1);function a(e){return e?function(){return e(o.getTokenOffset(),o.getTokenLength(),o.getTokenStartLine(),o.getTokenStartCharacter())}:function(){return!0}}function i(e){return e?function(t){return e(t,o.getTokenOffset(),o.getTokenLength(),o.getTokenStartLine(),o.getTokenStartCharacter())}:function(){return!0}}var f=a(t.onObjectBegin),c=i(t.onObjectProperty),s=a(t.onObjectEnd),l=a(t.onArrayBegin),d=a(t.onArrayEnd),g=i(t.onLiteralValue),h=i(t.onSeparator),p=a(t.onComment),v=i(t.onError),b=n&&n.disallowComments,m=n&&n.allowTrailingComma;function y(){for(;;){var e=o.scan();switch(o.getTokenError()){case 4:k(14);break;case 5:k(15);break;case 3:k(13);break;case 1:b||k(11);break;case 2:k(12);break;case 6:k(16)}switch(e){case 12:case 13:b?k(10):p();break;case 16:k(1);break;case 15:case 14:break;default:return e}}}function k(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),v(e),t.length+n.length>0)for(var r=o.getToken();17!==r;){if(-1!==t.indexOf(r)){y();break}if(-1!==n.indexOf(r))break;r=y()}}function C(e){var t=o.getTokenValue();return e?g(t):c(t),y(),!0}return y(),17===o.getToken()?!!n.allowEmptyContent||(k(4,[],[]),!1):function e(){switch(o.getToken()){case 3:return function(){l(),y();for(var t=!1;4!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(t||k(4,[],[]),h(","),y(),4===o.getToken()&&m)break}else t&&k(6,[],[]);e()||k(4,[],[4,5]),t=!0}return d(),4!==o.getToken()?k(8,[4],[]):y(),!0}();case 1:return function(){f(),y();for(var t=!1;2!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(t||k(4,[],[]),h(","),y(),2===o.getToken()&&m)break}else t&&k(6,[],[]);(10!==o.getToken()?(k(3,[],[2,5]),0):(C(!1),6===o.getToken()?(h(":"),y(),e()||k(4,[],[2,5])):k(5,[],[2,5]),1))||k(4,[],[2,5]),t=!0}return s(),2!==o.getToken()?k(7,[2],[]):y(),!0}();case 10:return C(!0);default:return function(){switch(o.getToken()){case 11:var e=0;try{"number"!=typeof(e=JSON.parse(o.getTokenValue()))&&(k(2),e=0)}catch(e){k(2)}g(e);break;case 7:g(null);break;case 8:g(!0);break;case 9:g(!1);break;default:return!1}return y(),!0}()}}()?(17!==o.getToken()&&k(9,[],[]),!0):(k(4,[],[]),!1)}function h(e){switch(typeof e){case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"object":return e?Array.isArray(e)?"array":"object":"null";default:return"null"}}function p(e,t,n){var r=v(e,t),o=t.offset,a=t.offset+t.content.length;if(0===t.length||0===t.content.length){for(;o>0&&!s(r,o-1);)o--;for(;a<r.length&&!s(r,a);)a++}for(var i=f(r,{offset:o,length:a-o},n),c=i.length-1;c>=0;c--){var u=i[c];r=v(r,u),o=Math.min(o,u.offset),a=Math.max(a,u.offset+u.length),a+=u.content.length-u.length}return[{offset:o,length:e.length-(r.length-a)-o,content:r.substring(o,a)}]}function v(e,t){return e.substring(0,t.offset)+t.content+e.substring(t.offset+t.length)}n.r(t),n.d(t,{applyEdits:()=>x,createScanner:()=>b,findNodeAtLocation:()=>C,findNodeAtOffset:()=>A,format:()=>P,getLocation:()=>m,getNodePath:()=>w,getNodeValue:()=>O,modify:()=>j,parse:()=>y,parseTree:()=>k,printParseErrorCode:()=>E,stripComments:()=>S,visit:()=>T}),function(e){e.DEFAULT={allowTrailingComma:!1}}(u||(u={}));var b=r,m=function(e,t){var n=[],r=new Object,o=void 0,a={value:{},offset:0,length:0,type:"object",parent:void 0},i=!1;function f(e,t,n,r){a.value=e,a.offset=t,a.length=n,a.type=r,a.colonOffset=void 0,o=a}try{g(e,{onObjectBegin:function(e,a){if(t<=e)throw r;o=void 0,i=t>e,n.push("")},onObjectProperty:function(e,o,a){if(t<o)throw r;if(f(e,o,a,"property"),n[n.length-1]=e,t<=o+a)throw r},onObjectEnd:function(e,a){if(t<=e)throw r;o=void 0,n.pop()},onArrayBegin:function(e,a){if(t<=e)throw r;o=void 0,n.push(0)},onArrayEnd:function(e,a){if(t<=e)throw r;o=void 0,n.pop()},onLiteralValue:function(e,n,o){if(t<n)throw r;if(f(e,n,o,h(e)),t<=n+o)throw r},onSeparator:function(e,a,f){if(t<=a)throw r;if(":"===e&&o&&"property"===o.type)o.colonOffset=a,i=!1,o=void 0;else if(","===e){var c=n[n.length-1];"number"==typeof c?n[n.length-1]=c+1:(i=!0,n[n.length-1]=""),o=void 0}}})}catch(e){if(e!==r)throw e}return{path:n,previousNode:o,isAtPropertyKey:i,matches:function(e){for(var t=0,r=0;t<e.length&&r<n.length;r++)if(e[t]===n[r]||"*"===e[t])t++;else if("**"!==e[t])return!1;return t===e.length}}},y=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=u.DEFAULT);var r=null,o=[],a=[];function i(e){Array.isArray(o)?o.push(e):null!==r&&(o[r]=e)}return g(e,{onObjectBegin:function(){var e={};i(e),a.push(o),o=e,r=null},onObjectProperty:function(e){r=e},onObjectEnd:function(){o=a.pop()},onArrayBegin:function(){var e=[];i(e),a.push(o),o=e,r=null},onArrayEnd:function(){o=a.pop()},onLiteralValue:i,onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n),o[0]},k=l,C=d,A=function e(t,n,r){if(void 0===r&&(r=!1),function(e,t,n){return void 0===n&&(n=!1),t>=e.offset&&t<e.offset+e.length||n&&t===e.offset+e.length}(t,n,r)){var o=t.children;if(Array.isArray(o))for(var a=0;a<o.length&&o[a].offset<=n;a++){var i=e(o[a],n,r);if(i)return i}return t}},w=function e(t){if(!t.parent||!t.parent.children)return[];var n=e(t.parent);if("property"===t.parent.type){var r=t.parent.children[0].value;n.push(r)}else if("array"===t.parent.type){var o=t.parent.children.indexOf(t);-1!==o&&n.push(o)}return n},O=function e(t){switch(t.type){case"array":return t.children.map(e);case"object":for(var n=Object.create(null),r=0,o=t.children;r<o.length;r++){var a=o[r],i=a.children[1];i&&(n[a.children[0].value]=e(i))}return n;case"null":case"string":case"number":case"boolean":return t.value;default:return}},T=g,S=function(e,t){var n,o,a=r(e),i=[],f=0;do{switch(o=a.getPosition(),n=a.scan()){case 12:case 13:case 17:f!==o&&i.push(e.substring(f,o)),void 0!==t&&i.push(a.getTokenValue().replace(/[^\r\n]/g,t)),f=a.getPosition()}}while(17!==n);return i.join("")};function E(e){switch(e){case 1:return"InvalidSymbol";case 2:return"InvalidNumberFormat";case 3:return"PropertyNameExpected";case 4:return"ValueExpected";case 5:return"ColonExpected";case 6:return"CommaExpected";case 7:return"CloseBraceExpected";case 8:return"CloseBracketExpected";case 9:return"EndOfFileExpected";case 10:return"InvalidCommentToken";case 11:return"UnexpectedEndOfComment";case 12:return"UnexpectedEndOfString";case 13:return"UnexpectedEndOfNumber";case 14:return"InvalidUnicode";case 15:return"InvalidEscapeCharacter";case 16:return"InvalidCharacter"}return"<unknown ParseErrorCode>"}function P(e,t,n){return f(e,t,n)}function j(e,t,n,r){return function(e,t,n,r,o){for(var a,i=t.slice(),f=l(e,[]),c=void 0,s=void 0;i.length>0&&(s=i.pop(),void 0===(c=d(f,i))&&void 0!==n);)"string"==typeof s?((a={})[s]=n,n=a):n=[n];if(c){if("object"===c.type&&"string"==typeof s&&Array.isArray(c.children)){var u=d(c,[s]);if(void 0!==u){if(void 0===n){if(!u.parent)throw new Error("Malformed AST");var g=c.children.indexOf(u.parent),h=void 0,v=u.parent.offset+u.parent.length;return g>0?h=(A=c.children[g-1]).offset+A.length:(h=c.offset+1,c.children.length>1&&(v=c.children[1].offset)),p(e,{offset:h,length:v-h,content:""},r)}return p(e,{offset:u.offset,length:u.length,content:JSON.stringify(n)},r)}if(void 0===n)return[];var b=JSON.stringify(s)+": "+JSON.stringify(n),m=o?o(c.children.map((function(e){return e.children[0].value}))):c.children.length,y=void 0;return p(e,y=m>0?{offset:(A=c.children[m-1]).offset+A.length,length:0,content:","+b}:0===c.children.length?{offset:c.offset+1,length:0,content:b}:{offset:c.offset+1,length:0,content:b+","},r)}if("array"===c.type&&"number"==typeof s&&Array.isArray(c.children)){if(-1===s)return b=""+JSON.stringify(n),y=void 0,p(e,y=0===c.children.length?{offset:c.offset+1,length:0,content:b}:{offset:(A=c.children[c.children.length-1]).offset+A.length,length:0,content:","+b},r);if(void 0===n&&c.children.length>=0){var k=s,C=c.children[k];if(y=void 0,1===c.children.length)y={offset:c.offset+1,length:c.length-2,content:""};else if(c.children.length-1===k){var A,w=(A=c.children[k-1]).offset+A.length;y={offset:w,length:c.offset+c.length-2-w,content:""}}else y={offset:C.offset,length:c.children[k+1].offset-C.offset,content:""};return p(e,y,r)}throw new Error("Array modification not supported yet")}throw new Error("Can not add "+("number"!=typeof s?"index":"property")+" to parent of type "+c.type)}if(void 0===n)throw new Error("Can not delete in empty document");return p(e,{offset:f?f.offset:0,length:f?f.length:0,content:JSON.stringify(n)},r)}(e,t,n,r.formattingOptions,r.getInsertionIndex)}function x(e,t){for(var n=t.length-1;n>=0;n--)e=v(e,t[n]);return e}},189:function(e,t,n){var r=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,f=a.length;i<f;i++,o++)r[o]=a[i];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=void 0;var o=n(926),a=n(800),i=n(800);function f(e){return function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];if("number"==typeof e)throw new Error("Browser implementation does currently not support externalized strings.");return a.localize.apply(void 0,r([e,t],n))}}function c(e){return a.setPseudo("pseudo"===(null==e?void 0:e.locale.toLowerCase())),f}Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return i.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return i.BundleFormat}}),t.loadMessageBundle=f,t.config=c,o.default.install(Object.freeze({loadMessageBundle:f,config:c}))},800:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var r,o,a,i=n(926);function f(e){return void 0!==e}function c(e,n){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===n.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var r=t[0],o=n[r],a=e;return"string"==typeof o?a=o:"number"!=typeof o&&"boolean"!=typeof o&&null!=o||(a=String(o)),a}))}(a=t.MessageFormat||(t.MessageFormat={})).file="file",a.bundle="bundle",a.both="both",(o=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",o.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&f(t.key)&&f(t.comment)}}(r||(r={})),t.isDefined=f,t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=c,t.localize=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return c(t,n)},t.loadMessageBundle=function(e){return i.default().loadMessageBundle(e)},t.config=function(e){return i.default().config(e)}},926:(e,t)=>{var n;function r(){if(void 0===n)throw new Error("No runtime abstraction layer installed");return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");n=e}}(r||(r={})),t.default=r},245:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PackageDocument=void 0;const r=n(549),o=n(516),a=n(189).loadMessageBundle();t.PackageDocument=class{constructor(e){this.document=e}provideCompletionItems(e,t){const n=(0,o.getLocation)(this.document.getText(),this.document.offsetAt(e));if(n.path.length>=2&&"configurationDefaults"===n.path[1])return this.provideLanguageOverridesCompletionItems(n,e)}provideLanguageOverridesCompletionItems(e,t){let n=this.document.getWordRangeAtPosition(t)||new r.Range(t,t);const o=this.document.getText(n);if(2===e.path.length){let e='"[${1:language}]": {\n\t"$0"\n}';return o&&o.startsWith('"')&&(n=new r.Range(new r.Position(n.start.line,n.start.character+1),n.end),e=e.substring(1)),Promise.resolve([this.newSnippetCompletionItem({label:a("languageSpecificEditorSettings","Language specific editor settings"),documentation:a("languageSpecificEditorSettingsDescription","Override editor settings for language"),snippet:e,range:n})])}return 3===e.path.length&&e.previousNode&&"string"==typeof e.previousNode.value&&e.previousNode.value.startsWith("[")?(n=new r.Range(new r.Position(n.start.line,n.start.character+2),n.end),r.languages.getLanguages().then((e=>e.map((e=>this.newSimpleCompletionItem(e,n,"",e+']"')))))):Promise.resolve([])}newSimpleCompletionItem(e,t,n,o){const a=new r.CompletionItem(e);return a.kind=r.CompletionItemKind.Value,a.detail=n,a.insertText=o||e,a.range=t,a}newSnippetCompletionItem(e){const t=new r.CompletionItem(e.label);return t.kind=r.CompletionItemKind.Value,t.documentation=e.documentation,t.insertText=new r.SnippetString(e.snippet),t.range=e.range,t}}},549:e=>{e.exports=require("vscode")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=n(549),o=n(245);e.activate=function(e){e.subscriptions.push(t.languages.registerCompletionItemProvider({language:"json",pattern:"**/package.json"},{provideCompletionItems:(e,t,n)=>new o.PackageDocument(e).provideCompletionItems(t,n)}))}})();var o=exports;for(var a in r)o[a]=r[a];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ba0df885e9d6b0f0ccf2cc714c3fa31423572205/extensions/extension-editing/dist/browser/extensionEditingBrowserMain.js.map