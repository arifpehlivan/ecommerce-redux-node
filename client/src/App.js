import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from "./components/admin/addproduct/AddProduct";
import AdminNavbar from "./components/admin/adminNavbar/AdminNavbar";
import Orders from "./components/admin/orders/Orders";
import Navbar from "./components/navbar/Navbar";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  // const Layout = () => {
  //   return (
  //     <Navbar />
  //   )
  // }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <HomeScreen />
        </>
      ),

    },
    {
      path: "/shoppingCart",
      element: (
        <>
          <Navbar />
          <ShoppingCart />
        </>
      )
    },
    {
      path: "/admin",
      element: (
        <>
          <AdminNavbar />
          <AdminScreen />
        </>
      ),
    },
    {
      path: "/admin/addproduct",
      element: (
        <>
          <AdminNavbar />
          <AddProduct />
        </>
      ) ,
    },
    {
      path: "/admin/orders",
      element: (
        <>
          <AdminNavbar />
          <Orders />
        </>
      ) ,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
