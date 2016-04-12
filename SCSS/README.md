#DSlike_crBox

##CDN
```
@include 'https://cdn.rawgit.com/DSlike/UI/master/SCSS/DSlike_crBox.scss';
```

#Using:

##CheckBox
```
<input type="checkbox" class="chbx yourClass" id="someID"><label for="someID"></label>
```

###Setting:

```
.yourClass
{
  @include checkboxStyling(bgColor, $checkBgColor, checkColor, borderColor, borderWidth, checkElement, tintLabelText(1/0), labelColor);
}
```
| Value | Explanation |
| --- | --- |
| bgColor 	         |color of checkBox background|
| $checkBgColor      |color of checked checkBox background|
| checkColor 	       |color of check element|
| borderColor        |border color :D|
| borderWidth        |oh, you know what is it|
| checkElement       |flag|
| checkedLabelColor  |1 if you want to did label text paler, 0 if didn't|
| labelColor         |color of label bound to checkBox|

## + RadioBox
```
.yourClass
{
  The checkboxStyling Mixin + //if you want change the background, tintLabel property of border
  @include radioButStyling(borderRadius, checkElement, checkColor, uncheckElement, uncheckColor);
}
```
| Value | Explanation |
| --- | --- |
|borderRadius   |curve of radioButton|
|checkElement   |checked radioBut flag|
|checkColor     |color of checked flag|
|uncheckElement |unchecked radioBut flag|
|uncheckColor   |color of unchecked flag|

##IMPORTANT!!
If you want to change location of element, just change absolute cordinates of &+label:after
