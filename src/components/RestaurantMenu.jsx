import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
import { RESTAURANT_IMG } from "../constant";
import "../App.css";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json);
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    // setResInfo(json.data?.cards[0]?.card?.card?.info);
    setResInfo(json.data);
  };

  // handle the condition that in first render you resInfo will be null and you should not do anything
  // with it, so simply return shimmer UI whenever your resInfo is null.
  if (resInfo === null) return <Shimmer />;

  return (
    <div className="details">
      <div>
        <h3>Restaurant id: {id}</h3>
        <h3>{resInfo?.cards[0]?.card?.card?.info?.name}</h3>
        <img
          className="restaurantLOGO"
          src={
            RESTAURANT_IMG +
            resInfo?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h3>{resInfo?.cards[0]?.card?.card?.info?.areaName}</h3>
        <h3>{resInfo?.cards[0]?.card?.card?.info?.city}</h3>
        <h3>{resInfo?.cards[0]?.card?.card?.info?.avgRating} stars</h3>
        <h3>{resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage}</h3>
      </div>
      <div>
        <h2>Menu</h2>
        {/* <ul>
          {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.addons?.map(
            (e) => e?.choices?.map((ele) => <li key={ele?.id}>{ele?.name}</li>)
          )}
        </ul> */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
