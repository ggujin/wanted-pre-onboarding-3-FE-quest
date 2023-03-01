import { Header } from "./Header";
import { Menubar } from "./Menubar";

import styles from "./Layout.module.scss";

export function Layout(props: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.menu}>
        <Menubar />
        <main>{props.children}</main>
      </div>
    </div>
  );
}
