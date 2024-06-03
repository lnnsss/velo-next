import clsx from "clsx";
import "../styles/global.css";
import { AppProvider } from "../contexts/AppContext";
import Head from "next/head";
import { MemoryRouter } from "react-router-dom";

export default function App({ Component, pageProps }) {
  return (
    <MemoryRouter>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <div className={clsx("text-slate-900")}>
          <Component {...pageProps} />
          <div id="modals"></div>
        </div>
      </AppProvider>
    </MemoryRouter>
  );
}
