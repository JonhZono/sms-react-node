const express = require('express');
const app = express();
const port = 5090;
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors({ origin: '*' }));

app.get('/names', (req, res) => {
  res.send('David');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
