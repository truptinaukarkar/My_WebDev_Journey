import styles from "./Footer.module.css"
export default function({comTodo, totalTodos}){

    return (
        <div className={styles.footer}>
            <span className={styles.item}>Completed Todos: {comTodo}</span>
            <span className={styles.item}>Remaining Todos: {totalTodos}</span>
        </div>
    );

}