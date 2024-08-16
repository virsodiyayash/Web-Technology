const path = require('node:path');

// console.log(path.basename('C:\\temp\\myfile.html'));

// console.log(path.win32.basename('C:\\temp\\myfile.html'));

// console.log(path.posix.basename('/tmp/myfile.html'));



           // path.delimiter
// console.log(process.env.PATH);
// Prints: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'
// console.log(process.env.PATH.split(path.delimiter));
// Returns: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']



            // path.dirname(path)
//  console.log(path.dirname('/foo/bar/baz/asdf/quux'));
 // Returns: '/foo/bar/baz/asdf'



            //path.extname(path)
// console.log(path.extname('index.html'));
// Returns: '.html'
            
// console.log(path.extname('index.coffee.md'));
// Returns: '.md'
            
// console.log(path.extname('index.'));
// Returns: '.'
            
// console.log(path.extname('index'));
// Returns: ''
            
// console.log(path.extname('.index'));
// Returns: ''
            
// console.log(path.extname('.index.md'));
// Returns: '.md'



            //path.format(pathObject)
// p = path.format({
//     dir: 'C:\\path\\dir',
//     base: 'file.txt',
//     });
// console.log(p);
    // Returns: 'C:\\path\\dir\\file.txt'



//          path.isAbsolute(path)
//console.log(path.isAbsolute('//server'));    // true
//console.log(path.isAbsolute('\\\\server'));  // true
//console.log(path.isAbsolute('C:/foo/..'));   // true
//console.log(path.isAbsolute('C:\\foo\\..')); // true
//console.log(path.isAbsolute('bar\\baz'));    // false
//console.log(path.isAbsolute('bar/baz'));     // false
//console.log(path.isAbsolute('.'));           // false



//          path.join([...paths])
// path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'

// path.join('foo', {}, 'bar');
// Throws 'TypeError: Path must be a string. Received {}'




//          path.normalize(path)
console.log(path.normalize('C:\\temp\\\\foo\\bar\\..\\'));
// Returns: 'C:\\temp\\foo\\'