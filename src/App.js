import logo from './logo.svg';
import './App.css';
import { ApiComponent } from './api/ApiComponent';
import {useState,useEffect} from 'react';
import { Route, Routes,Navigate} from "react-router-dom";
import {Home} from './pages/Home';
import { NotFound } from './pages/NotFound';
function App() {
  const [user, setuser] = useState(null);
useEffect(() => {
   let user=localStorage.getItem('token');
    user ? setuser(true) : setuser(false);
  }, []);
  
  return (
    <div>
        <Routes>
        {!user &&(
          <>
          <Route path="/api" element={<ApiComponent/>} />
          </>
          )}
          {user &&(
            <>
          <Route path="/not" element={<NotFound/>} />
          <Route path="/home" element={<Home/>} />
          {/* <Route path="*" element={<NotFound/>} /> */}
          </>
          )}
      <Route path="*" element={<Navigate to={user ? "/home" : "/api"} />} />

        </Routes>

    </div>
  );
}

export default App;
