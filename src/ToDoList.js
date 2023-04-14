import { useState } from 'react';
import { TaskList } from './TaskList';

export default function ToDoListApp() {
  const [tasks, setTasks] = useState(initialTasks);

return (
<>
{/* タイトル */}
<h1>To Do List</h1>

{/* 完了したタスク数 */}
<h4>Tasks Completed: 0</h4>

{/* タスクを追加 */}
<h4>Add Task:</h4>
<input type="text"></input>
<button>+</button>

{/* タスクリスト */}
<div className="list-box">
<div className="list">
  <TaskList tasks={tasks}></TaskList>
</div>
</div>
</>
);
}

// 初期タスク
const initialTasks = [
  {id: 0, text: "Do Yoga", isComplete: false},
  {id: 1, text: "Cook Curry", isComplete: false},
  {id: 2, text: "Study React", isComplete: false},
];