'use react'

import { BsLine } from "react-icons/bs"
import { BsFillTelephoneFill } from "react-icons/bs"
import { TbMailFilled } from "react-icons/tb"

const Footer = () => {
    return (
        <div className="bg-[#FFF4EA] w-screen">
            <div className="container ">
                <div className="flex p-3 flex-col md:flex-row md:justify-between " >
                    <div className="flex flex-col">
                        <h5 className="text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] ml-[100px] md:ml-0">บริษัท คิทแคท จำกัด</h5>
                        <h5 className="text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] ml-[35px] md:ml-0">เลขที่ 1 ซอยฉลองกรุง 1 ถนนฉลองกรุง</h5>
                        <h5 className="text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] ml-[55px] md:ml-0">เขตลาดกระบัง กรุงเทพฯ 10520</h5>
                    </div>
                    <div className="flex flex-col ">
                        <div className="flex md:flex-row flex-col">
                            <h5 className="text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] text-center md:text-start ">ติดต่อเรา:</h5>
                            <div className=" flex flex-col md:pl-0">
                                <h5 className="flex text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] justify-center md:justify-start"><BsLine className="ml-2 mr-2"/>@KitCat</h5>
                                <h5 className="flex text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] justify-center md:justify-start"><BsFillTelephoneFill className="ml-2 mr-2"/>02-456-7890</h5>
                                <h5 className="flex text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] justify-center md:justify-start"><TbMailFilled className="ml-2 mr-2"/>KitCat@gmail.com</h5>
                            </div>
                        </div>
                        <h5 className="text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px]">Copyright © 2023 KitCat. All Rights Reserved</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;