import Image from "next/image";
import s from "./TovarPage.module.css";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

export function TovarPage({ currentTheme, tovar }) {
  const { cartList, setCartList } = useContext(AppContext);
  const { tovarList, setTovarList } = useContext(AppContext);

  const handleAddToCart = (e) => {
    let tovarId = Number(e.target.id.slice(4));
    let newItem = tovarList.find((el) => el.id === tovarId);
    console.log(newItem);
    let newCartItem = {
      id: newItem.id,
      img: newItem.img.cover,
      title: newItem.title,
      artist: newItem.artist,
      price: newItem.price,
      count: 1,
      totalPrice: newItem.price * 1,
    };
    let existingCartItem = cartList.find((el) => el.id === newCartItem.id);

    if (existingCartItem) {
      // Update the count of the existing item
      existingCartItem.count++;
      existingCartItem.totalPrice =
        existingCartItem.price * existingCartItem.count;
    } else {
      // Add the new item to the cart
      setCartList([...cartList, newCartItem]);
    }
    console.log(cartList);
  };

  return (
    <div className={`${s.tovarPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.tovar_header}>
          <div
            className={s.tovar_header_background}
            style={{
              backgroundImage: `url(${tovar.img.cover})`,
            }}
          ></div>
          <div className={s.tovar_header_container}>
            <Image
              className={s.tovar_cover}
              src={tovar.img.cover}
              width={300}
              height={300}
            />
            <div className={s.tovar_header_text}>
              <h2 className={s.tovar_header_title}>{tovar.title}</h2>
              <h2 className={s.tovar_header_artist}>{tovar.artist}</h2>
              <h2 className={s.tovar_header_date}>{tovar.date}</h2>
              <button
                id={`btn_${tovar.id}`}
                className={s.tovar_header_button}
                onClick={handleAddToCart}
              >
                {tovar.price}$
              </button>
            </div>
          </div>
        </div>
        <div className={s.pa1_container}>
          <h2 className={`${s.tittle} ${s.leftTxt}`}>
            {tovar ? tovar.title : "tovar2"}
          </h2>
        </div>
      </div>
    </div>
  );
}
