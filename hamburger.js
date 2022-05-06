const mobileNav = document.querySelector(".nav-container");
const featuresSubMenu = document.querySelector(".features-sub-menu");
const companySubMenu = document.querySelector(".company-sub-menu");
const arrowIconFeatures = document.querySelector(".features__arrow");
const arrowIconCompany = document.querySelector(".company__arrow");
document.querySelector(".hamburger").addEventListener("click", function () {
  mobileNav.style.display = "block";
});
document
  .querySelector(".hamburger-close")
  .addEventListener("click", function () {
    mobileNav.style.display = "none";
  });

// sub menus

document
  .querySelector(".features-dropdown")
  .addEventListener("click", function () {
    arrowIconFeatures.src = "images/icon-arrow-up.svg";
    featuresSubMenu.classList.toggle("disabled");
    if (featuresSubMenu.classList.contains("disabled")) {
      arrowIconFeatures.src = "images/icon-arrow-down.svg";
    }
  });

document
  .querySelector(".company-dropdown")
  .addEventListener("click", function () {
    arrowIconCompany.src = "images/icon-arrow-up.svg";
    companySubMenu.classList.toggle("disabled");
    if (companySubMenu.classList.contains("disabled")) {
      arrowIconCompany.src = "images/icon-arrow-down.svg";
    }
  });
