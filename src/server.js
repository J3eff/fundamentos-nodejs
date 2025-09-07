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
 * 
 *  // Stateful => Possui estado
 *  // Stateless => Não possui estado (Back-end é stateless)
 * 
 * - Cabeçalos (Requisição/resposta) => Metadados
 * 
 * - HTTP Status Code => Indica se uma requisição foi bem sucedida ou não
 */

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/users')
        return res.setHeader('Content-type', 'application/json').end(JSON.stringify(users));

    if (method === 'POST' && url === '/users') {
        users.push({ id: 1, nome: 'Jonh Doe', email: 'jonhdoe@exemplo.com' });

        return res.writeHead(201).end('Criação de usuário')
    }

    return res.writeHead(404).end();
})

server.listen(3333, () => console.log('Server running at http://localhost:3333'));