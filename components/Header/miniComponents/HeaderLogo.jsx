import { Link } from "react-router-dom";
import s from "./../Header.module.css";

export function HeaderLogo() {
  return (
    <Link to="/" className={s.header_logo}>
      &#9733;-&#9733;
    </Link>
  );
}
