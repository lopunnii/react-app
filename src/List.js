import { useState } from 'react';

function Item({ name }) {
  const [isComplete, setIsComplete] = useState(false);
  function handleClick() {
    setIsComplete(!isComplete);
}
    return (
    <label className="task">
      <input type="checkbox" onClick={handleClick} checked={isComplete}></input>
      {isComplete ? (<del>{name}</del>) : name}
    </label>
    )

}

export default function ToDoListApp() {
return (
<div>
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
  <Item name="Do Yoga"></Item>
  <Item name="Cook Curry"></Item>
  <Item name="Study React"></Item>
</div>
</div>
</div>
);
}
