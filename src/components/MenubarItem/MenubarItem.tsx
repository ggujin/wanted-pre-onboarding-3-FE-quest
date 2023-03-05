import styles from "./MenubarItem.module.scss";

interface MenubarItemProps {
  name: string;
  path?: string;
}

export function MenubarItem({ name }: MenubarItemProps) {
  return (
    <div className={styles.wrapper}>
      <p>{name}</p>
    </div>
  );
}
