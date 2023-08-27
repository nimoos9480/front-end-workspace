window.addEventListener("resize", resizeHandler);
resizeHandler();

// navigation click event
const nav = document.querySelector(".menu");
let currentNav;

function navHandler(e) {
  if (currentNav) {
    currentNav.style.backgroundColor = "transparent";
    currentNav.style.color = "#ff5e33";
  }
  if (e.target !== e.currentTarget) {
    console.log(e.target);
    e.target.style.backgroundColor = "#ff5e33";
    e.target.style.color = "white";
    currentNav = e.target;
  }
}

nav.addEventListener("click", navHandler);

// mouse wheel event
const section1 = document.querySelector("#section1");
const login = document.querySelector("#login");
const register = document.querySelector("#register");

let currentSection = section1;
window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    // 휠을 아래로 내린 경우
    if (currentSection === section1) {
      window.scrollTo({ top: login.offsetTop, behavior: "smooth" });
      currentSection = login;
    } else if (currentSection === login) {
      window.scrollTo({ top: register.offsetTop, behavior: "smooth" });
      currentSection = register;
    }
  } else {
    // 휠을 위로 올린 경우
    if (event.deltaY < 0) {
      // 휠을 아래로 내린 경우
      if (currentSection === register) {
        window.scrollTo({ top: login.offsetTop, behavior: "smooth" });
        currentSection = login;
      } else if (currentSection === login) {
        window.scrollTo({ top: section1.offsetTop, behavior: "smooth" });
        currentSection = section1;
      }
    }
  }
});

// scroll - animation 살짝~
window.addEventListener("scroll", function () {
  if (login.getBoundingClientRect().top === 0) {
    console.log(login.children); // HTMLCollection(2) [h2, p]
    login.children[0].classList.add("text-animation"); // => h2태그들에 애니메이션 추가
    login.children[1].classList.add("text-animation");
  } else {
    login.children[0].classList.remove("text-animation");
    login.children[1].classList.remove("text-animation");
  }
});
