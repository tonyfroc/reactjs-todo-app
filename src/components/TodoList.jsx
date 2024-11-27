import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos, handleDeleteTodo, handleEditTodo } = props

    return (
        <ul className="main">  
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard 
                        handleDeleteTodo={handleDeleteTodo}
                        handleEditTodo={handleEditTodo} 
                        index={todoIndex} 
                        key={todoIndex}
                    >
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}