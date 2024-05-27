import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { AddPage } from "../components/AddPage/AddPage";
import { PageLayout } from "../components/PageLayout";

export default function Add() {
  const { currentTheme, setCurrentTheme } = useContext(AppContext);

  return (
    <PageLayout currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}>
      <AddPage currentTheme={currentTheme} />
    </PageLayout>
  );
}