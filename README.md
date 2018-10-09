[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

### Don't waste any time coding complex code in JS, just add a few attributes to your HTML elements instead!
### Demonstration on <a href="https://sv443.github.io/LangApplier/demo.html">this page</a>



<br><br><br><br><br><br><br>




# Installation:

### 1. Put this in your document header:
```html
<script src="https://cdn.jsdelivr.net/gh/Sv443/langapplier@1/langapplier.js"></script>
```

### 2. (optional) Set a default language on your <body> element:

```html
<body data-default_lang="YOUR_LANG_CODE">
<!-- I recommend using a sequence of chars before the lang code (for example: __EN), because it may conflict with your specified content otherwise -->
```


<br><br><br><br><br><br><br>


# How to use:

### 1. Add the class langapp to every element that needs to be affected by the language change
```html
<div class="langapp"></div>
```
<br><br>


### 2. Add the needed attributes to change specific things of the element
```html
<div class="langapp" data-lang_content="__EN°English Content|__DE°German Content">
<!--(this affects the innerHTML of the element)-->


<div class="langapp" data-lang_title="__EN°English Content|__DE°German Content">
<!--(this affects the title attribute of the element)-->


<img class="langapp" data-lang_src="__EN°http://url.to/your/image_EN.png|__DE°http://url.to/your/image_DE.png">
<!--(this affects the src attribute of the element)-->
```
Syntax (remove spaces):    `LANG1_CODE  °  LANG1_CONTENT  |  LANG2_CODE  °  LANG2_CONTENT`
<br><br>


### 3. Switch between languages
```javascript
langapp.change("LANG_CODE");
```
<br><br>

### 4. If you want to trigger a function once the language was changed, use an event listener like this
```javascript
document.addEventListener("lang_change", yourFunction);
```
<br><br>

### 5. The document's lang dataset contains the currently selected language so you can read it like this
```javascript
var xy = document.body.dataset.lang;
```
<br><br>

### 6. If you want to disable the watermark in the console, add this to your document header
```html
<meta id="langapplier_disable_watermark">
```
