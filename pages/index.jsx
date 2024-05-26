import { useState } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { MainPage } from "../components/MainPage/MainPage";
import clsx from "clsx";

export default function HomePage() {
  const [currentTheme, setCurrentTheme] = useState(false);

  return (
    <PageLayout
      header={
        <Header currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      }
      footer={<Footer />}
      currentTheme={currentTheme}
    >
      <MainPage currentTheme={currentTheme} />
    </PageLayout>
  );
}

function PageLayout({ header, children, footer, currentTheme }) {
  return (
    <div
      className={clsx(
        "bg-white min-h-screen duration-500",
        currentTheme && "text-white bg-second-black"
      )}
    >
      {header}
      <main className={clsx(
        "bg-white min-h-screen duration-500",
        currentTheme && "text-white bg-second-black"
      )}>
        {children}
      </main>
      {footer}
    </div>
  );
}
