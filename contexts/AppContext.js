import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [tovarList, setTovarList] = useState([
    {
      id: 1,
      title: "test drive: archive",
      description: "LILDRUGHILL",
      price: 25,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fcf79a509e5d49e423cb000258fd69ccf.1000x1000x1.png",
      lang: "Ru",
    },
    {
      id: 2,
      title: "PHYSICAL PAIN",
      description: "LOVV66",
      price: 20,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F61db3378a0c179f5a3ef0c8ac90ae0ea.1000x1000x1.png",
      lang: "Ru",
    },
    {
      id: 3,
      title: "DAMN.",
      description: "Kendrick Lamar",
      price: 50,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Ff3f77222e1b615e0a10354ea6282ff22.1000x1000x1.png",
      lang: "En",
    },
    {
      id: 4,
      title: "WILD EA$T",
      description: "SALUKI",
      price: 50,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fb487fcefdace88d0cf74cfc770cd36ae.1000x1000x1.png",
      lang: "Ru",
    },
    {
      id: 5,
      title: "Life of a DON",
      description: "Don Toliver",
      price: 30,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F4001a0283899911145eb13d3857b8cb3.1000x1000x1.png",
      lang: "En",
    },
    {
      id: 6,
      title: "KRISTINA",
      description: "LIL KRYSTALLL",
      price: 30,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F711e4a65113312a86fe551ffcbb34b1b.1000x1000x1.png",
      lang: "Ru",
    },
    {
      id: 7,
      title: "Sosa Muzik",
      description: "Платина",
      price: 30,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F6fa2a1df192bb6b8deee5c45bef2188e.1000x1000x1.png",
      lang: "Ru",
    },
    {
      id: 8,
      title: "Certified Lover Boy",
      description: "Drake",
      price: 35,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Ffa02d8bc4c7ee74b5a1408c2be032fea.1000x1000x1.png",
      lang: "En",
    },
    {
      id: 9,
      title: "All Babies Fly",
      description: "LILDRUGHILL",
      price: 30,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F887904ba378e1843164a6a9aa0096136.1000x1000x1.png",
      lang: "Ru",
    },
    {
      id: 10,
      title: "Tsukuyomi Dream",
      description: "ROCKET",
      price: 20,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F909b5b9875c5ab3e44b1f0d04c67bf37.1000x1000x1.png",
      lang: "Ru",
    },
    {
      id: 11,
      title: "Heroes & Villains",
      description: "Metro Boomin",
      price: 50,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F38a14946958b6dd834a697c217d89488.1000x1000x1.jpg",
      lang: "En",
    },
    {
      id: 12,
      title: "SUPERSTAR! (Deluxe)",
      description: "Dina Ayada",
      price: 30,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F4b8dd2659fda75bff4e1483463247e3c.1000x1000x1.png",
      lang: "En",
    },
    {
      id: 13,
      title: "PHILARMONIA",
      description: "PHARAOH",
      price: 50,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fabf929ba95ac8de8f8fd67f6e6580611.1000x1000x1.png",
      lang: "Ru",
    },
    {
      id: 14,
      title: "23",
      description: "Central Cee",
      price: 35,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2Fe2e71c4727c43b794627d6f6e31b603a.1000x1000x1.png",
      lang: "En",
    },
    {
      id: 15,
      title: "AA LANGUAGE",
      description: "aarne",
      price: 40,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F977075534279f0726fac84beebeb9ccb.1000x1000x1.png",
      lang: "Ru",
    },
    {
      id: 16,
      title: "PLAYERS CLUB 2",
      description: "OBLADAET",
      price: 30,
      img: "https://t2.genius.com/unsafe/855x0/https%3A%2F%2Fimages.genius.com%2F89d85810150a9bf1acd23ffaa149a5e8.1000x1000x1.png",
      lang: "Ru",
    },
  ]);

  return (
    <AppContext.Provider
      value={{ currentTheme, setCurrentTheme, activeFilter, setActiveFilter, tovarList, setTovarList }}
    >
      {children}
    </AppContext.Provider>
  );
};
