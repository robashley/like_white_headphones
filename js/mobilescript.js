$(document).ready(function(){
  if(window.innerWidth <= 800 && window.innerHeight <= 600) {
        $('#myCarousel').carousel({
            interval: 500
        })
  }
});