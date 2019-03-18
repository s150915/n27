// Das ist ein einzeiliger Kommentar
/* Das ist ein mehrzeiliger Kommentar*/

// Das Express-Framework wird eingebunden.
// Ein Framework soll die Programmierung erleichtern.
// Das Framework muss mit npm installiert werden:
// Im Terminal: npm install express --save

const express = require('express')

// Das App-Objekt wird initialisiert
// Das App-Objekt repräsentiert den Server.
// Auf das App-Objekt werden im Folgenden Methoden aufgerufen.

const app = express()

// Mit der ejs-View-Engine werden Werte von der server.js zur index-Datei gegeben.
// Muss wieder im Terminal installiert werden (npm install ejs --save)

app.set('view engine', 'ejs')

/* Gibt an, wo meine statischen Inhalte sind. 
Sucht diese im Ordner Public. */

app.use(express.static('public'))

/* Der Wert darf sich während der Programmlaufzeit nicht ändern.
Bereitet die Daten zur Übergabe an die server.js vor.
Dann npm installieren (npm install --save)*/

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// Bindet den BodyParser ein. Der Wert soll wahr sein.

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

// Startet den Server. 
// Der Server lauscht auf Befehle vom Client (deswegen listen)
// Port kann vom Dienst selbst ausgesucht werden. 
/* Unser Rechner hat Port 3000 vorgegeben. Im Browser muss die 3000 angegeben 
werden. */

const server = app.listen(process.env.PORT || 3000, () => {        
    console.log('Der Server ist erfolgreich gestartet auf Port %s', server.address().port)   
})

// Server kann durch GET-Request erreicht werden.

app.get('/',(req, res, next) => {

    if(req.cookies['istAngemeldetAls']){
        console.log("Kunde ist angemeldet als" + req.cookies['istAngemeldetAls'])
        res.render('index.ejs', {
        })
    }else{
        res.render('login.ejs', {
        })
    }

}) 

app.get('/login',(req, res, next) => {
    res.render('login.ejs',{
        
    })
})