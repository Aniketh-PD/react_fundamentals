import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.960059122809971&lng=77.57337538383284&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    setFilteredRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const handleClick = () => {
    const filteredRestaurantListOnRating = filteredRestaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurantList(filteredRestaurantListOnRating);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchClick = () => {
    const restaurantsMatchingSearch = restaurantList.filter((restaurant) => {
      return restaurant?.info?.name?.toLowerCase()?.includes(searchValue?.toLowerCase());
    });
    setFilteredRestaurantList(restaurantsMatchingSearch);
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input type="text" value={searchValue} onChange={handleChange} />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <button onClick={handleClick}>Top Rated Restaurants</button>
      </div>
      <div className="restaraunt-container">
        {filteredRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
