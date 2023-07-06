import { todoState } from "../../state/makeTodoState";

import Task from "../task/task";

export const TaskList = () => {
    const { todos } = todoState;
    return(
        <div >
            {todos.map((todo) => {
            const { task, done, id } = todo;
            return <Task id={id} task={task} done={done}></Task>;
        })}
        </div>
    )
}

export default TaskList;