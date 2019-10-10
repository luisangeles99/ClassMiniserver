const express = require('express')

const app = express()

const path = require('path')

const publicDir = path.join(__dirname, 'public')

app.use(express.static(publicDir))

app.get('', function(req, res){
    res.send('Hola mundo!')
})

app.get('/about', function(req, res){
    res.send('<h1>Algo interesante iría en este about</h1>')
})

app.get('/contact', function(req, res){
    res.send('Luis Angeles')
})

app.get('/misc', function(req, res){
    res.send({
        dia: 'Jueves',
        descrip: '10 de octubre de 2019'
    })
})

app.get('*', function(req, res){ //checar para examen
    res.send('Por aqui no!')
})

app.listen(3000, function(){
    console.log('Up and running!')
})