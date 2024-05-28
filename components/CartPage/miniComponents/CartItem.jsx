import { useContext } from "react";
import s from "./../CartPage.module.css";
import Image from "next/image";
import { AppContext } from "../../../contexts/AppContext";

export function CartItem(item) {
  const { cartList, setCartList } = useContext(AppContext);
  const handleCartItemDel = (e) => {
    let itemId = e.target.id.slice(4);
    setCartList(cartList.filter((el) => el.id != itemId));
  };

  return (
    <div className={s.korzinaItem} key={item.item.id}>
      <div className={s.korzina_tovar_image_div}>
        <Image
          src={item.item.img}
          alt="tovar"
          className={s.korzina_tovar_image}
          width={120}
          height={120}
        />
      </div>
      <h3 className={s.korzina_tovar_title}>{item.item.title}</h3>
      <h4 className={s.korzina_tovar_description}>{item.item.description}</h4>
      <h4 className={s.korzina_tovar_price}>{item.item.price}$</h4>
      <button
        className={s.korzina_tovar_del}
        id={`btn_${item.item.id}`}
        onClick={handleCartItemDel}
      >
        &times;
      </button>
    </div>
  );
}
