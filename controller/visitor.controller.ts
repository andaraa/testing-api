import { NextFunction, Request, Response } from 'express';
import visitorModel from '../models/visitor';

class visitorController {
  static async inputVisitor(req: Request, res: Response, next: NextFunction) {
    const { register, tglregister, pasien, poliklinik, pemeriksa, pengguna, noantrian } = req.body;
    try {
      const result = await visitorModel.create({
        idregister: register,
        tglregistrasi: tglregister,
        idpasien: pasien,
        idpoliklinik: poliklinik,
        pemeriksa: pemeriksa,
        idpengguna: pengguna,
        noantrian: noantrian,
      });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
  static async getvisitor(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await visitorModel.find();
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default visitorController;
