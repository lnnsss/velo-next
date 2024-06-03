import s from "./../TovarPage.module.css";

export function About({ tovar }) {
  // Треклист товара
  const thisDescription = tovar.description;
  const displayDescription = thisDescription.map((el) => (
    <Paragraph paragraph={el} />
  ));

  return (
    <div className={s.about}>
      <h2 className={s.tittle}>О релизе</h2>
      <div className={s.about_container}>{displayDescription}</div>
    </div>
  );
}

function Paragraph({ paragraph }) {
  return <p>{paragraph}</p>;
}
