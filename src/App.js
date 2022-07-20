import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

import { setColor, setMode } from './redux/store/theme';
import LogIn from './pages/LogIn';

import './App.css';
import RequireAuth from './components/RequireAuth';

const App = () => {
  const loggedIn = useSelector(state => state.auth.loggedIn);
  const currentColor = useSelector(state => state.theme.color);
  const currentMode = useSelector(state => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');

    if (!currentThemeColor) {
      localStorage.setItem('colorMode', currentColor);
    }
    if (!currentThemeMode) {
      localStorage.setItem('themeMode', currentMode);
    }

    if (currentThemeColor && currentThemeMode) {
      dispatch(setColor(currentThemeColor));
      dispatch(setMode(currentThemeMode));
    }
  }, [dispatch]);

  const Auth = RequireAuth(Home);

  return (
    <BrowserRouter>
      <Routes>
        {!loggedIn &&

          <Route path='/*' element={<LogIn />} />
        }
        {loggedIn &&
          <Route path='/*' element={<Auth />} />
        }
      </Routes>
    </BrowserRouter>
  );
};

export default App;