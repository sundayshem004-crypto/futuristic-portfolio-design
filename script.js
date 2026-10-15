let message = document.getElementById("message");
const myBtn = document.getElementById("my-btn")
let textMEssage = "Wecome! Explore My World Of Tech."
let index = 0;



function showText(){
  let setTimer =  setInterval(function(){
        message.textContent += textMEssage[index];
        
        index++
        if(index >= textMEssage.length){
            clearInterval(setTimer)
            // myBtn.style.display = "block"
           setInterval(function(){
             myBtn.classList.add("show-btn")
           },1000)
        }

    },50)
}
showText();

myBtn.addEventListener('click',function(){
    window.location.href = "home.html"
})