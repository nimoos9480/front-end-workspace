let maxScrollValue;

function resizeHandler() {
  maxScrollValue = document.body.offsetHeight - window.innerHeight;
}

window.addEventListener("resize", resizeHandler);
resizeHandler();

const sections = [
  document.querySelector("#mainpage"),
  document.querySelector("#section1"),
  document.querySelector("#login"),
  document.querySelector("#register"),
  document.querySelector("#category"),
  document.querySelector("#waiting"),
  document.querySelector("#quickreservation"),
  document.querySelector("#HOT"),
  document.querySelector("#EVENT"),
  document.querySelector("#customer"),
  document.querySelector("#mypage"),
];

let currentSectionIndex = 0;

window.addEventListener("wheel", function (event) {
  if (event.deltaY > 0) {
    // 휠을 아래로 내린 경우
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
    }
  } else {
    // 휠을 위로 올린 경우
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
    }
  }

  const targetSection = sections[currentSectionIndex];
  window.scrollTo({ top: targetSection.offsetTop, behavior: "smooth" });
});
