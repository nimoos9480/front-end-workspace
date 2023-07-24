
const click = document.querySelector('.click');
const restart = document.querySelector('.restart');

// console.log(click);
// console.log(restart);

const images = document.querySelectorAll('.main-image img');
const result = document.querySelector('.main-result');
const span = document.querySelector('.click span');

// console.log(images);

let count = 0;

function clikckHandler() {
    span.innerHTML = ++count;
    // console.log("click!!");

    const random = [
        Math.floor(Math.random() * 3) + 1,
        Math.floor(Math.random() * 3) + 1,
        Math.floor(Math.random() * 3) + 1
    ];
    console.log(random);

    for(let i=0; i<images.length; i++) {
        // console.log(images[i]);
        images[i].setAttribute("src", `../../resources/spy${random[i]}.jpg`);
    }

    if(random[0] === random[1] && random[1] === random[2]) {
        // console.log("이미지 3개 일치!!");
        result.innerHTML = "Congratulation!! Press restart to play again!!"
        click.setAttribute("disabled", "disabled");
                                                                                                                                                    
    }
}

function restartHandler() {
    // console.log("restart!!");

    for(let i=0; i<images.length; i++) {
        images[i].setAttribute("src", "../../resources/spy1.jpg");
    }
    count = 0;
    span.innerHTML = "";
    result.innerHTML = "";
    click.removeAttribute("disabled", "disabled");
    
}

click.addEventListener('click', clikckHandler);

restart.addEventListener('click', restartHandler);

