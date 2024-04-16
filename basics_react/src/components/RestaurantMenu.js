import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenuData, setResMenuData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.960059122809971&lng=77.57337538383284&restaurantId=${resId}`
    );
    const json = await data.json();
    setResMenuData(json);
  };
  if (resMenuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenuData?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>
        {cuisines.join(" , ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {"Rs "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
