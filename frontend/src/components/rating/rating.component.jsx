import "./rating.styles.scss";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const Rating = ({ rating, numReviews }) => {

    return (
        <div className="rating-container ">
            <div className="rating-stars-container">
                
                {(rating < 0.5) ? <BsStar /> : (rating < 1) ? <BsStarHalf /> : <BsStarFill />}
                {(rating < 1.5) ? <BsStar /> : (rating < 2) ? <BsStarHalf /> : <BsStarFill />}
                {(rating < 2.5) ? <BsStar /> : (rating < 3) ? <BsStarHalf /> : <BsStarFill />}
                {(rating < 3.5) ? <BsStar /> : (rating < 4) ? <BsStarHalf /> : <BsStarFill />}
                {(rating < 4.5) ? <BsStar /> : (rating < 5) ? <BsStarHalf /> : <BsStarFill />}
            </div>
            <div>
                {(numReviews && numReviews)?`${numReviews} Reviews`:""} 
            </div>
        </div>
    );
}

export default Rating;