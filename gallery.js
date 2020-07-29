
const text= document.querySelector('.fancy');
const srText= text.textContent;
const split= srText.split("");
text.textContent="";


for (let i=0; i<split.length; i++){
text.innerHTML+="<span>"+ split[i] + "</span>";
}
let char=0;
let timer=setInterval(ontick,50);

function ontick(){
const span =text.querySelectorAll('span')[char]
span.classList.add('fade');
char++
if(char===split.length)
complete();
return;{
    clearInterval(timer);
    timer= null;
}
}
function complete(){
    clearInterval(timer);
    timer= null;
}