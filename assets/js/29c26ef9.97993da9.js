"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7150],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6315:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"delete-model",title:"deleteModel*"},s=void 0,d={unversionedId:"api/functions/delete-model",id:"api/functions/delete-model",title:"deleteModel*",description:"deleteModel",source:"@site/../docs/api/functions/deleteModel.md",sourceDirName:"api/functions",slug:"/api/functions/delete-model",permalink:"/typegoose/docs/api/functions/delete-model",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/deleteModel.md",tags:[],version:"current",frontMatter:{id:"delete-model",title:"deleteModel*"},sidebar:"docs",previous:{title:"addModelToTypegoose",permalink:"/typegoose/docs/api/functions/add-model-to-typegoose"},next:{title:"setGlobalOptions",permalink:"/typegoose/docs/api/functions/set-global-options"}},p={},c=[{value:"deleteModel",id:"deletemodel",level:2},{value:"deleteModelWithClass",id:"deletemodelwithclass",level:2}],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"deletemodel"},"deleteModel"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function deleteModel(name: string)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"name")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Key to remove from the Cache")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"deleteModel")," deletes the given Key (",(0,o.kt)("inlineCode",{parentName:"p"},"name"),") from mongoose and the Typegoose Cache, the key is the generated ",(0,o.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/name-generation"},"Model Name"),"."),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"#deletemodelwithclass"},(0,o.kt)("inlineCode",{parentName:"a"},"deleteModelWithClass"))," when wanting to delete by class instead of by key directly."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This function also deletes the Model from Mongoose itself.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Currently this function does not delete any entries that have different name generation applied at insertion time (like having name generation overwritten in ",(0,o.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/get-class-for-document"},(0,o.kt)("inlineCode",{parentName:"a"},"getModelForClass")),")).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class SomeUser {}\n\nconst SomeUserModel = getModelForClass(SomeUser);\ndeleteModel('SomeUser');\n")),(0,o.kt)("h2",{id:"deletemodelwithclass"},"deleteModelWithClass"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function deleteModelWithClass<U extends AnyParamConstructor<any>>(cl: U)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cl")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"U")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Class to remove from the Cache")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"deleteModelWithClass")," tries to find the given Class (",(0,o.kt)("inlineCode",{parentName:"p"},"cl"),") in the cache and calls ",(0,o.kt)("a",{parentName:"p",href:"#deletemodel"},(0,o.kt)("inlineCode",{parentName:"a"},"deleteModel"))," with the key the Class has given."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class SomeUser {}\n\nconst SomeUserModel = getModelForClass(SomeUser);\ndeleteModelWithClass(SomeUser);\n")))}u.isMDXComponent=!0}}]);