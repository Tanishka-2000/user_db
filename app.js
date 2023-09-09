const express = require('express');
const app = express();

// To read form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send('<h1>Hello from Express</h1>')
});

const PORT = process.env.PORT || 4400;
app.listen(PORT, () => console.log('app listening on port ' + PORT));