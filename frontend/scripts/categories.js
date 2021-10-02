import { Request } from './request.js';

class Categories {
  resourceName = 'category';

  constructor() {
    this.request = new Request(this.resourceName);
  }

  async getAll() {
    let allCategories = await this.request.get();
    return allCategories;
  }
}

let categories = new Categories();

export { categories };
