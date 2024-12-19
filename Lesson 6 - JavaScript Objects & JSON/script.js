
const colorsJSON = '{"colors": ["red", "blue", "green", "yellow", "pink", "purple"]}';


const colors = JSON.parse(colorsJSON);


function changeBackgroundColor() {

  const randomIndex = Math.floor(Math.random() * colors.colors.length);

  document.body.style.backgroundColor = colors.colors[randomIndex];
}

setInterval(changeBackgroundColor, 3000);
