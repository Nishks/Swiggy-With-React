import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  //   const [count2] = useState(0);
  useEffect(() => {
    // API call
    const timer = setInterval(() => {
      console.log("Hello there");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // console.log("use Effect");
  });
  //   console.log("render");
  return (
    <div>
      <h2>Profile Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
    </div>
  );
};

export default Profile;
