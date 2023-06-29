class Page {
  get welcomePage() {
    return $('#header_container > div.header_secondary_container > span');
  }

  get rightImage() {
    return $('#item_4_img_link > img');
  }

  get wrongImage() {
    return $('#item_0_img_link > img');
  }
}

export default new Page();
