const express = require('express');
const contentRoutes = require('./router/contentRoutes');
const bodyParser = require('body-parser');

const app = express();
const PORT = 2000;

app.use(bodyParser.json());
app.use('/contents', contentRoutes);

app.get('/', (req, res) => {
  res.send('<h2>Hello world </h2>');
});

app.listen(PORT, () => {
  console.log('API is listening on port', PORT);
});
