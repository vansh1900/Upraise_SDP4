import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Login from "./Components/Authenticate/Login/Login";
import Index from './Components/Authenticate/Index/Index';
import Register from './Components/Authenticate/Signup/Register';
import UserRegister from './Components/Authenticate/Signup/UserRegister';
import OrganizationRegister from './Components/Authenticate/Signup/OrganizationRegister';
import VolunteerRegister from './Components/Authenticate/Signup/VolunteerRegister';
import UserHome from './Components/User/Home/UserHome';
import Userprofile from './Components/User/UserProfile/Userprofile';
import Mydonations from './Components/User/My_Donations/Mydonations';
import Logout from './Components/Logout/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Index/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/register' element={<Register/>}></Route>
            <Route exact path='/userregister' element={<UserRegister/>}></Route>
            <Route exact path='/volntregister' element={<VolunteerRegister/>}></Route>
            <Route exact path='/orgregister' element={<OrganizationRegister/>}></Route>
            <Route exact path='/user' element={<UserHome/>}></Route>
            <Route exact path='/mydonations' element={<Mydonations/>}></Route>
            <Route exact path='/userprofile' element={<Userprofile/>}></Route>
            <Route exact path='/logout' element={<Logout/>}></Route>
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
