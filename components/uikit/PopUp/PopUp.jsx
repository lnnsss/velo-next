import s from "./PopUp.module.css";

export function PopUp({ children }) {
  return <div className={s.popup}>{children}</div>;
}
