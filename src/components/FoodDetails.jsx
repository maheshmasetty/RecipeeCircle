import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "2ef8ae49931d48e4a92c1342d21efe1a";
  useEffect(() => {
    async function fetchdetails() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setisLoading(false);
    }
    fetchdetails();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipecard}>
        <h1 className={styles.recipename}>{food.title}</h1>
        <img className={styles.recipeimage} src={food.image} alt="" />
        <div className={styles.recipeds}>
          <span>
            <strong>🕐 {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>🧑‍🤝‍🧑Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🍅Vegetarian" : "🍗Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐄Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>₹{food.pricePerServing} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <div className={styles.recipeins}>
          <h2>Instructions</h2>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
