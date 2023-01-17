"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[29976],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47877:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],s={sidebar_label:"Setting Up Routing Secrets",sidebar_position:8,title:""},p=void 0,l={unversionedId:"howtos/setup_routing_secrets",id:"version-1.5.2/howtos/setup_routing_secrets",title:"",description:"How to set up routing secrets for use by applications",source:"@site/versioned_docs/version-1.5.2/howtos/setup_routing_secrets.md",sourceDirName:"howtos",slug:"/howtos/setup_routing_secrets",permalink:"/1.5.2/howtos/setup_routing_secrets",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.5.2/howtos/setup_routing_secrets.md",tags:[],version:"1.5.2",sidebarPosition:8,frontMatter:{sidebar_label:"Setting Up Routing Secrets",sidebar_position:8,title:""},sidebar:"docs",previous:{title:"Setting Up An External Container Registry",permalink:"/1.5.2/howtos/setup_external_registry"},next:{title:"Setting Up And Using Port Forwarding",permalink:"/1.5.2/howtos/port_forwarding"}},c={},u=[{value:"How to set up routing secrets for use by applications",id:"how-to-set-up-routing-secrets-for-use-by-applications",level:2},{value:"Introduction and Background",id:"introduction-and-background",level:3},{value:"Creating a routing secret",id:"creating-a-routing-secret",level:3},{value:"Issues and Solutions",id:"issues-and-solutions",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-set-up-routing-secrets-for-use-by-applications"},"How to set up routing secrets for use by applications"),(0,i.kt)("p",null,"This is a how-to for operators."),(0,i.kt)("h3",{id:"introduction-and-background"},"Introduction and Background"),(0,i.kt)("p",null,"In regular operation Epinio automatically creates the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.io/tls")," Secrets needed\nby a new application's Ingress to secure the communication with that application."),(0,i.kt)("p",null,"In a bit more detail, the application chart used to deploy that application creates both\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingress")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Certificate")," resource for it. The latter is then picked up by the\nCert manager component, which in turn creates the Secret holding the certificate data."),(0,i.kt)("p",null,"Even under the best of circumstances there will be a window where the Ingress is not\nsecured due to the time needed to see the new Certificate and then create the associated\nSecret."),(0,i.kt)("p",null,"This situation can be worsened if an external provider for certificates is involved, for\nexample ",(0,i.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt"),", which may impose rate limits (Let's\nEncrypt again), widening that window."),(0,i.kt)("p",null,"Epinio ",(0,i.kt)("inlineCode",{parentName:"p"},"routing secrets")," are an (optional) means to side-step these issues by creating\nsecrets ahead of deploying the applications using them."),(0,i.kt)("h3",{id:"creating-a-routing-secret"},"Creating a routing secret"),(0,i.kt)("p",null,"The steps to create a routing secret suitable for Epinio are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a regular ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes.io/tls")," Secret by some means, for some domain ",(0,i.kt)("inlineCode",{parentName:"p"},"D"),". This\ncan involve Cert manager, of course.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Mark the resulting secret with the label ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio.io/routing"),"."),(0,i.kt)("p",{parentName:"li"},"Note that the value of that label is not relevant, just its presence.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy an application into the namespace containing the marked secret, and requesting\na route for domain ",(0,i.kt)("inlineCode",{parentName:"p"},"D"),"."),(0,i.kt)("p",{parentName:"li"},"Epinio will now see that there is a secret for ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," in the namespace and pass the name\nof the secret to the application chart responsible for the application's deployment."),(0,i.kt)("p",{parentName:"li"},"The chart will now create an ",(0,i.kt)("inlineCode",{parentName:"p"},"Ingress")," directly referencing that secret and skip the\ncreation of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Certificate")," for it."))),(0,i.kt)("h3",{id:"issues-and-solutions"},"Issues and Solutions"),(0,i.kt)("p",null,"When using routing secrets a fully automatic process is replaced by a manual one. In other\nwords, the load normally placed on the Cert manager component and the providers backing it\nis now on the shoulders of the operator(s). The operator(s) now create Certificates and\nSecrets, place them in the relevant namespaces, etc."),(0,i.kt)("p",null,"There are some mitigating factors however:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Routing secrets are ",(0,i.kt)("strong",{parentName:"p"},"optional"),". Usage can be focused on just where they are\nconsidered as truly needed, with everything else keeping to the automatic process.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Routing secrets may hold certificates for ",(0,i.kt)("strong",{parentName:"p"},"wildcard domains"),". The secret will be\nused whenever a requested application route matches the wildcard pattern."),(0,i.kt)("p",{parentName:"li"},"This reduces the number of Secrets needing to be created.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Distribution of routing secrets can be automated by using a component like Kubed.\nKubed can automatically copy secrets between namespaces based on annotations."),(0,i.kt)("p",{parentName:"li"},"Note that Kubed is a component of Epinio, i.e. readily available."),(0,i.kt)("p",{parentName:"li"},"As an example,"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Place a new routing secret ",(0,i.kt)("inlineCode",{parentName:"p"},"RS")," into the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"epinio"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Annotate the secret with"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'kubed.appscode.com/sync="app.kubernetes.io/component=epinio-namespace"'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"kubed will now distribute ",(0,i.kt)("inlineCode",{parentName:"p"},"RS")," to all namespaces which have the label\n",(0,i.kt)("inlineCode",{parentName:"p"},"app.kubernetes.io/component=epinio-namespace"),". These are all the namespaces\nunder Epinio's control."),(0,i.kt)("p",{parentName:"li"},"For more a limited distribution it is possible to add custom labels to the\ndesired namespaces and then add matching annotations on the relevant Secrets."),(0,i.kt)("p",{parentName:"li"},"Note that the distribution will automatically include all new namespaces\nmatching whatever criteria are set up."))))))}m.isMDXComponent=!0}}]);