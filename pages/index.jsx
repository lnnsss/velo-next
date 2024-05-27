import { MainPage } from "../components/MainPage/MainPage";
import { PageLayout } from "../components/PageLayout";
import { useThemeState } from "../components/themeState";

export default function HomePage() {
  const {currentTheme, changeTheme} = useThemeState();

  return (
    <PageLayout currentTheme={currentTheme} changeTheme={changeTheme}>
      <MainPage currentTheme={currentTheme} changeTheme={changeTheme} />
    </PageLayout>
  );
}


