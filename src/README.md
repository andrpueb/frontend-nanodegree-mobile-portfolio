### Getting started

#### How to run the application

To open the website you just need to get into dist folder and open the index.html.

#### Optimizations

To optimize the performance of the website I did the following modifications:

**index.html**

- Added ASYNC to the analytics script.
- Resized pizzeria thumbnail image.

**views/js/main.js**

- Modified the resizePizzas function avoiding the read and write for loop and using the changeSliderLabel function switch to read the sizes.
- Modified the updatePositions function using transform style instead of the variable basicLeft.
- Fixing the background and reduced the amount of pizzas to be rendered.
