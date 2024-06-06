import { useState } from "react";
import s from "./../TovarPage.module.css";
import Image from "next/image";

export function OtherCovers({ tovar }) {
  // Обложки товара
  const thisCovers = tovar.img;
  const coversArray = Object.entries(thisCovers).slice(1);
  const displayCovers = coversArray.map(([key, value]) => (
    <Cover key={key} title={key} img={value} />
  ));

  return (
    <div className={s.otherCovers}>
      <h2 className={s.tittle}>Other covers</h2>
      <div className={s.otherCovers_container}>{displayCovers}</div>
    </div>
  );
}

function Cover({ img, title, key }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div
      className={isFullScreen ? s.fullScreenBg : ""}
      onClick={toggleFullScreen}
    >
      <Image
        className={`${s.otherCover} ${isFullScreen ? s.fullScreenCover : ""}`}
        key={key}
        src={img}
        title={isFullScreen ? '' : title}
        width={isFullScreen ? 520 : 220}
        height={isFullScreen ? 520 : 220}
      />
    </div>
  );
}
