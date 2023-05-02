"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[913],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=m(n),k=a,s=d["".concat(p,".").concat(k)]||d[k]||g[k]||l;return n?r.createElement(s,o(o({ref:e},u),{},{components:n})):r.createElement(s,o({ref:e},u))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[d]="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3533:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"mongoose-compatibility",title:"Mongoose Compatibility"},p=void 0,m={unversionedId:"guides/mongoose-compatibility",id:"guides/mongoose-compatibility",title:"Mongoose Compatibility",description:"The version values use npm's semver convention.",source:"@site/../docs/guides/mongoose-compatibility.md",sourceDirName:"guides",slug:"/guides/mongoose-compatibility",permalink:"/typegoose/docs/guides/mongoose-compatibility",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/mongoose-compatibility.md",tags:[],version:"current",frontMatter:{id:"mongoose-compatibility",title:"Mongoose Compatibility"},sidebar:"guides",previous:{title:"Known Issues",permalink:"/typegoose/docs/guides/known-issues"},next:{title:"Deprecation Codes",permalink:"/typegoose/docs/guides/deprecation-codes"}},u={},d=[],g={toc:d},k="wrapper";function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)(k,(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The version values use ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/semver"},"npm's semver convention"),"."),(0,l.kt)("p",null,"If no upper mongoose version is defined and a newer typegoose version exists within the range of the lower typegoose version, take the next typegoose versions start point as the upper range (exclusive) for the lower typegoose version, this is because mongoose may break something (like types) even in patch versions."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Typegoose Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Mongoose Version"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~7.1.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"11.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~7.0.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.11.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.10.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.10.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.9.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"10.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.8.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.13.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.7.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.12.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.6.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.11.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.5.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.10.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.4.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.9.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.3.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.8.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.3.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.7.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.2.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.5.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.1.6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.1.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.0.14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.0.11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"6.0.9 - 6.0.10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~6.0.7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.13.8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.13.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.13.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.6.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.10.0 - 5.10.18")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.5.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.10.0 - 5.10.18")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"5.10.0 - 5.10.18")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.9.22")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.9.17")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.9.14")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.9.9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.4.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.9.2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.3.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.8.11")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.2.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.8.3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.1.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.7.7")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6.0.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.7.1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5.9.x"),(0,l.kt)("td",{parentName:"tr",align:null},"~5.6.7")))))}s.isMDXComponent=!0}}]);