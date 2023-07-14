import { useState } from "react";
import Meal from "./Meal";


export default function Menu() {

    const [meal, setMeal] = useState("")

    const handleClick = (newMeal, amount) => {
        // setMeal(meal);
        setMeal(current => current + ' ' + newMeal);

        console.log('argument from child', newMeal);
    };

  return (
    <div>
        <h1>Choose your meal</h1>
        <p>{meal}</p>
        <br></br>
        <Meal handleClick={handleClick} name="Raxo"/>
        <Meal handleClick={handleClick} name="Doner" />
        <Meal handleClick={handleClick} name="Carnitas" />
    </div>
  );
}
