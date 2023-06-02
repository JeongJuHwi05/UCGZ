const mnIcon = document.querySelector("div.menu_icon");
const hdEl = document.querySelector("header");
const topEl = document.querySelector("div.top");
const bottomEl = document.querySelector("nav.bottom");

const slEls = document.querySelectorAll("div.select");
const slEl_1 = document.querySelectorAll("div.select_1");
const mnEls = document.querySelectorAll("ul.menus");
const park_menuEl = document.querySelectorAll(".park_menu");

// 1. CLASS : BOTTOM 열고 닫기
mnIcon.addEventListener("click", () => {
  hdEl.classList.toggle("open");
  topEl.classList.toggle("open");
  bottomEl.classList.toggle("open");

  switch (mnIcon.innerText) {
    case 'menu' : 
      mnIcon.textContent = 'close';
      break
    
    case 'close' : 
      mnIcon.textContent = 'menu';
      break
  }
});
// 1. CLASS : BOTTOM 열고 닫기

// 2. PARK MENU & HOTEL MENU, 열고 닫기

for (let i = 0; i < slEls.length; i++) {
  for (let i = 0; i < mnEls.length; i++) {
    slEls[i].addEventListener("click", () => {
      slEls.forEach((mnLiEl) => {
        if (mnLiEl === slEls[i]) {
          mnLiEl.style.textDecoration = 'underline';
          mnLiEl.style.color = '#555';
          mnLiEl.classList.add("active");
        } else {
          mnLiEl.style.textDecoration = 'none';
          mnLiEl.style.color = '#000';
          mnLiEl.classList.remove("active");
        }
      });

      mnEls.forEach((vsLiEl) => {
        if (vsLiEl === mnEls[i]) {
          vsLiEl.classList.add("active");
        } else {
          vsLiEl.classList.remove("active");
        }
      });
    });
  }
}

// 2. PARK MENU & HOTEL MENU, 열고 닫기