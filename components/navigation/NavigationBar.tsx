'use client'

import './NavigationBar.css';
import React, { useState } from 'react';
import Link from 'next/link';

interface NavigationBarProps {}

const NavigationBar: React.FC<NavigationBarProps> = ({}) => {
  const [activeItem, setActiveItem] = useState<string>('');

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
        <ul>
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
            <Link href="/signin" className={isItemActive('/signin')} onClick={() => handleItemClick('/signin')}>
              เข้าสู่ระบบ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
