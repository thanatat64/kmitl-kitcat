"use client"
import {IOrder} from "@/class/Order";
import {IReview} from "@/class/Review";
import {IUser} from "@/class/User";
import CardCatSitter from "@/components/cardCatSitter/CardCatSitter";
import Link from "next/link"
import {useRouter} from "next/navigation"
import React, {useEffect, useState} from "react"
import Swal from "sweetalert2"
import {useAppContext} from "../../context/app";


const Page = () => {
    const router = useRouter()
    const {user, setFetching} = useAppContext()
    const [catsitters, setCatSitters] = useState<IUser[]>([])
    const [reviews, setReviews] = useState<IReview[][]>([])

    const [currentOrder, setCurrentOrder] = useState<IOrder | null>(null)

    async function fetchCurrentOrder() {
        if (user.id < 0) return
        const response = await fetch("/api/order/current/owner/" + user.id)
        if (response.ok) {
            const order = await response.json()
            if (order) {
                setCurrentOrder(order)
                return
            }
        }
        setFetching(false)
    }
    async function fetchCatSittersData() {
        const response = await fetch("/api/user/getall/catsitter/free")
        setCatSitters(await response.json())
        setFetching(false)
    }

    async function fetchReviews() {
        let fetchReviews = []
        for (const catsitter of catsitters) {
            const response = await fetch("/api/review/getall/catsitter/" + catsitter.id)
            fetchReviews[catsitter.id] = await response.json()
        }
        setReviews(fetchReviews)
        setFetching(false)
    }

    const submitCatSitter = async (e: React.ChangeEvent<any>) => {
        if (!e.target)
            return
        const catsitterId = e.target.getAttribute("data-catsitter")

        if (!catsitterId)
            return

        if (!currentOrder)
            return

        setFetching(true)
        const response = await fetch("/api/order/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: currentOrder.id,
                address: currentOrder.address,
                note: currentOrder.note,
                additional: currentOrder.additional.split(",").map((str) => parseInt(str)) as never[],
                datestart: currentOrder.dateStart,
                dateend: currentOrder.dateEnd,
                userId: user.id,
                catsitterId: catsitterId,
            }),
        })
        setFetching(false)
        if (!response.ok) {
            const error = await response.json()

            Swal.fire({
                title: "เกิดข้อผิดพลาด!",
                text: error,
                icon: "error",
                confirmButtonText: "รับทราบ"
            })
        } else {
            Swal.fire({
                title: "ดำเนินการสำเร็จ!",
                text: "กรุณาชำระเงิน เพื่อยืนยันการจอง",
                icon: "success",
                confirmButtonText: "รับทราบ"
            }).then(() => {
                router.push("/booking/conclusion")
            })
        }
    }

    useEffect(() => {
        setFetching(true)
        fetchCatSittersData()
    }, [])

    useEffect(() => {
        setFetching(true)
        fetchCurrentOrder()
    }, [user]);

    useEffect(() => {
        setFetching(true)
        fetchReviews()
    }, [catsitters]);

    return (
        <div className="bg-[var(--white-cream)]">
            <div className="container flex-shrink-0">
                <Link href="/booking">
                    <button className="text-blueText border-[3px] mt-[50px] border-blueText bg-conclustion font-medium rounded-full px-4 py-2 pl-[150px] pr-[150px] text-xl ml-[40px] md:ml-0">
                        ย้อนกลับ
                    </button>
                </Link>
                <h1 className="text-center pt-5 mb-5 text-[30px] md:text-[40px] font-bold text-[var(--navy)]">เลือกพี่เลี้ยงของคุณ</h1>
                <div className="flex justify-center">
                {catsitters.length > 0 ? (
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-48 gap-y-20 pb-[100px]">
                        {catsitters.map((catsitter: IUser, i) => (
                            <CardCatSitter reviews={reviews[catsitter.id]} submitCatSitter={submitCatSitter} key={`catsitter${catsitter.id}`} catsitter={catsitter} color={i} isButton={true}/>
                        ))}
                    </div>
                ) : catsitters.length == 0 ? (<p>บ๋อแบ๋~</p>) : (<p>Loading...</p>)}
                </div>
            </div>
        </div>
    )
}

export default Page