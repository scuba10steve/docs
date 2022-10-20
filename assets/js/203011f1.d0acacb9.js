"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[26468],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76798:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={sidebar_label:"Security",title:""},c=void 0,l={unversionedId:"explanations/security",id:"version-1.3.0/explanations/security",title:"",description:"A Quick Note On Security",source:"@site/versioned_docs/version-1.3.0/explanations/security.md",sourceDirName:"explanations",slug:"/explanations/security",permalink:"/explanations/security",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.3.0/explanations/security.md",tags:[],version:"1.3.0",frontMatter:{sidebar_label:"Security",title:""},sidebar:"docs",previous:{title:"Principles",permalink:"/explanations/principles"},next:{title:"Certificate Issuers",permalink:"/howtos/certificate_issuers"}},p={},u=[{value:"A Quick Note On Security",id:"a-quick-note-on-security",level:2},{value:"OIDC",id:"oidc",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"a-quick-note-on-security"},"A Quick Note On Security"),(0,o.kt)("p",null,"Epinio secures access to its API with TLS and basic authentication."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio login [URL]")," command after installation to save the necessary credentials\n(user, password) and certificates. The information is stored in Epinio's settings,\nfor pickup by other Epinio commands."),(0,o.kt)("p",null,"For a trial deployment the certificate securing the API will be generated by the\nunderlying cluster, and self-signed, and its CA certificate is stored in the\nsettings to allow verification."),(0,o.kt)("p",null,"For a production-oriented deployment on the other hand, with a proper\ndomain specified (",(0,o.kt)("inlineCode",{parentName:"p"},"--set global.domain=...")," when installing the chart),\nthe certificate can be obtained from ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt"),". Nothing is stored in the\nsettings in that case, as Let's Encrypt is a known CA. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: Read more on how to use Let's Encrypt here: ",(0,o.kt)("a",{parentName:"p",href:"/howtos/certificate_issuers"},"Certificate Issuers"),".")),(0,o.kt)("p",null,"How Kubernetes accesses the Epinio registry (TLS or not) is handled a bit differently depending on installation flags.\nMore details here: ",(0,o.kt)("a",{parentName:"p",href:"/explanations/advanced#container-registry"},"Epinio Registry"),"."),(0,o.kt)("h3",{id:"oidc"},"OIDC"),(0,o.kt)("p",null,"Since version ",(0,o.kt)("strong",{parentName:"p"},"1.3.0"),", Epinio has integrated ",(0,o.kt)("a",{parentName:"p",href:"https://dexidp.io/"},"Dex")," as an identity provider which adds the support for external OIDC providers."),(0,o.kt)("p",null,"To authenticate through Dex, you can use the login command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--oidc")," flag. This will open a web page where you can authenticate with the configured providers."))}f.isMDXComponent=!0}}]);