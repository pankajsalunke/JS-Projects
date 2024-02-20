const form = document.querySelector('form');
let first = document.getElementById('first')
let second = document.getElementById('second')
let third = document.getElementById('third')
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span class='res'>${bmi}</span>`;
    if(results.innerText===18.6 || results.innerText<18.6){
        // first.style.color = "red";
        // let p = document.createElement('h1')
        // p.innerHTML = `under weight`
        // document.body.appendChild(p)
    }else if(results.innerText<=24.9){
        second.style.color = "yellow"
    }
    else{
        third.style.color = "red"
    }

  }

})