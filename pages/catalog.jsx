import { CatalogPage } from "../components/CatalogPage/CatalogPage";
import { PageLayout } from "../components/PageLayout";
import { useContext } from 'react';
import { AppContext } from "../contexts/AppContext";

export default function Catalog() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);

  return (
    <PageLayout currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}>
      <CatalogPage currentTheme={currentTheme} />
    </PageLayout>
  );
}
