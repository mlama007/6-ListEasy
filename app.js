var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  //new text
  $('form').submit(function() {
    var text = $('#todo').val();
    var html = template(text);
    $(html).appendTo('.list');
    $('#todo').val('');
    return false;  
  });
  
  //star clicks
  $(document).on("click", '.glyphicon-star', function(){
    $(this).toggleClass('active');
  });
  
  //remove text
  $(document).on("click", '.glyphicon-remove', function(){
    $(this).parent().remove();
  });
  
};

$(document).ready(main);
