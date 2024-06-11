import Image from "next/image";
import s from "./../TovarPage.module.css";
import Link from "next/link";

export function MoreFrom({ artist, moreAlbums }) {
  console.log(moreAlbums);
  const displayMoreAlbums = moreAlbums.map((el) => (
    <MoreAlbumItem id={el.id} cover={el.img.cover} title={el.title} />
  ));

  return (
    <div className={s.moreFrom}>
      <h2 className={s.tittle}>More From {artist}</h2>
      <div className={s.moreFrom_container}>{displayMoreAlbums}</div>
    </div>
  );
}

function MoreAlbumItem({ id, cover, title }) {
  return (
    <Link href={`/catalog/${id}`}>
      <Image key={id} src={cover} title={title} width={220} height={220} />
    </Link>
  );
}
