const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

// connecting the app to database
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('connected to database'))
.catch((error) => console.log(error));

const app = express();

// To read form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// database models
const User = require('./models/User');
const Address = require('./models/Address');


app.get('/', (req, res) => {
    res.sendFile( __dirname + '/form.html');
});

app.post('/', (req, res) => {
    
    console.log(req.body);
    const { name, address } = req.body;

    if(!name.trim()|| !address.trim()){
        res.sendFile( __dirname + '/error.html');
    }else{
        const addr = new Address({ address });
        addr.save()
        .then( doc => {
            const user = new User({ name, address: doc._id})
            user.save()
            .then(() => res.send('<h1>Form submitted successfully</h1>'))
        })
    }
})

const PORT = process.env.PORT || 4400;
app.listen(PORT, () => console.log('app listening on port ' + PORT));