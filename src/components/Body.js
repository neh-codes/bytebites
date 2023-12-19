import RestaurantCard from "./RestaurantCard";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utilis/useOnlineStatus';
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utilis/UserContext";


const Body = () => {

const [listofRestaurants, setListofRestaurants] = useState([ ]);
const [filteredListofRestaurants, setfilteredListofRestaurants] =useState([ ]);
const[searchText, setsearchText] = useState("");
const  RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


useEffect(()=>{
  fetchData();
}, []);

const fetchData = async () =>{
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5010576&lng=73.81050789999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

  const json = await data.json();


  setListofRestaurants( 
    json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredListofRestaurants( 
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
}

const onlineStatus = useOnlineStatus();
if (onlineStatus === false) return(
  <h1>You are offline</h1>
);

const {loggedInUser, setUserName} = useContext(UserContext);

    return listofRestaurants.length === 0 ?(
      <Shimmer/>) : (
      <div className='body p-2'>
        
        <div className="filter"> 

            <button className="filter-btn bg-gray-100 px-4 py-2 rounded-full mr-3" onClick={()=>{
            const filteredList = filteredListofRestaurants.filter(
              (res) => res.info.avgRating >= 4.5 )
              setfilteredListofRestaurants(filteredList);
            }}>Top rated Restaurants</button>


            <input type="text" className="search-box px-4 py-2 mx-2 rounded-full border-2 border-gray-100" value={searchText} onChange={(e)=>{setsearchText(e.target.value)}}/>
            <button className="bg-gray-100 px-4 py-2 rounded-full" onClick={() => {
                const filteredRestaurants = listofRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setfilteredListofRestaurants(filteredRestaurants);
            }}>Search</button>

<button className= " mx-2">UserName :</button>
<input type="text" className="px-4 py-2  rounded-full border-2 border-gray-100" 
value={loggedInUser}
onChange={(e)=>setUserName(e.target.value)}/>
            

          </div>
        <div className="flex flex-wrap">
        {filteredListofRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id} style={{ textDecoration: 'none' }}>
              {
                restaurant?.info?.isOpen ? (<RestaurantCardPromoted resData={restaurant?.info}/>
             ):(
              <RestaurantCard resData={restaurant?.info} />
             )}
              
              
              </Link>
          ))}
        </div>
  
    </div>
    )
  }
  export default Body;