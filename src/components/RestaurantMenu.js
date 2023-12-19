import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utilis/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';


const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0); 



if (resInfo === null) return <Shimmer />;

const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[0]?.card?.card?.info;



const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


return (
  
    <div className='p-2 flex flex-col items-center justify-center'>
      
      
      <div className='w-2/4 p-2 flex justify-between'>
            <div>
              <h1>{name}</h1>
              <h3>{cuisines.join(", ")}</h3>
              </div>
          <div>
          <h4>{avgRating} ⭐</h4>
          <h4>{costForTwoMessage}</h4>
          </div></div>
<div className='w-2/4'>
       {categories.map((category, index)=>
      <RestaurantCategory 
      key= {category?.card?.card?.title }
      data={category?.card?.card}
      showItems={index === showIndex && true}
      setShowIndex={()=>setShowIndex(index)}
      />
      )}
       </div>
        



    </div>
  )
}

export default RestaurantMenu;