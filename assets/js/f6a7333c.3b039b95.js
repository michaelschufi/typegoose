"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[1294],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6587:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"reference-other-classes",title:"Reference other Classes"},p=void 0,l={unversionedId:"guides/advanced/reference-other-classes",id:"guides/advanced/reference-other-classes",title:"Reference other Classes",description:"Look here for the Ref type documentation",source:"@site/../docs/guides/advanced/reference-other-classes.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/reference-other-classes",permalink:"/typegoose/docs/guides/advanced/reference-other-classes",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/master/docs/../docs/guides/advanced/reference-other-classes.md",tags:[],version:"current",frontMatter:{id:"reference-other-classes",title:"Reference other Classes"},sidebar:"guides",previous:{title:"Models with same name",permalink:"/typegoose/docs/guides/advanced/models-with-same-name"},next:{title:"Change _id Type",permalink:"/typegoose/docs/guides/advanced/change-id-type"}},c={},d=[{value:"Referencing other Classes",id:"referencing-other-classes",level:2},{value:"Reference other classes with different _id type",id:"reference-other-classes-with-different-_id-type",level:3},{value:"Population",id:"population",level:2},{value:"Common Problems",id:"common-problems",level:2},{value:"Circular Dependencies",id:"circular-dependencies",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/typegoose/docs/api/types/ref-type"},"Look here for the ",(0,a.kt)("inlineCode",{parentName:"a"},"Ref")," type documentation")),(0,a.kt)("h2",{id:"referencing-other-classes"},"Referencing other Classes"),(0,a.kt)("p",null,"Referencing other classes may be needed to create relationships, this can be done with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Nested {\n  @prop()\n  public someNestedProperty: string;\n}\n\nclass Main {\n  @prop({ ref: () => Nested }) // for one\n  public nested: Ref<Nested>;\n\n  @prop({ ref: () => Nested }) // for an array of references\n  public nestedArray: Ref<Nested>[];\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Options ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," can both also be defined without ",(0,a.kt)("inlineCode",{parentName:"p"},"() =>"),", but is generally recommended to be used with.",(0,a.kt)("br",{parentName:"p"}),"\n","If ",(0,a.kt)("inlineCode",{parentName:"p"},"() =>")," is not used, there can be problems when the class (/ variable) is defined ",(0,a.kt)("em",{parentName:"p"},"after")," the decorator that requires it.")),(0,a.kt)("h3",{id:"reference-other-classes-with-different-_id-type"},"Reference other classes with different _id type"),(0,a.kt)("p",null,"Sometimes the ",(0,a.kt)("inlineCode",{parentName:"p"},"_id")," type needs to be changed (to something like ",(0,a.kt)("inlineCode",{parentName:"p"},"String")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"Number"),") and needs to be manually defined in the reference:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Cat {\n  @prop()\n  public _id: string;\n\n  @prop()\n  public year: number;\n}\n\nclass Person {\n  @prop()\n  public name: string;\n\n  @prop({ ref: () => Cat, type: () => String })\n  public pet?: Ref<Cat, string>;\n}\n")),(0,a.kt)("p",null,"Also see ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/docs/guides/advanced/change-id-type"},"Change _id Type"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By default typegoose sets the default for the option ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," (if not defined) to ",(0,a.kt)("inlineCode",{parentName:"p"},"mongoose.Schema.Types.ObjectId"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The generic-parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"IDType")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref")," is not automatically inferred from the generic-parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"Class")," yet (may be in the future)",(0,a.kt)("br",{parentName:"p"}),"\n","The option ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),' is not automatically inferred at runtime, because this could cause more "Circular Dependency" issues.',(0,a.kt)("br",{parentName:"p"}),"\n","See ",(0,a.kt)("a",{parentName:"p",href:"#common-problems"},"Common Problems")," for more.")),(0,a.kt)("h2",{id:"population"},"Population"),(0,a.kt)("p",null,"One of the main reasons why references may want to be used over plain types, is population, which can be done with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// this example continues to use the classes defined previously\n\nconst cat = await CatModel.create({ year: 2015 });\n\nawait PersonModel.create({ name: "Jonny", pet: cat });\n\nconst person1 = await PersonModel.findOne({ name: "Jonny" });\n// with this path "pet" is still unpopulated\nawait person1.populate("pet"); // will try to populate path "pet"\n\nconsole.log(person1.pet); // will list the populated data\n// but for actual use in the code it will need to be checked that it is actually populated, because ".populate" may also fail\nperson1.pet.year; // Type Error: "pet" may not have property "year"\n// for this the typeguard "isDocument" is used that typegoose provides\nif (isDocument(person1.pet)) {\n  person1.pet.year; // Works without typescript complaining\n} else {\n  // in this case the path is definitely NOT a document\n}\n')),(0,a.kt)("p",null,"Function ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/typeguards/is-document#isdocument"},(0,a.kt)("inlineCode",{parentName:"a"},"isDocument"))," (or for arrays ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/docs/api/functions/typeguards/is-document#isdocumentarray"},(0,a.kt)("inlineCode",{parentName:"a"},"isDocumentArray")),") will need to be used to narrow the type after population, because ",(0,a.kt)("inlineCode",{parentName:"p"},".populate")," may fail."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Populated paths are ",(0,a.kt)("strong",{parentName:"p"},"not")," subdocuments, they are their own top-level documents and modifications to them need to be saved separately.",(0,a.kt)("br",{parentName:"p"}),"\n","See ",(0,a.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/subdocs.html"},"Subdocuments")," in mongoose's documentation.")),(0,a.kt)("h2",{id:"common-problems"},"Common Problems"),(0,a.kt)("p",null,"Because of the order classes are loaded and reordered at runtime, this might result in some references being null / undefined / not existing. This is why Typegoose provides the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"class Nested {\n  @prop()\n  public someNestedProperty: string;\n}\n\n// Recommended first fix:\nclass Main {\n  @prop({ ref: () => Nested }) // since 7.1 arrow functions can be used to defer getting the type\n  public nested: Ref<Nested>;\n}\n\n// Not recommended workaround (hardcoding model name):\nclass Main {\n  @prop({ ref: 'Nested' }) // since 7.0 it is recommended to use \"console.log(getName(Class))\" to get the generated name once and hardcode it like shown here\n  public nested: Ref<Nested>;\n}\n")),(0,a.kt)("p",null,"When you get errors about references, try making the name of the referenced class a string."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The new ",(0,a.kt)("inlineCode",{parentName:"p"},"() => Class")," is meant to help with Circular Dependencies, but cannot remove the problems in all cases, see ",(0,a.kt)("a",{parentName:"p",href:"#circular-dependencies"},"Circular Dependencies")," for more.")),(0,a.kt)("h3",{id:"circular-dependencies"},"Circular Dependencies"),(0,a.kt)("p",null,"As an warning in ",(0,a.kt)("a",{parentName:"p",href:"#common-problems"},"Common Problems")," already said, the ",(0,a.kt)("inlineCode",{parentName:"p"},"() => Class")," way can help with circular dependencies, but not remove them, this is due to how javascript works."),(0,a.kt)("p",null,"The only known way to resolve the remaining problems, are to do something like to following to all class and model files:"),(0,a.kt)("p",null,"Remove the following from File ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'import { B } from "./B";\n\nexport class A {\n  @prop()\n  public name: string;\n\n  @prop({ ref: () => B })\n  public b: Ref<B>;\n}\n\n- export const AModel = getModelForClass(A);\n')),(0,a.kt)("p",null,"Remove the following from File ",(0,a.kt)("inlineCode",{parentName:"p"},"B"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'import { A } from "./A";\n\nexport class B {\n  @prop()\n  public name: string;\n\n  @prop({ ref: () => A })\n  public a: Ref<A>;\n}\n\n- export const BModel = getModelForClass(B);\n')),(0,a.kt)("p",null,"And Add a central processing file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { A } from "./A";\n+ import { B } from "./B";\n+ \n+ export const AModel = getModelForClass(A);\n+ export const BModel = getModelForClass(B);\n')),(0,a.kt)("p",null,"This may seem like it is not changing much, but actually nodejs will resolve & load all required imports fully before trying to use any of them.",(0,a.kt)("br",{parentName:"p"}),"\n","And because the ",(0,a.kt)("inlineCode",{parentName:"p"},"() => Class")," way is used, the reference to ",(0,a.kt)("inlineCode",{parentName:"p"},"Class")," will only be resolved once the function is actually called, that is why it works, but just ",(0,a.kt)("inlineCode",{parentName:"p"},"Class")," doesn't."))}m.isMDXComponent=!0}}]);