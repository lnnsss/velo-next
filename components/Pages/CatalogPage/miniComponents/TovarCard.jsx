import Image from "next/image";
import s from "./../CatalogPage.module.css";
import { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import Link from "next/link";

export function TovarCard({ item }) {
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

    // Счетчик количества товара в шапке
    if (existingCartItem) {
      existingCartItem.count++;
      existingCartItem.totalPrice =
        existingCartItem.price * existingCartItem.count;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, newCartItem]);
    }
    console.log(cartList);
  };

  // Если релиз был добавлен пользователем, то у него не будет своей страницы
  return (
    <div id={`item_${item.id}`} key={item.id} className={s.tovar_wrapper}>
      {item.withoutPage ? (
        <UserTovar item={item} handleAddToCart={handleAddToCart} />
      ) : (
        <BaseTovar item={item} handleAddToCart={handleAddToCart} />
      )}
    </div>
  );
}

function BaseTovar({ item, handleAddToCart }) {
  return (
    <>
      <Link href={`/catalog/${item.id}`} className={`${s.tovar} ${item.lang}`}>
        <Image
          src={item.img.cover}
          alt={item.title}
          className={s.tovar_image}
          width={240}
          height={240}
        />
        <h4 className={s.tovar_title}>{item.title}</h4>
        <span className={s.tovar_artist}>{item.artist}</span>
        <span className={s.tovar_price}>{item.price}$</span>
      </Link>
      <button
        className={s.tovar_btn}
        id={`btn_${item.id}`}
        onClick={handleAddToCart}
      >
        В корзину
      </button>
    </>
  );
}
function UserTovar({ item, handleAddToCart }) {
  return (
    <>
      <div className={`${s.tovar} ${item.lang}`}>
        <Image
          src="https://mywebicons.ru/i/jpg/1db25ba3ca78c326db6600d1a1bd36f7.jpg"
          alt={item.title}
          className={s.tovar_image}
          width={240}
          height={240}
        />
        <h4 className={s.tovar_title}>{item.title}</h4>
        <span className={s.tovar_artist}>{item.artist}</span>
        <span className={s.tovar_price}>{item.price}$</span>
      </div>
      <button
        className={s.tovar_btn}
        id={`btn_${item.id}`}
        onClick={() => {
          alert("Данного товара не существует.");
        }}
      >
        В корзину
      </button>
    </>
  );
}
