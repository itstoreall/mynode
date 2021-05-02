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
12. Чтобы nodemon не перезагружался бесконечно:

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

node -v (check the version of the node.js)
npm init -y (creates an empty package.json)
npx eslint --init (ESLint)
npm i commander -E (парсит строку запроса)
npm i @babel/core -D
npm i @babel/eslint-parser -D
npm i @babel/plugin-proposal-class-properties -D
npm i @babel/plugin-proposal-private-methods -D
npm i @babel/plugin-syntax-top-level-await -D
npm install --save-dev nodemon 
npm i ejs -E 
npm i cors
npm i joi

------------------------------------------- */
