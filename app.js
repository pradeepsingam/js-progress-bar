const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const steps = document.querySelectorAll('.step');

let current = 1;

next.addEventListener('click',()=>{
   current++;
   if(current>steps.length){
    current = steps.length;
    
   }
   update();
})

prev.addEventListener('click', ()=>{
    current--;
    if(current<1){
        current = 1;
    }
    update();
})




function update(){
    steps.forEach((step,idx)=>{
if(idx<current){
    step.classList.add('active')
} else {
    step.classList.remove('active')
}
    });

    let actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length-1)/(steps.length-1))*100+ '%';

    if(current===1){
        prev.disabled = true;
    } else if(current === steps.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}

