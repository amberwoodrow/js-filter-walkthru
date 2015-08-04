// DOM Manipulation


/*
1. On button click, grab the value
2. Pass the value to a helper function to find values in arr that are in the range
3. Append values back to DOM
*/



$('button').on('click', function(){
  $("#filtered-values").children().remove();
  var domValues = [];
  $('#original-values li').each(function(i, li){
    domValues.push($(li).text());
  });
  // console.log(domValues);
  var upperLimit = $(this).data('val');
  var range = getRanges(upperLimit);

  var arrNew = getValues(range, domValues);
  for (var i=0; i<getValues(range, domValues).length; i++) {
    $("#filtered-values").append('<li class="filterLi">' + getValues(range, domValues)[i] + '</li>');
  }
});


// ploymophism same interface different results