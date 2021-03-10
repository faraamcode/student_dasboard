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
