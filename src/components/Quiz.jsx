import React from 'react';
import { useSelector } from 'react-redux';

const Quiz = ({ name, course, topic, due }) => {
  const currentColor = useSelector(state => state.theme.color);
  
  return (
    <div className={`flex flex-col p-3 mb-3 border-1 border-r-4 rounded-md hover:shadow-xl`} style={{borderRightColor: currentColor}}>
      <p className='text-gray-400 dark:text-gray-100 font-bold'>
        {name}
      </p>
      <p className='font-normal text-sm text-gray-600 dark:text-gray-200'>
        Course: {' '}{course}
      </p>
      <p className='font-normal text-sm text-gray-600 dark:text-gray-200'>
        Topic: {' '}{topic}
      </p>
      <p className='font-normal text-sm text-gray-600 dark:text-gray-200'>
        Due: {' '}{due}
      </p>
    </div>
  );
};

export default Quiz;