import clsx from "clsx";
import "../styles/global.css";
import { AppProvider } from "../contexts/AppContext";
import Head from "next/head";
import { MemoryRouter } from "react-router-dom";
import { PopUp } from "../components/uikit/PopUp/PopUp";
import { RegPopUp } from "../components/uikit/PopUp/miniComponents/RegPopUp";
import { LogPopUp } from "../components/uikit/PopUp/miniComponents/LogPopUp";import { useState } from 'react';

export default function App({ Component, pageProps }) {
  // Попапы (модалки)
  const [popupActive, setPopupActive] = useState(true);
  const [regPopupActive, setRegPopupActive] = useState(true);
  const [logPopupActive, setLogPopupActive] = useState(false);

  const handlePopupClose = () => {
    setPopupActive(false);
    setRegPopupActive(false);
    setLogPopupActive(false);
  };

  const handleToReg = () => {
    setRegPopupActive(true);
    setLogPopupActive(false);
  };

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
