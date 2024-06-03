import s from "./TovarPage.module.css";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { TovarHeader } from "./miniComponents/TovarHeader";
import { Tracklist } from "./miniComponents/Tracklist";
import { About } from "./miniComponents/About";

export function TovarPage({ currentTheme, tovar }) {
  const { cartList, setCartList } = useContext(AppContext);
  const { tovarList } = useContext(AppContext);

  // Функция для добавления товара в корзину
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
      setCartList([...cartList]);
    } else {
      // Add the new item to the cart
      setCartList([...cartList, newCartItem]);
    }
    console.log(cartList);
  };

  return (
    <div className={`${s.tovarPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <TovarHeader tovar={tovar} handleAddToCart={handleAddToCart} />
        <div className={`${s.pa1_container} ${s.grid_container}`}>
          <Tracklist tovar={tovar} />
          <About tovar={tovar} />
        </div>
      </div>
    </div>
  );
}
