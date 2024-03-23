const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
