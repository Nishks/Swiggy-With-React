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
import Profile from "./components/Profile";

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
        children: [
          {
            path: "profile", // parentPath/{path} ==> localhost:5173/about/profile
            element: <Profile />,
          },
        ],
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
