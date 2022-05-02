const mobileNav = document.querySelector(".nav-container");
const featuresSubMenu = document.querySelector(".features-sub-menu");
const companySubMenu = document.querySelector(".company-sub-menu");
const arrowIconFeatures = document.querySelector(".features__arrow");
const arrowIconCompany = document.querySelector(".company__arrow");
document.querySelector(".hamburger").addEventListener("click", function () {
  mobileNav.classList.remove("hidden");
});
document
  .querySelector(".hamburger-close")
  .addEventListener("click", function () {
    mobileNav.classList.add("hidden");
  });

// sub menus

document
  .querySelector(".features-dropdown")
  .addEventListener("click", function () {
    arrowIconFeatures.src = "images/icon-arrow-up.svg";
    featuresSubMenu.classList.toggle("hidden");
    if (featuresSubMenu.classList.contains("hidden")) {
      arrowIconFeatures.src = "images/icon-arrow-down.svg";
    }
  });

document
  .querySelector(".company-dropdown")
  .addEventListener("click", function () {
    arrowIconCompany.src = "images/icon-arrow-up.svg";
    companySubMenu.classList.toggle("hidden");
    if (companySubMenu.classList.contains("hidden")) {
      arrowIconCompany.src = "images/icon-arrow-down.svg";
    }
  });
