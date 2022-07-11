import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

 export default function AllRoutes() {
  return (
    <div>
      {/* Routes */}
      {/* Home */}
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      /> */}
      {/* <Route
      path="/Login"
      element={<PrivateR}
      /> */}
        <Route path="./Login" element={<Login/>} />
        

      </Routes>
      {/* Login */}
      {/* Private Route: Dashboard */}
    </div>
  );
}