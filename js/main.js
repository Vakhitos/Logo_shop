
window.onload = function () {
// Переменные компонентов :
  var menuBurger = document.querySelector('.dropDownMenu__burger');
  var menuBody = document.querySelector('.dropDownMenu__body');
  var menuHeader = document.querySelector('.dropDownMenu__header');

  menuBurger.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle('active')

    if (this.classList.contains('active')) {
     
    }
    else {
      menuBody.classList.add('hide');
      menuHeader.classList.add('bb');
      menuBody.addEventListener('transitionend', function () {
        menuBody.style.display = 'none';
        menuBody.classList.remove('hide');
        menuHeader.classList.remove('bb');
      })
    }
  })


}