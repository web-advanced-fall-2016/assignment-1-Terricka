function simpleCarousel(id,carouselElement, options){
	this.id = id;
	if ( (function(){
		//validate options
		return true;
	})(options) ){
		this.options = options;
	}else{
		this.options = {// set defaults
			transitionTime : 500,
			touchTransitionTime : 300
		};
	}
	this.carousel = carouselElement;
	this.slides = [];
	this.sliderFrame = this.carousel.querySelector('.slider-frame');
	this.sliderContentHolder = this.sliderFrame.querySelector('.slider-content');
	this.sliderFrameWidth = this.sliderFrame.clientWidth;
	this.prev = this.carousel.querySelector('#left-arrow');
	this.next = this.carousel.querySelector('#right-arrow');
	this.currentSlideIndex = 0;


}

simpleCarousel.prototype.initialize= function(){

	this.registerClickHandlers();


	this.setOptions();
};
simpleCarousel.prototype.setOptions = function(){

};


simpleCarousel.prototype.registerClickHandlers= function(){
	var self = this;

	var prevButton = document.getElementById('left-arrow');
	var nextButton = document.getElementById('right-arrow');

	var slideElements = this.sliderFrame.querySelectorAll(' .slider-content > img');
	prevButton.addEventListener('click',function(evnt){
		evnt.stopPropagation();
		self.moveToIndex(self.currentSlideIndex - 1);
		console.log("blehh");

	});

	nextButton.addEventListener('click',function(evnt){
		evnt.stopPropagation();
		self.moveToIndex(self.currentSlideIndex + 1);
		console.log("blehh");

	});



	if(self.currentSlideIndex > slideElements.length){
		self.moveToIndex(0);
	}

	this.sliderContentHolder.style.transition = `transform ${this.options.transitionTime}ms`;

	// if(currentSlideIndex <= slideElements.length){

	// 	nextButton.addEventListener('click',function(evnt){
	// 		evnt.stopPropagation();
	// 		self.moveToIndex(self.currentSlideIndex + 1);
	// 		console.log("next");

	// 	});
	// }

	// for(var i = 0 ; i< this.slides.length ; i++) {
	// 	this.slides[i].c.addEventListener('click',function(evnt){
	// 		evnt.stopPropagation();
	// 		self.moveToIndex(self.currentSlideIndex + 1);
	// 	},false);
	// }



};

simpleCarousel.prototype.moveToIndex = function(nextIndex){
	var self = this;
	var sliderWidth = this.sliderFrameWidth;

	window.setTimeout(function(){
		// self.slides[self.currentSlideIndex].c.classList.remove('current');
		// self.slides[nextIndex].c.classList.add('current');
		self.currentSlideIndex= nextIndex;
	},this.options.transitionTime);
	this.sliderContentHolder.style.transform = `translateX(-${nextIndex*sliderWidth}px)`;
};


// function slideshowCarousel(id,carouselElement, slideTiming){

// 	//set the id of this object to the passed id parameter
// 	this.id = id;

// 	// if function is true
// 	if( (function(){
// 		// will always turn true
// 		// function in parantheses literally returns true as value
// 		return true;


// 	}) (slideTiming)) {
// 		// do this

// 		//set the timer key of this objects to the slideTiming object
// 		this.timer = slideTiming;

// 	} else {
// 		// manually set time again
// 		this.timer = {
// 			transition: 500,
// 			touchTransition:300
// 		}

// 	}


// 	this.carousel = carouselElement;

// 	// create array
// 	this.slideArray = [];

// 	this.slides = this.carousel.querySelector('#slides');
// 	this.slideImages = this.slides.querySelector("#images");
// 	this.slideshowWidth = this.slideImages.clientWidth;
// 	this.currentSlideIndex = 0;

// 	this.isLongTouch = 0;
// 	this.touchStartPosition = {};
// 	this.touchLatestPosition = {};
// 	this.dragDistance = {};



// }


// slideshowCarousel.prototype.initialize = function(){

// 	if( this.checkSlides() > 0){
// 		this.registerClicks();
// 		this.registerTouch();
// 		console.log("truuue");
// 	}

// 	this.setOptions();

// };

// slideshowCarousel.prototype.setOptions = function(){

// };

// slideshowCarousel.prototype.checkSlides = function(){

// 	var self = this;

// 	var slideImages = this.slides.querySelectorAll('#images > img');
// 	var slideNav = this.carousel.querySelector('.slide-navigation > ul');
// 	slideNav.innerHTML = "";


// 	if (!slideImages){
// 		console.warn("Slides not found!");
// 		return -1;

// 	}

// 	if(slideImages > 1){
// 		for(var i = 0; i < slideImages.length; i++){
// 			var slideControl = document.createElement("li");

// 			var ref = `${i}`;
// 			slideControl.dataset.slideId = ref;
// 			slideImages[i].dataset.controlId = ref;

// 			if (i === 0)
// 				slideControl.classList.add('current');

// 			slideNav.appendChild(slideControl);
// 			self.slideArray.push({el:slideImages[i],c:slideControl,ref:ref});
// 		}	
// 		this.slideImages.style.transition = `transform ${this.slideTiming}ms`;
// 		return 1;

// 	}
// 	console.warn("Only 1 slide in this carousel");
// 	return 0;


// };

// slideshowCarousel.prototype.registerClicks = function(){

// 		var self = this;

// 		for(var i = 0; i < this.slideArray.length; i++){
// 			this.slideArray[i].c.addEventListener('click',function(evnt){
// 				event.stopPropagation();
// 				self.moveToIndex(parseInt(evnt.target.dataset.slideId));
// 			}, false);

// 		}

// };

// slideshowCarousel.prototype.registerTouch = function(){
// 	var self = this;

// 	this.slides.addEventListener('touchstart', function(evnt){
// 		evnt.stopPropagation();
// 		evnt.preventDefault();
// 		self.startTouch(evnt);

// 	}, false);

// 	this.slides.addEventListener('touchmove', function(evnt){
// 		evnt.stopPropagation();
// 		evnt.preventDefault();
// 		self.moveTouch(evnt);
// 	}, false);

// };

// slideshowCarousel.prototype.startTouch = function(evnt){
// 	var self = this;
// 	this.isLongTouch = false;
// 	window.setTimeout(function(){
// 		self.isLongTouch = true;
// 	}, 250);

// 	this.touchStartPosition.x = event.touches[0].pageX;
// 	this.touchStartPosition.y = event.touches[0].pageY;

// };

// slideshowCarousel.prototype.moveTouch = function(evnt){

// 	this.touchLatestPosition.x = evnt.touches[0].pageX;
// 	this.touchLatestPosition.y = evnt.touches[0].pageY;

// 	this.dragDistance.x = this.touchLatestPOsition.x - this.touchStartPOsition.x;

// 	var newLeftMargin = this.currentSlideIndex * slideshowWidth - this.dragDistance.x;

// 	this.slideImages.style.transition ='none';
// 	this.slideImages.style.transform = `translateX(-${newLeftMargin}px)`;


// };

// slideshowCarousel.prototype.endTouch = function(){

// 	var self = this;

// 	var nextSlide = this.currentSlideIndex;

// 	if(Math.abs(this.dragDistance.x) > this.slideshowWidth/2 || this.isLongTouch === false){
// 		if(this.dragDistance.x > 0 && this.currentSlideIndex > 0){
// 			next = this.currentSlideIndex - 1;
// 		} else if(this.dragDistance.x < 0 && this.currentSlideIndex < this.slideArray.length - 1){
// 			next = this.currentSlideIndex + 1;
// 		}
// 	}

// 	this.slideImages.style.transition = `transform ${this.slideTiming.touchTransition}ms`;

// 	window.setTime(function(){

// 		self.slideArray[self.currentSlideIndex].c.classList.remove('current');
// 		self.slideArray[next].c.classList.add('current');
// 		self.currentSlideIndex = next;
// 		self.slideImages.style.transform = `transform ${self.slideTiming.transition}ms`;

// 	}, this.slideTiming.touchTransition);

// 	this.slideImages.style.transform = `translateX(-${next * this.slideshowWidth}px)`;

// };


// slideshowCarousel.prototype.moveToIndex = function (next){
// 	var self = this;
// 	var slideWidth = this.slideshowWidth;

// 	window.setTime(function(){
// 		self.slideArray[self.currentSlideIndex].c.classList.remove('current');
// 		self.slideArray[next].c.classList.add('current');
// 		self.currentSlideIndex = next;


// 	}, this.slideTiming.transition);

// 	this.slideImages.style.transform = `translateX(-${next*slideWidth}px)`;
// };









