// document.querySelector('.footer__last-block_up').onclick = () => {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
// }

let goTopBtn = document.querySelector(".footer__last-block_up");
goTopBtn.addEventListener("click", goTop);

function goTop() {

  if (window.pageYOffset > 0) {
    window.scrollBy(0, -75); 
    setTimeout(goTop, 0); 
  }

}