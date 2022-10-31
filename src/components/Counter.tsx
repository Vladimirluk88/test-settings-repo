import React, { useState } from "react";
import * as styles from "./Counter.module.css";

type CounterPropsType = {
  baseCount?: number;
};
const Counter: React.FC<CounterPropsType> = ({ baseCount = 0 }) => {
  const [count, setCount] = useState(baseCount);

  return (
    <>
      <div className={styles.plus} onClick={() => setCount((c) => c + 1)}>
        +
      </div>
      <div className="count">{count}</div>
      <div className="plus" onClick={() => setCount((c) => c - 1)}>
        -
      </div>
    </>
  );
};

export default React.memo(Counter);
