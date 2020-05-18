require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');
const app = express();

app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database connected.')
    app.listen(SERVER_PORT, () => console.log('Port is working on', SERVER_PORT))
})





// Authentication
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/currentAdmin', authCtrl.currentAdmin)
