Documentation: Include a comprehensive README.md file detailing the project setup, features, and any additional notes.

## Project Setup

Downloaded zip file from provided link, unzipped.  Read through files, looked at design images.

Copied images into Figma.  Figma has tools that allow drawing of shapes and lines, with utilities such as rounding corners of boxes.  Dimensions of elements can be measured to get some idea of precise pixel sizes.

## Schedule

Allowing 20 hours; 15 for functionality, 5 for assignment requirements.

1:30 - Download, reading, Figma.  Container div with three internal divs; top section with background image, title, input field, button; bottom section with map; center section absolute position relative to container div.  Conceptually the last could be fixed (so position relative to viewport), but typically I'd put things in a container for more control in case design changes later.

Background images for desktop and mobile precisely match design spec desktop width 1440 and mobile width 375.  Background images are of generic street design that will stand up to a great deal of distortion without looking too odd.  However, probably implement all elements for fixed size, create a fifth container div for the container div with a neutral background color.

The issue with completely dynamic resizing is the center section.  With desktop view, four pieces of information are laid out horizontally with vertical dividers.  With mobile view, information is vertical with no dividers.  A third view (without specifications) would have to be created, and various screen sizes tested with other elements.  Perhaps a stretch goal.

## Features

## Additional Notes

## Resources

https://www.w3schools.com/css/css_positioning.asp
https://developer.mozilla.org/en-US/docs/Web/CSS/position
https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Introduction#normal_layout_flow
https://www.w3schools.com/css/css_inline-block.asp
https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1
https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
https://www.w3schools.com/css/css_align.asp
https://fonts.google.com/selection?query=rubik
https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/text
https://www.w3schools.com/css/css_form.asp
https://www.w3schools.com/css/css3_borders.asp
https://www.sitepoint.com/understanding-and-using-rem-units-in-css/
https://forum.freecodecamp.org/t/how-can-i-avoid-the-square-box-around-the-button-when-i-click/413478/4
https://developer.mozilla.org/en-US/docs/Web/CSS/padding