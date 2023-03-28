function handleClick() {
    return console.log("Clicked!")
}

export default function List() {
return (
<div className="list-box">
<ul className="list">
  <li onClick={handleClick}>Do yoga</li>
  <li>Cook curry</li>
  <li>Learn programming</li>
</ul>
</div>
);
}
