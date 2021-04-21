let leftArrow = document.querySelector(
  ".slide-show-container .slide-show-wrapper .left-arrow"
);
let rightArrow = document.querySelector(
  ".slide-show-container .slide-show-wrapper .right-arrow"
);

let slideShows = document.querySelectorAll(
  ".slide-show-container .slide-show-wrapper .slide-show"
);

// initial
let currentIndex = 0;

console.log(leftArrow, rightArrow, slideShows);

leftArrow.addEventListener("click", () => {
  // currentIndex--;
  // if (currentIndex < 0) {
  //   currentIndex = slideShows.length - 1;
  // }
  currentIndex = (currentIndex - 1 + slideShows.length) % slideShows.length;
  updateSlideShow();
});

rightArrow.addEventListener("click", () => {
  // currentIndex++;
  // if (currentIndex == slideShows.length) {
  //   currentIndex = 0;
  // }
  currentIndex = (currentIndex + 1) % slideShows.length;
  updateSlideShow();
});

function updateSlideShow() {
  for (let i = 0; i < slideShows.length; i++) {
    slideShows[i].style.display = "none";
  }
  slideShows[currentIndex].style.display = "block";
}
