require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

// Controllers
const userCtrl = require('./controllers/User');

const app = express();
app.use( express.static( `${__dirname}/../build` ) );
app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24*365*50
    }
}))


massive({
        connectionString: CONNECTION_STRING,
        ssl: {
            rejectUnauthorized: false
        }
    }).then(db => {
        app.set('db', db)
        app.listen(SERVER_PORT, () => console.log('Port is running on', SERVER_PORT))
})



// User
app.post('/user/signup', userCtrl.signUp)
app.post('/user/login', userCtrl.login)
app.get('/user/logout', userCtrl.logout)
app.get('/user/currentUser', userCtrl.currentUser)
