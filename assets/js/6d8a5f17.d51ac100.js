"use strict";(self.webpackChunkepinio_docusaurus=self.webpackChunkepinio_docusaurus||[]).push([[79922],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},78692:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],p={sidebar_label:"Application export and transfer",sidebar_position:40,title:"Application export from Epinio and transfer to another cluster",description:"How to export an application from Epinio and transfer it to another cluster.",keywords:["epinio","kubernetes","application","transfer","export"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","use-develop","application-export-transfer"],"doc-persona":["epinio-developer","epinio-operator"]},l=void 0,s={unversionedId:"howtos/use-develop/export-and-transfer",id:"howtos/use-develop/export-and-transfer",title:"Application export from Epinio and transfer to another cluster",description:"How to export an application from Epinio and transfer it to another cluster.",source:"@site/docs/howtos/use-develop/export-and-transfer.md",sourceDirName:"howtos/use-develop",slug:"/howtos/use-develop/export-and-transfer",permalink:"/next/howtos/use-develop/export-and-transfer",draft:!1,editUrl:"https://github.com/epinio/docs/edit/main/docs/howtos/use-develop/export-and-transfer.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_label:"Application export and transfer",sidebar_position:40,title:"Application export from Epinio and transfer to another cluster",description:"How to export an application from Epinio and transfer it to another cluster.",keywords:["epinio","kubernetes","application","transfer","export"],"doc-type":["how-to"],"doc-topic":["epinio","how-to","use-develop","application-export-transfer"],"doc-persona":["epinio-developer","epinio-operator"]},sidebar:"docs",previous:{title:"Install WordPress with Epinio",permalink:"/next/howtos/use-develop/install_wordpress_application"},next:{title:"Setting Up And Using Certificate Issuers",permalink:"/next/howtos/other/certificate_issuers"}},c={},d=[{value:"Export",id:"export",level:2},{value:"Import",id:"import",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Epinio provides the ability to export all parts of a running application and then use these to run\nthe application in a different cluster."),(0,a.kt)("p",null,"This only applies to the core application itself, and not to configurations\nand services it may need or was bound to in the origin cluster."),(0,a.kt)("h2",{id:"export"},"Export"),(0,a.kt)("p",null,"Exporting an application ",(0,a.kt)("inlineCode",{parentName:"p"},"APP")," is trivially done by running the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"epinio app export APP /path/to/a/directory/of/your/choice/\n")),(0,a.kt)("p",null,"After the command has run the chosen directory has the 3 parts of the application needed to run\nit elsewhere, namely:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"app-image.tar"),"; The application's runtime image as generated by the staging process and saved into a tar archive as generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"docker save"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"app-chart.tar.gz"),"; The ",(0,a.kt)("a",{parentName:"p",href:"/next/howtos/customization/create_custom_appcharts"},"application chart")," used to deploy the application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml"),"; The configuration of the application chart.\nThis part references the application image.\nThis reference is only valid for the origin cluster."))),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("p",null,"To import ",(0,a.kt)("inlineCode",{parentName:"p"},"APP")," into a new cluster"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker load app-image.tar")," to import the image and its layers into the local docker setup.\nThe output has a line referencing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Loaded image ID"),".\nThis is the hash of the loaded image and needed in the next step."),(0,a.kt)("p",{parentName:"li"},"   ",(0,a.kt)("strong",{parentName:"p"},"Note"),". Don't use ",(0,a.kt)("inlineCode",{parentName:"p"},"docker import"),", nor ",(0,a.kt)("inlineCode",{parentName:"p"},"docker image import")," for this.\nWhile these commands do store the image into the local docker similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," they don't preserve the layering,\nnor the Entrypoint information coming with these.\nIt's the Entrypoint information which makes the result unusable.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker tag HASH REGISTRY/ORG/NAME:TAG")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"HASH")," is the hash of the image as reported by the previous step.\n",(0,a.kt)("inlineCode",{parentName:"p"},"REGISTRY"),", etc. are arbitrary values chosen by the importer.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"REGISTRY")," is optional, that is, would default to dockerhub.\nIf set, it has to refer to an actual registry the destination cluster is able to pull from.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"docker push REGISTRY/ORG/NAME:TAG")," to save the image to the chosen registry.\nWithout this step the image would only exist locally and couldn't be pulled later.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"imageURL")," field in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," to replace the existing image reference,\nvalid only for the origin cluster, with ",(0,a.kt)("inlineCode",{parentName:"p"},"REGISTRY/ORG/NAME:TAG"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"domain"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"id")," information of the ",(0,a.kt)("inlineCode",{parentName:"p"},"routes")," section of ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml"),",\nto prevent clashes with the instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"APP")," running on the origin cluster.\nThis isn't necessary if ",(0,a.kt)("inlineCode",{parentName:"p"},"APP")," wasn't kept running on the origin cluster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"appName")," field in ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml"),", if required.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"helm upgrade --install NAME app-chart.tar.gz --values values.yaml")," to deploy the modified application on the destination cluster under the chosen release name."))))}m.isMDXComponent=!0}}]);