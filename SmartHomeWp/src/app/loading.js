import $ from "jquery";

window.onload = () => {
    let loadC = $('.loader-content');
    $('.loader-content').css('display', 'none');
    setTimeout(() => {
        $(loadC).load('./content.html', () => {
            $('.loader').css('display', 'none');
            $('.loader-content').css('display', 'block');
        });
    }, 500);

};