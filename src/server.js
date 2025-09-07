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
 * 
 *  // Stateful => Possui estado
 *  // Stateless => Não possui estado (Back-end é stateless)
 * 
 * - Cabeçalos (Requisição/resposta) => Metadados
 * 
 * - HTTP Status Code => Indica se uma requisição foi bem sucedida ou não
 */

const users = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    const buffers = [];

    for await (const chunk of req) {
        buffers.push(chunk);
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString());
    } catch {
        req.body = null;
    }

    if (method === 'GET' && url === '/users')
        return res.setHeader('Content-type', 'application/json').end(JSON.stringify(users));

    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body;

        users.push({ id: 1, name, email });

        return res.writeHead(201).end('Criação de usuário')
    }

    return res.writeHead(404).end();
})

server.listen(3333, () => console.log('Server running at http://localhost:3333'));