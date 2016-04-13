#Parallax JS

##CDN
```javascript
<script src="https://cdn.rawgit.com/DSlike/UI/master/JQuery%20plugins/JSoftParallax.js">
```

##Using:
In JS code write
```javascript
 $("yourelementClass").JSoftParallax();
 ```
to use default setting Or write
```javascript
$("yourelementClass").JSoftParallax({'speed','speedval'});
```
 where 'speedval' is an number from -100 to 100

To set up the inner elements weight just add the data-weight attribute into HTML element. Data-weight is to just a number from -100 to 100;
0 - ultra light weight and fast, 100 - big weight and slow;
```
Logicaly, if you set data-weight attribute <0 element moving to one direction, if data-weight >0 element moving to other direction.
```
