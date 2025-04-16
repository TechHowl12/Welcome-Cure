import React, { useRef } from "react";
import Slider from "react-slick";
import { TestimonialCard } from "./TestimonialCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/slick-custom.css";

// Testimonial data moved from index.tsx
const testimonials = [
  {
    quote:
      "I met Dr. Shah 6 months ago and my condition has improved greatly since then. I had very stiff joints and was dependent on my parents to do my work. It was Dr. Shah's medicines that helped my condition improve.",
    name: "Kangsha Patel",
    title: "Rheumatoid Arthritis Patient",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d219188da2de96c35ea5989522eb24b1c049649?placeholderIfAbsent=true",
  },
  {
    quote:
      "I had been suffering from a lot of small chronic diseases and it had become an irritating part of my life. I decided to come to the Welcome Cure clinic. I had a fissure at the time and with Dr Jawahar's medicines, I felt much better in just 10-15 days.",
    name: "Akash Sharma",
    title: "Chronic Illness Patient",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d219188da2de96c35ea5989522eb24b1c049649?placeholderIfAbsent=true",
  },
  {
    quote:
      "I was suffering from severe migraine headaches for over 5 years. After trying several treatments without success, I found Welcome Cure. Dr. Shah's personalized approach and natural medicines helped reduce my headaches by 90% in just 2 months.",
    name: "Priya Mehta",
    title: "Migraine Patient",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d219188da2de96c35ea5989522eb24b1c049649?placeholderIfAbsent=true",
  },
  {
    quote:
      "My son had chronic asthma since childhood. We tried conventional treatments but the side effects were concerning. The homeopathic treatment from Welcome Cure has significantly improved his condition with no side effects. He can now play sports without using an inhaler.",
    name: "Rajesh Kumar",
    title: "Parent of Asthma Patient",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d219188da2de96c35ea5989522eb24b1c049649?placeholderIfAbsent=true",
  },
];

export const Testimonials = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 4000,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="w-full max-w-[1280px] mt-[67px] px-4 max-md:max-w-full relative mx-auto">
      <h2 className="text-black text-5xl font-bold mb-10 text-center max-md:text-[40px]">
        Sleepy Success Stories
      </h2>
      
      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="h-full px-2">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </Slider>
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="testimonial-slider-nav-prev absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-[#FFDE30] rounded-full flex items-center justify-center cursor-pointer focus:outline-none hover:bg-[#f0d01f] transition-colors"
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button
          onClick={goToNext}
          className="testimonial-slider-nav-next absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-[#FFDE30] rounded-full flex items-center justify-center cursor-pointer focus:outline-none hover:bg-[#f0d01f] transition-colors"
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}; 