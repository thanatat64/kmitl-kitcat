import "./Card.css"
import Image from "next/image"
import icon1 from "../../../public/image/convenient.png"
import icon2 from "../../../public/image/bubble-chat.png"
import icon3 from "../../../public/image/piggy-bank.png"
import icon4 from "../../../public/image/dependable.png"

const Card = () => {
  return (
    <div className='app pb-5'>
      <h1 className="text d-flex  justify-content-center pt-5 pb-1">
        สิ่งที่เราแตกต่างจากคนอื่น
      </h1>
      <div className="d-flex justify-content-center ">

        <div className='d-flex justify-content-center bg-white p-5 rounded-pill shadow m-4'>
          <div className="d-flex flex-column">
            <div className="circle1 rounded-circle p-5 ">
              <Image className="" width={90} src={icon1} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column">
                <h1 className="texts d-flex justify-content-center mt-4 ">สะดวก</h1>
                <h5 className="details d-flex justify-content-center">จองและจ่ายในที่เดียว</h5>
                <h5 className="details pb-3">ไม่ต้องไปดีลกันทีหลัง</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center bg-white p-5 rounded-pill shadow m-4'>
          <div className="d-flex flex-column">
            <div className="circle2 rounded-circle p-5 ">
              <Image className="" width={90} src={icon2} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column">
                <h1 className="texts d-flex justify-content-center mt-4">รับฟัง</h1>
                <h5 className="details d-flex justify-content-center">ยอมรับทุกความคิดเห็น</h5>
                <h5 className="details pb-3">เพื่อการบริการที่ดีที่สุด</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center bg-white p-5 rounded-pill shadow m-4'>
          <div className="d-flex flex-column">
            <div className="circle3 rounded-circle p-5 ">
              <Image className="" width={90} src={icon3} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column">
                <h1 className="texts d-flex justify-content-center mt-4">ประหยัด</h1>
                <h5 className="details d-flex justify-content-center">มีเรทราคาที่แน่นอน</h5>
                <h5 className="details pb-3">จึงมั่นใจได้ว่าถูกที่สุด</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex justify-content-center bg-white p-5 rounded-pill shadow m-4'>
          <div className="d-flex flex-column">
            <div className="circle4 rounded-circle p-5 ">
              <Image className="" width={90} src={icon4} alt="" />
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-column">
                <h1 className="texts d-flex justify-content-center mt-4">ไว้ใจได้</h1>
                <h5 className="details d-flex justify-content-center">พี่เลี้ยงทุกคนได้รับ</h5>
                <h5 className="details pb-3">การรับรองจาก KitCat</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;