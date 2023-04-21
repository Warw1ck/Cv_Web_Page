function openTab(link) {
    window.open(link,"_self");
    }

let gitBtn = document.getElementById("github-btn");
let instagramBtn = document.getElementById("instagram-btn");
let linkedinBtn = document.getElementById("linkedin-btn");

gitBtn.addEventListener('click', event => {
  openTab("https://github.com/Warw1ck");
});

instagramBtn.addEventListener('click', event => {
    openTab("https://www.instagram.com/one_punch_warwick/?hl=bg");
  });

linkedinBtn.addEventListener('click', event => {
openTab("https://www.linkedin.com/in/real-monster-65530a240/");
});


function changePage(path)
        {
            window.location.href = path;
        }
