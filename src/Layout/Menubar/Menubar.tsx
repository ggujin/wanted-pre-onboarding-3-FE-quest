import styles from "./Menubar.module.scss";

export function Menubar() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li>pageA</li>
        <li>pageB</li>
      </ul>
    </div>
  );
}
