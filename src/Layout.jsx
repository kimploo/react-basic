import { useState } from "react";
import Page1 from "./page/1-JSX-기초";
import Page2 from "./page/2-JSX-map";
import Page3 from "./page/3-useState"
import s from "./Layout.module.css";

export default function Layout() {
  const pages = [Page1, Page2, Page3];
  const [idx, setIdx] = useState(0);
  const handlePrev = () => {
    if (idx < 1) return;
    setIdx(idx - 1);
  };
  const handleNext = () => {
    if (pages.length <= idx + 1) return;
    setIdx(idx + 1);
  };

  return (
    <main className={s.mainContainer}>
      <div className={s.pageButtonContainer}>
        <button className={s.pageButton} onClick={handlePrev}>
          ←
        </button>
        <button className={s.pageButton} onClick={handleNext}>
          →
        </button>
      </div>

      <div className={s.pageContainer}>{pages.map((e) => e())[idx]}</div>
    </main>
  );
}
