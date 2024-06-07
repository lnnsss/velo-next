import { useContext } from "react";
import s from "./../CatalogPage.module.css";
import { TovarCard } from "./TovarCard";
import { AppContext } from "../../../../contexts/AppContext";

export function Tovars({ activeFilter, inputValue }) {

  // Скидка на товары
  const { finalTovarList } = useContext(AppContext);

  // Фильтрация товаров
  const filteredTovarList = finalTovarList.filter((el) => {
    let isMatch = true;

    if (inputValue) {
      isMatch =
        (el.title.toLowerCase().includes(inputValue.toLowerCase()) ||
          el.artist.toLowerCase().includes(inputValue.toLowerCase())) &&
        isMatch;
    }

    if (activeFilter === "Ru" || activeFilter === "En") {
      isMatch = el.lang === activeFilter && isMatch;
    }

    if (activeFilter[0] === "<") {
      if (el.discountPrice) {
        isMatch = el.discountPrice <= 30 && isMatch;
      } else {
        isMatch = el.price <= 30 && isMatch;
      }
    } else if (activeFilter[0] === ">") {
      if (el.discountPrice) {
        isMatch = el.discountPrice > 30 && isMatch;
      } else {
        isMatch = el.price > 30 && isMatch;
      }
    }

    return isMatch;
  });

  return (
    <div className={s.tovars_container}>
      {filteredTovarList.length ? (
        <div className={s.tovars}>
          {filteredTovarList.map((item) => (
            <TovarCard
              key={item.id}
              id={item.id}
              lang={item.lang}
              artist={item.artist}
              title={item.title}
              price={item.price}
              withoutPage={item.withoutPage}
              cover={item.img.cover}
              discountPrice={item.discountPrice}
            />
          ))}
        </div>
      ) : (
        <span className={s.isNotItems}>
          Нет товаров, подходящих по условиям
        </span>
      )}
    </div>
  );
}
