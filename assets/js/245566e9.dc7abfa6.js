"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7793],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6789:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"build-schema",title:"buildSchema"},p=void 0,c={unversionedId:"api/functions/build-schema",id:"api/functions/build-schema",title:"buildSchema",description:"Typings:",source:"@site/../docs/api/functions/buildSchema.md",sourceDirName:"api/functions",slug:"/api/functions/build-schema",permalink:"/typegoose/docs/api/functions/build-schema",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/buildSchema.md",tags:[],version:"current",frontMatter:{id:"build-schema",title:"buildSchema"},sidebar:"docs",previous:{title:"getClass",permalink:"/typegoose/docs/api/functions/get-class"},next:{title:"getDiscriminatorModelForClass",permalink:"/typegoose/docs/api/functions/get-discriminator-model-for-class"}},s={},m=[{value:"Example",id:"example",level:2}],d={toc:m},u="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typings:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"function buildSchema<U extends AnyParamConstructor<any>>(cl: U, options?: mongoose.SchemaOptions, overwriteOptions?: IModelOptions): mongoose.Schema<DocumentType<InstanceType<U>>>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"cl")," ",(0,o.kt)("span",{class:"badge badge--secondary"},"Required")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"U")),(0,o.kt)("td",{parentName:"tr",align:"left"},"The Class to build a Schema from")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"options")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"IModelOptions")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Overwrite Options, like for naming or general SchemaOptions the class gets compiled with")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"buildSchema")," compiles the input class ",(0,o.kt)("inlineCode",{parentName:"p"},"cl")," to a mongoose schema with all options applied."),(0,o.kt)("p",null,"A compiled model can be re-added with ",(0,o.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/add-model-to-typegoose"},(0,o.kt)("inlineCode",{parentName:"a"},"addModelToTypegoose")),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For a full example with ",(0,o.kt)("inlineCode",{parentName:"p"},"buildSchema")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"addModelToTypegoose")," see ",(0,o.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/manual-schema-modification"},"Manual Schema Modification"),".")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class Kitten {\n  @prop()\n  public name?: string;\n}\n\nconst kittenSchema = buildSchema(Kitten);\n")))}f.isMDXComponent=!0}}]);