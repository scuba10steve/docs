"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[73871],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50737:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var i=n(83117),r=n(80102),o=(n(67294),n(3905)),a=["components"],c={sidebar_label:"Create a custom Service",sidebar_position:10,title:""},s="Create a custom service",l={unversionedId:"howtos/create_custom_service",id:"version-1.2.0/howtos/create_custom_service",title:"",description:"As described in the Service reference page, Epinio services are nothing but descriptions of Helm charts. An operator may add more services by simply creating a Custom Resource in the namespace where Epinio is installed.",source:"@site/versioned_docs/version-1.2.0/howtos/create_custom_service.md",sourceDirName:"howtos",slug:"/howtos/create_custom_service",permalink:"/1.2.0/howtos/create_custom_service",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.2.0/howtos/create_custom_service.md",tags:[],version:"1.2.0",sidebarPosition:10,frontMatter:{sidebar_label:"Create a custom Service",sidebar_position:10,title:""},sidebar:"docs",previous:{title:"Custom Routes",permalink:"/1.2.0/howtos/custom_routes"},next:{title:"Custom builders",permalink:"/1.2.0/howtos/custom_builder"}},p={},u=[{value:"Adding an Image to the service",id:"adding-an-image-to-the-service",level:2},{value:"Multiple Secret types",id:"multiple-secret-types",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-custom-service"},"Create a custom service"),(0,o.kt)("p",null,"As described ",(0,o.kt)("a",{parentName:"p",href:"/1.2.0/references/services"},"in the Service reference page"),", Epinio services are nothing but descriptions of Helm charts. An operator may add more services by simply creating a Custom Resource in the namespace where Epinio is installed."),(0,o.kt)("p",null,"As a starting point, you can check the services installed by default for Epinio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get services.application.epinio.io -A\n")),(0,o.kt)("p",null,"If Epinio is installed in a namespace called ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio"),", the following command outputs the Service definition in ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubectl get services.application.epinio.io -n epinio mysql-dev -o yaml > service.yaml\n")),(0,o.kt)("p",null,"or you can find the definition of the catalog services ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/3a12bac7aee5ac36c6d43416f2e83ac10090c62a/chart/epinio/templates/service-catalog.yaml"},"here"),"."),(0,o.kt)("p",null,"Change the fields to point to the desired helm chart and apply the yaml with a command like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ kubeclt apply -f service.yaml\n")),(0,o.kt)("p",null,"If everything worked correctly, you can see your Service in the Epinio ",(0,o.kt)("inlineCode",{parentName:"p"},"service-catalog"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ epinio service catalog\n")),(0,o.kt)("h2",{id:"adding-an-image-to-the-service"},"Adding an Image to the service"),(0,o.kt)("p",null,"The various consumers of the API (e.g. the web UI of Epinio) can show an icon when\nlisting the various available services. If you want to assign an image to your\ncustom service, make sure you add the ",(0,o.kt)("inlineCode",{parentName:"p"},"serviceIcon")," field in the Custom Resource\nyaml."),(0,o.kt)("p",null,"Generally, helm charts have an icon field defined which already provides such an\nimage. You can find the icon field with the ",(0,o.kt)("inlineCode",{parentName:"p"},"helm show")," command. E.g. for the\nbitnami rabbitmq helm chart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm show chart https://charts.bitnami.com/bitnami/rabbitmq-9.0.5.tgz | yq .icon\n")),(0,o.kt)("h2",{id:"multiple-secret-types"},"Multiple Secret types"),(0,o.kt)("p",null,"By default Epinio will look for Opaque secret types to label them as Configurations.",(0,o.kt)("br",{parentName:"p"}),"\n","Sometimes this is not enough, so you can define different types with the ",(0,o.kt)("inlineCode",{parentName:"p"},"application.epinio.io/catalog-service-secret-types")," annotation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: application.epinio.io/v1\nkind: Service\nmetadata:\n  name: myservice\n  namespace: epinio\n  annotations:\n    application.epinio.io/catalog-service-secret-types: Opaque,BasicAuth,connection.crossplane.io/v1alpha1\n    ...\n")),(0,o.kt)("p",null,"With this definition, Epinio will get all the ",(0,o.kt)("inlineCode",{parentName:"p"},"Opaque"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"BasicAuth"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"connection.crossplane.io/v1alpha1")," secrets generated during the creation of this Service (any type of secret can be listed)."))}d.isMDXComponent=!0}}]);