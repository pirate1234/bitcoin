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
                document.querySelector('body').style.color = color;
            },
            setbackground: function (color) {
                document.querySelector('body').style.backgroundColor = color;
            },
        }
        var h = {
            setcolor: function (color) {
                var alist = document.querySelectorAll('a');
                var i = 0;
                while (i < alist.length) {
                    alist[i].style.color = color;
                    i = i + 1;
                }
            }
        }
        function daynight(hot) {
            if (hot.value === 'night') {
                body.setbackground('black');
                body.setcolor('white');
                hot.value = 'day';
                h.setcolor('blue');
            } else {
                body.setbackground('white');
                body.setcolor('black');
                hot.value = 'night';
                h.setcolor('red');
            }
        }