import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationHeader from './components/Header';
import Login from './navigation/Login';
import Home from './navigation/Home';
import Admin from './navigation/Admin';
import PatientDetails from './navigation/PatientDetails';
import PharmacistList from './navigation/PharmacistList';
import DoctorList from './navigation/DoctorList';
import PatientList from './navigation/PatientList';
import DoctorProfile from './navigation/DoctorProfile';
import NewPatient from './navigation/NewPatient';
import Register from './navigation/Register';
import PharmacistProfile from './navigation/PharmacistProfile';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Routes>
              <Route path="Login" element={<Login />} />
              <Route path='Register' element={<Register/>}/>
              <Route path="/" element={<NavigationHeader Content={<Home />}/>} />
              <Route path='Admin' element={<NavigationHeader Content={<Admin />}/>}/>
              <Route path='PatientDetails' element={<NavigationHeader Content={<PatientDetails />}/>}/>
              <Route path='PharmacistList' element={<NavigationHeader Content={<PharmacistList/>}/>}/>
              <Route path='DoctorList' element={<NavigationHeader Content={<DoctorList/>}/>}/>
              <Route path='PatientList' element={<NavigationHeader Content={<PatientList/>}/>}/>
              <Route path='DoctorProfile' element={<NavigationHeader Content={<DoctorProfile/>}/>}/>
              <Route path='NewPatient' element={<NavigationHeader Content={<NewPatient/>}/>}/>
              <Route path='PharmacistProfile' element={<NavigationHeader Content={<PharmacistProfile/>}/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
