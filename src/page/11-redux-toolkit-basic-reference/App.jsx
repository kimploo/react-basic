import { useDispatch, useSelector } from "react-redux";
import s from "../page.module.css";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from "./features/counter/counter.reducer";
import { useState } from "react";

// store
// createSlice
// state, reducer, async 처리

export default function App() {
  // useSelector -> Slice로 잘 짤라놓은 일부의 상태만 가져올 수 있게 하는 문법
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className={s.appContainer}>
      <div className={s.reduxContainer}>
        <div className={s.counterRow}>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <div className={s.reduxRow}>
          <input
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(e.target.value)}
          />
        </div>
        <div className={s.reduxRow}>
          <button
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
          <button
            onClick={() =>
              dispatch(incrementAsync(Number(incrementAmount) || 0))
            }
          >
            Add Async
          </button>
        </div>
      </div>
    </div>
  );
}
