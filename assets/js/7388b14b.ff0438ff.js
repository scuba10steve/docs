"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[78290],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40347:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),s=["components"],a={title:"",sidebar_label:"epinio server"},c=void 0,l={unversionedId:"references/commands/cli/epinio_server",id:"version-1.6.0/references/commands/cli/epinio_server",title:"",description:"epinio server",source:"@site/versioned_docs/version-1.6.0/references/commands/cli/epinio_server.md",sourceDirName:"references/commands/cli",slug:"/references/commands/cli/epinio_server",permalink:"/1.6.0/references/commands/cli/epinio_server",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/versioned_docs/version-1.6.0/references/commands/cli/epinio_server.md",tags:[],version:"1.6.0",frontMatter:{title:"",sidebar_label:"epinio server"},sidebar:"docs",previous:{title:"epinio push",permalink:"/1.6.0/references/commands/cli/epinio_push"},next:{title:"epinio target",permalink:"/1.6.0/references/commands/cli/epinio_target"}},p={},u=[{value:"epinio server",id:"epinio-server",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],f={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"epinio-server"},"epinio server"),(0,o.kt)("p",null,"Starts the Epinio server."),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"This command starts the Epinio server. ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio install")," ensures the server is running inside your cluster. Normally you don't need to run this command manually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"epinio server [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --access-control-allow-origin string   (ACCESS_CONTROL_ALLOW_ORIGIN) Domains allowed to use the API\n      --app-image-exporter string            (APP_IMAGE_EXPORTER) Name of the container image used to download the application image from the \'export\' API.\n  -h, --help                                 help for server\n      --ingress-class-name string            (INGRESS_CLASS_NAME) Name of the ingress class to use for apps. Leave empty to add no ingressClassName to the ingress.\n  -n, --namespace string                     (NAMESPACE) The namespace to use (default "epinio")\n      --port int                             (PORT) The port to listen on. Leave empty to auto-assign a random port\n      --registry-certificate-secret string   (REGISTRY_CERTIFICATE_SECRET) Secret for the registry\'s TLS certificate\n      --s3-certificate-secret string         (S3_CERTIFICATE_SECRET) Secret for the S3 endpoint TLS certificate. Can be left empty if S3 is served with a trusted certificate.\n      --tls-issuer string                    (TLS_ISSUER) The cluster issuer to use for workload certificates\n      --trace-output string                  (TRACE_OUTPUT) logs output format [text,json] (default "text")\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --kubeconfig string        (KUBECONFIG) path to a kubeconfig, not required in-cluster\n      --no-colors                Suppress colorized output\n      --settings-file string     (EPINIO_SETTINGS) set path of settings file (default "~/.config/epinio/settings.yaml")\n      --skip-ssl-verification    (SKIP_SSL_VERIFICATION) Skip the verification of TLS certificates\n      --timeout-multiplier int   (EPINIO_TIMEOUT_MULTIPLIER) Multiply timeouts by this factor (default 1)\n      --trace-level int          (TRACE_LEVEL) Only print trace messages at or above this level (0 to 255, default 0, print nothing)\n      --verbosity int            (VERBOSITY) Only print progress messages at or above this level (0 or 1, default 0)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/1.6.0/references/commands/cli/epinio"},"epinio"),"\t - Epinio cli")))}m.isMDXComponent=!0}}]);