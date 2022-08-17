

$(document).ready(function(){
    

    $(".banner-slider").owlCarousel({
        loop:true,
        nav:true,
        dot:true,
        autoplay:true,
        items:1,
    })
// slider 2

$('.slider-2').owlCarousel({
  center: true,
  loop: true,
  items: 5,
  autoplay:true,
  dot:true,
  responsive:{
    0:{
        items:1,
    },
    600:{
        items:3,
    },
    1000:{
        items:5,
    }
}
});

// slider 3

$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items : 3,
        nav:true,
        autoplay:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    });
});

});