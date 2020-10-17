import { Router } from 'express';
import Opinionsyes from './controllers/OpinionsyesController';
import Opinionsno from './controllers/OpinionsnoController';



const routes = Router();

routes.post('/opinionsyes', Opinionsyes.create);
routes.post('/opinionsno', Opinionsno.create);

export default routes;