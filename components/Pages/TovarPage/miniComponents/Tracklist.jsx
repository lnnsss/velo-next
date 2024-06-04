import s from "./../TovarPage.module.css";

export function Tracklist({ tovar }) {
  // Треклист товара
  const thisTracklist = tovar.trackList;
  const displayTracks = thisTracklist.map((el, i) => (
    <Track title={el} numb={i+1} />
  ));

  return (
    <div className={s.tracklist}>
      {displayTracks}
      <div className={s.emptyTrack} />
    </div>
  );
}

function Track({ title, numb }) {
  return (
    <div className={`${s.track}`}>
      <span className={s.trackNumb}>{numb}.</span>
      {title}
    </div>
  );
}
