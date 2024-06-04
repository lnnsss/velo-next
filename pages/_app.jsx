import clsx from "clsx";
import "../styles/global.css";
import { AppContext, AppProvider } from "../contexts/AppContext";
import Head from "next/head";
import { MemoryRouter } from "react-router-dom";
import { PopUp } from "../components/uikit/PopUp/PopUp";
import { useContext, useState } from "react";
import { RegPopUp } from "../components/uikit/PopUp/miniComponents/RegPopUp";
import { LogPopUp } from "../components/uikit/PopUp/miniComponents/LogPopUp";

export default function App({ Component, pageProps }) {

  // Попапы (модалки)
  const [popupActive, setPopupActive] = useState(false);
  const [regPopupActive, setRegPopupActive] = useState(false);
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
    <MemoryRouter>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <div className={clsx("text-slate-900")}>
          <div
            className={clsx(
              popupActive &&
                "fixed left-0 top-0 w-full h-full overflow-hidden select-none	 blur-[3px] filter -webkit-filter-[blur(3px)] -moz-filter-[blur(3px)] -o-filter-[blur(3px)] -ms-filter-[blur(3px)]"
            )}
            onClick={() => {
              handlePopupClose();
            }}
          >
            <Component {...pageProps} />
          </div>
          <div id="modals">
            {popupActive && (
              <PopUp>
                {regPopupActive && <RegPopUp handleToLog={handleToLog} />}
                {logPopupActive && <LogPopUp handleToReg={handleToReg} />}
              </PopUp>
            )}
          </div>
        </div>
      </AppProvider>
    </MemoryRouter>
  );
}
