import { Category } from './category';
import { Product } from './product';

Category.hasMany(Product, { foreignKey: 'category' });
Product.belongsTo(Category, { foreignKey: 'category' });

export { Category, Product };
