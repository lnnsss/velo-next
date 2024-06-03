import s from "./../TovarPage.module.css";

export function Description({ tovar }) {
  // Треклист товара
  const thisDescription = tovar.description;
  const displayDescription = thisDescription.map((el) => (
    <Paragraph paragraph={el} />
  ));

  return (
    <div className={s.description}>
      <h2 className={s.tittle}>О релизе</h2>
      <div className={s.description_container}>{displayDescription}</div>
    </div>
  );
}

function Paragraph({ paragraph }) {
  return <p>{paragraph}</p>;
}
