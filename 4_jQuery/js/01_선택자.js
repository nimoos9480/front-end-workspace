$(function() {
    // 1. 태그 선택자
    // 자바스크립트 방식
    const pList = document.querySelectorAll('p');
    for(p of pList) {
        console.log(p);
        p.style.color = "white";
        p.style.backgroundColor = "tomato";
    }

    // 제이쿼리 방식 - 한 줄이면 끝난다
    $('h5').css('color', 'skyblue').css('backgroundColor', 'yellow');

    // 2. 아이디 선택자
    // 자바스크립트 방식
    document.querySelector('#id1').style.color = 'crimson';

    // 제이쿼리 방식
    $('#id2').css('color', 'violet');

    // 3. 클래스 선택자
    //자바스크립트 방식
    const items = document.querySelectorAll('.item');
    for(item of items) {
        item.style.color = "lightgreen";
    }

    // 제이쿼리 방식
    $('.item').css({
        'color': 'white',
        'backgroundColor' : 'indigo'
    });

    // 4. 자식 선택자와 자손 선택자
    // 1) 자식 선택자 : 부모 > 자식  
    $('div > h3').css('color', 'violet');
    $('div > ul > li').css('color', 'green');
    $('div > ul > li > h3').css('color', 'indianred');

    // 2) 자손 선택자 : 부모 자손
    $('div h3').css('background-color', 'khaki');
    $('div .ch').css('background-color', 'lime');

    // 5. 속성 선택자
    $('#div1 input[class]').css('background-color', 'turquoise');
    $('#div1 input[type=text]').val('Change Value');
    $('#div1 input[class~=test1]').val('123456789');
    $('#div1 input[type^=ra]').prop('checked', true);
    $('#div1 input[type$=box]').prop('checked', true);
    $('#div1 input[class*=st3]').prop({
        'width': '100px',
        'height': '100px',
    }).val('10000');

    // 6. 입력 양식 선택자
    $('#div2 :text').css('background-color', 'pink');
        // 버튼 글자 : 버튼, 사이즈 : 100px, 100px로 변경
        $('#div2 :button').css({
            'width': '100px',
            'height': '100px',
        }).val('버튼');

        // 체크박스 - 체크된 상태, 사이즈 : 50px, 50px
        $('#div2 :checkbox').prop('checked', true).css({
            'width': '50px',
            'height': '50px',
        });

        // 파일 - 배경색상 : yellow
        $('#div2 :file').css('background-color', 'yellow');

    // 7. 입력 양식 상태에 대한 선택자
        // 1) input 태그 중 활성화된 객체 선택 - 배경색상 : lavender
            $('#div3 :enabled').css('background-color', 'lavender');
        // 2) input 태그 중 비활성화된 객체 선택 - 배경색상 : lightcyan
            // $('#div3 input[disabled]').css('background-color', 'lightcyan');
            $('#div3 :disabled').css('background-color', 'lightcyan');
        // 3) input 태그 중 체크된 객체 선택 - 사이즈 : 30px 30px
            $('#div3 :checked').css({
            'width' : '30px',
            'height' : '30px'
            });

        // 4) checkbox에 change 이벤트 핸들러 등록
            $('#div3 :checkbox').change(function() {
                // console.log(this);
                // console.log($(this));
                const checkbox = $(this);
                console.log(checkbox.attr('checked'));
                console.log(checkbox.prop('checked'));

                // 체크가 되면 사이즈를 50px 50px
                if (checkbox.prop('checked')) {
                    checkbox.css({
                        'width': '50px',
                        'height': '50px'
                    });
                } else { // 체크가 안되면 사이즈를 15px 15px
                    checkbox.css({
                        'width': '15px',
                        'height': '15px'
                    });
                }
            });

        // 5) select에 change 이벤트 핸들러 등록 
            // option 태그 중 선택된 값이 각각 result1에는 국가명이 들어가고,
            // result2 에는 취미가 들어가게
            const select = $(this);

            $('#national').change(function() {
                // select 태그의 option태그 중 선택된 객체
                const value = $('#national option:selected').val();
                // console.log(value);
                $('#result1').val(value);
            });
            

            $('#hobby').change(function() {
                const value = $('#hobby option:selected').val();
                // console.log(value);
                $('#result2').val(value);
            });

    // 8. attr()와 prop()
    let cb1 = $('#cb1');
    let cb2 = $('#cb2');

        // attr()로 checked 값 읽어오기
        console.log(`cb1.attr('checked') : ${cb1.attr('checked')}`);
        console.log(`cb2.attr('checked') : ${cb2.attr('checked')}`);

            // cb1.attr('checked') : checked
            // cb2.attr('checked') : undefined


        // prop()로 checked 값 읽어오기
        console.log(`cb1.prop('checked') : ${cb1.prop('checked')}`);
        console.log(`cb2.prop('checked') : ${cb2.prop('checked')}`);

            // cb1.prop('checked') : true
            // cb2.prop('checked') : false

    // attr()와 prop()로 값 설정하기
        cb2.attr('checked', 'checked');
        cb1.prop('checked', false);

});



