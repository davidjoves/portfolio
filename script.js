function copyEmailToClipboard() {
    const email = "djoves@uci.edu"; // Replace with your email address
    navigator
        .clipboard
        .writeText(email)
        .then(() => {
            showCustomAlert('Email copied to clipboard!');
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
}

function showCustomAlert(message) {
    const alertBox = document.getElementById('customAlert');
    alertBox.textContent = message;
    alertBox
        .classList
        .add('show');
    setTimeout(() => {
        alertBox
            .classList
            .remove('show');
    }, 3000); // The alert will be visible for 3 seconds
}

document
    .getElementById('copyEmailButton')
    .addEventListener('click', function (event) {
        event.preventDefault();
        copyEmailToClipboard();
    });

    document.addEventListener("DOMContentLoaded", function() {
        const staticText = "Hello! I'm David. I like ";
        const words = ["algorithms.", "coding.", "designing.", "research.", "keyboards."];
        const typingTextElement = document.getElementById("typing-text");
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100; // Adjust typing speed as needed
        let pauseBeforeDeleting = 2000; // Pause before deleting the word
        let pauseBeforeTypingNewWord = 500; // Pause before typing a new word
    
        function type() {
            let currentWord = words[wordIndex];
            if (isDeleting) {
                charIndex--;
                typingTextElement.innerHTML = staticText + currentWord.substring(0, charIndex) + '<span class="cursor"></span>';
                if (charIndex == 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    setTimeout(type, pauseBeforeTypingNewWord);
                } else {
                    setTimeout(type, typingSpeed);
                }
            } else {
                charIndex++;
                typingTextElement.innerHTML = staticText + currentWord.substring(0, charIndex) + '<span class="cursor"></span>';
                if (charIndex == currentWord.length) {
                    isDeleting = true;
                    setTimeout(type, pauseBeforeDeleting);
                } else {
                    setTimeout(type, typingSpeed);
                }
            }
        }
    
        type();
    });


    function toggleFlip(card) {
        card.classList.toggle('flipped');
    }
    
    
