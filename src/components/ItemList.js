import { useDispatch } from "react-redux"
import { CDN_URL } from "../utilis/constants"
import { addItem } from "../utilis/cartSlice";

const ItemList = ({items}) =>{


    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        dispatch(addItem(item));
        
    }



 return(
    <div>
        <ul>
            {items.map(item => (
            <div data-testid="foodItems" key={item.card.info.id} className="my-2 p-2 border-slate-200 border-b-2 flex justify-between">
                <div className="py-4 w-3/4">
                    <span>{item.card.info.name} - </span>
                    <span>₹{item.card.info.price/100 ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                
                <div className="flex flex-col justify-end">
                <img src={CDN_URL+item.card.info.imageId} className="w-32 rounded shadow"/>
                        <div className="-mt-2 flex justify-center">
                        <button className="p-2 text-sm font-bold rounded bg-[#ffffff] shadow text-[#60b246] w-20" onClick={()=>handleAddItem(item)}>ADD +</button>
                        </div>
                </div>
            </div>
            ))}

        </ul>
    </div>
 )
}
export default ItemList