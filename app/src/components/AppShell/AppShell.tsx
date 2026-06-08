import { useState, type ReactNode } from "react";
import { NavBar, type NavTab } from "../NavBar";
import styles from "./AppShell.module.css";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [activeTab, setActiveTab] = useState<NavTab>("court");

  return (
    <div className={styles.outer}>
      <div className={styles.frame}>
        {children}
        <NavBar active={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}
