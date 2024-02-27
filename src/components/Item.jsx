// {isLoading? (<p>Loading..</p>):(
//     food.extendedIngredients.map((item) =>( <div>
//         <img src={`https://spoonacular.com/cdn/ingredients_100x100/`+ item.image} alt="" />
//         <h3>{item.name}</h3>
//         <h3>{item.amount} {item.unit}</h3>
//     </div>)))
// }
import React from 'react'
import styles from "./item.module.css"
export default function Item({item}) {
  return (
    <div>
      <div className={styles.itemcontainer}>
        <img className={styles.imagecontainer} src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" />
      <div/>

      <div className={styles.namecontainer}>
        
      <div className={styles.name}>{item.name}</div>
      <div className={styles.amount}>{item.amount} {item.unit}</div>
        
      </div>
        
    </div>
    </div>
  )
}