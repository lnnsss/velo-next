import Image from "next/image";
import s from "./../CatalogPage.module.css";
import { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import Link from "next/link";

export function TovarCard(item) {
  const { tovarList, setTovarList } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

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
      existingCartItem.totalPrice = existingCartItem.price * existingCartItem.count;
    } else {
      // Add the new item to the cart
      setCartList([...cartList, newCartItem]);
    }
    console.log(cartList);
  };

  return (
    <Link href={`/catalog/${item.item.id}`}>
      <div
        className={`${s.tovar} ${item.item.lang}`}
        id={`item_${item.item.id}`}
        key={item.item.id}
      >
        <Image
          src={item.item.img.cover}
          alt={item.item.title}
          className={s.tovar_image}
          width={240}
          height={240}
        />
        <h4 className={s.tovar_title}>{item.item.title}</h4>
        <span className={s.tovar_artist}>{item.item.artist}</span>
        <span className={s.tovar_price}>{item.item.price}$</span>
        <button
          className={s.tovar_btn}
          id={`btn_${item.item.id}`}
          onClick={handleAddToCart}
        >
          В корзину
        </button>
      </div>
    </Link>
  );
}
