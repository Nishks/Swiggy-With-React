import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const originalRestaurantList = restaurantList;

const filterData = (searchText, restaurant) => {
  if (searchText === "") return originalRestaurantList;
  return restaurant.filter((res) => res.name.includes(searchText));
};

const Body = () => {
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  return (
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
            const data = filterData(searchText, restaurant);
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-List">
        {restaurant.map((res) => (
          <RestaurantCard {...res} key={res.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
