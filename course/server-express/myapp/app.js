const express = require('express');
const path = require('path');
const app = express();
const myRouter = require('./public/js/my-router');

// Подключает можуль маршрутизации
app.use('/my-router', myRouter);

// Middleware
app.use((req, res, next) => {
  console.log('Middleware');
  next();
});

// This line always located at the top
app.use(express.static(path.join(__dirname + '/public')));

// Парсер для получения отправленных из формы данных
app.use(express.urlencoded({ extended: false }));

// Парсер JSON
app.use(express.json());

// Запускает обработчик с любым методом запроса HTTP
app.all('/anything', (req, res, next) => {
  res.send(`<h1>Anything</h1>`);
  console.log('Anything method.');
  next(); // передаем управление дальше
});

// Получение данных из формы
app.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  res.send(`<h1>login</h1>`);
  console.log(email, password);
  res.end();
});

app.get('/contact/:id', (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
  console.log('contact', req.params.id);
});

app.get('/user/:userid', (req, res) => {
  res.send(`<h1>User</h1> Параметр: ${req.params.userid}`);
  console.log('user', req.params.userid);
});

// Пример редактирования пользователя
app.patch('/user/:userid', (req, res) => {
  const id = req.params.userid;
  // выполняем необходимые действия
});

// Цепочка обработчиков маршрутов для конкретного пути
app
  .route('/blog')
  .get((req, res) => {
    res.send('Get a list of blog');
  })
  .post((req, res) => {
    res.send('Add a record to blog');
  })
  .put((req, res) => {
    res.send('Update blog');
  });

app.listen(3000, () => {
  console.log('myapp listening on port 3000!');
});

/**
 * Express:
 * Сначала обрабатываем статические ресурсы
 * В express.static() передается путь к папке со стат. файлами
 *
 * req.params.id - Передача параметров на сервер
 * req.query - объект хранящий результат запроса
 * req.body - объект получает данные из формы
 * {
  skip: 0,
  limit: 10
}
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
