
const openItem = item => {
  const container = item.closest(".about__item");
  const conttentBlock = container.find(".about__item--content");
  const textBlock = conttentBlock.find(".about__item--container");
  const reqHeight = textBlock.height();

  container.addClass("active");
  conttentBlock.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find('.about__item--content');
  const itemContainer = container.find(".about__item");

  itemContainer.removeClass("active");
  items.height(0);
}


 $('.about__item--title').click(e => {
  const $this  = $(e.currentTarget);
  const container = $this.closest('.about__content');
  const elemContainer = $this.closest(".about__item");

  if (elemContainer.hasClass("active")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
});

