import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(e) {
    setRating(e === rating ? 0 : e);
  }
  function handleMouseHover(e) {
    setHover(e);
  }
  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <div className="star-rating" onMouseLeave={handleMouseLeave}>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseOver={() => handleMouseHover(index)}
            size={32}
            color={index <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </div>
  );
}
