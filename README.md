## Deploy

[Project-HTML-CSS-Javascript](https://teal-mandazi-6c61c2.netlify.app)

## Attribution

https://www.openstreetmap.org/copyright
Data available under the Open Database License.

## Project Setup

Downloaded zip file from provided link, unzipped.  Read through files, looked at design images.

Copied images into Figma.  Figma has tools that allow drawing of shapes and lines, with utilities such as rounding corners of boxes.  Dimensions of elements can be measured to get some idea of precise pixel sizes.

From there, I had dimensions to work with.  Read documentation on IP Geolcation API by IPify, Leaflet.  Read up on indirectly related topics like securing API keys.  Did npm install of dotenv and express.

## Features

Responsive design for desktop and mobile.  Use of IP Geolocation API by IPify and Leaflet (using built-in OpenStreetMap).  Use of Google Font.  View your own IP address on a map, or input valid IP address or domain to see its location.  HTML elements use ARIA (Accessible Rich Internet Applications) where appropriate and/or necessary.

## Additional Notes

IP Geolocation API does not return an error on submission of an invalid IP address or domain.  Rather, it returns an object {"code":422,"messages":"Input correct domain."} (or "messages" as appropriate) as a successful resolve of the fetch request.

IP Geolocation API does not return ISP data on some requests.  Where this is true, I added a message 'Data not available'.

IP Geolocation API does region data e.g. 'North Carolina', not an abbreviation e.g. 'NC'.  I wrote a state/territory to abbreviation converter for the US (only).

## Challenges Faced

Felt generally unwell, which was a challenge of itself.  This also caused me to not think clearly, increasing time required on matters that should have been routine like remembering multiple fields to fix for comparisons between Figma and HTML/CSS, or time needed to process and understand documentation.  Eh.  Could be worse.

Spent a lot of time between Figma, HTML, and CSS styling to get results within a pixel or less of design specifications.  I think that level of precision may not really have been necessary for the assignment.

One of the major early issues was getting Leaflet functionality to work.  The issue turned out to be z-index; Leaflet does not work correctly if the div it uses is set to a different z-level than expected.  Tried rather a lot of things before finding that out, including looking at the code (fairly incomprehensible, in scripts/wonderfulMystery.js), reading a lot of useless help articles, then set up a separate test website with stripped-down functionality to isolate behaviors.  On isolating issue and reading articles, it appears the default z-index is set to 650 or some such thing; changing it breaks the map functionality, and I'd set it to -1 or something like that to work with my CSS layout.

Another major early issue was securing API keys; spent several hours on this.  It seems that npm dotenv uses 'process.' while the browser uses 'document.' or 'window.'  At any rate, the browser seemingly doesn't have access to 'process.' for privacy and security issues.  I'd read that npm express could be used to address the issue, but I didn't get a working solution in time.  I did manage to get express working on a local port, and to display a webpage, but the assignment wasn't to write things in express.   Looks like Netlify's env may require a bit more time to read up on than I'd like to considering time remaining, so I'll put the API key in the code.

A third issue was getting my design to work with Leaflet.  I learned early from documentation that Leaflet rendered onto a div with id 'map'; I created one desktop view and one mobile view, hiding or displaying them alternately using media queries.  (This approach let me prototype both views early, and would have reduced DOM operations).  I got commands working for detecting and acting when the window was resized, but the problem was assigning id 'map' to another HTML element did not cause the map to switch.  I again attempted isolating behavior, but was unsuccessful in resolving this issue.  I ended up changing properties of existing HTML elements depending on window size - a more time-consuming operation as far as writing code was concerned, but possibly inevitable.  (I could have tried persisting with getting Leaflet to work with reassigning "id", but time was running short and that solution was not certain).

## Potential Improvements

I spent enough time on Figma between this and other projects that I think I ought to look at some point at writing some functions to automate matching and resizing of elements.  That would require some sort of code to identify HTML elements from a picture; possibly when I get some more time and look more into costs of LLM visual integration.  I don't imagine it would be cheap.

Validation on IP address/domain input is pretty bare-bones.  Given time, I'd look more into what exactly constitutes IPv4 and IPv6 - for example, are there IPv4 addresses that exist in the syntax but not in real life, or are certain combinations of hexadecimals not possible in extant IPv6 addresses?  There's probably also a data set and/or API somewhere of existing domains that could be used for validation.

As design was constrained by specifications provided by Frontend Mentor, some features were not in line with recommended WCAG/WAI - for example, font size, and font color for placeholder text in the input field.  But besides that is the question of basic user functionality.  If an app is going to go to the trouble of showing a map with a marker on it, I'd say it shouldn't fill up a lot of the map with a centrally placed text screen that displays over the map, and leave a lot of empty unused space.  A simple design is visually appealing, but utility is important too.

The app feature set is too bare for my taste.  It's interesting that a user can see a map and marker of their internet service provider, or put in another IP and see a location, but that's quite limited.  I'd probably want to think about related additional features to add, like building a database of nearby ISPs and show comparative service costs per service period - or anything, really, that would get a user interested in using the site repeatedly.

I don't know whether or not there's a way to secure API keys through the current tech stack of HTML, CSS, and Javascript.  I expect I'll look into it sometime.

## Documentation

See the amazing process that results in near-pixel-perfect results!  (Just a lot of measurements, notes, opacity 20% overlays, comparisons, adjustments.)

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

https://stackoverflow.com/questions/8101364/javascript-to-get-running-processes note - in sum, states browser javascript environment is isolated from system processes for privacy and security reasons.  So document. (browser) and process. (system) will not be able to interact.  There's probably some workaround, but that's outside scope of the assignment.

https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains
https://en.wikipedia.org/wiki/IP_address
https://en.wikipedia.org/wiki/IPv4
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#IPv6_CIDR_blocks
https://www.rexegg.com/regex-quickstart.php
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions
https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
https://stackoverflow.com/questions/12735303/how-to-change-the-map-center-in-leaflet-js
https://www.youtube.com/watch?v=Ym5IjJyI1qA
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Guides/Live_regions
https://gist.github.com/calebgrove/c285a9510948b633aa47 - for formatted state abbreviation data
https://www.faa.gov/air_traffic/publications/atpubs/cnt_html/appendix_a.html