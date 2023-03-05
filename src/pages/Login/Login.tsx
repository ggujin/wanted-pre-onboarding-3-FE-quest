import styles from "./Login.module.scss";

export function Login() {
  return (
    <div className={styles.wrapper}>
      <h2>Login</h2>
      <div className={styles.formItem}>
        <input type="text" placeholder="아이디를 입력해주세요." />
      </div>
      <div className={styles.formItem}>
        <input type="password" placeholder="비밀번호를 입력해주세요." />
      </div>
      <div className={styles.formItem}>
        <button>Login</button>
      </div>
    </div>
  );
}
