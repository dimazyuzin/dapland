import styles from "./Button.module.css";

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

export function Button({ label = "Follow", onClick }: ButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {label}
    </button>
  );
}
