import Difference from './js/modules/difference';
import DownLoad from './js/modules/download';
import Form from './js/modules/form';
import VideoPlayer from './js/modules/playVideo';
import ShowInfo from './js/modules/showInfo';
import MainSlider from './js/modules/slider/slider-main';
import MiniSlider from './js/modules/slider/slider-mini';

window.addEventListener('DOMContentLoaded', () => {
  const moduleSlider = new MainSlider({
    container: '.moduleapp',
    btns: '.next',
  });
  moduleSlider.render();
  const slider = new MainSlider({ btns: '.next', container: '.page' });
  slider.render();

  new VideoPlayer('.showup .play', '.overlay').init();
  new VideoPlayer('.module__video-item .play', '.overlay').init();

  const showUpSlider = new MiniSlider({
    container: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true,
  });
  showUpSlider.init();

  const modulesSlider = new MiniSlider({
    container: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true,
  });
  modulesSlider.init();

  const feedSlider = new MiniSlider({
    container: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active',
    autoplay: true,
    animate: false,
  });
  feedSlider.init();
  new Difference('.officerold', '.officernew', '.officer__card-item').init();
  new Form('.form').init();
  new ShowInfo('.plus__content').init();
  new DownLoad('.download').init();
});
