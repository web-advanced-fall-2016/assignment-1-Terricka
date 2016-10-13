console.log(images);

var html;
var slideshow = document.getElementById("slide-show-container");
html = "<ul>";
for(var i = 0; i < images.length; i++){
	
	html += "<li class='images'"+ "><img id='image-" + images[i][0] + "'src='" + images[i][1];
	html += "'>";
	html += "<div class='caption' id='caption-" + images[i][2] + "'>" + images[i][2];
	html += "</div>";
	html += "</li>";
}

html += "</ul>"


var dotsContainer = document.getElementById("dots");
var dots = "";

for(var i = 0; i < images.length; i++){
	dots+= "<li class='dot' onclick='currentSlide(" + [i] + ")'>";
	dots+="</li>"
}


var captionContainer = document.getElementById("captions");
var captions = "";

for(var i = 0; i < images.length; i++){

}


slideshow.innerHTML = html;
dotsContainer.innerHTML = dots;


// slides[0].style.display="block";

var slideIndex = 1;
var next = document.getElementById("right-arrow");
var prev = document.getElementById("left-arrow");


showSlide(slideIndex);

// switch our slides with our arrow keys using the "onclick" attribute in html
function switchSlide(n){
	// calling show slide function with the equation
	// "slideIndex += n" as a parameter for n
	showSlide(slideIndex += n);

}

// switching slides withs buttons using onclick attribute in span tags
function currentSlide(n){

	// calling showSlide function based on button click
	showSlide(slideIndex = n);
}

function showSlide(n){

	// initialize counter variable for for loop
	var i;


	var dotsList = document.getElementsByClassName('dot');
	var slides = document.getElementsByClassName('images');

	if(n > slides.length){
		// restart the array at the first slide index
		slideIndex = 1;
	}

	// if n is less than the amount of elements in the array
	// also: if user has clicked past the beginning of the array
	if(n < 1){
		// go to the end of the array
		slideIndex = slides.length;
	}

	// looping through the arrays


	// while i is less than the length of the slidesArray, add 1 to i each loop
	for(i = 0; i < slides.length; i++){
		// add fadeImage class to current item in the array
		// fameImage class sets the image opacity to 1.0, makign it visible
		slides[i].className = slides[i].className.replace("fadeImage", "");
	}

	// while i is less than length of the dotsArray, add 1 to i each loop
	for(i = 0; i < dotsList.length; i++){
		// add dot-filled class to selected dot
		dotsList[i].className = dotsList[i].className.replace("active", "");
	}

	//access the slideArray with the key number add class called " fadeImage"
	slides[slideIndex-1].className += " fadeImage";

	//access the slideArray with the key number add class called " dot-filled"
	dotsList[slideIndex-1].className += " active";

}

// calling function every 5000 milliseconds
window.setInterval(function(){
	// calls the switch slide function with a parameter of 1 instead of n
	switchSlide(1)
}, 5000);



// showSlide(slideIndex);

// function switchSlide(n){
// 	// calling show slide function with the equation
// 	// "slideIndex += n" as a parameter for n
// 	showSlide(slideIndex += n);
// }

// function currentSlide(n){

// 	// calling showSlide function based on button click
// 	showSlide(slideIndex = n);
// }



// function showSlide(n){

// var i;

// 	// for(i = 0; i < slides.length; i++){
			
		
		

// 	// 	// if(slides[i].classList.contains('active')){
// 	// 	// 	slides[i].className.replace("active", "inactive");
// 	// 	// }

// 	// 	slides[i].className += "active";
// 	// 	slides[i].style.display="block";
// 	// 	dotsList[i].style.backgroundColor = "#000";
// 	// }
// 	var slides = document.getElementsByClassName('images');

// 	for(i = 0; i < slides.length; i++){
// 		slides[i].className = slides[i].className.add(" active", "");
// 	}

// 	// for(i = 0; i < slides.length; i++){
// 	// 	slides[i].className = slides[i].className.replace("inactive", "");
// 	// }

// 	// for(i = 0; i < dotsList.length; i++){
// 	// 	dotsList[i].className = dotsList[i].className.replace("dot-filled", "");
// 	// }

// 	// slides[slideIndex-1].className += " active";

	
// 	// dotsList[slideIndex-1].className += " dot-filled";
// 	// if(n > slides.length){
// 	// 	slideIndex = 1;
// 	// }

// 	// if(n < 1){
// 	// 	slideIndex = slides.length;
// 	// }

// 	console.log("showing");
// }

// function nextSlide(){




// }

// function prevSlide() {


// }

// window.setInterval(function(){
// 	// calls the switch slide function with a parameter of 1 instead of n
// 	switchSlide(1)
// }, 3000);



