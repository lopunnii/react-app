import { useState } from 'react';

function Item({ name }) {
  const [isComplete, setIsComplete] = useState(false);
  function handleClick() {
    setIsComplete(!isComplete);
}
    return <li onClick={handleClick}>{isComplete ? (<del>{name + ' ✔'}</del>) : name}</li>;
}

export default function List() {
return (
<div className="list-box">
<ul className="list">
  <Item name="Do Yoga"></Item>
  <Item name="Cook Curry"></Item>
  <Item name="Study React"></Item>
</ul>
</div>
);
}
