const slides = document.querySelectorAll(".slide")
const nextBtnSlider = document.querySelector(".nextSlide")
const prevBtnSlider = document.querySelector(".prevSlide")

const slides_amount = slides.length;
const interval = 4000

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, interval);

document.addEventListener('DOMContentLoaded', function () {
    const slider = new ChiefSlider('.slider', {
      loop: true,
      autoplay: true,
      interval: 5000,
    });
  });

upB.addEventListener('click', () => {
    changeSlide('prev')
})

downBtn.addEventListener('click', () => {
    changeSlide('next')
})


for (let i = 0; i < slides_amount; i++) {
  // if (i == 0) btn.className += ' active';
  // btn.addEventListener('click', () => {
  //   clearInterval(slideInterval);
  //   hideSlide(currentSlide);
  //   currentSlide = i;
  //   showSlide(currentSlide);
  //   slideInterval = setInterval(nextSlide, interval);
  // })
  // slider_btns_area.append(btn);
}

function hideSlide(idx) {
  slides[idx].classList.remove('showing');
  slider_btns[idx].classList.remove('active');
}
function showSlide(idx) {
  slides[idx].classList.add('showing');
  slider_btns[idx].classList.add('active');
}
function nextSlide() {
  hideSlide(currentSlide);
  currentSlide = (currentSlide + 1) % slides_amount;
  showSlide(currentSlide);
}