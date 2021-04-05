const express = require('express');
const app = express();
const api = require('./routes/index.js');
const cors = require('cors');
console.log('cors:', cors);

app.use(cors());
app.use('/api', api);

const port = 3030;
app.listen(port, ()=>console.log(`Listening on port ${port}`));