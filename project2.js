
const button=document.querySelector('button');
const height=document.getElementById('height');
const weight=document.getElementById('weight');
const body=document.getElementsByTagName('body');




let BMI;
let div=document.createElement('div');
document.body.append(div);
button.addEventListener('click',()=>{
    let heightvalue=height.value;
    let weightvalue=weight.value;
    if(heightvalue==0){
        div.innerHTML=`<h3>please enter the valid height</h3>`;
        return ;
    }
    console.log(weightvalue);
    console.log(heightvalue);
    BMI = weightvalue/(heightvalue*heightvalue);
div.innerHTML=`<h3>you BMI index is ${BMI}</h3>`;

console.log(BMI);
})