'use strict';
const dropbtn = document.querySelectorAll('.dropbtn');
const menuBtn = document.querySelectorAll('.menuBtn');
const body = document.querySelector('body');
const dropIcon = document.querySelectorAll('.dropIcon');

const dropBtns = [...dropbtn];
const menuBtns = [...menuBtn];
const dropIcons = [...dropIcon];
dropBtns.forEach(element =>
  element.addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    let index = dropBtns.indexOf(element);
    dropIcons[index].style.transform = 'rotate(180deg)';
    menuBtns.forEach(menu => {
      menu.classList.add('hidden');
    });

    menuBtns[index].classList.toggle('hidden');
    body.addEventListener('click', function () {
      menuBtns[index].classList.add('hidden');
      dropIcons[index].style.transform = 'rotate(360deg)';
    });
  })
);
/////////////////////////////////////
//mobile version
const mediaMobile1 = window.matchMedia('(max-width: 400px)');
const menuBtnsMobile = document.querySelectorAll('.menuBtnMobile');
const menuOptions = document.querySelectorAll('.menuOptions');
const menuMobile = document.querySelector('.menu_mobile');
const hamburgerIcon = document.querySelector('.hamburger_icon');
const closeIcon = document.querySelector('.close_icon');
const menuBtnsMobileArr = [...menuBtnsMobile];
const menuOptionsArr = [...menuOptions];

console.log(mediaMobile1.matches);
if (mediaMobile1.matches) {
  hamburgerIcon.addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    menuMobile.style.display = 'flex';
    hamburgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    closeIcon.addEventListener('click', function () {
      menuMobile.style.display = 'none';
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    });
    menuBtnsMobile.forEach(btn =>
      btn.addEventListener('click', function (e) {
        const index = menuBtnsMobileArr.indexOf(btn);
        e.stopImmediatePropagation();
        menuOptionsArr[index].classList.toggle('hidden');
        body.addEventListener('click', function () {
          menuOptionsArr[index].classList.add('hidden');
          console.log(
            menuOptionsArr.some(elem => elem.classList.contains('hidden'))
          );
        });
        if (!menuOptionsArr.some(elem => elem.classList.contains('hidden'))) {
          console.log('nothing');
        } else {
          console.log('something');
          menuBtnsMobileArr.forEach(btn =>
            btn.addEventListener('click', function () {
              menuOptionsArr[index].classList.add('hidden');
            })
          );
        }
      })
    );
  });
}