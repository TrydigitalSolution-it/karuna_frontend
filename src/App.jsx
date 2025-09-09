import "./App.css";
import Dashboard from "./component/Dashboard";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import SignIn from "./pages/SignIn";
import DashboardLayout from "./component/DashboardLayout";
import UserManagement from "./pages/UserManagement";
import Fitness from "./pages/Fitness";

import UserForm from "./pages/Form";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route  element={<DashboardLayout />}>
          <Route path="usermanagement" element={<UserManagement />}/>
           
          
          <Route path="fitness" element={<Fitness />} />
        </Route>
         <Route path="/userform" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
