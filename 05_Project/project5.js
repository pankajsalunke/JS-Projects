let randomColor = function () {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
//   console.log(str);
  return color;
};
// randomColor()
let timeInInterval;

function startchangingcolor(){
    if(!timeInInterval){
        timeInInterval = setInterval(changingcolor, 1000);
    }

    function changingcolor () {
        document.body.style.backgroundColor = randomColor();
      };
}

function stopchangingcolor(){
    clearInterval(timeInInterval)
    timeInInterval = null
}
document.querySelector("#start").addEventListener("click", startchangingcolor);

document.querySelector("#stop").addEventListener("click",stopchangingcolor)