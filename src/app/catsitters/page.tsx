"use client"

import {IReview} from "@/class/Review";
import {IUser} from "@/class/User";
import CardCatSitter from "@/components/cardCatSitter/CardCatSitter"
import {useEffect, useState} from "react"
import {useAppContext} from "../context/app";


export default function Page() {
    const {setFetching} = useAppContext()
    const [catsitters, setCatSitters] = useState<IUser[]>([])
    const [reviews, setReviews] = useState<IReview[][]>([])

    async function fetchCatSittersData() {
        const response = await fetch("/api/user/getall/catsitter")
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


    useEffect(() => {
        setFetching(true)
        fetchCatSittersData()
    }, [])

    useEffect(() => {
        setFetching(true)
        fetchReviews()
    }, [catsitters]);

    return (
        <div className="bg-[var(--white-cream)] ">
            <div className="container flex-shrink-0">
                <h1 className="text-center pt-5 mb-5 text-[40px] font-bold text-[var(--navy)]">พี่เลี้ยงของเรา</h1>
<<<<<<< HEAD
                <div className="flex justify-center">
                    {catsitters.length > 0 ? (
                        <div className="grid grid-cols-4 gap-x-48 gap-y-20 pb-20">
=======
                <div className="flex flex-wrap gap-x-12 gap-y-10 justify-center pb-[100px]">
                {/* <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-4 lg:w-[1200px] w-fit pb-[100px]"> */}
                    {catsitters.length > 0 ? (
                        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4 lg:w-[1200px] w-fit pb-[100px]">
>>>>>>> f1a96b74f9d65c0e563d64c65dc34527302d3eea
                            {catsitters.map((catsitter: IUser, i) => (
                                <CardCatSitter reviews={reviews[catsitter.id]} submitCatSitter={null} key={`catsitter${catsitter.id}`} catsitter={catsitter} color={i} isButton={false}/>
                            ))}
                        </div>
                    ) : catsitters.length == 0 ? (<p>บ๋อแบ๋~</p>) : (<p>Loading...</p>)}
                </div>
            </div>
        </div>
    )
}