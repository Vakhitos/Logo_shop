window.onload = function () {
  // Движение вниз
  let dropMenu__btn = document.querySelector('.dropMenu__btn');
  let dropMenu__body = document.querySelector('.dropMenu__items');
  dropMenu__btn.addEventListener('click', dropDownMenu);
  function dropDownMenu(e) {
    e.preventDefault();
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
      let trans = function () {
        dropMenu__body.classList.remove('fa-enter');
        dropMenu__body.removeEventListener('transitionend', trans);
      }
      dropMenu__body.style.display = 'block';
      dropMenu__body.classList.add('enter');
      raf(function () {
        dropMenu__body.classList.add('fa-enter');
        dropMenu__body.classList.remove('enter');
      });
      dropMenu__body.addEventListener('transitionend', trans);
    } else {
      let trans = function () {
        dropMenu__body.style.display = 'none';
        dropMenu__body.classList.remove('drop');
        dropMenu__body.removeEventListener('transitionend', trans);
      }
      dropMenu__body.classList.add('drop');
      dropMenu__body.addEventListener('transitionend', trans);
    }
  }
// Движение в право
  let linkParents = document.querySelectorAll('.dropMenu__item_parent');
  let subMenu__content = document.querySelector('.subMenu__content');
  for(let i = 0; i < linkParents.length; i++){
    const linkParent = linkParents[i];
    linkParent.addEventListener('mouseenter', function(e){
      e.preventDefault();
      this.classList.add('act');
      var er = this.querySelector('.subMenu__content');
      er.classList.add('sh');
      // linkParent>subMenu__content.classList.add('sh');
    });
    linkParent.addEventListener('mouseleave', function(e){
      this.classList.remove('act');
      var er = this.querySelector('.subMenu__content');
      er.classList.remove('sh');
    });
  }
}
function raf(fn) {
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      fn();
    });
  });
}