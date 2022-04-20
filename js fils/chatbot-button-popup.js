
let chat = document.getElementById("chat-bot-button");
let container = document.getElementById("chatbot-container");
let fadeIn = true;

document.addEventListener("scroll",()=>{
    let value = window.scrollY;
   
    chat.style.marginTop = value - 50 + "px";
    // container.style.marginTop = value - 50 + "px";

})

chat.addEventListener("click",()=>{
    if (fadeIn) {
        container.classList.toggle ("fade")
        fadeIn = true;
    } else {
        container.remove.classList("fade")
        fadeIn = false;
    }
})
