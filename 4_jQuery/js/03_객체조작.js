// 1. Content 설정
// 1) html()
console.log($('#content1').html()); // <a>네이버</a> => 태그까지 같이 가져온다

// #content2에 #content1의 내용을 대입
$('#content2').html($('#content1').html());

// #content1의 a태그 속성 href에 https://naver.com 대입
$('#content1 a').attr('href', 'https://naver.com');

// #content2의 a태그 속성에도 href에 https://naver.com 대입
$('#content2').find('a').prop('href', 'https://naver.com');

console.log($('.content').html());
$('.content').html('zzzzzzzzz'); // 전부 다 수정됨
$('.content').html(function(index, content){
    console.log(index, content);
    return `<h4>인덱스 : ${index}, 내용 : ${content}</h4>`
});

// 2) text()

$('#content4').text($('#content3').text());
$('#content4').text('<strong>Hello~</strong>'); // <strong>Hello~</strong> : 태그가 아니라 텍스트로 인식함

console.log($('.content2').text());
$('.content2').text(function(index, content) {
    console.log(index, content);
    return `<h4>인덱스 : ${index}, 내용 : ${content}</h4>`;
});

// 2. 요소추가
// 1) 자바스크립트와 제이쿼리
const p = document.createElement('p');
p.innerHTML = '자바스크립트 추가'

// 자바스크립트 방식
document.querySelector('#area1').appendChild(p);
// 제이쿼리 방식
const p2 = $('<p>').text('제이쿼리로 추가');
$('#area1').append(p2);

// 2) 요소 추가 1
$('#add1').append('<span>B</span>'); // A 자식요소로 추가됨
$('#add2').prepend('<span>B</span>');
$('#add3').after('<span>B</span>'); // 형제 요소로 추가됨
$('#add4').before('<span>B</span>');

// 3) 요소 추가 2
$('<span>B</span>').appendTo('#add5'); // A 자식요소로 추가됨
$('<span>B</span>').prependTo('#add6');
$('<span>B</span>').insertAfter('#add7'); // 형제 요소로 추가됨
$('<span>B</span>').insertBefore('#add8');

// 3. 요소 복제
$('#item1').hover(
    /*
    (event) => { // mouseenter
        console.log(event.type);
        $(event.target).addClass('bg-hotpink');
    }, 
    (event) => { // mouseleave
        console.log(event.type);
        $(event.target).removeClass('bg-hotpink');
    }
    */

    (event) => {
        // toggleClass 사용
        $(event.target).toggleClass('bg-hotpink');
    }
);

// 버튼 클릭 시 요소 복제
$('#btn1').click(function() {
    const item = $('#item1').clone(true);  //true를 명시해야 event도 복사됨
    $('#clone-result').append(item);
});

// 4. 요소 제거

$('#item2').hover(
    (event) => {
        $(event.target).toggleClass('bg-hotpink');
    }
)
// 1) remove
// remove 버튼 클릭 시 #item2를 remove로 제거하고 #remove-result에 리턴받은 값 출력
$('#remove').click(function() {
    const item = $('#item2').remove();  
    $('#remove-result').append(item); // 이벤트도 삭제됨
});

// 2) detach 
// detach 버튼 클릭 시 #item2를 detach로 제거하고 #remove-result에 리턴받은 값 출력
$('#detach').click(function() {
    const item = $('#item2').detach(); 
    $('#remove-result').append(item); // 이벤트는 삭제 안됨
});

// 3) empty 
// empty 버튼 클릭 시 #item2를 empty로 제거하고 #remove-test를 비워버림
$('#empty').click(function() {
    const item = $('#item2').empty();
    $('#remove-test').empty();
});

// 5. 배열
const array = [
    {name: '구글', link: 'https://google.com'},
    {name: '네이버', link: 'https://naver.com'},
    {name: '다음', link: 'https://daum.net'}
]

// 자바스크립트
array.forEach(function(element, index, origin){
    console.log(element, index, origin);
})

// 첫번째 방법
$.each(array, function(index, element){
    console.log(index, element);
});
// 두번째 방법
$(array).each(function(index, element){
    console.log(index, element);
});


// #each-test에 배열의 값들을 a링크로 href에는 link, content 부분에는 name을 사용해서 출력!
$(array).each(function(index, element) {
    console.log(index, element);
    $('#each-test').append(`<a href="${element.link}">${element.name}</a><br>`);
});

