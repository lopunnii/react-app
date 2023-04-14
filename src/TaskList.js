import { useState } from 'react';

export function TaskList({ tasks }) {
    const [isComplete, setIsComplete] = useState(false);
    function handleClick() {
      setIsComplete(!isComplete);
  }
      return (
      <label className="task">
        <input type="checkbox" onClick={handleClick} checked={isComplete}></input>
        {isComplete ? (<del>{tasks.text}</del>) : tasks.text}
      </label>
      )
  
  }