import { useEffect, useState } from "react";
import { MENU_CARD_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resMenuData, setResMenuData] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(`${MENU_CARD_URL}${resId}`);
    const json = await data.json();
    setResMenuData(json);
  };
  return resMenuData;
};

export default useRestaurantMenu;
