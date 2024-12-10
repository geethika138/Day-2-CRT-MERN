const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); 

app.get('/api/data', (req, res) => {
    res.send({ message: 'Hello from the API!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
