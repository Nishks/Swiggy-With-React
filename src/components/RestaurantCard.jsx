// destructuring on fly
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  // const { image, name, rating, type_of_food } = props.restaurant;

  const image =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="card">
      <img src={image + cloudinaryImageId} alt="restaurant"></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
