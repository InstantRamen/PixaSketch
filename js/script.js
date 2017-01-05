var gridWidth = 100;
var gridHeight = 100;
var blockWidth = 100/gridWidth;
$(document).ready(function() {
  // create a 16*16 grid of divs
  initGrid(gridWidth, gridHeight);

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
  var width = prompt("Grid Size: ", 16);
});

function initGrid(width, height) {
  gridWidth = width;
  gridHeight = height;

  for(x = 0; x < width; x++) {
    for(y = 0; y < height; y++) {
      $('#grid-container').append("<div class='grid-block " + x + "-" + y + " inactive-block'  style='width:" + blockWidth + "%; height:" + blockWidth + "%;'></div>");
    }
  }

}

function clearGrid() {
  for(x = 0; x < gridWidth; x++) {
    for(y = 0; y < gridHeight; y++) {
      console.log(x + "-" + y);
      $grid = $("." + x + "-" + y);
      $grid.removeClass("active-block");
      $grid.addClass("inactive-block");
    }
  }
}
