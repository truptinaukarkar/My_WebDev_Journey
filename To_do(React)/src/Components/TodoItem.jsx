import styles from "./Todoitem.module.css";

export default function TodoItem({item, todos, setTodos}){
    function handleDel(item){
        const updatedTodos = todos.filter((todo) => todo !== item);
        setTodos(updatedTodos);
    }
    function handleClick(name){
        const newArr =todos.map((todo)=>todo.name===name? {...todo, done:!todo.done} : todo)
        setTodos(newArr);
        console.log(todos);
    }

    const classes= item.done? styles.completed : "";
    return (
        <div className={styles.item}>
            <div className={styles.itemName} >
                <span className={classes} onClick={()=>handleClick(item.name)}>{item.name}</span>
                <span >
                    <button onClick={()=>handleDel(item)} className={styles.Delbtn}>⌫</button>
                </span>
            </div>
            
            <hr className={styles.line} />
        </div>
    );
}