//  Author: Daniel Votintsev
//  GitHub: https://github.com/DSlike
//  Twitter:https://twitter.com/D_Slike
/*
Using:
In JS code write $("yourelementClass").JSoftParallax();
to use default setting Or write $("yourelementClass").JSoftParallax({'speed','speedval'}); where 'speedval' is an number from 1 to 100

To set up the inner elements weight just add the data-weight attribute into HTML element. data-weight is to just a number from 1 to 100;
1 - light weight and fast, 100 - big weight and slow;
*/

(function( $ ){

  $.fn.JSoftParallax = function( options ) {
    var settings = $.extend( {
      'speed':'5'
    }, options);

    var $JSoftParallaxElement= this.attr("class");
    var position = $("."+$JSoftParallaxElement).position();
    var positionT = position.top;
    var elementH = this.height();
    $(document).ready(function(){  JSoftParallaxIt(); });
    $( window ).scroll(function(){  JSoftParallaxIt(); });
    function JSoftParallaxIt()
    {
      var scrollT = $( window ).scrollTop() - positionT;
      var blockEnd= positionT + elementH;
      if($( window ).scrollTop() + window.innerHeight >= positionT)
      {
        var tp = scrollT*100/blockEnd;
        $("."+$JSoftParallaxElement).css('background-position', 'center '+(50-(tp/(101-settings.speed)))+'%');
        $("."+$JSoftParallaxElement).children().each(function(index, element){
          var weight = $(element).attr("data-weight");
          $(element).css("margin-top",(tp/(weight))+"%");
        });
        $("."+$JSoftParallaxElement).css("filter","blur("+(tp/(101-settings.speed))+"px)")
      }
    }
  };
})( jQuery );
