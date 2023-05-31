const mnIcon = document.querySelector("div.menu_icon");
const hdEl = document.querySelector("header");
const topEl = document.querySelector("div.top");
const bottomEl = document.querySelector("nav.bottom");

const slEls = document.querySelectorAll("div.select");
const mnEls = document.querySelectorAll("ul.menus");

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
          mnLiEl.style.backgroundColor = 'transparent';
          mnLiEl.classList.add("active");
        } else {
          mnLiEl.style.backgroundColor = "#ffcf00"
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

for (let i = 0; i < slEls.length; i++) {
  for (let i = 0; i < mnEls.length; i++) {
    mnIcon.addEventListener("click", () => {
      
      slEls.forEach((mnLiEl) => {
        if (mnLiEl === slEls[i]) {
          mnLiEl.classList.remove("active");
        }
      });

      mnEls.forEach((vsLiEl) => {
        if (vsLiEl === mnEls[i]) {
          vsLiEl.classList.remove("active");
        } 
      });

    });
  }
}

// 2. PARK MENU & HOTEL MENU, 열고 닫기


// menu switch

const mnLiEls = document.querySelectorAll("div.list_menu");
const vsLiEls = document.querySelectorAll("div.menu_contents");

for (let i = 0; i < mnLiEls.length; i++) {
  for (let i = 0; i < vsLiEls.length; i++) {
    mnLiEls[i].addEventListener("click", () => {
      mnLiEls[i].classList.toggle("active");
      vsLiEls[i].classList.toggle("active");

      mnLiEls.forEach((othermnLiEl) => {
        if (othermnLiEl !== mnLiEls[i]) {
          othermnLiEl.classList.remove("active");
        }
      });

      vsLiEls.forEach((othervsLiEl) => {
        if (othervsLiEl !== vsLiEls[i]) {
          othervsLiEl.classList.remove("active");
        }
      });
    });
  }
}

// menu switch

let accordions = document.querySelectorAll(".accordion-item");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    // 현재 클릭된 메뉴 외부의 모든 메뉴를 닫습니다.
    accordions.forEach(function(accordion) {
      if (accordion !== this) {
        accordion.querySelector(".accordion-content").style.display = "none";
      }
    });

    // 현재 클릭된 메뉴의 컨텐츠를 표시합니다.
    this.querySelector(".accordion-content").style.display = "block";
  });
}
