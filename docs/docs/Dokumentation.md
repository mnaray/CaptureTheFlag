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

| Nr. | Muss/Kann | funk./qual. | Beschreibung                                                                                                             |
| ----- | ----------- | ------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 1   | M         | funk.       | docker oder vm?                                                                                                          |
| 2   | M         | qual.       | Die Challenge muss mindestens 4 Stufen / Barrieren beinhalten.                                                           |
| 3   | M         | qual.       | Die Stufen / Barrieren dürfen nicht reduntdant sein.                                                                    |
| 4   | M         | funk.       | Die Stufen / Barrieren müssen vom Spieler überwindbar sein.                                                            |
| 5   | M         | funk.       | Damit klar ist was zu tun ist, muss eine Anleitung mit Anweisungen für das Spiel vorhanden sein.                        |
| 6   | M         | qual.       | Die "Flags" müssen über das ganze Spiel hinweg im selben Format bleiben. (z.B. flag{th1s_1s_th3_f14g})                 |
| 7   | M         | funk.       | Es muss eine Lösung zum Spiel vorhanden sein.                                                                           |
| 8   | M         | funk.       | Die Stufen / Barrieren müssen im Zusammenhang mit dem IT-Bereich sein. (evtl. simple Rätsel)                           |
| 9   | M         | funk.       | Das fertige Spiel muss bei einer öffentlichen Quelle zur Verfügung gestellt werden. (z.B. als Container- od. VM-Images |
| 10  | K         | qual.       | Es soll ein Regelwerk für das Spiel vorhanden sein.                                                                     |
| 11  | K         | qual.       | Es sollen Hinweise als Hilfsmittel vorhanden sein. Diese dürfen jedoch nicht zu viel verraten.                          |

### Technologien

Für dieses Projekt habe ich folgende Technologien verwendet:

- [Docker](https://www.docker.com/)
- [MD5 Hashing](https://de.wikipedia.org/wiki/Message-Digest_Algorithm_5)
- [Python 3.11.2](https://www.python.org/)
- [C++](https://de.wikipedia.org/wiki/C%2B%2B#:~:text=C%2B%2B%20ist%20eine%20von,eine%20Programmierung%20auf%20hohem%20Abstraktionsniveau.)
- [gcc | g++](https://gcc.gnu.org/)
- [NMAP](https://nmap.org/)

### Quellen

Hier sind alle Quellen aufgelistet, welche während dem Aublauf des Projekts als Hilfe oder Orientation verwendet wurden.

- [Quellen](https://some-source.com)

## Planen

## Entscheiden

## Realisieren

## Kontrollieren

## Auswerten
