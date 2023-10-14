'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenuAlt3 } from 'react-icons/hi';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { PiUserCircle } from 'react-icons/pi'
import { AiOutlineClose } from 'react-icons/ai';
import Logo from "@/image/kitCatLogo.svg";

const NavigationBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const pathname = usePathname();

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const linkClassName = (link: string) => {
    const isActive = pathname === link;

    return `text-[20px] font-medium text-[var(--navy)] no-underline py-[3px] px-2 
    ${isActive ? 'bg-[var(--navy)] text-white rounded-full' : 'bg-transparent text-[var(--navy)]'}
    ${link === hoveredLink ? 'border-2 border-[var(--navy)] no-underline rounded-full shadow-md' : 'border-2 border-transparent'}`;
  };

  const mobileMenuLinks = [
    { href: '/booking', text: 'จองบริการ', hoverColor: 'hover:bg-gradient-to-r from-indigo-300 to-transparent' },
    { href: '/catsitters', text: 'พี่เลี้ยงของเรา', hoverColor: 'hover:bg-[linear-gradient(90deg,_var(--yellow)_0%,_white_100%)]' },
    // { href: '/services', text: 'ค่าบริการ', hoverColor: 'hover:bg-[linear-gradient(90deg,_var(--aqua)_0%,_white_100%)]' },
    { href: '/guide', text: 'วิธิการใช้งาน', hoverColor: 'hover:bg-gradient-to-r from-green-300 to-transparent' },
    { href: '/about', text: 'เกี่ยวกับเรา', hoverColor: 'hover:bg-[linear-gradient(90deg,_var(--light-red)_0%,_white_100%)]' },
    { href: '/mybooking', text: 'การจองของฉัน', hoverColor: 'hover:bg-[linear-gradient(90deg,_var(--pink)_0%,_white_100%)]' },
    { href: '/myorder', text: 'ออเดอร์ของฉัน', hoverColor: 'hover:bg-[linear-gradient(90deg,_var(--light-blue)_0%,_white_100%)]' },
  ];

  return (
    <div className="bg-[var(--white-cream)] shadow-md h-[63px] z-10">
      <div className="w-[300px] md:w-[700px] lg:w-[1300px] flex items-start justify-between mx-auto m-[5px] lg:m-0 lg:mt-[10px] ">
        <a href="/" className="text-[24px] text-[var(--navy)] no-underline font-semibold">
          <Image src={Logo} width={135} alt="" />
        </a>

        {showMobileMenu ? (
          <div className="block lg:hidden w-full fixed top-0 left-0 bg-white transition-all duration-800ms shadow-xl py-8 px-12 rounded-b-xl">
            <AiOutlineClose
              size={25}
              className="absolute top-5 right-5 cursor-pointer"
              onClick={() => setShowMobileMenu(false)}
            />
            {showMobileMenu && (
              <ul className="pt-[60px] items-center flex flex-col gap-8">
                {mobileMenuLinks.map((menuLink, i) => (
                  <a
                    key={i}
                    href={menuLink.href}
                    className={`text-[var(--navy)] mx-auto cursor-pointer w-full text-center text-[20px] font-medium no-underline ${menuLink.hoverColor}`}
                    onMouseEnter={() => handleMouseEnter(menuLink.href)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menuLink.text}
                  </a>
                ))}
                <Link href="/signin" className="text-[20px] text-center font-medium text-[var(--navy)] no-underline rounded-full py-[3px] px-4 border-2 border-[var(--navy)]">
                  เข้าสู่ระบบ
                </Link>
              </ul>
            )}
          </div>
        ) : (
          <ul className="hidden lg:flex items-center">
            {mobileMenuLinks.map((menuLink, i) => (
              <a
                key={i}
                href={menuLink.href}
                className={linkClassName(menuLink.href)}
                onMouseEnter={() => handleMouseEnter(menuLink.href)}
                onMouseLeave={handleMouseLeave}
              >
                {menuLink.text}
              </a>
            ))}
            <Link href="/signin" className="text-[20px] font-medium text-[var(--navy)] no-underline rounded-full py-[3px] px-4 border-2 border-[var(--navy)]">
              เข้าสู่ระบบ
            </Link>

            <div className='relative inline-block'>
              <div
                className='flex flex-row rounded-full py-[2px] px-2 border-2 border-[var(--navy)] cursor-pointer'
                onClick={toggleDropdown}
              >
                <div className='w-[33px] h-[33px] mr-1'>
                  <PiUserCircle className='text-[var(--navy)] w-full h-full' />
                </div>
                <div className="text-[20px] font-medium text-[var(--navy)] my-auto">
                  Username123
                </div>
              </div>
              {isDropdownOpen && (
                <div className='absolute z-10 mt-2 w-full h-[115px] bg-white border-2 border-[var(--navy)] rounded-lg shadow-lg'>
                  <div className='text-center mt-3'>

                    <div className='py-1 hover:bg-[linear-gradient(90deg,_var(--yellow)_0%,_white_100%)] mb-1'>
                      <a href="/profile" className=' cursor-pointer text-[20px] text-[var(--navy)] font-medium no-underline'>การตั้งค่า</a>
                    </div>
                    <p className='py-1 hover:bg-[linear-gradient(90deg,_var(--red)_0%,_white_100%)] cursor-pointer text-[20px] text-[var(--navy)] font-medium'>ออกจากระบบ</p>

                  </div>
                </div>
              )}
            </div>

          </ul>
        )}
        <HiMenuAlt3
          className="lg:hidden cursor-pointer text-[var(--navy)] w-fit h-[40px] md:h-[50px]"
          onClick={() => setShowMobileMenu((prev) => !prev)}
        />
      </div>
    </div >
  );
};

export default NavigationBar;

