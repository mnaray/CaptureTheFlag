"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[782],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),p=i,h=c["".concat(o,".").concat(p)]||c[p]||m[p]||r;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3612:(e,n,t)=>{t.d(n,{Z:()=>h});var a=t(7294),i=t(6010),r=t(5281),l=t(5999);const s="admonition_LlT9",o="admonitionHeading_tbUL",u="admonitionIcon_kALy",d="admonitionContent_S0QG";const c={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function p(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=a.Children.toArray(e),t=n.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:i}}(e.children);return{...e,title:e.title??n,children:t}}function h(e){const{children:n,type:t,title:l,icon:h}=p(e),g=function(e){const n=m[e]??e,t=c[n];return t||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),c.info)}(t),f=l??g.label,{iconComponent:k}=g,b=h??a.createElement(k,null);return a.createElement("div",{className:(0,i.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${g.infimaClassName}`,s)},a.createElement("div",{className:o},a.createElement("span",{className:u},b),f),a.createElement("div",{className:d},n))}},8102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>I,contentTitle:()=>C,default:()=>L,frontMatter:()=>S,metadata:()=>A,toc:()=>x});var a=t(7462),i=t(7294),r=t(3905),l=t(6010),s=t(2466),o=t(6550),u=t(1980),d=t(7392),c=t(12);function m(e){return function(e){return i.Children.map(e,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}function p(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??m(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=p(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[o,u]=g({queryString:t,groupId:a}),[d,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,c.Nk)(t);return[a,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),f=(()=>{const e=o??d;return h({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var k=t(2389);const b="tabList__CuJ",w="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const n=e.currentTarget,t=d.indexOf(n),a=u[t].value;a!==r&&(c(n),o(a))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:s}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,key:n,ref:e=>d.push(e),onKeyDown:p,onClick:m},s,{className:(0,l.Z)("tabs__item",w,s?.className,{"tabs__item--active":r===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function D(e){const n=f(e);return i.createElement("div",{className:(0,l.Z)("tabs-container",b)},i.createElement(v,(0,a.Z)({},e,n)),i.createElement(y,(0,a.Z)({},e,n)))}function E(e){const n=(0,k.Z)();return i.createElement(D,(0,a.Z)({key:String(n)},e))}const N="tabItem_Ymn6";function z(e){let{children:n,hidden:t,className:a}=e;return i.createElement("div",{role:"tabpanel",className:(0,l.Z)(N,a),hidden:t},n)}var T=t(3612);const S={sidebar_position:2,Title:"Anleitungen"},C="Anleitungen",A={unversionedId:"Anleitung",id:"Anleitung",title:"Anleitungen",description:"Installation",source:"@site/docs/Anleitung.md",sourceDirName:".",slug:"/Anleitung",permalink:"/CaptureTheFlag/docs/Anleitung",draft:!1,editUrl:"https://github.com/mnaray/CaptureTheFlag/edit/main/docs/docs/Anleitung.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,Title:"Anleitungen"},sidebar:"tutorialSidebar",next:{title:"L\xf6sungen",permalink:"/CaptureTheFlag/docs/L\xf6sungen"}},I={},x=[{value:"Installation",id:"installation",level:3},{value:"Bruteforce",id:"bruteforce",level:2},{value:"Aufgabenstellung",id:"aufgabenstellung",level:3},{value:"Hilfestellungen",id:"hilfestellungen",level:3},{value:"SQL-Injection",id:"sql-injection",level:2},{value:"Aufgabenstellung",id:"aufgabenstellung-1",level:3},{value:"Hilfestellungen",id:"hilfestellungen-1",level:3}],O={toc:x};function L(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},O,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anleitungen"},"Anleitungen"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Damit das Spiel auf jenem Computer spielbar ist, m\xfcssen zuerst gewisse Programme auf dem System vorhanden sein und manche Einstellungen konfiguriert werden."),(0,r.kt)("p",null,"Zu diesen Programmen geh\xf6ren ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," und bei Windows noch das ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux"},"WSL"),". Unten wird beim jeweiligen Tab f\xfcr Windows, MacOS und Linux erkl\xe4rt, wie man die ben\xf6tigten Dinge installiert."),(0,r.kt)(E,{defaultValue:"windows",groupId:"operatingSystems",values:[{label:"Windows",value:"windows"},{label:"MacOS",value:"macos"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,r.kt)(z,{value:"windows",mdxType:"TabItem"},(0,r.kt)("p",null,"F\xfcr Windows muss man sich zuerst das Windows Subsystem for Linux installieren, da Docker dieses auf dem System ben\xf6tigt, um laufen zu k\xf6nnen. Wie dies gemacht wird, ist in der ",(0,r.kt)("a",{href:"https://learn.microsoft.com/en-us/windows/wsl/install"},"offiziellen Dokumentation von Microsoft ersichtlich"),".",(0,r.kt)("br",null),"Dabei muss man beachten, dass man die ",(0,r.kt)("strong",null,"Version 2")," installiert, da die Version 1 nicht von Docker verwendet werden kann."),(0,r.kt)("p",null,"Nachdem das WSL erfolgreich installiert wurde, kann man Docker Desktop installieren. F\xfcr dies gibt es auch eine ",(0,r.kt)("a",{href:"https://docs.docker.com/desktop/install/windows-install/"},"offizielle Anleitung von Docker"),". Diese soll wieder befolgt werden. Sobald alles installiert ist, k\xf6nnen die weiteren Anleitungen (unten) f\xfcr das Spiel befolgt werden, um fortzufahren.")),(0,r.kt)(z,{value:"macos",mdxType:"TabItem"},(0,r.kt)("p",null,"F\xfcr MacOS muss nur Docker Desktop installiert werden. Es gilt zu beachten, dass es zwei separate Anleitungen gibt. Die einte ist f\xfcr Ger\xe4te mit einer Intel-CPU, die andere f\xfcr Ger\xe4te, welche schon eine Apple silicon CPU haben."),(0,r.kt)("p",null,"Am einfachsten kann man herausfinden, welche CPU man hat, indem man eine kurze Internetrecherche \xfcber das Modell des Ger\xe4ts durchf\xfchrt.",(0,r.kt)("br",null),"Sobald man weiss, ob man nun eine Intel- oder Apple silicon CPU hat, kann man sich \xfcber die Installation von Docker Desktop f\xfcr MacOS bei der ",(0,r.kt)("a",{href:"https://docs.docker.com/desktop/install/mac-install/"},"offiziellen Anleitung von Docker")," informieren. Sobald alles installiert ist, k\xf6nnen die weiteren Anleitungen (unten) f\xfcr das Spiel befolgt werden, um fortzufahren.")),(0,r.kt)(z,{value:"linux",mdxType:"TabItem"},(0,r.kt)("p",null,"Bei Linux sieht die ganze Sache ein wenig anders aus, als bei Windows und MacOS. Man braucht theoretisch kein Docker Desktop, sondern nur die Docker Engine (welche bein Docker Desktop mit inbegriffen ist). Es gibt zwar eine Version von ",(0,r.kt)("a",{href:"https://docs.docker.com/desktop/install/linux-install/"},"Docker Desktop f\xfcr Linux"),", diese ist aber f\xfcr unseren Usecase nicht relevant, da es einfacher ist die Befehle aus dieser Anleitung zu kopieren."),(0,r.kt)("p",null,"Bei Bedarf, kann Docker Desktop installiert werden, aber wir empfehlen die folgenden Befehle einzugeben, um nur die Docker Engine zu installieren."),(0,r.kt)("div",null,(0,r.kt)(T.Z,{type:"info",mdxType:"Admonition"},(0,r.kt)("p",null,"Die folgenden Befehle sind mit einem Package Manager namens ",(0,r.kt)("a",{href:"https://ubuntu.com/server/docs/package-management"},"Advance Packaging Tool (apt)")," und ",(0,r.kt)("a",{href:"https://de.wikipedia.org/wiki/Bash_(Shell)"},"BASH")," vorgezeigt. Um einen anderen Package Manager zu verwenden, ist eigenst\xe4ndige Recherche ben\xf6tigt. (Der Ablauf ist jedoch \xe4hnlich und das Resultat praktisch \xfcberall gleich.)"))),(0,r.kt)("p",null,(0,r.kt)("p",null,"Um allf\xe4llige, bisher installierte Versionen von Docker zu entfernen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get remove docker docker-engine docker.io containerd runc\n"))),(0,r.kt)("p",null,(0,r.kt)("p",null,"Updates am Package Manager durchf\xfchren"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\n"))),(0,r.kt)("p",null,(0,r.kt)("p",null,"Aktuellste Version von Docker installieren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin\n"))),(0,r.kt)("p",null,(0,r.kt)("p",null,"Testen, ob Docker richtig installiert wurde:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run hello-world\n"))),(0,r.kt)("p",null,(0,r.kt)("p",null,"Wenn folgende (oder \xe4hnliche) Nachricht ausgegeben wird, ist alles in Ordnung. Das Spiel kann angefangen werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Hello from Docker!\nThis message shows that your installation appears to be working correctly.\n\nTo generate this message, Docker took the following steps:\n 1. The Docker client contacted the Docker daemon.\n 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.\n    (amd64)\n 3. The Docker daemon created a new container from that image which runs the\n    executable that produces the output you are currently reading.\n 4. The Docker daemon streamed that output to the Docker client, which sent it\n    to your terminal.\n\nTo try something more ambitious, you can run an Ubuntu container with:\n $ docker run -it ubuntu bash\n\nShare images, automate workflows, and more with a free Docker ID:\n https://hub.docker.com/\n\nFor more examples and ideas, visit:\n https://docs.docker.com/get-started/\n'))))),(0,r.kt)("h2",{id:"bruteforce"},"Bruteforce"),(0,r.kt)("h3",{id:"aufgabenstellung"},"Aufgabenstellung"),(0,r.kt)("p",null,"Das Ziel ist, die Flagge zu finden. Diese sieht so aus: flag{bruteforce_challenge}\nUm an die Flagge heranzukommen, muss ein Pin zwischen 0 und 9999 gefunden werden. Deine Aufgabe ist es dies zu tun, indem du eine Bruteforce-Methode anwendest."),(0,r.kt)("p",null,"Das Level ist \xfcberwunden, wenn folgende Flagge gefunden wurde:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"flag{bruteforce_challenge}")),(0,r.kt)("p",null,"Zus\xe4tzliche Informationen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Es wurde ",(0,r.kt)("strong",{parentName:"li"},"OpenSSL")," zum Verschl\xfcsseln der Flagge verwendet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"aes-256-cbc")," wurde als Methode genommen."),(0,r.kt)("li",{parentName:"ul"},"Der Pin muss nicht unbedingt vierstellig sein."),(0,r.kt)("li",{parentName:"ul"},"Das zu entschl\xfcsselnde File befindet sich im Filesystem des Containers unter ",(0,r.kt)("em",{parentName:"li"},"/home/root")),(0,r.kt)("li",{parentName:"ul"},"Es wird ",(0,r.kt)("strong",{parentName:"li"},"nicht")," BASH im Container verwendet, sondern die ",(0,r.kt)("strong",{parentName:"li"},"Alpine Shell"),".")),(0,r.kt)("p",null,"Um zu starten:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --name ash mnaray/bruteforce:latest\n")),(0,r.kt)("h3",{id:"hilfestellungen"},"Hilfestellungen"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"1. Hinweis"),(0,r.kt)("p",null,"Bei der Verwendung vom openssl-Befehl ist zu beachten, dass die Ver- und Entschl\xfcsselung auf einer bin\xe4ren Ebene geschieht. Damit du das Resultat dann auch lesen kannst, muss ",(0,r.kt)("code",null,"-a")," im Befehl verwendet werden. Dies en(t)kodiert die Ausgabe zu Base-64.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"2. Hinweis"),(0,r.kt)("p",null,"Schau auf den Namen dieser Aufgabenstellung. Was ist der Titel? Google was es ist. Vergiss nicht, dass der geheime Pin sich zwischen 0 und 9999 befindet.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"3. Hinweis"),(0,r.kt)("p",null,"Am schnellsten geht es, ein Script zu schreiben, welches die Arbeit vom Ausprobieren aller Optionen f\xfcr dich \xfcbernimmt. Es muss aber nicht unbedingt ein Script sein, es gibt sonst auch noch viele Bibliotheken und Tools, mit denen so etwas gemacht werden kann."),(0,r.kt)("p",null,"Hier ist es einfacher ein kurzes Script zu schreiben, da es nur 10000 m\xf6gliche Kombinationen f\xfcr den Code gibt. In einer Situation, in der es vielleicht sogar milliarden von Optionen gibt, ist z.B. ein Bruteforcing-Tool empfehlenswert.")),(0,r.kt)("h2",{id:"sql-injection"},"SQL-Injection"),(0,r.kt)("h3",{id:"aufgabenstellung-1"},"Aufgabenstellung"),(0,r.kt)("p",null,"Das Ziel ist, die Flagge zu finden. Diese sieht so aus: flag{sql_injection_challenge}\nUm an die Flagge heranzukommen muss das Login via einer SQL-Injection umgangen werden."),(0,r.kt)("p",null,"Das Level ist \xfcberwunden, wenn folgende Flagge gefunden wurde:\n",(0,r.kt)("inlineCode",{parentName:"p"},"flag{sql_injection_challenge}")),(0,r.kt)("p",null,"Zus\xe4tzliche Informationen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Es darf nicht mit einer direkten auf die Datenbank zugegriffen werden."),(0,r.kt)("li",{parentName:"ul"},'Du sollst dich als "admin" einloggen.'),(0,r.kt)("li",{parentName:"ul"},"Das Passwort soll nicht geraten werden. Es gilt das Login zu umgehen."),(0,r.kt)("li",{parentName:"ul"},"Es laufen zwei Container in einem Netzwerk; die Datenbank und die Node-Laufzeit (Webserver)"),(0,r.kt)("li",{parentName:"ul"},"Die Container m\xfcssen mit ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-compose")," gestartet werden.")),(0,r.kt)("p",null,"Um zu starten:"),(0,r.kt)("p",null,"Erstelle eine Datei mit dem Namen ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml"),".",(0,r.kt)("br",{parentName:"p"}),"\n","In diese Datei sollst du folgenden Inhalt einf\xfcgen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.8'\n\nservices:\n  database:\n    image: mnaray/sql_injection_db:latest\n    container_name: usersdb\n    restart: always\n    environment:\n      - MYSQL_ALLOW_EMPTY_PASSWORD=true\n\n  server:\n    image: mnaray/sql_injection_server:latest\n    container_name: server\n    restart: always\n    depends_on:\n      - database\n    links:\n      - database\n    ports:\n      - \"80:80\"\n")),(0,r.kt)("p",null,"Sobald du den Inhalt eingef\xfcgt hast, navigiere mit der Kommandozeile an den Ort der Datei.",(0,r.kt)("br",{parentName:"p"}),"\n","Dort sollst du folgenden Befehl ausf\xfchren:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,r.kt)("p",null,"Es kann ein wenig dauern bis alles ausgef\xfchrt wurde, wenn du die Dockerimages noch nicht auf deinem Ger\xe4t hast. Das ist nicht schlimm, es wird alles automatisch heruntergeladen und installiert, wenn der Inhalt von der docker-compose-Datei stimmt."),(0,r.kt)("p",null,"Wenn alles vollst\xe4ndig hochgefahren ist, kannst du nun einen beliebigen Browser \xf6ffnen und ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost"),' als URL eingeben. Es soll sich eine einfache Loginseite \xf6ffnen, welche der Startpunkt der Challenge ist. Dort kannst du dann versuchen, das Login zu umgehen und dich als "admin" anzumelden.'),(0,r.kt)("h3",{id:"hilfestellungen-1"},"Hilfestellungen"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"1. Hinweis"),(0,r.kt)("p",null,"Weisst du was SQL-Injection ist? Falls nicht, dann sollst du dich kurz informieren und versuchen die gefundenen Informationen im n\xe4chsten Schritt anzuwenden."),(0,r.kt)("p",null,"Schreibe dir eine Query auf, die m\xf6glicherweise verwendet wird, um die Datenbank nach den Logindaten abzufragen. Wie kannst du nun diese Query mit (zum Beispiel) den Eingabefeldern manipulieren?")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"2. Hinweis"),(0,r.kt)("p",null,'Die eigentliche Injection findet hier im Passwortfeld statt. Der Nutzername soll "admin" sein.')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"3. Hinweis"),(0,r.kt)("p",null,"Die Query im f\xfcr das Loginfenster sieht so aus:",(0,r.kt)("br",null),(0,r.kt)("code",null,"SELECT username, password FROM users",(0,r.kt)("br",null),"WHERE username = '[Eingabe Nutzername]'",(0,r.kt)("br",null),"HAVING password = '[Eingabe Passwort]';"))))}L.isMDXComponent=!0}}]);