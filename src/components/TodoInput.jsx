import React from 'react'
import { useState } from 'react'


export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleAddTodos(todoValue)
            setTodoValue('')
        }
    }

    return (
        <header>
            <input 
                value={todoValue} 
                onChange={(e) => { setTodoValue(e.target.value)}} 
                onKeyDown={handleKeyPress} 
                placeholder="Enter todo..."></input>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>
                Add
            </button>
        </header>
    )
}