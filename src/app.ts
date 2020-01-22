import express from 'express';
import dotenv from 'dotenv';
import bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.SERVER_PORT;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
