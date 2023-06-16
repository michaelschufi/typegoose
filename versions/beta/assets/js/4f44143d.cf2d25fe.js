"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[6],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=o.createContext({}),p=function(e){var t=o.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(r.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,g=m["".concat(r,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(g,s(s({ref:t},d),{},{components:n})):o.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2181:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return r},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],l={id:"model-options",title:"@modelOptions"},r=void 0,p={unversionedId:"api/decorators/model-options",id:"api/decorators/model-options",title:"@modelOptions",description:"Typings:",source:"@site/../docs/api/decorators/modelOptions.md",sourceDirName:"api/decorators",slug:"/api/decorators/model-options",permalink:"/typegoose/versions/beta/docs/api/decorators/model-options",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/beta/docs/../docs/api/decorators/modelOptions.md",tags:[],version:"current",frontMatter:{id:"model-options",title:"@modelOptions"},sidebar:"docs",previous:{title:"@prop",permalink:"/typegoose/versions/beta/docs/api/decorators/prop"},next:{title:"@pre & @post",permalink:"/typegoose/versions/beta/docs/api/decorators/hooks"}},d={},m=[{value:"IModelOptions",id:"imodeloptions",level:2},{value:"schemaOptions",id:"schemaoptions",level:3},{value:"existingConnection",id:"existingconnection",level:3},{value:"existingMongoose",id:"existingmongoose",level:3},{value:"options",id:"options",level:3},{value:"customName",id:"customname",level:4},{value:"automaticName",id:"automaticname",level:4},{value:"allowMixed",id:"allowmixed",level:4},{value:"enableMergePlugins",id:"enablemergeplugins",level:4},{value:"enableMergeHooks",id:"enablemergehooks",level:4},{value:"disableLowerIndexes",id:"disablelowerindexes",level:4},{value:"discriminators",id:"discriminators",level:4},{value:"disableCaching",id:"disablecaching",level:4}],c={toc:m},u="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Typings:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"function modelOptions(options: IModelOptions): ClassDecorator\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options")," ",(0,i.kt)("span",{class:"badge badge--secondary"},"Required")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"#imodeloptions"},(0,i.kt)("inlineCode",{parentName:"a"},"IModelOptions"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The Options to add to the Class")))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@modelOptions")," is used to set options on a Class."),(0,i.kt)("h2",{id:"imodeloptions"},"IModelOptions"),(0,i.kt)("h3",{id:"schemaoptions"},"schemaOptions"),(0,i.kt)("p",null,"Please check the ",(0,i.kt)("a",{parentName:"p",href:"https://mongoosejs.com/docs/guide.html#options"},"Mongoose docs")," for more info about these options."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ schemaOptions: { collection: 'NotSomething' } })\nclass Something {}\n")),(0,i.kt)("h3",{id:"existingconnection"},"existingConnection"),(0,i.kt)("p",null,"An existing Mongoose connection can also be passed down. If given, Typegoose uses this Mongoose instance's ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," methods.  "),(0,i.kt)("h3",{id:"existingmongoose"},"existingMongoose"),(0,i.kt)("p",null,"An existing Mongoose instance can also be passed down. If given, Typegoose uses this Mongoose instance's ",(0,i.kt)("inlineCode",{parentName:"p"},"model")," methods.  "),(0,i.kt)("h3",{id:"options"},"options"),(0,i.kt)("p",null,"Typegoose's custom options"),(0,i.kt)("h4",{id:"customname"},"customName"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"customName")," can be used to set custom model names."),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/guides/advanced/name-generation"},"Typegoose's Name Generation")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ options: { customName: 'Something' } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('Something');\n")),(0,i.kt)("p",null,"You can generate more dynamic names, if ",(0,i.kt)("inlineCode",{parentName:"p"},"customName")," is given a function. The parameter object of the ",(0,i.kt)("inlineCode",{parentName:"p"},"modelOptions")," decorator is injected into the function for possible further use.  "),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({\n  schemaOptions: { collection: 'SomethingDifferent' },\n  options: {\n    automaticName: false,\n    customName: (options) => `${options.schemaOptions?.collection}_someSuffix`\n  }\n})\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('SomethingDifferent_someSuffix');\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If a function is used, ",(0,i.kt)("inlineCode",{parentName:"p"},"automaticName")," will be ignored. Also, if the function doesn't return a string, an error will be thrown.")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"customName")," is used with ",(0,i.kt)("inlineCode",{parentName:"p"},"automaticName"),", it will be a suffix of the class name."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({ options: { customName: 'Something', automaticName: true } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel_Something');\n")),(0,i.kt)("h4",{id:"automaticname"},"automaticName"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"automaticName")," can be used to automatically generate custom model names based on ",(0,i.kt)("inlineCode",{parentName:"p"},"{ schemaOptions: { collection } }")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"{ options: { customName } }"),(0,i.kt)("br",{parentName:"p"}),"\n","-> ",(0,i.kt)("inlineCode",{parentName:"p"},"customName")," will be prioritized over ",(0,i.kt)("inlineCode",{parentName:"p"},"collection"),(0,i.kt)("br",{parentName:"p"}),"\n","-> if ",(0,i.kt)("inlineCode",{parentName:"p"},"automaticName")," is true, ",(0,i.kt)("inlineCode",{parentName:"p"},"customName")," will be a ",(0,i.kt)("em",{parentName:"p"},"suffix")," of the base class name\n-> if ",(0,i.kt)("inlineCode",{parentName:"p"},"automaticName")," is false, it will behave as if unset"),(0,i.kt)("p",null,"See also ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/guides/advanced/name-generation"},"Typegoose's Name Generation")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// yes this is the same example as the one above\n@modelOptions({ options: { customName: 'Something', automaticName: true } })\nclass MultiModel {}\n\nconst model = getModelForClass(MultiModel);\nexpect(model.modelName).to.be.equal('MultiModel_Something');\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'On request, this was made "opt-in" instead of "opt-out".')),(0,i.kt)("h4",{id:"allowmixed"},"allowMixed"),(0,i.kt)("p",null,"Set this to a Severity you want."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ALLOW"),": allow the use and execution of ",(0,i.kt)("inlineCode",{parentName:"li"},"mongoose.Schema.Types.Mixed"),", if the inferred type cannot be set otherwise"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WARN"),": ","[default]"," Warn for it in the logger, but still allow the use of it"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ERROR"),": Error out when it comes to it")),(0,i.kt)("h4",{id:"enablemergeplugins"},"enableMergePlugins"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,'Enable Overwriting of the plugins on the "to-be" discriminator schema with the base schema\'s.'),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},'This does not actually "merge plugins", it will overwrite the "to-be" discriminator\'s plugins with the base schema\'s!')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If ",(0,i.kt)("a",{parentName:"p",href:"#enablemergeplugins"},(0,i.kt)("inlineCode",{parentName:"a"},"enableMergePlugins"))," and ",(0,i.kt)("a",{parentName:"p",href:"#enablemergehooks"},(0,i.kt)("inlineCode",{parentName:"a"},"enableMergeHooks"))," are both ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", then the global plugins will be automatically applied by typegoose, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Automattic/mongoose/issues/12696"},"Mongoose Issue #12696"),".")),(0,i.kt)("h4",{id:"enablemergehooks"},"enableMergeHooks"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Enable Merging of Hooks."),(0,i.kt)("p",null,"Example of what can be deduplicated:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// this is a global function and can be de-duplicated, because they are the same reference\nfunction hookTestTimesGlobal() {}\n\nfunction pluginTestTimes(schema) {\n  pluginCount += 1;\n  // the following function cannot be de-duplicated, because they are a new reference each time the plugin gets called\n  schema.pre('save', function hookTestTimesNonGlobal() {});\n  schema.pre('save', hookTestTimesGlobal);\n}\n\n@plugin(pluginTestTimes)\n@modelOptions({\n  options: {\n    enableMergeHooks: true, // needs to be set, because by default typegoose does not need de-duplication\n  },\n})\nclass MergeHooks {\n  @prop()\n  public dummy?: string;\n}\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Only hooks that can be matched against each-other can be de-duplicated.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If ",(0,i.kt)("a",{parentName:"p",href:"#enablemergeplugins"},(0,i.kt)("inlineCode",{parentName:"a"},"enableMergePlugins"))," and ",(0,i.kt)("a",{parentName:"p",href:"#enablemergehooks"},(0,i.kt)("inlineCode",{parentName:"a"},"enableMergeHooks"))," are both ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", then the global plugins will be automatically applied by typegoose, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Automattic/mongoose/issues/12696"},"Mongoose Issue #12696"),".")),(0,i.kt)("h4",{id:"disablelowerindexes"},"disableLowerIndexes"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Disable inheriting lower indexes (still include self), similar to native mongoose ",(0,i.kt)("inlineCode",{parentName:"p"},"schema.clone().clearIndexes()"),"."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'@index({ dummy1: 1 })\nclass IndexInherit5 {\n  @prop()\n  public dummy1?: string;\n}\n\n@index({ dummy2: 1 })\n@modelOptions({ options: { disableLowerIndexes: true } }) // does not inherit index "{ dummy1: 1 }", but will still include "{ dummy2: 1 }"\nclass IndexInherit6 extends IndexInherit5 {\n  @prop()\n  public dummy2?: string;\n}\n\n@index({ dummy3: 1 })\nclass IndexInherit7 extends IndexInherit6 {\n  @prop()\n  public dummy3?: string;\n}\n\nconst sch = buildSchema(IndexInherit7);\n\nconst indexes = sch.indexes();\nassert(indexes.length === 2);\n')),(0,i.kt)("h4",{id:"discriminators"},"discriminators"),(0,i.kt)("p",null,"Accepts Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"() => [DiscriminatorObject | Class]")),(0,i.kt)("p",null,"Define Nested Discriminators on the base Class directly instead of having to re-define the ",(0,i.kt)("inlineCode",{parentName:"p"},"discriminators")," option everywhere it is used."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"A Error is thrown when both this option and the prop-option ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/api/decorators/prop#discriminators"},(0,i.kt)("inlineCode",{parentName:"a"},"discriminators"))," are defined.",(0,i.kt)("br",{parentName:"p"}),"\n","See ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/guides/error-warning-details#duplicate-option-definition-e032"},"Duplicate Option Definition [E032]"),".")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@modelOptions({\n  schemaOptions: {\n    discriminatorKey: 'type'\n  },\n  options: {\n    discriminators: () => [Garage, SummerHouse] // here instead of as a \"prop-option\"\n  }\n})\nclass Building {\n  @prop({ default: 100 })\n  public width: number;\n\n  @prop({ required: true })\n  public type: string;\n}\n\nclass Garage extends Building {\n  @prop({ default: 10 })\n  public slotsForCars: number;\n}\n\nclass SummerHouse extends Building {\n  @prop({ default: 100 })\n  public distanceToLake: number;\n}\n\nclass Area {\n  @prop({ type: Building }) // instead of having to define it here\n  public buildings: Building[];\n}\n\nconst AreaModel = getModelForClass(Area);\n\n// then somewhere in an async function\nconst area = await AreaModel.create({});\narea.buildings.push({ type: getName(SummerHouse), distanceToLake: 100 } as SummerHouse);\narea.buildings.push({ type: getName(Garage), slotsForCars: 20 } as Garage);\nawait area.save();\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/guides/advanced/nested-discriminators"},"Nested Discriminators")," for a guide on how to use nested Discriminators."),(0,i.kt)("h4",{id:"disablecaching"},"disableCaching"),(0,i.kt)("p",null,"Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",null,"Disable Caching for current Class (and all classes extending it) or for just a call (for ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/api/functions/build-schema"},(0,i.kt)("inlineCode",{parentName:"a"},"buildSchema"))," / ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/api/functions/get-model-for-class"},(0,i.kt)("inlineCode",{parentName:"a"},"getModelForClass"))," / ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/api/functions/get-discriminator-model-for-class"},(0,i.kt)("inlineCode",{parentName:"a"},"getDiscriminatorModelForClass")),")."),(0,i.kt)("p",null,"This Option will NOT overwrite the global ",(0,i.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/api/functions/set-global-options#disableglobalcaching"},(0,i.kt)("inlineCode",{parentName:"a"},"disableGlobalCaching"))," if set."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// some values to keep references\nlet KittenModel1: mongoose.Model<any>;\nlet KittenModel2: mongoose.Model<any>;\nlet KittenClass1: AnyParamConstructor<any>;\nlet KittenClass2: AnyParamConstructor<any>;\n{\n  class Kitten {\n    @prop()\n    public name?: string;\n  }\n\n  KittenModel1 = getModelForClass(Kitten, { options: { disableCaching: true } });\n  KittenClass1 = Kitten;\n}\nassert.ok(getModelWithString(getName(KittenClass1)) === undefined); // caching was disabled locally, so it cannot be found - because it was never added\n{\n  class Kitten {\n    @prop()\n    public nameTag?: string;\n  }\n\n  KittenModel2 = getModelForClass(Kitten, {\n    existingConnection: mongoose.createConnection(),\n  });\n  KittenClass2 = Kitten;\n}\nassert.ok(getModelWithString(getName(KittenClass2))); // caching was enabled, so the second can be found\n\n// the following will return the "KittenModel2" instance, because both classes have the same name but only the second one was added to the caching\n// and caching currently works by (typegoose generated) name\nconst KittenModel3 = getModelForClass(KittenClass1);\n// Note that the above *would* work if "disableCaching" would be defined via a "@modelOptions" decorator, because then caching would also have been disabled here\n\nassert.ok(KittenModel1 !== KittenModel2); // check that both original models do not match, because caching was disabled they are different\n\nassert.ok(KittenModel3 === KittenModel2); // check that "KittenModel3" is the same reference as "KittenModel2", because "KittenClass2" was added with caching and has the same name\n')))}g.isMDXComponent=!0}}]);