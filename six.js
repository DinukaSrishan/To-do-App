window.addEventListener('load', ()=>{
    const form = document.querySelector('#newTaskForm');
    const input = document.querySelector('#newTaskForm');
    const list_el = document.querySelector('#tasks');
    
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("Please add your task");
        }
        else{
            console.log("Successfully completed");
        }
    })


})
