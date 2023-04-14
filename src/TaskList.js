import { useState } from 'react';

  export function TaskList( {tasks} ) {
    const [isComplete, setIsComplete] = useState(false);

    function handleClick() {
    setIsComplete(!isComplete);
    }
    return (
      <div>
      {tasks.map(task => (
        <label className="task" key={task.id}>
          <input onClick={handleClick} checked={isComplete} type="checkbox"></input>
          {isComplete ? (<del>{task.text}</del>) : task.text}
        </label>
      ))}
      </div>
    );
  }