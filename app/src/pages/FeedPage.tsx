import { useEffect, useRef, useState } from "react";
import { VideoCard } from "../components/VideoCard";
import styles from "./FeedPage.module.css";

const BASE_VIDEOS = [
  ...Array.from({ length: 14 }, (_, i) => `/videos/${i + 1}.mp4`),
  "/videos/16.mp4",
];

const REPEAT = 6;
const ALL_VIDEOS = Array.from({ length: REPEAT }, () => BASE_VIDEOS).flat();

const VIDEO_DATA = [
  { nickname: "@kyrie.wav",      comment: "That crossover is NASTY 🔥 #anklebreaker #streetball",         trackName: "Babushka Boi",             artistName: "A$AP Rocky",                coverUrl: "/covers/babushka_boi.webp",      userpic: "/avatars/pic1.webp" },
  { nickname: "@court_vizion",  comment: "Bro said catch me if you can 😭 #dunk #basketball",             trackName: "Free Lunch",               artistName: "Isaiah Rashad",             coverUrl: "/covers/free_lunch.webp",        userpic: "/avatars/pic2.webp" },
  { nickname: "@jamal_hoops",   comment: "Top 5 moves I've seen this year no cap 🏀 #skills",            trackName: "New Level (feat. Future)",  artistName: "A$AP Ferg",                 coverUrl: "/covers/new_level.webp",         userpic: "/avatars/pic3.webp", badgeName: "Posterized",  badgeIconBg: "#FF4500" },
  { nickname: "DeShawn Carter", comment: "Playground legend in the making 👑 #streeball #NYC",           trackName: "Keep Your Distance",       artistName: "Ameer Vann",                coverUrl: "/covers/keep_your_distance.webp",userpic: "/avatars/pic4.webp" },
  { nickname: "@iso_king_7",    comment: "Someone give this man a contract already 🔥🏆 #hoops",         trackName: "I Ain't Got Time!",        artistName: "Tyler, The Creator",        coverUrl: "/covers/i_aint_got_time.webp",   userpic: "/avatars/pic5.webp" },
  { nickname: "Tre Williams",   comment: "That mid-range jumper is automatic 💯 #buckets",               trackName: "A-Team",                   artistName: "Travis Scott",              coverUrl: "/covers/a_team.webp",            userpic: "/avatars/pic6.webp", badgeName: "Schooled",    badgeIconBg: "#0055FF", following: true },
  { nickname: "Kofi Mensah",    comment: "Ankle breaker of the century I'm not joking 😤 #basketball",  trackName: "Family Ties",              artistName: "Baby Keem & Kendrick Lamar",coverUrl: "/covers/family_ties.webp",       userpic: "/avatars/pic7.webp" },
  { nickname: "@kyrie.wav",     comment: "Pure skill, no filter 🎯 #shotclock #ballin",                  trackName: "Programs",                 artistName: "Mac Miller",                coverUrl: "/covers/programs.webp",          userpic: "/avatars/pic1.webp" },
  { nickname: "@court_vizion",  comment: "Woke up and chose violence on the court 😂 #dunk #viral",     trackName: "Babushka Boi",             artistName: "A$AP Rocky",                coverUrl: "/covers/babushka_boi.webp",      userpic: "/avatars/pic2.webp" },
  { nickname: "@jamal_hoops",   comment: "She's running the whole court by herself 👏 #womensball",      trackName: "Free Lunch",               artistName: "Isaiah Rashad",             coverUrl: "/covers/free_lunch.webp",        userpic: "/avatars/pic3.webp" },
  { nickname: "DeShawn Carter", comment: "The footwork tho… somebody been watching film 📼 #nba",       trackName: "New Level (feat. Future)",  artistName: "A$AP Ferg",                 coverUrl: "/covers/new_level.webp",         userpic: "/avatars/pic4.webp" },
  { nickname: "@iso_king_7",    comment: "This is what they don't show on SportsCenter 🤫 #streetball",  trackName: "Keep Your Distance",       artistName: "Ameer Vann",                coverUrl: "/covers/keep_your_distance.webp",userpic: "/avatars/pic5.webp", following: true },
  { nickname: "Tre Williams",   comment: "Every single layup was different 🤯 #highlights #hoops",      trackName: "I Ain't Got Time!",        artistName: "Tyler, The Creator",        coverUrl: "/covers/i_aint_got_time.webp",   userpic: "/avatars/pic6.webp", badgeName: "Beast Mode",  badgeIconBg: "#1a7f37" },
  { nickname: "Kofi Mensah",    comment: "Gym rat energy, always 💪 #grind #nextlevel",                  trackName: "A-Team",                   artistName: "Travis Scott",              coverUrl: "/covers/a_team.webp",            userpic: "/avatars/pic7.webp" },
  { nickname: "@kyrie.wav",     comment: "Drop a follow if you want more clips like this 🙏 #ballers",  trackName: "Family Ties",              artistName: "Baby Keem & Kendrick Lamar",coverUrl: "/covers/family_ties.webp",       userpic: "/avatars/pic1.webp" },
];

// Thresholds for smooth opacity tracking
const THRESHOLDS = Array.from({ length: 21 }, (_, i) => i / 20);

export function FeedPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ratios, setRatios] = useState<number[]>(ALL_VIDEOS.map((_, i) => i === 0 ? 1 : 0));
  const dataLen = VIDEO_DATA.length;
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
      {ALL_VIDEOS.map((src, i) => {
        const d = VIDEO_DATA[i % dataLen];
        return (
          <div
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            className={styles.slide}
          >
            <VideoCard
              src={src}
              isActive={i === activeIndex}
              visibility={ratios[i] ?? 0}
              nickname={d.nickname}
              comment={d.comment}
              trackName={d.trackName}
              artistName={d.artistName}
              coverUrl={d.coverUrl}
              userpic={d.userpic}
              defaultFollowing={d.following}
              badgeName={d.badgeName}
              badgeIconBg={d.badgeIconBg}
            />
          </div>
        );
      })}
    </div>
  );
}
