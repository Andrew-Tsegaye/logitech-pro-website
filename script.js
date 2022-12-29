// Navbar
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("menu-open");
});

// Scroll events
const pagination = document.querySelectorAll(".pagination li a");
const sections = document.querySelectorAll(".main-section");
const offset = 100;

for (let i = 0; i < sections.length; i++) {
  console.log(i);
  window.addEventListener("scroll", () => {
    if (
      window.scrollY > sections[i].offsetTop - offset &&
      window.scrollY < sections[i].offsetTop + sections[i].offsetHeight - offset
    ) {
      pagination.forEach((pag) => {
        pag.classList.remove("active");
      });
      pagination[i].classList.add("active");
    }
  });
}
