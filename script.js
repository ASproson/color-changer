let button = document.getElementById('color_button');
let updateText = document.getElementById('color_title');

// Function & Event to change background color

function changeCol() {
  let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  document.body.style.background = color;
  updateText.innerHTML = "Background Color : " + color;
}

button.addEventListener('click', changeCol);
