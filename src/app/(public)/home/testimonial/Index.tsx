'use client';

import Image from 'next/image';
import { useEffect, useCallback, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    name: 'Salman Shaikh',
    course: 'Software Developer',
    image: '/images/students/riya.jpg',
    quote:
      'Joining this institute was the best decision. The personal attention and doubt-clearing sessions helped me crack NEET with confidence.',
  },
  {
    name: 'Jayant Pawar',
    course: 'Full Stack Developer',
    image: '/images/students/aditya.jpg',
    quote:
      'The mock tests and concept clarity made all the difference. Thank you for the constant motivation and expert mentorship!',
  },
  {
    name: 'Mayur Dhage',
    course: 'Software Developer',
    image: '/images/students/priya.jpg',
    quote:
      'I improved a lot in Math and Science after joining. The teachers explain concepts so clearly, and I love the practice material!',
  },
  {
    name: 'Mahesh Popale',
    course: 'Software Developer',
    image: '/images/students/priya.jpg',
    quote:
      'Amazing content and teachers. Helped me a lot in shaping my career!',
  },
  {
    name: 'Neel Rawat',
    course: 'Front End Developer',
    image: '/images/students/priya.jpg',
    quote:
      'The support system here is top-notch. Always motivating!',
  },
  {
    name: 'Jay Shah',
    course: 'Application Developer',
    image: '/images/students/priya.jpg',
    quote:
      'Great platform for building technical knowledge and confidence.',
  },
  {
    name: 'Mahesh Sutar',
    course: 'Full Stack Developer',
    image: '/images/students/priya.jpg',
    quote:
      'I love the real-world approach in their training. Very effective!',
  },
  {
    name: 'Sada Shiva',
    course: 'Full Stack Developer',
    image: '/images/students/priya.jpg',
    quote:
      'Best decision ever! My confidence and skills grew immensely.',
  },
  {
    name: 'Manish Jathar',
    course: 'Full Stack Developer',
    image: '/images/students/priya.jpg',
    quote:
      'The mentors are always ready to help. Great environment to learn.',
  },
  {
    name: 'Pratik Pawar',
    course: 'Full Stack Developer',
    image: '/images/students/priya.jpg',
    quote:
      'Practical teaching style and helpful mock tests!',
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0); // Loop to start
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    setSelectedIndex(emblaApi.selectedScrollSnap());

    autoplayRef.current = setInterval(autoplay, 4000); // 4 seconds interval

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, autoplay]);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          What Our Students Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Hear from our successful students who turned their dreams into reality.
        </p>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%] px-4 transition-transform"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg max-w-sm mx-auto h-full flex flex-col justify-between">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t.course}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base italic">&ldquo;{t.quote}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                selectedIndex === idx
                  ? 'bg-blue-600'
                  : 'bg-gray-400 hover:bg-blue-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
