class footer {
  get twitter() {
    return $('#page_wrapper > footer > ul > li.social_twitter > a');
  }

  get facebook() {
    return $('#page_wrapper > footer > ul > li.social_facebook > a');
  }

  get linkedin() {
    return $('#page_wrapper > footer > ul > li.social_linkedin > a');
  }
}

export default new footer();
