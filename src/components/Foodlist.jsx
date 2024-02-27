import Fooditem from "./Fooditem";

export default function Foodlist({foodData,setfoodid}) {
    return <div>
        {foodData.map((food) => (
            <Fooditem setfoodid={setfoodid} key={food.id} food={food} />
        )
        )}
    </div>
}