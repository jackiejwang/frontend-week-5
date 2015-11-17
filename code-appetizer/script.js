var images = document.createElement("img");

img[0].src="http://www.cats.org.uk/uploads/images/pages/photo_latest14.jpg";
img[1].src="http://rufflifechicago.com/wp-content/uploads/cat-treats.jpg";
img[2].src="http://lovemeow.com/wp-content/uploads/2010/06/cat14.jpg"

function imgCycle() {
for (i=0;i<img.length;i++) {
	if (i=img.length){
		return img[0];
	else {return img[i];
	}
}
}

images.addEventListener("click",imgCycle());    