const express = require('express');
const path = require('path');
const app = express();

// This line always located at the top
app.use(express.static(path.join(__dirname + '/public')));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

/**
 * Express:
 * Сначала обрабатываем статические ресурсы
 * В express.static() передается путь к папке со стат. файлами
 *
 * __dirname позволяет получить полный путь к папке
 */

/* Example without Express
app.METHOD(PATH, HANDLER);

app.get('/', (req, res) => {
  res.send('Hello World from myapp!');
});

app.get('/con?tact', (req, res) => {
  res.send('<h1>Contact page</h1>');
});
*/
