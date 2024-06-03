import s from "./../TovarPage.module.css";

export function Tracklist({ tovar }) {
  
  // Треклист товара
  const thisTracklist = tovar.trackList;
  const displayTracks = thisTracklist.map((el) => <Track title={el} />);

  return <div className={s.tracklist}>{displayTracks}</div>;
}

function Track({ title }) {
  return <div className={`${s.track}`}>{title}</div>;
}
