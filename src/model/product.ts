
import {Model, DataTypes} from 'sequelize';
import newSequelize  from '../infra/sequelize';

export interface ProductInterface {

       id:Number;
       title: string;
       description: string;
       price: Number;
       brand: string;
       category: string;


}

class Product extends Model implements ProductInterface {
    public id!: Number;
    public title!: string;
    public description!: string;
    public price!: Number;
    public brand!: string;
    public category!: string; 
}

Product.init({

       id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
       },

       title: {
            type: DataTypes.STRING,
            allowNull: false, 
       },
       description: {
        type: DataTypes.STRING,
        allowNull: true, 
      },
      price: {
        type: DataTypes.NUMBER,
        allowNull: false, 
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false, 
   },

     category: {
       type: DataTypes.STRING,
       allowNull: false, 
},

},{
    tableName: 'product',
    sequelize: newSequelize(),
    modelName: 'product',
    timestamps: false

});

export default Product;