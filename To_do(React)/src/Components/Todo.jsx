import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo(){
    const [todos, setTodos]= useState([]);
    const comTodo = todos.filter((todos)=>todos.done).length;
    const totalTodos= todos.length-comTodo;
    return (
        <div>
            <Form todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos}/>
            <Footer comTodo={comTodo} totalTodos={totalTodos}/>
        </div>
    );
}