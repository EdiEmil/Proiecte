import './App.css';
import Footer from './pages/Footer';
import Navbar from './pages/NavBar';
import RegisterPage from './pages/Register';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux-store/index'
import LoginPage from './pages/Login';
import RegisterDoctorPage from './pages/RegisterDoctor';
import { AuthGuard } from './authorizations/AuthGuard'
import { Role } from './models/Role';
import AdminDashbord from './pages/AdminDashbord';
import ProfilePage from './pages/Profile';
import LoginDoctorPage from './pages/LoginDoctor';
import DoctorPage from './pages/DoctorPage';
import FarmacistPage from './pages/FarmacistPage';
import LoginFarmacistPage from './pages/LoginFarmacist';
import RegisterFarmacistPage from './pages/RegisterFarmacist';
import UpperNavbar from './pages/UpperNavbar';
import ProfileDoctorPage from './pages/ProfileDoctor';
import ProfileFarmacistPage from './pages/ProfileFarmacist';
import UserPage from './pages/UserPage';
import UserTrimitere from './pages/UserTrimitere';
import UserProgramare from './pages/UserProgramare';
import DoctorSpitalPage from './pages/DoctorSpitalPage';
import UserPrescriere from './pages/UserPrescriere';
import UserFarmacii from './pages/UserFarmacii';
import FarmacistAlegere from './pages/FarmacistAlegere';
import UserRaspuns from './pages/UserRaspuns';
// import 'react-datepicker/dist/react-datepicker.module.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <UpperNavbar />
        <Navbar />
        <div className='inside-container'>

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/registeruser' element={<RegisterPage />} />
            <Route path='registerdoctor' element={<RegisterDoctorPage />} />
            <Route path='register/farmacist' element={<RegisterFarmacistPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route exact strict path='/login/doctor' element={<LoginDoctorPage />} />
            <Route path='/login/farmacist' element={<LoginFarmacistPage />} />

            <Route path='/profile' element={
              <AuthGuard roles={[Role.ADMIN, Role.USER]}>
                <ProfilePage />
              </AuthGuard>
            }
            />

            <Route path='/profile/doctor' element={
              <AuthGuard roles={[Role.DOCTORSPITAL, Role.DOCTORFAM]}>
                <ProfileDoctorPage />
              </AuthGuard>
            }
            />

            <Route path='/profile/farmacist' element={
              <AuthGuard roles={[Role.FARMACIST]}>
                <ProfileFarmacistPage />
              </AuthGuard>
            }
            />

            <Route path='/user/page' element={
              <AuthGuard roles={[Role.USER]}>
                <UserPage />
              </AuthGuard>
            }
            />

            <Route path='/user/trimitere' element={
              <AuthGuard roles={[Role.USER]}>
                <UserTrimitere />
              </AuthGuard>
            }
            />

            <Route path='/user/programare' element={
              <AuthGuard roles={[Role.USER]}>
                <UserProgramare />
              </AuthGuard>
            }
            />

            <Route path='/user/prescriere' element={
              <AuthGuard roles={[Role.USER]}>
                <UserPrescriere />
              </AuthGuard>
            }
            />

            <Route path='/user/farmacii' element={
              <AuthGuard roles={[Role.USER]}>
                <UserFarmacii />
              </AuthGuard>
            }
            />

            <Route path='/user/raspuns' element={
              <AuthGuard roles={[Role.USER]}>
                <UserRaspuns />
              </AuthGuard>
            }
            />

            <Route exact strict path='/doctor/page' element={
              <AuthGuard roles={[Role.DOCTORSPITAL, Role.DOCTORFAM]} >
                <DoctorPage />
              </AuthGuard>
            }
            />

            <Route exact strict path='/doctor/spital/page' element={
              <AuthGuard roles={[Role.DOCTORSPITAL]} >
                <DoctorSpitalPage />
              </AuthGuard>
            }
            />


            <Route path='/farmacist/page' element={
              <AuthGuard roles={[Role.FARMACIST]}>
                <FarmacistPage />
              </AuthGuard>
            } 
            />

            <Route path='/farmacist/alegere' element={
              <AuthGuard roles={[Role.FARMACIST]}>
                <FarmacistAlegere />
              </AuthGuard>
            } 
            />


            <Route path='/admin' element={
              <AuthGuard roles={[Role.ADMIN]}>
                <AdminDashbord />
              </AuthGuard>
            }
            />
          </Routes>
        </div>
      </Provider>

      {/* <Footer /> */}
    </BrowserRouter>

  );
}

export default App;
