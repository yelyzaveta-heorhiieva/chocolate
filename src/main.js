import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const feedBackBtn = document.querySelector('.feedback-btn');
const backdrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.modal-close-btn');
const burger = document.querySelector('.menu-btn');
const menu = document.querySelector('.modal-menu');
const closeMenu = document.querySelector('.menu-close-btn');
const form = document.querySelector('.review-form');
const reviews = [];

feedBackBtn.addEventListener('click', () => backdrop.classList.add('is-open'));
closeBtn.addEventListener('click', () => backdrop.classList.remove('is-open'));
burger.addEventListener('click', () => menu.classList.add('is-open'));
closeMenu.addEventListener('click', () => menu.classList.remove('is-open'));
menu.addEventListener('click', evt => {
    if (evt.target.classList.contains('menu-link')) {
        const menuLinks = document.querySelectorAll('.menu-link');
        [...menuLinks].map(link => link.classList.remove('current'));
        evt.target.classList.add('current');
        menu.classList.remove('is-open');
    }
});

form.addEventListener('submit', postForm);
    
    function postForm(evt) {
    evt.preventDefault();
    const { userName, userEmail, userTel, userComent, checkbox } = evt.target.elements;
    if (!userName.value || !userEmail.value || !userTel.value || !userComent.value || !checkbox.checked) {
        return iziToast.error({
            backgroundColor: 'red',
            theme: 'dark',
            overlay: false,
            position: 'topRight',
            title: 'Error',
            titleColor: 'white',
            message: `Please, fill the all fields`,
            messageColor: 'white',
            overlayColor: 'rgba(0, 0, 0, 0.6)',
        });
    }
    backdrop.classList.remove('is-open');
        reviews.push({
            userName: userName.value.trim(),
            userEmail: userEmail.value.trim(),
            userTel: userTel.value.trim(),
            userComent: userComent.value.trim(),
        });
        console.log(reviews);
        form.reset(); 
    };

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  breakpoints: {
    375: {
          slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 16,
    },
   1200: {
       slidesPerView: 3,
       spaceBetween: 28,
    }
  },

  pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
});


