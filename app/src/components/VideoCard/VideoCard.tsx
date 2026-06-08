import { useEffect, useRef } from "react";
import { VideoInfo } from "../VideoInfo";
import styles from "./VideoCard.module.css";

export interface VideoCardProps {
  src: string;
  isActive: boolean;
  nickname?: string;
  comment?: string;
  trackName?: string;
  artistName?: string;
  userpic?: string;
}

export function VideoCard({
  src,
  isActive,
  nickname = "@player",
  comment = "Amazing shot! #basketball #dunk",
  trackName = "Track Name",
  artistName = "Artist",
  userpic,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div className={styles.card}>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={styles.video}
      />
      <VideoInfo
        nickname={nickname}
        comment={comment}
        trackName={trackName}
        artistName={artistName}
        userpic={userpic}
      />
    </div>
  );
}
