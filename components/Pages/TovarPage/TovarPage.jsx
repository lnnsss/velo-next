import s from "./TovarPage.module.css";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { TovarHeader } from "./miniComponents/TovarHeader";
import { Tracklist } from "./miniComponents/Tracklist";
import { Description } from "./miniComponents/Description";
import { OtherCovers } from "./miniComponents/OtherCovers";
import { MoreFrom } from "./miniComponents/MoreFrom";
import { handleAddToCart } from "../../utils";

export function TovarPage({ currentTheme, tovar }) {
  const { cartList, setCartList } = useContext(AppContext);
  const { finalTovarList } = useContext(AppContext);
  const id = tovar.id,
    cover = tovar.img.cover,
    title = tovar.title,
    artist = tovar.artist,
    discountPrice = tovar.discountPrice,
    price = tovar.price;

  // остальные релизами этого исполнителя на сайте
  const moreAlbums = finalTovarList.filter(
    (el) => artist.some(a => el.artist.includes(a)) && el.title !== title
  );

  // Добавление в корзину
  const handleAddToCartLocal = (e) => {
    handleAddToCart(
      cartList,
      setCartList,
      id,
      cover,
      title,
      artist,
      price,
      discountPrice
    );
  };

  return (
    <div className={`${s.tovarPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <TovarHeader tovar={tovar} handleAddToCart={handleAddToCartLocal} />
        <div className={`${s.pa1_container} ${s.grid_container}`}>
          <Tracklist tovar={tovar} />
          <Description tovar={tovar} />
          <OtherCovers tovar={tovar} />
          {moreAlbums.length ? (
            <MoreFrom artist={artist} moreAlbums={moreAlbums} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
