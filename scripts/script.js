var car = (function(window){

	function car(slideshow, container, prevButton, nextButton){

		this.currentIndex = 0;

		this.slideshow = document.querySelector("#slider");
		this.container = this.slideshow.querySelector("#slide-container");
		this.content = this.container.querySelector(".content > img");
		this.prevButton = this.slideshow.querySelector("#left-arrow");
		this.nextButton = this.slideshow.querySelector("#right-arrow");

		this.initialize();

	};

	car.prototype.moveToIndex = function(currentIndex){
		this.content.style.transform = `translateX(-${nextIndex*sliderWidth}px)`;
		this.currentSlide = nextIndex;
	};

	car.prototype.initialize = function(){
		this.clicked();
	}


	car.prototype.clicked = function(){
		this.prevButton.addEventListener('click', function(){
			this.moveToIndex(this.currentSlide - 1);
		}, false);

		this.nextButton.addEventListener('click', function(){
			this.moveToIndex(this.currentSlide + 1);
		}, false);


	}
})(this);