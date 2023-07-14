import { useState } from "react";


function Meal({name, handleClick}) {

    let [num, setNum] = useState(0);
    // let [meal, setMeal] = useState({});

    let incNum = () => {
        setNum(Number(num) + 1);
        console.log('increasing servings')
    }

    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }



    return (
      <div>
          <h2>{name}</h2>
          <p>{num}</p>
          <button onClick={incNum}>+</button>
          <button onClick={decNum}>-</button>
          <button onClick={event => handleClick(name, num)}>Add to List</button>
      </div>
    );
  }
  
  export default Meal;
