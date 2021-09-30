import { Category } from '../db/models';

class CategoryControllers {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static getAll = async (req, res) => {
    try {
      let categories = await Category.findAll({});
      res.json(categories);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Error getting categories' });
    }
  };
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static getById = async (req, res) => {
    let { id } = req.params;
    try {
      let category = await Category.findAll({ where: { id } });
      res.json(category);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Error getting category' });
    }
  };
}

export { CategoryControllers };
