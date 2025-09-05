

import "./App.css";
import Dashboard from "./Component/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import DashboardLayout from "./component/DashboardLayout";
import UserManagement from "./pages/UserManagement";
import Fitness from "./pages/Fitness";
function App() {
  return (
    <>
      <BrowserRouter>
         
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<DashboardLayout/>}>
            <Route path="usermanagement" element={<UserManagement/>}/>
            <Route path="fitness" element={<Fitness/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
