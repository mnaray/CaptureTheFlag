"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[711],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),d=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(o.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),p=i,m=c["".concat(o,".").concat(p)]||c[p]||g[p]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=p;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[c]="string"==typeof e?e:i,s[1]=l;for(var d=2;d<a;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const a={sidebar_position:3,Title:"L\xf6sungen"},s="L\xf6sungen",l={unversionedId:"L\xf6sungen",id:"L\xf6sungen",title:"L\xf6sungen",description:"Bruteforce",source:"@site/docs/L\xf6sungen.md",sourceDirName:".",slug:"/L\xf6sungen",permalink:"/CaptureTheFlag/docs/L\xf6sungen",draft:!1,editUrl:"https://github.com/mnaray/CaptureTheFlag/edit/main/docs/docs/L\xf6sungen.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,Title:"L\xf6sungen"},sidebar:"tutorialSidebar",previous:{title:"Anleitungen",permalink:"/CaptureTheFlag/docs/Anleitung"}},o={},d=[{value:"Bruteforce",id:"bruteforce",level:2},{value:"Erkl\xe4rung",id:"erkl\xe4rung",level:3},{value:"Script",id:"script",level:3},{value:"SQL injection",id:"sql-injection",level:2},{value:"Erkl\xe4rung",id:"erkl\xe4rung-1",level:3},{value:"Eingaben",id:"eingaben",level:3}],u={toc:d};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"l\xf6sungen"},"L\xf6sungen"),(0,i.kt)("h2",{id:"bruteforce"},"Bruteforce"),(0,i.kt)("p",null,"Ein Brute-Force-Angriff ist eine Angriffsmethode bei der durch Ausprobieren (Trial and Error, Versuch und Irrtum) versucht wird, um verschl\xfcsselte Daten wie Passw\xf6rter oder Schl\xfcssel durch \u201erohe Gewalt\u201c zu entschl\xfcsseln, anstatt intellektuelle Strategien anzuwenden. In diesem Teil unseres Spiels war es deine Aufgabe diese Methode anzuwenden. Wie du das angegangen bist ist deine Entscheidung gewesen. Wir haben dir empfohlen ein Code zu schreiben, der die Arbeit des Enschl\xfcsselns f\xfcr dich \xfcbernimmt. Hier ist unsere L\xf6sung:"),(0,i.kt)("h3",{id:"erkl\xe4rung"},"Erkl\xe4rung"),(0,i.kt)("p",null,"Das untenstehende Script geht alle m\xf6glichen Zahlenkombinationen (0 - 9999) durch, bis das Passwort erraten worden ist. Wenn die Zahlenkombination korrekt ist, wird die Zahlenkombination ausgegeben. Wenn die Zahlenkombination nicht korrekt ist, wird der Vorgang wiederholt."),(0,i.kt)("p",null,"Es wird openssl mit der Methode aes-256-cbc verwendet. Bei jeder Iteration wird eine h\xf6here Zahl alls passphrase eingegeben. Sobald das entschl\xfcsselte Resultat im Format der gew\xfcnschten Flagge ist, wird die Schleife gestoppt und die entschl\xfcsselte Datei mit der Flagge in ",(0,i.kt)("inlineCode",{parentName:"p"},"out.txt")," gespeichert."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Jedes Mal, wenn der Container gestartet wird, \xe4ndert sich die Zahlenkombination. Nur weil ein Mal eine Kombination funktioniert hat, wird sie ein anderes Mal nicht dieselbe sein.")),(0,i.kt)("h3",{id:"script"},"Script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="solution.sh"',title:'"solution.sh"'},'for n in $(seq 10000); do\n    i=$(($n - 1))\n    DECRYPTED=$(cat flag.txt.enc | openssl aes-256-cbc -d -a -pass pass:$i)\n    if [ $DECRYPTED == "flag{bruteforce_challenge}" ]; then\n        echo "The pin is: $i"\n        echo $DECRYPTED >out.txt\n        break\n    else\n        echo "Wrong password: $i"\n    fi\ndone\n')),(0,i.kt)("p",null,"Dieses Script muss sich in der gleichen Directory befinden wie ",(0,i.kt)("inlineCode",{parentName:"p"},"flag.txt.sh"),". Im Normalfall m\xfcssen noch Rechte and die Datei ausgeteilt werden, damit diese ausgef\xfchrt werden kann. (",(0,i.kt)("inlineCode",{parentName:"p"},"chmod +x meineDatei.bsp"),")"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Bitte beachten, dass dieses Script nicht in BASH, sondern in ASH geschrieben ist. Das ist die Shell f\xfcr die Alpine distribution.")),(0,i.kt)("h2",{id:"sql-injection"},"SQL injection"),(0,i.kt)("p",null,"Bei einer SQL-Injection (kurz SQLi) nutzen Cyberkriminelle gezielt Sicherheitsl\xfccken im Quelltext von Software aus, um etwa \xfcber Eingabemasken eigene Befehle oder Schadcode in Programme einzubinden. Auf diese Weise gelangen Angreifer an wertvolle Datens\xe4tze."),(0,i.kt)("h3",{id:"erkl\xe4rung-1"},"Erkl\xe4rung"),(0,i.kt)("p",null,"Bei einem Eingabefeld, welches anf\xe4llig f\xfcr SQL-Injection ist, wird normalerweise der Inhalt vom Feld in einer Variable gespeichert. Diese Variable wird dann direkt in den String, welcher die Query enthaltet verkettet (concatenate). Deshalb kann man mit ein wenig Geschick eine Eingabe machen, welche Teile eines SQL Befehls beinhaltet."),(0,i.kt)("p",null,"Das eingegebene wird so mit in die Query genommen und von der Datenbank ausgef\xfchrt. So kann man Abfrageresultate oder sogar den Datenbestand manipulieren."),(0,i.kt)("p",null,"Um dieses Level l\xf6sen zu k\xf6nnen, musst du der Anleitung Schritt f\xfcr Schritt folgen. Erst wenn du dir sicher bist, dass du alle wichtigen Dateien und Informationen hast, kannst du loslegen."),(0,i.kt)("p",null,"Um das Passwort umgehen zu k\xf6nnen, musstest du die Injection im Passwortfeld anwenden. Der Benutzernme ist \"admin\". Im Passwortfeld musst du folgende Query eingeben: 'OR' 1'='1"),(0,i.kt)("p",null,"Weil die Eingabe des Korrekten Passworts ein true von der Datenbnank zur\xfcckschickt, ist es dem Benutzer m\xf6glich sich einzuloggen. Diese Abfrage trickt die Datenbank aus, mit dem Schl\xfcsselbefehl OR 1=1. Das Funktioniert, weil das OR 1=1 ein true zur\xfcckgibt, weil 1=1 ist. Somit ist es dir (dem Angreifer) m\xf6glich sich anzumelden."),(0,i.kt)("p",null,"Die Eingabe deiser Query l\xf6st die folgende Abfrage aus:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT username, password FROM users\nWHERE username = '[Eingabe Nutzername]'\nHAVING password = '[Eingabe Passwort]';\n")),(0,i.kt)("h3",{id:"eingaben"},"Eingaben"),(0,i.kt)("p",null,"Username:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"admin\n")),(0,i.kt)("p",null,"Password:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"' OR '1'='1\n")),(0,i.kt)("p",null,"L\xf6sungsquery, welche im Hintergrund dann ausgef\xfchrt wird:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT username, password FROM users\nWHERE username = 'admin'\nHAVING password = '' OR '1'='1';\n")))}c.isMDXComponent=!0}}]);