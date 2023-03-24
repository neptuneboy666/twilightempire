var images = [
  ".//images/GLACIESDROM (2).jpg",
  ".//images/HYDROTHARIX (2).jpg",
  ".//images/REGALONIA (2).jpg",
  ".//images/RUKTH-A-TAR (2).jpg",
  ".//images/WALDDORMNIUM.jpg",
  ".//images/GLACIESDROM.jpg",
  ".//images/HYDROTHARIX.jpg",
  ".//images/REGALONIA.jpg",
  ".//images/RUKTH-A-TAR.jpg",
  ".//images/WALDDORMNIUM (2).jpg",
];

//random pic at beginning
var randomIndex = Math.floor(Math.random() * images.length);
var selectedImage = images[randomIndex];

document.getElementById("home-id").style.backgroundImage =
  "url('" + selectedImage + "')";

//           Change every 5 Seconds
var currentIndex = 0;
var intervalTime = 7000; // Change every 5 seconds

function changeBackgroundImage() {
  currentIndex = (currentIndex + 1) % images.length;
  var selectedImage = images[currentIndex];
  document.getElementById("home-id").style.backgroundImage =
    "url('" + selectedImage + "')";
}

changeBackgroundImage(); // Set the initial background image
setInterval(changeBackgroundImage, intervalTime); // Change the background image every x seconds
