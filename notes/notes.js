/* ===========================================
** Node JS

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

------------------------------------------- */

/* ===========================================
** Flags

-S или --save (модуль как основная зависимость)
-D или --save-dev (модуль как доп. зависимость)
-E (только текущая версия)

------------------------------------------- */

/* ===========================================
** Commands

mkdir myapp (create folder)
node -v (check the version of the node.js)
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
npm i express ejs (EJS)
npm i joi
npm init -y (creates an empty package.json)
npm install --save-dev nodemon 
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

------------------------------------------- */
