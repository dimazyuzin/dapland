import { Button } from "../Button";
import { Icon } from "../Icon";
import styles from "./VideoInfo.module.css";

export interface VideoInfoProps {
  userpic?: string;
  nickname: string;
  comment: string;
  trackName: string;
  artistName: string;
  opacity?: number;
  coverUrl?: string;
  onFollow?: () => void;
}

export function VideoInfo({
  userpic,
  nickname,
  comment,
  trackName,
  artistName,
  coverUrl,
  onFollow,
  opacity = 1,
}: VideoInfoProps) {
  return (
    <div className={styles.info} style={{ opacity }}>
      {/* Left: user + comment */}
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <div className={styles.userpic}>
            {userpic && <img src={userpic} alt={nickname} className={styles.userpicImg} />}
          </div>
          <span className={styles.nickname}>{nickname}</span>
          <Button label="Follow" onClick={onFollow} />
        </div>
        <div className={styles.comment}>
          <p className={styles.commentText}>{comment}</p>
        </div>
      </div>

      {/* Right: music */}
      <div className={styles.music}>
        <div className={styles.musicInfo}>
          <span className={styles.track}>{trackName}</span>
          <span className={styles.artist}>{artistName}</span>
        </div>
        <div className={styles.cover}>
          {coverUrl
            ? <img src={coverUrl} alt={trackName} className={styles.coverImg} />
            : <Icon name="flash" size={16} color="#fff" />
          }
        </div>
      </div>
    </div>
  );
}
