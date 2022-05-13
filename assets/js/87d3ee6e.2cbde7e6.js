"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[8408],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},86719:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Install Epinio on Rancher",title:""},s="Rancher configuration",p={unversionedId:"howtos/install_epinio_on_rancher",id:"version-0.8.0/howtos/install_epinio_on_rancher",title:"",description:"Before installing Epinio, you need a running Rancher instance.",source:"@site/versioned_docs/version-0.8.0/howtos/install_epinio_on_rancher.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_rancher",permalink:"/howtos/install_epinio_on_rancher",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.8.0/howtos/install_epinio_on_rancher.md",tags:[],version:"0.8.0",frontMatter:{sidebar_label:"Install Epinio on Rancher",title:""},sidebar:"docs",previous:{title:"How To use custom application Helm charts",permalink:"/howtos/using_custom_appcharts"},next:{title:"Install Epinio on RKE2 (Rancher)",permalink:"/howtos/install_epinio_on_rke"}},u={},c=[{value:"Kubernetes cluster",id:"kubernetes-cluster",level:2},{value:"Rancher settings",id:"rancher-settings",level:3},{value:"Epinio Prerequisites",id:"epinio-prerequisites",level:2},{value:"Install an Ingress controller",id:"install-an-ingress-controller",level:3},{value:"Install cert-manager",id:"install-cert-manager",level:3},{value:"Install Epinio",id:"install-epinio",level:2},{value:"Access the Epinio menu",id:"access-the-epinio-menu",level:2}],h={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rancher-configuration"},"Rancher configuration"),(0,i.kt)("p",null,"Before installing Epinio, you need a running Rancher instance."),(0,i.kt)("p",null,"If you do not have such, please use the Rancher's ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs"},"installation guides")," to set one up."),(0,i.kt)("p",null,"This how-to was written using the following versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/epinio/helm-charts/releases/tag/epinio-0.7.1"},"epinio helm chart 0.7.1")),(0,i.kt)("li",{parentName:"ul"},"Rancher 2.6.3")),(0,i.kt)("h2",{id:"kubernetes-cluster"},"Kubernetes cluster"),(0,i.kt)("p",null,"The two supported methods are to either deploy a new cluster or to import an existing one into Rancher. The steps to take for either method are detailed in the Rancher documentation (See ",(0,i.kt)("inlineCode",{parentName:"p"},"Cluster Provisioning"),").",(0,i.kt)("br",null),"\n",(0,i.kt)("em",{parentName:"p"},"While it is possible (for development) to deploy Epinio on the same node where Rancher is installed, this requires more steps and is not supported by Rancher either.")),(0,i.kt)("h3",{id:"rancher-settings"},"Rancher settings"),(0,i.kt)("p",null,"At the time of writing, Epinio is not included in the latest stable Rancher version.",(0,i.kt)("br",null),"\nThis means that you have to update two settings in your Rancher dashboard.",(0,i.kt)("br",null),"\nGo to ",(0,i.kt)("inlineCode",{parentName:"p"},"Global settings")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced settings"),"  and update the following settings:",(0,i.kt)("br",null)),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ui-dashboard-index")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https://releases.rancher.com/dashboard/epinio-v0.6.0/index.html"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ui-offline-preferred")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Remote"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: Please keep in mind that ",(0,i.kt)("inlineCode",{parentName:"p"},"ui-dashboard-index")," value will change over time until it's merged in stable Rancher version.")),(0,i.kt)("h2",{id:"epinio-prerequisites"},"Epinio Prerequisites"),(0,i.kt)("h3",{id:"install-an-ingress-controller"},"Install an Ingress controller"),(0,i.kt)("p",null,"If there's no Ingress controller running yet on the cluster, you need to install one. In the example below, Traefik will be installed."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: If you are in the rancher dashboard in the browser, most likely you already have an Ingress controller\nrunning.")),(0,i.kt)("p",null,"Go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Apps & Marketplace")," >  ",(0,i.kt)("inlineCode",{parentName:"p"},"Repositories")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Create"),"."),(0,i.kt)("p",null,"Give a name to the repo and use ",(0,i.kt)("inlineCode",{parentName:"p"},"https://helm.traefik.io/traefik")," as the index URL."),(0,i.kt)("p",null,'Once done, go to the "Charts" menu and install the ',(0,i.kt)("inlineCode",{parentName:"p"},"traefik")," chart."),(0,i.kt)("p",null,"You'll see a screen where you can edit the traefik helm yaml file, make sure to set the following settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ingressClass.enabled: true\ningressClass.isDefaultClass: true\nports.web.redirectTo: websecure\nservice.spec.loadBalancerIP: # Set this to the IP of your load balancer if you know that\n")),(0,i.kt)("p",null,"See also the ",(0,i.kt)("a",{parentName:"p",href:"/installation/#ingress-controller"},"Install Epinio")," page for more details."),(0,i.kt)("h3",{id:"install-cert-manager"},"Install cert-manager"),(0,i.kt)("p",null,"If cert manager is not installed yet, you can install it by adding the relevant repository\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"Apps & Marketplace")," >  ",(0,i.kt)("inlineCode",{parentName:"p"},"Repositories")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")),(0,i.kt)("p",null,"Give a name to the repo and use ",(0,i.kt)("inlineCode",{parentName:"p"},"https://charts.jetstack.io")," as the index URL."),(0,i.kt)("p",null,'Once done, go to the "Charts" menu and install the ',(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," chart."),(0,i.kt)("p",null,"You'll see a screen where you can edit the cert-manager helm yaml file, make sure to set the following settings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"installCRDs: true\nextraArgs:\n- '--enable-certificate-owner-ref=true'\n")),(0,i.kt)("p",null,"See also the ",(0,i.kt)("a",{parentName:"p",href:"/installation/#cert-manager"},"Install Epinio")," page for more details."),(0,i.kt)("h2",{id:"install-epinio"},"Install Epinio"),(0,i.kt)("p",null,"In the Rancher Dashboard, go to the cluster on where you want to install Epinio."),(0,i.kt)("p",null,"Add the Epinio Helm repo in ",(0,i.kt)("inlineCode",{parentName:"p"},"Apps & Marketplace")," >  ",(0,i.kt)("inlineCode",{parentName:"p"},"Repositories")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")),(0,i.kt)("p",null,"Give a name to the repo and use ",(0,i.kt)("inlineCode",{parentName:"p"},"https://epinio.github.io/helm-charts")," as index URL."),(0,i.kt)("p",null,'Once done, go to the "Charts" menu and install the ',(0,i.kt)("inlineCode",{parentName:"p"},"epinio")," chart."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: While you can select the version you want, it's strongly advised you choose the latest one (default). This how-to was written with version ",(0,i.kt)("inlineCode",{parentName:"p"},"0.7.1"),". ")),(0,i.kt)("p",null,"Click install in the top right corner."),(0,i.kt)("p",null,"On the next screen, you can select a namespace where the deployment will happen. You also have to set a name for the deployment."),(0,i.kt)("p",null,"The following screen is where you can configure Epinio according to your needs.",(0,i.kt)("br",null),"\nThe 2 most important settings here are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Domain"),": ",(0,i.kt)("a",{parentName:"li",href:"/installation/dns_setup"},"Explained here")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Access control allow origin"),":  It is mandatory to insert your Rancher dashboard URL into this field. It basically allows Rancher to talk with the Epinio API.")),(0,i.kt)("p",null,"Once everything is configured, click on the install button and then wait a few minutes for the installation to complete.",(0,i.kt)("br",null),"\nAfter that follow the instructions given by the Helm install command output."),(0,i.kt)("h2",{id:"access-the-epinio-menu"},"Access the Epinio menu"),(0,i.kt)("p",null,'Click on the "burger" menu icon (\u2630) at the top left and then the Epinio icon under ',(0,i.kt)("strong",{parentName:"p"},"GLOBAL APPS"),"."),(0,i.kt)("p",null,"You should see your fresh Epinio instance there."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"ATTENTION: If you use an untrusted certificate, you have to click on the URL, accept the security exception and use the refresh button shown below the page title, i.e. ",(0,i.kt)("strong",{parentName:"p"},"Epinio instances"),".\nNow the state should be available and you can access the instance by clicking on its name.")),(0,i.kt)("p",null,"Once you are in your Epinio instance, you can either deploy or delete things like applications, namespaces or configurations."))}d.isMDXComponent=!0}}]);