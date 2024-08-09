const textElement = document.getElementById("typing_different")
const texts = ['Courses','Handwritten Notes','']
const typingSpeed = 100; 
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, 1000); 
  }
}

function eraseText() {
  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, typingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length; // Switch to the next text
    setTimeout(typeText, typingSpeed);
  }
}

typeText();