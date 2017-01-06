var initGridSize = 32;
$(document).ready(function() {
  $loadbar = $("#loading");
  $grid = $("#grid-container");
  initGrid(initGridSize, initGridSize);
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
  var size = prompt("Grid Size: ", 16);
  if(!(size > 0)) {
    size = 16;
  }
  var blockWidth = 100/gridWidth;
  clearGrid();
  initGrid(size, size);
});

function initGrid(width, height) {
  gridWidth = width;
  gridHeight = height;
  var blockWidth = 100/gridWidth;
  console.log(blockWidth);
  for(x = 0; x < width; x++) {
    for(y = 0; y < height; y++) {
      $grid.append("<div class='grid-block " + x + "-" + y + " inactive-block'  style='width:" + blockWidth + "%; height:" + blockWidth + "%;'></div>");
    }
  }
}
function clearGrid() {
  $grid.html('');
}
