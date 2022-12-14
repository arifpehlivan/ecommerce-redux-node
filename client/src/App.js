import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
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
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
