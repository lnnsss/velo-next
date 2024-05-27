import s from "./ReviewsPage.module.css";

export function ReviewsPage({ currentTheme }) {
  return (
    <div className={`${s.reviewsPage} ${currentTheme && `${s.nightTheme}`}`}>
    </div>
  );
}

