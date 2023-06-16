"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[7785],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=d(n),m=o,h=l["".concat(p,".").concat(m)]||l[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"change-id-type",title:"Change _id Type"},p=void 0,d={unversionedId:"guides/advanced/change-id-type",id:"guides/advanced/change-id-type",title:"Change _id Type",description:"You can easily change the type of the _id field by doing:",source:"@site/../docs/guides/advanced/changeIDType.md",sourceDirName:"guides/advanced",slug:"/guides/advanced/change-id-type",permalink:"/typegoose/versions/beta/docs/guides/advanced/change-id-type",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/beta/docs/../docs/guides/advanced/changeIDType.md",tags:[],version:"current",frontMatter:{id:"change-id-type",title:"Change _id Type"},sidebar:"guides",previous:{title:"Reference other Classes",permalink:"/typegoose/versions/beta/docs/guides/advanced/reference-other-classes"},next:{title:"Using ObjectId Type",permalink:"/typegoose/versions/beta/docs/guides/advanced/using-objectid-type"}},c={},l=[{value:"With the Base Class",id:"with-the-base-class",level:2}],u={toc:l},m="wrapper";function h(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can easily change the type of the ",(0,i.kt)("inlineCode",{parentName:"p"},"_id")," field by doing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class SomeChangedID {\n  @prop()\n  public _id!: string; // change the type of _id to string\n}\n")),(0,i.kt)("p",null,"The example above sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"_id")," type to be a string, but does not provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," function, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"_id")," property needs to be always set manually before saving / inserting a document, use the ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/api/decorators/prop#default"},(0,i.kt)("inlineCode",{parentName:"a"},"default"))," option to set a function to generate a new id everytime, be careful to not forget that using ",(0,i.kt)("inlineCode",{parentName:"p"},"default: fn()")," will only call the function ",(0,i.kt)("em",{parentName:"p"},"once at scope time")," instead of ",(0,i.kt)("em",{parentName:"p"},"everytime a new document is created"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class SomeUUIDv4 {\n  @prop({ required: true, default: () => uuidv4() })\n  public _id!: string;\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"_id")," property can also be disabled for subdocuments, with the ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/api/decorators/prop#_id"},"prop option ",(0,i.kt)("inlineCode",{parentName:"a"},"_id: false"))," for the field in the class that uses the subdocument, or the ",(0,i.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/guide.html#_id"},"schema option ",(0,i.kt)("inlineCode",{parentName:"a"},"_id")),", but note that the schema-option does not disable ",(0,i.kt)("inlineCode",{parentName:"p"},"_id")," if it is not a sub-document."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ schemaOptions: { _id: false } }) // with the schema option\nclass WithNoId {\n  @prop()\n  public someValue: string;\n}\n\nclass SomeChangedID {\n  @prop({ type: WithNoId, _id: false }) // or with the prop-option\n  public someField: WithNoId[];\n}\n")),(0,i.kt)("h2",{id:"with-the-base-class"},"With the Base Class"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"It is recommended to use the manual approach over using ",(0,i.kt)("inlineCode",{parentName:"p"},"Base"),", because default classes may be removed in the future and dont greatly support extending from each other.")),(0,i.kt)("p",null,"There is also a ",(0,i.kt)("inlineCode",{parentName:"p"},"Base")," interface typegoose provides, which includes ",(0,i.kt)("inlineCode",{parentName:"p"},"_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", which can be used as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'interface Something extends Base<string> {} // have the interface to add the types of "Base" to the class\nclass Something { // have your class, OR\n  @prop()\n  public _id: string;\n}\nclass Something extends TimeStamps { // have your class extend some other class\n  @prop()\n  public _id: string;\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"_id")," property needs to also be included in the actual class, because the default interface ",(0,i.kt)("inlineCode",{parentName:"p"},"Base")," doesn't change anything at runtime (",(0,i.kt)("inlineCode",{parentName:"p"},"Base")," does not use ",(0,i.kt)("inlineCode",{parentName:"p"},"@prop"),").")),(0,i.kt)("admonition",{title:"Restriction",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This method (extending ",(0,i.kt)("inlineCode",{parentName:"p"},"Base"),") can only be used with types that are in ",(0,i.kt)("inlineCode",{parentName:"p"},"RefType")," (all of ",(0,i.kt)("inlineCode",{parentName:"p"},"mongoose.Schema.Types")," should work except ",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Mixed"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Boolean"),").")))}h.isMDXComponent=!0}}]);