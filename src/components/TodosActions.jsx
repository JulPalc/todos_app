import {GoSync, GoTrashcan} from 'react-icons/go';

const TodosActions = ({resetTodos, deleteCompletedTodos}) => {
    return (
        <>
            <GoSync className='buttonReset' title='Reset Todos' onClick={resetTodos}/>
            <GoTrashcan className='buttonDelete'
                        title='Delete Completed Todos'
                        onClick={deleteCompletedTodos}
            />
        </>
    )
}

export default TodosActions;