'use client'

import './NavigationBar.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";

interface NavigationBarProps { }

const NavigationBar: React.FC<NavigationBarProps> = ({ }) => {
  const [activeItem, setActiveItem] = useState<string>('');
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened:boolean) => {
      if (document.documentElement.clientWidth <= 100 && !menuOpened) {
          return "hidden" 
      }
  }

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const isItemActive = (item: string) => {
    return item === activeItem ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container flex-shrink-0">
        <Link href="/" className={`title ${isItemActive('/')}`} onClick={() => handleItemClick('/')}>
          Kitcat
        </Link>
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className={`visible ${getMenuStyles(menuOpened)}` }>
          <ul className='h-menu'>
            <li>
              <Link href="/booking" className={isItemActive('/booking')} onClick={() => handleItemClick('/booking')}>
                จองบริการ
              </Link>
            </li>
            <li>
              <Link href="/catsitters" className={isItemActive('/catsitters')} onClick={() => handleItemClick('/catsitters')}>
                พี่เลี้ยงของเรา
              </Link>
            </li>
            <li>
              <Link href="/services" className={isItemActive('/services')} onClick={() => handleItemClick('/services')}>
                ค่าบริการ
              </Link>
            </li>
            <li>
              <Link href="/guide" className={isItemActive('/guide')} onClick={() => handleItemClick('/guide')}>
                วิธิการใช้งาน
              </Link>
            </li>
            <li>
              <Link href="/about" className={isItemActive('/about')} onClick={() => handleItemClick('/about')}>
                เกี่ยวกับเรา
              </Link>
            </li>
            <li>
              <Link href="/mybooking" className={isItemActive('/mybooking')} onClick={() => handleItemClick('/mybooking')}>
                การจองของฉัน
              </Link>
            </li>
            <li>
              <Link href="/signin" className={`logIn ${isItemActive('/signin')}`} onClick={() => handleItemClick('/signin')}>
                <div className='setLogin'>เข้าสู่ระบบ </div>
              </Link>
            </li>
          </ul>
          </div>
        </OutsideClickHandler>

        <div className='menu-icon' onClick={(() => setMenuOpened((prev) => !prev))}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

