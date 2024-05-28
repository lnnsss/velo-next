import s from "./CatalogPage.module.css";
import Image from "next/image";


const filterList = ["All", "Ru", "En", "< 30$", "> 30$"];

export function CatalogPage({ currentTheme, activeFilter, setActiveFilter, tovarList }) {
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

function TovarCard(item) {
  return (
    <div className={`${s.tovar} ${item.item.lang}`} id={`item_${item.item.id}`} key={item.item.id}>
      <Image
        src={item.item.img}
        alt={item.item.title}
        className={s.tovar_image}
        width={240}
        height={240}
      />
      <h4 className={s.tovar_title}>{item.item.title}</h4>
      <span className={s.tovar_description}>{item.item.description}</span>
      <span className={s.tovar_price}>{item.item.price}$</span>
      <button className={s.tovar_btn} id={`m_${item.item.id}`}>
        В корзину
      </button>
    </div>
  );
}

function Filter({ children, activeFilter, setActiveFilter }) {
  return (
    <div
      key={children}
      className={`${s.filter} ${
        activeFilter === children ? `${s.active}` : ""
      }`}
      onClick={() => setActiveFilter(children)}
    >
      {children}
    </div>
  );
}
