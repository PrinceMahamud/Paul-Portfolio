// Mixitup

var mixer = mixitup('.work-grid');

// WOW

wow = new WOW({
    mobile: false
  })
wow.init();

// Popup Menu

function openMenu() {
  document.getElementById('popup-menu').style.width = '100%';
}

function closeMenu() {
  document.getElementById('popup-menu').style.width = '0%';
}

// Scroll behaviour

$('.popup-menu ul li a, .down-icon a').on('click', function(){
  $('html,body').animate({
    scrollTop: $($.attr(this,'href')).offset().top
  },1000);
  return false
});