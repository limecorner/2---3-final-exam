const express = require('express')
const app = express()
const port = 3000

const exphb = require('express-handlebars')
app.engine('handlebars', exphb({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})