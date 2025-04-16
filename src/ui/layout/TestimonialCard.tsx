import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";

type TestimonialCardProps = {
  index: number;
};

function TestimonialCard({ index }: TestimonialCardProps) {
  return (
    <div className="w-[300px] flex flex-col justify-center items-center gap-6 rounded-lg shadow-md bg-white !p-4 sm:w-[535px] sm:flex-row">
      <img
        src={testimonials[index].image}
        alt={testimonials[index].name}
        className="w-[122px] h-[122px] rounded-full"
      />
      <div className="flex flex-col gap-3 items-center sm:items-start">
        <div className="text-center sm:text-left">
          <h3 className="text-[var(--color-font-black)] font-bold text-lg !mb-2">
            {testimonials[index].name}
          </h3>
          <p className="font-medium text-sm text-black/70 line-clamp-4 sm:line-clamp-3">
            {testimonials[index].content}
          </p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              fill={i < testimonials[index].rating ? "#FFA629" : "#D1D5DB"}
              color={i < testimonials[index].rating ? "#FFA629" : "#D1D5DB"}
              size={15}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
