import { ActionButton } from "../ActionButton";
import styles from "./ActionsPanel.module.css";

export interface ActionsPanelProps {
  reboundCount?: string | number;
  shakeLabel?: string;
  hootCount?: string | number;
  shareLabel?: string;
  onRebound?: () => void;
  onShake?: () => void;
  onHoot?: () => void;
  onShare?: () => void;
  onMore?: () => void;
}

export function ActionsPanel({
  reboundCount = "Rebound",
  shakeLabel = "Shake",
  hootCount = "0",
  shareLabel = "Share",
  onRebound,
  onShake,
  onHoot,
  onShare,
  onMore,
}: ActionsPanelProps) {
  return (
    <div className={styles.panel}>
      <ActionButton icon="rebound" label={reboundCount} onClick={onRebound} />
      <ActionButton icon="hoot"    label={shakeLabel}   onClick={onShake} />
      <ActionButton icon="hoot"    label={hootCount}    onClick={onHoot} />
      <ActionButton icon="share"   label={shareLabel}   onClick={onShare} />
      <ActionButton icon="more"                         onClick={onMore} />
    </div>
  );
}
