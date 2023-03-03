---
sidebar_position: 1
title: Dokumentation
---
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

## Entscheiden

## Realisieren

## Kontrollieren

## Auswerten
