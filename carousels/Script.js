var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
// Auto Slide   if you need auto slide ,remove the commit "//"
//var slideIndex = 0;
//showSlides();
//function showSlides() {
    //var i;
  //  var slides = document.getElementsByClassName("mySlides");
   // for (i = 0; i < slides.length; i++) {
   //     slides[i].style.display = "none";
   // }
  //  slideIndex++;
   // if (slideIndex > slides.length) { slideIndex = 1 }
   // slides[slideIndex - 1].style.display = "block";
   // setTimeout(showSlides, 2000); // Change image every 2 seconds
//}
const videos = document.querySelectorAll('.video-item');
let currentIndex = 0;

// Function to center the video
function centerVideo(index) {
    // Loop through all videos and reset them
    videos.forEach((video, i) => {
        video.classList.remove('centered-video');
        video.classList.remove('disabled-video');
        if (i === index) {
            video.classList.add('centered-video');  // Center the clicked video
        } else {
            video.classList.add('disabled-video');  // Disable others
        }
    });
    currentIndex = index;
}

// Add event listeners to each video item
videos.forEach((video, index) => {
    video.addEventListener('click', () => {
        centerVideo(index);
    });
});

// Initially center the first video
centerVideo(currentIndex);