import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { AboutPage } from "../components/AboutPage/AboutPage";
import { PageLayout } from "../components/PageLayout";

export default function About() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} cartList={cartList}>
      <AboutPage currentTheme={currentTheme} />
    </PageLayout>
  );
}
