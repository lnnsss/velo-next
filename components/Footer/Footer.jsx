import Image from "next/image";
import s from "./Footer.module.css";

import gh from "./socials/github.png";
import vk from "./socials/vk.png";
import inst from "./socials/inst.png";
import tg from "./socials/tg.png";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer_container}>
        <div className={s.footer_top}>
          <a className={s.footer_logo}>
            Velo
          </a>
          <div className={s.socials}>
            <a target="_blank" href="https://github.com/lnsplayer">
              <Image
                src={gh}
                alt="github"
                className={s.soc}
              />
            </a>
            <a target="_blank" href="https://vk.com/l1lines">
              <Image src={vk} alt="vk" className={s.soc} />
            </a>
            <a target="_blank" href="https://www.instagram.com/@l1lines">
              <Image src={inst} alt="inst" className={s.soc} />
            </a>
            <a target="_blank" href="https://t.me/l1lines">
              <Image src={tg} alt="tg" className={s.soc} />
            </a>
          </div>
        </div>
        <div className={s.footer_bottom}>
          <span>&copy; Все права защищены.</span>
          <a target="_blank" href="mailto:bezborodnikovtimur@gmail.com">
            bezborodnikovtimur@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
