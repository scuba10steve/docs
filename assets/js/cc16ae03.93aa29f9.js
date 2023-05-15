"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[89556],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83093:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Installing Epinio On RKE2",sidebar_position:19,title:""},s="Creating an RKE2 Kubernetes Cluster",u={unversionedId:"howtos/install_epinio_on_rke",id:"howtos/install_epinio_on_rke",title:"",description:"This guide will help you to deploy a suitable RKE2 Kubernetes cluster for Epinio. More details can be found in RKE2 quickstart guide.",source:"@site/docs/howtos/install_epinio_on_rke.md",sourceDirName:"howtos",slug:"/howtos/install_epinio_on_rke",permalink:"/next/howtos/install_epinio_on_rke",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/howtos/install_epinio_on_rke.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_label:"Installing Epinio On RKE2",sidebar_position:19,title:""},sidebar:"docs",previous:{title:"Installing Epinio On Rancher Desktop (local)",permalink:"/next/howtos/install_epinio_on_rancher_desktop"},next:{title:"Installing Epinio On K3s (local)",permalink:"/next/howtos/install_epinio_on_k3s"}},p={},c=[{value:"Install RKE2 Kubernetes cluster",id:"install-rke2",level:2},{value:"1. Run the installer, start and enable the rke2-server systemd service",id:"1-run-the-installer-start-and-enable-the-rke2-server-systemd-service",level:4},{value:"2. Configure environment variables for operating the RKE2 cluster",id:"2-configure-environment-variables-for-operating-the-rke2-cluster",level:4},{value:"RKE2 cluster prerequisities",id:"rke2-cluster-prerequisities",level:2},{value:"1. Install helm CLI",id:"1-install-helm-cli",level:4},{value:"2. Configure rke2-ingress-nginx-controller",id:"2-configure-rke2-ingress-nginx-controller",level:4},{value:"3. Deploy a dynamic storage provisioner",id:"3-deploy-a-dynamic-storage-provisioner",level:4},{value:"Installation",id:"installation",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-an-rke2-kubernetes-cluster"},"Creating an RKE2 Kubernetes Cluster"),(0,i.kt)("p",null,"This guide will help you to deploy a suitable RKE2 Kubernetes cluster for Epinio. More details can be found in RKE2 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/quickstart/"},"quickstart")," guide."),(0,i.kt)("h2",{id:"install-rke2"},"Install RKE2 Kubernetes cluster"),(0,i.kt)("p",null,"The following steps are performed using the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," account on a dedicated machine for the RKE2 server node."),(0,i.kt)("h4",{id:"1-run-the-installer-start-and-enable-the-rke2-server-systemd-service"},"1. Run the installer, start and enable the rke2-server systemd service"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sfL https://get.rke2.io | sh -\nsystemctl enable --now rke2-server.service\n")),(0,i.kt)("h4",{id:"2-configure-environment-variables-for-operating-the-rke2-cluster"},"2. Configure environment variables for operating the RKE2 cluster"),(0,i.kt)("p",null,"Execute the following commands in the RKE2 node shell and/or store them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/root/.bashrc")," file (or its equivalent) for persistence."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:/var/lib/rancher/rke2/bin:/opt/rke2/bin\nexport KUBECONFIG=/etc/rancher/rke2/rke2.yaml\n")),(0,i.kt)("p",null,"Make sure that you are able to communicate with your new RKE2 cluster by running ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get pods --all-namespaces"),"."),(0,i.kt)("h2",{id:"rke2-cluster-prerequisities"},"RKE2 cluster prerequisities"),(0,i.kt)("p",null,"Perform the following steps on your RKE2 node before installing Epinio:"),(0,i.kt)("h4",{id:"1-install-helm-cli"},"1. Install helm CLI"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash\n")),(0,i.kt)("h4",{id:"2-configure-rke2-ingress-nginx-controller"},"2. Configure rke2-ingress-nginx-controller"),(0,i.kt)("p",null,"While the ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx-controller")," is on RKE2 clusters preinstalled by default, there is a need to set the IngressClass named ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," up as the ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," class. This is done by running the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl patch ingressClass nginx -p \'{"metadata": {"annotations":{"ingressclass.kubernetes.io/is-default-class": "true"}}}\'\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: You can specify a non-default IngressClass during the installation of Epinio with helm argument ",(0,i.kt)("inlineCode",{parentName:"p"},"--set ingress.ingressClassName=<className>"),".")),(0,i.kt)("h4",{id:"3-deploy-a-dynamic-storage-provisioner"},"3. Deploy a dynamic storage provisioner"),(0,i.kt)("p",null,"RKE2 clusters have no storage provisioner installed by default. To support Epinio a storage provisioner is needed. You can use any storage provisioner which provides, preferably, ",(0,i.kt)("inlineCode",{parentName:"p"},"ReadWriteMany")," (RWX) Access Mode and a ",(0,i.kt)("strong",{parentName:"p"},"default StorageClass")," resource for dynamic storage provisioning."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To verify that your cluster provides a default StorageClass run the command  ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get storageclass"),". The default StorageClass is marked with the string ",(0,i.kt)("inlineCode",{parentName:"p"},"(default)")," next to its name in the output list.")),(0,i.kt)("p",null,"As an example, you can deploy and configure ",(0,i.kt)("inlineCode",{parentName:"p"},"local-path")," dynamic storage provisioner by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl apply -f https://raw.githubusercontent.com/rancher/local-path-provisioner/master/deploy/local-path-storage.yaml\nkubectl patch storageclass local-path -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n')),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"For evaluation environments it is recommended to setup Epinio Ingress resources by using a wildcard DNS service such as ",(0,i.kt)("inlineCode",{parentName:"p"},"omg.howdoi.website"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sslip.io"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"nip.io")," that points to the ",(0,i.kt)("inlineCode",{parentName:"p"},"INTERNAL-IP")," address of your kubernetes node."),(0,i.kt)("p",null,"For advanced and production environments you should configure an external load-balancer solution that listens on a public IP with an associated public FQDN domain. The role of the load-balancer is to perform a redirection of HTTP(S) traffic from the load-balancer endpoint to the internal Ingress resource(s) of the kubernetes cluster."),(0,i.kt)("p",null,"Beside advanced installation options, there are two ways of installing Epinio:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/next/installation/wildcardDNS_setup"},"Installation using a Wildcard DNS Service"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For test environments. This should work on nearly any kubernetes distribution. Epinio will try to automatically create a magic wildcard DNS domain, e.g. ",(0,i.kt)("strong",{parentName:"li"},"10.0.0.1.omg.howdoi.website"),".")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/next/installation/dns_setup"},"DNS setup"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For test and production environments. You will define a system domain, e.g. ",(0,i.kt)("strong",{parentName:"li"},"test.example.com"),".")),(0,i.kt)("p",null,"Then, continue with the ",(0,i.kt)("a",{parentName:"p",href:"/next/installation/install_epinio"},"Epinio installation process"),"."))}m.isMDXComponent=!0}}]);