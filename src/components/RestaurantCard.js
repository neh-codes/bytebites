import { CDN_URL } from "../utilis/constants";


const RestaurantCard = (props) => {
  const {resData} = props;

  const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName} = resData;
  
  
    return(
      <div className="res-card">
          <img className="res-card-img" src={ CDN_URL +cloudinaryImageId}></img>
          <div className='res-card-content' style={{marginLeft:"12px"}}>
              <h3>{name}</h3>
              <p>{cuisines.join(", ")}</p>
              <p>{avgRating} stars</p>
              <p>{areaName}</p>
          </div>
      </div>
      
    )
  }
  export default RestaurantCard;