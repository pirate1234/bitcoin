// function hsetcolor(color){
//     var alist = document.querySelectorAll('a');
//         var i = 0;
//         while(i < alist.length){
//             alist[i].style.color = color;
//             i = i + 1;
//         }
// }
// function bodysetcolor(color){
//     document.querySelector('body').style.color = color;
// }
// function bodysetbackground(color){
//     document.querySelector('body').style.backgroundColor = color;
// }
var body = {
    setcolor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setbackground: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    },
    setborder: function (color) {
        $('.myborder').css('border-color', color);
    }
}
var h = {
    setcolor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        $('a').css('color', color);
    }
}
function daynight(hot) {
    if (hot.value === 'night') {
        body.setbackground('black');
        body.setcolor('white');
        hot.value = 'day';
        h.setcolor('blue');
        body.setborder('white')
    } else {
        body.setbackground('white');
        body.setcolor('black');
        hot.value = 'night';
        h.setcolor('red');
        body.setborder('black');
    }
}