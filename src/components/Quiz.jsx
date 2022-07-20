import React from 'react';

const Quiz = ({ name, course, topic, due }) => {
  return (
    <div className={`flex flex-col p-3 mb-3 border-1 border-r-4 rounded-md hover:shadow-xl`} style={{borderRightColor: 'blue'}}>
      <p className='text-gray-400 font-bold'>
        {name}
      </p>
      <p className='font-normal text-sm text-gray-600'>
        Course: {' '}{course}
      </p>
      <p className='font-normal text-sm text-gray-600'>
        Topic: {' '}{topic}
      </p>
      <p className='font-normal text-sm text-gray-600'>
        Due: {' '}{due}
      </p>
    </div>
  );
};

export default Quiz;