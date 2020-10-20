window.onload = function () {
  

  // ===== ЛЕВОЕ МЕНЮ =====
  let dropMenuBtn = document.querySelector('.drop-menu .drop-menu__btn');
  let dropMenuBody = document.querySelector('.drop-menu .drop-menu__body');
  let itemParents = document.querySelectorAll('.drop-menu .drop-menu__item_parent');

  // Function - requestAnimationFrame


  // ===== ЛЕВОЕ МЕНЮ "ВНИЗ" =====
  dropMenuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      dropMenuBody.style.display = 'block';
      dropMenuBody.classList.add('show-temp');
      raf(function () {
        dropMenuBody.classList.add('show');
      });
      let handler = function () {
        dropMenuBody.classList.remove('show');
        dropMenuBody.classList.remove('show-temp');
        dropMenuBody.removeEventListener('transitionend', handler);
      }
      dropMenuBody.addEventListener('transitionend', handler);
    }
    else {
      dropMenuBody.classList.add('hide');
      let trend = function () {
        dropMenuBody.style.display = 'none';
        dropMenuBody.classList.remove('hide');
        dropMenuBody.removeEventListener('transitionend', trend);
      }
      dropMenuBody.addEventListener('transitionend', trend);

    }
  });
  // ===== ЛЕВОЕ МЕНЮ "ВПРАВО" =====
  for (let i = 0; i < itemParents.length; i++) {
    const itemParent = itemParents[i];
    itemParent.addEventListener('mouseenter', function () {
      this.classList.add('active');
      let subMenuInner = this.querySelector('.sub-menu__inner');
      if (subMenuInner) {
        subMenuInner.classList.add('show');
      }

    });
    itemParent.addEventListener('mouseleave', function (e) {
      this.classList.remove('active');
      let subMenuInner = this.querySelector('.sub-menu__inner');
      if (subMenuInner) {
        subMenuInner.classList.remove('show');
      }
    });
  }

  // ===== ФОРМА ФИЛЬТР =====
  let filterCategoriesBtn = document.querySelector('.filter-categories__btn');
  let filterCategoriesContent = document.querySelector('.filter-categories__content');
  let categoriesCheckox = document.querySelectorAll('.filter-categories__checkbox-category');

  filterCategoriesBtn.addEventListener('click', filterCategoriesBtnClick);
  function filterCategoriesBtnClick() {
    this.classList.toggle('active');
    raf(function(){
       slideToggle(filterCategoriesContent, filterCategoriesBtn);
    });

  }
  for (let index = 0; index < categoriesCheckox.length; index++) {
    const categoryCheckox = categoriesCheckox[index];
    categoryCheckox.addEventListener('change', function(){
      categoryCheckox.classList.toggle('checkSelect');
      let categoryCheckoxSelect = document.querySelectorAll('.filter-categories__checkbox-category.checkSelect');
      if(categoryCheckoxSelect.length > 0){
        filterCategoriesBtn.classList.add('select');
        let categoryCheckoxQuantity = filterCategoriesBtn.querySelector('.filter-categories__title_qantity');
        categoryCheckoxQuantity.innerHTML = categoryCheckoxQuantity.getAttribute('data-text') + ' ' +categoryCheckoxSelect.length;
      }
      else {
        filterCategoriesBtn.classList.remove('select');
      }
    });
    
  }
}

// =====================================================

// ===== Main Function =====
function raf(fn){
  window.requestAnimationFrame(function(){
    window.requestAnimationFrame(function(){
      fn();
    });
  });
}
//===============================================
function slideToggle(block, btn) {
  if (btn.classList.contains('active')) {
    let handler = function () {
      block.classList.remove('show');
    }
    block.classList.add('show-enter');
    window.requestAnimationFrame(function () {
      block.classList.remove('show-enter');
      block.classList.add('show');
    });
    block.style.display = 'block';
    block.addEventListener('transitionend', handler);
  }
  else {
    block.style.display = 'none';
  }

}
//===============================================
