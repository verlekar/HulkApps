$(document).ready(function () {
  $(".color-change-btn i").mouseenter(function(){
    var tshirt = $(this).attr("data");
    // console.log(tshirt);
    $(this).addClass("active").parent().siblings().children().removeClass("active");
    $(".sec-four-block img."+tshirt).addClass("active").siblings().removeClass("active");
  });

 
  $("#sidebar").mCustomScrollbar({
      theme: "minimal"
  });

  $('#dismiss, .overlay').on('click', function () {
      $('#sidebar').removeClass('active');
      $('.overlay').fadeOut();
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').addClass('active');
      $('.overlay').fadeIn();
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });


  // ------------ Inc/Dec Counter START ------------ 
  $(".counter__increment, .counter__decrement").click(function(e)
  {
    var $this = $(this);
    var $counter__input = $(this).parent().find(".counter__input");
    var $currentVal = parseInt($(this).parent().find(".counter__input").val());

    //Increment
    if ($currentVal != NaN && $this.hasClass('counter__increment'))
    {
      $counter__input.val($currentVal + 1);
    }
    //Decrement
    else if ($currentVal != NaN && $this.hasClass('counter__decrement'))
    {
      if ($currentVal >= 1) {
        $counter__input.val($currentVal - 1);
      }
    }
  });
  // ------------ Inc/Dec Counter END ------------ 




});