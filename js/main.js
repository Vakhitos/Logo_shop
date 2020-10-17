window.onload = function () {





  // ===== ЛЕВОЕ МЕНЮ =====
  let dropMenuBtn = document.querySelector('.drop-menu .drop-menu__btn');
  let dropMenuBody = document.querySelector('.drop-menu .drop-menu__body');
  let itemParents = document.querySelectorAll('.drop-menu .drop-menu__item_parent');

  // ===== ФОРМА ПОИКА ПО КАТЕГОРИЯМ =====
  let selectSearch = document.querySelector('.form-search > .select-search');
  let catSearch = document.querySelector('.categories-search');

  // Function - requestAnimationFrame
  function raf(fn) {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        fn();
      });
    });
  }

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
  filterCategoriesBtn.addEventListener('click', function (e) {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      filterCategoriesContent.style.display = 'block';
      filterCategoriesContent.classList.add('show-temp');
      raf(function () {
        filterCategoriesContent.classList.add('show');
      });
      let handler = function () {
        filterCategoriesContent.classList.remove('show-temp');
        filterCategoriesContent.classList.remove('show');
        filterCategoriesContent.removeEventListener('transitionend', handler);
      }
      filterCategoriesContent.addEventListener('transitionend', handler);
    } else {
      filterCategoriesContent.classList.add('hide');
      let handler = function () {
        filterCategoriesContent.style.display = 'none';
        filterCategoriesContent.classList.remove('hide');
        filterCategoriesContent.removeEventListener('transitionend', handler);
      }
      filterCategoriesContent.addEventListener('transitionend', handler);
    }
  });


  
}

// =====================================================

