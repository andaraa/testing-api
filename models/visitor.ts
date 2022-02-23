import visitor from '../interfaces/visitor';
import { Schema, model, Model } from 'mongoose';

const visitorSchema = new Schema({
  idregister: { type: String, unique: true, required: true },
  tglregistrasi: { type: String, default: '1234abcd' },
  idpasien: { type: String, required: true },
  idpoliklinik: { type: String, required: true },
  pemeriksa: { type: String, required: true },
  idpengguna: { type: String, required: true },
  noantrian: { type: String, required: true },
});

const visitor: Model<visitor> = model<visitor>('visitor', visitorSchema);
export default visitor;
