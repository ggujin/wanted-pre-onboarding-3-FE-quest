import { Layout } from "../../components/Layout/Layout";

import styles from "./Page.module.scss";

export function PageC() {
  return (
    <Layout>
      <div className={styles.wrapper}>This is Page C!</div>
    </Layout>
  );
}
