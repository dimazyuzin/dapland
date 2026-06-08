import { Icon } from "../Icon";
import styles from "./NavBar.module.css";

export type NavTab = "court" | "community" | "add" | "hall" | "profile";

export interface NavBarProps {
  active?: NavTab;
  onTabChange?: (tab: NavTab) => void;
}

const tabs: { id: NavTab; icon: React.ComponentProps<typeof Icon>["name"] }[] = [
  { id: "court", icon: "ball" },
  { id: "community", icon: "discover" },
  { id: "add", icon: "add" },
  { id: "hall", icon: "hall" },
  { id: "profile", icon: "profile" },
];

export function NavBar({ active = "court", onTabChange }: NavBarProps) {
  return (
    <nav className={styles.nav}>
      {tabs.map(({ id, icon }) => {
        const isAdd = id === "add";
        const isActive = active === id;

        return (
          <button
            key={id}
            className={`${styles.tab} ${isAdd ? styles.tabAdd : ""} ${isActive ? styles.tabActive : ""}`}
            onClick={() => onTabChange?.(id)}
            aria-current={isActive ? "page" : undefined}
          >
            <span className={`${styles.iconWrap} ${isAdd ? styles.iconWrapAdd : ""}`}>
              <Icon
                name={icon}
                size={isAdd ? 36 : 24}
                color="#fff"
              />
            </span>
          </button>
        );
      })}
    </nav>
  );
}
