"use strict";(self.webpackChunktypegoose_website=self.webpackChunktypegoose_website||[]).push([[8661],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),p=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(d,".").concat(u)]||c[u]||m[u]||a;return n?o.createElement(h,r(r({ref:t},l),{},{components:n})):o.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2586:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],s={id:"migrate-10",title:"Migrate to 10.0.0"},d=void 0,p={unversionedId:"guides/migration/migrate-10",id:"guides/migration/migrate-10",title:"Migrate to 10.0.0",description:"These are the changes made for 10.0.0 that are breaking or just important to know",source:"@site/../docs/guides/migration/migrate-10.md",sourceDirName:"guides/migration",slug:"/guides/migration/migrate-10",permalink:"/typegoose/versions/beta/docs/guides/migration/migrate-10",draft:!1,editUrl:"https://github.com/typegoose/typegoose/edit/beta/docs/../docs/guides/migration/migrate-10.md",tags:[],version:"current",frontMatter:{id:"migrate-10",title:"Migrate to 10.0.0"},sidebar:"guides",previous:{title:"Migrate to 11.0.0",permalink:"/typegoose/versions/beta/docs/guides/migration/migrate-11"},next:{title:"Migrate to 9.0.0",permalink:"/typegoose/versions/beta/docs/guides/migration/migrate-9"}},l={},c=[{value:"Requirements changed",id:"requirements-changed",level:2},{value:"TSConfig Target is now <code>es2020</code>",id:"tsconfig-target-is-now-es2020",level:2},{value:"<code>data@schemas</code> got refactored to be metadata",id:"dataschemas-got-refactored-to-be-metadata",level:2},{value:"Hooks got refactored",id:"hooks-got-refactored",level:2},{value:"<code>Ref</code> now transparently uses <code>DocumentType</code>",id:"ref-now-transparently-uses-documenttype",level:2},{value:"<code>isDocument</code> now has types working with typescript 4.9",id:"isdocument-now-has-types-working-with-typescript-49",level:2},{value:"Indexes can now be set to not be inherited",id:"indexes-can-now-be-set-to-not-be-inherited",level:2},{value:"Nested discriminators can now be defined on the Base Class",id:"nested-discriminators-can-now-be-defined-on-the-base-class",level:2},{value:"<code>buildSchema</code> now only accepts 2 arguments instead of 3",id:"buildschema-now-only-accepts-2-arguments-instead-of-3",level:2},{value:"Option <code>runSyncIndexes</code> has been removed",id:"option-runsyncindexes-has-been-removed",level:2},{value:"Function <code>getClassForDocument</code> has been removed",id:"function-getclassfordocument-has-been-removed",level:2},{value:"Deprecated options got removed",id:"deprecated-options-got-removed",level:2},{value:"<code>disablePluginsOnDiscriminator</code> and <code>$isDiscriminator</code>",id:"disablepluginsondiscriminator-and-isdiscriminator",level:3},{value:"<code>IndexOptions</code> and <code>@index</code> now dont have a generic anymore",id:"indexoptions-and-index-now-dont-have-a-generic-anymore",level:3},{value:"Alias for <code>WhatIsIt</code> to <code>PropType</code> have been removed",id:"alias-for-whatisit-to-proptype-have-been-removed",level:2},{value:"Some Unused types have been removed",id:"some-unused-types-have-been-removed",level:2}],m={toc:c},u="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"These are the changes made for 10.0.0 that are breaking or just important to know"),(0,a.kt)("admonition",{title:"Important, Read this first",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This Guide is written for migration from version ",(0,a.kt)("inlineCode",{parentName:"p"},"9.13.2")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"10.0.0"),", for versions ",(0,a.kt)("inlineCode",{parentName:"p"},">10.0.0 <11.0.0"),", please consult the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/blob/master/CHANGELOG.md"},"CHANGELOG"))),(0,a.kt)("h2",{id:"requirements-changed"},"Requirements changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mongoose ",(0,a.kt)("inlineCode",{parentName:"li"},"6.8.0")," or higher is now required"),(0,a.kt)("li",{parentName:"ul"},"Typescript ",(0,a.kt)("inlineCode",{parentName:"li"},"4.9")," or higher is now required to be used"),(0,a.kt)("li",{parentName:"ul"},"NodeJS 14 is now the lowest supported nodejs version")),(0,a.kt)("h2",{id:"tsconfig-target-is-now-es2020"},"TSConfig Target is now ",(0,a.kt)("inlineCode",{parentName:"h2"},"es2020")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig")," target has been changed to ",(0,a.kt)("inlineCode",{parentName:"p"},"es2020"),", which also makes the ouput incompatible with anything before NodeJS 14.",(0,a.kt)("br",{parentName:"p"}),"\n","This was changed because it outputs less polyfills and makes debugging easier (also bundle size is ",(0,a.kt)("em",{parentName:"p"},"slightly")," lower)"),(0,a.kt)("h2",{id:"dataschemas-got-refactored-to-be-metadata"},(0,a.kt)("inlineCode",{parentName:"h2"},"data@schemas")," got refactored to be metadata"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"schemas")," map from ",(0,a.kt)("inlineCode",{parentName:"p"},"src/internal/data")," got refactored to be a map on the classes themself, called ",(0,a.kt)("inlineCode",{parentName:"p"},"SchemaCache"),", see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typegoose/typegoose/blob/74bfa7f357f135987389b33b2678f89117b80e9a/src/internal/constants.ts#L56"},(0,a.kt)("inlineCode",{parentName:"a"},"src/internal/constants.ts@DecoratorKeys::CachedSchema")),"."),(0,a.kt)("p",null,"This means there is now 1 less interference with classes of the same name, currently there still exists:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data@models"),": Stores the model with the key being the model name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"data@constructors"),": Stored the classes with the key being the model name")),(0,a.kt)("h2",{id:"hooks-got-refactored"},"Hooks got refactored"),(0,a.kt)("p",null,"Hook types got refactored to be more closely matching mongoose's definition, with slight QOL updates.",(0,a.kt)("br",{parentName:"p"}),"\n","Hook internals also got refactored to use less code from what mongoose already supports."),(0,a.kt)("h2",{id:"ref-now-transparently-uses-documenttype"},(0,a.kt)("inlineCode",{parentName:"h2"},"Ref")," now transparently uses ",(0,a.kt)("inlineCode",{parentName:"h2"},"DocumentType")),(0,a.kt)("p",null,"Type ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref")," got updated to transparently use ",(0,a.kt)("inlineCode",{parentName:"p"},"DocumentType"),", which made the type checks for ",(0,a.kt)("inlineCode",{parentName:"p"},"isDocument")," easier, which made it possible to changed the types for ",(0,a.kt)("a",{parentName:"p",href:"#isdocument-now-has-types-working-with-typescript-49"},(0,a.kt)("inlineCode",{parentName:"a"},"isDocument")," now has types working with typescript 4.9"),"."),(0,a.kt)("h2",{id:"isdocument-now-has-types-working-with-typescript-49"},(0,a.kt)("inlineCode",{parentName:"h2"},"isDocument")," now has types working with typescript 4.9"),(0,a.kt)("p",null,"When typescript 4.9 first released, it didnt work with typegoose and version 9.x still does not work with typescript 4.9, but 10.0 now works with typescript 4.9"),(0,a.kt)("p",null,"As a side-effect, the type-narrowing also works with the ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," case and excludes the ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," case."),(0,a.kt)("h2",{id:"indexes-can-now-be-set-to-not-be-inherited"},"Indexes can now be set to not be inherited"),(0,a.kt)("p",null,"In Typegoose 10.0 a new ModelOption has been introduced named ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/api/decorators/model-options#disablelowerindexes"},(0,a.kt)("inlineCode",{parentName:"a"},"disableLowerIndexes"))," to choose to not inherit any of the lower indexes."),(0,a.kt)("h2",{id:"nested-discriminators-can-now-be-defined-on-the-base-class"},"Nested discriminators can now be defined on the Base Class"),(0,a.kt)("p",null,"With Typegoose 10.0 nested discriminators can now be set via the model-option ",(0,a.kt)("inlineCode",{parentName:"p"},"options.discriminators")," instead of just via the prop-option ",(0,a.kt)("inlineCode",{parentName:"p"},"discriminators"),".",(0,a.kt)("br",{parentName:"p"}),"\n","This will be useful when the base class (and the discriminators) are used multiple times with the same definition."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"A Error is thrown when both this option and the prop-option ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/api/decorators/prop#discriminators"},(0,a.kt)("inlineCode",{parentName:"a"},"discriminators"))," are defined.",(0,a.kt)("br",{parentName:"p"}),"\n","See ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/guides/error-warning-details#duplicate-option-definition-e032"},"Duplicate Option Definition [E032]"),".")),(0,a.kt)("h2",{id:"buildschema-now-only-accepts-2-arguments-instead-of-3"},(0,a.kt)("inlineCode",{parentName:"h2"},"buildSchema")," now only accepts 2 arguments instead of 3"),(0,a.kt)("p",null,"With Typegoose 10.0 ",(0,a.kt)("inlineCode",{parentName:"p"},"buildSchema")," now only accepts 2 arguments instead of 3, where the last 2 (previously named ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"overwriteOptions"),") have been merged into just ",(0,a.kt)("inlineCode",{parentName:"p"},"options"),"."),(0,a.kt)("h2",{id:"option-runsyncindexes-has-been-removed"},"Option ",(0,a.kt)("inlineCode",{parentName:"h2"},"runSyncIndexes")," has been removed"),(0,a.kt)("p",null,"The Model Option ",(0,a.kt)("inlineCode",{parentName:"p"},"runSyncIndexes")," has been removed. If wanting to continue to use it, manually call ",(0,a.kt)("inlineCode",{parentName:"p"},"model.syncIndexes()"),"."),(0,a.kt)("h2",{id:"function-getclassfordocument-has-been-removed"},"Function ",(0,a.kt)("inlineCode",{parentName:"h2"},"getClassForDocument")," has been removed"),(0,a.kt)("p",null,"Function ",(0,a.kt)("inlineCode",{parentName:"p"},"getClassForDocument")," has been removed and merged into ",(0,a.kt)("a",{parentName:"p",href:"/typegoose/versions/beta/docs/api/functions/get-class"},(0,a.kt)("inlineCode",{parentName:"a"},"getClass"))," directly."),(0,a.kt)("h2",{id:"deprecated-options-got-removed"},"Deprecated options got removed"),(0,a.kt)("h3",{id:"disablepluginsondiscriminator-and-isdiscriminator"},(0,a.kt)("inlineCode",{parentName:"h3"},"disablePluginsOnDiscriminator")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"$isDiscriminator")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"disablePluginsOnDiscriminator")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$isDiscriminator")," were temporary options to work-around some discriminator problems, and got deprecated in typegoose ",(0,a.kt)("inlineCode",{parentName:"p"},"9.13.0")," and now they are removed again in ",(0,a.kt)("inlineCode",{parentName:"p"},"10.0"),"."),(0,a.kt)("h3",{id:"indexoptions-and-index-now-dont-have-a-generic-anymore"},(0,a.kt)("inlineCode",{parentName:"h3"},"IndexOptions")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"@index")," now dont have a generic anymore"),(0,a.kt)("p",null,"Type ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexOptions")," and decorator ",(0,a.kt)("inlineCode",{parentName:"p"},"@index")," now have no generic anymore and will result in a typescript error noting this, simply remove the generic.",(0,a.kt)("br",{parentName:"p"}),"\n","This Generic was unused since ",(0,a.kt)("inlineCode",{parentName:"p"},"9.10.0"),"."),(0,a.kt)("h2",{id:"alias-for-whatisit-to-proptype-have-been-removed"},"Alias for ",(0,a.kt)("inlineCode",{parentName:"h2"},"WhatIsIt")," to ",(0,a.kt)("inlineCode",{parentName:"h2"},"PropType")," have been removed"),(0,a.kt)("p",null,"The Enum (and some internal options) had been renamed from ",(0,a.kt)("inlineCode",{parentName:"p"},"WhatIsIt")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"PropType")," in typegoose ",(0,a.kt)("inlineCode",{parentName:"p"},"9.5.0"),", and for backwards-compatability had been aliased, but now in ",(0,a.kt)("inlineCode",{parentName:"p"},"10.0.0")," these aliases (and final remaining property names) have been removed or renamed."),(0,a.kt)("h2",{id:"some-unused-types-have-been-removed"},"Some Unused types have been removed"),(0,a.kt)("p",null,"Some unused types that had been meant for internal use have been removed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"EmptyVoidFn")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IObjectWithTypegooseName"))))}h.isMDXComponent=!0}}]);