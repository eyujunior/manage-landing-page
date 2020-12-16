const header = document.querySelector(".header");
const bars = document.querySelector('.bars');

const exit = document.getElementById('exit');
// close mobile navigation
exit.addEventListener('click', () => header.classList.remove('mobile'))
// hamburger menu
bars.addEventListener('click', () => header.classList.toggle('mobile'));

document.querySelector('main').addEventListener('click', () => {
  if(header.classList.contains('mobile'))
  {
    header.classList.remove('mobile');
  }
})


// navigation background changer
window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 20) {
    header.classList.add('light');
  } else {
    header.classList.remove('light');
  }
});

// new Glider(document.querySelector('.glider'), {
//   slidesToShow: 2,
//   draggable: true,
//   dots: '#dots',
//   arrows: {
//       prev: '.glider-prev',
//       next: '.glider-next'
//   }
// });

document.querySelectorAll('.btn').forEach(element => {
  element.addEventListener('click', () => {
    console.log('clicked');
  })
});

gsap.from('.col-2', {opacity:0, x:-200, duration: 1})
gsap.from('.hero-img', {opacity:0, x:200, duration: 1})
gsap.from('.header', {opacity:0, y:50, duration: 1})

window.sr = ScrollReveal();


sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 400
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 400
});