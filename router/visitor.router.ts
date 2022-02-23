import { Router } from 'express';
import visitorController from '../controller/visitor.controller';

class visitorRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.visitorCreate();
    this.visitorlist();
  }
  protected visitorCreate = () => {
    this.router.post('/create', visitorController.inputVisitor);
  };
  protected visitorlist = () => {
    this.router.get('/list', visitorController.getvisitor);
  };
}
const visitorRoute = new visitorRouter().router;
export default visitorRoute;
