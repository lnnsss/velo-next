import s from "./AddPage.module.css";

export function AddPage({ currentTheme }) {
  return (
    <div className={`${s.addPage} ${currentTheme && `${s.nightTheme}`}`}>
      <div className={s.pa1}>
          <div className={s.pa1_container}>
              <h2 className={`${s.tittle} ${s.addTittle}`}>Добавьте свой релиз!</h2>
              <form action="" className={s.addForm}>
                  <div className={s.addForm_container}>
                      <label for="albumTitle" className={s.addFormLabel}>Название</label>
                      <input type="text" id="albumTitle" className={s.addFormInput} placeholder="WILD EA$T" />
                      <label for="albumDescription" className={s.addFormLabel}>Артист</label>
                      <input type="text" id="albumDescription" className={s.addFormInput} placeholder="SALUKI" />
                      <label for="albumPrice" className={s.addFormLabel}>Цена ($)</label>
                      <input type="text" id="albumPrice" className={s.addFormInput} placeholder="50" />
                      <div className={s.formLang}>
                          <span className={s.addFormLabel}>Язык</span>
                          <div className={s.langRadio}>
                              <label for="radioRu">
                                  <input type="radio" id="radioRu" name="lang" value="ru" checked />
                                  Ru
                              </label>
                              <label for="radioEn">
                                  <input type="radio" id="radioEn" name="lang" value="en" />
                                  En
                              </label>
                          </div>
                      </div>
                      <button className={s.addNewAlbumBtn} id="addNewAlbumBtn">Добавить</button>
                  </div>
              </form>            
          </div>
      </div>
    </div>
  )
}
