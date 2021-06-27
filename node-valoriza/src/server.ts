import express from 'express';

const app = express();

app.get("/hello", (req, res) => {
  return res.send("Hello NLW#6!");
});

app.listen(3000, () => console.log('Server is running NLW#6'));
