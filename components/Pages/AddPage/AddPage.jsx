import { useState } from "react";
import s from "./AddPage.module.css";

export function AddPage({ currentTheme, finalTovarList, setFinalTovarList }) {
  const emptyFormData = {
    id: "",
    title: "",
    artist: "",
    price: "",
    lang: "Ru",
  };
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    price: "",
    lang: "Ru",
    img: [],
    withoutPage: true,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      id: finalTovarList.length + 1,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTovar = { ...formData };

    // Валидация пустых полей и цены
    let hasEmptyProperties = Object.values(newTovar).some(
      (value) => value === ""
    );
    let wrongPrice = newTovar.price < 10 || newTovar.price > 50;
    if (hasEmptyProperties) {
      alert("Все поля  должны быть заполнены!");
      return;
    } else if (wrongPrice) {
      alert("Недопустимая цена!");
      return;
    }

    setFinalTovarList((finalTovarList) => [...finalTovarList, newTovar]);
    setFormData({ ...emptyFormData });
    alert("Релиз добавлен в каталог!");
  };

  return (
    <div className={`${s.addPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
        <div className={s.pa1_container}>
          <h2 className={`${s.tittle} ${s.addTittle}`}>Добавьте свой релиз!</h2>
          <form action="" className={s.addForm} onSubmit={handleFormSubmit}>
            <div className={s.addForm_container}>
              <label htmlFor="title" className={s.addFormLabel}>
                Название
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className={s.addFormInput}
                placeholder="WILD EA$T"
                value={formData.title}
                onChange={handleInputChange}
              />
              <label htmlFor="artist" className={s.addFormLabel}>
                Артист
              </label>
              <input
                type="text"
                id="artist"
                name="artist"
                className={s.addFormInput}
                placeholder="SALUKI"
                value={formData.artist}
                onChange={handleInputChange}
              />
              <label htmlFor="price" className={s.addFormLabel}>
                Цена ($)
              </label>
              <input
                type="text"
                id="price"
                name="price"
                className={s.addFormInput}
                placeholder="50"
                value={formData.price}
                onChange={handleInputChange}
              />
              <div className={s.formLang}>
                <span className={s.addFormLabel}>Язык</span>
                <div className={s.langRadio}>
                  <label htmlFor="radioRu">
                    <input
                      type="radio"
                      id="radioRu"
                      name="lang"
                      value="Ru"
                      checked={formData.lang === "Ru"}
                      onChange={() => setFormData({ ...formData, lang: "Ru" })}
                    />
                    Ru
                  </label>
                  <label htmlFor="radioEn">
                    <input
                      type="radio"
                      id="radioEn"
                      name="lang"
                      value="En"
                      checked={formData.lang === "En"}
                      onChange={() => setFormData({ ...formData, lang: "En" })}
                    />
                    En
                  </label>
                </div>
              </div>
              <button type="submit" className={s.addNewAlbumBtn}>
                Добавить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
