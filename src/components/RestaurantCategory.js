import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setShowIndex}) =>{

    const handleClick = () =>{
       setShowIndex();
   }
   
    return(
        <div>
        <div className="m-2 p-4 bg-slate-100 shadow rounded" >
            <div className="flex justify-between font-bold cursor-pointer" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
        
        </div>
    )
}
export default RestaurantCategory;