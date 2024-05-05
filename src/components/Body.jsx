// import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";

const Body = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [restaurant, setRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // empty dependecy array => once after render
  // dep array [searchText] => once after initial render + everytime after render(searchText changes)
  useEffect(() => {
    // API call
    getRestaurant();
  }, []);

  const getRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    console.log(result);

    // optional chaining
    setRestaurant(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRestaurant(
      result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // not render component (early return)
  if (!allRestaurant) return null;
  if (restaurant?.length === 0)
    return <h1>No restaurant is available with this name</h1>;

  return allRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // change the restaurant list with respect to input in input box
            const data = filterData(searchText, allRestaurant);
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-List">
        {restaurant.map((res) => (
          <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
            <RestaurantCard {...res.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
