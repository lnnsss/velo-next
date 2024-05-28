import Image from "next/image";
import s from "./../CatalogPage.module.css";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

export function TovarCard(item) {
  const { tovarList, setTovarList } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  const handleAddToCard = (e) => {
    let tovarId = Number(e.target.id.slice(4));
    let newItem = tovarList.find((el) => el.id === tovarId);
    setCartList(cartList.concat([newItem]));
    console.log(cartList);
  };

  return (
    <div
      className={`${s.tovar} ${item.item.lang}`}
      id={`item_${item.item.id}`}
      key={item.item.id}
    >
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
      <button
        className={s.tovar_btn}
        id={`btn_${item.item.id}`}
        onClick={handleAddToCard}
      >
        В корзину
      </button>
    </div>
  );
}
