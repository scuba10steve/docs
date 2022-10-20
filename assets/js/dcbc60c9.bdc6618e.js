"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[90170],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29349:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],s={title:"",sidebar_label:"Source Code Storage"},c="Customization point: Source Code Storage",u={unversionedId:"references/customization/sources",id:"version-1.3.0/references/customization/sources",title:"",description:"Epinio saves the uploaded sources of applications to be deployed to an S3 compatible",source:"@site/versioned_docs/version-1.3.0/references/customization/sources.md",sourceDirName:"references/customization",slug:"/references/customization/sources",permalink:"/references/customization/sources",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.3.0/references/customization/sources.md",tags:[],version:"1.3.0",frontMatter:{title:"",sidebar_label:"Source Code Storage"},sidebar:"docs",previous:{title:"Routing Secrets",permalink:"/references/customization/routing_secrets"},next:{title:"Buildpacks",permalink:"/references/customization/staging"}},l={},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customization-point-source-code-storage"},"Customization point: Source Code Storage"),(0,i.kt)("p",null,"Epinio saves the uploaded sources of applications to be deployed to an S3 compatible\nstorage system. The staging process then retrieves the sources from that storage."),(0,i.kt)("p",null,"By default Epinio uses ",(0,i.kt)("a",{parentName:"p",href:"https://min.io/"},"minio")," as the store, as an internal component."),(0,i.kt)("p",null,"To use an external S3 compatible storage it is necessary to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set chart key ",(0,i.kt)("inlineCode",{parentName:"p"},"minio.enabled=false"),", and")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the various S3 connection keys, i.e."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3.endpoint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3.bucket")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3.region")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3.accessKeyID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s3.secretAccessKey"))),(0,i.kt)("p",{parentName:"li"},"to suitable values. The keys ",(0,i.kt)("inlineCode",{parentName:"p"},"s3.useSSL")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s3.certificateSecret")," are usually not\nrequired.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"s3.useSSL=false")," if and only if open unencrypted communication is truly desired.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},"s3.certificateSecret")," to the secret holding a cert if and only if the chosen\nstorage uses a self-signed certificate. This is not expected to be the case in\nproduction deployments."))))}d.isMDXComponent=!0}}]);