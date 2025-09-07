// ESModules => import/export
import http from 'http';
import { json } from './middlewares/json.js';
import { Database } from './database.js';

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

const database = new Database();

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res);

    if (method === 'GET' && url === '/users') {
        const users = database.select('users');
        
        return res.end(JSON.stringify(users));
    }

    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body;

        const user = { id: 1, name, email };

        database.insert('users', user);

        return res.writeHead(201).end('Criação de usuário')
    }

    return res.writeHead(404).end();
})

server.listen(3333, () => console.log('Server running at http://localhost:3333'));