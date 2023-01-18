import React from 'react';
import { footerLinksOne, footerLinksTwo, footerLinksThree, copyRightText } from '../constants';
import { whiteLogo } from '../assets/img';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="w-full leading-9 p-4 bottom-0 bg-primary text-dark md:text-white font-medium">
    <div className="flex flex-col md:flex-row justify-center font-bold items-start">
      <Link to="/" className="w-full">
        <img className="w-36 h-20 bg-gray-400" src={whiteLogo} alt="logo" />
      </Link>
      <ul className="flex flex-col mr-20 w-56">
        {footerLinksOne.map((link, index) => (
          <li className={`${index === 0 ? 'text-md my-2' : 'text-sm'} duration-500 hover:text-dark `} key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col mr-20 w-56">
        {footerLinksTwo.map((link, index) => (
          <li className={`${index === 0 ? 'text-md my-2' : 'text-sm'} duration-500 hover:text-dark `} key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    <hr className="my-4 bg-white" />
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-dark text-sm">
      <ul className="flex flex-col md:flex-row">
        {footerLinksThree.map((link, index) => (
          <li className="mr-2 hover:text-light duration-500" key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <p className="text-center mt-4 md:mt-0">{copyRightText}</p>
    </div>
  </footer>
);

export default Footer;
