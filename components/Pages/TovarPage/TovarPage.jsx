import Image from "next/image";
import s from "./TovarPage.module.css";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

export function TovarPage({ currentTheme, tovar }) {
  const { cartList, setCartList } = useContext(AppContext);

  const handleAddToCart = () => {
    let newTovar = {...tovar};
    setCartList(cartList.concat([newTovar]));
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
