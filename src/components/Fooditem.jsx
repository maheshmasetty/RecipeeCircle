import styles from './fooditem.module.css'
export default function Fooditem({ food,setfoodid }) {
    return (
        <div className={styles.itemcontainer}>
            <img className={styles.itemimage} src={food.image} alt="" />
            <div className={styles.itemcontent}>
                <p className={styles.itemname}>{food.title}</p>
            </div>
            <div className={styles.bc}>
                <button onClick={() => { console.log(food.id); setfoodid(food.id); }} className={styles.itembutton}>View Recipe</button>
            </div>

        </div>
    )
}