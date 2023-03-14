---
sidebar_position: 2
Title: Anleitungen
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Anleitungen

### Installation

Damit das Spiel auf jenem Computer spielbar ist, müssen zuerst gewisse Programme auf dem System vorhanden sein und manche Einstellungen konfiguriert werden.

Zu diesen Programmen gehören [Docker](https://www.docker.com/) und bei Windows noch das [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux). Unten wird beim jeweiligen Tab für Windows, MacOS und Linux erklärt, wie man die benötigten Dinge installiert.

<Tabs
    defaultValue="windows"
    groupId="operatingSystems"
    values={[
        {label: 'Windows', value: 'windows'},
        {label: 'MacOS', value: 'macos'},
        {label: 'Linux', value: 'linux'},
    ]}>
<TabItem value="windows">
    <p>
        Für Windows muss man sich zuerst das Windows Subsystem for Linux installieren, da Docker dieses auf dem System benötigt, um laufen zu können. Wie dies gemacht wird, ist in der <a href="https://learn.microsoft.com/en-us/windows/wsl/install" >offiziellen Dokumentation von Microsoft ersichtlich</a>.<br/>
        Dabei muss man beachten, dass man die <strong>Version 2</strong> installiert, da die Version 1 nicht von Docker verwendet werden kann.
    </p>
    <p>
        Nachdem das WSL erfolgreich installiert wurde, kann man Docker Desktop installieren. Für dies gibt es auch eine <a href="https://docs.docker.com/desktop/install/windows-install/">offizielle Anleitung von Docker</a>. Diese soll wieder befolgt werden. Sobald alles installiert ist, können die weiteren Anleitungen (unten) für das Spiel befolgt werden, um fortzufahren.
    </p>
</TabItem>
<TabItem value="macos">
    <p>
        Für MacOS muss nur Docker Desktop installiert werden. Es gilt zu beachten, dass es zwei separate Anleitungen gibt. Die einte ist für Geräte mit einer Intel-CPU, die andere für Geräte, welche schon eine Apple silicon CPU haben.
    </p>
    <p>
        Am einfachsten kann man herausfinden, welche CPU man hat, indem man eine kurze Internetrecherche über das Modell des Geräts durchführt.<br/>
        Sobald man weiss, ob man nun eine Intel- oder Apple silicon CPU hat, kann man sich über die Installation von Docker Desktop für MacOS bei der <a href="https://docs.docker.com/desktop/install/mac-install/">offiziellen Anleitung von Docker</a> informieren. Sobald alles installiert ist, können die weiteren Anleitungen (unten) für das Spiel befolgt werden, um fortzufahren.
    </p>
</TabItem>
<TabItem value="linux">
<p>
    Bei Linux sieht die ganze Sache ein wenig anders aus, als bei Windows und MacOS. Man braucht theoretisch kein Docker Desktop, sondern nur die Docker Engine (welche bein Docker Desktop mit inbegriffen ist). Es gibt zwar eine Version von <a href="https://docs.docker.com/desktop/install/linux-install/">Docker Desktop für Linux</a>, diese ist aber für unseren Usecase nicht relevant, da es einfacher ist die Befehle aus dieser Anleitung zu kopieren.
</p>
<p>
    Bei Bedarf, kann Docker Desktop installiert werden, aber wir empfehlen die folgenden Befehle einzugeben, um nur die Docker Engine zu installieren.
</p>
<div>
    <Admonition type="info">
        <p>
            Die folgenden Befehle sind mit einem Package Manager namens <a href="https://ubuntu.com/server/docs/package-management">Advance Packaging Tool (apt)</a> und <a href="https://de.wikipedia.org/wiki/Bash_(Shell)">BASH</a> vorgezeigt. Um einen anderen Package Manager zu verwenden, ist eigenständige Recherche benötigt. (Der Ablauf ist jedoch ähnlich und das Resultat praktisch überall gleich.)
        </p>
    </Admonition>
</div>
<p>

Um allfällige, bisher installierte Versionen von Docker zu entfernen:
```bash
sudo apt-get remove docker docker-engine docker.io containerd runc
```

</p>
<p>

Updates am Package Manager durchführen
```bash
sudo apt-get update
```

</p>
<p>

Aktuellste Version von Docker installieren:
```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

</p>
<p>

Testen, ob Docker richtig installiert wurde:
```bash
sudo docker run hello-world
```

</p>
<p>

Wenn folgende (oder ähnliche) Nachricht ausgegeben wird, ist alles in Ordnung. Das Spiel kann angefangen werden.
```
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

</p>
</TabItem>
</Tabs>

## Bruteforce

### Aufgabenstellung

Das Ziel ist, die Flagge zu finden. Diese sieht so aus: flag{bruteforce_challenge}
Um an die Flagge heranzukommen, muss ein vierstelliger Code geknackt werden. Deine Aufgabe ist es dies zu tun.

### Hilfestellungen

<details><summary>1. Hinweis</summary>
<p>
Schau auf den Namen dieser Aufgabenstellung. Was ist der Titel? Google was es bedeutet. 
</p>
</details>

<details><summary>2. Hinweis</summary>
<p>
Am schnellsten geht es ein Programm oder Script zu schreiben, welches die Arbeit vom Codeknacken für dich übernimmt. 
Dabei kannst du die Programmiersprache und die Entwicklungsumgebung frei wählen. 
Folgende Suchbegriffe können dir dabei behilflich sein:
- 
</p>
</details>

<details><summary>3. Hinweis</summary>
<p>
Benutze Hashcat, um den Code zu knacken. Das ist ein sehr gutes und schnelles "hacking-" Tool, welches dir behilflich sein wird. 
[Hashcat Download](https://hashcat.net/hashcat/)
</p>
</details>
