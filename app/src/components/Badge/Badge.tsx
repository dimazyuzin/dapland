import styles from "./Badge.module.css";

export interface BadgeProps {
  name: string;
  iconUrl?: string;
  iconBg?: string;
}

export function Badge({ name, iconUrl, iconBg = "#0000FF" }: BadgeProps) {
  return (
    <div className={styles.badge}>
      <div className={styles.icon} style={{ background: iconBg }}>
        {iconUrl && <img src={iconUrl} alt={name} className={styles.iconImg} />}
      </div>
      <span className={styles.name}>{name}</span>
    </div>
  );
}
