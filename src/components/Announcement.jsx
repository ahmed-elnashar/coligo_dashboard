import React from 'react';
import { useSelector } from 'react-redux';

const Announcement = ({ img, author, courseTitle, description, border }) => {
  const currentColor = useSelector(state => state.theme.color);
  return (
    <div className={`flex items-center sm:items-start flex-col md:flex-row justify-between pt-3 mb-3 border-t-${border} border-color`}>
      <div className='flex flex-column items-center md:w-2/6 pr-2 md:mb-2 sm:mb-2 sm:w-full'>
        <img alt='profile' src={img} className='mr-2 object-cover rounded-full h-10 w-10' />
        <p className='text-gray-400'>
          <span className='font-bold text-sm'>{author}</span>
          <span className='font-normal text-xs block'>{courseTitle}</span>
        </p>
      </div>
      <div className='w-full md:w-4/6 ml-2'>
        <p className='text-gray-600 dark:text-gray-200 w-full text-sm'>
          <span className='font-bold' style={{color: currentColor}}>
            “ {' '}
          </span>
          {description}
          <span className='font-bold' style={{color: currentColor}}>
            {' '} ”
          </span>
        </p>
      </div>
    </div>
  );
};

export default Announcement;