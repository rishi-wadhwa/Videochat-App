let form = document.getElementById('lobby__form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let name= e.target.name.value
    sessionStorage.setItem('name',name)
    console.log(name);
    window.location = `room.html`
})