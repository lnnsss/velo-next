import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import clsx from "clsx";

export function PageLayout({ children, currentTheme, changeTheme }) {
  return (
    <div className={clsx("bg-white min-h-screen")}>
      <Header currentTheme={currentTheme} changeTheme={changeTheme} />
      <main className={clsx("min-h-screen transition duration-500", currentTheme ? "bg-second-black" : "bg-white")}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
