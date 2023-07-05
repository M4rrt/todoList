import { makeAutoObservable } from "mobx";
import { configure } from "mobx"

configure({
	useProxies: "never"
})

export type TodoState = {
	todos: Todo[];
	doneTodosCount: () => number;
	addTodo: (task: String | null) => void;
	removeTodo: (id: number) => void;
	changeStatus: (id: number) => void;
	allDone: () => boolean;
};

type Todo = {
	id: number;
	task: String;
	done: boolean;
};

export const makeTodoState = () => {
	return makeAutoObservable({
		todos: [
			{
				id: 1,
				task: "Create the TODO data Structure using typeScript and mobX",
				done: true,
			},
			{
				id: 2,
				task: "Create a Add Task function",
				done: true,
			},
			{
				id: 3,
				task: "Make it beauty",
				done: false,
			},
		],

		doneTodosCount() {
			return this.todos.filter(todo => todo.done).length
		},

		addTodo(task: String) {
			const ids = this.todos.map(todo => todo.id).sort();
			const lastID = (ids.length > 0) ? ids[ids.length - 1] : 0;
			const newID = lastID + 1;

			// push
			this.todos = [
				...this.todos,
				{
					id: newID,
					task: task,
					done: false,
				},
			];
		},

		removeTodo(id: number) {
			// findIndex + splice
			this.todos = this.todos.filter(todo => todo.id !== id);
		},

		changeStatus(id: number) {
			// modify in-place
			this.todos = this.todos.map(todo => {
				if (todo.id !== id) { return todo; }
				return {
					...todo,
					done: todo.done ? false : true,
				};
			});
		},

		allDone() {
			return this.doneTodosCount() === this.todos.length ? true : false;
		},
	} as TodoState);
};


export const todoState = makeTodoState();
