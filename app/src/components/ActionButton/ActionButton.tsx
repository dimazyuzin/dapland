import { Icon, type IconName } from "../Icon";
import styles from "./ActionButton.module.css";

export interface ActionButtonProps {
  icon: IconName;
  label?: string | number;
  onClick?: () => void;
}

export function ActionButton({ icon, label, onClick }: ActionButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      <span className={styles.iconWrap}>
        <Icon name={icon} size={32} color="#fff" />
      </span>
      {label !== undefined && (
        <span className={styles.label}>{label}</span>
      )}
    </button>
  );
}
