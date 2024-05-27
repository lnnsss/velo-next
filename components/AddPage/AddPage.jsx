import s from "./AddPage.module.css";

export function AddPage({ currentTheme }) {
  return (
    <div className={`${s.addPage} ${currentTheme && `${s.nightTheme}`}`}>
    </div>
  );
}

