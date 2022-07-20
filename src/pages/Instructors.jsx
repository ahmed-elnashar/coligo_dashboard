import React from 'react';
import {
  GridComponent, ColumnsDirective,
  ColumnDirective, Page, Search, Inject, Toolbar
} from '@syncfusion/ej2-react-grids';

import { instructorsData, contextMenuItems, instructorsGrid } from '../data/dummy';
import { Header } from '../components';

const Instructors = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
      <Header category='Page' title='Instructors' />
      <GridComponent
        dataSource={instructorsData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width='auto'>
        <ColumnsDirective>
          {instructorsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={
          [Page, Search, Toolbar]
        } />
      </GridComponent>
    </div>
  );
};

export default Instructors;