class ProductsPage {
  get addBackpack() {
    return $('#add-to-cart-sauce-labs-backpack');
  }

  get addBikelight() {
    return $('#add-to-cart-sauce-labs-bike-light');
  }

  get addBoltTshirt() {
    return $('#add-to-cart-sauce-labs-bolt-t-shirt');
  }

  get removeBackpack() {
    return $('#remove-sauce-labs-backpack');
  }

  get removeBikelight() {
    return $('#remove-sauce-labs-bike-light');
  }

  get bpackDescrBttn() {
    return $(
      '#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.inventory_item_desc',
    );
  }

  get backlightDescrBtn() {
    return $(
      '#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.inventory_item_desc',
    );
  }

  get backToProductsBttn() {
    return $('#back-to-products');
  }

  get contShoppBttn() {
    return $('#continue-shopping');
  }

  get sortMenu() {
    return $('#header_container > div.header_secondary_container > div > span');
  }

  get sortByNameAZ() {
    return $(
      '#header_container > div.header_secondary_container > div > span > select > option:nth-child(1)',
    );
  }

  get sortByNameZA() {
    return $(
      '#header_container > div.header_secondary_container > div > span > select > option:nth-child(2)',
    );
  }

  get sortByLowToHigh() {
    return $(
      '#header_container > div.header_secondary_container > div > span > select > option:nth-child(3)',
    );
  }

  get sortByHighToLow() {
    return $(
      '#header_container > div.header_secondary_container > div > span > select > option:nth-child(4)',
    );
  }

  get cartBttn() {
    return $('#shopping_cart_container > a');
  }
}

export default new ProductsPage();
