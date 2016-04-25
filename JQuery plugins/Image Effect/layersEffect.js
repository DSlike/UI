(function( $ ){
  $.fn.layersEffect = function( options ) {
    var settings = $.extend( {
      'sensivity':'5',
      'rotate':'true',
      'move':'true',
      'additionalImages':'3',
      'imageClass':'image',
      'opacity':'auto'
    }, options);

    var $thisElement=$("."+this.attr("class"));
    $thisElement.addClass("layers-effect-wrapper");
    var iSrc = $thisElement.children("."+settings.imageClass).attr("src");
    var opacity;
    if(settings.opacity=="auto") opacity = 100/parseInt(settings.additionalImages)/100;
    else opacity = parseInt(settings.opacity);
    for(var i=0; i<parseInt(settings.additionalImages);i++)
      $thisElement.html($thisElement.html()+'<img src="'+iSrc+'" class="'+settings.imageClass+' _layer" style="opacity:'+opacity+'; ">');
    delete(i);
    $thisElement.mousemove(function(e){
      var pos = $(this).offset();
      var elem_left = pos.left;
      var elem_top = pos.top;
      var Xinner = e.pageX - elem_left;
      var Yinner = e.pageY - elem_top;
      var eWidth = $thisElement.width();
      var eHeight = $thisElement.height();
      xPercent=Xinner*101/eWidth;
      yPercent=Yinner*101/eHeight;

      xPercent=50-xPercent;
      if(xPercent>0) xPercent=0-xPercent;
      else if(xPercent<0) xPercent=Math.abs(xPercent);

      yPercent=50-yPercent;
      if(yPercent>0) yPercent=0-yPercent;
      else if(yPercent<0) yPercent=Math.abs(yPercent);

      $("._layer").each(function(index, element)
      {
        if(settings.rotate=="true")
          $thisElement.children("._layer").eq(index).css("transform","rotateX("+(yPercent*(index/(100-parseInt(settings.sensivity))))+"deg)"+"rotateY("+(xPercent*(index/(100-parseInt(settings.sensivity))))+"deg)");
        if(settings.move=="true")
          $thisElement.children("._layer").eq(index).css("left",xPercent*5/(100-parseInt(settings.sensivity))).css("top",yPercent*5/(100-parseInt(settings.sensivity)));
      });
    });
  };
})( jQuery );
