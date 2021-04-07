const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3030;
const api = require('./routes/index');
const cors = require('cors');

app.use(cors({
    method: ['GET', 'POST'],
    credentials: true
}));

app.get('/', cors(corsCheck), (req, res, next) => {
    res.send('Hello Express');
    next();
})
app.use(bodyParser.json());
app.use('/api', api);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});

function corsCheck(req, callback) {
  let corsOptions;
  const acceptList = [
    // ... url list,
  ];
  if (acceptList.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
}