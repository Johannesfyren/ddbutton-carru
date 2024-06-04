

// document.addEventListener("click", (e) =>{
//     const btnWidth = e.target.offsetWidth;
//     const pressedDDBtn = e.target.parentNode.querySelector('ul').classList;
//     e.target.parentNode.querySelector('ul').style.width = `${btnWidth+10}px`;
//     if (e.target.type == 'submit' && e.target.parentNode.classList.contains('dropdown')){
//         if (pressedDDBtn.contains('dropdown-visible')){
//                 pressedDDBtn.remove("dropdown-visible");
//                 pressedDDBtn.add("dropdown-invisible");
//             } else{
//                 pressedDDBtn.remove("dropdown-invisible");
//                 pressedDDBtn.add("dropdown-visible");
//             }
//     }
// })


const img1 = document.querySelector('[data-img="1"]');
const img2 = document.querySelector('[data-img="2"]');
const img3 = document.querySelector('[data-img="3"]');
const img4 = document.querySelector('[data-img="4"]');
const backbtn = document.querySelector('.btn-back');
const forwardbtn = document.querySelector('.btn-forward');
const indicator1 = document.querySelector('[data-circle="1"]');
const indicator2 = document.querySelector('[data-circle="2"]');
const indicator3 = document.querySelector('[data-circle="3"]');
const indicator4 = document.querySelector('[data-circle="4"]');




let activeImage = 0;

const carruArray = [img1,img2,img3,img4];
const circleArray = [indicator1,indicator2,indicator3,indicator4];


const carruController = function (){
    for (let i = 0; i<carruArray.length;i++){
        carruArray[i].classList.remove('img-visible');
        carruArray[i].classList.add('img-hidden');
        circleArray[i].classList.remove('circle-chosen');
        circleArray[i].classList.add('circle1');
    }


    carruArray[activeImage].classList.remove('img-hidden');
    carruArray[activeImage].classList.add('img-visible');
    circleArray[activeImage].classList.remove('circle1');
    circleArray[activeImage].classList.add('circle-chosen');
}

const shiftForward = function(){
    if (activeImage === carruArray.length-1){
       activeImage = 0;
    } else{
        activeImage++; 
    }
    carruController();
    console.log('hello?')
}
const shiftBackward = function(){
    
    
    if (activeImage === 0){
        activeImage = carruArray.length-1;
     } else{
         activeImage--; 
     }
     carruController();
}

backbtn.addEventListener("click", (e)=> {
    shiftBackward()});
forwardbtn.addEventListener("click", (e)=>{
    shiftForward()});

setInterval(shiftForward, 5000);