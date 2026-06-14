
// select dom element
const input =document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const done= document.getElementById('completed-todo')

//load saved todo items in local storage 
const saved = localStorage.getItem('todos');
const todos = saved? JSON.parse(saved): [];

function saveTodos(){
    // save current values in local storage
    localStorage.setItem('todos', JSON.stringify(todos));

} 

function createTodoNode(todo, index){
    const li =document.createElement('li');

    //create checkbox
    const checkbox= document.createElement('input');
    checkbox.type='checkbox';
    checkbox.checked= !!todo.completed;

    checkbox.addEventListener('change', ()=>{
        todo.completed= checkbox.checked;

        saveTodos();
        render();
    })

    //create text of  todo
    const textSpan = document.createElement('span');
    textSpan.textContent=todo.text;
    textSpan.style.margin="0px 5px"
    

    //add double click event 
    textSpan.addEventListener("dblclick", ()=>{
        const newText= prompt('Edit todo', todo.text);
        if(newText!==null){
            todo.text=newText.trim();
            textSpan.textContent=todo.text;
            saveTodos();
        }
    })

    //delete button 
    const delbtn = document.createElement('button');
    delbtn.textContent='🗑️';
    delbtn.style.border="none";
    delbtn.style.background="none";

    delbtn.addEventListener("click",()=>{
        todos.splice(index,1);
        render();
        saveTodos();
    })

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(delbtn);

    return li;


}

function render(){
    list.innerHTML='';
    done.innerHTML='';

    todos.forEach((todo, index) => {
        const node = createTodoNode(todo, index);
        if(todo.completed){
            done.appendChild(node);
        }
        else{
        list.appendChild(node);
        }
    });

    if(list.innerHTML===''){
        const message= document.createElement('h2');
        message.textContent="🎉 Hurray! You’ve completed all your Tasks ✅"
        message.style.fontSize='18px';
        list.appendChild(message);
    }
    

}

function addTodo(){
    const text = input.value.trim();

    if(!text){
        return
    }

    todos.push({text,completed:false});
    input.value='';
    render()
    saveTodos()

}

input.addEventListener('keydown', function(event){
    if(event.key==='Enter'){
        addTodo();
    }
});

addBtn.addEventListener("click", addTodo);
render();
