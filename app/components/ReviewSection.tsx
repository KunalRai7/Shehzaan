import React from 'react';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from 'next/image';

const reviews = [
  {
    name: "Rajesh",
    username: "@rajesh_k",
    body: "Absolutely stunning work! The attention to detail is impeccable.",
    img: "https://avatar.vercel.sh/rajesh",
  },
  {
    name: "Priya",
    username: "@priya_sharma",
    body: "बहुत ही शानदार डिज़ाइन! मेरे घर को एकदम नया रूप मिल गया।",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Amit",
    username: "@amit_patel",
    body: "The team's creativity and professionalism are unmatched. Highly recommended!",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Neha",
    username: "@neha_g",
    body: "इंटीरियर डिज़ाइन में परफेक्शन का दूसरा नाम। बहुत खूब!",
    img: "https://avatar.vercel.sh/neha",
  },
  {
    name: "Vikram",
    username: "@vikram_s",
    body: "Exceeded all my expectations. The space feels so much more open and inviting now.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Anita",
    username: "@anita_r",
    body: "आपके काम से मेरा घर सपनों का घर बन गया है। धन्यवाद!",
    img: "https://avatar.vercel.sh/anita",
  },
  {
    name: "Sanjay",
    username: "@sanjay_m",
    body: "Incredible transformation of our office space. It's boosted team morale significantly!",
    img: "https://avatar.vercel.sh/sanjay",
  },
  {
    name: "Meera",
    username: "@meera_k",
    body: "डिज़ाइन और फंक्शनैलिटी का परफेक्ट बैलेंस। वाकई कमाल है!",
    img: "https://avatar.vercel.sh/meera",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure className={cn(
      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 mx-4",
      "bg-background shadow-md hover:shadow-lg transition-shadow duration-300",
      "dark:border-neutral-700"
    )}>
      <div className="flex flex-row items-center gap-2">
        <div className="relative w-8 h-8">
          <Image 
            className="rounded-full" 
            src={img} 
            alt={`${name}'s avatar`}
            width={32}
            height={32}
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-neutral-800 dark:text-white font-montserrat">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 font-montserrat">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-neutral-700 dark:text-neutral-300 font-montserrat">{body}</blockquote>
    </figure>
  );
};

export default function ReviewSection() {
  return (
    <section className="w-full py-5 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-foreground mb-6 font-montserrat text-center">What Our Clients Say</h2>
        <div className="relative h-[400px] w-full overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s] mb-8">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background to-transparent dark:from-neutral-900"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background to-transparent dark:from-neutral-900"></div>
        </div>
      </div>
    </section>
  );
}