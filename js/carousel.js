const images = [
    'test-forth.jpg',
    'test-second.jpeg',
    'test-third.png',
    'test.jpg'
];

let currImgIdx = 0;

function showCurrentImage() {
    const imgContainer = document.querySelector(".carousel .current-image");
    imgContainer.src = "img/" + images[currImgIdx];
}

showCurrentImage();

const nextButton = document.querySelector(".carousel .next");
nextButton.addEventListener('click', nextButtonClicled);
function nextButtonClicled(){
    currImgIdx++;
    if (currImgIdx >= images.length) currImgIdx = 0;
    showCurrentImage()
}

const prevButton = document.querySelector(".carousel .prev");
prevButton.addEventListener("click", prevButtonClicked);
function prevButtonClicked(){
    currImgIdx--;
    if (currImgIdx == -1) currImgIdx = 3; //currImgIdx = images.length - 1;
    showCurrentImage();
}

// const nextcarousel = document.querySelector(".carousel");
// setInterval(updatecarousel, 1000);
// function updatecarousel(){
//     currImgIdx++;
//     if (currImgIdx >= images.length) currImgIdx = 0;
//     showCurrentImage()
// }


setInterval(nextButtonClicled, 5000);