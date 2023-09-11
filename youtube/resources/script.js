const asideIcon = document.querySelector("#aside-icon");
const main = document.querySelector("main");

asideIcon.addEventListener("click", function () {
  // 스타일 변경되는 부분
  main.classList.toggle("aside-change");
});
