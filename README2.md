Documentation: Include a comprehensive README.md file detailing the project setup, features, and any additional notes.

## Attribution

https://www.openstreetmap.org/copyright
Data available under the Open Database License.

## Project Setup

Downloaded zip file from provided link, unzipped.  Read through files, looked at design images.

Copied images into Figma.  Figma has tools that allow drawing of shapes and lines, with utilities such as rounding corners of boxes.  Dimensions of elements can be measured to get some idea of precise pixel sizes.

## Schedule

Allowing 20 hours; 15 for functionality, 5 for assignment requirements.

1:30 - Download, reading, Figma.  Container div with three internal divs; top section with background image, title, input field, button; bottom section with map; center section absolute position relative to container div.  Conceptually the last could be fixed (so position relative to viewport), but typically I'd put things in a container for more control in case design changes later.

Background images for desktop and mobile precisely match design spec desktop width 1440 and mobile width 375.  Background images are of generic street design that will stand up to a great deal of distortion without looking too odd.  However, probably implement all elements for fixed size, create a fifth container div for the container div with a neutral background color.

The issue with completely dynamic resizing is the center section.  With desktop view, four pieces of information are laid out horizontally with vertical dividers.  With mobile view, information is vertical with no dividers.  A third view (without specifications) would have to be created, and various screen sizes tested with other elements.  Perhaps a stretch goal.

Ran npm install dotenv

Seems like dotenv may be incompatible with front-end centric approach.  Specifically, seems .env through dotenv requires a server, that is, setting up with Express.  So it's use webpack, or Express, or so it seems at the moment.

## Features

## Additional Notes

## Documentation

https://www.figma.com/design/X9pKhlTqwUZCOfAU1mpx1J/Untitled?node-id=0-1&t=7B3e6CiRgQO8czYf-1

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
https://www.freecodecamp.org/news/how-to-center-an-absolute-positioned-element/
https://www.w3schools.com/cssref/pr_text_text-align.php
https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing
https://www.w3schools.com/cssref/pr_class_cursor.php
https://developer.mozilla.org/en-US/docs/Web/CSS/:hover
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
https://www.geeksforgeeks.org/javascript/how-to-hide-api-key-in-javascript/
https://dotenvx.com/docs/env-file
https://upsun.com/blog/what-is-env-file/
https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786
https://www.netlify.com/blog/a-guide-to-storing-api-keys-securely-with-environment-variables/
https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files
https://www.dotenv.org/docs/quickstart - note:  dotenvx may be new and free version; priced plans available.
https://stackoverflow.com/questions/69099763/referenceerror-require-is-not-defined-in-es-module-scope-you-can-use-import-in
https://stackoverflow.com/questions/46677752/the-difference-between-requirex-and-import-x - note:  I'd run into require vs import issues already.  There's a lot of references on the internet that don't fix the issue.  Pieced it together from memory from other import issues from multiple earlier assignments.
https://leafletjs.com/examples/quick-start/
https://www.openstreetmap.org/copyright
https://stackoverflow.com/questions/58932742/where-is-l-defined-in-leafletjs
https://leafletjs.com/examples/custom-icons/
https://imgbb.com/ - note:  Leaflet requires URL reference to image file.  Seems to be able to access local file though, after some investigation.
https://www.youtube.com/watch?v=GmH7qkdUy3Q (useless)
https://stackoverflow.com/questions/73611765/how-to-create-a-button-to-enable-disable-zoom-and-pan-for-leaflet-in-javascript
https://www.w3schools.com/tags/att_script_integrity.asp
https://leafletjs.com/examples/map-panes/ note - the essential problem was Leaflet map rendered but no controls worked.  z-index turned out to be the issue.

https://stackoverflow.com/questions/66631773/failed-to-resolve-module-specifier-dotenv-relative-references-must-start-with (useless)
https://www.reddit.com/r/node/comments/yp7zkq/dotenv_error/ (useless)
https://github.com/motdotla/dotenv/issues/821 (useless)
https://dev.to/thepassle/the-javascript-ecosystem-for-the-dazed-and-confused-36il (possibly differences between Node and browser cause issue)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
https://stackoverflow.com/questions/69347533/javascript-not-loading-in-when-importing-other-script
https://forum.freecodecamp.org/t/why-import-in-js-not-working/328947
https://medium.com/@tony.infisical/stop-using-dotenv-in-node-js-v20-6-0-8febf98f6314
https://expressjs.com/
https://expressjs.com/en/starter/installing.html

https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
https://developer.mozilla.org/en-US/docs/Web/API/Element/id
https://www.w3schools.com/jsref/prop_html_id.asp
https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
https://www.w3schools.com/jsref/prop_style_fontsize.asp
https://www.w3schools.com/jsref/prop_style_letterspacing.asp
https://www.w3schools.com/jsref/prop_style_padding.asp
https://www.w3schools.com/jsref/prop_style_fontweight.asp
https://www.w3schools.com/jsref/prop_style_top.asp
https://www.w3schools.com/jsref/prop_style_flexdirection.asp
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
https://www.w3schools.com/jsref/prop_style_display.asp
https://www.w3schools.com/jsref/prop_style_margintop.asp
https://www.w3schools.com/jsref/prop_style_textalign.asp
https://www.w3schools.com/jsref/prop_style_paddingtop.asp

https://stackoverflow.com/questions/8101364/javascript-to-get-running-processes note - in sum, states browser javascript environment is isolated from system processes for privacy and security reasons.  So document. (browser) and process. (system) will not be able to interact.  There's probably some workaround, but that's outside the scope of the assignment.


note to self:  If user needs to run Express on their local end to run process.env or will deployed take this from Netlify?  Deploy, test, edit README.md if special instructions required to get things working!

