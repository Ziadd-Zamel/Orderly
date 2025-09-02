import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const customerReviews = [
  {
    id: 2,
    name: "Mohamed Hassan",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "Amazing food quality and excellent customer service. The staff is very friendly and the atmosphere is welcoming. Highly recommended!",
    timeAgo: "8 months ago",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    rating: 4,
    review:
      "Great variety of sandwiches with fresh ingredients. The prices are reasonable and the location is convenient. Will definitely come back!",
    timeAgo: "6 months ago",
  },
  {
    id: 4,
    name: "Ahmed Mahmoud",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "Best sandwich place in the area! The bread is always fresh and the fillings are generous. Fast service and clean environment.",
    timeAgo: "5 months ago",
  },
  {
    id: 5,
    name: "Fatima Al-Zahra",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
    rating: 4,
    review:
      "Good food and nice presentation. The staff is helpful and the delivery service is reliable. Prices could be a bit better but overall satisfied.",
    timeAgo: "3 months ago",
  },
  {
    id: 6,
    name: "Omar Khaled",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    rating: 5,
    review:
      "Exceptional taste and quality! The sandwiches are made with care and attention to detail. Great value for money and excellent service.",
    timeAgo: "2 months ago",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="mb-4 flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            `size-4`,
            index < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200",
          )}
        />
      ))}
    </div>
  );
};

export default function CustomersCarousel() {
  const t = useTranslations();

  return (
    <div className="relative bg-gray-50 py-16">
      <h3 className="text-center text-3xl font-medium text-zinc-800">{t("happy-customers")}</h3>
      <div className="box-container">
        <Carousel
          className="w-full"
          opts={{
            align: "center",
          }}
        >
          <CarouselContent className="w-full cursor-grab gap-4 px-5 py-20">
            {customerReviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="relative flex h-full min-h-96 flex-col items-center rounded-tl-[80px] rounded-tr-4xl rounded-br-[80px] rounded-bl-4xl bg-white px-5 pt-24 pb-8 text-center shadow-md xl:px-10 2xl:px-20">
                  {/* Customer Avatar */}
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={100}
                    height={100}
                    className="absolute -top-12 rounded-full border-4 border-gray-100"
                  />

                  {/* Star Rating */}
                  <StarRating rating={review.rating} />

                  {/* Review Text */}
                  <p className="mt-6 flex-grow leading-relaxed text-gray-600">{review.review}</p>

                  {/* Customer Name and Time */}
                  <div className="mt-auto">
                    <h3 className="font-semibold text-gray-800">{review.name}</h3>
                    <p className="mt-2 text-sm text-gray-400">{review.timeAgo}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
