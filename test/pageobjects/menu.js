class menuPage {
  get menuBttn() {
    return $('#react-burger-menu-btn');
  }
  get menuCrossBttn() {
    return $('#react-burger-cross-btn');
  }
  get allItemsBttn() {
    return $('#inventory_sidebar_link');
  }
  get aboutBttn() {
    return $('#about_sidebar_link');
  }
  get logOutBttn() {
    return $('#logout_sidebar_link');
  }
  get resetBttn() {
    return $('#reset_sidebar_link');
  }
  get sidebar() {
    return $('#menu_button_container > div > div.bm-menu-wrap > div.bm-menu');
  }
}

export default new menuPage();
