import s from "./CartPage.module.css";
import { useState } from "react";
import { KorzinaItem } from "./miniComponents/KorzinaItem";

export function CartPage({ currentTheme, cartList, setCartList }) {
  const [itogoPriceCounter, setItogoPriceCounter] = useState(0);
  const displayCartList = cartList.map((item) => <KorzinaItem item={item} />);

  return (
    <div className={`${s.cartPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <div className={s.korzinaHeader}>
            <h2 className={s.tittle}>Корзина</h2>
            <button className={s.clearKorzina} onClick={() => setCartList([])}>
              Очистить корзину
            </button>
          </div>
          <div className={s.korzina}>
            {cartList.length ? (
              displayCartList
            ) : (
              <span className={s.pusto}>Пусто</span>
            )}
          </div>
          <div className={`${s.buyFooter} ${s._container}`}>
            <div className={s.buyFooter_left}>
              <span className={s.itogo}>Итого:</span>
              <span className={s.itogoPrice}>{itogoPriceCounter}$</span>
            </div>
            <div className={s.buyFooter_right}>
              <button className={`${s.buyFooter_btn} ${s.buyBtn}`}>
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
