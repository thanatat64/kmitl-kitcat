import React from 'react'
import CardCatSitter from '@/components/cardCatSitter/CardCatSitter'

const page = () => {
  return (
    <div className="bg-[var(--cream)]">
      <div className="container flex-shrink-0">
        <h1 className='text-center pt-5 mb-5 text-[40px] font-bold text-[var(--navy)]'>เลือกพี่เลี้ยงของคุณ</h1>
        <div className='flex flex-wrap gap-x-12 gap-y-10 justify-center pb-[100px]'>
          <CardCatSitter/>
          <CardCatSitter/>
          <CardCatSitter/>
          <CardCatSitter/>
          <CardCatSitter/>
          <CardCatSitter/>
        </div>
      </div>
    </div>
  )
}

export default page
