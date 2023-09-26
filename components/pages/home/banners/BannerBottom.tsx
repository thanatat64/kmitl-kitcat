import "./BannerBottom.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import catBottomBg from "../../../../public/image/cat-bottom-bg.svg";

export default function BannerBottom() {
    return (
        <div className="bg-color-bottom">
            <section className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 imgCatBott my-5 d-flex justify-content-center">
                        <Image
                            className=""
                            width={650}
                            src={catBottomBg}
                            alt='catBottomBg'
                        />
                    </div>
                    <div className="col-md-6 comm">
                        <div className="text-comm-bold fw-bold mb-3">
                            มาร่วมเป็นพี่เลี้ยงแมว
                            <br />
                            กับ KitCat
                        </div>
                        <div className="text-comm-regular mb-3">
                            ผลตอบแทนสูง สมัครได้ง่าย ๆ 
                        </div>
                        <div className="text-comm-regular mb-4">
                            ไม่เสียค่าใช้จ่าย คลิกเลย! 
                        </div>
                        <a
                            href="#"
                            className="btn btn-config-bottom btn-primary fs-5"
                        >
                            สมัครเป็นพี่เลี้ยง
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
