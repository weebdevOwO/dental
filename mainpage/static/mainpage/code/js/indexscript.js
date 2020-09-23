window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    dots: '.dots',
    arrows: {prev: '.glider-prev', next: '.glider-next'},
  })
})


document.getElementsByClassName("nav-btn")[0].addEventListener("click",function(){
  document.body.classList.toggle("activeNav");
})