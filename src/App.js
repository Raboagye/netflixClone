import './App.css';
import HomeScreen from './Components/Screens/HomeScreen';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LoginScreen from './Components/Screens/LoginScreen';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './userSlice';
import ProfileScreen from './Components/Screens/ProfileScreen';

function App() {

  const dispatch = useDispatch()

  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    const Unsubscribe = auth.onAuthStateChanged((userPresent) => {
      if(userPresent) {
        console.log(userPresent)
        dispatch(
          login({
            uid: userPresent.uid,
            email: userPresent.email
          })
        )
    
      }else {
        dispatch(logout())
      }
    })
    return Unsubscribe
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? <LoginScreen /> : (
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          )
        }
      </Router>
    </div>
  );
}

export default App;
