"use client"

import {IUser} from "@/class/User";
import CardCatSitter from "@/components/cardCatSitter/CardCatSitter"
import {useEffect, useState} from "react"

export default function Page() {
    const [catsitters, setCatSitters] = useState<IUser[]>([])

    async function fetchCatSittersData() {
        const response = await fetch("/api/user/getall/catsitter")
        setCatSitters(await response.json())
    }

    useEffect(() => {
        fetchCatSittersData()
    }, [])

    return (
        <div className="bg-[var(--white-cream)] ">
            <div className="container flex-shrink-0">
                <h1 className="text-center pt-5 mb-5 text-[40px] font-bold text-[var(--navy)]">พี่เลี้ยงของเรา</h1>
                <div className="flex flex-wrap gap-x-12 gap-y-10 justify-center pb-[100px]">
                    {catsitters.length > 0 ? (
                        <ul>
                            {catsitters.map((catsitter: IUser) => catsitter ? (
                                <CardCatSitter name={catsitter.name} rating={10} heart={86} review={7} detail={catsitter.name} color="bg-[var(--light-red)]"/>
                            ) : <li></li>)}
                        </ul>
                    ) : catsitters.length == 0 ? (<p>บ๋อแบ๋~</p>) : (<p>Loading...</p>)}
                </div>
            </div>
        </div>
    )
}