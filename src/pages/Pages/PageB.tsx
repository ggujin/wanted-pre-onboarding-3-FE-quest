import { Layout } from "../../components/Layout/Layout";

import styles from "./Page.module.scss";

export function PageB() {
  return (
    <Layout>
      <div className={styles.wrapper}>This is Page B!</div>
    </Layout>
  );
}
