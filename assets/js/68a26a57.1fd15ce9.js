"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7022],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7337:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],p={id:"indexes",title:"@index"},s=void 0,l={unversionedId:"api/decorators/indexes",id:"api/decorators/indexes",title:"@index",description:"Typings:",source:"@site/../docs/api/decorators/indexes.md",sourceDirName:"api/decorators",slug:"/api/decorators/indexes",permalink:"/typegoose/docs/api/decorators/indexes",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/decorators/indexes.md",tags:[],version:"current",frontMatter:{id:"indexes",title:"@index"},sidebar:"docs",previous:{title:"@pre & @post",permalink:"/typegoose/docs/api/decorators/hooks"},next:{title:"@plugin",permalink:"/typegoose/docs/api/decorators/plugin"}},d={},c=[{value:"Example",id:"example",level:2},{value:"Extra",id:"extra",level:2}],u={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Typings:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function index<T extends BeAnObject = BeAnObject>(fields: mongoose.IndexDefinition, options?: IndexOptions<T>): ClassDecorator\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"fields")," ",(0,a.kt)("span",{class:"badge badge--secondary"},"Required")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"mongoose.IndexDefinition")),(0,a.kt)("td",{parentName:"tr",align:"left"},"All Fields for this single index")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"options")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://mongodb.github.io/node-mongodb-native/4.11/interfaces/CreateIndexesOptions.html"},(0,a.kt)("inlineCode",{parentName:"a"},"IndexOptions<T>"))),(0,a.kt)("td",{parentName:"tr",align:"left"},"Overwrite Schema Options, merged with original schema options")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@index")," is used to set indices on the schema, this decorator acts like ",(0,a.kt)("inlineCode",{parentName:"p"},"schema.index()"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/tutorial/control-results-of-text-search/"},"Full-Text Search")," option ",(0,a.kt)("inlineCode",{parentName:"p"},"weights")," all fields (from ",(0,a.kt)("inlineCode",{parentName:"p"},"fields"),") have to also be defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"weights"),".")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"@index({ article: 1, user: 1 }, { unique: true }) // compound index\n@index({ location: '2dsphere' }) // single index with no options\n@index({ article: 1 }, { partialFilterExpression: { stars: { $gte: 4.5 } } }) // single index with options\nclass Location {\n  @prop()\n  public article?: number;\n\n  @prop()\n  public user?: number;\n\n  @prop()\n  public stars?: number;\n\n  @prop({ type: Number, dim: 2 })\n  public location?: number[][];\n}\n")),(0,a.kt)("h2",{id:"extra"},"Extra"),(0,a.kt)("p",null,"Inheriting indexes from lower classes can be disabled with ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/docs/api/decorators/model-options#disablelowerindexes"},"ModelOption ",(0,a.kt)("inlineCode",{parentName:"a"},"disableLowerIndexes")),"."))}f.isMDXComponent=!0}}]);