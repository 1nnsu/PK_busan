

document.addEventListener("DOMContentLoaded", function(e){
    b_menu_hide();
    b_menu_hide2();
    close_btn();
    close_btn2();
})


const b_menu_hide = () => {
    window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const side_menu = document.querySelector(".side_menu");

    if (scrollTop + windowHeight >= documentHeight) {
        side_menu.classList.add("hide"); // 스크롤 끝 → 숨김
    } else {
      side_menu.classList.remove("hide"); // 다시 올라오면 보여줌
    }
    });
}
const close_btn = () => {
    $('.close_btn').click(function(){
        $('.list_1').toggle('dn')
        $(this).find('.close_icon').slideToggle();
        $(this).find('.open_icon').slideToggle();
    })
}
const b_menu_hide2 = () => {
    window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const side_menu = document.querySelector(".side_menu2");

    if (scrollTop + windowHeight >= documentHeight) {
        side_menu.classList.add("hide"); // 스크롤 끝 → 숨김
    } else {
      side_menu.classList.remove("hide"); // 다시 올라오면 보여줌
    }
    });
}
const close_btn2 = () => {
    $('.close_btn2').click(function(){
        $('.list_1').toggle('hide');
        $('.PK_7 .side_menu2').toggleClass('on')
        $(this).find('.close_icon').slideToggle();
        $(this).find('.open_icon').slideToggle();

    })
}