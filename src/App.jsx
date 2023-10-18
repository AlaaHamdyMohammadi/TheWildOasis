import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import GlobalStyles from './styles/GlobalStyles'
import Dashboard from '../src/pages/Dashboard';
import Bookings from '../src/pages/Bookings';
import Cabins from '../src/pages/Cabins';
import Users from '../src/pages/Users';
import Settings from '../src/pages/Settings';
import Account from '../src/pages/Account';
import Login from '../src/pages/Login';
import PageNotFound from '../src/pages/PageNotFound';
function App() {
  return (
    <>
      <GlobalStyles/>
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard></Dashboard>} />
            <Route path="bookings" element={<Bookings></Bookings>} />
            <Route path="cabins" element={<Cabins></Cabins>} />
            <Route path="users" element={<Users></Users>} />
            <Route path="settings" element={<Settings></Settings>} />
            <Route path="account" element={<Account></Account>} />
            <Route path="login" element={<Login></Login>} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App
