import { useEffect, useRef } from "react";
import styles from "./VideoCard.module.css";

export interface VideoCardProps {
  src: string;
  isActive: boolean;
}

export function VideoCard({ src, isActive }: VideoCardProps) {
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
    </div>
  );
}
