
import CardCatSitter from "@/components/cardCatSitter/CardCatSitter"

export default function Page() {
    // const button= 
    return (
        <div className="bg-[var(--white-cream)] ">
            <div className="container flex-shrink-0">
                <h1 className="text-center pt-5 mb-5 text-[40px] font-bold text-[var(--navy)]">พี่เลี้ยงของเรา</h1>
                <div className="flex flex-wrap gap-x-12 gap-y-10 justify-center pb-[100px]">
                    <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--blue)]"/>
                    <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--yellow)]" />
                    <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--light-red)]"/>
                    <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--blue)]" />
                    <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--yellow)]"/>
                    <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--light-red)]" />
                </div>
            </div>
         </div>
    )
}