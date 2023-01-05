const close = document.getElementsByClassName('close')[0]
const chat = document.getElementsByClassName('js-chat')[0]
const btn_chat = document.getElementsByClassName('chat')[0]
btn_chat.addEventListener('click', function(){
    chat.classList.add('active')
})
close.addEventListener('click', function(){
    chat.classList.remove('active')
})