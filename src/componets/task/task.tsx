import "./task.css";
import { BsCheckSquareFill,BsSquare,BsXSquareFill } from "react-icons/bs";
import { Col, Row } from "antd";
import { todoState } from "../../state/makeTodoState";

const buttonStyle: React.CSSProperties = {
	background: "none",
	border: "none",
	color: "white",
};
const taskStyle: React.CSSProperties = {
	fontSize: "20px",
	color: "white",
	backgroundColor: "#56595f",
};


interface TaskProps {
	id: number;
	task: String;
	done: boolean;
}

export const Task = ({ id, task, done }: TaskProps) => {
	const checkButton = done ? (
		<BsCheckSquareFill/>	) : (
		<BsSquare/>
	);

	return (
		<Row className="task-list" key={id} style={taskStyle}>
			<Col className="id" span={3}>
				{id}
			</Col>
			<Col className="task" span={16}>
				{task}
			</Col>
			<Col className="done" span={3}>
					<button
						style={{...buttonStyle, ...{color: `${done ? "white" : "#ae4f4f"}`}}}
						onClick={() => {
							todoState.changeStatus(id);
						}}
					>
						{checkButton}
					</button>
			</Col>
			<Col className="remove" span={2}>
					<button
						className="remove-button"
						style={buttonStyle}
						onClick={() => {
							todoState.removeTodo(id);
						}}
					>
						<BsXSquareFill/>
					</button>
			</Col>
		</Row>
	);
};
export default Task;
