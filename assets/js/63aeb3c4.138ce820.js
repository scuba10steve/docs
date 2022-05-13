"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[3296],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98474:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],l={sidebar_label:"Install Epinio on Public Clouds",title:""},s="Install Epinio on Public Clouds",u={unversionedId:"howtos/install_epinio_on_public_cloud",id:"howtos/install_epinio_on_public_cloud",title:"",description:"Epinio can be installed on any Kubernetes distribution, including the Public Cloud ones.",source:"@site/docs/howtos/install_epinio_on_public_cloud.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_public_cloud",permalink:"/next/howtos/install_epinio_on_public_cloud",editUrl:"https://github.com/epinio/epinio-docs/docs/howtos/install_epinio_on_public_cloud.md",tags:[],version:"current",frontMatter:{sidebar_label:"Install Epinio on Public Clouds",title:""},sidebar:"docs",previous:{title:"Install Epinio on Minikube (local)",permalink:"/next/howtos/install_epinio_on_minikube"},next:{title:"Install Wordpress with Epinio",permalink:"/next/howtos/install_wordpress_application"}},c={},p=[{value:"Public Clouds configuration",id:"public-clouds-configuration",level:2},{value:"AKS prerequisites",id:"aks-prerequisites",level:3},{value:"Create an AKS cluster",id:"create-an-aks-cluster",level:3},{value:"EKS prerequisites",id:"eks-prerequisites",level:3},{value:"Create an EKS cluster",id:"create-an-eks-cluster",level:3},{value:"GKE prerequisites",id:"gke-prerequisites",level:3},{value:"Create a GKE cluster",id:"create-a-gke-cluster",level:3},{value:"Install Epinio",id:"install-epinio",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-epinio-on-public-clouds"},"Install Epinio on Public Clouds"),(0,o.kt)("p",null,"Epinio can be installed on any Kubernetes distribution, including the Public Cloud ones."),(0,o.kt)("h2",{id:"public-clouds-configuration"},"Public Clouds configuration"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Microsoft AKS configuration"),(0,o.kt)("h3",{id:"aks-prerequisites"},"AKS prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Epinio has been tested with AKS version ",(0,o.kt)("strong",{parentName:"li"},"v1.21.9")),(0,o.kt)("li",{parentName:"ul"},"To just try out Epinio, e.g. 2 ",(0,o.kt)("strong",{parentName:"li"},"Standard_D2_v2")," nodes are sufficient")),(0,o.kt)("h3",{id:"create-an-aks-cluster"},"Create an AKS cluster"),(0,o.kt)("p",null,"If you do not have an existing cluster, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/aks/kubernetes-walkthrough"},"quickstart")," to create an AKS cluster."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In AKS, Epinio must be installed with an external registry because due to a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/epinio/epinio/issues/1373#issuecomment-1105231113"},"change")," in Azure, we cannot use internal registry anymore.")))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Amazon EKS configuration"),(0,o.kt)("h3",{id:"eks-prerequisites"},"EKS prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Epinio has been tested with EKS version ",(0,o.kt)("strong",{parentName:"li"},"v1.21")),(0,o.kt)("li",{parentName:"ul"},"To just try out Epinio, e.g. 2 ",(0,o.kt)("strong",{parentName:"li"},"t3a.large")," nodes are sufficient")),(0,o.kt)("h3",{id:"create-an-eks-cluster"},"Create an EKS cluster"),(0,o.kt)("p",null,"If you do not have an existing cluster, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/getting-started.html"},"quickstart")," to create an EKS cluster.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Google GKE configuration"),(0,o.kt)("h3",{id:"gke-prerequisites"},"GKE prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Epinio has been tested with GKE version ",(0,o.kt)("strong",{parentName:"li"},"v1.21.9")),(0,o.kt)("li",{parentName:"ul"},"To just try out Epinio, e.g. 1 ",(0,o.kt)("strong",{parentName:"li"},"n2-standard-4")," node is sufficient")),(0,o.kt)("h3",{id:"create-a-gke-cluster"},"Create a GKE cluster"),(0,o.kt)("p",null,"If you do not have an existing cluster, follow the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart"},"quickstart")," to create a GKE cluster.")),(0,o.kt)("h2",{id:"install-epinio"},"Install Epinio"),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"/next/installation/"},"Epinio installation process"),"."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"In case of trouble with Epinio's Traefik component or Ingress controllers, the ",(0,o.kt)("a",{parentName:"p",href:"/next/explanations/advanced#traefik"},"Traefik")," section in the ",(0,o.kt)("a",{parentName:"p",href:"/next/explanations/advanced"},"Advanced Topics")," document shall be your friend."))}m.isMDXComponent=!0}}]);