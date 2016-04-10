//  Author: Daniel Votintsev
//  GitHub: https://github.com/DSlike
//  Twitter:https://twitter.com/D_Slike

(function( $ ){

  $.fn.paralax = function( options ) {

    var settings = $.extend( {
      'speed':'5'
    }, options);

    var $thisElement= this.attr("class");
    var position = $("."+$thisElement).position();
    var positionT = position.top;
    var elementH = this.height();

    $(document).ready(function(){
      paralaxIt();
    });

    $( window ).scroll(function(){
      paralaxIt();
    });

    function paralaxIt()
    {
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
    }

  };
})( jQuery );
