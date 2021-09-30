import { Category, Product } from '../db/models';

class ProductControllers {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static getAll = async (req, res) => {
    try {
      let products = await Product.findAll({ include: [{ model: Category }] });
      res.json(products);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Error getting products' });
    }
  };
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static getById = async (req, res) => {
    let { id } = req.params;
    try {
      let product = await Product.findAll({ where: { id }, include: [{ model: Category }] });
      res.json(product);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Error getting product' });
    }
  };
}

export { ProductControllers };
