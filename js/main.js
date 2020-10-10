window.onload = function () {

  var menuBurger = document.querySelector('.dropDownMenu__burger');
  var menuBody = document.querySelector('.dropDownMenu__body');

  menuBurger.addEventListener('click', treet);

  function treet(e) {
    e.preventDefault();
    this.classList.toggle('active')

    if (this.classList.contains('active')) {
      menuBody.classList.add('hide');
      var handler = function () {
        menuBody.style.display = 'none';
        menuBody.classList.remove('hide');
        menuBody.removeEventListener('transitionend', handler)
      }
      menuBody.addEventListener('transitionend', handler);
    }
    else {
      menuBody.style.display = 'block';
      menuBody.classList.add('enter');

      var handler = function () {
        menuBody.classList.remove('show');
        menuBody.removeEventListener('transitionend', handler)
      }


      raf(function () {
        menuBody.classList.add('show');
        menuBody.classList.remove('enter');
      })

      menuBody.addEventListener('transitionend', handler);


    }
  }
}
function raf(fn) {
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
    fn();
    });
  });


}
