import { useEffect, useRef, useState } from "react";
import { VideoCard } from "../components/VideoCard";
import styles from "./FeedPage.module.css";

const VIDEOS = Array.from({ length: 15 }, (_, i) => `/videos/${i + 1}.mp4`)
  .filter((_, i) => i !== 14); // skip missing 15.mp4, use 1-14 + 16

const ALL_VIDEOS = [
  ...Array.from({ length: 14 }, (_, i) => `/videos/${i + 1}.mp4`),
  "/videos/16.mp4",
];

export function FeedPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) setActiveIndex(index);
          }
        }
      },
      { threshold: 0.6 }
    );

    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.feed}>
      {ALL_VIDEOS.map((src, i) => (
        <div
          key={src}
          ref={(el) => { itemRefs.current[i] = el; }}
          className={styles.slide}
        >
          <VideoCard src={src} isActive={i === activeIndex} />
        </div>
      ))}
    </div>
  );
}
