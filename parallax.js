const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed');
        const windowScrollPosition = window.pageYOffset;
        const elementOffsetTop = element.offsetTop;
        const elementHeight = element.offsetHeight;

        const parallaxEffect = (windowScrollPosition - elementOffsetTop) / speed;

        element.style.transform = `translateY(${parallaxEffect}px)`;
    });
});

window.sr = ScrollReveal();
sr.reveal('.section', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out',
    scale: 1.1,
    viewFactor: 0.2
});
window.addEventListener('scroll', () => {
    sr.sync();
});
sr.clean();

function wikipedia(){
    window.open=("https://en.wikipedia.org/wiki/Plagiarism","_blank");
    
  }
  function helpline(){
    window.open=("https://en.wikipedia.org/wiki/Plagiarism","_blank");
  }

  function getRecommendation() {
    var text = document.getElementById("textField");
    text.style.display = "block";
  }
  /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}