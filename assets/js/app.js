
//INICIALIZA DOM Y HACE FUNCION SPLASH
$(document).ready(function(){
  $(".home-page").hide();
   setTimeout(function() {
      $('.logo').fadeOut(100);
      $(".home-page").show();
   }, 2000);

  //FUNCION MOUSEOVER
  $(".zoom").hover(function() {
    $(this).addClass("transition");
    }, function() {
      $(this).removeClass("transition");
      });

  //FUNCION BUSQUEDA
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
  
  //FUNCION MODAL
  $(".zoom").click(function(){
    $(".modal-title").empty();
    $(".message").empty();
    $(".address").empty();
    $(".cost").empty();

    var name = $(this).attr("data-name");
    var message = $(this).attr("data-message")
    var address = $(this).attr("data-address");
    var cost = $(this).attr("data-cost");

    $(".modal-title").append(name);
    $(".message").append(message);
    $(".address").append(address);
    $(".cost").append(cost);
  });
});

