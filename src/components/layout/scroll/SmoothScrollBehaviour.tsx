// components/SmoothScrollProvider.tsx
'use client';

import { useEffect, useRef } from 'react';

interface Props {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Dynamically import locomotive-scroll on client only
    let scroll: any;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      scroll = new LocomotiveScroll({
        el: scrollRef.current!,
        smooth: true,
        lerp: 0.08,
        multiplier: 1,
      });
    })();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
