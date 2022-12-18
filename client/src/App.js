import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddProduct from "./components/admin/addproduct/AddProduct";
import AdminNavbar from "./components/admin/adminNavbar/AdminNavbar";
import Map from "./components/admin/map/Map";
import Orders from "./components/admin/orders/Orders";
import ProductList from "./components/admin/productList/ProductList";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Products/>
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
          <ProductList />
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
    },
    {
      path: "/admin/map",
      element: (
        <>
          <AdminNavbar />
          <Map />
        </>
      ) ,
    }
  ]);
  return (
    <div style={{overflowX: "hidden"}}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
