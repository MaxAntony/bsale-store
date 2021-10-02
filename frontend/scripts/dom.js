import { products } from './products.js';

/**
 * @param {number} price
 * @returns {string}
 */
function formatPrice(price) {
  price = price.toString();
  length = price.length;
  return `S/ ${price.substring(0, length - 2)},${price.substring(length - 2, length)}`;
}

// /**
//  * @param {string} name
//  * @returns {string}
//  */
// function cutName(name) {
//   return `${name.substring(0, 23)}...`;
// }

class Dom {
  static noImage = 'https://www.allianceplast.com/wp-content/uploads/no-image.png';

  static hidePageLoader() {
    let pageLoader = document.getElementById('page-loader');

    pageLoader.classList.add('visuallyHidden');
    pageLoader.addEventListener(
      'transitionend',
      (e) => {
        pageLoader.classList.add('hidden');
      },
      { capture: false, once: true, passive: false },
    );
  }

  static showLoading() {
    let loading = document.getElementById('loading');
    loading.classList.remove('d-none');
  }

  static showNoResults() {
    this.cleanProducts();
    let row = this.getProductContainerRow();
    let noResults = document.createElement('h1');
    noResults.textContent = 'Sin resultados';
    noResults.classList.add('text-center');
    noResults.classList.add('p-5');
    row.appendChild(noResults);
  }
  static showCategoryName(categoryName) {
    let categoryTitle = document.createElement('h2');
    categoryTitle.textContent = `Categoria: ${categoryName}`;
    categoryTitle.classList.add('text-center');
    categoryTitle.classList.add('p-3');
    let row = this.getProductContainerRow();
    row.insertBefore(categoryTitle, row.firstChild);
  }

  static hideLoading() {
    let loading = document.getElementById('loading');
    loading.classList.add('d-none');
  }

  static htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  static createCardProduct({ id, name, urlImage, price, discount, Category }) {
    if (!urlImage) urlImage = this.noImage;
    let { name: categoryName } = Category;
    let card = `<div class="card my-3 " style="width: 18rem">
    <img width="250" height="250" src="${urlImage}" class="card-img-top" alt="${name}" />
    <div class="card-body pb-2">
    <h5 class="card-title">${name}</h5>
  </div>
    <div class="px-3 pb-3 d-flex align-items-end ">
<div style="width:100%" class="d-flex justify-content-between align-items-center">      <p class="card-text mb-0">
${formatPrice(price)}
</p>
<a href="https://api.whatsapp.com/send?phone=51997286267&text=Hola,%20necesito%20comprar%20el%20producto%20${name.replace(
      ' ',
      '%20',
    )}" target="_blank" class="btn btn-primary">Comprar</a></div>
    </div>
  </div>`;
    let cardHtml = this.htmlToElement(card);
    return cardHtml;
  }

  /**
   * @param {{name:string,id:number}}
   * @returns {ChildNode}
   */
  static createCategoryMenuItem({ name, id }) {
    let menuItem = `<li ><a class="dropdown-item" style="cursor: pointer;" category-id='${id}' >${name}</a></li>`;
    menuItem = this.htmlToElement(menuItem);
    return menuItem;
  }

  static cleanProducts() {
    let row = document.querySelector('#products-container .row');
    while (row.lastElementChild) {
      row.removeChild(row.lastElementChild);
    }
  }

  /**
   * @param {[]} productsJson
   */
  static async loadProducts(productsJson) {
    let row = this.getProductContainerRow();
    for (const product of productsJson) {
      let productHtml = this.createCardProduct(product);
      let column = document.createElement('div');
      column.className = 'col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center';
      column.appendChild(productHtml);
      row.appendChild(column);
    }
  }

  static async loadCategoriesMenu(categoriesJson) {
    let element = this.getCategoriesListContainer();
    for (const category of categoriesJson) {
      let categoryEl = this.createCategoryMenuItem(category);
      categoryEl.addEventListener('click', async (e) => {
        this.cleanProducts();
        this.showLoading();
        let categoryId = +e.target.getAttribute('category-id');
        let productsJson = await products.getByCategory(categoryId);
        this.loadProducts(productsJson);
        this.showCategoryName(e.target.textContent);
        this.hideLoading();
      });
      element.appendChild(categoryEl);
    }
  }

  static getProductContainerRow() {
    return document.querySelector('#products-container .row');
  }

  static getSearchText() {
    return document.querySelector('#search-box').value;
  }

  static getSearchButton() {
    return document.querySelector('#search');
  }

  static getCategoriesListContainer() {
    return document.querySelector('#list-categories');
  }

  static getModalProduct() {
    return document.getElementById('modal-product');
  }

  static getHomeLogo() {
    return document.getElementById('home-logo');
  }
}

export { Dom };
