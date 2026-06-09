import { useEffect, useRef } from "react";
import { VideoInfo } from "../VideoInfo";
import { ActionsPanel } from "../ActionsPanel";
import { Badge } from "../Badge";
import styles from "./VideoCard.module.css";

export interface VideoCardProps {
  src: string;
  isActive: boolean;
  preload?: "none" | "metadata" | "auto";
  visibility?: number;
  nickname?: string;
  comment?: string;
  trackName?: string;
  artistName?: string;
  userpic?: string;
  coverUrl?: string;
  defaultFollowing?: boolean;
  badgeName?: string;
  badgeIconBg?: string;
  badgeIconUrl?: string;
}

export function VideoCard({
  src,
  isActive,
  preload = "none",
  visibility = 1,
  nickname = "@player",
  comment = "Amazing shot! #basketball #dunk",
  trackName = "Track Name",
  artistName = "Artist",
  userpic,
  coverUrl,
  defaultFollowing,
  badgeName,
  badgeIconBg,
  badgeIconUrl,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = 0;
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
        preload={preload}
        className={styles.video}
      />
      {badgeName && (
        <div className={styles.badge} style={{ opacity: visibility }}>
          <Badge name={badgeName} iconBg={badgeIconBg} iconUrl={badgeIconUrl} />
        </div>
      )}
      <VideoInfo
        nickname={nickname}
        comment={comment}
        trackName={trackName}
        artistName={artistName}
        userpic={userpic}
        coverUrl={coverUrl}
        defaultFollowing={defaultFollowing}
        opacity={visibility}
      />
      <ActionsPanel opacity={visibility} />
    </div>
  );
}
