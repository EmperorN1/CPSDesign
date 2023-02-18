import '../scss/style.scss'

const brandsList = document.querySelector('.brands'),
      brandsExpansion = document.querySelector('#brands'),
      technicsList = document.querySelector('.technics'),
      technicsExpansion = document.querySelector('#technics'),
      servicesText = document.querySelector('.services__descr'),
      servicesTextExpansion = document.querySelector('.services__text-block button'),
      feedbackModal = document.querySelector('#feedback'),
      callModal = document.querySelector('#call'),
      feedbackButton = document.querySelectorAll('.message'),
      callButton = document.querySelectorAll('.phone'),
      modalOverlay = document.querySelectorAll('.modal__overlay'),
      modalClose = document.querySelectorAll('.modal__close'),
      hamburgerButton = document.querySelectorAll('.menu__hamburger'),
      sidemenuPanel = document.querySelector('.sidemenu');

function closeAllModal(button) {
  button.forEach(i => {
    i.addEventListener('click', () => {
      callModal.classList.remove('active');
      feedbackModal.classList.remove('active');
      sidemenuPanel.classList.remove('active');
    });
  })
}

function extendContent(content, button) {
    button.addEventListener('click', () => {
      content.classList.add('expansion');
      button.remove();
    })
}

function openModal(button, modal) {
  button.forEach(i => {
    i.addEventListener('click', () => {
      modal.classList.add('active');
    })
  })
}

extendContent(brandsList, brandsExpansion);
extendContent(technicsList, technicsExpansion);
extendContent(servicesText, servicesTextExpansion);

openModal(callButton, callModal);
openModal(feedbackButton, feedbackModal);
openModal(hamburgerButton, sidemenuPanel);

closeAllModal(modalOverlay);
closeAllModal(modalClose);

// SWIPER

if (document.documentElement.clientWidth < 1440) {
  let swiper = new Swiper(".service-swiper", {
    slidesPerView: "auto",
  });
}

if (document.documentElement.clientWidth < 768) {
  let swiper = new Swiper(".cards-swiper", {
    slidesPerView: 'auto',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}