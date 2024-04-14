import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";




const Body = () => {
    const [restaurantList,setRestaurantList] = useState(resData);

    const handleClick = () =>{
        const filteredRestaurantList = restaurantList.filter((restaurant) => restaurant.info.avgRating > 4);
        setRestaurantList(filteredRestaurantList)
    }

    return (
      <div className="body">
        <div className="filter-btn">
            <button onClick={handleClick}>Top Rated Restaurants</button>
        </div>
        <div className="restaraunt-container">
          {
            restaurantList.map((restaurant) => <RestaurantCard key={restaurant?.info?.id}  resData={restaurant} />)
          }
        </div>
      </div>
    );
  };

  export default Body;