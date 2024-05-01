import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 shadow-lg">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="restaurant-logo"
        className="rounded-lg"
      />
      <h4 className="font-bold p-4 text-lg">{name}</h4>
      <h4>{avgRating}</h4>
      <h4 className="cuisines-descrition">{cuisines.join(",")}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white">PROMOTED</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
