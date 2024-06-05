import s from "./ErrorPage.module.css";
import Image from "next/image";

export function ErrorPage() {
  return (
    <div className={s.error}>
      <Image src="/images/logo.png" width={40} height={40} />
      <h2>Такой страницы у нас нет:(</h2>
      <a href="/" className={s.link}>На главную страницу</a>
    </div>
  );
}
