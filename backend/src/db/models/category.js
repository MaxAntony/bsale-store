import { Model, DataTypes } from 'sequelize';
import db from '../connect';

class Category extends Model {
  /**
   * @param {import('sequelize').Sequelize} sequelize
   * @param {import('sequelize').DataTypes} DataTypes
   */
  static init() {
    return super.init(
      {
        name: DataTypes.STRING,
      },
      { sequelize: db, tableName: 'category', timestamps: false },
    );
  }
}

Category.init();

export { Category };
