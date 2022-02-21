const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');


const app = express()
const port = 3000

// Template engine
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))
// HTTP logger
app.use(morgan('dev'))
// static file
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req, res) => {
  res.render('pages/home');
});


app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})