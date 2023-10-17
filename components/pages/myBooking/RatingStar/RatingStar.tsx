import React, { useState } from 'react';
import '@/components/pages/myBooking/ReviewModal/ReviewModal.css'

interface RatingProps {
    initialRating: number; // คะแนนเริ่มต้นที่รับเข้ามา
    // onRatingChange: (rating: number) => void;
}

const RatingStar: React.FC<RatingProps> = ({ initialRating}) => {
    // State เพื่อเก็บคะแนน (rating) ที่รับมา
    const [rating, setRating] = useState<number>(initialRating);

    // ฟังก์ชันเมื่อมีการเลือกดาว
    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedRating = parseFloat(event.target.value);
        setRating(selectedRating);
        // onRatingChange(selectedRating);
    };

    return (
        <div className="reviewStar flex flex-row justify-center mt-2 mb-2">
            <form>
                <div className="rate">
                    <input
                        type="radio"
                        id="starS5"
                        name="rate"
                        value="5"
                        onChange={handleRatingChange}
                    />
                    <label htmlFor="starS5" title="5 stars">5 stars</label>
                    <input
                        type="radio"
                        id="starS4"
                        name="rate"
                        value="4"
                        onChange={handleRatingChange}
                    />
                    <label htmlFor="starS4" title="4 stars">4 stars</label>
                    <input
                        type="radio"
                        id="starS3"
                        name="rate"
                        value="3"
                        onChange={handleRatingChange}
                    />
                    <label htmlFor="starS3" title="3 stars">3 stars</label>
                    <input
                        type="radio"
                        id="starS2"
                        name="rate"
                        value="2"
                        onChange={handleRatingChange}
                    />
                    <label htmlFor="starS2" title="2 stars">2 stars</label>
                    <input
                        type="radio"
                        id="starS1"
                        name="rate"
                        value="1"
                        onChange={handleRatingChange}
                    />
                    <label htmlFor="starS1" title="1 star">1 star</label>
                </div>
            </form>
        </div>
    );
};

export default RatingStar;
