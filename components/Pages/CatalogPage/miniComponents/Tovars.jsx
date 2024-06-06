import s from "./../CatalogPage.module.css";
import { TovarCard } from "./TovarCard";

export function Tovars({ activeFilter, inputValue, tovarList }) {
  // Фильтрация товаров
  const filteredTovarList = tovarList.filter((el) => {
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
      isMatch = el.price <= 30 && isMatch;
    } else if (activeFilter[0] === ">") {
      isMatch = el.price > 30 && isMatch;
    }

    return isMatch;
  });

  return (
    <div className={s.tovars_container}>
      {filteredTovarList.length ? (
        <div className={s.tovars}>
          {filteredTovarList.map((item) => (
            <TovarCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <span className={s.isNotItems}>Нет товаров подходящих по условиям</span>
      )}
    </div>
  );
}
