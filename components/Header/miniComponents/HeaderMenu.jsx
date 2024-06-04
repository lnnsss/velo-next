import s from "./../Header.module.css";
import dayTheme from "./../images/dayIcon.png";
import nightTheme from "./../images/nightIcon.png";
import Image from "next/image";
import Link from "next/link";

export function HeaderMenu({
  currentTheme,
  setCurrentTheme,
  burgerActive,
  cartList,
  cartCounter,
}) {
  return (
    <nav className={`${s.header_menu} ${burgerActive && s.active}`}>
      <ul className={s.header_list}>
        <li>
          <Link href="/catalog" className={s.header_link}>
            Каталог
          </Link>
        </li>
        <li>
          <Link href="/cart" className={s.header_link}>
            Корзина
            {cartList.length ? (
              <div className={s.korzinaCounter}>{cartCounter}</div>
            ) : (
              ""
            )}
          </Link>
        </li>
        <li>
          <Link href="/reviews" className={s.header_link}>
            Отзывы
          </Link>
        </li>
        <li>
          <Link href="/about" className={s.header_link}>
            О наc
          </Link>
        </li>
        <li>
          <Link href="/add" className={s.header_link}>
            Добавить
          </Link>
        </li>
        <li>
          <span
            className={s.header_link}
            onClick={() => {
              handleToReg();
            }}
          >
            Аккаунт
          </span>
        </li>
        <li className={s.header_link} id="themeBtn">
          <Image
            src={currentTheme ? nightTheme : dayTheme}
            alt="theme"
            className={s.header_themeImg}
            onClick={() => setCurrentTheme(!currentTheme)}
          />
        </li>
      </ul>
    </nav>
  );
}
