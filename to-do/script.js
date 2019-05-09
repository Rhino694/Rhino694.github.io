window.addEventListener('load', function () {
    var text = document.querySelector('.text');
    var add = document.querySelector('.add');
    var out = document.querySelector('ol');
    out.oncontextmenu = function () {
        return false;
    }
    add.addEventListener('click', function () {
        if (text.value == '') {
            alert('Write Something');
        } else {
            out.innerHTML += '<li>' + '<div class = "list">' + text.value + '</div>' + '<div class = "block"><button class = "delete">&#215</button></div>' + '</li>';
            text.value = '';
            var del = document.querySelectorAll('.delete');
            for (var i = 0; i < del.length; i++) {
                del[i].addEventListener('click', function () {
                    this.parentElement.parentElement.style.display = 'none';
                });
            };

            var li = document.querySelectorAll('.list');
            for (var i = 0; i < li.length; i++) {
                li[i].addEventListener('click', function () {
                    this.classList.toggle('check');
                });
            };
        };
    });
});