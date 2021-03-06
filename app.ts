import express, { Application, NextFunction, Request, Response } from 'express';
import mongoDB from './configs/connectDB';
import visitorRoute from './router/visitor.router';
import cors from 'cors';

class App {
  public app: Application;
  constructor() {
    this.app = express();
    this.plugin();
    this.route();
    this.errorHandler();
  }
  protected plugin = () => {
    mongoDB.connect();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(function (req: Request, res: Response, next: NextFunction) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
      next();
    });
  };
  protected route = () => {
    this.app.use('/visitor', visitorRoute);
  };
  protected errorHandler = () => {};
}

const app = new App().app;
export default app;
