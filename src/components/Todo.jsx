import { IoCloseOutline, IoCheckmarkSharp } from 'react-icons/io5';

const Todo = ({ todo, deleteTodo, toggleTodo }) => {

    return (
        <div className={`todo ${todo.isCompleted ? 'completedTodo' : ''}`}>
            <div className='todoText'>{todo.text}</div>
            <IoCheckmarkSharp className='checkIcon' onClick={() => toggleTodo(todo.id)}/>
            <IoCloseOutline className='deleteIcon' onClick={() => deleteTodo(todo.id)}/>
        </div>
    )
}

export default Todo;