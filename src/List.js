function Item({ name, isComplete}) {
    return <li>{isComplete ? (<del>{name + ' ✔'}</del>) : name}</li>;
}

function handleClick() {
    return console.log("Clicked!")
}

export default function List() {
return (
<div className="list-box">
<ul className="list">
  <Item name="Do Yoga" onClick={handleClick} isComplete={true}></Item>
  <Item name="Cook Curry" onClick={handleClick} isComplete={true}></Item>
  <Item name="Study React" onClick={handleClick} isComplete={false}></Item>
</ul>
</div>
);
}
