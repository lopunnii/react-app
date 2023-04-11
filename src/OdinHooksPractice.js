import { useState, useEffect } from "react";

// Increment Button Example

const IncrementButton = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
;}

// Change Color Example

const ChangeColorButton = () => {
    const [color, setColor] = useState("black");
  
    useEffect(() => {
      const changeColorOnClick = () => {
        if (color === "black") {
          setColor("red");
        } else {
          setColor("black");
        }
      };
      
      document.addEventListener("click", changeColorOnClick);
  
      return () => {
        document.removeEventListener("click", changeColorOnClick);
      };
    }, [color]);
  
    return (
      <div>
        <div
          id="myDiv"
          style={{
            color: "white",
            width: "100px",
            height: "100px",
            backgroundColor: color,
          }}
        >
          This div can change color. Click on me!
        </div>
      </div>
    );
  };

export { IncrementButton, ChangeColorButton };