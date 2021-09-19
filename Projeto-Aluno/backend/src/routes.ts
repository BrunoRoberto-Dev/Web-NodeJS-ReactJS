import { Router, request, response, Request, Response} from 'express'

import { getCadastros } from './controller/CadastroController';
import { saveCadastro } from './controller/CadastroController';
import { getCadastro } from './controller/CadastroController';
import { updateCadastro } from './controller/CadastroController';
import { deleteCadastro } from './controller/CadastroController';
import { finishedCadastro } from './controller/CadastroController';

const routes = Router()

routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Seja bem vindo a nossa página de cadastros!'})
})

routes.get('/cadastro', getCadastros)
routes.post('/cadastro', saveCadastro)
routes.get('/cadastro/:id', getCadastro)
routes.put('/cadastro/:id', updateCadastro)
routes.delete('/cadastro/:id', deleteCadastro)
routes.patch('/cadastro/:id', finishedCadastro)

export default routes