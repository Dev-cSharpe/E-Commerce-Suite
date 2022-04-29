// Click to toggle the hamburger-icon animation and add the fullscreen-menu overlay.
$(document).ready(function(){
  $('#nav-icon').click(function(){
      $(this).toggleClass('animate-icon');
  });
  $('.search-form-toggle').click(function(){
    $('.search-mobile-toggle, .search-form-toggle').toggleClass('active');
});
});

//sticky
var yourNavigation = $(".navbar");
    stickyDiv = "sticky";
    yourHeader = $('.site-header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > yourHeader ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});

//menu hover open js
const mediaQuery = window.matchMedia('(min-width: 991px)')
// Check if the media query is true
if (mediaQuery.matches) {
$('.dropdown').hover(function(){
  $('.dropdown-toggle', this).trigger('click');
});
}

//body overlay class
$(document).ready(function() {
  $('.site-header .nav-item').hover(function(){     
        $('body').addClass('overlay');    
    },function(){    
       $('body').removeClass('overlay');     
    });
});


//deal-slider slide JS//
$('.hero-slider').owlCarousel({
loop:true,
navRewind: true,
singleslide:true,
margin:0,
nav:true,
dots:false,
slideBy:1,
thumbsPrerendered: true,
autoplay:true,
responsive:{
0:{
  items:1,
  slideBy: 1
},
480:{
  items:1,
  slideBy: 1
},
767:{
  items:1,
  slideBy: 1
},
992:{
  items:1,
  slideBy: 1
},
1200:{
  items:1,
  slideBy: 1
}
}
});

//top seller slide JS//
$('.top-seller-slider').owlCarousel({
  loop:false,
  navRewind: true,
  singleslide:true,
  margin:20,
  nav:true,
  dots:false,
  slideBy:1,
  thumbsPrerendered: true,
  autoplay:true,
  responsive:{
  0:{
    items:1,
    slideBy: 1
  },
  480:{
    items:1,
    slideBy: 1
  },
  767:{
    items:2,
    slideBy: 1
  },
  992:{
    items:3,
    slideBy: 1
  },
  1200:{
    items:4,
    slideBy: 1
  }
  }
});

//new product slide JS//
$('.new-product-slider').owlCarousel({
  loop:true,
  navRewind: true,
  singleslide:true,
  margin:20,
  nav:true,
  dots:false,
  slideBy:1,
  thumbsPrerendered: true,
  autoplay:true,
  responsive:{
  0:{
    items:1,
    slideBy: 1
  },
  480:{
    items:1,
    slideBy: 1
  },
  767:{
    items:3,
    slideBy: 1
  },
  992:{
    items:4,
    slideBy: 1
  },
  1200:{
    items:5,
    slideBy: 1
  }
  }
});

//new product slide JS//
$('.living-room-slider').owlCarousel({
  loop:true,
  navRewind: true,
  singleslide:true,
  margin:20,
  nav:true,
  dots:false,
  slideBy:1,
  thumbsPrerendered: true,
  autoplay:true,
  responsive:{
  0:{
    items:1,
    slideBy: 1
  },
  480:{
    items:1,
    slideBy: 1
  },
  767:{
    items:2,
    slideBy: 1
  },
  992:{
    items:3,
    slideBy: 1
  },
  1200:{
    items:4,
    slideBy: 1
  }
  }
});

//review slide JS//
$('.review-slide').owlCarousel({
  loop:true,
  navRewind: true,
  singleslide:true,
  margin:20,
  nav:true,
  dots:false,
  slideBy:1,
  thumbsPrerendered: true,
  autoplay:true,
  responsive:{
  0:{
    items:1,
    slideBy: 1
  },
  480:{
    items:1,
    slideBy: 1
  },
  767:{
    items:2,
    slideBy: 1
  },
  992:{
    items:3,
    slideBy: 1
  },
  1200:{
    items:4,
    slideBy: 1
  }
  }
});

//review slide JS//
$('.filter-slider').owlCarousel({
  loop:true,
  navRewind: true,
  singleslide:true,
  margin:20,
  nav:true,
  dots:false,
  slideBy:1,
  thumbsPrerendered: true,
  autoplay:true,
  responsive:{
  0:{
    items:1,
    slideBy: 1
  },
  480:{
    items:2,
    slideBy: 1
  },
  767:{
    items:3,
    slideBy: 1
  },
  992:{
    items:5,
    slideBy: 1
  },
  1200:{
    items:6,
    slideBy: 1
  }
  }
});

//partner slider js
$(document).ready(function() {
  $('.partner-slide').owlCarousel({
  loop: true,
  margin: 15,
  items: 7,
  autoplay: true,
  slideTransition: 'linear',
  autoplaySpeed: 6000,
  smartSpeed: 6000,
  center: true,
  responsive:{
    0:{
      items:2,
      slideBy: 1
    },
    480:{
      items:3,
      slideBy: 1
    },
    767:{
      items:4,
      slideBy: 1
    },
    992:{
      items:5,
      slideBy: 1
    },
    1200:{
      items:7,
      slideBy: 1
    }
    }
  });


  $('.owl-carousel').trigger('play.owl.autoplay',[2000]);

  function setSpeed(){
    $('.owl-carousel').trigger('play.owl.autoplay',[6000]);
  }

  setTimeout(setSpeed, 1000);
});

//filter mobile toggle
$(".filter-toggle").click(function(){
  $(".filter").slideToggle()
})

//sidebar accordian
$(document).ready(function() {
  $(".filter-category .filter-category-title, .faq-head, .cart-block .accordign-head").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".filter-list, .faq-content, .accordian-content")
        .slideUp(200);
      $(".filter-category .filter-category-title i, .faq-head i, .cart-block .accordign-head")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".filter-category .filter-category-title i, .faq-head i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".filter-category .filter-category-title, .faq-head, .cart-block .accordign-head").removeClass("active");
      $(this).addClass("active");
      $(".filter-list, .faq-content, .accordian-content").slideUp(200);
      $(this)
        .siblings(".filter-list, .faq-content, .accordian-content")
        .slideDown(200);
    }
  });
});

//add phone no
$(".add-no").click(function(){
  $(".additional, .add-no").addClass('active')
})

//Counter JS
function increaseCount(e, el) {
  var input = el.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}
function decreaseCount(e, el) {
  var input = el.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}

//tooltip
$('[data-toggle="tooltip"]').tooltip({
  'placement': 'top'
});

// hide #back-top first
$("#back-top").hide();

// fade in #back-top
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });

  // scroll body to 0px on click
  $('#back-top a').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

  
  


