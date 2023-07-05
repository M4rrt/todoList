import "./task.css";

import { todoState } from "../../state/makeTodoState";

interface TaskProps {
	id: number;
	task: String;
	done: boolean;
}

export const Task = ({ id, task, done }: TaskProps) => {
	const checkButton = done ? (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			className="bi bi-check-square-fill"
			viewBox="0 0 16 16"
		>
			<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
		</svg>
	) : (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			className="bi bi-square"
			viewBox="0 0 16 16"
		>
			<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
		</svg>
	);

	return (
		<div className="task" key={id}>
			<div className="id">{id}</div>
			<div className="task">{task}</div>
			<div className="done">
				<button
					onClick={() => {
						todoState.changeStatus(id);
					}}
				>
					{checkButton}
				</button>
			</div>
			<div className="remove">
				<button
					onClick={() => {
						todoState.removeTodo(id);
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-x-square-fill"
						viewBox="0 0 16 16"
					>
						<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
					</svg>
				</button>
			</div>
		</div>
	);
};
export default Task;
