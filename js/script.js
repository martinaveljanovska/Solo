//single line comment in js
/* multi line line commnet in js */

//Preloader
$(window).on("load", function() {
  //window on method runs when the page is fully loaded
  $("#status").fadeOut();
  $("#preloader")
    .delay(350)
    .fadeOut("slow");
});

//Slider feature for team members
$(function() {
  //short version of document ready method
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
          // breakpoint from 0 up
        0 : {
          items: 1
      },
      // breakpoint from 480 up
      480 : {
          items: 2
      }
        }
  });
});

// progress bars

$(function() {
  $("#progress-elements").waypoint(
    function() {
      $(".progress-bar").each(function() {
        $(this).animate({ width: $(this).attr("aria-valuenow") + "%" }, 1000);
      });

      this.destroy();
    },
    { offset: "bottom-in-view" }
  );
});

// responsive tabs
$(function() {
  $("#services-tabs").responsiveTabs({
    animation: "slide"
  });
});

// portfolio

$(window).on("load", function() {
  // initialize isotope
  $("#isotope-container").isotope({});
  // filter on button click
  $("#isotope-filters").on("click", "button", function() {
    // get filter value
    var filterValue = $(this).attr("data-filter");
    // filter portfolio items
    $("#isotope-container").isotope({
      filter: filterValue
    });

    //active button
    $("#isotope-filters")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });
});

// magnifier popup

$(function() {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", //child item selector by clicking on it it will popup
    type: "image",
    gallery: {
      enabled: true
    }
  });
});

// testimonials
$(function() {
  //short version of document ready method
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ]
  });
});

// stats section / counter plugin

$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});

// clients

$(function() {
  //short version of document ready method
  $(".clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0 : {
        items: 2
      },
      // breakpoint from 480 up
      480 : {
        items: 3
      },
      768 : {
        items: 6
      }
        }
  });
});

// google map

$(window).on("load", function() {
  // map variables
  var addressString = "Nikola Kljusev 11, Skopje 1000";
  var myLatLng = {
    lat: 41.99725,
    lng: 21.428789
  };

  // render google map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatLng
  });

  // map marker
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Click to see address"
  });

  // info window
  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });
  // on click it will show info window
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
});

// show and hide white navigation

$(function() {
  //show/hide on page load
  showHideNav();
  $(window).scroll(function() {
    //show/hide on scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      //show white
      $("nav").addClass("white-nav-top");
      // show dark logo
      $(".dark-logo").attr("src", "/Solo/img/logo/logo-dark.png");

      // show back to top btn 
      $("#back-to-top").fadeIn();

    } else {
      //hide white
      $("nav").removeClass("white-nav-top");

      // light logo
      $(".dark-logo").attr("src", "/Solo/img/logo/logo.png");

      // hide back to top btn 
      $("#back-to-top").fadeOut();
    }
  }
});

// smooth scroll

$(function() {
  $("a.smooth-scroll").click(function() {
    event.preventDefault();

    // get section id where we want to scroll to
    var sectionId = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(sectionId).offset().top
      },
      1250,
      "easeInOutExpo"
    );
  });
});


// mobile menu 

$(function(){
  
  // show mobile nav 
  $("#mobile-nav-open-btn").click(function(){
    $("#mobile-nav").css("height", "100%");
  });

  // hide mobile nav 
  $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
    $("#mobile-nav").css("height", "0%");
  });
});

// animation

// animate on scroll 
$(function(){
  new WOW().init();
});

$(window).on('load', function(){
  $("#home-heading1").addClass("animated fadeInDown");
  $("#home-heading2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});
