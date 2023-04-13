import { useState } from 'react';

function Item({ name }) {
  const [isComplete, setIsComplete] = useState(false);
  function handleClick() {
    setIsComplete(!isComplete);
}
    return <li onClick={handleClick}>{isComplete ? (<del>{name}</del>) : name}</li>;
}

export default function List() {
return (
<div>
<h4>Tasks Completed: 0</h4>
<h4>Add Task:</h4>
<input type="text"></input>
<button>+</button>
<div className="list-box">
<ul className="list">
  <Item name="Do Yoga"></Item>
  <Item name="Cook Curry"></Item>
  <Item name="Study React"></Item>
</ul>
</div>
</div>
);
}
