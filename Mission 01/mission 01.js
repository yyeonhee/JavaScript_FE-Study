'use static';

// DarkMode 구현
function DarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var button = document.getElementById("dark_bt");

    if (button.innerHTML == "다크 모드로 보기") {
        button.innerHTML = "라이트 모드로 보기";
        button.style.backgroundColor = "#FFEFB2";
    } else {
        button.innerHTML = "다크 모드로 보기";
        button.style.backgroundColor = "#8977ad";
    }
}

// Search 기능 구현
const item = document.getElementsByClassName('item');
function search() {
    var searchbar, i;
    searchbar = document.getElementById("searchbar");
    for (i = 0; i < item.length; i++) {
        //각 동물을 의미
        const animal = item[i].textContent;
        if (animal.indexOf(searchbar.value) > -1) {
            item[i].style.display = "flex";
        } else {
            item[i].style.display = "none";
        }
    }
}