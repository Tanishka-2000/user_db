const express = require('express');
const app = express();

// To read form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.sendFile( __dirname + '/form.html');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Thank you for form submission!')
})

const PORT = process.env.PORT || 4400;
app.listen(PORT, () => console.log('app listening on port ' + PORT));