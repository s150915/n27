const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.set('views', 'Training')

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// Eine Klasse ist ein Bauplan. Der Bauplan sieht vor, wie Objekte erstellt werden.
// Alle Objekte, die von einem Bauplan erstellt werden, haben die selben Eigenschaften, 
// aber möglicherweise unterschiedliche Eigenschaftswerte.

// Klassendefinition
// =================

class Rechteck{
    constructor(){
        this.laenge
        this.breite
    }
}

// Klassendefinition für Schüler in einer Schule:

class Schueler{
    constructor(){
        this.geschlecht
        this.klasse
        this.alter
        this.vorname
        this.nachname
    }
}

class Fussballer{
    constructor(){
        this.vorname
        this.nachname
        this.mannschaft
        this.geschlecht
    }
}

// Deklaration eines neuen Objekts vom Typ Rechteck
// Deklaration = Bekanntmachung
// let rechteck = ...

// Instanziierung eines neuen Objekts
// Instanziierung erkennt man immer am reservierten Wort "new"
// Bei der Instanziierung wird Arbeitsspeicher bereitgestellt.
// ... = new Rechteck()

// 1.Deklaration  2.Instanziierung  

let rechteck = new Rechteck() 
let schueler = new Schueler()
let fussballer = new Fussballer()

// 3.Initialisierung (konkrete Eigenschaftswerte werden zugewiesen)

rechteck.breite = 2 
rechteck.laenge = 3
schueler.geschlecht = "w"
schueler.alter = 17
fussballer.vorname = "Birke"
fussballer.mannschaft = "FC Borken"


console.log("Länge:" + rechteck.laenge)
console.log("Breite:" + rechteck.breite) 
console.log("Geschlecht:" + schueler.geschlecht)
console.log("Alter:" + schueler.alter)


// Wenn localhost:3000/klasse-objekt-ejs-trainieren aufgerufen wird ...

app.get('/klasse-objekt-ejs-trainieren',(req, res, next) => {   

    // ... wird klasse-objekt-ejs-trainieren.ejs gerendert:

    res.render('klasse-objekt-ejs-trainieren', {   
        breite: rechteck.breite,
        laenge: rechteck.laenge,
        geschlecht: schueler.geschlecht,     
        alter: schueler.alter,
        vorname: fussballer.vorname,
        mannschaft: fussballer.mannschaft                 
    })
})
