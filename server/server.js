const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();
const api = require('./routes/api');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello from Server Side");
});

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server running on port No ${PORT}`);
});