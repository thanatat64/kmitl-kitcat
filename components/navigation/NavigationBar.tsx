'use client'

import './NavigationBar.css'

import Link from 'next/link'

interface NavigationBarProps {
}

const NavigationBar: React.FC<NavigationBarProps> = ({}) => {
    return (
         <div className="navbar">
            <div className="container flex-shrink-0">
                
                <Link href="/" className="title">Kitcat</Link>
                {/* <ul className="d-flex flex-row gap-4"> */}
                <ul>
                    <li><Link href="catsitters">พี่เลี้ยงของเรา</Link></li>
                    <li><Link href="services">ค่าบริการ</Link></li>
                    <li><Link href="guide">วิธิการใช้งาน</Link></li>
                    <li><Link href="about">เกี่ยวกับเรา</Link></li>
                    <li><Link href="signin">เข้าสู่ระบบ</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavigationBar