let display = document.getElementsByClassName("display")

let btn = document.getElementsByTagName('button')

btn.addEventListener('click',(e)=>{
    console.log(e.target.value);
})

console.log(display.innerText);