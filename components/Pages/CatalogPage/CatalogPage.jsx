import s from "./CatalogPage.module.css";
import { TovarCard } from "./miniComponents/TovarCard";
import { Filter } from "./miniComponents/Filter";

const filterList = ["All", "Ru", "En", "< 30$", "> 30$"];

export function CatalogPage({
  currentTheme,
  activeFilter,
  setActiveFilter,
  tovarList,
}) {
  const displayFilterList = filterList.map((el) => (
    <Filter
      children={el}
      activeFilter={activeFilter}
      setActiveFilter={setActiveFilter}
    />
  ));
  const displayTovarList =
    activeFilter === "Ru" || activeFilter === "En"
      ? tovarList
          .filter((el) => el.lang === activeFilter || activeFilter === "All")
          .map((item) => <TovarCard key={item.id} item={item} />)
      : activeFilter[0] === "<"
      ? tovarList
          .filter((el) => el.price <= 30 || activeFilter === "All")
          .map((item) => <TovarCard key={item.id} item={item} />)
      : tovarList
          .filter((el) => el.price > 30 || activeFilter === "All")
          .map((item) => <TovarCard key={item.id} item={item} />);

  return (
    <div className={`${s.catalogPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <h2 className={`${s.tittle} ${s.leftTxt}`}>Каталог</h2>
          <div className={s.catalog_header}>
            <h2 className={`${s.tittle} ${s.leftTxt}`}>Альбомы</h2>
            <div className={s.filters}>{displayFilterList}</div>
          </div>
          <div className={s.tovars}>{displayTovarList}</div>
        </div>
      </div>
    </div>
  );
}
