import './scss/main.scss';
document.addEventListener('DOMContentLoaded', function () {
  //menu bar
  const menu = document.querySelector('.hamburger');

  menu.addEventListener('click', () => {
    menu.classList.toggle('hamburger--active');
  });
  //slider banner
  const slideList = [
    {
      img: '../images/general/flower1.png',
    },
    {
      img: '../images/general/flower2.png',
    },
    {
      img: '../images/general/flower1.png',
    },
  ];

  const dots = [...document.querySelectorAll('.header__dot')];
  const time = 993000;
  let activeSlide = 0;

  const changeDot = () => {
    const activeDot = dots.findIndex((dot) =>
      dot.classList.contains('header__dot--active')
    );
    dots[activeDot].classList.remove('header__dot--active');
    dots[activeSlide].classList.add('header__dot--active');
    sliderNumber.textContent = `${dots.indexOf(dots[activeSlide]) + 1} of ${
      dots.length
    }`;
  };

  const imageSlider = document.querySelector('.header__image');
  const changeSlide = () => {
    activeSlide++;
    if (activeSlide === slideList.length) {
      activeSlide = 0;
    }
    imageSlider.src = slideList[activeSlide].img;
    changeDot();
  };

  let indexInterval = setInterval(changeSlide, time);

  const clickChangeSlide = function (e) {
    if (e.target.classList.contains('header__dot')) {
      clearInterval(indexInterval);
      const activeDot = dots.findIndex((dot) =>
        dot.classList.contains('header__dot--active')
      );
      dots[activeDot].classList.remove('header__dot--active');
      e.target.classList.add('header__dot--active');
      imageSlider.src = slideList[dots.indexOf(e.target)].img;

      sliderNumber.textContent = `${dots.indexOf(e.target) + 1} of ${
        dots.length
      }`;
      indexInterval = setInterval(changeSlide, time);
    }
  };
  //numery slajdow
  window.addEventListener('click', clickChangeSlide);
});
