import styles from "./HeaderMenu.module.css";
import NavLink from "../NavLink/NavLink";

interface HeaderMenuProps {
  isOpenMenu: boolean
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ isOpenMenu }: HeaderMenuProps) => {
  const menuWrapperStyle = `${styles.menu_wrapper} ${isOpenMenu ? styles.openMenu : ""} `
  return (
    <nav className={menuWrapperStyle}>
      <ul className={styles.menu_list}>
        <li className={styles.menu_item}>
          <NavLink href="#">Про нас</NavLink>
        </li>
        <li className={styles.menu_item} >
          <NavLink href="#">Наукова діяльність</NavLink>
        </li>
        <li className={styles.menu_item} >
          <NavLink href="#">Дистанційне розмінування</NavLink>
        </li>
        <li className={styles.menu_item} >
          <NavLink href="#">Контакти</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderMenu;
