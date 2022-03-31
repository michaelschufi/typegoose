"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[8313],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8469:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],l={id:"add-model-to-typegoose",title:"addModelToTypegoose"},s=void 0,c={unversionedId:"api/functions/add-model-to-typegoose",id:"api/functions/add-model-to-typegoose",title:"addModelToTypegoose",description:"addModelToTypegoose(model: mongoose.model, class) is used to get a model with TypeScript type information and to allow getClassForDocument to work.",source:"@site/../docs/api/functions/addModelToTypegoose.md",sourceDirName:"api/functions",slug:"/api/functions/add-model-to-typegoose",permalink:"/typegoose/docs/api/functions/add-model-to-typegoose",editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/functions/addModelToTypegoose.md",tags:[],version:"current",frontMatter:{id:"add-model-to-typegoose",title:"addModelToTypegoose"},sidebar:"docs",previous:{title:"getDiscriminatorModelForClass",permalink:"/typegoose/docs/api/functions/get-discriminator-model-for-class"},next:{title:"buildSchema",permalink:"/typegoose/docs/api/functions/delete-model"}},p={},d=[{value:"Example",id:"example",level:2}],u={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"addModelToTypegoose(model: mongoose.model<any>, class)")," is used to get a model with TypeScript type information and to allow ",(0,i.kt)("inlineCode",{parentName:"p"},"getClassForDocument")," to work.\nThis function is mainly used after ",(0,i.kt)("inlineCode",{parentName:"p"},"buildSchema")," to add a modified model to Typegoose and still be able to get type information from the Typegoose class."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class Kitten {\n  @prop()\n  public name?: string;\n}\n\nconst kittenSchema = buildSchema(Kitten);\nconst KittenModel = addModelToTypegoose(mongoose.model('Kitten', kittenSchema), Kitten);\n// \"KittenModel\" is now a valid Typegoose model\n")))}m.isMDXComponent=!0}}]);