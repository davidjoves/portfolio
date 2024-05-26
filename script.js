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
