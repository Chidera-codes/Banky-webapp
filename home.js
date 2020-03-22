// function noscroll(params) {
//   window.scrollTo(0,0)
// }
// window.addEventListener('scroll',noscroll);



const navslide = () =>{
  const hamburger_menu = document.querySelector(".hamburger_menu");
  const nav = document.querySelector(".nav_links");


  hamburger_menu.addEventListener('click', ()=>{
  nav.classList.toggle('nav_active');
  hamburger_menu.classList.toggle('toggle');
  
  
});
}
navslide()