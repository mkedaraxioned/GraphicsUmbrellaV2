/* Author: 

*/
$(document).ready(function() {

  // Hamburger menu start
  var cross = $(".cross");
  var hamburger = $(".hamburger");
  var html_tag = $("html");
  var header_tag = $("header");
  var navbar = $(".navbar");
  var nav_tag = $(".nav:first-of-type");
  var captcha =$(".captcha-fig");
  cross.hide();
  hamburger.click(function () {
    cross.show();
    $(this).hide();
    navbar.toggleClass("hide-menu-item");
    navbar.toggleClass("hamburger-menu");
    header_tag.toggleClass("header-effect");
    html_tag.toggleClass("no-scroll");
    nav_tag.slideToggle("slow");
    captcha.toggleClass("hide-element");
  });

  cross.click(function () {
    cross.hide();
    hamburger.show();
    navbar.toggleClass("hamburger-menu");
    navbar.toggleClass("hide-menu-item");
    header_tag.toggleClass("header-effect");
    html_tag.toggleClass("no-scroll");
    nav_tag.slideToggle("slow");
    captcha.toggleClass("hide-element");
  });   
  // Hamburger menu end

    // sliders 
    $('.advertisers-section__list').slick({
      dots: false,
      autoplay: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      centerMargin: '40px',
      autoplaySpeed: 2000,
      arrows: false,
      cssEase: 'ease',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 448,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    

    $('.hero-section__list').slick({
      dots: false,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMargin: '40px',
      autoplaySpeed: 2000,
      arrows: true,
      cssEase: 'ease',
    });


    var back_to_top =$(".back-to-top");
    back_to_top.on("click",move_to_top);
    // back to top
    function move_to_top() {
        document.documentElement.scrollTop = 0; 
        document.body.scrollTop = 0;
      }


     // form validation 

  var form = $(".newsletter-form");
  form.on('submit', validateForm);
  var form_ip=$('.form-ip');
  var inputs=['name','email'];
  var persons= {};
  var emailerr;
  var re_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  form_ip.each(function(){
      $(this).on("input",validateField);
  });

  function validateField() {
      var input_data = $(this).val();
      console.log("this inp="+input_data);
      var data_attr=$(this).attr("data-attr");
      console.log("data attr "+data_attr);
      if(data_attr=="email")
      {
          var is_email=re_email.test(input_data);
          var err_class='.'+data_attr+'-error';
          var err_span=$(err_class);
          if(!is_email) {
              err_span.html("Please enter "+data_attr); //ch1
              err_span.addClass('show-element');
              $(this).addClass('outline-red');
              emailerr=1;                  
          }
          else {
              emailerr=0;

              if(err_span.hasClass('show-element'))
              {
                err_span.removeClass('show-element');
                err_span.addClass('hide-element');                  
              }
              if($(this).hasClass("outline-red"))
              {
                  $(this).removeClass("outline-red");
              }

          }
      }

      if(input_data=="")
      {
          var err_class='.'+data_attr+'-error';
          var err_span=$(err_class);
          err_span.html("Please enter "+data_attr); 
          err_span.addClass('show-element')
          $(this).addClass('outline-red');
      }
  }

  function validateForm(event) {
      event.preventDefault();
      form_ip.each(function(index){
          persons[inputs[index]]=$(this).val();
      });
      var formFlag=0;

      for(var i = 0 ; i < inputs.length; i++)
      {   
          if(persons[inputs[i]]=="")
          {
              var err_class='.'+inputs[i]+'-error';
              var err_span=$(err_class);
              err_span.html("Please enter "+inputs[i]); 
              err_span.addClass('show-element');
              var current_form_ip=$('.form-ip:nth-of-type('+i+')');
              current_form_ip.addClass('outline-red');
              formFlag=1; 
          }
      }
      submitform();

      function submitform(){

          if((formFlag===0)&&(emailerr===0)) 
          {
            var span_err_shown=$(".span-error");
            var form_ip=$('.form-ip');
            span_err_shown.each(function(){
              if($(this).hasClass('show-element'))
              {
                  $(this).removeClass('show-element');
                  $(this).addClass('hide-element');                  
              }
          });
          form_ip.each(function(){
              if($(this).hasClass('outline-red'))
              {
                  $(this).removeClass('outline-red');
              }
          });
            var form_ip=$('.form-ip');
          form_ip.each(function(){
              $(this).val("");
          });

          }
      }
    }
  // end of form validation
   

});