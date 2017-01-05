

$(document).ready(function() {
  // create a 16*16 grid of divs
  for(x = 0; x < 16; x++) {
    for(y = 0; y < 16; y++) {
      $('#grid-container').append("<div class='grid-block " + x + "-" + y + " inactive-block' ></div>");
    }
  }

});

$(document).on("mouseover", ".grid-block", function() {
  $(this).removeClass("inactive-block");
  $(this).addClass("active-block");


});

$(document).on("mouseover", "#clear", function() {
  $(this).addClass('hover');

});
$(document).on("mouseleave", "#clear", function() {
  $(this).removeClass('hover');

});

$(document).on("click", "#clear", function() {
  $(this).removeClass('hover');
  clearGrid();
});

function clearGrid() {
  for(x = 0; x < 16; x++) {
    for(y = 0; y < 16; y++) {
      console.log(x + "-" + y);
      $grid = $("." + x + "-" + y);
      $grid.removeClass("active-block");
      $grid.addClass("inactive-block");

    }
  }
}
