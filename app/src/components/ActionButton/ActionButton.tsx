import { Icon, type IconName } from "../Icon";
import styles from "./ActionButton.module.css";

export interface ActionButtonProps {
  icon: IconName;
  label?: string | number;
  onClick?: () => void;
}

export function ActionButton({ icon, label, onClick }: ActionButtonProps) {
  const hasLabel = label !== undefined && label !== null && label !== "";
  return (
    <button
      className={`${styles.btn} ${!hasLabel ? styles.btnIconOnly : ""}`}
      onClick={onClick}
    >
      <span className={styles.iconWrap}>
        <Icon name={icon} size={32} color="#fff" />
      </span>
      {hasLabel && (
        <span className={styles.label}>{label}</span>
      )}
    </button>
  );
}
