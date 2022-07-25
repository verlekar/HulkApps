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
});