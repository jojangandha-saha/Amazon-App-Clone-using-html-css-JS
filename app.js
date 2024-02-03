const slider = document.querySelectorAll(".header-slider ul img");
const prev = document.querySelector(".control_prev");
const next = document.querySelector(".control_next");

let n = 0; //display first img
function changeSlider() {
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  slider[n].style.display = "block";
}
changeSlider();

prev.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = slider.length - 1;
  }
  changeSlider();
});

next.addEventListener("click", (e) => {
  if (n < slider.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlider();
});

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (e) => {
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  });
}
