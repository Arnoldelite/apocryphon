define( ["./initialProperties", "./definition", "./paint", "./support", "text!./style.css"], function (myProps, myDefinition, myPaint, mySupport, cssText) {
	'use strict';
	
	// Create a style element
	var style = document.createElement("style");
	// Set the style element content
	style.innerHTML = cssText;
	// Add the style to the header of the page
    document.querySelector("head").appendChild(style);
    console.log("properties  >>", myProps);
    console.log("myDefinition >>", myDefinition);
    console.log("myPaint >>", myPaint);
    console.log("mySupport >>", mySupport);

	return {
		initialProperties: myProps,
		definition: myDefinition,
		paint: myPaint,
		support: mySupport
	};
})