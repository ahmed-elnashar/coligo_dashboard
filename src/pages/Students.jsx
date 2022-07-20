import React from 'react';
import {
  GridComponent, ColumnsDirective,
  ColumnDirective, Page, Selection, Inject, Edit,
  Toolbar, Sort, Filter
} from '@syncfusion/ej2-react-grids';

import { studentsData, studentsGrid } from '../data/dummy';
import { Header } from '../components';

const Students = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
      <Header category='Page' title='Students' />
      <GridComponent
        dataSource={studentsData}
        allowPaging
        allowSorting
        toolbar={['Delete', 'Search']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width='auto'>
        <ColumnsDirective>
          {studentsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={
          [Page, Edit, Toolbar, Selection, Sort, Filter]
        } />
      </GridComponent>
    </div>
  );
};

export default Students;