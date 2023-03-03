``
--

sidebar_position: 1
title: Dokumentation
--------------------

:::note

Dies ist die Dokumentation des ganzen Projekts. Sie wurde nach IPERKA umgesetzt. Es wird der Ablauf und die Vorgehensweise des ganzen Projekts dokumentiert.

In diesem Gruppenprojekt erstellen wir ein Proof-Of-Concept für ein Capture The Flag Spiel. Das eigentliche Spiel wird nicht implementiert, es wird nur bewiesen, wie und weshalb es möglich ist dieses umzusetzen.

:::

## Informieren

In diesem Kapitel der Dokumentation wird die Phase festgehalten, in welcher wir uns als Gruppe über das Nötige informieren. Dazu gehören auch die Anforderungen, die Zeiteinteilung und die Auflistung [**aller verwendeten Quellen**](#quellen).

### Was versteht man unter einem CTF?

CTF steht für **Capture The Flag**. Das ist ein Genre an Spiel, in welchem man eine Flagge oder ein sonstiges Ziel finden und einholen muss. Von diesem Spiel gibt es viele verschiedene Versionen in diversen Bereichen. Diese reichen von Spielen in der echten Welt bis zu digitalen Versionen als Videospiel oder sogar als eine Art "Hacking Challenge" im Bereich der Cybersicherheit.

### Was ist unser Ziel?

Unser Ziel ist es ein Proof-Of-Concept für ein CTF zu erstellen. Mit diesem wollen wir beweisen können, dass es möglich ist dieses Projekt umzusetzen. Das eigentliche erste von zwei Projekten besteht nur aus dem Proof-Of-Concept, erst ein zweites Projekt ist die Realisierung des echten CTF.

Unter dem Proof-Of-Concept (PoC) verstehen wir eine Art "Dummyversion" des echten Spiels. Es soll noch nicht alle Anforderungen erfüllen können, nur ein paar der wichtigsten. Es soll vorweisen können, dass die funktionalen Anforderungen erreichbar sind.

### Anforderungen

In der folgenden Tabelle sind die Anforderungen für das Projekt vorzufinden.


| Nr. | Muss/Kann | funk./qual. | Beschreibung                                                                                                                                                                                                           |
| ----- | ----------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | M         | funk.       | Es soll Docker für die Erstellung der Stufen / Barrieren verwendet werden.                                                                                                                                            |
| 2   | M         | funk.       | Das PoC soll mindestens eine Flagge versteckt haben.                                                                                                                                                                   |
| 3   | M         | funk.       | Falls mehr als eine Flagge versteckt ist, darf der Lösungsweg für diese keine Ähnlichkeiten zu anderen Lösungswegen aufweisen.                                                                                     |
| 4   | M         | funk.       | Die Stufen / Barrieren müssen von mindestens einer Person in unserer Klasse oder einer Informatik-LP gelöst werden.                                                                                                  |
| 5   | M         | funk.       | Damit klar ist was zu tun ist, muss eine Anleitung mit Anweisungen für das Spiel vorhanden sein.                                                                                                                      |
| 6   | M         | qual.       | Die "Flags" müssen über das ganze Spiel hinweg im selben Format bleiben: flag{challenge_name}                                                                                                                        |
| 7   | M         | funk.       | Es muss ein möglicher Lösungsweg zu jeder Challenge dokumentiert sein.                                                                                                                                               |
| 8   | M         | funk.       | Die Stufen / Barrieren müssen im Zusammenhang mit dem IT-Bereich sein. Das heisst, die Lösung der Rätsel soll praktische Kenntnisse aus der Informatik voraussetzen und nicht "rätselhaft" oder "misteriös" sein. |
| 9   | M         | funk.       | Das fertige Spiel muss bei einer öffentlichen Quelle zur Verfügung gestellt werden. (z.B. als Container- od. VM-Images)                                                                                              |
| 10  | K         | qual.       | Es soll ein Regelwerk in der Anleitung für das Spiel vorhanden sein.                                                                                                                                                  |
| 11  | K         | qual.       | Es sollen Hinweise als Hilfsmittel vorhanden sein. Diese dürfen jedoch nicht zu viel verraten.                                                                                                                        |
| 12  | M         | qual.       | Es sollen Tips in der Anleitung vorhanden sein. Diese sollen den Spieler im Fall der Fälle auf den richtigen Pfad bringen.                                                                                            |

### Technologien

Für dieses Projekt habe ich folgende Technologien verwendet:

- [Docker](https://www.docker.com/)
- [git (zur Versionierung)](https://git-scm.com/)
- [MD5 Hashing](https://de.wikipedia.org/wiki/Message-Digest_Algorithm_5)
- [Python 3.11.2](https://www.python.org/)
- [C++](https://de.wikipedia.org/wiki/C%2B%2B#:~:text=C%2B%2B%20ist%20eine%20von,eine%20Programmierung%20auf%20hohem%20Abstraktionsniveau.)
- [gcc | g++](https://gcc.gnu.org/)
- [NMAP](https://nmap.org/)

### Quellen

Hier sind alle Quellen aufgelistet, welche während dem Aublauf des Projekts als Hilfe oder Orientation verwendet wurden.

- [Docker](https://www.docker.com/)
- [Docker Hub](https://hub.docker.com/)

## Planen

### Arbeitspakete


| Nr. | Frist      | Beschreibung                                                               | Geplante Zeit in Paketen |
| ----- | ------------ | :--------------------------------------------------------------------------- | -------------------------- |
| 1   | 24.02.2023 | Informieren (von IPERKA)                                                   | 20                       |
| 2   | 10.03.2023 | Planen (von IPERKA)                                                        | 15                       |
| 3   | 10.03.2023 | Realisieren (von IPERKA): Konzept beschreiben                              | 4                        |
| 4   | 17.03.2023 | Realisieren (von IPERKA): PoC erstellen                                    | 11                       |
| 5   | 17.03.2023 | Realisieren (von IPERKA): Docker-Image erstellen & in eine Registry pushen | 2                        |
| 6   | 24.03.2023 | Kontrollieren (von IPERKA)                                                 | 2                        |
| 7   | 24.03.2023 | Auswerten (von IPERKA)                                                     | 2                        |
| 8   | 24.03.2023 | Portfolioeintrag bis am Abend                                              | 6 (ggf. mehr)            |

:::info

1x Arbeitspaket = 45 Minuten = 1x Schullektion

1x Halbtag = 5x Arbeitspakete

6x Halbtage = 30x Arbeitspakete

30x Arbeitspakete * 2x Mitglieder + 6x Portfolio (3/Mitglied)= **60x Arbeitspakete**

:::

### Testfälle


| Testf.<br />Nr. | Anf.<br />Nr. | Voraussetzung                             | Testumgebung | Eingabe                                                                                                     | Erw. Ausgabe                                               |
| :---------------- | --------------- | :------------------------------------------ | -------------- | :------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| 1.1             | 1             | PoC ist vorhanden                         |              | Image von der Registry pullen und mit`docker run` starten. Als nächstes den Befehl `docker ps` ausführen. | Container erscheint in der ausgegebenen Liste.             |
| 2.1             | 2             | PoC ist am Laufen                         |              | Mit der Lösung geht man duchr das Spiel bis man fertig ist.                                                | Eine Flagge erscheint.                                     |
| 3.1             | 3             | Docusaurus Unterseite Lösungen ist offen |              | Die Lösungen durchschuen.                                                                                  | Die Barrieren haben unterschiedliche Lösungswege          |
| 4.1             | 4             | PoC ist am Laufen                         |              | Ohne Lösungen die Barrieren überwinden                                                                    | IT-Lehrperson oder Klassenkamerad hat die Flagge vor sich. |
| 5.1             | 5             | Docusaurus Unterseite Anleitung ist offen |              | Benutzer fürht die Anweisungen in der Anleitung durch.                                                     | Benutzer ist startklar und weiss was er/sie zu tun hat.    |
| 6.1             | 6             | PoC ist am Laufen                         |              | Alle Flaggen finden.                                                                                        | Die Flaggen sind im Format: flag{challenge_name}           |
| 7.1             | 7             |                                           |              |                                                                                                             |                                                            |
|                 |               |                                           |              |                                                                                                             |                                                            |

## Entscheiden

### Docker oder VM?

Weil wir momentan parallel zu diesem Projekt ein Docker Modul bearbeiten, haben wir uns für Docker entschieden. Wir wollen das Geübte direkt anwenden und unser Können mit Docker optimieren.

Weitere Gründe waren, dass Docker um einiges schneller ist als eine VM, dass es weniger Speicher benötigt und dass es überall replizierbar ist.

### PoC oder volles CTF?

Ursprünglich wollten wir bei diesem Projekt ein volles Capture the Flag erstellen. Die Idee war, entweder meherere kleine Level zu haben oder ein sehr grosses Puzzle mit nur einer Flagge zu erstellen.

Da wir zuvor noch nie Projekte mit solch "offenen Anforderungen" hatten, haben wir uns an die zuständige Lehrperson gewendet und um ein wenig Rat gebeten. Er hat uns dann vorgeschlagen, dass wir ein Proof of Concept machen könnten, damit das Projekt nicht zu gross wird. Wir haben diesen Vorschlag uns zu Herzen genommen und uns für das Proof of Concept entschieden.

:::note

Das PoC soll nur als Beweis dienen, dass wir in der Lage sind mit den vorhandenen Ressourcen ein volles CTF zu erstellen. Es soll nur ein Container-Image sein, mit einer Dummyversion vom Spiel.

:::

### Wie erstellen wir die Images?

Lokal oder mit einem GitHub Workflow?
Wenn wir die Images lokal bearbeiten, haben wir viel zu tun. Dafür aber die volle Kontrolle über alles.
Mit dem GitHub Workflow läuft alles automatisch. Dadurch haben wir keine zusätzlichen Arbeiten, sondern können das Erstellen vom Images einfach vergessen.

### Welche Registry?

In Sachen Registries hatten wir zwei Optionen, welche unsere Bedürfnisse nach Komfort erfüllten. Eine Option war das offizielle Docker-Hub von Docker, die andere war das Registry von GitHub. Natürlich gibt es viele Alternativen, aber diese zwei sind einfach am einfachsten zu brauchen für unseren Use-Case. Docker-Hub ist das offizielle Registry von Docker und ist in der Software als Default integriert. GitHub ist unser Remote-Host für die Repository.

Der hauptsächlichen Unterschiede liegen in diesen Punkten: die Möglichkeit private Images zu haben und die Integration der Registry in docker.

An sich ist es für uns kein Problem die Images öffentlich zu haben, da schon die Repository öffentlich ist. Das einzige Problem, das wir haben könnten, ist die um einiges längere URL zur Registry. Bei Docker-Hub kann man die domain einfach weg lassen und nur mit dem Imagenamen arbeiten, jedoch muss man bei github immer die ganze Domain ausschreiben.

Es könnte nerviger werden, immer alles auszuschreiben, jedoch würden wir meistens die images über eine CI-Pipeline in die Registry pushen. Schlussendlich macht dies das Problem irrelevant.

## Realisieren

## Kontrollieren

## Auswerten
