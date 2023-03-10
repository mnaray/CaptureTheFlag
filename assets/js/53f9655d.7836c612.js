"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),o=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(n),p=a,g=m["".concat(d,".").concat(p)]||m[p]||k[p]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1,title:"Dokumentation"},l=void 0,s={unversionedId:"Dokumentation",id:"Dokumentation",title:"Dokumentation",description:"Dies ist die Dokumentation des ganzen Projekts. Sie wurde nach IPERKA umgesetzt. Es wird der Ablauf und die Vorgehensweise des ganzen Projekts dokumentiert.",source:"@site/docs/Dokumentation.md",sourceDirName:".",slug:"/Dokumentation",permalink:"/CaptureTheFlag/docs/Dokumentation",draft:!1,editUrl:"https://github.com/mnaray/CaptureTheFlag/edit/main/docs/docs/Dokumentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Dokumentation"},sidebar:"tutorialSidebar",next:{title:"Anleitung",permalink:"/CaptureTheFlag/docs/Anleitung"}},d={},o=[{value:"Informieren",id:"informieren",level:2},{value:"Was versteht man unter einem CTF?",id:"was-versteht-man-unter-einem-ctf",level:3},{value:"Was ist unser Ziel?",id:"was-ist-unser-ziel",level:3},{value:"Anforderungen",id:"anforderungen",level:3},{value:"Technologien",id:"technologien",level:3},{value:"Quellen",id:"quellen",level:3},{value:"Planen",id:"planen",level:2},{value:"Arbeitspakete",id:"arbeitspakete",level:3},{value:"Testf\xe4lle",id:"testf\xe4lle",level:3},{value:"Testumgebungen",id:"testumgebungen",level:4},{value:"Entscheiden",id:"entscheiden",level:2},{value:"Docker oder VM?",id:"docker-oder-vm",level:3},{value:"PoC oder volles CTF?",id:"poc-oder-volles-ctf",level:3},{value:"Wie erstellen wir die Images?",id:"wie-erstellen-wir-die-images",level:3},{value:"Welche Registry?",id:"welche-registry",level:3},{value:"Barrieren",id:"barrieren",level:3},{value:"Barriere 1: SQL-Injection",id:"barriere-1-sql-injection",level:4},{value:"Barriere 2: Bruteforcing mit eigenen Scripts oder einem Tool",id:"barriere-2-bruteforcing-mit-eigenen-scripts-oder-einem-tool",level:4},{value:"Realisieren",id:"realisieren",level:2},{value:"Kontrollieren",id:"kontrollieren",level:2},{value:"Auswerten",id:"auswerten",level:2}],u={toc:o};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Dies ist die Dokumentation des ganzen Projekts. Sie wurde nach IPERKA umgesetzt. Es wird der Ablauf und die Vorgehensweise des ganzen Projekts dokumentiert."),(0,a.kt)("p",{parentName:"admonition"},"In diesem Gruppenprojekt erstellen wir ein Proof-Of-Concept f\xfcr ein Capture The Flag Spiel. Das eigentliche Spiel wird nicht implementiert, es wird nur bewiesen, wie und weshalb es m\xf6glich ist dieses umzusetzen.")),(0,a.kt)("h2",{id:"informieren"},"Informieren"),(0,a.kt)("p",null,"In diesem Kapitel der Dokumentation wird die Phase festgehalten, in welcher wir uns als Gruppe \xfcber das N\xf6tige informieren. Dazu geh\xf6ren auch die Anforderungen, die Zeiteinteilung und die Auflistung ",(0,a.kt)("a",{parentName:"p",href:"#quellen"},(0,a.kt)("strong",{parentName:"a"},"aller verwendeten Quellen")),"."),(0,a.kt)("h3",{id:"was-versteht-man-unter-einem-ctf"},"Was versteht man unter einem CTF?"),(0,a.kt)("p",null,"CTF steht f\xfcr ",(0,a.kt)("strong",{parentName:"p"},"Capture The Flag"),'. Das ist ein Genre an Spiel, in welchem man eine Flagge oder ein sonstiges Ziel finden und einholen muss. Von diesem Spiel gibt es viele verschiedene Versionen in diversen Bereichen. Diese reichen von Spielen in der echten Welt bis zu digitalen Versionen als Videospiel oder sogar als eine Art "Hacking Challenge" im Bereich der Cybersicherheit.'),(0,a.kt)("h3",{id:"was-ist-unser-ziel"},"Was ist unser Ziel?"),(0,a.kt)("p",null,"Unser Ziel ist es ein Proof-Of-Concept f\xfcr ein CTF zu erstellen. Mit diesem wollen wir beweisen k\xf6nnen, dass es m\xf6glich ist dieses Projekt umzusetzen. Das eigentliche erste von zwei Projekten besteht nur aus dem Proof-Of-Concept, erst ein zweites Projekt ist die Realisierung des echten CTF."),(0,a.kt)("p",null,'Unter dem Proof-Of-Concept (PoC) verstehen wir eine Art "Dummyversion" des echten Spiels. Es soll noch nicht alle Anforderungen erf\xfcllen k\xf6nnen, nur ein paar der wichtigsten. Es soll vorweisen k\xf6nnen, dass die funktionalen Anforderungen erreichbar sind.'),(0,a.kt)("h3",{id:"anforderungen"},"Anforderungen"),(0,a.kt)("p",null,"In der folgenden Tabelle sind die Anforderungen f\xfcr das Projekt vorzufinden."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nr."),(0,a.kt)("th",{parentName:"tr",align:null},"Muss/Kann"),(0,a.kt)("th",{parentName:"tr",align:null},"funk./qual."),(0,a.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"M"),(0,a.kt)("td",{parentName:"tr",align:null},"funk."),(0,a.kt)("td",{parentName:"tr",align:null},"Es soll Docker f\xfcr die Erstellung der Stufen / Barrieren verwendet werden.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"M"),(0,a.kt)("td",{parentName:"tr",align:null},"funk."),(0,a.kt)("td",{parentName:"tr",align:null},"Das PoC soll mindestens eine Flagge versteckt haben.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"M"),(0,a.kt)("td",{parentName:"tr",align:null},"funk."),(0,a.kt)("td",{parentName:"tr",align:null},"Falls mehr als eine Flagge versteckt ist, darf der L\xf6sungsweg f\xfcr diese keine \xc4hnlichkeiten zu anderen L\xf6sungswegen aufweisen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"M"),(0,a.kt)("td",{parentName:"tr",align:null},"funk."),(0,a.kt)("td",{parentName:"tr",align:null},"Die Stufen / Barrieren m\xfcssen von mindestens einer Person in unserer Klasse oder einer Informatik-LP gel\xf6st werden.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"M"),(0,a.kt)("td",{parentName:"tr",align:null},"funk."),(0,a.kt)("td",{parentName:"tr",align:null},"Damit klar ist was zu tun ist, muss eine Anleitung mit Anweisungen f\xfcr das Spiel vorhanden sein.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"M"),(0,a.kt)("td",{parentName:"tr",align:null},"qual."),(0,a.kt)("td",{parentName:"tr",align:null},'Die "Flags" m\xfcssen \xfcber das ganze Spiel hinweg im selben Format bleiben: flag{challenge_name}')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"M"),(0,a.kt)("td",{parentName:"tr",align:null},"funk."),(0,a.kt)("td",{parentName:"tr",align:null},"Es muss ein m\xf6glicher L\xf6sungsweg zu jeder Challenge dokumentiert sein.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"M"),(0,a.kt)("td",{parentName:"tr",align:null},"funk."),(0,a.kt)("td",{parentName:"tr",align:null},'Die Barrieren m\xfcssen im Zusammenhang mit dem IT-Bereich sein. Das heisst, die L\xf6sung der R\xe4tsel soll praktische Kenntnisse aus der Informatik voraussetzen und nicht "r\xe4tselhaft" oder "misteri\xf6s" sein.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"M"),(0,a.kt)("td",{parentName:"tr",align:null},"funk."),(0,a.kt)("td",{parentName:"tr",align:null},"Das fertige Spiel muss bei einer \xf6ffentlichen Quelle zur Verf\xfcgung gestellt werden. (als Container)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"K"),(0,a.kt)("td",{parentName:"tr",align:null},"qual."),(0,a.kt)("td",{parentName:"tr",align:null},"Es soll ein Regelwerk in der Anleitung f\xfcr das Spiel vorhanden sein.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"K"),(0,a.kt)("td",{parentName:"tr",align:null},"qual."),(0,a.kt)("td",{parentName:"tr",align:null},"Es sollen Hinweise als Hilfsmittel vorhanden sein. Diese d\xfcrfen jedoch nicht zu viel verraten.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null},"M"),(0,a.kt)("td",{parentName:"tr",align:null},"qual."),(0,a.kt)("td",{parentName:"tr",align:null},"Es sollen Tips in der Anleitung vorhanden sein. Diese sollen den Spieler im Fall der F\xe4lle auf den richtigen Pfad bringen.")))),(0,a.kt)("h3",{id:"technologien"},"Technologien"),(0,a.kt)("p",null,"F\xfcr dieses Projekt habe ich folgende Technologien verwendet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git (zur Versionierung)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/Message-Digest_Algorithm_5"},"MD5 Hashing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.python.org/"},"Python 3.11.2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://de.wikipedia.org/wiki/C%2B%2B#:~:text=C%2B%2B%20ist%20eine%20von,eine%20Programmierung%20auf%20hohem%20Abstraktionsniveau."},"C++")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://gcc.gnu.org/"},"gcc | g++")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nmap.org/"},"NMAP"))),(0,a.kt)("h3",{id:"quellen"},"Quellen"),(0,a.kt)("p",null,"Hier sind alle Quellen aufgelistet, welche w\xe4hrend dem Aublauf des Projekts als Hilfe oder Orientation verwendet wurden."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hub.docker.com/"},"Docker Hub")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs"},"Docusaurus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.kali.org/tools/hydra/"},"Hydra Dokumentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.kali.org/tools/legion/"},"Legion Dokumentation"))),(0,a.kt)("h2",{id:"planen"},"Planen"),(0,a.kt)("h3",{id:"arbeitspakete"},"Arbeitspakete"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nr."),(0,a.kt)("th",{parentName:"tr",align:null},"Frist"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Beschreibung"),(0,a.kt)("th",{parentName:"tr",align:null},"Geplante Zeit in Paketen"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"24.02.2023"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Informieren (von IPERKA)"),(0,a.kt)("td",{parentName:"tr",align:null},"20")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"10.03.2023"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Planen und Entscheiden (von IPERKA)"),(0,a.kt)("td",{parentName:"tr",align:null},"15")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"10.03.2023"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Realisieren (von IPERKA): Konzept beschreiben"),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"17.03.2023"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Realisieren (von IPERKA): PoC erstellen"),(0,a.kt)("td",{parentName:"tr",align:null},"11")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"17.03.2023"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Realisieren (von IPERKA): Docker-Image erstellen & in eine Registry pushen"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"24.03.2023"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Kontrollieren (von IPERKA)"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"24.03.2023"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Auswerten (von IPERKA)"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"24.03.2023"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Portfolioeintrag bis am Abend"),(0,a.kt)("td",{parentName:"tr",align:null},"6 (ggf. mehr)")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"1x Arbeitspaket = 45 Minuten = 1x Schullektion"),(0,a.kt)("p",{parentName:"admonition"},"1x Halbtag = 5x Arbeitspakete"),(0,a.kt)("p",{parentName:"admonition"},"6x Halbtage = 30x Arbeitspakete"),(0,a.kt)("p",{parentName:"admonition"},"30x Arbeitspakete * 2x Mitglieder + 6x Portfolio (3/Mitglied)= ",(0,a.kt)("strong",{parentName:"p"},"60x Arbeitspakete"))),(0,a.kt)("h3",{id:"testf\xe4lle"},"Testf\xe4lle"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Testf.",(0,a.kt)("br",null),"Nr."),(0,a.kt)("th",{parentName:"tr",align:null},"Anf.",(0,a.kt)("br",null),"Nr."),(0,a.kt)("th",{parentName:"tr",align:"left"},"Voraussetzung"),(0,a.kt)("th",{parentName:"tr",align:null},"Testumgebung"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Eingabe"),(0,a.kt)("th",{parentName:"tr",align:null},"Erw. Ausgabe"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"1.1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PoC ist vorhanden"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Image von der Registry pullen und mit",(0,a.kt)("inlineCode",{parentName:"td"},"docker run")," starten. Als n\xe4chstes den Befehl ",(0,a.kt)("inlineCode",{parentName:"td"},"docker ps")," ausf\xfchren."),(0,a.kt)("td",{parentName:"tr",align:null},"Container erscheint in der ausgegebenen Liste.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"2.1"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PoC ist am Laufen"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Mit der L\xf6sung geht man durch das Spiel bis man fertig ist."),(0,a.kt)("td",{parentName:"tr",align:null},"Eine Flagge erscheint.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"3.1"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GH-Pages-Dokumentation ist offen"),(0,a.kt)("td",{parentName:"tr",align:null},"Chrome"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Der Spieler \xf6ffnet die Unterseite L\xf6sungen und durchschaut die L\xf6sungen."),(0,a.kt)("td",{parentName:"tr",align:null},"Die Barrieren haben unterschiedliche L\xf6sungswege")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"4.1"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PoC ist am Laufen"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Ohne L\xf6sungen die Barrieren \xfcberwinden"),(0,a.kt)("td",{parentName:"tr",align:null},"IT-Lehrperson oder Klassenkamerad hat die Flagge vor sich.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"5.1"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GH-Pages-Dokumentation ist offen"),(0,a.kt)("td",{parentName:"tr",align:null},"Chrome"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Der Spieler \xf6ffnet die Unterseite mit der Anleitung und f\xfchrt die Anweisungen darin aus."),(0,a.kt)("td",{parentName:"tr",align:null},"Der Spieler ist startklar und weiss was er/sie zu tun hat.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"6.1"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PoC ist am Laufen"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Alle Flaggen finden."),(0,a.kt)("td",{parentName:"tr",align:null},"Die Flaggen sind im Format: flag{challenge_name}")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"7.1"),(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GH-Pages-Dokumentation ist offen"),(0,a.kt)("td",{parentName:"tr",align:null},"Chrome"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Der Spieler \xf6ffnet die Unterseite L\xf6sungen und sieht sie sich an."),(0,a.kt)("td",{parentName:"tr",align:null},"Benutzer kann die Barriere \xfcberwinden.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"8.1"),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:"left"},"PoC am Laufen"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Der Spieler versucht mit Hilfe von Kenntnissen aus der Informatik die Barrieren zu \xfcberwinden."),(0,a.kt)("td",{parentName:"tr",align:null},"Der Spieler findet die Flaggen.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"9.1"),(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Shell/Terminal ist offen"),(0,a.kt)("td",{parentName:"tr",align:null},"Docker"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Der Spieler gibt den Befehl",(0,a.kt)("inlineCode",{parentName:"td"},"docker pull <registry URL>")," ein."),(0,a.kt)("td",{parentName:"tr",align:null},"Das Image wird gepullt.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"10.1"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GH-Pages-Dokumentation ist offen"),(0,a.kt)("td",{parentName:"tr",align:null},"Chrome"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Der Spieler geht zur Unterseite der Anleitung und sieht sie sich an."),(0,a.kt)("td",{parentName:"tr",align:null},"Ein Regelwerk ist f\xfcr den Spieler ersichtlich.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"11.1"),(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GH-Pages-Dokumentation ist offen"),(0,a.kt)("td",{parentName:"tr",align:null},"Chrome"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Der Spieler \xf6ffnet die Anleitung und liest sich die Hinweise durch."),(0,a.kt)("td",{parentName:"tr",align:null},"Mit den Hinweisen ist der Spieler in der Lage die Barriere zu \xfcberwinden, ohne dass er die L\xf6sung erfahren hat.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"12.1"),(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:"left"},"GH-Pages-Dokumentation ist offen und das PoC ist am Laufen"),(0,a.kt)("td",{parentName:"tr",align:null},"Chrome"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Der Spieler hat ein Problem mit dem \xdcberwinden der Barriere und \xf6ffnet die Tips in der Dokumentation"),(0,a.kt)("td",{parentName:"tr",align:null},"Der Spieler ist mit dem Tip in der Lage die Barriere zu \xfcberwinden, ohne die L\xf6sung erfahren zu haben.")))),(0,a.kt)("h4",{id:"testumgebungen"},"Testumgebungen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Docker",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Version 20.10.23"),(0,a.kt)("li",{parentName:"ul"},"Build 7155243"))),(0,a.kt)("li",{parentName:"ul"},"Chrome",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Version 110.0.5481.178 (Official Build) (64-bit)")))),(0,a.kt)("p",null,"#TODO: Zus\xe4tzliche Testumgebungen m\xfcssen noch dokumentiert werden."),(0,a.kt)("h2",{id:"entscheiden"},"Entscheiden"),(0,a.kt)("h3",{id:"docker-oder-vm"},"Docker oder VM?"),(0,a.kt)("p",null,"Weil wir momentan parallel zu diesem Projekt ein Docker Modul bearbeiten, haben wir uns f\xfcr Docker entschieden. Wir wollen das Ge\xfcbte direkt anwenden und unser K\xf6nnen mit Docker optimieren."),(0,a.kt)("p",null,"Weitere Gr\xfcnde waren, dass Docker um einiges schneller ist als eine VM, dass es weniger Speicher ben\xf6tigt und dass es \xfcberall replizierbar ist."),(0,a.kt)("h3",{id:"poc-oder-volles-ctf"},"PoC oder volles CTF?"),(0,a.kt)("p",null,"Urspr\xfcnglich wollten wir bei diesem Projekt ein volles Capture the Flag erstellen. Die Idee war, entweder meherere kleine Level zu haben oder ein sehr grosses Puzzle mit nur einer Flagge zu erstellen."),(0,a.kt)("p",null,'Da wir zuvor noch nie Projekte mit solch "offenen Anforderungen" hatten, haben wir uns an die zust\xe4ndige Lehrperson gewendet und um ein wenig Rat gebeten. Er hat uns dann vorgeschlagen, dass wir ein Proof of Concept machen k\xf6nnten, damit das Projekt nicht zu gross wird. Wir haben diesen Vorschlag uns zu Herzen genommen und uns f\xfcr das Proof of Concept entschieden.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Das PoC soll nur als Beweis dienen, dass wir in der Lage sind mit den vorhandenen Ressourcen ein volles CTF zu erstellen. Es soll nur ein Container-Image sein, mit einer Dummyversion vom Spiel.")),(0,a.kt)("h3",{id:"wie-erstellen-wir-die-images"},"Wie erstellen wir die Images?"),(0,a.kt)("p",null,"Lokal oder mit einem GitHub Workflow?\nWenn wir die Images lokal bearbeiten, haben wir viel zu tun. Daf\xfcr aber die volle Kontrolle \xfcber alles.\nMit dem GitHub Workflow l\xe4uft alles automatisch. Dadurch haben wir keine zus\xe4tzlichen Arbeiten, sondern k\xf6nnen das Erstellen vom Images einfach vergessen."),(0,a.kt)("h3",{id:"welche-registry"},"Welche Registry?"),(0,a.kt)("p",null,"In Sachen Registries hatten wir zwei Optionen, welche unsere Bed\xfcrfnisse nach Komfort erf\xfcllten. Eine Option war das offizielle Docker-Hub von Docker, die andere war das Registry von GitHub. Nat\xfcrlich gibt es viele Alternativen, aber diese zwei sind einfach am einfachsten zu brauchen f\xfcr unseren Use-Case. Docker-Hub ist das offizielle Registry von Docker und ist in der Software als Default integriert. GitHub ist unser Remote-Host f\xfcr die Repository."),(0,a.kt)("p",null,"Der haupts\xe4chlichen Unterschiede liegen in diesen Punkten: die M\xf6glichkeit private Images zu haben und die Integration der Registry in docker."),(0,a.kt)("p",null,"An sich ist es f\xfcr uns kein Problem die Images \xf6ffentlich zu haben, da schon die Repository \xf6ffentlich ist. Das einzige Problem, das wir haben k\xf6nnten, ist die um einiges l\xe4ngere URL zur Registry. Bei Docker-Hub kann man die domain einfach weg lassen und nur mit dem Imagenamen arbeiten, jedoch muss man bei github immer die ganze Domain ausschreiben."),(0,a.kt)("p",null,"Es k\xf6nnte nerviger werden, immer alles auszuschreiben, jedoch w\xfcrden wir meistens die images \xfcber eine CI-Pipeline in die Registry pushen. Schlussendlich macht dies das Problem irrelevant."),(0,a.kt)("h3",{id:"barrieren"},"Barrieren"),(0,a.kt)("p",null,"Der Kern des Spiels besteht daraus, k\xfcnstliche Barrieren zu \xfcberwinden. F\xfcr diese Barrieren haben wir ganz viele Ideen, jedoch k\xf6nnen wir nur wenige in das PoC einbauen. Die restlichen Ideen k\xf6nnten dann im echten Spiel verwendet werden."),(0,a.kt)("p",null,"Hier ist eine Liste an Ideen:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"MD5 Hashing (z.B. mit Hashcat)"),(0,a.kt)("li",{parentName:"ol"},"Versteckte Directories"),(0,a.kt)("li",{parentName:"ol"},"Etwas Kompilieren"),(0,a.kt)("li",{parentName:"ol"},"Etwas Dekompilieren"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Python Scripts")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Bash Scripts")),(0,a.kt)("li",{parentName:"ol"},"Geheime Ports"),(0,a.kt)("li",{parentName:"ol"},"Subdomain enumeration"),(0,a.kt)("li",{parentName:"ol"},"Netzwerk-Mapping (z.B. mit NMAP)"),(0,a.kt)("li",{parentName:"ol"},"Abfangen von Packages (z.B. mit Wireshark)"),(0,a.kt)("li",{parentName:"ol"},"Verteilte Flaggen"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Bruteforcing (z.B. mit Hydra)")),(0,a.kt)("li",{parentName:"ol"},"Cross-Site-Scripting (z.B. mit Burpsuite)"),(0,a.kt)("li",{parentName:"ol"},"Umgebungsvariablen"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SQL-Injection"))),(0,a.kt)("p",null,"Wir haben ein wenig diskutiert und uns f\xfcr die folgenden entschieden:"),(0,a.kt)("h4",{id:"barriere-1-sql-injection"},"Barriere 1: SQL-Injection"),(0,a.kt)("p",null,"SQL-Injection haben wir vorallem deshalb gew\xe4hlt, da es uns beide (Grupenmitglieder) interessiert. Es ist etwas, auf das man bei der Entwicklung von Software achten muss, denn wenn es jemand kann, dann kann diese Person sehr vieles mit der Datenbank anstellen. Die Idee ist es, ein Netzwerk mit Docker-Compose zu erstellen. Dieses soll einen Container mit einer Datenbank und eine Node-Laufzeit mit einer einfachen Webseite haben. Das Ziel: Der Spieler soll sich als administrator einloggen k\xf6nnen, indem er SQL in die Loginfelder einf\xfcgt."),(0,a.kt)("h4",{id:"barriere-2-bruteforcing-mit-eigenen-scripts-oder-einem-tool"},"Barriere 2: Bruteforcing mit eigenen Scripts oder einem Tool"),(0,a.kt)("p",null,"Bruteforcing ist auch etwas, was man in Sachen Sicherheit beachten muss. Unsere Idee ist es, eine Flagge mit einem zuf\xe4lligen 4-stelligen Pin zu verschl\xfcsseln, damit diese noch innerhalb einer Lebenszeit erraten werden kann. Der Pin soll mit einer Burteforcing-Methode erraten werden, die Vorgehensweise dabei ist aber egal. Es k\xf6nnen zum Beispiel eigene Scripts oder ein bestehendes Tool wie ",(0,a.kt)("a",{parentName:"p",href:"https://www.kali.org/tools/hydra/"},"Hydra")," oder ",(0,a.kt)("a",{parentName:"p",href:"https://www.kali.org/tools/legion/"},"Legion")," verwendet werden."),(0,a.kt)("h2",{id:"realisieren"},"Realisieren"),(0,a.kt)("h2",{id:"kontrollieren"},"Kontrollieren"),(0,a.kt)("h2",{id:"auswerten"},"Auswerten"))}m.isMDXComponent=!0}}]);