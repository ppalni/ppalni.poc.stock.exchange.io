const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const swaggerDocs = require('./swagger');

mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api', require('./routes'));

swaggerDocs(app);

app.listen(3000, () => {
  console.log('Mock YouTube Stock Exchange listening on port 3000!');
});
