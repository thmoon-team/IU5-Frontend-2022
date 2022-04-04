//task1
function randomColor(){
    var 
    r = Math.floor(Math.random() * (256)),
    g = Math.floor(Math.random() * (256)),
    b = Math.floor(Math.random() * (256));
    return color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
const firstElem = document.getElementById("taskOne");
firstElem.addEventListener(
  "click",
  () => (firstElem.style.background = randomColor())
);

//task2
const timerElem = document.getElementsByClassName('timer')[0];
let timer;
timerElem.addEventListener('pointerover', () => {
    timer = setInterval(() => {
        timerElem.innerHTML++;
    }, 1000);
});
timerElem.addEventListener('pointerout', () => {
    clearInterval(timer);
});

//task3
const thButton = document.getElementById("buttonForThree");
const list = document.getElementById("list");
thButton.addEventListener("click", () => {
  list.classList.toggle("list-visible");
});

//task4
let ClickOnFigure = false;
const infinity = document.getElementById("infinity");
const fourElem = document.getElementById("taskFour");
const RightBorder = fourElem.offsetWidth - infinity.offsetWidth - 5;
const BottomBorder = fourElem.offsetHeight - infinity.offsetHeight - 5;
infinity.addEventListener("click", () => {
    ClickOnFigure = true;
});
fourElem.addEventListener("mousemove", (event) => {
    if (ClickOnFigure) {
      let x = event.pageX - fourElem.offsetLeft;
      let y = event.pageY - fourElem.offsetTop;
  
      if (x < RightBorder && y < BottomBorder) {
          infinity.style.left = x + "px";
          infinity.style.top = y + "px";
      }
    }
  });
document.addEventListener("keydown", (event) => {
  if (event.code == "Escape") ClickOnFigure = false;
});
