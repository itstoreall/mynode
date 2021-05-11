/* ===========================================
** Commands

mkdir myapp (create folder)
node -v (check the version of the node.js)

- Удаление файла из Git репозитория
git rm .env --cached
git commit -m "Stopped tracking .env File"

- Working with branches
git checkout -b [branch-name] (creates new branch)
git checkout [branch_name] (switches the branch)
git fetch (забирает данные в локальный репозиторий)
git pull (вливает данные из удалённой ветки в текущую ветку)
git merge main (влить ветку main в ветку [branch name])

<<<<<<< Current Change
 ... some code
=======
 ... some code
>>>>>> Incoming Change

git add . (добавляем после исправления конфликта)
git commit -m "qweqweqwe" (коммитим)

- Cтянуть изменения с другой ветки
git pull origin [имя_ветки] (стянуть изменения с ветки одного из участников)
git add . (добавляем после исправления конфликта)
git commit -m "qweqweqwe" (коммитим)
- Залить изменения на удаленный main
git merge main (находясь в своей локальной ветке пишем команду)

------------------------------------------- */

/* ===========================================
** Flags

-S или --save (модуль как основная зависимость)
-D или --save-dev (модуль как доп. зависимость)
-E (только текущая версия)

------------------------------------------- */

/* ===========================================
** Node JS

00.1 throw new Error('it's an Error');

01. Работает с файлами напрямую
02. "type": "module", in package.json (ожедает в .js только импорты)
03. npm i commander (for CLI)
04. Turbo Console Log - расширение для логирования (ctrl + alt + L)
05.0 fs и os - Зарезервированные базовые модули
05.1 fs модули по умолчанию работают с колбеками

06. module.exports - Что присвоено свойству exports, будет экспортироваться
07.0 const fs = require('fs').promises - Модуль FileSystem
07.1 fs.readFile(filename, [options]) - чтение файла
07.2 fs.writeFile(filename, data, [options]) - запись файла
07.3 fs.appendFile(filename, data, [options])- добавление в файл
07.4 fs.rename(oldPath, newPath) - переименование файла.
07.5 fs.unlink(path, callback) - удаление файла (удаляет ссылку на файл).
08. require - is sync modules, and imports - is async modules

09. nextTick() blocks eventloop

10. self-calling function:

(async () => {
  await ...
  ))().then(() => {})

11. .gitkeep - файл внутри пустой папки разрешает хранить ее на github
12. Чтобы nodemon не перезагружался бесконечно (in package.json):

"nodemonConfig": {
    "ignore": [
      "data/*.*"
    ]
  },

13.1 Install ESLint and Prettier:
npm i eslint-config-prettier -D
npm i eslint-plugin-json -DE

13.2 Create a file at the root:
.eslintignore
node_modules

13.3 Create a file at the root:
.eslintrc.js
module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['standard', 'plugin:json/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: [1, 'always'],
    'comma-dangle': 'off',
    'space-before-function-paren': 'off',
  },
};


------------------------------------------- */

/* ===========================================
** NPM Installers

npx eslint --init (ESLint)
npm i @babel/core -D
npm i @babel/eslint-parser -D
npm i @babel/plugin-proposal-class-properties -D
npm i @babel/plugin-proposal-private-methods -D
npm i @babel/plugin-syntax-top-level-await -D
npm i (Устанавливает модули после Fork перед работой)
npm i commander -E (парсит строку запроса)
npm i cors
npm i ejs -E 
npm i eslint-config-prettier -D
npm i eslint-plugin-json -DE
npm i express ejs (EJS)
npm i joi
npm init -y (creates an empty package.json)
npm install --save-dev nodemon 
npm install cors
npm install express
npx express-generator --view=ejs simple-express

------------------------------------------- */

/* ===========================================
** Cookies

req.cookies (доступ к обычным неподписанным cookie)
req.cookies['имя куки'] (прочитать обычную куку)
req.signedCookies['имя куки'] (прочитать подписанную куку)
res.clearCookie (очищение куков - передать имя куки)

При установке cookie-файла можно указать опции:

- httpOnly - значение true говорит, что cookie-файл 
изменяется только сервером. Это предотвращает 
XSS-атаки от JavaScript со стороны клиента

- path - путь, действия данного cookie-файла. 
По умолчанию путь /. Распространяется на 
все страницы сайта

- domain - привязывает cookie-файлы к конкретным 
поддоменам. Устанавливается cookie-файл только 
для домена на котором работает ваш сервер

- maxAge - определяет, сколько времени в 
миллисекундах клиент должен хранить cookie-файл 
до его удаления. Если опция не указана, cookie-файл 
будет удален при закрытии браузера

- secure - работа с cookie-файлами должна проводиться 
только через защищенное (HTTPS) соединение

- signed - установаем в true, чтобы подписать данный 
cookie-файл. После этого он становится доступным в 
res.signedCookies вместо res.cookies. Поддельные 
cookie-файлы будут не приняты сервером

---------------- express-session
** API для реализации сессии

Принимает конфигурационный объект с опциями:

- resave - установить false. Отвечает за сохранение в 
хранилище сессии, даже если запрос не изменялся.

- saveUninitialized - установить false, поскольку 
спрашивают пользователя разрешение на установку 
cookie-файла. Параметр в true приводит к сохранению 
новых сессий в хранилище, даже если они не менялись

- secret - секретный ключ для подписания 
cookie-файла идентификатора сессии

- key - имя cookie-файла, по умолчанию connect.sid, 
в нем хранится уникальный идентификатор сессии.

- store - экземпляр сеансового хранилища. По умолчанию 
сессия хранится в памяти - экземпляр MemoryStore. При 
перезагрузке сервера не теряет текущие сеансы пользователей

- cookie - те же настройки, как для модуля cookie-parser

------------------------------------------- */

/* ===========================================
** Morgan (logger)

- combined - использует режим combined сервера 
Apache для формата журналов:
:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"

- common - использует режим common сервера 
Apache для формата журналов:
:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]

- dev - формат журнала с цветовой кодировкой 
Цвета статуса запроса: 
зеленый - успех;
красный - ошибка сервера; 
желтый - ошибrf клиента; 
бирюзовый - перенаправление кодов и неокрашенные инфо коды
:method :url :status :response-time ms - :res[content-length]

- short - короче, чем формат по умолчанию
:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms

- tiny - самый короткий вывод, только время ответа 
и несколько дополнительных элементов 
:method :url :status :res[content-length] - :response-time ms

- Создать собственные форматы журнала
:method :url :response-time ms
(будет создавать записи вида - GET / 15 ms:)

------------------------------------------- */

/* ===========================================
** Коды ответа HTTP

01. Информационные 100 - 199
- 100: Continue 
Запрос успешно принят и клиент может продолжать присылать запросы

02. Успешные 200 - 299
- 200: OK - Запрос успешно обработан
- 201: Created - Запрос успешно выполнен и был создан ресурс
- 202: Accepted - Запрос принят, но ещё не обработан
- 204: No Content - Нет содержимого для ответа, но заголовки присылаются

03. Перенаправления 300 - 399
- 301: Moved Permanently - URI запрашиваемого ресурса был изменён
- 307: Temporary Redirect - Временное перенаправление

04. Клиентские ошибки 400 - 499
- 400: Bad Request - Сервер не понимает запрос из-за неверного синтаксиса
- 401: Unauthorized - Для получения запрашиваемого ответа нужна аутентификация
- 403: Forbidden - У клиента нет прав доступа к содержимому
- 404: Not Found - Сервер не может найти запрашиваемый ресурс

05. Серверные ошибки 500 - 599
- 500: Internal Server Error - Внутренняя ошибка сервера
- 501: Not Implemented - Метод запроса не поддерживается сервером
- 502: Bad Gateway - Сервер, как шлюз получил недействительный ответ
- 503: Service Unavailable - Сервер не готов обрабатывать запрос
- 504: Gateway Timeout - Сервер, как шлюз не может получить ответ вовремя

------------------------------------------- */

/* ===========================================
** URL for REST API (best prectices)

01.1 Add new customer to the sistem:
HTTP метод: POST
URL: http://www.example.com/customers

01.2 GET, PUT or PATCH customer's data with ID 112233:
HTTP метод: GET
URL: http://www.example.com/customers/112233

02.1 Creating new product:
HTTP метод: POST
URL: http://www.example.com/products

02.2 GET, PUT, DELETE the product with ID 432111:
HTTP метод: GET, PUT, DELETE
URL: http://www.example.com/products/432111

03.1 Creating new order without customer:
HTTP метод: POST
URL: http://www.example.com/orders

03.2 Creating new order for a customer ID 332244
HTTP метод: POST
URL: http://www.example.com/customers/332244/orders

04. Pagination
HTTP метод: GET
URL: http://api.example.com/resources?offset=0&limit=12

05. Complex filtering by value (used ::)
HTTP метод: GET
URL: http://www.example.com/users?filter="name::sam|city::denver"

06. Sort 
HTTP метод: GET
URL: http://www.example.com/users?sort=lastName|firstName|-birthdate

------------------------------------------- */
