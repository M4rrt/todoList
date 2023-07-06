import "./App.css";
import { BsPlusSquareFill,BsCheck2All,BsSquare } from "react-icons/bs"
import { Col, Row } from "antd";
import { todoState } from "./state/makeTodoState";
import { observer } from "mobx-react-lite";
import TaskList from "./componets/tasklist/tesklist";

const App = observer(() => {
	const allDone = todoState.allDone() ? (
		<BsCheck2All/>
	) : (
		<BsSquare/>
	);

	return (
		<div className="App App-header">
			<div className="w-80">
				<Row className="row-top">
					<Col className="id" span={3}>
						Numero
					</Col>
					<Col className="task" span={16}>
						Task
					</Col>
					<Col className="done" span={5}>
						Status
					</Col>
				</Row>
				<TaskList></TaskList>
				<Row className="row-bottom">
					<Col span={3}></Col>
					<Col className="done-tasks task" span={16}>
						{`Done task's : ${todoState.doneTodosCount()}`}
					</Col>
					<Col  className="add-task" span={3}>
						<button
							style={{ color: `${todoState.allDone() ? "green" : "white"}` }}
						>
							{allDone}
						</button>
					</Col>
					<Col className="add-task"span={2}>
						<button
							style={{color: "green"}}
							onClick={() =>
								todoState.addTodo(prompt("add a Todo:", "bring more coffe"))
							}
						>
							<BsPlusSquareFill/>
						</button>
					</Col>
				</Row>
			</div>
		</div>
	);
});

export default App;
