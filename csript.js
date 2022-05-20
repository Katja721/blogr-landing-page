"use strict";
const dropbtn = document.querySelectorAll(".dropbtn");
const menuBtn = document.querySelectorAll(".menuBtn");
const body = document.querySelector("body");
const dropIcon = document.querySelectorAll(".dropIcon");

const dropBtns = [...dropbtn];
const menuBtns = [...menuBtn];
const dropIcons = [...dropIcon];
dropBtns.forEach((element) =>
  element.addEventListener("click", function (e) {
    let index = dropBtns.indexOf(element);
    e.stopImmediatePropagation();
    dropIcons[index].style.transform = "rotate(180deg)";
    menuBtns.forEach((menu) => {
      menu.classList.add("hidden");
    });

    menuBtns[index].classList.toggle("hidden");

    body.addEventListener("click", function () {
      menuBtns[index].classList.add("hidden");
      dropIcons[index].style.transform = "rotate(360deg)";
    });
  })
);
console.log(!menuBtns.some((elem) => elem.classList.contains("hidden")));
/////////////////////////////////////
//mobile version
const mediaMobile1 = window.matchMedia("(max-width: 400px)");
const menuBtnsMobile = document.querySelectorAll(".menuBtnMobile");
const menuOptions = document.querySelectorAll(".menuOptions");
const menuMobile = document.querySelector(".menu_mobile");
const hamburgerIcon = document.querySelector(".hamburger_icon");
const closeIcon = document.querySelector(".close_icon");
const dropIcon_mobile = document.querySelectorAll(".dropIcon_mobile");
const dropIcons_mobile = [...dropIcon_mobile];
const menuBtnsMobileArr = [...menuBtnsMobile];
const menuOptionsArr = [...menuOptions];
console.log(dropIcon_mobile);
console.log(mediaMobile1.matches);
if (mediaMobile1.matches) {
  hamburgerIcon.addEventListener("click", function (e) {
    e.stopImmediatePropagation();
    menuMobile.style.display = "flex";
    hamburgerIcon.style.display = "none";
    closeIcon.classList.remove("hidden");
    closeIcon.addEventListener("click", function () {
      menuMobile.style.display = "none";
      hamburgerIcon.style.display = "block";

      closeIcon.classList.add("hidden");
    });
    menuBtnsMobileArr.forEach((element) =>
      element.addEventListener("click", function (e) {
        let index = menuBtnsMobileArr.indexOf(element);
        e.stopImmediatePropagation();
        dropIcons_mobile[index].style.transform = "rotate(180deg)";
        menuOptionsArr.forEach((menu) => {
          menu.classList.add("hidden");
        });

        menuOptions[index].classList.toggle("hidden");

        body.addEventListener("click", function () {
          menuOptionsArr[index].classList.add("hidden");
          dropIcons_mobile[index].style.transform = "rotate(360deg)";
        });
      })
    );
    //menuBtns=menuOptionsArr
    //dropIcons=dropIcons_mobile
    //dropBtns=menuBtnsMobileArr
  });
  body.addEventListener("click", function () {
    // menuOptionsArr.foreach(elem => elem.classList.add('hidden'));
    dropIcons_mobile.forEach(
      (icon) => (icon.style.transform = "rotate(360deg)")
    );
  });
} else {
  console.log("something is wrong");
}
