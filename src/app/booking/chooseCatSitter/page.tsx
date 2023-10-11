import React from 'react'
import CardCatSitter from '@/components/cardCatSitter/CardCatSitter'


const page = () => {
  return (
    <div className="bg-[var(--white-cream)]">
      <div className="container flex-shrink-0">
        <h1 className='text-center pt-5 mb-5 text-[40px] font-bold text-[var(--navy)]'>เลือกพี่เลี้ยงของคุณ</h1>
        <div className='flex flex-wrap gap-x-12 gap-y-10 justify-center pb-[100px]'>
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--blue)]" isButton={1}/>
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--yellow)]" isButton={1}/>
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--light-red)]" isButton={1}/>
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--blue)]" isButton={1}/>
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--yellow)]" isButton={1}/>
          <CardCatSitter name="สมศรี รักสะอาด" rating={4.0} heart={86} review={7} detail="lorem" color="bg-[var(--light-red)]" isButton={1}/>
        </div>
      </div>
    </div>
  )
}

export default page
