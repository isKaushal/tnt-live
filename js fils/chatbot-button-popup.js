
let chat = document.getElementById("chat-bot-button");
let container = document.getElementById("chatbot-container");
let ContainerInner = document.getElementById("chatbot-container-inner");
let fadeIn = true;

// chatbot button
document.addEventListener("scroll",()=>{
    let value = window.scrollY;
   
    chat.style.marginTop = value - 50 + "px";
    container.style.marginTop = value - 50 + "px";

    if (window.pageYOffset > 8000) {
        chat.classList.add("hide");
        container.classList.remove("fade");
        ContainerInner.classList.remove("fade1");
    }else{
        chat.classList.remove("hide");

    }

})

// chatbot button

chat.addEventListener("click",()=>{
    if (fadeIn) {
        container.classList.toggle ("fade")
        ContainerInner.classList.toggle ("fade1")
        fadeIn = true;
    } else {
        container.remove.classList("fade")
        ContainerInner.remove.classList("fade1")
        fadeIn = false;
    }
})
