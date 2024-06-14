import s from "./TovarPage.module.css";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { TovarHeader } from "./miniComponents/TovarHeader";
import { Tracklist } from "./miniComponents/Tracklist";
import { Description } from "./miniComponents/Description";
import { MoreFrom } from "./miniComponents/MoreFrom";
import { handleAddToCart } from "../../utils";
import { OtherCovers } from "./miniComponents/OtherCovers";

export function TovarPage({ currentTheme, tovar }) {
  const { cartList, setCartList } = useContext(AppContext);
  const { finalTovarList } = useContext(AppContext);
  const id = tovar.id,
    cover = tovar.img.cover,
    title = tovar.title,
    artist = tovar.artist,
    discountPrice = tovar.discountPrice,
    price = tovar.price;

  // остальные релизы этого исполнителя(ей) на сайте
  const moreAlbums = finalTovarList.filter(
    (el) => artist.some((a) => el.artist.includes(a)) && el.title !== title
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
          <MoreFrom artist={artist} moreAlbums={moreAlbums} />
        </div>
      </div>
    </div>
  );
}
