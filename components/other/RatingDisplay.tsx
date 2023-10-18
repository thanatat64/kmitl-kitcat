import {AiFillStar, AiOutlineStar} from "react-icons/ai"

interface RatingDisplayProps {
    rating: number
}

const RatingDisplay: React.FC<RatingDisplayProps> = ({rating}) => {
    const Star = (rating: number) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<AiFillStar key={`star-${i}`} className="text-[var(--yellow)]"/>);
        }
        for (let i = 0; i < 5-rating; i++) {
            stars.push(<AiOutlineStar key={`staroutline-${i}`} className="text-[var(--yellow)]"/>);
        }

        return stars;
    }
    return (
        <div className="flex">
            {Star(rating)}
        </div>
    )
}
export default RatingDisplay;