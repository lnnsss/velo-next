import { CatalogPage } from "../components/CatalogPage/CatalogPage";
import { PageLayout } from "../components/PageLayout";
import { useThemeState } from "../components/themeState";

export default function Catalog() {
  const {currentTheme, changeTheme} = useThemeState();

  return (
    <PageLayout currentTheme={currentTheme} changeTheme={changeTheme}>
      <CatalogPage currentTheme={currentTheme} />
    </PageLayout>
  );
}
