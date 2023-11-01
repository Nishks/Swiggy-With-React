import "../App.css";

const Shimmer = () => {
  return (
    <div className="restaurant-List">
      {Array(10)
        .fill("")
        .map((e, ind) => (
          <div key={ind} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
