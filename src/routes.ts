import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CustomerApp from "./pages/CustomerApp";
import StaffPortal from "./pages/StaffPortal";
import ManagerDashboard from "./pages/ManagerDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/customer",
    Component: CustomerApp,
  },
  {
    path: "/staff",
    Component: StaffPortal,
  },
  {
    path: "/manager",
    Component: ManagerDashboard,
  },
]);
