import TodoItem from '@/components/TodoItem';

const TodosList = (prop) => {
    const {todosProps, handleChange, delTodo, setUpdate} = prop;
    return (
        <ul>
            {todosProps.map((todo) => (
                <TodoItem key={todo.id} itemProp= {todo} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate} />
            ))}
        </ul>
    );
   
};

export default TodosList;