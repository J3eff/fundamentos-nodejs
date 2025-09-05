//CommonJs -> Padrão de importação usando require
// ESModules => import/export
import http from 'http';

/**
 * - Criar usuários (POST)
 * - Listagem de usuarios (GET)
 * - Edição de usuarios (PUT, PATCH)
 * - Remoção de usuários (DELETE)
 *
 * - HTTP
 *  - Métodos HTTP: GET, POST, PUT, PATCH, DELETE
 *      GET => Busca uma recurso do back-end
 *      POST => Cria uma nova recurso no back-end
 *      PUT => Atualizar um recurso no back-end
 *      PATCH => Atualizar uma informação especifica de um recurso no backend
 *      DELETE => Deletar uma recurso do no back-end
 *  - URL
 */

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/users')
        return res.end('Listagem de usuários');

    if (method === 'POST' && url === '/users')
        return res.end('Criação de usuário');

    return res.end('Hello World');
})

server.listen(3333, () => console.log('Server running at http://localhost:3333'));