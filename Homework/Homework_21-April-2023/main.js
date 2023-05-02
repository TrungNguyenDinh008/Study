
var A = new Audio("https://trungnguyendinh008.github.io/Study/Homework/Homework_21-April-2023/sounds/A.mp3")
var B = new Audio("https://trungnguyendinh008.github.io/Study/Homework/Homework_21-April-2023/sounds/B.mp3")
var C = new Audio("https://trungnguyendinh008.github.io/Study/Homework/Homework_21-April-2023/sounds/C.mp3")
var D = new Audio("https://trungnguyendinh008.github.io/Study/Homework/Homework_21-April-2023/sounds/D.mp3")
var E = new Audio("https://trungnguyendinh008.github.io/Study/Homework/Homework_21-April-2023/sounds/E.mp3")
var F = new Audio("https://trungnguyendinh008.github.io/Study/Homework/Homework_21-April-2023/sounds/F.mp3")
var G = new Audio("https://trungnguyendinh008.github.io/Study/Homework/Homework_21-April-2023/sounds/G.mp3")
var notes =[
    C,
    D,
    E,
    F,
    G,
    A,
    B,
    C
]

var numberOfPianoButtons = document.querySelectorAll(".note").length
for(let i =0;i < numberOfPianoButtons;i++){
  document.querySelectorAll(".note")[i].addEventListener("click",function () {
  notes[i].play()
  })
}
var PianoButtons = document.querySelectorAll(".note");
console.log(PianoButtons)

document.addEventListener("keypress", (e) => {
  
  PianoButtons.forEach((btn) => {
    switch (e.key) {
      case "a":
        if (e.key === btn.innerText) {
          // let dol = new Audio("./sounds/C.mp3");
          C.play();
        }
        break;
      case "s":
        if (e.key === btn.innerText) {
          // let re = new Audio("./sounds/D.mp3");
        D.play();
        }
        break;
      case "d":
        if (e.key === btn.innerText) {
          // let mi = new Audio("./sounds/E.mp3");
          E.play();
        }
        break;
      case "f":
        if (e.key === btn.innerText) {
          // let fa = new Audio("./sounds/F.mp3");
          F.play();
        }
        break;
      case "j":
        if (e.key === btn.innerText) {
          // let sol = new Audio("./sounds/G.mp3");
          G.play();
        }
        break;
      case "k":
        if (e.key === btn.innerText) {
          // let la = new Audio("./sounds/A.mp3");
          A.play();
        }
        break;
      case "l":
        if (e.key === btn.innerText) {
          // let si = new Audio("./sounds/B.mp3");
          B.play();
        }
        break;
        case ";":
        if (e.key === btn.innerText) {
          // let dol = new Audio("./sounds/C.mp3");
          C.play();
        }
        break;
      default:
    }
  });
});
