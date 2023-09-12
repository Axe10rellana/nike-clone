//assets
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, feedback, rating }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="rounded-full object-cover w-[120px] h-[120px] pointer-events-none"
        src={imgURL}
        alt="Customer"
      />
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <img
          className="object-contain m-0 pointer-events-none"
          src={star}
          alt="rating"
          width={24}
          height={24}
        />
        <p className="text-xl font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
