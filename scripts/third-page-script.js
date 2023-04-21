function changePage(path)
        {
            window.location.href = path;
        }

function openTab(link) {
    window.open(link,"_self");
    }


let btn1 = document.getElementById("js-proj1");
let btn2 = document.getElementById("js-proj2");
let btn3 = document.getElementById("js-proj3");

btn1.addEventListener('click', event => {
    openTab("https://github.com/Warw1ck/News_Bulgaria_Burgas");
});
btn2.addEventListener('click', event => {
    openTab("https://github.com/Warw1ck/youtube_downloader");
});
btn3.addEventListener('click', event => {
    openTab("https://github.com/Warw1ck/Cv_Web_Page");
});
