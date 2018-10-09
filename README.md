[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

### Don't waste any time coding complex code in JS, just add a few attributes to your HTML elements instead!
### Demonstration on <a href="https://sv443.github.io/LangApplier/demo.html">this page</a>


## Installation:

1. Put this in your document header:
```html
<script src="https://cdn.jsdelivr.net/gh/Sv443/langapplier@1/langapplier.js"></script>
```

2. (optional) Set a default language on your <body> element:

```html
<body data-default_lang="YOUR_LANG_CODE">
<!-- I recommend using a sequence of chars before the lang code (for example: __EN), because it may conflict with your specified content otherwise -->
```





## How to use:

1. Add the class langapp to every element that needs to be affected by the language change
```html
<div class="langapp"></div>
```

2. Add the needed attributes to change specific things of the element:
```html
innerHTML:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="langapp" data-lang_<mark>content</mark>="__EN°English Content|__DE°German Content"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(this affects the innerHTML of the element)
title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="langapp" data-lang_<mark>title</mark>="__EN°English Content|__DE°German Content"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(this affects the title attribute of the element)
src:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img class="langapp" data-lang_<mark>src</mark>="__EN°http://url.to/your/image_EN.png|__DE°http://url.to/your/image_DE.png"&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(this affects the src attribute of the element)
```
