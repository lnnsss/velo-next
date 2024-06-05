import "../styles/global.css";
import clsx from "clsx";
import { AppProvider } from "../contexts/AppContext";
import Head from "next/head";
import { MemoryRouter } from "react-router-dom";
import { PopUp } from "../components/uikit/PopUp/PopUp";
import { RegPopUp } from "../components/uikit/PopUp/miniComponents/RegPopUp";
import { LogPopUp } from "../components/uikit/PopUp/miniComponents/LogPopUp";
import { BuyPopUp } from "../components/uikit/PopUp/miniComponents/BuyPopup";
import { usePopupManager } from "../components/usePopupManager";

export default function App({ Component, pageProps }) {
  const {
    popupActive,
    regPopupActive,
    logPopupActive,
    buyPopupActive,
    handlePopupClose,
    handleToReg,
    handleToLog,
  } = usePopupManager();

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
                {buyPopupActive && <BuyPopUp />}
              </PopUp>
            )}
          </div>
        </MemoryRouter>
      </AppProvider>
    </>
  );
}
