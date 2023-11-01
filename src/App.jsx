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
import About from "./components/About";
// routing
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// Error
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <>
      <Header />
      {/* Outlet will replaced with the reqired route using nested routing */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;

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
