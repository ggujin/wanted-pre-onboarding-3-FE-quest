import { Layout } from "../../components/Layout/Layout";

import styles from "./Page.module.scss";

export function PageA() {
  return (
    <Layout>
      <div className={styles.wrapper}>This is Page A!</div>
    </Layout>
  );
}
