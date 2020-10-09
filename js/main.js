window.onload = function(){

  let menuBurger = document.querySelector('.header-menu__hamburger');
  let menuTogle = document.querySelector('.drop-menu');

  menuBurger.addEventListener("click", togleMenu);

  function togleMenu(e){
    
    if(menuTogle.classList.contains('show')){
      menuTogle.classList.remove('show');
    }
    else{
      menuTogle.classList.add('show');
      menuTogle.addEventListener('transitionend', function(){
        alert(1);
      });
    }
    
  }

}