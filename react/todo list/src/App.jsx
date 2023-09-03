import { useState } from "react";

const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [value, setValue] = useState("");

	const handleClick = () => {
		setTasks([...tasks, value]);
		setValue("");
	};

	const handleRemove = (task) => {
		const newTasks = tasks.filter((t) => t !== task);
		setTasks(newTasks);
	};

	return (
		<>
			<h1>Todo List</h1>
			<div>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button onClick={handleClick}>Add</button>
			</div>
			{`${tasks.length} tasks remaining`}
			<ul>
				{tasks.map((task, index) => {
					return (
						<li key={index}>
							{task} <button onClick={() => handleRemove(task)}>remove</button>
						</li>
					);
				})}
			</ul>
		</>
	);
};

const App = () => {
	return (
		<>
			<TodoList />
		</>
	);
};
export default App;
