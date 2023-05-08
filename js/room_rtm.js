let handleChannelMessage = async(messageData,name)=>{
    let data = JSON.parse(messageData.text)
    console.log('Msg: ',data);
    if(data.type==='chat'){
        addMessageToDom(data.displayName,data.message )
    }
}

let sendMessage = async (e) =>{
    e.preventDefault()
    let message = e.target.message.value
    console.log(message )
    channel.sendMessage({text:JSON.stringify({'type':'chat', 'message':message,'displayName':displayName})})
    addMessageToDom(displayName,message)

    e.target.reset();
}

let addMessageToDom= (name,message)=>{
    let messageWrapper = document.getElementById('messages');
    let newMessage = `<div class="message__wrapper">
        <strong class="message__author">${name}</strong>
        <p class="message__text">${message}</p>
    </div>`

    messageWrapper.insertAdjacentHTML('beforeend',newMessage);

    let lastMessage = document.querySelector('#messages .message__wrapper:last-child')
    if(lastMessage)lastMessage.scrollIntoView();
}


let messageForm = document.getElementById('message__form')
messageForm.addEventListener('submit',sendMessage)  