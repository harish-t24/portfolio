function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
  window.scrollTo(0, 0);
}

// Show home section by default
showSection('home');
let lastScrollTop = 0;
let navbar = document.querySelector("nav");

window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        // Scrolling down → hide menu
        navbar.style.top = "-70px";
    } else {
        // Scrolling up → show menu
        navbar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});

