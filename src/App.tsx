import "./App.css";
import { todoState } from "./state/makeTodoState";
import { observer } from "mobx-react-lite";
import TaskList from "./componets/tasklist/tesklist";

const App = observer(() => {

  const allDone = todoState.allDone() ? (
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-all" viewBox="0 0 16 16">
  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
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
		<div className="App App-header">
			<div className="w-80">
				<div className="task">
					<div className="id">Numero</div>
					<div className="task">Task</div>
					<div className="done">Status</div>
				</div>
				<TaskList></TaskList>
				<div className="flex">
					<div className="done-tasks task">
						{`Done task's : ${todoState.doneTodosCount()}`}
					</div>
          <div className="add-task" >
						<button style={{color: `${todoState.allDone() ? "aqua": "white"}`}}>
              {allDone}
						</button >
					</div>
					<div className="add-task">
						<button
							onClick={() =>
								todoState.addTodo(prompt("add a Todo:", "bring more coffe"))
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="bi bi-plus-square-fill"
								viewBox="0 0 16 16"
							>
								<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
});

export default App;
