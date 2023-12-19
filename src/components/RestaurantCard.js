import { CDN_URL } from "../utilis/constants";


const RestaurantCard = (props) => {
  const {resData} = props;

  const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName} = resData;
  
  
    return(
      <div className="m-1 p-1 w-[240px] transition-[0.3s] ease-in hover:scale-95">
          <img className="res-card-img rounded-[16px] shadow" src={ CDN_URL +cloudinaryImageId}></img>
          <div className='res-card-content' style={{marginLeft:"12px"}}>
              <h3 className="font-bold pt-2">{name}</h3>
              <p>{cuisines.join(", ")}</p>
              <p>{avgRating} ⭐</p>
              <p>{areaName}</p>
          </div>
      </div>
      
    )
  }

  export const withPromotedLabel = (RestaurantCard) =>{
    return(props) =>{
      return(
        <div>
          <label className="absolute text-xs bg-[#f3f4f68d] text-black m-2 p-2 z-10 rounded">Open Now</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;