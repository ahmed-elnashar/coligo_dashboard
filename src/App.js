import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import {
  Dashboard, Courses, Instructors, Students,
  Schedule, Kanban, Editor, Stacked, Pyramid,
  Area, Bar, Pie, Financial, ColorMapping, Line
} from './pages';

import './App.css';

const App = () => {
  const activeMenu = false;
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='settings' position='Top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                style={{ background: 'blue', borderRadius: '50%' }}>
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
            `dark:bg-main-bg bg-main-bg min-h-screen w-full 
                        ${activeMenu ? 'md:ml-72' : 'flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>
          </div>
          <div>
            <Routes>
              {/* Dashboard */}
              <Route path='/' element={<Dashboard />} />
              <Route path='/dashboard' element={<Dashboard />} />

              {/* Main Pages */}
              <Route path='/courses' element={<Courses />} />
              <Route path='/instructors' element={<Instructors />} />
              <Route path='/students' element={<Students />} />

              {/* Apps */}
              <Route path='/schedule' element={<Schedule />} />
              <Route path='/kanban' element={<Kanban />} />
              <Route path='/editor' element={<Editor />} />

              {/* Charts */}
              <Route path='/line' element={<Line />} />
              <Route path='/area' element={<Area />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/financial' element={<Financial />} />
              <Route path='/color-mapping' element={<ColorMapping />} />
              <Route path='/pyramid' element={<Pyramid />} />
              <Route path='/stacked' element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;