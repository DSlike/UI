(function( $ ){

  $.fn.paralax = function( options ) {

   var settings = $.extend( {
      'speed':'5'
    }, options);

    //this.addClass("paralax-element");
    var $thisElement= this.attr("class");
    var position = $("."+$thisElement).position();
    var positionT = position.top;
    var elementH = this.height();

    $(document).ready(function(){
      var scrollT = $( window ).scrollTop() - positionT;
      var blockEnd= positionT + elementH;
      if($( window ).scrollTop() + window.innerHeight >= positionT)
      {
        var tp = scrollT*100/blockEnd;
        $("."+$thisElement).css('background-position', 'center '+(50-(tp/(11-settings.speed)))+'%');
        $("."+$thisElement).children().each(function(index, element){
          var weight = $(element).attr("data-weight");
          $(element).css("margin-top",(tp/(weight))+"%");
        });
      }
    });

    $( window ).scroll(function(){
      var scrollT = $( window ).scrollTop() - positionT;
      var blockEnd= positionT + elementH;
      if($( window ).scrollTop() + window.innerHeight >= positionT)
      {
        var tp = scrollT*100/blockEnd;
        $("."+$thisElement).css('background-position', 'center '+(50-(tp/(11-settings.speed)))+'%');
        $("."+$thisElement).children().each(function(index, element){
          var weight = $(element).attr("data-weight");
          $(element).css("margin-top",(tp/(weight))+"%");
        });
        $("."+$thisElement).css("filter","blur("+(tp/(11-settings.speed))+"px)")
      }
    });
  };
})( jQuery );
