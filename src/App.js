import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import Navbar from './Pages/Shared/Navbar/Navbar';
import SignIn from './Pages/Shared/Sign/SignIn/SignIn';
import SignUp from './Pages/Shared/Sign/SignUp/SignUp';
import AddUser from './Pages/AddUser/AddUser';
import Attendance from './Pages/Attendances/Attendance';
import Footer from './Pages/Shared/Footer/Footer';
import AddAttandence from './Pages/AddAttandence/AddAttandence';


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adduser' element={<AddUser />} />
        <Route path='/addattendance' element={<AddAttandence />} />
        <Route path='/users' element={<Users />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
