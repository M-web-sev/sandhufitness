let allDivs= document.querySelectorAll('.content');

const callAnimation=()=>{
let windowH=window.innerHeight;


allDivs.forEach((items)=>{
    let top = items.getBoundingClientRect().top;

if (top < windowH)  {
    items.classList.add('change');
}else{
    items.classList.remove('change');

}

 
})


}


callAnimation();
window.addEventListener('scroll', callAnimation);
