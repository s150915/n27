class Konto{
    constructor(){
        this.Kontonummer
        this.Kontoart
        this.Iban 
    }
}

const express = require('express')
const iban = require('iban') 
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express() 
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

// conosle.log bewirkt: Ausgabe von 'Server lauscht auf...' im Terminal.

// Die app.get('/'...) wird abgearbeitet, wenn die Startseite im Browser aufgerufen wird.
app.get('/',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        res.render('index.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

// Wenn die Seite localhost:3000/impressum aufgerufen wird, ...

app.get('/impressum',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
        // ... dann wird impressum.ejs gerendert(Seite wird abgerufen). res = response
        
        res.render('impressum.ejs', {                              
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

app.get('/login',(req, res, next) => {         
    res.cookie('istAngemeldetAls', '')       
    res.render('login.ejs', {                    
    })
})

app.post('/',(req, res, next) => {   
    
    const idKunde = req.body.idKunde
    const kennwort = req.body.kennwort
        
    if(idKunde === "4711" && kennwort === "123"){            
        console.log("Der Cookie wird gesetzt:")
        res.cookie('istAngemeldetAls', idKunde)
        res.render('index.ejs', {  
            kunde : idKunde          
        })
    }else{            
        console.log("Der Cookie wird gelöscht")
        res.cookie('istAngemeldetAls','')
        res.render('login.ejs', {                    
        })
    }
})

// Wenn die Seite localhost:3000/kontoAnlegen angesurft wird, ...
// get nur die Seite aufrufen

app.get('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)
        
        // ... dann wird kontoAnlegen.ejs gerendert.
        
        res.render('kontoAnlegen.ejs', {  
            meldung : ""                            
        })
    }else{
        res.render('login.ejs', {                    
        })    
    }
})

// Wenn der Button auf der kontoanlegen-Seite gedrückt wird, ...

// post beim Button 'Konto anlegen'
app.post('/kontoAnlegen',(req, res, next) => {   

    let idKunde = req.cookies['istAngemeldetAls']
    
    if(idKunde){
        console.log("Kunde ist angemeldet als " + idKunde)

        // let = Deklaration
        // new = Instanziierung
        // Alternativ können Deklaration und Instanziierung in einer Zeile geschrieben werden.

        let konto = new Konto()

        // Der Wert aus dem Input mit dem Namen 'kontonummer'
        // wird zugewiesen (=) an die Eigenschaft Kontonummer 
        // des Objekts namens konto.

        konto.Kontonummer = req.body.kontonummer
        konto.Kontoart = req.body.kontoart
        
        let bankleitzahl = 12345678

        let errechneteIban = iban.fromBBAN("DE",bankleitzahl + " " + konto.Kontonummer)

console.log(errechneteIban)        
        
        // ... dann wird kontoAnlegen.ejs gerendert.
        
        res.render('kontoAnlegen.ejs', { 
            meldung : "Das "+ konto.Kontoart +" mit der Kontonummer "+ konto.Kontonummer +" wurde erfolgreich angelegt."
        })
    }else{

        // Die login.ejs wird gerendert und als Response an den Browser übergeben.
        res.render('login.ejs', {                    
        })    
    }
})