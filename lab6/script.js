//Первое задание

const square = document.getElementById("square");

const randomColorClick = (e)=>{
    e.target.style.background = '#'+ (Math.random().toString(16)+ '000000').substring(2,8).toUpperCase();
}
square.addEventListener("click", randomColorClick)

//Второе задание

const count = document.getElementById("count");
let time = 0;
function launch(){
    counter= setInterval(()=> {count.textContent= time++}, 500);
}
 function stop(){
    clearInterval(counter)
 }

count.addEventListener("mouseenter", launch)
count.addEventListener("mouseleave", stop)

//третье задание

const animals = document.getElementById("animals")
const list = document.getElementById("list")



animals.addEventListener("click", ()=>{
    list.classList.toggle("list-block")
})
//

const field  = document.getElementById("field")
const circle = document.getElementById("circle")
let clickcircle = false
circle.addEventListener("click", ()=> {clickcircle = true})

field.addEventListener("mousemove", (event)=>{
   if(clickcircle == true ){
       let coursorx = event.pageX - field.offsetLeft
       let coursory = event.pageY - field.offsetTop
       if (coursorx < field.offsetWidth - circle.offsetWidth && coursory< field.offsetHeight - circle.offsetHeight){
           circle.style.left = coursorx  +'px'
           circle.style.top = coursory  +'px'
       }
   }
})

document.addEventListener("keydown", (e)=>{
    if (e.code == "Escape"){
        clickcircle = false;
    }
})