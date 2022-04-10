//----------------------task 1-------------------------------
let div1 = document.getElementsById('task1');
div1.addEventListener('click', function() {
  this.classList.add('active');
});
//-----------------------------------------------------

//--------------------task 2--------------------------------
let s = document.getElementById('task2');
let timerId;

function startCountdown () {
  timerId = setInterval( () => {
    let val = +s.textContent + 1;
    s.textContent = val;
  }, 100);
}

function stopCountdown () {
  clearInterval(timerId);
}

s.addEventListener('mouseover', startCountdown);
s.addEventListener('mouseout', stopCountdown);
//-----------------------------------------------------


//--------------------task 3--------------------------------
let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.select'),
          currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }

};

select();
//----------------------------------------------------


//--------------------task 4--------------------------------
var elem = document.getElementById('elem');
var par = document.getElementById('task4');

elem.onmousedown = function(e) {
  elem.style.position = 'absolute';
  move(e);
  
  function move(e) {
    elem.style.left = e.pageX - elem.offsetWidth / 2 + 'px';
    elem.style.top = e.pageY - elem.offsetHeight / 2 + 'px';
  }

  document.onmousemove = function(e) {
    move(e);
  }

  document.addEventListener('keydown', function(event) {
    if (event.code == "Escape") {
      document.onmousemove = null;
      document.keydown = null;
    }
  });
}
//----------------------------------------------------