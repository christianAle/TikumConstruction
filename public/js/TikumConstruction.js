const swiper = new Swiper('.swiper-slider', {
  centeredSlides: true,
  grabCursor: false,
  freeMode: false,
  loop: true,
  mousewheel: false,
  navigation: { // activate navigation with navigation buttons
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {// activate paginations
      el: '.swiper-pagination',
      dynamicBullets: false,
      clickable: false
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  // keyboard and mousewheel navigation
  keyboard: false,
  mousewheel: false,
  breakpoints: {
    640: {
      slidesPerView: 1.25,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
  // for other than sliding effect

  // effect: 'creative',
  // creativeEffect: {
  //  prev: {
  //      // will set `translateZ(-400px)` on previous slides
  //      translate: [0, 0, -400],
  //  },
  //  next: {
  //      // will set `translateX(100%)` on next slides
  //      translate: ['100%', 0, 0],
  //  },
  // },
  // effect: 'coverflow',
});

const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();
  let mail = new FormData(form);
  sendMail(mail);
});

const sendMail = (mail) => {
  fetch("/send", {
    method: "post",
    body: mail,
  }).then((response) => {
    return response.json();
  });
};