"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2669:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"get-name",title:"getName"},l=void 0,s={unversionedId:"api/functions/get-name",id:"api/functions/get-name",title:"getName",description:"Typings:",source:"@site/../docs/api/functions/getName.md",sourceDirName:"api/functions",slug:"/api/functions/get-name",permalink:"/typegoose/docs/api/functions/get-name",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/getName.md",tags:[],version:"current",frontMatter:{id:"get-name",title:"getName"},sidebar:"docs",previous:{title:"getModelWithString",permalink:"/typegoose/docs/api/functions/get-model-with-string"},next:{title:"isDocument & isDocumentArray",permalink:"/typegoose/docs/api/functions/typeguards/is-document"}},c={},m=[{value:"Example",id:"example",level:2}],u={toc:m},d="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function getName<U extends AnyParamConstructor<any>>(cl: U, overwriteOptions?: IModelOptions)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cl")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"U")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Class to get a name from / for")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"overwriteOptions")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"IModelOptions")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Overwrite select ",(0,o.kt)("inlineCode",{parentName:"td"},"IModelOptions")," for name generation")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getName")," generates the name of the given Class (",(0,o.kt)("inlineCode",{parentName:"p"},"cl"),") with the given OverwriteOptions (",(0,o.kt)("inlineCode",{parentName:"p"},"overwriteOptions"),")."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/name-generation"},"Name Generation in typegoose.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'class Kitten {}\ngetName(Kitten); // "Kitten"\n\n@modelOptions({ options: { customName: \'SomeRandomKitten\' } })\nclass Kitten2 {}\ngetName(Kitten); // "SomeRandomKitten"\n\n@modelOptions({ schemaOptions: { collection: \'RandomKittens\' }, options: { automaticName: true } })\nclass Kitten3 {}\ngetName(Kitten); // "Kitten3_RandomKittens"\n')))}f.isMDXComponent=!0}}]);