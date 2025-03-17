import "./App.css";
import Body from "./components/Body";
import Error from "./components/Error";
import { Provider } from "react-redux";
import About from "./components/About";
import appStore from "./utils/appStore";
import Contact from "./components/Contact";
import { Header } from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // app layout has 3 childrens 
    children: [
      {
        path : "/",
        element : <Body/>
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
        path : "/restaurant/:resId",
        element : <RestaurantMenu/>
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
