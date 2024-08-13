const form = document.querySelector('#form');
const inpName = document.querySelector('#inp-name');
const inpEMail = document.querySelector('#inp-mail');
const textAreaComment = document.querySelector('#comment');
const sendBtn = document.querySelector('.button');

let messages = [];

function createMessage(e) {
    e.preventDefault()

    const InpName = inpName.value;
    const InpEMail = inpEMail.value;
    const TextAreaComment = textAreaComment.value;

    const message = {
        name: InpName,
        email: InpEMail,
        comment: TextAreaComment
    }
    messages.push(message)

    saveToLocalStorage()

    inpName.value = '';
    inpEMail.value = '';
    textAreaComment.value = '';
    sendBtn.blur()
}
function saveToLocalStorage() {
    localStorage.setItem('message', JSON.stringify(messages))
}
if (localStorage.getItem('message')) {
    messages = JSON.parse(localStorage.getItem('message'))
}

window.onload  = function() {
    if (form) {
        form.addEventListener('submit', createMessage)
    }
}


