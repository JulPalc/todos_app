import {useState} from "react";

const TodoForm = ({addTodo}) => {

    const [text, setText] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input type='text'
                       placeholder='Enter new todo'
                       value={text}
                       onChange={(e) => setText(e.target.value)}
                />
                <button type='submit' disabled={text.trim().length ? false : true}>Submit</button>
            </form>
        </div>
    )
}

export default TodoForm;