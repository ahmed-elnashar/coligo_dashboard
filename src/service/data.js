import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiBarChart, FiCreditCard } from 'react-icons/fi';
import { BsKanban, BsBoxSeam, BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { BiMicrophone } from 'react-icons/bi';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount, MdSpaceDashboard } from 'react-icons/md';
import { GiTeacher } from 'react-icons/gi';
import { GrLocation} from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';
import product1 from './product1.jpg';
import product2 from './product2.jpg';
import product3 from './product3.jpg';
import product4 from './product4.jpg';
import product5 from './product5.jpg';
import product6 from './product6.jpg';
import product7 from './product7.jpg';
import product8 from './product8.jpg';


const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.InstructorImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

export const gridCourseImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.courseImage}
      alt="order-item"
    />
  </div>
);

export const gridCourseStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const studentGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.StudentImage}
      alt="employee"
    />
    <div>
      <p>{props.instructorName}</p>
      <p>{props.StudentEmail}</p>
    </div>
  </div>
);

const studentGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'dashboard',
        icon: <MdSpaceDashboard />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'courses',
        icon: <GiTeacher />,
      },
      {
        name: 'announcements',
        icon: <BiMicrophone />,
      },
      {
        name: 'instructors',
        icon: <IoMdContacts />,
      },
      {
        name: 'Students',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'schedule',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'kanban',
        icon: <BsKanban />,
      },
    ],
  }
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const coursesGrid = [
  {
    headerText: 'Image',
    template: gridCourseImage,
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'courseName',
    headerText: 'Course',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'instructorName',
    headerText: 'Instructor Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'price',
    headerText: 'Price',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Status',
    template: gridCourseStatus,
    field: 'CourseItems',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'courseId',
    headerText: 'Course ID',
    width: '120',
    textAlign: 'Center',
  },
];

export const coursesData = [
  {
    courseId: 10248,
    instructorName: 'Vinet',

    price: 32.38,
    courseName: 'Fresh Tomato',
    Status: 'trending',
    StatusBg: '#FB9678',
    courseImage:
      product6,
  },
  {
    courseId: 345653,
    instructorName: 'Carson Darrin',
    price: 56.34,
    courseName: 'Butter Scotch',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      product5,
  },
  {
    courseId: 390457,
    instructorName: 'Fran Perez',
    price: 93.31,
    courseName: 'Candy Gucci',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      product7,
  },
  {
    courseId: 893486,
    instructorName: 'Anika Viseer',
    price: 93.31,
    courseName: 'Night Lamp',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      product4,
  },
  {
    courseId: 748975,
    instructorName: 'Miron Vitold',
    price: 23.99,
    courseName: 'Healthcare Erbology',
    Status: 'closed',
    StatusBg: 'red',
    courseImage:
      product1,
  },
  {
    courseId: 94757,
    instructorName: 'Omar Darobe',
    price: 95.99,
    courseName: 'Makeup Lancome Rouge',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      product2,
  },
  {
    courseId: 944895,
    instructorName: 'Lulia albu',
    price: 17.99,
    courseName: 'Skincare',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      product3,
  },
  {
    courseId: 845954,
    instructorName: 'Penjani',
    price: 59.99,
    courseName: 'Headphone',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      product4,
  },
  {
    courseId: 845954,
    instructorName: 'Jie Yan',
    price: 87.99,
    courseName: 'Shoes',
    Status: 'trending',
    StatusBg: '#FB9678',
    courseImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    courseId: 874534,
    instructorName: 'Danai',
    price: 122.99,
    courseName: 'Watch',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    courseId: 38489,
    instructorName: 'Miron',
    price: 87.99,
    courseName: 'Ice Cream',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    courseId: 24546,
    instructorName: 'Frank',
    price: 84.99,
    courseName: 'Pan Cake',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    courseId: 874534,
    instructorName: 'Danai',
    price: 122.99,
    courseName: 'Watch',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    courseId: 10248,
    instructorName: 'Vinet',

    price: 32.38,
    courseName: 'Fresh Tomato',
    Status: 'trending',
    StatusBg: '#FB9678',
    courseImage:
      product6,
  },
  {
    courseId: 345653,
    instructorName: 'Carson Darrin',
    price: 56.34,
    courseName: 'Butter Scotch',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      product5,
  },
  {
    courseId: 390457,
    instructorName: 'Fran Perez',
    price: 93.31,
    courseName: 'Candy Gucci',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      product7,
  },
  {
    courseId: 893486,
    instructorName: 'Anika Viseer',
    price: 93.31,
    courseName: 'Night Lamp',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      product4,
  },
  {
    courseId: 748975,
    instructorName: 'Miron Vitold',
    price: 23.99,
    courseName: 'Healthcare Erbology',
    Status: 'closed',
    StatusBg: 'red',
    courseImage:
      product1,
  },
  {
    courseId: 94757,
    instructorName: 'Omar Darobe',
    price: 95.99,
    courseName: 'Makeup Lancome Rouge',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      product2,
  },
  {
    courseId: 944895,
    instructorName: 'Lulia albu',
    price: 17.99,
    courseName: 'Skincare',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      product3,
  },
  {
    courseId: 845954,
    instructorName: 'Penjani',
    price: 59.99,
    courseName: 'Headphone',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      product4,
  },
  {
    courseId: 845954,
    instructorName: 'Jie Yan',
    price: 87.99,
    courseName: 'Shoes',
    Status: 'trending',
    StatusBg: '#FB9678',
    courseImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    courseId: 874534,
    instructorName: 'Danai',
    price: 122.99,
    courseName: 'Watch',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    courseId: 38489,
    instructorName: 'Miron',
    price: 87.99,
    courseName: 'Ice Cream',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    courseId: 24546,
    instructorName: 'Frank',
    price: 84.99,
    courseName: 'Pan Cake',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    courseId: 874534,
    instructorName: 'Danai',
    price: 122.99,
    courseName: 'Watch',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    courseId: 10248,
    instructorName: 'Vinet',

    price: 32.38,
    courseName: 'Fresh Tomato',
    Status: 'trending',
    StatusBg: '#FB9678',
    courseImage:
      product6,
  },
  {
    courseId: 345653,
    instructorName: 'Carson Darrin',
    price: 56.34,
    courseName: 'Butter Scotch',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      product5,
  },
  {
    courseId: 390457,
    instructorName: 'Fran Perez',
    price: 93.31,
    courseName: 'Candy Gucci',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      product7,
  },
  {
    courseId: 893486,
    instructorName: 'Anika Viseer',
    price: 93.31,
    courseName: 'Night Lamp',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      product4,
  },
  {
    courseId: 748975,
    instructorName: 'Miron Vitold',
    price: 23.99,
    courseName: 'Healthcare Erbology',
    Status: 'closed',
    StatusBg: 'red',
    courseImage:
      product1,
  },
  {
    courseId: 94757,
    instructorName: 'Omar Darobe',
    price: 95.99,
    courseName: 'Makeup Lancome Rouge',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      product2,
  },
  {
    courseId: 944895,
    instructorName: 'Lulia albu',
    price: 17.99,
    courseName: 'Skincare',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      product3,
  },
  {
    courseId: 845954,
    instructorName: 'Penjani',
    price: 59.99,
    courseName: 'Headphone',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      product4,
  },
  {
    courseId: 845954,
    instructorName: 'Jie Yan',
    price: 87.99,
    courseName: 'Shoes',
    Status: 'trending',
    StatusBg: '#FB9678',
    courseImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    courseId: 874534,
    instructorName: 'Danai',
    price: 122.99,
    courseName: 'Watch',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    courseId: 38489,
    instructorName: 'Miron',
    price: 87.99,
    courseName: 'Ice Cream',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    courseId: 24546,
    instructorName: 'Frank',
    price: 84.99,
    courseName: 'Pan Cake',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    courseId: 874534,
    instructorName: 'Danai',
    price: 122.99,
    courseName: 'Watch',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    courseId: 10248,
    instructorName: 'Vinet',

    price: 32.38,
    courseName: 'Fresh Tomato',
    Status: 'trending',
    StatusBg: '#FB9678',
    courseImage:
      product6,
  },
  {
    courseId: 345653,
    instructorName: 'Carson Darrin',
    price: 56.34,
    courseName: 'Butter Scotch',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      product5,
  },
  {
    courseId: 390457,
    instructorName: 'Fran Perez',
    price: 93.31,
    courseName: 'Candy Gucci',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      product7,
  },
  {
    courseId: 893486,
    instructorName: 'Anika Viseer',
    price: 93.31,
    courseName: 'Night Lamp',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      product4,
  },
  {
    courseId: 748975,
    instructorName: 'Miron Vitold',
    price: 23.99,
    courseName: 'Healthcare Erbology',
    Status: 'closed',
    StatusBg: 'red',
    courseImage:
      product1,
  },
  {
    courseId: 94757,
    instructorName: 'Omar Darobe',
    price: 95.99,
    courseName: 'Makeup Lancome Rouge',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      product2,
  },
  {
    courseId: 944895,
    instructorName: 'Lulia albu',
    price: 17.99,
    courseName: 'Skincare',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      product3,
  },
  {
    courseId: 845954,
    instructorName: 'Penjani',
    price: 59.99,
    courseName: 'Headphone',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      product4,
  },
  {
    courseId: 845954,
    instructorName: 'Jie Yan',
    price: 87.99,
    courseName: 'Shoes',
    Status: 'trending',
    StatusBg: '#FB9678',
    courseImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    courseId: 874534,
    instructorName: 'Danai',
    price: 122.99,
    courseName: 'Watch',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    courseId: 38489,
    instructorName: 'Miron',
    price: 87.99,
    courseName: 'Ice Cream',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    courseId: 24546,
    instructorName: 'Frank',
    price: 84.99,
    courseName: 'Pan Cake',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    courseId: 874534,
    instructorName: 'Danai',
    price: 122.99,
    courseName: 'Watch',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    courseId: 10248,
    instructorName: 'Vinet',

    price: 32.38,
    courseName: 'Fresh Tomato',
    Status: 'trending',
    StatusBg: '#FB9678',
    courseImage:
      product6,
  },
  {
    courseId: 345653,
    instructorName: 'Carson Darrin',
    price: 56.34,
    courseName: 'Butter Scotch',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      product5,
  },
  {
    courseId: 390457,
    instructorName: 'Fran Perez',
    price: 93.31,
    courseName: 'Candy Gucci',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      product7,
  },
  {
    courseId: 893486,
    instructorName: 'Anika Viseer',
    price: 93.31,
    courseName: 'Night Lamp',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      product4,
  },
  {
    courseId: 748975,
    instructorName: 'Miron Vitold',
    price: 23.99,
    courseName: 'Healthcare Erbology',
    Status: 'closed',
    StatusBg: 'red',
    courseImage:
      product1,
  },
  {
    courseId: 94757,
    instructorName: 'Omar Darobe',
    price: 95.99,
    courseName: 'Makeup Lancome Rouge',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      product2,
  },
  {
    courseId: 944895,
    instructorName: 'Lulia albu',
    price: 17.99,
    courseName: 'Skincare',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      product3,
  },
  {
    courseId: 845954,
    instructorName: 'Penjani',
    price: 59.99,
    courseName: 'Headphone',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      product4,
  },
  {
    courseId: 845954,
    instructorName: 'Jie Yan',
    price: 87.99,
    courseName: 'Shoes',
    Status: 'trending',
    StatusBg: '#FB9678',
    courseImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    courseId: 874534,
    instructorName: 'Danai',
    price: 122.99,
    courseName: 'Watch',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    courseId: 38489,
    instructorName: 'Miron',
    price: 87.99,
    courseName: 'Ice Cream',
    Status: 'top-rated',
    StatusBg: '#03C9D7',
    courseImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    courseId: 24546,
    instructorName: 'Frank',
    price: 84.99,
    courseName: 'Pan Cake',
    Status: 'bestseller',
    StatusBg: '#8BE78B',
    courseImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    courseId: 874534,
    instructorName: 'Danai',
    price: 122.99,
    courseName: 'Watch',
    Status: 'most-watched',
    StatusBg: '#FF5C8E',
    courseImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
];

export const studentsData = [
  {
    StudentID: 1001,
    instructorName: 'Nirav Joshi',
    StudentEmail: 'nirav@gmail.com',
    StudentImage:
      avatar2,
    CourseName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Paid: '$2.4k',
    Location: 'India',
  },
  {
    StudentID: 1002,

    instructorName: 'Sunil Joshi',
    StudentEmail: 'sunil@gmail.com',
    CourseName: 'Elite Admin',
    Status: 'Active',
    StudentImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Paid: '$3.9k',
    Location: 'India',
  },
  {
    StudentID: 1003,

    instructorName: 'Andrew McDownland',
    StudentEmail: 'andrew@gmail.com',
    CourseName: 'Real Homes WP Theme',
    Status: 'Pending',
    StudentImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Paid: '$24.5k',
    Location: 'USA',
  },
  {
    StudentID: 1004,

    instructorName: 'Christopher Jamil',
    StudentEmail: 'jamil@gmail.com',
    CourseName: 'MedicalPro WP Theme',
    Status: 'Completed',
    StudentImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1005,

    instructorName: 'Michael',
    StudentEmail: 'michael@gmail.com',
    CourseName: 'Weekly WP Theme',
    Status: 'Cancel',
    StudentImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1006,
    instructorName: 'Nirav Joshi',
    StudentEmail: 'nirav@gmail.com',
    StudentImage:
      avatar2,
    CourseName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Paid: '$2.4k',
    Location: 'India',
  },
  {
    StudentID: 1007,

    instructorName: 'Sunil Joshi',
    StudentEmail: 'sunil@gmail.com',
    CourseName: 'Elite Admin',
    Status: 'Active',
    StudentImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Paid: '$3.9k',
    Location: 'India',
  },
  {
    StudentID: 1008,

    instructorName: 'Andrew McDownland',
    StudentEmail: 'andrew@gmail.com',
    CourseName: 'Real Homes WP Theme',
    Status: 'Pending',
    StudentImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Paid: '$24.5k',
    Location: 'USA',
  },
  {
    StudentID: 1009,

    instructorName: 'Christopher Jamil',
    StudentEmail: 'jamil@gmail.com',
    CourseName: 'MedicalPro WP Theme',
    Status: 'Completed',
    StudentImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1010,

    instructorName: 'Michael',
    StudentEmail: 'michael@gmail.com',
    CourseName: 'Weekly WP Theme',
    Status: 'Cancel',
    StudentImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1011,
    instructorName: 'Nirav Joshi',
    StudentEmail: 'nirav@gmail.com',
    StudentImage:
      avatar2,
    CourseName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Paid: '$2.4k',
    Location: 'India',
  },
  {
    StudentID: 1012,

    instructorName: 'Sunil Joshi',
    StudentEmail: 'sunil@gmail.com',
    CourseName: 'Elite Admin',
    Status: 'Active',
    StudentImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Paid: '$3.9k',
    Location: 'India',
  },
  {
    StudentID: 1013,

    instructorName: 'Andrew McDownland',
    StudentEmail: 'andrew@gmail.com',
    CourseName: 'Real Homes WP Theme',
    Status: 'Pending',
    StudentImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Paid: '$24.5k',
    Location: 'USA',
  },
  {
    StudentID: 1014,

    instructorName: 'Christopher Jamil',
    StudentEmail: 'jamil@gmail.com',
    CourseName: 'MedicalPro WP Theme',
    Status: 'Completed',
    StudentImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1015,

    instructorName: 'Michael',
    StudentEmail: 'michael@gmail.com',
    CourseName: 'Weekly WP Theme',
    Status: 'Cancel',
    StudentImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1016,
    instructorName: 'Nirav Joshi',
    StudentEmail: 'nirav@gmail.com',
    StudentImage:
      avatar2,
    CourseName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Paid: '$2.4k',
    Location: 'India',
  },
  {
    StudentID: 1017,

    instructorName: 'Sunil Joshi',
    StudentEmail: 'sunil@gmail.com',
    CourseName: 'Elite Admin',
    Status: 'Active',
    StudentImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Paid: '$3.9k',
    Location: 'India',
  },
  {
    StudentID: 1018,

    instructorName: 'Andrew McDownland',
    StudentEmail: 'andrew@gmail.com',
    CourseName: 'Real Homes WP Theme',
    Status: 'Pending',
    StudentImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Paid: '$24.5k',
    Location: 'USA',
  },
  {
    StudentID: 1019,

    instructorName: 'Christopher Jamil',
    StudentEmail: 'jamil@gmail.com',
    CourseName: 'MedicalPro WP Theme',
    Status: 'Completed',
    StudentImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1020,

    instructorName: 'Michael',
    StudentEmail: 'michael@gmail.com',
    CourseName: 'Weekly WP Theme',
    Status: 'Cancel',
    StudentImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1021,
    instructorName: 'Nirav Joshi',
    StudentEmail: 'nirav@gmail.com',
    StudentImage:
      avatar2,
    CourseName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Paid: '$2.4k',
    Location: 'India',
  },
  {
    StudentID: 1022,

    instructorName: 'Sunil Joshi',
    StudentEmail: 'sunil@gmail.com',
    CourseName: 'Elite Admin',
    Status: 'Active',
    StudentImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Paid: '$3.9k',
    Location: 'India',
  },
  {
    StudentID: 1023,

    instructorName: 'Andrew McDownland',
    StudentEmail: 'andrew@gmail.com',
    CourseName: 'Real Homes WP Theme',
    Status: 'Pending',
    StudentImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Paid: '$24.5k',
    Location: 'USA',
  },
  {
    StudentID: 1024,

    instructorName: 'Christopher Jamil',
    StudentEmail: 'jamil@gmail.com',
    CourseName: 'MedicalPro WP Theme',
    Status: 'Completed',
    StudentImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1025,

    instructorName: 'Michael',
    StudentEmail: 'michael@gmail.com',
    CourseName: 'Weekly WP Theme',
    Status: 'Cancel',
    StudentImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1026,
    instructorName: 'Nirav Joshi',
    StudentEmail: 'nirav@gmail.com',
    StudentImage:
      avatar2,
    CourseName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Paid: '$2.4k',
    Location: 'India',
  },
  {
    StudentID: 1027,

    instructorName: 'Sunil Joshi',
    StudentEmail: 'sunil@gmail.com',
    CourseName: 'Elite Admin',
    Status: 'Active',
    StudentImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Paid: '$3.9k',
    Location: 'India',
  },
  {
    StudentID: 1028,

    instructorName: 'Andrew McDownland',
    StudentEmail: 'andrew@gmail.com',
    CourseName: 'Real Homes WP Theme',
    Status: 'Pending',
    StudentImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Paid: '$24.5k',
    Location: 'USA',
  },
  {
    StudentID: 1029,

    instructorName: 'Christopher Jamil',
    StudentEmail: 'jamil@gmail.com',
    CourseName: 'MedicalPro WP Theme',
    Status: 'Completed',
    StudentImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1030,

    instructorName: 'Michael',
    StudentEmail: 'michael@gmail.com',
    CourseName: 'Weekly WP Theme',
    Status: 'Cancel',
    StudentImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1031,
    instructorName: 'Nirav Joshi',
    StudentEmail: 'nirav@gmail.com',
    StudentImage:
      avatar2,
    CourseName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Paid: '$2.4k',
    Location: 'India',
  },
  {
    StudentID: 1032,

    instructorName: 'Sunil Joshi',
    StudentEmail: 'sunil@gmail.com',
    CourseName: 'Elite Admin',
    Status: 'Active',
    StudentImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Paid: '$3.9k',
    Location: 'India',
  },
  {
    StudentID: 1033,

    instructorName: 'Andrew McDownland',
    StudentEmail: 'andrew@gmail.com',
    CourseName: 'Real Homes WP Theme',
    Status: 'Pending',
    StudentImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Paid: '$24.5k',
    Location: 'USA',
  },
  {
    StudentID: 1034,

    instructorName: 'Christopher Jamil',
    StudentEmail: 'jamil@gmail.com',
    CourseName: 'MedicalPro WP Theme',
    Status: 'Completed',
    StudentImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1035,

    instructorName: 'Michael',
    StudentEmail: 'michael@gmail.com',
    CourseName: 'Weekly WP Theme',
    Status: 'Cancel',
    StudentImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1036,
    instructorName: 'Nirav Joshi',
    StudentEmail: 'nirav@gmail.com',
    StudentImage:
      avatar2,
    CourseName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Paid: '$2.4k',
    Location: 'India',
  },
  {
    StudentID: 1037,

    instructorName: 'Sunil Joshi',
    StudentEmail: 'sunil@gmail.com',
    CourseName: 'Elite Admin',
    Status: 'Active',
    StudentImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Paid: '$3.9k',
    Location: 'India',
  },
  {
    StudentID: 1038,

    instructorName: 'Andrew McDownland',
    StudentEmail: 'andrew@gmail.com',
    CourseName: 'Real Homes WP Theme',
    Status: 'Pending',
    StudentImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Paid: '$24.5k',
    Location: 'USA',
  },
  {
    StudentID: 1039,
    instructorName: 'Christopher Jamil',
    StudentEmail: 'jamil@gmail.com',
    CourseName: 'MedicalPro WP Theme',
    Status: 'Completed',
    StudentImage:
      avatar,
    StatusBg: '#8BE78B',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },
  {
    StudentID: 1040,
    instructorName: 'Michael',
    StudentEmail: 'michael@gmail.com',
    CourseName: 'Weekly WP Theme',
    Status: 'Cancel',
    StudentImage:
      avatar2,
    StatusBg: 'red',
    Weeks: '34',
    Paid: '$16.5k',
    Location: 'USA',
  },

];

export const studentsGrid = [
  { type: 'checkbox', width: '50' },
  {
    headerText: 'Name',
    width: '150',
    template: studentGridImage,
    textAlign: 'Center'
  },
  {
    field: 'CourseName',
    headerText: 'Course Name',
    width: '150',
    textAlign: 'Center'
  },
  {
    field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: studentGridStatus
  },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center'
  },
  {
    field: 'Paid',
    headerText: 'Paid',
    width: '100',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center'
  },

  {
    field: 'StudentID',
    headerText: 'Student ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Courses',
    type: 'StackingColumn',
    background: 'red',

  },

  {
    dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Revenue',
    type: 'StackingColumn',
    background: 'blue',

  },

];

export const SparklineAreaData = [
  { x: 302, yval: 950 },
  { x: 500, yval: 1030 },
  { x: 1020, yval: 2050 },
  { x: 2201, yval: 4500 },
  { x: 4030, yval: 5000 },

];

export const announcementsData = [
  {
    img: avatar,
    author: 'John Smith',
    key: '1fds',
    courseTitle: 'Physics 101',
    description: 'Hi my heros! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    border: '0'
  },
  {
    img: avatar2,
    author: 'Marry Jacob',
    key: '2fae',
    courseTitle: 'Math 101',
    description: 'Hello! It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    border: '0'
  },
  {
    img: avatar3,
    author: 'James Alba',
    key: '3fasdf',
    courseTitle: 'Management',
    description: 'Hi my heros! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    border: '0'
  },
  {
    img: avatar4,
    author: 'Micheal Joerge',
    key: '4lds',
    courseTitle: 'Event',
    description: 'Hi my heros! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    border: '0'
  },
];

export const quizzesData = [
  {
    name: 'Unit2 Quiz',
    course: 'Physics 2',
    topic: 'Motion and Forces',
    due: '24/07/2022',
    key: '1'
  },
  {
    name: 'Unit6 Quiz',
    course: 'Management',
    topic: 'Business',
    due: '30/09/2022',
    key: '2'
  },
  {
    name: 'Unit4 Quiz',
    course: 'Math 1',
    topic: 'Algebra',
    due: '04/06/2022',
    key: '3'
  }
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Students',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Courses',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '2,359',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <IoMdContacts />,
    amount: '890',
    percentage: '-12%',
    title: 'Instructors',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <IoMdContacts />,
    amount: '890',
    percentage: '-12%',
    title: 'Instructors',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const instructorsData = [
  {
    InstructorID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar3,
  },
  {
    InstructorID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar3,
  },
  {
    InstructorID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar4,
  },
  {
    InstructorID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,

  },
  {
    InstructorID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar3,
  },
  {
    InstructorID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar4,
  },
  {
    InstructorID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar3,
  },
  {
    InstructorID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar4,
  },
  {
    InstructorID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,

  },
  {
    InstructorID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar3,
  },
  {
    InstructorID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar4,
  },
  {
    InstructorID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,

  },
  {
    InstructorID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar3,
  },
  {
    InstructorID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar4,
  },
  {
    InstructorID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,

  },
  {
    InstructorID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar3,
  },
  {
    InstructorID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar4,
  },
  {
    InstructorID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,

  },
  {
    InstructorID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar3,
  },
  {
    InstructorID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar4,
  },
  {
    InstructorID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,

  },
  {
    InstructorID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar3,
  },
  {
    InstructorID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar4,
  },
  {
    InstructorID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 1,
    Name: 'Nancy Davolio',
    Title: 'Sales Representative',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,

  },
  {
    InstructorID: 2,
    Name: 'Nasimiyu Danai',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar3,
  },
  {
    InstructorID: 3,
    Name: 'Iulia Albu',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar4,
  },
  {
    InstructorID: 4,
    Name: 'Siegbert Gottfried',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
  {
    InstructorID: 5,
    Name: 'Omar Darobe',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 4,
    Name: 'Penjani Inyene',
    Title: 'Marketing Head',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar,
  },
  {
    InstructorID: 5,
    Name: 'Miron Vitold',
    Title: 'HR',
    HireDate: '01/02/2021',
    Country: 'USA',
    ReportsTo: 'Carson',
    InstructorImage:
      avatar2,
  },
];

export const instructorsGrid = [
  {
    headerText: 'Instructor',
    width: '150',
    template: gridEmployeeProfile,
    textAlign: 'Center'
  },
  {
    field: 'Name',
    headerText: '',
    width: '0',
    textAlign: 'Center',
  },
  {
    field: 'Title',
    headerText: 'Designation',
    width: '170',
    textAlign: 'Center',
  },
  {
    headerText: 'Country',
    width: '120',
    textAlign: 'Center',
    template: gridEmployeeCountry
  },

  {
    field: 'HireDate',
    headerText: 'Hire Date',
    width: '135',
    format: 'yMd',
    textAlign: 'Center'
  },

  {
    field: 'ReportsTo',
    headerText: 'Reports To',
    width: '120',
    textAlign: 'Center'
  },
  {
    field: 'InstructorID',
    headerText: 'Instructor ID',
    width: '125',
    textAlign: 'Center'
  },
];

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 4',
    Title: 'Task - 29004',
    Status: 'InProgress',
    Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'IE',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 5',
    Title: 'Task - 29005',
    Status: 'Review',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-steven-walker',
  },
  {
    Id: 'Task 6',
    Title: 'Task - 29007',
    Status: 'Validate',
    Summary: 'Validate new requirements',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Robert King',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-robert-king',
  },
  {
    Id: 'Task 7',
    Title: 'Task - 29009',
    Status: 'Review',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
  {
    Id: 'Task 8',
    Title: 'Task - 29010',
    Status: 'Close',
    Summary: 'Test the application in the IE browser.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Review,IE',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 3,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 9',
    Title: 'Task - 29011',
    Status: 'Validate',
    Summary: 'Validate the issues reported by the customer.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Validation,Fix',
    Estimate: 1,
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-steven-walker',
  },
  {
    Id: 'Task 10',
    Title: 'Task - 29015',
    Status: 'Open',
    Summary: 'Show the retrieved data from the server in grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Database,SQL',
    Estimate: 5.5,
    Assignee: 'Margaret hamilt',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 11',
    Title: 'Task - 29016',
    Status: 'InProgress',
    Summary: 'Fix cannot open user’s default database SQL error.',
    Priority: 'Critical',
    Type: 'Bug',
    Tags: 'Database,Sql2008',
    Estimate: 2.5,
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-janet-leverling',
  },
  {
    Id: 'Task 12',
    Title: 'Task - 29017',
    Status: 'Review',
    Summary: 'Fix the issues reported in data binding.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Databinding',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-janet-leverling',
  },
  {
    Id: 'Task 13',
    Title: 'Task - 29018',
    Status: 'Close',
    Summary: 'Analyze SQL server 2008 connection.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Grid,Sql',
    Estimate: 2,
    Assignee: 'Andrew Fuller',
    RankId: 4,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-andrew-fuller',
  },
  {
    Id: 'Task 14',
    Title: 'Task - 29019',
    Status: 'Validate',
    Summary: 'Validate databinding issues.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Validation',
    Estimate: 1.5,
    Assignee: 'Margaret hamilt',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-margaret-hamilt',
  },
  {
    Id: 'Task 15',
    Title: 'Task - 29020',
    Status: 'Close',
    Summary: 'Analyze grid control.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze',
    Estimate: 2.5,
    Assignee: 'Margaret hamilt',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-high, e-margaret-hamilt',
  },
  {
    Id: 'Task 16',
    Title: 'Task - 29021',
    Status: 'Close',
    Summary: 'Stored procedure for initial data binding of the grid.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Databinding',
    Estimate: 1.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-release, e-steven-walker',
  },
  {
    Id: 'Task 17',
    Title: 'Task - 29022',
    Status: 'Close',
    Summary: 'Analyze stored procedures.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Procedures',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 7,
    Color: '#02897B',
    ClassName: 'e-story, e-release, e-janet-leverling',
  },
  {
    Id: 'Task 18',
    Title: 'Task - 29023',
    Status: 'Validate',
    Summary: 'Validate editing issues.',
    Type: 'Story',
    Priority: 'Critical',
    Tags: 'Editing',
    Estimate: 1,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-critical, e-nancy-davloio',
  },
  {
    Id: 'Task 19',
    Title: 'Task - 29024',
    Status: 'Review',
    Summary: 'Test editing functionality.',
    Type: 'Story',
    Priority: 'Normal',
    Tags: 'Editing,Test',
    Estimate: 0.5,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#02897B',
    ClassName: 'e-story, e-normal, e-nancy-davloio',
  },
  {
    Id: 'Task 20',
    Title: 'Task - 29025',
    Status: 'Open',
    Summary: 'Enhance editing functionality.',
    Type: 'Improvement',
    Priority: 'Low',
    Tags: 'Editing',
    Estimate: 3.5,
    Assignee: 'Andrew Fuller',
    RankId: 5,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-low, e-andrew-fuller',
  },
  {
    Id: 'Task 21',
    Title: 'Task - 29026',
    Status: 'InProgress',
    Summary: 'Improve the performance of the editing functionality.',
    Type: 'Epic',
    Priority: 'High',
    Tags: 'Performance',
    Estimate: 6,
    Assignee: 'Nancy Davloio',
    RankId: 5,
    Color: '#e91e64',
    ClassName: 'e-epic, e-high, e-nancy-davloio',
  },
  {
    Id: 'Task 22',
    Title: 'Task - 29027',
    Status: 'Open',
    Summary: 'Arrange web meeting with the customer to show editing demo.',
    Type: 'Others',
    Priority: 'High',
    Tags: 'Meeting,Editing',
    Estimate: 5.5,
    Assignee: 'Steven walker',
    RankId: 6,
    Color: '#1F88E5',
    ClassName: 'e-others, e-high, e-steven-walker',
  },
  {
    Id: 'Task 23',
    Title: 'Task - 29029',
    Status: 'Review',
    Summary: 'Fix the editing issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Low',
    Tags: 'Editing,Fix',
    Estimate: '3.5',
    Assignee: 'Janet Leverling',
    RankId: 6,
    Color: '#E64A19',
    ClassName: 'e-bug, e-low, e-janet-leverling',
  },
  {
    Id: 'Task 24',
    Title: 'Task - 29030',
    Status: 'Testing',
    Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Customer',
    Estimate: '3.5',
    Assignee: 'Steven walker',
    RankId: 1,
    Color: '#E64A19',
    ClassName: 'e-bug, e-critical, e-steven-walker',
  },
  {
    Id: 'Task 25',
    Title: 'Task - 29031',
    Status: 'Testing',
    Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug',
    Priority: 'Critical',
    Tags: 'Fix,Safari',
    Estimate: 1.5,
    Assignee: 'Nancy Davloio',
    RankId: 2,
    Color: '#E64A19',
    ClassName: 'e-bug, e-release, e-nancy-davloio',
  },
];

export const kanbanGrid = [
  {
    headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true
  },

  {
    headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true
  },

  {
    headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false
  },

  {
    headerText: 'Done',
    keyField: 'Close',
    allowToggle: true
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    Location: 'Newyork City',
    StartTime: '2021-01-11T06:30:00.000Z',
    EndTime: '2021-01-11T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    Location: 'Space Center USA',
    StartTime: '2021-01-12T04:00:00.000Z',
    EndTime: '2021-01-12T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    Location: 'Space Center USA',
    StartTime: '2021-01-13T07:30:00.000Z',
    EndTime: '2021-01-13T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Milky Way as Melting pot',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T06:30:00.000Z',
    EndTime: '2021-01-14T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Mysteries of Bermuda Triangle',
    Location: 'Bermuda',
    StartTime: '2021-01-14T04:00:00.000Z',
    EndTime: '2021-01-14T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 7,
    Subject: 'Glaciers and Snowflakes',
    Location: 'Himalayas',
    StartTime: '2021-01-15T05:30:00.000Z',
    EndTime: '2021-01-15T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 8,
    Subject: 'Life on Mars',
    Location: 'Space Center USA',
    StartTime: '2021-01-16T03:30:00.000Z',
    EndTime: '2021-01-16T04:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 9,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-18T05:30:00.000Z',
    EndTime: '2021-01-18T07:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 10,
    Subject: 'Wildlife Galleries',
    Location: 'Africa',
    StartTime: '2021-01-20T05:30:00.000Z',
    EndTime: '2021-01-20T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 11,
    Subject: 'Best Photography 2021',
    Location: 'London',
    StartTime: '2021-01-21T04:00:00.000Z',
    EndTime: '2021-01-21T05:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 12,
    Subject: 'Smarter Puppies',
    Location: 'Sweden',
    StartTime: '2021-01-08T04:30:00.000Z',
    EndTime: '2021-01-08T06:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 13,
    Subject: 'Myths of Andromeda Galaxy',
    Location: 'Space Center USA',
    StartTime: '2021-01-06T05:00:00.000Z',
    EndTime: '2021-01-06T07:00:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 14,
    Subject: 'Aliens vs Humans',
    Location: 'Research Center of USA',
    StartTime: '2021-01-05T04:30:00.000Z',
    EndTime: '2021-01-05T06:00:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 15,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-19T04:00:00.000Z',
    EndTime: '2021-01-19T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 16,
    Subject: 'Sky Gazers',
    Location: 'Alaska',
    StartTime: '2021-01-22T05:30:00.000Z',
    EndTime: '2021-01-22T07:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 17,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-11T00:00:00.000Z',
    EndTime: '2021-01-11T02:00:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 18,
    Subject: 'Space Galaxies and Planets',
    Location: 'Space Center USA',
    StartTime: '2021-01-11T11:30:00.000Z',
    EndTime: '2021-01-11T13:00:00.000Z',
    CategoryColor: '#f57f17',
  },
  {
    Id: 19,
    Subject: 'Lifecycle of Bumblebee',
    Location: 'San Fransisco',
    StartTime: '2021-01-14T00:30:00.000Z',
    EndTime: '2021-01-14T02:00:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 20,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-14T10:30:00.000Z',
    EndTime: '2021-01-14T12:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 21,
    Subject: 'Alien Civilization',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T08:30:00.000Z',
    EndTime: '2021-01-10T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 22,
    Subject: 'The Cycle of Seasons',
    Location: 'Research Center of USA',
    StartTime: '2021-01-12T09:00:00.000Z',
    EndTime: '2021-01-12T10:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 23,
    Subject: 'Sky Gazers',
    Location: 'Greenland',
    StartTime: '2021-01-15T09:00:00.000Z',
    EndTime: '2021-01-15T10:30:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 24,
    Subject: 'Facts of Humming Birds',
    Location: 'California',
    StartTime: '2021-01-16T07:00:00.000Z',
    EndTime: '2021-01-16T09:00:00.000Z',
    CategoryColor: '#7fa900',
  },
];


