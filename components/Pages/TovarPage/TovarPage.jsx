import s from "./TovarPage.module.css";

export function TovarPage({currentTheme, tovar}) {
  return (
    <div className={`${s.tovarPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <h2 className={`${s.tittle} ${s.leftTxt}`}>{tovar ? tovar.title : "tovar2"}</h2>
        </div>
      </div>
    </div>
  );
}
