import { useEffect, useRef, useState } from "react";
import { VideoCard } from "../components/VideoCard";
import styles from "./FeedPage.module.css";

const ALL_VIDEOS = [
  ...Array.from({ length: 14 }, (_, i) => `/videos/${i + 1}.mp4`),
  "/videos/16.mp4",
];

const TRACKS = [
  { trackName: "Babushka Boi",             artistName: "A$AP Rocky",                   coverUrl: "/covers/babushka_boi.webp" },
  { trackName: "Free Lunch",               artistName: "Isaiah Rashad",                 coverUrl: "/covers/free_lunch.webp" },
  { trackName: "New Level (feat. Future)", artistName: "A$AP Ferg",                     coverUrl: "/covers/new_level.webp" },
  { trackName: "Keep Your Distance",       artistName: "Ameer Vann",                    coverUrl: "/covers/keep_your_distance.webp" },
  { trackName: "I Ain't Got Time!",        artistName: "Tyler, The Creator",            coverUrl: "/covers/i_aint_got_time.webp" },
  { trackName: "A-Team",                   artistName: "Travis Scott",                  coverUrl: "/covers/a_team.webp" },
  { trackName: "Family Ties",              artistName: "Baby Keem & Kendrick Lamar",    coverUrl: "/covers/family_ties.webp" },
  { trackName: "Programs",                 artistName: "Mac Miller",                    coverUrl: "/covers/programs.webp" },
];

// Рандомно распределяем треки по видео (детерминировано — порядок фиксирован)
const VIDEO_DATA = ALL_VIDEOS.map((_, i) => TRACKS[i % TRACKS.length]);

// Thresholds for smooth opacity tracking
const THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20);

export function FeedPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ratios, setRatios] = useState<number[]>(ALL_VIDEOS.map((_, i) => i === 0 ? 1 : 0));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setRatios((prev) => {
          const next = [...prev];
          for (const entry of entries) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              next[index] = entry.intersectionRatio;
              if (entry.intersectionRatio >= 0.6) setActiveIndex(index);
            }
          }
          return next;
        });
      },
      { threshold: THRESHOLDS }
    );

    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.feed}>
      {ALL_VIDEOS.map((src, i) => (
        <div
          key={src}
          ref={(el) => { itemRefs.current[i] = el; }}
          className={styles.slide}
        >
          <VideoCard
            src={src}
            isActive={i === activeIndex}
            visibility={ratios[i] ?? 0}
            trackName={VIDEO_DATA[i].trackName}
            artistName={VIDEO_DATA[i].artistName}
            coverUrl={VIDEO_DATA[i].coverUrl}
          />
        </div>
      ))}
    </div>
  );
}
