'use react'

import { BsLine } from "react-icons/bs"
import { BsFillTelephoneFill } from "react-icons/bs"
import { TbMailFilled } from "react-icons/tb"

const Footer = () => {
    return ( 
        <div className="bg-[#FFF4EA]">
            <div className="container flex-shrink-0">
                <div className="flex p-3">
                    <div className=" w-50 mt-1">
                        <div>
                            <h5 className="text-[#000958]">บริษัท คิทแคท จำกัด</h5>
                            <h5 className="text-[#000958]">เลขที่ 1 ซอยฉลองกรุง 1 ถนนฉลองกรุง แขวงลาดกระบัง</h5>
                            <h5 className="text-[#000958]">เขตลาดกระบัง กรุงเทพฯ 10520</h5>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end w-50 mt-1">
                        <div>
                            <div className="d-flex">
                                <h5 className="text-[#000958]">ติดต่อเรา:</h5>
                                <div className="ml-2">
                                    <h5 className="flex text-[#000958]"><BsLine className="mr-2" /> @KitCat</h5>
                                    <h5 className="flex text-[#000958]"><BsFillTelephoneFill className="mr-2" /> 02-456-7890</h5>
                                    <h5 className="flex text-[#000958]"><TbMailFilled className="mr-2" /> KitCat@gmail.com</h5>
                                </div>
                            </div>
                            <h5 className="text-[#000958]">Copyright © 2023 KitCat. All Rights Reserved</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;