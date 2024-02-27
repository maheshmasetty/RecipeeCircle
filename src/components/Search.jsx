import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "2ef8ae49931d48e4a92c1342d21efe1a";
export default function Search({ foodData, setfoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchfood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setfoodData(data.results);
      console.log(data.results);
    }
    fetchfood();
  }, [query]);
  return (
    <div className={styles.searchcontainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
// export default function Search({foodData, setfoodData }) {
//     const [query, setQuery] = useState("pizza");

//     useEffect(() => {
//         async function fetchfood() {
//             const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
//             const data = await res.json();
//             setfoodData(data.results);
//             console.log(data.results);

//         }
//         fetchfood();
//     }, [query]);
//     return (
//         <div className={styles.searchcontainer}>
//             <input
//                 className={styles.input}
//                 value={query}
//                 onChange={(e)=>setQuery(e.target.value)}
//                 type="text" />
//         </div>
//     );
// }
