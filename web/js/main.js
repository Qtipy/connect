$('#login-button').click(function(){
  $('#login-button').fadeOut("slow",function(){
    $("#containe-form").fadeIn();
    TweenMax.from("#containe-form", .4, { scale: 0, ease:Sine.easeInOut});
    TweenMax.to("#containe-form", .4, { scale: 1, ease:Sine.easeInOut});
  });
});
