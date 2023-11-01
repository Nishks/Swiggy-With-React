// destructuring on fly
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  // const { image, name, rating, type_of_food } = props.restaurant;

  const image =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="center">
      <div className="card">
        <div className="content">
          <p className="name">{name}</p>
          <p className="cuisines">{cuisines.join(", ")}</p>
          {/* <p>{avgRating} stars</p> */}
        </div>
        <img src={image + cloudinaryImageId} alt="restaurant-image"></img>
      </div>
    </div>
  );
};

export default RestaurantCard;
