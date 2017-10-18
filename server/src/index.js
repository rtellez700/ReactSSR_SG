import express from 'express';
import renderer from './helpers/renderer';

const app = express();

// treat public directly as a public dir
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
