import { useState } from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  defaultFollowing?: boolean;
}

export function Button({ defaultFollowing = false }: ButtonProps) {
  const [following, setFollowing] = useState(defaultFollowing);

  return (
    <button
      className={`${styles.btn} ${following ? styles.btnFollowing : ""}`}
      onClick={() => setFollowing((f) => !f)}
    >
      {following ? "Following" : "Follow"}
    </button>
  );
}
