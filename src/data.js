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
      {url :"/result/student", text : "student"}, {url :"/result/class", text : "Class"}, {url :"/result/subject", text : "Subject"} ], 
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
    url: '/Psycomotor',
    text: 'Psycomotor',
    submenu: [],
    icon: <RiSecurePaymentLine />,
  },
  {
    id: 5,
    url: '/Comment',
    text: 'Comment',
    submenu: [
      {url :"/midterm", text : "Mid Term"}, {url :"/term", text : "Term"}, {url :"/session", text : "Session"} ],
    icon: <FaGift />,
  },
  {
    id: 6,
    url: '/Affective',
    text: 'Affective Domain',
    submenu: [],
    icon: <RiBillFill />,
  },
  {
    id: 7,
    url: '/Attendance',
    text: 'Attendance',
    submenu: [],
    icon: < FaIdCard/>,
  },
];