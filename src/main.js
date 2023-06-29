const express = require('express')
const morgan = require('morgan')
const path = require('path'); 
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

//http logger
app.use(morgan('combined'))


//template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname,'resources\\views'))

console.log("Path: ",path.join(__dirname, 'resources/views'))

//route "/"
app.get('/', (req, res) => {
  
  res.render('home');
})
app.get('/news', (req, res) => {
  
  res.render('news');
})


//127.0.0.1 -> localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})