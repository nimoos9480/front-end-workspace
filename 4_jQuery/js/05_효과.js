// 1. show, hide, toggle
$('#show').click(function() {
    $('img').show(3000);
});

$('#hide').click(function() {
    $('img').hide(3000), 'swing';
});

$('#toggle').click(function() {
    $('img').toggle(3000);
});

// 2. fadeIn, fadeOut, fadeToggle, fadeTo
$('#fadeIn').click(function() {
    $('img').fadeIn(3000);
});

$('#fadeOut').click(function() {
    $('img').fadeOut(3000);
});

$('#fadeToggle').click(function() {
    $('img').fadeToggle(3000);
});

$('#img').hover(
    function() {
        $(this).fadeTo(1000, 0.5);
        // 0.5 : 투명도
    },
    function() {
        $(this).fadeTo(1000, 1);
    }
)

// 3. slideDown, slideUp, slideToggle

$('.menu').click(function(e) {
    // '.contents'로 주면 전부에 걸려버림 => next() 활용
    const content = $(e.target).next();
    
    // if(content.css('display') === 'none') {
    //     content.slideDown(500);
    // } else {
    //     content.slideUp(500);
    // }

    // slideToggle
    // content.slideToggle(500);

    // 컨텐츠 하나만 slideDown 되도록
    $('.contents').slideUp(500)
        content.slideDown(500);

});
