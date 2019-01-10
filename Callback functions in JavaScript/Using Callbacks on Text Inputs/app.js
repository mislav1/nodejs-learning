const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

const focusedHandler = event => {
    event.target.className = 'highlight';
};
const blurHandler = event => {
    event.target.className = '';
};

nameInput.addEventListener('focus', focusedHandler);

nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusedHandler);

messageTextArea.addEventListener('blur', blurHandler);