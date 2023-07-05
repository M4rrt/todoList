import { makeAutoObservable } from "mobx";
import { configure } from "mobx"

configure({
    useProxies: "never"
})

export type TodoState = {
	todos: Todo[];
	doneTodosCount: () => number;
	addTodo: (task : String | null) => void;
	removeTodo: (id : number) => void;
	changeStatus : (id : number) => void;
	allDone : () => boolean;
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
		addTodo (task :String){
			const ids = this.todos.map(todo => todo.id);
			console.log(ids)
			let newId
			Math.max(...ids)=== -Infinity ? newId = 1 : newId = 1+Math.max(...ids)
			this.todos.push({
				id : (newId),
				task : task,
				done : false
			})
			const lateids = this.todos.map(todo => todo.id);
			console.log(lateids)
		},
		removeTodo(id : number) {
			const index = this.todos.findIndex(todo => todo.id === id);
			this.todos.splice(index,1)
		},
		changeStatus(id : number) {	
			const todo = this.todos.filter(todo => todo.id === id);
			todo[0].done = todo[0].done ? false : true;
		},
		allDone() {
			return this.doneTodosCount() === this.todos.length ? true : false
		}
	} as TodoState);
};


export const todoState = makeTodoState();