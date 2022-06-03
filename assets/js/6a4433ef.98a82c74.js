"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[1622],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||p;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8662:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),i=["components"],o={id:"ref-type",title:"Ref<PopulatedType, RawId>"},s=void 0,l={unversionedId:"api/types/ref-type",id:"api/types/ref-type",title:"Ref<PopulatedType, RawId>",description:"The Type Ref is the type used for References.",source:"@site/../docs/api/types/ref-type.md",sourceDirName:"api/types",slug:"/api/types/ref-type",permalink:"/typegoose/docs/api/types/ref-type",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/api/types/ref-type.md",tags:[],version:"current",frontMatter:{id:"ref-type",title:"Ref<PopulatedType, RawId>"},sidebar:"docs",previous:{title:"ReturnModelType<T, QueryHelpers>",permalink:"/typegoose/docs/api/types/return-model-type"},next:{title:"Additional Types",permalink:"/typegoose/docs/api/types/additional-types"}},c={},u=[{value:"Example",id:"example",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The Type ",(0,p.kt)("inlineCode",{parentName:"p"},"Ref<PopulatedType, RawId>")," is the type used for ",(0,p.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/populate.html"},"References"),"."),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"PopulatedType"),": This is the Class being referenced."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"RawId"),": This should be the ",(0,p.kt)("inlineCode",{parentName:"li"},"_id")," Type of the referenced Class, by default its ",(0,p.kt)("inlineCode",{parentName:"li"},"mongoose.Types.ObjectId"))),(0,p.kt)("p",null,"There are typeguards to check if a reference if populated or an reference type:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/typegoose/docs/api/functions/typeguards/is-document"},(0,p.kt)("inlineCode",{parentName:"a"},"isDocument"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/typegoose/docs/api/functions/typeguards/is-ref-type"},(0,p.kt)("inlineCode",{parentName:"a"},"isRefType")))),(0,p.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"For more and better explained examples, look at the ",(0,p.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/reference-other-classes"},"Reference Other Classes")," Guide."))),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("p",null,"Referenced Class in the examples:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"class Kitten {\n  @prop()\n  public name?: string;\n}\n")),(0,p.kt)("p",null,"Single Reference:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"class Person {\n  @prop({ ref: () => Kitten })\n  public pet?: Ref<Kitten>;\n}\n")),(0,p.kt)("p",null,"Reference Array:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"class Cat {\n  @prop({ ref: () => Kitten })\n  public babies?: Ref<Kitten>[];\n}\n")),(0,p.kt)("p",null,"Reference with different ",(0,p.kt)("inlineCode",{parentName:"p"},"_id")," type:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'class Kitten {\n  @prop()\n  public _id?: string;\n\n  @prop()\n  public name?: string;\n}\n\n// For Single References\nclass Person {\n  // The "type" options in this case refers to the "_id" type of the referenced class, by default it will be "ObjectId"\n  @prop({ ref: () => Kitten, type: () => String })\n  public pet?: Ref<Kitten, string>;\n}\n\n// For a Array of References\nclass Person {\n  // The "type" options in this case refers to the "_id" type of the referenced class, by default it will be "ObjectId"\n  @prop({ ref: () => Kitten, type: () => String })\n  public pet?: Ref<Kitten, string>[];\n}\n')))}f.isMDXComponent=!0}}]);