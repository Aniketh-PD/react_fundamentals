import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const isOnline = useOnlineStatus();

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
      return restaurant?.info?.name
        ?.toLowerCase()
        ?.includes(searchValue?.toLowerCase());
    });
    setFilteredRestaurantList(restaurantsMatchingSearch);
  };

  if (!isOnline) {
    return (
      <h1>looks like you are offline please check your internet connection</h1>
    );
  }

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchValue}
            onChange={handleChange}
          />
          <button
            className="px-4 py-2 m-4 bg-orange-100"
            onClick={handleSearchClick}
          >
            Search
          </button>

          <button className="px-4 py-2 m-2 bg-green-100" onClick={handleClick}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={`restaurants/${restaurant?.info?.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
