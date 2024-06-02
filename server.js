
const express = require('express');
const app = express();
const port = 3000;
const requestLogger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(requestLogger);


app.get('/', (req, res) => {
  res.send('Hi this is Harisudan, this is my implementation task!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
