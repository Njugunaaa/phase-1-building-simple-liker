// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded",()=>{
  const hidden=document.querySelector(".hidden")
  const likes=document.querySelectorAll(".like-glyph")
  likes.forEach((like)=>{

  
  like.addEventListener("click",()=>{
    const isFull=like.textContent===FULL_HEART
    mimicServerCall()
    .then(()=>{
      if (isFull){
        like.textContent=EMPTY_HEART
        like.classList.remove("activated-heart")
      }else{
        like.textContent=FULL_HEART
        like.classList.add("activated-heart")
      }
    }
    ).catch((error)=> {
      hidden.classList.remove("hidden")
      const hide=document.querySelector("#modal-message")
      hide.textContent=error
      setTimeout(()=>{
  
        hidden.classList.add(".hidden")
      },3000)
  })
  })
  
})
  
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

