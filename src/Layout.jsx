import { useState } from "react";
import Page1 from "./page/1-JSX-기초-reference";
import Page2 from "./page/2-JSX-map-reference";
import Page3 from "./page/3-useState-reference";
import Page4 from "./page/4-props-reference";
import Page5 from "./page/5-create-reference";
import Page6 from "./page/6-update-reference";
import Page7 from "./page/7-delete-reference";
import Page8 from "./page/8-lifting-state-up-reference";
import Page9 from "./page/9-useEffect-reference";
import Page10 from "./page/10-useEffect-fetch-reference";
import Page11 from "./page/11-redux-toolkit-basic-reference/main";
import s from "./Layout.module.css";

export default function Layout() {
  const pages =[ Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page9, Page8, Page10, Page11].reverse();
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
