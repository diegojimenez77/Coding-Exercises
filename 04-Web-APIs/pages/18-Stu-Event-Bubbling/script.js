// Selects carousel element
var carousel = document.querySelector(".carouselbox");

// Selects buttons using their parent carousel element
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
    "https://kickstart.bikeexif.com/wp-content/uploads/2022/09/custom-kawasaki-z125-625x417.jpg",
    "https://kickstart.bikeexif.com/wp-content/uploads/2022/09/kawasaki-kz1000r-s1-replica-625x417.jpg",
    "https://kickstart.bikeexif.com/wp-content/uploads/2022/05/kawasaki-estrella-custom-625x417.jpg",
    "https://kickstart.bikeexif.com/wp-content/uploads/2022/04/kawasaki-z400-625x417.jpg"
];

carousel.style.backgroundImage =  "url('https://kickstart.bikeexif.com/wp-content/uploads/2021/12/ac-sanctuary-rcm-a16-420x280.jpg')";

function navigate(direction) {
    index = index + direction;
    if (index < 0) {
        index = images.length -1;
    } else if (index > images.length -1){
        index = 0;
    }
    currentImage = images[index];
    carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// Clicking on image opens a new window containing the image
carousel.addEventListener("click", function() {
    window.location.href = images[index];
});

// Clicking on next button displays next image in carousel
next.addEventListener("click", function(event) {
    //stops event from bubbling up and new window opening
    event.stopPropagation();

    navigate(1);
});

//Clicking previous displays previous image in carousel
prev.addEventListener("click", function(event){
    //Event bubbling would occur and a new window would open if we did not include the following line of code.
    event.stopPropagation();

    navigate(-1);
});

navigate(0);