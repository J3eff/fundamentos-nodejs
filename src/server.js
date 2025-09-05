//CommonJs -> Padrão de importação usando require
// ESModules => import/export
import http from 'http';

const server = http.createServer((req, res) => {
    return res.end('Hello World');
})

server.listen(3333, () => console.log('Server running at http://localhost:3333'));