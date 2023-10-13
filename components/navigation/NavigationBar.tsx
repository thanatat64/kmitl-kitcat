'use client'
import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import Logo from "@/image/kitCatLogo.svg"

const NavigationBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const linkClassName = (link: string, hoveredLink: string | null) => {
    const pathname = usePathname()

    const isActive = pathname === link;

    return `text-[20px] font-medium text-[var(--navy)] no-underline py-[3px] px-2 
    ${isActive
        ? 'bg-[var(--navy)] text-white rounded-full'
        : 'bg-transparent text-[var(--navy)]'

      } ${link === hoveredLink
        ? 'border-2 border-[var(--navy)] no-underline rounded-full shadow-md'
        : 'border-2 border-transparent'
      }`;
  };

  return (
    <div className="bg-[var(--white-cream)] shadow-md h-[63px]">
      <div className="w-[300px] md:w-[700px] lg:w-[1200px] flex items-start justify-between mx-auto m-[5px] lg:mt-[10px] ">

        <Link href="/" className="text-[24px] text-[var(--navy)] no-underline font-semibold">
          <Image src={Logo} width={135} className='flex justify-start' alt='' />
        </Link>

        {showMobileMenu ? (
          <ul className="md:hidden flex items-center flex-col gap-8 ">
            <Link href="/booking">จองบริการ</Link>
            <Link href="/catsitters">พี่เลี้ยงของเรา</Link>
            <Link href="/services">ค่าบริการ</Link>
            <Link href="/guide">วิธิการใช้งาน</Link>
            <Link href="/about">เกี่ยวกับเรา</Link>
            <Link href="/mybooking">การจองของฉัน</Link>
            <Link href="/myorder">ออเดอร์ของฉัน</Link>
            <Link href="/signin">เข้าสู่ระบบ</Link>
          </ul>
        ) : (
          <ul className="hidden md:flex items-center">
            <Link
              href="/booking"
              className={linkClassName('/booking', hoveredLink)}
              onMouseEnter={() => handleMouseEnter('/booking')}
              onMouseLeave={handleMouseLeave}
            >
              จองบริการ
            </Link>
            <Link
              href="/catsitters"
              className={linkClassName('/catsitters', hoveredLink)}
              onMouseEnter={() => handleMouseEnter('/catsitters')}
              onMouseLeave={handleMouseLeave}
            >
              พี่เลี้ยงของเรา
            </Link>
            <Link
              href="/services"
              className={linkClassName('/services', hoveredLink)}
              onMouseEnter={() => handleMouseEnter('/services')}
              onMouseLeave={handleMouseLeave}
            >
              ค่าบริการ
            </Link>
            <Link
              href="/guide"
              className={linkClassName('/guide', hoveredLink)}
              onMouseEnter={() => handleMouseEnter('/guide')}
              onMouseLeave={handleMouseLeave}
            >
              วิธิการใช้งาน
            </Link>
            <Link
              href="/about"
              className={linkClassName('/about', hoveredLink)}
              onMouseEnter={() => handleMouseEnter('/about')}
              onMouseLeave={handleMouseLeave}
            >
              เกี่ยวกับเรา
            </Link>
            <Link
              href="/mybooking"
              className={linkClassName('/mybooking', hoveredLink)}
              onMouseEnter={() => handleMouseEnter('/mybooking')}
              onMouseLeave={handleMouseLeave}
            >
              การจองของฉัน
            </Link>
            <Link
              href="/myorder"
              className={linkClassName('/myorder', hoveredLink)}
              onMouseEnter={() => handleMouseEnter('/myorder')}
              onMouseLeave={handleMouseLeave}
            >
              ออเดอร์ของฉัน
            </Link>
            <Link href="/signin" className="text-[20px] font-medium text-[var(--navy)] no-underline rounded-full py-[3px] px-4 border-2 border-[var(--navy)]">
              เข้าสู่ระบบ
            </Link>

          </ul>
        )}
          <HiMenuAlt3 className="block lg:hidden cursor-pointer text-[var(--navy)] w-[60px] h-[40px]  md:w-[80px] md:h-[50px] "
            onClick={() => setShowMobileMenu((prev) => !prev)}
          />
        <div
          className={`block md:hidden w-full fixed ${!showMobileMenu ? "-top-[410px]" : "top-0"
            } left-0 bg-[#dde0e5] h-[410] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
        >
          <AiOutlineClose size={25} className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
          {showMobileMenu && (
            <ul className="pt-[60px] items-center flex flex-col gap-8">
              <Link href="/booking" className="text-lg text-black cursor-pointer w-full text-center">
                จองบริการ
              </Link>
              <Link href="/catsitters">พี่เลี้ยงของเรา</Link>
              <Link href="/services">ค่าบริการ</Link>
              <Link href="/guide">วิธิการใช้งาน</Link>
              <Link href="/about">เกี่ยวกับเรา</Link>
              <Link href="/mybooking">การจองของฉัน</Link>
              <Link href="/myorder">ออเดอร์ของฉัน</Link>
              <Link href="/signin">เข้าสู่ระบบ</Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;



