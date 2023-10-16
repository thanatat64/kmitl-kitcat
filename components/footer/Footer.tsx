'use react'

import {BsFillTelephoneFill, BsLine} from "react-icons/bs"
import {TbMailFilled} from "react-icons/tb"

const Footer = () => {
    return (
        <div className="bg-[var(--cream)]">
            <div className="container">
                <div className="flex flex-col py-7 items-center md:flex-row md:justify-between">
                    <div className="flex flex-col text-center">
                        <h5 className="text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] md:text-left">บริษัท คิทแคท จำกัด</h5>
                        <h5 className="text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] md:text-left">เลขที่ 1 ซอยฉลองกรุง 1 ถนนฉลองกรุง</h5>
                        <h5 className="text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] md:text-left">เขตลาดกระบัง กรุงเทพฯ 10520</h5>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex md:flex-row flex-col mb-3">
                            <h5 className="text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] text-center md:text-left ">ติดต่อเรา:</h5>
                            <div className=" flex flex-col md:pl-0">
                                <h5 className="flex text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] justify-center md:justify-start"><BsLine className="ml-2 mr-2"/>@KitCat</h5>
                                <h5 className="flex text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] justify-center md:justify-start"><BsFillTelephoneFill className="ml-2 mr-2"/>02-456-7890</h5>
                                <h5 className="flex text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] justify-center md:justify-start"><TbMailFilled className="ml-2 mr-2"/>KitCat@gmail.com</h5>
                            </div>
                        </div>
                        <h5 className="text-[var(--navy)] text-[16px] font-medium md:text-[18px] lg:text-[20px] text-center md:text-left mr-[60px] ml-[60px] md:ml-0 md:mr-0">Copyright © 2023 KitCat. All Rights Reserved</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;