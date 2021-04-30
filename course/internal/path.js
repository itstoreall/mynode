const path = require('path');

console.log(path.relative('/data/org/test/ddd', '/data/org/impl/ccc'));
console.log('resolve:', path.resolve('/foo/bar', './baz'));
console.log('normalize:', path.normalize('/foo/bar//baz/asdf/xxx/..'));
console.log('parse:', path.parse('/home/user/dir/file.txt'));
console.log('join:', path.join('/foo', 'bar', 'baz/asfd', 'qwerq', '..'));
console.log('sep:', path.sep);
