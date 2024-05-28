import { useState } from "react";
import Image from "next/image";
import s from "./Header.module.css";
import Link from "next/link";

import dayTheme from "./images/dayIcon.png";
import nightTheme from "./images/nightIcon.png";

export function Header({ currentTheme, setCurrentTheme, cartList }) {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <header className={s.header}>
      <div className={s.header_container}>
        <div className={s.header_body}>
          <Link href="/" className={s.header_logo}>
            &#9733;-&#9733;
          </Link>
          <div
            className={`${s.header_burger} ${burgerActive && s.active}`}
            onClick={() => setBurgerActive(!burgerActive)}
          >
            <span></span>
          </div>
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
                  {cartList.length ? <div className={s.korzinaCounter}>{cartList.length}</div> : ''}
                </Link>
              </li>
              <li>
                <Link href="/reviews" className={s.header_link}>
                  Отзывы
                </Link>
              </li>
              <li>
                <Link href="/add" className={s.header_link}>
                  Добавить
                </Link>
              </li>
              <li>
                <Link href="/about" className={s.header_link}>
                  О наc
                </Link>
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
        </div>
      </div>
    </header>
  );
}
