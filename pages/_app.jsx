import "../styles/global.css";
import clsx from "clsx";
import { AppProvider } from "../contexts/AppContext";
import Head from "next/head";
import { MemoryRouter } from "react-router-dom";
import { PopUp } from "../components/uikit/PopUp/PopUp";
import { RegPopUp } from "../components/uikit/PopUp/miniComponents/RegPopUp";
import { LogPopUp } from "../components/uikit/PopUp/miniComponents/LogPopUp";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  // Попапы (модалки)
  const [popupActive, setPopupActive] = useState(false);
  const [regPopupActive, setRegPopupActive] = useState(false);
  const [logPopupActive, setLogPopupActive] = useState(false);

  // функия для закрытия модалки
  const handlePopupClose = () => {
    setPopupActive(false);
    setRegPopupActive(false);
    setLogPopupActive(false);
  };

  // функия для перехода модалку регистрации
  const handleToReg = () => {
    setRegPopupActive(true);
    setLogPopupActive(false);
  };

  // функия для перехода модалку входа
  const handleToLog = () => {
    setRegPopupActive(false);
    setLogPopupActive(true);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <MemoryRouter>
          <div className={clsx("text-slate-900")}>
            <Component {...pageProps} />
          </div>
          <div id="modals">
            {popupActive && (
              <PopUp handlePopupClose={handlePopupClose}>
                {regPopupActive && <RegPopUp handleToLog={handleToLog} />}
                {logPopupActive && <LogPopUp handleToReg={handleToReg} />}
              </PopUp>
            )}
          </div>
        </MemoryRouter>
      </AppProvider>
    </>
  );
}
