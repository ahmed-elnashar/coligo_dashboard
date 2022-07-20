import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Dashboard, Courses, Announcements, Instructors, Students,
  Schedule, Kanban
} from './pages';

import { setThemeSettings, setColor, setMode } from './redux/store/theme';

import './App.css';

const App = () => {
  const activeMenu = useSelector(state => state.app.menu);
  const themeSettings = useSelector(state => state.theme.themeSettings);
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

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='settings' position='Top'>
              <button
                type='button'
                className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                onClick={() => dispatch(setThemeSettings(true))}
                style={{ background: currentColor, borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={
            `dark:bg-main-dark-bg 
            bg-main-bg min-h-screen w-full 
              ${activeMenu
              ? 'md:ml-72'
              : 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />

                {/* Main Pages */}
                <Route path='/courses' element={<Courses />} />
                <Route path='/instructors' element={<Instructors />} />
                <Route path='/students' element={<Students />} />
                <Route path='/announcements' element={<Announcements />} />

                {/* Apps */}
                <Route path='/schedule' element={<Schedule />} />
                <Route path='/kanban' element={<Kanban />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;