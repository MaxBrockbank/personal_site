const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = [
  "Web Developer.",
  "Single.",
  "Professional.",
  "VERY Single."
]
const typingDelay = 100;
const erasingDelay = 75;
const newTextDelay = 100;
const textDisplayDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex < textArray[textArrayIndex].length){
    if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
    charIndex ++;
    setTimeout(type, typingDelay );
  } else{
    cursorSpan.classList.remove('typing');
    setTimeout(erase, textDisplayDelay);
  }

function erase(){
    if(charIndex > 0){
      if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex --;
      setTimeout(erase,erasingDelay);
    }
    else{
      cursorSpan.classList.remove('typing');
      textArrayIndex ++;
      if(textArrayIndex >= textArray.length){
        textArrayIndex = 0;
      }
      setTimeout(type,typingDelay)
    }
}

}

function smoothScroll(target, duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  console.log(targetPosition);
}

smoothScroll(".work", 1000)



window.addEventListener("load", function(){
  setTimeout(type, newTextDelay + 1500);
})
