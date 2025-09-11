import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dashboard from "./component/Dashboard";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import SignIn from "./pages/SignIn";
import DashboardLayout from "./component/DashboardLayout";
import UserManagement from "./pages/UserManagement";
import Fitness from "./pages/Fitness";

import UserForm from "./pages/Form";
import Adminpanel from "./pages/Adminpanel";
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
         <Route path="/adminpanel" element={<Adminpanel />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
