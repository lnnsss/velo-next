import { CatalogLayout } from "./miniComponents/CatalogLayout";
import { CatalogHeader } from "./miniComponents/CatalogHeader";
import { Tovars } from "./miniComponents/Tovars";
import { useState } from "react";

export function CatalogPage({
  currentTheme,
  activeFilter,
  setActiveFilter,
}) {
  // Список фильров
  const [filterList, setFilterList] = useState([
    "All",
    "Ru",
    "En",
    "< 30$",
    "> 30$",
  ]);

  // Фильтр по введенным данным
  const [inputValue, setInputValue] = useState("");
  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <CatalogLayout currentTheme={currentTheme}>
      <CatalogHeader
        filterList={filterList}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        inputValue={inputValue}
        handleChangeInputValue={handleChangeInputValue}
      />
      <Tovars
        activeFilter={activeFilter}
        inputValue={inputValue}
      />
    </CatalogLayout>
  );
}
