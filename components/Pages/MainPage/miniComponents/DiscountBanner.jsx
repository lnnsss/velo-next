import s from "./../MainPage.module.css";
import { discount, priceCondition, langCondition } from "../../../constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export function DiscountBanner() {
  // Таймер
  const [time, setTime] = useState(28800); // 8 * 3600
  const [isRunning, setIsRunning] = useState(true);
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  // Таймер
  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <Link href="/catalog" className={s.banner}>
      <div className={s.banner_container}>
        <span className={s.discountTitle}>
          Скидки
          {priceCondition &&
            ` ${discount}% на любой диск от ${priceCondition}$!`}
          {langCondition && ` ${discount}% на все ${langCondition} альбомы!`}
        </span>
        <span className={s.discountTitle}>
          Поторопитесь! Осталось{" "}
          <span className={s.time}>
            {hours}ч {minutes}м {seconds}сек
          </span>
          !
        </span>
      </div>
    </Link>
  );
}
