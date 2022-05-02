const mobileNav = document.querySelector(".nav-container");
document.querySelector(".hamburger").addEventListener("click", function () {
  mobileNav.classList.remove("hidden");
});
document
  .querySelector(".hamburger-close")
  .addEventListener("click", function () {
    mobileNav.classList.add("hidden");
  });
