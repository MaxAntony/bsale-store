import { categories } from './categories.js';
import { Dom } from './dom.js';
import { products } from './products.js';

window.addEventListener('load', async () => {
  let [categoriesJson, productsJson] = await Promise.all([categories.getAll(), products.getAll()]);
  Dom.loadCategoriesMenu(categoriesJson);
  Dom.loadProducts(productsJson);

  Dom.hidePageLoader();

  // Dom.showLoading();
  // Dom.hideLoading();
});

Dom.getSearchButton().addEventListener('click', async (e) => {
  e.preventDefault();
  Dom.cleanProducts();
  Dom.showLoading();
  let searchText = Dom.getSearchText();
  let productsJson;
  if (searchText.length > 0) {
    productsJson = await products.search(searchText);
  } else {
    productsJson = await products.getAll();
  }
  Dom.loadProducts(productsJson);
  Dom.hideLoading();
});
