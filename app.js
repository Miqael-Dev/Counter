const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const numCount = document.getElementById('numCount');
let num = 0;
numCount.innerHTML += num;

function count() {
    increment.addEventListener('click', function(plus){
        plus.target(numCount.innerText =`${num += 1}`);
    })
    decrement.addEventListener('click', function(minus){
        minus.target(numCount.innerText = `${num -= 1}`)
    })
    reset.addEventListener('click', function(reset){
        reset.target(numCount.innerText = `${num = 0}`)
    })
}

count()