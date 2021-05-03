const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const path = require('path');

// Объект с MIME типами
const contentType = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
};

http
  .createServer(async (req, res) => {
    const { pathname } = new URL(req.url); // передача параметров

    // Имя файла который запросил клиент через HTTP-запрос
    let filename = pathname.substring(1);

    if (pathname === '/') {
      filename = 'index.html';
    }

    // Определяет расширение файла, поступившего запроса от
    // клиента и выбираем необходимый MIME тип
    const type = contentType[path.extname(filename)];

    // Устанавливает заголовок ответа Content-Type
    res.writeHead(200, { 'Content-Type': type });

    // Изображение - двоичный файл
    // Считывает файл и передаем в метод write
    // Вторым параметром устанавливаем кодировку 'hex'
    if (type.includes('image')) {
      const img = await fs.readFile(filename);

      res.write(img, 'hex');
    } else {
      const content = await fs.readFile(filename, 'utf8');

      res.write(content);
    }

    // Заканчиваем ответ на запрос
    res.end();
  })
  .listen(3000, () => console.log('Listen server on port 3000'));
