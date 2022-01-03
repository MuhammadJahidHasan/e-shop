import { Sequelize  } from "sequelize";

export class ConnectDb {

    
    private static instance: Sequelize;

    public static initialize(): Sequelize{
          const sq = new Sequelize('e_shop', 'root', 'root', {
            host: '172.17.0.1',
            dialect:'mysql'
         });
         return sq;
    }

    public static getInstance(): Sequelize {
        if(ConnectDb.instance){
            return this.instance;
        }

        this.instance = ConnectDb.initialize();
        return this.instance;
    }

}

   const newSequelize = (): Sequelize => {
         return ConnectDb.getInstance();
   };
      
   export const initializeMySqlConnection = async () => {

    try {
        await newSequelize().authenticate();
       console.log('Database connection established successfully');
   } catch (err) {
       console.log('Unable to connect database', err);
        }

    };

 export default newSequelize;
