'use client'

import {IReview} from "@/class/Review";
import PictureDisplay from "@/components/other/PictureDisplay";
import RatingDisplay from "@/components/other/RatingDisplay";
import React from 'react'

interface ReviewProps {
    reviews: IReview[];
}

const Review: React.FC<ReviewProps> = ({reviews}) => {
    return (
        <div className="overflow-y-auto h-[300px]">
            <hr/>
            <div>
                {reviews && reviews.length > 0 ? reviews.map((review, i) => (
                        <div key={`review-${i}`} className=''>
                            <div className='flex flex-row items-center gap-4'>
                                <PictureDisplay key={`picture-${i}`} picture={review.reviewer.picture} size={5} isCircle={true}/>
                                <div className='flex-shrink'>
                                    <div className='flex items-center justify-between'>
                                        <div className='text-xl font-bold text-[var(--navy)] truncate w-[200px]'>
                                            {review.reviewer.name}
                                        </div>
                                        <RatingDisplay key={`ratings-${i}`} rating={review.rating}/>
                                    </div>
                                    <div className='text-[var(--navy)] truncate w-[300px]'>
                                        {review.review}
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>))
                    : <div className="text-center font-bold">ยังไม่เคยบริการ</div>}
            </div>
        </div>
    )
}

export default Review
