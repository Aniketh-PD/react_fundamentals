import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItemList, setShowItemList] = useState(false);

  const handleClick = () => {
    setShowItemList(!showItemList);
  };

  return (
    <div
      onClick={handleClick}
      className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 cursor-pointer"
    >
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {data?.title}({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItemList && <ItemList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
