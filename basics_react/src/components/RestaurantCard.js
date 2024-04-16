import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, sla } = resData?.info;
    
    return (
      <div className="res-card-container">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="restaurant-logo"
          className="res-logo"
        />
        <h4>{name}</h4>
        <h4>{avgRating}</h4>
        <h4 className="cuisines-descrition">{cuisines.join(",")}</h4>
        <h4>{sla?.deliveryTime} mins</h4>
      </div>
    );
  };

  export default RestaurantCard;