var t=require("tailwindcss/plugin");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}function e(t,n,e){if(r())return Reflect.construct.apply(null,arguments);var o=[null];o.push.apply(o,n);var u=new(t.bind.apply(t,o));return e&&c(u,e.prototype),u}function r(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(r=function(){return!!t})()}function o(){return o=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},o.apply(this,arguments)}function c(t,n){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},c(t,n)}module.exports=/*#__PURE__*/n(t).default.withOptions(function(t){return void 0===t&&(t={}),function(n){var r,c=n.matchUtilities,u=o({theme:n.theme,config:n.config},null!=(r=t)?r:{});c({js:function(t){var n,r=function(t){return t.replace(/_/g,"\\_").replace(/ /g,"_")};return(n={})["@apply "+r(t.slice(1,-1)).split(/(#{.*?})/g).map(function(t,n){return n%2==1?t.slice(2,-1):t}).map(function(t,n){if(n%2==0)return t;var o,c=Object.keys(u),i=Object.values(u),a=e(Function,c.concat(["return "+(o=t,o.replace(/(?<!\\)_/g," ").replace(/\\_/g,"_")+";")]));return r(""+a.apply(void 0,i))}).join("")]={},n}})}});
//# sourceMappingURL=index.cjs.map
