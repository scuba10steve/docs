"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[79330],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43141:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var i=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],s={sidebar_label:"Creating a custom service",sidebar_position:13,title:"Creating a custom service",description:"How to create a custom service",keywords:["epinio","kubernetes","create a custom service"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","customize","create-custom-service"],"doc-persona":["epinio-operator"]},c=void 0,l={unversionedId:"howtos/customization/create_custom_service",id:"howtos/customization/create_custom_service",title:"Creating a custom service",description:"How to create a custom service",source:"@site/docs/howtos/customization/create_custom_service.md",sourceDirName:"howtos/customization",slug:"/howtos/customization/create_custom_service",permalink:"/next/howtos/customization/create_custom_service",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/howtos/customization/create_custom_service.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_label:"Creating a custom service",sidebar_position:13,title:"Creating a custom service",description:"How to create a custom service",keywords:["epinio","kubernetes","create a custom service"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","customize","create-custom-service"],"doc-persona":["epinio-operator"]},sidebar:"docs",previous:{title:"Setting up custom routes",permalink:"/next/howtos/customization/custom_routes"},next:{title:"Creating a Git configuration",permalink:"/next/howtos/customization/create_git_configuration"}},p={},u=[{value:"Adding an Image to the service",id:"adding-an-image-to-the-service",level:2},{value:"Multiple secret types",id:"multiple-secret-types",level:2},{value:"Customization",id:"customization",level:2},{value:"System settings",id:"system-settings",level:3},{value:"User-settable configuration values",id:"user-settable",level:3},{value:"Private repositories and registries",id:"private-repositories-and-registries",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As described ",(0,r.kt)("a",{parentName:"p",href:"/next/references/services"},"in the Service reference page"),",\nEpinio services are nothing but descriptions of Helm charts.\nAn operator may add more services simply by creating a Custom Resource in the namespace where Epinio is installed."),(0,r.kt)("p",null,"As a starting point, you can check the services installed by default for Epinio:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get services.application.epinio.io -A\n")),(0,r.kt)("p",null,"With Epinio installed in a namespace called ",(0,r.kt)("inlineCode",{parentName:"p"},"epinio"),", the following command outputs the Service definition in ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get services.application.epinio.io -n epinio mysql-dev -o yaml > service.yaml\n")),(0,r.kt)("p",null,"Or, you can find the definition of the catalog services\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/epinio/helm-charts/blob/main/chart/epinio/templates/service-catalog.yaml"},"in the GitHub repository"),"."),(0,r.kt)("p",null,"Change the fields to point to the desired helm chart and apply the YAML with a command like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl apply -f service.yaml\n")),(0,r.kt)("p",null,"If everything worked correctly, you can see your Service in the Epinio ",(0,r.kt)("inlineCode",{parentName:"p"},"service-catalog"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"epinio service catalog\n")),(0,r.kt)("h2",{id:"adding-an-image-to-the-service"},"Adding an Image to the service"),(0,r.kt)("p",null,"The consumers of the API (that is, the web UI of Epinio) can show an icon when listing the available services.\nTo assign an image to your custom service, make sure you add the ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceIcon")," field in the Custom Resource YAML."),(0,r.kt)("p",null,"Helm charts have an icon field defined which already provides such an image.\nYou can find the icon field with the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm show")," command. For example, for the Bitnami RabbitMQ Helm chart:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"helm show chart https://charts.bitnami.com/bitnami/rabbitmq-9.0.5.tgz | yq .icon\n")),(0,r.kt)("h2",{id:"multiple-secret-types"},"Multiple secret types"),(0,r.kt)("p",null,"By default, Epinio looks for Opaque secret types to label them as Configurations.\nSometimes this isn't enough,\nso you can define different types with the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.epinio.io/catalog-service-secret-types")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: application.epinio.io/v1\nkind: Service\nmetadata:\n  name: myservice\n  namespace: epinio\n  annotations:\n    application.epinio.io/catalog-service-secret-types: Opaque,BasicAuth,connection.crossplane.io/v1alpha1\n    ...\n")),(0,r.kt)("p",null,"With this definition, Epinio gets all the ",(0,r.kt)("inlineCode",{parentName:"p"},"Opaque"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BasicAuth"),",\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"connection.crossplane.io/v1alpha1")," secrets generated during the creation of this Service (you can list any type of secret)."),(0,r.kt)("h2",{id:"customization"},"Customization"),(0,r.kt)("p",null,"You can customize services in two possible ways.\nThe first, system settings, is for operators to configure the referenced chart so that it works within the Epinio environment.\nThe second, user settings, declares the chart settings the user can change when deploying the service from the catalog."),(0,r.kt)("p",null,"System settings have priority over user settings.\nSo, declaring a field used by system settings as user-settable is a ",(0,r.kt)("inlineCode",{parentName:"p"},"no operation"),".\nWhile the user can see that setting, and provide values, these values are ignored in favor of the system values."),(0,r.kt)("h3",{id:"system-settings"},"System settings"),(0,r.kt)("p",null,"You enter system settings in the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.values")," field of the service declaration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: application.epinio.io/v1\nkind: Service\nmetadata:\n  name: myservice\n  ...\nspec:\n  values: |-\n    ... text ...\n")),(0,r.kt)("p",null,"The value of this field is YAML formatted text."),(0,r.kt)("p",null,"For example, the predefined development services coming with an Epinio installation\nuse this to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"extraDeploy")," field of the Bitnami charts.\nThis is to inject supporting service accounts, roles, bindings, and PVCs for the service to use."),(0,r.kt)("h3",{id:"user-settable"},"User-settable configuration values"),(0,r.kt)("p",null,"You declare user settings through the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.settings")," field of the service declaration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: application.epinio.io/v1\nkind: Service\nmetadata:\n  name: myservice\n  ...\nspec:\n  settings:\n    "ingress.enabled":\n      type: "bool"\n    "ingress.hostname":\n      type: "string"\n')),(0,r.kt)("p",null,"The example settings shown are taking from the nginx service used in the Epinio test suite."),(0,r.kt)("p",null,"The syntax of the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," map is the same as that of the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," map for app chart resources.\nSee section ",(0,r.kt)("inlineCode",{parentName:"p"},"User-settable configuration values")," in the How-to for\n",(0,r.kt)("a",{parentName:"p",href:"/next/howtos/customization/create_custom_appcharts"},"Creating Custom Application Helm Charts"),"."),(0,r.kt)("p",null,"There are semantic differences between the app chart and service declarations.\nFor app charts the keys are simple strings for the ",(0,r.kt)("inlineCode",{parentName:"p"},"userConfig")," map.\nThey don't permit nesting."),(0,r.kt)("p",null,"For service charts the keys are proper paths into the set of fields exposed by the chart through its ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file.\nYou express nesting using full stops (",(0,r.kt)("inlineCode",{parentName:"p"},"."),").\nFor example, see ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress.enabled")," in the YAML at the start of ",(0,r.kt)("a",{parentName:"p",href:"#user-settable"},"this section"),"."),(0,r.kt)("h3",{id:"private-repositories-and-registries"},"Private repositories and registries"),(0,r.kt)("p",null,"You can use charts stored in private repositories or OCI registries.\nYou need to use a secret that provides credentials."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: application.epinio.io/v1\nkind: Service\nmetadata:\n  name: myservice\n  ...\nspec:\n  helmRepo:\n    name: myregistry\n    url: oci://ghcr.io/myregistry\n    secret: oci-secret\n")),(0,r.kt)("p",null,"Epinio looks for the ",(0,r.kt)("inlineCode",{parentName:"p"},"oci-secret")," in the namespace where it's installed.\nThis secret has to contain the registry, or repository, login ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," fields:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl create secret generic -n epinio oci-secret --from-literal=username=myusername --from-literal=password=mypassword\n")),(0,r.kt)("p",null,"For example, to use the GitHub container registry you need a Personal Access Token (PAT) with the ",(0,r.kt)("inlineCode",{parentName:"p"},"package:read/write")," scopes.\nUse the PAT as both the username and the password."))}d.isMDXComponent=!0}}]);