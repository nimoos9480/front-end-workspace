// window.addEventListener('DOMContentLoaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function(){
    h1.style.background = "skyblue";
});

// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');

// const imgList = document.querySelectorAll('.container img');
const container = document.querySelector('.container');

function removeHandler(event) { // 이벤트 객체
    // imgList[i].style.display = 'none';
    // this.style.display = 'none';
    console.log(event.target);
    // 배경을 클릭해도 전부 지워지는 문제 발생 -> 조건 걸어줘야 
    console.log(event.currentTarget); // container와 같음
    if(event.target!==container) {
        event.target.style.display = 'none';        
    }
    
}

container.addEventListener('click', removeHandler);
// for(let i=0; i<imgList.length; i++) {
//     imgList[i].addEventListener('click', removeHandler);
// }

// imgList[0].addEventListener('click', function(){
//     // img1.target.style.display = 'none';
//     imgList[0].style.display = 'none';
// });
// imgList[1].addEventListener('click', function(){
//     // img2.style.visibility = 'hidden';
//     imgList[1].style.visibility = 'hidden';
// });
// imgList[2].addEventListener('click', function(){
//     imgList[2].style.display = 'none';
// });
// imgList[3].addEventListener('click', function(){
//     imgList[3].style.display = 'none';
// });
// imgList[4].addEventListener('click', function(){
//     imgList[4].style.display = 'none';
// });

