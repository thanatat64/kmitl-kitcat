'use client'

import {IReview} from "@/class/Review";

interface ReviewsDisplayProps {
    reviews: IReview[]
}

const ReviewsDisplay: React.FC<ReviewsDisplayProps> = ({ reviews }) => {
    return (
        <div>
            <h4>Reviews Display</h4>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review: IReview) => review ? (
                        <li key={review.id}>
                            {review.id} - {review.review} - โดย {review.reviewer?.name} - ให้ {review.catsitter?.name} - ดาว {review.rating}
                        </li>
                    ) : <li></li>)}
                </ul>
            ) : reviews.length == 0 ? (<p>บ๋อแบ๋~</p>) : (<p>Loading...</p>)}
        </div>
    )
}

export default ReviewsDisplay