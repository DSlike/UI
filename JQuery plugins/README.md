#Paralax JS

##CDN
```javascript
<script src="https://cdn.rawgit.com/DSlike/UI/master/JQuery%20plugins/paralax.js">
```

##Using:
In JS code write
```javascript
 $("yourelementClass").paralax();
 ```
to use default setting Or write
```javascript
$("yourelementClass").paralax({'speed','speedval'});
```
 where 'speedval' is an number from -100 to 100

To set up the inner elements weight just add the data-weight attribute into HTML element. Data-weight is to just a number from -100 to 100;
-100 - ultra light weight and fast, 100 - big weight and slow;

###Important!
The parrent element must have css property "position" as "relative", and all inner elements must have css property "position" as "absolute"!
