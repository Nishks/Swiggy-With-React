import React from "react";
import { Outlet } from "react-router-dom";
import Profile_function from "./Profile";
import Profile_class from "./Profile_Class";
// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p> This is the Routing in React</p>
//       {/* <Outlet /> */}
//       <Profile_function name={"Nishkarsh"} />
//       <Profile_class name={"Nishkarsh"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent - constructor");
  }

  componentDidMount() {
    // Best place to make an API call
    // this.timer = setInterval(() => {
    //   console.log("Hello there");
    // }, 1000);
    console.log("Parent - componentDidMount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p> This is the Routing in React</p>
        {/* <Outlet /> */}
        <Profile_function name={"Nishkarsh"} />
        <Profile_class name={"Nishkarsh First"} />
        {/* <Profile_class name={"Nishkarsh Second"} /> */}
      </div>
    );
  }
}

export default About;
