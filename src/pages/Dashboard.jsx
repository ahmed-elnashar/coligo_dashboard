import React from 'react';
import { useSelector } from 'react-redux';
import { GoPrimitiveDot } from 'react-icons/go';

import { useTranslation } from 'react-i18next';


import { Stacked, Button, SparkLine } from '../components';
import Announcement from '../components/Announcement';
import Quiz from '../components/Quiz';
import { earningData, SparklineAreaData, announcementsData, quizzesData } from '../service/data';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const currentColor = useSelector(state => state.theme.color);
  const { t } = useTranslation();
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div
          className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg 
          h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 
          bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>{t('dashboardCard.name')}</p>
              <p className='text-2xl'>2,359</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor={currentColor}
              text='View Exams Tips'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map(item => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
              <button type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Revenue Card */}
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 lg:mx-5 p-4 rounded-2xl lg:w-full md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Courses</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span><GoPrimitiveDot /></span>
                <span>Revenue</span>
              </p>
            </div>
          </div>
          {/* Left Stats */}
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='lg:border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 mx-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Courses
                </p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>$48,438</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Revenue
                </p>
              </div>
              {/* Line Chart */}
              <div className='mt-5'>
                <SparkLine
                  id='line-sparkLine'
                  currentColor={currentColor}
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className='mt-10'>
                <Button
                  color='white'
                  bgColor={currentColor}
                  text='Download Report'
                  borderRadius='10px'
                />
              </div>
            </div>
            <div>
              <Stacked width='320px' height='360' />
            </div>
          </div>
        </div>
      </div>
      {/* Announcements Cards */}
      <div className='flex flex-wrap lg:flex-nowrap xl:flex-nowrap m-3 gap-3'>
        <div className='w-full lg:w-3/4 xl:w-4/6 dark:text-gray-200 bg-white dark:bg-secondary-dark-bg m-2 p-4 rounded-2xl'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full mx-auto p-3'>
            <div className='flex justify-between'>
              <h1 className='font-semibold text-xl mt-2 mb-3'>Announcements</h1>
              <p>
                <Link className='underline' style={{ color: { currentColor } }} to={'/announcements'}>All</Link>
              </p>
            </div>
            {
              announcementsData && announcementsData.map(announce => (
                <Announcement
                  img={announce.img} author={announce.author} key={announce.key}
                  courseTitle={announce.courseTitle} border={announce.border}
                  description={announce.description}
                />
              ))
            }
          </div>
        </div>
        <div className='w-full lg:w-1/4 xl:w-2/6 dark:text-gray-200 bg-white dark:bg-secondary-dark-bg m-2 p-4 rounded-2xl'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full mx-auto p-3'>
            <h1 className='font-semibold text-xl mt-2 mb-3'>Quizzes</h1>
            {
              quizzesData && quizzesData.map(quiz => (
                <Quiz
                  key={quiz.key} name={quiz.name} course={quiz.course}
                  topic={quiz.topic} due={quiz.due}
                />

              ))
            }
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;