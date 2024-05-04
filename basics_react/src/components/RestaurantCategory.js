import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowItem }) => {
 

  const handleClick = () => {
    setShowItem();
  };

  return (
    <div
      className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 cursor-pointer"
    >
      <div onClick={handleClick} className="flex justify-between">
        <span className="font-bold text-lg">
          {data?.title}({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
