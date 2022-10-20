"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[86629],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,g=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},423:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],s={sidebar_label:"Setup external container registry",sidebar_position:6,title:""},l=void 0,p={unversionedId:"howtos/setup_external_registry",id:"version-1.3.0/howtos/setup_external_registry",title:"",description:"How to setup external Epinio registry",source:"@site/versioned_docs/version-1.3.0/howtos/setup_external_registry.md",sourceDirName:"howtos",slug:"/howtos/setup_external_registry",permalink:"/howtos/setup_external_registry",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.3.0/howtos/setup_external_registry.md",tags:[],version:"1.3.0",sidebarPosition:6,frontMatter:{sidebar_label:"Setup external container registry",sidebar_position:6,title:""},sidebar:"docs",previous:{title:"Setup external S3 storage",permalink:"/howtos/setup_external_s3"},next:{title:"Setting up routing secrets",permalink:"/howtos/setup_routing_secrets"}},u={},c=[{value:"How to setup external Epinio registry",id:"how-to-setup-external-epinio-registry",level:2}],d={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-setup-external-epinio-registry"},"How to setup external Epinio registry"),(0,i.kt)("p",null,"Epinio allows the use of an external registry for the storage of application images.  This can be achieved by setting the following variables during the ",(0,i.kt)("inlineCode",{parentName:"p"},"helm install"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm install \\\n  --set containerregistry.enabled=false \\\n  --set global.registryURL=$REGISTRY_URL \\\n  --set global.registryNamespace=$REGISTRY_NAMESPACE \\\n  --set global.registryUsername=$REGISTRY_USER \\\n  --set global.registryPassword=$REGISTRY_PASSWORD \\\n  ... (other options here) \\\n  epinio epinio/epinio\n")),(0,i.kt)("p",null,"Using ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"dockerhub")," as an example, the user would have to set the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"$REGISTRY_URL")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.hub.docker.com"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"$REGISTRY_USER")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"$REGISTRY_PASSWORD")," would be set to the dockerhub credentials, and ",(0,i.kt)("inlineCode",{parentName:"p"},"$REGISTRY_NAMESPACE")," would be either an organization or the username."),(0,i.kt)("p",null,"When the above arguments are set, Epinio doesn't deploy a registry on the cluster."))}f.isMDXComponent=!0}}]);