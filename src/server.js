// ESModules => import/export
import http from 'http';
import { json } from './middlewares/json.js';
import { routes } from './routes.js';

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
 * 
 *  Query parameters => Filtros, paginação, ordenação
 *  Route parameters => Identificação de recurso
 *  Request Body => Os dados para criação ou atualização de um recurso
 */


const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    await json(req, res);

    const route = routes.find(route => {
        return route.method === method &&
            route.path.test(url)
    });

    if (route) {
        const routerParams = req.url.match(route.path);
        req.params = { ...routerParams.groups };

        return route.handler(req, res);
    }

    return res.writeHead(404).end();
})

server.listen(3333, () => console.log('Server running at http://localhost:3333'));