# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [The challenge](#the-challenge)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

## The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

## Links

- Solution URL: [https://dbidmead.github.io/blogr](https://dbidmead.github.io/blogr)

## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JS for DOM manipulation

## What I learned

### Animate DOM elements with auto height:
```css
element {
  height: auto;
}
```
Make sure you leave the height set to auto so that you can compute it in the JS file before using JS to set it to zero

```js
const element = document.querySelector('element');
element.elementHeight = getComputedStyle(element).height;
element.style.height = '0px';
```
This way, you store the height value determined automatically by CSS via getComputedStyle(), then you set the height to zero using JS. Now CSS animations will work.

### In CSS syntax, spaces matter!
```css
.class-one .class-two {
  /* selects any child of .class-one that has a class of .class-two */
}

.class-one.class-two {
  /* selects any element containing BOTH .class-one and .class-two */
}
```

### Select the parent of an element in CSS:
```css
div:has(.class) {
  /* select the div that has a child with .class */
}
```

## Author

- GitHub - [@dbidmead](https://github.com/dbidmead)
- Frontend Mentor - [@dbidmead](https://www.frontendmentor.io/profile/dbidmead)