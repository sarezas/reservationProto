$("#slider").on("scroll", function() {
  $(".slides").css({
    "background-position": $(this).scrollLeft()/6-100+ "px 0"
  });  
});

// console.log('slide.js works');