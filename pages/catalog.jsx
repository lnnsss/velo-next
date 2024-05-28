import { CatalogPage } from "../components/CatalogPage/CatalogPage";
import { PageLayout } from "../components/PageLayout";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Catalog() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);
  const { activeFilter, setActiveFilter } = useContext(AppContext);
  const { tovarList, setTovarList } = useContext(AppContext);
  const { cartList, setCartList } = useContext(AppContext);

  return (
    <PageLayout currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} cartList={cartList}>
      <CatalogPage
        currentTheme={currentTheme}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        tovarList={tovarList}
      />
    </PageLayout>
  );
}
