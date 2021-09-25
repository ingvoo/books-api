import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World again and again \n')
})

app.get('/error', function(req, res) {
  throw new Error("oops I made an error \n")
})

// Handle 404
app.use(function(req, res) {
  res.status(404).send('404 - Not found \n')
})

// Handle error
app.use(function(err, req, res, next) {
  res.status(500).send(err.message);
  console.error(err.stack);
})

// Log server port status
const server = app.listen(3000, () => {
  console.log('Server listening at localhost:' + server.address().port);
})
