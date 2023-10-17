import korn from "@/image/64010009.png"
import dream from "@/image/64010154.png"

import toon from "@/image/64010267.png"
import song from "@/image/64010304.png"
import dee from "@/image/64010312.png"
import view from "@/image/64010325.png"
import may from "@/image/64010359.png"
import game from "@/image/64010451.png"
import sun from "@/image/64010459.png"
import baipoo from "@/image/64011041.png"
import confirm from "@/image/confirmOrder.png"
import github2 from "@/image/github2.png"
import gofast from "@/image/goFast.png"
import nextjs2 from "@/image/nextjs2.png"
import calendar from "@/image/pickCalendar.png"
import recruit from "@/image/recruitment.png"
import review from "@/image/review.png"
import sitter from "@/image/sitter.png"
import sweetAlert2 from "@/image/sweetalert2.png"
import tailwind2 from "@/image/tailwind2.png"
import verified from "@/image/verified.png"

export const orderStatus = {
    _1_PENDING: 1,
    _2_PAID: 2,
    _3_CONFIRMED: 3,
    _4_COMPLETED: 4,
    _5_REVIEWED: 5,
    _6_CLOSED: 6,
}
export const orderStatusMeaning = [
    "1_รอชำระเงิน",
    "2_รอคอนเฟริม",
    "3_คอนเฟริมแล้ว",
    "4_รอรีวิว",
    "5_รีวิวแล้ว",
    "6_ปิดออเดอร์",
]

export const priceData = {
    additionalOptions: [
        {id: 1, name: "ตัดเล็บ", price: 50},
        {id: 2, name: "ตัดขน", price: 80},
        {id: 3, name: "อาบน้ำ", price: 80},
        {id: 4, name: "พาไปเดินเล่น", price: 100},
        {id: 5, name: "พาไปกินข้าว", price: 150},
        {id: 6, name: "พาไปหาหมอ", price: 300},
        {id: 7, name: "พาแมวไปเดท", price: 500},
        {id: 8, name: "ซื้อแมวต่อ", price: 1000},
    ],
    hourlyPricing: [
        {hours: 1, cost: 200},
        {hours: 2, cost: 200},
        {hours: 3, cost: 300},
        {hours: 4, cost: 400},
        {hours: 5, cost: 450},
        {hours: 6, cost: 550},
        {hours: 7, cost: 675},
        {hours: 8, cost: 750},
    ],
    dailyPricing: [
        {days: 1, cost: 1000},
        {days: 2, cost: 2000},
        {days: 3, cost: 2750},
        {days: 4, cost: 3500},
        {days: 5, cost: 4500},
    ],
}

export const calculateTotalPrice = (additionals: number[], dateStart: Date, dateEnd: Date) => {
    const calculateDurationPoint = () => {
        const durationInHours = Math.ceil((dateEnd.getTime() - dateStart.getTime()) / 3600000);
        const durationInDays = Math.ceil(durationInHours / 24);

        let firstEntry = null
        if (durationInHours <= 8) {
            for (const entry of priceData.hourlyPricing) {
                firstEntry = firstEntry ?? entry
                if (durationInHours == entry.hours)
                    return entry.cost;
            }
            return firstEntry?.cost ?? 0
        } else if(durationInDays <= 5) {
            for (const entry of priceData.dailyPricing) {
                firstEntry = firstEntry ?? entry
                if (durationInDays == entry.days)
                    return entry.cost;
            }
            return firstEntry?.cost ?? 0
        }
        return 0
    }

    const durationPrice = calculateDurationPoint()
    const additionalPrice = additionals.reduce((total, optionId) => {
        const selectedOption = priceData.additionalOptions.find((option) => option.id === optionId);
        if (selectedOption) {
            return total + selectedOption.price;
        }
        return total;
    }, 0);

    return durationPrice + additionalPrice
}

export const guides1 = [
    {
        color: "bg-[var(--light-blue)]",
        icon: calendar,
        num: "1",
        descript1: "กำหนดวัน/เวลาที่คุณ",
        descript2: "ต้องการใช้บริการ KitCat"
    },
    {
        color: "bg-[var(--aqua)]",
        icon: recruit,
        num: "2",
        descript1: "เลือกพี่เลี้ยงที่คุณ",
        descript2: "ต้องการให้ดูแลน้องแมว"
    },
    {
        color: "bg-[var(--yellow)]",
        icon: confirm,
        num: "3",
        descript1: "ยืนยันการจอง",
        descript2: "และเข้าสู่ขั้นตอนชำระเงิน"
    },
    {
        color: "bg-[var(--light-red)]",
        icon: verified,
        num: "4",
        descript1: "พี่เลี้ยงกดรับงาน",
        descript2: "การจองเสร็จสมบูรณ์!"
    },
]

export const guides2 = [
    {
        color: "bg-[var(--light-blue)]",
        icon: gofast,
        num: "1",
        descript1: "พี่เลี้ยงไปรับน้องแมว",
        descript2: "ยังที่หมายที่ลูกค้าปักหมุด"
    },
    {
        color: "bg-[var(--aqua)]",
        icon: sitter,
        num: "2",
        descript1: "พี่เลี้ยงดูแลน้องแมว",
        descript2: "และพาไปส่งเมื่อครบเวลา"
    },
    {
        color: "bg-[var(--yellow)]",
        icon: review,
        num: "3",
        descript1: "เมื่อจบงานคุณสามารถ",
        descript2: "แสดงความคิดเห็นได้"
    },
]

export const location1 = [
    {
        location: "เลขที่1 ซอย ฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520"
    }
]

export const location2 = [
    {
        location: "126 ถ. ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพมหานคร 10140"
    }
]

export const techStack = [
    {
        "color": "bg-[var(--light-blue)]",
        // "color":"None",
        "icon": nextjs2,
        "title": "Next.js",
        "subtitle": ""

    },
    {
        "color": "bg-[var(--red)]",
        // "color":"None",
        "icon": tailwind2,
        "title": "Tailwind CSS",
        "subtitle": ""

    },
    {
        "color": "bg-[var(--yellow)]",
        // "color":"None",
        "icon": sweetAlert2,
        "title": "SweetAlert",
        "subtitle": ""

    },
    {
        "color": "bg-[var(--aqua)]",
        // "color":"None",
        "icon": github2,
        "title": "Github",
        "subtitle": ""

    }
]

export const member = [
    {
        "icon": korn,
        "title": "64010009",
        "subtitle": "กร โรจน์รัตนปัญญา"
    },
    {
        "icon": dream,
        "title": "64010154",
        "subtitle": "ชนิดาภา วงศ์เทพ"
    },
    {
        "icon": toon,
        "title": "64010267",
        "subtitle": "ณิชาภัทร เอื้อชินกุล"
    },
    {
        "icon": song,
        "title": "64010304",
        "subtitle": "ธนกฤต พันสีมา"
    },
    {
        "icon": dee,
        "title": "64010312",
        "subtitle": "ธนทัต จงกิตติสกุล"
    },
    {
        "icon": view,
        "title": "64010325",
        "subtitle": "ธนภัทร จงเลิศฐิติ"
    },
    {
        "icon": may,
        "title": "64010359",
        "subtitle": "ธัญชนก จรุงพัฒนานนท์"
    },
    {
        "icon": game,
        "title": "64010451",
        "subtitle": "บดินทร์ภัทร์ ราชัย"
    },
    {
        "icon": sun,
        "title": "64010459",
        "subtitle": "บุณยวีร์ กรีแสง"
    },
    {
        "icon": baipoo,
        "title": "64011041",
        "subtitle": "กฤตพร บุริยเมธากุล"
    },
]