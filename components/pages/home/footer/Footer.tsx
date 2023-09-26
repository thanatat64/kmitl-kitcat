'use react'

import { BsLine } from "react-icons/bs"
import { BsFillTelephoneFill } from "react-icons/bs"
import { TbMailFilled } from "react-icons/tb"
import "./Footer.css"

const Footer = () => {
    return ( 
        <div className="app d-flex p-4">
            <div className="ms-5 w-50 mt-1 ps-3">
                <div>
                    <h5>บริษัท คิทแคท จำกัด</h5>
                    <h5>เลขที่ 1 ซอยฉลองกรุง 1 ถนนฉลองกรุง แขวงลาดกระบัง</h5>
                    <h5>เขตลาดกระบัง กรุงเทพฯ 10520</h5>
                </div>
            </div>
            <div className="d-flex justify-content-end me-5 pe-3 w-50 mt-1">
                <div>
                    <div className="d-flex">
                        <h5>ติดต่อเรา:</h5>
                        <div className="ms-2">
                            <h5><BsLine /> @KitCat</h5>
                            <h5><BsFillTelephoneFill /> 02-456-7890</h5>
                            <h5><TbMailFilled /> KitCat@gmail.com</h5>
                        </div>
                    </div>
                    <h5>Copyright © 2023 KitCat. All Rights Reserved</h5>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;