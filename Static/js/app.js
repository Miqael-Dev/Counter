const outputNum = document.getElementById('number');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach(addEventListener('click', function(e){
   if(e.target.classList.contains('one')){
       outputNum.innerText = count -= 1;
   } else if(e.target.classList.contains('three')) {
       outputNum.innerText = count += 1;
   } else {
       outputNum.innerText = count = 0;
   }
}))

