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

------------------------------------------- */

/* ===========================================
** Commands

node -v (check the version of the node.js)
npm init -y (creates an empty package.json)
-S или --save (модуль как основная зависимость)
-D или --save-dev (модуль как доп. зависимость)


------------------------------------------- */
