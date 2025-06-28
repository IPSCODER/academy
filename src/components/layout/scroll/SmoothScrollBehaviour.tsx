'use client';

import { useEffect, useRef } from 'react';
import type LocomotiveScrollType from 'locomotive-scroll';

interface Props {
  children: React.ReactNode;
}

export default function SmoothScrollProvider({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollInstance = useRef<LocomotiveScrollType | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;

      if (scrollRef.current && mounted) {
        scrollInstance.current = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
          lerp: 0.08,
          multiplier: 1,
        });
      }
    })();

    return () => {
      mounted = false;
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
