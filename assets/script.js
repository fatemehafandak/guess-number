
        
let number=[Math.floor(Math.random()*100+1)]
let  anw1=document.querySelector(".anw-1")
let  anw2=document.querySelector(".anw-2")
let noo=document.querySelector(".no")
let _step=document.querySelector(".step")
let reaction=document.querySelector('.reaction')

var step=10





function answer(){
    console.log(number)
   step--
        _step.innerHTML=step

   if (step==0) {
    reaction.style.display="flex"
        reaction.style.backgroundColor="rgba(190, 18, 18, 0.5)"
        reaction.children[0].children[0].innerHTML="you looose"
    setTimeout(() => {
        
        rest()
    }, 2000);
   
    
   }
    let _value=document.querySelector(".guess").value
    
    if (_value==number[0]) {
        noo.innerHTML="<audio src='./assets/child-says-yes-113117.mp3 ' autoplay hidden></audio>"
       anw1.children[1].innerHTML="YES"
       anw1.children[1].style.color="green"
       anw2.innerHTML="your geuss is correct"
       anw2.style.color="green"
       anw1.children[1].classList.add("anime")
       setTimeout(() => {
        anw1.children[1].classList.remove("anime")
       }, 1000);
       document.querySelector(".guess").value=null
 reaction.style.display="flex"
 reaction.style.backgroundColor="rgba(62, 163, 62, 0.6)"
 reaction.children[0].children[0].innerHTML="you win"
       setTimeout(() => {
        rest()
    }, 1000);
    }else if (_value<number[0]) {
        noo.innerHTML="<audio src='./assets/negative_beeps-6008.mp3 ' autoplay hidden></audio>"
        _value=null
            anw1.children[1].innerHTML="NO"
            anw1.children[1].color="green"
            anw2.innerHTML="your geuss is low"
            anw2.style.color="red"
            anw1.children[1].classList.add("anime")
            anw1.children[1].style.color="red"
       setTimeout(() => {
        anw1.children[1].classList.remove("anime")
       }, 1000);
       document.querySelector(".guess").value=null
      
       
    }else if (_value>number[0]) {
        noo.innerHTML="<audio src='./negative_beeps-6008.mp3 ' autoplay hidden></audio>"
        anw1.children[1].style.color="red"
        _value=""
        anw1.children[1].innerHTML="NO"
        anw2.innerHTML="your geuss is high"
        anw1.children[1].classList.add("anime")
        anw2.style.color="red"
       setTimeout(() => {
        anw1.children[1].classList.remove("anime")
       }, 1000);
       document.querySelector(".guess").value=null 
}


}

function restarts(){
    rest()
   
}  

function rest(){
    number=[Math.floor(Math.random()*100+1)]
        step=10
        _step.innerHTML=step
        anw1.children[1].innerHTML=""
        anw2.innerHTML=""
        reaction.style.display="none"
    }

   