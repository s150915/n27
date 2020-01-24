# Klausur / Test 2 am 14.01.2020 um 9:10 Uhr

1. Fehler finden und auf Papier dokumentieren
2. alles, was in Test 1 relevant war
3. selbst etwas ausprogrammieren (GUI oder server.js)
   Beispiel: Formular ausprogrammieren/ neu erstellen, Formular Geld einzahlen, Sachen hinzufügen oder ändern, Request oder Button einfügen.
4. SQL (evtl. einen unbekannten SQL-Befehl anhand einer gegebenen Dokumentation selbst erstellen)
5. if und else (auch verschachtelt) Bitte auch die alten if und else Sachen anschauen im Training-Ordner.
6. Symmetrische und asymmetrische Verschlüsselung erklären/ gegeneinander abgrenzen. Den Sinn jeweils erklären. Die Implementation am Laptop am Rechner kurz beschreiben (Ablauf,wie das geht).

Bsp.zu if und else:
```Javascript
// Wenn ein Schüler / eine Schülerin nicht volljährig ist, wird "Eintritt verweigert".

var darfHinein = "nein"
var alter = 18;

if(alter >= 18){
    darfHinein = "ja"
}else{
    darfHinein = "nein"
}

console.log("Der Schüler / Die Schülerin darf hinein: " + darfHinein)


```
Bsp.:
```Javascript
// Wenn ein Schüler / eine Schülerin nicht volljährig ist, wird "Eintritt verweigert".

var darfHinein = "nein"
var alter = 18;

if(alter >= 18){
    darfHinein = "ja"
}else{
    darfHinein = "nein"
}

console.log("Der Schüler / Die Schülerin darf hinein: " + darfHinein)

```
Bsp.:
```Javascript
// Wenn ein Schüler / eine Schülerin nicht volljährig ist, wird "Eintritt verweigert".
// Schülerinnen zahlen 3 Euro.
// Schüler zahlen 4 Euro.

var darfHinein = true
var istVolljaehrig = true;
var geschlecht = "w"

if(istVolljaehrig){
    darfHinein = true    
    console.log("Der Schüler / Die Schülerin darf hinein.")
}else{
    darfHinein = false
    console.log("Der Schüler / Die Schülerin darf nicht hinein.")
}

if(istVolljaehrig){
    darfHinein = true    
    if(geschlecht === "w"){
        console.log("Die Schülerin darf hinein. Preis: 3 Euro")
    }else{
        console.log("Der Schüler darf hinein. Preis: 4 Euro")
    }
    console.log("Der Schüler / Die Schülerin darf hinein.")
}else{
    darfHinein = false
    console.log("Der Schüler / Die Schülerin darf nicht hinein.")
}
```
