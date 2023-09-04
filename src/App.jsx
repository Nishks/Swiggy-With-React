/*
    created a server
    hot module replacement has been done by parcel
    File Watcher algorithm -- C++
    MINIFY
    BUNDLING
    Cleaning our code
    Dev and Production build
    Super fast build algorithm
    Image Optimization
    Caching while development
    Compatible with older versions of browsers
    HTTPS on dev
    port Number
    Consistent Hashing Algorithm
    zero config bundler
    Tree shaking --> ignore the unused code
*/

/*
  Header
    - Logo
    - Nav Items(Right Side)
    - Cart
  Body
    - Search Bar
    - RestaurantList
    - RestrauntCard
      - Image
      - Name
      - Rating
      - Customize
  Footer
    - links
    - Copyright
*/

import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default AppLayout;

// Inline style in react
// const styleObj = {
//   backgroundColor: "red",
// };

// const jsx = (
//   <div style={styleObj}>
//     <h1>jsx</h1>
//     <h1>Second JSX</h1>
//   </div>
// );
