import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenuData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resMenuData === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenuData?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  const categories =
    resMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" &&
        item?.card?.card?.itemCards
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-lg my-6">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </h3>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={showIndex === index}
          setShowItem={() => {
            if(index !== showIndex){
              setShowIndex(index);
            }else{
              setShowIndex(null);
            }
            
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
