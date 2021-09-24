let send = document.querySelector('#send');
let message=document.querySelector('#type-message');
let chatBackground=document.querySelector('.chat-background');

let name = prompt("Enter your name ");

send.addEventListener('click',function(){
    if(message.value){
        let sendMessage=document.createElement('div');
        sendMessage.setAttribute('class','send-message');

        let chatName=document.createElement('div');
        chatName.setAttribute('class','chat-name');
        chatName.innerHTML=name;

        let chatMessage=document.createElement('div');
        chatMessage.setAttribute('class','chat-message');
        chatMessage.innerHTML=message.value;

        sendMessage.appendChild(chatName);
        sendMessage.appendChild(chatMessage);
        chatBackground.appendChild(sendMessage);
        message.value=""; 
        
        chatBackground.scrollTop = chatBackground.scrollHeight;
    }
})