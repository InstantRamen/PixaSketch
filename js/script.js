

$(document).ready(function() {
  // create a 16*16 grid of divs
  for(x = 0; x < 16; x++) {
    for(y = 0; y < 16; y++) {
      $('#container').append("<div class='grid-block " + x + "-" + y + "' ></div>");
    }
  }

});

$(document).on("mouseover", ".grid-block", function() {
  $(this).css("background-color", "black");

})
