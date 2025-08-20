import { useState } from 'react';

interface Props { images: string[]; }
export default function ScreenshotCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);
  return (
    <div className="relative" aria-roledescription="carousel">
      <img src={images[index]} alt="" className="w-full" />
      <button aria-label="Previous" onClick={prev} className="absolute left-2 top-1/2">◀</button>
      <button aria-label="Next" onClick={next} className="absolute right-2 top-1/2">▶</button>
    </div>
  );
}
