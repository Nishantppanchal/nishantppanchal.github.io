// Typing Animation Script

const text = "This is a typing animation example where an and a are in normal font while the rest is special fonts.";
const typingElement = document.getElementById('typing-animation');

function typeText(text) {
    let index = 0;
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            typingElement.innerHTML += (text[index] === ' ')
                ? ' '
                : `<span class='special-font'>${text[index]}</span>`;
            index++;
        } else {
            clearInterval(typingInterval);
        }
    }, 100);
}

// Calling the function

typeText(text);