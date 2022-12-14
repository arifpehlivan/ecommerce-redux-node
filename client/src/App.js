import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import AddProduct from "./components/admin/addproduct/AddProduct";
import Orders from "./components/admin/orders/Orders";
import AdminScreen from "./screens/AdminScreen";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeScreen />
    },
    {
      path: "/admin",
      element: <AdminScreen />,
    },
    {
      path: "/admin/addproduct",
      element: <AddProduct/>,
    },
    {
      path: "/admin/orders",
      element: <Orders/>,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
