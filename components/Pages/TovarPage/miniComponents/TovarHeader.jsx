import s from "./../TovarPage.module.css";
import Image from "next/image";

export function TovarHeader({ tovar, handleAddToCart }) {
  return (
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
  );
}
