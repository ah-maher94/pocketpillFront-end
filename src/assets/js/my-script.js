$(document).ready(function(){

  $('#home-pharmacist').owlCarousel({
    loop:true,
    items: 4,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        }
    }
  })

  $('#home-testmonials').owlCarousel({
    loop:true,
    items: 3,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
  })

  $('#home-news').owlCarousel({
    loop:true,
    items: 3,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
  })

  $('#home-clients').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })

  $('#categories-popular').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  })


  var tpj = jQuery;
  var revapi34;
  if(tpj("#rev_slider_home").revolution == undefined){
    revslider_showDoubleJqueryError("#rev_slider_home");
  } else{
    revapi34 = tpj("#rev_slider_home").show().revolution({
      sliderType:"standard",
      jsFileLocation:"js/revolution-slider/js/",
      sliderLayout:"fullscreen",
      dottedOverlay:"none",
      delay:9000,
      navigation: {
        keyboardNavigation:"on",
        keyboard_direction: "horizontal",
        mouseScrollNavigation:"off",
        onHoverStop:"on",
        touch:{
          touchenabled:"on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        }
        ,
        arrows: {
          style:"zeus",
          enable:true,
          hide_onmobile:true,
          hide_under:600,
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          tmp:'<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div> </div>',
          left: {
            h_align:"left",
            v_align:"center",
            h_offset:30,
            v_offset:0
          },
          right: {
            h_align:"right",
            v_align:"center",
            h_offset:30,
            v_offset:0
          }
        },
        bullets: {
          enable:true,
          hide_onmobile:true,
          hide_under:600,
          style:"metis",
          hide_onleave:true,
          hide_delay:200,
          hide_delay_mobile:1200,
          direction:"horizontal",
          h_align:"center",
          v_align:"bottom",
          h_offset:0,
          v_offset:30,
          space:5,
          tmp:'<span class="tp-bullet-img-wrap"><span class="tp-bullet-image"></span></span>'
        }
      },
      viewPort: {
        enable:true,
        outof:"pause",
        visible_area:"80%"
      },
      responsiveLevels:[1240,1024,778,480],
      gridwidth:[1240,1024,778,480],
      gridheight:[600,550,500,450],
      lazyType:"none",
      parallax: {
        type:"scroll",
        origo:"enterpoint",
        speed:400,
        levels:[5,10,15,20,25,30,35,40,45,50],
      },
      shadow:0,
      spinner:"off",
      stopLoop:"off",
      stopAfterLoops:-1,
      stopAtSlide:-1,
      shuffle:"off",
      autoHeight:"off",
      hideThumbsOnMobile:"off",
      hideSliderAtLimit:0,
      hideCaptionAtLimit:0,
      hideAllCaptionAtLilmit:0,
      debugMode:false,
      fallbacks: {
        simplifyAll:"off",
        nextSlideOnWindowFocus:"off",
        disableFocusListener:false,
      }
    });
  }


  $("#home-number-1").animateNumbers(10, true, 5000, "linear");
  $("#home-number-2").animateNumbers(2480, true, 5000, "linear");
  $("#home-number-3").animateNumbers(40, true, 5000, "linear");
  $("#home-number-4").animateNumbers(20, true, 5000, "linear");
  $("#about-number-1").animateNumbers(1754, true, 5000, "linear");
  $("#about-number-2").animateNumbers(675, true, 5000, "linear");
  $("#about-number-3").animateNumbers(248, true, 5000, "linear");
  $("#about-number-4").animateNumbers(24, true, 5000, "linear");


});
