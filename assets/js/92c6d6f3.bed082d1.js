"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[21499],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,d=f["".concat(c,".").concat(m)]||f[m]||l[m]||i;return t?n.createElement(d,a(a({ref:r},p),{},{components:t})):n.createElement(d,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},54304:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],s={sidebar_label:"API"},c="API reference",u={unversionedId:"references/api",id:"version-0.6.2/references/api",title:"API reference",description:"Most of the Epinio commands communicate with the Epinio server side component over an API. The API is secured with Basic Auth authentication. You can make requests against that API with the credentials from your Epinio config.",source:"@site/versioned_docs/version-0.6.2/references/api.md",sourceDirName:"references",slug:"/references/api",permalink:"/0.6.2/references/api",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-0.6.2/references/api.md",tags:[],version:"0.6.2",frontMatter:{sidebar_label:"API"},sidebar:"docs",previous:{title:"Configurations",permalink:"/0.6.2/references/configurations"}},p={},l=[],f={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-reference"},"API reference"),(0,i.kt)("p",null,"Most of the Epinio commands communicate with the Epinio server side component over an API. The API is secured with Basic Auth authentication. You can make requests against that API with the credentials from your Epinio config.\nE.g."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get your credentials with: ",(0,i.kt)("inlineCode",{parentName:"li"},"epinio config show")),(0,i.kt)("li",{parentName:"ul"},"Use curl to make a request:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ curl -u your-username-here:password-here https://epinio.your-system-domain/api/v1/info\n")),(0,i.kt)("p",null,"The responses are all JSON objects, except for some cases where you get an error before the request reaches the Epinio server (e.g. because of bad cluster configuration)."),(0,i.kt)("p",null,"The endpoints are documented in the ",(0,i.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI Spec")," format. You can find the definition of the API here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/blob/v0.1.6/docs/references/api/swagger.json"},"https://github.com/epinio/epinio/blob/v0.1.6/docs/references/api/swagger.json")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Make sure")," you change to the Epinio release you have deployed."),(0,i.kt)("p",null,"There are various tools you can use to easily browse the API (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://editor.swagger.io/"},"https://editor.swagger.io/"),"). If you have a Golang environment set up locally, you may find it easier to run ",(0,i.kt)("inlineCode",{parentName:"p"},"make swagger swagger-serve")," from the root of the Epinio repository."))}m.isMDXComponent=!0}}]);