import React from 'react';
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaUserTie,
  FaBook,
  FaGift,
  FaIdCard,
} from 'react-icons/fa';
import {FiFileText} from 'react-icons/fi'
import {RiBillFill, RiSecurePaymentLine} from 'react-icons/ri'
export const links = [
  {
    id: 1,
    url: '/',
    text: 'dashoboad',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/',
    text: 'profile',
    icon: <FaUserTie/>,
  },
  {
    id: 3,
    url: '/result',
    text: 'result',
    icon: <FiFileText />,
  },
  {
    id: 4,
    url: '/payment',
    text: 'payment',
    icon: <RiSecurePaymentLine />,
  },
  {
    id: 5,
    url: '/bill',
    text: 'current bill',
    icon: <RiBillFill />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
];

export const Teacherlinks = [
  {
    id: 1,
    url: '/',
    text: 'dashoboad',
    submenu: [],
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/result',
    text: 'result',
    submenu: [
      {url :"/result/student", text : "student"}, {url :"/result/class", text : "Class"}, {url :"/result/subject", text : "Subject"}, {url :"/result/midterm", text : "Mid term"} ], 
    icon: <FiFileText />,
  },
  {
    id: 3,
    url: '/markrecord',
    text: 'Record',
    submenu: [
      {url :"/record/midterm", text : "Mid Term"}, {url :"/record/term", text : "Term"}],
    icon: <FaBook />,
  },
  {
    id: 4,
    url: '/updatekrecord',
    text: 'Update Record',
    submenu: [
      {url :"/record/update/midterm", text : "Mid Term"}, {url :"/record/update/term", text : "Term"}],
    icon: <FaBook />,
  },
  {
    id: 5,
    url: '/psycomotor',
    text: 'Psycomotor',
    submenu : [],
    icon: <RiSecurePaymentLine />,
  },
  {
    id: 6,
    url: '/Comment',
    text: 'Comment',
    submenu: [
      {url :"/comment/midterm", text : "Mid Term"}, {url :"/comment/term", text : "Term"} ],
    icon: <FaGift />,
  },
  {
    id: 7,
    url: '/affective',
    text: 'Affective Domain',
    submenu: [],
    icon: <RiBillFill />,
  },
  {
    id: 8,
    url: '/attendance',
    text: 'Attendance',
    submenu: [],
    icon: < FaIdCard/>,
  },
];
export const Adminlinks = [
  {
    id: 9,
    url: '/Class',
    text: 'Class',
    submenu: [
      {url :"/class/create", text : "Create"}, {url :"/class/view", text : "View"} ],
      icon: <FaGift />,
    },
    {
      id: 15,
      url: '/Student',
      text: 'Student',
      submenu: [
        {url :"/student/create", text : "Create"}, {url :"/student/view", text : "View"} ],
      icon: <FaGift />,
    },
  {
    id: 10,
    url: '/Subject',
    text: 'Subject',
    submenu: [
      {url :"/subject/create", text : "Create"}, {url :"/subject/view", text : "View"} ],
    icon: <FaGift />,
  },
  {
    id: 11,
    url: '/subjectcombination',
    text: 'Subject Combination',
    submenu: [
      {url :"/subjectcombination/create", text : "Create"}, {url :"/subjectcombination/view", text : "View"} ],
    icon: <FaGift />,
  },
  {
    id: 12,
    url: '/staff',
    text: 'Staff',
    submenu: [
      {url :"/staff/create", text : "Create"}, {url :"/staff/view", text : "View"} ],
    icon: <FaGift />,
  },
  {
    id: 13,
    url: '/progress',
    text: 'spreadsheet',
    submenu: [],
    icon: <FaGift />,
  },
  {
    id: 1,
    url: '/',
    text: 'dashoboad',
    submenu: [],
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/result',
    text: 'result',
    submenu: [
      {url :"/result/student", text : "student"}, {url :"/result/class", text : "Class"}, {url :"/result/subject", text : "Subject"}, {url :"/result/midterm", text : "Mid term"} ], 
    icon: <FiFileText />,
  },
  {
    id: 3,
    url: '/markrecord',
    text: 'Record',
    submenu: [
      {url :"/record/midterm", text : "Mid Term"}, {url :"/record/term", text : "Term"}],
    icon: <FaBook />,
  },
  {
    id: 4,
    url: '/updatekrecord',
    text: 'Update Record',
    submenu: [
      {url :"/record/update/midterm", text : "Mid Term"}, {url :"/record/update/term", text : "Term"}],
    icon: <FaBook />,
  },
  {
    id: 5,
    url: '/psycomotor',
    text: 'Psycomotor',
    submenu : [],
    icon: <RiSecurePaymentLine />,
  },
  {
    id: 6,
    url: '/Comment',
    text: 'Comment',
    submenu: [
      {url :"/comment/midterm", text : "Mid Term"}, {url :"/comment/term", text : "Term"} ],
    icon: <FaGift />,
  },
  {
    id: 7,
    url: '/affective',
    text: 'Affective Domain',
    submenu: [],
    icon: <RiBillFill />,
  },
  {
    id: 8,
    url: '/attendance',
    text: 'Attendance',
    submenu: [],
    icon: < FaIdCard/>,
  },
];