import "./BannerTop.css";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import catTopBg from "../../../../public/image/cat-top-bg.svg";

export default function BannerTopPage() {
    return (
        <div className="bg-color-top">
            <section className="container">
                <div className="row align-items-center d-flex justify-content-center">
                    <div className="hero col-md-6">
                        <div className="text-hero-bold fw-bold mb-3">
                            รักแมวของคุณได้ทุกวัน
                            <br />
                            ไม่ว่าคุณจะอยู่ที่ไหน
                        </div>
                        <div className="text-hero-regular mb-5">
                            เราคือพี่เลี้ยงแมวที่คุณไว้วางใจได้มากที่สุด
                        </div>
                        <a
                            href="#"
                            className="btn btn-config-top btn-primary fs-5"
                        >
                            จองบริการ
                        </a>
                    </div>
                    <div className="col-md-4 imgCat mt-3">
                        <Image
                            className="imgConfig"
                            src={catTopBg}
                            alt={catTopBg}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
