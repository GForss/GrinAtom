// ...Up button...

let goTopBtn = document.querySelector(".footer__last-block_up");
goTopBtn.addEventListener("click", goTop);

function goTop() {

  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75); 
    setTimeout(goTop, 0); 
  }

}

// ...Burger menu...

let burger = {
  menuButton: document.querySelector('.header__rectangle'),
  menuOpen: document.querySelector('.burger-menu'),
  menuClous: document.querySelector('.burger-menu'),
  menuAnimation: document.querySelector('.burger-menu')
};

burger.menuButton.addEventListener('click', burgerOpen);

function burgerOpen() {
  if (burger.menuOpen.classList.contains('open') == false) {
    burger.menuOpen.classList.add('open');
    burger.menuClous.classList.remove('clous');
  } else {
    burger.menuClous.classList.add('clous');
    burger.menuOpen.classList.remove('open');
  };
};