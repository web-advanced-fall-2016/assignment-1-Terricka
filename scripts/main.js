var sliders = new Array();
window.onload = function() {
	var options = {
		transitionTime:500,
		touchTransitionTime:300
	};
	var slidersElements = document.querySelectorAll('.slider');

	for(var i = 0 ; i < slidersElements.length ; i++) {
		sliders.push( new simpleCarousel(i,slidersElements[i],options) );
	}
	for(var i = 0; i < sliders.length; i++) {
		sliders[i].initialize();
	}
}

var prevButton = document.getElementById('#left-arrow');
var nextButton = document.getElementById('#right-arrow');


// // new array object to hold slideshows
// var slideshows = new Array();

// //when the window has loaded
// window.onload = function(){
// 	// time settings
// 	var slideTiming = {
// 			transition: 500,
// 			touchTransition:300
// 	}


// 	// save elements with the class "slide-container" into the variable array
// 	var slideshowElements = document.querySelectorAll('.slide-container');


// 	// for each slideshow, make a new instance of the function "slideshowCarousel"
// 	// as parameters pass the number order of the slideshow, the current element, and slideTiming object
// 	for(var i = 0; i < slideshowElements.length; i++){
// 		slideshows.push( new slideshowCarousel(i, slideshowElements[i], slideTiming));
// 	}

	
// 	// initialize each function for each slideshow
// 	for(var i = 0; i < slideshows.length; i++){
// 		slideshows[i].initialize();

// 	}


// }