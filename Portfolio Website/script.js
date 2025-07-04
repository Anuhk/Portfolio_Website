// Typed text
new Typed('#element', {
  strings: [
    'a computer engineer',
    'a software developer',
    'a problem solver',
    'a creative coder',
    'a curious learner'
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1200,
  loop: true
});

// Scroll reveal
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
