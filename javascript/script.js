const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
 nav.classList.add('active');
})
}
if (close) {
    close.addEventListener('click', () => {
 nav.classList.remove('active');
})
}


window.addEventListener("scroll", function () {
  let sections = document.querySelectorAll("section");
  let indicators = document.querySelectorAll(".indicator-item");

  sections.forEach((section, index) => {
      let rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          indicators.forEach((indicator) => indicator.classList.remove("active"));
          indicators[index].classList.add("active");
      }
  });
});
