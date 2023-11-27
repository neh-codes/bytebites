import RestaurantCard from "./RestaurantCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";


const Body = () => {

const [listofRestaurants, setListofRestaurants] = useState([ ]);
const [filteredListofRestaurants, setfilteredListofRestaurants] =useState([ ]);
const[searchText, setsearchText] = useState("");

useEffect(()=>{
  fetchData();
}, []);

const fetchData = async () =>{
  const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();

  console.log(json);
  setListofRestaurants( 
    json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredListofRestaurants( 
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
}



    return listofRestaurants.length === 0 ?(
      <Shimmer/>) :
      (
      <div className='body'>
        <div className="filter"> 

            <button className="filter-btn" onClick={()=>{
            const filteredList = filteredListofRestaurants.filter(
              (res) => res.info.avgRating >= 4.5 )
              setfilteredListofRestaurants(filteredList);
            }}>Top rated Restaurants</button>


            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
            <button onClick={() => {
                const filteredRestaurants = listofRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setfilteredListofRestaurants(filteredRestaurants);
            }}>Search</button>

          </div>
        <div className="res-container">
        {filteredListofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant?.info} />
          ))}
        </div>
  
    </div>
    )
  }
  export default Body;