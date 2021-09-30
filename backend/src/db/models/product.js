import { DataTypes, Model } from 'sequelize';
import db from '../connect';

class Product extends Model {
  /**
   * @param {import('sequelize').Sequelize} sequelize
   * @param {import('sequelize').DataTypes} DataTypes
   */
  static init() {
    return super.init(
      {
        name: DataTypes.STRING,
        urlImage: DataTypes.STRING,
        price: DataTypes.FLOAT,
        discount: DataTypes.INTEGER,

        category: DataTypes.INTEGER,
      },
      { sequelize: db, tableName: 'product', timestamps: false },
    );
  }
}

Product.init();

export { Product };
