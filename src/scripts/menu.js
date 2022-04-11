
(function () {
 const openItem = item => {
    const container = item.closest(".menu__item");
    const conttentBlock = container.find(".menu__sub-content");
    const textBlock = conttentBlock.find(".menu__sub-list");
   
    const reqHeight = textBlock.height();
  
    container.addClass("active");
    conttentBlock.height(reqHeight);
    document.documentElement.classList.toggle('locked');
  }
  
  const closeEveryItem = container => {
    const items = container.find('.menu__sub-content');
    const itemContainer = container.find(".menu__item"); 
    itemContainer.removeClass("active");
    items.height(0);
    document.documentElement.classList.remove('locked');
  }
  
  
   $('.menu__link').click(e => {
    const $this  = $(e.currentTarget);
    const container = $this.closest('.menu__body');
    const elemContainer = $this.closest(".menu__item");
  
    if (elemContainer.hasClass("active")) {
      closeEveryItem(container);
    } else {
      closeEveryItem(container);
      openItem($this);
     
    }
  }); 
})();

