const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
//   console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }   
  });
});





// let red = document.getElementById('red')
// let changeToRed = ()=>{
//     document.body.style.backgroundColor="red"    
// }
// let changeToYellow = ()=>{
//         document.body.style.backgroundColor="Yellow"   
// }
// let changeToOrange = ()=>{
//     document.body.style.backgroundColor="orange" 
// }
// let changeToGrey = ()=>{
//     document.body.style.backgroundColor="grey"  
// }

// document.getElementById("mybtn").addEventListener("click", function(){document.write("hi there")});


