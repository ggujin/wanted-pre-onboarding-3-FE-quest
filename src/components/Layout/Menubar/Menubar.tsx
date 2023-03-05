import { Link } from "react-router-dom";

import { MenubarItem } from "../../MenubarItem/MenubarItem";

import styles from "./Menubar.module.scss";

const menus = [
  { name: "Page A", path: "/" },
  { name: "Page B", path: "/b" },
  { name: "Page C", path: "/c" },
];

export function Menubar() {
  return (
    <div className={styles.wrapper}>
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index} className={styles.link}>
            <MenubarItem name={menu.name} />
          </Link>
        );
      })}
    </div>
  );
}
