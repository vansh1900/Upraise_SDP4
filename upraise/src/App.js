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
import Donate from './Components/User/Donate/Donate';
import Vol_Home from './Components/Volunteer/VolnHome/Vol_Home';
import Transport from './Components/Volunteer/Transport/Transport';
import My_transportations from './Components/Volunteer/My_Transportation/My_transportations';
import AdmHome from './Components/Admin/AdminHome/AdmHome';
import AssignOrg from './Components/Admin/AssignOrg/AssignOrg';
import AssignVolnt from './Components/Admin/AssignVolunteers/AssignVolnt';

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
            <Route exact path='/donate' element={<Donate/>}></Route>

            <Route exact path='/volunteer' element={<Vol_Home/>}></Route>
            <Route exact path='/transport' element={<Transport/>}></Route>
            <Route exact path='/my_transportation' element={<My_transportations/>}></Route>

            <Route exact path='/admin' element={<AdmHome/>}></Route>
            <Route exact path='/assignorg' element={<AssignOrg/>}></Route>
            <Route exact path='/assignvolunteer' element={<AssignVolnt/>}></Route>

            <Route exact path='/logout' element={<Logout/>}></Route>
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
