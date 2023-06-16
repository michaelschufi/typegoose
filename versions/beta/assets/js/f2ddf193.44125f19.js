"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[6720],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1738:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"query-method",title:"@queryMethod"},s=void 0,l={unversionedId:"api/decorators/query-method",id:"api/decorators/query-method",title:"@queryMethod",description:"Typings:",source:"@site/../docs/api/decorators/queryMethod.md",sourceDirName:"api/decorators",slug:"/api/decorators/query-method",permalink:"/typegoose/versions/beta/docs/api/decorators/query-method",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/beta/docs/../docs/api/decorators/queryMethod.md",tags:[],version:"current",frontMatter:{id:"query-method",title:"@queryMethod"},sidebar:"docs",previous:{title:"@plugin",permalink:"/typegoose/versions/beta/docs/api/decorators/plugin"},next:{title:"getModelForClass",permalink:"/typegoose/versions/beta/docs/api/functions/get-model-for-class"}},d={},u=[{value:"Example",id:"example",level:2}],c={toc:u},m="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function queryMethod<QueryHelpers, U extends AnyParamConstructor<any>>(\n  func: (this: QueryHelperThis<U, QueryHelpers>, ...params: any[]) => Query<any, any>\n): ClassDecorator\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"func")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"(this: QueryHelperThis<U, QueryHelpers>, ...params: any[]) => Query<any, any>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Function to add as a Query Method")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@queryMethod")," is used to add ",(0,o.kt)("a",{parentName:"p",href:"https://thecodebarbarian.com/mongoose-custom-query-methods"},"Custom Query Methods"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"func")," Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"this")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"QueryHelperThis<U, QueryHelpers>")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Current Query, with Query Helpers available")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"...params")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"any[]")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Extra Parameters defined by the Query Helper to be added")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"=>")," (Return Type)"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"mongoose.Query")),(0,o.kt)("td",{parentName:"tr",align:"left"},"A Mongoose Query has to be returned from the Query Helper")))),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"A Named function has do be used, it also cannot be a Arrow-Function (",(0,o.kt)("inlineCode",{parentName:"p"},"() => any"),"), because the Query can only be accessed with ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," and a name has to be supplied to be callable later on. (see Example below)")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { types } from "@typegoose/typegoose";\n\n// an interface is needed to add query-function types to the class\ninterface QueryHelpers {\n  // use the actual function types dynamically\n  findByName: types.AsQueryMethod<typeof findByName>;\n  // the same can be done with other functions (not listed in this example)\n  findByLastname: types.AsQueryMethod<typeof findByLastname>;\n}\n\nfunction findByName(this: types.QueryHelperThis<typeof Person, QueryHelpers>, name: string) {\n  return this.find({ name }); // it is important to not do a "await" and ".exec"\n}\n@queryMethod(findByName)\nclass Person {\n  @prop({ required: true })\n  public name: string;\n}\nconst PersonModel = getModelForClass<typeof Person, QueryHelpers>(Person);\n\n// thanks to "QueryHelpers" the function "findByName" should exist here and return the correct type\nconst docs: types.DocumentType<Person>[] = await PersonModel.find()\n  .findByName(\'hello\')\n  .orFail()\n  .exec();\n')))}y.isMDXComponent=!0}}]);