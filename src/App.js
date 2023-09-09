import React from "react";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/editProfile/:id",
    element: <EditProfile />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
