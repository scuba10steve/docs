"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[8859],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59289:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={sidebar_label:"Setup external S3 storage",title:""},l=void 0,p={unversionedId:"howtos/setup_external_s3",id:"version-0.8.0/howtos/setup_external_s3",title:"",description:"How to setup external S3 storage",source:"@site/versioned_docs/version-0.8.0/howtos/setup_external_s3.md",sourceDirName:"howtos",slug:"/howtos/setup_external_s3",permalink:"/howtos/setup_external_s3",editUrl:"https://github.com/epinio/epinio-docs/versioned_docs/version-0.8.0/howtos/setup_external_s3.md",tags:[],version:"0.8.0",frontMatter:{sidebar_label:"Setup external S3 storage",title:""},sidebar:"docs",previous:{title:"Push with gitjob",permalink:"/howtos/gitjob_push"},next:{title:"Setup external container registry",permalink:"/howtos/setup_external_registry"}},c={},u=[{value:"How to setup external S3 storage",id:"how-to-setup-external-s3-storage",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-setup-external-s3-storage"},"How to setup external S3 storage"),(0,o.kt)("p",null,"One of the steps involved in running ",(0,o.kt)("inlineCode",{parentName:"p"},"epinio push")," is storing the requested version of the code\nin the configured Epinio S3 compatible storage. By default, Epinio installs and configures ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/minio/minio"},"Minio"),"\nto be used for this purpose. This document describes how to point Epinio to another S3 compatible storage and skip the Minio installation."),(0,o.kt)("p",null,"The Epinio Helm chart has the following optional parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Variable name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Mandatory"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"minio.enabled")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Whether to install Minio or not"),(0,o.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"true"')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"s3.bucket")),(0,o.kt)("td",{parentName:"tr",align:"left"},"S3 bucket where you want to store your apps"),(0,o.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"epinio"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"s3.endpoint")),(0,o.kt)("td",{parentName:"tr",align:"left"},"S3 endpoint"),(0,o.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"minio.epinio.svc.cluster.local"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"s3.accessKeyID")),(0,o.kt)("td",{parentName:"tr",align:"left"},"S3 access key id to authenticate to the endpoint"),(0,o.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},"random value when Minio is enabled")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"s3.secretAccessKey")),(0,o.kt)("td",{parentName:"tr",align:"left"},"S3 secret access key id to authenticate to the endpoint"),(0,o.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,o.kt)("td",{parentName:"tr",align:"center"},"random value when Minio is enabled")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"s3.useSSL")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Use SSL for encryption"),(0,o.kt)("td",{parentName:"tr",align:"center"},"no"),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"true"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"s3.region")),(0,o.kt)("td",{parentName:"tr",align:"left"},"S3 region where your bucket is"),(0,o.kt)("td",{parentName:"tr",align:"center"},"no"),(0,o.kt)("td",{parentName:"tr",align:"center"},'""')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"s3.certificateSecret")),(0,o.kt)("td",{parentName:"tr",align:"left"},"An existing TLS secret to be trusted (if self signed)"),(0,o.kt)("td",{parentName:"tr",align:"center"},"no"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"minio-tls" if Minio is enabled')))),(0,o.kt)("p",null,"To configure Epinio to store application sources to an external S3 compatible storage, at least the mandatory options should be set."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: Some implementations don't need the location (e.g. Minio) and ",(0,o.kt)("inlineCode",{parentName:"p"},"s3.useSSL"),' has a default value of "true".')),(0,o.kt)("p",null,"For instance, add the following options to your Helm command to make Epinio pointing to AWS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--set minio.enabled=false \\\n--set s3.endpoint=s3.amazonaws.com \\\n--set s3.bucket=<your_bucket_here> \\\n--set s3.region=<your_region_here> \\\n--set s3.accessKeyID=<your_access_key_here> \\\n--set s3.secretAccessKey=<your_secret_access_key_here> \\\n")),(0,o.kt)("p",null,"If the bucket doesn't exist, Epinio will try to create it when it first tries\nto write to it. Make sure the access key and the access secret have enough permissions\nto create a bucket and then write to it."),(0,o.kt)("p",null,"When you successfully push a new version of your application, Epinio will remove the resources of the previous staging process from the Kubernetes cluster and\nwill also delete the previous version of the sources from S3. This way, Epinio doesn't store more than it needs on the S3 storage and the user doesn't need to manually cleanup."))}m.isMDXComponent=!0}}]);