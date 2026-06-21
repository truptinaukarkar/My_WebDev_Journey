import { useEffect, useState } from "react";
import styles from "./FoodDetails.module.css";
import ItemList from "./ItemList.jsx";

export default function FoodDetail({foodId}){
    const [food, setFood] =useState({});
    const [isLoading, setIsLoading]= useState(true);
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY="d83578f2471f4224b9b0a813c586a76f";

    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
            setIsLoading(false);
        }
        fetchFood();
    },[foodId])

    return (
        <div className={styles.recipeCard}>
            <h1 className={styles.head}>Recipe Details</h1>
            <div className={styles.recipeName}>
                <h1>{food.title} </h1>
                <img className={styles.recipeImage} src={food.image} />
                <div className={styles.recipeDetails} >
                    <span>
                        <strong>⏱️ {food.readyInMinutes} Minutes </strong>
                    </span>
                    <span>
                        <strong>👪 Serves {food.servings} </strong>
                    </span>
                    <span>
                        <strong>{food.vegetarian ? " 🥕 Vegetarian": "🥩 Non-Vegetarian"}</strong>
                    </span>
                    <span>
                        <strong>{food.vegan ? "🐮 Vegan": ""}</strong>
                    </span>
                </div>
                <div>
                    $
                    <span>
                        <strong>{food.pricePerServing/100} Per Serving</strong>
                    </span>
                </div>

                <h2>Ingredients</h2>
                <ItemList food={food} isLoading={isLoading}/>

            <h2>Instructions</h2>
            <div className={styles.recipeInstruction} >
                <ol>
                    {isLoading? (<p>Loading....</p>): (food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>)))}
                </ol>
            </div>
        </div>
    </div>


    );
}