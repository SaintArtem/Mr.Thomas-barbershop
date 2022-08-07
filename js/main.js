// preloader
document.body.onload = function () {
   var body = document.querySelector('body');
   body.classList.add('no-overflow');
   setTimeout(function () {
      var preloader = document.getElementById('page-preloader');
      if (!preloader.classList.contains('.done')) {
         preloader.classList.add('done');
         body.classList.remove('no-overflow');
      }
   }, 1500);
};
// scroll
$('a[href^="#"').on('click', function () {
   let href = $(this).attr('href');
   $('html, body').animate({
      scrollTop: $(href).offset().top - 140 //здесь делает отступ
   }, 600); // Здесь меняет скорость прокрутки
   return false;
});
// scroll to top
const scrollToTop = document.getElementById('go-to-top');
window.addEventListener('scroll', function () {
   if (window.scrollY >= 120) {
      scrollToTop.classList.add('visible');
   } else if (window.scrollY < 100) {
      scrollToTop.classList.remove('visible');
   }
});
// hide offer-scroll
const offerScroll = document.querySelector('.offer-scroll');
window.addEventListener('scroll', function () {
   if (window.scrollY >= 170) {
      offerScroll.classList.add('hide');
   } else if (window.scrollY < 170) {
      offerScroll.classList.remove('hide');
   };
});
// sticky header
window.addEventListener('scroll', function () {
   const stickyHeader = document.getElementById('sticky-header');
   stickyHeader.classList.toggle('sticky', window.scrollY > 80);
});
// swiper
const swiper = new Swiper('.swiper', {
   // Optional parameters
   slidesPerView: 1,
   loop: true,
   autoplay: true,
   breakpoints: {
      768: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   }
});
// burger
$('document').ready(function () {
   $('.burger').click(function (event) {
      $('.burger,.menu-mobile,.mobile-menu-overlay').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.mobile-menu-overlay').click(function (e) {
      $('.burger,.mobile-menu-overlay,.menu-mobile').removeClass('active');
      $('body').toggleClass('lock');
   });
});
// HTML element
document.body.insertAdjacentHTML('beforebegin', `<div class="mobile-menu-wrapper">
			<div class="mobile-menu-overlay"></div>
			<ul class="menu-mobile">
				<li class="mobile-menu__item"><a href="#" class="mobile-menu__link menu__link menu__link_active link">Главная</a>
				</li>
				<li class="mobile-menu__item"><a href="#" class="mobile-menu__link menu__link link">Работы
						мастеров</a></li>
				<li class="mobile-menu__item"><a href="#" class="mobile-menu__link menu__link link">Услуги</a></li>
				<li class="mobile-menu__item"><a href="#" class="mobile-menu__link menu__link link">Новости</a></li>
			</ul>
		</div>`);