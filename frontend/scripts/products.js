import { Request } from './request.js';

class Products {
  resourceName = 'product';

  constructor() {
    this.request = new Request(this.resourceName);
  }

  async getAll() {
    let products = await this.request.get();
    return products;
  }

  async search(searchText) {
    let products = await this.request.get(`/search/${searchText}`);
    return products;
  }

  async getByCategory(categoryId) {
    let products = await this.request.get(`/category/${categoryId}`);
    return products;
  }
}

let products = new Products();

export { products };
