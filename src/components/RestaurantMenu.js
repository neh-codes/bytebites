import React, { useState } from 'react'
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utilis/constants';

const RestaurantMenu = () => {


    const [resInfo, setResInfo] = useState(null);
    
    const {resId} = useParams();

    useEffect(() =>{
        fetchMenu();
    }, []);

const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
};

if (resInfo === null) return <Shimmer />;

const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{costForTwoMessage}</h4>

        <ul>
            {itemCards.map(item => <li key={item.card.info.id}>
                {item.card.info.name} - {"Rs. "}{item.card.info.price/100}
                
                </li>)}
            
        </ul>
    </div>
  )
}

export default RestaurantMenu;