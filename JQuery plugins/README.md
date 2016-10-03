#Parallax JS

##Example
[CodePen](http://codepen.io/D_Slike/pen/dMdjgY)

##Last version connection link
```javascript
<script src="https://rawgit.com/DSlike/UI/master/JQuery%20plugins/JSoftParallax.js"></script>
```

##Using:
In JS code write
```javascript
 $("yourelementClass").JSoftParallax();
 ```
to use default setting Or write
```javascript
$("yourelementClass").JSoftParallax({'speed':'speedval'});
```
 where 'speedval' is an number from -100 to 100

To set up the inner elements weight just add the data-weight attribute into HTML element. Data-weight is to just a number from -100 to 100;
0 - ultra light weight and fast, 100 - big weight and slow;
```
Logicaly, if you set data-weight attribute <0 element moving to one direction, if data-weight >0 element moving to other direction.
```
***

#ImageEffect JS

##Example
[CodePen](http://codepen.io/D_Slike/pen/jqvbRW)

##Last version connection link
```javascript
<script src="https://rawgit.com/DSlike/UI/master/JQuery%20plugins/Image%20Effect/layersEffect.js"></script>
```

##Using:
In JS code write
```javascript
$(document).ready(function(){
  $(".wrapper").layersEffect({
    'sensivity':'90',
    'rotate':'true',
    'move':'false',
    'additionalImages':'5',
    'imageClass':'default',
    'opacity':'auto'
  });
});
 ```

 Value | Explanation
 --- | ---
 sensivity|sensivity to mouse movements (0-100)
 rotate|(true/false) will image rotate reacting on mouse movements
 move|(true/false) will image move reacting on mouse movements
 additionalImages|count of additional layers of image
 imageClass|class of image to create the layers
 opacity|opacity of layers or auto

```
If you setup opacity value on auto - plugin calculate the opacity for all layers on sum = 1
```
Connect the CSS file
```
<link href="https://rawgit.com/DSlike/UI/master/JQuery%20plugins/Image%20Effect/layersEffect.css">
```
or just write
```
.layers-effect-wrapper ._layer
{
  opacity:.3;
  position:absolute;
  left:0px;
  top:0px;
}
```

##IMPORTANT

Parent block must have a display parameter as relative

***
