import React from 'react';
import {
  GridComponent, ColumnsDirective,
  ColumnDirective, Resize, Sort, ContextMenu,
  Filter, Page, ExcelExport, PdfExport, Edit, Inject
} from '@syncfusion/ej2-react-grids';

import { coursesData, coursesGrid } from '../service/data';
import { Header } from '../components';

const Courses = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl '>
      <Header category='Page' title='Courses' />
      <GridComponent
        id='course-grid'
        dataSource={coursesData}
        allowPaging
        allowSorting>
        <ColumnsDirective>
          {coursesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={
          [
            Resize, Sort, ContextMenu,
            Filter, Page, ExcelExport,
            Edit, PdfExport
          ]
        } />
      </GridComponent>
    </div>
  );
};

export default Courses;