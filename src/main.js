const express = require('express');
const methodOverride = require('method-override')
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');


//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'))

//http logger
app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers:{
            sum: (a, b) => a + b,
            sub: (a, b) => a - b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

console.log('Path: ', path.join(__dirname, 'resources/views'));

// Home, search, contact

//----------------route init ------------------"/"
route(app);

//127.0.0.1 -> localhost
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
