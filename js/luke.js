(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

    $('.btn.btn-primary').on('click', function(){
    var comment = $('textarea').val();
    //console.log(comment);
    var field = $("input[type='email']").val();  
    var charCount = $('textarea').val().length;
       if (( comment === "" ),(field === ""),(charCount < 20) ){
        $('textarea').css ('box-shadow', '7px 7px 7px  #000000');
        $('#inputEmail').css ('box-shadow', '7px 7px 7px  #000000');
        $('.help-block with-errors').display();
    } else {
        $('#visible-comment').html(comment);
        $('textarea').hide(500);
        $('.btn.btn-primary').hide(1000);
        var message = 'Was Successfully Sent !';
        $('#confirmation').html(message);
        $('#confirmation').css({'color':'#ffcc66',
                              'font-size':'1.5em',
                              'background-color':'#ffffff',
                              'border': ('2px','double'),
                              'border-radius': ('5px'),
                              'border-color': '#cc9900'});
      };
      
      return false
  });
  
  //if (field == "") {
        //$('textarea').css ('box-shadow', '7px 7px 7px  #000000');
        //$('#inputEmail').css ('box-shadow', '7px 7px 7px  #000000');
        //$('.help-block with-errors').display();
    //} else {
        //$('#visible-comment').html(comment);
        //$('textarea').hide(500);
        //$('.btn.btn-primary').hide(1000);

        //var message = 'Was Successfully Sent !';
        //$('#confirmation').html(message);
        //$('#confirmation').css({'color':'#ffcc66',
                              //'font-size':'1.5em',
                              //'background-color':'#ffffff',
                              //'border': ('2px','double'),
                              //'border-radius': ('5px'),
                              //'border-color': '#cc9900'});
      //};

  //console.log(works);

  for(var i = 0; i < works.length; ++i ) {
    
    $("#gallery").append("\
      <div class='col-sm-6 col-md-4'>\
        <span><a href='" + works[i].pic + "' data-lightbox='work-img' data-title='"+ works[i].link +"'  class='work-img' class='img-responsive'>\
          <img class='img-responsive' src='" + works[i].pic + "'>\
          <span class='info'><p class='proj-title'> " + works[i].title + " </p></span>\
        </a></span>\
      </div>\
    ");


    var images = $("#gallery img");
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid grey");
    } else {
      $(images[i]).css("border", "2px solid black");
    };
  };

})(jQuery); // End of use strict
