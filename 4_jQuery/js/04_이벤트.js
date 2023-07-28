// 1.이벤트 연결
// 1) on, off
/*
$('#area1').on('mouseenter', function(event) {
    // 마우스가 올라갔을 때 
    // 배경색상 : beige, 텍스트 : 마우스가 올라감
    // $('#area1').css('background-color', 'beige').text('마우스가 올라감');
    $(event.target).css('background-color', 'beige').text('마우스가 올라감');
});

// mouseleave 함수
// 배경색상 : hotpink, 텍스트 : 마우스가 내려감
$('#area1').on('mouseleave', function(event) {
    $(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
});
*/


// 한번에 합치기
// $('#area1').on('mouseenter mouseleave', function(event) {
//     console.log(event.type);
//     if(event.type === 'mouseenter') {
//         $('#area1').css('background-color', 'beige').text('마우스가 올라감');
//     } else if(event.type === 'mouseleave') {
//         $(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
//     }
// });

// click 함수
// $('#area1').on('click', function(event) {
//     // 배경색은 white, 텍스트는 ''
//     $(event.target).css('background-color', 'white').text('').off('mouseenter mouseleave');
// });

// 한번에 합치기
$('#area1').on({
    mouseenter:function(event){$('#area1').css('background-color', 'beige').text('마우스가 올라감');},
    mouseleave:function(event){$(event.target).css('background-color', 'hotpink').text('마우스가 내려감');},
    click:function(event){$(event.target).css('background-color', 'white').text('').off('mouseenter mouseleave')}
});


// 2) one
$('#area2').one('click', function() {
    alert('실행!');
})


// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown : 키보드가 눌려질 때
$('#textarea1').keydown(function(e) {
    console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});

// keypress : 글자가 입력될 때
$('#textarea1').keypress(function(e) {
    console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});

// keyup : 키보드가 떼어질 때
$('#textarea1').keyup(function(e) {
    console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
});

// -> 3가지를 on 메소드로 한번에!
$('#textarea1').on({
    keydown:function(e){console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`)},

    keypress:function(e){console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`)},
    keyup:function(e){console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`)}
});

// 2) 글자 수 세기  
// 글자 제한 : 50 (substring)
console.log("Hello~".substring(0,2))

$('#textarea2').on('keyup', function(e) {
    // console.log(e.target); // === #textarea2
    // console.log($(e.target).val());
    // console.log($(e.target).val().length);
    const currentLength = $(e.target).val().length;
    $('#counter').text(currentLength);

    const maxLength = parseInt($('#maxLength').text());
    // console.log(typeof parseInt(maxLength));
 
    if(currentLength > maxLength) {
        // 글자수 제한! substring!
        // $(e.target).val().substring(0, maxLength);
        console.log($(e.target).val().substring(0, maxLength));  // 콘솔에서는 50글자만 받아줌
        $(e.target).val($(e.target).val().substring(0, maxLength)); // value값 안에 50글자까지만 넣겠다
    } else { //currentLength <= maxLength
        $('#counter').text(currentLength);
    }
});

// 3. 아이디 조건 확인
// 사용 가능한 아이디입니다.
// 사용 불가능한 아이디입니다.

$('#userId').on('keyup', function(e) {
    const userId = $(e.target).val();
    const regExp = /^[a-z][a-z0-9]{4,12}$/;

    if(regExp.test(userId)) {
        $('#idCheck').text("사용 가능한 아이디입니다.").css('color', 'green');
    } else if(userId === "") {
        $('#idCheck').text("");
    } else {
        $('#idCheck').text("사용 불가능한 아이디입니다.").css('color', 'red');
    }  
});

// 3. trigger() 메소드

// 1) area3영역을 눌렀을 때 넘버값 올리기
// let num = 0; // 안에 있으면 클릭할 때마다 0으로 초기화되니까 밖으로 빼줘야 함
// $('#area3').on('click', function() {
//     $('#counter2').text(++num);
// });

// 1-2) 한번에 처리
$('#area3').on('click', function() {
    let currentCount = parseInt($('#counter2').text()); // 현재 0
    $('#counter2').text(++currentCount);
});

// 2) 실행 확인 버튼 눌렀을 때 올리기
$('#btn').on('click', function() {
    $('#area3').trigger('click');
});

