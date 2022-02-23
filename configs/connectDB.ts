import mongoose from 'mongoose';

class mongoDB {
  constructor() {}
  public static connect = async () => {
    try {
      const dbPathUri =
        'mongodb://andara99:dharmeswara45@cluster0-shard-00-00.pqqbf.mongodb.net:27017,cluster0-shard-00-01.pqqbf.mongodb.net:27017,cluster0-shard-00-02.pqqbf.mongodb.net:27017/database1?ssl=true&replicaSet=atlas-11lyil-shard-0&authSource=admin&retryWrites=true&w=majority';
      await mongoose.connect(`${dbPathUri}`);
      console.log('DB connection established');
    } catch (err) {
      console.log(err);
    }
  };
}

export default mongoDB;
