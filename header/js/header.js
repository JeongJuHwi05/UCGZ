const mnIcon = document.querySelector("div.menu_icon");
const hdEl = document.querySelector("header");
const topEl = document.querySelector("div.top");
const bottomEl = document.querySelector("nav.bottom");

const slEls = document.querySelectorAll("div.select");
const slEl_1 = document.querySelectorAll("div.select_1");
const mnEls = document.querySelectorAll("ul.menus");
const park_menuEl = document.querySelector(".park_menu");
const hotel_menuEl = document.querySelector(".hotel_menu");



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
          mnLiEl.classList.add("activeSel");
        } else {
          mnLiEl.classList.remove("activeSel");
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

const hotelA = document.querySelectorAll(".hotel_menu a");
const parkA = document.querySelectorAll(".park_menu a");
hotelA.forEach(v => v.addEventListener("click",function(){
  sessionStorage.setItem("menu","hotel");
}));
parkA.forEach(v => v.addEventListener("click",function(){
  sessionStorage.setItem("menu","park");
}));


  if( sessionStorage.getItem("menu") == "hotel" ) {
    hotel_menuEl.classList.add("active");
    document.querySelector(".select_2").classList.add("activeSel");
    park_menuEl.classList.remove("active");
    document.querySelector(".select_1").classList.remove("activeSel");
  } else {
    hotel_menuEl.classList.remove("active");
    document.querySelector(".select_2").classList.remove("activeSel");
    park_menuEl.classList.add("active");
    document.querySelector(".select_1").classList.add("activeSel");
  }
  document.querySelector(".logo").addEventListener("click",function(){
    sessionStorage.removeItem("menu");
    park_menuEl.classList.add("active");
    document.querySelector(".select_1").classList.add("activeSel");
})