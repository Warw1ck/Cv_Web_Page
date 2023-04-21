function changePage(path)
        {
            window.location.href = path;
        }

const certificates = [["images/python-oop-front.jpeg", "images/python-oop-back.jpeg", "https://softuni.bg/certificates/details/168075/d1788322"],
    ["images/python-advance-front.jpeg", "images/python-advance-back.jpeg", "https://softuni.bg/certificates/details/159544/00546b89"]
    ]
let i = 0

let btn1 = document.getElementById("cBtn")

let cerfImage = document.getElementById("cerf1")

btn1.addEventListener('mouseover', event => {
  cerfImage.src = certificates[i][1];
  cerfImage.classList.add("resizeImg");
});

btn1.addEventListener('mouseout', event => {
  cerfImage.src = certificates[i][0];
  cerfImage.classList.remove("resizeImg");
});

function changeValue(n){
  i += n
  if(i===certificates.length){
    i=0
  }else if(i<0){
      i=certificates.length-1
    }
  cerfImage.src = certificates[i][0]
}

function openCerf() {
  window.open(certificates[i][2],"_self");
  }