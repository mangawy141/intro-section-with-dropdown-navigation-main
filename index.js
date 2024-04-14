// .clicked-arrows => arrow-up
let features = document.querySelector(".features");
let features_arrow = document.querySelector(
  "nav .primary-navigation .features img"
);
let features_drop_down = document.querySelector(".features-drop-down");

features.addEventListener("click", function () {
  features_arrow.classList.toggle("clicked-arrows");
  features_drop_down.classList.toggle("showIt");
});

let company = document.querySelector(".company");
let company_arrow = document.querySelector(
  "nav .primary-navigation .company img"
);
let company_drop_down = document.querySelector(".company-drop-down");

company.addEventListener("click", function () {
  company_arrow.classList.toggle("clicked-arrows");
  company_drop_down.classList.toggle("showIt");
});

// SIDEBAR -----------------
let sidebar = document.querySelector(".sidebar");
let sidebar_icon = document.querySelector(".sidebar img");
let mobile_menu = document.querySelector(".mobile-menu ul");

let clicked = true;
sidebar.addEventListener("click", function () {
  if (clicked) {
    sidebar_icon.setAttribute("src", "images/icon-close-menu.svg");
    mobile_menu.classList.add("sidebar-shadow");
    mobile_menu.classList.toggle("slide");
    clicked = false;
  } else {
    sidebar_icon.setAttribute("src", "images/icon-menu.svg");
    mobile_menu.classList.remove("sidebar-shadow");
    mobile_menu.classList.toggle("slide");
    clicked = true;
  }
});

let mobile_menu_features = document.querySelector(".mobile-menu .features");
let mobile_menu_arw1 = document.querySelector(".mobile-menu .features img");
let mobile_menu_feat_drop = document.querySelector(
  ".mobile-menu .features-drop-down"
);

mobile_menu_features.addEventListener("click", function () {
  mobile_menu_arw1.classList.toggle("clicked-arrows");
  mobile_menu_feat_drop.classList.toggle("showIt");
  mobile_menu_feat_drop.style.position = "relative";
});

let mobile_menu_company = document.querySelector(".mobile-menu .company");
let mobile_company_arrow = document.querySelector(".mobile-menu .company img");
let mobile_company_drop_down = document.querySelector(
  ".mobile-menu .company-drop-down"
);

mobile_menu_company.addEventListener("click", function () {
  mobile_company_arrow.classList.toggle("clicked-arrows");
  mobile_company_drop_down.classList.toggle("showIt");
  mobile_company_drop_down.style.position = "relative";
});
